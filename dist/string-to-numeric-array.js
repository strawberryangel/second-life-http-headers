"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringToNumericArray(value, trimParenthesis = false) {
    if (typeof value !== 'string')
        return [];
    value = value.trim();
    if (trimParenthesis)
        value = value.slice(1, -2);
    return value.split(',').map(x => parseFloat(x) || 0);
}
exports.stringToNumericArray = stringToNumericArray;
