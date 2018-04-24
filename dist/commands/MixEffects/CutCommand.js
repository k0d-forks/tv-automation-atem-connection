"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CutCommand {
    constructor() {
        this.rawName = 'DCut'; // this seems unnecessary.
    }
    deserialize(rawCommand) {
        this.mixEffect = rawCommand[0];
    }
    serialize() {
        let rawCommand = 'DCut';
        return new Buffer([...Buffer.from(rawCommand), this.mixEffect, 0xef, 0xbf, 0x5f]);
    }
    getAttributes() {
        return {
            mixEffect: this.mixEffect
        };
    }
    applyToState() {
        // nothing
    }
}
exports.CutCommand = CutCommand;
//# sourceMappingURL=CutCommand.js.map