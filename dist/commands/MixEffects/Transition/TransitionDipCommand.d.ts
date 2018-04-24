/// <reference types="node" />
import IAbstractCommand from '../../AbstractCommand';
import { AtemState } from '../../../lib/atemState';
export declare enum MaskFlags {
    Rate = 1,
    Input = 2,
}
export declare class TransitionDipCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    mixEffect: number;
    rate: number;
    input: number;
    flag: MaskFlags;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): {
        mixEffect: number;
        rate: number;
        input: number;
    };
    applyToState(state: AtemState): void;
}
