"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atemUtil_1 = require("../../lib/atemUtil");
class ProductIdentifierCommand {
    constructor() {
        this.rawName = '_pin';
    }
    deserialize(rawCommand) {
        this.deviceName = atemUtil_1.Util.parseString(rawCommand);
        this.model = rawCommand[40];
    }
    serialize() {
        let rawName = Buffer.from(this.deviceName);
        // https://github.com/LibAtem/LibAtem/blob/master/LibAtem/Commands/DeviceProfile/ProductIdentifierCommand.cs#L12
        return Buffer.from([...Buffer.from(rawName), 0x28, 0x36, 0x9B, 0x60, 0x4C, 0x08, 0x11, 0x60, 0x04, 0x3D, 0xA4, 0x60]);
    }
    getAttributes() {
        return {
            deviceName: this.deviceName,
            model: this.model
        };
    }
    applyToState(state) {
        state.info.productIdentifier = this.deviceName;
        state.info.model = this.model;
    }
}
exports.ProductIdentifierCommand = ProductIdentifierCommand;
//# sourceMappingURL=productIdentifierCommand.js.map