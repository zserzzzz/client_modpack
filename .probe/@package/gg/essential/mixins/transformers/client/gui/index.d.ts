import { $Pack } from "@package/net/minecraft/server/packs/repository";
import { $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $TransferableSelectionList, $PackSelectionModel, $PackSelectionScreen } from "@package/net/minecraft/client/gui/screens/packs";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $DisconnectionDetails, $DisconnectionDetails_ } from "@package/net/minecraft/network";
import { $ServerSelectionList$OnlineServerEntry, $ServerSelectionList$NetworkServerEntry, $ServerSelectionList, $JoinMultiplayerScreen } from "@package/net/minecraft/client/gui/screens/multiplayer";
import { $Button, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Runnable } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/gg/essential/mixins/transformers/client/gui" {
    export class $ResourcePackListEntryAccessor {
    }
    export interface $ResourcePackListEntryAccessor {
        essential$isMovable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ResourcePackListEntryAccessor}.
     */
    export type $ResourcePackListEntryAccessor_ = (() => boolean);
    export class $ServerListEntryNormalAccessor {
        static create(this$0: $ServerSelectionList, screen: $JoinMultiplayerScreen, serverData: $ServerData): $ServerSelectionList$OnlineServerEntry;
    }
    export interface $ServerListEntryNormalAccessor {
    }
    export class $PackScreenAccessor {
    }
    export interface $PackScreenAccessor {
        essential$getPackLoadingManager(): $PackSelectionModel;
        essential$getAvailablePackList(): $TransferableSelectionList;
        essential$getSelectedPackList(): $TransferableSelectionList;
    }
    export class $GuiMultiplayerAccessor {
    }
    export interface $GuiMultiplayerAccessor {
        getBtnSelectServer(): $Button;
        getParentScreen(): $Screen;
        getServerListSelector(): $ServerSelectionList;
        get btnSelectServer(): $Button;
        get parentScreen(): $Screen;
        get serverListSelector(): $ServerSelectionList;
    }
    export class $PackListWidgetAccessor {
    }
    export interface $PackListWidgetAccessor {
        essential$getScreen(): $PackSelectionScreen;
    }
    /**
     * Values that may be interpreted as {@link $PackListWidgetAccessor}.
     */
    export type $PackListWidgetAccessor_ = (() => $PackSelectionScreen);
    export class $EntryListWidgetAccessor {
    }
    export interface $EntryListWidgetAccessor {
        essential$getHeaderHeight(): number;
        essential$getItemHeight(): number;
    }
    export class $PackLoadingManagerAccessor {
    }
    export interface $PackLoadingManagerAccessor {
        essential$getDisabledList(): $List<$Pack>;
        essential$getEnabledList(): $List<$Pack>;
        essential$getChangeRunnable(): $Runnable;
    }
    export class $ServerSelectionListAccessor {
    }
    export interface $ServerSelectionListAccessor {
        getServerListInternet(): $List<$ServerSelectionList$OnlineServerEntry>;
        updateList(): void;
        getServerListLan(): $List<$ServerSelectionList$NetworkServerEntry>;
        get serverListInternet(): $List<$ServerSelectionList$OnlineServerEntry>;
        get serverListLan(): $List<$ServerSelectionList$NetworkServerEntry>;
    }
    export class $GuiScreenAccessor {
    }
    export interface $GuiScreenAccessor {
        getDrawables(): $List<$Renderable>;
        getSelectables(): $List<$NarratableEntry>;
        essential$getChildren(): $List<$GuiEventListener>;
        essential$addDrawableChild<T extends $GuiEventListener>(arg0: T): T;
        get drawables(): $List<$Renderable>;
        get selectables(): $List<$NarratableEntry>;
    }
    export class $GuiDisconnectedAccessor {
    }
    export interface $GuiDisconnectedAccessor {
        getInfo(): $DisconnectionDetails;
        get info(): $DisconnectionDetails;
    }
    /**
     * Values that may be interpreted as {@link $GuiDisconnectedAccessor}.
     */
    export type $GuiDisconnectedAccessor_ = (() => $DisconnectionDetails_);
}
