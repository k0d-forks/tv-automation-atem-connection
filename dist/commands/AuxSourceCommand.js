"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atemUtil_1 = require("../lib/atemUtil");
class AuxSourceCommand {
    constructor() {
        this.rawName = 'AuxS';
    }
    deserialize(rawCommand) {
        this.auxBus = rawCommand[0];
        this.source = atemUtil_1.Util.parseNumber(rawCommand.slice(2, 4));
    }
    serialize() {
        let rawCommand = 'CAuS';
        return new Buffer([...Buffer.from(rawCommand), 0x01, this.auxBus, this.source >> 8, this.source & 0xFF]);
    }
    getAttributes() {
        return {
            auxBus: this.auxBus,
            source: this.source
        };
    }
    applyToState(state) {
        state.video.auxilliaries[this.auxBus] = this.source;
    }
}
exports.AuxSourceCommand = AuxSourceCommand;
//# sourceMappingURL=AuxSourceCommand.js.map