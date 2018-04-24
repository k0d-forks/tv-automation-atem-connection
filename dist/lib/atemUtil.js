"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util;
(function (Util) {
    function parseNumber(bytes) {
        let num = 0;
        for (let i = 0; i < bytes.length; i++) {
            let byte = bytes[i];
            num += byte;
            if (i < bytes.length - 1)
                num = num << 8;
        }
        return num;
    }
    Util.parseNumber = parseNumber;
    function parseString(bytes) {
        let str = '';
        for (let char of bytes) {
            if (char === 0)
                break;
            str += String.fromCharCode(char);
        }
        return str;
    }
    Util.parseString = parseString;
    function bufferToArray(buffers) {
        let arr = [];
        for (let i of buffers) {
            arr.push(i);
        }
        return arr;
    }
    Util.bufferToArray = bufferToArray;
    function bufferToBytes(from, numberOfBytes) {
        let bytes = [];
        for (let i = 0; i <= numberOfBytes; i++) {
            let shift = numberOfBytes - i - 1;
            bytes.push((from >> (8 * shift) & 0xFF));
        }
        return bytes;
    }
    Util.bufferToBytes = bufferToBytes;
    function stringToBytes(str) {
        let array = [];
        for (let val of Buffer.from(str).values()) {
            array.push(val);
        }
        return array;
    }
    Util.stringToBytes = stringToBytes;
    Util.COMMAND_CONNECT_HELLO = Buffer.from([
        0x10, 0x14, 0x53, 0xAB,
        0x00, 0x00, 0x00, 0x00,
        0x00, 0x3A, 0x00, 0x00,
        0x01, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00
    ]);
    Util.COMMAND_CONNECT_HELLO_ANSWER = Buffer.from([
        0x80, 0x0C, 0x53, 0xAB,
        0x00, 0x00, 0x00, 0x00,
        0x00, 0x03, 0x00, 0x00
    ]);
})(Util = exports.Util || (exports.Util = {}));
//# sourceMappingURL=atemUtil.js.map