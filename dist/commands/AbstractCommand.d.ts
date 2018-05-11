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
    deserialize?(rawCommand: Buffer): void;
    serialize?(): Buffer;
    applyToState?(state: AtemState): void;
    updateProps(newProps: object): void;
    protected _updateProps(newProps: Object): void;
}
