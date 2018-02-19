"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotation_1 = require("./rotation");
const vector_1 = require("./vector");
const LocalPosition = 'x-secondlife-local-position';
const LocalRotation = 'x-secondlife-local-rotation';
const LocalVelocity = 'x-secondlife-local-velocity';
const ObjectKey = 'x-secondlife-object-key';
const ObjectName = 'x-secondlife-object-name';
const OwnerKey = 'x-secondlife-owner-key';
const OwnerName = 'x-secondlife-owner-name';
const Region = 'x-secondlife-region';
const Shard = 'x-secondlife-shard';
// 
// This represents the headers received from the llHttpRequest() LSL function.
//
class SecondLifeHttpHeaders {
}
exports.SecondLifeHttpHeaders = SecondLifeHttpHeaders;
function parseSecondLifeHeaders(req, allowIncomplete = true) {
    /*
     Sample headers from LSL object:

     {
     host: '166.237.203.105:3000',
     'accept-encoding': 'deflate, gzip',
     accept: 'text/*, application/xhtml+xml, application/atom+xml, application/json, application/xml, application/llsd+xml, application/x-javascript, application/javascript, application/x-www-form-urlencoded, application/rss+xml',
     'accept-charset': 'utf-8;q=1.0, *;q=0.5',
     'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
     'user-agent': 'Second Life LSL/16.07.06.317395 (http://secondlife.com)',
     'x-secondlife-local-position': '(23.470818, 155.861465, 27.939892)',
     'x-secondlife-local-rotation': '(0.000000, 0.000000, 0.000000, 1.000000)',
     'x-secondlife-local-velocity': '(0.000000, 0.000000, 0.000000)',
     'x-secondlife-object-key': '60e7eaa4-8bea-4a6e-e8fc-67439383028f',
     'x-secondlife-object-name': 'Sample Object',
     'x-secondlife-owner-key': 'd695b17a-6504-4697-a945-0b70c53e4771',
     'x-secondlife-owner-name': 'somebody Resident',
     'x-secondlife-region': 'Something Estates (272373, 311305)',
     'x-secondlife-shard': 'Production',
     pragma: 'no-cache',
     'content-length': '669',
     via: '1.1 sim10141.agni.lindenlab.com:3128 (squid/2.7.STABLE9)',
     'x-forwarded-for': '127.0.0.1',
     'cache-control': 'max-age=259200',
     connection: 'keep-alive'
     }
     */
    let position = vector_1.parseVector(req.get(LocalPosition));
    let rotation = rotation_1.parseRotation(req.get(LocalRotation));
    let velocity = vector_1.parseVector(req.get(LocalVelocity));
    if (!allowIncomplete && (position == null || rotation == null || velocity == null))
        return null;
    if (!position)
        position = vector_1.ZERO_VECTOR;
    if (!rotation)
        rotation = rotation_1.ZERO_ROTATION;
    if (!velocity)
        velocity = vector_1.ZERO_VECTOR;
    const result = {
        localPosition: position,
        localRotation: rotation,
        localVelocity: velocity,
        objectKey: req.get(ObjectKey),
        objectName: req.get(ObjectName),
        ownerKey: req.get(OwnerKey),
        ownerName: req.get(OwnerName),
        region: req.get(Region),
        shard: req.get(Shard),
    };
    function isValid(value) {
        return typeof value === 'string' && value.length > 0;
    }
    if (!allowIncomplete && (!isValid(result.objectKey)
        || !isValid(result.objectName)
        || !isValid(result.ownerKey)
        || !isValid(result.ownerName)
        || !isValid(result.region)
        || !isValid(result.shard)))
        return null;
    return result;
}
exports.parseSecondLifeHeaders = parseSecondLifeHeaders;
