/// <reference types="node" />
import AbstractCommand from '../AbstractCommand';
import { DownstreamKeyerGeneral } from '../../state/video/downstreamKeyers';
export declare class DownstreamKeyGeneralCommand extends AbstractCommand {
    rawName: string;
    downstreamKeyerId: number;
    properties: DownstreamKeyerGeneral;
    MaskFlags: {
        preMultiply: number;
        clip: number;
        gain: number;
        invert: number;
    };
    serialize(): Buffer;
    updateProps(newProps: Partial<DownstreamKeyerGeneral>): void;
}
