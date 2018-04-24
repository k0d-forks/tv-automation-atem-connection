/// <reference types="node" />
import IAbstractCommand from '../AbstractCommand';
export declare class DownstreamKeyAutoCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    downstreamKeyId: number;
    deserialize(): void;
    serialize(): Buffer;
    getAttributes(): {};
    applyToState(): void;
}
