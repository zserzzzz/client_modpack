import { $ExtraData$Type_, $ExtraData, $ExtraData$Type } from "@package/io/github/mortuusars/exposure/util";
import { $Codec } from "@package/com/mojang/serialization";
import { $ExposureType_, $ColorChannel, $ExposureType } from "@package/io/github/mortuusars/exposure/world/camera";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $List, $List_ } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ExposureIdentifier } from "@package/io/github/mortuusars/exposure/world/level/storage";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $CameraHolder } from "@package/io/github/mortuusars/exposure/world/entity";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $ShutterSpeed } from "@package/io/github/mortuusars/exposure/world/camera/component";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/camera/frame" {
    export class $Frame$Mutable {
        setIdentifier(identifier: $ExposureIdentifier): $Frame$Mutable;
        getIdentifier(): $ExposureIdentifier;
        setType(type: $ExposureType_): $Frame$Mutable;
        getType(): $ExposureType;
        getTag(): $ExtraData;
        toImmutable(): $Frame;
        setTag(tag: $ExtraData): $Frame$Mutable;
        setEntitiesInFrame(entitiesInFrame: $List_<$EntityInFrame_>): $Frame$Mutable;
        updateExtraData(updater: $Consumer_<$ExtraData>): $Frame$Mutable;
        addExtraData<T>(type: $ExtraData$Type_<T>, value: T): $Frame$Mutable;
        setPhotographer(photographer: $Photographer): $Frame$Mutable;
        getEntitiesInFrame(): $List<$EntityInFrame>;
        setChromatic(chromatic: boolean): $Frame$Mutable;
        getPhotographer(): $Photographer;
        constructor(photographData: $Frame_);
        set chromatic(value: boolean);
    }
    export class $Frame extends $Record {
        type(): $ExposureType;
        static create(): $Frame$Mutable;
        identifier(): $ExposureIdentifier;
        getExtraDataForReading(): $ExtraData;
        extraData(): $ExtraData;
        static intersect(identifier: $ExposureIdentifier, frames: $List_<$Frame_>): $Frame;
        isTakenBy(entity: $LivingEntity): boolean;
        entitiesInFrame(): $List<$EntityInFrame>;
        photographer(): $Photographer;
        toMutable(): $Frame$Mutable;
        getColorChannel(): ($ColorChannel) | undefined;
        isChromatic(): boolean;
        isProjected(): boolean;
        wasTakenWithChromaticFilter(): boolean;
        static WEATHER: $ExtraData$Type<string>;
        static CODEC: $Codec<$Frame>;
        static BIOME: $ExtraData$Type<$ResourceLocation>;
        static LIGHT_LEVEL: $ExtraData$Type<number>;
        static SHUTTER_SPEED: $ExtraData$Type<$ShutterSpeed>;
        static FOCAL_LENGTH: $ExtraData$Type<number>;
        static PITCH: $ExtraData$Type<number>;
        static FLASH: $ExtraData$Type<boolean>;
        static ON_STAND: $ExtraData$Type<boolean>;
        static YAW: $ExtraData$Type<number>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Frame>;
        static UNDERWATER: $ExtraData$Type<boolean>;
        static POSITION: $ExtraData$Type<$Vec3>;
        static STRUCTURES: $ExtraData$Type<$List<$ResourceLocation>>;
        static DIMENSION: $ExtraData$Type<$ResourceLocation>;
        static DAY_TIME: $ExtraData$Type<number>;
        static TIMESTAMP: $ExtraData$Type<number>;
        static PROJECTED: $ExtraData$Type<boolean>;
        static COLOR_CHANNEL: $ExtraData$Type<$ColorChannel>;
        static SELFIE: $ExtraData$Type<boolean>;
        static IN_CAVE: $ExtraData$Type<boolean>;
        static EMPTY: $Frame;
        static CHROMATIC: $ExtraData$Type<boolean>;
        constructor(identifier: $ExposureIdentifier, type: $ExposureType_, photographer: $Photographer, entitiesInFrame: $List_<$EntityInFrame_>, extraData: $ExtraData);
        get extraDataForReading(): $ExtraData;
        get colorChannel(): ($ColorChannel) | undefined;
        get chromatic(): boolean;
        get projected(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Frame}.
     */
    export type $Frame_ = { identifier?: $ExposureIdentifier, photographer?: $Photographer, type?: $ExposureType_, entitiesInFrame?: $List_<$EntityInFrame_>, extraData?: $ExtraData,  } | [identifier?: $ExposureIdentifier, photographer?: $Photographer, type?: $ExposureType_, entitiesInFrame?: $List_<$EntityInFrame_>, extraData?: $ExtraData, ];
    export class $Photographer {
        name(): string;
        isEmpty(): boolean;
        matches(entity: $Entity): boolean;
        uuid(): $UUID;
        isPlayer(): boolean;
        isNPC(): boolean;
        static CODEC: $Codec<$Photographer>;
        static EMPTY: $Photographer;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Photographer>;
        constructor(cameraHolder: $CameraHolder);
        get empty(): boolean;
        get player(): boolean;
        get NPC(): boolean;
    }
    export class $EntityInFrame extends $Record {
        name(): string;
        static of(cameraHolder: $Entity, entity: $Entity, data: $Consumer_<$ExtraData>): $EntityInFrame;
        static of(cameraHolder: $Entity, entity: $Entity): $EntityInFrame;
        static of(cameraHolder: $Entity, entity: $Entity, extraData: $ExtraData): $EntityInFrame;
        id(): $ResourceLocation;
        pos(): $BlockPos;
        distance(): number;
        extraData(): $ExtraData;
        static CODEC: $Codec<$EntityInFrame>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $EntityInFrame>;
        constructor(id: $ResourceLocation_, name: string, pos: $BlockPos_, distance: number, extraData: $ExtraData);
    }
    /**
     * Values that may be interpreted as {@link $EntityInFrame}.
     */
    export type $EntityInFrame_ = { distance?: number, id?: $ResourceLocation_, pos?: $BlockPos_, name?: string, extraData?: $ExtraData,  } | [distance?: number, id?: $ResourceLocation_, pos?: $BlockPos_, name?: string, extraData?: $ExtraData, ];
}
