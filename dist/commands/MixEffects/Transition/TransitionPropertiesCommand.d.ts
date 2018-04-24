/// <reference types="node" />
import IAbstractCommand from '../../AbstractCommand';
import { AtemState } from '../../../lib/atemState';
import { TransitionStyle } from '../../..';
export declare class TransitionPropertiesCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    mixEffect: number;
    flags: number;
    style: TransitionStyle;
    selection: number;
    nextStyle: TransitionStyle;
    nextSelection: number;
    MaskFlags: {
        style: number;
        selection: number;
    };
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): {
        mixEffect: number;
        style: TransitionStyle;
        selection: number;
        nextStyle: TransitionStyle;
        nextSelection: number;
    };
    applyToState(state: AtemState): void;
}
