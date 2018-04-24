/// <reference types="node" />
import IAbstractCommand from '../AbstractCommand';
import { AtemState } from '../../lib/atemState';
export declare class PreviewInputCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    source: number;
    mixEffect: number;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): {
        mixEffect: number;
        source: number;
    };
    applyToState(state: AtemState): void;
}
