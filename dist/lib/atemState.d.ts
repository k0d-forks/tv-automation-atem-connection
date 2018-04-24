import { Model, TransitionStyle } from '../atem';
export declare class AtemState {
    info: DeviceInfo;
    video: AtemVideoState;
    channels: Array<{
        name: string;
        label: string;
    }>;
    tallies: Array<number>;
    audio: AtemAudioState;
    media: MediaState;
}
export declare class DeviceInfo {
    apiVersion: ApiInfo;
    capabilities: AtemCapabilites;
    model: Model;
    productIdentifier: string;
}
export declare class ApiInfo {
    major: number;
    minor: number;
}
export declare class AtemCapabilites {
    MEs: number;
    sources: number;
    colorGenerators: number;
    auxilliaries: number;
    talkbackOutputs: number;
    mediaPlayers: number;
    serialPorts: number;
    maxHyperdecks: number;
    DVEs: number;
    stingers: number;
    superSources: number;
}
export declare class AtemVideoState {
    ME: Array<MixEffect>;
    downstreamKeyers: Array<{
        onAir: boolean;
        inTransition: boolean;
        isAuto: boolean;
        remainingFrames: number;
    }>;
    auxilliaries: Array<number>;
    getMe(index: number): MixEffect;
}
export declare class AtemAudioState {
    numberOfChannels: number;
    hasMonitor: boolean;
    channels: Array<AudioChannel>;
    master: AudioChannel;
    getMe(index: number): AudioChannel;
}
export declare class MixEffect {
    programInput: number;
    previewInput: number;
    inTransition: boolean;
    transitionPreview: boolean;
    transitionPosition: number;
    transitionFramesLeft: number;
    fadeToBlack: boolean;
    numberOfKeyers: number;
    transitionProperties: {
        style: TransitionStyle;
        selection: number;
        nextStyle: TransitionStyle;
        nextSelection: number;
    };
    transitionSettings: TransitionSettings;
}
export declare class TransitionSettings {
    dip: {
        rate: number;
        source: number;
    };
    DVE: {
        rate: number;
        logoRate: number;
        style: DVEEffect;
        fillSource: number;
        keySource: number;
        enableKey: boolean;
        preMultiplied: boolean;
        clip: number;
        gain: number;
        invertKey: boolean;
        reverse: boolean;
        flipFlop: boolean;
    };
    mix: {
        rate: number;
    };
    stinger: {
        source: number;
        preMultipliedKey: boolean;
        clip: number;
        gain: number;
        invert: boolean;
        preroll: number;
        clipDuration: number;
        triggerPoint: number;
        mixRate: number;
    };
    wipe: {
        rate: number;
        pattern: number;
        borderWidth: number;
        borderInput: number;
        symmetry: number;
        borderSoftness: number;
        xPosition: number;
        yPosition: number;
        reverseDirection: boolean;
        flipFlop: boolean;
    };
}
export declare class AudioChannel {
    on: boolean;
    afv: boolean;
    gain: number;
    rawGain: number;
    rawPan: number;
    leftLevel: number;
    rightLevel: number;
}
export declare class MediaState {
    stillPool: {};
    clipPool: {};
    players: Array<{
        playing: boolean;
        loop: boolean;
        atBeginning: boolean;
        clipFrame: number;
    }>;
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
