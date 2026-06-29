import { $FilmProperties, $FilmStyle } from "@package/io/github/mortuusars/exposure/world/camera/film/properties";
import { $ColorPalette } from "@package/io/github/mortuusars/exposure/data";
import { $DitherMode } from "@package/io/github/mortuusars/exposure/world/camera/capture";
import { $Item$Properties, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Frame_, $Frame } from "@package/io/github/mortuusars/exposure/world/camera/frame";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ExposureType, $ExposureType_ } from "@package/io/github/mortuusars/exposure/world/camera";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $List, $List_, $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";
export * as camera from "@package/io/github/mortuusars/exposure/world/item/camera";
export * as util from "@package/io/github/mortuusars/exposure/world/item/util";
export * as component from "@package/io/github/mortuusars/exposure/world/item/component";

declare module "@package/io/github/mortuusars/exposure/world/item" {
    export class $FilmRollItem extends $Item implements $SensitiveFilmItem {
        getType(): $ExposureType;
        canAddFrame(stack: $ItemStack_): boolean;
        addFrame(stack: $ItemStack_, frame: $Frame_): void;
        getFilmProperties(stack: $ItemStack_): $FilmProperties;
        addStyleToTooltip(stack: $ItemStack_, list: $List_<$Component_>): void;
        getColorPalette(stack: $ItemStack_): $ResourceKey<$ColorPalette>;
        getFilmStyle(stack: $ItemStack_): $FilmStyle;
        getDitherMode(stack: $ItemStack_): $DitherMode;
        addFrameSizeToTooltip(stack: $ItemStack_, list: $List_<$Component_>): void;
        addPaletteToTooltip(stack: $ItemStack_, list: $List_<$Component_>): void;
        hasFrames(stack: $ItemStack_): boolean;
        isFull(stack: $ItemStack_): boolean;
        getFrameSize(stack: $ItemStack_): number;
        getMaxFrameCount(stack: $ItemStack_): number;
        getFullness(stack: $ItemStack_): number;
        getStoredFrames(stack: $ItemStack_): $List<$Frame>;
        getStoredFramesCount(stack: $ItemStack_): number;
        getDefaultFrameSize(stack: $ItemStack_): number;
        getDefaultMaxFrameCount(stack: $ItemStack_): number;
        hasFrameAt(stack: $ItemStack_, index: number): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BAR_COLOR: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static BAR_BLACK_AND_WHITE: number;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(type: $ExposureType_, barColor: number, properties: $Item$Properties);
        get type(): $ExposureType;
    }
    export class $FilmItem {
    }
    export interface $FilmItem {
        getType(): $ExposureType;
        hasFrames(stack: $ItemStack_): boolean;
        isFull(stack: $ItemStack_): boolean;
        getFrameSize(stack: $ItemStack_): number;
        getMaxFrameCount(stack: $ItemStack_): number;
        getFullness(stack: $ItemStack_): number;
        getStoredFrames(stack: $ItemStack_): $List<$Frame>;
        getStoredFramesCount(stack: $ItemStack_): number;
        getDefaultFrameSize(stack: $ItemStack_): number;
        getDefaultMaxFrameCount(stack: $ItemStack_): number;
        hasFrameAt(stack: $ItemStack_, index: number): boolean;
        get type(): $ExposureType;
    }
    /**
     * Values that may be interpreted as {@link $FilmItem}.
     */
    export type $FilmItem_ = (() => $ExposureType_);
    export class $SensitiveFilmItem {
    }
    export interface $SensitiveFilmItem extends $FilmItem {
        getFilmProperties(stack: $ItemStack_): $FilmProperties;
        addStyleToTooltip(stack: $ItemStack_, list: $List_<$Component_>): void;
        getColorPalette(stack: $ItemStack_): $ResourceKey<$ColorPalette>;
        getFilmStyle(stack: $ItemStack_): $FilmStyle;
        getDitherMode(stack: $ItemStack_): $DitherMode;
        addFrameSizeToTooltip(stack: $ItemStack_, list: $List_<$Component_>): void;
        addPaletteToTooltip(stack: $ItemStack_, list: $List_<$Component_>): void;
    }
    /**
     * Values that may be interpreted as {@link $SensitiveFilmItem}.
     */
    export type $SensitiveFilmItem_ = (() => void);
}
