/// <reference types="node" />
import AbstractCommand from '../../AbstractCommand';
import { AtemState } from '../../../state';
import { DipTransitionSettings } from '../../../state/video';
export declare class TransitionDipCommand extends AbstractCommand {
    rawName: string;
    mixEffect: number;
    MaskFlags: {
        rate: number;
        input: number;
    };
    properties: DipTransitionSettings;
    updateProps(newProps: Partial<DipTransitionSettings>): void;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    applyToState(state: AtemState): void;
}
