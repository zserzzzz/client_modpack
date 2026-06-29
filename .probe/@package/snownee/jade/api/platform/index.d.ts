import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/snownee/jade/api/platform" {
    export class $PlatformWailaClientRegistration {
    }
    export interface $PlatformWailaClientRegistration {
        registerCustomEnchantPower(arg0: $Block_, arg1: $CustomEnchantPower_): void;
    }
    /**
     * Values that may be interpreted as {@link $PlatformWailaClientRegistration}.
     */
    export type $PlatformWailaClientRegistration_ = ((arg0: $Block, arg1: $CustomEnchantPower) => void);
    export class $CustomEnchantPower {
    }
    export interface $CustomEnchantPower {
        getEnchantPowerBonus(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
    }
    /**
     * Values that may be interpreted as {@link $CustomEnchantPower}.
     */
    export type $CustomEnchantPower_ = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos) => number);
}
