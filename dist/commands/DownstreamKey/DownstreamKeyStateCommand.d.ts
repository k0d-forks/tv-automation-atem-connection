/// <reference types="node" />
import AbstractCommand from '../AbstractCommand';
import { AtemState } from '../../state';
import { DownstreamKeyer } from '../../state/video';
export declare class DownstreamKeyStateCommand extends AbstractCommand {
    rawName: string;
    downstreamKeyId: number;
    properties: DownstreamKeyer;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    applyToState(state: AtemState): void;
}
