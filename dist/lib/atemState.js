"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AtemState {
    constructor() {
        this.info = new DeviceInfo();
        this.video = new AtemVideoState();
        this.channels = [];
        this.tallies = [];
        this.audio = new AtemAudioState();
        this.media = new MediaState();
    }
}
exports.AtemState = AtemState;
class DeviceInfo {
    constructor() {
        this.apiVersion = new ApiInfo();
        this.capabilities = new AtemCapabilites();
    }
}
exports.DeviceInfo = DeviceInfo;
class ApiInfo {
}
exports.ApiInfo = ApiInfo;
class AtemCapabilites {
}
exports.AtemCapabilites = AtemCapabilites;
class AtemVideoState {
    constructor() {
        this.ME = [];
        this.downstreamKeyers = [];
        this.auxilliaries = [];
    }
    getMe(index) {
        if (!this.ME[index]) {
            this.ME[index] = new MixEffect();
        }
        return this.ME[index];
    }
}
exports.AtemVideoState = AtemVideoState;
class AtemAudioState {
    constructor() {
        this.channels = [];
        this.master = new AudioChannel();
    }
    getMe(index) {
        if (!this.channels[index]) {
            this.channels[index] = new AudioChannel();
        }
        return this.channels[index];
    }
}
exports.AtemAudioState = AtemAudioState;
class MixEffect {
    constructor() {
        this.transitionSettings = new TransitionSettings();
    }
}
exports.MixEffect = MixEffect;
class TransitionSettings {
}
exports.TransitionSettings = TransitionSettings;
class AudioChannel {
}
exports.AudioChannel = AudioChannel;
class MediaState {
    constructor() {
        this.stillPool = {};
        this.clipPool = {};
        this.players = [];
    }
}
exports.MediaState = MediaState;
var DVEEffect;
(function (DVEEffect) {
    DVEEffect[DVEEffect["SwooshTopLeft"] = 0] = "SwooshTopLeft";
    DVEEffect[DVEEffect["SwooshTop"] = 1] = "SwooshTop";
    DVEEffect[DVEEffect["SwooshTopRight"] = 2] = "SwooshTopRight";
    DVEEffect[DVEEffect["SwooshLeft"] = 3] = "SwooshLeft";
    DVEEffect[DVEEffect["SwooshRight"] = 4] = "SwooshRight";
    DVEEffect[DVEEffect["SwooshBottomLeft"] = 5] = "SwooshBottomLeft";
    DVEEffect[DVEEffect["SwooshBottom"] = 6] = "SwooshBottom";
    DVEEffect[DVEEffect["SwooshBottomRight"] = 7] = "SwooshBottomRight";
    DVEEffect[DVEEffect["SpinCCWTopRight"] = 13] = "SpinCCWTopRight";
    DVEEffect[DVEEffect["SpinCWTopLeft"] = 8] = "SpinCWTopLeft";
    DVEEffect[DVEEffect["SpinCCWBottomRight"] = 15] = "SpinCCWBottomRight";
    DVEEffect[DVEEffect["SpinCWBottomLeft"] = 10] = "SpinCWBottomLeft";
    DVEEffect[DVEEffect["SpinCWTopRight"] = 9] = "SpinCWTopRight";
    DVEEffect[DVEEffect["SpinCCWTopLeft"] = 12] = "SpinCCWTopLeft";
    DVEEffect[DVEEffect["SpinCWBottomRight"] = 11] = "SpinCWBottomRight";
    DVEEffect[DVEEffect["SpinCCWBottomLeft"] = 14] = "SpinCCWBottomLeft";
    DVEEffect[DVEEffect["SqueezeTopLeft"] = 16] = "SqueezeTopLeft";
    DVEEffect[DVEEffect["SqueezeTop"] = 17] = "SqueezeTop";
    DVEEffect[DVEEffect["SqueezeTopRight"] = 18] = "SqueezeTopRight";
    DVEEffect[DVEEffect["SqueezeLeft"] = 19] = "SqueezeLeft";
    DVEEffect[DVEEffect["SqueezeRight"] = 20] = "SqueezeRight";
    DVEEffect[DVEEffect["SqueezeBottomLeft"] = 21] = "SqueezeBottomLeft";
    DVEEffect[DVEEffect["SqueezeBottom"] = 22] = "SqueezeBottom";
    DVEEffect[DVEEffect["SqueezeBottomRight"] = 23] = "SqueezeBottomRight";
    DVEEffect[DVEEffect["PushTopLeft"] = 24] = "PushTopLeft";
    DVEEffect[DVEEffect["PushTop"] = 25] = "PushTop";
    DVEEffect[DVEEffect["PushTopRight"] = 26] = "PushTopRight";
    DVEEffect[DVEEffect["PushLeft"] = 27] = "PushLeft";
    DVEEffect[DVEEffect["PushRight"] = 28] = "PushRight";
    DVEEffect[DVEEffect["PushBottomLeft"] = 29] = "PushBottomLeft";
    DVEEffect[DVEEffect["PushBottom"] = 30] = "PushBottom";
    DVEEffect[DVEEffect["PushBottomRight"] = 31] = "PushBottomRight";
    DVEEffect[DVEEffect["GraphicCWSpin"] = 32] = "GraphicCWSpin";
    DVEEffect[DVEEffect["GraphicCCWSpin"] = 33] = "GraphicCCWSpin";
    DVEEffect[DVEEffect["GraphicLogoWipe"] = 34] = "GraphicLogoWipe";
})(DVEEffect = exports.DVEEffect || (exports.DVEEffect = {}));
//# sourceMappingURL=atemState.js.map