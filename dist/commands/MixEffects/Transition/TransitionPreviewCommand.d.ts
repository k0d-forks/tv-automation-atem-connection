/// <reference types="node" />
import IAbstractCommand from '../../AbstractCommand';
import { AtemState } from '../../../lib/atemState';
export declare class PreviewTransitionCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    mixEffect: number;
    preview: boolean;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): {
        mixEffect: number;
        preview: boolean;
    };
    applyToState(state: AtemState): void;
}
