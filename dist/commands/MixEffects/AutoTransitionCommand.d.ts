/// <reference types="node" />
import IAbstractCommand from '../AbstractCommand';
export declare class AutoTransitionCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    mixEffect: number;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): {
        mixEffect: number;
    };
    applyToState(): void;
}
