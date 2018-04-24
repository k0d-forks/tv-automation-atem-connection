"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atemUtil_1 = require("../../lib/atemUtil");
class ProgramInputCommand {
    constructor() {
        this.rawName = 'PrgI';
    }
    deserialize(rawCommand) {
        this.mixEffect = rawCommand[0];
        this.source = atemUtil_1.Util.parseNumber(rawCommand.slice(2, 4));
    }
    serialize() {
        let rawCommand = 'CPgI';
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
exports.ProgramInputCommand = ProgramInputCommand;
//# sourceMappingURL=ProgramInputCommand.js.map