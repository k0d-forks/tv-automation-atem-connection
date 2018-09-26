/// <reference types="node" />
import { EventEmitter } from 'events';
import AbstractCommand from '../commands/AbstractCommand';
export declare class AtemSocket extends EventEmitter {
    private _debug;
    private _localPacketId;
    private _address;
    private _port;
    private _shouldConnect;
    private _socketProcess;
    private _commandParser;
    constructor(options: {
        address?: string;
        port?: number;
        debug?: boolean;
        log?: (args1: any, args2?: any, args3?: any) => void;
    });
    connect(address?: string, port?: number): Promise<{}>;
    disconnect(): Promise<{}>;
    log(..._args: any[]): void;
    readonly nextPacketId: number;
    _sendCommand(command: AbstractCommand, trackingId: number): Promise<{}>;
    private _createSocketProcess;
    private _sendSubprocessMessage;
    private _receiveSubprocessMessage;
    private _parseCommand;
}