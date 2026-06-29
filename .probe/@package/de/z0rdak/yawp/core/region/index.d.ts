import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $AreaType, $RegionAnchors, $IMarkableArea } from "@package/de/z0rdak/yawp/core/area";
import { $PlayerContainer } from "@package/de/z0rdak/yawp/core/group";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $RegionFlag_, $IFlag, $RegionFlags } from "@package/de/z0rdak/yawp/core/flag";
import { $Enum } from "@package/java/lang";
import { $UUID_, $Map_, $Map, $Set } from "@package/java/util";

declare module "@package/de/z0rdak/yawp/core/region" {
    export class $RegionType extends $Enum<$RegionType> {
        static values(): $RegionType[];
        static valueOf(arg0: string): $RegionType;
        static of(arg0: string): $RegionType;
        static DIMENSION: $RegionType;
        static GLOBAL: $RegionType;
        static LOCAL: $RegionType;
        static TEMPLATE: $RegionType;
        type: string;
    }
    /**
     * Values that may be interpreted as {@link $RegionType}.
     */
    export type $RegionType_ = "global" | "dimension" | "local" | "template";
    export class $IMarkableRegion {
    }
    export interface $IMarkableRegion extends $IProtectedRegion {
        contains(arg0: $BlockPos_): boolean;
        setPriority(arg0: number): void;
        getPriority(): number;
        rename(arg0: string): void;
        getArea(): $IMarkableArea;
        getAreaType(): $AreaType;
        setArea(arg0: $IMarkableArea): void;
        getTpAnchors(): $RegionAnchors;
        get areaType(): $AreaType;
        get tpAnchors(): $RegionAnchors;
    }
    export class $IProtectedRegion {
    }
    export interface $IProtectedRegion {
        getName(): string;
        getParent(): $IProtectedRegion;
        isActive(): boolean;
        addFlag(arg0: $IFlag): void;
        getFlags(): $RegionFlags;
        getChildren(): $Map<string, $IProtectedRegion>;
        permits(arg0: $Player): boolean;
        getGroup(arg0: string): $PlayerContainer;
        setFlags(arg0: $RegionFlags): void;
        getParentName(): string;
        removeChild(arg0: $IProtectedRegion): void;
        getFlag(arg0: string): $IFlag;
        addChild(arg0: $IProtectedRegion): boolean;
        clearChildren(): void;
        isMuted(): boolean;
        getGroups(): $Map<string, $PlayerContainer>;
        getDim(): $ResourceKey<$Level>;
        hasPlayer(arg0: $UUID_, arg1: string): boolean;
        hasChild(arg0: $IProtectedRegion): boolean;
        removePlayer(arg0: $UUID_, arg1: string): void;
        addPlayer(arg0: $UUID_, arg1: string, arg2: string): void;
        addPlayer(arg0: $Player, arg1: string): void;
        removeFlag(arg0: string): void;
        removeTeam(arg0: string, arg1: string): void;
        setIsMuted(arg0: boolean): void;
        setGroups(arg0: $Map_<string, $PlayerContainer>): void;
        addTeam(arg0: string, arg1: string): void;
        hasTeam(arg0: string, arg1: string): boolean;
        isInGroup(arg0: $Player, arg1: string): boolean;
        getRegionType(): $RegionType;
        getChildrenNames(): $Set<string>;
        containsFlag(arg0: $RegionFlag_): boolean;
        containsFlag(arg0: string): boolean;
        setIsActive(arg0: boolean): void;
        resetGroups(): void;
        get name(): string;
        get parent(): $IProtectedRegion;
        get active(): boolean;
        get children(): $Map<string, $IProtectedRegion>;
        get parentName(): string;
        get muted(): boolean;
        get dim(): $ResourceKey<$Level>;
        get regionType(): $RegionType;
        get childrenNames(): $Set<string>;
    }
}
