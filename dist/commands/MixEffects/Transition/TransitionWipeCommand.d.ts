/// <reference types="node" />
import IAbstractCommand from '../../AbstractCommand';
import { AtemState } from '../../../lib/atemState';
export declare class TransitionWipeCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    mixEffect: number;
    flags: number;
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
    maskFlags: {
        Rate: number;
        Pattern: number;
        BorderWidth: number;
        BorderInput: number;
        Symmetry: number;
        BorderSoftness: number;
        XPosition: number;
        YPosition: number;
        ReverseDirection: number;
        FlipFlop: number;
    };
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): {
        mixEffect: number;
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
    applyToState(state: AtemState): void;
}
