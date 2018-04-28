/// <reference types="node" />
import { AtemState } from '../state';
export default abstract class AbstractCommand {
    abstract rawName: string;
    packetId: number;
    MaskFlags?: {
        [key: string]: number;
    };
    flag: number;
    resolve: (cmd: AbstractCommand) => void;
    reject: (cmd: AbstractCommand) => void;
    abstract properties: any;
    abstract deserialize(rawCommand: Buffer): void;
    abstract serialize(): Buffer;
    abstract applyToState(state: AtemState): void;
    updateProps(newProps: object): void;
    protected _updateProps(newProps: Object): void;
}
