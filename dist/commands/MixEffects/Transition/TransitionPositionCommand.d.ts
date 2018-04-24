/// <reference types="node" />
import IAbstractCommand from '../../AbstractCommand';
import { AtemState } from '../../../lib/atemState';
export declare class TransitionPositionCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    mixEffect: number;
    inTransition: boolean;
    remainingFrames: number;
    handlePosition: number;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): {
        mixEffect: number;
        inTransition: boolean;
        remainingFrames: number;
        handlePosition: number;
    };
    applyToState(state: AtemState): void;
}
