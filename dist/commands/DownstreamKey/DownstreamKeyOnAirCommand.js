"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DownstreamKeyOnAirCommand {
    constructor() {
        this.rawName = 'CDsL'; // this seems unnecessary.
    }
    deserialize() {
        // nothing
    }
    serialize() {
        let rawCommand = 'CDsL';
        return new Buffer([...Buffer.from(rawCommand), this.downstreamKeyId, this.onair, 0x00, 0x00]);
    }
    getAttributes() {
        return {};
    }
    applyToState() {
        // nothing
    }
}
exports.DownstreamKeyOnAirCommand = DownstreamKeyOnAirCommand;
//# sourceMappingURL=DownstreamKeyOnAirCommand.js.map