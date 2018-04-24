/// <reference types="node" />
import IAbstractCommand from '../../AbstractCommand';
import { AtemState, DVEEffect } from '../../../lib/atemState';
export declare class TransitionDVECommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    mixEffect: number;
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
    flags: number;
    MaskFlags: {
        Rate: number;
        LogoRate: number;
        Style: number;
        FillSource: number;
        KeySource: number;
        EnableKey: number;
        PreMultiplied: number;
        Clip: number;
        Gain: number;
        InvertKey: number;
        Reverse: number;
        FlipFlop: number;
    };
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): {
        mixEffect: number;
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
    applyToState(state: AtemState): void;
}
