import { $Level } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $MinimapWorldContainer, $MinimapWorldRootContainer } from "@package/xaero/hud/minimap/world/container";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $HudMod } from "@package/xaero/common";
import { $HashMap } from "@package/java/util";
import { $WaypointSet } from "@package/xaero/hud/minimap/waypoint/set";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";
export * as connection from "@package/xaero/hud/minimap/world/connection";
export * as io from "@package/xaero/hud/minimap/world/io";
export * as container from "@package/xaero/hud/minimap/world/container";
export * as state from "@package/xaero/hud/minimap/world/state";

declare module "@package/xaero/hud/minimap/world" {
    export class $MinimapDimensionHelper {
        getDimensionDirectoryName(arg0: $ResourceKey_<$Level>): string;
        findDimensionKeyForOldName(arg0: $LocalPlayer, arg1: string): $ResourceKey<$Level>;
        getDimensionKeyForDirectoryName(arg0: string): $ResourceKey<$Level>;
        getDimCoordinateScale(arg0: $MinimapWorld): number;
        getDimensionDivision(arg0: $MinimapWorld): number;
        constructor();
    }
    export class $MinimapWorldManager {
        removeContainer(arg0: $XaeroPath): boolean;
        addWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        containerExists(arg0: $XaeroPath): boolean;
        getWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getCustomWaypoints(arg0: $ResourceLocation_): $Int2ObjectMap<$Waypoint>;
        getCustomWaypoints(): $Iterable<$Waypoint>;
        addWorld(arg0: $XaeroPath): $MinimapWorld;
        getWorldContainerNullable(arg0: $XaeroPath): $MinimapWorldContainer;
        /**
         * @deprecated
         */
        getRootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        getWorld(arg0: $XaeroPath): $MinimapWorld;
        getCurrentWorld(arg0: $XaeroPath): $MinimapWorld;
        getCurrentWorld(): $MinimapWorld;
        getAutoRootContainer(): $MinimapWorldRootContainer;
        getAutoWorld(): $MinimapWorld;
        getRootWorldContainer(arg0: $XaeroPath): $MinimapWorldRootContainer;
        getRootWorldContainer(arg0: string): $MinimapWorldRootContainer;
        getRootContainers(): $Iterable<$MinimapWorldRootContainer>;
        addRootWorldContainer(arg0: $MinimapWorldRootContainer): void;
        getCurrentRootContainer(): $MinimapWorldRootContainer;
        hasCustomWaypoints(): boolean;
        constructor(arg0: $HudMod, arg1: $MinimapSession);
        get rootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        get autoRootContainer(): $MinimapWorldRootContainer;
        get autoWorld(): $MinimapWorld;
        get rootContainers(): $Iterable<$MinimapWorldRootContainer>;
        get currentRootContainer(): $MinimapWorldRootContainer;
    }
    export class $MinimapWorld {
        getNode(): string;
        setNode(arg0: string): void;
        getContainer(): $MinimapWorldContainer;
        setDimId(arg0: $ResourceKey_<$Level>): void;
        addWaypointSet(arg0: string): void;
        addWaypointSet(arg0: $WaypointSet): $WaypointSet;
        cleanupOnSave(arg0: $Path_): void;
        getSetCount(): number;
        removeWaypointSet(arg0: string): $WaypointSet;
        getLocalWorldKey(): $XaeroPath;
        getDimId(): $ResourceKey<$Level>;
        requestRemovalOnSave(arg0: string): void;
        hasSomethingToRemoveOnSave(): boolean;
        getFullPath(): $XaeroPath;
        getRootConfig(): $RootConfig;
        getWaypointSet(arg0: string): $WaypointSet;
        getSlimeChunkSeed(): number;
        setSlimeChunkSeed(arg0: number): void;
        setContainer(arg0: $MinimapWorldContainer): void;
        getCurrentWaypointSet(): $WaypointSet;
        getCurrentWaypointSetId(): string;
        setCurrentWaypointSetId(arg0: string): void;
        getIterableWaypointSets(): $Iterable<$WaypointSet>;
        get setCount(): number;
        get localWorldKey(): $XaeroPath;
        get fullPath(): $XaeroPath;
        get rootConfig(): $RootConfig;
        get currentWaypointSet(): $WaypointSet;
        get iterableWaypointSets(): $Iterable<$WaypointSet>;
    }
}
