import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $UUID_, $Map, $Set, $UUID, $List, $List_ } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $EdgeData, $DimensionPalette, $TrackNode, $TrackNodeLocation, $TrackEdge, $TrackGraph, $EdgePointType } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Enum, $Record, $Class, $ThreadLocal } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Pair, $Couple } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item } from "@package/net/minecraft/world/item";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BooleanProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $TickableVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $AbstractBlockEntityVisual, $SimpleTickableVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SoundType, $Block, $Block$BlockStatePairKey } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BasePacketPayload$PacketTypeProvider, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/trains/signal" {
    export class $SignalEdgeGroupPacket extends $Record implements $ClientboundPacketPayload {
        add(): boolean;
        handle(arg0: $LocalPlayer): void;
        ids(): $List<$UUID>;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        colors(): $List<$EdgeGroupColor>;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $SignalEdgeGroupPacket>;
        constructor(arg0: $UUID_, arg1: $EdgeGroupColor_);
        constructor(ids: $List_<$UUID_>, colors: $List_<$EdgeGroupColor_>, add: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $SignalEdgeGroupPacket}.
     */
    export type $SignalEdgeGroupPacket_ = { colors?: $List_<$EdgeGroupColor_>, add?: boolean, ids?: $List_<$UUID_>,  } | [colors?: $List_<$EdgeGroupColor_>, add?: boolean, ids?: $List_<$UUID_>, ];
    export class $SignalEdgeGroup {
        write(): $CompoundTag;
        static read(arg0: $CompoundTag_): $SignalEdgeGroup;
        asFallback(): $SignalEdgeGroup;
        isOccupiedUnless(arg0: $Train): boolean;
        isOccupiedUnless(arg0: $SignalBoundary): boolean;
        removeAdjacent(arg0: $UUID_): void;
        putAdjacent(arg0: $UUID_): void;
        resolveColor(): void;
        putIntersection(arg0: $UUID_, arg1: $UUID_): void;
        removeIntersection(arg0: $UUID_): void;
        fallbackGroup: boolean;
        color: $EdgeGroupColor;
        reserved: $SignalBoundary;
        intersectingResolved: $Set<$SignalEdgeGroup>;
        adjacent: $Set<$UUID>;
        id: $UUID;
        trains: $Set<$Train>;
        intersecting: $Map<$UUID, $UUID>;
        constructor(arg0: $UUID_);
    }
    export class $SignalBlock extends $Block implements $IBE<$SignalBlockEntity>, $IWrenchable {
        getBlockEntityType(): $BlockEntityType<$SignalBlockEntity>;
        getBlockEntityClass(): $Class<$SignalBlockEntity>;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SignalBlockEntity>): void;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SignalBlockEntity, $InteractionResult>): $InteractionResult;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SignalBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SignalBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SignalBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
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
        static TYPE: $EnumProperty<$SignalBlock$SignalType>;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$SignalBlockEntity>;
        get blockEntityClass(): $Class<$SignalBlockEntity>;
    }
    export class $EdgeGroupColor extends $Enum<$EdgeGroupColor> {
        get(): $Color;
        static values(): $EdgeGroupColor[];
        static valueOf(arg0: string): $EdgeGroupColor;
        static getDefault(): $EdgeGroupColor;
        strikeFrom(arg0: number): number;
        static findNextAvailable(arg0: number): $EdgeGroupColor;
        static RED: $EdgeGroupColor;
        static WHITE: $EdgeGroupColor;
        static BLUE: $EdgeGroupColor;
        static LAVENDER: $EdgeGroupColor;
        static YELLOW: $EdgeGroupColor;
        static CYAN: $EdgeGroupColor;
        static GREEN: $EdgeGroupColor;
        static BROWN: $EdgeGroupColor;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EdgeGroupColor>;
        static ORANGE: $EdgeGroupColor;
        static get default(): $EdgeGroupColor;
    }
    /**
     * Values that may be interpreted as {@link $EdgeGroupColor}.
     */
    export type $EdgeGroupColor_ = "yellow" | "green" | "blue" | "orange" | "lavender" | "red" | "cyan" | "brown" | "white";
    export class $SignalBlock$SignalType extends $Enum<$SignalBlock$SignalType> implements $StringRepresentable {
        static values(): $SignalBlock$SignalType[];
        static valueOf(arg0: string): $SignalBlock$SignalType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ENTRY_SIGNAL: $SignalBlock$SignalType;
        static CROSS_SIGNAL: $SignalBlock$SignalType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SignalBlock$SignalType}.
     */
    export type $SignalBlock$SignalType_ = "entry_signal" | "cross_signal";
    export class $SignalBoundary extends $TrackEdgePoint {
        setGroup(arg0: boolean, arg1: $UUID_): void;
        getTypeFor(arg0: $BlockPos_): $SignalBlock$SignalType;
        getGroup(arg0: $TrackNode): $UUID;
        queueUpdate(arg0: $TrackNode): void;
        setGroupAndUpdate(arg0: $TrackNode, arg1: $UUID_): void;
        cycleSignalType(arg0: $BlockPos_): void;
        getOverlayFor(arg0: $BlockPos_): $SignalBlockEntity$OverlayState;
        getStateFor(arg0: $BlockPos_): $SignalBlockEntity$SignalState;
        isForcedRed(arg0: $TrackNode): boolean;
        isForcedRed(arg0: boolean): boolean;
        updateBlockEntityPower(arg0: $SignalBlockEntity): void;
        edgeLocation: $Couple<$TrackNodeLocation>;
        sidesToUpdate: $Couple<boolean>;
        types: $Couple<$SignalBlock$SignalType>;
        cachedStates: $Couple<$SignalBlockEntity$SignalState>;
        groups: $Couple<$UUID>;
        id: $UUID;
        position: number;
        blockEntities: $Couple<$Map<$BlockPos, boolean>>;
        constructor();
    }
    export class $TrackEdgePoint {
        setType(arg0: $EdgePointType<never>): void;
        invalidate(arg0: $LevelAccessor): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $DimensionPalette): void;
        write(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): void;
        read(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): void;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $DimensionPalette): void;
        getId(): $UUID;
        getType(): $EdgePointType<never>;
        tick(arg0: $TrackGraph, arg1: boolean): void;
        setLocation(arg0: $Couple<$TrackNodeLocation>, arg1: number): void;
        setId(arg0: $UUID_): void;
        onRemoved(arg0: $TrackGraph): void;
        isPrimary(arg0: $TrackNode): boolean;
        canMerge(): boolean;
        blockEntityRemoved(arg0: $BlockPos_, arg1: boolean): void;
        canCoexistWith(arg0: $EdgePointType<never>, arg1: boolean): boolean;
        blockEntityAdded(arg0: $BlockEntity, arg1: boolean): void;
        canNavigateVia(arg0: $TrackNode): boolean;
        getLocationOn(arg0: $TrackEdge): number;
        edgeLocation: $Couple<$TrackNodeLocation>;
        id: $UUID;
        position: number;
        constructor();
    }
    export class $SingleBlockEntityEdgePoint extends $TrackEdgePoint {
        getBlockEntityPos(): $BlockPos;
        getBlockEntityDimension(): $ResourceKey<$Level>;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        blockEntityDimension: $ResourceKey<$Level>;
        id: $UUID;
        position: number;
        constructor();
    }
    export class $SignalBlockEntity$OverlayState extends $Enum<$SignalBlockEntity$OverlayState> {
        static values(): $SignalBlockEntity$OverlayState[];
        static valueOf(arg0: string): $SignalBlockEntity$OverlayState;
        static RENDER: $SignalBlockEntity$OverlayState;
        static SKIP: $SignalBlockEntity$OverlayState;
        static DUAL: $SignalBlockEntity$OverlayState;
    }
    /**
     * Values that may be interpreted as {@link $SignalBlockEntity$OverlayState}.
     */
    export type $SignalBlockEntity$OverlayState_ = "render" | "skip" | "dual";
    export class $SignalBlockEntity$SignalState extends $Enum<$SignalBlockEntity$SignalState> {
        static values(): $SignalBlockEntity$SignalState[];
        static valueOf(arg0: string): $SignalBlockEntity$SignalState;
        isRedLight(arg0: number): boolean;
        isGreenLight(arg0: number): boolean;
        isYellowLight(arg0: number): boolean;
        static RED: $SignalBlockEntity$SignalState;
        static YELLOW: $SignalBlockEntity$SignalState;
        static INVALID: $SignalBlockEntity$SignalState;
        static GREEN: $SignalBlockEntity$SignalState;
    }
    /**
     * Values that may be interpreted as {@link $SignalBlockEntity$SignalState}.
     */
    export type $SignalBlockEntity$SignalState_ = "red" | "yellow" | "green" | "invalid";
    export class $SignalPropagator {
        static onSignalRemoved(arg0: $TrackGraph, arg1: $SignalBoundary): void;
        static notifyTrains(arg0: $TrackGraph, ...arg1: $TrackEdge[]): void;
        static propagateSignalGroup(arg0: $TrackGraph, arg1: $SignalBoundary, arg2: boolean): void;
        static collectChainedSignals(arg0: $TrackGraph, arg1: $SignalBoundary, arg2: boolean): $Map<$UUID, boolean>;
        static walkSignals(arg0: $TrackGraph, arg1: $SignalBoundary, arg2: boolean, arg3: $Predicate_<$Pair<$TrackNode, $SignalBoundary>>, arg4: $Predicate_<$EdgeData>, arg5: boolean): void;
        static notifySignalsOfNewNode(arg0: $TrackGraph, arg1: $TrackNode): void;
        constructor();
    }
    export class $SignalBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
        setOverlay(arg0: $SignalBlockEntity$OverlayState_): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        getState(): $SignalBlockEntity$SignalState;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        isPowered(): boolean;
        getOverlay(): $SignalBlockEntity$OverlayState;
        getSignal(): $SignalBoundary;
        getReportedPower(): boolean;
        enterState(arg0: $SignalBlockEntity$SignalState_): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        computerBehaviour: $AbstractComputerBehaviour;
        edgePoint: $TrackTargetingBehaviour<$SignalBoundary>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): $SignalBlockEntity$SignalState;
        get powered(): boolean;
        get signal(): $SignalBoundary;
        get reportedPower(): boolean;
    }
    export class $SignalVisual extends $AbstractBlockEntityVisual<$SignalBlockEntity> implements $SimpleTickableVisual {
        tick(arg0: $TickableVisual$Context): void;
        planTick(): $Plan<$TickableVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $SignalBlockEntity, arg2: number);
    }
    export class $SignalRenderer extends $SafeBlockEntityRenderer<$SignalBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
