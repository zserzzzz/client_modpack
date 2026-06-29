import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $DataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $EntityType, $Entity, $SpawnPlacements$SpawnPredicate_, $SpawnPlacements$SpawnPredicate, $LivingEntity, $SpawnPlacementType_, $SpawnPlacementType } from "@package/net/minecraft/world/entity";
import { $CustomInstructionKeyframeData, $SoundKeyframeData, $KeyFrameData, $ParticleKeyframeData } from "@package/software/bernie/geckolib/animation/keyframe/event/data";
import { $List, $List_, $Map } from "@package/java/util";
import { $PartBuilder } from "@package/net/liopyu/entityjs/builders/nonliving/entityjs";
import { $AnimationController$AnimationStateHandler, $AnimationState, $AnimationController, $Animation$LoopType_, $PlayState } from "@package/software/bernie/geckolib/animation";
import { $ItemArmorJSBuilder, $GeoLayerJSBuilder, $ItemModelJSBuilder } from "@package/net/liopyu/entityjs/client/living/model";
import { $EventBasedSpawnModifier$BiomeSpawn } from "@package/net/liopyu/entityjs/util/implementation";
import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundKeyframeEvent, $CustomInstructionKeyframeEvent, $ParticleKeyframeEvent } from "@package/software/bernie/geckolib/animation/keyframe/event";
import { $Object } from "@package/java/lang";
import { $Heightmap$Types, $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $ContextUtils$ThunderHitContext, $ContextUtils$EntityTypeEntityContext, $ContextUtils$AutoAttackContext, $ContextUtils$OnEffectContext, $ContextUtils$VisualContext, $ContextUtils$ScaleModelRenderContext, $ContextUtils$DamageContext, $ContextUtils$MobInteractContext, $ContextUtils$PassengerEntityContext, $ContextUtils$PassengerVehicleContext, $ContextUtils$EntityHealContext, $ContextUtils$EntityFallDamageContext, $ContextUtils$CanTrampleContext, $ContextUtils$EntityEquipmentContext, $ContextUtils$FoodItemLevelContext, $ContextUtils$EntityFluidStateContext, $ContextUtils$MayInteractContext, $ContextUtils$DeathContext, $ContextUtils$LineOfSightContext, $ContextUtils$HurtContext, $ContextUtils$LivingEntityContext, $ContextUtils$EntityLootContext, $ContextUtils$EntityDamageContext, $ContextUtils$PartEntityParams, $ContextUtils$EntityItemLevelContext, $ContextUtils$ChangeDimensionsContext, $ContextUtils$EntityBlockPosContext, $ContextUtils$PlayerEntityContext, $ContextUtils$FinalRenderContext, $ContextUtils$CollidingEntityContext, $ContextUtils$EntityItemEntityContext, $ContextUtils$Vec3Context, $ContextUtils$PositionRiderContext, $ContextUtils$EntitySqrDistanceContext, $ContextUtils$ApplyRotationsContext, $ContextUtils$RenderContext, $ContextUtils$CalculateFallDamageContext, $ContextUtils$LerpToContext } from "@package/net/liopyu/entityjs/util";
export * as vanilla from "@package/net/liopyu/entityjs/builders/living/vanilla";
export * as entityjs from "@package/net/liopyu/entityjs/builders/living/entityjs";

declare module "@package/net/liopyu/entityjs/builders/living" {
    export class $BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS<E extends $LivingEntity> extends $BaseLivingEntityBuilder$KeyFrameEventJS<E, $CustomInstructionKeyframeData> {
        animationTick: number;
        instructions: string;
        controller: $AnimationController<E>;
        entity: E;
        keyframeData: $CustomInstructionKeyframeData;
        constructor(arg0: $CustomInstructionKeyframeEvent<E>);
    }
    export class $BaseLivingEntityBuilder$IAnimationPredicateJS<E extends $LivingEntity> {
    }
    export interface $BaseLivingEntityBuilder$IAnimationPredicateJS<E extends $LivingEntity> {
        /**
         * Determines if an animation should continue for a given AnimationEvent. Return true to continue the current animation
         * 
         * @param event The AnimationEvent, provides values that can be used to determine if the animation should continue or not
         */
        test(arg0: $BaseLivingEntityBuilder$AnimationEventJS<E>): boolean;
        toGecko(): $AnimationController$AnimationStateHandler<E>;
    }
    /**
     * Values that may be interpreted as {@link $BaseLivingEntityBuilder$IAnimationPredicateJS}.
     */
    export type $BaseLivingEntityBuilder$IAnimationPredicateJS_<E> = ((arg0: $BaseLivingEntityBuilder$AnimationEventJS<E>) => boolean);
    export class $BaseLivingEntityBuilder$KeyFrameEventJS<E extends $LivingEntity, B extends $KeyFrameData> {
        animationTick: number;
        controller: $AnimationController<E>;
        entity: E;
        keyframeData: B;
    }
    export class $BaseLivingEntityBuilder$AnimationEventJS<E extends $LivingEntity> {
        /**
         * Adds an animation to the current animation list
         */
        then(arg0: string, arg1: $Animation$LoopType_): $BaseLivingEntityBuilder$AnimationEventJS<E>;
        /**
         * Returns the entity that is being animated
         */
        getEntity(): E;
        /**
         * Returns the animation controller this event is part of
         */
        getController(): $AnimationController<E>;
        /**
         * Returns a number, in the range [0, 1], how far through the tick it currently is
         */
        getPartialTick(): number;
        /**
         * If the entity is moving
         */
        isMoving(): boolean;
        /**
         * Returns any extra data that the event may have
         * 
         * Usually used by armor animations to know what item is worn
         */
        getExtraData(): $Map<$DataTicket<never>, never>;
        /**
         * Sets an animation to play an x amount of times
         */
        thenPlayXTimes(arg0: string, arg1: number): $PlayState;
        /**
         * Sets an animation to play and hold on the last frame
         */
        thenPlayAndHold(arg0: string): $PlayState;
        getLimbSwing(): number;
        /**
         * Sets an animation to play defaulting to the animations.json file loop type
         */
        thenPlay(arg0: string): $PlayState;
        /**
         * Sets an animation to play in a loop
         */
        thenLoop(arg0: string): $PlayState;
        /**
         * Wait a certain amount of ticks before starting the next animation
         */
        thenWait(arg0: number): $PlayState;
        /**
         * Sets a triggerable animation with a specified loop type callable anywhere from the entity.
         * 
         * @param animationName The name of the animation to be triggered, this is the animation named in the json.
         * @param triggerableAnimationID The unique identifier for the triggerable animation.
         * @param loopTypeEnum The loop type for the triggerable animation. Accepts 'LOOP', 'PLAY_ONCE', 'HOLD_ON_LAST_FRAME', or 'DEFAULT'.
         * ```javascript
         *  event.addTriggerableAnimation('spawn', 'spawning', 'default')
         *  ```
         */
        addTriggerableAnimation(arg0: string, arg1: string, arg2: $Object): $PlayState;
        /**
         * Returns the number of ticks the entity has been animating for
         */
        getAnimationTick(): number;
        getLimbSwingAmount(): number;
        constructor(arg0: $AnimationState<E>);
        get entity(): E;
        get controller(): $AnimationController<E>;
        get partialTick(): number;
        get moving(): boolean;
        get extraData(): $Map<$DataTicket<never>, never>;
        get limbSwing(): number;
        get animationTick(): number;
        get limbSwingAmount(): number;
    }
    export class $BaseLivingEntityBuilder$ICustomInstructionListenerJS<E extends $LivingEntity> {
    }
    export interface $BaseLivingEntityBuilder$ICustomInstructionListenerJS<E extends $LivingEntity> {
        executeInstruction(arg0: $BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS<E>): void;
    }
    /**
     * Values that may be interpreted as {@link $BaseLivingEntityBuilder$ICustomInstructionListenerJS}.
     */
    export type $BaseLivingEntityBuilder$ICustomInstructionListenerJS_<E> = ((arg0: $BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS<E>) => void);
    export class $BaseLivingEntityBuilder$ParticleKeyFrameEventJS<E extends $LivingEntity> extends $BaseLivingEntityBuilder$KeyFrameEventJS<E, $ParticleKeyframeData> {
        animationTick: number;
        controller: $AnimationController<E>;
        effect: string;
        locator: string;
        script: string;
        entity: E;
        keyframeData: $ParticleKeyframeData;
        constructor(arg0: $ParticleKeyframeEvent<E>);
    }
    export class $BaseLivingEntityBuilder$ISoundListenerJS<E extends $LivingEntity> {
    }
    export interface $BaseLivingEntityBuilder$ISoundListenerJS<E extends $LivingEntity> {
        playSound(arg0: $BaseLivingEntityBuilder$SoundKeyFrameEventJS<E>): void;
    }
    /**
     * Values that may be interpreted as {@link $BaseLivingEntityBuilder$ISoundListenerJS}.
     */
    export type $BaseLivingEntityBuilder$ISoundListenerJS_<E> = ((arg0: $BaseLivingEntityBuilder$SoundKeyFrameEventJS<E>) => void);
    export class $BaseLivingEntityBuilder$IParticleListenerJS<E extends $LivingEntity> {
    }
    export interface $BaseLivingEntityBuilder$IParticleListenerJS<E extends $LivingEntity> {
        summonParticle(arg0: $BaseLivingEntityBuilder$ParticleKeyFrameEventJS<E>): void;
    }
    /**
     * Values that may be interpreted as {@link $BaseLivingEntityBuilder$IParticleListenerJS}.
     */
    export type $BaseLivingEntityBuilder$IParticleListenerJS_<E> = ((arg0: $BaseLivingEntityBuilder$ParticleKeyFrameEventJS<E>) => void);
    export class $BaseLivingEntityBuilder$SoundKeyFrameEventJS<E extends $LivingEntity> extends $BaseLivingEntityBuilder$KeyFrameEventJS<E, $SoundKeyframeData> {
        animationTick: number;
        controller: $AnimationController<E>;
        sound: string;
        entity: E;
        keyframeData: $SoundKeyframeData;
        constructor(arg0: $SoundKeyframeEvent<E>);
    }
    export class $BaseLivingEntityBuilder<T extends $LivingEntity> extends $BuilderBase<$EntityType<T>> {
        /**
         * Sets a function to determine the custom hitbox scale of the entity.
         * The provided Function accepts a {@link LivingEntity} parameter,
         * representing the entity whose scale is being determined.
         * It returns a Float representing the custom scale.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.scale(entity => {
         *     // Define logic to calculate and return the custom scale for the entity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Float value;
         * });
         * ```
         */
        scale(arg0: $Function_<$LivingEntity, $Object>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed during each tick of the entity.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is being ticked.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.tick(entity => {
         *     // Define custom logic for handling during each tick of the entity
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        tick(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the hit box of the entity type.
         * 
         * @param width The width of the entity, defaults to 1.
         * @param height The height of the entity, defaults to 1.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.sized(2, 3);
         * ```
         */
        sized(arg0: number, arg1: number): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity can attack a specific entity type.
         * The provided Predicate accepts a {@link ContextUtils.EntityTypeEntityContext} parameter,
         * representing the context of the entity attacking a specific entity type.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canAttackType(context => {
         *     // Define conditions to check if the entity can attack the specified entity type
         *     // Use information about the EntityTypeEntityContext provided by the context.
         *     return // Some boolean condition indicating if the entity can attack the specified entity type;
         * });
         * ```
         */
        canAttackType(arg0: $Predicate_<$ContextUtils$EntityTypeEntityContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate to determine whether the entity should drop loot upon death.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose loot dropping behavior is being determined.
         * It returns a Boolean indicating whether the entity should drop loot.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.shouldDropLoot(entity => {
         *     // Define logic to determine whether the entity should drop loot
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity should drop loot;
         * });
         * ```
         */
        shouldDropLoot(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when an effect is removed from the entity.
         * The provided Consumer accepts a {@link ContextUtils.OnEffectContext} parameter,
         * representing the context of the effect being removed from the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onEffectRemoved(context => {
         *     // Define custom logic for handling when an effect is removed from the entity
         *     // Use information about the OnEffectContext provided by the context.
         * });
         * ```
         */
        onEffectRemoved(arg0: $Consumer_<$ContextUtils$OnEffectContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity receives healing.
         * The provided Consumer accepts a {@link ContextUtils.EntityHealContext} parameter,
         * representing the context of the entity receiving healing.
         * Very similar to {@link ForgeEventFactory.onLivingHeal}
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onLivingHeal(context => {
         *     // Define custom logic for handling when the entity receives healing
         *     // Use information about the EntityHealContext provided by the context.
         * });
         * ```
         */
        onLivingHeal(arg0: $Consumer_<$ContextUtils$EntityHealContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity can be affected by an effect.
         * The provided Predicate accepts a {@link ContextUtils.OnEffectContext} parameter,
         * representing the context of the effect that may affect the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canBeAffected(context => {
         *     // Define conditions to check if the entity can be affected by the effect
         *     // Use information about the OnEffectContext provided by the context.
         *     return // Some boolean condition indicating if the entity can be affected by an effect;
         * });
         * ```
         */
        canBeAffected(arg0: $Predicate_<$ContextUtils$OnEffectContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the update interval for the entity.
         * Defaults to 1 tick.
         * Example usage:
         * ```javascript
         * entityBuilder.updateInterval(20); // Set the update interval to 20 ticks
         * ```
         */
        updateInterval(arg0: number): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity drops custom loot upon death.
         * The provided Consumer accepts a {@link ContextUtils.EntityLootContext} parameter,
         * representing the context of the entity's death and loot dropping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.dropCustomDeathLoot(context => {
         *     // Define custom logic for handling the entity dropping custom loot upon death
         *     // Use information about the EntityLootContext provided by the context.
         * });
         * ```
         */
        dropCustomDeathLoot(arg0: $Consumer_<$ContextUtils$EntityLootContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity should drop experience upon death.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose experience drop is being determined.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.shouldDropExperience(entity => {
         *     // Define conditions to check if the entity should drop experience upon death
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity should drop experience;
         * });
         * ```
         */
        shouldDropExperience(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity can breathe underwater.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canBreatheUnderwater(true);
         * ```
         */
        canBreatheUnderwater(arg0: boolean): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the rider of the entity should face forward.
         * The provided Predicate accepts a {@link ContextUtils.PlayerEntityContext} parameter,
         * representing the context of the player entity riding the main entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.shouldRiderFaceForward(context => {
         *     // Define the conditions for the rider to face forward
         *     // Use information about the player entity provided by the context.
         *     return true //someBoolean;
         * });
         * ```
         */
        shouldRiderFaceForward(arg0: $Predicate_<$ContextUtils$PlayerEntityContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity is affected by potions.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its susceptibility to potions.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAffectedByPotions(entity => {
         *     // Define conditions to check if the entity is affected by potions
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is affected by potions;
         * });
         * ```
         */
        isAffectedByPotions(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to calculate fall damage for the entity.
         * The provided Function accepts a {@link ContextUtils.CalculateFallDamageContext} parameter,
         * representing the context of the fall damage calculation.
         * It returns an Integer representing the calculated fall damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.calculateFallDamage(context => {
         *     // Define logic to calculate and return the fall damage for the entity
         *     // Use information about the CalculateFallDamageContext provided by the context.
         *     return // Some Integer value representing the calculated fall damage;
         * });
         * ```
         */
        calculateFallDamage(arg0: $Function_<$ContextUtils$CalculateFallDamageContext, $Object>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity's air supply increases.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity whose air supply is being increased.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onIncreaseAirSupply(entity => {
         *     // Define custom logic for handling when the entity's air supply increases
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onIncreaseAirSupply(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate to determine if the entity has inverted heal and harm behavior.
         * 
         * @param invertedHealAndHarm The predicate to check for inverted heal and harm behavior.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.invertedHealAndHarm(entity => {
         *     // Custom logic to determine if the entity has inverted heal and harm behavior
         *     return true; // Replace with your custom boolean condition
         * });
         * ```
         */
        invertedHealAndHarm(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity's air supply decreases.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity whose air supply is being decreased.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onDecreaseAirSupply(entity => {
         *     // Define custom logic for handling when the entity's air supply decreases
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onDecreaseAirSupply(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity can change dimensions.
         * The provided Predicate accepts a {@link ContextUtils.ChangeDimensionContext} parameter,
         * representing the entity that may attempt to change dimensions.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canChangeDimensions(ctx => {
         *     const { to, from, entity } = ctx
         *     // Define the conditions for the entity to be able to change dimensions
         *     // Use information about the LivingEntity provided by the context.
         *     return false // Some boolean condition indicating if the entity can change dimensions;
         * });
         * ```
         */
        canChangeDimensions(arg0: $Predicate_<$ContextUtils$ChangeDimensionsContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine whether the entity should render at a squared distance.
         * 
         * @param shouldRenderAtSqrDistance Function accepting a {@link ContextUtils.EntitySqrDistanceContext} parameter,
         *                  defining the conditions under which the entity should render.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.shouldRenderAtSqrDistance(context => {
         *     // Custom logic to determine whether the entity should render
         *     // Access information about the distance using the provided context.
         *     return true;
         * });
         * ```
         */
        shouldRenderAtSqrDistance(arg0: $Predicate_<$ContextUtils$EntitySqrDistanceContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether to reposition the entity after loading.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.repositionEntityAfterLoad(true);
         * ```
         */
        repositionEntityAfterLoad(arg0: boolean): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity may interact with something.
         * The provided Predicate accepts a {@link ContextUtils.MayInteractContext} parameter,
         * representing the context of the potential interaction, and returns a boolean.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mayInteract(context => {
         *     // Define conditions for the entity to be allowed to interact
         *     // Use information about the MayInteractContext provided by the context.
         *     return false // Some boolean condition indicating if the entity may interact;
         * });
         * ```
         */
        mayInteract(arg0: $Predicate_<$ContextUtils$MayInteractContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity stops riding.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onStopRiding(entity => {
         *     // Define custom logic for handling when the entity stops riding another entity
         * });
         * ```
         */
        onStopRiding(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
         */
        setSwimSplashSound(arg0: $Object): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
         */
        setSwimSound(arg0: $Object): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the minimum fall distance for the entity before taking damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setMaxFallDistance(entity => {
         *     // Define custom logic to determine the maximum fall distance
         *     // Use information about the LivingEntity provided by the context.
         *     return 3;
         * });
         * ```
         */
        setMaxFallDistance(arg0: $Function_<$LivingEntity, $Object>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is removed from the world.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is being removed from the world.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onRemovedFromWorld(entity => {
         *     // Define custom logic for handling the removal of the entity from the world
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onRemovedFromWorld(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the block jump factor for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setBlockJumpFactor(entity => {
         *     //Set the jump factor for the entity through context
         *     return 1 //some float value;
         * });
         * ```
         */
        setBlockJumpFactor(arg0: $Function_<$LivingEntity, $Object>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is added to the world.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is added to the world.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onAddedToWorld(entity => {
         *     // Define custom logic for handling when the entity is added to the world
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onAddedToWorld(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the living entity falls and takes damage.
         * The provided Consumer accepts a {@link ContextUtils.EntityFallDamageContext} parameter,
         * representing the context of the entity falling and taking fall damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onLivingFall(context => {
         *     // Define custom logic for handling when the living entity falls and takes damage
         *     // Use information about the EntityFallDamageContext provided by the context.
         * });
         * ```
         */
        onLivingFall(arg0: $Consumer_<$ContextUtils$EntityFallDamageContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity jumps.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onLivingJump(entity => {
         *     // Custom logic to handle the entity's jump action
         * });
         * ```
         */
        onLivingJump(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity can stand on a fluid.
         * The provided Predicate accepts a {@link ContextUtils.EntityFluidStateContext} parameter,
         * representing the context of the entity potentially standing on a fluid.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canStandOnFluid(context => {
         *     // Define conditions for the entity to be able to stand on a fluid
         *     // Use information about the EntityFluidStateContext provided by the context.
         *     return // Some boolean condition indicating if the entity can stand on the fluid;
         * });
         * ```
         */
        canStandOnFluid(arg0: $Predicate_<$ContextUtils$EntityFluidStateContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity picks up an item.
         * The provided Consumer accepts a {@link ContextUtils.EntityItemEntityContext} parameter,
         * representing the context of the entity picking up an item with another entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onItemPickup(context => {
         *     // Define custom logic for handling the entity picking up an item
         *     // Use information about the EntityItemEntityContext provided by the context.
         * });
         * ```
         */
        onItemPickup(arg0: $Consumer_<$ContextUtils$EntityItemEntityContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity starts sleeping.
         * The provided Consumer accepts a {@link ContextUtils.EntityBlockPosContext} parameter,
         * representing the context of the entity starting to sleep at a specific block position.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onStartSleeping(context => {
         *     // Define custom logic for handling the entity starting to sleep
         *     // Use information about the EntityBlockPosContext provided by the context.
         * });
         * ```
         */
        onStartSleeping(arg0: $Consumer_<$ContextUtils$EntityBlockPosContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity stops sleeping.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has stopped sleeping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onStopSleeping(entity => {
         *     // Define custom logic for handling the entity stopping sleeping
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onStopSleeping(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity is sensitive to water.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for sensitivity to water.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isSensitiveToWater(entity => {
         *     // Define conditions to check if the entity is sensitive to water
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is sensitive to water;
         * });
         * ```
         */
        isSensitiveToWater(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity has line of sight to another entity.
         * The provided Function accepts a {@link LineOfSightContext} parameter,
         * representing the entity to check for line of sight.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.hasLineOfSight(context => {
         *     // Define conditions to check if the entity has line of sight to the target entity
         *     // Use information about the Entity provided by the context.
         *     return // Some boolean condition indicating if there is line of sight;
         * });
         * ```
         */
        hasLineOfSight(arg0: $Predicate_<$ContextUtils$LineOfSightContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity leaves combat.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has left combat.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onLeaveCombat(entity => {
         *     // Define custom logic for handling the entity leaving combat
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onLeaveCombat(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity enters combat.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has entered combat.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onEnterCombat(entity => {
         *     // Define custom logic for handling the entity entering combat
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onEnterCombat(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * @param onHurtTarget A Consumer to execute when the mob attacks its target
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.onHurtTarget(context => {
         *     const {entity, targetEntity} = context
         *     //Execute code when the target is hurt
         * });
         * ```
         */
        onHurtTarget(arg0: $Consumer_<$ContextUtils$LineOfSightContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine the visibility percentage of the entity.
         * The provided Function accepts a {@link ContextUtils.VisualContext} parameter,
         * representing both the entity whose visibility percentage is being determined
         * and the the builder entity who is being looked at.
         * It returns a Double representing the visibility percentage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.visibilityPercent(context => {
         *     // Define logic to calculate and return the visibility percentage for the targetEntity
         *     // Use information about the Entity provided by the context.
         *     return // Some Double value representing the visibility percentage;
         * });
         * ```
         */
        visibilityPercent(arg0: $Function_<$ContextUtils$VisualContext, $Object>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the overall sound volume for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSoundVolume(0.5);
         * ```
         */
        setSoundVolume(arg0: number): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine the custom hurt sound of the entity.
         * The provided Function accepts a {@link ContextUtils.HurtContext} parameter,
         * ```javascript
         * entityBuilder.setHurtSound(context => {
         *     // Custom logic to determine the hurt sound for the entity
         *     // You can use information from the HurtContext to customize the sound based on the context
         *     const { entity, damageSource } = context;
         *     // Determine the hurt sound based on the type of damage source
         *     switch (damageSource.getType()) {
         *         case "fire":
         *             return "minecraft:entity.generic.burn";
         *         case "fall":
         *             return "minecraft:entity.generic.hurt";
         *         case "drown":
         *             return "minecraft:entity.generic.hurt";
         *         case "explosion":
         *             return "minecraft:entity.generic.explode";
         *         default:
         *             return "minecraft:entity.generic.explode";
         *     }
         * })
         * ```
         */
        setHurtSound(arg0: $Function_<$ContextUtils$HurtContext, $Object>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the jump boost power for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.jumpBoostPower(entity => {
         *     return //some float value
         * });
         * ```
         */
        jumpBoostPower(arg0: $Function_<$LivingEntity, $Object>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the water slowdown factor for the entity. Defaults to 0.8.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setWaterSlowDown(0.6);
         * ```
         */
        setWaterSlowDown(arg0: number): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine the experience reward for killing the entity.
         * The provided Function accepts a {@link LivingEntity} parameter,
         * representing the entity whose experience reward is being determined.
         * It returns an Integer representing the experience reward.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.experienceReward(killedEntity => {
         *     // Define logic to calculate and return the experience reward for the killedEntity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Integer value representing the experience reward;
         * });
         * ```
         */
        experienceReward(arg0: $Function_<$LivingEntity, $Object>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the death sound for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setDeathSound("minecraft:entity.generic.death");
         * ```
         */
        setDeathSound(arg0: $Object): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the sound resource location for the entity's eating sound using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.eatingSound("minecraft:entity.zombie.ambient");
         * ```
         */
        eatingSound(arg0: $Object): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine the block speed factor of the entity.
         * The provided Function accepts a {@link LivingEntity} parameter,
         * representing the entity whose block speed factor is being determined.
         * It returns a Float representing the block speed factor.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.blockSpeedFactor(entity => {
         *     // Define logic to calculate and return the block speed factor for the entity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Float value representing the block speed factor;
         * });
         * ```
         */
        blockSpeedFactor(arg0: $Function_<$LivingEntity, $Object>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is blocked by a shield.
         * The provided Consumer accepts a {@link ContextUtils.LivingEntityContext} parameter,
         * representing the entity that is blocked by a shield.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onBlockedByShield(context => {
         *     // Define custom logic for handling when the entity is blocked by a shield
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onBlockedByShield(arg0: $Consumer_<$ContextUtils$LivingEntityContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is removed on the client side.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is being removed on the client side.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onClientRemoval(entity => {
         *     // Define custom logic for handling the removal of the entity on the client side
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onClientRemoval(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * @param positionRider A consumer determining the position of rider/riders.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.positionRider(context => {
         *         const {entity, passenger, moveFunction} = context
         *     });
         *     ```
         */
        positionRider(arg0: $Consumer_<$ContextUtils$PositionRiderContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate to determine whether to show the vehicle health for the living entity.
         * 
         * @param predicate The predicate to determine whether to show the vehicle health.
         * 
         * The predicate should take a LivingEntity as a parameter and return a boolean value indicating whether to show the vehicle health.
         * 
         * Example usage:
         * ```javascript
         * baseLivingEntityBuilder.showVehicleHealth(entity => {
         *     // Determine whether to show the vehicle health for the living entity
         *     // Return true to show the vehicle health, false otherwise
         * });
         * ```
         */
        showVehicleHealth(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate to determine if a passenger can be added to the entity.
         * 
         * @param predicate The predicate to check if a passenger can be added.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canAddPassenger(context => {
         *     // Custom logic to determine if a passenger can be added to the entity
         *     return true;
         * });
         * ```
         */
        canAddPassenger(arg0: $Predicate_<$ContextUtils$PassengerEntityContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Function determining if the entity may collide with another entity
         * using the ContextUtils.CollidingEntityContext which has this entity and the
         * one colliding with this entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canCollideWith(context => {
         *     return true //Some Boolean value determining whether the entity may collide with another
         * });
         * ```
         */
        canCollideWith(arg0: $Predicate_<$ContextUtils$CollidingEntityContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate to determine whether the living entity dampens vibrations.
         * 
         * @param predicate The predicate to determine whether the living entity dampens vibrations.
         * 
         * The predicate should take a LivingEntity as a parameter and return a boolean value indicating whether the living entity dampens vibrations.
         * 
         * Example usage:
         * ```javascript
         * baseLivingEntityBuilder.dampensVibrations(entity => {
         *     // Determine whether the living entity dampens vibrations
         *     // Return true if the entity dampens vibrations, false otherwise
         * });
         * ```
         */
        dampensVibrations(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Determines if the entity's hitbox collides with other entities the same as a solic block.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.canBeCollidedWith(entity => {
         *         return true
         *     });
         *     ```
         */
        canBeCollidedWith(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity performs an eating action.
         * The provided Consumer accepts a {@link ContextUtils.FoodItemLevelContext} parameter,
         * representing the context of the entity's interaction with a specific item during eating.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.eat(context => {
         *     // Custom logic to handle the entity's eating action
         *     // Access information about the item being consumed using the provided context.
         * });
         * ```
         */
        eat(arg0: $Consumer_<$ContextUtils$FoodItemLevelContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Defines logic to render the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.render(context => {
         *     // Define logic to render the entity
         *     if (context.entity.isBaby()) {
         *         context.poseStack.scale(0.5, 0.5, 0.5);
         *     }
         * });
         * ```
         */
        render(arg0: $Consumer_<$ContextUtils$RenderContext<$EntityType<T>>>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity is currently glowing.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its glowing state.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isCurrentlyGlowing(entity => {
         *     // Define the conditions to check if the entity is currently glowing
         *     // Use information about the LivingEntity provided by the context.
         *     const isGlowing = // Some boolean condition to check if the entity is glowing;
         *     return isGlowing;
         * });
         * ```
         */
        isCurrentlyGlowing(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the main arm of the entity. Defaults to 'right'.
         * 
         * @param arm The main arm of the entity. Accepts values "left" or "right".
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mainArm("left");
         * ```
         */
        mainArm(arg0: $Object): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity is invulnerable to a specific type of damage.
         * The provided Predicate accepts a {@link ContextUtils.DamageContext} parameter,
         * representing the context of the damage, and returns a boolean indicating invulnerability.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isInvulnerableTo(context => {
         *     // Define conditions for the entity to be invulnerable to the specific type of damage
         *     // Use information about the DamageContext provided by the context.
         *     return true // Some boolean condition indicating if the entity has invulnerability to the damage type;
         * });
         * ```
         */
        isInvulnerableTo(arg0: $Predicate_<$ContextUtils$DamageContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when a player interacts with the entity.
         * The provided Consumer accepts a {@link ContextUtils.PlayerEntityContext} parameter,
         * representing the context of the player's interaction with the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.playerTouch(context => {
         *     // Define custom logic for handling player interaction with the entity
         *     // Use information about the PlayerEntityContext provided by the context.
         * });
         * ```
         */
        playerTouch(arg0: $Consumer_<$ContextUtils$PlayerEntityContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate to determine whether the entity is affected by fluids.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose interaction with fluids is being determined.
         * It returns a Boolean indicating whether the entity is affected by fluids.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAffectedByFluids(entity => {
         *     // Define logic to determine whether the entity is affected by fluids
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity is affected by fluids;
         * });
         * ```
         */
        isAffectedByFluids(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity is on a climbable surface.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for being on a climbable surface.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onClimbable(entity => {
         *     // Define conditions to check if the entity is on a climbable surface
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is on a climbable surface;
         * });
         * ```
         */
        onClimbable(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity is attackable.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its attackability.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAttackable(entity => {
         *     // Define conditions to check if the entity is attackable
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is attackable;
         * });
         * ```
         */
        isAttackable(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity can take an item.
         * The provided Predicate accepts a {@link ContextUtils.EntityItemLevelContext} parameter,
         * representing the context of the entity potentially taking an item.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canTakeItem(context => {
         *     // Define conditions for the entity to be able to take an item
         *     // Use information about the EntityItemLevelContext provided by the context.
         *     return // Some boolean condition indicating if the entity can take the item;
         * });
         * ```
         */
        canTakeItem(arg0: $Predicate_<$ContextUtils$EntityItemLevelContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity equips an item.
         * The provided Consumer accepts a {@link ContextUtils.EntityEquipmentContext} parameter,
         * representing the context of the entity equipping an item.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onEquipItem(context => {
         *     // Define custom logic for handling when the entity equips an item
         *     // Use information about the EntityEquipmentContext provided by the context.
         * });
         * ```
         */
        onEquipItem(arg0: $Consumer_<$ContextUtils$EntityEquipmentContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the list of block names to which the entity is immune.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.immuneTo("minecraft:stone", "minecraft:dirt");
         * ```
         */
        immuneTo(...arg0: string[]): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity is immune to fire damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.fireImmune(true);
         * ```
         */
        fireImmune(arg0: boolean): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is hit by thunder.
         * The provided Consumer accepts a {@link ContextUtils.ThunderHitContext} parameter,
         * representing the context of the entity being hit by thunder.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.thunderHit(context => {
         *     // Define custom logic for handling the entity being hit by thunder
         *     // Use information about the ThunderHitContext provided by the context.
         * });
         * ```
         */
        thunderHit(arg0: $Consumer_<$ContextUtils$ThunderHitContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine whether the entity can ride another entity.
         * 
         * @param canRide Predicate accepting a {@link ContextUtils.PassengerVehicleContext} parameter,
         *                  defining the conditions under which the entity should ride
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canRide(context => {
         *     return true;
         * });
         * ```
         */
        canRide(arg0: $Predicate_<$ContextUtils$PassengerVehicleContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed during each tick when the entity is being ridden.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is being ridden.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.rideTick(entity => {
         *     // Define custom logic for handling each tick when the entity is being ridden
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        rideTick(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed during the living entity's AI step.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * allowing customization of the AI behavior.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.aiStep(entity => {
         *     // Custom logic to be executed during the living entity's AI step
         *     // Access and modify information about the entity using the provided context.
         * });
         * ```
         */
        aiStep(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Function determining if the entity is allied with a potential target.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAlliedTo(context => {
         *     const {entity, target} = context
         *     return target.type == 'minecraft:blaze'
         * });
         * ```
         */
        isAlliedTo(arg0: $Predicate_<$ContextUtils$LineOfSightContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate to determine whether the entity is immobile.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose immobility is being determined.
         * It returns a Boolean indicating whether the entity is immobile.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isImmobile(entity => {
         *     // Define logic to determine whether the entity is immobile
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity is immobile;
         * });
         * ```
         */
        isImmobile(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Consumer determining travel logic for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.travel(context => {
         *     const {entity, vec3} = context
         *     // Use the vec3 and entity to determine the travel logic of the entity
         * });
         * ```
         */
        travel(arg0: $Consumer_<$ContextUtils$Vec3Context>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Consumer overriding the tickDeath responsible to counting down
         * the ticks it takes to remove the entity when it dies.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.tickDeath(entity => {
         *     // Override the tickDeath method in the entity
         * });
         * ```
         */
        tickDeath(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity can attack another entity.
         * The provided Predicate accepts a {@link ContextUtils.LivingEntityContext} parameter,
         * representing the entity that may be attacked.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canAttack(context => {
         *     // Define conditions to check if the entity can attack the targetEntity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity can attack the targetEntity;
         * });
         * ```
         */
        canAttack(arg0: $Predicate_<$ContextUtils$LivingEntityContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity can undergo freezing.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be subjected to freezing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canFreeze(entity => {
         *     // Define the conditions for the entity to be able to freeze
         *     // Use information about the LivingEntity provided by the context.
         *     return true //someBoolean;
         * });
         * ```
         */
        canFreeze(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity is pushable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isPushable(true);
         * ```
         */
        isPushable(arg0: boolean): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a consumer to handle custom lerping logic for the living entity.
         * 
         * @param lerpTo The consumer to handle the custom lerping logic.
         * 
         * The consumer should take a LerpToContext as a parameter, providing information about the lerping operation, including the target position, yaw, pitch, increment count, teleport flag, and the entity itself.
         * 
         * Example usage:
         * ```javascript
         * baseLivingEntityBuilder.lerpTo(context => {
         *     // Custom lerping logic for the living entity
         *     const { x, y, z, yaw, pitch, posRotationIncrements, entity } = context;
         *     // Perform custom lerping operations using the provided context
         *     // For example, you can smoothly move the entity from its current position to the target position
         *     entity.setPositionAndRotation(x, y, z, yaw, pitch);
         * });
         * ```
         */
        lerpTo(arg0: $Consumer_<$ContextUtils$LerpToContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity dies.
         * The provided Consumer accepts a {@link ContextUtils.DeathContext} parameter,
         * representing the context of the entity's death.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onDeath(context => {
         *     // Define custom logic for handling the entity's death
         *     // Use information about the DeathContext provided by the context.
         * });
         * ```
         */
        onDeath(arg0: $Consumer_<$ContextUtils$DeathContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the sound resource locations for small and large falls of the entity using either string representations or ResourceLocation objects.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.fallSounds("minecraft:entity.generic.small_fall",
         *     "minecraft:entity.generic.large_fall");
         * ```
         */
        fallSounds(arg0: $Object, arg1: $Object): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine the next step distance for the entity.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose next step distance is being determined.
         * It returns a Float representing the next step distance.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.nextStep(entity => {
         *     // Define logic to calculate and return the next step distance for the entity
         *     // Use information about the Entity provided by the context.
         *     return // Some Float value representing the next step distance;
         * });
         * ```
         */
        nextStep(arg0: $Function_<$Entity, $Object>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is hurt.
         * The provided Consumer accepts a {@link ContextUtils.EntityDamageContext} parameter,
         * representing the context of the entity being hurt.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onHurt(context => {
         *     // Define custom logic for handling when the entity is hurt
         *     // Use information about the EntityDamageContext provided by the context.
         * });
         * ```
         */
        onHurt(arg0: $Consumer_<$ContextUtils$EntityDamageContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity can trample or step on something.
         * The provided Predicate accepts a {@link ContextUtils.CanTrampleContext} parameter,
         * representing the context of the potential trampling action, and returns a boolean.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canTrample(context => {
         *     // Define conditions for the entity to be allowed to trample
         *     // Use information about the CanTrampleContext provided by the context.
         *     return false // Some boolean condition indicating if the entity can trample;
         * });
         * ```
         */
        canTrample(arg0: $Predicate_<$ContextUtils$CanTrampleContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is hurt by lava.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is affected by lava.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.lavaHurt(entity => {
         *     // Define custom logic for handling the entity being hurt by lava
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        lavaHurt(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity performs a flap action.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is flapping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onFlap(entity => {
         *     // Define custom logic for handling the entity's flap action
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onFlap(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine whether the entity is currently flapping.
         * The provided Function accepts a {@link LivingEntity} parameter,
         * representing the entity whose flapping status is being determined.
         * It returns a Boolean indicating whether the entity is flapping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isFlapping(entity => {
         *     // Define logic to determine whether the entity is currently flapping
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity is flapping;
         * });
         * ```
         */
        isFlapping(arg0: $Predicate_<$LivingEntity>): this;
        /**
         * Defines in what condition the entity will start freezing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isFreezing(entity => {
         *     return true;
         * });
         * ```
         */
        isFreezing(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity starts sprinting.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has started sprinting.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onSprint(entity => {
         *     // Define custom logic for handling when the entity starts sprinting
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onSprint(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a consumer to handle the interaction with the entity.
         * The provided Consumer accepts a {@link ContextUtils.MobInteractContext} parameter,
         * representing the context of the interaction
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onInteract(context => {
         *     // Define custom logic for the interaction with the entity
         *     // Use information about the MobInteractContext provided by the context.
         *     if (context.player.isShiftKeyDown()) return
         *     context.player.startRiding(context.entity);
         * });
         * ```
         */
        onInteract(arg0: $Consumer_<$ContextUtils$MobInteractContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine whether the entity can disable its target's shield.
         * The provided Predicate accepts a {@link LivingEntity} parameter.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canDisableShield(entity => {
         *     // Define the conditions to check if the entity can disable its shield
         *     // Use information about the LivingEntity provided by the context.
         *     return true;
         * });
         * ```
         */
        canDisableShield(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity can spawn far from the player.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canSpawnFarFromPlayer(true);
         * ```
         */
        canSpawnFarFromPlayer(arg0: boolean): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the client tracking range for the entity.
         * Defaults to 5.
         * Example usage:
         * ```javascript
         * entityBuilder.clientTrackingRange(64); // Set the client tracking range to 64 blocks
         * ```
         */
        clientTrackingRange(arg0: number): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity automatically attacks on touch.
         * The provided Consumer accepts a {@link ContextUtils.AutoAttackContext} parameter,
         * representing the context of the auto-attack when the entity touches another entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.doAutoAttackOnTouch(context => {
         *     // Define custom logic for handling when the entity automatically attacks on touch
         *     // Use information about the AutoAttackContext provided by the context.
         * });
         * ```
         */
        doAutoAttackOnTouch(arg0: $Consumer_<$ContextUtils$AutoAttackContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity is always considered as an experience dropper.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAlwaysExperienceDropper(true);
         * ```
         */
        isAlwaysExperienceDropper(arg0: boolean): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the render type for the entity.
         * 
         * @param type The render type to be set. Acceptable values are:
         *              - "solid
         *              - "cutout"
         *              - "translucent"
         *              - RenderType.SOLID
         *              - RenderType.CUTOUT
         *              - RenderType.TRANSLUCENT
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setRenderType("translucent");
         * ```
         */
        setRenderType(arg0: $Object): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when an effect is added to the entity.
         * The provided Consumer accepts a {@link ContextUtils.OnEffectContext} parameter,
         * representing the context of the effect being added to the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onEffectAdded(context => {
         *     // Define custom logic for handling when an effect is added to the entity
         *     // Use information about the OnEffectContext provided by the context.
         * });
         * ```
         */
        onEffectAdded(arg0: $Consumer_<$ContextUtils$OnEffectContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the render type for the entity via a function.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", outlineEntityBoolean));
         * ```
         */
        renderType(arg0: $Function_<$EntityType<T>, $RenderType>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Determines if the entity should serialize its data. Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.saves(false);
         * ```
         */
        saves(arg0: boolean): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity is currently sleeping.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its sleeping state.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isSleeping(entity => {
         *     // Define conditions to check if the entity is currently sleeping
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is sleeping;
         * });
         * ```
         */
        isSleeping(arg0: $Predicate_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the spawn placement of the entity type
         * entityBuilder.spawnPlacement('on_ground', 'world_surface', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
         *     if (levelaccessor.getLevel().getBiome(blockpos) == 'minecraft:plains') return true;
         *     return false
         * })
         * 
         * @param placementType The placement type of the spawn, accepts 'on_ground', 'in_water', 'no_restrictions', 'in_lava'
         * @param heightMap The height map used for the spawner
         * @param spawnPredicate The predicate that determines if the entity will spawn
         */
        spawnPlacement(arg0: $SpawnPlacementType_, arg1: $Heightmap$Types_, arg2: $SpawnPlacements$SpawnPredicate_<$EntityType<T>>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Adds a custom item render layer to the entity model using GeckoLib's bone system.
         * 
         * The first argument is a function that returns the bone name to attach the item to, based on the entity.
         * The second argument allows configuration of the item render using an ItemModelJSBuilder.
         * 
         * Example usage:
         * ```javascript
         * builder.addRenderItemLayer(entity => "right_hand", item => {
         *     item.renderItem(context => {
         *         let {
         *             poseStack,
         *             bone,
         *             item,
         *             entity,
         *             bufferSource,
         *             partialTick,
         *             packedLight,
         *             packedOverlay
         *         } = context
         *         try {
         *             poseStack.translate(0.05, -0.5, -0.5)
         *             poseStack.mulPose(Axis.YP.rotationDegrees(90))
         *             poseStack.mulPose(Axis.ZP.rotationDegrees(-40))
         *         } catch (error) {
         *             console.log(error)
         *         }
         *     })
         * })
         * ```
         */
        addRenderItemLayer(arg0: $Function_<$LivingEntity, string>, arg1: $Consumer_<$ItemModelJSBuilder<$EntityType<T>>>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Boolean determining if the entity will turn sideways on death.
         * Defaults to true.
         * Example usage:
         * ```javascript
         * entityBuilder.defaultDeathPose(false);
         * ```
         */
        defaultDeathPose(arg0: boolean): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * @param scaleModelForRender A Consumer to determing logic for model scaling and rendering
         *     without affecting core logic such as hitbox sizing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.scaleModelForRender(context => {
         *     const { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context
         *     if (entity.isBaby()) {
         *         poseStack.scale(0.5, 0.5, 0.5)
         *     }
         * });
         * ```
         */
        scaleModelForRender(arg0: $Consumer_<$ContextUtils$ScaleModelRenderContext>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine the texture resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the texture based on information about the entity.
         * The default behavior returns <namespace>:textures/entity/<path>.png.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.textureResource(entity => {
         *     // Define logic to determine the texture resource for the entity
         *     // Use information about the entity provided by the context.
         *     return "kubejs:textures/entity/wyrm.png" // Some ResourceLocation representing the texture resource;
         * });
         * ```
         */
        textureResource(arg0: $Function_<$EntityType<T>, $Object>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * @param applyRotations A consumer for applying additional rotations or transforms to the entity model.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.applyRotations(context => {
         *         const { entity, poseStack, ageInTicks, rotationYaw, partialTick } = context
         *         // apply your transforms here
         *     });
         *     ```
         */
        applyRotations(arg0: $Consumer_<$ContextUtils$ApplyRotationsContext<$EntityType<T>>>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * A Consumer determining logic for the final render.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.renderFinal(context => {
         *     const {
         *         poseStack,
         *         entity,
         *         model,
         *         bufferSource,
         *         buffer,
         *         partialTick,
         *         packedLight,
         *         packedOverlay,
         *         red,
         *         green,
         *         blue,
         *         alpha
         *     } = context
         *     if (entity.isBaby()) {
         *         poseStack.scale(0.5, 0.5, 0.5)
         *     }
         * })
         * ```
         */
        renderFinal(arg0: $Consumer_<$ContextUtils$FinalRenderContext<$EntityType<T>>>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the mob category for the entity.
         * Available options: 'monster', 'creature', 'ambient', 'water_creature', 'misc'.
         * Defaults to 'misc'.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mobCategory('monster');
         * ```
         */
        mobCategory(arg0: string): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Adds an extra glowing render layer to the mob.
         * @param newGlowingGeoLayer The builder Consumer for the new render layer.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.newGlowingGeoLayer(builder => {
         *         builder.textureResource(entity => {
         *             return "kubejs:textures/entity/sasuke.png"
         *         })
         *     });
         *     ```
         */
        newGlowingGeoLayer(arg0: $Consumer_<$GeoLayerJSBuilder<$EntityType<T>>>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity's passenger dismounts it.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onRemovePassenger(entity => {
         *     // Define custom logic for handling when the entity stops being ridden
         * });
         * ```
         */
        onRemovePassenger(arg0: $Consumer_<$LivingEntity>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity is summonable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSummonable(true);
         * ```
         */
        setSummonable(arg0: boolean): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine the animation resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the animations based on information about the entity.
         * The default behavior returns <namespace>:animations/<path>.animation.json.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.animationResource(entity => {
         *     // Define logic to determine the animation resource for the entity
         *     // Use information about the entity provided by the context.
         *     //return some ResourceLocation representing the animation resource;
         *     return "kubejs:animations/entity/wyrm.animation.json" // Some ResourceLocation representing the animation resource;
         * });
         * ```
         */
        animationResource(arg0: $Function_<$EntityType<T>, $Object>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine the model resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the model based on information about the entity.
         * The default behavior returns <namespace>:geo/entity/<path>.geo.json.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.modelResource(entity => {
         *     // Define logic to determine the model resource for the entity
         *     // Use information about the entity provided by the context.
         *     return "kubejs:geo/entity/wyrm.geo.json" // Some ResourceLocation representing the model resource;
         * });
         * ```
         */
        modelResource(arg0: $Function_<$EntityType<T>, $Object>): $BaseLivingEntityBuilder<$EntityType<T>>;
        addArmorItemLayer(arg0: $Consumer_<$ItemArmorJSBuilder<$EntityType<T>>>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Adds an extra render layer to the mob.
         * @param newGeoLayer The builder Consumer for the new render layer.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.newGeoLayer(builder => {
         *         builder.textureResource(entity => {
         *             return "kubejs:textures/entity/sasuke.png"
         *         })
         *     });
         *     ```
         */
        newGeoLayer(arg0: $Consumer_<$GeoLayerJSBuilder<$EntityType<T>>>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Adds an extra hitbox to the mob. Aka part-entities.
         * Vanilla ticks extra hitboxes(for example the ender dragon's) with the
         * .tickPart method which specifies which hitbox to move to the entity and
         * its offset. This method is available off of the parent entity anywhere
         * including non EntityJS callbacks. (Usually used in the entity's aiStep method)
         * For example: `entity.tickPart("head", 0, 1, 0)`
         * 
         * Creation of the hitbox:
         * ```javascript
         * entityBuilder.addPartEntity("head", 1, 2, builder => {
         *     // Can also be null
         *     builder.isPickable(true)
         * });
         * ```
         * 
         * @param name The name of the part
         * @param width The width of the part
         * @param height The height of the part
         * @param builderConsumer The builder for the part, very similar to the normal builder callbacks
         */
        addPartEntity(arg0: string, arg1: number, arg2: number, arg3: $Consumer_<$PartBuilder<$EntityType<T>>>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Adds a spawner for this entity to the provided biome(s)
         * 
         * @param biomes A list of biomes that the entity should spawn in. If using a tag, only one value may be provided
         * @param weight The spawn weight the entity should have
         * @param minCount The minimum number of entities that can spawn at a time
         * @param maxCount The maximum number of entities that can spawn at a time
         */
        biomeSpawn(arg0: $List_<string>, arg1: number, arg2: number, arg3: number): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Boolean determining whether the passenger is able to steer the entity while riding.
         * Defaults to true.
         * Example usage:
         * ```javascript
         * entityBuilder.canSteer(false);
         * ```
         */
        canSteer(arg0: boolean): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Sets the scale of the model.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.modelSize(2,2);
         * ```
         */
        modelSize(arg0: number, arg1: number): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Adds an animation controller to the entity with the specified parameters.
         * 
         * @param name The name of the animation controller.
         * @param translationTicksLength The length of translation ticks for the animation.
         * @param predicate The animation predicate defining the conditions for the animation to be played.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.addAnimationController('exampleController', 5, event => {
         *     // Define conditions for the animation to be played based on the entity.
         *     if (event.entity.hurtTime > 0) {
         *         event.thenLoop('spawn');
         *     } else {
         *         event.thenPlayAndHold('idle');
         *     }
         *     return true; // Some boolean condition indicating if the animation should be played;
         * });
         * ```
         */
        addAnimationController(arg0: string, arg1: number, arg2: $BaseLivingEntityBuilder$IAnimationPredicateJS_<$EntityType<T>>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Adds a new AnimationController to the entity, with the ability to add event listeners
         * 
         * @param name The name of the controller
         * @param translationTicksLength How many ticks it takes to transition between different animations
         * @param predicate The predicate for the controller, determines if an animation should continue or not
         * @param soundListener A sound listener, used to execute actions when the json requests a sound to play. May be null
         * @param particleListener A particle listener, used to execute actions when the json requests a particle. May be null
         * @param instructionListener A custom instruction listener, used to execute actions based on arbitrary instructions provided by the json. May be null
         */
        addKeyAnimationController(arg0: string, arg1: number, arg2: $BaseLivingEntityBuilder$IAnimationPredicateJS_<$EntityType<T>>, arg3: $BaseLivingEntityBuilder$ISoundListenerJS_<$EntityType<T>>, arg4: $BaseLivingEntityBuilder$IParticleListenerJS_<$EntityType<T>>, arg5: $BaseLivingEntityBuilder$ICustomInstructionListenerJS_<$EntityType<T>>): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Boolean determining whether the entity can jump while mounted by a player.
         * (Currently experimental jumping logic subject to change in the future)
         * Defaults to false.
         * Example usage:
         * ```javascript
         * entityBuilder.mountJumpingEnabled(true);
         * ```
         */
        mountJumpingEnabled(arg0: boolean): $BaseLivingEntityBuilder<$EntityType<T>>;
        /**
         * Adds a triggerable AnimationController to the entity callable off the entity's methods anywhere.
         * 
         * @param name The name of the controller
         * @param translationTicksLength How many ticks it takes to transition between different animations
         * @param triggerableAnimationID The unique identifier of the triggerable animation(sets it apart from other triggerable animations)
         * @param triggerableAnimationName The name of the animation defined in the animations.json
         * @param loopType The loop type for the triggerable animation, either 'LOOP' or 'PLAY_ONCE' or 'HOLD_ON_LAST_FRAME' or 'DEFAULT'
         */
        addTriggerableAnimationController(arg0: string, arg1: number, arg2: string, arg3: string, arg4: string): $BaseLivingEntityBuilder<$EntityType<T>>;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$EntityType<T>>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$EntityType<T>>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$EntityType<T>>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$EntityType<T>>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
        set swimSplashSound(value: $Object);
        set swimSound(value: $Object);
        set maxFallDistance(value: $Function_<$LivingEntity, $Object>);
        set blockJumpFactor(value: $Function_<$LivingEntity, $Object>);
        set soundVolume(value: number);
        set hurtSound(value: $Function_<$ContextUtils$HurtContext, $Object>);
        set waterSlowDown(value: number);
        set deathSound(value: $Object);
        set summonable(value: boolean);
    }
}
