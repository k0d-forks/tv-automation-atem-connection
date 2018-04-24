"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atemUtil_1 = require("../../lib/atemUtil");
class PreviewInputCommand {
    constructor() {
        this.rawName = 'PrvI';
    }
    deserialize(rawCommand) {
        this.mixEffect = rawCommand[0];
        this.source = atemUtil_1.Util.parseNumber(rawCommand.slice(2, 4));
    }
    serialize() {
        let rawCommand = 'CPvI';
        return new Buffer([...Buffer.from(rawCommand), this.mixEffect, 0x00, this.source >> 8, this.source & 0xFF]);
    }
    getAttributes() {
        return {
            mixEffect: this.mixEffect,
            source: this.source
        };
    }
    applyToState(state) {
        let mixEffect = state.video.getMe(this.mixEffect);
        mixEffect.programInput = this.source;
    }
}
exports.PreviewInputCommand = PreviewInputCommand;
//# sourceMappingURL=PreviewInputCommand.js.map