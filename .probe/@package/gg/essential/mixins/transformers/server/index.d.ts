import { $GameRules$BooleanValue, $GameRules$Key, $GameRules$Category_, $GameRules$Value, $GameRules$Type } from "@package/net/minecraft/world/level";
import { $Thread } from "@package/java/lang";
export * as integrated from "@package/gg/essential/mixins/transformers/server/integrated";

declare module "@package/gg/essential/mixins/transformers/server" {
    export class $MinecraftServerAccessor {
    }
    export interface $MinecraftServerAccessor {
        getServerThread(): $Thread;
        get serverThread(): $Thread;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServerAccessor}.
     */
    export type $MinecraftServerAccessor_ = (() => $Thread);
    export class $GameRulesAccessor {
        static invokeRegister<T extends $GameRules$Value<T>>(name: string, category: $GameRules$Category_, type: $GameRules$Type<T>): $GameRules$Key<T>;
    }
    export interface $GameRulesAccessor {
    }
    export class $GameRulesBooleanValueAccessor {
        static invokeCreate(defaultValue: boolean): $GameRules$Type<$GameRules$BooleanValue>;
    }
    export interface $GameRulesBooleanValueAccessor {
    }
}
