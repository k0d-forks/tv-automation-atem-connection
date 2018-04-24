/// <reference types="node" />
import IAbstractCommand from '../AbstractCommand';
export declare class MacroActionCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    index: number;
    action: number;
    MacroAction: {
        Run: number;
        Stop: number;
        StopRecord: number;
        InsertUserWait: number;
        Continue: number;
        Delete: number;
    };
    deserialize(): void;
    serialize(): Buffer;
    getAttributes(): {};
    applyToState(): void;
}
