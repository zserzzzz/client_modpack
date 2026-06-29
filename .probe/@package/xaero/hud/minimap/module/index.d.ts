import { $MinimapProcessor } from "@package/xaero/common/minimap";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapDimensionHelper, $MinimapWorldManager } from "@package/xaero/hud/minimap/world";
import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $MinimapWorldManagerIO } from "@package/xaero/hud/minimap/world/io";
import { $HudMod } from "@package/xaero/common";
import { $HudModule, $ModuleSession } from "@package/xaero/hud/module";
import { $Minecraft } from "@package/net/minecraft/client";
import { $MultiTextureRenderTypeRendererProvider } from "@package/xaero/common/graphics/renderer/multitexture";
import { $MinimapWorldState, $MinimapWorldStateUpdater } from "@package/xaero/hud/minimap/world/state";

declare module "@package/xaero/hud/minimap/module" {
    export class $MinimapSession extends $ModuleSession<$MinimapSession> {
        getProcessor(): $MinimapProcessor;
        getMc(): $Minecraft;
        getWorldStateUpdater(): $MinimapWorldStateUpdater;
        getWorldState(): $MinimapWorldState;
        getWorldManagerIO(): $MinimapWorldManagerIO;
        getDimensionHelper(): $MinimapDimensionHelper;
        getHideMinimapUnderScreen(): boolean;
        getHideMinimapUnderF3(): boolean;
        getWorldManager(): $MinimapWorldManager;
        getRadarSession(): $RadarSession;
        getMultiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        getWaypointSession(): $WaypointSession;
        getConfiguredWidth(): number;
        constructor(arg0: $HudMod, arg1: $HudModule<$MinimapSession>, arg2: $ClientPacketListener);
        get processor(): $MinimapProcessor;
        get mc(): $Minecraft;
        get worldStateUpdater(): $MinimapWorldStateUpdater;
        get worldState(): $MinimapWorldState;
        get worldManagerIO(): $MinimapWorldManagerIO;
        get dimensionHelper(): $MinimapDimensionHelper;
        get hideMinimapUnderScreen(): boolean;
        get hideMinimapUnderF3(): boolean;
        get worldManager(): $MinimapWorldManager;
        get radarSession(): $RadarSession;
        get multiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        get waypointSession(): $WaypointSession;
        get configuredWidth(): number;
    }
}
