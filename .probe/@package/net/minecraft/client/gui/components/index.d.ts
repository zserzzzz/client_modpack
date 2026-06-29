import { $CubeMap, $PanoramaRenderer, $Rect2i } from "@package/net/minecraft/client/renderer";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $PlayerTabOverlayInvoker } from "@package/com/vladmarica/betterpingdisplay/mixin";
import { $ParseResults } from "@package/com/mojang/brigadier";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GuiMessage, $OptionInstance, $GuiMessageTag, $NarratorStatus, $OptionInstance$TooltipSupplier_, $GuiMessage$Line_, $Minecraft, $GuiMessage_, $Options, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $AbstractSelectionListAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $FormattedCharSequence_, $ArrayListDeque } from "@package/net/minecraft/util";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $BossEvent$BossBarColor, $BossEvent, $BossEvent$BossBarOverlay_, $BossEvent$BossBarColor_, $BossEvent$BossBarOverlay } from "@package/net/minecraft/world";
import { $SoundManager, $WeighedSoundEvents, $SoundEventListener } from "@package/net/minecraft/client/sounds";
import { $Tab, $TabManager } from "@package/net/minecraft/client/gui/components/tabs";
import { $IAbstractWidgetExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $LocalIntRef, $LocalFloatRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $HeaderAndFooterLayout, $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $MessageSignature_, $MutableComponent, $Component_, $FormattedText, $MutableComponent_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $IMixinAbstractWidget, $IMixinEditBox } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $ScreenRectangle_, $FocusNavigationEvent_, $ScreenRectangle, $ScreenDirection_ } from "@package/net/minecraft/client/gui/navigation";
import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger, $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $AccessEditBox } from "@package/com/blamejared/searchables/mixin";
import { $PlayerSkin, $PlayerSkin_ } from "@package/net/minecraft/client/resources";
import { $Vec2, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $IMixinEditBox as $IMixinEditBox$1, $IMixinAbstractWidget as $IMixinAbstractWidget$1, $IMixinAbstractSliderButton, $IMixinBossHealthOverlay, $IMixinSplashRenderer, $IMixinSuggestionsList, $IMixinButton, $IMixinCommandSuggestions } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $BuggerScreenRenderLinesInvoker } from "@package/io/github/mortuusars/exposure/mixin/client";
import { $UUID_, $Map, $OptionalInt, $UUID, $List, $SequencedCollection, $Collection_, $List_, $AbstractList } from "@package/java/util";
import { $IClickableWidget } from "@package/xaero/lib/client/gui/widget";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $Supplier_, $Consumer_, $BiFunction, $Predicate_, $Predicate, $Consumer, $Function_, $BooleanSupplier, $BooleanSupplier_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $EntryListWidgetAccessor } from "@package/gg/essential/mixins/transformers/client/gui";
import { $Suggestions, $Suggestion } from "@package/com/mojang/brigadier/suggestion";
import { $IAudio } from "@package/de/keksuccino/fancymenu/util/resource/resources/audio";
import { $CustomizableWidget$CustomBackgroundResetBehavior_, $CustomizableWidget, $UniqueLabeledSwitchCycleButton, $CustomizableSlider, $CustomizableWidget$CustomBackgroundResetBehavior, $UniqueWidget } from "@package/de/keksuccino/fancymenu/util/rendering/ui/widget";
import { $Enum, $Iterable, $Record, $Runnable_, $Object } from "@package/java/lang";
import { $RenderableResource } from "@package/de/keksuccino/fancymenu/util/resource";
import { $NarratableEntry$NarrationPriority, $NarrationElementOutput, $NarratableEntry, $NarrationSupplier } from "@package/net/minecraft/client/gui/narration";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $ClientboundBossEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $DrawableColor } from "@package/de/keksuccino/fancymenu/util/rendering";
import { $EssentialEntryAtScreenPosAccess } from "@package/gg/essential/mixins/impl/client/gui";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard, $Objective } from "@package/net/minecraft/world/scores";
import { $Gui, $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as toasts from "@package/net/minecraft/client/gui/components/toasts";
export * as tabs from "@package/net/minecraft/client/gui/components/tabs";
export * as spectator from "@package/net/minecraft/client/gui/components/spectator";
export * as debugchart from "@package/net/minecraft/client/gui/components/debugchart";
export * as events from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components" {
    export class $Tooltip implements $NarrationSupplier {
        static create(message: $Component_): $Tooltip;
        static create(message: $Component_, narration: $Component_ | null): $Tooltip;
        toCharSequence(minecraft: $Minecraft): $List<$FormattedCharSequence>;
        static splitTooltip(minecraft: $Minecraft, message: $Component_): $List<$FormattedCharSequence>;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        static MAX_WIDTH: number;
        narration: $Component;
        cachedTooltip: $List<$FormattedCharSequence>;
        message: $Component;
        constructor(message: $Component_, narration: $Component_ | null);
    }
    export class $CommonButtons {
        static language(width: number, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton;
        static accessibility(width: number, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton;
        constructor();
    }
    export class $WidgetTooltipHolder {
        get(): $Tooltip;
        set(tooltip: $Tooltip | null): void;
        setDelay(delay: $Duration_): void;
        updateNarration(output: $NarrationElementOutput): void;
        createTooltipPositioner(screenRectangle: $ScreenRectangle_, hovering: boolean, focused: boolean): $ClientTooltipPositioner;
        refreshTooltipForNextRenderPass(hovering: boolean, focused: boolean, screenRectangle: $ScreenRectangle_): void;
        constructor();
        set delay(value: $Duration_);
    }
    export class $PopupScreen$ButtonOption extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PopupScreen$ButtonOption}.
     */
    export type $PopupScreen$ButtonOption_ = { message?: $Component_, action?: $Consumer_<$PopupScreen>,  } | [message?: $Component_, action?: $Consumer_<$PopupScreen>, ];
    export class $MultilineTextField$StringView extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MultilineTextField$StringView}.
     */
    export type $MultilineTextField$StringView_ = { beginIndex?: number, endIndex?: number,  } | [beginIndex?: number, endIndex?: number, ];
    export class $TabButton extends $AbstractWidget {
        tab(): $Tab;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isSelected(): boolean;
        renderMenuBackground(guiGraphics: $GuiGraphics, minX: number, minY: number, maxX: number, maxY: number): void;
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(tabManager: $TabManager, tab: $Tab, width: number, height: number);
        get selected(): boolean;
    }
    export class $SubtitleOverlay$Subtitle {
    }
    export class $SplashRenderer implements $IMixinSplashRenderer {
        render(guiGraphics: $GuiGraphics, screenWidth: number, font: $Font, color: number): void;
        handler$dif000$polytone$aa(guiGraphics: $GuiGraphics, screenWidth: number, font: $Font, color: number, ci: $CallbackInfo, colorV: $LocalIntRef): void;
        getSplashFancyMenu(): string;
        static CHRISTMAS: $SplashRenderer;
        static HALLOWEEN: $SplashRenderer;
        static NEW_YEAR: $SplashRenderer;
        constructor(splash: string);
        get splashFancyMenu(): string;
    }
    export class $AbstractScrollWidget extends $AbstractWidget implements $Renderable, $GuiEventListener {
        renderDecorations(guiGraphics: $GuiGraphics): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        scrollbarVisible(): boolean;
        scrollRate(): number;
        scrollAmount(): number;
        renderBackground(guiGraphics: $GuiGraphics): void;
        renderBorder(guiGraphics: $GuiGraphics, x: number, y: number, width: number, height: number): void;
        setScrollAmount(scrollAmount: number): void;
        renderContents(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getInnerHeight(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        scrollbarWidth(): number;
        withinContentAreaPoint(x: number, arg1: number): boolean;
        withinContentAreaTopBottom(top: number, bottom: number): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        totalInnerPadding(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxScrollAmount(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        innerPadding(): number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get innerHeight(): number;
        get maxScrollAmount(): number;
    }
    export class $Button extends $AbstractButton implements $IMixinButton {
        static builder(message: $Component_, onPress: $Button$OnPress_): $Button$Builder;
        setPressActionFancyMenu(arg0: $Button$OnPress_): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: $Button$Builder);
        constructor(x: number, y: number, width: number, height: number, message: $Component_, onPress: $Button$OnPress_, createNarration: $Button$CreateNarration_);
        set pressActionFancyMenu(value: $Button$OnPress_);
    }
    export class $CycleButton$Builder<T> {
        withInitialValue(initialValue: T): $CycleButton$Builder<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(message: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_): $CycleButton<T>;
        withTooltip(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>): $CycleButton$Builder<T>;
        withValues(...values: T[]): $CycleButton$Builder<T>;
        withValues(defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        withValues(values: $CycleButton$ValueListSupplier<T>): $CycleButton$Builder<T>;
        withValues(values: $Collection_<T>): $CycleButton$Builder<T>;
        withValues(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        displayOnlyValue(): $CycleButton$Builder<T>;
        withCustomNarration(narrationProvider: $Function_<$CycleButton<T>, $MutableComponent>): $CycleButton$Builder<T>;
        constructor(valueStringifier: $Function_<T, $Component>);
    }
    export class $Whence extends $Enum<$Whence> {
        static values(): $Whence[];
        static valueOf(arg0: string): $Whence;
        static ABSOLUTE: $Whence;
        static RELATIVE: $Whence;
        static END: $Whence;
    }
    /**
     * Values that may be interpreted as {@link $Whence}.
     */
    export type $Whence_ = "absolute" | "relative" | "end";
    export class $Button$Builder {
        size(x: number, y: number): $Button$Builder;
        bounds(x: number, y: number, width: number, height: number): $Button$Builder;
        pos(x: number, y: number): $Button$Builder;
        build(): $Button;
        build(arg0: $Function_<$Button$Builder, $Button>): $Button;
        width(width: number): $Button$Builder;
        tooltip(tooltip: $Tooltip | null): $Button$Builder;
        createNarration(createNarration: $Button$CreateNarration_): $Button$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_);
    }
    export class $MultiLineLabel {
        static create(font: $Font, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, maxWidth: number, maxRows: number, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, maxWidth: number, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, component: $Component_, maxWidth: number): $MultiLineLabel;
        static EMPTY: $MultiLineLabel;
    }
    export interface $MultiLineLabel {
        renderLeftAligned(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): void;
        getWidth(): number;
        getLineCount(): number;
        renderCentered(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): void;
        renderCentered(guiGraphics: $GuiGraphics, x: number, y: number): void;
        renderLeftAlignedNoShadow(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): number;
        get width(): number;
        get lineCount(): number;
    }
    export class $CommandSuggestions$SuggestionsList implements $IMixinSuggestionsList {
        cycle(change: number): void;
        select(change: number): void;
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseClicked(keyCode: number, scanCode: number, modifiers: number): boolean;
        getNarrationMessage(): $Component;
        mouseScrolled(delta: number): boolean;
        localvar$bfn000$chat_heads$chatheads$captureGuiGraphics(guiGraphics: $GuiGraphics, graphicsRef: $LocalRef<any>): $GuiGraphics;
        modify$bfn000$chat_heads$chatheads$enlargeBackground(x: number, playerRef: $LocalRef<any>): number;
        handler$bfn000$chat_heads$chatheads$fixOutOfBoundChatHeads(commandSuggestions: $CommandSuggestions, x: number, y: number, width: number, suggestions: $List_<any>, narrateFirstSuggestion: boolean, ci: $CallbackInfo): void;
        localvar$bfn000$chat_heads$chatheads$captureSuggestion(suggestion: $Suggestion, playerRef: $LocalRef<any>): $Suggestion;
        useSuggestion(): void;
        modify$bfn000$chat_heads$chatheads$renderChatHead(y: number, playerRef: $LocalRef<any>, graphicsRef: $LocalRef<any>): number;
        getOffsetFancyMenu(): number;
        getRectFancyMenu(): $Rect2i;
        getCurrentFancyMenu(): number;
        getLastMouseFancyMenu(): $Vec2;
        setLastMouseFancyMenu(arg0: $Vec2): void;
        tabCycles: boolean;
        this$0: $CommandSuggestions;
        get narrationMessage(): $Component;
        get offsetFancyMenu(): number;
        get rectFancyMenu(): $Rect2i;
        get currentFancyMenu(): number;
    }
    export class $LogoRenderer {
        renderLogo(guiGraphics: $GuiGraphics, screenWidth: number, transparency: number): void;
        renderLogo(guiGraphics: $GuiGraphics, screenWidth: number, transparency: number, height: number): void;
        static EASTER_EGG_LOGO: $ResourceLocation;
        static DEFAULT_HEIGHT_OFFSET: number;
        static LOGO_WIDTH: number;
        static LOGO_TEXTURE_WIDTH: number;
        static LOGO_HEIGHT: number;
        static MINECRAFT_LOGO: $ResourceLocation;
        static LOGO_TEXTURE_HEIGHT: number;
        static MINECRAFT_EDITION: $ResourceLocation;
        constructor(keepLogoThroughFade: boolean);
    }
    export class $Checkbox$Builder {
        onValueChange(onValueChange: $Checkbox$OnValueChange_): $Checkbox$Builder;
        pos(x: number, y: number): $Checkbox$Builder;
        build(): $Checkbox;
        maxWidth(maxWidth: number): $Checkbox$Builder;
        selected(option: $OptionInstance<boolean>): $Checkbox$Builder;
        selected(selected: boolean): $Checkbox$Builder;
        tooltip(tooltip: $Tooltip): $Checkbox$Builder;
        constructor(message: $Component_, font: $Font);
    }
    export class $PlayerTabOverlay$ScoreDisplayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerTabOverlay$ScoreDisplayEntry}.
     */
    export type $PlayerTabOverlay$ScoreDisplayEntry_ = { scoreWidth?: number, name?: $Component_, score?: number, formattedScore?: $Component_,  } | [scoreWidth?: number, name?: $Component_, score?: number, formattedScore?: $Component_, ];
    export class $ImageWidget$Texture extends $ImageWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $SpriteIconButton extends $Button {
        static builder(message: $Component_, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton$Builder;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(width: number, height: number, message: $Component_, spriteWidth: number, spriteHeight: number, sprite: $ResourceLocation_, onPress: $Button$OnPress_, createNarration: $Button$CreateNarration_ | null);
    }
    export class $CycleButton$OnValueChange<T> {
    }
    export interface $CycleButton$OnValueChange<T> {
        onValueChange(cycleButton: $CycleButton<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CycleButton$OnValueChange}.
     */
    export type $CycleButton$OnValueChange_<T> = ((arg0: $CycleButton<T>, arg1: T) => void);
    export class $AbstractSelectionList<E extends $AbstractSelectionList$Entry<E>> extends $AbstractContainerWidget implements $AbstractSelectionListAccessor, $EntryListWidgetAccessor {
        ensureVisible(entry: E): void;
        remove(index: number): E;
        addEntry(entry: E): number;
        getEntry(index: number): E;
        nextEntry(direction: $ScreenDirection_): E;
        nextEntry(direction: $ScreenDirection_, predicate: $Predicate_<E>): E;
        nextEntry(direction: $ScreenDirection_, predicate: $Predicate_<E>, selected: E | null): E;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getItemCount(): number;
        removeEntry(entry: E): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxPosition(): number;
        replaceEntries(entries: $Collection_<E>): void;
        removeEntryFromTop(entry: E): boolean;
        clickedHeader(x: number, y: number): boolean;
        renderListItems(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Gets the focused GUI element.
         */
        getFirstElement(): E;
        bindEntryToSelf(entry: $AbstractSelectionList$Entry<E>): void;
        addEntryToTop(entry: E): void;
        isValidMouseClick(index: number): boolean;
        isSelectedItem(index: number): boolean;
        renderDecorations(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        getEntryAtPosition(mouseX: number, arg1: number): E;
        clampScrollAmount(): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        scrollbarVisible(): boolean;
        getRowBottom(index: number): number;
        renderHeader(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        setRenderHeader(renderHeader: boolean, headerHeight: number): void;
        /**
         * Gets the focused GUI element.
         */
        getSelected(): E;
        enableScissor(guiGraphics: $GuiGraphics): void;
        setSelected(entry: E | null): void;
        /**
         * Gets the focused GUI element.
         */
        getFocused(): E;
        updateSizeAndPosition(width: number, height: number, y: number): void;
        getRowTop(index: number): number;
        modify$iaa000$essential$modifyPredicate(predicate: $Predicate_<any>): $Predicate<any>;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowRight(): number;
        getScrollAmount(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowWidth(): number;
        renderListBackground(guiGraphics: $GuiGraphics): void;
        updateScrollingState(mouseX: number, arg1: number, mouseY: number): void;
        narrateListElementPosition(narrationElementOutput: $NarrationElementOutput, entry: E): void;
        setClampedScrollAmount(scroll: number): void;
        renderListSeparators(guiGraphics: $GuiGraphics): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getScrollbarPosition(): number;
        renderItem(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number, index: number, left: number, top: number, width: number, height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxScroll(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowLeft(): number;
        updateSize(width: number, layout: $HeaderAndFooterLayout): void;
        centerScrollOn(entry: E): void;
        setScrollAmount(scroll: number): void;
        clearEntries(): void;
        renderSelection(guiGraphics: $GuiGraphics, top: number, width: number, height: number, outerColor: number, innerColor: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getDefaultScrollbarPosition(): number;
        /**
         * Gets the focused GUI element.
         */
        getHovered(): E;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        essential$getHeaderHeight(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        essential$getItemHeight(): number;
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
        hovered: E;
        height: number;
        constructor(minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        get itemCount(): number;
        get maxPosition(): number;
        get firstElement(): E;
        get focused(): E;
        get rowRight(): number;
        get rowWidth(): number;
        set clampedScrollAmount(value: number);
        get scrollbarPosition(): number;
        get maxScroll(): number;
        get rowLeft(): number;
        get defaultScrollbarPosition(): number;
    }
    export class $SpriteIconButton$TextAndIcon extends $SpriteIconButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: number, arg4: number, arg5: $ResourceLocation_, arg6: $Button$OnPress_, arg7: $Button$CreateNarration_ | null);
    }
    export class $AbstractContainerWidget extends $AbstractWidget implements $ContainerEventHandler {
        getFocused(): $GuiEventListener;
        isDragging(): boolean;
        setFocused(arg0: $GuiEventListener | null): void;
        setDragging(arg0: boolean): void;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $LerpingBossEvent extends $BossEvent {
        darkenScreen: boolean;
        playBossMusic: boolean;
        color: $BossEvent$BossBarColor;
        overlay: $BossEvent$BossBarOverlay;
        name: $Component;
        progress: number;
        createWorldFog: boolean;
        targetPercent: number;
        setTime: number;
        constructor(id: $UUID_, name: $Component_, progress: number, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_, darkenScreen: boolean, bossMusic: boolean, worldFog: boolean);
    }
    export class $MultilineTextField {
        insertText(text: string): void;
        value(): string;
        setValue(text: string): void;
        cursor(): number;
        setCharacterLimit(length: number): void;
        setValueListener(valueListener: $Consumer_<string>): void;
        getSelected(): $MultilineTextField$StringView;
        keyPressed(keyCode: number): boolean;
        getLineCount(): number;
        deleteText(length: number): void;
        seekCursor(whence: $Whence_, position: number): void;
        getSelectedText(): string;
        seekCursorToPoint(x: number, arg1: number): void;
        hasCharacterLimit(): boolean;
        getLineView(offset: number): $MultilineTextField$StringView;
        setCursorListener(cursorListener: $Runnable_): void;
        setSelecting(selecting: boolean): void;
        getLineAtCursor(): number;
        getPreviousWord(): $MultilineTextField$StringView;
        hasSelection(): boolean;
        iterateLines(): $Iterable<$MultilineTextField$StringView>;
        characterLimit(): number;
        getNextWord(): $MultilineTextField$StringView;
        seekCursorLine(length: number): void;
        static NO_CHARACTER_LIMIT: number;
        constructor(font: $Font, width: number);
        set valueListener(value: $Consumer_<string>);
        get selected(): $MultilineTextField$StringView;
        get lineCount(): number;
        get selectedText(): string;
        set cursorListener(value: $Runnable_);
        set selecting(value: boolean);
        get lineAtCursor(): number;
        get previousWord(): $MultilineTextField$StringView;
        get nextWord(): $MultilineTextField$StringView;
    }
    export class $ChatComponent$State {
        messages: $List<$GuiMessage>;
        history: $List<string>;
        delayedMessageDeletions: $List<$ChatComponent$DelayedMessageDeletion>;
        constructor(messages: $List_<$GuiMessage_>, history: $List_<string>, delayedMessageDeletions: $List_<$ChatComponent$DelayedMessageDeletion_>);
    }
    export class $ContainerObjectSelectionList$Entry<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $ContainerEventHandler {
        focusPathAtIndex(event: $FocusNavigationEvent_, index: number): $ComponentPath;
        /**
         * Gets the focused GUI element.
         */
        getFocused(): $GuiEventListener;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isDragging(): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(listener: $GuiEventListener | null): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        narratables(): $List<$NarratableEntry>;
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * Sets if the GUI element is dragging or not.
         */
        setDragging(dragging: boolean): void;
        /**
         * Returns the first event listener that intersects with the mouse coordinates.
         */
        getChildAt(mouseX: number, arg1: number): ($GuiEventListener) | undefined;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
    }
    export class $Checkbox extends $AbstractButton {
        static builder(message: $Component_, font: $Font): $Checkbox$Builder;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        selected(): boolean;
        static getBoxSize(font: $Font): number;
        static getDefaultWidth(message: $Component_, font: $Font): number;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, maxWidth: number, message: $Component_, font: $Font, selected: boolean, onValueChange: $Checkbox$OnValueChange_);
    }
    export class $LoadingDotsWidget extends $AbstractWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(font: $Font, message: $Component_);
    }
    export class $SpriteIconButton$Builder {
        size(width: number, height: number): $SpriteIconButton$Builder;
        build(): $SpriteIconButton;
        width(width: number): $SpriteIconButton$Builder;
        sprite(sprite: $ResourceLocation_, spriteWidth: number, spriteHeight: number): $SpriteIconButton$Builder;
        narration(narration: $Button$CreateNarration_): $SpriteIconButton$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_, iconOnly: boolean);
    }
    export class $PlainTextButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, onPress: $Button$OnPress_, font: $Font);
    }
    export class $ImageWidget$Sprite extends $ImageWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $WidgetSprites extends $Record {
        get(enabled: boolean, focused: boolean): $ResourceLocation;
        enabled(): $ResourceLocation;
        disabled(): $ResourceLocation;
        enabledFocused(): $ResourceLocation;
        disabledFocused(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_, enabledFocused: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $WidgetSprites}.
     */
    export type $WidgetSprites_ = { disabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, enabled?: $ResourceLocation_, enabledFocused?: $ResourceLocation_,  } | [disabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, enabled?: $ResourceLocation_, enabledFocused?: $ResourceLocation_, ];
    export class $ImageButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        sprites: $WidgetSprites;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_, message: $Component_);
        constructor(x: number, y: number, width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_, message: $Component_);
        constructor(x: number, y: number, width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_);
    }
    export class $ComponentRenderUtils {
        static wrapComponents(component: $FormattedText, maxWidth: number, font: $Font): $List<$FormattedCharSequence>;
        constructor();
    }
    export class $PlayerTabOverlay$HealthState {
    }
    export class $StateSwitchingButton extends $AbstractWidget {
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isStateTriggered(): boolean;
        setStateTriggered(triggered: boolean): void;
        initTextureValues(sprites: $WidgetSprites_): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        sprites: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, initialState: boolean);
    }
    export class $MultiLineLabel$TextAndWidth extends $Record {
        text(): $FormattedCharSequence;
        width(): number;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $MultiLineLabel$TextAndWidth}.
     */
    export type $MultiLineLabel$TextAndWidth_ = { text?: $FormattedCharSequence_, width?: number,  } | [text?: $FormattedCharSequence_, width?: number, ];
    export class $PlayerSkinWidget$Model extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkinWidget$Model}.
     */
    export type $PlayerSkinWidget$Model_ = { slimModel?: $PlayerModel<never>, wideModel?: $PlayerModel<never>,  } | [slimModel?: $PlayerModel<never>, wideModel?: $PlayerModel<never>, ];
    export class $SubtitleOverlay$SoundPlayedAt extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SubtitleOverlay$SoundPlayedAt}.
     */
    export type $SubtitleOverlay$SoundPlayedAt_ = { location?: $Vec3_, time?: number,  } | [location?: $Vec3_, time?: number, ];
    export class $Renderable {
    }
    export interface $Renderable {
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Renderable}.
     */
    export type $Renderable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry, $IAbstractWidgetExtension, $IMixinAbstractWidget, $IMixinAbstractWidget$1, $UniqueWidget, $CustomizableWidget {
        getMessage(): $Component;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isActive(): boolean;
        setSize(width: number, height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getY(): number;
        renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, width: number, color: number): void;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, centerX: number, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRight(): number;
        setCustomBackgroundResetBehaviorFancyMenu(arg0: $CustomizableWidget$CustomBackgroundResetBehavior_): void;
        addResetCustomizationsListenerFancyMenu(arg0: $Runnable_): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setNineSliceCustomBackground_FancyMenu(focused: boolean): void;
        addHoverOrFocusStateListenerFancyMenu(consumer: $Consumer_<any>): void;
        getHoverOrFocusStateListenersFancyMenu(): $List<any>;
        resetWidgetSizeAndPositionFancyMenu(): void;
        setCustomBackgroundInactiveFancyMenu(arg0: $RenderableResource): void;
        getResetCustomizationsListenersFancyMenu(): $List<any>;
        getCustomBackgroundInactiveFancyMenu(): $RenderableResource;
        getCustomBackgroundResetBehaviorFancyMenu(): $CustomizableWidget$CustomBackgroundResetBehavior;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getWidth(): number;
        setMessage(message: $Component_): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getHeight(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getX(): number;
        getHoverSoundFancyMenu(): $IAudio;
        setCustomYFancyMenu(arg0: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isLabelShadowFancyMenu(): boolean;
        setCustomHeightFancyMenu(arg0: number): void;
        setHitboxRotationFancyMenu(arg0: number, arg1: number, arg2: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setLabelShadowFancyMenu(focused: boolean): void;
        getUnhoverSoundFancyMenu(): $IAudio;
        setCustomWidthFancyMenu(arg0: number): void;
        getCustomLabelFancyMenu(): $Component;
        setLabelScaleFancyMenu(alpha: number): void;
        getHoverLabelFancyMenu(): $Component;
        getCustomHeightFancyMenu(): number;
        getLabelScaleFancyMenu(): number;
        getCustomXFancyMenu(): number;
        getCustomYFancyMenu(): number;
        setCustomXFancyMenu(arg0: number): void;
        setLabelBaseColorFancyMenu(arg0: $DrawableColor): void;
        getCustomWidthFancyMenu(): number;
        getLabelBaseColorFancyMenu(): $DrawableColor;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        clicked(mouseX: number, arg1: number): boolean;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        createNarrationMessage(): $MutableComponent;
        defaultButtonNarrationText(narrationElementOutput: $NarrationElementOutput): void;
        resolveLabelScaleFancyMenu(): number;
        /**
         * Sets the focus state of the GUI element.
         */
        setLastHoverStateFancyMenu(focused: boolean): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        getLastHoverStateFancyMenu(): boolean;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        getLastFocusStateFancyMenu(): boolean;
        setHoverSoundFancyMenu(arg0: $IAudio): void;
        setUnhoverSoundFancyMenu(arg0: $IAudio): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setLastFocusStateFancyMenu(focused: boolean): void;
        setCustomLabelFancyMenu(message: $Component_): void;
        setHoverLabelFancyMenu(message: $Component_): void;
        setTooltip(tooltip: $Tooltip | null): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isFocused(): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        setX(height: number): void;
        setY(height: number): void;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        isMouseOver(mouseX: number, arg1: number): boolean;
        resetWidgetCustomizationsFancyMenu(): void;
        setWidgetIdentifierFancyMenu(arg0: string): $AbstractWidget;
        getHitboxRotationDegreesFancyMenu(): number;
        getWidgetIdentifierFancyMenu(): string;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        setTooltipDelay(tooltipDelay: $Duration_): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        getTooltip(): $Tooltip;
        getHoverStateListenersFancyMenu(): $List<any>;
        setCustomBackgroundHoverFancyMenu(arg0: $RenderableResource): void;
        getFocusStateListenersFancyMenu(): $List<any>;
        addHoverStateListenerFancyMenu(consumer: $Consumer_<any>): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        getLastHoverOrFocusStateFancyMenu(): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setLastHoverOrFocusStateFancyMenu(focused: boolean): void;
        addFocusStateListenerFancyMenu(consumer: $Consumer_<any>): void;
        getCustomBackgroundNormalFancyMenu(): $RenderableResource;
        getCustomBackgroundHoverFancyMenu(): $RenderableResource;
        static wrapDefaultNarrationMessage(message: $Component_): $MutableComponent;
        setCustomClickSoundFancyMenu(arg0: $IAudio): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setUnderlineLabelOnHoverFancyMenu(focused: boolean): void;
        setCustomBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        setLabelHoverColorFancyMenu(arg0: $DrawableColor): void;
        setNineSliceBorderBottom_FancyMenu(height: number): void;
        setNineSliceBorderLeft_FancyMenu(height: number): void;
        getCustomClickSoundFancyMenu(): $IAudio;
        setNineSliceBorderX_FancyMenu(height: number): void;
        getLabelHoverColorFancyMenu(): $DrawableColor;
        setNineSliceBorderY_FancyMenu(height: number): void;
        setNineSliceBorderTop_FancyMenu(height: number): void;
        setNineSliceBorderRight_FancyMenu(height: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isUnderlineLabelOnHoverFancyMenu(): boolean;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHiddenFancyMenu(): boolean;
        setAlpha(alpha: number): void;
        setHeight(height: number): void;
        setWidth(height: number): void;
        setRectangle(width: number, height: number, x: number, y: number): void;
        setTabOrderGroup(height: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHoveredOrFocused(): boolean;
        playDownSound(handler: $SoundManager): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setHiddenFancyMenu(focused: boolean): void;
        isValidClickButton(button: number): boolean;
        clearFGColor(): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHovered(): boolean;
        /**
         * @deprecated
         */
        onClick(mouseX: number, arg1: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isNineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderX_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderY_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        onDrag(mouseX: number, arg1: number, mouseY: number, arg3: number): void;
        onRelease(mouseX: number, arg1: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getFGColor(): number;
        setFGColor(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBottom(): number;
        getHitboxVerticalTiltDegreesFancyMenu(): number;
        getHitboxHorizontalTiltDegreesFancyMenu(): number;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        setPosition(width: number, height: number): void;
        /**
         * Handles the logic for when this widget is clicked. Vanilla calls this after `AbstractWidget#mouseClicked(double, double, int)` validates that:
         * 
         * - this widget is active and visible
         * - the button can be handled by this widget
         * - the mouse is over this widget
         */
        onClick(mouseX: number, mouseY: number, button: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        tickHoverOrFocusStateListenersFancyMenu(focused: boolean): void;
        stopHoverSoundFancyMenu(): void;
        stopUnhoverSoundFancyMenu(): void;
        stopCustomClickSoundFancyMenu(): void;
        renderCustomBackgroundFancyMenu(arg0: $AbstractWidget, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getOriginalMessageFancyMenu(): $Component;
        /**
         * Sets the focus state of the GUI element.
         */
        tickFocusStateListenersFancyMenu(focused: boolean): void;
        /**
         * Sets the focus state of the GUI element.
         */
        tickHoverStateListenersFancyMenu(focused: boolean): void;
        setMessageFieldFancyMenu(message: $Component_): void;
        getAlphaFancyMenu(): number;
        setHeightKonkrete(height: number): void;
        setHeightFancyMenu(height: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get right(): number;
        set nineSliceCustomBackground_FancyMenu(value: boolean);
        get hoverOrFocusStateListenersFancyMenu(): $List<any>;
        get resetCustomizationsListenersFancyMenu(): $List<any>;
        get hitboxRotationDegreesFancyMenu(): number;
        set tooltipDelay(value: $Duration_);
        get hoverStateListenersFancyMenu(): $List<any>;
        get focusStateListenersFancyMenu(): $List<any>;
        set nineSliceBorderBottom_FancyMenu(value: number);
        set nineSliceBorderLeft_FancyMenu(value: number);
        set nineSliceBorderX_FancyMenu(value: number);
        set nineSliceBorderY_FancyMenu(value: number);
        set nineSliceBorderTop_FancyMenu(value: number);
        set nineSliceBorderRight_FancyMenu(value: number);
        get hoveredOrFocused(): boolean;
        get hovered(): boolean;
        get nineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        get nineSliceCustomBackgroundBorderX_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderY_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        get bottom(): number;
        get hitboxVerticalTiltDegreesFancyMenu(): number;
        get hitboxHorizontalTiltDegreesFancyMenu(): number;
        get currentFocusPath(): $ComponentPath;
        get originalMessageFancyMenu(): $Component;
        set messageFieldFancyMenu(value: $Component_);
        get alphaFancyMenu(): number;
        set heightKonkrete(value: number);
        set heightFancyMenu(value: number);
    }
    export class $Button$CreateNarration {
    }
    export interface $Button$CreateNarration {
        createNarrationMessage(messageSupplier: $Supplier_<$MutableComponent>): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $Button$CreateNarration}.
     */
    export type $Button$CreateNarration_ = ((arg0: $Supplier<$MutableComponent>) => $MutableComponent_);
    export class $MultiLineTextWidget$CacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MultiLineTextWidget$CacheKey}.
     */
    export type $MultiLineTextWidget$CacheKey_ = { message?: $Component_, maxRows?: $OptionalInt, maxWidth?: number,  } | [message?: $Component_, maxRows?: $OptionalInt, maxWidth?: number, ];
    export class $DebugScreenOverlay implements $BuggerScreenRenderLinesInvoker {
        reset(): void;
        toggleFpsCharts(): void;
        toggleOverlay(): void;
        render(guiGraphics: $GuiGraphics): void;
        showProfilerChart(): boolean;
        logFrameDuration(frameDuration: number): void;
        showDebugScreen(): boolean;
        getTickTimeLogger(): $LocalSampleLogger;
        getPingLogger(): $LocalSampleLogger;
        logRemoteSample(sample: number[], sampleType: $RemoteDebugSampleType_): void;
        showNetworkCharts(): boolean;
        toggleProfilerChart(): void;
        toggleNetworkCharts(): void;
        clearChunkCache(): void;
        drawSystemInformation(guiGraphics: $GuiGraphics): void;
        collectGameInformationText(): $List<string>;
        getSystemInformation(): $List<string>;
        drawGameInformation(guiGraphics: $GuiGraphics): void;
        redirect$zei000$sodium_extra$sodiumExtra$redirectDrawLeftText(arg0: $DebugScreenOverlay, arg1: $GuiGraphics, arg2: $List_<any>, arg3: boolean): void;
        redirect$zei000$sodium_extra$sodiumExtra$redirectDrawRightText(arg0: $DebugScreenOverlay, arg1: $GuiGraphics, arg2: $List_<any>, arg3: boolean): void;
        handler$zei000$sodium_extra$preRender(arg0: $GuiGraphics, arg1: $CallbackInfo): void;
        handler$dpm000$entityculling$getLeftText(callback: $CallbackInfoReturnable<any>): $List<any>;
        localvar$bch000$veil$modifyGameInformation(arg0: $List_<any>): $List<any>;
        collectSystemInformationText(): $List<string>;
        localvar$ggn000$sable$addDebugInfo(arg0: $List_<any>): $List<any>;
        getGameInformation(): $List<string>;
        showFpsCharts(): boolean;
        getBandwidthLogger(): $LocalSampleLogger;
        handler$edf000$fabric_renderer_api_v1$getLeftText(arg0: $CallbackInfoReturnable<any>): void;
        drawLines(guiGraphics: $GuiGraphics, lines: $List_<string>, leftSide: boolean): void;
        constructor(minecraft: $Minecraft);
        get tickTimeLogger(): $LocalSampleLogger;
        get pingLogger(): $LocalSampleLogger;
        get systemInformation(): $List<string>;
        get gameInformation(): $List<string>;
        get bandwidthLogger(): $LocalSampleLogger;
    }
    export class $PopupScreen extends $Screen {
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
        constructor(backgroundScreen: $Screen, width: number, image: $ResourceLocation_ | null, title: $Component_, message: $Component_, buttons: $List_<$PopupScreen$ButtonOption_>, onClose: $Runnable_ | null);
    }
    export class $DebugScreenOverlay$AllocationRateCalculator {
    }
    export class $EditBox extends $AbstractWidget implements $Renderable, $AccessEditBox, $IMixinEditBox, $IMixinEditBox$1 {
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        insertText(textToWrite: string): void;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getValue(): string;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setValue(textToWrite: string): void;
        setFormatter(textFormatter: $BiFunction_<string, number, $FormattedCharSequence>): void;
        setFilter(validator: $Predicate_<string>): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isEditable(): boolean;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        canConsumeInput(): boolean;
        /**
         * Returns the current position of the cursor.
         */
        getCursorPosition(): number;
        setVisible(select: boolean): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isVisible(): boolean;
        setEditable(select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColor(num: number): void;
        setResponder(responder: $Consumer_<string>): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setMaxLength(num: number): void;
        setCanLoseFocus(select: boolean): void;
        setBordered(select: boolean): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isBordered(): boolean;
        moveCursor(delta: number, select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteText(num: number): void;
        getScreenX(delta: number): number;
        moveCursorToStart(select: boolean): void;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setSuggestion(textToWrite: string | null): void;
        /**
         * Returns the current position of the cursor.
         */
        getInnerWidth(): number;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getHighlighted(): string;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteWords(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteChars(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteCharsToPos(num: number): void;
        setTextShadow(select: boolean): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getTextShadow(): boolean;
        setHint(hint: $Component_): void;
        getWordPosition(delta: number): number;
        moveCursorTo(delta: number, select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setCursorPosition(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setHighlightPos(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColorUneditable(num: number): void;
        moveCursorToEnd(select: boolean): void;
        /**
         * Returns the current position of the cursor.
         */
        getTextColorUneditableFancyMenu(): number;
        invokeRenderHighlightFancyMenu(guiGraphics: $GuiGraphics, minX: number, minY: number, maxX: number, maxY: number): void;
        getHintFancyMenu(): $Component;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getIsEditableKonkrete(): boolean;
        /**
         * Returns the current position of the cursor.
         */
        getHightlightPosKonkrete(): number;
        getFormatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        /**
         * Returns the current position of the cursor.
         */
        getTextColorFancyMenu(): number;
        /**
         * Returns the current position of the cursor.
         */
        getMaxLengthFancyMenu(): number;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        onValueChangeKonkrete(textToWrite: string): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getIsEditableFancyMenu(): boolean;
        getFocusedTimeFancyMenu(): number;
        /**
         * Returns the current position of the cursor.
         */
        getHighlightPosFancyMenu(): number;
        searchables$getFilter(): $Predicate<string>;
        /**
         * Returns the current position of the cursor.
         */
        getDisplayPosFancyMenu(): number;
        searchables$getResponder(): $Consumer<string>;
        /**
         * Returns the current position of the cursor.
         */
        getMaxLengthKonkrete(): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setDisplayPosFancyMenu(num: number): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getBorderedFancyMenu(): boolean;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        invokeDeleteTextFancyMenu(num: number): void;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getSuggestionFancyMenu(): string;
        static SPRITES: $WidgetSprites;
        canLoseFocus: boolean;
        visible: boolean;
        static BACKWARDS: number;
        tooltip: $WidgetTooltipHolder;
        responder: $Consumer<string>;
        active: boolean;
        static DEFAULT_TEXT_COLOR: number;
        textColor: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static FORWARDS: number;
        height: number;
        constructor(font: $Font, width: number, height: number, message: $Component_);
        constructor(font: $Font, x: number, y: number, width: number, height: number, editBox: $EditBox | null, message: $Component_);
        constructor(font: $Font, x: number, y: number, width: number, height: number, message: $Component_);
        set formatter(value: $BiFunction_<string, number, $FormattedCharSequence>);
        set filter(value: $Predicate_<string>);
        set maxLength(value: number);
        set suggestion(value: string | null);
        get innerWidth(): number;
        get highlighted(): string;
        set hint(value: $Component_);
        set highlightPos(value: number);
        set textColorUneditable(value: number);
        get textColorUneditableFancyMenu(): number;
        get hintFancyMenu(): $Component;
        get isEditableKonkrete(): boolean;
        get hightlightPosKonkrete(): number;
        get formatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        get textColorFancyMenu(): number;
        get maxLengthFancyMenu(): number;
        get isEditableFancyMenu(): boolean;
        get focusedTimeFancyMenu(): number;
        get highlightPosFancyMenu(): number;
        get maxLengthKonkrete(): number;
        get borderedFancyMenu(): boolean;
        get suggestionFancyMenu(): string;
    }
    export class $StringWidget extends $AbstractStringWidget {
        alignCenter(): $StringWidget;
        alignRight(): $StringWidget;
        alignLeft(): $StringWidget;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        constructor(width: number, height: number, message: $Component_, font: $Font);
        constructor(message: $Component_, font: $Font);
    }
    export class $SpriteIconButton$CenteredIcon extends $SpriteIconButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: number, arg4: number, arg5: $ResourceLocation_, arg6: $Button$OnPress_, arg7: $Button$CreateNarration_ | null);
    }
    export class $Checkbox$OnValueChange {
        static NOP: $Checkbox$OnValueChange;
    }
    export interface $Checkbox$OnValueChange {
        onValueChange(checkbox: $Checkbox, value: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $Checkbox$OnValueChange}.
     */
    export type $Checkbox$OnValueChange_ = ((arg0: $Checkbox, arg1: boolean) => void);
    export class $FocusableTextWidget extends $MultiLineTextWidget {
        containWithin(width: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(maxWidth: number, message: $Component_, font: $Font, alwaysShowBorder: boolean, padding: number);
        constructor(maxWidth: number, message: $Component_, font: $Font, padding: number);
        constructor(maxWidth: number, message: $Component_, font: $Font);
    }
    export class $CycleButton<T> extends $AbstractButton implements $UniqueLabeledSwitchCycleButton {
        getValue(): T;
        static builder<T>(valueStringifier: $Function_<T, $Component>): $CycleButton$Builder<T>;
        setValue(value: T): void;
        createDefaultNarrationMessage(): $MutableComponent;
        static onOffBuilder(): $CycleButton$Builder<boolean>;
        static onOffBuilder(initialValue: boolean): $CycleButton$Builder<boolean>;
        static booleanBuilder(componentOn: $Component_, componentOff: $Component_): $CycleButton$Builder<boolean>;
        setLabeledSwitchComponentLabel_FancyMenu(message: $Component_): void;
        getLabeledSwitchComponentLabel_FancyMenu(): $Component;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        onValueChange: $CycleButton$OnValueChange<T>;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_ALT_LIST_SELECTOR: $BooleanSupplier;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, name: $Component_, index: number, value: T, values: $CycleButton$ValueListSupplier<T>, valueStringifier: $Function_<T, $Component>, narrationProvider: $Function_<$CycleButton<T>, $MutableComponent>, onValueChange: $CycleButton$OnValueChange_<T>, tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, displayOnlyValue: boolean);
    }
    export class $FittingMultiLineTextWidget extends $AbstractScrollWidget {
        setColor(color: number): $FittingMultiLineTextWidget;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        showingScrollBar(): boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $Button$OnPress {
    }
    export interface $Button$OnPress {
        onPress(button: $Button): void;
    }
    /**
     * Values that may be interpreted as {@link $Button$OnPress}.
     */
    export type $Button$OnPress_ = ((arg0: $Button) => void);
    export class $AbstractOptionSliderButton extends $AbstractSliderButton {
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
        constructor(options: $Options, x: number, y: number, width: number, height: number, value: number);
    }
    export class $ImageWidget extends $AbstractWidget {
        static texture(width: number, height: number, texture: $ResourceLocation_, textureWidth: number, textureHeight: number): $ImageWidget;
        static sprite(width: number, height: number, sprite: $ResourceLocation_): $ImageWidget;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(x: number, y: number, width: number, height: number);
    }
    export class $ObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> implements $EssentialEntryAtScreenPosAccess<any> {
        essential$getEntryAtScreenPosition(x: number, y: number): $ObjectSelectionList$Entry<any>;
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
        hovered: $Object;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $BossHealthOverlay implements $IMixinBossHealthOverlay {
        reset(): void;
        update(packet: $ClientboundBossEventPacket): void;
        shouldDarkenScreen(): boolean;
        shouldCreateWorldFog(): boolean;
        render(guiGraphics: $GuiGraphics): void;
        shouldPlayMusic(): boolean;
        get_events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
        events: $Map<$UUID, $LerpingBossEvent>;
        constructor(minecraft: $Minecraft);
        get _events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
    }
    export class $CycleButton$ValueListSupplier<T> {
        static create<T>(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$ValueListSupplier<T>;
        static create<T>(values: $Collection_<T>): $CycleButton$ValueListSupplier<T>;
    }
    export interface $CycleButton$ValueListSupplier<T> {
        getDefaultList(): $List<T>;
        getSelectedList(): $List<T>;
        get defaultList(): $List<T>;
        get selectedList(): $List<T>;
    }
    export class $AbstractStringWidget extends $AbstractWidget {
        setColor(color: number): $AbstractStringWidget;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getColor(): number;
        getFont(): $Font;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        get font(): $Font;
    }
    export class $AbstractSelectionList$Entry<E extends $AbstractSelectionList$Entry<E>> implements $GuiEventListener {
        render(guiGraphics: $GuiGraphics, index: number, top: number, left: number, width: number, height: number, mouseX: number, mouseY: number, hovering: boolean, partialTick: number): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isFocused(): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * Checks if the given mouse coordinates are over the GUI element.
         * 
         * @return `true` if the mouse is over the GUI element, `false` otherwise.
         */
        isMouseOver(mouseX: number, arg1: number): boolean;
        renderBack(guiGraphics: $GuiGraphics, index: number, top: number, left: number, width: number, height: number, mouseX: number, mouseY: number, hovering: boolean, partialTick: number): void;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a mouse button is released within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        /**
         * Called when the mouse is moved within the GUI element.
         */
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        /**
         * Called when a mouse button is released within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get tabOrderGroup(): number;
    }
    export class $AbstractSelectionList$TrackedList extends $AbstractList<E> {
        reversed(): $SequencedCollection<E>;
    }
    export class $LockIconButton$Icon extends $Enum<$LockIconButton$Icon> {
    }
    /**
     * Values that may be interpreted as {@link $LockIconButton$Icon}.
     */
    export type $LockIconButton$Icon_ = "locked" | "locked_hover" | "locked_disabled" | "unlocked" | "unlocked_hover" | "unlocked_disabled";
    export class $ContainerObjectSelectionList<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
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
        hovered: E;
        height: number;
        constructor(minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
    }
    export class $ChatComponent$DelayedMessageDeletion extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatComponent$DelayedMessageDeletion}.
     */
    export type $ChatComponent$DelayedMessageDeletion_ = { deletableAfter?: number, signature?: $MessageSignature_,  } | [deletableAfter?: number, signature?: $MessageSignature_, ];
    export class $AbstractButton extends $AbstractWidget implements $IClickableWidget {
        onPress(): void;
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
        getXaero_tooltip(): $Supplier<any>;
        setXaero_tooltip(arg0: $Supplier_<any>): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
    }
    export class $PlayerSkinWidget extends $AbstractWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(width: number, height: number, model: $EntityModelSet, skin: $Supplier_<$PlayerSkin>);
    }
    export class $OptionsList$OptionEntry extends $OptionsList$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$OptionsList$Entry>;
    }
    export class $MultiLineTextWidget extends $AbstractStringWidget {
        setMaxWidth(color: number): $MultiLineTextWidget;
        setCentered(centered: boolean): $MultiLineTextWidget;
        setMaxRows(color: number): $MultiLineTextWidget;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(message: $Component_, font: $Font);
        constructor(x: number, y: number, message: $Component_, font: $Font);
        set maxWidth(value: number);
        set centered(value: boolean);
        set maxRows(value: number);
    }
    export class $ObjectSelectionList$Entry<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $NarrationSupplier {
        updateNarration(arg0: $NarrationElementOutput): void;
        getNarration(): $Component;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
        get narration(): $Component;
    }
    export class $CommandSuggestions implements $IMixinCommandSuggestions {
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        isVisible(): boolean;
        setAllowSuggestions(allowHiding: boolean): void;
        getUsageNarration(): $Component;
        getNarrationMessage(): $Component;
        setAllowHiding(allowHiding: boolean): void;
        updateCommandInfo(): void;
        mouseScrolled(delta: number): boolean;
        hide(): void;
        static calculateSuggestionSuffix(inputText: string, suggestionText: string): string;
        renderUsage(guiGraphics: $GuiGraphics): void;
        showSuggestions(allowHiding: boolean): void;
        renderSuggestions(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): boolean;
        getCurrentParseFancyMenu(): $ParseResults<$SharedSuggestionProvider>;
        setCurrentParseFancyMenu(arg0: $ParseResults<$SharedSuggestionProvider>): void;
        getSuggestionsFancyMenu(): $CommandSuggestions$SuggestionsList;
        getCommandUsageFancyMenu(): $List<$FormattedCharSequence>;
        setSuggestionsFancyMenu(arg0: $CommandSuggestions$SuggestionsList): void;
        getAllowSuggestionsFancyMenu(): boolean;
        setPendingSuggestionsFancyMenu(arg0: $CompletableFuture<$Suggestions>): void;
        invokeUpdateUsageInfoFancyMenu(): void;
        getKeepSuggestionsFancyMenu(): boolean;
        getPendingSuggestionsFancyMenu(): $CompletableFuture<$Suggestions>;
        invokeSortSuggestionsFancyMenu(suggestions: $Suggestions): $List<$Suggestion>;
        minecraft: $Minecraft;
        fillColor: number;
        input: $EditBox;
        keepSuggestions: boolean;
        anchorToBottom: boolean;
        lineStartOffset: number;
        suggestions: $CommandSuggestions$SuggestionsList;
        suggestionLineLimit: number;
        font: $Font;
        constructor(minecraft: $Minecraft, screen: $Screen, input: $EditBox, font: $Font, commandsOnly: boolean, onlyShowIfCursorPastError: boolean, lineStartOffset: number, suggestionLineLimit: number, anchorToBottom: boolean, fillColor: number);
        get visible(): boolean;
        set allowSuggestions(value: boolean);
        get usageNarration(): $Component;
        get narrationMessage(): $Component;
        set allowHiding(value: boolean);
        get commandUsageFancyMenu(): $List<$FormattedCharSequence>;
        get allowSuggestionsFancyMenu(): boolean;
        get keepSuggestionsFancyMenu(): boolean;
    }
    export class $PopupScreen$Builder {
        build(): $PopupScreen;
        onClose(onClose: $Runnable_): $PopupScreen$Builder;
        setMessage(message: $Component_): $PopupScreen$Builder;
        addButton(message: $Component_, action: $Consumer_<$PopupScreen>): $PopupScreen$Builder;
        setWidth(width: number): $PopupScreen$Builder;
        setImage(image: $ResourceLocation_): $PopupScreen$Builder;
        constructor(backgroundScreen: $Screen, title: $Component_);
        set message(value: $Component_);
        set width(value: number);
        set image(value: $ResourceLocation_);
    }
    export class $OptionsList$Entry extends $ContainerObjectSelectionList$Entry<$OptionsList$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$OptionsList$Entry>;
    }
    export class $ChatComponent {
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        tick(): void;
        getScale(): number;
        static defaultUnfocusedPct(): number;
        static getWidth(height: number): number;
        getWidth(): number;
        render(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean): void;
        scrollChat(posInc: number): void;
        getHeight(): number;
        static getHeight(height: number): number;
        addMessage(chatComponent: $Component_): void;
        addMessage(chatComponent: $Component_, headerSignature: $MessageSignature_ | null, tag: $GuiMessageTag_ | null): void;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        rescaleChat(): void;
        restoreState(state: $ChatComponent$State): void;
        handleChatQueueClicked(mouseX: number, arg1: number): boolean;
        getClickedComponentStyleAt(mouseX: number, arg1: number): $Style;
        getLinesPerPage(): number;
        getMessageTagAt(mouseX: number, arg1: number): $GuiMessageTag;
        /**
         * Adds this string to the list of sent messages, for recall using the up/down arrow keys
         */
        addRecentChat(message: string): void;
        getRecentChat(): $ArrayListDeque<string>;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        resetChatScroll(): void;
        deleteMessage(messageSignature: $MessageSignature_): void;
        storeState(): $ChatComponent$State;
        modify$bfj000$chat_heads$chatheads$correctClickPosition(x: number, guiMessage: $GuiMessage$Line_): number;
        handler$bfj000$chat_heads$chatheads$forgetRenderData(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo): void;
        modifyExpressionValue$bfj000$chat_heads$chatheads$fixTextOverflow(original: number): number;
        modifyExpressionValue$dji000$longerchathistory$newMaxHistory(original: number): number;
        /**
         * Clears the chat.
         */
        clearMessages(clearSentMsgHistory: boolean): void;
        /**
         * Returns `true` if the chat GUI is open
         */
        isChatFocused(): boolean;
        handler$bfj000$chat_heads$chatheads$renderChatHead(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo, guiMessage: $GuiMessage$Line_, yRef: $LocalIntRef, opacityRef: $LocalFloatRef): void;
        modify$bfj000$chat_heads$chatheads$moveText(font: $Font, formattedCharSequence: $FormattedCharSequence_, x: number, y: number, color: number, guiMessage: $GuiMessage$Line_, yRef: $LocalIntRef, opacityRef: $LocalFloatRef): number;
        constructor(minecraft: $Minecraft);
        get scale(): number;
        get linesPerPage(): number;
        get recentChat(): $ArrayListDeque<string>;
        get chatFocused(): boolean;
    }
    export class $PlayerTabOverlay implements $PlayerTabOverlayInvoker {
        reset(): void;
        render(guiGraphics: $GuiGraphics, width: number, scoreboard: $Scoreboard, objective: $Objective | null): void;
        /**
         * Called by GuiIngame to update the information stored in the playerlist, does not actually render the list, however.
         */
        setVisible(visible: boolean): void;
        setHeader(footer: $Component_ | null): void;
        setFooter(footer: $Component_ | null): void;
        redirect$hnb000$watut$renderPingIcon(arg0: $PlayerTabOverlay, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: $PlayerInfo): void;
        renderPingIcon(guiGraphics: $GuiGraphics, width: number, x: number, y: number, playerInfo: $PlayerInfo): void;
        getNameForDisplay(playerInfo: $PlayerInfo): $Component;
        invokeRenderPingIcon(guiGraphics: $GuiGraphics, width: number, x: number, y: number, playerInfo: $PlayerInfo): void;
        static MAX_ROWS_PER_COL: number;
        visible: boolean;
        constructor(minecraft: $Minecraft, gui: $Gui);
        set header(value: $Component_ | null);
        set footer(value: $Component_ | null);
    }
    export class $PlayerFaceRenderer {
        static draw(guiGraphics: $GuiGraphics, atlasLocation: $ResourceLocation_, x: number, y: number, size: number, drawHat: boolean, upsideDown: boolean): void;
        static draw(guiGraphics: $GuiGraphics, atlasLocation: $ResourceLocation_, x: number, y: number, size: number): void;
        static draw(guiGraphics: $GuiGraphics, skin: $PlayerSkin_, x: number, y: number, size: number): void;
        static SKIN_HAT_WIDTH: number;
        static SKIN_HAT_HEIGHT: number;
        static SKIN_HEAD_WIDTH: number;
        static SKIN_HAT_U: number;
        static SKIN_TEX_HEIGHT: number;
        static SKIN_HEAD_HEIGHT: number;
        static SKIN_HEAD_V: number;
        static SKIN_HEAD_U: number;
        static SKIN_HAT_V: number;
        static SKIN_TEX_WIDTH: number;
        constructor();
    }
    export class $TabOrderedElement {
    }
    export interface $TabOrderedElement {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        get tabOrderGroup(): number;
    }
    export class $OptionsList extends $ContainerObjectSelectionList<$OptionsList$Entry> {
        findOption(option: $OptionInstance<never>): $AbstractWidget;
        applyUnsavedChanges(): void;
        addSmall(leftOption: $AbstractWidget, rightOption: $AbstractWidget | null): void;
        addSmall(options: $List_<$AbstractWidget>): void;
        addSmall(...options: $OptionInstance<never>[]): void;
        getMouseOver(mouseX: number, arg1: number): ($GuiEventListener) | undefined;
        addBig(option: $OptionInstance<never>): void;
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
        hovered: $OptionsList$Entry;
        height: number;
        constructor(minecraft: $Minecraft, width: number, screen: $OptionsSubScreen);
    }
    export class $SubtitleOverlay implements $SoundEventListener {
        render(guiGraphics: $GuiGraphics): void;
        onPlaySound(sound: $SoundInstance, accessor: $WeighedSoundEvents, range: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $AbstractSliderButton extends $AbstractWidget implements $IMixinAbstractSliderButton, $CustomizableSlider {
        setNineSliceSliderHandleBorderX_FancyMenu(height: number): void;
        setCustomSliderBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        setNineSliceSliderHandleBorderY_FancyMenu(height: number): void;
        getCustomSliderBackgroundNormalFancyMenu(): $RenderableResource;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderY_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderX_FancyMenu(): number;
        getSprite(): $ResourceLocation;
        updateMessage(): void;
        getHandleSprite(): $ResourceLocation;
        setNineSliceSliderHandleBorderLeft_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderRight_FancyMenu(): number;
        setNineSliceSliderHandleBorderRight_FancyMenu(height: number): void;
        setNineSliceSliderHandleBorderTop_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderBottom_FancyMenu(): number;
        setNineSliceSliderHandleBorderBottom_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderLeft_FancyMenu(): number;
        setNineSliceCustomSliderBackground_FancyMenu(focused: boolean): void;
        setNineSliceSliderBackgroundBorderX_FancyMenu(height: number): void;
        setNineSliceSliderBackgroundBorderY_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderY_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderTop_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderTop_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderRight_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderRight_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderHandleBorderTop_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderX_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderBottom_FancyMenu(): number;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isNineSliceCustomSliderBackground_FancyMenu(): boolean;
        setNineSliceSliderBackgroundBorderLeft_FancyMenu(height: number): void;
        setNineSliceSliderBackgroundBorderBottom_FancyMenu(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceSliderBackgroundBorderLeft_FancyMenu(): number;
        getCustomSliderBackgroundHighlightedFancyMenu(): $RenderableResource;
        setCustomSliderBackgroundHighlightedFancyMenu(arg0: $RenderableResource): void;
        applyValue(): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isNineSliceCustomSliderHandle_FancyMenu(): boolean;
        setNineSliceCustomSliderHandle_FancyMenu(focused: boolean): void;
        renderSliderBackgroundFancyMenu(arg0: $GuiGraphics, arg1: $AbstractSliderButton, arg2: boolean): boolean;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        getCanChangeValueFancyMenu(): boolean;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        value: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, value: number);
        get sprite(): $ResourceLocation;
        get handleSprite(): $ResourceLocation;
        get canChangeValueFancyMenu(): boolean;
    }
    export class $LockIconButton extends $Button {
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isLocked(): boolean;
        setLocked(locked: boolean): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, onPress: $Button$OnPress_);
    }
    export class $MultiLineEditBox extends $AbstractScrollWidget {
        getValue(): string;
        setValue(fullText: string): void;
        setCharacterLimit(characterLimit: number): void;
        setValueListener(valueListener: $Consumer_<string>): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(font: $Font, x: number, y: number, width: number, height: number, placeholder: $Component_, message: $Component_);
        set characterLimit(value: number);
        set valueListener(value: $Consumer_<string>);
    }
}
