import { $BiFunction_ } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $GeoModel } from "@package/software/bernie/geckolib/model";
import { $RenderType, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $BakedGeoModel_, $GeoBone, $BakedGeoModel } from "@package/software/bernie/geckolib/cache/object";
import { $GeoAnimatable } from "@package/software/bernie/geckolib/animatable";
import { $GeoRenderer } from "@package/software/bernie/geckolib/renderer";

declare module "@package/software/bernie/geckolib/renderer/layer" {
    export class $AutoGlowingGeoLayer<T extends $GeoAnimatable> extends $GeoRenderLayer<T> {
        constructor(arg0: $GeoRenderer<T>);
    }
    export class $ItemArmorGeoLayer<T extends $LivingEntity> extends $GeoRenderLayer<T> {
        renderForBone(arg0: $PoseStack, arg1: T, arg2: $GeoBone, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        preRender(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        constructor(arg0: $GeoRenderer<T>);
    }
    export class $GeoRenderLayer<T extends $GeoAnimatable> {
        getRenderer(): $GeoRenderer<T>;
        render(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        renderForBone(arg0: $PoseStack, arg1: T, arg2: $GeoBone, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        getGeoModel(): $GeoModel<T>;
        preRender(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        getDefaultBakedModel(arg0: T): $BakedGeoModel;
        constructor(arg0: $GeoRenderer<T>);
        get renderer(): $GeoRenderer<T>;
        get geoModel(): $GeoModel<T>;
    }
    export class $BlockAndItemGeoLayer<T extends $GeoAnimatable> extends $GeoRenderLayer<T> {
        constructor(arg0: $GeoRenderer<T>);
        constructor(arg0: $GeoRenderer<T>, arg1: $BiFunction_<$GeoBone, T, $ItemStack>, arg2: $BiFunction_<$GeoBone, T, $BlockState>);
    }
}
