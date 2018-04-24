/// <reference types="node" />
import IAbstractCommand from '../AbstractCommand';
import { AtemState } from '../../lib/atemState';
export declare class DownstreamKeyStateCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    downstreamKeyId: number;
    onAir: boolean;
    inTransition: boolean;
    isAuto: boolean;
    remainingFrames: number;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): {
        downstreamKeyId: number;
        onAir: boolean;
        inTransition: boolean;
        isAuto: boolean;
        remainingFrames: number;
    };
    applyToState(state: AtemState): void;
}
