import { $Function, $UnaryOperator } from "@package/java/util/function";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Object } from "@package/java/lang";
import { $BlockIDPredicate } from "@package/dev/latvian/mods/kubejs/block/predicate";

declare module "@package/com/almostreliable/ponderjs/util" {
    export class $BlockStateFunction {
        static of(arg1: $Object | null): $BlockStateFunction;
        static from(arg0: $BlockStateFunction_): $UnaryOperator<$BlockState>;
        static FUNCTION_TYPE: $TypeInfo;
        static BLOCK_STATE_TYPE: $TypeInfo;
    }
    export interface $BlockStateFunction extends $Function<$BlockIDPredicate, $BlockState> {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateFunction}.
     */
    export type $BlockStateFunction_ = (() => void);
}
