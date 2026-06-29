import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/ca/fxco/moreculling/api/block" {
    export class $MoreBlockCulling {
    }
    export interface $MoreBlockCulling {
        moreculling$canCull(): boolean;
        moreculling$setCanCull(arg0: boolean): void;
        moreculling$cantCullAgainst(arg0: $BlockState_, arg1: $Direction_): boolean;
        moreculling$customShouldDrawFace(arg0: $BlockGetter, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_, arg5: $Direction_): (boolean) | undefined;
        moreculling$shouldAttemptToCull(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockGetter, arg3: $BlockPos_): boolean;
        moreculling$shouldAttemptToCullAgainst(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockGetter, arg3: $BlockPos_): boolean;
        moreculling$usesCustomShouldDrawFace(arg0: $BlockState_): boolean;
    }
    export class $LeavesCulling {
    }
    export interface $LeavesCulling {
    }
}
