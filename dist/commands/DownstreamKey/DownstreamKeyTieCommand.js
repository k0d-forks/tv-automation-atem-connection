"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DownstreamKeyTieCommand {
    constructor() {
        this.rawName = 'CDsT'; // this seems unnecessary.
    }
    deserialize() {
        // nothing
    }
    serialize() {
        let rawCommand = 'CDsT';
        return new Buffer([...Buffer.from(rawCommand), this.downstreamKeyId, this.tie, 0x00, 0x00]);
    }
    getAttributes() {
        return {};
    }
    applyToState() {
        // nothing
    }
}
exports.DownstreamKeyTieCommand = DownstreamKeyTieCommand;
//# sourceMappingURL=DownstreamKeyTieCommand.js.map