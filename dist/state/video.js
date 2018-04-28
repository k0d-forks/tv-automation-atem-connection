"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AtemVideoState {
    constructor() {
        this.ME = [];
        this.downstreamKeyers = [];
        this.auxilliaries = [];
        this.superSourceBoxes = [];
    }
    getMe(index) {
        if (!this.ME[index]) {
            this.ME[index] = {
                transitionProperties: {},
                transitionSettings: {}
            };
        }
        return this.ME[index];
    }
}
exports.AtemVideoState = AtemVideoState;
//# sourceMappingURL=video.js.map