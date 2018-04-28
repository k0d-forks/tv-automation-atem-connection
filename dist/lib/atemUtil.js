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