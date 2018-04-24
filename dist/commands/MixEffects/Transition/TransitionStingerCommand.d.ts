/// <reference types="node" />
import IAbstractCommand from '../../AbstractCommand';
import { AtemState } from '../../../lib/atemState';
export declare class TransitionStingerCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    mixEffect: number;
    flags: number;
    source: number;
    preMultipliedKey: boolean;
    clip: number;
    gain: number;
    invert: boolean;
    preroll: number;
    clipDuration: number;
    triggerPoint: number;
    mixRate: number;
    maskFlags: {
        Source: number;
        PreMultipliedKey: number;
        Clip: number;
        Gain: number;
        Invert: number;
        Preroll: number;
        ClipDuration: number;
        TriggerPoint: number;
        MixRate: number;
    };
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): {
        mixEffect: number;
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
    applyToState(state: AtemState): void;
}
