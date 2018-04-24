"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AutoTransitionCommand {
    constructor() {
        this.rawName = 'DAut'; // this seems unnecessary.
    }
    deserialize(rawCommand) {
        this.mixEffect = rawCommand[0];
    }
    serialize() {
        let rawCommand = 'DAut';
        return new Buffer([...Buffer.from(rawCommand), this.mixEffect, 0x00, 0x00, 0x00]);
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
exports.AutoTransitionCommand = AutoTransitionCommand;
//# sourceMappingURL=AutoTransitionCommand.js.map