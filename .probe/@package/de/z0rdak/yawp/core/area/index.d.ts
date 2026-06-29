import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $Collection, $Set } from "@package/java/util";

declare module "@package/de/z0rdak/yawp/core/area" {
    export class $BlockDisplayProperties {
        setLightLevel(arg0: number): void;
        hasGlow(): boolean;
        setBlockRl(arg0: $ResourceLocation_): void;
        setHasGlow(arg0: boolean): void;
        lightLevel(): number;
        blockRl(): $ResourceLocation;
        static createRndDefault(): $BlockDisplayProperties;
        static randomFromDefault(): $ResourceLocation;
        static DEFAULT_GLOW: boolean;
        static CODEC: $MapCodec<$BlockDisplayProperties>;
        static DEFAULT_LIGHT_LEVEL: number;
        static DEFAULT_BLOCKS: $List<$ResourceLocation>;
        constructor(arg0: $ResourceLocation_, arg1: boolean, arg2: number);
    }
    export class $AreaType extends $Enum<$AreaType> {
        static isValidAreaType(arg0: string): boolean;
        static values(): $AreaType[];
        static valueOf(arg0: string): $AreaType;
        static of(arg0: string): $AreaType;
        static getTypes(): $Collection<string>;
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
        getPos(): $BlockPos;
        setPos(arg0: $BlockPos_): void;
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
        containsOther(arg0: $IMarkableArea): boolean;
        markedBlocks(): $Set<$BlockPos>;
        getAreaType(): $AreaType;
        getMinimalOutline(): $Set<$BlockPos>;
        getDisplay(): $BlockDisplayProperties;
        getHull(): $Set<$BlockPos>;
        get type(): $MarkedAreaType<never>;
        get frame(): $Set<$BlockPos>;
        get areaType(): $AreaType;
        get minimalOutline(): $Set<$BlockPos>;
        get display(): $BlockDisplayProperties;
        get hull(): $Set<$BlockPos>;
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
        getTpAnchors(): $Map<string, $TeleportAnchor>;
        getTpAnchor(arg0: string): $TeleportAnchor;
        removeTpAnchor(arg0: string): void;
        removeTpAnchor(arg0: $BlockPos_): void;
        hasAnchorWithPos(arg0: $BlockPos_): boolean;
        rename(arg0: string, arg1: string): void;
        hasAnchor(arg0: string): boolean;
        hasAnchor(arg0: string, arg1: $BlockPos_): boolean;
        addOrUpdate(arg0: string, arg1: $BlockPos_): void;
        getAnchors(): $List<$TeleportAnchor>;
        setTpAnchors(arg0: $Map_<string, $TeleportAnchor>): void;
        addTpAnchor(arg0: $BlockPos_): $TeleportAnchor;
        addTpAnchor(arg0: $BlockPos_, arg1: string): $TeleportAnchor;
        constructor(arg0: $Map_<string, $TeleportAnchor>);
        constructor();
        get anchors(): $List<$TeleportAnchor>;
    }
}
