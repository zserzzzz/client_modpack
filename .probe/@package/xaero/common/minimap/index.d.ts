import { $Level } from "@package/net/minecraft/world/level";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $Item } from "@package/net/minecraft/world/item";
import { $ClientSyncedTrackedPlayerManager as $ClientSyncedTrackedPlayerManager$1 } from "@package/xaero/hud/minimap/player/tracker/synced";
import { $ClientSyncedTrackedPlayerManager } from "@package/xaero/common/minimap/radar/tracker/synced";
import { $HudMod, $IXaeroMinimap } from "@package/xaero/common";
import { $CustomVertexConsumers } from "@package/xaero/common/graphics";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MinimapWriter } from "@package/xaero/common/minimap/write";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Minimap } from "@package/xaero/hud/minimap";
import { $MinimapRadar } from "@package/xaero/common/minimap/radar";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as radar from "@package/xaero/common/minimap/radar";
export * as region from "@package/xaero/common/minimap/region";
export * as waypoints from "@package/xaero/common/minimap/waypoints";
export * as render from "@package/xaero/common/minimap/render";
export * as highlight from "@package/xaero/common/minimap/highlight";
export * as write from "@package/xaero/common/minimap/write";
export * as mcworld from "@package/xaero/common/minimap/mcworld";
export * as element from "@package/xaero/common/minimap/element";

declare module "@package/xaero/common/minimap" {
    export class $MinimapProcessor {
        cleanup(): void;
        onRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $CustomVertexConsumers): void;
        setNoMinimapMessageReceived(arg0: boolean): void;
        setFairPlayOnlyMessageReceived(arg0: boolean): void;
        getSession(): $MinimapSession;
        onClientTick(): void;
        getForcedFairPlay(): boolean;
        /**
         * @deprecated
         */
        getClientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        serverHasMod(): boolean;
        updateMinimapItem(): void;
        static hasMinimapItem(arg0: $Player): boolean;
        getLastMapDimensionScale(): number;
        isCaveModeDisplayed(): boolean;
        getLastMapDimension(): $ResourceKey<$Level>;
        setConsideringNetherFairPlayMessage(arg0: boolean): void;
        onPlayerTick(): void;
        getSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        setToResetImage(arg0: boolean): void;
        isManualCaveMode(): boolean;
        getMinimapZoom(): number;
        isToResetImage(): boolean;
        getMinimapWriter(): $MinimapWriter;
        isEnlargedMap(): boolean;
        getRadarSession(): $RadarSession;
        getMinimapInterface(): $MinimapInterface;
        /**
         * @deprecated
         */
        getLastPlayerDimDiv(): number;
        setLastMapDimension(arg0: $ResourceKey_<$Level>): void;
        /**
         * @deprecated
         */
        setLastPlayerDimDiv(arg0: number): void;
        setLastMapDimensionScale(arg0: number): void;
        getMinimapBufferSize(arg0: number): number;
        getMinimapItem(): $Item;
        getMinimapSize(): number;
        canUseFrameBuffer(): boolean;
        getFBOBufferSize(): number;
        setServerModNetworkVersion(arg0: number): void;
        checkFBO(): void;
        toggleManualCaveMode(): void;
        getNoMinimapMessageReceived(): boolean;
        instantZoom(): void;
        setEnlargedMap(arg0: boolean): void;
        updateZoom(): void;
        getServerModNetworkVersion(): number;
        isConsideringNetherFairPlayMessage(): boolean;
        getTargetZoom(): number;
        /**
         * @deprecated
         */
        getEntityRadar(): $MinimapRadar;
        static DEBUG: boolean;
        static FRAME: number;
        constructor(arg0: $IXaeroMinimap, arg1: $MinimapSession, arg2: $MinimapWriter, arg3: $RadarSession, arg4: $ClientSyncedTrackedPlayerManager$1);
        set fairPlayOnlyMessageReceived(value: boolean);
        get session(): $MinimapSession;
        get forcedFairPlay(): boolean;
        get clientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        get caveModeDisplayed(): boolean;
        get syncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        get manualCaveMode(): boolean;
        get minimapZoom(): number;
        get minimapWriter(): $MinimapWriter;
        get radarSession(): $RadarSession;
        get minimapInterface(): $MinimapInterface;
        get minimapItem(): $Item;
        get minimapSize(): number;
        get FBOBufferSize(): number;
        get targetZoom(): number;
        get entityRadar(): $MinimapRadar;
    }
    /**
     * @deprecated
     */
    export class $MinimapInterface extends $Minimap {
        constructor(arg0: $HudMod);
    }
}
