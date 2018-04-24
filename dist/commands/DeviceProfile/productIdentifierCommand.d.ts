/// <reference types="node" />
import AbstractCommand from '../AbstractCommand';
import { AtemState } from '../../lib/atemState';
export declare class ProductIdentifierCommand implements AbstractCommand {
    resolve: () => void;
    reject: () => void;
    rawName: string;
    packetId: number;
    deviceName: string;
    model: number;
    deserialize(rawCommand: Buffer): void;
    serialize(): Buffer;
    getAttributes(): {
        deviceName: string;
        model: number;
    };
    applyToState(state: AtemState): void;
}
