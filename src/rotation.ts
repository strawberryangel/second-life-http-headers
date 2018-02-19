////////////////////////////////////////////////////////////////////////////////
//
// This represents a rotation/quaternion as represented in SecondLife.
//
// http://wiki.secondlife.com/wiki/Rotation
// http://wiki.secondlife.com/wiki/Quaternion
//
////////////////////////////////////////////////////////////////////////////////

import { stringToNumericArray } from './string-to-numeric-array'

export class Rotation{
    constructor(public x: number = 0,
                public y: number = 0,
                public z: number = 0,
                public s: number = 0) {
    }
}

export function parseRotation(value: string,
                              trimParenthesis: boolean = true): Rotation | null {

    if (typeof value !== 'string' || value.length === 0)
        return null

    let array = stringToNumericArray(value, trimParenthesis)
    if (array.length !== 4) return null

    return new Rotation(...array)
}

export const ZERO_ROTATION = new Rotation()

