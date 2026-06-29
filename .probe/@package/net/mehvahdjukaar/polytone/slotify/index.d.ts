import { $Codec } from "@package/com/mojang/serialization";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractWidget, $Renderable_, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Iterable_, $Enum, $Record, $Iterable } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $Matrix4f } from "@package/org/joml";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/mehvahdjukaar/polytone/slotify" {
    export class $SimpleText extends $Record implements $Renderable {
        x(): number;
        z(): number;
        y(): number;
        color(): number;
        text(): $Component;
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        centered(): boolean;
        static CODEC: $Codec<$SimpleText>;
        constructor(text: $Component_, x: number, y: number, z: number, color: number, centered: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SimpleText}.
     */
    export type $SimpleText_ = { y?: number, x?: number, centered?: boolean, text?: $Component_, z?: number, color?: number,  } | [y?: number, x?: number, centered?: boolean, text?: $Component_, z?: number, color?: number, ];
    export class $SimpleSprite extends $Record implements $Renderable {
        x(): number;
        z(): number;
        y(): number;
        width(): number;
        height(): number;
        static blit(matrix: $Matrix4f, atlasLoc: $ResourceLocation_, x1: number, x2: number, y1: number, y2: number, blitOffset: number, minU: number, maxU: number, minV: number, maxV: number): void;
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        texture(): $ResourceLocation;
        tooltip(): (string) | undefined;
        static CODEC: $Codec<$SimpleSprite>;
        constructor(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, z: number, tooltip: (string) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $SimpleSprite}.
     */
    export type $SimpleSprite_ = { texture?: $ResourceLocation_, z?: number, y?: number, width?: number, x?: number, height?: number, tooltip?: (string) | undefined,  } | [texture?: $ResourceLocation_, z?: number, y?: number, width?: number, x?: number, height?: number, tooltip?: (string) | undefined, ];
    export class $SpecialOffset extends $Record {
        x(): number;
        z(): number;
        y(): number;
        static CODEC: $Codec<$SpecialOffset>;
        constructor(x: number, y: number, z: number);
    }
    /**
     * Values that may be interpreted as {@link $SpecialOffset}.
     */
    export type $SpecialOffset_ = { x?: number, z?: number, y?: number,  } | [x?: number, z?: number, y?: number, ];
    export class $GuiModifier extends $Record {
        sprites(): $List<$SimpleSprite>;
        targetsMenuId(): boolean;
        targetsClass(): boolean;
        slotModifiers(): $List<$SlotModifier>;
        type(): $GuiModifier$Type;
        target(): string;
        xOff(): number;
        titleY(): number;
        labelX(): number;
        yOff(): number;
        hOff(): number;
        titleX(): number;
        titleColor(): number;
        labelY(): number;
        wOff(): number;
        labelColor(): number;
        textList(): $List<$SimpleText>;
        widgetModifiers(): $List<$WidgetModifier>;
        specialOffsets(): $Map<string, $SpecialOffset>;
        static CODEC: $Codec<$GuiModifier>;
        constructor(type: $GuiModifier$Type_, target: string, slotModifiers: $List_<$SlotModifier_>, titleX: number, titleY: number, labelX: number, labelY: number, xOff: number, yOff: number, wOff: number, hOff: number, titleColor: number, labelColor: number, sprites: $List_<$SimpleSprite_>, textList: $List_<$SimpleText_>, widgetModifiers: $List_<$WidgetModifier_>, specialOffsets: $Map_<string, $SpecialOffset_>);
        constructor(type: $GuiModifier$Type_, target: string, slotModifiers: $List_<$SlotModifier_>, titleX: number, titleY: number, labelX: number, labelY: number, xOff: number, yOff: number, wOff: number, hOff: number, titleColor: (number) | undefined, labelColor: (number) | undefined, sprites: $List_<$SimpleSprite_>, textList: $List_<$SimpleText_>, widgetModifiers: $List_<$WidgetModifier_>, specialOffsets: $Map_<string, $SpecialOffset_>);
    }
    /**
     * Values that may be interpreted as {@link $GuiModifier}.
     */
    export type $GuiModifier_ = { slotModifiers?: $List_<$SlotModifier_>, type?: $GuiModifier$Type_, labelColor?: number, yOff?: number, titleY?: number, target?: string, titleX?: number, labelY?: number, labelX?: number, xOff?: number, titleColor?: number, specialOffsets?: $Map_<string, $SpecialOffset_>, widgetModifiers?: $List_<$WidgetModifier_>, wOff?: number, textList?: $List_<$SimpleText_>, sprites?: $List_<$SimpleSprite_>, hOff?: number,  } | [slotModifiers?: $List_<$SlotModifier_>, type?: $GuiModifier$Type_, labelColor?: number, yOff?: number, titleY?: number, target?: string, titleX?: number, labelY?: number, labelX?: number, xOff?: number, titleColor?: number, specialOffsets?: $Map_<string, $SpecialOffset_>, widgetModifiers?: $List_<$WidgetModifier_>, wOff?: number, textList?: $List_<$SimpleText_>, sprites?: $List_<$SimpleSprite_>, hOff?: number, ];
    export class $WidgetModifier extends $Record {
        xOffset(): number;
        yOffset(): number;
        maybeModify(widget: $AbstractWidget): void;
        message(): (string) | undefined;
        targetClass(): (string) | undefined;
        width(): number;
        targetX(): ($IntRange) | undefined;
        targetY(): ($IntRange) | undefined;
        targetMessage(): (string) | undefined;
        targetW(): ($IntRange) | undefined;
        targetH(): ($IntRange) | undefined;
        static CODEC: $Codec<$WidgetModifier>;
        constructor(xOffset: number, yOffset: number, width: number, message: (string) | undefined, targetX: ($IntRange_) | undefined, targetY: ($IntRange_) | undefined, targetW: ($IntRange_) | undefined, targetH: ($IntRange_) | undefined, targetMessage: (string) | undefined, targetClass: (string) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $WidgetModifier}.
     */
    export type $WidgetModifier_ = { message?: (string) | undefined, targetMessage?: (string) | undefined, targetW?: ($IntRange_) | undefined, yOffset?: number, targetH?: ($IntRange_) | undefined, targetX?: ($IntRange_) | undefined, targetY?: ($IntRange_) | undefined, targetClass?: (string) | undefined, xOffset?: number, width?: number,  } | [message?: (string) | undefined, targetMessage?: (string) | undefined, targetW?: ($IntRange_) | undefined, yOffset?: number, targetH?: ($IntRange_) | undefined, targetX?: ($IntRange_) | undefined, targetY?: ($IntRange_) | undefined, targetClass?: (string) | undefined, xOffset?: number, width?: number, ];
    export class $IntRange {
        static merge(a: $IntRange_, b: $IntRange_): $IntRange;
        static CODEC: $Codec<$IntRange>;
    }
    export interface $IntRange {
        has(value: number): boolean;
        getValues(): $Iterable<number>;
        get values(): $Iterable<number>;
    }
    /**
     * Values that may be interpreted as {@link $IntRange}.
     */
    export type $IntRange_ = (() => $Iterable_<number>);
    export class $GuiModifier$Type extends $Enum<$GuiModifier$Type> implements $StringRepresentable {
        static values(): $GuiModifier$Type[];
        static valueOf(name: string): $GuiModifier$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SCREEN_TITLE: $GuiModifier$Type;
        static SCREEN_CLASS: $GuiModifier$Type;
        static MENU_ID: $GuiModifier$Type;
        static MENU_CLASS: $GuiModifier$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GuiModifier$Type}.
     */
    export type $GuiModifier$Type_ = "menu_id" | "menu_class" | "screen_class" | "screen_title";
    export class $SlotModifier extends $Record {
        xOffset(): number;
        yOffset(): number;
        modify(slot: $Slot): void;
        hasCustomColor(): boolean;
        matches(slot: $Slot): boolean;
        targets(): ($IntRange) | undefined;
        targetClass(): (string) | undefined;
        color(): number;
        static renderSlotHighlight(graphics: $GuiGraphics, x: number, y: number, slotColor: number, slotColor2: number, offset: number): void;
        renderCustomHighlight(graphics: $GuiGraphics, x: number, y: number, offset: number): void;
        zOffset(): number;
        targetX(): ($IntRange) | undefined;
        targetY(): ($IntRange) | undefined;
        hasOffset(): boolean;
        color2(): number;
        static CODEC: $Codec<$SlotModifier>;
        constructor(targets: ($IntRange_) | undefined, color: number, color2: number, xOffset: number, yOffset: number, zOffset: number, targetX: ($IntRange_) | undefined, targetY: ($IntRange_) | undefined, targetClass: (string) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $SlotModifier}.
     */
    export type $SlotModifier_ = { color?: number, yOffset?: number, color2?: number, targetY?: ($IntRange_) | undefined, targetX?: ($IntRange_) | undefined, targetClass?: (string) | undefined, targets?: ($IntRange_) | undefined, xOffset?: number, zOffset?: number,  } | [color?: number, yOffset?: number, color2?: number, targetY?: ($IntRange_) | undefined, targetX?: ($IntRange_) | undefined, targetClass?: (string) | undefined, targets?: ($IntRange_) | undefined, xOffset?: number, zOffset?: number, ];
    export class $ScreenModifier extends $Record {
        merge(newMod: $ScreenModifier_): $ScreenModifier;
        extraRenderables(): $List<$Renderable>;
        modifyWidgets(button: $AbstractWidget): void;
        renderExtrs(poseStack: $GuiGraphics, mouseX: number, mouseY: number, partialTicks: number): void;
        getSpecial(key: string): $SpecialOffset;
        static fromGuiMod(original: $GuiModifier_): $ScreenModifier;
        xOff(): number;
        titleY(): number;
        labelX(): number;
        yOff(): number;
        hOff(): number;
        titleX(): number;
        titleColor(): number;
        labelY(): number;
        wOff(): number;
        labelColor(): number;
        widgetModifiers(): $List<$WidgetModifier>;
        specialOffsets(): $Map<string, $SpecialOffset>;
        constructor(titleX: number, titleY: number, labelX: number, labelY: number, xOff: number, yOff: number, wOff: number, hOff: number, titleColor: number, labelColor: number, extraRenderables: $List_<$Renderable_>, widgetModifiers: $List_<$WidgetModifier_>, specialOffsets: $Map_<string, $SpecialOffset_>);
    }
    /**
     * Values that may be interpreted as {@link $ScreenModifier}.
     */
    export type $ScreenModifier_ = { yOff?: number, labelY?: number, labelX?: number, titleColor?: number, titleY?: number, titleX?: number, wOff?: number, extraRenderables?: $List_<$Renderable_>, widgetModifiers?: $List_<$WidgetModifier_>, hOff?: number, specialOffsets?: $Map_<string, $SpecialOffset_>, xOff?: number, labelColor?: number,  } | [yOff?: number, labelY?: number, labelX?: number, titleColor?: number, titleY?: number, titleX?: number, wOff?: number, extraRenderables?: $List_<$Renderable_>, widgetModifiers?: $List_<$WidgetModifier_>, hOff?: number, specialOffsets?: $Map_<string, $SpecialOffset_>, xOff?: number, labelColor?: number, ];
    export class $SlotifyScreen {
    }
    export interface $SlotifyScreen {
        polytone$getModifier(): $ScreenModifier;
        polytone$hasSprites(): boolean;
        polytone$renderExtraSprites(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
}
