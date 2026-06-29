import { $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $List_, $List } from "@package/java/util";

declare module "@package/gg/essential/mixins/transformers/client/multiplayer" {
    export class $ServerListAccessor {
    }
    export interface $ServerListAccessor {
        getServers(): $List<$ServerData>;
        get servers(): $List<$ServerData>;
    }
    /**
     * Values that may be interpreted as {@link $ServerListAccessor}.
     */
    export type $ServerListAccessor_ = (() => $List_<$ServerData>);
}
