import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ResourceManagerReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $SpriteShiftEntry } from "@package/net/createmod/catnip/render";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Clearable, $InteractionResult, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $BlockSubLevelCollisionCallback } from "@package/dev/ryanhcode/sable/api/physics/callback";
import { $BlockWithSubLevelCollisionCallback } from "@package/dev/ryanhcode/sable/api/block";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $Item, $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MultiPosDestructionHandler, $ReducedDestroyEffects } from "@package/com/simibubi/create/foundation/block/render";
import { $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $Property, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BakedModelWrapper } from "@package/net/neoforged/neoforge/client/model";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $VoxelShaper } from "@package/net/createmod/catnip/math";
import { $SoundType, $Block, $Block$BlockStatePairKey } from "@package/net/minecraft/world/level/block";
import { $TransformableBlock } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BeltMovementHandler$TransportedEntityInfo, $BeltInventory } from "@package/com/simibubi/create/content/kinetics/belt/transport";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Map, $Set, $List } from "@package/java/util";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $Vec3i, $HolderLookup$Provider, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $KineticBlockEntity, $HorizontalKineticBlock, $KineticBlockEntityVisual } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class, $ThreadLocal } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $VersionedInventoryTrackerBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
export * as transport from "@package/com/simibubi/create/content/kinetics/belt/transport";
export * as item from "@package/com/simibubi/create/content/kinetics/belt/item";
export * as behaviour from "@package/com/simibubi/create/content/kinetics/belt/behaviour";

declare module "@package/com/simibubi/create/content/kinetics/belt" {
    export class $BeltShapes$VerticalBeltShaper extends $VoxelShaper {
    }
    export class $BeltBlock extends $HorizontalKineticBlock implements $IBE<$BeltBlockEntity>, $SpecialBlockItemRequirement, $TransformableBlock, $ProperWaterloggedBlock, $BlockWithSubLevelCollisionCallback {
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        transform(arg0: $BlockState_, arg1: $StructureTransform): $BlockState;
        getBlockEntityType(): $BlockEntityType<$BeltBlockEntity>;
        updateCoverProperty(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): void;
        static isBlockCoveringBelt(arg0: $LevelAccessor, arg1: $BlockPos_): boolean;
        getBlockEntityClass(): $Class<$BeltBlockEntity>;
        wrapOperation$glb000$sable$checkForSubLevels(arg0: $Entity, arg1: $Operation_<any>): $BlockPos;
        sable$getCallback(): $BlockSubLevelCollisionCallback;
        static canTransportObjects(arg0: $BlockState_): boolean;
        static getBeltChain(arg0: $LevelAccessor, arg1: $BlockPos_): $List<$BlockPos>;
        static initBelt(arg0: $Level_, arg1: $BlockPos_): void;
        static nextSegmentPosition(arg0: $BlockState_, arg1: $BlockPos_, arg2: boolean): $BlockPos;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$BeltBlockEntity>): void;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BeltBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($BeltBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BeltBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $BeltBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        fluidState(arg0: $BlockState_): $FluidState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
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
        static PART: $Property<$BeltPart>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        static HORIZONTAL_FACING: $Property<$Direction>;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static CASING: $BooleanProperty;
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
        static SLOPE: $Property<$BeltSlope>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$BeltBlockEntity>;
        get blockEntityClass(): $Class<$BeltBlockEntity>;
    }
    export class $BeltVisual extends $KineticBlockEntityVisual<$BeltBlockEntity> {
        static SCROLL_OFFSET_BOTTOM: number;
        static SCROLL_FACTOR_OTHERWISE: number;
        static SCROLL_OFFSET_OTHERWISE: number;
        static MAGIC_SCROLL_MULTIPLIER: number;
        static SCROLL_FACTOR_DIAGONAL: number;
        constructor(arg0: $VisualizationContext, arg1: $BeltBlockEntity, arg2: number);
    }
    export class $BeltShapes {
        static getShape(arg0: $BlockState_): $VoxelShape;
        static getCollisionShape(arg0: $BlockState_): $VoxelShape;
        constructor();
    }
    export class $BeltBlockEntity extends $KineticBlockEntity implements $Clearable {
        createRenderBoundingBox(): $AABB;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getController(): $BlockPos;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getInventory(): $BeltInventory;
        clearContent(): void;
        getMovementDirection(arg0: boolean): $Vec3i;
        getMovementFacing(): $Direction;
        getControllerBE(): $BeltBlockEntity;
        isController(): boolean;
        setController(arg0: $BlockPos_): void;
        setCasingType(arg0: $BeltBlockEntity$CasingType_): void;
        getDirectionAwareBeltMovementSpeed(): number;
        getBeltChainDirection(): $Vec3i;
        shouldRenderNormally(): boolean;
        invalidateItemHandler(): void;
        getBeltMovementSpeed(): number;
        setCovered(arg0: boolean): void;
        hasPulley(): boolean;
        applyColor(arg0: $DyeColor_): boolean;
        passengers: $Map<$Entity, $BeltMovementHandler$TransportedEntityInfo>;
        color: ($DyeColor) | undefined;
        level: $Level;
        index: number;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        trackerUpdateTag: $CompoundTag;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        casing: $BeltBlockEntity$CasingType;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        beltLength: number;
        lastInsert: $Direction;
        covered: boolean;
        updateSpeed: boolean;
        hasComparators: number;
        invVersionTracker: $VersionedInventoryTrackerBehaviour;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get inventory(): $BeltInventory;
        get movementFacing(): $Direction;
        get controllerBE(): $BeltBlockEntity;
        set casingType(value: $BeltBlockEntity$CasingType_);
        get directionAwareBeltMovementSpeed(): number;
        get beltChainDirection(): $Vec3i;
        get beltMovementSpeed(): number;
    }
    export class $BeltModel extends $BakedModelWrapper<$BakedModel> {
        static CASING_PROPERTY: $ModelProperty<$BeltBlockEntity$CasingType>;
        static COVER_PROPERTY: $ModelProperty<boolean>;
        constructor(arg0: $BakedModel);
    }
    export class $BeltSlicer$Feedback {
        constructor();
    }
    export class $BeltRenderer extends $SafeBlockEntityRenderer<$BeltBlockEntity> {
        shouldRenderOffScreen(arg0: $BeltBlockEntity): boolean;
        static getSpriteShiftEntry(arg0: $DyeColor_, arg1: boolean, arg2: boolean): $SpriteShiftEntry;
        redirect$gph000$sable$projectDistanceTo(arg0: $Vec3_, arg1: $Vec3_): number;
        static getBeltPartial(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): $PartialModel;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $BeltPart extends $Enum<$BeltPart> implements $StringRepresentable {
        static values(): $BeltPart[];
        static valueOf(arg0: string): $BeltPart;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static START: $BeltPart;
        static END: $BeltPart;
        static MIDDLE: $BeltPart;
        static PULLEY: $BeltPart;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BeltPart}.
     */
    export type $BeltPart_ = "start" | "middle" | "end" | "pulley";
    export class $BeltBlockEntity$CasingType extends $Enum<$BeltBlockEntity$CasingType> {
        static values(): $BeltBlockEntity$CasingType[];
        static valueOf(arg0: string): $BeltBlockEntity$CasingType;
        static BRASS: $BeltBlockEntity$CasingType;
        static ANDESITE: $BeltBlockEntity$CasingType;
        static NONE: $BeltBlockEntity$CasingType;
    }
    /**
     * Values that may be interpreted as {@link $BeltBlockEntity$CasingType}.
     */
    export type $BeltBlockEntity$CasingType_ = "none" | "andesite" | "brass";
    export class $BeltHelper {
        static getVectorForOffset(arg0: $BeltBlockEntity, arg1: number): $Vec3;
        static getControllerBE(arg0: $LevelAccessor, arg1: $BlockPos_): $BeltBlockEntity;
        static getBeltAtSegment(arg0: $BeltBlockEntity, arg1: number): $BeltBlockEntity;
        static getBeltForOffset(arg0: $BeltBlockEntity, arg1: number): $BeltBlockEntity;
        static getBeltVector(arg0: $BlockState_): $Vec3;
        static getPositionForOffset(arg0: $BeltBlockEntity, arg1: number): $BlockPos;
        static getSegmentBE(arg0: $LevelAccessor, arg1: $BlockPos_): $BeltBlockEntity;
        static isItemUpright(arg0: $ItemStack_): boolean;
        static uprightCache: $Map<$Item, boolean>;
        static LISTENER: $ResourceManagerReloadListener;
        constructor();
    }
    export class $BeltSlope extends $Enum<$BeltSlope> implements $StringRepresentable {
        static values(): $BeltSlope[];
        static valueOf(arg0: string): $BeltSlope;
        getSerializedName(): string;
        isDiagonal(): boolean;
        getRemappedEnumConstantName(): string;
        static VERTICAL: $BeltSlope;
        static HORIZONTAL: $BeltSlope;
        static DOWNWARD: $BeltSlope;
        static UPWARD: $BeltSlope;
        static SIDEWAYS: $BeltSlope;
        get serializedName(): string;
        get diagonal(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BeltSlope}.
     */
    export type $BeltSlope_ = "horizontal" | "upward" | "downward" | "vertical" | "sideways";
    export class $BeltBlock$RenderProperties extends $ReducedDestroyEffects implements $MultiPosDestructionHandler {
        getExtraPositions(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): $Set<$BlockPos>;
        constructor();
    }
    export class $BeltSlicer {
        static useConnector(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_, arg5: $BlockHitResult, arg6: $BeltSlicer$Feedback): $ItemInteractionResult;
        static useWrench(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_, arg5: $BlockHitResult, arg6: $BeltSlicer$Feedback): $ItemInteractionResult;
        static tickHoveringInformation(): void;
        constructor();
    }
    export class $BeltGenerator extends $SpecialBlockStateGen {
        constructor();
    }
}
