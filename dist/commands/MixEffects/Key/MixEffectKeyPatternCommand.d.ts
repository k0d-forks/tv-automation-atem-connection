/// <reference types="node" />
import AbstractCommand from '../../AbstractCommand';
import { AtemState } from '../../../state';
import { UpstreamKeyerPatternSettings } from '../../../state/video/upstreamKeyers';
export declare class MixEffectKeyPatternCommand extends AbstractCommand {
    rawName: string;
    mixEffect: number;
    upstreamKeyerId: number;
    properties: UpstreamKeyerPatternSettings;
    MaskFlags: {
        style: number;
        size: number;
        symmetry: number;
        softness: number;
        positionX: number;
        positionY: number;
        invert: number;
    };
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    applyToState(state: AtemState): void;
}
