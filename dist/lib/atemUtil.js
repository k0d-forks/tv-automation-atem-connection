"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util;
(function (Util) {
    function stringToBytes(str) {
        const array = [];
        for (const val of Buffer.from(str).values()) {
            array.push(val);
        }
        return array;
    }
    Util.stringToBytes = stringToBytes;
    function bufToNullTerminatedString(buffer, start, length) {
        const slice = buffer.slice(start, start + length);
        const nullIndex = slice.indexOf('\0');
        return slice.toString('ascii', 0, nullIndex < 0 ? slice.length : nullIndex);
    }
    Util.bufToNullTerminatedString = bufToNullTerminatedString;
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