"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransitionPropertiesCommand {
    constructor() {
        this.rawName = 'TrSS';
        this.MaskFlags = {
            style: 1 << 0,
            selection: 1 << 1
        };
    }
    deserialize(rawCommand) {
        this.mixEffect = rawCommand[0];
        this.style = rawCommand[1];
        this.selection = rawCommand[2];
        this.nextStyle = rawCommand[3];
        this.nextSelection = rawCommand[4];
    }
    serialize() {
        let rawCommand = 'CTTp';
        let buffer = new Buffer(8);
        buffer.fill(0);
        Buffer.from(rawCommand).copy(buffer, 0);
        buffer.writeUInt8(this.flags, 4);
        buffer.writeUInt8(this.mixEffect, 5);
        buffer.writeUInt8(this.style, 6);
        buffer.writeUInt8(this.selection, 7);
        return buffer;
    }
    getAttributes() {
        return {
            mixEffect: this.mixEffect,
            style: this.style,
            selection: this.selection,
            nextStyle: this.nextStyle,
            nextSelection: this.nextSelection
        };
    }
    applyToState(state) {
        let mixEffect = state.video.getMe(this.mixEffect);
        let props = this.getAttributes();
        delete props.mixEffect;
        mixEffect.transitionProperties = props;
    }
}
exports.TransitionPropertiesCommand = TransitionPropertiesCommand;
//# sourceMappingURL=TransitionPropertiesCommand.js.map