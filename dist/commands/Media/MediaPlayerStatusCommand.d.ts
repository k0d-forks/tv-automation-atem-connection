/// <reference types="node" />
import IAbstractCommand from '../AbstractCommand';
import { AtemState } from '../../lib/atemState';
export declare class MediaPlayerStatusCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    flag: number;
    mediaPlayerId: number;
    playing: boolean;
    loop: boolean;
    atBeginning: boolean;
    clipFrame: number;
    MaskFlags: {
        Playing: number;
        Loop: number;
        Beginning: number;
        Frame: number;
    };
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): {
        mediaPlayerId: number;
        playing: boolean;
        loop: boolean;
        atBeginning: boolean;
        clipFrame: number;
    };
    applyToState(state: AtemState): void;
}
