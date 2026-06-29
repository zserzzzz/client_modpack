import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $Collection, $Set } from "@package/java/util";

declare module "@package/de/z0rdak/yawp/core/area" {
    export class $BlockDisplayProperties {
        lightLevel(): number;
        blockRl(): $ResourceLocation;
        setHasGlow(arg0: boolean): void;
        setBlockRl(arg0: $ResourceLocation_): void;
        hasGlow(): boolean;
        setLightLevel(arg0: number): void;
        static createRndDefault(): $BlockDisplayProperties;
        static randomFromDefault(): $ResourceLocation;
        static DEFAULT_GLOW: boolean;
        static CODEC: $MapCodec<$BlockDisplayProperties>;
        static DEFAULT_LIGHT_LEVEL: number;
        static DEFAULT_BLOCKS: $List<$ResourceLocation>;
        constructor(arg0: $ResourceLocation_, arg1: boolean, arg2: number);
    }
    export class $AreaType extends $Enum<$AreaType> {
        static values(): $AreaType[];
        static valueOf(arg0: string): $AreaType;
        static of(arg0: string): $AreaType;
        static getTypes(): $Collection<string>;
        static isValidAreaType(arg0: string): boolean;
        static CYLINDER: $AreaType;
        static SPHERE: $AreaType;
        areaType: string;
        static CUBOID: $AreaType;
        neededBlocks: number;
        static PRISM: $AreaType;
        maxBlocks: number;
        static POLYGON_3D: $AreaType;
        static get types(): $Collection<string>;
    }
    /**
     * Values that may be interpreted as {@link $AreaType}.
     */
    export type $AreaType_ = "cuboid" | "cylinder" | "sphere" | "polygon_3d" | "prism";
    export class $TeleportAnchor {
        getName(): string;
        setName(arg0: string): void;
        setPos(arg0: $BlockPos_): void;
        getPos(): $BlockPos;
        static CODEC: $Codec<$TeleportAnchor>;
        constructor(arg0: $BlockPos_, arg1: string);
    }
    export class $IMarkableArea {
    }
    export interface $IMarkableArea {
        intersects(arg0: $IMarkableArea): boolean;
        contains(arg0: $BlockPos_): boolean;
        getType(): $MarkedAreaType<never>;
        updateDisplay(arg0: $BlockDisplayProperties): void;
        getFrame(): $Set<$BlockPos>;
        getHull(): $Set<$BlockPos>;
        getDisplay(): $BlockDisplayProperties;
        containsOther(arg0: $IMarkableArea): boolean;
        getMinimalOutline(): $Set<$BlockPos>;
        markedBlocks(): $Set<$BlockPos>;
        getAreaType(): $AreaType;
        get type(): $MarkedAreaType<never>;
        get frame(): $Set<$BlockPos>;
        get hull(): $Set<$BlockPos>;
        get display(): $BlockDisplayProperties;
        get minimalOutline(): $Set<$BlockPos>;
        get areaType(): $AreaType;
    }
    export class $MarkedAreaType<T extends $IMarkableArea> extends $Record {
        codec(): $MapCodec<T>;
        constructor(codec: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $MarkedAreaType}.
     */
    export type $MarkedAreaType_<T> = { codec?: $MapCodec_<$IMarkableArea>,  } | [codec?: $MapCodec_<$IMarkableArea>, ];
    export class $RegionAnchors {
        rename(arg0: string, arg1: string): void;
        addOrUpdate(arg0: string, arg1: $BlockPos_): void;
        hasAnchor(arg0: string, arg1: $BlockPos_): boolean;
        hasAnchor(arg0: string): boolean;
        getTpAnchors(): $Map<string, $TeleportAnchor>;
        getTpAnchor(arg0: string): $TeleportAnchor;
        removeTpAnchor(arg0: $BlockPos_): void;
        removeTpAnchor(arg0: string): void;
        hasAnchorWithPos(arg0: $BlockPos_): boolean;
        getAnchors(): $List<$TeleportAnchor>;
        setTpAnchors(arg0: $Map_<string, $TeleportAnchor>): void;
        addTpAnchor(arg0: $BlockPos_, arg1: string): $TeleportAnchor;
        addTpAnchor(arg0: $BlockPos_): $TeleportAnchor;
        constructor();
        constructor(arg0: $Map_<string, $TeleportAnchor>);
        get anchors(): $List<$TeleportAnchor>;
    }
}
