"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractCommand {
    constructor() {
        this.flag = 0;
    }
    updateProps(newProps) {
        this._updateProps(newProps);
    }
    _updateProps(newProps) {
        this.properties = Object.assign({}, this.properties, newProps);
        if (this.MaskFlags) {
            for (const key in newProps) {
                if (key in this.MaskFlags) {
                    this.flag = this.flag | this.MaskFlags[key];
                }
            }
        }
    }
}
exports.default = AbstractCommand;
//# sourceMappingURL=AbstractCommand.js.map