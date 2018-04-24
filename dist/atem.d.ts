/// <reference types="node" />
import { EventEmitter } from 'events';
import { AtemState, DVEEffect } from './lib/atemState';
import AbstractCommand from './commands/AbstractCommand';
import * as Commands from './commands';
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
export interface AtemOptions {
    localPort?: number;
    debug?: boolean;
    externalLog?: (arg0?: any, arg1?: any, arg2?: any, arg3?: any) => void;
}
export declare class Atem extends EventEmitter {
    DEFAULT_PORT: number;
    RECONNECT_INTERVAL: number;
    DEBUG: boolean;
    AUDIO_GAIN_RATE: number;
    event: EventEmitter;
    state: AtemState;
    private socket;
    private _log;
    private _sentQueue;
    constructor(options?: AtemOptions);
    connect(address: string, port?: number): void;
    sendCommand(command: AbstractCommand): Promise<any>;
    changeProgramInput(input: number, me?: number): Promise<any>;
    changePreviewInput(input: number, me?: number): Promise<any>;
    cut(me?: number): Promise<any>;
    autoTransition(me?: number): Promise<any>;
    autoDownstreamKey(key?: number): Promise<any>;
    setDipTransitionSettings(flag: Commands.MaskFlags, rate: number, input: number, me?: number): Promise<any>;
    setDVETransitionRate(rate: number, me?: number): Promise<any>;
    setDVETransitionLogoRate(rate: number, me?: number): Promise<any>;
    setDVETransitionStyle(style: DVEEffect, me?: number): Promise<any>;
    setDVETransitionFillSource(source: number, me?: number): Promise<any>;
    setDVETransitionKeySource(source: number, me?: number): Promise<any>;
    setDVETransitionEnableKey(enable: boolean, me?: number): Promise<any>;
    setDVETransitionPreMultiplied(premultiplied: boolean, me?: number): Promise<any>;
    setDVETransitionClip(clip: number, me?: number): Promise<any>;
    setDVETransitionGain(gain: number, me?: number): Promise<any>;
    setDVETransitionInvertKey(invertKey: boolean, me?: number): Promise<any>;
    setDVETransitionReverse(reverse: boolean, me?: number): Promise<any>;
    setDVETransitionFlipFlop(flipFlop: boolean, me?: number): Promise<any>;
    setMixTransitionRate(rate: number, me?: number): Promise<any>;
    setTransitionPosition(position: number, me?: number): Promise<any>;
    previewTransition(on: boolean, me?: number): Promise<any>;
    setTransitionStyle(style: TransitionStyle, me?: number): Promise<any>;
    setTransitionSelection(selection: number, me?: number): Promise<any>;
    setStingerTransitionSource(source: number, me?: number): Promise<any>;
    setStingerTransitionPreMultipliedKey(premultiplied: boolean, me?: number): Promise<any>;
    setStingerTransitionClip(clip: number, me?: number): Promise<any>;
    setStingerTransitionGain(gain: number, me?: number): Promise<any>;
    setStingerTransitionInvert(invert: boolean, me?: number): Promise<any>;
    setStingerTransitionPreroll(preroll: number, me?: number): Promise<any>;
    setStingerTransitionClipDuration(duration: number, me?: number): Promise<any>;
    setStingerTransitionTriggerPoint(triggerPoint: number, me?: number): Promise<any>;
    setStingerTransitionMixRate(mixRate: number, me?: number): Promise<any>;
    setWipeTransitionRate(rate: number, me?: number): Promise<any>;
    setWipeTransitionPattern(pattern: number, me?: number): Promise<any>;
    setWipeTransitionBorderWidth(borderWidth: number, me?: number): Promise<any>;
    setWipeTransitionBorderInput(borderInput: number, me?: number): Promise<any>;
    setWipeTransitionSymmetry(symmetry: number, me?: number): Promise<any>;
    setWipeTransitionBorderSoftness(borderSoftness: number, me?: number): Promise<any>;
    setWipeTransitionXPosition(xposition: number, me?: number): Promise<any>;
    setWipeTransitionYPosition(yposition: number, me?: number): Promise<any>;
    setWipeTransitionReverseDirection(reverseDirection: boolean, me?: number): Promise<any>;
    setWipeTransitionFlipFlop(flipFlop: boolean, me?: number): Promise<any>;
    setAuxSource(source: number, bus?: number): Promise<any>;
    setDownstreamKeyTie(tie: boolean, key?: number): Promise<any>;
    setDownstreamKeyOnAir(onAir: boolean, key?: number): Promise<any>;
    macroRun(index?: number): Promise<any>;
    mediaPlay(playing?: boolean, player?: number): Promise<any>;
    mediaLoop(looping?: boolean, player?: number): Promise<any>;
    mediaAtBeginning(atBeginning?: boolean, player?: number): Promise<any>;
    mediaClipFrame(frame: number, player?: number): Promise<any>;
    private _mutateState(command);
    private _resolveCommand(packetId);
}
