"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransitionPositionCommand {
    constructor() {
        this.rawName = 'TrPs'; // this seems unnecessary.
    }
    deserialize(rawCommand) {
        this.mixEffect = rawCommand[0];
        this.inTransition = rawCommand[1] === 1;
        this.remainingFrames = rawCommand[2];
        this.handlePosition = rawCommand[4] << 8 | rawCommand[4];
    }
    serialize() {
        let rawCommand = 'CTPs';
        return new Buffer([...Buffer.from(rawCommand), this.mixEffect, 0x00, this.handlePosition >> 8, this.handlePosition & 0xff]);
    }
    getAttributes() {
        return {
            mixEffect: this.mixEffect,
            inTransition: this.inTransition,
            remainingFrames: this.remainingFrames,
            handlePosition: this.handlePosition
        };
    }
    applyToState(state) {
        let mixEffect = state.video.getMe(this.mixEffect);
        mixEffect.transitionFramesLeft = this.remainingFrames;
        mixEffect.transitionPosition = this.handlePosition;
        mixEffect.inTransition = this.inTransition;
    }
}
exports.TransitionPositionCommand = TransitionPositionCommand;
//# sourceMappingURL=TransitionPositionCommand.js.map