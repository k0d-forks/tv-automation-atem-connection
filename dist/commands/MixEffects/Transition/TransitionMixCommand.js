"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransitionMixCommand {
    constructor() {
        this.rawName = 'TMxP'; // this seems unnecessary.
    }
    deserialize(rawCommand) {
        this.mixEffect = rawCommand[0];
        this.rate = rawCommand[1];
    }
    serialize() {
        let rawCommand = 'CTMx';
        return new Buffer([...Buffer.from(rawCommand), this.mixEffect, this.rate, 0x00, 0x00]);
    }
    getAttributes() {
        return {
            mixEffect: this.mixEffect,
            rate: this.rate
        };
    }
    applyToState(state) {
        let mixEffect = state.video.getMe(this.mixEffect);
        mixEffect.transitionSettings.mix = { rate: this.rate };
    }
}
exports.TransitionMixCommand = TransitionMixCommand;
//# sourceMappingURL=TransitionMixCommand.js.map