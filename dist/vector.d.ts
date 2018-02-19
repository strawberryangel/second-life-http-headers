export declare class Vector {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
}
export declare function parseVector(value: string, trimParenthesis?: boolean): Vector | null;
export declare const ZERO_VECTOR: Vector;
