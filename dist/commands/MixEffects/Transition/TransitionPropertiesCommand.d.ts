/// <reference types="node" />
import AbstractCommand from '../../AbstractCommand';
import { AtemState } from '../../../state';
import { TransitionProperties } from '../../../state/video';
export declare class TransitionPropertiesCommand extends AbstractCommand {
    rawName: string;
    mixEffect: number;
    MaskFlags: {
        style: number;
        selection: number;
    };
    properties: TransitionProperties;
    updateProps(newProps: Partial<TransitionProperties>): void;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    applyToState(state: AtemState): void;
}
