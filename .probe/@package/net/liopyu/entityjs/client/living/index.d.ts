import { $EntityRenderDispatcher, $EntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/entity";
import { $RenderType, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $BaseLivingEntityBuilder } from "@package/net/liopyu/entityjs/builders/living";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $CustomEntityJSBuilder } from "@package/net/liopyu/entityjs/builders/misc";
import { $BakedGeoModel_ } from "@package/software/bernie/geckolib/cache/object";
import { $GeoEntityRenderer } from "@package/software/bernie/geckolib/renderer";
export * as model from "@package/net/liopyu/entityjs/client/living/model";

declare module "@package/net/liopyu/entityjs/client/living" {
    export class $CustomKubeJSEntityRenderer<T extends $LivingEntity> extends $GeoEntityRenderer<T> {
        entityName(): string;
        render(arg0: T, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        getRenderType(arg0: T, arg1: $ResourceLocation_, arg2: $MultiBufferSource_ | null, arg3: number): $RenderType;
        getTextureLocation(arg0: T): $ResourceLocation;
        scaleModelForRender(arg0: number, arg1: number, arg2: $PoseStack, arg3: T, arg4: $BakedGeoModel_, arg5: boolean, arg6: number, arg7: number, arg8: number): void;
        getScaleWidth(): number;
        getScaleHeight(): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $CustomEntityJSBuilder);
        get scaleWidth(): number;
        get scaleHeight(): number;
    }
    export class $KubeJSEntityRenderer<T extends $LivingEntity> extends $GeoEntityRenderer<T> {
        entityName(): string;
        render(arg0: T, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        getRenderType(arg0: T, arg1: $ResourceLocation_, arg2: $MultiBufferSource_ | null, arg3: number): $RenderType;
        getTextureLocation(arg0: T): $ResourceLocation;
        scaleModelForRender(arg0: number, arg1: number, arg2: $PoseStack, arg3: T, arg4: $BakedGeoModel_, arg5: boolean, arg6: number, arg7: number, arg8: number): void;
        getScaleWidth(): number;
        getScaleHeight(): number;
        renderFinal(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: $VertexConsumer, arg5: number, arg6: number, arg7: number, arg8: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $BaseLivingEntityBuilder<T>);
        get scaleWidth(): number;
        get scaleHeight(): number;
    }
}
