"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const state_1 = require("./state");
const atemSocket_1 = require("./lib/atemSocket");
const enums_1 = require("./enums");
const Commands = require("./commands");
class Atem extends events_1.EventEmitter {
    constructor(options) {
        super();
        this.DEFAULT_PORT = 9910;
        this.RECONNECT_INTERVAL = 5000;
        this.DEBUG = false;
        this.AUDIO_GAIN_RATE = 65381;
        this._sentQueue = {};
        if (options) {
            this.DEBUG = options.debug === undefined ? false : options.debug;
            this._log = options.externalLog || function (...args) {
                console.log(...args);
            };
        }
        this.state = new state_1.AtemState();
        this.socket = new atemSocket_1.AtemSocket({
            debug: this.DEBUG,
            log: this._log,
            address: (options || {}).address,
            port: (options || {}).port
        });
        this.socket.on('receivedStateChange', (command) => this._mutateState(command));
        this.socket.on('commandAcknowleged', (packetId) => this._resolveCommand(packetId));
        this.socket.on('connect', () => this.emit('connected'));
        this.socket.on('disconnect', () => this.emit('disconnected'));
    }
    connect(address, port) {
        this.socket.connect(address, port);
    }
    sendCommand(command) {
        const nextPacketId = this.socket.nextPacketId;
        const promise = new Promise((resolve, reject) => {
            command.resolve = resolve;
            command.reject = reject;
        });
        this._sentQueue[nextPacketId] = command;
        this.socket._sendCommand(command);
        return promise;
    }
    changeProgramInput(input, me = 0) {
        const command = new Commands.ProgramInputCommand();
        command.mixEffect = me;
        command.updateProps({ source: input });
        return this.sendCommand(command);
    }
    changePreviewInput(input, me = 0) {
        const command = new Commands.PreviewInputCommand();
        command.mixEffect = me;
        command.updateProps({ source: input });
        return this.sendCommand(command);
    }
    cut(me = 0) {
        const command = new Commands.CutCommand();
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    autoTransition(me = 0) {
        const command = new Commands.AutoTransitionCommand();
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    autoDownstreamKey(key = 0) {
        const command = new Commands.DownstreamKeyAutoCommand();
        command.downstreamKeyId = key;
        return this.sendCommand(command);
    }
    setDipTransitionSettings(newProps, me = 0) {
        const command = new Commands.TransitionDipCommand();
        command.mixEffect = me;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    setDVETransitionSettings(newProps, me = 1) {
        const command = new Commands.TransitionDVECommand();
        command.mixEffect = me;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    setMixTransitionSettings(newProps, me = 0) {
        const command = new Commands.TransitionMixCommand();
        command.mixEffect = me;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    setTransitionPosition(position, me = 0) {
        const command = new Commands.TransitionPositionCommand();
        command.mixEffect = me;
        command.updateProps({ handlePosition: position });
        return this.sendCommand(command);
    }
    previewTransition(on, me = 0) {
        const command = new Commands.PreviewTransitionCommand();
        command.mixEffect = me;
        command.updateProps({ preview: on });
        return this.sendCommand(command);
    }
    setTransitionStyle(newProps, me = 0) {
        const command = new Commands.TransitionPropertiesCommand();
        command.mixEffect = me;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    setStingerTransitionSettings(newProps, me = 0) {
        const command = new Commands.TransitionStingerCommand();
        command.mixEffect = me;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    setWipeTransitionSettings(newProps, me = 0) {
        const command = new Commands.TransitionWipeCommand();
        command.mixEffect = me;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    setAuxSource(source, bus = 0) {
        const command = new Commands.AuxSourceCommand();
        command.auxBus = bus;
        command.updateProps({ source });
        return this.sendCommand(command);
    }
    setDownstreamKeyTie(tie, key = 0) {
        const command = new Commands.DownstreamKeyTieCommand();
        command.downstreamKeyId = key;
        command.updateProps({ tie });
        return this.sendCommand(command);
    }
    setDownstreamKeyOnAir(onAir, key = 0) {
        const command = new Commands.DownstreamKeyOnAirCommand();
        command.downstreamKeyId = key;
        command.updateProps({ onAir });
        return this.sendCommand(command);
    }
    setDownstreamKeyCutSource(input, key = 0) {
        const command = new Commands.DownstreamKeyCutSourceCommand();
        command.downstreamKeyerId = key;
        command.updateProps({ input });
        return this.sendCommand(command);
    }
    setDownstreamKeyFillSource(input, key = 0) {
        const command = new Commands.DownstreamKeyFillSourceCommand();
        command.downstreamKeyerId = key;
        command.updateProps({ input });
        return this.sendCommand(command);
    }
    setDownstreamKeyGeneralProperties(props, key = 0) {
        const command = new Commands.DownstreamKeyGeneralCommand();
        command.downstreamKeyerId = key;
        command.updateProps(props);
        return this.sendCommand(command);
    }
    setDownstreamKeyMaskSettings(props, key = 0) {
        const command = new Commands.DownstreamKeyMaskCommand();
        command.downstreamKeyerId = key;
        command.updateProps(props);
        return this.sendCommand(command);
    }
    setDownstreamKeyRate(rate, key = 0) {
        const command = new Commands.DownstreamKeyRateCommand();
        command.downstreamKeyerId = key;
        command.updateProps({ rate });
        return this.sendCommand(command);
    }
    macroRun(index = 0) {
        const command = new Commands.MacroActionCommand();
        command.index = index;
        command.updateProps({ action: enums_1.MacroAction.Run });
        return this.sendCommand(command);
    }
    setMediaPlayerSettings(newProps, player = 0) {
        const command = new Commands.MediaPlayerStatusCommand();
        command.mediaPlayerId = player;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    setSuperSourceBoxSettings(newProps, box = 0) {
        const command = new Commands.SuperSourceBoxParametersCommand();
        command.boxId = box;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    setInputSettings(newProps, input = 0) {
        const command = new Commands.InputPropertiesCommand();
        command.inputId = input;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    setUpstreamKeyerChromaSettings(newProps, me = 0, keyer = 0) {
        const command = new Commands.MixEffectKeyChromaCommand();
        command.mixEffect = me;
        command.upstreamKeyerId = keyer;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    setUpstreamKeyerCutSource(cutSource, me = 0, keyer = 0) {
        const command = new Commands.MixEffectKeyCutSourceSetCommand();
        command.mixEffect = me;
        command.upstreamKeyerId = keyer;
        command.updateProps({ cutSource });
        return this.sendCommand(command);
    }
    setUpstreamKeyerFillSource(fillSource, me = 0, keyer = 0) {
        const command = new Commands.MixEffectKeyFillSourceSetCommand();
        command.mixEffect = me;
        command.upstreamKeyerId = keyer;
        command.updateProps({ fillSource });
        return this.sendCommand(command);
    }
    setUpstreamKeyerDVESettings(newProps, me = 0, keyer = 0) {
        const command = new Commands.MixEffectKeyDVECommand();
        command.mixEffect = me;
        command.upstreamKeyerId = keyer;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    setUpstreamKeyerLumaSettings(newProps, me = 0, keyer = 0) {
        const command = new Commands.MixEffectKeyLumaCommand();
        command.mixEffect = me;
        command.upstreamKeyerId = keyer;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    setUpstreamKeyerMaskSettings(newProps, me = 0, keyer = 0) {
        const command = new Commands.MixEffectKeyMaskSetCommand();
        command.mixEffect = me;
        command.upstreamKeyerId = keyer;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    setUpstreamKeyerPatternSettings(newProps, me = 0, keyer = 0) {
        const command = new Commands.MixEffectKeyPatternCommand();
        command.mixEffect = me;
        command.upstreamKeyerId = keyer;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    setUpstreamKeyerOnAir(onAir, me = 0, keyer = 0) {
        const command = new Commands.MixEffectKeyOnAirCommand();
        command.mixEffect = me;
        command.upstreamKeyerId = keyer;
        command.updateProps({ onAir });
        return this.sendCommand(command);
    }
    setUpstreamKeyerType(newProps, me = 0, keyer = 0) {
        const command = new Commands.MixEffectKeyTypeSetCommand();
        command.mixEffect = me;
        command.upstreamKeyerId = keyer;
        command.updateProps(newProps);
        return this.sendCommand(command);
    }
    _mutateState(command) {
        if (typeof command.applyToState === 'function') {
            command.applyToState(this.state);
            this.emit('stateChanged', this.state, command);
        }
    }
    _resolveCommand(packetId) {
        if (this._sentQueue[packetId]) {
            this._sentQueue[packetId].resolve(this._sentQueue[packetId]);
            delete this._sentQueue[packetId];
        }
    }
}
exports.Atem = Atem;
//# sourceMappingURL=atem.js.map