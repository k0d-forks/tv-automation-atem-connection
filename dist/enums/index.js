"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model;
(function (Model) {
    Model[Model["TVS"] = 1] = "TVS";
    Model[Model["OneME"] = 2] = "OneME";
    Model[Model["TwoME"] = 3] = "TwoME";
    Model[Model["PS4K"] = 4] = "PS4K";
    Model[Model["OneME4K"] = 5] = "OneME4K";
    Model[Model["TwoME4K"] = 6] = "TwoME4K";
    Model[Model["TwoMEBS4K"] = 7] = "TwoMEBS4K";
    Model[Model["TVSHD"] = 8] = "TVSHD";
})(Model = exports.Model || (exports.Model = {}));
var TransitionStyle;
(function (TransitionStyle) {
    TransitionStyle[TransitionStyle["MIX"] = 0] = "MIX";
    TransitionStyle[TransitionStyle["DIP"] = 1] = "DIP";
    TransitionStyle[TransitionStyle["WIPE"] = 2] = "WIPE";
    TransitionStyle[TransitionStyle["DVE"] = 3] = "DVE";
    TransitionStyle[TransitionStyle["STING"] = 4] = "STING";
})(TransitionStyle = exports.TransitionStyle || (exports.TransitionStyle = {}));
var TallyState;
(function (TallyState) {
    TallyState[TallyState["None"] = 0] = "None";
    TallyState[TallyState["Program"] = 1] = "Program";
    TallyState[TallyState["Preview"] = 2] = "Preview";
})(TallyState = exports.TallyState || (exports.TallyState = {}));
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["None"] = 0] = "None";
    ConnectionState[ConnectionState["SynSent"] = 1] = "SynSent";
    ConnectionState[ConnectionState["Established"] = 2] = "Established";
    ConnectionState[ConnectionState["Closed"] = 3] = "Closed";
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));
var PacketFlag;
(function (PacketFlag) {
    PacketFlag[PacketFlag["AckRequest"] = 1] = "AckRequest";
    PacketFlag[PacketFlag["Connect"] = 2] = "Connect";
    PacketFlag[PacketFlag["Repeat"] = 4] = "Repeat";
    PacketFlag[PacketFlag["Error"] = 8] = "Error";
    PacketFlag[PacketFlag["AckReply"] = 16] = "AckReply";
})(PacketFlag = exports.PacketFlag || (exports.PacketFlag = {}));
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
var MacroAction;
(function (MacroAction) {
    MacroAction[MacroAction["Run"] = 0] = "Run";
    MacroAction[MacroAction["Stop"] = 1] = "Stop";
    MacroAction[MacroAction["StopRecord"] = 2] = "StopRecord";
    MacroAction[MacroAction["InsertUserWait"] = 3] = "InsertUserWait";
    MacroAction[MacroAction["Continue"] = 4] = "Continue";
    MacroAction[MacroAction["Delete"] = 5] = "Delete";
})(MacroAction = exports.MacroAction || (exports.MacroAction = {}));
var ExternalPorts;
(function (ExternalPorts) {
    ExternalPorts[ExternalPorts["None"] = 0] = "None";
    ExternalPorts[ExternalPorts["SDI"] = 1] = "SDI";
    ExternalPorts[ExternalPorts["HDMI"] = 2] = "HDMI";
    ExternalPorts[ExternalPorts["Component"] = 4] = "Component";
    ExternalPorts[ExternalPorts["Composite"] = 8] = "Composite";
    ExternalPorts[ExternalPorts["SVideo"] = 16] = "SVideo";
    ExternalPorts[ExternalPorts["All"] = 31] = "All";
})(ExternalPorts = exports.ExternalPorts || (exports.ExternalPorts = {}));
var ExternalPortType;
(function (ExternalPortType) {
    ExternalPortType[ExternalPortType["Internal"] = 0] = "Internal";
    ExternalPortType[ExternalPortType["SDI"] = 1] = "SDI";
    ExternalPortType[ExternalPortType["HDMI"] = 2] = "HDMI";
    ExternalPortType[ExternalPortType["Composite"] = 3] = "Composite";
    ExternalPortType[ExternalPortType["Component"] = 4] = "Component";
    ExternalPortType[ExternalPortType["SVideo"] = 5] = "SVideo";
})(ExternalPortType = exports.ExternalPortType || (exports.ExternalPortType = {}));
var InternalPortType;
(function (InternalPortType) {
    InternalPortType[InternalPortType["External"] = 0] = "External";
    InternalPortType[InternalPortType["Black"] = 1] = "Black";
    InternalPortType[InternalPortType["ColorBars"] = 2] = "ColorBars";
    InternalPortType[InternalPortType["ColorGenerator"] = 3] = "ColorGenerator";
    InternalPortType[InternalPortType["MediaPlayerFill"] = 4] = "MediaPlayerFill";
    InternalPortType[InternalPortType["MediaPlayerKey"] = 5] = "MediaPlayerKey";
    InternalPortType[InternalPortType["SuperSource"] = 6] = "SuperSource";
    InternalPortType[InternalPortType["MEOutput"] = 128] = "MEOutput";
    InternalPortType[InternalPortType["Auxiliary"] = 129] = "Auxiliary";
    InternalPortType[InternalPortType["Mask"] = 130] = "Mask";
})(InternalPortType = exports.InternalPortType || (exports.InternalPortType = {}));
var SourceAvailability;
(function (SourceAvailability) {
    SourceAvailability[SourceAvailability["None"] = 0] = "None";
    SourceAvailability[SourceAvailability["Auxiliary"] = 1] = "Auxiliary";
    SourceAvailability[SourceAvailability["Multiviewer"] = 2] = "Multiviewer";
    SourceAvailability[SourceAvailability["SuperSourceArt"] = 4] = "SuperSourceArt";
    SourceAvailability[SourceAvailability["SuperSourceBox"] = 8] = "SuperSourceBox";
    SourceAvailability[SourceAvailability["KeySource"] = 16] = "KeySource";
    SourceAvailability[SourceAvailability["All"] = 31] = "All";
})(SourceAvailability = exports.SourceAvailability || (exports.SourceAvailability = {}));
var MeAvailability;
(function (MeAvailability) {
    MeAvailability[MeAvailability["None"] = 0] = "None";
    MeAvailability[MeAvailability["Me1"] = 1] = "Me1";
    MeAvailability[MeAvailability["Me2"] = 2] = "Me2";
    MeAvailability[MeAvailability["All"] = 3] = "All";
})(MeAvailability = exports.MeAvailability || (exports.MeAvailability = {}));
//# sourceMappingURL=index.js.map