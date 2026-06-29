import { $BlazeBurnerBlock$HeatLevel_ } from "@package/com/simibubi/create/content/processing/burner";

declare module "@package/com/forsteri/createliquidfuel/mixin" {
    export class $BlazeBurnerAccessor {
    }
    export interface $BlazeBurnerAccessor {
        createliquidfuel$invokeSetBlockHeat(arg0: $BlazeBurnerBlock$HeatLevel_): void;
        createliquidfuel$setRemainingBurnTime(arg0: number): void;
        createliquidfuel$getRemainingBurnTime(): number;
    }
}
