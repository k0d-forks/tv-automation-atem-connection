"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommand_1 = require("../AbstractCommand");
class ProductIdentifierCommand extends AbstractCommand_1.default {
    constructor() {
        super(...arguments);
        this.rawName = '_pin';
    }
    deserialize(rawCommand) {
        this.properties = {
            deviceName: rawCommand.toString('ascii'),
            model: rawCommand[40]
        };
    }
    serialize() {
        const rawName = Buffer.from(this.properties.deviceName);
        // https://github.com/LibAtem/LibAtem/blob/master/LibAtem/Commands/DeviceProfile/ProductIdentifierCommand.cs#L12
        return Buffer.from([
            ...Buffer.from(rawName),
            0x28, 0x36, 0x9B, 0x60,
            0x4C, 0x08, 0x11, 0x60,
            0x04, 0x3D, 0xA4, 0x60
        ]);
    }
    applyToState(state) {
        state.info.productIdentifier = this.properties.deviceName;
        state.info.model = this.properties.model;
    }
}
exports.ProductIdentifierCommand = ProductIdentifierCommand;
//# sourceMappingURL=productIdentifierCommand.js.map