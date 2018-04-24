/// <reference types="node" />
import IAbstractCommand from './AbstractCommand';
import { AtemState } from '../lib/atemState';
export declare class AuxSourceCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    auxBus: number;
    source: number;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): {
        auxBus: number;
        source: number;
    };
    applyToState(state: AtemState): void;
}
