/// <reference types="node" />
export declare namespace Util {
    function parseNumber(bytes: Buffer): number;
    function parseString(bytes: Buffer): string;
    function bufferToArray(buffers: Buffer): Array<number>;
    function bufferToBytes(from: number, numberOfBytes: number): Array<number>;
    function stringToBytes(str: string): Array<number>;
    const COMMAND_CONNECT_HELLO: Buffer;
    const COMMAND_CONNECT_HELLO_ANSWER: Buffer;
}
