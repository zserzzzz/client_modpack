import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ReloadInstance } from "@package/net/minecraft/server/packs/resources";
import { $NarratorStatus, $Minecraft, $Options } from "@package/net/minecraft/client";
import { $ScreenModifier, $SlotifyScreen } from "@package/net/mehvahdjukaar/polytone/slotify";
import { $FormattedCharSequence_, $ProgressListener } from "@package/net/minecraft/util";
import { $TransferState_, $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $Music } from "@package/net/minecraft/sounds";
import { $CreateWorldScreen, $WorldCreationContext_ } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $CustomizableScreen } from "@package/de/keksuccino/fancymenu/util/rendering/ui/screen";
import { $URI } from "@package/java/net";
import { $Connection, $DisconnectionDetails_, $DisconnectionDetails } from "@package/net/minecraft/network";
import { $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $BooleanConsumer_, $BooleanConsumer } from "@package/it/unimi/dsi/fastutil/booleans";
import { $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $StructureSet_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ScreenAccessor as $ScreenAccessor$2, $DisconnectedScreenAccessor } from "@package/dev/terminalmc/autoreconnectrf/mixin/accessor";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $GridLayout$RowHelper, $LinearLayout } from "@package/net/minecraft/client/gui/layouts";
import { $ScreenAccessor as $ScreenAccessor$4 } from "@package/dev/tr7zw/trender/gui/impl/mixin/client";
import { $MutableComponent, $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $IMixinScreen } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $FlatLevelGeneratorSettings } from "@package/net/minecraft/world/level/levelgen/flat";
import { $FocusNavigationEvent$TabNavigation, $FocusNavigationEvent$ArrowNavigation, $ScreenDirection_ } from "@package/net/minecraft/client/gui/navigation";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $ScreenWithVanillaProxyElementsExt, $ScreenWithProxiesHandler } from "@package/gg/essential/gui/proxies";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $BanDetails_ } from "@package/com/mojang/authlib/minecraft";
import { $GuiEventListener, $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $IMixinConnectScreen, $IMixinChatScreen, $IMixinProgressScreen, $IMixinLevelLoadingScreen, $IMixinReceivingLevelScreen, $IMixinScreen as $IMixinScreen$1 } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $List, $List_ } from "@package/java/util";
import { $Event } from "@package/net/fabricmc/fabric/api/event";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Consumer_, $BooleanSupplier_ } from "@package/java/util/function";
import { $Registry, $HolderGetter, $Holder } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $GuiDisconnectedAccessor, $GuiScreenAccessor } from "@package/gg/essential/mixins/transformers/client/gui";
import { $SimpleTexture, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Throwable, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $Logger } from "@package/org/slf4j";
import { $ScreenExtensions } from "@package/net/fabricmc/fabric/impl/client/screen";
import { $NarratableEntry$NarrationPriority, $NarrationElementOutput, $NarratableEntry, $NarratableEntry$NarrationPriority_ } from "@package/net/minecraft/client/gui/narration";
import { $CommandSuggestions, $Tooltip, $EditBox, $AbstractSelectionList, $Renderable_, $ObjectSelectionList, $Renderable, $CycleButton, $WidgetTooltipHolder, $LogoRenderer, $Button$OnPress, $Button, $ObjectSelectionList$Entry } from "@package/net/minecraft/client/gui/components";
import { $ScreenAccessor as $ScreenAccessor$1 } from "@package/dev/terminalmc/clientsort/mixin/client/accessor";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $UDrawContext } from "@package/gg/essential/util";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $ScreenAccessor as $ScreenAccessor$3 } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $DuckLoadingOverlay } from "@package/dynamic_fps/impl/util/duck";
import { $ScreenAccessor } from "@package/net/fabricmc/fabric/mixin/screen";
import { $EssentialGuiScreenBeforeClose, $EssentialPostScreenDrawHook } from "@package/gg/essential/mixins/impl/client/gui";
import { $ChannelFuture } from "@package/io/netty/channel";
import { $ConnectScreenAccessor } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as options from "@package/net/minecraft/client/gui/screens/options";
export * as inventory from "@package/net/minecraft/client/gui/screens/inventory";
export * as reporting from "@package/net/minecraft/client/gui/screens/reporting";
export * as recipebook from "@package/net/minecraft/client/gui/screens/recipebook";
export * as achievement from "@package/net/minecraft/client/gui/screens/achievement";
export * as worldselection from "@package/net/minecraft/client/gui/screens/worldselection";
export * as packs from "@package/net/minecraft/client/gui/screens/packs";
export * as advancements from "@package/net/minecraft/client/gui/screens/advancements";
export * as telemetry from "@package/net/minecraft/client/gui/screens/telemetry";
export * as multiplayer from "@package/net/minecraft/client/gui/screens/multiplayer";
export * as social from "@package/net/minecraft/client/gui/screens/social";
export * as debug from "@package/net/minecraft/client/gui/screens/debug";

declare module "@package/net/minecraft/client/gui/screens" {
    export class $LoadingOverlay extends $Overlay implements $DuckLoadingOverlay {
        static registerTextures(minecraft: $Minecraft): void;
        dynamic_fps$isReloadComplete(): boolean;
        static FADE_OUT_TIME: number;
        static MOJANG_STUDIOS_LOGO_LOCATION: $ResourceLocation;
        static FADE_IN_TIME: number;
        constructor(minecraft: $Minecraft, reload: $ReloadInstance, onFinish: $Consumer_<($Throwable) | undefined>, fadeIn: boolean);
    }
    export class $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
    }
    export interface $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
        create(menu: T, inventory: $Inventory, title: $Component_): U;
        fromPacket(title: $Component_, type: $MenuType_<T>, mc: $Minecraft, windowId: number): void;
    }
    /**
     * Values that may be interpreted as {@link $MenuScreens$ScreenConstructor}.
     */
    export type $MenuScreens$ScreenConstructor_<T, U> = ((arg0: T, arg1: $Inventory, arg2: $Component) => U);
    export class $ReceivingLevelScreen extends $Screen implements $IMixinReceivingLevelScreen {
        setCreatedAtFancyMenu(time: number): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(levelReceived: $BooleanSupplier_, reason: $ReceivingLevelScreen$Reason_);
        set createdAtFancyMenu(value: number);
    }
    export class $DatapackLoadFailureScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(cancelCallback: $Runnable_, safeModeCallback: $Runnable_);
    }
    export class $CreateBuffetWorldScreen extends $Screen {
        updateButtonValidity(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        biomes: $Registry<$Biome>;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        biome: $Holder<$Biome>;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(parent: $Screen, context: $WorldCreationContext_, applySettings: $Consumer_<$Holder<$Biome>>);
    }
    export class $OutOfMemoryScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $ReceivingLevelScreen$Reason extends $Enum<$ReceivingLevelScreen$Reason> {
        static values(): $ReceivingLevelScreen$Reason[];
        static valueOf(arg0: string): $ReceivingLevelScreen$Reason;
        static OTHER: $ReceivingLevelScreen$Reason;
        static NETHER_PORTAL: $ReceivingLevelScreen$Reason;
        static END_PORTAL: $ReceivingLevelScreen$Reason;
    }
    /**
     * Values that may be interpreted as {@link $ReceivingLevelScreen$Reason}.
     */
    export type $ReceivingLevelScreen$Reason_ = "nether_portal" | "end_portal" | "other";
    export class $PresetFlatWorldScreen$PresetsList$Entry extends $ObjectSelectionList$Entry<$PresetFlatWorldScreen$PresetsList$Entry> {
        select(): void;
        this$1: $PresetFlatWorldScreen$PresetsList;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$PresetFlatWorldScreen$PresetsList$Entry>;
    }
    export class $ProgressScreen extends $Screen implements $ProgressListener, $IMixinProgressScreen {
        stop(): void;
        progressStartNoAbort(component: $Component_): void;
        progressStage(component: $Component_): void;
        /**
         * Updates the progress bar on the loading screen to the specified amount.
         */
        progressStagePercentage(progress: number): void;
        progressStart(component: $Component_): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getProgressFancyMenu(): number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(clearScreenAfterStop: boolean);
        get progressFancyMenu(): number;
    }
    export class $ConnectScreen extends $Screen implements $ConnectScreenAccessor, $IMixinConnectScreen {
        static startConnecting(parent: $Screen, minecraft: $Minecraft, serverAddress: $ServerAddress, serverData: $ServerData, isQuickPlay: boolean, transferState: $TransferState_ | null): void;
        static invokeConstructFancyMenu$fancymenu_$md$942995$0(arg0: $Screen, arg1: $Component_): $ConnectScreen;
        getConnection(): $Connection;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $Screen;
        static UNKNOWN_HOST_MESSAGE: $Component;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        aborted: boolean;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static PANORAMA: $PanoramaRenderer;
        connection: $Connection;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        channelFuture: $ChannelFuture;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static ABORT_CONNECTION: $Component;
        narratables: $List<$NarratableEntry>;
        width: number;
        static LOGGER: $Logger;
        connectFailedTitle: $Component;
        screenExecutor: $Executor;
        font: $Font;
    }
    export class $ErrorScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(title: $Component_, message: $Component_);
    }
    export class $DirectJoinServerScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, callback: $BooleanConsumer_, serverData: $ServerData);
    }
    export class $CreateBuffetWorldScreen$BiomeList$Entry extends $ObjectSelectionList$Entry<$CreateBuffetWorldScreen$BiomeList$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$CreateBuffetWorldScreen$BiomeList$Entry>;
    }
    export class $CreateFlatWorldScreen extends $Screen {
        settings(): $FlatLevelGeneratorSettings;
        setConfig(generator: $FlatLevelGeneratorSettings): void;
        /**
         * Would update whether the edit and remove buttons are enabled, but is currently disabled and always disables the buttons (which are invisible anyway).
         */
        updateButtonValidity(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $CreateWorldScreen;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        generator: $FlatLevelGeneratorSettings;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static SLOT_SPRITE: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(parent: $CreateWorldScreen, applySettings: $Consumer_<$FlatLevelGeneratorSettings>, generator: $FlatLevelGeneratorSettings);
        set config(value: $FlatLevelGeneratorSettings);
    }
    export class $Screen extends $AbstractContainerEventHandler implements $Renderable, $ScreenExtensions, $ScreenAccessor$1, $ScreenAccessor, $ScreenAccessor$2<any>, $SlotifyScreen, $ScreenAccessor$3, $IMixinScreen, $ScreenAccessor$4, $IMixinScreen$1, $CustomizableScreen, $GuiScreenAccessor, $EssentialGuiScreenBeforeClose, $EssentialPostScreenDrawHook {
        static isCopy(keyCode: number): boolean;
        triggerImmediateNarration(onlyNarrateNew: boolean): void;
        handleComponentClicked(style: $Style | null): boolean;
        getNarrationMessage(): $Component;
        polytone$getModifier(): $ScreenModifier;
        fabric_getBeforeTickEvent(): $Event<any>;
        fabric_getAfterTickEvent(): $Event<any>;
        essential$beforeClose(): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        polytone$hasSprites(): boolean;
        isValidCharacterForName(text: string, charTyped: string, cursorPos: number): boolean;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        shouldNarrateNavigation(): boolean;
        renderBlurredBackground(partialTick: number): void;
        essential$afterDraw(drawContext: $UDrawContext, mouseX: number, mouseY: number, partialTicks: number): void;
        afterKeyboardAction(): void;
        static findNarratableWidget(entries: $List_<$NarratableEntry>, target: $NarratableEntry | null): $Screen$NarratableSearchResult;
        updateNarratedWidget(narrationElementOutput: $NarrationElementOutput): void;
        updateNarratorStatus(onlyNarrateNew: boolean): void;
        updateNarrationState(narrationElementOutput: $NarrationElementOutput): void;
        fabric_getRemoveEvent(): $Event<any>;
        fabric_getAfterRenderEvent(): $Event<any>;
        renderMenuBackground(guiGraphics: $GuiGraphics, x: number, y: number, width: number, height: number): void;
        renderMenuBackground(partialTick: $GuiGraphics): void;
        handleDelayedNarration(): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isPauseScreen(): boolean;
        init(): void;
        init(minecraft: $Minecraft, width: number, height: number): void;
        added(): void;
        removed(): void;
        resize(minecraft: $Minecraft, width: number, height: number): void;
        onClose(): void;
        tick(): void;
        getTitle(): $Component;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        getBackgroundMusic(): $Music;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasShiftDown(): boolean;
        static getTooltipFromItem(minecraft: $Minecraft, item: $ItemStack_): $List<$Component>;
        static wrapScreenError(action: $Runnable_, errorDesc: string, screenName: string): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasControlDown(): boolean;
        createArrowEvent(direction: $ScreenDirection_): $FocusNavigationEvent$ArrowNavigation;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderWithTooltip(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        shouldCloseOnEsc(): boolean;
        createTabEvent(): $FocusNavigationEvent$TabNavigation;
        changeFocus(path: $ComponentPath): void;
        setInitialFocus(listener: $GuiEventListener): void;
        setInitialFocus(): void;
        addRenderableOnly<T extends $Renderable>(renderable: T): T;
        removeWidget(listener: $GuiEventListener): void;
        clearWidgets(): void;
        repositionElements(): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderBackground(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static isSelectAll(keyCode: number): boolean;
        afterMouseMove(): void;
        afterMouseAction(): void;
        onFilesDrop(packs: $List_<$Path_>): void;
        rebuildWidgets(): void;
        renderPanorama(guiGraphics: $GuiGraphics, partialTick: number): void;
        getUsageNarration(): $Component;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        fabric_getButtons(): $List<any>;
        addRenderableWidget<T extends $GuiEventListener>(widget: T): T;
        addWidget<T extends $GuiEventListener>(widget: T): T;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        removeOnInitChildrenFancyMenu(): $List<any>;
        setTooltipForNextRenderPass(packs: $List_<$FormattedCharSequence_>): void;
        setTooltipForNextRenderPass(tooltip: $Tooltip, positioner: $ClientTooltipPositioner_, override: boolean): void;
        setTooltipForNextRenderPass(title: $Component_): void;
        setTooltipForNextRenderPass(tooltip: $List_<$FormattedCharSequence_>, positioner: $ClientTooltipPositioner_, override: boolean): void;
        static renderMenuBackgroundTexture(guiGraphics: $GuiGraphics, texture: $ResourceLocation_, x: number, y: number, uOffset: number, vOffset: number, width: number, height: number): void;
        fabric_getBeforeRenderEvent(): $Event<any>;
        fabric_getAllowKeyPressEvent(): $Event<any>;
        fabric_getBeforeKeyPressEvent(): $Event<any>;
        fabric_getAfterKeyPressEvent(): $Event<any>;
        clearTooltipForNextRenderPass(): void;
        renderTransparentBackground(partialTick: $GuiGraphics): void;
        fabric_getAllowKeyReleaseEvent(): $Event<any>;
        fabric_getBeforeKeyReleaseEvent(): $Event<any>;
        fabric_getAllowMouseScrollEvent(): $Event<any>;
        fabric_getAfterMouseClickEvent(): $Event<any>;
        fabric_getAfterMouseScrollEvent(): $Event<any>;
        fabric_getAfterMouseReleaseEvent(): $Event<any>;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        polytone$renderExtraSprites(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        fabric_getAllowMouseClickEvent(): $Event<any>;
        fabric_getAfterKeyReleaseEvent(): $Event<any>;
        fabric_getBeforeMouseScrollEvent(): $Event<any>;
        fabric_getBeforeMouseClickEvent(): $Event<any>;
        fabric_getAllowMouseReleaseEvent(): $Event<any>;
        fabric_getBeforeMouseReleaseEvent(): $Event<any>;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasAltDown(): boolean;
        insertText(text: string, overwrite: boolean): void;
        clearFocus(): void;
        static isCut(keyCode: number): boolean;
        static isPaste(keyCode: number): boolean;
        handler$ial001$essential$onGuiClosed(ci: $CallbackInfo): void;
        handler$dic000$polytone$modifyWidget2(listener: $GuiEventListener, cir: $CallbackInfoReturnable<any>): void;
        handler$dic000$polytone$modifyRenderable(listener: $Renderable_, cir: $CallbackInfoReturnable<any>): void;
        invoke_init_FancyMenu(): void;
        essential$addDrawableChild<T extends $GuiEventListener>(widget: T): T;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        essential$getChildren(): $List<$GuiEventListener>;
        clientsort$removeWidget(listener: $GuiEventListener): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getChildrenKonkrete(): $List<$GuiEventListener>;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        get_initialized_FancyMenu(): boolean;
        invokeAddWidgetKonkrete<T extends $GuiEventListener>(widget: T): T;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        catnip$getRenderables(): $List<$Renderable>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getRenderablesKonkrete(): $List<$Renderable>;
        getFont(): $Font;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getChildrenFancyMenu(): $List<$GuiEventListener>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getRenderablesFancyMenu(): $List<$Renderable>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getNarratablesFancyMenu(): $List<$NarratableEntry>;
        getMinecraft(): $Minecraft;
        setFontKonkrete(arg0: $Font): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        libgui$getChildren(): $List<$GuiEventListener>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getDrawables(): $List<$Renderable>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getSelectables(): $List<$NarratableEntry>;
        invokeAddRenderableWidgetKonkrete<T extends $GuiEventListener>(widget: T): T;
        invokeRemoveWidgetFancyMenu(listener: $GuiEventListener): void;
        clientsort$addRenderableWidget<T extends $GuiEventListener>(widget: T): T;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(title: $Component_);
        get narrationMessage(): $Component;
        get pauseScreen(): boolean;
        get backgroundMusic(): $Music;
        get usageNarration(): $Component;
        get childrenKonkrete(): $List<$GuiEventListener>;
        get _initialized_FancyMenu(): boolean;
        get renderablesKonkrete(): $List<$Renderable>;
        get childrenFancyMenu(): $List<$GuiEventListener>;
        get renderablesFancyMenu(): $List<$Renderable>;
        get narratablesFancyMenu(): $List<$NarratableEntry>;
        set fontKonkrete(value: $Font);
        get drawables(): $List<$Renderable>;
        get selectables(): $List<$NarratableEntry>;
    }
    export class $CreateFlatWorldScreen$DetailsList$Entry extends $ObjectSelectionList$Entry<$CreateFlatWorldScreen$DetailsList$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$CreateFlatWorldScreen$DetailsList$Entry>;
    }
    export class $MenuScreens {
        static getConstructor<T extends $AbstractContainerMenu>(type: $MenuType_<T>): $MenuScreens$ScreenConstructor<T, never>;
        /**
         * @deprecated
         */
        static register<M extends $AbstractContainerMenu, U extends $Screen>(type: $MenuType_<M>, factory: $MenuScreens$ScreenConstructor_<M, U>): void;
        static init(): void;
        static create<T extends $AbstractContainerMenu>(type: $MenuType_<T>, mc: $Minecraft, windowId: number, title: $Component_): void;
        static selfTest(): boolean;
        static getScreenFactory<T extends $AbstractContainerMenu>(arg0: $MenuType_<T>): ($MenuScreens$ScreenConstructor<T, never>) | undefined;
        constructor();
    }
    export class $DemoIntroScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $LevelLoadingScreen extends $Screen implements $IMixinLevelLoadingScreen {
        static renderChunks(guiGraphics: $GuiGraphics, progressListener: $StoringChunkProgressListener, x: number, y: number, arg4: number, arg5: number): void;
        getProgressListenerFancyMenu(): $StoringChunkProgressListener;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(progressListener: $StoringChunkProgressListener);
        get progressListenerFancyMenu(): $StoringChunkProgressListener;
    }
    export class $RecoverWorldDataScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(minecraft: $Minecraft, callback: $BooleanConsumer_, storageAccess: $LevelStorageSource$LevelStorageAccess);
    }
    export class $EditServerScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, callback: $BooleanConsumer_, serverData: $ServerData);
    }
    export class $TitleScreen extends $Screen implements $ScreenWithVanillaProxyElementsExt {
        essential$getProxyHandler(): $ScreenWithProxiesHandler;
        static preloadResources(texMngr: $TextureManager, backgroundExecutor: $Executor_): $CompletableFuture<void>;
        handler$zmm000$iris$firstInit(arg0: $CallbackInfo): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        fading: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
        constructor(fading: boolean, logoRenderer: $LogoRenderer | null);
        constructor(fading: boolean);
    }
    export class $GenericMessageScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Component_);
    }
    export class $GenericWaitingScreen extends $Screen {
        static createCompleted(title: $Component_, messageText: $Component_, buttonLabel: $Component_, buttonCallback: $Runnable_): $GenericWaitingScreen;
        static createWaiting(title: $Component_, buttonLabel: $Component_, buttonCallback: $Runnable_): $GenericWaitingScreen;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(title: $Component_, messageText: $Component_ | null, buttonLabel: $Component_, buttonCallback: $Runnable_, disableButtonTicks: number);
    }
    export class $ConfirmScreen extends $Screen {
        setDelay(y: number): void;
        addButtons(y: number): void;
        addExitButton(exitButton: $Button): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        noButton: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static PANORAMA: $PanoramaRenderer;
        yesButton: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_);
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_, yesButton: $Component_, noButton: $Component_);
        set delay(value: number);
    }
    export class $LoadingDotsText {
        static get(millis: number): string;
        constructor();
    }
    export class $NoticeWithLinkScreen extends $Screen {
        static createWorldSymlinkWarningScreen(onClose: $Runnable_): $Screen;
        static createPackSymlinkWarningScreen(onClose: $Runnable_): $Screen;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(title: $Component_, message: $Component_, uri: $URI, onClose: $Runnable_);
    }
    export class $ChatScreen extends $Screen implements $IMixinChatScreen {
        normalizeChatMessage(message: string): string;
        handleChatInput(message: string, addToRecentChat: boolean): void;
        /**
         * Input is relative and is applied directly to the sentHistoryCursor so -1 is the previous message, 1 is the next message from the current cursor position.
         */
        moveInHistory(msgPos: number): void;
        handler$dkd000$nochatreports$onBeforeMessage(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        getInputFancyMenu(): $EditBox;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        static MOUSE_SCROLL_SPEED: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        input: $EditBox;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(initial: string);
        get inputFancyMenu(): $EditBox;
    }
    export class $PauseScreen$FeedbackSubScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $CreateBuffetWorldScreen$BiomeList extends $ObjectSelectionList<$CreateBuffetWorldScreen$BiomeList$Entry> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        x: number;
        y: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $CreateBuffetWorldScreen$BiomeList$Entry;
        height: number;
    }
    export class $DisconnectedScreen extends $Screen implements $DisconnectedScreenAccessor, $GuiDisconnectedAccessor, $EssentialPostScreenDrawHook {
        handler$iag000$essential$onConstructor(parent: $Screen, reason: $Component_, message: $Component_, ci: $CallbackInfo): void;
        getInfo(): $DisconnectionDetails;
        autoreconnectrf$getLayout(): $LinearLayout;
        autoreconnectrf$getDetails(): $DisconnectionDetails;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(parent: $Screen, title: $Component_, reason: $Component_);
        constructor(parent: $Screen, title: $Component_, details: $DisconnectionDetails_, buttonText: $Component_);
        constructor(parent: $Screen, title: $Component_, details: $DisconnectionDetails_);
        constructor(parent: $Screen, title: $Component_, reason: $Component_, buttonText: $Component_);
        get info(): $DisconnectionDetails;
    }
    export class $ConfirmLinkScreen extends $ConfirmScreen {
        /**
         * Copies the link to the system clipboard.
         */
        copyToClipboard(): void;
        static confirmLink(lastScreen: $Screen, url: string): $Button$OnPress;
        static confirmLink(lastScreen: $Screen, url: string, trusted: boolean): $Button$OnPress;
        static confirmLink(lastScreen: $Screen, uri: $URI): $Button$OnPress;
        static confirmLink(lastScreen: $Screen, uri: $URI, trusted: boolean): $Button$OnPress;
        static confirmLinkNow(lastScreen: $Screen, url: string, trusted: boolean): void;
        static confirmLinkNow(lastScreen: $Screen, uri: $URI, trusted: boolean): void;
        static confirmLinkNow(lastScreen: $Screen, uri: $URI): void;
        static confirmLinkNow(lastScreen: $Screen, url: string): void;
        static confirmMessage(trusted: boolean, extraInfo: string): $MutableComponent;
        static confirmMessage(trusted: boolean): $MutableComponent;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        noButton: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static PANORAMA: $PanoramaRenderer;
        yesButton: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_, url: string, noButton: $Component_, trusted: boolean);
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_, uri: $URI, noButton: $Component_, trusted: boolean);
        constructor(callback: $BooleanConsumer_, title: $Component_, uri: $URI, trusted: boolean);
        constructor(callback: $BooleanConsumer_, title: $Component_, url: string, trusted: boolean);
        constructor(callback: $BooleanConsumer_, url: string, trusted: boolean);
    }
    export class $ShareToLanScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen);
    }
    export class $DeathScreen$TitleConfirmScreen extends $ConfirmScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        noButton: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static PANORAMA: $PanoramaRenderer;
        yesButton: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_, arg3: $Component_, arg4: $Component_);
    }
    export class $BackupConfirmScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        id: number;
        screenExecutor: $Executor;
        onProceed: $BackupConfirmScreen$Listener;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(onCancel: $Runnable_, onProceed: $BackupConfirmScreen$Listener_, title: $Component_, description: $Component_, promptForCacheErase: boolean);
    }
    export class $BackupConfirmScreen$Listener {
    }
    export interface $BackupConfirmScreen$Listener {
        proceed(confirmed: boolean, eraseCache: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $BackupConfirmScreen$Listener}.
     */
    export type $BackupConfirmScreen$Listener_ = ((arg0: boolean, arg1: boolean) => void);
    export class $FaviconTexture implements $AutoCloseable {
        clear(): void;
        close(): void;
        upload(image: $NativeImage): void;
        textureLocation(): $ResourceLocation;
        static forWorld(textureManager: $TextureManager, worldName: string): $FaviconTexture;
        static forServer(textureManager: $TextureManager, worldName: string): $FaviconTexture;
    }
    export class $PresetFlatWorldScreen extends $Screen {
        static fromString(blockGetter: $HolderGetter<$Block_>, biomeGetter: $HolderGetter<$Biome_>, structureSetGetter: $HolderGetter<$StructureSet_>, placedFeatureGetter: $HolderGetter<$PlacedFeature_>, settings: string, layerGenerationSettings: $FlatLevelGeneratorSettings): $FlatLevelGeneratorSettings;
        static save(levelGeneratorSettings: $FlatLevelGeneratorSettings): string;
        updateButtonValidity(valid: boolean): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        settings: $FlatLevelGeneratorSettings;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static SLOT_SPRITE: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static LOGGER: $Logger;
        screenExecutor: $Executor;
        static UNKNOWN_PRESET: $Component;
        "export": $EditBox;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(parent: $CreateFlatWorldScreen);
    }
    export class $PauseScreen extends $Screen implements $ScreenWithVanillaProxyElementsExt {
        static addFeedbackButtons(lastScreen: $Screen, rowHelper: $GridLayout$RowHelper): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        showsPauseMenu(): boolean;
        essential$getProxyHandler(): $ScreenWithProxiesHandler;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(showPauseMenu: boolean);
    }
    export class $WinScreen$CreditsReader {
    }
    export interface $WinScreen$CreditsReader {
    }
    /**
     * Values that may be interpreted as {@link $WinScreen$CreditsReader}.
     */
    export type $WinScreen$CreditsReader_ = (() => void);
    export class $Screen$DeferredTooltipRendering extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Screen$DeferredTooltipRendering}.
     */
    export type $Screen$DeferredTooltipRendering_ = { tooltip?: $List_<$FormattedCharSequence_>, positioner?: $ClientTooltipPositioner_,  } | [tooltip?: $List_<$FormattedCharSequence_>, positioner?: $ClientTooltipPositioner_, ];
    export class $AccessibilityOnboardingScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(options: $Options, onClose: $Runnable_);
    }
    export class $InBedChatScreen extends $ChatScreen {
        onPlayerWokeUp(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        static MOUSE_SCROLL_SPEED: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        input: $EditBox;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $CreditsAndAttributionScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen);
    }
    export class $Overlay implements $Renderable {
        isPauseScreen(): boolean;
        constructor();
        get pauseScreen(): boolean;
    }
    export class $LoadingOverlay$LogoTexture extends $SimpleTexture {
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
    }
    export class $CreateFlatWorldScreen$DetailsList extends $ObjectSelectionList<$CreateFlatWorldScreen$DetailsList$Entry> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        x: number;
        y: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $CreateFlatWorldScreen$DetailsList$Entry;
        height: number;
    }
    export class $PresetFlatWorldScreen$PresetsList extends $ObjectSelectionList<$PresetFlatWorldScreen$PresetsList$Entry> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        x: number;
        y: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $PresetFlatWorldScreen$PresetsList$Entry;
        height: number;
    }
    export class $AlertScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(callback: $Runnable_, title: $Component_, text: $Component_);
        constructor(callback: $Runnable_, title: $Component_, messageText: $Component_, okButton: $Component_, shouldCloseOnEsc: boolean);
    }
    export class $Screen$NarratableSearchResult {
        entry: $NarratableEntry;
        index: number;
        priority: $NarratableEntry$NarrationPriority;
        constructor(entry: $NarratableEntry, index: number, priority: $NarratableEntry$NarrationPriority_);
    }
    export class $DeathScreen extends $Screen {
        static renderDeathBackground(guiGraphics: $GuiGraphics, width: number, height: number): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(causeOfDeath: $Component_ | null, hardcore: boolean);
    }
    export class $WinScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
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
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(poem: boolean, onFinished: $Runnable_);
    }
    export class $BanNoticeScreens {
        static create(callback: $BooleanConsumer_, banDetails: $BanDetails_): $ConfirmLinkScreen;
        static createNameBan(username: string, callback: $Runnable_): $ConfirmLinkScreen;
        static createSkinBan(callback: $Runnable_): $ConfirmLinkScreen;
        static NAME_BAN_TITLE: $Component;
        constructor();
    }
}
