"use strict";
////////////////////////////////////////////////////////////////////////////////
//
// This represents a vector as represented in SecondLife.
//
// http://wiki.secondlife.com/wiki/Vector
//
////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
const string_to_numeric_array_1 = require("./string-to-numeric-array");
class Vector {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
exports.Vector = Vector;
function parseVector(value, trimParenthesis = true) {
    if (typeof value !== 'string' || value.length === 0)
        return null;
    let array = string_to_numeric_array_1.stringToNumericArray(value, trimParenthesis);
    if (array.length !== 3)
        return null;
    return new Vector(...array);
}
exports.parseVector = parseVector;
exports.ZERO_VECTOR = new Vector();
