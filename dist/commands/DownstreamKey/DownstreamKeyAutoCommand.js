"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DownstreamKeyAutoCommand {
    constructor() {
        this.rawName = 'DDsA'; // this seems unnecessary.
    }
    deserialize() {
        // nothing
    }
    serialize() {
        let rawCommand = 'DDsA';
        return new Buffer([...Buffer.from(rawCommand), this.downstreamKeyId, 0x00, 0x00, 0x00]);
    }
    getAttributes() {
        return {};
    }
    applyToState() {
        // nothing
    }
}
exports.DownstreamKeyAutoCommand = DownstreamKeyAutoCommand;
//# sourceMappingURL=DownstreamKeyAutoCommand.js.map