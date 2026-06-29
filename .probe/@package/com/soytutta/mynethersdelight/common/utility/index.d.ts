import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $List } from "@package/java/util";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/soytutta/mynethersdelight/common/utility" {
    export class $EntityDropChanceAccessor {
    }
    export interface $EntityDropChanceAccessor {
        callGenerateLoot(arg0: $DamageSource_): $List<$ItemStack>;
        callSetDropChance(arg0: $EquipmentSlot_, arg1: number): void;
        callDropCustomDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_, arg2: boolean): void;
        callGetEquipmentDropChance(arg0: $EquipmentSlot_): number;
    }
}
