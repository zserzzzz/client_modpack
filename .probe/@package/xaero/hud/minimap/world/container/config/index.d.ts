import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        isLoaded(): boolean;
        setLoaded(arg0: boolean): void;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        getServerTeleportCommandRotationFormat(): string;
        isIgnoreHeightmaps(): boolean;
        setIgnoreHeightmaps(arg0: boolean): void;
        getServerTeleportCommandFormat(): string;
        isUsingDefaultTeleportCommand(): boolean;
        setServerTeleportCommandFormat(arg0: string): void;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        isTeleportationEnabled(): boolean;
        setUsingMultiworldDetection(arg0: boolean): void;
        isSortReversed(): boolean;
        getSortType(): $WaypointsSort;
        toggleSortType(): void;
        setSortType(arg0: $WaypointsSort_): void;
        setSortReversed(arg0: boolean): void;
        toggleSortReversed(): void;
        getDefaultMultiworldId(): string;
        isUsingMultiworldDetection(): boolean;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        resetSubWorldConnections(arg0: boolean): void;
        setIgnoreServerLevelId(arg0: boolean): void;
        setDefaultMultiworldId(arg0: string): void;
        isIgnoreServerLevelId(): boolean;
        setTeleportationEnabled(arg0: boolean): void;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
