/// <reference types="node" />
import IAbstractCommand from '../AbstractCommand';
import { AtemState } from '../../lib/atemState';
export interface VersionInfo {
    major: number;
    minor: number;
}
export declare class VersionCommand implements IAbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    apiMajor: number;
    apiMinor: number;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): VersionInfo;
    applyToState(state: AtemState): void;
}
