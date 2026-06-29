import { $EntityTracker, $SleepInBed, $AnimalPanic, $LongJumpToPreferredBlock, $PositionTracker, $PlayTagWithOtherKids, $LookAtTargetSink, $AnimalMakeLove, $DoNothing, $LongJumpMidJump, $CountDownCooldownTicks, $InteractWithDoor, $BlockPosTracker, $LongJumpToRandomPos, $JumpOnBed, $OneShot, $FollowTemptation, $Swim, $MoveToTargetSink, $BehaviorControl, $PrepareRamNearestTarget } from "@package/net/minecraft/world/entity/ai/behavior";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $MoveControl$Operation_, $MoveControl, $MoveControl$Operation, $LookControl, $JumpControl } from "@package/net/minecraft/world/entity/ai/control";
import { $EntityType_, $Entity, $PathfinderMob, $LivingEntity, $AgeableMob, $Mob } from "@package/net/minecraft/world/entity";
import { $ForceUnmount } from "@package/net/minecraft/world/entity/ai/behavior/warden";
import { $MemoryModuleType_ } from "@package/net/minecraft/world/entity/ai/memory";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $BiConsumer_, $Function_, $Predicate_, $BiPredicate_, $ToIntFunction_ } from "@package/java/util/function";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $Holder, $BlockPos_, $GlobalPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MoveControlJSBuilder, $JumpControlJSBuilder, $LookControlJSBuilder } from "@package/net/liopyu/entityjs/builders/misc";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Enum } from "@package/java/lang";

declare module "@package/net/liopyu/entityjs/util/ai" {
    export class $JumpControlJS extends $JumpControl {
        mob: $Mob;
        constructor(arg0: $Mob, arg1: $JumpControlJSBuilder);
    }
    export class $MoveControlJS extends $MoveControl {
        getOperation(): $MoveControl$Operation;
        setSpeedModifier(arg0: number): void;
        setStrafeForwards(arg0: number): void;
        getStrafeRight(): number;
        setOperation(arg0: $MoveControl$Operation_): void;
        setStrafeRight(arg0: number): void;
        getStrafeForwards(): number;
        getMob(): $Mob;
        speedModifier: number;
        mob: $Mob;
        strafeForwards: number;
        static MAX_TURN: number;
        wantedZ: number;
        wantedY: number;
        strafeRight: number;
        wantedX: number;
        static MIN_SPEED_SQR: number;
        operation: $MoveControl$Operation;
        static MIN_SPEED: number;
        constructor(arg0: $Mob, arg1: $MoveControlJSBuilder);
    }
    export class $LookControlJS extends $LookControl {
        getBuilder(): $LookControlJSBuilder;
        setLookAtCooldown(arg0: number): void;
        getyMaxRotSpeed(): number;
        setxMaxRotAngle(arg0: number): void;
        setyMaxRotSpeed(arg0: number): void;
        getxMaxRotAngle(): number;
        getLookAtCooldown(): number;
        setWantedX(arg0: number): void;
        getMob(): $Mob;
        setWantedZ(arg0: number): void;
        setWantedY(arg0: number): void;
        mob: $Mob;
        wantedZ: number;
        wantedY: number;
        wantedX: number;
        xMaxRotAngle: number;
        yMaxRotSpeed: number;
        lookAtCooldown: number;
        constructor(arg0: $Mob, arg1: $LookControlJSBuilder);
        get builder(): $LookControlJSBuilder;
    }
    export class $Behaviors extends $Enum<$Behaviors> {
        static values(): $Behaviors[];
        static valueOf(arg0: string): $Behaviors;
        /**
         * Creates a `Mount` behavior
         * 
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        mount(arg0: number): $BehaviorControl<$LivingEntity>;
        /**
         * Creates a new `TargetingConditions` for use in `.prepareRamNearestTarget()`
         * 
         * @param isForCombat If the conditions will be used for combat
         * @param range The range at which the entity will target
         * @param ignoreLineOfSight If the line of sight requirement should be ignored
         * @param ignoreInvisibilityTesting If the consideration of the target's invisibility status should be ignored
         * @param selector Sets the predicate for the target, may be null to accept all entities
         */
        targetingConditions(arg0: boolean, arg1: number, arg2: boolean, arg3: boolean, arg4: $Predicate_<$LivingEntity>): $TargetingConditions;
        /**
         * Creates a `WakeUp` behavior
         */
        wakeUp(): $BehaviorControl<$LivingEntity>;
        /**
         * Creates a `Swim` behavior, only applicable to **mob** entities
         * 
         * @param chance The chance the mob will move upwards during a tick. Range: [0, 1]
         */
        swim(arg0: number): $Swim;
        /**
         * Creates an `AnimalMakeLove` behavior, only applicable to **animal** entities
         * 
         * @param partnerType The entity type the animal can breed with, note: both animals must have the same class unless their `canBreed` methods have been overridden
         * @param speedModifier The modifier to the animal's speed when this behavior is active
         */
        animalMakeLove(arg0: $EntityType_<$Animal>, arg1: number, arg2: number): $AnimalMakeLove;
        /**
         * Creates a `MeleeAttack` behavior, only applicable to **mob** entities
         * 
         * @param attackCooldown The attack cooldown of the entity when this behavior is active
         */
        meleeAttack(arg0: number): $OneShot<$Mob>;
        /**
         * Creates an `AnimalPanic` behavior, only applicable to **pathfinder** entities
         * 
         * @param speedModifier The modifier to the animal's speed when this behavior is active
         */
        animalPanic(arg0: number): $AnimalPanic<any>;
        /**
         * Creates an `BabyFollowAdult` behavior, only applicable to **ageable** mobs
         * 
         * @param minFollowRange The minimum follow distance of the baby
         * @param maxFollowRange The maximum follow distance of the baby
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        babyFollowAdult(arg0: number, arg1: number, arg2: $Function_<$LivingEntity, number>): $OneShot<$AgeableMob>;
        /**
         * Creates a `TryFindWater` behavior, only applicable to **pathfinder** mobs
         * 
         * @param range The range, in all directions, at which the mob will search for land
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        tryFindWater(arg0: number, arg1: number): $BehaviorControl<$PathfinderMob>;
        /**
         * Creates a `RandomStroll` behavior, only applicable to **pathfinder** mobs
         * 
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param maxHorizontalDistance The maximum horizontal distance the mob will stroll
         * @param maxVerticalDistance The maximum vertical distance the mob will stroll
         */
        randomStroll(arg0: number, arg1: number, arg2: number): $BehaviorControl<$PathfinderMob>;
        /**
         * Creates a `LongJumpMidJump` behavior, only applicable to **mob** entities
         * 
         * @param minTicksBetweenJumps The minimum number of ticks that must pass before the entity must jump
         * @param maxTicksBetweenJumps The maximum number of ticks that must pass before the entity must jump
         * @param landingSound The sound event that will be broadcast when the entity lands
         */
        longJumpMidJump(arg0: number, arg1: number, arg2: $SoundEvent_): $LongJumpMidJump;
        /**
         * Creates a `StrollToPoi` behavior, only applicable to **pathfinder** mobs
         * 
         * @param memoryType The memory that is used for the poi
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param closeEnoughDist The distance that is considered close enough to the poi
         * @param maxDistanceFromPoi The maximum distance away from the poi that this behavior will apply
         */
        strollToPoi(arg0: $MemoryModuleType_<$GlobalPos_>, arg1: number, arg2: number, arg3: number): $BehaviorControl<$PathfinderMob>;
        /**
         * Creates an `InteractWith` behavior
         * 
         * @param typeToInteractWith The entity type to interact with
         * @param interactionRange The range the entity will interact with the other entity
         * @param selfFilter A self-predicate which determines when this behavior can be used
         * @param targetFilter A target-predicate which determines when this behavior can be used
         * @param memory The memory type to use for this behavior
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param maxDistance The maximum distance they entity may acquire an interaction target from
         */
        interactWith<E extends $LivingEntity, T extends $LivingEntity>(arg0: $EntityType_<T>, arg1: number, arg2: $Predicate_<E>, arg3: $Predicate_<T>, arg4: $MemoryModuleType_<T>, arg5: number, arg6: number): $BehaviorControl<E>;
        /**
         * Creates a `SetRaidStatus` behavior
         */
        setRaidStatus(): $BehaviorControl<$LivingEntity>;
        /**
         * Creates a `StartAttacking` behavior, only applicable to **mob** entities
         * 
         * @param canAttackPredicate A predicate for if the mob can attack
         * @param targetFinder A function that finds a target to attack
         * @param duration The number of ticks that the behavior should be active for
         */
        startAttacking<E extends $Mob>(arg0: $Predicate_<E>, arg1: $Function_<E, $LivingEntity>): $BehaviorControl<E>;
        /**
         * Creates a `ValidateNearbyPoi` behavior
         * 
         * @param poiPredicate The predicate that is used to validate the poi
         * @param memoryType The memory that is used for the poi
         */
        validateNearbyPoi(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $MemoryModuleType_<$GlobalPos_>): $BehaviorControl<$LivingEntity>;
        /**
         * Creates a `EraseMemoryIf` behavior
         * 
         * @param predicate When to erase the memory
         * @param memoryType The memory type to be erased
         */
        eraseMemoryIf<E extends $LivingEntity>(arg0: $Predicate_<E>, arg1: $MemoryModuleType_<never>): $BehaviorControl<E>;
        /**
         * Creates a `BlockPosTracker` for use in `.stayCloseToTarget()`
         * 
         * @param pos THe position that is to be tracked
         */
        blockPosTracker(arg0: $BlockPos_): $BlockPosTracker;
        /**
         * Creates a `GoToWantedItem` behavior
         * 
         * @param predicate The predicate that is checked to determine if the entity may use this behavior
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param maxDistToWalk The maximum distance the entity will walk to go to the wanted item
         * @param hasWlkTargetMemoryModuleType If the entity has the `minecraft:walk_target` memory type
         */
        goToWantedItem<E extends $LivingEntity>(arg0: $Predicate_<E>, arg1: number, arg2: number, arg3: boolean): $BehaviorControl<E>;
        /**
         * Creates an `InteractWithDoor` behavior
         */
        interactWithDoor(): $InteractWithDoor;
        /**
         * Creates a `StayCloseToTarget` behavior
         * 
         * @param targetPositionTracker A function that returns the position tracker for the entity, the returned tracker may be null, see `.blockPosTracker()` and `.entityPosTracker()`
         * @param pPredicate The predicate to use with the living Entity as an argument
         * @param closeEnough The distance that is close enough to the target
         * @param tooFar The distance that is too far from the target
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        stayCloseToTarget(arg0: $Function_<$LivingEntity, $PositionTracker>, arg1: $Predicate_<$LivingEntity>, arg2: number, arg3: number, arg4: number): $BehaviorControl<$LivingEntity>;
        /**
         * Creates a `SocializeAtBell` behavior
         */
        socializeAtBell(): $OneShot<$LivingEntity>;
        /**
         * Creates a `TryFindLand` behavior, only applicable to **pathfinder** mobs
         * 
         * @param range The range, in all directions, at which the mob will search for land
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        tryFindLand(arg0: number, arg1: number): $BehaviorControl<$PathfinderMob>;
        /**
         * Creates a `FollowTemptation` behavior, only applicable to **pathfinder** mobs
         * 
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        followTemptation(arg0: $Function_<$LivingEntity, number>): $FollowTemptation;
        /**
         * Creates a `BackUpIfTooClose` behavior, only applicable to **mob** entities
         * 
         * @param tooCloseDistance The distance at which the mob will begin to backup
         * @param strafeSpeed The speed at which the entity will back away
         */
        backUpIfTooClose(arg0: number, arg1: number): $OneShot<$Mob>;
        /**
         * Creates a `ForceUnmount` behavior
         */
        forceUnmount(): $ForceUnmount;
        /**
         * Creates an `EntityTracker` for use in `.stayCloseToTarget()`
         * 
         * @param entity The target entity
         * @param trackEyeHeight If the eye height of the target should be considered
         */
        entityPosTracker(arg0: $Entity, arg1: boolean): $EntityTracker;
        /**
         * Creates a `StrollAroundPoi` behavior, only applicable to **pathfinder** mobs
         * 
         * @param memoryType The memory that is used for the poi
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param maxDistanceFromPoi The maximum distance away from the poi that the mob may go while strolling
         */
        strollAroundPoi(arg0: $MemoryModuleType_<$GlobalPos_>, arg1: number, arg2: number): $OneShot<$PathfinderMob>;
        /**
         * Creates a `LocateHidingPlace` behavior
         * 
         * @param radius The maximum radius a hiding place will be searched for
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param closeEnoughDistance The distance at which the entity considers itself close enough to the hiding place
         */
        locateHidingPlace(arg0: number, arg1: number, arg2: number): $OneShot<$LivingEntity>;
        /**
         * Creates a `ReactToBell` behavior
         */
        reactToBell(): $BehaviorControl<$LivingEntity>;
        /**
         * Creates a `InsideBrownianWalk` behavior, only applicable to **pathfinder** entities
         * 
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        insideBrownianWalk(arg0: number): $BehaviorControl<$PathfinderMob>;
        /**
         * Creates a `MoveToTargetSink` behavior, only applicable to **mob** entities
         * 
         * @param minDuration The minimum duration of the behavior
         * @param maxDuration The maximum duration of the behavior
         */
        moveToTargetSink(arg0: number, arg1: number): $MoveToTargetSink;
        /**
         * Creates a `LookAtTargetSink` behavior, only applicable to **mob** entities
         * 
         * @param minDuration The minimum duration of the behavior
         * @param maxDuration The maximum duration of the behavior
         */
        lookAtTargetSink(arg0: number, arg1: number): $LookAtTargetSink;
        /**
         * Creates a `FlyingRandomStroll` behavior, only applicable to **pathfinder** mobs
         * 
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        flyingRandomStroll(arg0: number): $BehaviorControl<$PathfinderMob>;
        /**
         * Creates a `GoToTargetLocation` behavior, only applicable to **mob** entities
         * 
         * @param locationMemory The memory type to use to store the target location
         * @param closeEnoughDistance The distance that is close enough to the location for the entity to consider it 'at' the target location
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        gotoTargetLocation<E extends $Mob>(arg0: $MemoryModuleType_<$BlockPos_>, arg1: number, arg2: number): $OneShot<E>;
        /**
         * Creates a `SetLookAndInteract` behavior
         * 
         * @param type The entity type that the entity interacts with
         * @param interactionRange The range that the entity will interact with the target
         */
        setLookAndInteract(arg0: $EntityType_<never>, arg1: number): $BehaviorControl<$LivingEntity>;
        /**
         * Creates a `ResetRaidStatus` behavior
         */
        resetRaidStatus(): $BehaviorControl<$LivingEntity>;
        /**
         * Creates a `SetHiddenState` behavior
         * 
         * @param stayHiddenSeconds How long the entity should be hidden for
         * @param closeEnoughDist The distance that is considered close enough to a hiding place
         */
        setHiddenState(arg0: number, arg1: number): $BehaviorControl<$LivingEntity>;
        /**
         * Creates a `UpdateActivityFromSchedule` behavior
         */
        updateActivityFromSchedule(): $BehaviorControl<$LivingEntity>;
        /**
         * Creates a `DoNothing` behavior
         * 
         * @param minTime The minimum amount of time to do nothing for
         * @param maxTime The maximum amount of time to do nothing for
         */
        doNothing(arg0: number, arg1: number): $DoNothing;
        /**
         * Creates a `DismountOrSkipMounting` behavior
         * 
         * @param maxWalkDistToRideTarget The maximum distance the entity is willing to walk to ride an entity
         * @param dontRideIf The predicate for when the entity should get off its mount
         */
        dismountOrSkipMounting<E extends $LivingEntity>(arg0: number, arg1: $BiPredicate_<E, $Entity>): $BehaviorControl<E>;
        /**
         * Creates a `LongJumpToRandomPos` behavior, only applicable to **mob** entities
         * 
         * @param minTimeBetweenJumps The minimum number of ticks between jumps
         * @param maxTimeBetweenJumps The maximum number of ticks between jumps
         * @param maxJumpHeight The maximum vertical distance the mob will attempt to jump between
         * @param maxJumpWidth the maximum horizontal distance the mob will attempt to jump
         * @param maxJumpVelocity The maximum velocity the mob may jump at
         * @param jumpSound The sound that is played when the mob jumps
         * @param acceptableLandingSpot A filter for what blocks are acceptable to land on
         */
        longJumpToRandomPos<E extends $Mob>(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Function_<E, $SoundEvent>, arg6: $BiPredicate_<E, $BlockPos>): $LongJumpToRandomPos<E>;
        /**
         * Creates a `PlayTagWithOtherKids` behavior, only applicable to **pathfinder** mobs
         */
        playTagWithOtherKids(): $PlayTagWithOtherKids;
        /**
         * Creates a `SetClosestHomeAsWalkTarget` behavior
         * 
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        setClosestHomeAsWalkTarget(arg0: number): $BehaviorControl<$PathfinderMob>;
        /**
         * Creates a `setEntityLookTarget` behavior
         * 
         * @param predicate A predicate for valid target entities
         * @param maxDist The maximum distance a target may be
         */
        setEntityLookTarget(arg0: $Predicate_<$LivingEntity>, arg1: number): $BehaviorControl<$LivingEntity>;
        /**
         * Creates a `PrepareRanNearestTarget` behavior, only applicable to **pathfinder** mobs
         * 
         * @param cooldownOnFall Sets the `minecraft:ram_cooldown_ticks` memory based on the entity when the behavior ends
         * @param minRamDistance The minimum distance something will be rammed at
         * @param maxRamDistance The maximum distance something will be rammed at
         * @param walkSpeed The speed at which the mob will walk at
         * @param targetingConditions The targeting conditions used by the entity with this behavior
         * @param ramPrepareTime The amount of ticks the entity will prepare to ram its target
         * @param prepareRamSound The sound event that will be played based on the entity
         */
        prepareRamNearestTarget<E extends $PathfinderMob>(arg0: $ToIntFunction_<E>, arg1: number, arg2: number, arg3: number, arg4: $TargetingConditions, arg5: number, arg6: $Function_<E, $SoundEvent>): $PrepareRamNearestTarget<E>;
        /**
         * Creates a `SetWalkTargetAwayFrom` behavior, only applicable to **pathfinder** mobs
         * 
         * @param pWalkTargetAwayFromMemory The memory type to use as the walk away from target
         * @param pSpeedModifier The modifier to the mob's speed when this behavior is active
         * @param pDesiredDistance The desired distance away from the target the entity will attempt to be
         * @param pHasTarget If the entity needs the `minecraft:walk_target` memory type
         */
        setWalkTargetAwayFrom(arg0: $MemoryModuleType_<$Entity>, arg1: number, arg2: number, arg3: boolean): $OneShot<$PathfinderMob>;
        /**
         * Creates a `LongJumpToPreferredBlock` behavior, only applicable to **mob** entities
         * 
         * @param minTimeBetweenJumps The minimum number of ticks between jumps
         * @param maxTimeBetweenJumps The maximum number of ticks between jumps
         * @param maxJumpHeight The maximum vertical distance the mob will attempt to jump between
         * @param maxJumpWidth the maximum horizontal distance the mob will attempt to jump
         * @param maxJumpVelocity The maximum velocity the mob may jump at
         * @param jumpSound The sound that is played when the mob jumps
         * @param preferredBlockTag A block tag, the blocks which the mob will attempt to jump to
         * @param preferredBlockChance The chance that the behavior will use its preferred blocks for jumps instead of any block. Range: [0, 1]
         * @param acceptableLandingSpot A filter for what blocks are acceptable to land on
         */
        longJumpToPreferredBlock<E extends $Mob>(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Function_<E, $SoundEvent>, arg6: $ResourceLocation_, arg7: number, arg8: $BiPredicate_<E, $BlockPos>): $LongJumpToPreferredBlock<E>;
        /**
         * Creates a `MoveToSkySeeingSpot` behavior
         * 
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        moveToSkySeeingSpot(arg0: number): $OneShot<$LivingEntity>;
        /**
         * Creates a `StopBeingAngryIfTargetDead` behavior, only applicable to **mob** entities
         */
        stopBeingAngryIfTargetDead(): $BehaviorControl<$LivingEntity>;
        /**
         * Creates a `CountCooldownTicks` behavior
         * 
         * @param coolDownTicks The memory type to use to keep track of the cool down
         */
        countDownCooldownTicks(arg0: $MemoryModuleType_<number>): $CountDownCooldownTicks;
        /**
         * Creates a `VillageBoundRandomStroll` behavior, only applicable to **pathfinder** mobs
         * 
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param radius The radius around the village the mob will stroll
         * @param maxyDist The vertical range the mob will wander in
         */
        villageBoundRandomStroll(arg0: number, arg1: number, arg2: number): $OneShot<$PathfinderMob>;
        /**
         * Creates a `TryFindLandNearWater` behavior, only applicable to **pathfinder** mobs
         * 
         * @param range The range, in all directions, at which the mob will search for land
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        tryFindLandNearWater(arg0: number, arg1: number): $BehaviorControl<$PathfinderMob>;
        /**
         * Creates a `JumpOnBed` behavior, only applicable to **mob** entities
         * 
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        jumpOnBed(arg0: number): $JumpOnBed;
        /**
         * Creates an `AcquirePoi` behavior, only applicable to **pathfinder** entities
         * 
         * @param poiType A predicate for pois the entity will attempt to acquire
         * @param memoryKey The memory type that may not be present for this behavior to be enabled, villagers use `minecraft:job_site` here
         * @param memoryToAcquire The memory type to use when a poi is acquired, villagers use `minecraft:potential_job_site` here
         * @param onlyIfAdult If this behavior should only apply when the entity is an adult
         * @param onPoiAcquisitionEvent The entity event to be sent to the entity when it acquires the poi, may be null to not send a client bound packet. This value is handled by an entity's implementation of the `handleEntityEvent` method
         */
        acquirePoi(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $MemoryModuleType_<$GlobalPos_>, arg2: $MemoryModuleType_<$GlobalPos_>, arg3: boolean, arg4: number): $BehaviorControl<$PathfinderMob>;
        /**
         * Creates a `RandomSwim` behavior, only applicable to **pathfinder** mobs
         * 
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        randomSwim(arg0: number): $BehaviorControl<$PathfinderMob>;
        /**
         * Creates a `RingBell` behavior
         */
        ringBell(): $BehaviorControl<$LivingEntity>;
        /**
         * Creates a `SleepInBed` behavior
         */
        sleepInBed(): $SleepInBed;
        /**
         * Creates a behavior which sets the entity's attack target to its walk target if the target is out of reach
         * 
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         */
        setWalkTargetFromAttackTargetIfTargetOutOfReach(arg0: $Function_<$LivingEntity, number>): $BehaviorControl<$Mob>;
        /**
         * Creates a `SetWalkTargetFromLookTarget` behavior
         * 
         * @param predicate The predicate for setting the walk target
         * @param speedModifier The modifier to the mob's speed when this behavior is active
         * @param closeEnoughDistance The distance that is close enough to the target to stop walking
         */
        setWalkTargetFromLookTarget(arg0: $Predicate_<$LivingEntity>, arg1: $Function_<$LivingEntity, number>, arg2: number): $OneShot<$LivingEntity>;
        /**
         * Creates a `BecomePassiveIfMemoryPresent` behavior
         * 
         * @param memoryType The memory type that will pacify the entity
         * @param pacifyDuration How long the entity will be pacified for
         */
        becomePassiveIfMemoryPresent(arg0: $MemoryModuleType_<never>, arg1: number): $BehaviorControl<$LivingEntity>;
        /**
         * Creates a `StopAttackingIfTargetInvalid` behavior, only applicable to **mob** entities
         * 
         * @param stopAttackingWhen A predicate for when the target is no longer valid
         * @param onTargetErased Actions that should be performed when the attack target is cleared, the first entity is the attacker and the second is the target
         * @param canGetTiredOfTryingToReachTarget If the attacker can get tired of trying to reach its target
         */
        stopAttackingIfTargetInvalid<E extends $Mob>(arg0: $Predicate_<$LivingEntity>, arg1: $BiConsumer_<E, $LivingEntity>, arg2: boolean): $BehaviorControl<E>;
        /**
         * Creates a `StartCelebratingIfTargetDead` behavior
         * 
         * @param celebrationDuration The number of ticks the entity should celebrate for
         * @param dancePredicate A predicate for if the entity should dance. The first entity provided is the entity that will dance, the second is the target
         */
        startCelebratingIfTargetDead(arg0: number, arg1: $BiPredicate_<$LivingEntity, $LivingEntity>): $BehaviorControl<$LivingEntity>;
        static INSTANCE: $Behaviors;
        set closestHomeAsWalkTarget(value: number);
        set walkTargetFromAttackTargetIfTargetOutOfReach(value: $Function_<$LivingEntity, number>);
    }
    /**
     * Values that may be interpreted as {@link $Behaviors}.
     */
    export type $Behaviors_ = "instance";
}
