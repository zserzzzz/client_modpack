import { $FriendsIndicator, $EssentialMultiplayerGui } from "@package/gg/essential/gui/multiplayer";
import { $TreeMap, $Map_ } from "@package/java/util";
import { $NewServerDiscoveryManager$ImpressionConsumer_ } from "@package/gg/essential/network/connectionmanager/serverdiscovery";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/gg/essential/mixins/ext/client/gui" {
    export class $SelectionListWithDividers<T extends $GuiEventListener> {
    }
    export interface $SelectionListWithDividers<T extends $GuiEventListener> {
        essential$setDividers(dividers: $Map_<number, T>): void;
        getEssential$offsetDividers(): $TreeMap<number, T>;
        setEssential$offsetDividers(arg0: $TreeMap<number, T>): void;
    }
    export class $ServerListEntryNormalExt {
    }
    export interface $ServerListEntryNormalExt {
        essential$setImpressionConsumer(arg0: $NewServerDiscoveryManager$ImpressionConsumer_): void;
        essential$getFriends(): $FriendsIndicator;
    }
    export class $GuiMultiplayerExt {
    }
    export interface $GuiMultiplayerExt {
        essential$close(): void;
        essential$refresh(): void;
        essential$getEssentialGui(): $EssentialMultiplayerGui;
    }
}
