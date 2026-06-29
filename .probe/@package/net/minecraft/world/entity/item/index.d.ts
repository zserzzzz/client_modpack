import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $DynamicLightSource } from "@package/toni/sodiumdynamiclights";
import { $EntityType_, $Entity$RemovalReason, $LivingEntity, $Pose, $PortalProcessor, $Entity, $TraceableEntity } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FallingBlockEntityAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID, $UUID_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SynchedEntityData, $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ItemEntityAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/util/accessors";
import { $ItemEntityKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Object } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $ChangeSubscriber$CountChangeSubscriber, $ChangeSubscriber, $ChangePublisher } from "@package/net/caffeinemc/mods/lithium/common/util/change_tracking";

declare module "@package/net/minecraft/world/entity/item" {
    export class $ItemEntity extends $Entity implements $TraceableEntity, $ItemEntityAccessor, $ChangePublisher<any>, $ChangeSubscriber$CountChangeSubscriber<any>, $ItemEntityKJS {
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setDefaultPickUpDelay(): void;
        static merge(destinationStack: $ItemStack_, originStack: $ItemStack_, amount: number): $ItemStack;
        copy(): $ItemEntity;
        getTarget(): $UUID;
        setTarget(target: $UUID_ | null): void;
        getOwner(): $Entity;
        /**
         * Gets the item that this entity represents.
         */
        getItem(): $ItemStack;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getAge(): number;
        lithium$unsubscribe(arg0: $ChangeSubscriber<any>): number;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setUnlimitedLifetime(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setExtendedLifetime(): void;
        lithium$notifyCount(arg0: $ItemStack_, arg1: number, arg2: number): void;
        lithium$forceUnsubscribe(arg0: $ItemStack_, arg1: number): void;
        lithium$notify(arg0: $ItemStack_, arg1: number): void;
        lithium$subscribe(arg0: $ChangeSubscriber<any>, arg1: number): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        makeFakeItem(): void;
        static areMergable(destinationStack: $ItemStack_, originStack: $ItemStack_): boolean;
        /**
         * Returns `true` if it's possible to attack this entity with an item.
         */
        hasPickUpDelay(): boolean;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNeverPickUp(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoPickUpDelay(): void;
        setPickUpDelay(pickupDelay: number): void;
        /**
         * Prepares this entity in new dimension by copying NBT data from entity in old dimension
         */
        setThrower(entity: $Entity): void;
        /**
         * Sets the item that this entity represents.
         */
        setItem(stack: $ItemStack_): void;
        getSpin(partialTicks: number): number;
        lithium$unsubscribeWithData(arg0: $ChangeSubscriber<$Object>, arg1: number): void;
        lithium$isSubscribedWithData(arg0: $ChangeSubscriber<$ItemStack_>, arg1: number): boolean;
        setTicksUntilDespawn(pickupDelay: number): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setDefaultPickUpDelay(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoPickUpDelay(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setInfinitePickUpDelay(): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getTicksUntilDespawn(): number;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoDespawn(): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getLifespan(): number;
        setLifespan(pickupDelay: number): void;
        lithium$getOwner(): $UUID;
        serializeNBT(arg0: $HolderLookup$Provider): $Object;
        firstTick: boolean;
        lifespan: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static EYE_HEIGHT: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static INFINITE_PICKUP_DELAY: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static LIFETIME: number;
        bobOffs: number;
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
        pickupDelay: number;
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
        static BASE_SAFE_FALL_DISTANCE: number;
        age: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$ItemEntity>, level: $Level_);
        constructor(level: $Level_, posX: number, arg2: number, posY: number, arg4: $ItemStack_, posZ: number, arg6: number, itemStack: number);
        constructor(level: $Level_, posX: number, arg2: number, posY: number, arg4: $ItemStack_);
        get owner(): $Entity;
        set pickUpDelay(value: number);
        set thrower(value: $Entity);
    }
    export class $PrimedTnt extends $Entity implements $TraceableEntity, $DynamicLightSource {
        /**
         * Returns null or the entityliving it was ignited by
         */
        getOwner(): $LivingEntity;
        /**
         * Called to update the entity's position/logic.
         */
        explode(): void;
        setBlockState(blockState: $BlockState_): void;
        getBlockState(): $BlockState;
        /**
         * Gets the fuse from the data manager
         */
        getFuse(): number;
        setFuse(life: number): void;
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
        static TAG_FUSE: string;
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
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$PrimedTnt>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number, arg4: $LivingEntity | null);
        get owner(): $LivingEntity;
    }
    export class $FallingBlockEntity extends $Entity implements $FallingBlockEntityAccessor {
        static callInit$create_$md$c99f8a$0(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: $BlockState_): $FallingBlockEntity;
        getStartPos(): $BlockPos;
        setStartPos(startPos: $BlockPos_): void;
        setBlockState(state: $BlockState_): void;
        /**
         * Called to update the entity's position/logic.
         */
        disableDrop(): void;
        setHurtsEntities(fallDamagePerDistance: number, fallDamageMax: number): void;
        callOnBrokenAfterFall(block: $Block_, pos: $BlockPos_): void;
        getBlockState(): $BlockState;
        static fall(level: $Level_, pos: $BlockPos_, blockState: $BlockState_): $FallingBlockEntity;
        handler$fce000$architectury$handleLand(ci: $CallbackInfo, block: $Block_, blockPos2: $BlockPos_, bl: boolean, bl2: boolean, d: number, blockState: $BlockState_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        cancelDrop: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        dropItem: boolean;
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
        blockData: $CompoundTag;
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
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        forceTickAfterTeleportToDuplicate: boolean;
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
        static DATA_START_POS: $EntityDataAccessor<$BlockPos>;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        time: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$FallingBlockEntity>, level: $Level_);
    }
}
