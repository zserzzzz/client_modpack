import { $ExtraData$Type_, $ExtraData, $ExtraData$Type } from "@package/io/github/mortuusars/exposure/util";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CameraId_, $CameraId, $ColorChannel, $ColorChannel_ } from "@package/io/github/mortuusars/exposure/world/camera";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $FilmProperties, $FilmProperties_ } from "@package/io/github/mortuusars/exposure/world/camera/film/properties";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $CameraHolder } from "@package/io/github/mortuusars/exposure/world/entity";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ShutterSpeed } from "@package/io/github/mortuusars/exposure/world/camera/component";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/camera/capture" {
    export class $CaptureParameters$Builder {
        build(): $CaptureParameters;
        setFilter(filter: $ResourceLocation_): $CaptureParameters$Builder;
        setProjection(projection: ($Projection_) | undefined): $CaptureParameters$Builder;
        extraData<T>(type: $ExtraData$Type_<T>, value: T): $CaptureParameters$Builder;
        extraData(extraDataUpdater: $Consumer_<$ExtraData>): $CaptureParameters$Builder;
        setCropFactor(cropFactor: number): $CaptureParameters$Builder;
        setCameraID(cameraId: $CameraId_): $CaptureParameters$Builder;
        setCameraHolder(holder: $CameraHolder): $CaptureParameters$Builder;
        setFilmProperties(filmProperties: $FilmProperties_): $CaptureParameters$Builder;
        setFov(fov: number): $CaptureParameters$Builder;
        setChromaticChannel(chromaticChannel: ($ColorChannel_) | undefined): $CaptureParameters$Builder;
        setChromaticChannel(chromaticChannel: $ColorChannel_): $CaptureParameters$Builder;
        setProjectionInfo(projection: $Projection_): $CaptureParameters$Builder;
        constructor(exposureId: string);
        constructor(params: $CaptureParameters_);
        set filter(value: $ResourceLocation_);
        set projection(value: ($Projection_) | undefined);
        set cropFactor(value: number);
        set cameraID(value: $CameraId_);
        set cameraHolder(value: $CameraHolder);
        set filmProperties(value: $FilmProperties_);
        set fov(value: number);
        set projectionInfo(value: $Projection_);
    }
    export class $DitherMode extends $Enum<$DitherMode> implements $StringRepresentable {
        cycle(): $DitherMode;
        static values(): $DitherMode[];
        static valueOf(name: string): $DitherMode;
        translate(): $Component;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static DITHERED: $DitherMode;
        static CODEC: $Codec<$DitherMode>;
        static CLEAN: $DitherMode;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DitherMode>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DitherMode}.
     */
    export type $DitherMode_ = "dithered" | "clean";
    export class $CaptureParameters extends $Record {
        fov(): (number) | undefined;
        filter(): ($ResourceLocation) | undefined;
        extraData(): $ExtraData;
        projection(): ($Projection) | undefined;
        mutable(): $CaptureParameters$Builder;
        cropFactor(): number;
        filmProperties(): $FilmProperties;
        singleChannel(): ($ColorChannel) | undefined;
        getLightLevel(): (number) | undefined;
        exposureId(): string;
        cameraId(): ($CameraId) | undefined;
        getFlash(): boolean;
        cameraHolderId(): (number) | undefined;
        getShutterSpeed(): $ShutterSpeed;
        static CODEC: $Codec<$CaptureParameters>;
        static LIGHT_LEVEL: $ExtraData$Type<number>;
        static SHUTTER_SPEED: $ExtraData$Type<$ShutterSpeed>;
        static FLASH: $ExtraData$Type<boolean>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CaptureParameters>;
        constructor(exposureId: string, cameraId: ($CameraId_) | undefined, cameraHolderId: (number) | undefined, fov: (number) | undefined, cropFactor: number, filter: ($ResourceLocation_) | undefined, projection: ($Projection_) | undefined, singleChannel: ($ColorChannel_) | undefined, filmProperties: $FilmProperties_, extraData: $ExtraData);
        get lightLevel(): (number) | undefined;
        get flash(): boolean;
        get shutterSpeed(): $ShutterSpeed;
    }
    /**
     * Values that may be interpreted as {@link $CaptureParameters}.
     */
    export type $CaptureParameters_ = { projection?: ($Projection_) | undefined, cropFactor?: number, filmProperties?: $FilmProperties_, extraData?: $ExtraData, fov?: (number) | undefined, cameraHolderId?: (number) | undefined, singleChannel?: ($ColorChannel_) | undefined, exposureId?: string, cameraId?: ($CameraId_) | undefined, filter?: ($ResourceLocation_) | undefined,  } | [projection?: ($Projection_) | undefined, cropFactor?: number, filmProperties?: $FilmProperties_, extraData?: $ExtraData, fov?: (number) | undefined, cameraHolderId?: (number) | undefined, singleChannel?: ($ColorChannel_) | undefined, exposureId?: string, cameraId?: ($CameraId_) | undefined, filter?: ($ResourceLocation_) | undefined, ];
    export class $Projection extends $Record {
        mode(): $DitherMode;
        path(): string;
        static CODEC: $Codec<$Projection>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Projection>;
        constructor(path: string, mode: $DitherMode_);
    }
    /**
     * Values that may be interpreted as {@link $Projection}.
     */
    export type $Projection_ = { path?: string, mode?: $DitherMode_,  } | [path?: string, mode?: $DitherMode_, ];
}
