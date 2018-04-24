/// <reference types="node" />
import IAbstractCommand from '../AbstractCommand';
export declare class DownstreamKeyOnAirCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    downstreamKeyId: number;
    onair: boolean;
    deserialize(): void;
    serialize(): Buffer;
    getAttributes(): {};
    applyToState(): void;
}
