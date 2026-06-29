import { $Level } from "@package/net/minecraft/world/level";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $List, $Map$Entry } from "@package/java/util";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ServerWaypointManager } from "@package/xaero/hud/minimap/waypoint/server";
import { $Path } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort, $WaypointWorldContainer } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";
export * as config from "@package/xaero/hud/minimap/world/container/config";

declare module "@package/xaero/hud/minimap/world/container" {
    export class $MinimapWorldContainer {
        getName(arg0: string): string;
        isEmpty(): boolean;
        setName(arg0: string, arg1: string): void;
        getRoot(): $MinimapWorldRootContainer;
        getPath(): $XaeroPath;
        getSession(): $MinimapSession;
        setPath(arg0: $XaeroPath): void;
        getSubName(): string;
        getLastNode(): string;
        addWorld(arg0: string): $MinimapWorld;
        addWorld(arg0: $MinimapWorld): void;
        getFirstWorld(): $MinimapWorld;
        getRootConfig(): $RootConfig;
        removeName(arg0: string): void;
        getWorlds(): $Iterable<$MinimapWorld>;
        getDirectoryPath(): $Path;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        removeWorld(arg0: string): void;
        getWorldsCopy(): $List<$MinimapWorld>;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        getFullWorldName(arg0: string, arg1: string): string;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getServerWaypointManager(): $ServerWaypointManager;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        containsSubContainer(arg0: $XaeroPath): boolean;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get session(): $MinimapSession;
        get subName(): string;
        get lastNode(): string;
        get firstWorld(): $MinimapWorld;
        get rootConfig(): $RootConfig;
        get worlds(): $Iterable<$MinimapWorld>;
        get directoryPath(): $Path;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
        get worldsCopy(): $List<$MinimapWorld>;
        get serverWaypointManager(): $ServerWaypointManager;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        getDimensionType(arg0: $ResourceKey_<$Level>): $DimensionType;
        getConfig(): $RootConfig;
        /**
         * @deprecated
         */
        getSortType(): $WaypointsSort;
        /**
         * @deprecated
         */
        isSortReversed(): boolean;
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        isConfigLoaded(): boolean;
        /**
         * @deprecated
         */
        isTeleportationEnabled(): boolean;
        /**
         * @deprecated
         */
        toggleSortType(): void;
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort_): void;
        /**
         * @deprecated
         */
        setSortReversed(arg0: boolean): void;
        /**
         * @deprecated
         */
        toggleSortReversed(): void;
        setDimensionTypeId(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        renameOldContainer(arg0: $XaeroPath): void;
        /**
         * @deprecated
         */
        setUsingMultiworldDetection(arg0: boolean): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandFormat(): string;
        /**
         * @deprecated
         */
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        /**
         * @deprecated
         */
        setServerTeleportCommandFormat(arg0: string): void;
        /**
         * @deprecated
         */
        isUsingDefaultTeleportCommand(): boolean;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        /**
         * @deprecated
         */
        isUsingMultiworldDetection(): boolean;
        /**
         * @deprecated
         */
        getDefaultMultiworldId(): string;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
        updateConnectionsField(arg0: $WaypointSession): void;
        /**
         * @deprecated
         */
        setIgnoreServerLevelId(arg0: boolean): void;
        /**
         * @deprecated
         */
        setDefaultMultiworldId(arg0: string): void;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        updateDimensionType(arg0: $ClientLevel): void;
        getDimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        get config(): $RootConfig;
        get configLoaded(): boolean;
        get subWorldConnections(): $MinimapWorldConnectionManager;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
    }
}
