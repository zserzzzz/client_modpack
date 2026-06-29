import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ClientContraption } from "@package/com/simibubi/create/content/contraptions/render";
import { $EntityType_, $Entity$RemovalReason, $LivingEntity, $Pose, $PortalProcessor, $Entity, $EntityType$Builder } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Shapes$DoubleLineConsumer_ } from "@package/net/minecraft/world/phys/shapes";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $InputEvent$InteractionKeyMappingTriggered } from "@package/net/neoforged/neoforge/client/event";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $MountedFluidStorage, $MountedFluidStorageWrapper } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $FloatingClusterContainer } from "@package/dev/ryanhcode/sable/physics/floating_block";
import { $MountedStorageAccessor } from "@package/dev/ryanhcode/offroad/mixin";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IEntityWithComplexSpawn } from "@package/net/neoforged/neoforge/entity";
import { $ContraptionType } from "@package/com/simibubi/create/api/contraption";
import { $StructureTemplate$StructureBlockInfo_, $StructureTemplate$StructureBlockInfo } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $ContraptionEntityAddon } from "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/compat/create";
import { $MinecartController } from "@package/com/simibubi/create/content/contraptions/minecart/capability";
import { $CombinedInvWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $INamedIconOptions } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $Mirror_, $Mirror, $Rotation_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $KinematicContraption } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $Vector3dc, $Quaterniond } from "@package/org/joml";
import { $MassTracker } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $MutablePair } from "@package/org/apache/commons/lang3/tuple";
import { $UUID_, $ArrayList, $Map, $Set, $UUID, $List, $Map_, $Collection_, $List_ } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $CenteredSideValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $BiConsumer_, $BiPredicate_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2DoubleMap, $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $Direction$Axis_, $BlockPos_, $Vec3i, $HolderLookup$Provider, $Direction_, $Direction$Axis, $Direction } from "@package/net/minecraft/core";
import { $Enum, $Exception, $Iterable_, $Record, $Object } from "@package/java/lang";
import { $Couple, $WorldAttached } from "@package/net/createmod/catnip/data";
import { $BlockGetter, $EntityGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $CollisionList, $Matrix3d } from "@package/com/simibubi/create/foundation/collision";
import { $TagKey } from "@package/net/minecraft/tags";
import { $BoundingBox3i, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $MovingInteractionBehaviour } from "@package/com/simibubi/create/api/behaviour/interaction";
import { $PlayerTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $InvokerContraptionCollider } from "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/mixin/compat/neoforge/create";
import { $WrappedLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ContraptionAccessor, $ControlledContraptionEntityAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $MountedItemStorageWrapper, $MountedItemStorage } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as actors from "@package/com/simibubi/create/content/contraptions/actors";
export * as elevator from "@package/com/simibubi/create/content/contraptions/elevator";
export * as minecart from "@package/com/simibubi/create/content/contraptions/minecart";
export * as sync from "@package/com/simibubi/create/content/contraptions/sync";
export * as bearing from "@package/com/simibubi/create/content/contraptions/bearing";
export * as behaviour from "@package/com/simibubi/create/content/contraptions/behaviour";
export * as chassis from "@package/com/simibubi/create/content/contraptions/chassis";
export * as gantry from "@package/com/simibubi/create/content/contraptions/gantry";
export * as pulley from "@package/com/simibubi/create/content/contraptions/pulley";
export * as render from "@package/com/simibubi/create/content/contraptions/render";
export * as glue from "@package/com/simibubi/create/content/contraptions/glue";
export * as mounted from "@package/com/simibubi/create/content/contraptions/mounted";
export * as data from "@package/com/simibubi/create/content/contraptions/data";
export * as wrench from "@package/com/simibubi/create/content/contraptions/wrench";
export * as piston from "@package/com/simibubi/create/content/contraptions/piston";

declare module "@package/com/simibubi/create/content/contraptions" {
    export class $ContraptionBlockChangedPacket extends $Record implements $ClientboundPacketPayload {
        newState(): $BlockState;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        localPos(): $BlockPos;
        entityId(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionBlockChangedPacket>;
        constructor(entityId: number, localPos: $BlockPos_, newState: $BlockState_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionBlockChangedPacket}.
     */
    export type $ContraptionBlockChangedPacket_ = { entityId?: number, newState?: $BlockState_, localPos?: $BlockPos_,  } | [entityId?: number, newState?: $BlockState_, localPos?: $BlockPos_, ];
    export class $ContraptionCollider$PlayerType extends $Enum<$ContraptionCollider$PlayerType> {
    }
    /**
     * Values that may be interpreted as {@link $ContraptionCollider$PlayerType}.
     */
    export type $ContraptionCollider$PlayerType_ = "none" | "client" | "remote" | "server";
    export class $StructureTransform {
        apply(arg0: $BlockEntity): void;
        apply(arg0: $BlockPos_): $BlockPos;
        apply(arg0: $BlockState_): $BlockState;
        apply(arg0: $Vec3_): $Vec3;
        rotateAxis(arg0: $Direction$Axis_): $Direction$Axis;
        unapply(arg0: $BlockPos_): $BlockPos;
        rotateFacing(arg0: $Direction_): $Direction;
        applyWithoutOffset(arg0: $Vec3_): $Vec3;
        applyWithoutOffset(arg0: $BlockPos_): $BlockPos;
        unapplyWithoutOffset(arg0: $BlockPos_): $BlockPos;
        unapplyWithoutOffset(arg0: $Vec3_): $Vec3;
        applyWithoutOffsetUncentered(arg0: $Vec3_): $Vec3;
        mirrorFacing(arg0: $Direction_): $Direction;
        mirror: $Mirror;
        offset: $BlockPos;
        rotationAxis: $Direction$Axis;
        rotation: $Rotation;
        angle: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $StructureTransform>;
        constructor(arg0: $BlockPos_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $BlockPos_, arg1: $Direction$Axis_, arg2: $Rotation_, arg3: $Mirror_);
    }
    export class $ContraptionRelocationPacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        entityId(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionRelocationPacket>;
        constructor(entityId: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionRelocationPacket}.
     */
    export type $ContraptionRelocationPacket_ = { entityId?: number,  } | [entityId?: number, ];
    export class $ContraptionStallPacket extends $Record implements $ClientboundPacketPayload {
        x(): number;
        z(): number;
        handle(arg0: $LocalPlayer): void;
        y(): number;
        angle(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        entityId(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionStallPacket>;
        constructor(entityId: number, x: number, y: number, z: number, angle: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionStallPacket}.
     */
    export type $ContraptionStallPacket_ = { z?: number, y?: number, x?: number, angle?: number, entityId?: number,  } | [z?: number, y?: number, x?: number, angle?: number, entityId?: number, ];
    export class $TranslatingContraption extends $Contraption {
        getOrCreateColliders(arg0: $Level_, arg1: $Direction_): $Set<$BlockPos>;
        createColliders(arg0: $Level_, arg1: $Direction_): $Set<$BlockPos>;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor();
    }
    export class $IDisplayAssemblyExceptions {
    }
    export interface $IDisplayAssemblyExceptions {
        getLastAssemblyException(): $AssemblyException;
        addExceptionToTooltip(arg0: $List_<$Component_>): boolean;
        get lastAssemblyException(): $AssemblyException;
    }
    /**
     * Values that may be interpreted as {@link $IDisplayAssemblyExceptions}.
     */
    export type $IDisplayAssemblyExceptions_ = (() => $AssemblyException);
    export class $AbstractContraptionEntity extends $Entity implements $IEntityWithComplexSpawn, $ContraptionEntityAddon, $KinematicContraption {
        static build(arg0: $EntityType$Builder<never>): $EntityType$Builder<never>;
        move(arg0: number, arg1: number, arg2: number): void;
        control(arg0: $BlockPos_, arg1: $Collection_<number>, arg2: $Player): boolean;
        applyRotation(arg0: $Vec3_, arg1: number): $Vec3;
        getYawOffset(): number;
        disassemble(): void;
        setBlock(arg0: $BlockPos_, arg1: $StructureTemplate$StructureBlockInfo_): void;
        sable$liftProviders(): $Map<any, any>;
        getContactPointMotion(arg0: $Vec3_): $Vec3;
        supportsTerrainCollision(): boolean;
        sable$getLocalBounds(arg0: $BoundingBox3i): void;
        sable$getOrientation(arg0: number): $Quaterniond;
        sable$getMassTracker(): $MassTracker;
        setContraptionMotion(arg0: $Vec3_): void;
        applyLocalTransforms(arg0: $PoseStack, arg1: number): void;
        sable$shouldCollide(): boolean;
        getPassengerPosition(arg0: $Entity, arg1: number): $Vec3;
        sable$getFloatingClusterContainer(): $FloatingClusterContainer;
        asyncparticles$isParticleCollision(): boolean;
        canInteractWithBlock(arg0: $Player, arg1: $Vec3_, arg2: number): boolean;
        canInteractWithBlock(arg0: $Player, arg1: $BlockPos_, arg2: number): boolean;
        registerColliding(arg0: $Entity): void;
        getContraption(): $Contraption;
        setControllingPlayer(arg0: $UUID_): void;
        startControlling(arg0: $BlockPos_, arg1: $Player): boolean;
        stopControlling(arg0: $BlockPos_): void;
        getPrevAnchorVec(): $Vec3;
        getAnchorVec(): $Vec3;
        addSittingPassenger(arg0: $Entity, arg1: number): void;
        isStalled(): boolean;
        getRotationState(): $AbstractContraptionEntity$ContraptionRotationState;
        collisionEnabled(): boolean;
        getContraptionName(): $Component;
        getPrevPositionVec(): $Vec3;
        static pitchFromVector(arg0: $Vec3_): number;
        toLocalVector(arg0: $Vec3_, arg1: number, arg2: boolean): $Vec3;
        toLocalVector(arg0: $Vec3_, arg1: number): $Vec3;
        readSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        alignPassenger(arg0: $Entity): void;
        sable$getPosition(arg0: number): $Vector3dc;
        isPrevPosInvalid(): boolean;
        writeSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        refreshPSIs(): void;
        static yawFromVector(arg0: $Vec3_): number;
        sable$blockGetter(): $BlockGetter;
        isAliveOrStale(): boolean;
        sable$isValid(): boolean;
        isReadyForRender(): boolean;
        reverseRotation(arg0: $Vec3_, arg1: number): $Vec3;
        tickActors(): void;
        toGlobalVector(arg0: $Vec3_, arg1: number): $Vec3;
        toGlobalVector(arg0: $Vec3_, arg1: number, arg2: boolean): $Vec3;
        handlePlayerInteraction(arg0: $Player, arg1: $BlockPos_, arg2: $Direction_, arg3: $InteractionHand_): boolean;
        getControllingPlayer(): ($UUID) | undefined;
        sable$getOrientation(): $Quaterniond;
        sable$getPosition(): $Vector3dc;
        sable$getLocalPose(arg0: $Pose3d, arg1: number): $Pose3d;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        staleTicks: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        collidingEntities: $Map<$Entity, $MutableInt>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get yawOffset(): number;
        set contraptionMotion(value: $Vec3_);
        get contraption(): $Contraption;
        get prevAnchorVec(): $Vec3;
        get anchorVec(): $Vec3;
        get stalled(): boolean;
        get rotationState(): $AbstractContraptionEntity$ContraptionRotationState;
        get contraptionName(): $Component;
        get prevPositionVec(): $Vec3;
        get prevPosInvalid(): boolean;
        get aliveOrStale(): boolean;
        get readyForRender(): boolean;
    }
    export class $ContraptionWorld extends $WrappedLevel {
        self(): $EntityGetter;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        pendingBlockEntityTickers: $List<$TickingBlockEntity>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(arg0: $Level_, arg1: $Contraption);
    }
    export class $ContraptionCollider implements $InvokerContraptionCollider {
        static invoker_getPotentiallyCollidedShapes$asyncparticles_$md$c99f8a$0(arg0: $Level_, arg1: $Contraption, arg2: $AABB_, arg3: $Shapes$DoubleLineConsumer_): void;
        static worldToLocalPos(arg0: $Vec3_, arg1: $Vec3_, arg2: $AbstractContraptionEntity$ContraptionRotationState): $Vec3;
        static worldToLocalPos(arg0: $Vec3_, arg1: $Vec3_, arg2: $Matrix3d, arg3: number): $Vec3;
        static worldToLocalPos(arg0: $Vec3_, arg1: $AbstractContraptionEntity): $Vec3;
        static isCollidingWithWorld(arg0: $Level_, arg1: $TranslatingContraption, arg2: $BlockPos_, arg3: $Direction_): boolean;
        static collideBlocks(arg0: $AbstractContraptionEntity): boolean;
        static lockPacketReceived(arg0: number, arg1: number, arg2: number): void;
        static getWorldToLocalTranslation(arg0: $Entity, arg1: $Vec3_, arg2: $Matrix3d, arg3: number): $Vec3;
        constructor();
    }
    export class $OrientedContraptionEntity extends $AbstractContraptionEntity {
        static create(arg0: $Level_, arg1: $Contraption, arg2: $Direction_): $OrientedContraptionEntity;
        getInitialOrientation(): $Direction;
        startAtYaw(arg0: number): void;
        getInitialYaw(): number;
        getCouplingId(): $UUID;
        startAtInitialYaw(): void;
        static createAtYaw(arg0: $Level_, arg1: $Contraption, arg2: $Direction_, arg3: number): $OrientedContraptionEntity;
        setCouplingId(arg0: $UUID_): void;
        isInitialOrientationPresent(): boolean;
        setInitialOrientation(arg0: $Direction_): void;
        getCoupledCartsIfPresent(): $Couple<$MinecartController>;
        static handleRelocationPacket(arg0: $ContraptionRelocationPacket_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        pitch: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        prevYaw: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        staleTicks: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        prevPitch: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yaw: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        collidingEntities: $Map<$Entity, $MutableInt>;
        static BASE_SAFE_FALL_DISTANCE: number;
        nonDamageTicks: number;
        targetYaw: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get initialYaw(): number;
        get initialOrientationPresent(): boolean;
        get coupledCartsIfPresent(): $Couple<$MinecartController>;
    }
    export class $Contraption implements $ContraptionAccessor {
        stop(arg0: $Level_): void;
        getType(): $ContraptionType;
        getStorage(): $MountedStorageManager;
        static fromNBT(arg0: $Level_, arg1: $CompoundTag_, arg2: boolean): $Contraption;
        static getRadius(arg0: $Iterable_<$Vec3i>, arg1: $Direction$Axis_): number;
        invalidateClientContraptionChildren(): void;
        getBlocks(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>;
        invalidateClientContraptionStructure(): void;
        getActors(): $List<$MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>>;
        getActorAt(arg0: $BlockPos_): $MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>;
        containsBlockBreakers(): boolean;
        assemble(arg0: $Level_, arg1: $BlockPos_): boolean;
        readNBT(arg0: $Level_, arg1: $CompoundTag_, arg2: boolean): void;
        writeNBT(arg0: $HolderLookup$Provider, arg1: boolean): $CompoundTag;
        getSeatOf(arg0: $UUID_): $BlockPos;
        searchMovedStructure(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): boolean;
        resetClientContraption(): void;
        addPassengersToWorld(arg0: $Level_, arg1: $StructureTransform, arg2: $List_<$Entity>): void;
        expandBoundsAroundAxis(arg0: $Direction$Axis_): void;
        getContraptionWorld(): $ContraptionWorld;
        getSeats(): $List<$BlockPos>;
        invalidateColliders(): void;
        removeBlocksFromWorld(arg0: $Level_, arg1: $BlockPos_): void;
        startMoving(arg0: $Level_): void;
        onEntityCreated(arg0: $AbstractContraptionEntity): void;
        canBeStabilized(arg0: $Direction_, arg1: $BlockPos_): boolean;
        writeStorage(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getSeatMapping(): $Map<$UUID, number>;
        onEntityInitialize(arg0: $Level_, arg1: $AbstractContraptionEntity): void;
        isHiddenInPortal(arg0: $BlockPos_): boolean;
        getBearingPosOf(arg0: $UUID_): $BlockPos;
        setSeatMapping(arg0: $Map_<$UUID_, number>): void;
        addBlocksToWorld(arg0: $Level_, arg1: $StructureTransform): void;
        getIsLegacy(): $Object2BooleanMap<$BlockPos>;
        forEachActor(arg0: $Level_, arg1: $BiConsumer_<$MovementBehaviour, $MovementContext>): void;
        tickStorage(arg0: $AbstractContraptionEntity): void;
        getInteractors(): $Map<$BlockPos, $MovingInteractionBehaviour>;
        handler$ijc000$createdieselgenerators$getBlockEntityNBT(arg0: $Level_, arg1: $BlockPos_, arg2: $CallbackInfoReturnable<any>): void;
        getSimplifiedEntityColliders(): $CollisionList;
        getOrCreateClientContraptionLazy(): $ClientContraption;
        setActorsActive(arg0: $ItemStack_, arg1: boolean): void;
        getDisabledActors(): $List<$ItemStack>;
        isActorTypeDisabled(arg0: $ItemStack_): boolean;
        getBlockEntityClientSide(arg0: $BlockPos_): $BlockEntity;
        getSuperGlue(): $List<$AABB>;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor();
        get type(): $ContraptionType;
        get storage(): $MountedStorageManager;
        get blocks(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>;
        get actors(): $List<$MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>>;
        get contraptionWorld(): $ContraptionWorld;
        get seats(): $List<$BlockPos>;
        get interactors(): $Map<$BlockPos, $MovingInteractionBehaviour>;
        get orCreateClientContraptionLazy(): $ClientContraption;
        get disabledActors(): $List<$ItemStack>;
        get superGlue(): $List<$AABB>;
    }
    export class $IControlContraption {
    }
    export interface $IControlContraption {
        attach(arg0: $ControlledContraptionEntity): void;
        isValid(): boolean;
        getBlockPosition(): $BlockPos;
        isAttachedTo(arg0: $AbstractContraptionEntity): boolean;
        onStall(): void;
        get valid(): boolean;
        get blockPosition(): $BlockPos;
    }
    export class $ContraptionColliderLockPacket$ContraptionColliderLockPacketRequest extends $Record implements $ServerboundPacketPayload {
        offset(): number;
        handle(arg0: $ServerPlayer): void;
        contraption(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionColliderLockPacket$ContraptionColliderLockPacketRequest>;
        constructor(contraption: number, offset: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionColliderLockPacket$ContraptionColliderLockPacketRequest}.
     */
    export type $ContraptionColliderLockPacket$ContraptionColliderLockPacketRequest_ = { contraption?: number, offset?: number,  } | [contraption?: number, offset?: number, ];
    export class $DirectionalExtenderScrollOptionSlot extends $CenteredSideValueBoxTransform {
        constructor(arg0: $BiPredicate_<$BlockState, $Direction>);
    }
    export class $AbstractContraptionEntity$ContraptionRotationState {
        getYawOffset(): number;
        asMatrix(): $Matrix3d;
        hasVerticalRotation(): boolean;
        xRotation: number;
        secondYRotation: number;
        zRotation: number;
        static NONE: $AbstractContraptionEntity$ContraptionRotationState;
        yRotation: number;
        constructor();
        get yawOffset(): number;
    }
    export class $ContraptionColliderLockPacket extends $Record implements $ClientboundPacketPayload {
        offset(): number;
        handle(arg0: $LocalPlayer): void;
        contraption(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        sender(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionColliderLockPacket>;
        constructor(contraption: number, offset: number, sender: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionColliderLockPacket}.
     */
    export type $ContraptionColliderLockPacket_ = { sender?: number, offset?: number, contraption?: number,  } | [sender?: number, offset?: number, contraption?: number, ];
    export class $TrainCollisionPacket extends $Record implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        damage(): number;
        contraptionEntityId(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainCollisionPacket>;
        constructor(damage: number, contraptionEntityId: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $TrainCollisionPacket}.
     */
    export type $TrainCollisionPacket_ = { contraptionEntityId?: number, damage?: number,  } | [contraptionEntityId?: number, damage?: number, ];
    export class $AssemblyException extends $Exception {
        getPosition(): $BlockPos;
        static write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $AssemblyException): void;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $AssemblyException;
        hasPosition(): boolean;
        static tooManyPistonPoles(): $AssemblyException;
        static noPistonPoles(): $AssemblyException;
        static structureTooLarge(): $AssemblyException;
        static unloadedChunk(arg0: $BlockPos_): $AssemblyException;
        static unmovableBlock(arg0: $BlockPos_, arg1: $BlockState_): $AssemblyException;
        static notEnoughSails(arg0: number): $AssemblyException;
        component: $Component;
        constructor(arg0: string, ...arg1: $Object[]);
        constructor(arg0: $Component_);
        get position(): $BlockPos;
    }
    export class $IControlContraption$RotationMode extends $Enum<$IControlContraption$RotationMode> implements $INamedIconOptions {
        static values(): $IControlContraption$RotationMode[];
        static valueOf(arg0: string): $IControlContraption$RotationMode;
        getTranslationKey(): string;
        getIcon(): $AllIcons;
        static ROTATE_PLACE: $IControlContraption$RotationMode;
        static ROTATE_PLACE_RETURNED: $IControlContraption$RotationMode;
        static ROTATE_NEVER_PLACE: $IControlContraption$RotationMode;
        get translationKey(): string;
        get icon(): $AllIcons;
    }
    /**
     * Values that may be interpreted as {@link $IControlContraption$RotationMode}.
     */
    export type $IControlContraption$RotationMode_ = "rotate_place" | "rotate_place_returned" | "rotate_never_place";
    export class $MountedStorageManager implements $MountedStorageAccessor {
        initialize(): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $Contraption): void;
        unmount(arg0: $Level_, arg1: $StructureTemplate$StructureBlockInfo_, arg2: $BlockPos_, arg3: $BlockEntity): void;
        tick(arg0: $AbstractContraptionEntity): void;
        addBlock(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $BlockEntity): void;
        getFluids(): $MountedFluidStorageWrapper;
        handlePlayerStorageInteraction(arg0: $Contraption, arg1: $Player, arg2: $BlockPos_): boolean;
        getFuelItems(): $MountedItemStorageWrapper;
        getAllItems(): $CombinedInvWrapper;
        handleSync(arg0: $MountedStorageSyncPacket_, arg1: $AbstractContraptionEntity): void;
        getAllItemStorages(): $ImmutableMap<$BlockPos, $MountedItemStorage>;
        getMountedItems(): $MountedItemStorageWrapper;
        attachExternal(arg0: $IItemHandlerModifiable): void;
        getItemsBuilder(): $Map<$BlockPos, $MountedItemStorage>;
        constructor();
        get fluids(): $MountedFluidStorageWrapper;
        get fuelItems(): $MountedItemStorageWrapper;
        get allItems(): $CombinedInvWrapper;
        get allItemStorages(): $ImmutableMap<$BlockPos, $MountedItemStorage>;
        get mountedItems(): $MountedItemStorageWrapper;
        get itemsBuilder(): $Map<$BlockPos, $MountedItemStorage>;
    }
    export class $IControlContraption$MovementMode extends $Enum<$IControlContraption$MovementMode> implements $INamedIconOptions {
        static values(): $IControlContraption$MovementMode[];
        static valueOf(arg0: string): $IControlContraption$MovementMode;
        getTranslationKey(): string;
        getIcon(): $AllIcons;
        static MOVE_PLACE_RETURNED: $IControlContraption$MovementMode;
        static MOVE_NEVER_PLACE: $IControlContraption$MovementMode;
        static MOVE_PLACE: $IControlContraption$MovementMode;
        get translationKey(): string;
        get icon(): $AllIcons;
    }
    /**
     * Values that may be interpreted as {@link $IControlContraption$MovementMode}.
     */
    export type $IControlContraption$MovementMode_ = "move_place" | "move_place_returned" | "move_never_place";
    export class $ControlledContraptionEntity extends $AbstractContraptionEntity implements $ControlledContraptionEntityAccessor {
        getRotationAxis(): $Direction$Axis;
        static create(arg0: $Level_, arg1: $IControlContraption, arg2: $Contraption): $ControlledContraptionEntity;
        getAngle(arg0: number): number;
        setRotationAxis(arg0: $Direction$Axis_): void;
        setAngle(arg0: number): void;
        invokeMakeStructureTransform(): $StructureTransform;
        getControllerPos(): $BlockPos;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        staleTicks: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        collidingEntities: $Map<$Entity, $MutableInt>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get controllerPos(): $BlockPos;
    }
    export class $MountedStorageSyncPacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        items(): $Map<$BlockPos, $MountedItemStorage>;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        fluids(): $Map<$BlockPos, $MountedFluidStorage>;
        contraptionId(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedStorageSyncPacket>;
        constructor(contraptionId: number, items: $Map_<$BlockPos_, $MountedItemStorage>, fluids: $Map_<$BlockPos_, $MountedFluidStorage>);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $MountedStorageSyncPacket}.
     */
    export type $MountedStorageSyncPacket_ = { contraptionId?: number, fluids?: $Map_<$BlockPos_, $MountedFluidStorage>, items?: $Map_<$BlockPos_, $MountedItemStorage>,  } | [contraptionId?: number, fluids?: $Map_<$BlockPos_, $MountedFluidStorage>, items?: $Map_<$BlockPos_, $MountedItemStorage>, ];
    export class $ContraptionDisassemblyPacket extends $Record implements $ClientboundPacketPayload {
        transform(): $StructureTransform;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        entityId(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionDisassemblyPacket>;
        constructor(entityId: number, transform: $StructureTransform);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionDisassemblyPacket}.
     */
    export type $ContraptionDisassemblyPacket_ = { transform?: $StructureTransform, entityId?: number,  } | [transform?: $StructureTransform, entityId?: number, ];
    export class $ContraptionHandlerClient {
        static rayTraceContraption(arg0: $Vec3_, arg1: $Vec3_, arg2: $AbstractContraptionEntity): $BlockHitResult;
        static getRayInputs(arg0: $LocalPlayer): $Couple<$Vec3>;
        static rightClickingOnContraptionsGetsHandledLocally(arg0: $InputEvent$InteractionKeyMappingTriggered): void;
        static preventRemotePlayersWalkingAnimations(arg0: $PlayerTickEvent$Post): void;
        constructor();
    }
    export class $ContraptionHandler {
        static tick(arg0: $Level_): void;
        static entitiesWhoJustDismountedGetSentToTheRightLocation(arg0: $LivingEntity, arg1: $Level_): void;
        static addSpawnedContraptionsToCollisionList(arg0: $Entity, arg1: $Level_): void;
        static loadedContraptions: $WorldAttached<$Map<number, $WeakReference<$AbstractContraptionEntity>>>;
        constructor();
    }
}
