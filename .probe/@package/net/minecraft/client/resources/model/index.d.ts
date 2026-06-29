import { $BakedModelManagerAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedModelMixin } from "@package/net/fabricmc/fabric/mixin/renderer/client";
import { $UnbakedModel_extendsMixin } from "@package/ca/fxco/moreculling/mixin/models/cullshape";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BlockModelShaper } from "@package/net/minecraft/client/renderer/block";
import { $ExtendedUnbakedModel, $BakedOpacity } from "@package/ca/fxco/moreculling/api/model";
import { $RandomSource } from "@package/net/minecraft/util";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet, $RenderTypeGroup_ } from "@package/net/neoforged/neoforge/client";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBakedModelExtension, $IModelBakerExtension, $ModelStateExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $IAcceleratedBakedModel } from "@package/com/github/argon4w/acceleratedrendering/features/items";
import { $FabricBakedModelManager } from "@package/net/fabricmc/fabric/api/client/model/loading/v1";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $IDynamicBakedModel } from "@package/net/neoforged/neoforge/client/model";
import { $OctahedralGroup, $Transformation } from "@package/com/mojang/math";
import { $Matrix4f, $Matrix3f } from "@package/org/joml";
import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $BakedModel_extendsMixin } from "@package/ca/fxco/moreculling/mixin/models";
import { $ResourceModelManagerAccessor, $ResourceAtlasSetAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $Comparator, $Map, $List, $Map_, $List_, $Collection, $BitSet } from "@package/java/util";
import { $IAcceleratedVertexConsumer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";
import { $AcceleratedModelRenderContext_ } from "@package/com/github/argon4w/acceleratedrendering/features/items/contexts";
import { $SimpleBakedModelAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $Supplier_, $Predicate_, $Function, $BiConsumer_, $Function_ } from "@package/java/util/function";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $ModelLoaderExtension } from "@package/me/pepperbell/continuity/client/mixinterface";
import { $BlockStatesLoaderHooks, $BlockStatesLoaderHooks$LoadingOverride_, $BakerImplHooks, $ModelLoadingEventDispatcher, $ModelLoaderHooks } from "@package/net/fabricmc/fabric/impl/client/model/loading";
import { $WeightedEntry$Wrapper_ } from "@package/net/minecraft/util/random";
import { $TextureAtlasSprite, $SpriteLoader$Preparations_, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $RuntimeException, $Comparable, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $IAcceleratedRenderer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $BlockModel, $ItemOverrides, $BakedQuad, $ItemTransforms, $ItemModelGenerator, $BlockModelDefinition, $BlockModelDefinition$Context } from "@package/net/minecraft/client/renderer/block/model";
import { $ModelWrappingHandler } from "@package/me/pepperbell/continuity/client/resource";
import { $ResourceLocation, $ResourceLocation_, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $FabricBakedModel } from "@package/net/fabricmc/fabric/api/renderer/v1/model";

declare module "@package/net/minecraft/client/resources/model" {
    export class $BakedModel {
    }
    export interface $BakedModel extends $IBakedModelExtension, $IAcceleratedBakedModel, $FabricBakedModel, $BakedOpacity, $BakedModel_extendsMixin, $BakedModelMixin {
        useAmbientOcclusion(): boolean;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        isGui3d(): boolean;
        getOverrides(): $ItemOverrides;
        isAccelerated(): boolean;
        usesBlockLight(): boolean;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getCustomColor(arg0: number, arg1: number): number;
        isAcceleratedInGui(): boolean;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        isCustomRenderer(): boolean;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        /**
         * @deprecated
         */
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        isAcceleratedInHand(): boolean;
        get transforms(): $ItemTransforms;
        get gui3d(): boolean;
        get overrides(): $ItemOverrides;
        get accelerated(): boolean;
        get particleIcon(): $TextureAtlasSprite;
        get acceleratedInGui(): boolean;
        get customRenderer(): boolean;
        get acceleratedInHand(): boolean;
    }
    export class $ModelBakery implements $ModelLoaderExtension, $ModelLoaderHooks {
        getModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        continuity$getModelWrappingHandler(): $ModelWrappingHandler;
        getBakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        bakeModels(textureGetter: $ModelBakery$TextureGetter_): void;
        getModelGroups(): $Object2IntMap<$BlockState>;
        fabric_getOrLoadModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        fabric_getDispatcher(): $ModelLoadingEventDispatcher;
        fabric_getMissingModel(): $UnbakedModel;
        continuity$setModelWrappingHandler(handler: $ModelWrappingHandler): void;
        fabric_add(modelLocation: $ModelResourceLocation_, model: $UnbakedModel): void;
        static BLOCK_ENTITY_MARKER: $BlockModel;
        static ITEM_MODEL_GENERATOR: $ItemModelGenerator;
        static NO_PATTERN_SHIELD: $Material;
        static DESTROY_STAGE_COUNT: number;
        static DESTROY_STAGES: $List<$ResourceLocation>;
        static BANNER_BASE: $Material;
        static GENERATION_MARKER: $BlockModel;
        static BREAKING_LOCATIONS: $List<$ResourceLocation>;
        static MISSING_MODEL_LOCATION: $ResourceLocation;
        static DESTROY_TYPES: $List<$RenderType>;
        static MISSING_MODEL_MESH: string;
        static FIRE_1: $Material;
        static LAVA_FLOW: $Material;
        bakedCache: $Map<$ModelBakery$BakedCacheKey, $BakedModel>;
        static SHIELD_BASE: $Material;
        static FIRE_0: $Material;
        static WATER_FLOW: $Material;
        static MODEL_LISTER: $FileToIdConverter;
        static WATER_OVERLAY: $Material;
        static MISSING_MODEL_VARIANT: $ModelResourceLocation;
        constructor(blockColors: $BlockColors, profilerFiller: $ProfilerFiller, modelResources: $Map_<$ResourceLocation_, $BlockModel>, blockStateResources: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>);
        get bakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        get modelGroups(): $Object2IntMap<$BlockState>;
    }
    export class $UnbakedModel {
    }
    export interface $UnbakedModel extends $ExtendedUnbakedModel, $UnbakedModel_extendsMixin {
        getDependencies(): $Collection<$ResourceLocation>;
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        resolveParents(resolver: $Function_<$ResourceLocation, $UnbakedModel>): void;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $BuiltInModel implements $BakedModel, $BakedOpacity {
        useAmbientOcclusion(): boolean;
        getTransforms(): $ItemTransforms;
        isGui3d(): boolean;
        moreculling$resetTranslucencyCache(arg0: $BlockState_): void;
        getOverrides(): $ItemOverrides;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        moreculling$canSetCullingShape(): boolean;
        moreculling$getCullingShape(arg0: $BlockState_): $VoxelShape;
        moreculling$setCullingShape(arg0: $VoxelShape): void;
        isCustomRenderer(): boolean;
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        isAccelerated(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getCustomColor(arg0: number, arg1: number): number;
        isAcceleratedInGui(): boolean;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        isAcceleratedInHand(): boolean;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        /**
         * A null `RenderType` is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
         */
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource, data: $ModelData, renderType: $RenderType): $List<$BakedQuad>;
        isVanillaAdapter(): boolean;
        constructor(itemTransforms: $ItemTransforms, overrides: $ItemOverrides, particleTexture: $TextureAtlasSprite, usesBlockLight: boolean);
        get transforms(): $ItemTransforms;
        get gui3d(): boolean;
        get overrides(): $ItemOverrides;
        get customRenderer(): boolean;
        get accelerated(): boolean;
        get acceleratedInGui(): boolean;
        get acceleratedInHand(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ModelState {
    }
    export interface $ModelState extends $ModelStateExtension {
        getRotation(): $Transformation;
        isUvLocked(): boolean;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    export class $ModelManager implements $PreparableReloadListener, $AutoCloseable, $ResourceModelManagerAccessor, $FabricBakedModelManager, $BakedModelManagerAccessor, $IdentifiableResourceReloadListener {
        close(): void;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getModel(modelLocation: $ModelResourceLocation_): $BakedModel;
        getBlockModelShaper(): $BlockModelShaper;
        updateMaxMipLevel(level: number): void;
        getMissingModel(): $BakedModel;
        getModelBakery(): $ModelBakery;
        getFabricId(): $ResourceLocation;
        getAtlas(location: $ResourceLocation_): $TextureAtlas;
        getFabricDependencies(): $Collection<any>;
        requiresRender(oldState: $BlockState_, newState: $BlockState_): boolean;
        getName(): string;
        getModel(arg0: $ResourceLocation_): $BakedModel;
        getModels(): $Map<$ModelResourceLocation, $BakedModel>;
        getAtlases(): $AtlasSet;
        getMaxMipmapLevels(): number;
        bakedRegistry: $Map<$ModelResourceLocation, $BakedModel>;
        constructor(textureManager: $TextureManager, blockColors: $BlockColors, maxMipmapLevels: number);
        get blockModelShaper(): $BlockModelShaper;
        get missingModel(): $BakedModel;
        get modelBakery(): $ModelBakery;
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get name(): string;
        get models(): $Map<$ModelResourceLocation, $BakedModel>;
        get atlases(): $AtlasSet;
        get maxMipmapLevels(): number;
    }
    export class $WeightedBakedModel implements $BakedModel, $IDynamicBakedModel, $IAcceleratedBakedModel, $FabricBakedModel, $BakedOpacity {
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        useAmbientOcclusion(): boolean;
        getTransforms(): $ItemTransforms;
        isGui3d(): boolean;
        moreculling$resetTranslucencyCache(arg0: $BlockState_): void;
        getOverrides(): $ItemOverrides;
        getList(): $List<any>;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        isAccelerated(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        getParticleIcon(): $TextureAtlasSprite;
        getTotalWeight(): number;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        isVanillaAdapter(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        getCustomColor(arg0: number, arg1: number): number;
        isAcceleratedInGui(): boolean;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        isCustomRenderer(): boolean;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        getQuads(state: $BlockState_ | null, side: $Direction_ | null, rand: $RandomSource, extraData: $ModelData, renderType: $RenderType): $List<any>;
        isAcceleratedInHand(): boolean;
        handler$bpl001$acceleratedrendering$checkAccelerationSupport(arg0: $List_<any>, arg1: $CallbackInfo): void;
        moreculling$canSetCullingShape(): boolean;
        moreculling$getCullingShape(arg0: $BlockState_): $VoxelShape;
        moreculling$setCullingShape(arg0: $VoxelShape): void;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        isVanilla: boolean;
        constructor(list: $List_<$WeightedEntry$Wrapper_<$BakedModel>>);
        get transforms(): $ItemTransforms;
        get gui3d(): boolean;
        get overrides(): $ItemOverrides;
        get list(): $List<any>;
        get accelerated(): boolean;
        get totalWeight(): number;
        get vanillaAdapter(): boolean;
        get acceleratedInGui(): boolean;
        get customRenderer(): boolean;
        get acceleratedInHand(): boolean;
    }
    export class $WeightedBakedModel$Builder {
        add(model: $BakedModel | null, weight: number): $WeightedBakedModel$Builder;
        build(): $BakedModel;
        constructor();
    }
    export class $ModelBaker {
    }
    export interface $ModelBaker extends $IModelBakerExtension {
        getModel(location: $ResourceLocation_): $UnbakedModel;
        /**
         * @deprecated
         */
        bake(location: $ResourceLocation_, transform: $ModelState): $BakedModel;
    }
    export class $SimpleBakedModel$Builder {
        /**
         * @deprecated
         */
        build(): $BakedModel;
        build(arg0: $RenderTypeGroup_): $BakedModel;
        item(): $SimpleBakedModel$Builder;
        particle(particleIcon: $TextureAtlasSprite): $SimpleBakedModel$Builder;
        addUnculledFace(quad: $BakedQuad): $SimpleBakedModel$Builder;
        addCulledFace(facing: $Direction_, quad: $BakedQuad): $SimpleBakedModel$Builder;
        handler$hnp000$ferritecore$deduplicate(arg0: $BakedQuad, arg1: $CallbackInfoReturnable<any>): void;
        handler$hnp000$ferritecore$deduplicate(arg0: $Direction_, arg1: $BakedQuad, arg2: $CallbackInfoReturnable<any>): void;
        constructor(blockModel: $BlockModel, overrides: $ItemOverrides, isGui3d: boolean);
        constructor(hasAmbientOcclusion: boolean, usesBlockLight: boolean, isGui3d: boolean, transforms: $ItemTransforms, overrides: $ItemOverrides);
    }
    export class $MultiPartBakedModel$Builder {
        add(predicate: $Predicate_<$BlockState>, model: $BakedModel): void;
        build(): $BakedModel;
        redirect$hnm000$ferritecore$build(arg0: $List_<any>): $MultiPartBakedModel;
        constructor();
    }
    export class $Material {
        renderType(renderTypeGetter: $Function_<$ResourceLocation, $RenderType>): $RenderType;
        sprite(): $TextureAtlasSprite;
        buffer(buffer: $MultiBufferSource_, renderTypeGetter: $Function_<$ResourceLocation, $RenderType>): $VertexConsumer;
        buffer(buffer: $MultiBufferSource_, renderTypeGetter: $Function_<$ResourceLocation, $RenderType>, withGlint: boolean): $VertexConsumer;
        texture(): $ResourceLocation;
        atlasLocation(): $ResourceLocation;
        static COMPARATOR: $Comparator<$Material>;
        constructor(atlasLocation: $ResourceLocation_, texture: $ResourceLocation_);
    }
    export class $BlockModelRotation extends $Enum<$BlockModelRotation> implements $ModelState {
        static by(x: number, y: number): $BlockModelRotation;
        static values(): $BlockModelRotation[];
        static valueOf(arg0: string): $BlockModelRotation;
        getRotation(): $Transformation;
        actualRotation(): $OctahedralGroup;
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
        isUvLocked(): boolean;
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
        mayApplyArbitraryRotation(): boolean;
        static X90_Y0: $BlockModelRotation;
        static X0_Y180: $BlockModelRotation;
        static X0_Y270: $BlockModelRotation;
        static X180_Y270: $BlockModelRotation;
        static X180_Y0: $BlockModelRotation;
        static X270_Y90: $BlockModelRotation;
        static X0_Y0: $BlockModelRotation;
        static X0_Y90: $BlockModelRotation;
        static X90_Y270: $BlockModelRotation;
        static X90_Y180: $BlockModelRotation;
        static X180_Y180: $BlockModelRotation;
        static X270_Y0: $BlockModelRotation;
        static X270_Y180: $BlockModelRotation;
        static X90_Y90: $BlockModelRotation;
        static X270_Y270: $BlockModelRotation;
        static X180_Y90: $BlockModelRotation;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockModelRotation}.
     */
    export type $BlockModelRotation_ = "x0_y0" | "x0_y90" | "x0_y180" | "x0_y270" | "x90_y0" | "x90_y90" | "x90_y180" | "x90_y270" | "x180_y0" | "x180_y90" | "x180_y180" | "x180_y270" | "x270_y0" | "x270_y90" | "x270_y180" | "x270_y270";
    export class $AtlasSet$StitchResult {
        getSprite(location: $ResourceLocation_): $TextureAtlasSprite;
        missing(): $TextureAtlasSprite;
        upload(): void;
        readyForUpload(): $CompletableFuture<void>;
        constructor(atlas: $TextureAtlas, preperations: $SpriteLoader$Preparations_);
    }
    export class $BlockStateModelLoader$LoadedJson extends $Record {
        data(): $JsonElement;
        source(): string;
        parse(blockStateId: $ResourceLocation_, context: $BlockModelDefinition$Context): $BlockModelDefinition;
        constructor(arg0: string, arg1: $JsonElement_);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedJson}.
     */
    export type $BlockStateModelLoader$LoadedJson_ = { source?: string, data?: $JsonElement_,  } | [source?: string, data?: $JsonElement_, ];
    export class $ModelBakery$TextureGetter {
    }
    export interface $ModelBakery$TextureGetter {
        get(modelLocation: $ModelResourceLocation_, material: $Material): $TextureAtlasSprite;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$TextureGetter}.
     */
    export type $ModelBakery$TextureGetter_ = ((arg0: $ModelResourceLocation, arg1: $Material) => $TextureAtlasSprite);
    export class $AtlasSet$AtlasEntry extends $Record implements $AutoCloseable {
        close(): void;
        atlasInfoLocation(): $ResourceLocation;
        atlas(): $TextureAtlas;
        constructor(arg0: $TextureAtlas, arg1: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $AtlasSet$AtlasEntry}.
     */
    export type $AtlasSet$AtlasEntry_ = { atlas?: $TextureAtlas, atlasInfoLocation?: $ResourceLocation_,  } | [atlas?: $TextureAtlas, atlasInfoLocation?: $ResourceLocation_, ];
    export class $SimpleBakedModel implements $BakedModel, $IAcceleratedBakedModel, $IAcceleratedRenderer<any>, $SimpleBakedModelAccessor, $BakedOpacity, $IBakedModelExtension {
        useAmbientOcclusion(): boolean;
        getTransforms(): $ItemTransforms;
        isGui3d(): boolean;
        moreculling$resetTranslucencyCache(arg0: $BlockState_): void;
        render(arg0: $VertexConsumer, arg1: $AcceleratedModelRenderContext_, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        getOverrides(): $ItemOverrides;
        isAccelerated(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        moreculling$canSetCullingShape(): boolean;
        moreculling$getCullingShape(arg0: $BlockState_): $VoxelShape;
        moreculling$setCullingShape(arg0: $VoxelShape): void;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<any>;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        getCustomColor(arg0: number, arg1: number): number;
        isAcceleratedInGui(): boolean;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        isCustomRenderer(): boolean;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        isAcceleratedInHand(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        /**
         * A null `RenderType` is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
         */
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource, data: $ModelData, renderType: $RenderType): $List<$BakedQuad>;
        isVanillaAdapter(): boolean;
        getBlockRenderTypes(): $ChunkRenderTypeSet;
        itemRenderTypes: $List<$RenderType>;
        fabulousItemRenderTypes: $List<$RenderType>;
        unculledFaces: $List<$BakedQuad>;
        culledFaces: $Map<$Direction, $List<$BakedQuad>>;
        particleIcon: $TextureAtlasSprite;
        hasAmbientOcclusion: boolean;
        transforms: $ItemTransforms;
        blockRenderTypes: $ChunkRenderTypeSet;
        overrides: $ItemOverrides;
        /**
         * @deprecated
         */
        constructor(unculledFaces: $List_<$BakedQuad>, culledFaces: $Map_<$Direction_, $List_<$BakedQuad>>, hasAmbientOcclusion: boolean, usesBlockLight: boolean, isGui3d: boolean, particleIcon: $TextureAtlasSprite, transforms: $ItemTransforms, overrides: $ItemOverrides);
        constructor(arg0: $List_<$BakedQuad>, arg1: $Map_<$Direction_, $List_<$BakedQuad>>, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $TextureAtlasSprite, arg6: $ItemTransforms, arg7: $ItemOverrides, arg8: $RenderTypeGroup_);
        get gui3d(): boolean;
        get accelerated(): boolean;
        get acceleratedInGui(): boolean;
        get customRenderer(): boolean;
        get acceleratedInHand(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ModelManager$ReloadState extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ModelManager$ReloadState}.
     */
    export type $ModelManager$ReloadState_ = { modelCache?: $Map_<$BlockState_, $BakedModel>, missingModel?: $BakedModel, modelBakery?: $ModelBakery, readyForUpload?: $CompletableFuture<void>, atlasPreparations?: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>,  } | [modelCache?: $Map_<$BlockState_, $BakedModel>, missingModel?: $BakedModel, modelBakery?: $ModelBakery, readyForUpload?: $CompletableFuture<void>, atlasPreparations?: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, ];
    export class $BlockStateModelLoader implements $BlockStatesLoaderHooks {
        static getValueHelper<T extends $Comparable<T>>(property: $Property<T>, propertyName: string): T;
        getModelGroups(): $Object2IntMap<$BlockState>;
        fabric_setLoadingOverride(arg0: $BlockStatesLoaderHooks$LoadingOverride_): void;
        loadAllBlockStates(): void;
        static SINGLETON_MODEL_GROUP: number;
        static BLOCKSTATE_LISTER: $FileToIdConverter;
        constructor(blockStateResources: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>, profiler: $ProfilerFiller, missingModel: $UnbakedModel, blockColors: $BlockColors, discoveredModelOutput: $BiConsumer_<$ModelResourceLocation, $UnbakedModel>);
        get modelGroups(): $Object2IntMap<$BlockState>;
    }
    export class $BlockStateModelLoader$LoadedModel extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedModel}.
     */
    export type $BlockStateModelLoader$LoadedModel_ = { key?: $Supplier_<$BlockStateModelLoader$ModelGroupKey>, model?: $UnbakedModel,  } | [key?: $Supplier_<$BlockStateModelLoader$ModelGroupKey>, model?: $UnbakedModel, ];
    export class $MultiPartBakedModel implements $BakedModel, $IDynamicBakedModel, $IAcceleratedBakedModel, $FabricBakedModel, $BakedOpacity {
        useAmbientOcclusion(): boolean;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        isGui3d(): boolean;
        moreculling$resetTranslucencyCache(arg0: $BlockState_): void;
        getOverrides(): $ItemOverrides;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        isAccelerated(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        moreculling$getCullingShape(arg0: $BlockState_): $VoxelShape;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        isVanillaAdapter(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        getCustomColor(arg0: number, arg1: number): number;
        isAcceleratedInGui(): boolean;
        renderItemFast(arg0: $ItemStack_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number): void;
        isCustomRenderer(): boolean;
        renderBlockFast(arg0: $BlockState_, arg1: $RandomSource, arg2: $PoseStack$Pose, arg3: $IAcceleratedVertexConsumer, arg4: number, arg5: number, arg6: number, arg7: $ModelData, arg8: $RenderType): void;
        getQuads(state: $BlockState_ | null, side: $Direction_ | null, rand: $RandomSource, extraData: $ModelData, renderType: $RenderType): $List<any>;
        isAcceleratedInHand(): boolean;
        handler$bpk000$acceleratedrendering$checkAccelerationSupport(arg0: $List_<any>, arg1: $CallbackInfo): void;
        getSelectors(): $List<any>;
        getSelectors(arg0: $BlockState_ | null): $BitSet;
        redirect$hnn000$ferritecore$redirectCachePut(arg0: $Map_<any, any>, arg1: $Object, arg2: $Object): $Object;
        redirect$hnn000$ferritecore$redirectCacheGet(arg0: $Map_<any, any>, arg1: $Object): $Object;
        moreculling$canSetCullingShape(): boolean;
        moreculling$setCullingShape(arg0: $VoxelShape): void;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        particleIcon: $TextureAtlasSprite;
        isVanilla: boolean;
        hasAmbientOcclusion: boolean;
        transforms: $ItemTransforms;
        overrides: $ItemOverrides;
        constructor(selectors: $List_<$Pair<$Predicate_<$BlockState>, $BakedModel>>);
        get gui3d(): boolean;
        get accelerated(): boolean;
        get vanillaAdapter(): boolean;
        get acceleratedInGui(): boolean;
        get customRenderer(): boolean;
        get acceleratedInHand(): boolean;
    }
    export class $ModelBakery$BakedCacheKey extends $Record {
        id(): $ResourceLocation;
        transformation(): $Transformation;
        isUvLocked(): boolean;
        constructor(id: $ResourceLocation_, transformation: $Transformation, isUvLocked: boolean);
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$BakedCacheKey}.
     */
    export type $ModelBakery$BakedCacheKey_ = { isUvLocked?: boolean, transformation?: $Transformation, id?: $ResourceLocation_,  } | [isUvLocked?: boolean, transformation?: $Transformation, id?: $ResourceLocation_, ];
    export class $BlockStateModelLoader$ModelGroupKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$ModelGroupKey}.
     */
    export type $BlockStateModelLoader$ModelGroupKey_ = { models?: $List_<$UnbakedModel>, coloringValues?: $List_<$Object>,  } | [models?: $List_<$UnbakedModel>, coloringValues?: $List_<$Object>, ];
    export class $BlockStateModelLoader$BlockStateDefinitionException extends $RuntimeException {
    }
    export class $ModelResourceLocation extends $Record {
        static vanilla(path: string, variant: string): $ModelResourceLocation;
        id(): $ResourceLocation;
        static standalone(id: $ResourceLocation_): $ModelResourceLocation;
        getVariant(): string;
        variant(): string;
        static inventory(id: $ResourceLocation_): $ModelResourceLocation;
        static INVENTORY_VARIANT: string;
        static STANDALONE_VARIANT: string;
        constructor(id: $ResourceLocation_, variant: string);
    }
    /**
     * Values that may be interpreted as {@link $ModelResourceLocation}.
     */
    export type $ModelResourceLocation_ = { id?: $ResourceLocation_, variant?: string,  } | [id?: $ResourceLocation_, variant?: string, ];
    export class $ModelBakery$ModelBakerImpl implements $ModelBaker, $BakerImplHooks {
        getModel(location: $ResourceLocation_): $UnbakedModel;
        bake(location: $ResourceLocation_, state: $ModelState, sprites: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        bake(location: $ResourceLocation_, transform: $ModelState): $BakedModel;
        fabric_getTextureGetter(): $Function<any, any>;
        getModelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
        bakeUncached(model: $UnbakedModel, state: $ModelState, sprites: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        bakeUncached(model: $UnbakedModel, state: $ModelState): $BakedModel;
        getTopLevelModel(location: $ModelResourceLocation_): $UnbakedModel;
        this$0: $ModelBakery;
        constructor(textureGetter: $ModelBakery, modelLocation: $ModelBakery$TextureGetter_, arg2: $ModelResourceLocation_);
        get modelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
    }
    export class $AtlasSet implements $AutoCloseable, $ResourceAtlasSetAccessor {
        close(): void;
        getAtlas(location: $ResourceLocation_): $TextureAtlas;
        scheduleLoad(resourceManager: $ResourceManager, mipLevel: number, executor: $Executor_): $Map<$ResourceLocation, $CompletableFuture<$AtlasSet$StitchResult>>;
        getAtlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
        constructor(atlasMap: $Map_<$ResourceLocation_, $ResourceLocation_>, textureManager: $TextureManager);
        get atlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
    }
}
