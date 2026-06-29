import { $WorldStem_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $GameRenderer, $RenderBuffers, $GpuWarnlistManager } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $HumanoidArm } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SimplePreparableReloadListener, $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $KeyBindingAccessor as $KeyBindingAccessor$2 } from "@package/net/fabricmc/fabric/mixin/event/interaction/client";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $CameraZoomExtension } from "@package/dev/ryanhcode/sable/mixinterface/camera/camera_zoom";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $TimerAccessor as $TimerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $HeadRenderable } from "@package/dzwdz/chat_heads/mixininterface";
import { $ISimpleOption } from "@package/com/ishland/c2me/client/uncapvd/mixin";
import { $MessageSignature_, $Component_, $MessageSignature, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ChatListener } from "@package/net/minecraft/client/multiplayer/chat";
import { $RecipeBookCategoriesAccessor } from "@package/org/sinytra/connector/mod/mixin/recipebook";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $DownloadedPackSource } from "@package/net/minecraft/client/resources/server";
import { $MouseHandlerAccessor as $MouseHandlerAccessor$1 } from "@package/me/decce/ixeris/mixins";
import { $FloatUnaryOperator_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $SkinManager, $MapDecorationTextureManager, $PaintingTextureManager, $SplashManager, $MobEffectTextureManager } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $RecipeBook } from "@package/net/minecraft/stats";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $IMixinOptions, $IMixinMinecraft } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $KeyModifier, $KeyModifier_, $IKeyConflictContext } from "@package/net/neoforged/neoforge/client/settings";
import { $IWorldMapMinecraftClient } from "@package/xaero/map/core";
import { $GameConfig$QuickPlayData, $SilentInitException, $GameConfig$QuickPlayData_, $GameConfig } from "@package/net/minecraft/client/main";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $KeyBindingAccessor as $KeyBindingAccessor$1 } from "@package/net/fabricmc/fabric/mixin/client/keybinding";
import { $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $TimerAccessor, $MinecraftAccessor, $MouseHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $RealmsDataFetcher } from "@package/com/mojang/realmsclient/gui";
import { $UUID_, $Map, $TimerTask, $List, $Map_, $List_, $Collection, $Queue, $Locale, $Set, $UUID } from "@package/java/util";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $FontManager } from "@package/net/minecraft/client/gui/font";
import { $Throwable, $Runnable, $Enum, $Comparable, $Iterable_, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $HeadData_, $HeadData } from "@package/dzwdz/chat_heads";
import { $File_, $File } from "@package/java/io";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $MouseHelperAccessor } from "@package/gg/essential/mixins/transformers/client";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $FogType } from "@package/net/minecraft/world/level/material";
import { $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $WidgetTooltipHolder, $CycleButton$ValueListSupplier, $DebugScreenOverlay, $Tooltip, $AbstractWidget, $AbstractOptionSliderButton } from "@package/net/minecraft/client/gui/components";
import { $Hotbar } from "@package/net/minecraft/client/player/inventory";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $IXaeroMinimapMinecraftClient } from "@package/xaero/common/core";
import { $CameraWaterOcclusionExtension } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $Screen, $Overlay, $ReceivingLevelScreen$Reason_ } from "@package/net/minecraft/client/gui/screens";
import { $MinecraftClientAccessor as $MinecraftClientAccessor$1 } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $KeyMappingsAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $ByteBuffer } from "@package/java/nio";
import { $OptionInstanceAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $OptionEnum, $FormattedCharSequence_, $StringRepresentable, $FormattedCharSink, $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $ClientLevel, $ServerData, $ProfileKeyPairManager, $MultiPlayerGameMode, $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $WorldOpenFlows } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $CrashReport } from "@package/net/minecraft";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $SoundManager, $MusicManager } from "@package/net/minecraft/client/sounds";
import { $Tutorial, $TutorialSteps } from "@package/net/minecraft/client/tutorial";
import { $IMinecraftExtension, $IKeyMappingExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $PackResources, $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $LocalDoubleRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $MinecraftExt } from "@package/gg/essential/mixins/impl/client";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $MinecraftClientAccessor } from "@package/me/flashyreese/mods/sodiumextra/mixin/gui";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MinecraftExt as $MinecraftExt$1 } from "@package/gg/essential/mixins/ext/client";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $IMixinMouseHandler } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $ReportEnvironment_, $ReportingContext } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $PlayerModelPart_, $ChatVisiblity, $PlayerModelPart } from "@package/net/minecraft/world/entity/player";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $MinecraftAccessor as $MinecraftAccessor$1 } from "@package/gg/essential/mixins/transformers/feature/skin_overwrites";
import { $LanguageManager } from "@package/net/minecraft/client/resources/language";
import { $MinecraftClientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService, $BanDetails } from "@package/com/mojang/authlib/minecraft";
import { $AccessKeyMapping } from "@package/com/blamejared/controlling/mixin";
import { $Gson } from "@package/com/google/gson";
import { $DebugRenderer } from "@package/net/minecraft/client/renderer/debug";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $Function, $BiConsumer_, $DoubleFunction_, $BooleanSupplier_, $Supplier, $Consumer_, $IntSupplier_, $ToDoubleFunction_, $IntSupplier, $Function_, $BooleanSupplier } from "@package/java/util/function";
import { $Object2BooleanFunction_ } from "@package/it/unimi/dsi/fastutil/objects";
import { $ClientInformation } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $DynamicRenderTickCounterAccessor } from "@package/gg/essential/mixins/transformers/client/renderer";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $KeyMappingAccessor } from "@package/dev/terminalmc/clientsort/mixin/client/accessor";
import { $WindowEventHandler, $InputConstants$Type_, $InputConstants$Key, $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $ProfileResult_ } from "@package/com/mojang/authlib/yggdrasil";
import { $ClientTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $QuickPlayLog } from "@package/net/minecraft/client/quickplay";
import { $GuiGraphics, $Gui, $Font, $GuiSpriteManager } from "@package/net/minecraft/client/gui";
import { $GameOptionsAccessor, $KeyBindingAccessor } from "@package/gg/essential/mixins/transformers/client/options";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PlayerSocialManager } from "@package/net/minecraft/client/gui/screens/social";
export * as resources from "@package/net/minecraft/client/resources";
export * as renderer from "@package/net/minecraft/client/renderer";
export * as gui from "@package/net/minecraft/client/gui";
export * as particle from "@package/net/minecraft/client/particle";
export * as telemetry from "@package/net/minecraft/client/telemetry";
export * as model from "@package/net/minecraft/client/model";
export * as sounds from "@package/net/minecraft/client/sounds";
export * as animation from "@package/net/minecraft/client/animation";
export * as color from "@package/net/minecraft/client/color";
export * as multiplayer from "@package/net/minecraft/client/multiplayer";
export * as tutorial from "@package/net/minecraft/client/tutorial";
export * as searchtree from "@package/net/minecraft/client/searchtree";
export * as quickplay from "@package/net/minecraft/client/quickplay";
export * as main from "@package/net/minecraft/client/main";
export * as player from "@package/net/minecraft/client/player";
export * as server from "@package/net/minecraft/client/server";
export * as profiling from "@package/net/minecraft/client/profiling";

declare module "@package/net/minecraft/client" {
    export class $MouseHandler implements $IMixinMouseHandler, $MouseHandlerAccessor, $MouseHandlerAccessor$1, $MouseHelperAccessor {
        setup(windowPointer: number): void;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isRightPressed(): boolean;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        handleAccumulatedMovement(): void;
        xpos(): number;
        ypos(): number;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isLeftPressed(): boolean;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMiddlePressed(): boolean;
        getXVelocity(): number;
        getYVelocity(): number;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        releaseMouse(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        setIgnoreFirstMove(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        cursorEntered(): void;
        wrapWithCondition$bkf000$vista$onMoveMouse(arg0: $LocalPlayer, arg1: number, arg2: number): boolean;
        handler$eng000$ok_zoomer$applyZoomChanges(arg0: number, arg1: $CallbackInfo, arg2: $LocalDoubleRef, arg3: $LocalDoubleRef, arg4: number): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        grabMouse(): void;
        create$setYPos(movementTime: number): void;
        create$setXPos(movementTime: number): void;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMouseGrabbed(): boolean;
        getActiveButtonKonkrete(): number;
        setMouseY(movementTime: number): void;
        setMouseX(movementTime: number): void;
        constructor(minecraft: $Minecraft);
        set up(value: number);
        get rightPressed(): boolean;
        get leftPressed(): boolean;
        get middlePressed(): boolean;
        get XVelocity(): number;
        get YVelocity(): number;
        get mouseGrabbed(): boolean;
        get activeButtonKonkrete(): number;
        set mouseY(value: number);
        set mouseX(value: number);
    }
    export class $User {
        getName(): string;
        getType(): $User$Type;
        getSessionId(): string;
        getAccessToken(): string;
        getProfileId(): $UUID;
        getXuid(): (string) | undefined;
        getClientId(): (string) | undefined;
        constructor(name: string, uuid: $UUID_, accessToken: string, xuid: (string) | undefined, clientId: (string) | undefined, type: $User$Type_);
        get name(): string;
        get type(): $User$Type;
        get sessionId(): string;
        get accessToken(): string;
        get profileId(): $UUID;
        get xuid(): (string) | undefined;
        get clientId(): (string) | undefined;
    }
    export class $ClientRecipeBook extends $RecipeBook {
        getCollections(): $List<$RecipeCollection>;
        setupCollections(recipes: $Iterable_<$RecipeHolder<never>>, registryAccess: $RegistryAccess): void;
        getCollection(categories: $RecipeBookCategories_): $List<$RecipeCollection>;
        highlight: $Set<$ResourceLocation>;
        known: $Set<$ResourceLocation>;
        constructor();
        get collections(): $List<$RecipeCollection>;
    }
    export class $CloudStatus extends $Enum<$CloudStatus> implements $OptionEnum, $StringRepresentable {
        static values(): $CloudStatus[];
        static valueOf(arg0: string): $CloudStatus;
        getKey(): string;
        getId(): number;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static FANCY: $CloudStatus;
        static CODEC: $Codec<$CloudStatus>;
        static FAST: $CloudStatus;
        static OFF: $CloudStatus;
        get key(): string;
        get id(): number;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CloudStatus}.
     */
    export type $CloudStatus_ = "false" | "fast" | "true";
    export class $OptionInstance$OptionInstanceSliderButton<N> extends $AbstractOptionSliderButton {
        applyUnsavedValue(): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        options: $Options;
        width: number;
        x: number;
        y: number;
        value: number;
        height: number;
        constructor(options: $Options, x: number, y: number, width: number, height: number, instance: $OptionInstance<N>, values: $OptionInstance$SliderableValueSet<N>, tooltipSupplier: $OptionInstance$TooltipSupplier_<N>, onValueChanged: $Consumer_<N>, applyValueImmediately: boolean);
    }
    export class $HotbarManager {
        get(index: number): $Hotbar;
        save(): void;
        static NUM_HOTBAR_GROUPS: number;
        constructor(gameDirectory: $Path_, fixerUpper: $DataFixer);
    }
    export class $GraphicsStatus extends $Enum<$GraphicsStatus> implements $OptionEnum {
        static values(): $GraphicsStatus[];
        static valueOf(arg0: string): $GraphicsStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $GraphicsStatus;
        getCaption(): $Component;
        static FANCY: $GraphicsStatus;
        static FABULOUS: $GraphicsStatus;
        static FAST: $GraphicsStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $GraphicsStatus}.
     */
    export type $GraphicsStatus_ = "fast" | "fancy" | "fabulous";
    export class $InputType extends $Enum<$InputType> {
        isKeyboard(): boolean;
        static values(): $InputType[];
        static valueOf(arg0: string): $InputType;
        isMouse(): boolean;
        static MOUSE: $InputType;
        static KEYBOARD_TAB: $InputType;
        static NONE: $InputType;
        static KEYBOARD_ARROW: $InputType;
        get keyboard(): boolean;
        get mouse(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InputType}.
     */
    export type $InputType_ = "none" | "mouse" | "keyboard_arrow" | "keyboard_tab";
    export class $AttackIndicatorStatus extends $Enum<$AttackIndicatorStatus> implements $OptionEnum {
        static values(): $AttackIndicatorStatus[];
        static valueOf(arg0: string): $AttackIndicatorStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $AttackIndicatorStatus;
        getCaption(): $Component;
        static CROSSHAIR: $AttackIndicatorStatus;
        static HOTBAR: $AttackIndicatorStatus;
        static OFF: $AttackIndicatorStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $AttackIndicatorStatus}.
     */
    export type $AttackIndicatorStatus_ = "off" | "crosshair" | "hotbar";
    export class $OptionInstance$LazyEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        values(): $Supplier<$List<T>>;
        validateValue(): $Function<T, (T) | undefined>;
        validateValue(arg0: T): (T) | undefined;
        constructor(arg0: $Supplier_<$List<T>>, arg1: $Function_<T, (T) | undefined>, arg2: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$LazyEnum}.
     */
    export type $OptionInstance$LazyEnum_<T> = { codec?: $Codec<any>, values?: $Supplier_<$List<any>>, validateValue?: $Function_<any, (T) | undefined>,  } | [codec?: $Codec<any>, values?: $Supplier_<$List<any>>, validateValue?: $Function_<any, (T) | undefined>, ];
    export class $PeriodicNotificationManager$Notification extends $Record {
        message(): string;
        delay(): number;
        period(): number;
        title(): string;
        constructor(delay: number, arg1: number, period: string, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $PeriodicNotificationManager$Notification}.
     */
    export type $PeriodicNotificationManager$Notification_ = { delay?: number, period?: number, title?: string, message?: string,  } | [delay?: number, period?: number, title?: string, message?: string, ];
    export class $StringSplitter$WidthLimitedCharSink implements $FormattedCharSink {
    }
    export class $GameNarrator$NarratorInitException extends $SilentInitException {
        constructor(arg0: string);
    }
    export class $DeltaTracker {
        static ZERO: $DeltaTracker;
        static ONE: $DeltaTracker;
    }
    export interface $DeltaTracker {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Screenshot {
        close(): $File;
        static takeScreenshot(framebuffer: $RenderTarget): $NativeImage;
        static grab(gameDirectory: $File_, screenshotName: string | null, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        /**
         * Saves a screenshot in the game directory with a time-stamped filename.
         */
        static grab(gameDirectory: $File_, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        addRegion(buffer: $ByteBuffer, width: number, height: number, rowWidth: number, rowHeight: number): void;
        saveRow(): void;
        static SCREENSHOT_DIR: string;
        constructor(gameDirectory: $File_, width: number, height: number, rowHeight: number);
    }
    export class $OptionInstance$IntRangeBase {
    }
    export interface $OptionInstance$IntRangeBase extends $OptionInstance$SliderableValueSet<number> {
    }
    export class $Options implements $IMixinOptions, $GameOptionsAccessor {
        fov(): $OptionInstance<number>;
        chatLinks(): $OptionInstance<boolean>;
        load(arg0: boolean): void;
        /**
         * Send a client info packet with settings information to the server
         */
        load(): void;
        /**
         * Send a client info packet with settings information to the server
         */
        save(): void;
        getFile(): $File;
        static isTrue(value: string): boolean;
        touchscreen(): $OptionInstance<boolean>;
        damageTiltStrength(): $OptionInstance<number>;
        screenEffectScale(): $OptionInstance<number>;
        fovEffectScale(): $OptionInstance<number>;
        loadSelectedResourcePacks(resourcePackList: $PackRepository): void;
        dumpOptionsForReport(): string;
        getEffectiveRenderDistance(): number;
        telemetryOptInExtra(): $OptionInstance<boolean>;
        hideLightningFlash(): $OptionInstance<boolean>;
        static genericValueOrOffLabel(text: $Component_, value: number): $Component;
        static isFalse(value: string): boolean;
        getCloudsType(): $CloudStatus;
        menuBackgroundBlurriness(): $OptionInstance<number>;
        prioritizeChunkUpdates(): $OptionInstance<$PrioritizeChunkUpdates>;
        autoJump(): $OptionInstance<boolean>;
        bobView(): $OptionInstance<boolean>;
        darkMojangStudiosBackground(): $OptionInstance<boolean>;
        setKey(keyBinding: $KeyMapping, input: $InputConstants$Key): void;
        simulationDistance(): $OptionInstance<number>;
        gamma(): $OptionInstance<number>;
        getSoundSourceVolume(category: $SoundSource_): number;
        getMenuBackgroundBlurriness(): number;
        getBackgroundColor(opacity: number): number;
        getBackgroundColor(chatColor: number): number;
        enableVsync(): $OptionInstance<boolean>;
        framerateLimit(): $OptionInstance<number>;
        rawMouseInput(): $OptionInstance<boolean>;
        mipmapLevels(): $OptionInstance<number>;
        glintStrength(): $OptionInstance<number>;
        forceUnicodeFont(): $OptionInstance<boolean>;
        biomeBlendRadius(): $OptionInstance<number>;
        graphicsMode(): $OptionInstance<$GraphicsStatus>;
        cloudStatus(): $OptionInstance<$CloudStatus>;
        getCameraType(): $CameraType;
        setCameraType(pointOfView: $CameraType_): void;
        ambientOcclusion(): $OptionInstance<boolean>;
        chatVisibility(): $OptionInstance<$ChatVisiblity>;
        reducedDebugInfo(): $OptionInstance<boolean>;
        renderDistance(): $OptionInstance<number>;
        getBackgroundOpacity(opacity: number): number;
        buildPlayerInformation(): $ClientInformation;
        discreteMouseScroll(): $OptionInstance<boolean>;
        realmsNotifications(): $OptionInstance<boolean>;
        chatHeightUnfocused(): $OptionInstance<number>;
        darknessEffectScale(): $OptionInstance<number>;
        mouseWheelSensitivity(): $OptionInstance<number>;
        japaneseGlyphVariants(): $OptionInstance<boolean>;
        backgroundForChatOnly(): $OptionInstance<boolean>;
        showAutosaveIndicator(): $OptionInstance<boolean>;
        updateResourcePacks(resourcePackList: $PackRepository): void;
        entityDistanceScaling(): $OptionInstance<number>;
        isModelPartEnabled(playerModelPart: $PlayerModelPart_): boolean;
        static genericValueLabel(text: $Component_, value: $Component_): $Component;
        static genericValueLabel(text: $Component_, value: number): $Component;
        toggleModelPart(modelPart: $PlayerModelPart_, enable: boolean): void;
        /**
         * Send a client info packet with settings information to the server
         */
        broadcastOptions(): void;
        narratorHotkey(): $OptionInstance<boolean>;
        showSubtitles(): $OptionInstance<boolean>;
        chatLineSpacing(): $OptionInstance<number>;
        invertYMouse(): $OptionInstance<boolean>;
        directionalAudio(): $OptionInstance<boolean>;
        toggleCrouch(): $OptionInstance<boolean>;
        toggleSprint(): $OptionInstance<boolean>;
        hideMatchedNames(): $OptionInstance<boolean>;
        entityShadows(): $OptionInstance<boolean>;
        panoramaSpeed(): $OptionInstance<number>;
        chatHeightFocused(): $OptionInstance<number>;
        attackIndicator(): $OptionInstance<$AttackIndicatorStatus>;
        onlyShowSecureChat(): $OptionInstance<boolean>;
        highContrast(): $OptionInstance<boolean>;
        sensitivity(): $OptionInstance<number>;
        /**
         * Returns `true` if the client connect to a server using the native transport system.
         */
        useNativeTransport(): boolean;
        autoSuggestions(): $OptionInstance<boolean>;
        allowServerListing(): $OptionInstance<boolean>;
        soundDevice(): $OptionInstance<string>;
        chatColors(): $OptionInstance<boolean>;
        mainHand(): $OptionInstance<$HumanoidArm>;
        notificationDisplayTime(): $OptionInstance<number>;
        setServerRenderDistance(serverRenderDistance: number): void;
        chatLinksPrompt(): $OptionInstance<boolean>;
        getSoundSourceOptionInstance(soundSource: $SoundSource_): $OptionInstance<number>;
        chatOpacity(): $OptionInstance<number>;
        /**
         * Send a client info packet with settings information to the server
         */
        onboardingAccessibilityFinished(): void;
        operatorItemsTab(): $OptionInstance<boolean>;
        hideSplashTexts(): $OptionInstance<boolean>;
        glintSpeed(): $OptionInstance<number>;
        textBackgroundOpacity(): $OptionInstance<number>;
        chatDelay(): $OptionInstance<number>;
        narrator(): $OptionInstance<$NarratorStatus>;
        fullscreen(): $OptionInstance<boolean>;
        guiScale(): $OptionInstance<number>;
        particles(): $OptionInstance<$ParticleStatus>;
        chatScale(): $OptionInstance<number>;
        chatWidth(): $OptionInstance<number>;
        getModelPartsFancyMenu(): $Set<$PlayerModelPart>;
        setKeyBindings(arg0: $KeyMapping[]): void;
        invokeProcessOptionsFancyMenu(accessor: $Options$FieldAccess): void;
        tutorialStep: $TutorialSteps;
        static RENDER_DISTANCE_REALLY_FAR: number;
        static DEFAULT_SOUND_DEVICE: string;
        keyChat: $KeyMapping;
        resourcePacks: $List<string>;
        keyInventory: $KeyMapping;
        keyCommand: $KeyMapping;
        keySwapOffhand: $KeyMapping;
        keyHotbarSlots: $KeyMapping[];
        keySpectatorOutlines: $KeyMapping;
        static RENDER_DISTANCE_NORMAL: number;
        keySprint: $KeyMapping;
        keyAdvancements: $KeyMapping;
        static RENDER_DISTANCE_EXTREME: number;
        keySaveHotbarActivator: $KeyMapping;
        advancedItemTooltips: boolean;
        fullscreenVideoModeString: string;
        keyFullscreen: $KeyMapping;
        incompatibleResourcePacks: $List<string>;
        languageCode: string;
        static RENDER_DISTANCE_SHORT: number;
        keyDrop: $KeyMapping;
        overrideHeight: number;
        static LOGGER: $Logger;
        keyMappings: $KeyMapping[];
        minecraft: $Minecraft;
        keyAttack: $KeyMapping;
        skipMultiplayerWarning: boolean;
        static RENDER_DISTANCE_FAR: number;
        keyUp: $KeyMapping;
        keyJump: $KeyMapping;
        keyLoadHotbarActivator: $KeyMapping;
        onboardAccessibility: boolean;
        keyShift: $KeyMapping;
        smoothCamera: boolean;
        keyScreenshot: $KeyMapping;
        static AUTO_GUI_SCALE: number;
        keyTogglePerspective: $KeyMapping;
        keySocialInteractions: $KeyMapping;
        pauseOnLostFocus: boolean;
        keyRight: $KeyMapping;
        lastMpIp: string;
        syncWrites: boolean;
        keySmoothCamera: $KeyMapping;
        overrideWidth: number;
        keyLeft: $KeyMapping;
        static GSON: $Gson;
        hideServerAddress: boolean;
        glDebugVerbosity: number;
        static RENDER_DISTANCE_TINY: number;
        keyPlayerList: $KeyMapping;
        static UNLIMITED_FRAMERATE_CUTOFF: number;
        joinedFirstServer: boolean;
        hideBundleTutorial: boolean;
        keyUse: $KeyMapping;
        keyPickItem: $KeyMapping;
        keyDown: $KeyMapping;
        hideGui: boolean;
        constructor(minecraft: $Minecraft, gameDirectory: $File_);
        get file(): $File;
        get effectiveRenderDistance(): number;
        get cloudsType(): $CloudStatus;
        set serverRenderDistance(value: number);
        get modelPartsFancyMenu(): $Set<$PlayerModelPart>;
        set keyBindings(value: $KeyMapping[]);
    }
    export class $ResourceLoadStateTracker$ReloadState {
    }
    export class $OptionInstance$IntRange extends $Record implements $OptionInstance$IntRangeBase {
        codec(): $Codec<number>;
        validateValue(value: number): (number) | undefined;
        applyValueImmediately(): boolean;
        minInclusive(): number;
        maxInclusive(): number;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<number>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<number>): $Function<$OptionInstance<number>, $AbstractWidget>;
        constructor(minInclusive: number, maxInclusive: number);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$IntRange}.
     */
    export type $OptionInstance$IntRange_ = { applyValueImmediately?: boolean, minInclusive?: number, maxInclusive?: number,  } | [applyValueImmediately?: boolean, minInclusive?: number, maxInclusive?: number, ];
    export class $ToggleKeyMapping extends $KeyMapping {
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        reset(): void;
        modifyReturnValue$doi000$xaerominimap$onIsDown(arg0: boolean): boolean;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(name: string, keyCode: number, category: string, needsToggle: $BooleanSupplier_);
    }
    export class $PrioritizeChunkUpdates extends $Enum<$PrioritizeChunkUpdates> implements $OptionEnum {
        static values(): $PrioritizeChunkUpdates[];
        static valueOf(arg0: string): $PrioritizeChunkUpdates;
        getKey(): string;
        getId(): number;
        static byId(id: number): $PrioritizeChunkUpdates;
        getCaption(): $Component;
        static NEARBY: $PrioritizeChunkUpdates;
        static NONE: $PrioritizeChunkUpdates;
        static PLAYER_AFFECTED: $PrioritizeChunkUpdates;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PrioritizeChunkUpdates}.
     */
    export type $PrioritizeChunkUpdates_ = "none" | "player_affected" | "nearby";
    export class $OptionInstance$UnitDouble extends $Enum<$OptionInstance$UnitDouble> implements $OptionInstance$SliderableValueSet<number> {
        xmap<R>(encoder: $DoubleFunction_<R>, decoder: $ToDoubleFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        codec(): $Codec<number>;
        static values(): $OptionInstance$UnitDouble[];
        static valueOf(arg0: string): $OptionInstance$UnitDouble;
        validateValue(value: number): (number) | undefined;
        toSliderValue(value: number): number;
        applyValueImmediately(): boolean;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<number>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<number>): $Function<$OptionInstance<number>, $AbstractWidget>;
        fromSliderValue(value: number): number;
        static INSTANCE: $OptionInstance$UnitDouble;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$UnitDouble}.
     */
    export type $OptionInstance$UnitDouble_ = "instance";
    export class $DeltaTracker$Timer implements $DeltaTracker, $TimerAccessor$1, $TimerAccessor, $DynamicRenderTickCounterAccessor {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getGameTimeDeltaTicks(): number;
        updateFrozenState(frozen: boolean): void;
        advanceTime(time: number, arg1: boolean): number;
        updatePauseState(frozen: boolean): void;
        getRealtimeDeltaTicks(): number;
        catnip$getDeltaTickResidual(): number;
        getDeltaTickResidual(): number;
        essential$getRawTickDelta(): number;
        constructor(ticksPerSecond: number, time: number, arg2: $FloatUnaryOperator_);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
        get deltaTickResidual(): number;
    }
    export class $CameraType extends $Enum<$CameraType> {
        cycle(): $CameraType;
        static values(): $CameraType[];
        static valueOf(arg0: string): $CameraType;
        isMirrored(): boolean;
        isFirstPerson(): boolean;
        static THIRD_PERSON_BACK: $CameraType;
        static THIRD_PERSON_FRONT: $CameraType;
        static FIRST_PERSON: $CameraType;
        get mirrored(): boolean;
        get firstPerson(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CameraType}.
     */
    export type $CameraType_ = "first_person" | "third_person_back" | "third_person_front" | "sub_level_view" | "sub_level_view_unlocked";
    export class $GuiMessage$Line extends $Record implements $HeadRenderable {
        tag(): $GuiMessageTag;
        content(): $FormattedCharSequence;
        endOfEntry(): boolean;
        addedTime(): number;
        chatheads$getHeadData(): $HeadData;
        handler$bgb000$chat_heads$chatheads$setOwnerForFirstLine(callbackInfo: $CallbackInfo): void;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $FormattedCharSequence_, arg2: $GuiMessageTag_ | null, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage$Line}.
     */
    export type $GuiMessage$Line_ = { tag?: $GuiMessageTag_, content?: $FormattedCharSequence_, endOfEntry?: boolean, addedTime?: number,  } | [tag?: $GuiMessageTag_, content?: $FormattedCharSequence_, endOfEntry?: boolean, addedTime?: number, ];
    export class $GameNarrator {
        updateNarratorStatus(status: $NarratorStatus_): void;
        clear(): void;
        destroy(): void;
        isActive(): boolean;
        say(message: $Component_): void;
        checkStatus(narratorEnabled: boolean): void;
        sayNow(message: string): void;
        sayNow(message: $Component_): void;
        sayChat(message: $Component_): void;
        static NO_TITLE: $Component;
        constructor(minecraft: $Minecraft);
        get active(): boolean;
    }
    export class $OptionInstance$ClampingLazyMaxIntRange extends $Record implements $OptionInstance$IntRangeBase, $OptionInstance$SliderableOrCyclableValueSet<number> {
        codec(): $Codec<number>;
        valueListSupplier(): $CycleButton$ValueListSupplier<number>;
        validateValue(value: number): (number) | undefined;
        encodableMaxInclusive(): number;
        minInclusive(): number;
        maxInclusive(): number;
        createCycleButton(): boolean;
        maxSupplier(): $IntSupplier;
        applyValueImmediately(): boolean;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<number>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<number>): $Function<$OptionInstance<number>, $AbstractWidget>;
        constructor(arg0: number, arg1: $IntSupplier_, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$ClampingLazyMaxIntRange}.
     */
    export type $OptionInstance$ClampingLazyMaxIntRange_ = { encodableMaxInclusive?: number, maxSupplier?: $IntSupplier_, minInclusive?: number,  } | [encodableMaxInclusive?: number, maxSupplier?: $IntSupplier_, minInclusive?: number, ];
    export class $OptionInstance$SliderableValueSet<T> {
    }
    export interface $OptionInstance$SliderableValueSet<T> extends $OptionInstance$ValueSet<T> {
        applyValueImmediately(): boolean;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
        toSliderValue(value: T): number;
        fromSliderValue(value: number): T;
    }
    export class $GuiMessageTag extends $Record {
        icon(): $GuiMessageTag$Icon;
        static system(): $GuiMessageTag;
        text(): $Component;
        static systemSinglePlayer(): $GuiMessageTag;
        indicatorColor(): number;
        logTag(): string;
        static chatError(): $GuiMessageTag;
        static chatNotSecure(): $GuiMessageTag;
        static chatModified(originalText: string): $GuiMessageTag;
        constructor(arg0: number, arg1: $GuiMessageTag$Icon_ | null, arg2: $Component_ | null, arg3: string | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag}.
     */
    export type $GuiMessageTag_ = { indicatorColor?: number, icon?: $GuiMessageTag$Icon_, logTag?: string, text?: $Component_,  } | [indicatorColor?: number, icon?: $GuiMessageTag$Icon_, logTag?: string, text?: $Component_, ];
    export class $Options$OptionAccess {
    }
    export interface $Options$OptionAccess {
    }
    /**
     * Values that may be interpreted as {@link $Options$OptionAccess}.
     */
    export type $Options$OptionAccess_ = (() => void);
    export class $PeriodicNotificationManager extends $SimplePreparableReloadListener<$Map<string, $List<$PeriodicNotificationManager$Notification>>> implements $AutoCloseable {
        apply(object: $Map_<string, $List_<$PeriodicNotificationManager$Notification_>>, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        close(): void;
        constructor(notifications: $ResourceLocation_, selector: $Object2BooleanFunction_<string>);
    }
    export class $GuiMessage extends $Record implements $HeadRenderable {
        icon(): $GuiMessageTag$Icon;
        signature(): $MessageSignature;
        tag(): $GuiMessageTag;
        content(): $Component;
        addedTime(): number;
        chatheads$setHeadData(headData: $HeadData_): void;
        chatheads$getHeadData(): $HeadData;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $Component_, arg2: $MessageSignature_ | null, arg3: $GuiMessageTag_ | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage}.
     */
    export type $GuiMessage_ = { tag?: $GuiMessageTag_, content?: $Component_, signature?: $MessageSignature_, addedTime?: number,  } | [tag?: $GuiMessageTag_, content?: $Component_, signature?: $MessageSignature_, addedTime?: number, ];
    export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum, $RecipeBookCategoriesAccessor {
        static values(): $RecipeBookCategories[];
        static valueOf(arg0: string): $RecipeBookCategories;
        static getCategories(recipeBookType: $RecipeBookType_): $List<$RecipeBookCategories>;
        static setAGGREGATE_CATEGORIES$connector_$md$c99f8a$0(arg0: $Map_<any, any>): void;
        static getExtensionInfo(): $ExtensionInfo;
        getIconItems(): $List<$ItemStack>;
        static CRAFTING_REDSTONE: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_SEARCH: $RecipeBookCategories;
        static CRAFTING_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_MISC: $RecipeBookCategories;
        static SMOKER_FOOD: $RecipeBookCategories;
        static CRAFTING_BUILDING_BLOCKS: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_DRINKS: $RecipeBookCategories;
        static SMOKER_CATEGORIES: $List<$RecipeBookCategories>;
        static SMOKER_SEARCH: $RecipeBookCategories;
        static STONECUTTER: $RecipeBookCategories;
        static AGGREGATE_CATEGORIES: $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
        static CRAFTING_EQUIPMENT: $RecipeBookCategories;
        static BLAST_FURNACE_BLOCKS: $RecipeBookCategories;
        static BLAST_FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static FARMERSDELIGHT_COOKING_MEALS: $RecipeBookCategories;
        static CRAFTING_MISC: $RecipeBookCategories;
        static CAMPFIRE: $RecipeBookCategories;
        static FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_CATEGORIES: $List<$RecipeBookCategories>;
        static SMITHING: $RecipeBookCategories;
        static FURNACE_FOOD: $RecipeBookCategories;
        static FURNACE_BLOCKS: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_MISC: $RecipeBookCategories;
        static FURNACE_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_SEARCH: $RecipeBookCategories;
        static UNKNOWN: $RecipeBookCategories;
        static FURNACE_MISC: $RecipeBookCategories;
        static set AGGREGATE_CATEGORIES$connector_$md$c99f8a$0(value: $Map_<any, any>);
        static get extensionInfo(): $ExtensionInfo;
        get iconItems(): $List<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookCategories}.
     */
    export type $RecipeBookCategories_ = "crafting_search" | "crafting_building_blocks" | "crafting_redstone" | "crafting_equipment" | "crafting_misc" | "furnace_search" | "furnace_food" | "furnace_blocks" | "furnace_misc" | "blast_furnace_search" | "blast_furnace_blocks" | "blast_furnace_misc" | "smoker_search" | "smoker_food" | "stonecutter" | "smithing" | "campfire" | "unknown" | "farmersdelight_cooking_drinks" | "farmersdelight_cooking_meals" | "farmersdelight_cooking_misc" | "farmersdelight_cooking_search";
    export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        constructor(arg0: $List_<T>, arg1: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$Enum}.
     */
    export type $OptionInstance$Enum_<T> = { values?: $List_<any>, codec?: $Codec<any>,  } | [values?: $List_<any>, codec?: $Codec<any>, ];
    export class $OptionInstance$TooltipSupplier<T> {
    }
    export interface $OptionInstance$TooltipSupplier<T> {
        apply(value: T): $Tooltip;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$TooltipSupplier}.
     */
    export type $OptionInstance$TooltipSupplier_<T> = ((arg0: T) => $Tooltip);
    export class $CommandHistory {
        history(): $Collection<string>;
        addCommand(command: string): void;
        constructor(path: $Path_);
    }
    export class $Camera implements $CameraZoomExtension, $CameraWaterOcclusionExtension {
        getPosition(): $Vec3;
        reset(): void;
        setup(level: $BlockGetter, entity: $Entity, detached: boolean, thirdPersonReverse: boolean, partialTick: number): void;
        move(zoom: number, dy: number, dx: number): void;
        tick(): void;
        rotation(): $Quaternionf;
        getPartialTickTime(): number;
        getFluidInCamera(): $FogType;
        getEntity(): $Entity;
        sable$setZoomAmount(arg0: number): void;
        handler$gjh001$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        handler$gia000$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        handler$bjg000$vista$setupCannonCamera(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number, arg5: $CallbackInfo): void;
        getBlockPosition(): $BlockPos;
        getUpVector(): $Vector3f;
        isInitialized(): boolean;
        handler$zcp000$sodium_extra$noLerp(arg0: $CallbackInfo): void;
        handler$gof000$sable$rotateView(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        setRotation(zoom: number, dy: number, dx: number): void;
        /**
         * @deprecated
         */
        setRotation(yRot: number, xRot: number): void;
        isDetached(): boolean;
        getLookVector(): $Vector3f;
        sable$getZoomAmount(): number;
        setPosition(pos: $Vec3_): void;
        /**
         * Sets the position and blockpos of the active render
         */
        setPosition(x: number, arg1: number, y: number): void;
        getXRot(): number;
        getYRot(): number;
        getNearPlane(): $Camera$NearPlane;
        sable$isOccluded(): boolean;
        getLeftVector(): $Vector3f;
        getBlockAtCamera(): $BlockState;
        getRoll(): number;
        sable$setIgnoreOcclusion(arg0: boolean): void;
        sable$isIgnoreOcclusion(): boolean;
        getMaxZoom(maxZoom: number): number;
        eyeHeightOld: number;
        static FOG_DISTANCE_SCALE: number;
        level: $BlockGetter;
        eyeHeight: number;
        initialized: boolean;
        static $assertionsDisabled: boolean;
        entity: $Entity;
        constructor();
        get partialTickTime(): number;
        get fluidInCamera(): $FogType;
        get blockPosition(): $BlockPos;
        get upVector(): $Vector3f;
        get detached(): boolean;
        get lookVector(): $Vector3f;
        get XRot(): number;
        get YRot(): number;
        get nearPlane(): $Camera$NearPlane;
        get leftVector(): $Vector3f;
        get blockAtCamera(): $BlockState;
        get roll(): number;
    }
    export class $StringSplitter$LinePosConsumer {
    }
    export interface $StringSplitter$LinePosConsumer {
        accept(style: $Style, currentPos: number, contentWidth: number): void;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$LinePosConsumer}.
     */
    export type $StringSplitter$LinePosConsumer_ = ((arg0: $Style, arg1: number, arg2: number) => void);
    export class $User$Type extends $Enum<$User$Type> {
        getName(): string;
        static values(): $User$Type[];
        static valueOf(typeName: string): $User$Type;
        static byName(typeName: string): $User$Type;
        static MOJANG: $User$Type;
        static LEGACY: $User$Type;
        static MSA: $User$Type;
    }
    /**
     * Values that may be interpreted as {@link $User$Type}.
     */
    export type $User$Type_ = "legacy" | "mojang" | "msa";
    export class $Minecraft$GameLoadCookie extends $Record {
        quickPlayData(): $GameConfig$QuickPlayData;
        realmsClient(): $RealmsClient;
        constructor(realmsClient: $RealmsClient, quickPlayData: $GameConfig$QuickPlayData_);
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$GameLoadCookie}.
     */
    export type $Minecraft$GameLoadCookie_ = { quickPlayData?: $GameConfig$QuickPlayData_, realmsClient?: $RealmsClient,  } | [quickPlayData?: $GameConfig$QuickPlayData_, realmsClient?: $RealmsClient, ];
    export class $OptionInstance<T> implements $OptionInstanceAccessor<any>, $ISimpleOption<any> {
        codec(): $Codec<$Object>;
        get(): $Object;
        values(): $OptionInstance$ValueSet<$Object>;
        set(value: $Object): void;
        static cachedConstantTooltip<T>(message: $Component_): $OptionInstance$TooltipSupplier<T>;
        static createBoolean(key: string, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, valueStringifier: $OptionInstance$CaptionBasedToString_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(key: string, initialValue: boolean): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean): $OptionInstance<boolean>;
        static forOptionEnum<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>;
        createButton(options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<$Object>): $AbstractWidget;
        createButton(options: $Options, x: number, y: number, width: number): $AbstractWidget;
        createButton(options: $Options): $AbstractWidget;
        static noTooltip<T>(): $OptionInstance$TooltipSupplier<T>;
        setCallbacks(arg0: $OptionInstance$ValueSet<$Object>): void;
        getInitialValue(): $Object;
        setCodec(arg0: $Codec<$Object>): void;
        caption: $Component;
        static BOOLEAN_VALUES: $OptionInstance$Enum<boolean>;
        value: $Object;
        static BOOLEAN_TO_STRING: $OptionInstance$CaptionBasedToString<boolean>;
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<$Object>, valueStringifier: $OptionInstance$CaptionBasedToString_<$Object>, values: $OptionInstance$ValueSet<$Object>, codec: $Codec<$Object>, initialValue: $Object, onValueUpdate: $Consumer_<$Object>);
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<$Object>, valueStringifier: $OptionInstance$CaptionBasedToString_<$Object>, values: $OptionInstance$ValueSet<$Object>, initialValue: $Object, onValueUpdate: $Consumer_<$Object>);
        set callbacks(value: $OptionInstance$ValueSet<$Object>);
        get initialValue(): $Object;
    }
    export class $StringSplitter$LineComponent implements $FormattedText {
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        get string(): string;
    }
    export class $Minecraft extends $ReentrantBlockableEventLoop<$Runnable> implements $WindowEventHandler, $IMinecraftExtension, $MinecraftClientAccessor, $IXaeroMinimapMinecraftClient, $IWorldMapMinecraftClient, $MinecraftClientAccessor$1, $MinecraftClientKJS, $MinecraftAccessor, $IMixinMinecraft, $MinecraftExt$1, $MinecraftExt, $MinecraftAccessor$1 {
        getProfiler(): $ProfilerFiller;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        run(): void;
        /**
         * Return the singleton Minecraft instance for the game
         */
        static getInstance(): $Minecraft;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        stop(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        destroy(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        tick(): void;
        setLevel(level: $ClientLevel, reason: $ReceivingLevelScreen$Reason_): void;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        getTelemetryManager(): $ClientTelemetryManager;
        getProfileKeyPairManager(): $ProfileKeyPairManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        hasSingleplayerServer(): boolean;
        debugClientMetricsStart(logger: $Consumer_<$Component>): boolean;
        handler$bdn002$veil$close(arg0: $CallbackInfo): void;
        reloadResourcePacks(): $CompletableFuture<void>;
        getMainRenderTarget(): $RenderTarget;
        clearResourcePacksOnError(throwable: $Throwable, errorMessage: $Component_ | null, gameLoadCookie: $Minecraft$GameLoadCookie_ | null): void;
        /**
         * Returns the currently running integrated server
         */
        getSingleplayerServer(): $IntegratedServer;
        emergencySaveAndCrash(report: $CrashReport): void;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        debugFpsMeterKeyPress(keyCount: number): void;
        getResourcePackDirectory(): $Path;
        getMinecraftSessionService(): $MinecraftSessionService;
        getMapDecorationTextures(): $MapDecorationTextureManager;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        prepareForMultiplayer(): void;
        updateReportEnvironment(reportEnvironment: $ReportEnvironment_): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useShaderTransparency(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        showOnlyReducedInfo(): boolean;
        getDownloadedPackSource(): $DownloadedPackSource;
        shouldEntityAppearGlowing(entity: $Entity): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useAmbientOcclusion(): boolean;
        getResourcePackRepository(): $PackRepository;
        grabPanoramixScreenshot(gameDirectory: $File_, width: number, height: number): $Component;
        createWorldOpenFlows(): $WorldOpenFlows;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        extraTelemetryAvailable(): boolean;
        getGpuWarnlistManager(): $GpuWarnlistManager;
        getSituationalMusic(): $Music;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        telemetryOptInExtra(): boolean;
        /**
         * Gets the sprite uploader used for paintings.
         */
        getPaintingTextures(): $PaintingTextureManager;
        /**
         * Gets the sprite uploader used for potions.
         */
        getMobEffectTextures(): $MobEffectTextureManager;
        getProgressListener(): $StoringChunkProgressListener;
        getPlayerSocialManager(): $PlayerSocialManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isTextFilteringEnabled(): boolean;
        getEssential$executor(): $Executor;
        getReportingContext(): $ReportingContext;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        canValidateProfileKeys(): boolean;
        getXaeroMinimap_fps(): number;
        getXaeroWorldMap_fps(): number;
        getScheduledEvents(): $ScheduledEvents;
        disconnect(nextScreen: $Screen, keepResourcePacks: boolean): void;
        disconnect(nextScreen: $Screen): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        disconnect(): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isRunning(): boolean;
        static crash(minecraft: $Minecraft | null, gameDirectory: $File_, crashReport: $CrashReport): void;
        handler$bcl000$veil$endFrame(arg0: $CallbackInfo): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        clearDownloadedResourcePacks(): void;
        handler$bih000$exposure$disconnect(nextScreen: $Screen, keepResourcePacks: boolean, ci: $CallbackInfo): void;
        constant$hpd000$essential$modify(value: number): number;
        handler$bcl000$veil$beginFrame(arg0: $CallbackInfo): void;
        getProfileKeySignatureValidator(): $SignatureValidator;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        static getFPS$sodium_extra_$md$c99f8a$0(): number;
        setOverlay(loadingGui: $Overlay | null): void;
        getWindow(): $Window;
        getTimer(): $DeltaTracker;
        getVanillaPackResources(): $VanillaPackResources;
        getCurrentServer(): $ServerData;
        getTextureManager(): $TextureManager;
        getGuiSprites(): $GuiSpriteManager;
        getItemRenderer(): $ItemRenderer;
        renderBuffers(): $RenderBuffers;
        realmsDataFetcher(): $RealmsDataFetcher;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isLocalServer(): boolean;
        directoryValidator(): $DirectoryValidator;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsMultiplayer(): boolean;
        quickPlayLog(): $QuickPlayLog;
        doWorldLoad(levelStorage: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, newWorld: boolean): void;
        commandHistory(): $CommandHistory;
        getBlockRenderer(): $BlockRenderDispatcher;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isGameLoadFinished(): boolean;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        updateTitle(): void;
        static checkModStatus(): $ModCheck;
        multiplayerBan(): $BanDetails;
        setWindowActive(leftClick: boolean): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        resizeDisplay(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        updateFontOptions(): void;
        delayCrashRaw(report: $CrashReport): void;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getVersionType(): string;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isEnforceUnicode(): boolean;
        getModelManager(): $ModelManager;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getLaunchedVersion(): string;
        getDebugOverlay(): $DebugScreenOverlay;
        /**
         * Returns the save loader that is currently being used
         */
        getLevelSource(): $LevelStorageSource;
        getChatStatus(): $Minecraft$ChatStatus;
        setLastInputType(lastInputType: $InputType_): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        cursorEntered(): void;
        getFrameTimeNs(): number;
        /**
         * Return the musicTicker's instance
         */
        getMusicManager(): $MusicManager;
        getCameraEntity(): $Entity;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        handleKeybinds(): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsRealms(): boolean;
        clearClientLevel(nextScreen: $Screen): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useFancyGraphics(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsTelemetry(): boolean;
        getGpuUtilization(): number;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static renderNames(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isNameBanned(): boolean;
        forceSetScreen(nextScreen: $Screen): void;
        addCustomNbtData(stack: $ItemStack_, blockEntity: $BlockEntity, registryAccess: $RegistryAccess): void;
        getGameProfile(): $GameProfile;
        getSkinManager(): $SkinManager;
        getTextureAtlas(location: $ResourceLocation_): $Function<$ResourceLocation, $TextureAtlasSprite>;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isSingleplayer(): boolean;
        getSplashManager(): $SplashManager;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        updateMaxMipLevel(keyCount: number): void;
        delayTextureReload(): $CompletableFuture<void>;
        getLanguageManager(): $LanguageManager;
        setCameraEntity(viewingEntity: $Entity): void;
        getFixerUpper(): $DataFixer;
        getBlockColors(): $BlockColors;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isWindowActive(): boolean;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        static getLauncherBrand(): string;
        getSoundManager(): $SoundManager;
        getHotbarManager(): $HotbarManager;
        isLocalPlayer(playerUUID: $UUID_): boolean;
        getTutorial(): $Tutorial;
        getEntityModels(): $EntityModelSet;
        getChatListener(): $ChatListener;
        getLastInputType(): $InputType;
        getNarrator(): $GameNarrator;
        getItemColors(): $ItemColors;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getTitle(): string;
        getProxy(): $Proxy;
        localvar$igb000$essential$displayGuiScreen(screen: $Screen): $Screen;
        modify$efa000$xaeroworldmap$onRenderCall(arg0: boolean): boolean;
        handler$bih000$exposure$onSetScreen(screen: $Screen, ci: $CallbackInfo): void;
        handler$igb000$essential$displayGuiScreen(screen: $Screen, info: $CallbackInfo): void;
        handler$dhn000$polytone$changeToast(message: $Component_, ci: $CallbackInfo, modifiableMessage: $LocalRef<any>): void;
        handler$hcm004$distanthorizons$close(ci: $CallbackInfo): void;
        handler$bih000$exposure$onStartAttack(cir: $CallbackInfoReturnable<any>): void;
        handler$blp000$transition$fillReport(theCrash: $CrashReport, ci: $CallbackInfoReturnable<any>): void;
        handler$bih000$exposure$onStartUseItem(ci: $CallbackInfo): void;
        handler$bih000$exposure$onLevelUnload(newLevel: $ClientLevel, reason: $ReceivingLevelScreen$Reason_, ci: $CallbackInfo): void;
        handler$ggl000$sable$postCycleCameraType(arg0: $CallbackInfo): void;
        getResourceManager(): $ResourceManager;
        handler$efa000$xaeroworldmap$onRunTickStart(arg0: $CallbackInfo): void;
        handler$iga000$essential$fireGuiOpenedEvent(screen: $Screen, info: $CallbackInfo): void;
        handler$zlo000$iris$trackLastDimensionOnLeave(arg0: $Screen, arg1: $CallbackInfo): void;
        handler$bnb000$acceleratedrendering$bindAcceleratedBufferSources(arg0: $GameConfig, arg1: $CallbackInfo): void;
        localvar$hop000$fabric_events_interaction_v0$modifyItemPick(arg0: $ItemStack_): $ItemStack;
        handler$hop000$fabric_events_interaction_v0$cancelItemPick(arg0: $CallbackInfo): void;
        modifyReturnValue$bih000$exposure$onGetMainRenderTarget(original: $RenderTarget): $RenderTarget;
        handler$bnd000$acceleratedrendering$setDebugContext(arg0: $GameConfig, arg1: $CallbackInfo): void;
        modifyExpressionValue$iad000$essential$modifyMultiplayerWindowTitleOther(original: string): string;
        modifyExpressionValue$iad000$essential$modifyMultiplayerWindowTitleLAN(original: string): string;
        static fillReport(minecraft: $Minecraft | null, languageManager: $LanguageManager | null, launchVersion: string, options: $Options | null, report: $CrashReport): void;
        /**
         * Adds core server Info (GL version, Texture pack, isModded, type), and the worldInfo to the crash report.
         */
        fillReport(theCrash: $CrashReport): $CrashReport;
        setScreen(nextScreen: $Screen | null): void;
        getToasts(): $ToastComponent;
        delayCrash(report: $CrashReport): void;
        getFps(): number;
        getUser(): $User;
        isBlocked(playerUUID: $UUID_): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isDemo(): boolean;
        pauseGame(leftClick: boolean): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isPaused(): boolean;
        getOverlay(): $Overlay;
        setSession(session: $User): void;
        /**
         * Retrieves the `Locale` set by the player.
         * Useful for creating string and number formatters.
         */
        getLocale(): $Locale;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        popGuiLayer(): void;
        pushGuiLayer(nextScreen: $Screen): void;
        setActivePostShader(id: $ResourceLocation_): void;
        setCurrentScreen(nextScreen: $Screen): void;
        getKeyBindPressedTicks(id: string): number;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(defaultText: string): void;
        isKeyMappingDown(key: $KeyMapping): boolean;
        getCurrentScreen(): $Screen;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        setStatusMessage(message: $Component_): void;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getCurrentWorldName(): string;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isAltDown(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isShiftDown(): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(defaultText: string): void;
        getName(): $Component;
        setTitle(defaultText: string): void;
        isKeyDown(key: number): boolean;
        isKeyDown(keyName: string): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isCtrlDown(): boolean;
        isKeyBindDown(id: string): boolean;
        /**
         * Return the singleton Minecraft instance for the game
         */
        self(): $Minecraft;
        tell(message: $Component_): void;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getDisplayName(): $Component;
        getConnection(): $Connection;
        setGameProfileFuture(arg0: $CompletableFuture<$ProfileResult_>): void;
        openChatScreenFancyMenu(defaultText: string): void;
        getReloadStateTrackerFancyMenu(): $ResourceLoadStateTracker;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        create$setMissTime(keyCount: number): void;
        itemColors: $ItemColors;
        static instance: $Minecraft;
        crosshairPickEntity: $Entity;
        screen: $Screen;
        cameraEntity: $Entity;
        mainRenderTarget: $RenderTarget;
        sectionVisibility: boolean;
        static ON_OSX: boolean;
        mouseHandler: $MouseHandler;
        static UNIFORM_FONT: $ResourceLocation;
        gameRenderer: $GameRenderer;
        wireframe: boolean;
        pendingRunnables: $Queue<$Runnable>;
        options: $Options;
        levelRenderer: $LevelRenderer;
        player: $LocalPlayer;
        pendingConnection: $Connection;
        fontFilterFishy: $Font;
        missTime: number;
        level: $ClientLevel;
        gameDirectory: $File;
        static $assertionsDisabled: boolean;
        sectionPath: boolean;
        debugRenderer: $DebugRenderer;
        noRender: boolean;
        static DEFAULT_FONT: $ResourceLocation;
        fpsString: string;
        keyboardHandler: $KeyboardHandler;
        fontManager: $FontManager;
        static UPDATE_DRIVERS_ADVICE: string;
        particleEngine: $ParticleEngine;
        clientTickCount: number;
        gui: $Gui;
        gameMode: $MultiPlayerGameMode;
        static ALT_FONT: $ResourceLocation;
        hitResult: $HitResult;
        smartCull: boolean;
        font: $Font;
        constructor(gameConfig: $GameConfig);
        get profiler(): $ProfilerFiller;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get telemetryManager(): $ClientTelemetryManager;
        get profileKeyPairManager(): $ProfileKeyPairManager;
        get singleplayerServer(): $IntegratedServer;
        get resourcePackDirectory(): $Path;
        get minecraftSessionService(): $MinecraftSessionService;
        get mapDecorationTextures(): $MapDecorationTextureManager;
        get downloadedPackSource(): $DownloadedPackSource;
        get resourcePackRepository(): $PackRepository;
        get gpuWarnlistManager(): $GpuWarnlistManager;
        get situationalMusic(): $Music;
        get paintingTextures(): $PaintingTextureManager;
        get mobEffectTextures(): $MobEffectTextureManager;
        get progressListener(): $StoringChunkProgressListener;
        get playerSocialManager(): $PlayerSocialManager;
        get textFilteringEnabled(): boolean;
        get essential$executor(): $Executor;
        get reportingContext(): $ReportingContext;
        get xaeroMinimap_fps(): number;
        get xaeroWorldMap_fps(): number;
        get scheduledEvents(): $ScheduledEvents;
        get running(): boolean;
        get profileKeySignatureValidator(): $SignatureValidator;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        static get FPS$sodium_extra_$md$c99f8a$0(): number;
        get window(): $Window;
        get timer(): $DeltaTracker;
        get vanillaPackResources(): $VanillaPackResources;
        get currentServer(): $ServerData;
        get textureManager(): $TextureManager;
        get guiSprites(): $GuiSpriteManager;
        get itemRenderer(): $ItemRenderer;
        get localServer(): boolean;
        get blockRenderer(): $BlockRenderDispatcher;
        get gameLoadFinished(): boolean;
        get versionType(): string;
        get enforceUnicode(): boolean;
        get modelManager(): $ModelManager;
        get launchedVersion(): string;
        get debugOverlay(): $DebugScreenOverlay;
        get levelSource(): $LevelStorageSource;
        get chatStatus(): $Minecraft$ChatStatus;
        get frameTimeNs(): number;
        get musicManager(): $MusicManager;
        get gpuUtilization(): number;
        get nameBanned(): boolean;
        get gameProfile(): $GameProfile;
        get skinManager(): $SkinManager;
        get singleplayer(): boolean;
        get splashManager(): $SplashManager;
        get languageManager(): $LanguageManager;
        get fixerUpper(): $DataFixer;
        get blockColors(): $BlockColors;
        static get launcherBrand(): string;
        get soundManager(): $SoundManager;
        get hotbarManager(): $HotbarManager;
        get tutorial(): $Tutorial;
        get entityModels(): $EntityModelSet;
        get chatListener(): $ChatListener;
        get narrator(): $GameNarrator;
        get proxy(): $Proxy;
        get resourceManager(): $ResourceManager;
        get toasts(): $ToastComponent;
        get fps(): number;
        get user(): $User;
        get demo(): boolean;
        get paused(): boolean;
        set session(value: $User);
        get locale(): $Locale;
        set activePostShader(value: $ResourceLocation_);
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        set statusMessage(value: $Component_);
        get currentWorldName(): string;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get altDown(): boolean;
        get shiftDown(): boolean;
        get ctrlDown(): boolean;
        get displayName(): $Component;
        get connection(): $Connection;
        set gameProfileFuture(value: $CompletableFuture<$ProfileResult_>);
        get reloadStateTrackerFancyMenu(): $ResourceLoadStateTracker;
    }
    export class $Camera$NearPlane {
        getPointOnPlane(leftScale: number, upScale: number): $Vec3;
        getBottomLeft(): $Vec3;
        getBottomRight(): $Vec3;
        getTopRight(): $Vec3;
        getTopLeft(): $Vec3;
        forward: $Vec3;
        constructor(forward: $Vec3_, left: $Vec3_, up: $Vec3_);
        get bottomLeft(): $Vec3;
        get bottomRight(): $Vec3;
        get topRight(): $Vec3;
        get topLeft(): $Vec3;
    }
    export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
        static values(): $GuiMessageTag$Icon[];
        static valueOf(arg0: string): $GuiMessageTag$Icon;
        draw(guiGraphics: $GuiGraphics, x: number, y: number): void;
        static create$nochatreports_$md$c99f8a$0(arg0: string, arg1: number, arg2: $ResourceLocation_, arg3: number, arg4: number): $GuiMessageTag$Icon;
        static CHAT_MODIFIED: $GuiMessageTag$Icon;
        sprite: $ResourceLocation;
        width: number;
        height: number;
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag$Icon}.
     */
    export type $GuiMessageTag$Icon_ = "chat_modified" | "chat_ncr_encrypted";
    export class $KeyboardHandler {
        setup(window: number): void;
        tick(): void;
        getClipboard(): string;
        setClipboard(string: string): void;
        keyPress(windowPointer: number, arg1: number, key: number, scanCode: number, action: number): void;
        handler$bbf000$veil$handleChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$bbf000$veil$printChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$djc000$emi$onKey(window: number, key: number, scancode: number, action: number, modifiers: number, info: $CallbackInfo): void;
        handler$djc000$emi$onChar(window: number, codePoint: number, modifiers: number, info: $CallbackInfo): void;
        handler$bkc000$vista$supp$onKeyPressCancellable(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        cached_key_FancyMenu: number;
        cached_scanCode_FancyMenu: number;
        cached_action_FancyMenu: number;
        cached_char_codePoint_FancyMenu: number;
        static DEBUG_CRASH_TIME: number;
        cached_char_windowPointer_FancyMenu: number;
        cached_char_modifiers_FancyMenu: number;
        cached_modifiers_FancyMenu: number;
        constructor(minecraft: $Minecraft);
        set up(value: number);
    }
    export class $StringSplitter$WidthProvider {
    }
    export interface $StringSplitter$WidthProvider {
        getWidth(codePoint: number, style: $Style): number;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$WidthProvider}.
     */
    export type $StringSplitter$WidthProvider_ = ((arg0: number, arg1: $Style) => number);
    export class $ResourceLoadStateTracker {
        startReload(reloadReason: $ResourceLoadStateTracker$ReloadReason_, packs: $List_<$PackResources>): void;
        startRecovery(error: $Throwable): void;
        fillCrashReport(report: $CrashReport): void;
        finishReload(): void;
        constructor();
    }
    export class $StringSplitter$LineBreakFinder implements $FormattedCharSink {
    }
    export class $ResourceLoadStateTracker$ReloadReason extends $Enum<$ResourceLoadStateTracker$ReloadReason> {
        static values(): $ResourceLoadStateTracker$ReloadReason[];
        static valueOf(arg0: string): $ResourceLoadStateTracker$ReloadReason;
        static INITIAL: $ResourceLoadStateTracker$ReloadReason;
        static MANUAL: $ResourceLoadStateTracker$ReloadReason;
        static UNKNOWN: $ResourceLoadStateTracker$ReloadReason;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLoadStateTracker$ReloadReason}.
     */
    export type $ResourceLoadStateTracker$ReloadReason_ = "initial" | "manual" | "unknown";
    export class $OptionInstance$SliderableOrCyclableValueSet<T> {
    }
    export interface $OptionInstance$SliderableOrCyclableValueSet<T> extends $OptionInstance$CycleableValueSet<T>, $OptionInstance$SliderableValueSet<T> {
    }
    export class $OptionInstance$ValueSet<T> {
    }
    export interface $OptionInstance$ValueSet<T> {
        codec(): $Codec<T>;
        validateValue(value: T): (T) | undefined;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
    }
    export class $ComponentCollector {
        reset(): void;
        append(part: $FormattedText): void;
        getResult(): $FormattedText;
        getResultOrEmpty(): $FormattedText;
        constructor();
        get result(): $FormattedText;
        get resultOrEmpty(): $FormattedText;
    }
    export class $ClientBrandRetriever {
        static getClientModName(): string;
        static VANILLA_NAME: string;
        constructor();
        static get clientModName(): string;
    }
    export class $OptionInstance$AltEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        valueSetter(): $OptionInstance$CycleableValueSet$ValueSetter<T>;
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        altCondition(): $BooleanSupplier;
        altValues(): $List<T>;
        constructor(arg0: $List_<T>, arg1: $List_<T>, arg2: $BooleanSupplier_, arg3: $OptionInstance$CycleableValueSet$ValueSetter_<T>, arg4: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$AltEnum}.
     */
    export type $OptionInstance$AltEnum_<T> = { altCondition?: $BooleanSupplier_, values?: $List_<any>, altValues?: $List_<any>, codec?: $Codec<any>, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>,  } | [altCondition?: $BooleanSupplier_, values?: $List_<any>, altValues?: $List_<any>, codec?: $Codec<any>, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, ];
    export class $StringSplitter$FlatComponents {
    }
    export class $StringSplitter {
        stringWidth(content: $FormattedText): number;
        stringWidth(content: string | null): number;
        stringWidth(content: $FormattedCharSequence_): number;
        splitLines(content: string, maxWidth: number, style: $Style, withNewLines: boolean, linePos: $StringSplitter$LinePosConsumer_): void;
        splitLines(content: string, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, prefix: $FormattedText): $List<$FormattedText>;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, splitifier: $BiConsumer_<$FormattedText, boolean>): void;
        componentStyleAtWidth(content: $FormattedCharSequence_, maxWidth: number): $Style;
        componentStyleAtWidth(content: $FormattedText, maxWidth: number): $Style;
        headByWidth(content: $FormattedText, maxWidth: number, style: $Style): $FormattedText;
        static getWordPosition(content: string, skipCount: number, cursorPoint: number, includeWhitespace: boolean): number;
        plainIndexAtWidth(content: string, maxWidth: number, style: $Style): number;
        findLineBreak(content: string, maxWidth: number, style: $Style): number;
        plainHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        plainTailByWidth(content: string, maxWidth: number, style: $Style): string;
        formattedHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        formattedIndexByWidth(content: string, maxWidth: number, style: $Style): number;
        widthProvider: $StringSplitter$WidthProvider;
        constructor(widthProvider: $StringSplitter$WidthProvider_);
    }
    export class $PeriodicNotificationManager$NotificationTask extends $TimerTask {
    }
    export class $KeyMapping implements $Comparable<$KeyMapping>, $IKeyMappingExtension, $KeyMappingAccessor, $AccessKeyMapping, $KeyMappingsAccessor, $KeyBindingAccessor$1, $KeyBindingAccessor$2, $KeyBindingAccessor {
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static releaseAll(): void;
        getName(): string;
        compareTo(arg0: $KeyMapping): number;
        matches(keysym: number, scancode: number): boolean;
        static set(key: $InputConstants$Key, held: boolean): void;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDefault(): boolean;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static setAll(): void;
        getCategory(): string;
        setKey(key: $InputConstants$Key): void;
        setDown(value: boolean): void;
        getDefaultKey(): $InputConstants$Key;
        /**
         * Returns a supplier which gets a keybind's current binding (eg, `key.forward` returns W by default), or the keybind's name if no such keybind exists (eg, `key.invalid` returns key.invalid)
         */
        static createNameSupplier(key: string): $Supplier<$Component>;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        consumeClick(): boolean;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        same(binding: $KeyMapping): boolean;
        static fabric_getCategoryMap$fabric_key_binding_api_v1_$md$c99f8a$2(): $Map<any, any>;
        getDefaultKeyModifier(): $KeyModifier;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getTranslatedKeyMessage(): $Component;
        getKeyConflictContext(): $IKeyConflictContext;
        setKeyModifierAndCode(keyModifier: $KeyModifier_, keyCode: $InputConstants$Key): void;
        setKeyConflictContext(keyConflictContext: $IKeyConflictContext): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetToggleKeys(): void;
        /**
         * Returns `true` if the `KeyMapping` is set to a mouse key and the key matches.
         */
        matchesMouse(key: number): boolean;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetMapping(): void;
        getKeyModifier(): $KeyModifier;
        saveString(): string;
        static getKeybinds$essential_$md$c99f8a$3(): $Map<any, any>;
        static getAll$clientsort_$md$c99f8a$0(): $Map<any, any>;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDown(): boolean;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isUnbound(): boolean;
        static click(key: $InputConstants$Key): void;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getDisplayName(): $Component;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        setToDefault(): void;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isConflictContextAndModifierActive(): boolean;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        hasKeyModifierConflict(binding: $KeyMapping): boolean;
        /**
         * @return true if the key conflict context and modifier are active and the keyCode matches this binding, false otherwise
         */
        isActiveAndMatches(keyCode: $InputConstants$Key): boolean;
        getKey(): $InputConstants$Key;
        fabric_getTimesPressed(): number;
        getBoundKey(): $InputConstants$Key;
        clientsort$getKey(): $InputConstants$Key;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        invokeUnpressKey(): void;
        fabric_getBoundKey(): $InputConstants$Key;
        controlling$getKey(): $InputConstants$Key;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(name: string, keyCode: number, category: string);
        constructor(name: string, type: $InputConstants$Type_, keyCode: number, category: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Key, arg3: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Type_, arg3: number, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Type_, arg4: number, arg5: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Key, arg4: string);
        get name(): string;
        get default(): boolean;
        get category(): string;
        get defaultKey(): $InputConstants$Key;
        get defaultKeyModifier(): $KeyModifier;
        get translatedKeyMessage(): $Component;
        get keyModifier(): $KeyModifier;
        static get keybinds$essential_$md$c99f8a$3(): $Map<any, any>;
        static get all$clientsort_$md$c99f8a$0(): $Map<any, any>;
        get unbound(): boolean;
        get displayName(): $Component;
        get conflictContextAndModifierActive(): boolean;
        get boundKey(): $InputConstants$Key;
    }
    export class $DeltaTracker$DefaultValue implements $DeltaTracker {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        constructor(value: number);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Options$FieldAccess {
    }
    export interface $Options$FieldAccess extends $Options$OptionAccess {
        process<T>(name: string, value: T, stringValuefier: $Function_<string, T>, valueStringifier: $Function_<T, string>): T;
        process(name: string, value: number): number;
        process(name: string, value: string): string;
        process(name: string, value: boolean): boolean;
        process(name: string, value: number): number;
    }
    export class $DebugQueryHandler {
        handleResponse(transactionId: number, tag: $CompoundTag_ | null): boolean;
        queryEntityTag(entId: number, tag: $Consumer_<$CompoundTag>): void;
        queryBlockEntityTag(pos: $BlockPos_, tag: $Consumer_<$CompoundTag>): void;
        constructor(connection: $ClientPacketListener);
    }
    export class $NarratorStatus extends $Enum<$NarratorStatus> {
        getName(): $Component;
        static values(): $NarratorStatus[];
        static valueOf(arg0: string): $NarratorStatus;
        getId(): number;
        shouldNarrateSystem(): boolean;
        static byId(id: number): $NarratorStatus;
        shouldNarrateChat(): boolean;
        static SYSTEM: $NarratorStatus;
        static ALL: $NarratorStatus;
        static CHAT: $NarratorStatus;
        static OFF: $NarratorStatus;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NarratorStatus}.
     */
    export type $NarratorStatus_ = "off" | "all" | "chat" | "system";
    export class $ResourceLoadStateTracker$RecoveryInfo {
    }
    export class $Minecraft$ChatStatus extends $Enum<$Minecraft$ChatStatus> {
        static values(): $Minecraft$ChatStatus[];
        static valueOf(arg0: string): $Minecraft$ChatStatus;
        getMessage(): $Component;
        isChatAllowed(isLocalServer: boolean): boolean;
        static DISABLED_BY_OPTIONS: $Minecraft$ChatStatus;
        static INFO_DISABLED_BY_PROFILE: $Component;
        static DISABLED_BY_PROFILE: $Minecraft$ChatStatus;
        static ENABLED: $Minecraft$ChatStatus;
        static DISABLED_BY_LAUNCHER: $Minecraft$ChatStatus;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$ChatStatus}.
     */
    export type $Minecraft$ChatStatus_ = "enabled" | "disabled_by_options" | "disabled_by_launcher" | "disabled_by_profile";
    export class $OptionInstance$CaptionBasedToString<T> {
    }
    export interface $OptionInstance$CaptionBasedToString<T> {
        toString(caption: $Component_, value: T): $Component;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CaptionBasedToString}.
     */
    export type $OptionInstance$CaptionBasedToString_<T> = ((arg0: $Component, arg1: T) => $Component_);
    export class $ParticleStatus extends $Enum<$ParticleStatus> implements $OptionEnum {
        static values(): $ParticleStatus[];
        static valueOf(arg0: string): $ParticleStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $ParticleStatus;
        getCaption(): $Component;
        static ALL: $ParticleStatus;
        static DECREASED: $ParticleStatus;
        static MINIMAL: $ParticleStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ParticleStatus}.
     */
    export type $ParticleStatus_ = "all" | "decreased" | "minimal";
    export class $OptionInstance$CycleableValueSet$ValueSetter<T> {
    }
    export interface $OptionInstance$CycleableValueSet$ValueSetter<T> {
        set(instance: $OptionInstance<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CycleableValueSet$ValueSetter}.
     */
    export type $OptionInstance$CycleableValueSet$ValueSetter_<T> = ((arg0: $OptionInstance<T>, arg1: T) => void);
    export class $OptionInstance$CycleableValueSet<T> {
    }
    export interface $OptionInstance$CycleableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
}
