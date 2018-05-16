/// <reference types="node" />
import AbstractCommand from '../AbstractCommand';
import { DownstreamKeyerMask } from '../../state/video/downstreamKeyers';
export declare class DownstreamKeyMaskCommand extends AbstractCommand {
    rawName: string;
    downstreamKeyerId: number;
    properties: DownstreamKeyerMask;
    MaskFlags: {
        enabled: number;
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    serialize(): Buffer;
    updateProps(newProps: Partial<DownstreamKeyerMask>): void;
}
