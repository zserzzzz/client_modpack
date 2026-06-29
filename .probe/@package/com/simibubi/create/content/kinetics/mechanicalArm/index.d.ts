import { $TransformStack } from "@package/dev/engine_room/flywheel/lib/transform";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $ListTag_, $CompoundTag, $ListTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Map, $List, $Collection_ } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $CenteredSideValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$LeftClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SingleAxisRotatingVisual, $KineticBlockEntityRenderer, $KineticBlockEntity, $KineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Class, $ThreadLocal, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $Item$Properties, $BlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ICogWheel } from "@package/com/simibubi/create/content/kinetics/simpleRelays";
import { $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $INamedIconOptions } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $SoundType, $Block, $Block_, $Block$BlockStatePairKey } from "@package/net/minecraft/world/level/block";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/kinetics/mechanicalArm" {
    export class $AllArmInteractionPointTypes$CampfirePoint extends $AllArmInteractionPointTypes$DepositOnlyArmInteractionPoint {
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $ArmBlockEntity$Client {
    }
    export class $AllArmInteractionPointTypes$BlazeBurnerPoint extends $AllArmInteractionPointTypes$DepositOnlyArmInteractionPoint {
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $AllArmInteractionPointTypes$JukeboxPoint extends $AllArmInteractionPointTypes$TopFaceArmInteractionPoint {
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $AllArmInteractionPointTypes$RespawnAnchorPoint extends $AllArmInteractionPointTypes$DepositOnlyArmInteractionPoint {
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $ArmBlockEntity$Phase extends $Enum<$ArmBlockEntity$Phase> {
        static values(): $ArmBlockEntity$Phase[];
        static valueOf(arg0: string): $ArmBlockEntity$Phase;
        static MOVE_TO_INPUT: $ArmBlockEntity$Phase;
        static SEARCH_OUTPUTS: $ArmBlockEntity$Phase;
        static SEARCH_INPUTS: $ArmBlockEntity$Phase;
        static MOVE_TO_OUTPUT: $ArmBlockEntity$Phase;
        static DANCING: $ArmBlockEntity$Phase;
    }
    /**
     * Values that may be interpreted as {@link $ArmBlockEntity$Phase}.
     */
    export type $ArmBlockEntity$Phase_ = "search_inputs" | "move_to_input" | "search_outputs" | "move_to_output" | "dancing";
    export class $ArmRenderer extends $KineticBlockEntityRenderer<$ArmBlockEntity> {
        shouldRenderOffScreen(arg0: $ArmBlockEntity): boolean;
        static transformUpperArm(arg0: $TransformStack<any>, arg1: number): void;
        static transformLowerArm(arg0: $TransformStack<any>, arg1: number): void;
        static transformBase(arg0: $TransformStack<any>, arg1: number): void;
        static transformClawHalf(arg0: $TransformStack<any>, arg1: boolean, arg2: boolean, arg3: number): void;
        static transformHead(arg0: $TransformStack<any>, arg1: number): void;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $AllArmInteractionPointTypes$CrafterPoint extends $ArmInteractionPoint {
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $AllArmInteractionPointTypes$CrushingWheelPoint extends $AllArmInteractionPointTypes$DepositOnlyArmInteractionPoint {
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $ArmBlockEntity$SelectionModeValueBox extends $CenteredSideValueBoxTransform {
    }
    export class $ArmInteractionPoint {
        extract(arg0: $ArmBlockEntity, arg1: number, arg2: number, arg3: boolean): $ItemStack;
        extract(arg0: $ArmBlockEntity, arg1: number, arg2: boolean): $ItemStack;
        insert(arg0: $ArmBlockEntity, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getType(): $ArmInteractionPointType;
        static create(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPoint;
        isValid(): boolean;
        keepAlive(): void;
        getLevel(): $Level;
        setLevel(arg0: $Level_): void;
        static deserialize(arg0: $CompoundTag_, arg1: $Level_, arg2: $BlockPos_): $ArmInteractionPoint;
        serialize(arg0: $BlockPos_): $CompoundTag;
        getMode(): $ArmInteractionPoint$Mode;
        getPos(): $BlockPos;
        updateCachedState(): void;
        getTargetAngles(arg0: $BlockPos_, arg1: boolean): $ArmAngleTarget;
        static transformPos(arg0: $CompoundTag_, arg1: $StructureTransform): void;
        getSlotCount(arg0: $ArmBlockEntity): number;
        cycleMode(): void;
        static isInteractable(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
        get type(): $ArmInteractionPointType;
        get valid(): boolean;
        get mode(): $ArmInteractionPoint$Mode;
        get pos(): $BlockPos;
    }
    export class $AllArmInteractionPointTypes$RespawnAnchorType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $AllArmInteractionPointTypes$TopFaceArmInteractionPoint extends $ArmInteractionPoint {
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $AllArmInteractionPointTypes$ComposterType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $AllArmInteractionPointTypes$FunnelType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $AllArmInteractionPointTypes$DepotType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $ArmPlacementPacket extends $Record implements $ServerboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        tag(): $ListTag;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ArmPlacementPacket>;
        constructor(arg0: $Collection_<$ArmInteractionPoint>, arg1: $BlockPos_);
        constructor(tag: $ListTag_, pos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ArmPlacementPacket}.
     */
    export type $ArmPlacementPacket_ = { pos?: $BlockPos_, tag?: $ListTag_,  } | [pos?: $BlockPos_, tag?: $ListTag_, ];
    export class $ArmAngleTarget {
        constructor(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Direction_, arg3: boolean);
    }
    export interface $ArmInteractionPointType extends RegistryMarked<RegistryTypes.CreateArmInteractionPointTypeTag, RegistryTypes.CreateArmInteractionPointType> {}
    export class $AllArmInteractionPointTypes$SawType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $ArmBlock extends $KineticBlock implements $IBE<$ArmBlockEntity>, $ICogWheel {
        getBlockEntityClass(): $Class<$ArmBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$ArmBlockEntity>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ArmBlockEntity, $InteractionResult>): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $ArmBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$ArmBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($ArmBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ArmBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        isSmallCog(): boolean;
        isLargeCog(): boolean;
        isDedicatedCogWheel(): boolean;
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
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static CEILING: $BooleanProperty;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$ArmBlockEntity>;
        get blockEntityType(): $BlockEntityType<$ArmBlockEntity>;
        get smallCog(): boolean;
        get largeCog(): boolean;
        get dedicatedCogWheel(): boolean;
    }
    export class $AllArmInteractionPointTypes$BlazeBurnerType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $AllArmInteractionPointTypes$CrafterType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $AllArmInteractionPointTypes$FunnelPoint extends $AllArmInteractionPointTypes$DepositOnlyArmInteractionPoint {
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $AllArmInteractionPointTypes$DeployerType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $AllArmInteractionPointTypes$MillstoneType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $ArmVisual extends $SingleAxisRotatingVisual<$ArmBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $ArmBlockEntity, arg2: number);
    }
    export class $AllArmInteractionPointTypes$PackagerType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $AllArmInteractionPointTypes {
        static init(): void;
        constructor();
    }
    export class $AllArmInteractionPointTypes$BeltType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $AllArmInteractionPointTypes$CrushingWheelsType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $AllArmInteractionPointTypes$DepositOnlyArmInteractionPoint extends $ArmInteractionPoint {
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $AllArmInteractionPointTypes$JukeboxType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $ArmBlockEntity extends $KineticBlockEntity implements $TransformableBlockEntity {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        static getRange(): number;
        writeInteractionPoints(arg0: $CompoundTag_): void;
        redstoneUpdate(): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        hasComparators: number;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        static get range(): number;
    }
    export class $AllArmInteractionPointTypes$BeltPoint extends $AllArmInteractionPointTypes$DepotPoint {
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $ArmInteractionPoint$Mode extends $Enum<$ArmInteractionPoint$Mode> {
        static values(): $ArmInteractionPoint$Mode[];
        static valueOf(arg0: string): $ArmInteractionPoint$Mode;
        getTranslationKey(): string;
        getColor(): number;
        static TAKE: $ArmInteractionPoint$Mode;
        static DEPOSIT: $ArmInteractionPoint$Mode;
        get translationKey(): string;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $ArmInteractionPoint$Mode}.
     */
    export type $ArmInteractionPoint$Mode_ = "deposit" | "take";
    export class $AllArmInteractionPointTypes$ComposterPoint extends $ArmInteractionPoint {
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $ArmItem extends $BlockItem {
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
    export class $ArmPlacementPacket$ClientBoundRequest extends $Record implements $ClientboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ArmPlacementPacket$ClientBoundRequest>;
        constructor(pos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ArmPlacementPacket$ClientBoundRequest}.
     */
    export type $ArmPlacementPacket$ClientBoundRequest_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $AllArmInteractionPointTypes$BasinType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $AllArmInteractionPointTypes$DepotPoint extends $ArmInteractionPoint {
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $ArmBlockEntity$SelectionMode extends $Enum<$ArmBlockEntity$SelectionMode> implements $INamedIconOptions {
        static values(): $ArmBlockEntity$SelectionMode[];
        static valueOf(arg0: string): $ArmBlockEntity$SelectionMode;
        getTranslationKey(): string;
        getIcon(): $AllIcons;
        static FORCED_ROUND_ROBIN: $ArmBlockEntity$SelectionMode;
        static PREFER_FIRST: $ArmBlockEntity$SelectionMode;
        static ROUND_ROBIN: $ArmBlockEntity$SelectionMode;
        get translationKey(): string;
        get icon(): $AllIcons;
    }
    /**
     * Values that may be interpreted as {@link $ArmBlockEntity$SelectionMode}.
     */
    export type $ArmBlockEntity$SelectionMode_ = "round_robin" | "forced_round_robin" | "prefer_first";
    export class $AllArmInteractionPointTypes$ChuteType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $AllArmInteractionPointTypes$CampfireType extends $ArmInteractionPointType {
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
    }
    export class $AllArmInteractionPointTypes$DeployerPoint extends $ArmInteractionPoint {
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
    }
    export class $ArmInteractionPointType {
        static init(): void;
        getPriority(): number;
        createPoint(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPoint;
        static getPrimaryType(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPointType;
        canCreatePoint(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
        get priority(): number;
    }
    /**
     * Values that may be interpreted as {@link $ArmInteractionPointType}.
     */
    export type $ArmInteractionPointType_ = RegistryTypes.CreateArmInteractionPointType;
    export class $ArmInteractionPointHandler {
        static tick(): void;
        static flushSettings(arg0: $BlockPos_): void;
        static rightClickingBlocksSelectsThem(arg0: $PlayerInteractEvent$RightClickBlock): void;
        static leftClickingBlocksDeselectsThem(arg0: $PlayerInteractEvent$LeftClickBlock): void;
        constructor();
    }
}
