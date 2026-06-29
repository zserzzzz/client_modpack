import { $GameRules$Key, $GameRules$Value, $GameRules$Type } from "@package/net/minecraft/world/level";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/gg/essential/mixins/transformers/feature/gamerules" {
    export class $MixinGameRulesValueAccessor {
    }
    export interface $MixinGameRulesValueAccessor {
        getType(): $GameRules$Type<any>;
        get type(): $GameRules$Type<any>;
    }
    /**
     * Values that may be interpreted as {@link $MixinGameRulesValueAccessor}.
     */
    export type $MixinGameRulesValueAccessor_ = (() => $GameRules$Type<any>);
    export class $MixinGameRulesAccessor {
    }
    export interface $MixinGameRulesAccessor {
        getRules(): $Map<$GameRules$Key<never>, $GameRules$Value<never>>;
        get rules(): $Map<$GameRules$Key<never>, $GameRules$Value<never>>;
    }
    /**
     * Values that may be interpreted as {@link $MixinGameRulesAccessor}.
     */
    export type $MixinGameRulesAccessor_ = (() => $Map_<$GameRules$Key<never>, $GameRules$Value<never>>);
}
