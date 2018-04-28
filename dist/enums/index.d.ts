export declare enum Model {
    TVS = 1,
    OneME = 2,
    TwoME = 3,
    PS4K = 4,
    OneME4K = 5,
    TwoME4K = 6,
    TwoMEBS4K = 7,
    TVSHD = 8,
}
export declare enum TransitionStyle {
    MIX = 0,
    DIP = 1,
    WIPE = 2,
    DVE = 3,
    STING = 4,
}
export declare enum TallyState {
    None = 0,
    Program = 1,
    Preview = 2,
}
export declare enum ConnectionState {
    None = 0,
    SynSent = 1,
    Established = 2,
    Closed = 3,
}
export declare enum PacketFlag {
    AckRequest = 1,
    Connect = 2,
    Repeat = 4,
    Error = 8,
    AckReply = 16,
}
export declare enum DVEEffect {
    SwooshTopLeft = 0,
    SwooshTop = 1,
    SwooshTopRight = 2,
    SwooshLeft = 3,
    SwooshRight = 4,
    SwooshBottomLeft = 5,
    SwooshBottom = 6,
    SwooshBottomRight = 7,
    SpinCCWTopRight = 13,
    SpinCWTopLeft = 8,
    SpinCCWBottomRight = 15,
    SpinCWBottomLeft = 10,
    SpinCWTopRight = 9,
    SpinCCWTopLeft = 12,
    SpinCWBottomRight = 11,
    SpinCCWBottomLeft = 14,
    SqueezeTopLeft = 16,
    SqueezeTop = 17,
    SqueezeTopRight = 18,
    SqueezeLeft = 19,
    SqueezeRight = 20,
    SqueezeBottomLeft = 21,
    SqueezeBottom = 22,
    SqueezeBottomRight = 23,
    PushTopLeft = 24,
    PushTop = 25,
    PushTopRight = 26,
    PushLeft = 27,
    PushRight = 28,
    PushBottomLeft = 29,
    PushBottom = 30,
    PushBottomRight = 31,
    GraphicCWSpin = 32,
    GraphicCCWSpin = 33,
    GraphicLogoWipe = 34,
}
export declare enum MacroAction {
    Run = 0,
    Stop = 1,
    StopRecord = 2,
    InsertUserWait = 3,
    Continue = 4,
    Delete = 5,
}
export declare enum ExternalPorts {
    None = 0,
    SDI = 1,
    HDMI = 2,
    Component = 4,
    Composite = 8,
    SVideo = 16,
    All = 31,
}
export declare enum ExternalPortType {
    Internal = 0,
    SDI = 1,
    HDMI = 2,
    Composite = 3,
    Component = 4,
    SVideo = 5,
}
export declare enum InternalPortType {
    External = 0,
    Black = 1,
    ColorBars = 2,
    ColorGenerator = 3,
    MediaPlayerFill = 4,
    MediaPlayerKey = 5,
    SuperSource = 6,
    MEOutput = 128,
    Auxiliary = 129,
    Mask = 130,
}
export declare enum SourceAvailability {
    None = 0,
    Auxiliary = 1,
    Multiviewer = 2,
    SuperSourceArt = 4,
    SuperSourceBox = 8,
    KeySource = 16,
    All = 31,
}
export declare enum MeAvailability {
    None = 0,
    Me1 = 1,
    Me2 = 2,
    All = 3,
}
