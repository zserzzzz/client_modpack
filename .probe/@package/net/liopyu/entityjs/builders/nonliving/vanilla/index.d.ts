import { $Item } from "@package/net/minecraft/world/item";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $TridentItemBuilder, $EyeOfEnderItemBuilder } from "@package/net/liopyu/entityjs/item";
import { $List, $Map } from "@package/java/util";
import { $EyeOfEnder } from "@package/net/minecraft/world/entity/projectile";
import { $EyeOfEnderEntityJS, $TridentEntityJS, $BoatEntityJS } from "@package/net/liopyu/entityjs/entities/nonliving/vanilla";
import { $Consumer_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $BaseNonAnimatableEntityBuilder, $BaseEntityBuilder } from "@package/net/liopyu/entityjs/builders/nonliving";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $NLGeoLayerJSBuilder } from "@package/net/liopyu/entityjs/client/nonliving/model";
import { $Object } from "@package/java/lang";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $ContextUtils$ProjectileEntityHitContext, $ContextUtils$CollidingProjectileEntityContext, $ContextUtils$ProjectileBlockHitContext } from "@package/net/liopyu/entityjs/util";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/liopyu/entityjs/builders/nonliving/vanilla" {
    export class $EyeOfEnderJSBuilder extends $EyeOfEnderEntityBuilder<$EyeOfEnderEntityJS> {
        /**
         * Creates the item for this entity type
         */
        item(arg0: $Consumer_<$EyeOfEnderItemBuilder>): $EyeOfEnderJSBuilder;
        /**
         * Sets a function to determine the itemstack the entity drops when it
         * turns back into an item
         * Defaults to eye of ender.
         * Example usage:
         * ```javascript
         * builder.getItem(entity => {
         *     // Use information about the entity provided by the context.
         *     return Item.of('kubejs:eye_of_ender')// Some ItemStack
         * });
         * ```
         */
        getItem(arg0: $Function_<$EyeOfEnder, $Object>): $EyeOfEnderJSBuilder;
        /**
         * The default trail particles will be disabled
         */
        disableTrailParticles(): $EyeOfEnderJSBuilder;
        /**
         * Disables the default ender eye break sound as well as the death particles.
         */
        disableDefaultDeathLogic(): $EyeOfEnderJSBuilder;
        /**
         * Indicates that no item should be created for this entity type
         */
        noItem(): $EyeOfEnderJSBuilder;
        /**
         * @param survivalChance A float value from 0 to 1 representing the chance that the Eye of Ender will not break after use.
         * 
         *     Example usage:
         *     ```javascript
         *     eyeOfEnderBuilder.setSurvivalChance(0.8);
         *     ```
         */
        setSurvivalChance(arg0: number): $EyeOfEnderJSBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static thisList: $List<$EyeOfEnderEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$EyeOfEnderEntityJS>>;
        constructor(arg0: $ResourceLocation_);
        set survivalChance(value: number);
    }
    export class $BoatJSBuilder extends $BoatEntityBuilder<$BoatEntityJS> {
        static projectileItems: $Map<$EntityType<never>, $Item>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        layerList: $List<$NLGeoLayerJSBuilder<$BoatEntityJS>>;
        glowingLayerList: $List<$NLGeoLayerJSBuilder<$BoatEntityJS>>;
        static thisList: $List<$BoatEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$BoatEntityJS>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $TridentJSBuilder extends $BaseEntityBuilder<$TridentEntityJS> {
        /**
         * Creates the arrow item for this entity type
         */
        item(arg0: $Consumer_<$TridentItemBuilder>): $TridentJSBuilder;
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
        onHitEntity(arg0: $Consumer_<$ContextUtils$ProjectileEntityHitContext>): $TridentJSBuilder;
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
        canHitEntity(arg0: $Predicate_<$Entity>): $TridentJSBuilder;
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
        onEntityCollision(arg0: $Consumer_<$ContextUtils$CollidingProjectileEntityContext>): $TridentJSBuilder;
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
        onHitBlock(arg0: $Consumer_<$ContextUtils$ProjectileBlockHitContext>): $TridentJSBuilder;
        /**
         * @param defaultTridentHitSound The sound event to be played when the trident hits an entity by default.
         * 
         *     Example usage:
         *     ```javascript
         *     tridentBuilder.setDefaultTridentHitSound(SoundEvents.TRIDENT_HIT);
         *     ```
         */
        setDefaultTridentHitSound(arg0: $SoundEvent_): $TridentJSBuilder;
        /**
         * Indicates that no projectile item should be created for this entity type
         */
        noItem(): $TridentJSBuilder;
        /**
         * Sets whether or not the projectile can be shot from dispenser blocks, if noItem is set to true this will not register DispenserBehavior.
         */
        setCanShootFromDispenser(arg0: boolean): $TridentJSBuilder;
        setAttackDamage(arg0: number): $TridentJSBuilder;
        /**
         * @param alwaysThunder A boolean value determining if the trident always causes thunder on hit, regardless of weather.
         * 
         *     Example usage:
         *     ```javascript
         *     tridentBuilder.setAlwaysThunder(true);
         *     ```
         */
        setAlwaysThunder(arg0: boolean): $TridentJSBuilder;
        /**
         * @param damageSource The source of damage caused by the trident.
         * 
         *     Example usage:
         *     ```javascript
         *     tridentBuilder.setDamageSource(DamageSource.thrownProjectile);
         *     ```
         */
        setDamageSource(arg0: $DamageSource_): $TridentJSBuilder;
        /**
         * @param thunderHitSound The sound event to be played when the trident hits an entity during a thunderstorm.
         * 
         *     Example usage:
         *     ```javascript
         *     tridentBuilder.setThunderHitSound(SoundEvents.THUNDER);
         *     ```
         */
        setThunderHitSound(arg0: $SoundEvent_): $TridentJSBuilder;
        /**
         * @param isChanneling A function that determines whether the trident entity has the channeling enchantment.
         * 
         *     Example usage:
         *     ```javascript
         *     tridentBuilder.setIsChanneling(tridentEntity => {
         *         return false;
         *     });
         *     ```
         */
        setIsChanneling(arg0: $Predicate_<$TridentEntityJS>): $TridentJSBuilder;
        /**
         * @param defaultHitGroundSoundEvent The sound event to be played when the trident hits the ground by default.
         * 
         *     Example usage:
         *     ```javascript
         *     tridentBuilder.setDefaultHitGroundSoundEvent(SoundEvents.GENERIC_HIT);
         *     ```
         */
        setDefaultHitGroundSoundEvent(arg0: $SoundEvent_): $TridentJSBuilder;
        static projectileItems: $Map<$EntityType<never>, $Item>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        canShootFromDispenser: boolean;
        layerList: $List<$NLGeoLayerJSBuilder<$TridentEntityJS>>;
        glowingLayerList: $List<$NLGeoLayerJSBuilder<$TridentEntityJS>>;
        static thisList: $List<$BaseEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$TridentEntityJS>>;
        constructor(arg0: $ResourceLocation_);
        set defaultTridentHitSound(value: $SoundEvent_);
        set attackDamage(value: number);
        set alwaysThunder(value: boolean);
        set damageSource(value: $DamageSource_);
        set thunderHitSound(value: $SoundEvent_);
        set isChanneling(value: $Predicate_<$TridentEntityJS>);
        set defaultHitGroundSoundEvent(value: $SoundEvent_);
    }
    export class $EyeOfEnderEntityBuilder<T extends $Entity> extends $BaseNonAnimatableEntityBuilder<T> {
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
        textureLocation(arg0: $Function_<T, $Object>): $EyeOfEnderEntityBuilder<T>;
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
        renderScale(arg0: number, arg1: number, arg2: number): $EyeOfEnderEntityBuilder<T>;
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
        renderOffset(arg0: number, arg1: number, arg2: number): $EyeOfEnderEntityBuilder<T>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static thisList: $List<$EyeOfEnderEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<T>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $BoatEntityBuilder<T extends $Entity> extends $BaseEntityBuilder<T> {
        /**
         * Sets a function to determine the Item the entity drops when it
         * turns back into an item.
         * Defaults to Boat super method.
         * Example usage:
         * ```javascript
         * builder.getDropItem(entity => {
         *     // Use information about the entity provided by the context.
         *     return Item.of('amethyst_block').item // Some Item
         * });
         * ```
         */
        getDropItem(arg0: $Function_<$Boat, $Object>): $BoatEntityBuilder<T>;
        /**
         * Sets the shadow radius of the entity.
         * Defaults to 0.3.
         * Example usage:
         * ```javascript
         * builder.setShadowRadius(0.8);
         * ```
         */
        setShadowRadius(arg0: number): $BoatEntityBuilder<T>;
        /**
         * Sets a function to determine the speed of the boat when going forward.
         * Example usage:
         * ```javascript
         * builder.forwardBoatSpeed(entity => {
         *     // Use information about the entity provided by the context.
         *     return 1 // Some Float
         * });
         * ```
         */
        forwardBoatSpeed(arg0: $Function_<$Boat, $Object>): $BoatEntityBuilder<T>;
        /**
         * Sets a function to determine the speed of the boat when in reverse.
         * Example usage:
         * ```javascript
         * builder.backwardsBoatSpeed(entity => {
         *     // Use information about the entity provided by the context.
         *     return 1 // Some Float
         * });
         * ```
         */
        backwardsBoatSpeed(arg0: $Function_<$Boat, $Object>): $BoatEntityBuilder<T>;
        /**
         * Sets a function to determine the speed of the boat when it turns.
         * Example usage:
         * ```javascript
         * builder.turningBoatSpeed(entity => {
         *     // Use information about the entity provided by the context.
         *     return 1 // Some Float
         * });
         * ```
         */
        turningBoatSpeed(arg0: $Function_<$Boat, $Object>): $BoatEntityBuilder<T>;
        static projectileItems: $Map<$EntityType<never>, $Item>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        layerList: $List<$NLGeoLayerJSBuilder<T>>;
        glowingLayerList: $List<$NLGeoLayerJSBuilder<T>>;
        static thisList: $List<$BoatEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<T>>;
        constructor(arg0: $ResourceLocation_);
        set shadowRadius(value: number);
    }
}
