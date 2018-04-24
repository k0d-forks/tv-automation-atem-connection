"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Util } from '../../../lib/atemUtil'
var MaskFlags;
(function (MaskFlags) {
    MaskFlags[MaskFlags["Rate"] = 1] = "Rate";
    MaskFlags[MaskFlags["Input"] = 2] = "Input";
})(MaskFlags = exports.MaskFlags || (exports.MaskFlags = {}));
class TransitionDipCommand {
    constructor() {
        this.rawName = 'TDpP';
    }
    deserialize(rawCommand) {
        this.mixEffect = rawCommand[0];
        this.rate = rawCommand[1];
        this.input = rawCommand[2] << 8 | (rawCommand[3] & 0xFF);
    }
    serialize() {
        let rawCommand = 'CTDp';
        return new Buffer([
            ...Buffer.from(rawCommand),
            this.flag,
            this.mixEffect,
            this.rate,
            0x00,
            this.input >> 8,
            this.input & 0xFF,
            0x00,
            0x00
        ]);
    }
    getAttributes() {
        return {
            mixEffect: this.mixEffect,
            rate: this.rate,
            input: this.input
        };
    }
    applyToState(state) {
        let mixEffect = state.video.getMe(this.mixEffect);
        mixEffect.transitionSettings.dip = {
            source: this.input,
            rate: this.rate
        };
    }
}
exports.TransitionDipCommand = TransitionDipCommand;
//# sourceMappingURL=TransitionDipCommand.js.map