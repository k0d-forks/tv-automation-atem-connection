"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MixEffect {
    constructor(index) {
        this.transitionProperties = {};
        this.transitionSettings = {};
        this.upstreamKeyers = [];
        this.index = index;
    }
    getUpstreamKeyer(index) {
        if (!this.upstreamKeyers[index]) {
            this.upstreamKeyers[index] = {
                dveSettings: {},
                chromaSettings: {},
                lumaSettings: {},
                patternSettings: {},
                flyKeyframes: [],
                flyProperties: {}
            };
        }
        return this.upstreamKeyers[index];
    }
}
exports.MixEffect = MixEffect;
class AtemVideoState {
    constructor() {
        this.ME = [];
        this.downstreamKeyers = [];
        this.auxilliaries = [];
        this.superSourceBoxes = [];
    }
    getMe(index) {
        if (!this.ME[index]) {
            this.ME[index] = new MixEffect(index);
        }
        return this.ME[index];
    }
}
exports.AtemVideoState = AtemVideoState;
//# sourceMappingURL=index.js.map