/// <reference types="node" />
import AbstractCommand from '../../AbstractCommand';
import { AtemState } from '../../../state';
import { UpstreamKeyerChromaSettings } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyChromaCommand extends AbstractCommand {
    rawName: string;
    mixEffect: number;
    upstreamKeyerId: number;
    properties: UpstreamKeyerChromaSettings;
    MaskFlags: {
        hue: number;
        gain: number;
        ySuppress: number;
        lift: number;
        narrow: number;
    };
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    applyToState(state: AtemState): void;
}
