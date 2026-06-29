import { $MapDimension } from "@package/xaero/map/world";
import { $MultiTextureRenderTypeRenderer } from "@package/xaero/map/graphics/renderer/multitexture";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $XaeroFullscreenMapAccessor } from "@package/com/simibubi/create/foundation/mixin/compat/xaeros";
import { $CycleButton, $Renderable, $Button } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus, $KeyMapping } from "@package/net/minecraft/client";
import { $RightClickOption } from "@package/xaero/map/gui/dropdown/rightclick";
import { $ArrayList, $List } from "@package/java/util";
import { $ScreenBase as $ScreenBase$1, $GuiSettings } from "@package/xaero/lib/client/gui";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $MapProcessor } from "@package/xaero/map";
import { $ConfigOptionScreenEntry } from "@package/xaero/lib/client/config/option/ui";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BufferBuilder, $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $PNGExportResult } from "@package/xaero/map/file/export";
import { $Font } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $Matrix4f } from "@package/org/joml";
export * as message from "@package/xaero/map/gui/message";
export * as dropdown from "@package/xaero/map/gui/dropdown";

declare module "@package/xaero/map/gui" {
    /**
     * @deprecated
     */
    export class $ScreenBase extends $ScreenBase$1 {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $Screen;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        escape: $Screen;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $MapTileSelection {
        getRight(): number;
        getLeft(): number;
        getBottom(): number;
        getTop(): number;
        getStartX(): number;
        setEnd(arg0: number, arg1: number): void;
        getStartZ(): number;
        getEndX(): number;
        getEndZ(): number;
        constructor(arg0: number, arg1: number);
        get right(): number;
        get left(): number;
        get bottom(): number;
        get top(): number;
        get startX(): number;
        get startZ(): number;
        get endX(): number;
        get endZ(): number;
    }
    export class $IRightClickableElement {
    }
    export interface $IRightClickableElement {
        isRightClickValid(): boolean;
        getRightClickOptions(): $ArrayList<$RightClickOption>;
        getRightClickTitleBackgroundColor(): number;
        get rightClickValid(): boolean;
        get rightClickOptions(): $ArrayList<$RightClickOption>;
        get rightClickTitleBackgroundColor(): number;
    }
    export class $GuiMap extends $ScreenBase implements $IRightClickableElement, $XaeroFullscreenMapAccessor {
        closeRightClick(): void;
        drawFarArrowOnMap(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawArrowOnMap(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number): void;
        addButton<T extends $GuiEventListener>(arg0: T): T;
        drawObjectOnMap(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getUserScale(): number;
        onCaveModeStartSet(): void;
        getMapProcessor(): $MapProcessor;
        getFutureDimension(): $MapDimension;
        onRadarButton(arg0: $Button): void;
        getRadarButton(): $Button;
        onClaimsButton(arg0: $Button): void;
        drawDotOnMap(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number): void;
        isRightClickValid(): boolean;
        enableCaveModeOptions(): void;
        static renderTexturedModalRect(arg0: $Matrix4f, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        onRightClickClosed(): void;
        getTrackedPlayerKeyBinding(): $KeyMapping;
        getRightClickOptions(): $ArrayList<$RightClickOption>;
        mapClicked(arg0: number, arg1: number, arg2: number): void;
        static buildTexturedModalSubRectWithLighting(arg0: $Matrix4f, arg1: $BufferBuilder, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        static renderTexturedModalSubRectWithLighting(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: boolean, arg11: $MultiTextureRenderTypeRenderer): void;
        static renderTexturedModalRectWithLighting3(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: $MultiTextureRenderTypeRenderer): void;
        getRightClickTitleBackgroundColor(): number;
        static buildTexturedModalRectWithLighting(arg0: $Matrix4f, arg1: $BufferBuilder, arg2: number, arg3: number, arg4: number, arg5: number): void;
        create$getCameraZ(): number;
        create$getCameraX(): number;
        create$getScale(): number;
        create$getMapProcessor(): $MapProcessor;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $Screen;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        playersMenu: boolean;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        waypointMenu: boolean;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        noUploadingLimits: boolean;
        escape: $Screen;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Screen, arg2: $MapProcessor, arg3: $Entity);
        get userScale(): number;
        get mapProcessor(): $MapProcessor;
        get futureDimension(): $MapDimension;
        get radarButton(): $Button;
        get rightClickValid(): boolean;
        get trackedPlayerKeyBinding(): $KeyMapping;
        get rightClickOptions(): $ArrayList<$RightClickOption>;
        get rightClickTitleBackgroundColor(): number;
    }
    export class $ExportScreen extends $GuiSettings {
        primaryOptionEntry<T>(arg0: $ConfigOption<T>): $ConfigOptionScreenEntry<T>;
        getSelection(): $MapTileSelection;
        onExportDone(arg0: $PNGExportResult): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $Screen;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        fullExport: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        escape: $Screen;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Screen, arg2: $MapProcessor, arg3: $MapTileSelection);
        get selection(): $MapTileSelection;
    }
}
