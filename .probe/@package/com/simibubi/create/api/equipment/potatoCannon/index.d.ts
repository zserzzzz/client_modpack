import { $LevelAccessor, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $RegistryAccess, $Holder$Reference, $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Enum, $Record } from "@package/java/lang";
import { $PotatoProjectileEntity } from "@package/com/simibubi/create/content/equipment/potatoCannon";
import { $EntityHitResult, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/api/equipment/potatoCannon" {
    export class $PotatoProjectileRenderMode {
        static CODEC: $Codec<$PotatoProjectileRenderMode>;
    }
    export interface $PotatoProjectileRenderMode {
        transform(arg0: $PoseStack, arg1: $PotatoProjectileEntity, arg2: number): void;
        codec(): $MapCodec<$PotatoProjectileRenderMode>;
    }
    export class $PotatoProjectileBlockHitAction {
        static CODEC: $Codec<$PotatoProjectileBlockHitAction>;
    }
    export interface $PotatoProjectileBlockHitAction {
        execute(arg0: $LevelAccessor, arg1: $ItemStack_, arg2: $BlockHitResult): boolean;
        codec(): $MapCodec<$PotatoProjectileBlockHitAction>;
    }
    export class $PotatoProjectileEntityHitAction {
        static CODEC: $Codec<$PotatoProjectileEntityHitAction>;
    }
    export interface $PotatoProjectileEntityHitAction {
        execute(arg0: $ItemStack_, arg1: $EntityHitResult, arg2: $PotatoProjectileEntityHitAction$Type_): boolean;
        codec(): $MapCodec<$PotatoProjectileEntityHitAction>;
    }
    export interface $PotatoCannonProjectileType extends RegistryMarked<RegistryTypes.CreatePotatoProjectileTypeTag, RegistryTypes.CreatePotatoProjectileType> {}
    export class $PotatoProjectileEntityHitAction$Type extends $Enum<$PotatoProjectileEntityHitAction$Type> {
        static values(): $PotatoProjectileEntityHitAction$Type[];
        static valueOf(arg0: string): $PotatoProjectileEntityHitAction$Type;
        static ON_HIT: $PotatoProjectileEntityHitAction$Type;
        static PRE_HIT: $PotatoProjectileEntityHitAction$Type;
    }
    /**
     * Values that may be interpreted as {@link $PotatoProjectileEntityHitAction$Type}.
     */
    export type $PotatoProjectileEntityHitAction$Type_ = "pre_hit" | "on_hit";
    export class $PotatoCannonProjectileType extends $Record {
        split(): number;
        sticky(): boolean;
        items(): $HolderSet<$Item>;
        soundPitch(): number;
        drag(): number;
        dropStack(): $ItemStack;
        damage(): number;
        knockback(): number;
        renderMode(): $PotatoProjectileRenderMode;
        gravityMultiplier(): number;
        onBlockHit(): ($PotatoProjectileBlockHitAction) | undefined;
        onBlockHit(arg0: $LevelAccessor, arg1: $ItemStack_, arg2: $BlockHitResult): boolean;
        static getTypeForItem(arg0: $RegistryAccess, arg1: $Item_): ($Holder$Reference<$PotatoCannonProjectileType>) | undefined;
        reloadTicks(): number;
        velocityMultiplier(): number;
        preEntityHit(arg0: $ItemStack_, arg1: $EntityHitResult): boolean;
        preEntityHit(): ($PotatoProjectileEntityHitAction) | undefined;
        onEntityHit(arg0: $ItemStack_, arg1: $EntityHitResult): boolean;
        onEntityHit(): ($PotatoProjectileEntityHitAction) | undefined;
        static CODEC: $Codec<$PotatoCannonProjectileType>;
        constructor(items: $HolderSet_<$Item>, reloadTicks: number, damage: number, split: number, knockback: number, drag: number, velocityMultiplier: number, gravityMultiplier: number, soundPitch: number, sticky: boolean, dropStack: $ItemStack_, renderMode: $PotatoProjectileRenderMode, preEntityHit: ($PotatoProjectileEntityHitAction) | undefined, onEntityHit: ($PotatoProjectileEntityHitAction) | undefined, onBlockHit: ($PotatoProjectileBlockHitAction) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PotatoCannonProjectileType}.
     */
    export type $PotatoCannonProjectileType_ = RegistryTypes.CreatePotatoProjectileType | { dropStack?: $ItemStack_, items?: $HolderSet_<$Item>, preEntityHit?: ($PotatoProjectileEntityHitAction) | undefined, onEntityHit?: ($PotatoProjectileEntityHitAction) | undefined, soundPitch?: number, drag?: number, damage?: number, velocityMultiplier?: number, knockback?: number, onBlockHit?: ($PotatoProjectileBlockHitAction) | undefined, sticky?: boolean, split?: number, gravityMultiplier?: number, renderMode?: $PotatoProjectileRenderMode, reloadTicks?: number,  } | [dropStack?: $ItemStack_, items?: $HolderSet_<$Item>, preEntityHit?: ($PotatoProjectileEntityHitAction) | undefined, onEntityHit?: ($PotatoProjectileEntityHitAction) | undefined, soundPitch?: number, drag?: number, damage?: number, velocityMultiplier?: number, knockback?: number, onBlockHit?: ($PotatoProjectileBlockHitAction) | undefined, sticky?: boolean, split?: number, gravityMultiplier?: number, renderMode?: $PotatoProjectileRenderMode, reloadTicks?: number, ];
    export class $PotatoCannonProjectileType$Builder {
        sticky(): $PotatoCannonProjectileType$Builder;
        build(): $PotatoCannonProjectileType;
        soundPitch(arg0: number): $PotatoCannonProjectileType$Builder;
        drag(arg0: number): $PotatoCannonProjectileType$Builder;
        dropStack(arg0: $ItemStack_): $PotatoCannonProjectileType$Builder;
        velocity(arg0: number): $PotatoCannonProjectileType$Builder;
        damage(arg0: number): $PotatoCannonProjectileType$Builder;
        knockback(arg0: number): $PotatoCannonProjectileType$Builder;
        gravity(arg0: number): $PotatoCannonProjectileType$Builder;
        renderMode(arg0: $PotatoProjectileRenderMode): $PotatoCannonProjectileType$Builder;
        onBlockHit(arg0: $PotatoProjectileBlockHitAction): $PotatoCannonProjectileType$Builder;
        addItems(...arg0: $ItemLike_[]): $PotatoCannonProjectileType$Builder;
        reloadTicks(arg0: number): $PotatoCannonProjectileType$Builder;
        preEntityHit(arg0: $PotatoProjectileEntityHitAction): $PotatoCannonProjectileType$Builder;
        onEntityHit(arg0: $PotatoProjectileEntityHitAction): $PotatoCannonProjectileType$Builder;
        renderTumbling(): $PotatoCannonProjectileType$Builder;
        renderTowardMotion(arg0: number, arg1: number): $PotatoCannonProjectileType$Builder;
        splitInto(arg0: number): $PotatoCannonProjectileType$Builder;
        renderBillboard(): $PotatoCannonProjectileType$Builder;
        constructor();
    }
}
