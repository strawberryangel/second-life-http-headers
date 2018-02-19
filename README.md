# @blackpaw/second-life-http-headers

Simple support for your Express programs
to parse headers 
that come from LSL scripts in SecondLife.

None of this is endorsed by LindenLabs.


## parseSecondLifeHeaders

Typescript Declaration

```typescript
function parseSecondLifeHeaders(req: any, allowIncomplete = true): SecondLifeHttpHeaders | null
```

This function receives an Express
Request object in `req`.

`allowIncomplete` is an optional parameter. 
By default this is `true`,
which will fill in the headers
and not bother checking if any are missing.

If `false` is passed in, 
the parser will return `null`
in the case that any of the expected 
headers are missing. 

## `SecondLifeHeaders`

This contains the following definition: 

```typescript
class SecondLifeHttpHeaders {
    localPosition: Vector
    localRotation: Rotation
    localVelocity: Vector

    objectKey: string
    objectName: string

    ownerKey: string
    ownerName: string

    region: string
    shard: string
}
```

where `Vector` represents an 
[LSL Vector](http://wiki.secondlife.com/wiki/Vector) 
as

```typescript
class Vector {
    x: number;
    y: number;
    z: number;
}
```

and `Rotation` represents 
[LSL Rotation](http://wiki.secondlife.com/wiki/Rotation) 
as

```typescript
class Rotation {
    x: number;
    y: number;
    z: number;
    s: number;
}
```


