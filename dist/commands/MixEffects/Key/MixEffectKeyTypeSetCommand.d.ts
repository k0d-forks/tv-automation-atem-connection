/// <reference types="node" />
import AbstractCommand from '../../AbstractCommand';
import { UpstreamKeyerTypeSettings } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyTypeSetCommand extends AbstractCommand {
    rawName: string;
    mixEffect: number;
    upstreamKeyerId: number;
    properties: UpstreamKeyerTypeSettings;
    MaskFlags: {
        keyType: number;
        flyEnabled: number;
    };
    serialize(): Buffer;
}
