/// <reference types="node" />
import { EventEmitter } from 'events';
import AbstractCommand from '../commands/AbstractCommand';
export declare enum ConnectionState {
    None = 0,
    SynSent = 1,
    Established = 2,
    Closed = 3,
}
export declare enum PacketFlag {
    AckRequest = 1,
    Connect = 2,
    Repeat = 4,
    Error = 8,
    AckReply = 16,
}
export declare class AtemSocket extends EventEmitter {
    private _connectionState;
    private _localPacketId;
    private _maxPacketID;
    private _sessionId;
    private _address;
    private _port;
    private _socket;
    private _reconnectInterval;
    private _inFlightTimeout;
    private _maxRetries;
    private _lastReceivedAt;
    private _inFlight;
    private _commandParser;
    constructor(address?: string, port?: number);
    connect(address?: string, port?: number): void;
    log(args1: any, args2?: any, args3?: any): void;
    readonly nextPacketId: number;
    _sendCommand(command: AbstractCommand): void;
    private _receivePacket(packet, rinfo);
    private _parseCommand(buffer, packetId?);
    private _sendPacket(packet);
    private _sendAck(packetId);
    private _checkForRetransmit();
}
