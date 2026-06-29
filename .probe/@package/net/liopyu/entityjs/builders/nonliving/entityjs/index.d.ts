import { $Item } from "@package/net/minecraft/world/item";
import { $EntityType, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ArrowEntityJS, $BaseEntityJS, $ProjectileEntityJS, $ProjectileAnimatableJS } from "@package/net/liopyu/entityjs/entities/nonliving/entityjs";
import { $ArrowItemBuilder, $ProjectileItemBuilder } from "@package/net/liopyu/entityjs/item";
import { $AbstractArrow } from "@package/net/minecraft/world/entity/projectile";
import { $List, $Map } from "@package/java/util";
import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $BaseNonAnimatableEntityBuilder, $BaseEntityBuilder } from "@package/net/liopyu/entityjs/builders/nonliving";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $NLGeoLayerJSBuilder } from "@package/net/liopyu/entityjs/client/nonliving/model";
import { $Object } from "@package/java/lang";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $ContextUtils$MovementContext, $ContextUtils$EPassengerEntityContext, $ContextUtils$EThunderHitContext, $ContextUtils$CollidingProjectileEntityContext, $ContextUtils$EEntityFallDamageContext, $ContextUtils$ArrowPlayerContext, $ContextUtils$ArrowLivingEntityContext, $ContextUtils$EMayInteractContext, $ContextUtils$ProjectileBlockHitContext, $ContextUtils$ECanTrampleContext, $ContextUtils$ECollidingEntityContext, $ContextUtils$ProjectileEntityHitContext, $ContextUtils$ArrowEntityHitContext, $ContextUtils$ArrowBlockHitContext, $ContextUtils$PartHurtContext, $ContextUtils$ChangeDimensionsContext, $ContextUtils$EDamageContext, $ContextUtils$PositionRiderContext, $ContextUtils$EntitySqrDistanceContext, $ContextUtils$LerpToContext, $ContextUtils$EntityPlayerContext } from "@package/net/liopyu/entityjs/util";

declare module "@package/net/liopyu/entityjs/builders/nonliving/entityjs" {
    export class $BaseEntityJSBuilder extends $BaseEntityBuilder<$BaseEntityJS> {
        static projectileItems: $Map<$EntityType<never>, $Item>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        layerList: $List<$NLGeoLayerJSBuilder<$BaseEntityJS>>;
        glowingLayerList: $List<$NLGeoLayerJSBuilder<$BaseEntityJS>>;
        static thisList: $List<$BaseEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$BaseEntityJS>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $ArrowEntityJSBuilder extends $ArrowEntityBuilder<$ArrowEntityJS> {
        /**
         * Creates the arrow item for this entity type
         */
        item(arg0: $Consumer_<$ArrowItemBuilder>): $ArrowEntityJSBuilder;
        /**
         * Indicates that no arrow item should be created for this entity type
         */
        noItem(): $ArrowEntityJSBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        canShootFromDispenser: boolean;
        static thisList: $List<$ArrowEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$ArrowEntityJS>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $ProjectileAnimatableJSBuilder extends $BaseEntityBuilder<$ProjectileAnimatableJS> {
        /**
         * Creates the arrow item for this entity type
         */
        item(arg0: $Consumer_<$ProjectileItemBuilder>): $ProjectileAnimatableJSBuilder;
        /**
         * Sets a callback function to be executed when the projectile hits an entity.
         * The provided Consumer accepts a {@link ContextUtils.ProjectileEntityHitContext} parameter,
         * representing the context of the projectile's interaction with a specific entity.
         * 
         * Example usage:
         * ```javascript
         * projectileBuilder.onHitEntity(context -> {
         *     // Custom logic to handle the projectile hitting an entity.
         *     // Access information about the entity and projectile using the provided context.
         * });
         * ```
         */
        onHitEntity(arg0: $Consumer_<$ContextUtils$ProjectileEntityHitContext>): $ProjectileAnimatableJSBuilder;
        /**
         * Sets a function to determine if the projectile entity can hit a specific entity.
         * 
         * @param canHitEntity The predicate to check if the arrow can hit the entity.
         * 
         * Example usage:
         * ```javascript
         * projectileEntityBuilder.canHitEntity(entity -> {
         *     // Custom logic to determine if the projectile can hit the specified entity
         *     // Return true if the arrow can hit, false otherwise.
         * });
         * ```
         */
        canHitEntity(arg0: $Predicate_<$Entity>): $ProjectileAnimatableJSBuilder;
        /**
         * Sets a callback function to be executed when the projectile
         * collides with an entity.
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.onEntityCollision(context => {
         *     const { entity, target } = context
         *     console.log(entity)
         * });
         * ```
         */
        onEntityCollision(arg0: $Consumer_<$ContextUtils$CollidingProjectileEntityContext>): $ProjectileAnimatableJSBuilder;
        /**
         * Sets a callback function to be executed when the projectile hits a block.
         * The provided Consumer accepts a {@link ContextUtils.ProjectileBlockHitContext} parameter,
         * representing the context of the projectile's interaction with a specific block.
         * 
         * Example usage:
         * ```javascript
         * projectileBuilder.onHitBlock(context -> {
         *     // Custom logic to handle the projectile hitting a block.
         *     // Access information about the block and projectile using the provided context.
         * });
         * ```
         */
        onHitBlock(arg0: $Consumer_<$ContextUtils$ProjectileBlockHitContext>): $ProjectileAnimatableJSBuilder;
        /**
         * Indicates that no projectile item should be created for this entity type
         */
        noItem(): $ProjectileAnimatableJSBuilder;
        /**
         * Sets whether or not the projectile can be shot from dispenser blocks, if noItem is set to true this will not register DispenserBehavior.
         */
        setCanShootFromDispenser(arg0: boolean): $ProjectileAnimatableJSBuilder;
        static projectileItems: $Map<$EntityType<never>, $Item>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        canShootFromDispenser: boolean;
        layerList: $List<$NLGeoLayerJSBuilder<$ProjectileAnimatableJS>>;
        glowingLayerList: $List<$NLGeoLayerJSBuilder<$ProjectileAnimatableJS>>;
        static thisList: $List<$BaseEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$ProjectileAnimatableJS>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $ProjectileEntityJSBuilder extends $ProjectileEntityBuilder<$ProjectileEntityJS> {
        /**
         * Creates the arrow item for this entity type
         */
        item(arg0: $Consumer_<$ProjectileItemBuilder>): $ProjectileEntityJSBuilder;
        /**
         * Indicates that no projectile item should be created for this entity type
         */
        noItem(): $ProjectileEntityJSBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        canShootFromDispenser: boolean;
        static thisList: $List<$ProjectileEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$ProjectileEntityJS>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $ArrowEntityBuilder<T extends $AbstractArrow> extends $BaseNonAnimatableEntityBuilder<T> {
        /**
         * Sets a consumer to be called when the arrow entity hits another entity.
         * 
         * @param onHitEntity The consumer to handle the arrow entity hit context.
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.onHitEntity(context => {
         *     // Custom logic to handle the arrow hitting another entity
         * });
         * ```
         */
        onHitEntity(arg0: $Consumer_<$ContextUtils$ArrowEntityHitContext>): $ArrowEntityBuilder<T>;
        /**
         * Sets a consumer to perform additional effects after the arrow successfully hurts a living entity.
         * 
         * @param doPostHurtEffects The consumer to perform additional effects.
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.doPostHurtEffects(context => {
         *     // Custom logic to perform additional effects after the arrow hurts a living entity.
         * });
         * ```
         */
        doPostHurtEffects(arg0: $Consumer_<$ContextUtils$ArrowLivingEntityContext>): $ArrowEntityBuilder<T>;
        /**
         * Sets a consumer to be called during each tick to handle arrow entity despawn logic.
         * 
         * @param tickDespawn The consumer to handle the arrow entity tick despawn logic.
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.tickDespawn(arrow => {
         *     // Custom logic to handle arrow entity despawn during each tick
         * });
         * ```
         */
        tickDespawn(arg0: $Consumer_<$AbstractArrow>): $ArrowEntityBuilder<T>;
        /**
         * Sets a function to determine if the arrow entity can hit a specific entity.
         * 
         * @param canHitEntity Function to check if the arrow can hit the entity.
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.canHitEntity(entity => {
         *     // Custom logic to determine if the arrow can hit the specified entity
         *     // Return true if the arrow can hit, false otherwise.
         * });
         * ```
         */
        canHitEntity(arg0: $Predicate_<$Entity>): $ArrowEntityBuilder<T>;
        /**
         * Sets the base damage value for the arrow entity.
         * 
         * @param baseDamage The base damage value to be set.
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.setBaseDamage(8.0);
         * ```
         */
        setBaseDamage(arg0: number): $ArrowEntityBuilder<T>;
        /**
         * Sets a callback function to be executed when the arrow
         * collides with an entity.
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.onEntityCollision(context => {
         *     const { entity, target } = context
         *     console.log(entity)
         * });
         * ```
         */
        onEntityCollision(arg0: $Consumer_<$ContextUtils$CollidingProjectileEntityContext>): $ArrowEntityBuilder<T>;
        /**
         * Sets a function to determine the texture resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the texture based on information about the entity.
         * The default behavior returns <namespace>:textures/entity/projectiles/<path>.png.
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.textureResource(entity => {
         *     // Define logic to determine the texture resource for the entity
         *     // Use information about the entity provided by the context.
         *     return "kubejs:textures/entity/projectiles/arrow.png" // Some ResourceLocation representing the texture resource;
         * });
         * ```
         */
        textureLocation(arg0: $Function_<T, $Object>): $ArrowEntityBuilder<T>;
        /**
         * Sets a consumer to be called when the arrow entity hits a block.
         * 
         * @param onHitBlock The consumer to handle the arrow block hit context.
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.onHitBlock(context => {
         *     // Custom logic to handle the arrow hitting a block
         * });
         * ```
         */
        onHitBlock(arg0: $Consumer_<$ContextUtils$ArrowBlockHitContext>): $ArrowEntityBuilder<T>;
        /**
         * Sets a function to determine if a player can pick up the arrow entity.
         * 
         * @param tryPickup The function to check if a player can pick up the arrow.
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.tryPickup(context => {
         *     // Custom logic to determine if the player can pick up the arrow
         *     // Return true if the player can pick up, false otherwise.
         * });
         * ```
         */
        tryPickup(arg0: $Predicate_<$ContextUtils$ArrowPlayerContext>): $ArrowEntityBuilder<T>;
        /**
         * Sets the knockback value for the arrow entity when a bow has Punch Enchantment.
         * 
         * @param setKnockback The knockback value of the Punch Enchantment to be set.
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.setKnockback(2);
         * ```
         */
        setKnockback(arg0: number): $ArrowEntityBuilder<T>;
        /**
         * Sets the base damage value with a function for the arrow entity for more control.
         * 
         * @param setDamageFunction Function which returns a double.
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.setBaseDamage(entity => {
         *     return 10; //Some double based off entity context.
         * });
         * ```
         */
        setDamageFunction(arg0: $Function_<$Entity, $Object>): $ArrowEntityBuilder<T>;
        /**
         * Sets the water inertia value for the arrow entity.
         * 
         * @param setWaterInertia The water inertia value to be set.
         * Defaults to 0.6 for AbstractArrow
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.setWaterInertia(0.5);
         * ```
         */
        setWaterInertia(arg0: number): $ArrowEntityBuilder<T>;
        /**
         * Sets the default sound event played when the arrow hits the ground using a string representation.
         * 
         * @param defaultHitGroundSoundEvent A string representing the ResourceLocation of the sound event.
         * 
         * Example usage:
         * ```javascript
         * // Example to set a custom sound event for the arrow hitting the ground.
         * arrowEntityBuilder.defaultHitGroundSoundEvent("minecraft:entity.arrow.hit");
         * ```
         */
        defaultHitGroundSoundEvent(arg0: $Object): $ArrowEntityBuilder<T>;
        /**
         * Sets whether or not the projectile can be shot from dispenser blocks, if noItem is set to true this will not register DispenserBehavior.
         */
        setCanShootFromDispenser(arg0: boolean): $ArrowEntityBuilder<T>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        canShootFromDispenser: boolean;
        static thisList: $List<$ArrowEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<T>>;
        constructor(arg0: $ResourceLocation_);
        set baseDamage(value: number);
        set knockback(value: number);
        set damageFunction(value: $Function_<$Entity, $Object>);
        set waterInertia(value: number);
    }
    export class $PartBuilder<T extends $LivingEntity> {
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
        move(arg0: $Consumer_<$ContextUtils$MovementContext>): $PartBuilder<T>;
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
        tick(arg0: $Consumer_<$Entity>): $PartBuilder<T>;
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
        canChangeDimensions(arg0: $Predicate_<$ContextUtils$ChangeDimensionsContext>): $PartBuilder<T>;
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
        shouldRenderAtSqrDistance(arg0: $Predicate_<$ContextUtils$EntitySqrDistanceContext>): $PartBuilder<T>;
        /**
         * Sets whether to reposition the entity after loading.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.repositionEntityAfterLoad(true);
         * ```
         */
        repositionEntityAfterLoad(arg0: boolean): $PartBuilder<T>;
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
        mayInteract(arg0: $Predicate_<$ContextUtils$EMayInteractContext>): $PartBuilder<T>;
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
        onStopRiding(arg0: $Consumer_<$Entity>): $PartBuilder<T>;
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
         */
        setSwimSplashSound(arg0: $Object): $PartBuilder<T>;
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
         */
        setSwimSound(arg0: $Object): $PartBuilder<T>;
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
        setMaxFallDistance(arg0: $Function_<$Entity, $Object>): $PartBuilder<T>;
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
        onRemovedFromWorld(arg0: $Consumer_<$Entity>): $PartBuilder<T>;
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
        setBlockJumpFactor(arg0: $Function_<$Entity, $Object>): $PartBuilder<T>;
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
        onAddedToWorld(arg0: $Consumer_<$Entity>): $PartBuilder<T>;
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
        blockSpeedFactor(arg0: $Function_<$Entity, $Object>): $PartBuilder<T>;
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
        onClientRemoval(arg0: $Consumer_<$Entity>): $PartBuilder<T>;
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
        positionRider(arg0: $Consumer_<$ContextUtils$PositionRiderContext>): $PartBuilder<T>;
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
        showVehicleHealth(arg0: $Predicate_<$Entity>): this;
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
        canAddPassenger(arg0: $Predicate_<$ContextUtils$EPassengerEntityContext>): $PartBuilder<T>;
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
        canCollideWith(arg0: $Predicate_<$ContextUtils$ECollidingEntityContext>): $PartBuilder<T>;
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
        dampensVibrations(arg0: $Predicate_<$Entity>): $PartBuilder<T>;
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
        canBeCollidedWith(arg0: $Predicate_<$Entity>): $PartBuilder<T>;
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
        isCurrentlyGlowing(arg0: $Predicate_<$Entity>): $PartBuilder<T>;
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
        isInvulnerableTo(arg0: $Predicate_<$ContextUtils$EDamageContext>): $PartBuilder<T>;
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
        playerTouch(arg0: $Consumer_<$ContextUtils$EntityPlayerContext>): $PartBuilder<T>;
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
        isAttackable(arg0: $Predicate_<$Entity>): $PartBuilder<T>;
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
        thunderHit(arg0: $Consumer_<$ContextUtils$EThunderHitContext>): $PartBuilder<T>;
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
        rideTick(arg0: $Consumer_<$Entity>): $PartBuilder<T>;
        /**
         * Boolean determining if the part entity is pickable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isPickable(true)
         * ```
         */
        isPickable(arg0: boolean): $PartBuilder<T>;
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
        canFreeze(arg0: $Predicate_<$Entity>): $PartBuilder<T>;
        /**
         * Sets whether the entity is pushable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isPushable(true);
         * ```
         */
        isPushable(arg0: boolean): $PartBuilder<T>;
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
        lerpTo(arg0: $Consumer_<$ContextUtils$LerpToContext>): $PartBuilder<T>;
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
        nextStep(arg0: $Function_<$Entity, $Object>): $PartBuilder<T>;
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
        canTrample(arg0: $Predicate_<$ContextUtils$ECanTrampleContext>): $PartBuilder<T>;
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
        lavaHurt(arg0: $Consumer_<$Entity>): $PartBuilder<T>;
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
        onFlap(arg0: $Consumer_<$Entity>): $PartBuilder<T>;
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
        isFlapping(arg0: $Predicate_<$Entity>): $PartBuilder<T>;
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
        isFreezing(arg0: $Predicate_<$Entity>): $PartBuilder<T>;
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
        onFall(arg0: $Consumer_<$ContextUtils$EEntityFallDamageContext>): $PartBuilder<T>;
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
        onSprint(arg0: $Consumer_<$Entity>): $PartBuilder<T>;
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
        onRemovePassenger(arg0: $Consumer_<$Entity>): $PartBuilder<T>;
        /**
         * Sets a consumer to handle part entity hurt logic of the entity's parts.
         * 
         * @param onPartHurt Consumer accepting a {@link ContextUtils.PartHurtContext<T>} parameter
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onPartHurt(context => {
         *     const { entity, part, source, amount } = context
         *     // Custom logic for determining how the parts of the entity should relay damage
         *     // For example, hurt the parent entity twice the damage when this part is hit.
         *     entity.attack(source, amount * 2)
         * })
         * ```
         */
        onPartHurt(arg0: $Consumer_<$ContextUtils$PartHurtContext<T>>): $PartBuilder<T>;
        constructor();
        set swimSplashSound(value: $Object);
        set swimSound(value: $Object);
        set maxFallDistance(value: $Function_<$Entity, $Object>);
        set blockJumpFactor(value: $Function_<$Entity, $Object>);
    }
    export class $ProjectileEntityBuilder<T extends $Entity> extends $BaseNonAnimatableEntityBuilder<T> {
        /**
         * Sets a callback function to be executed when the projectile hits an entity.
         * The provided Consumer accepts a {@link ContextUtils.ProjectileEntityHitContext} parameter,
         * representing the context of the projectile's interaction with a specific entity.
         * 
         * Example usage:
         * ```javascript
         * projectileBuilder.onHitEntity(context -> {
         *     // Custom logic to handle the projectile hitting an entity.
         *     // Access information about the entity and projectile using the provided context.
         * });
         * ```
         */
        onHitEntity(arg0: $Consumer_<$ContextUtils$ProjectileEntityHitContext>): $ProjectileEntityBuilder<T>;
        /**
         * Sets a function to determine if the projectile entity can hit a specific entity.
         * 
         * @param canHitEntity The predicate to check if the arrow can hit the entity.
         * 
         * Example usage:
         * ```javascript
         * projectileEntityBuilder.canHitEntity(entity -> {
         *     // Custom logic to determine if the projectile can hit the specified entity
         *     // Return true if the arrow can hit, false otherwise.
         * });
         * ```
         */
        canHitEntity(arg0: $Predicate_<$Entity>): $ProjectileEntityBuilder<T>;
        /**
         * Sets a callback function to be executed when the projectile
         * collides with an entity.
         * 
         * Example usage:
         * ```javascript
         * arrowEntityBuilder.onEntityCollision(context => {
         *     const { entity, target } = context
         *     console.log(entity)
         * });
         * ```
         */
        onEntityCollision(arg0: $Consumer_<$ContextUtils$CollidingProjectileEntityContext>): $ProjectileEntityBuilder<T>;
        /**
         * Sets a function to determine the texture resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the texture based on information about the entity.
         * The default behavior returns <namespace>:textures/entity/projectiles/<path>.png.
         * 
         * Example usage:
         * ```javascript
         * projectileBuilder.textureResource(entity => {
         *     // Define logic to determine the texture resource for the entity
         *     // Use information about the entity provided by the context.
         *     return // Some ResourceLocation representing the texture resource;
         * });
         * ```
         */
        textureLocation(arg0: $Function_<T, $Object>): $ProjectileEntityBuilder<T>;
        /**
         * Sets a callback function to be executed when the projectile hits a block.
         * The provided Consumer accepts a {@link ContextUtils.ProjectileBlockHitContext} parameter,
         * representing the context of the projectile's interaction with a specific block.
         * 
         * Example usage:
         * ```javascript
         * projectileBuilder.onHitBlock(context -> {
         *     // Custom logic to handle the projectile hitting a block.
         *     // Access information about the block and projectile using the provided context.
         * });
         * ```
         */
        onHitBlock(arg0: $Consumer_<$ContextUtils$ProjectileBlockHitContext>): $ProjectileEntityBuilder<T>;
        /**
         * Sets the scale for rendering the projectile entity.
         * 
         * @param pX The X-axis scale.
         * 
         * @param pY The Y-axis scale.
         * 
         * @param pZ The Z-axis scale.
         * 
         * Example usage:
         * ```javascript
         * projectileEntityBuilder.renderScale(1.5, 1.5, 1.5);
         * ```
         */
        renderScale(arg0: number, arg1: number, arg2: number): $ProjectileEntityBuilder<T>;
        /**
         * Sets the offset for rendering the projectile entity.
         * 
         * @param vX The X-axis offset.
         * 
         * @param vY The Y-axis offset.
         * 
         * @param vZ The Z-axis offset.
         * 
         * Example usage:
         * ```javascript
         * projectileEntityBuilder.renderOffset(0.5, 1.0, -0.5);
         * ```
         */
        renderOffset(arg0: number, arg1: number, arg2: number): $ProjectileEntityBuilder<T>;
        /**
         * Sets whether or not the projectile can be shot from dispenser blocks, if noItem is set to true this will not register DispenserBehavior.
         */
        setCanShootFromDispenser(arg0: boolean): $ProjectileEntityBuilder<T>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        canShootFromDispenser: boolean;
        static thisList: $List<$ProjectileEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<T>>;
        constructor(arg0: $ResourceLocation_);
    }
}
