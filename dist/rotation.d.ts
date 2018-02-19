export declare class Rotation {
    x: number;
    y: number;
    z: number;
    s: number;
    constructor(x?: number, y?: number, z?: number, s?: number);
}
export declare function parseRotation(value: string, trimParenthesis?: boolean): Rotation | null;
export declare const ZERO_ROTATION: Rotation;
