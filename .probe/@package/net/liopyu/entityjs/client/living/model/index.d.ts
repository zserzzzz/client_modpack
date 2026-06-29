import { $Consumer_, $Function_, $Function } from "@package/java/util/function";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $CustomKubeJSEntityRenderer, $KubeJSEntityRenderer } from "@package/net/liopyu/entityjs/client/living";
import { $BaseLivingEntityBuilder } from "@package/net/liopyu/entityjs/builders/living";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $EquipmentSlot, $LivingEntity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $GeoRenderLayer, $AutoGlowingGeoLayer } from "@package/software/bernie/geckolib/renderer/layer";
import { $CustomEntityJSBuilder } from "@package/net/liopyu/entityjs/builders/misc";
import { $BakedGeoModel_ } from "@package/software/bernie/geckolib/cache/object";
import { $Object } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
import { $ContextUtils$ItemBoneRenderContext, $ContextUtils$VanillaArmorRenderContext, $ContextUtils$PreRenderContext, $ContextUtils$RenderBoneContext } from "@package/net/liopyu/entityjs/util";

declare module "@package/net/liopyu/entityjs/client/living/model" {
    export class $CustomGlowingGeoLayerJS<T extends $LivingEntity> extends $AutoGlowingGeoLayer<T> {
        entityName(): string;
        preRender(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        render(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        geoBuilder: $CustomGeoLayerJSBuilder<T>;
        renderer: $CustomKubeJSEntityRenderer<T>;
        builder: $CustomEntityJSBuilder;
        entity: T;
        constructor(arg0: $CustomKubeJSEntityRenderer<T>, arg1: $CustomGeoLayerJSBuilder<T>, arg2: $CustomEntityJSBuilder);
    }
    export class $ItemModelJSBuilder<T extends $LivingEntity> {
        /**
         * A Consumer determining custom rendering logic for an item on a model bone.
         * 
         * Example usage:
         * ```javascript
         * itemBuilder.render(context => {
         *     let {
         *         poseStack,
         *         bone,
         *         item,
         *         entity,
         *         bufferSource,
         *         partialTick,
         *         packedLight,
         *         packedOverlay
         *     } = context
         * 
         *     if (bone.name == "right_hand") {
         *         poseStack.translate(0.1, 0.2, -0.05)
         *         poseStack.scale(1.5, 1.5, 1.5)
         *     }
         * })
         * ```
         */
        renderItem(arg0: $Consumer_<$ContextUtils$ItemBoneRenderContext<T>>): $ItemModelJSBuilder<T>;
        constructor();
    }
    export class $GeoLayerJS<T extends $LivingEntity> extends $GeoRenderLayer<T> {
        entityName(): string;
        preRender(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        render(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        geoBuilder: $GeoLayerJSBuilder<T>;
        renderer: $KubeJSEntityRenderer<T>;
        builder: $BaseLivingEntityBuilder<T>;
        entity: T;
        constructor(arg0: $KubeJSEntityRenderer<T>, arg1: $GeoLayerJSBuilder<T>, arg2: $BaseLivingEntityBuilder<T>);
    }
    export class $GlowingGeoLayerJS<T extends $LivingEntity> extends $AutoGlowingGeoLayer<T> {
        entityName(): string;
        preRender(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        render(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        geoBuilder: $GeoLayerJSBuilder<T>;
        renderer: $KubeJSEntityRenderer<T>;
        builder: $BaseLivingEntityBuilder<T>;
        entity: T;
        constructor(arg0: $KubeJSEntityRenderer<T>, arg1: $GeoLayerJSBuilder<T>, arg2: $BaseLivingEntityBuilder<T>);
    }
    export class $CustomGeoLayerJSBuilder<T extends $LivingEntity> {
        build(arg0: $CustomKubeJSEntityRenderer<T>, arg1: $CustomEntityJSBuilder): $CustomGeoLayerJS<T>;
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
        preRender(arg0: $Consumer_<$ContextUtils$PreRenderContext<T>>): $CustomGeoLayerJSBuilder<T>;
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
        render(arg0: $Consumer_<$ContextUtils$PreRenderContext<T>>): $CustomGeoLayerJSBuilder<T>;
        getBuilder(): $CustomEntityJSBuilder;
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
        textureResource(arg0: $Function_<T, $Object>): $CustomGeoLayerJSBuilder<T>;
        buildGlowing(arg0: $CustomKubeJSEntityRenderer<T>, arg1: $CustomEntityJSBuilder): $CustomGlowingGeoLayerJS<T>;
        builder: $CustomEntityJSBuilder;
        constructor(arg0: $CustomEntityJSBuilder);
    }
    export class $CustomGeoLayerJS<T extends $LivingEntity> extends $GeoRenderLayer<T> {
        entityName(): string;
        preRender(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        render(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        geoBuilder: $CustomGeoLayerJSBuilder<T>;
        renderer: $CustomKubeJSEntityRenderer<T>;
        builder: $CustomEntityJSBuilder;
        entity: T;
        constructor(arg0: $CustomKubeJSEntityRenderer<T>, arg1: $CustomGeoLayerJSBuilder<T>, arg2: $CustomEntityJSBuilder);
    }
    export class $ItemArmorJSBuilder<T extends $LivingEntity> {
        /**
         * A Consumer controlling custom rendering logic for a vanilla armor piece on a model bone.
         * 
         * Example usage:
         * ```javascript
         * armorBuilder.renderArmor(context => {
         *     let {
         *         poseStack,
         *         bone,
         *         slot,
         *         armorStack,
         *         modelPart,
         *         entity,
         *         bufferSource,
         *         partialTick,
         *         packedLight,
         *         packedOverlay
         *     } = context
         * 
         *     if (bone.name === "left_leg") {
         *         poseStack.translate(0.1, 0.0, 0.0)
         *         poseStack.scale(1.2, 1.2, 1.2)
         *     }
         * })
         * ```
         */
        renderArmor(arg0: $Consumer_<$ContextUtils$VanillaArmorRenderContext<T>>): $ItemArmorJSBuilder<T>;
        setFeetArmorBone(arg0: $Function_<T, string>): $ItemArmorJSBuilder<T>;
        setLegArmorBone(arg0: $Function_<T, string>): $ItemArmorJSBuilder<T>;
        withArmorItemLayer(arg0: $Function_<T, boolean>): $ItemArmorJSBuilder<T>;
        setChestArmorBone(arg0: $Function_<T, string>): $ItemArmorJSBuilder<T>;
        setHeadArmorBone(arg0: $Function_<T, string>): $ItemArmorJSBuilder<T>;
        /**
         * A Consumer determining custom rendering logic for an armor model bone.
         * 
         * This runs during the armor rendering pass, allowing you to manipulate specific armor bones —
         * for example, applying dynamic offsets or transformations per bone before rendering.
         * 
         * Example usage:
         * ```javascript
         * armorBuilder.renderBone(context => {
         *     let {
         *         poseStack,
         *         bone,
         *         entity,
         *         partialTick,
         *         bufferSource,
         *         packedLight,
         *         packedOverlay
         *     } = context
         * 
         *     if (bone.name == "helmet") {
         *         poseStack.translate(0, 0.05, 0)
         *         poseStack.scale(1.1, 1.1, 1.1)
         *     }
         * })
         * ```
         */
        renderBone(arg0: $Consumer_<$ContextUtils$RenderBoneContext<T>>): $ItemArmorJSBuilder<T>;
        setLeftLegArmorBone(arg0: $Function_<T, string>): $ItemArmorJSBuilder<T>;
        setRightFootArmorBone(arg0: $Function_<T, string>): $ItemArmorJSBuilder<T>;
        setOffhandArmorBone(arg0: $Function_<T, string>): $ItemArmorJSBuilder<T>;
        setRightShoulderArmorBone(arg0: $Function_<T, string>): $ItemArmorJSBuilder<T>;
        withArmorBoneMapping(arg0: $Map_<string, $EquipmentSlot_>): $ItemArmorJSBuilder<T>;
        setLeftFootArmorBone(arg0: $Function_<T, string>): $ItemArmorJSBuilder<T>;
        setRightLegArmorBone(arg0: $Function_<T, string>): $ItemArmorJSBuilder<T>;
        setMainHandArmorBone(arg0: $Function_<T, string>): $ItemArmorJSBuilder<T>;
        setLeftShoulderArmorBone(arg0: $Function_<T, string>): $ItemArmorJSBuilder<T>;
        armorBoneToSlotMap: $Map<string, $EquipmentSlot>;
        addArmorItemLayer: $Function<T, boolean>;
        entity: T;
        constructor(arg0: T);
        set feetArmorBone(value: $Function_<T, string>);
        set legArmorBone(value: $Function_<T, string>);
        set chestArmorBone(value: $Function_<T, string>);
        set headArmorBone(value: $Function_<T, string>);
        set leftLegArmorBone(value: $Function_<T, string>);
        set rightFootArmorBone(value: $Function_<T, string>);
        set offhandArmorBone(value: $Function_<T, string>);
        set rightShoulderArmorBone(value: $Function_<T, string>);
        set leftFootArmorBone(value: $Function_<T, string>);
        set rightLegArmorBone(value: $Function_<T, string>);
        set mainHandArmorBone(value: $Function_<T, string>);
        set leftShoulderArmorBone(value: $Function_<T, string>);
    }
    export class $GeoLayerJSBuilder<T extends $LivingEntity> {
        /**
         * Sets the render type for the entity's layer via a function.
         * 
         * Example usage:
         * ```javascript
         * builder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", outlineEntityBoolean));
         * ```
         */
        renderType(arg0: $Function_<T, $RenderType>): $GeoLayerJSBuilder<T>;
        build(arg0: $KubeJSEntityRenderer<T>, arg1: $BaseLivingEntityBuilder<T>): $GeoLayerJS<T>;
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
        preRender(arg0: $Consumer_<$ContextUtils$PreRenderContext<T>>): $GeoLayerJSBuilder<T>;
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
        render(arg0: $Consumer_<$ContextUtils$PreRenderContext<T>>): $GeoLayerJSBuilder<T>;
        getBuilder(): $BaseLivingEntityBuilder<T>;
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
        textureResource(arg0: $Function_<T, $Object>): $GeoLayerJSBuilder<T>;
        buildGlowing(arg0: $KubeJSEntityRenderer<T>, arg1: $BaseLivingEntityBuilder<T>): $GlowingGeoLayerJS<T>;
        /**
         * Sets the render type for the entity's layer.
         * 
         * Example usage:
         * ```javascript
         * builder.setRenderType(RenderType.entityCutoutNoCull("kubejs:path/to/texture", true));
         * ```
         */
        setRenderType(arg0: $RenderType): $GeoLayerJSBuilder<T>;
        builder: $BaseLivingEntityBuilder<T>;
        constructor(arg0: $BaseLivingEntityBuilder<T>);
    }
}
