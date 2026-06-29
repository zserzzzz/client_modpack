import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";

declare module "@package/ca/fxco/moreculling/api/blockstate" {
    export class $MoreStateCulling {
    }
    export interface $MoreStateCulling {
        moreculling$hasQuadsOnSide(arg0: $Direction_): boolean;
        moreculling$canCull(): boolean;
        moreculling$shouldAttemptToCullAgainst(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        moreculling$usesCustomShouldDrawFace(): boolean;
        moreculling$cantCullAgainst(arg0: $Direction_): boolean;
        moreculling$shouldAttemptToCull(arg0: $Direction_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        moreculling$hasTextureTranslucency(arg0: $Direction_): boolean;
        moreculling$customShouldDrawFace(arg0: $BlockGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $Direction_): (boolean) | undefined;
        moreculling$setHasTextureTranslucency(arg0: boolean): void;
        moreculling$setHasQuadsOnSide(arg0: number): void;
    }
    export class $StateCullingShapeCache {
    }
    export interface $StateCullingShapeCache {
        moreculling$initShapeCache(): void;
        moreculling$getFaceCullingShape(arg0: $Direction_): $VoxelShape;
    }
}
