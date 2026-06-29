import { $Logger } from "@package/org/slf4j";
import { $ServerLinks, $ServerLinks_ } from "@package/net/minecraft/server";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $HeaderAndFooterLayout, $Layout } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ThreadPoolExecutor, $Executor } from "@package/java/util/concurrent";
import { $CycleButton, $WidgetTooltipHolder, $AbstractSelectionList, $Checkbox, $ContainerObjectSelectionList, $AbstractSelectionList$Entry, $Button, $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $GuiMultiplayerExt, $ServerListEntryNormalExt, $SelectionListWithDividers } from "@package/gg/essential/mixins/ext/client/gui";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $Map_, $TreeMap, $List_ } from "@package/java/util";
import { $LanServer } from "@package/net/minecraft/client/server";
import { $ServerData, $ServerList, $ServerStatusPinger } from "@package/net/minecraft/client/multiplayer";
import { $EssentialPostScreenDrawHook, $GuiDragDropEntryHandler, $EssentialGuiDraggableEntryScreen } from "@package/gg/essential/mixins/impl/client/gui";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ServerSelectionListAccessor, $GuiMultiplayerAccessor, $ServerListEntryNormalAccessor } from "@package/gg/essential/mixins/transformers/client/gui";
import { $EssentialMultiplayerGui, $FriendsIndicator } from "@package/gg/essential/gui/multiplayer";
import { $Connection } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AutoCloseable, $Object } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $NewServerDiscoveryManager$ImpressionConsumer_ } from "@package/gg/essential/network/connectionmanager/serverdiscovery";

declare module "@package/net/minecraft/client/gui/screens/multiplayer" {
    export class $ServerSelectionList$NetworkServerEntry extends $ServerSelectionList$Entry {
        getServerData(): $LanServer;
        getServerNarration(): $Component;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerSelectionList$Entry>;
        serverData: $LanServer;
        constructor(screen: $JoinMultiplayerScreen, serverData: $LanServer);
        get serverNarration(): $Component;
    }
    export class $ServerSelectionList$Entry extends $ObjectSelectionList$Entry<$ServerSelectionList$Entry> implements $AutoCloseable {
        close(): void;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerSelectionList$Entry>;
        constructor();
    }
    export class $JoinMultiplayerScreen extends $Screen implements $GuiMultiplayerAccessor, $EssentialPostScreenDrawHook, $GuiMultiplayerExt, $EssentialGuiDraggableEntryScreen<any> {
        getPinger(): $ServerStatusPinger;
        setSelected(selected: $ServerSelectionList$Entry): void;
        getServers(): $ServerList;
        essential$getDragHandlerOrNull(): $GuiDragDropEntryHandler<any>;
        onSelectedChange(): void;
        joinSelectedServer(): void;
        essential$close(): void;
        essential$refresh(): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        essential$getQuickSwapIndex(): number;
        essential$getEssentialGui(): $EssentialMultiplayerGui;
        getBtnSelectServer(): $Button;
        getParentScreen(): $Screen;
        getServerListSelector(): $ServerSelectionList;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static LOWER_ROW_BUTTON_WIDTH: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static FOOTER_HEIGHT: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        static TOP_ROW_BUTTON_WIDTH: number;
        serverSelectionList: $ServerSelectionList;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static BUTTON_ROW_WIDTH: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen);
        get pinger(): $ServerStatusPinger;
        set selected(value: $ServerSelectionList$Entry);
        get servers(): $ServerList;
        get btnSelectServer(): $Button;
        get parentScreen(): $Screen;
        get serverListSelector(): $ServerSelectionList;
    }
    export class $SafetyScreen extends $WarningScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        stopShowing: $Checkbox;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        message: $Component;
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
        constructor(previous: $Screen);
    }
    export class $ServerReconfigScreen extends $Screen {
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
        constructor(title: $Component_, connection: $Connection);
    }
    export class $WarningScreen extends $Screen {
        addFooterButtons(): $Layout;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        stopShowing: $Checkbox;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        message: $Component;
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
        constructor(title: $Component_, content: $Component_, narration: $Component_);
        constructor(title: $Component_, content: $Component_, check: $Component_ | null, narration: $Component_);
    }
    export class $ServerLinksScreen$LinkListEntry extends $ContainerObjectSelectionList$Entry<$ServerLinksScreen$LinkListEntry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerLinksScreen$LinkListEntry>;
    }
    export class $ServerSelectionList extends $ObjectSelectionList<$ServerSelectionList$Entry> implements $SelectionListWithDividers<any>, $ServerSelectionListAccessor {
        static access$000(arg0: $ServerSelectionList, arg1: $AbstractSelectionList$Entry<any>): void;
        removed(): void;
        static access$100(arg0: $ServerSelectionList, arg1: number): number;
        setSelected(entry: $ServerSelectionList$Entry | null): void;
        updateOnlineServers(servers: $ServerList): void;
        updateNetworkServers(lanServers: $List_<$LanServer>): void;
        getEssential$offsetDividers(): $TreeMap<any, any>;
        setEssential$offsetDividers(dividers: $TreeMap<any, any>): void;
        handler$iab000$essential$modifyListEntries(ci: $CallbackInfo): void;
        essential$setDividers(dividers: $Map_<number, $Object>): void;
        updateList(): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getServerListInternet(): $List<$ServerSelectionList$OnlineServerEntry>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getServerListLan(): $List<$ServerSelectionList$NetworkServerEntry>;
        minecraft: $Minecraft;
        static PINGING_2_SPRITE: $ResourceLocation;
        static PING_1_SPRITE: $ResourceLocation;
        static PINGING_1_SPRITE: $ResourceLocation;
        static PINGING_3_SPRITE: $ResourceLocation;
        static SCANNING_LABEL: $Component;
        itemHeight: number;
        static CANT_CONNECT_TEXT: $Component;
        static PINGING_STATUS: $Component;
        tooltip: $WidgetTooltipHolder;
        static MOVE_UP_HIGHLIGHTED_SPRITE: $ResourceLocation;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static MOVE_UP_SPRITE: $ResourceLocation;
        alpha: number;
        scrollAmount: number;
        static THREAD_POOL: $ThreadPoolExecutor;
        static ONLINE_STATUS: $Component;
        height: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        static INCOMPATIBLE_SPRITE: $ResourceLocation;
        static JOIN_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static MOVE_DOWN_SPRITE: $ResourceLocation;
        static INCOMPATIBLE_STATUS: $Component;
        static UNREACHABLE_SPRITE: $ResourceLocation;
        static CANT_RESOLVE_TEXT: $Component;
        static PING_4_SPRITE: $ResourceLocation;
        static SCROLLER_SPRITE: $ResourceLocation;
        static PING_3_SPRITE: $ResourceLocation;
        static PING_5_SPRITE: $ResourceLocation;
        static PINGING_4_SPRITE: $ResourceLocation;
        static PINGING_5_SPRITE: $ResourceLocation;
        static NO_CONNECTION_STATUS: $Component;
        centerListVertically: boolean;
        width: number;
        x: number;
        static PING_2_SPRITE: $ResourceLocation;
        y: number;
        static LOGGER: $Logger;
        headerHeight: number;
        hovered: $ServerSelectionList$Entry;
        static MOVE_DOWN_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static JOIN_SPRITE: $ResourceLocation;
        constructor(screen: $JoinMultiplayerScreen, minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        set selected(value: $ServerSelectionList$Entry | null);
        get serverListInternet(): $List<$ServerSelectionList$OnlineServerEntry>;
        get serverListLan(): $List<$ServerSelectionList$NetworkServerEntry>;
    }
    export class $ServerSelectionList$OnlineServerEntry extends $ServerSelectionList$Entry implements $ServerListEntryNormalExt, $ServerListEntryNormalAccessor {
        essential$setImpressionConsumer(consumer: $NewServerDiscoveryManager$ImpressionConsumer_): void;
        essential$getFriends(): $FriendsIndicator;
        static create$essential_$md$942995$1(arg0: $ServerSelectionList, arg1: $JoinMultiplayerScreen, arg2: $ServerData): $ServerSelectionList$OnlineServerEntry;
        getServerData(): $ServerData;
        drawIcon(guiGraphics: $GuiGraphics, x: number, y: number, icon: $ResourceLocation_): void;
        updateServerList(): void;
        this$0: $ServerSelectionList;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerSelectionList$Entry>;
        constructor(screen: $ServerSelectionList, serverData: $JoinMultiplayerScreen, arg2: $ServerData);
        get serverData(): $ServerData;
    }
    export class $ServerSelectionList$LANHeader extends $ServerSelectionList$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ServerSelectionList$Entry>;
        constructor();
    }
    export class $ServerLinksScreen$LinkList extends $ContainerObjectSelectionList<$ServerLinksScreen$LinkListEntry> {
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
        hovered: $ServerLinksScreen$LinkListEntry;
        height: number;
    }
    export class $ServerLinksScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        layout: $HeaderAndFooterLayout;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        links: $ServerLinks;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, links: $ServerLinks_);
    }
}
