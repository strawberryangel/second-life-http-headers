"use strict";
////////////////////////////////////////////////////////////////////////////////
//
// This represents a rotation/quaternion as represented in SecondLife.
//
// http://wiki.secondlife.com/wiki/Rotation
// http://wiki.secondlife.com/wiki/Quaternion
//
////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
const string_to_numeric_array_1 = require("./string-to-numeric-array");
class Rotation {
    constructor(x = 0, y = 0, z = 0, s = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.s = s;
    }
}
exports.Rotation = Rotation;
function parseRotation(value, trimParenthesis = true) {
    if (typeof value !== 'string' || value.length === 0)
        return null;
    let array = string_to_numeric_array_1.stringToNumericArray(value, trimParenthesis);
    if (array.length !== 4)
        return null;
    return new Rotation(...array);
}
exports.parseRotation = parseRotation;
exports.ZERO_ROTATION = new Rotation();
