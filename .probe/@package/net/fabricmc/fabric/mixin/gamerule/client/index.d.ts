import { $EditGameRulesScreen$RuleEntry } from "@package/net/minecraft/client/gui/screens/worldselection";

declare module "@package/net/fabricmc/fabric/mixin/gamerule/client" {
    export class $EditGameRulesScreenAccessor {
    }
    export interface $EditGameRulesScreenAccessor {
        callMarkInvalid(arg0: $EditGameRulesScreen$RuleEntry): void;
        callMarkValid(arg0: $EditGameRulesScreen$RuleEntry): void;
    }
}
