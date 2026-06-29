import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Set } from "@package/java/util";

declare module "@package/rbasamoyai/createbigcannons/cannon_loading" {
    export class $CanLoadBigCannon {
        static intersectionLoadingEnabled(): boolean;
        static canBreakLoader(arg0: $BlockState_): boolean;
    }
    export interface $CanLoadBigCannon {
        createbigcannons$getOriginalForcedDirection(arg0: $Level_): $Direction;
        createbigcannons$getAssemblyMovementDirection(arg0: $Level_): $Direction;
        createbigcannons$toLocalPos(arg0: $BlockPos_): $BlockPos;
        createbigcannons$getCannonLoadingColliders(): $Set<$BlockPos>;
    }
}
