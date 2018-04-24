/// <reference types="node" />
import IAbstractCommand from '../../AbstractCommand';
import { AtemState } from '../../../lib/atemState';
export declare class TransitionMixCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    mixEffect: number;
    rate: number;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): {
        mixEffect: number;
        rate: number;
    };
    applyToState(state: AtemState): void;
}
