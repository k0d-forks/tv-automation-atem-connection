/// <reference types="node" />
import AbstractCommand from '../../AbstractCommand';
import { AtemState } from '../../../state';
import { WipeTransitionSettings } from '../../../state/video';
export declare class TransitionWipeCommand extends AbstractCommand {
    rawName: string;
    mixEffect: number;
    MaskFlags: {
        rate: number;
        pattern: number;
        borderWidth: number;
        borderInput: number;
        symmetry: number;
        borderSoftness: number;
        xPosition: number;
        yPosition: number;
        reverseDirection: number;
        flipFlop: number;
    };
    properties: WipeTransitionSettings;
    updateProps(newProps: Partial<WipeTransitionSettings>): void;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    applyToState(state: AtemState): void;
}
