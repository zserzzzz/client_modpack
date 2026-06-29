import { $Behavior } from "@package/net/minecraft/world/entity/ai/behavior";
import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $Sensor, $SensorType_ } from "@package/net/minecraft/world/entity/ai/sensing";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EntityType_, $EntityType, $Entity, $SpawnPlacements$SpawnPredicate_, $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier, $AttributeSupplier$Builder, $Attribute, $Attribute_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Activity_ } from "@package/net/minecraft/world/entity/schedule";
import { $List, $List_, $Map } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $MemoryModuleType_ } from "@package/net/minecraft/world/entity/ai/memory";
import { $ModifyEntityBuilder } from "@package/net/liopyu/entityjs/builders/modification";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $Difficulty } from "@package/net/minecraft/world";
import { $Consumer, $Supplier_, $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Brain, $Brain$Provider } from "@package/net/minecraft/world/entity/ai";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RegisterSpawnPlacementsEvent, $EntityAttributeModificationEvent, $EntityAttributeCreationEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $Record, $Class, $Object } from "@package/java/lang";
import { $Behaviors } from "@package/net/liopyu/entityjs/util/ai";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $ContextUtils$GoalContext, $EntityJSHelperClass$SpawnPlacementTypeEnum_ } from "@package/net/liopyu/entityjs/util";

declare module "@package/net/liopyu/entityjs/events" {
    export class $RegisterSpawnPlacementsEventJS implements $KubeEvent {
        /**
         * Replaces the given entity type's spawn rules
         * 
         * @param entityType The entity type whose spawn placement is being replaced
         * @param placementType The spawn placement type to use
         * @param heightmap The heightmap to use
         * @param predicate The spawn predicate for the entity type's spawning
         */
        replace<T extends $Entity>(arg0: $EntityType_<T>, arg1: $EntityJSHelperClass$SpawnPlacementTypeEnum_, arg2: $Heightmap$Types_, arg3: $SpawnPlacements$SpawnPredicate_<T>): void;
        /**
         * ORs the given spawn predicate with the existing spawn predicate of the given entity type
         * 
         * @param entityType The entity type whose spawn placement is being modified
         * @param predicate The spawn predicate that will be ORed with the entity type's existing spawn predicates
         */
        or<T extends $Entity>(arg0: $EntityType_<T>, arg1: $SpawnPlacements$SpawnPredicate_<T>): void;
        /**
         * ANDs the given spawn predicate with the existing spawn predicates of the given entity type
         * 
         * @param entityType The entity type whose spawn placement is being modified
         * @param predicate The spawn predicate that will be ANDed with the entity type's existing spawn predicates
         */
        and<T extends $Entity>(arg0: $EntityType_<T>, arg1: $SpawnPlacements$SpawnPredicate_<T>): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(arg0: $RegisterSpawnPlacementsEvent);
    }
    export class $BuildBrainProviderEventJS<T extends $LivingEntity> implements $KubeEvent {
        provide(): $Brain$Provider<T>;
        /**
         * Adds the provided `SensorType` to the entity type's sensors
         */
        addSensor(arg0: $SensorType_<$Sensor<$LivingEntity>>): void;
        /**
         * Adds the provided `MemoryModuleType` to the entity type's memories
         */
        addMemory(arg0: $MemoryModuleType_<never>): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor();
    }
    export class $AttributeCreationEventJS implements $KubeEvent {
        /**
         * Modifies the given entity type's default attributes
         * 
         * @param entityType The entity type whose default attributes are to be modified
         * @param attributes A consumer for modifying the default attributes and their values
         */
        create(arg0: $EntityType_<$LivingEntity>, arg1: $Consumer_<$AttributeCreationEventJS$AttributeCreationHelper>): void;
        /**
         * Returns a list of all attributes the given entity type has by default
         */
        getAttributes(arg0: $EntityType_<$LivingEntity>): $List<$Attribute>;
        getMap(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
        /**
         * Returns a list of all entity types available in the attribute map
         */
        getAllTypes(): $List<$EntityType<$LivingEntity>>;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(arg0: $EntityAttributeCreationEvent);
        get map(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
        get allTypes(): $List<$EntityType<$LivingEntity>>;
    }
    export class $AddGoalTargetsEventJS<T extends $Mob> extends $GoalEventJS<T> {
        /**
         * Remove all goals.
         * 
         * Example of usage:
         * =====================================
         * builder.removeAllGoals()
         * =====================================
         * 
         * @param goal The goal to remove
         */
        removeAllGoals(): void;
        /**
         * Adds s `HurtByTargetGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param toIgnoreDamage The classes that damage should be ignored from
         * @param alertOthers If other mobs should be alerted when this mob is damaged
         * @param toIgnoreAlert The entity classes that should not be alerted
         */
        hurtByTarget(arg0: number, arg1: $List_<$Class<never>>, arg2: boolean, arg3: $List_<$Class<never>>): void;
        /**
         * Remove all goals fitting the specified predicate. Returns a boolean
         * 
         * Example of usage:
         * =====================================
         * let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
         * e.removeGoals(context => {
         *     const { goal, entity } = context
         *     return goal.getClass() == $PanicGoal
         * })
         * =====================================
         * 
         * @param goalFunction A function to remove goals with entity & available goals as arguments
         */
        removeGoals(arg0: $Function_<$ContextUtils$GoalContext, boolean>): void;
        /**
         * Adds a `OwnerHurtByTargetGoal` to the entity, only applicable to **tamable** mobs
         * 
         * @param priority The priority of the goal
         */
        ownerHurtByTarget(arg0: number): void;
        /**
         * Remove a goal from the entity via class reference.
         * 
         * Example of usage:
         * =====================================
         * let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
         * builder.removeGoal($PanicGoal)
         * =====================================
         * 
         * @param goal The goal class to remove
         */
        removeGoal(arg0: $Class<$Goal>): void;
        /**
         * Adds a `NonTameRandomTargetGoal` to the entity, only applicable to **tamable** mobs
         * 
         * @param priority The priority of the goal
         * @param targetClass The entity class that should be targeted
         * @param mustSee If the mob must have line of sight at all times
         * @param targetConditions The conditions under which the targeted entity will be targeted, may be null
         */
        nonTameRandomTarget<E extends $LivingEntity>(arg0: number, arg1: $Class<E>, arg2: boolean, arg3: $Predicate_<$LivingEntity>): void;
        /**
         * Adds a `ResetUniversalAngerTargetGoal` to the entity, only applicable to **neutral** mobs
         * 
         * @param priority The priority of the goal
         * @param alertOthersOfSameType If other mobs of the same type should be alerted
         */
        resetUniversalAngerTarget<E extends $Mob>(arg0: number, arg1: boolean): void;
        /**
         * Adds a `NearestAttackableTargetGoal` to the entity
         * 
         * @param priority The priority of the goal
         * @param targetClass The entity class that should be targeted
         * @param randomInterval The interval at which the goal amy be 'refreshed'
         * @param mustSee If the mob must have line of sight at all times
         * @param mustReach If the mob must be able to reach the target to attack
         * @param targetConditions The conditions under which the targeted entity will be targeted, may be null
         */
        nearestAttackableTarget<E extends $LivingEntity>(arg0: number, arg1: $Class<E>, arg2: number, arg3: boolean, arg4: boolean, arg5: $Predicate_<$LivingEntity>): void;
        /**
         * Adds a `NearestAttackableTargetGoalJS` to the entity
         * 
         * @param priority The priority of the goal
         * @param targetClass The entity class that should be targeted
         * @param randomInterval The interval at which the goal amy be 'refreshed'
         * @param mustSee If the mob must have line of sight at all times
         * @param mustReach If the mob must be able to reach the target to attack
         * @param targetConditions The conditions under which the targeted entity will be targeted, may be null
         * @param radius The AABB radius to check for a potential target
         */
        nearestAttackableTarget<E extends $LivingEntity>(arg0: number, arg1: $Class<E>, arg2: number, arg3: boolean, arg4: boolean, arg5: $Predicate_<$LivingEntity>, arg6: $AABB_): void;
        /**
         * Enables the addition of arbitrary goals to an entity
         * 
         * It is the responsibility of the user to ensure the goal is
         * compatible with the entity
         * 
         * Example of usage:
         * =====================================
         * builder.arbitraryTargetGoal(3, entity -> new $DefendVillageTargetGoal(entity))
         * =====================================
         * 
         * Note in the example the entity must be an instance of IronGolem
         * 
         * @param priority The priority of the goal
         * @param goalSupplier The goal supplier, a function that takes a Mob and returns a Goal
         */
        arbitraryTargetGoal(arg0: number, arg1: $Function_<T, $Goal>): void;
        constructor(arg0: T, arg1: $GoalSelector);
    }
    export class $AddGoalSelectorsEventJS<T extends $Mob> extends $GoalEventJS<T> {
        /**
         * Remove all goals.
         * 
         * Example of usage:
         * =====================================
         * builder.removeAllGoals()
         * =====================================
         * 
         * @param goal The goal to remove
         */
        removeAllGoals(): void;
        /**
         * Adds a `PanicGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         */
        panic(arg0: number, arg1: number): void;
        /**
         * Adds a `MeleeAttackGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param followTargetEventIfNotSeen Determines if the entity should follow the target even if it doesn't see it
         */
        meleeAttack(arg0: number, arg1: number, arg2: boolean): void;
        /**
         * Adds a `FollowParentGoal` to the entity, only applicable to **animal** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         */
        followParent(arg0: number, arg1: number): void;
        /**
         * Adds a `LeapAtTargetGoal` to the entity
         * 
         * @param priority The priority of the goal
         * @param deltaY Sets the delta movement of the animal in the y-axis
         */
        leapAtTarget(arg0: number, arg1: number): void;
        /**
         * Adds a `AvoidEntityGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param entityClassToAvoid The class of entity to avoid
         * @param avoidPredicate The conditions under which an entity will be avoided
         * @param maxDist The maximum distance from a entity the mob will detect and flee from it
         * @param walkSpeedModifier Modifies the mob's speed when avoiding an entity
         * @param sprintSpeedModifier Modifies the mob's speed when avoiding an entity at close range
         * @param onAvoidEntityPredicate An additional predicate for entity avoidance
         */
        avoidEntity<E extends $LivingEntity>(arg0: number, arg1: $Class<E>, arg2: $Predicate_<$LivingEntity>, arg3: number, arg4: number, arg5: number, arg6: $Predicate_<$LivingEntity>): void;
        /**
         * Adds a `RandomLookAroundGoal` to the entity
         * 
         * @param priority The priority of the goal
         */
        randomLookAround(arg0: number): void;
        /**
         * Adds a `MoveTowardsTargetGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param distanceWithin The distance the target must be within to move towards it
         */
        moveTowardsTarget(arg0: number, arg1: number, arg2: number): void;
        /**
         * Adds a `RestrictSunGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         */
        restrictSun(arg0: number): void;
        /**
         * Adds a `MoveBackToVillageGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param checkNoActionTime Determines if the mob's noActionTime property should be checked
         */
        moveBackToVillage(arg0: number, arg1: number, arg2: boolean): void;
        /**
         * Adds a `TryFindWaterGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         */
        tryFindWater(arg0: number): void;
        /**
         * Adds a `RandomStrollGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param interval Sets the interval at which the goal will be 'refreshed, any values below 1 will be 1.'
         * @param checkNoActionTime Determines if the mob's noActionTime property should be checked
         */
        randomStroll(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        /**
         * Adds a `RandomSwimmingGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param interval Sets the interval at which the goal will be refreshed
         */
        randomSwimming(arg0: number, arg1: number, arg2: number): void;
        /**
         * Adds a `MoveThroughVillageGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param onlyAtNight If this goal should only apply at night
         * @param distanceToPoi The minimum distance to a poi the mob must be to have it be considered 'visited'
         * @param canDealWithDoors If doors can be opened to navigate as part of this goal
         */
        moveThroughVillage(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: $Supplier_<boolean>): void;
        /**
         * Adds a `RangedAttackGoal` to the entity, only applicable to **ranged attack** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param attackIntervalMin The minimum interval between attacks
         * @param attackIntervalMax The maximum interval between attacks
         * @param attackRadius The maximum distance something can be attacked from
         */
        rangedAttack<E extends $Mob>(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        /**
         * Enables the addition of arbitrary goals to an entity
         * 
         * It is the responsibility of the user to ensure the goal is
         * compatible with the entity
         * 
         * Example of usage:
         * =====================================
         * builder.arbitraryGoal(3, entity -> new $PathFindToRaidGoal(entity))
         * =====================================
         * 
         * Note in the example the entity must be an instance of Raider
         * 
         * @param priority The priority of the goal
         * @param goalSupplier The goal supplier, a function that takes a Mob and returns a Goal
         */
        arbitraryGoal(arg0: number, arg1: $Function_<T, $Goal>): void;
        /**
         * Remove all goals fitting the specified predicate. Returns a boolean
         * 
         * Example of usage:
         * =====================================
         * let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
         * e.removeGoals(context => {
         *     const { goal, entity } = context
         *     return goal.getClass() == $PanicGoal
         * })
         * =====================================
         * 
         * @param goalFunction A function to remove goals with entity & available goals as arguments
         */
        removeGoals(arg0: $Function_<$ContextUtils$GoalContext, boolean>): void;
        /**
         * Adds a `FollowOwnerGoal` to the entity, only applicable to **tamable** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param startDistance The distance away from the owner the mob will start moving
         * @param stopDistance The distance away from the owner the mob will stop moving
         */
        followOwner(arg0: number, arg1: number, arg2: number, arg3: number): void;
        /**
         * Adds a `OcelotAttackGoal` to the entity
         * 
         * @param priority The priority of the goal
         */
        ocelotAttack(arg0: number): void;
        /**
         * Adds a `SitWhenOrderedToGoal` to the entity, only applicable to **tamable** mobs
         * 
         * @param priority The priority of the goal
         */
        sitWhenOrdered(arg0: number): void;
        /**
         * Adds a `RemoveBlockGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param block The registry name of a block, the block to be removed
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param verticalSearchRange The vertical range the mob will search for the block
         */
        removeBlock(arg0: number, arg1: $ResourceLocation_, arg2: number, arg3: number): void;
        /**
         * Adds a `BreedGoal` to the entity, only applicable to **animal** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param partnerClass The class of animal that this entity breeds with, may be null to specify it be the same class as this entity
         */
        breed(arg0: number, arg1: number, arg2: $Class<$Animal>): void;
        /**
         * Remove a goal from the entity via class reference.
         * 
         * Example of usage:
         * =====================================
         * let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
         * builder.removeGoal($PanicGoal)
         * =====================================
         * 
         * @param goal The goal class to remove
         */
        removeGoal(arg0: $Class<$Goal>): void;
        /**
         * Adds a `UseItemGoal` to the entity
         * 
         * @param priority The priority of the goal
         * @param itemToUse The item that will be used
         * @param soundEvent The registry name of a sound event that should play when the item is used, may be null to indicate not sound event should play
         * @param canUseSelector Determines when the item may be used
         */
        useItem(arg0: number, arg1: $ItemStack_, arg2: $ResourceLocation_, arg3: $Predicate_<T>): void;
        /**
         * Adds a `LookAtPlayerGoal` to the entity
         * 
         * @param priority The priority of the goal
         * @param targetClass The entity class that should be looked at
         * @param lookDistance How far away the entity should be looked at
         * @param probability The probability, in the range [0, 1], that the goal may be used
         * @param onlyHorizontal Determines if the eye level must be the same to follow the target entity
         */
        lookAtEntity<E extends $LivingEntity>(arg0: number, arg1: $Class<E>, arg2: number, arg3: number, arg4: boolean): void;
        /**
         * Adds a `MoveTowardsRestrictionGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         */
        moveTowardsRestriction(arg0: number, arg1: number): void;
        /**
         * Adds a `WaterAvoidRandomStrollingGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param probability The probability, in the range [0, 1], that the entity picks a new position
         */
        waterAvoidingRandomStroll(arg0: number, arg1: number, arg2: number): void;
        /**
         * Adds a `StrollThroughVillageGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param interval Sets how often the goal 'refreshes'
         */
        strollThroughVillage(arg0: number, arg1: number): void;
        /**
         * Adds a `RunAroundLikeCrazyGoal` to the entity, only applicable to **horse** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         */
        horseRunAroundLikeCrazy(arg0: number, arg1: number): void;
        /**
         * Adds a `WaterAvoidingRandomFlyingGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         */
        waterAvoidingRandomFlying(arg0: number, arg1: number): void;
        /**
         * Adds a `ClimbOnTopOfPowderSnowGoal` to the entity
         * 
         * @param priority The priority of the goal
         */
        climbOnTopOfPowderedSnow(arg0: number): void;
        /**
         * Adds a custom goal to the entity
         * 
         * @param name The name of the custom goal
         * @param priority The priority of the goal
         * @param canUse Determines if the entity can use the goal
         * @param canContinueToUse Determines if the entity can continue to use the goal, may be null
         * @param isInterruptable If the goal may be interrupted
         * @param start The action to perform when the goal starts
         * @param stop The action to perform when the goal stops
         * @param requiresUpdateEveryTick If the goal needs to be updated every tick
         * @param tick The action to perform when the goal ticks
         */
        customGoal(arg0: string, arg1: number, arg2: $Predicate_<T>, arg3: $Predicate_<T>, arg4: boolean, arg5: $Consumer_<T>, arg6: $Consumer_<T>, arg7: boolean, arg8: $Consumer_<T>): void;
        /**
         * Adds a `BreakDoorGoal` to the entity
         * 
         * @param priority The priority of the goal
         * @param doorBreakTime The time it takes to break a door, limited to 240 ticks
         * @param validDifficulties Determines what difficulties are valid for the goal
         */
        breakDoor(arg0: number, arg1: number, arg2: $Predicate_<$Difficulty>): void;
        /**
         * Adds a `BreathAirGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         */
        breathAir(arg0: number): void;
        /**
         * Adds a `FleeSunGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         */
        fleeSun(arg0: number, arg1: number): void;
        /**
         * Adds a `FollowBoatGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         */
        followBoat(arg0: number): void;
        /**
         * Adds a `EatBlockGoal` to the entity
         * 
         * @param priority The priority of the goal
         */
        eatGrass(arg0: number): void;
        /**
         * Adds a `FloatGoal` to the entity
         * 
         * @param priority The priority of the goal
         */
        floatSwim(arg0: number): void;
        /**
         * Adds a `TemptGoal` to the entity, only applicable to **pathfinder** mobs
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param temptItems The ingredient that determines what items tempt the mob
         * @param canScare If the mob can be scared by getting to close to the tempter
         */
        tempt(arg0: number, arg1: number, arg2: $Ingredient_, arg3: boolean): void;
        /**
         * Adds a `OpenDoorGoal` to the entity
         * 
         * @param priority The priority of the goal
         * @param closeDoor If the entity should also close doors
         */
        openDoor(arg0: number, arg1: boolean): void;
        /**
         * Adds a `FollowMobGoal` to the entity
         * 
         * @param priority The priority of the goal
         * @param speedModifier Sets the speed at which the mob should try to move
         * @param stopDistance The distance away from the target the mob will stop
         * @param areaSize The distance away from the mob, that will be searched for mobs to follow
         */
        followMob(arg0: number, arg1: number, arg2: number, arg3: number): void;
        constructor(arg0: T, arg1: $GoalSelector);
    }
    export class $EntityModificationEventJS implements $KubeEvent {
        static getOrCreate(arg0: $EntityType_<never>, arg1: $Entity): $EntityModificationEventJS;
        /**
         * Entity type modification event. Allows modification of methods for any existing entity. 
         *  
         * This event determines the entity's type and uses the appropriate builder for modification. 
         *  
         * Builders: 
         *     - ModifyPathfinderMobBuilder: For entities extending {@link PathfinderMob} 
         *     - ModifyMobBuilder: For entities extending {@link Mob} 
         *     - ModifyLivingEntityBuilder: For entities extending {@link LivingEntity} 
         *     - ModifyEntityBuilder: For entities extending {@link Entity} 
         *  
         * Example usage: 
         * ```javascript
         * EntityJSEvents.modifyEntity(event => {
         *     event.modify("minecraft:zombie", builder => {
         *         builder.onRemovedFromWorld(entity => {
         *             // Execute code when the zombie is removed from the world.
         *         })
         *     })
         * })
         * ```
         * 
         * @param entityType The entity type to modify
         * @param modifyBuilder A consumer to modify the entity type.
         */
        modify(arg0: $EntityType_<never>, arg1: $Consumer_<$ModifyEntityBuilder>): void;
        determineModificationType(arg0: $EntityType_<never>, arg1: $Entity): $ModifyEntityBuilder;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        static eventMap: $Map<$EntityType<never>, $EntityModificationEventJS>;
        static createCustomMap: $Map<$ResourceLocation, $Consumer<$ModifyEntityBuilder>>;
    }
    export class $GoalEventJS<T extends $Mob> implements $KubeEvent {
        getEntity(): $Mob;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(arg0: T, arg1: $GoalSelector);
        get entity(): $Mob;
    }
    export class $BuildBrainEventJS<T extends $LivingEntity> implements $KubeEvent {
        addActivity(arg0: $Activity_, arg1: number, arg2: $List_<$Behavior<$LivingEntity>>): void;
        coreActivity(arg0: number, arg1: $List_<$Behavior<$LivingEntity>>): void;
        idleActivity(arg0: number, arg1: $List_<$Behavior<$LivingEntity>>): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        behaviors: $Behaviors;
        constructor(arg0: $Brain<T>);
    }
    export class $BiomeSpawnsEventJS implements $KubeEvent {
        /**
         * Adds a spawn to the given entity type in the given biomes
         * 
         * @param entityType The entity type to add a spawn to
         * @param biomes A list of biomes and biome tags to spawn in
         * @param weight The spawn weight
         * @param minCount The minimum number of entities to spawn
         * @param maxCount The maximum number of entities to spawn
         */
        addSpawn(arg0: $EntityType_<never>, arg1: $List_<string>, arg2: number, arg3: number, arg4: number): void;
        /**
         * Removes the given entity type spawns from the given biomes
         * 
         * @param entityType The entity type to remove spawns from
         * @param biomes A list of biomes and biome tags to remove the spawns from
         */
        removeSpawn(arg0: $EntityType_<never>, arg1: $List_<string>): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor();
    }
    export class $ModifyAttributeEventJS$AttributeModificationHelper extends $Record {
        /**
         * Adds the given attribute to the entity type, using the provided default value
         * 
         * It is safe to add an attribute that an entity type already has
         * 
         * @param attribute The attribute to add
         * @param defaultValue The default value of the attribute
         */
        add(arg0: $Object, arg1: number): void;
        /**
         * Adds the given attribute to the entity type, using its default value
         * 
         * It is safe to add an attribute that an entity type already has
         */
        add(arg0: $Attribute_): void;
        constructor(type: $EntityType_<$LivingEntity>, event: $EntityAttributeModificationEvent);
    }
    /**
     * Values that may be interpreted as {@link $ModifyAttributeEventJS$AttributeModificationHelper}.
     */
    export type $ModifyAttributeEventJS$AttributeModificationHelper_ = { event?: $EntityAttributeModificationEvent, type?: $EntityType_<$LivingEntity>,  } | [event?: $EntityAttributeModificationEvent, type?: $EntityType_<$LivingEntity>, ];
    export class $AttributeCreationEventJS$AttributeCreationHelper {
        /**
         * Adds the given attribute with default value
         */
        add(arg0: $Attribute_): void;
        /**
         * Adds the given attribute with default value
         * 
         * @param attribute Attribute or resource location string
         * @param value Default value for the attribute
         */
        add(arg0: $Attribute_, arg1: number): void;
        constructor(arg0: $AttributeSupplier$Builder);
    }
    export class $ModifyAttributeEventJS implements $KubeEvent {
        /**
         * Returns a list of all attributes the given entity type has by default
         */
        getAttributes(arg0: $EntityType_<$LivingEntity>): $List<$Attribute>;
        /**
         * Modifies the given entity type's attributes
         * 
         * @param entityType The entity type whose default attributes are to be modified
         * @param attributes A consumer for setting the default attributes and their values
         */
        modify(arg0: $EntityType_<$LivingEntity>, arg1: $Consumer_<$ModifyAttributeEventJS$AttributeModificationHelper>): void;
        /**
         * Returns a list of all entity types that can have their attributes modified by this event
         */
        getAllTypes(): $List<$EntityType<$LivingEntity>>;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(arg0: $EntityAttributeModificationEvent);
        get allTypes(): $List<$EntityType<$LivingEntity>>;
    }
}
