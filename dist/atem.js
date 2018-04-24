"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const atemState_1 = require("./lib/atemState");
const atemSocket_1 = require("./lib/atemSocket");
const Commands = require("./commands");
var Model;
(function (Model) {
    Model[Model["TVS"] = 1] = "TVS";
    Model[Model["OneME"] = 2] = "OneME";
    Model[Model["TwoME"] = 3] = "TwoME";
    Model[Model["PS4K"] = 4] = "PS4K";
    Model[Model["OneME4K"] = 5] = "OneME4K";
    Model[Model["TwoME4K"] = 6] = "TwoME4K";
    Model[Model["TwoMEBS4K"] = 7] = "TwoMEBS4K";
    Model[Model["TVSHD"] = 8] = "TVSHD";
})(Model = exports.Model || (exports.Model = {}));
var TransitionStyle;
(function (TransitionStyle) {
    TransitionStyle[TransitionStyle["MIX"] = 0] = "MIX";
    TransitionStyle[TransitionStyle["DIP"] = 1] = "DIP";
    TransitionStyle[TransitionStyle["WIPE"] = 2] = "WIPE";
    TransitionStyle[TransitionStyle["DVE"] = 3] = "DVE";
    TransitionStyle[TransitionStyle["STING"] = 4] = "STING";
})(TransitionStyle = exports.TransitionStyle || (exports.TransitionStyle = {}));
var TallyState;
(function (TallyState) {
    TallyState[TallyState["None"] = 0] = "None";
    TallyState[TallyState["Program"] = 1] = "Program";
    TallyState[TallyState["Preview"] = 2] = "Preview";
})(TallyState = exports.TallyState || (exports.TallyState = {}));
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
            this._log = options.externalLog || function () { return; };
        }
        this.state = new atemState_1.AtemState();
        this.socket = new atemSocket_1.AtemSocket();
        this.socket.on('receivedStateChange', (command) => this._mutateState(command));
        this.socket.on('commandAcknowleged', (packetId) => this._resolveCommand(packetId));
    }
    connect(address, port) {
        this.socket.connect(address, port);
    }
    sendCommand(command) {
        let nextPacketId = this.socket.nextPacketId;
        let promise = new Promise((resolve, reject) => {
            command.resolve = resolve;
            command.reject = reject;
        });
        this._sentQueue[nextPacketId] = command;
        this.socket._sendCommand(command);
        return promise;
    }
    changeProgramInput(input, me = 0) {
        let command = new Commands.ProgramInputCommand();
        command.mixEffect = me;
        command.source = input;
        return this.sendCommand(command);
    }
    changePreviewInput(input, me = 0) {
        let command = new Commands.PreviewInputCommand();
        command.mixEffect = me;
        command.source = input;
        return this.sendCommand(command);
    }
    cut(me = 0) {
        let command = new Commands.CutCommand();
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    autoTransition(me = 0) {
        let command = new Commands.AutoTransitionCommand();
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    autoDownstreamKey(key = 0) {
        let command = new Commands.DownstreamKeyAutoCommand();
        command.downstreamKeyId = key;
        return this.sendCommand(command);
    }
    setDipTransitionSettings(flag, rate, input, me = 0) {
        let command = new Commands.TransitionDipCommand();
        command.flag = flag;
        command.rate = rate;
        command.input = input;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setDVETransitionRate(rate, me = 1) {
        let command = new Commands.TransitionDVECommand();
        command.flags = 1 << 0;
        command.mixEffect = me;
        command.rate = rate;
        return this.sendCommand(command);
    }
    setDVETransitionLogoRate(rate, me = 1) {
        let command = new Commands.TransitionDVECommand();
        command.flags = 1 << 1;
        command.mixEffect = me;
        command.logoRate = rate;
        return this.sendCommand(command);
    }
    setDVETransitionStyle(style, me = 1) {
        let command = new Commands.TransitionDVECommand();
        command.flags = 1 << 2;
        command.mixEffect = me;
        command.style = style;
        return this.sendCommand(command);
    }
    setDVETransitionFillSource(source, me = 1) {
        let command = new Commands.TransitionDVECommand();
        command.flags = 1 << 3;
        command.mixEffect = me;
        command.fillSource = source;
        return this.sendCommand(command);
    }
    setDVETransitionKeySource(source, me = 1) {
        let command = new Commands.TransitionDVECommand();
        command.flags = 1 << 4;
        command.mixEffect = me;
        command.keySource = source;
        return this.sendCommand(command);
    }
    setDVETransitionEnableKey(enable, me = 1) {
        let command = new Commands.TransitionDVECommand();
        command.flags = 1 << 5;
        command.mixEffect = me;
        command.enableKey = enable;
        return this.sendCommand(command);
    }
    setDVETransitionPreMultiplied(premultiplied, me = 1) {
        let command = new Commands.TransitionDVECommand();
        command.flags = 1 << 6;
        command.mixEffect = me;
        command.preMultiplied = premultiplied;
        return this.sendCommand(command);
    }
    setDVETransitionClip(clip, me = 1) {
        let command = new Commands.TransitionDVECommand();
        command.flags = 1 << 7;
        command.mixEffect = me;
        command.clip = clip;
        return this.sendCommand(command);
    }
    setDVETransitionGain(gain, me = 1) {
        let command = new Commands.TransitionDVECommand();
        command.flags = 1 << 8;
        command.mixEffect = me;
        command.gain = gain;
        return this.sendCommand(command);
    }
    setDVETransitionInvertKey(invertKey, me = 1) {
        let command = new Commands.TransitionDVECommand();
        command.flags = 1 << 9;
        command.mixEffect = me;
        command.invertKey = invertKey;
        return this.sendCommand(command);
    }
    setDVETransitionReverse(reverse, me = 1) {
        let command = new Commands.TransitionDVECommand();
        command.flags = 1 << 10;
        command.mixEffect = me;
        command.reverse = reverse;
        return this.sendCommand(command);
    }
    setDVETransitionFlipFlop(flipFlop, me = 1) {
        let command = new Commands.TransitionDVECommand();
        command.flags = 1 << 11;
        command.mixEffect = me;
        command.flipFlop = flipFlop;
        return this.sendCommand(command);
    }
    setMixTransitionRate(rate, me = 0) {
        let command = new Commands.TransitionMixCommand();
        command.rate = rate;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setTransitionPosition(position, me = 0) {
        let command = new Commands.TransitionPositionCommand();
        command.handlePosition = position;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    previewTransition(on, me = 0) {
        let command = new Commands.PreviewTransitionCommand();
        command.preview = on;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setTransitionStyle(style, me = 0) {
        let command = new Commands.TransitionPropertiesCommand();
        command.style = style;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setTransitionSelection(selection, me = 0) {
        let command = new Commands.TransitionPropertiesCommand();
        command.selection = selection;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setStingerTransitionSource(source, me = 0) {
        let command = new Commands.TransitionStingerCommand();
        command.flags = command.maskFlags.Source;
        command.source = source;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setStingerTransitionPreMultipliedKey(premultiplied, me = 0) {
        let command = new Commands.TransitionStingerCommand();
        command.flags = command.maskFlags.PreMultipliedKey;
        command.preMultipliedKey = premultiplied;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setStingerTransitionClip(clip, me = 0) {
        let command = new Commands.TransitionStingerCommand();
        command.flags = command.maskFlags.Clip;
        command.clip = clip;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setStingerTransitionGain(gain, me = 0) {
        let command = new Commands.TransitionStingerCommand();
        command.flags = command.maskFlags.Gain;
        command.gain = gain;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setStingerTransitionInvert(invert, me = 0) {
        let command = new Commands.TransitionStingerCommand();
        command.flags = command.maskFlags.Invert;
        command.invert = invert;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setStingerTransitionPreroll(preroll, me = 0) {
        let command = new Commands.TransitionStingerCommand();
        command.flags = command.maskFlags.Preroll;
        command.preroll = preroll;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setStingerTransitionClipDuration(duration, me = 0) {
        let command = new Commands.TransitionStingerCommand();
        command.flags = command.maskFlags.ClipDuration;
        command.clipDuration = duration;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setStingerTransitionTriggerPoint(triggerPoint, me = 0) {
        let command = new Commands.TransitionStingerCommand();
        command.flags = command.maskFlags.TriggerPoint;
        command.triggerPoint = triggerPoint;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setStingerTransitionMixRate(mixRate, me = 0) {
        let command = new Commands.TransitionStingerCommand();
        command.flags = command.maskFlags.MixRate;
        command.mixRate = mixRate;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setWipeTransitionRate(rate, me = 0) {
        let command = new Commands.TransitionWipeCommand();
        command.flags = command.maskFlags.Rate;
        command.rate = rate;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setWipeTransitionPattern(pattern, me = 0) {
        let command = new Commands.TransitionWipeCommand();
        command.flags = command.maskFlags.Pattern;
        command.pattern = pattern;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setWipeTransitionBorderWidth(borderWidth, me = 0) {
        let command = new Commands.TransitionWipeCommand();
        command.flags = command.maskFlags.BorderWidth;
        command.borderWidth = borderWidth;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setWipeTransitionBorderInput(borderInput, me = 0) {
        let command = new Commands.TransitionWipeCommand();
        command.flags = command.maskFlags.BorderInput;
        command.borderInput = borderInput;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setWipeTransitionSymmetry(symmetry, me = 0) {
        let command = new Commands.TransitionWipeCommand();
        command.flags = command.maskFlags.Symmetry;
        command.symmetry = symmetry;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setWipeTransitionBorderSoftness(borderSoftness, me = 0) {
        let command = new Commands.TransitionWipeCommand();
        command.flags = command.maskFlags.BorderSoftness;
        command.borderSoftness = borderSoftness;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setWipeTransitionXPosition(xposition, me = 0) {
        let command = new Commands.TransitionWipeCommand();
        command.flags = command.maskFlags.XPosition;
        command.xPosition = xposition;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setWipeTransitionYPosition(yposition, me = 0) {
        let command = new Commands.TransitionWipeCommand();
        command.flags = command.maskFlags.YPosition;
        command.yPosition = yposition;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setWipeTransitionReverseDirection(reverseDirection, me = 0) {
        let command = new Commands.TransitionWipeCommand();
        command.flags = command.maskFlags.ReverseDirection;
        command.reverseDirection = reverseDirection;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setWipeTransitionFlipFlop(flipFlop, me = 0) {
        let command = new Commands.TransitionWipeCommand();
        command.flags = command.maskFlags.FlipFlop;
        command.flipFlop = flipFlop;
        command.mixEffect = me;
        return this.sendCommand(command);
    }
    setAuxSource(source, bus = 0) {
        let command = new Commands.AuxSourceCommand();
        command.auxBus = bus;
        command.source = source;
        return this.sendCommand(command);
    }
    setDownstreamKeyTie(tie, key = 0) {
        let command = new Commands.DownstreamKeyTieCommand();
        command.downstreamKeyId = key;
        command.tie = tie;
        return this.sendCommand(command);
    }
    setDownstreamKeyOnAir(onAir, key = 0) {
        let command = new Commands.DownstreamKeyOnAirCommand();
        command.downstreamKeyId = key;
        command.onair = onAir;
        return this.sendCommand(command);
    }
    macroRun(index = 0) {
        let command = new Commands.MacroActionCommand();
        command.index = index;
        command.action = command.MacroAction.Run;
        return this.sendCommand(command);
    }
    mediaPlay(playing = true, player = 0) {
        let command = new Commands.MediaPlayerStatusCommand();
        command.mediaPlayerId = player;
        command.flag = command.MaskFlags.Playing;
        command.playing = playing;
        return this.sendCommand(command);
    }
    mediaLoop(looping = true, player = 0) {
        let command = new Commands.MediaPlayerStatusCommand();
        command.mediaPlayerId = player;
        command.flag = command.MaskFlags.Loop;
        command.loop = looping;
        return this.sendCommand(command);
    }
    mediaAtBeginning(atBeginning = true, player = 0) {
        let command = new Commands.MediaPlayerStatusCommand();
        command.mediaPlayerId = player;
        command.flag = command.MaskFlags.Beginning;
        command.atBeginning = atBeginning;
        return this.sendCommand(command);
    }
    mediaClipFrame(frame, player = 0) {
        let command = new Commands.MediaPlayerStatusCommand();
        command.mediaPlayerId = player;
        command.flag = command.MaskFlags.Frame;
        command.clipFrame = frame;
        return this.sendCommand(command);
    }
    _mutateState(command) {
        command.applyToState(this.state);
        this.emit('stateChanged', this.state, command);
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