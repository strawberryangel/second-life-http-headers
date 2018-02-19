////////////////////////////////////////////////////////////////////////////////
//
// This represents a vector as represented in SecondLife.
//
// http://wiki.secondlife.com/wiki/Vector
//
////////////////////////////////////////////////////////////////////////////////

import { stringToNumericArray } from './string-to-numeric-array'

export class Vector {
    constructor(public x: number = 0,
                public y: number = 0,
                public z: number = 0) {
    }
}

export function parseVector(value: string,
                            trimParenthesis: boolean = true): Vector | null {

    if (typeof value !== 'string' || value.length === 0)
        return null

    let array = stringToNumericArray(value, trimParenthesis)
    if (array.length !== 3) return null

    return new Vector(...array)
}

export const ZERO_VECTOR = new Vector()
