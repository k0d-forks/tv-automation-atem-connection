/// <reference types="node" />
import AbstractCommand from '../../AbstractCommand';
import { UpstreamKeyerMaskSettings } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyMaskSetCommand extends AbstractCommand {
    rawName: string;
    mixEffect: number;
    upstreamKeyerId: number;
    properties: UpstreamKeyerMaskSettings;
    MaskFlags: {
        maskEnabled: number;
        maskTop: number;
        maskBottom: number;
        maskLeft: number;
        maskRight: number;
    };
    serialize(): Buffer;
}
