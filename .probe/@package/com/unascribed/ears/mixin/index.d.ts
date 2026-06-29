import { $HumanoidModel } from "@package/net/minecraft/client/model";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEntity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/unascribed/ears/mixin" {
    export class $AccessorLivingEntityRenderer {
    }
    export interface $AccessorLivingEntityRenderer {
        ears$getLayers(): $List<$RenderLayer<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorLivingEntityRenderer}.
     */
    export type $AccessorLivingEntityRenderer_ = (() => $List_<$RenderLayer<never, never>>);
    export class $AccessorHumanoidArmorLayer<T extends $LivingEntity, A extends $HumanoidModel<T>> {
    }
    export interface $AccessorHumanoidArmorLayer<T extends $LivingEntity, A extends $HumanoidModel<T>> {
        ears$getBodyModel(): $HumanoidModel<never>;
        ears$getArmor(arg0: $EquipmentSlot_): $HumanoidModel<never>;
        ears$getLeggingsModel(): $HumanoidModel<never>;
        ears$usesSecondLayer(arg0: $EquipmentSlot_): boolean;
        ears$renderArmorParts(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: A, arg4: number, arg5: $ResourceLocation_): void;
    }
    export class $AccessorPlayerModel {
    }
    export interface $AccessorPlayerModel {
        ears$isSlim(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AccessorPlayerModel}.
     */
    export type $AccessorPlayerModel_ = (() => boolean);
}
