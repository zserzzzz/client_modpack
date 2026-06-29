import { $JsonElement_ } from "@package/com/google/gson";
import { $Codec } from "@package/com/mojang/serialization";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/camera/component" {
    export class $ShutterSpeed implements $StringRepresentable {
        getStopsDifference(relative: $ShutterSpeed): number;
        getNotation(): string;
        getSerializedName(): string;
        getStops(): number;
        getDurationTicks(): number;
        getBrightness(): number;
        shouldCauseTickingSound(): boolean;
        getDurationMilliseconds(): number;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ShutterSpeed>;
        static DEFAULT: $ShutterSpeed;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ShutterSpeed>;
        constructor(notation: string);
        get notation(): string;
        get serializedName(): string;
        get stops(): number;
        get durationTicks(): number;
        get brightness(): number;
        get durationMilliseconds(): number;
        get remappedEnumConstantName(): string;
    }
    export class $FocalRange implements $StringRepresentable {
        min(): number;
        max(): number;
        static getDefault(): $FocalRange;
        static parse(value: string): $FocalRange;
        static fromJson(json: $JsonElement_): $FocalRange;
        isPrime(): boolean;
        clampFov(fov: number): number;
        getSerializedName(): string;
        fovFromZoom(zoom: number): number;
        focalLengthFromZoom(zoom: number): number;
        clampFocalLength(focalLength: number): number;
        zoomFromFov(fov: number): number;
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
        get prime(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
}
