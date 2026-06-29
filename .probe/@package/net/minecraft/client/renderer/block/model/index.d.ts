import { $JsonDeserializationContext_, $JsonObject_, $JsonDeserializer, $Gson, $JsonElement_ } from "@package/com/google/gson";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $BlockModelRotation, $ModelState, $BakedModel, $ModelBaker, $Material, $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Map_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $IAcceleratedVertexConsumer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";
import { $ExtendedUnbakedModel, $CullShapeElement } from "@package/ca/fxco/moreculling/api/model";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Function_ } from "@package/java/util/function";
import { $Direction$Axis_, $Direction_, $Direction$Axis, $Direction } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IAcceleratedBakedQuad } from "@package/com/github/argon4w/acceleratedrendering/features/items";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Type } from "@package/java/lang/reflect";
import { $BakedQuadView } from "@package/net/caffeinemc/mods/sodium/client/model/quad";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $SpriteContents, $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $RuntimeException } from "@package/java/lang";
import { $IExtendedBlockElementRotation } from "@package/net/mehvahdjukaar/polytone/utils";
import { $Reader } from "@package/java/io";
import { $BlockGeometryBakingContext } from "@package/net/neoforged/neoforge/client/model/geometry";
import { $ItemStack_, $ItemDisplayContext_, $ItemDisplayContext } from "@package/net/minecraft/world/item";
import { $QuadOpacity } from "@package/ca/fxco/moreculling/api/quad";
import { $ImmutableList, $ImmutableMap } from "@package/com/google/common/collect";
import { $MultiPart } from "@package/net/minecraft/client/renderer/block/model/multipart";
import { $Stream } from "@package/java/util/stream";
import { $ExtraFaceData, $ExtraFaceData_ } from "@package/net/neoforged/neoforge/client/model";
import { $BakedQuadAccess } from "@package/malte0811/ferritecore/mixin/accessors";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Transformation } from "@package/com/mojang/math";
import { $Matrix4f, $Vector3f, $Matrix3f, $Vector3fc, $Quaternionf } from "@package/org/joml";
export * as multipart from "@package/net/minecraft/client/renderer/block/model/multipart";

declare module "@package/net/minecraft/client/renderer/block/model" {
    export class $BlockElement {
        uvsByFace(face: $Direction_): number[];
        getFaceData(): $ExtraFaceData;
        setFaceData(arg0: $ExtraFaceData_): void;
        rotation: $BlockElementRotation;
        shade: boolean;
        from: $Vector3f;
        to: $Vector3f;
        faces: $Map<$Direction, $BlockElementFace>;
        constructor(from: $Vector3f, to: $Vector3f, faces: $Map_<$Direction_, $BlockElementFace_>, rotation: $BlockElementRotation_ | null, shade: boolean);
        constructor(arg0: $Vector3f, arg1: $Vector3f, arg2: $Map_<$Direction_, $BlockElementFace_>, arg3: $BlockElementRotation_ | null, arg4: boolean, arg5: $ExtraFaceData_);
    }
    export class $BlockFaceUV {
        getU(index: number): number;
        getV(index: number): number;
        getReverseIndex(index: number): number;
        setMissingUv(uvs: number[]): void;
        uvs: number[];
        rotation: number;
        constructor(uvs: number[] | null, rotation: number);
        set missingUv(value: number[]);
    }
    export class $FaceBakery {
        bakeQuad(posFrom: $Vector3f, posTo: $Vector3f, face: $BlockElementFace_, sprite: $TextureAtlasSprite, facing: $Direction_, transform: $ModelState, rotation: $BlockElementRotation_ | null, shade: boolean): $BakedQuad;
        wrapOperation$dhb000$polytone$unRestrictRotationAngle(instance: $Quaternionf, angle: number, axis: $Vector3fc, original: $Operation_<any>, partRotation: $BlockElementRotation_): $Quaternionf;
        wrapWithCondition$dhb000$polytone$poly$allowArbitraryRot(instance: $FaceBakery, vertices: number[], direction: $Direction_, transform: $ModelState, partRotation: $BlockElementRotation_): boolean;
        static calculateFacing(faceData: number[]): $Direction;
        applyModelRotation(pos: $Vector3f, transform: $Transformation): void;
        static recomputeUVs(uv: $BlockFaceUV, facing: $Direction_, rotation: $Transformation): $BlockFaceUV;
        wrapOperation$dhb000$polytone$unRestrictRotationAngle$mixinextras$bridge$15(instance: $Quaternionf, angle: number, axis: $Vector3fc, original: $Operation_<any>, partRotation: $LocalRef<any>): $Quaternionf;
        static VERTEX_INT_SIZE: number;
        static UV_INDEX: number;
        static VERTEX_COUNT: number;
        constructor();
    }
    export class $ItemOverride$Predicate {
        getProperty(): $ResourceLocation;
        getValue(): number;
        constructor(property: $ResourceLocation_, value: number);
        get property(): $ResourceLocation;
        get value(): number;
    }
    export class $BlockModel$GuiLight extends $Enum<$BlockModel$GuiLight> {
        static values(): $BlockModel$GuiLight[];
        static valueOf(name: string): $BlockModel$GuiLight;
        static getByName(name: string): $BlockModel$GuiLight;
        getSerializedName(): string;
        lightLikeBlock(): boolean;
        static SIDE: $BlockModel$GuiLight;
        static FRONT: $BlockModel$GuiLight;
        get serializedName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlockModel$GuiLight}.
     */
    export type $BlockModel$GuiLight_ = "front" | "side";
    export class $BakedQuad implements $IAcceleratedBakedQuad, $BakedQuadView, $QuadOpacity, $BakedQuadAccess {
        getFlags(): number;
        getY(arg0: number): number;
        getColorIndex(): number;
        getVertexNormal(arg0: number): number;
        getLightFace(): $Direction;
        getFaceNormal(): number;
        getTintIndex(): number;
        getDirection(): $Direction;
        moreculling$resetTranslucencyCache(): void;
        getZ(arg0: number): number;
        getX(arg0: number): number;
        getNormalFace(): $ModelQuadFacing;
        getVertices(): number[];
        getColor(arg0: number): number;
        isTinted(): boolean;
        getTexV(arg0: number): number;
        getTexU(arg0: number): number;
        hasAmbientOcclusion(): boolean;
        moreculling$getTextureTranslucency(): boolean;
        getLight(arg0: number): number;
        getSprite(): $TextureAtlasSprite;
        getCustomColor(arg0: number): number;
        isShade(): boolean;
        renderFast(arg0: $Matrix4f, arg1: $Matrix3f, arg2: $IAcceleratedVertexConsumer, arg3: number, arg4: number, arg5: number): void;
        hasAO(): boolean;
        hasShade(): boolean;
        calculateNormal(): number;
        getAccurateNormal(arg0: number): number;
        hasColor(): boolean;
        setVertices(arg0: number[]): void;
        tintIndex: number;
        vertices: number[];
        sprite: $TextureAtlasSprite;
        direction: $Direction;
        constructor(vertices: number[], tintIndex: number, direction: $Direction_, sprite: $TextureAtlasSprite, shade: boolean);
        constructor(arg0: number[], arg1: number, arg2: $Direction_, arg3: $TextureAtlasSprite, arg4: boolean, arg5: boolean);
        get flags(): number;
        get colorIndex(): number;
        get lightFace(): $Direction;
        get faceNormal(): number;
        get normalFace(): $ModelQuadFacing;
        get tinted(): boolean;
        get shade(): boolean;
    }
    export class $ItemOverride$Deserializer implements $JsonDeserializer<$ItemOverride> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $ItemOverride;
        getPredicates(json: $JsonObject_): $List<$ItemOverride$Predicate>;
        constructor();
    }
    export class $ItemTransforms {
        getTransform(displayContext: $ItemDisplayContext_): $ItemTransform;
        hasTransform(displayContext: $ItemDisplayContext_): boolean;
        static NO_TRANSFORMS: $ItemTransforms;
        head: $ItemTransform;
        firstPersonLeftHand: $ItemTransform;
        moddedTransforms: $ImmutableMap<$ItemDisplayContext, $ItemTransform>;
        firstPersonRightHand: $ItemTransform;
        thirdPersonRightHand: $ItemTransform;
        thirdPersonLeftHand: $ItemTransform;
        gui: $ItemTransform;
        ground: $ItemTransform;
        fixed: $ItemTransform;
        constructor(arg0: $ItemTransform, arg1: $ItemTransform, arg2: $ItemTransform, arg3: $ItemTransform, arg4: $ItemTransform, arg5: $ItemTransform, arg6: $ItemTransform, arg7: $ItemTransform, arg8: $ImmutableMap<$ItemDisplayContext_, $ItemTransform>);
        /**
         * @deprecated
         */
        constructor(thirdPersonLeftHand: $ItemTransform, thirdPersonRightHand: $ItemTransform, firstPersonLeftHand: $ItemTransform, firstPersonRightHand: $ItemTransform, head: $ItemTransform, gui: $ItemTransform, ground: $ItemTransform, fixed: $ItemTransform);
        constructor(transforms: $ItemTransforms);
    }
    export class $BlockModel$LoopException extends $RuntimeException {
        constructor(message: string);
    }
    export class $ItemOverride {
        /**
         * @return the location of the target model
         */
        getModel(): $ResourceLocation;
        getPredicates(): $Stream<$ItemOverride$Predicate>;
        constructor(model: $ResourceLocation_, predicates: $List_<$ItemOverride$Predicate>);
        get model(): $ResourceLocation;
        get predicates(): $Stream<$ItemOverride$Predicate>;
    }
    export class $BlockModel$Deserializer implements $JsonDeserializer<$BlockModel> {
        getOverrides(context: $JsonDeserializationContext_, json: $JsonObject_): $List<$ItemOverride>;
        getElements(context: $JsonDeserializationContext_, json: $JsonObject_): $List<$BlockElement>;
        getAmbientOcclusion(json: $JsonObject_): boolean;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $BlockModel;
        constructor();
    }
    export class $BlockModel implements $UnbakedModel, $ExtendedUnbakedModel {
        getDependencies(): $Collection<$ResourceLocation>;
        isResolved(): boolean;
        static fromStream(reader: $Reader): $BlockModel;
        static fromString(jsonString: string): $BlockModel;
        getTransforms(): $ItemTransforms;
        getOverrides(): $List<$ItemOverride>;
        getOverrides(arg0: $ModelBaker, arg1: $BlockModel, arg2: $Function_<$Material, $TextureAtlasSprite>): $ItemOverrides;
        /**
         * @deprecated
         */
        getElements(): $List<$BlockElement>;
        hasAmbientOcclusion(): boolean;
        static bakeFace(element: $BlockElement, face: $BlockElementFace_, sprite: $TextureAtlasSprite, facing: $Direction_, state: $ModelState): $BakedQuad;
        getMaterial(name: string): $Material;
        bake(baker: $ModelBaker, model: $BlockModel, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState, guiLight3d: boolean): $BakedModel;
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        hasTexture(textureName: string): boolean;
        getParentLocation(): $ResourceLocation;
        moreculling$setUseModelShape(arg0: boolean): void;
        moreculling$getCullShapeElements(arg0: $ResourceLocation_): $List<any>;
        moreculling$getUseModelShape(arg0: $ResourceLocation_): boolean;
        moreculling$modifyElementFace(arg0: $BlockElementFace_): $BlockElementFace;
        moreculling$setCullShapeElements(arg0: $List_<any>): void;
        static isTextureReference(textureName: string): boolean;
        bakeVanilla(baker: $ModelBaker, model: $BlockModel, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState, guiLight3d: boolean): $BakedModel;
        getGuiLight(): $BlockModel$GuiLight;
        getRootModel(): $BlockModel;
        resolveParents(resolver: $Function_<$ResourceLocation, $UnbakedModel>): void;
        parent: $BlockModel;
        parentLocation: $ResourceLocation;
        textureMap: $Map<string, $Either<$Material, string>>;
        static PARTICLE_TEXTURE_REFERENCE: string;
        name: string;
        static GSON: $Gson;
        customData: $BlockGeometryBakingContext;
        constructor(parentLocation: $ResourceLocation_ | null, elements: $List_<$BlockElement>, textureMap: $Map_<string, $Either<$Material, string>>, hasAmbientOcclusion: boolean | null, guiLight: $BlockModel$GuiLight_ | null, transforms: $ItemTransforms, overrides: $List_<$ItemOverride>);
        get dependencies(): $Collection<$ResourceLocation>;
        get resolved(): boolean;
        get transforms(): $ItemTransforms;
        get elements(): $List<$BlockElement>;
        get guiLight(): $BlockModel$GuiLight;
        get rootModel(): $BlockModel;
    }
    export class $ItemModelGenerator$SpanFacing extends $Enum<$ItemModelGenerator$SpanFacing> {
    }
    /**
     * Values that may be interpreted as {@link $ItemModelGenerator$SpanFacing}.
     */
    export type $ItemModelGenerator$SpanFacing_ = "up" | "down" | "left" | "right";
    export class $ItemTransform {
        apply(leftHand: boolean, poseStack: $PoseStack): void;
        handler$iio000$flerovium$apply(arg0: boolean, arg1: $PoseStack, arg2: $CallbackInfo): void;
        handler$iio000$flerovium$init(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f, arg3: $Vector3f, arg4: $CallbackInfo): void;
        flerovium$sinX: number;
        flerovium$sinY: number;
        static NO_TRANSFORM: $ItemTransform;
        flerovium$scaleSameAndPositive: boolean;
        rotation: $Vector3f;
        scale: $Vector3f;
        flerovium$noRightRot: boolean;
        translation: $Vector3f;
        flerovium$noRot: boolean;
        flerovium$cosX: number;
        flerovium$cosY: number;
        flerovium$noTrans: boolean;
        rightRotation: $Vector3f;
        constructor(rotation: $Vector3f, translation: $Vector3f, scale: $Vector3f);
        constructor(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f, arg3: $Vector3f);
    }
    export class $BlockModelDefinition {
        isMultiPart(): boolean;
        getMultiPart(): $MultiPart;
        getVariant(key: string): $MultiVariant;
        getVariants(): $Map<string, $MultiVariant>;
        static fromStream(context: $BlockModelDefinition$Context, reader: $Reader): $BlockModelDefinition;
        static fromJsonElement(context: $BlockModelDefinition$Context, json: $JsonElement_): $BlockModelDefinition;
        hasVariant(key: string): boolean;
        getMultiVariants(): $Set<$MultiVariant>;
        constructor(modelDefinitions: $List_<$BlockModelDefinition>);
        constructor(variants: $Map_<string, $MultiVariant>, multiPart: $MultiPart);
        get variants(): $Map<string, $MultiVariant>;
        get multiVariants(): $Set<$MultiVariant>;
    }
    export class $ItemModelGenerator {
        processFrames(tintIndex: number, texture: string, sprite: $SpriteContents): $List<$BlockElement>;
        generateBlockModel(spriteGetter: $Function_<$Material, $TextureAtlasSprite>, model: $BlockModel): $BlockModel;
        static LAYERS: $List<string>;
        constructor();
    }
    export class $MultiVariant$Deserializer implements $JsonDeserializer<$MultiVariant> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $MultiVariant;
        constructor();
    }
    export class $BlockElementFace$Deserializer implements $JsonDeserializer<$BlockElementFace> {
        getTintIndex(json: $JsonObject_): number;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $BlockElementFace;
        constructor();
    }
    export class $BlockElementFace extends $Record {
        uv(): $BlockFaceUV;
        texture(): string;
        parent(): $MutableObject<$BlockElement>;
        tintIndex(): number;
        faceData(): $ExtraFaceData;
        cullForDirection(): $Direction;
        static NO_TINT: number;
        constructor(cullForDirection: $Direction_ | null, tintIndex: number, texture: string, uv: $BlockFaceUV);
        constructor(cullForDirection: $Direction_ | null, tintIndex: number, texture: string, uv: $BlockFaceUV, faceData: $ExtraFaceData_ | null, parent: $MutableObject<$BlockElement>);
    }
    /**
     * Values that may be interpreted as {@link $BlockElementFace}.
     */
    export type $BlockElementFace_ = { uv?: $BlockFaceUV, tintIndex?: number, parent?: $MutableObject<$BlockElement>, texture?: string, cullForDirection?: $Direction_, faceData?: $ExtraFaceData_,  } | [uv?: $BlockFaceUV, tintIndex?: number, parent?: $MutableObject<$BlockElement>, texture?: string, cullForDirection?: $Direction_, faceData?: $ExtraFaceData_, ];
    export class $ItemModelGenerator$Span {
    }
    export class $MultiVariant implements $UnbakedModel {
        getDependencies(): $Collection<$ResourceLocation>;
        getVariants(): $List<$Variant>;
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        resolveParents(resolver: $Function_<any, any>): void;
        moreculling$setUseModelShape(arg0: boolean): void;
        moreculling$getCullShapeElements(arg0: $ResourceLocation_): $List<$CullShapeElement>;
        moreculling$getUseModelShape(arg0: $ResourceLocation_): boolean;
        moreculling$setCullShapeElements(variants: $List_<$CullShapeElement>): void;
        constructor(variants: $List_<$Variant>);
        get dependencies(): $Collection<$ResourceLocation>;
        get variants(): $List<$Variant>;
    }
    export class $ItemOverrides$BakedOverride {
        test(properties: number[]): boolean;
        model: $BakedModel;
        constructor(matchers: $ItemOverrides$PropertyMatcher[], model: $BakedModel | null);
    }
    export class $BlockModelDefinition$Deserializer implements $JsonDeserializer<$BlockModelDefinition> {
        getMultiPart(context: $JsonDeserializationContext_, json: $JsonObject_): $MultiPart;
        getVariants(context: $JsonDeserializationContext_, json: $JsonObject_): $Map<string, $MultiVariant>;
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $BlockModelDefinition;
        constructor();
    }
    export class $ItemOverrides$PropertyMatcher {
    }
    export class $ItemOverrides {
        resolve(model: $BakedModel, stack: $ItemStack_, level: $ClientLevel | null, entity: $LivingEntity | null, seed: number): $BakedModel;
        getOverrides(): $ImmutableList<$ItemOverrides$BakedOverride>;
        static NO_OVERRIDE: number;
        static EMPTY: $ItemOverrides;
        constructor(arg0: $ModelBaker, arg1: $UnbakedModel, arg2: $List_<$ItemOverride>, arg3: $Function_<$Material, $TextureAtlasSprite>);
        /**
         * @deprecated
         */
        constructor(baker: $ModelBaker, model: $BlockModel, overrides: $List_<$ItemOverride>);
        constructor();
        get overrides(): $ImmutableList<$ItemOverrides$BakedOverride>;
    }
    export class $BlockModelDefinition$MissingVariantException extends $RuntimeException {
    }
    export class $Variant$Deserializer implements $JsonDeserializer<$Variant> {
        getModel(json: $JsonObject_): $ResourceLocation;
        getWeight(json: $JsonObject_): number;
        wrapOperation$dih000$polytone$addTranslation(modelLocation: $ResourceLocation_, rotation: $Transformation, uvLock: boolean, weight: number, op: $Operation_<any>, jsonObject: $JsonObject_): $Variant;
        wrapOperation$dih000$polytone$addTranslation$mixinextras$bridge$9(modelLocation: $ResourceLocation_, rotation: $Transformation, uvLock: boolean, weight: number, op: $Operation_<any>, jsonObject: $LocalRef<any>): $Variant;
        getBlockRotation(json: $JsonObject_): $BlockModelRotation;
        wrapOperation$dih000$polytone$cancelVanillaTransformation(instance: $Variant$Deserializer, json: $JsonObject_, original: $Operation_<any>): $BlockModelRotation;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $Variant;
        static DEFAULT_Y_ROTATION: number;
        static DEFAULT_X_ROTATION: number;
        static DEFAULT_UVLOCK: boolean;
        static DEFAULT_WEIGHT: number;
        constructor();
    }
    export class $BlockElementRotation extends $Record implements $IExtendedBlockElementRotation {
        origin(): $Vector3f;
        axis(): $Direction$Axis;
        angle(): number;
        rescale(): boolean;
        setRotation(rot: $Vector3f): void;
        getRotation(): $Vector3f;
        constructor(arg0: $Vector3f, arg1: $Direction$Axis_, arg2: number, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $BlockElementRotation}.
     */
    export type $BlockElementRotation_ = { angle?: number, axis?: $Direction$Axis_, rescale?: boolean, origin?: $Vector3f,  } | [angle?: number, axis?: $Direction$Axis_, rescale?: boolean, origin?: $Vector3f, ];
    export class $BlockFaceUV$Deserializer implements $JsonDeserializer<$BlockFaceUV> {
        getRotation(json: $JsonObject_): number;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $BlockFaceUV;
        constructor();
    }
    export class $ItemTransform$Deserializer implements $JsonDeserializer<$ItemTransform> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $ItemTransform;
        static DEFAULT_SCALE: $Vector3f;
        static MAX_TRANSLATION: number;
        static DEFAULT_ROTATION: $Vector3f;
        static DEFAULT_TRANSLATION: $Vector3f;
        static MAX_SCALE: number;
        constructor();
    }
    export class $BlockModelDefinition$Context {
        getDefinition(): $StateDefinition<$Block, $BlockState>;
        setDefinition(stateContainer: $StateDefinition<$Block_, $BlockState_>): void;
        gson: $Gson;
        constructor();
    }
    export class $Variant implements $ModelState {
        getWeight(): number;
        getRotation(): $Transformation;
        getModelLocation(): $ResourceLocation;
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
        isUvLocked(): boolean;
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
        mayApplyArbitraryRotation(): boolean;
        constructor(modelLocation: $ResourceLocation_, rotation: $Transformation, uvLock: boolean, weight: number);
        get weight(): number;
        get rotation(): $Transformation;
        get modelLocation(): $ResourceLocation;
        get uvLocked(): boolean;
    }
    export class $ItemTransforms$Deserializer implements $JsonDeserializer<$ItemTransforms> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $ItemTransforms;
        constructor();
    }
    export class $BlockElement$Deserializer implements $JsonDeserializer<$BlockElement> {
        handler$dgn000$polytone$unRestrictRotation(json: $JsonObject_, cir: $CallbackInfoReturnable<any>, rotObj: $JsonObject_, offset: $Vector3f): void;
        handler$dgn000$polytone$unRestrictAngles(json: $JsonObject_, cir: $CallbackInfoReturnable<any>): void;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $BlockElement;
        constructor();
    }
}
