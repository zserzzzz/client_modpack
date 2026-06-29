import { $ICopycatBlockEntity, $ICopycatBlock, $StateType, $ICopycatBlock$OnRemoveHandler_ } from "@package/com/copycatsplus/copycats/foundation/copycat";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $PartialSafeNBT } from "@package/com/simibubi/create/api/schematic/nbt";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $Supplier_, $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $Holder, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockColor } from "@package/net/minecraft/client/color/block";
import { $ProperWaterloggedBlock, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $BakedModelWrapperWithData } from "@package/com/simibubi/create/foundation/model";
import { $Class, $ThreadLocal, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockAndTintGetter, $ClipContext, $LevelAccessor, $ClipBlockStateContext, $LightLayer_, $ChunkPos, $Level, $BlockGetter, $ColorResolver_, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialBlockEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ModelData, $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $DirectionProperty, $Half, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PoleHelper } from "@package/com/simibubi/create/foundation/placement";
import { $Block$BlockStatePairKey, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $AABB_, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/decoration/copycat" {
    export class $CopycatBarsModel extends $CopycatModel {
        static MATERIAL_PROPERTY: $ModelProperty<$BlockState>;
        constructor(arg0: $BakedModel);
    }
    export class $CopycatModel extends $BakedModelWrapperWithData {
        static getMaterial(arg0: $ModelData): $BlockState;
        static getModelOf(arg0: $BlockState_): $BakedModel;
        static MATERIAL_PROPERTY: $ModelProperty<$BlockState>;
        constructor(arg0: $BakedModel);
    }
    export class $CopycatSpecialCases {
        static isTrapdoorMaterial(arg0: $BlockState_): boolean;
        static isBarsMaterial(arg0: $BlockState_): boolean;
        constructor();
    }
    export class $CopycatBlockEntity extends $SmartBlockEntity implements $SpecialBlockEntityItemRequirement, $TransformableBlockEntity, $PartialSafeNBT, $Clearable, $ICopycatBlockEntity {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        clearContent(): void;
        getMaterial(): $BlockState;
        getConsumedItem(): $ItemStack;
        setMaterial(arg0: $BlockState_): void;
        cycleMaterial(): boolean;
        hasCustomMaterial(): boolean;
        setConsumedItem(arg0: $ItemStack_): void;
        isCTEnabled(): boolean;
        setMaterialInternal(material: $BlockState_): void;
        setCTEnabledInternal(value: boolean): void;
        setConsumedItemInternal(consumedItem: $ItemStack_): void;
        init(): void;
        accept(other: $BlockEntity): void;
        getBlock(): $ICopycatBlock;
        setCTEnabled(value: boolean): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        set materialInternal(value: $BlockState_);
        set CTEnabledInternal(value: boolean);
        set consumedItemInternal(value: $ItemStack_);
        get block(): $ICopycatBlock;
    }
    export class $WaterloggedCopycatBlock extends $CopycatBlock implements $ProperWaterloggedBlock {
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        fluidState(arg0: $BlockState_): $FluidState;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $CopycatPanelBlock$PlacementHelper implements $IPlacementHelper {
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        matchesItem(arg0: $ItemStack_): boolean;
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
    }
    export class $CopycatStepModel extends $CopycatModel {
        static MATERIAL_PROPERTY: $ModelProperty<$BlockState>;
        constructor(arg0: $BakedModel);
    }
    export class $CopycatStepBlock$PlacementHelper extends $PoleHelper<$Direction> {
    }
    export class $CopycatPanelBlock extends $WaterloggedCopycatBlock implements $ICopycatBlock {
        getBlockEntity(worldIn: $BlockGetter, pos: $BlockPos_): $CopycatBlockEntity;
        static isOccluded(arg0: $BlockState_, arg1: $BlockState_, arg2: $Direction_): boolean;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $CopycatModel$OcclusionData {
    }
    export class $CopycatBlock$WrappedBlockColor implements $BlockColor {
        getColor(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: number): number;
        constructor();
    }
    export class $FilteredBlockAndTintGetter implements $BlockAndTintGetter {
        getMinBuildHeight(): number;
        getHeight(): number;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getShade(arg0: $Direction_, arg1: boolean): number;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getLightEngine(): $LevelLightEngine;
        getModelData(arg0: $BlockPos_): $ModelData;
        canSeeSky(arg0: $BlockPos_): boolean;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        getMaxLightLevel(): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getLightEmission(arg0: $BlockPos_): number;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        clip(arg0: $ClipContext): $BlockHitResult;
        handler$hbg000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        isOutsideBuildHeight(arg0: number): boolean;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getSectionIndex(arg0: number): number;
        getMinSection(): number;
        getMaxBuildHeight(): number;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        constructor(arg0: $BlockAndTintGetter, arg1: $Predicate_<$BlockPos>);
        get minBuildHeight(): number;
        get height(): number;
        get lightEngine(): $LevelLightEngine;
        get maxLightLevel(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
        get maxBuildHeight(): number;
    }
    export class $SpecialCopycatPanelBlockState extends $SpecialBlockStateGen {
        constructor(arg0: string);
    }
    export class $CopycatStepBlock extends $WaterloggedCopycatBlock implements $ICopycatBlock {
        getBlockEntity(worldIn: $BlockGetter, pos: $BlockPos_): $CopycatBlockEntity;
        static isOccluded(arg0: $BlockState_, arg1: $BlockState_, arg2: $Direction_): boolean;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$Half>;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $CopycatBlock extends $Block implements $IBE<$CopycatBlockEntity>, $IWrenchable, $ICopycatBlock {
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        static getMaterial(arg0: $BlockGetter, arg1: $BlockPos_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityClass(): $Class<$CopycatBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$CopycatBlockEntity>;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        prepareMaterial(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Player, arg4: $InteractionHand_, arg5: $BlockHitResult, arg6: $BlockState_): $BlockState;
        canFaceBeOccluded(arg0: $BlockState_, arg1: $Direction_): boolean;
        static wrappedColor(): $BlockColor;
        canConnectTexturesToward(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        isIgnoredConnectivitySide(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $Direction_, arg3: $BlockPos_, arg4: $BlockPos_): boolean;
        shouldFaceAlwaysRender(arg0: $BlockState_, arg1: $Direction_): boolean;
        isAcceptedRegardless(arg0: $BlockState_): boolean;
        getAcceptedBlockState(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_, arg3: $Direction_): $BlockState;
        handler$ijd000$createdieselgenerators$use(arg0: $ItemStack_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult, arg7: $CallbackInfoReturnable<any>): void;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CopycatBlockEntity, $InteractionResult>): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $CopycatBlockEntity;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$CopycatBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($CopycatBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CopycatBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        shapeCanOccludeNeighbor(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, neighborPos: $BlockPos_, dir: $Direction_): (boolean) | undefined;
        transform(state: $BlockState_, transform: $StructureTransform): $BlockState;
        onRemove(state: $BlockState_, world: $Level_, pos: $BlockPos_, newState: $BlockState_, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler_): void;
        canOcclude(level: $BlockGetter, state: $BlockState_, pos: $BlockPos_): boolean;
        toggleCT(state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player, hitResult: $BlockHitResult): $InteractionResult;
        canToggleCT(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_): boolean;
        checkConnection(reader: $BlockAndTintGetter, fromPos: $BlockPos_, toPos: $BlockPos_, fromState: $BlockState_): boolean;
        isCTEnabled(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_ | null): boolean;
        isIgnoredConnectivitySide(reader: $BlockAndTintGetter, fromState: $BlockState_, face: $Direction_, fromPos: $BlockPos_, toPos: $BlockPos_ | null, toState: $BlockState_ | null): boolean;
        getCopycatBlockEntity(worldIn: $BlockGetter, pos: $BlockPos_): $ICopycatBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        stateType(): $StateType;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$CopycatBlockEntity>;
        get blockEntityType(): $BlockEntityType<$CopycatBlockEntity>;
    }
    export class $CopycatPanelModel extends $CopycatModel {
        static MATERIAL_PROPERTY: $ModelProperty<$BlockState>;
        constructor(arg0: $BakedModel);
    }
}
