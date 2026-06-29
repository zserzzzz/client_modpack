import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $RenderType, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $BaseEntityBuilder } from "@package/net/liopyu/entityjs/builders/nonliving";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $GeoRenderLayer, $AutoGlowingGeoLayer } from "@package/software/bernie/geckolib/renderer/layer";
import { $BakedGeoModel_ } from "@package/software/bernie/geckolib/cache/object";
import { $Object } from "@package/java/lang";
import { $KubeJSNLEntityRenderer } from "@package/net/liopyu/entityjs/client/nonliving";
import { $ContextUtils$PreRenderContext } from "@package/net/liopyu/entityjs/util";

declare module "@package/net/liopyu/entityjs/client/nonliving/model" {
    export class $NLGeoLayerJSBuilder<T extends $Entity> {
        /**
         * Sets the render type for the entity's layer via a function.
         * 
         * Example usage:
         * ```javascript
         * builder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", outlineEntityBoolean));
         * ```
         */
        renderType(arg0: $Function_<T, $RenderType>): $NLGeoLayerJSBuilder<T>;
        build(arg0: $KubeJSNLEntityRenderer<T>, arg1: $BaseEntityBuilder<T>): $NLGeoLayerJS<T>;
        /**
         * Defines logic to preRender the newGeoLayer.
         * 
         * Example usage:
         * ```javascript
         * geoBuilder.preRender(context => {
         *     // Define logic to render the newGeoLayer
         *     if (context.entity.isBaby()) {
         *         context.poseStack.scale(0.5, 0.5, 0.5);
         *     }
         * });
         * ```
         */
        preRender(arg0: $Consumer_<$ContextUtils$PreRenderContext<T>>): $NLGeoLayerJSBuilder<T>;
        /**
         * Defines logic to render the newGeoLayer.
         * By default this will render the flat texture set in textureResource
         * onto the entity as an overlay. This method overrides the render method completely
         * allowing scripters to define their own render logic.
         * 
         * Example usage:
         * ```javascript
         * geoBuilder.render(context => {
         *     // Define logic to render the newGeoLayer
         *     if (context.entity.isBaby()) {
         *         context.poseStack.scale(0.5, 0.5, 0.5);
         *     }
         * });
         * ```
         */
        render(arg0: $Consumer_<$ContextUtils$PreRenderContext<T>>): $NLGeoLayerJSBuilder<T>;
        getBuilder(): $BaseEntityBuilder<T>;
        /**
         * Sets a function to determine the texture resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the texture based on information about the entity.
         * The default behavior returns <namespace>:textures/entity/<path>.png.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.textureResource(entity => {
         *     // Define logic to determine the texture resource for the entity
         *     // Use information about the entity provided by the context.
         *     return "kubejs:textures/entity/wyrm.png" // Some ResourceLocation representing the texture resource;
         * });
         * ```
         */
        textureResource(arg0: $Function_<T, $Object>): $NLGeoLayerJSBuilder<T>;
        buildGlowing(arg0: $KubeJSNLEntityRenderer<T>, arg1: $BaseEntityBuilder<T>): $NLGlowingGeoLayerJS<T>;
        /**
         * Sets the render type for the entity's layer.
         * 
         * Example usage:
         * ```javascript
         * builder.setRenderType(RenderType.entityCutoutNoCull("kubejs:path/to/texture", true));
         * ```
         */
        setRenderType(arg0: $RenderType): $NLGeoLayerJSBuilder<T>;
        builder: $BaseEntityBuilder<T>;
        constructor(arg0: $BaseEntityBuilder<T>);
    }
    export class $NLGeoLayerJS<T extends $Entity> extends $GeoRenderLayer<T> {
        entityName(): string;
        preRender(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        render(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        geoBuilder: $NLGeoLayerJSBuilder<T>;
        renderer: $KubeJSNLEntityRenderer<T>;
        builder: $BaseEntityBuilder<T>;
        entity: T;
        constructor(arg0: $KubeJSNLEntityRenderer<T>, arg1: $NLGeoLayerJSBuilder<T>, arg2: $BaseEntityBuilder<T>);
    }
    export class $NLGlowingGeoLayerJS<T extends $Entity> extends $AutoGlowingGeoLayer<T> {
        entityName(): string;
        preRender(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        render(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        geoBuilder: $NLGeoLayerJSBuilder<T>;
        renderer: $KubeJSNLEntityRenderer<T>;
        builder: $BaseEntityBuilder<T>;
        entity: T;
        constructor(arg0: $KubeJSNLEntityRenderer<T>, arg1: $NLGeoLayerJSBuilder<T>, arg2: $BaseEntityBuilder<T>);
    }
}
