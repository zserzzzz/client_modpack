import { $JsonElement_ } from "@package/com/google/gson";
import { $Codec } from "@package/com/mojang/serialization";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/camera/component" {
    export class $ShutterSpeed implements $StringRepresentable {
        getSerializedName(): string;
        getDurationTicks(): number;
        getBrightness(): number;
        getStopsDifference(relative: $ShutterSpeed): number;
        getNotation(): string;
        shouldCauseTickingSound(): boolean;
        getDurationMilliseconds(): number;
        getStops(): number;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ShutterSpeed>;
        static DEFAULT: $ShutterSpeed;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ShutterSpeed>;
        constructor(notation: string);
        get serializedName(): string;
        get durationTicks(): number;
        get brightness(): number;
        get notation(): string;
        get durationMilliseconds(): number;
        get stops(): number;
        get remappedEnumConstantName(): string;
    }
    export class $FocalRange implements $StringRepresentable {
        static fromJson(json: $JsonElement_): $FocalRange;
        min(): number;
        max(): number;
        static getDefault(): $FocalRange;
        static parse(value: string): $FocalRange;
        getSerializedName(): string;
        fovFromZoom(zoom: number): number;
        isPrime(): boolean;
        focalLengthFromZoom(zoom: number): number;
        zoomFromFov(fov: number): number;
        clampFocalLength(focalLength: number): number;
        clampFov(fov: number): number;
        getRemappedEnumConstantName(): string;
        static REGULAR: $FocalRange;
        static CODEC: $Codec<$FocalRange>;
        static RANGE_CODEC: $Codec<$FocalRange>;
        static ALLOWED_MIN: number;
        static PRIME_CODEC: $Codec<$FocalRange>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FocalRange>;
        static ALLOWED_MAX: number;
        constructor(min: number, max: number);
        constructor(primeValue: number);
        static get default(): $FocalRange;
        get serializedName(): string;
        get prime(): boolean;
        get remappedEnumConstantName(): string;
    }
}
