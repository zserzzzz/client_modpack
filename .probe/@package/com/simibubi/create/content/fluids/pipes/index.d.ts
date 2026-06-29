import { $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Map } from "@package/java/util";
import { $BehaviourType, $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Supplier_, $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $Direction$Axis_, $BlockPos_, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $ProperWaterloggedBlock, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class, $ThreadLocal } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $WorldAttached } from "@package/net/createmod/catnip/data";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $BlockAndTintGetter, $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EncasedBlock, $EncasableBlock } from "@package/com/simibubi/create/content/decoration/encasing";
import { $DirectionProperty, $AttachFace, $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable, $IWrenchableWithBracket } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $Rotation_, $PipeBlock, $Mirror_, $RotatedPillarBlock, $Block$BlockStatePairKey, $SoundType, $SimpleWaterloggedBlock, $FaceAttachedHorizontalDirectionalBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $TransformableBlockEntity, $TransformableBlock } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PipeConnection, $FluidTransportBehaviour$UpdatePhase, $FluidTransportBehaviour } from "@package/com/simibubi/create/content/fluids";
export * as valve from "@package/com/simibubi/create/content/fluids/pipes/valve";

declare module "@package/com/simibubi/create/content/fluids/pipes" {
    export class $IAxisPipe {
        static getAxisOf(arg0: $BlockState_): $Direction$Axis;
    }
    export interface $IAxisPipe {
        getAxis(arg0: $BlockState_): $Direction$Axis;
    }
    /**
     * Values that may be interpreted as {@link $IAxisPipe}.
     */
    export type $IAxisPipe_ = ((arg0: $BlockState) => $Direction$Axis_);
    export class $EncasedPipeBlock extends $Block implements $IWrenchable, $SpecialBlockItemRequirement, $IBE<$FluidPipeBlockEntity>, $EncasedBlock, $TransformableBlock {
        transform(arg0: $BlockState_, arg1: $StructureTransform): $BlockState;
        static transferSixWayProperties(arg0: $BlockState_, arg1: $BlockState_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityClass(): $Class<$FluidPipeBlockEntity>;
        handleEncasing(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): void;
        getBlockEntityType(): $BlockEntityType<$FluidPipeBlockEntity>;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getCasing(): $Block;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FluidPipeBlockEntity, $InteractionResult>): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $FluidPipeBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$FluidPipeBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($FluidPipeBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FluidPipeBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        static FACING_TO_PROPERTY_MAP: $Map<$Direction, $BooleanProperty>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $Supplier_<$Block>);
        get blockEntityClass(): $Class<$FluidPipeBlockEntity>;
        get blockEntityType(): $BlockEntityType<$FluidPipeBlockEntity>;
        get casing(): $Block;
    }
    export class $FluidPipeBlockEntity$StandardPipeFluidTransportBehaviour extends $FluidTransportBehaviour {
        phase: $FluidTransportBehaviour$UpdatePhase;
        interfaces: $Map<$Direction, $PipeConnection>;
        blockEntity: $SmartBlockEntity;
        static interfaceTransfer: $WorldAttached<$Map<$BlockPos, $Map<$Direction, $PipeConnection>>>;
        static TYPE: $BehaviourType<$FluidTransportBehaviour>;
    }
    export class $SmartFluidPipeBlock extends $FaceAttachedHorizontalDirectionalBlock implements $IBE<$SmartFluidPipeBlockEntity>, $IAxisPipe, $IWrenchable, $ProperWaterloggedBlock {
        getAxis(arg0: $BlockState_): $Direction$Axis;
        getBlockEntityClass(): $Class<$SmartFluidPipeBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$SmartFluidPipeBlockEntity>;
        static isOpenAt(arg0: $BlockState_, arg1: $Direction_): boolean;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SmartFluidPipeBlockEntity, $InteractionResult>): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SmartFluidPipeBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SmartFluidPipeBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SmartFluidPipeBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SmartFluidPipeBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        fluidState(arg0: $BlockState_): $FluidState;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        static CODEC: $MapCodec<$SmartFluidPipeBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static FACE: $EnumProperty<$AttachFace>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$SmartFluidPipeBlockEntity>;
        get blockEntityType(): $BlockEntityType<$SmartFluidPipeBlockEntity>;
    }
    export class $GlassPipeVisual extends $AbstractBlockEntityVisual<$StraightPipeBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $StraightPipeBlockEntity, arg2: number);
    }
    export class $SmartFluidPipeGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $SmartFluidPipeBlockEntity$SmartPipeFilterSlot extends $ValueBoxTransform {
    }
    export class $VanillaFluidTargets {
        static canProvideFluidWithoutCapability(arg0: $BlockState_): boolean;
        static drainBlock(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean): $FluidStack;
        constructor();
    }
    export class $FluidPipeBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $SmartFluidPipeBlockEntity extends $SmartBlockEntity implements $Clearable {
        clearContent(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $TransparentStraightPipeRenderer extends $SafeBlockEntityRenderer<$StraightPipeBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $StraightPipeBlockEntity extends $SmartBlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $FluidPipeBlock extends $PipeBlock implements $SimpleWaterloggedBlock, $IWrenchableWithBracket, $IBE<$FluidPipeBlockEntity>, $EncasableBlock, $TransformableBlock {
        transform(arg0: $BlockState_, arg1: $StructureTransform): $BlockState;
        static isPipe(arg0: $BlockState_): boolean;
        updateBlockState(arg0: $BlockState_, arg1: $Direction_, arg2: $Direction_, arg3: $BlockAndTintGetter, arg4: $BlockPos_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityClass(): $Class<$FluidPipeBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$FluidPipeBlockEntity>;
        removeBracket(arg0: $BlockGetter, arg1: $BlockPos_, arg2: boolean): ($ItemStack) | undefined;
        static isOpenAt(arg0: $BlockState_, arg1: $Direction_): boolean;
        static isCornerOrEndPipe(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        static shouldDrawRim(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        static shouldDrawCasing(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        getAxisState(arg0: $Direction$Axis_): $BlockState;
        static canConnectTo(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        tryRemoveBracket(arg0: $UseOnContext): boolean;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FluidPipeBlockEntity, $InteractionResult>): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $FluidPipeBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$FluidPipeBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($FluidPipeBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FluidPipeBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        playEncaseSound(arg0: $Level_, arg1: $BlockPos_): void;
        tryEncase(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static DOWN: $BooleanProperty;
        explosionResistance: number;
        shapeByIndex: $VoxelShape[];
        static WEST: $BooleanProperty;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        static SOUTH: $BooleanProperty;
        static UP: $BooleanProperty;
        static EAST: $BooleanProperty;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$FluidPipeBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static PROPERTY_BY_DIRECTION: $Map<$Direction, $BooleanProperty>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$FluidPipeBlockEntity>;
        get blockEntityType(): $BlockEntityType<$FluidPipeBlockEntity>;
    }
    export class $GlassFluidPipeBlock extends $AxisPipeBlock implements $IBE<$StraightPipeBlockEntity>, $SimpleWaterloggedBlock, $SpecialBlockItemRequirement {
        getBlockEntityClass(): $Class<$StraightPipeBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$StraightPipeBlockEntity>;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$StraightPipeBlockEntity, $InteractionResult>): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $StraightPipeBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$StraightPipeBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($StraightPipeBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$StraightPipeBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        explosionResistance: number;
        static ALT: $BooleanProperty;
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
        static CODEC: $MapCodec<$RotatedPillarBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$StraightPipeBlockEntity>;
        get blockEntityType(): $BlockEntityType<$StraightPipeBlockEntity>;
    }
    export class $AxisPipeBlock extends $RotatedPillarBlock implements $IWrenchableWithBracket, $IAxisPipe {
        getAxis(arg0: $BlockState_): $Direction$Axis;
        toRegularPipe(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): $BlockState;
        removeBracket(arg0: $BlockGetter, arg1: $BlockPos_, arg2: boolean): ($ItemStack) | undefined;
        static isOpenAt(arg0: $BlockState_, arg1: $Direction_): boolean;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        tryRemoveBracket(arg0: $UseOnContext): boolean;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
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
        static CODEC: $MapCodec<$RotatedPillarBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $FluidPipeBlockRotation {
        static mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        static transform(arg0: $BlockState_, arg1: $StructureTransform): $BlockState;
        static rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        static FACING_TO_PROPERTY_MAP: $Map<$Direction, $BooleanProperty>;
        constructor();
    }
    export class $StraightPipeBlockEntity$StraightPipeFluidTransportBehaviour extends $FluidTransportBehaviour {
        phase: $FluidTransportBehaviour$UpdatePhase;
        interfaces: $Map<$Direction, $PipeConnection>;
        blockEntity: $SmartBlockEntity;
        static interfaceTransfer: $WorldAttached<$Map<$BlockPos, $Map<$Direction, $PipeConnection>>>;
        static TYPE: $BehaviourType<$FluidTransportBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $SmartFluidPipeBlockEntity$SmartPipeBehaviour extends $StraightPipeBlockEntity$StraightPipeFluidTransportBehaviour {
        phase: $FluidTransportBehaviour$UpdatePhase;
        interfaces: $Map<$Direction, $PipeConnection>;
        blockEntity: $SmartBlockEntity;
        static interfaceTransfer: $WorldAttached<$Map<$BlockPos, $Map<$Direction, $PipeConnection>>>;
        static TYPE: $BehaviourType<$FluidTransportBehaviour>;
    }
}
