import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $FMLLoadCompleteEvent } from "@package/net/neoforged/fml/event/lifecycle";
import { $RegisterMapDecorationRenderersEvent } from "@package/net/neoforged/neoforge/client/gui/map";
import { $AddPackFindersEvent, $RegisterCommandsEvent, $AddReloadListenerEvent } from "@package/net/neoforged/neoforge/event";
import { $EntityEvent$EnteringSection, $EntityJoinLevelEvent, $EntityLeaveLevelEvent, $EntityMountEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $ServerStoppingEvent } from "@package/net/neoforged/neoforge/event/server";
import { $ChunkEvent$Unload, $LevelEvent$Unload, $LevelEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $PlayerEvent$PlayerLoggedOutEvent, $ItemTooltipEvent, $PlayerEvent$StartTracking, $AttackEntityEvent, $PlayerInteractEvent$LeftClickEmpty, $PlayerEvent$PlayerLoggedInEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $ServerTickEvent$Post, $EntityTickEvent$Pre, $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $RenderLevelStageEvent, $RegisterClientCommandsEvent, $RegisterGuiLayersEvent, $ClientTickEvent$Post, $ClientPlayerNetworkEvent$LoggingOut, $RegisterItemDecorationsEvent, $ViewportEvent$RenderFog, $ClientPlayerNetworkEvent$LoggingIn, $ViewportEvent$ComputeCameraAngles, $EntityRenderersEvent$AddLayers, $ClientTickEvent$Pre, $InputEvent$InteractionKeyMappingTriggered, $RenderFrameEvent$Pre, $InputEvent$Key, $RegisterClientReloadListenersEvent, $InputEvent$MouseScrollingEvent, $InputEvent$MouseButton$Pre } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/simibubi/create/foundation/events" {
    export class $CommonEvents$ModBusEvents {
        static onRegisterMapDecorationRenderers(arg0: $RegisterMapDecorationRenderersEvent): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        static addPackFinders(arg0: $AddPackFindersEvent): void;
        constructor();
    }
    export class $CommonEvents {
        static onEntityTick(arg0: $EntityTickEvent$Pre): void;
        static serverStopping(arg0: $ServerStoppingEvent): void;
        static playerLoggedOut(arg0: $PlayerEvent$PlayerLoggedOutEvent): void;
        static onChunkUnloaded(arg0: $ChunkEvent$Unload): void;
        static onLoadWorld(arg0: $LevelEvent$Load): void;
        static onUnloadWorld(arg0: $LevelEvent$Unload): void;
        static onEntityLeaveLevel(arg0: $EntityLeaveLevelEvent): void;
        static attachData(arg0: $EntityJoinLevelEvent): void;
        static onEntityEnterSection(arg0: $EntityEvent$EnteringSection): void;
        static playerLoggedIn(arg0: $PlayerEvent$PlayerLoggedInEvent): void;
        static addReloadListeners(arg0: $AddReloadListenerEvent): void;
        static leftClickEmpty(arg0: $ServerPlayer): void;
        static registerCommands(arg0: $RegisterCommandsEvent): void;
        static onServerTick(arg0: $ServerTickEvent$Post): void;
        static onServerWorldTick(arg0: $LevelTickEvent$Post): void;
        static onEntityAdded(arg0: $EntityJoinLevelEvent): void;
        static startTracking(arg0: $PlayerEvent$StartTracking): void;
        static onEntityAttackedByPlayer(arg0: $AttackEntityEvent): void;
        constructor();
    }
    export class $ClientEvents {
        static onTick(arg0: boolean): void;
        static onLoadWorld(arg0: $LevelEvent$Load): void;
        static onUnloadWorld(arg0: $LevelEvent$Unload): void;
        static addToItemTooltip(arg0: $ItemTooltipEvent): void;
        static onJoin(arg0: $ClientPlayerNetworkEvent$LoggingIn): void;
        static onCameraSetup(arg0: $ViewportEvent$ComputeCameraAngles): void;
        static onLoadComplete(arg0: $FMLLoadCompleteEvent): void;
        static registerClientCommands(arg0: $RegisterClientCommandsEvent): void;
        static onMount(arg0: $EntityMountEvent): void;
        static onTickPost(arg0: $ClientTickEvent$Post): void;
        static addEntityRendererLayers(arg0: $EntityRenderersEvent$AddLayers): void;
        static onTickPre(arg0: $ClientTickEvent$Pre): void;
        static leftClickEmpty(arg0: $PlayerInteractEvent$LeftClickEmpty): void;
        static onLeave(arg0: $ClientPlayerNetworkEvent$LoggingOut): void;
        static onRenderWorld(arg0: $RenderLevelStageEvent): void;
        static registerClientReloadListeners(arg0: $RegisterClientReloadListenersEvent): void;
        static onRenderFrame(arg0: $RenderFrameEvent$Pre): void;
        static getFogDensity(arg0: $ViewportEvent$RenderFog): void;
        static registerGuiOverlays(arg0: $RegisterGuiLayersEvent): void;
        static registerItemDecorations(arg0: $RegisterItemDecorationsEvent): void;
        constructor();
    }
    export class $InputEvents {
        static onClickInput(arg0: $InputEvent$InteractionKeyMappingTriggered): void;
        static onMouseScrolled(arg0: $InputEvent$MouseScrollingEvent): void;
        static onKeyInput(arg0: $InputEvent$Key): void;
        static onMouseInput(arg0: $InputEvent$MouseButton$Pre): void;
        constructor();
    }
}
