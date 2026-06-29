import { $LevelSettings } from "@package/net/minecraft/world/level";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $List_, $List } from "@package/java/util";

declare module "@package/gg/essential/mixins/transformers/server/integrated" {
    export class $ServerWorldInfoAccessor {
    }
    export interface $ServerWorldInfoAccessor {
        getWorldSettings(): $LevelSettings;
        get worldSettings(): $LevelSettings;
    }
    /**
     * Values that may be interpreted as {@link $ServerWorldInfoAccessor}.
     */
    export type $ServerWorldInfoAccessor_ = (() => $LevelSettings);
    export class $LanConnectionsAccessor {
    }
    export interface $LanConnectionsAccessor {
        getPlayerEntityList(): $List<$ServerPlayer>;
        get playerEntityList(): $List<$ServerPlayer>;
    }
    /**
     * Values that may be interpreted as {@link $LanConnectionsAccessor}.
     */
    export type $LanConnectionsAccessor_ = (() => $List_<$ServerPlayer>);
    export class $ServerWorldAccessor {
    }
    export interface $ServerWorldAccessor {
        getServerWorldInfo(): $ServerLevelData;
        get serverWorldInfo(): $ServerLevelData;
    }
    /**
     * Values that may be interpreted as {@link $ServerWorldAccessor}.
     */
    export type $ServerWorldAccessor_ = (() => $ServerLevelData);
    export class $Mixin_SetWorldName {
    }
    export interface $Mixin_SetWorldName {
        setWorldName(arg0: string): void;
        set worldName(value: string);
    }
    /**
     * Values that may be interpreted as {@link $Mixin_SetWorldName}.
     */
    export type $Mixin_SetWorldName_ = ((arg0: string) => void);
}
