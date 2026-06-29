import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        isLoaded(): boolean;
        setLoaded(arg0: boolean): void;
        getSortType(): $WaypointsSort;
        isSortReversed(): boolean;
        getServerTeleportCommandRotationFormat(): string;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        isIgnoreHeightmaps(): boolean;
        setIgnoreHeightmaps(arg0: boolean): void;
        isTeleportationEnabled(): boolean;
        toggleSortType(): void;
        setSortType(arg0: $WaypointsSort_): void;
        setSortReversed(arg0: boolean): void;
        toggleSortReversed(): void;
        setUsingMultiworldDetection(arg0: boolean): void;
        getServerTeleportCommandFormat(): string;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        setServerTeleportCommandFormat(arg0: string): void;
        isUsingDefaultTeleportCommand(): boolean;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        isUsingMultiworldDetection(): boolean;
        getDefaultMultiworldId(): string;
        resetSubWorldConnections(arg0: boolean): void;
        isIgnoreServerLevelId(): boolean;
        setIgnoreServerLevelId(arg0: boolean): void;
        setDefaultMultiworldId(arg0: string): void;
        setTeleportationEnabled(arg0: boolean): void;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
