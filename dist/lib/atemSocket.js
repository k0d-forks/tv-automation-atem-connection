"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dgram_1 = require("dgram");
const events_1 = require("events");
const atemUtil_1 = require("./atemUtil");
const atemCommandParser_1 = require("./atemCommandParser");
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["None"] = 0] = "None";
    ConnectionState[ConnectionState["SynSent"] = 1] = "SynSent";
    ConnectionState[ConnectionState["Established"] = 2] = "Established";
    ConnectionState[ConnectionState["Closed"] = 3] = "Closed";
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));
var PacketFlag;
(function (PacketFlag) {
    PacketFlag[PacketFlag["AckRequest"] = 1] = "AckRequest";
    PacketFlag[PacketFlag["Connect"] = 2] = "Connect";
    PacketFlag[PacketFlag["Repeat"] = 4] = "Repeat";
    PacketFlag[PacketFlag["Error"] = 8] = "Error";
    PacketFlag[PacketFlag["AckReply"] = 16] = "AckReply";
})(PacketFlag = exports.PacketFlag || (exports.PacketFlag = {}));
class AtemSocket extends events_1.EventEmitter {
    constructor(address, port) {
        super();
        this._connectionState = ConnectionState.Closed;
        this._localPacketId = 0;
        this._maxPacketID = 1 << 15; // Atem expects 15 not 16 bits before wrapping
        this._port = 9910;
        this._reconnectInterval = 5000;
        this._inFlightTimeout = 200;
        this._maxRetries = 5;
        this._lastReceivedAt = Date.now();
        this._inFlight = [];
        this._commandParser = new atemCommandParser_1.CommandParser();
        this._address = address || this._address;
        this._port = port || this._port;
        this._socket = dgram_1.createSocket('udp4');
        this._socket.bind(1024 + Math.floor(Math.random() * 64511));
        this._socket.on('message', (packet, rinfo) => this._receivePacket(packet, rinfo));
        setInterval(() => {
            if (this._lastReceivedAt + this._reconnectInterval > Date.now())
                return;
            if (this._connectionState === ConnectionState.Established) {
                this._connectionState = ConnectionState.Closed;
                this.emit('disconnect', null, null);
            }
            this._localPacketId = 1;
            this._sessionId = 0;
            this.log('reconnect');
            this.connect(this._address, this._port);
        }, this._reconnectInterval);
        setInterval(() => this._checkForRetransmit(), 50);
    }
    connect(address, port) {
        if (address) {
            this._address = address;
        }
        if (port) {
            this._port = port;
        }
        this._sendPacket(atemUtil_1.Util.COMMAND_CONNECT_HELLO);
        this._connectionState = ConnectionState.SynSent;
    }
    log(args1, args2, args3) {
        // fallback, should be remapped by Atem class
        console.log(args1, args2, args3);
    }
    get nextPacketId() {
        return this._localPacketId;
    }
    _sendCommand(command) {
        let payload = command.serialize();
        this.log(payload);
        let buffer = new Buffer(16 + payload.length);
        buffer.fill(0);
        buffer[0] = (16 + payload.length) / 256 | 0x08;
        buffer[1] = (16 + payload.length) % 256;
        buffer[2] = this._sessionId >> 8;
        buffer[3] = this._sessionId & 0xff;
        buffer[10] = this._localPacketId / 256;
        buffer[11] = this._localPacketId % 256;
        buffer[12] = (4 + payload.length) / 256;
        buffer[13] = (4 + payload.length) % 256;
        payload.copy(buffer, 16);
        this._sendPacket(buffer);
        this._inFlight.push({ packetId: this._localPacketId, lastSent: Date.now(), packet: buffer, resent: 0 });
        this._localPacketId++;
        if (this._maxPacketID < this._localPacketId)
            this._localPacketId = 0;
    }
    _receivePacket(packet, rinfo) {
        this.log('RECV ', packet);
        this._lastReceivedAt = Date.now();
        let length = ((packet[0] & 0x07) << 8) | packet[1];
        if (length !== rinfo.size)
            return;
        let flags = packet[0] >> 3;
        // this._sessionId = [packet[2], packet[3]]
        this._sessionId = packet[2] << 8 | packet[3];
        let remotePacketId = packet[10] << 8 | packet[11];
        // Send hello answer packet when receive connect flags
        if (flags & PacketFlag.Connect && !(flags & PacketFlag.Repeat)) {
            this._sendPacket(atemUtil_1.Util.COMMAND_CONNECT_HELLO_ANSWER);
        }
        // Parse commands, Emit 'stateChanged' event after parse
        if (flags & PacketFlag.AckRequest && length > 12) {
            this._parseCommand(packet.slice(12), remotePacketId);
        }
        // Send ping packet, Emit 'connect' event after receive all stats
        if (flags & PacketFlag.AckRequest && length === 12 && this._connectionState === ConnectionState.SynSent) {
            this._connectionState = ConnectionState.Established;
            this.emit('connect');
        }
        // Send ack packet (called by answer packet in Skaarhoj)
        if (flags & PacketFlag.AckRequest && this._connectionState === ConnectionState.Established) {
            this._sendAck(remotePacketId);
            this.emit('ping');
        }
        // Device ack'ed our command
        if (flags & PacketFlag.AckReply && this._connectionState === ConnectionState.Established) {
            let ackPacketId = packet[4] << 8 | packet[5];
            for (let i in this._inFlight) {
                if (ackPacketId >= this._inFlight[i].packetId) {
                    this.emit('commandAcknowleged', this._inFlight[i].packetId);
                    delete this._inFlight[i];
                }
            }
        }
    }
    _parseCommand(buffer, packetId) {
        let length = atemUtil_1.Util.parseNumber(buffer.slice(0, 2));
        let name = atemUtil_1.Util.parseString(buffer.slice(4, 8));
        // this.log('COMMAND', `${name}(${length})`, buffer.slice(0, length))
        let cmd = this._commandParser.commandFromRawName(name);
        if (cmd) {
            cmd.deserialize(buffer.slice(0, length).slice(8));
            cmd.packetId = packetId || -1;
            this.emit('receivedStateChange', cmd);
        }
        if (buffer.length > length) {
            this._parseCommand(buffer.slice(length), packetId);
        }
    }
    _sendPacket(packet) {
        this.log('SEND ', packet);
        this._socket.send(packet, 0, packet.length, this._port, this._address);
    }
    _sendAck(packetId) {
        let buffer = new Buffer(12);
        buffer.fill(0);
        buffer[0] = 0x80;
        buffer[1] = 0x0C;
        buffer[2] = this._sessionId >> 8;
        buffer[3] = this._sessionId & 0xFF;
        buffer[4] = packetId >> 8;
        buffer[5] = packetId & 0xFF;
        buffer[9] = 0x41;
        this._sendPacket(buffer);
    }
    _checkForRetransmit() {
        for (let sentPacket of this._inFlight) {
            if (sentPacket && sentPacket.lastSent + this._inFlightTimeout < Date.now()) {
                if (sentPacket.resent <= this._maxRetries) {
                    sentPacket.lastSent = Date.now();
                    sentPacket.resent++;
                    this.log('resend ', sentPacket);
                    this._sendPacket(sentPacket.packet);
                }
                else {
                    this._inFlight.splice(this._inFlight.indexOf(sentPacket), 1);
                    this.log('canceled ', sentPacket.packet);
                    // @todo: we should probably break up the connection here.
                }
            }
        }
    }
}
exports.AtemSocket = AtemSocket;
//# sourceMappingURL=atemSocket.js.map