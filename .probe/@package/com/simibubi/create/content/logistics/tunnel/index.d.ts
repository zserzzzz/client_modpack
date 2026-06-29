import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $List_, $Map, $Set } from "@package/java/util";
import { $ValueBoxTransform$Sided, $CenteredSideValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class, $ThreadLocal, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $ConnectedTextureBehaviour$Base } from "@package/com/simibubi/create/foundation/block/connected";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $BlockEntityDataPacket } from "@package/com/simibubi/create/foundation/networking";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $INamedIconOptions } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $Block_, $Block$BlockStatePairKey, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/tunnel" {
    export class $BeltTunnelItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $BeltTunnelRenderer extends $SmartBlockEntityRenderer<$BeltTunnelBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $BrassTunnelCTBehaviour extends $ConnectedTextureBehaviour$Base {
        constructor();
    }
    export class $BrassTunnelFilterSlot extends $ValueBoxTransform$Sided {
        constructor();
    }
    export class $BrassTunnelBlockEntity$SelectionMode extends $Enum<$BrassTunnelBlockEntity$SelectionMode> implements $INamedIconOptions {
        static values(): $BrassTunnelBlockEntity$SelectionMode[];
        static valueOf(arg0: string): $BrassTunnelBlockEntity$SelectionMode;
        getTranslationKey(): string;
        getIcon(): $AllIcons;
        static FORCED_ROUND_ROBIN: $BrassTunnelBlockEntity$SelectionMode;
        static SYNCHRONIZE: $BrassTunnelBlockEntity$SelectionMode;
        static ROUND_ROBIN: $BrassTunnelBlockEntity$SelectionMode;
        static RANDOMIZE: $BrassTunnelBlockEntity$SelectionMode;
        static FORCED_SPLIT: $BrassTunnelBlockEntity$SelectionMode;
        static PREFER_NEAREST: $BrassTunnelBlockEntity$SelectionMode;
        static SPLIT: $BrassTunnelBlockEntity$SelectionMode;
        get translationKey(): string;
        get icon(): $AllIcons;
    }
    /**
     * Values that may be interpreted as {@link $BrassTunnelBlockEntity$SelectionMode}.
     */
    export type $BrassTunnelBlockEntity$SelectionMode_ = "split" | "forced_split" | "round_robin" | "forced_round_robin" | "prefer_nearest" | "randomize" | "synchronize";
    export class $BeltTunnelBlockEntity extends $SmartBlockEntity {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        flap(arg0: $Direction_, arg1: boolean): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        updateTunnelConnections(): void;
        flaps: $Map<$Direction, $LerpedFloat>;
        worldPosition: $BlockPos;
        level: $Level;
        sides: $Set<$Direction>;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $BrassTunnelModeSlot extends $CenteredSideValueBoxTransform {
        constructor();
    }
    export class $BeltTunnelVisual extends $AbstractBlockEntityVisual<$BeltTunnelBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $BeltTunnelBlockEntity, arg2: number);
    }
    export class $BrassTunnelBlockEntity extends $BeltTunnelBlockEntity implements $IHaveGoggleInformation {
        isConnected(arg0: boolean): boolean;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        getStackToDistribute(): $ItemStack;
        setStackToDistribute(arg0: $ItemStack_, arg1: $Direction_): void;
        hasDistributionBehaviour(): boolean;
        canInsert(arg0: $Direction_, arg1: $ItemStack_): boolean;
        testFlapFilter(arg0: $Direction_, arg1: $ItemStack_): boolean;
        grabAllStacksOfGroup(arg0: boolean): $List<$ItemStack>;
        getBeltCapability(): $IItemHandler;
        flapFilterEmpty(arg0: $Direction_): boolean;
        canTakeItems(): boolean;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        flaps: $Map<$Direction, $LerpedFloat>;
        worldPosition: $BlockPos;
        level: $Level;
        sides: $Set<$Direction>;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get beltCapability(): $IItemHandler;
    }
    export class $BrassTunnelBlock extends $BeltTunnelBlock {
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static HORIZONTAL_AXIS: $Property<$Direction$Axis>;
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
        static SHAPE: $Property<$BeltTunnelBlock$Shape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $TunnelFlapPacket extends $BlockEntityDataPacket<$BeltTunnelBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TunnelFlapPacket>;
        constructor(arg0: $BeltTunnelBlockEntity, arg1: $List_<$Pair<$Direction_, boolean>>);
    }
    export class $BeltTunnelShapes {
        static getShape(arg0: $BlockState_): $VoxelShape;
        constructor();
    }
    export class $BeltTunnelBlock$Shape extends $Enum<$BeltTunnelBlock$Shape> implements $StringRepresentable {
        static values(): $BeltTunnelBlock$Shape[];
        static valueOf(arg0: string): $BeltTunnelBlock$Shape;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CLOSED: $BeltTunnelBlock$Shape;
        static CROSS: $BeltTunnelBlock$Shape;
        static T_LEFT: $BeltTunnelBlock$Shape;
        static STRAIGHT: $BeltTunnelBlock$Shape;
        static T_RIGHT: $BeltTunnelBlock$Shape;
        static WINDOW: $BeltTunnelBlock$Shape;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BeltTunnelBlock$Shape}.
     */
    export type $BeltTunnelBlock$Shape_ = "straight" | "window" | "closed" | "t_left" | "t_right" | "cross";
    export class $BrassTunnelItemHandler implements $IItemHandler {
        getStackInSlot(arg0: number): $ItemStack;
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$isMutable(): boolean;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$self(): $IItemHandler;
        setChanged(): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getHeight(): number;
        getAllItems(): $List<$ItemStack>;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        getWidth(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        constructor(arg0: $BrassTunnelBlockEntity);
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
        get width(): number;
    }
    export class $BeltTunnelBlock extends $Block implements $IBE<$BeltTunnelBlockEntity>, $IWrenchable {
        static hasWindow(arg0: $BlockState_): boolean;
        static isStraight(arg0: $BlockState_): boolean;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityClass(): $Class<$BeltTunnelBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$BeltTunnelBlockEntity>;
        updateTunnel(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        static isJunction(arg0: $BlockState_): boolean;
        isValidPositionForPlacement(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BeltTunnelBlockEntity, $InteractionResult>): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $BeltTunnelBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$BeltTunnelBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($BeltTunnelBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BeltTunnelBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static HORIZONTAL_AXIS: $Property<$Direction$Axis>;
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
        static SHAPE: $Property<$BeltTunnelBlock$Shape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$BeltTunnelBlockEntity>;
        get blockEntityType(): $BlockEntityType<$BeltTunnelBlockEntity>;
    }
}
