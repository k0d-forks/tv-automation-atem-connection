/// <reference types="node" />
import { EventEmitter } from 'events';
import { AtemState } from './state';
import AbstractCommand from './commands/AbstractCommand';
import { MediaPlayer } from './state/media';
import { DipTransitionSettings, DVETransitionSettings, MixTransitionSettings, StingerTransitionSettings, SuperSourceBox, TransitionProperties, WipeTransitionSettings } from './state/video';
import * as USK from './state/video/upstreamKeyers';
import { InputChannel } from './state/input';
export interface AtemOptions {
    address?: string;
    port?: number;
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
    setDipTransitionSettings(newProps: Partial<DipTransitionSettings>, me?: number): Promise<any>;
    setDVETransitionSettings(newProps: Partial<DVETransitionSettings>, me?: number): Promise<any>;
    setMixTransitionSettings(newProps: Partial<MixTransitionSettings>, me?: number): Promise<any>;
    setTransitionPosition(position: number, me?: number): Promise<any>;
    previewTransition(on: boolean, me?: number): Promise<any>;
    setTransitionStyle(newProps: Partial<TransitionProperties>, me?: number): Promise<any>;
    setStingerTransitionSettings(newProps: Partial<StingerTransitionSettings>, me?: number): Promise<any>;
    setWipeTransitionSettings(newProps: Partial<WipeTransitionSettings>, me?: number): Promise<any>;
    setAuxSource(source: number, bus?: number): Promise<any>;
    setDownstreamKeyTie(tie: boolean, key?: number): Promise<any>;
    setDownstreamKeyOnAir(onAir: boolean, key?: number): Promise<any>;
    macroRun(index?: number): Promise<any>;
    setMediaPlayerSettings(newProps: Partial<MediaPlayer>, player?: number): Promise<any>;
    setSuperSourceBoxSettings(newProps: Partial<SuperSourceBox>, box?: number): Promise<any>;
    setInputSettings(newProps: Partial<InputChannel>, input?: number): Promise<any>;
    setUpstreamKeyerChromaSettings(newProps: Partial<USK.UpstreamKeyerChromaSettings>, me?: number, keyer?: number): Promise<any>;
    setUpstreamKeyerCutSource(cutSource: number, me?: number, keyer?: number): Promise<any>;
    setUpstreamKeyerFillSource(fillSource: number, me?: number, keyer?: number): Promise<any>;
    setUpstreamKeyerDVESettings(newProps: Partial<USK.UpstreamKeyerDVESettings>, me?: number, keyer?: number): Promise<any>;
    setUpstreamKeyerLumaSettings(newProps: Partial<USK.UpstreamKeyerLumaSettings>, me?: number, keyer?: number): Promise<any>;
    setUpstreamKeyerMaskSettings(newProps: Partial<USK.UpstreamKeyerMaskSettings>, me?: number, keyer?: number): Promise<any>;
    setUpstreamKeyerPatternSettings(newProps: Partial<USK.UpstreamKeyerPatternSettings>, me?: number, keyer?: number): Promise<any>;
    setUpstreamKeyerOnAir(onAir: boolean, me?: number, keyer?: number): Promise<any>;
    setUpstreamKeyerType(newProps: Partial<USK.UpstreamKeyerTypeSettings>, me?: number, keyer?: number): Promise<any>;
    private _mutateState(command);
    private _resolveCommand(packetId);
}
