import { Rotation } from './rotation';
import { Vector } from './vector';
export declare class SecondLifeHttpHeaders {
    localPosition: Vector;
    localRotation: Rotation;
    localVelocity: Vector;
    objectKey: string;
    objectName: string;
    ownerKey: string;
    ownerName: string;
    region: string;
    shard: string;
}
export declare function parseSecondLifeHeaders(req: any, allowIncomplete?: boolean): SecondLifeHttpHeaders | null;
