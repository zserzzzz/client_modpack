import { $JsonObject_ } from "@package/com/google/gson";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $AnimationMetadataSectionAccessor } from "@package/net/irisshaders/iris/mixin/texture";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $IDeltaProviderContext, $IDeltaProvider_, $IDeltaProvider } from "@package/net/mehvahdjukaar/polytone/texture";

declare module "@package/net/minecraft/client/resources/metadata/animation" {
    export class $VillagerMetaDataSection {
        getHat(): $VillagerMetaDataSection$Hat;
        static SECTION_NAME: string;
        static SERIALIZER: $VillagerMetadataSectionSerializer;
        constructor(hat: $VillagerMetaDataSection$Hat_);
        get hat(): $VillagerMetaDataSection$Hat;
    }
    export class $AnimationFrame {
        getIndex(): number;
        getTime(defaultValue: number): number;
        static UNKNOWN_FRAME_TIME: number;
        constructor(index: number);
        constructor(index: number, time: number);
        get index(): number;
    }
    export class $VillagerMetaDataSection$Hat extends $Enum<$VillagerMetaDataSection$Hat> {
        getName(): string;
        static values(): $VillagerMetaDataSection$Hat[];
        static valueOf(name: string): $VillagerMetaDataSection$Hat;
        static getByName(name: string): $VillagerMetaDataSection$Hat;
        static PARTIAL: $VillagerMetaDataSection$Hat;
        static NONE: $VillagerMetaDataSection$Hat;
        static FULL: $VillagerMetaDataSection$Hat;
    }
    /**
     * Values that may be interpreted as {@link $VillagerMetaDataSection$Hat}.
     */
    export type $VillagerMetaDataSection$Hat_ = "none" | "partial" | "full";
    export class $AnimationMetadataSection implements $AnimationMetadataSectionAccessor, $IDeltaProviderContext {
        getDefaultFrameTime(): number;
        isInterpolatedFrames(): boolean;
        polytone$setTimeCycleDuration(duration: number): void;
        polytone$getTimeCycleDuration(): number;
        polytone$setMode(mode: $IDeltaProvider_): void;
        calculateFrameSize(width: number, height: number): $FrameSize;
        polytone$getMode(): $IDeltaProvider;
        forEachFrame(output: $AnimationMetadataSection$FrameOutput_): void;
        setFrameHeight(arg0: number): void;
        setFrameWidth(arg0: number): void;
        getFrameWidth(): number;
        getFrameHeight(): number;
        static SECTION_NAME: string;
        frameHeight: number;
        frameWidth: number;
        frames: $List<$AnimationFrame>;
        static SERIALIZER: $AnimationMetadataSectionSerializer;
        static UNKNOWN_SIZE: number;
        static DEFAULT_FRAME_TIME: number;
        static EMPTY: $AnimationMetadataSection;
        constructor(frames: $List_<$AnimationFrame>, frameWidth: number, frameHeight: number, defaultFrameTime: number, interpolatedFrames: boolean);
        get defaultFrameTime(): number;
        get interpolatedFrames(): boolean;
    }
    export class $AnimationMetadataSectionSerializer implements $MetadataSectionSerializer<$AnimationMetadataSection> {
        /**
         * The name of this section type as it appears in JSON.
         */
        getMetadataSectionName(): string;
        modifyReturnValue$dgm000$polytone$addWorldTimeTextureData(original: $AnimationMetadataSection, json: $JsonObject_): $AnimationMetadataSection;
        fromJson(json: $JsonObject_): $AnimationMetadataSection;
        constructor();
        get metadataSectionName(): string;
    }
    export class $VillagerMetadataSectionSerializer implements $MetadataSectionSerializer<$VillagerMetaDataSection> {
        /**
         * The name of this section type as it appears in JSON.
         */
        getMetadataSectionName(): string;
        fromJson(json: $JsonObject_): $VillagerMetaDataSection;
        constructor();
        get metadataSectionName(): string;
    }
    export class $FrameSize extends $Record {
        width(): number;
        height(): number;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $FrameSize}.
     */
    export type $FrameSize_ = { height?: number, width?: number,  } | [height?: number, width?: number, ];
    export class $AnimationMetadataSection$FrameOutput {
    }
    export interface $AnimationMetadataSection$FrameOutput {
        accept(index: number, time: number): void;
    }
    /**
     * Values that may be interpreted as {@link $AnimationMetadataSection$FrameOutput}.
     */
    export type $AnimationMetadataSection$FrameOutput_ = ((arg0: number, arg1: number) => void);
}
