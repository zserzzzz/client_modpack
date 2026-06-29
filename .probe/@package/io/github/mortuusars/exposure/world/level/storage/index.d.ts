import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/level/storage" {
    export class $ExposureIdentifier {
        texture(): $ResourceLocation;
        static texture(texture: $ResourceLocation_): $ExposureIdentifier;
        isEmpty(): boolean;
        map<T>(ifId: $Function_<string, T>, ifTexture: $Function_<$ResourceLocation, T>): T;
        static id(id: string): $ExposureIdentifier;
        id(): string;
        getId(): (string) | undefined;
        isId(): boolean;
        getTexture(): ($ResourceLocation) | undefined;
        mapId<T>(mappingFunc: $Function_<string, T>): (T) | undefined;
        static createId(entity: $Entity, ...middleParts: string[]): string;
        static createId(...parts: string[]): string;
        ifTexture(textureConsumer: $Consumer_<$ResourceLocation>): $ExposureIdentifier;
        ifId(idConsumer: $Consumer_<string>): $ExposureIdentifier;
        mapTexture<T>(mappingFunc: $Function_<$ResourceLocation, T>): (T) | undefined;
        isTexture(): boolean;
        toValueString(): string;
        static CODEC: $Codec<$ExposureIdentifier>;
        static FULL_CODEC: $Codec<$ExposureIdentifier>;
        static SIMPLE_ID_CODEC: $Codec<$ExposureIdentifier>;
        static EMPTY: $ExposureIdentifier;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ExposureIdentifier>;
        get empty(): boolean;
    }
}
