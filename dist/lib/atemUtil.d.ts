/// <reference types="node" />
export declare namespace Util {
    function stringToBytes(str: string): Array<number>;
    function bufToNullTerminatedString(buffer: Buffer, start: number, length: number): string;
    const COMMAND_CONNECT_HELLO: Buffer;
    const COMMAND_CONNECT_HELLO_ANSWER: Buffer;
}
