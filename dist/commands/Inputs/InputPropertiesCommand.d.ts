/// <reference types="node" />
import AbstractCommand from '../AbstractCommand';
import { AtemState } from '../../state';
import { InputChannel } from '../../state/input';
export declare class InputPropertiesCommand extends AbstractCommand {
    rawName: string;
    inputId: number;
    MaskFlags: {
        longName: number;
        shortName: number;
        isExternal: number;
    };
    properties: InputChannel;
    updateProps(newProps: Partial<InputChannel>): void;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    applyToState(state: AtemState): void;
}
