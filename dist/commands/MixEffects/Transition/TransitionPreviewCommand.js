"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PreviewTransitionCommand {
    constructor() {
        this.rawName = 'TrPr'; // this seems unnecessary.
    }
    deserialize(rawCommand) {
        this.mixEffect = rawCommand[0];
        this.preview = rawCommand[1] === 1;
    }
    serialize() {
        let rawCommand = 'CTPr';
        return new Buffer([...Buffer.from(rawCommand), this.mixEffect, this.preview, 0x00, 0x00]);
    }
    getAttributes() {
        return {
            mixEffect: this.mixEffect,
            preview: this.preview
        };
    }
    applyToState(state) {
        let mixEffect = state.video.getMe(this.mixEffect);
        mixEffect.transitionPreview = this.preview;
    }
}
exports.PreviewTransitionCommand = PreviewTransitionCommand;
//# sourceMappingURL=TransitionPreviewCommand.js.map