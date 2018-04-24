/// <reference types="node" />
import IAbstractCommand from '../AbstractCommand';
export declare class DownstreamKeyTieCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    downstreamKeyId: number;
    tie: boolean;
    deserialize(): void;
    serialize(): Buffer;
    getAttributes(): {};
    applyToState(): void;
}
