"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VersionCommand {
    constructor() {
        this.rawName = '_ver';
    }
    deserialize(rawCommand) {
        this.apiMajor = rawCommand[1];
        this.apiMinor = rawCommand[3];
    }
    serialize() {
        return new Buffer(0);
    }
    getAttributes() {
        return {
            major: this.apiMajor,
            minor: this.apiMinor
        };
    }
    applyToState(state) {
        state.info.apiVersion.major = this.apiMajor;
        state.info.apiVersion.minor = this.apiMinor;
    }
}
exports.VersionCommand = VersionCommand;
//# sourceMappingURL=versionCommand.js.map