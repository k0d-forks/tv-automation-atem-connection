"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransitionStingerCommand {
    constructor() {
        this.rawName = 'TStP';
        this.maskFlags = {
            Source: 1 << 0,
            PreMultipliedKey: 1 << 1,
            Clip: 1 << 2,
            Gain: 1 << 3,
            Invert: 1 << 4,
            Preroll: 1 << 5,
            ClipDuration: 1 << 6,
            TriggerPoint: 1 << 7,
            MixRate: 1 << 8
        };
    }
    deserialize(rawCommand) {
        this.mixEffect = rawCommand[0];
        this.source = rawCommand[1];
        this.preMultipliedKey = rawCommand[2] === 1;
        this.clip = rawCommand[4] << 8 | rawCommand[5];
        this.gain = rawCommand[6] << 8 | rawCommand[7];
        this.invert = rawCommand[8] === 1;
        this.preroll = rawCommand[10] << 8 | rawCommand[11];
        this.clipDuration = rawCommand[12] << 8 | rawCommand[13];
        this.triggerPoint = rawCommand[14] << 8 | rawCommand[15];
        this.mixRate = rawCommand[16] << 8 | rawCommand[17];
    }
    serialize() {
        let rawCommand = 'CTSt';
        let buffer = new Buffer(24);
        buffer.fill(0);
        Buffer.from(rawCommand).copy(buffer, 0);
        buffer.writeUInt16BE(this.flags, 4);
        buffer.writeUInt8(this.mixEffect, 6);
        buffer.writeUInt8(this.source, 7);
        buffer.writeUInt8(this.preMultipliedKey ? 1 : 0, 8);
        buffer.writeUInt16BE(this.clip, 10);
        buffer.writeUInt16BE(this.gain, 12);
        buffer.writeUInt8(this.invert ? 1 : 0, 14);
        buffer.writeUInt16BE(this.preroll, 16);
        buffer.writeUInt16BE(this.clipDuration, 18);
        buffer.writeUInt16BE(this.triggerPoint, 20);
        buffer.writeUInt16BE(this.mixRate, 22);
        return buffer;
    }
    getAttributes() {
        return {
            mixEffect: this.mixEffect,
            source: this.source,
            preMultipliedKey: this.preMultipliedKey,
            clip: this.clip,
            gain: this.gain,
            invert: this.invert,
            preroll: this.preroll,
            clipDuration: this.clipDuration,
            triggerPoint: this.triggerPoint,
            mixRate: this.mixRate
        };
    }
    applyToState(state) {
        let mixEffect = state.video.getMe(this.mixEffect);
        let props = this.getAttributes();
        delete props.mixEffect;
        mixEffect.transitionSettings.stinger = props;
    }
}
exports.TransitionStingerCommand = TransitionStingerCommand;
//# sourceMappingURL=TransitionStingerCommand.js.map