import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Item } from "@package/net/minecraft/world/item";
import { $DataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $CustomInstructionKeyframeData, $SoundKeyframeData, $KeyFrameData, $ParticleKeyframeData } from "@package/software/bernie/geckolib/animation/keyframe/event/data";
import { $List, $Map } from "@package/java/util";
import { $AnimationController$AnimationStateHandler, $AnimationState, $AnimationController, $Animation$LoopType_, $PlayState } from "@package/software/bernie/geckolib/animation";
import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $NLGeoLayerJSBuilder } from "@package/net/liopyu/entityjs/client/nonliving/model";
import { $SoundKeyframeEvent, $CustomInstructionKeyframeEvent, $ParticleKeyframeEvent } from "@package/software/bernie/geckolib/animation/keyframe/event";
import { $Object } from "@package/java/lang";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $ContextUtils$MovementContext, $ContextUtils$EPassengerEntityContext, $ContextUtils$EThunderHitContext, $ContextUtils$ScaleModelRenderContextNL, $ContextUtils$EEntityFallDamageContext, $ContextUtils$EMayInteractContext, $ContextUtils$ECanTrampleContext, $ContextUtils$ECollidingEntityContext, $ContextUtils$NLRenderContext, $ContextUtils$ChangeDimensionsContext, $ContextUtils$EDamageContext, $ContextUtils$PositionRiderContext, $ContextUtils$EntitySqrDistanceContext, $ContextUtils$LerpToContext, $ContextUtils$EntityPlayerContext } from "@package/net/liopyu/entityjs/util";
export * as entityjs from "@package/net/liopyu/entityjs/builders/nonliving/entityjs";
export * as vanilla from "@package/net/liopyu/entityjs/builders/nonliving/vanilla";

declare module "@package/net/liopyu/entityjs/builders/nonliving" {
    export class $BaseEntityBuilder$ICustomInstructionListenerJS<E extends $Entity> {
    }
    export interface $BaseEntityBuilder$ICustomInstructionListenerJS<E extends $Entity> {
        executeInstruction(arg0: $BaseEntityBuilder$CustomInstructionKeyframeEventJS<E>): void;
    }
    /**
     * Values that may be interpreted as {@link $BaseEntityBuilder$ICustomInstructionListenerJS}.
     */
    export type $BaseEntityBuilder$ICustomInstructionListenerJS_<E> = ((arg0: $BaseEntityBuilder$CustomInstructionKeyframeEventJS<E>) => void);
    export class $BaseEntityBuilder$ParticleKeyFrameEventJS<E extends $Entity> extends $BaseEntityBuilder$KeyFrameEventJS<E, $ParticleKeyframeData> {
        animationTick: number;
        controller: $AnimationController<E>;
        effect: string;
        locator: string;
        script: string;
        entity: E;
        keyframeData: $ParticleKeyframeData;
        constructor(arg0: $ParticleKeyframeEvent<E>);
    }
    export class $BaseEntityBuilder<T extends $Entity> extends $BuilderBase<$EntityType<T>> {
        /**
         * Sets a callback function to be executed when the entity performs a movement action.
         * The provided Consumer accepts a {@link ContextUtils.MovementContext} parameter,
         * representing the context of the entity's movement.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.move(context => {
         *     // Custom logic to handle the entity's movement action
         *     // Access information about the movement using the provided context.
         * });
         * ```
         */
        move(arg0: $Consumer_<$ContextUtils$MovementContext>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed on each tick for the entity.
         * 
         * @param tick A Consumer accepting a {@link Entity} parameter, defining the behavior to be executed on each tick.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.tick(entity => {
         *     // Custom logic to be executed on each tick of the entity.
         *     // Access information about the entity using the provided parameter.
         * });
         * ```
         */
        tick(arg0: $Consumer_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets the hit box of the entity type.
         * 
         * @param width The width of the entity. Defaults to 0.5.
         * @param height The height of the entity. Defaults to 0.5.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.sized(1.0f, 1.5f);
         * ```
         */
        sized(arg0: number, arg1: number): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets the update interval in ticks of the entity.
         * Defaults to 1 tick.
         * 
         * @param updateInterval The update interval in ticks.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.updateInterval(5);
         * ```
         */
        updateInterval(arg0: number): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity can change dimensions.
         * The provided Predicate accepts a {@link ContextUtils.ChangeDimensionsContext} parameter,
         * representing the entity that may attempt to change dimensions.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canChangeDimensions(ctx => {
         *     // Define the conditions for the entity to be able to change dimensions
         *     // Use information about the Entity provided by the context.
         *     return false // Some boolean condition indicating if the entity can change dimensions;
         * });
         * ```
         */
        canChangeDimensions(arg0: $Predicate_<$ContextUtils$ChangeDimensionsContext>): $BaseEntityBuilder<$EntityType<T>>;
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
        shouldRenderAtSqrDistance(arg0: $Predicate_<$ContextUtils$EntitySqrDistanceContext>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether to reposition the entity after loading.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.repositionEntityAfterLoad(true);
         * ```
         */
        repositionEntityAfterLoad(arg0: boolean): $BaseEntityBuilder<$EntityType<T>>;
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
        mayInteract(arg0: $Predicate_<$ContextUtils$EMayInteractContext>): $BaseEntityBuilder<$EntityType<T>>;
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
        onStopRiding(arg0: $Consumer_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
         */
        setSwimSplashSound(arg0: $Object): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
         */
        setSwimSound(arg0: $Object): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets the minimum fall distance for the entity before taking damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setMaxFallDistance(entity => {
         *     // Define custom logic to determine the maximum fall distance
         *     // Use information about the Entity provided by the context.
         *     return 3;
         * });
         * ```
         */
        setMaxFallDistance(arg0: $Function_<$Entity, $Object>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is removed from the world.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being removed from the world.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onRemovedFromWorld(entity => {
         *     // Define custom logic for handling the removal of the entity from the world
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onRemovedFromWorld(arg0: $Consumer_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
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
        setBlockJumpFactor(arg0: $Function_<$Entity, $Object>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is added to the world.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is added to the world.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onAddedToWorld(entity => {
         *     // Define custom logic for handling when the entity is added to the world
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onAddedToWorld(arg0: $Consumer_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine the block speed factor of the entity.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose block speed factor is being determined.
         * It returns a Float representing the block speed factor.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.blockSpeedFactor(entity => {
         *     // Define logic to calculate and return the block speed factor for the entity
         *     // Use information about the Entity provided by the context.
         *     return // Some Float value representing the block speed factor;
         * });
         * ```
         */
        blockSpeedFactor(arg0: $Function_<$Entity, $Object>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is removed on the client side.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being removed on the client side.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onClientRemoval(entity => {
         *     // Define custom logic for handling the removal of the entity on the client side
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onClientRemoval(arg0: $Consumer_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
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
        positionRider(arg0: $Consumer_<$ContextUtils$PositionRiderContext>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate to determine whether to show the vehicle health for the living entity.
         * 
         * @param predicate The predicate to determine whether to show the vehicle health.
         * 
         * The predicate should take a Entity as a parameter and return a boolean value indicating whether to show the vehicle health.
         * 
         * Example usage:
         * ```javascript
         * baseEntityBuilder.showVehicleHealth(entity => {
         *     // Determine whether to show the vehicle health for the living entity
         *     // Return true to show the vehicle health, false otherwise
         * });
         * ```
         */
        showVehicleHealth(arg0: $Predicate_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
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
        canAddPassenger(arg0: $Predicate_<$ContextUtils$EPassengerEntityContext>): $BaseEntityBuilder<$EntityType<T>>;
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
        canCollideWith(arg0: $Predicate_<$ContextUtils$ECollidingEntityContext>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate to determine whether the living entity dampens vibrations.
         * 
         * @param predicate The predicate to determine whether the living entity dampens vibrations.
         * 
         * The predicate should take a Entity as a parameter and return a boolean value indicating whether the living entity dampens vibrations.
         * 
         * Example usage:
         * ```javascript
         * baseEntityBuilder.dampensVibrations(entity => {
         *     // Determine whether the living entity dampens vibrations
         *     // Return true if the entity dampens vibrations, false otherwise
         * });
         * ```
         */
        dampensVibrations(arg0: $Predicate_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
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
        canBeCollidedWith(arg0: $Predicate_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Defines logic to render the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.render(context => {
         *     // Define logic to render the entity
         *     context.poseStack.scale(0.5, 0.5, 0.5);
         * });
         * ```
         */
        render(arg0: $Consumer_<$ContextUtils$NLRenderContext<$EntityType<T>>>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity is currently glowing.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be checked for its glowing state.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isCurrentlyGlowing(entity => {
         *     // Define the conditions to check if the entity is currently glowing
         *     // Use information about the Entity provided by the context.
         *     const isGlowing = // Some boolean condition to check if the entity is glowing;
         *     return isGlowing;
         * });
         * ```
         */
        isCurrentlyGlowing(arg0: $Predicate_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
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
        isInvulnerableTo(arg0: $Predicate_<$ContextUtils$EDamageContext>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when a player touches the entity.
         * The provided Consumer accepts a {@link ContextUtils.EntityPlayerContext} parameter,
         * representing the context of the player's interaction with the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.playerTouch(context => {
         *     // Custom logic to handle the player's touch interaction with the entity
         *     // Access information about the interaction using the provided context.
         * });
         * ```
         */
        playerTouch(arg0: $Consumer_<$ContextUtils$EntityPlayerContext>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity is attackable.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be checked for its attackability.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAttackable(entity => {
         *     // Define conditions to check if the entity is attackable
         *     // Use information about the Entity provided by the context.
         *     return // Some boolean condition indicating if the entity is attackable;
         * });
         * ```
         */
        isAttackable(arg0: boolean): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity is attackable or not.
         * 
         * @param isAttackable Boolean value indicating whether the entity is attackable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAttackable(true);
         * ```
         */
        isAttackable(arg0: boolean): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets the list of block names to which the entity is immune.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.immuneTo("minecraft:stone", "minecraft:dirt");
         * ```
         */
        immuneTo(...arg0: string[]): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity is immune to fire damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.fireImmune(true);
         * ```
         */
        fireImmune(arg0: boolean): $BaseEntityBuilder<$EntityType<T>>;
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
        thunderHit(arg0: $Consumer_<$ContextUtils$EThunderHitContext>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed during each tick when the entity is being ridden.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being ridden.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.rideTick(entity => {
         *     // Define custom logic for handling each tick when the entity is being ridden
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        rideTick(arg0: $Consumer_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Boolean determining if the part entity is pickable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isPickable(true)
         * ```
         */
        isPickable(arg0: boolean): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity can undergo freezing.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be subjected to freezing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canFreeze(entity => {
         *     // Define the conditions for the entity to be able to freeze
         *     // Use information about the Entity provided by the context.
         *     return true //someBoolean;
         * });
         * ```
         */
        canFreeze(arg0: $Predicate_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity is pushable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isPushable(true);
         * ```
         */
        isPushable(arg0: boolean): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a consumer to handle lerping (linear interpolation) of the entity's position.
         * 
         * @param lerpTo Consumer accepting a {@link ContextUtils.LerpToContext} parameter,
         *                 providing information and control over the lerping process.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.lerpTo(context => {
         *     // Custom logic for lerping the entity's position
         *     // Access information about the lerping process using the provided context.
         * });
         * ```
         */
        lerpTo(arg0: $Consumer_<$ContextUtils$LerpToContext>): $BaseEntityBuilder<$EntityType<T>>;
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
        nextStep(arg0: $Function_<$Entity, $Object>): $BaseEntityBuilder<$EntityType<T>>;
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
        canTrample(arg0: $Predicate_<$ContextUtils$ECanTrampleContext>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is hurt by lava.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is affected by lava.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.lavaHurt(entity => {
         *     // Define custom logic for handling the entity being hurt by lava
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        lavaHurt(arg0: $Consumer_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity performs a flap action.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is flapping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onFlap(entity => {
         *     // Define custom logic for handling the entity's flap action
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onFlap(arg0: $Consumer_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine whether the entity is currently flapping.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose flapping status is being determined.
         * It returns a Boolean indicating whether the entity is flapping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isFlapping(entity => {
         *     // Define logic to determine whether the entity is currently flapping
         *     // Use information about the Entity provided by the context.
         *     return // Some Boolean value indicating whether the entity is flapping;
         * });
         * ```
         */
        isFlapping(arg0: $Predicate_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
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
        isFreezing(arg0: $Predicate_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity falls and takes damage.
         * The provided Consumer accepts a {@link ContextUtils.EEntityFallDamageContext} parameter,
         * representing the context of the entity falling and taking fall damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onFall(context => {
         *     // Define custom logic for handling when the entity falls and takes damage
         *     // Use information about the EEntityFallDamageContext provided by the context.
         * });
         * ```
         */
        onFall(arg0: $Consumer_<$ContextUtils$EEntityFallDamageContext>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity starts sprinting.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that has started sprinting.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onSprint(entity => {
         *     // Define custom logic for handling when the entity starts sprinting
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onSprint(arg0: $Consumer_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity can spawn far from the player.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canSpawnFarFromPlayer(true);
         * ```
         */
        canSpawnFarFromPlayer(arg0: boolean): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets the client tracking range. Defaults to 5.
         * 
         * @param trackingRange The client tracking range.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.clientTrackingRange(8);
         * ```
         */
        clientTrackingRange(arg0: number): $BaseEntityBuilder<$EntityType<T>>;
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
        setRenderType(arg0: $Object): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets the render type for the entity via a function.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", outlineEntityBoolean));
         * ```
         */
        renderType(arg0: $Function_<$EntityType<T>, $RenderType>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Determines if the entity should serialize its data. Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.saves(false);
         * ```
         */
        saves(arg0: boolean): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * @param scaleModelForRender A Consumer to determing logic for model scaling and rendering
         *     without affecting core logic such as hitbox sizing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.scaleModelForRender(context => {
         *     const { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context
         *     poseStack.scale(0.5, 0.5, 0.5)
         * });
         * ```
         */
        scaleModelForRender(arg0: $Consumer_<$ContextUtils$ScaleModelRenderContextNL<$EntityType<T>>>): $BaseEntityBuilder<$EntityType<T>>;
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
        textureResource(arg0: $Function_<$EntityType<T>, $Object>): $BaseEntityBuilder<$EntityType<T>>;
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
        mobCategory(arg0: string): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Adds an extra glowing render layer to the entity.
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
        newGlowingGeoLayer(arg0: $Consumer_<$NLGeoLayerJSBuilder<$EntityType<T>>>): $BaseEntityBuilder<$EntityType<T>>;
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
        onRemovePassenger(arg0: $Consumer_<$Entity>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity is summonable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSummonable(true);
         * ```
         */
        setSummonable(arg0: boolean): $BaseEntityBuilder<$EntityType<T>>;
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
        animationResource(arg0: $Function_<$EntityType<T>, $Object>): $BaseEntityBuilder<$EntityType<T>>;
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
        modelResource(arg0: $Function_<$EntityType<T>, $Object>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Adds an extra render layer to the entity.
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
        newGeoLayer(arg0: $Consumer_<$NLGeoLayerJSBuilder<$EntityType<T>>>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Boolean determining if the entity's model visually faces the direction it's currently headed.
         * Saves manual implementation of this assumed behavior from the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setFacesTrajectory(false)
         * ```
         */
        setFacesTrajectory(arg0: boolean): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Sets the scale of the model.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.modelSize(2,2);
         * ```
         */
        modelSize(arg0: number, arg1: number): $BaseEntityBuilder<$EntityType<T>>;
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
        addAnimationController(arg0: string, arg1: number, arg2: $BaseEntityBuilder$IAnimationPredicateJS_<$EntityType<T>>): $BaseEntityBuilder<$EntityType<T>>;
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
        addKeyAnimationController(arg0: string, arg1: number, arg2: $BaseEntityBuilder$IAnimationPredicateJS_<$EntityType<T>>, arg3: $BaseEntityBuilder$ISoundListenerJS_<$EntityType<T>>, arg4: $BaseEntityBuilder$IParticleListenerJS_<$EntityType<T>>, arg5: $BaseEntityBuilder$ICustomInstructionListenerJS_<$EntityType<T>>): $BaseEntityBuilder<$EntityType<T>>;
        /**
         * Adds a triggerable AnimationController to the entity callable off the entity's methods anywhere.
         * 
         * @param name The name of the controller
         * @param translationTicksLength How many ticks it takes to transition between different animations
         * @param triggerableAnimationID The unique identifier of the triggerable animation(sets it apart from other triggerable animations)
         * @param triggerableAnimationName The name of the animation defined in the animations.json
         * @param loopType The loop type for the triggerable animation, either 'LOOP' or 'PLAY_ONCE' or 'HOLD_ON_LAST_FRAME' or 'DEFAULT'
         */
        addTriggerableAnimationController(arg0: string, arg1: number, arg2: string, arg3: string, arg4: string): $BaseEntityBuilder<$EntityType<T>>;
        static projectileItems: $Map<$EntityType<never>, $Item>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        layerList: $List<$NLGeoLayerJSBuilder<$EntityType<T>>>;
        glowingLayerList: $List<$NLGeoLayerJSBuilder<$EntityType<T>>>;
        static thisList: $List<$BaseEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$EntityType<T>>>;
        constructor(arg0: $ResourceLocation_);
        set swimSplashSound(value: $Object);
        set swimSound(value: $Object);
        set maxFallDistance(value: $Function_<$Entity, $Object>);
        set blockJumpFactor(value: $Function_<$Entity, $Object>);
        set summonable(value: boolean);
        set facesTrajectory(value: boolean);
    }
    export class $BaseEntityBuilder$ISoundListenerJS<E extends $Entity> {
    }
    export interface $BaseEntityBuilder$ISoundListenerJS<E extends $Entity> {
        playSound(arg0: $BaseEntityBuilder$SoundKeyFrameEventJS<E>): void;
    }
    /**
     * Values that may be interpreted as {@link $BaseEntityBuilder$ISoundListenerJS}.
     */
    export type $BaseEntityBuilder$ISoundListenerJS_<E> = ((arg0: $BaseEntityBuilder$SoundKeyFrameEventJS<E>) => void);
    export class $BaseEntityBuilder$SoundKeyFrameEventJS<E extends $Entity> extends $BaseEntityBuilder$KeyFrameEventJS<E, $SoundKeyframeData> {
        animationTick: number;
        controller: $AnimationController<E>;
        sound: string;
        entity: E;
        keyframeData: $SoundKeyframeData;
        constructor(arg0: $SoundKeyframeEvent<E>);
    }
    export class $BaseEntityBuilder$IAnimationPredicateJS<E extends $Entity> {
    }
    export interface $BaseEntityBuilder$IAnimationPredicateJS<E extends $Entity> {
        /**
         * Determines if an animation should continue for a given AnimationEvent. Return true to continue the current animation
         * 
         * @param event The AnimationEvent, provides values that can be used to determine if the animation should continue or not
         */
        test(arg0: $BaseEntityBuilder$AnimationEventJS<E>): boolean;
        toGecko(): $AnimationController$AnimationStateHandler<E>;
    }
    /**
     * Values that may be interpreted as {@link $BaseEntityBuilder$IAnimationPredicateJS}.
     */
    export type $BaseEntityBuilder$IAnimationPredicateJS_<E> = ((arg0: $BaseEntityBuilder$AnimationEventJS<E>) => boolean);
    export class $BaseEntityBuilder$CustomInstructionKeyframeEventJS<E extends $Entity> extends $BaseEntityBuilder$KeyFrameEventJS<E, $CustomInstructionKeyframeData> {
        animationTick: number;
        instructions: string;
        controller: $AnimationController<E>;
        entity: E;
        keyframeData: $CustomInstructionKeyframeData;
        constructor(arg0: $CustomInstructionKeyframeEvent<E>);
    }
    export class $BaseNonAnimatableEntityBuilder<T extends $Entity> extends $BuilderBase<$EntityType<T>> {
        /**
         * Sets a callback function to be executed when the entity performs a movement action.
         * The provided Consumer accepts a {@link ContextUtils.MovementContext} parameter,
         * representing the context of the entity's movement.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.move(context => {
         *     // Custom logic to handle the entity's movement action
         *     // Access information about the movement using the provided context.
         * });
         * ```
         */
        move(arg0: $Consumer_<$ContextUtils$MovementContext>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed on each tick for the entity.
         * 
         * @param consumer A Consumer accepting a {@link Entity} parameter, defining the behavior to be executed on each tick.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.tick(entity => {
         *     // Custom logic to be executed on each tick of the entity.
         *     // Access information about the entity using the provided parameter.
         * });
         * ```
         */
        tick(arg0: $Consumer_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets the hit box of the entity type.
         * 
         * @param width The width of the entity. Defaults to 0.5.
         * @param height The height of the entity. Defaults to 0.5.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.sized(1.0f, 1.5f);
         * ```
         */
        sized(arg0: number, arg1: number): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets the update interval in ticks of the entity.
         * Defaults to 1 tick.
         * 
         * @param updateInterval The update interval in ticks.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.updateInterval(5);
         * ```
         */
        updateInterval(arg0: number): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity can change dimensions.
         * The provided Predicate accepts a {@link ContextUtils.ChangeDimensionsContext} parameter,
         * representing the entity that may attempt to change dimensions.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canChangeDimensions(ctx => {
         *     // Define the conditions for the entity to be able to change dimensions
         *     // Use information about the Entity provided by the context.
         *     return false // Some boolean condition indicating if the entity can change dimensions;
         * });
         * ```
         */
        canChangeDimensions(arg0: $Predicate_<$ContextUtils$ChangeDimensionsContext>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        shouldRenderAtSqrDistance(arg0: $Predicate_<$ContextUtils$EntitySqrDistanceContext>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether to reposition the entity after loading.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.repositionEntityAfterLoad(true);
         * ```
         */
        repositionEntityAfterLoad(arg0: boolean): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        mayInteract(arg0: $Predicate_<$ContextUtils$EMayInteractContext>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        onStopRiding(arg0: $Consumer_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
         */
        setSwimSplashSound(arg0: $Object): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
         */
        setSwimSound(arg0: $Object): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets the minimum fall distance for the entity before taking damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setMaxFallDistance(entity => {
         *     // Define custom logic to determine the maximum fall distance
         *     // Use information about the Entity provided by the context.
         *     return 3;
         * });
         * ```
         */
        setMaxFallDistance(arg0: $Function_<$Entity, $Object>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is removed from the world.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being removed from the world.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onRemovedFromWorld(entity => {
         *     // Define custom logic for handling the removal of the entity from the world
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onRemovedFromWorld(arg0: $Consumer_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        setBlockJumpFactor(arg0: $Function_<$Entity, $Object>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is added to the world.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is added to the world.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onAddedToWorld(entity => {
         *     // Define custom logic for handling when the entity is added to the world
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onAddedToWorld(arg0: $Consumer_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine the block speed factor of the entity.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose block speed factor is being determined.
         * It returns a Float representing the block speed factor.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.blockSpeedFactor(entity => {
         *     // Define logic to calculate and return the block speed factor for the entity
         *     // Use information about the Entity provided by the context.
         *     return // Some Float value representing the block speed factor;
         * });
         * ```
         */
        blockSpeedFactor(arg0: $Function_<$Entity, $Object>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is removed on the client side.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being removed on the client side.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onClientRemoval(entity => {
         *     // Define custom logic for handling the removal of the entity on the client side
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onClientRemoval(arg0: $Consumer_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        positionRider(arg0: $Consumer_<$ContextUtils$PositionRiderContext>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate to determine whether to show the vehicle health for the living entity.
         * 
         * @param predicate The predicate to determine whether to show the vehicle health.
         * 
         * The predicate should take a Entity as a parameter and return a boolean value indicating whether to show the vehicle health.
         * 
         * Example usage:
         * ```javascript
         * baseEntityBuilder.showVehicleHealth(entity => {
         *     // Determine whether to show the vehicle health for the living entity
         *     // Return true to show the vehicle health, false otherwise
         * });
         * ```
         */
        showVehicleHealth(arg0: $Predicate_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        canAddPassenger(arg0: $Predicate_<$ContextUtils$EPassengerEntityContext>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        canCollideWith(arg0: $Predicate_<$ContextUtils$ECollidingEntityContext>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate to determine whether the living entity dampens vibrations.
         * 
         * @param predicate The predicate to determine whether the living entity dampens vibrations.
         * 
         * The predicate should take a Entity as a parameter and return a boolean value indicating whether the living entity dampens vibrations.
         * 
         * Example usage:
         * ```javascript
         * baseEntityBuilder.dampensVibrations(entity => {
         *     // Determine whether the living entity dampens vibrations
         *     // Return true if the entity dampens vibrations, false otherwise
         * });
         * ```
         */
        dampensVibrations(arg0: $Predicate_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        canBeCollidedWith(arg0: $Predicate_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Defines logic to render the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.render(context => {
         *     // Define logic to render the entity
         *     context.poseStack.scale(0.5, 0.5, 0.5);
         * });
         * ```
         */
        render(arg0: $Consumer_<$ContextUtils$NLRenderContext<$EntityType<T>>>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity is currently glowing.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be checked for its glowing state.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isCurrentlyGlowing(entity => {
         *     // Define the conditions to check if the entity is currently glowing
         *     // Use information about the Entity provided by the context.
         *     const isGlowing = // Some boolean condition to check if the entity is glowing;
         *     return isGlowing;
         * });
         * ```
         */
        isCurrentlyGlowing(arg0: $Predicate_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        isInvulnerableTo(arg0: $Predicate_<$ContextUtils$EDamageContext>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when a player touches the entity.
         * The provided Consumer accepts a {@link ContextUtils.EntityPlayerContext} parameter,
         * representing the context of the player's interaction with the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.playerTouch(context => {
         *     // Custom logic to handle the player's touch interaction with the entity
         *     // Access information about the interaction using the provided context.
         * });
         * ```
         */
        playerTouch(arg0: $Consumer_<$ContextUtils$EntityPlayerContext>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity is attackable or not.
         * 
         * @param isAttackable Boolean value indicating whether the entity is attackable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAttackable(true);
         * ```
         */
        isAttackable(arg0: boolean): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether or not this entity is attackable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAttackable(true);
         * ```
         */
        isAttackable(arg0: boolean): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets the list of block names to which the entity is immune.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.immuneTo("minecraft:stone", "minecraft:dirt");
         * ```
         */
        immuneTo(...arg0: string[]): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity is immune to fire damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.fireImmune(true);
         * ```
         */
        fireImmune(arg0: boolean): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        thunderHit(arg0: $Consumer_<$ContextUtils$EThunderHitContext>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed during each tick when the entity is being ridden.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being ridden.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.rideTick(entity => {
         *     // Define custom logic for handling each tick when the entity is being ridden
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        rideTick(arg0: $Consumer_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Boolean determining if the part entity is pickable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isPickable(true)
         * ```
         */
        isPickable(arg0: boolean): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a predicate function to determine whether the entity can undergo freezing.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be subjected to freezing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canFreeze(entity => {
         *     // Define the conditions for the entity to be able to freeze
         *     // Use information about the Entity provided by the context.
         *     return true //someBoolean;
         * });
         * ```
         */
        canFreeze(arg0: $Predicate_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity is pushable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isPushable(true);
         * ```
         */
        isPushable(arg0: boolean): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a consumer to handle lerping (linear interpolation) of the entity's position.
         * 
         * @param lerpTo Consumer accepting a {@link ContextUtils.LerpToContext} parameter,
         *                 providing information and control over the lerping process.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.lerpTo(context => {
         *     // Custom logic for lerping the entity's position
         *     // Access information about the lerping process using the provided context.
         * });
         * ```
         */
        lerpTo(arg0: $Consumer_<$ContextUtils$LerpToContext>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        nextStep(arg0: $Function_<$Entity, $Object>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        canTrample(arg0: $Predicate_<$ContextUtils$ECanTrampleContext>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity is hurt by lava.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is affected by lava.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.lavaHurt(entity => {
         *     // Define custom logic for handling the entity being hurt by lava
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        lavaHurt(arg0: $Consumer_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity performs a flap action.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is flapping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onFlap(entity => {
         *     // Define custom logic for handling the entity's flap action
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onFlap(arg0: $Consumer_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a function to determine whether the entity is currently flapping.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose flapping status is being determined.
         * It returns a Boolean indicating whether the entity is flapping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isFlapping(entity => {
         *     // Define logic to determine whether the entity is currently flapping
         *     // Use information about the Entity provided by the context.
         *     return // Some Boolean value indicating whether the entity is flapping;
         * });
         * ```
         */
        isFlapping(arg0: $Predicate_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        isFreezing(arg0: $Predicate_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity falls and takes damage.
         * The provided Consumer accepts a {@link ContextUtils.EEntityFallDamageContext} parameter,
         * representing the context of the entity falling and taking fall damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onFall(context => {
         *     // Define custom logic for handling when the entity falls and takes damage
         *     // Use information about the EEntityFallDamageContext provided by the context.
         * });
         * ```
         */
        onFall(arg0: $Consumer_<$ContextUtils$EEntityFallDamageContext>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity starts sprinting.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that has started sprinting.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onSprint(entity => {
         *     // Define custom logic for handling when the entity starts sprinting
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onSprint(arg0: $Consumer_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity can spawn far from the player.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canSpawnFarFromPlayer(true);
         * ```
         */
        canSpawnFarFromPlayer(arg0: boolean): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets the client tracking range. Defaults to 5.
         * 
         * @param trackingRange The client tracking range.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.clientTrackingRange(8);
         * ```
         */
        clientTrackingRange(arg0: number): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets the render type for the entity via a function.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", outlineEntityBoolean));
         * ```
         */
        renderType(arg0: $Function_<$EntityType<T>, $RenderType>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Determines if the entity should serialize its data. Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.saves(false);
         * ```
         */
        saves(arg0: boolean): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        mobCategory(arg0: string): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
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
        onRemovePassenger(arg0: $Consumer_<$Entity>): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        /**
         * Sets whether the entity is summonable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSummonable(true);
         * ```
         */
        setSummonable(arg0: boolean): $BaseNonAnimatableEntityBuilder<$EntityType<T>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static thisList: $List<$BaseNonAnimatableEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$EntityType<T>>>;
        constructor(arg0: $ResourceLocation_);
        set swimSplashSound(value: $Object);
        set swimSound(value: $Object);
        set maxFallDistance(value: $Function_<$Entity, $Object>);
        set blockJumpFactor(value: $Function_<$Entity, $Object>);
        set summonable(value: boolean);
    }
    export class $BaseEntityBuilder$KeyFrameEventJS<E extends $Entity, B extends $KeyFrameData> {
        animationTick: number;
        controller: $AnimationController<E>;
        entity: E;
        keyframeData: B;
    }
    export class $BaseEntityBuilder$AnimationEventJS<E extends $Entity> {
        /**
         * Adds an animation to the current animation list
         */
        then(arg0: string, arg1: $Animation$LoopType_): $BaseEntityBuilder$AnimationEventJS<E>;
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
    export class $BaseEntityBuilder$IParticleListenerJS<E extends $Entity> {
    }
    export interface $BaseEntityBuilder$IParticleListenerJS<E extends $Entity> {
        summonParticle(arg0: $BaseEntityBuilder$ParticleKeyFrameEventJS<E>): void;
    }
    /**
     * Values that may be interpreted as {@link $BaseEntityBuilder$IParticleListenerJS}.
     */
    export type $BaseEntityBuilder$IParticleListenerJS_<E> = ((arg0: $BaseEntityBuilder$ParticleKeyFrameEventJS<E>) => void);
}
