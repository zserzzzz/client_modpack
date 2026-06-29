import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $AnimalEntityJS, $MobEntityJS, $WaterEntityJS, $TameableMobJS, $BaseLivingEntityJS } from "@package/net/liopyu/entityjs/entities/living/entityjs";
import { $BaseLivingEntityBuilder } from "@package/net/liopyu/entityjs/builders/living";
import { $TamableAnimal, $LivingEntity, $Mob, $Entity, $PathfinderMob, $SpawnPlacementType, $SpawnPlacements$SpawnPredicate } from "@package/net/minecraft/world/entity";
import { $SpawnEggItemBuilder } from "@package/net/liopyu/entityjs/item";
import { $List } from "@package/java/util";
import { $GeoLayerJSBuilder } from "@package/net/liopyu/entityjs/client/living/model";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $EventBasedSpawnModifier$BiomeSpawn } from "@package/net/liopyu/entityjs/util/implementation";
import { $Consumer_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $ContextUtils$BreedableEntityContext, $ContextUtils$EntityDistanceToPlayerContext, $ContextUtils$PartEntityParams, $ContextUtils$EntityBlockPosLevelContext, $ContextUtils$EntityAnimalContext, $ContextUtils$LevelAnimalContext, $ContextUtils$EntityProjectileWeaponContext, $ContextUtils$PlayerEntityContext, $ContextUtils$TargetChangeContext, $ContextUtils$EntityItemStackContext, $ContextUtils$EntityLevelContext } from "@package/net/liopyu/entityjs/util";

declare module "@package/net/liopyu/entityjs/builders/living/entityjs" {
    export class $WaterEntityJSBuilder extends $PathfinderMobBuilder<$WaterEntityJS> {
        /**
         * @param bucketItemStack Function returning the itemstack to receive when bucketed
         * Defaults to Empty Itemstack
         * Example usage:
         * ```javascript
         * builder.bucketItemStack(entity => {
         *     // Use information about the entity to return an ItemStack.
         *     return Item.of('minecraft:diamond')
         * })
         * ```
         */
        bucketItemStack(arg0: $Function_<$LivingEntity, $Object>): $WaterEntityJSBuilder;
        /**
         * Whether or not the fish can be bucketed, if true it is recommended to set the
         * bucketItemStack function in the builder otherwise it will give an empty itemstack
         * and the bucket will be lost.
         * Defaults to false
         * Example usage:
         * ```javascript
         * builder.setCanBeBucketed(true)
         * ```
         */
        setCanBeBucketed(arg0: boolean): $WaterEntityJSBuilder;
        /**
         * Whether or not the fish retains default swimming goals.
         * Defaults to True
         * Example usage:
         * ```javascript
         * builder.setDefaultGoals(false)
         * ```
         */
        setDefaultGoals(arg0: boolean): $WaterEntityJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$WaterEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$WaterEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$WaterEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$WaterEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
        set canBeBucketed(value: boolean);
        set defaultGoals(value: boolean);
    }
    export class $MobEntityJSBuilder extends $PathfinderMobBuilder<$MobEntityJS> {
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$MobEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$MobEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$MobEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$MobEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $TameableMobJSBuilder extends $TameableMobBuilder<$TameableMobJS> {
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$TameableMobJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$TameableMobJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$TameableMobJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$TameableMobJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $AnimalEntityBuilder<T extends $Animal> extends $PathfinderMobBuilder<T> {
        /**
         * Sets a predicate to determine if the entity can mate.
         * 
         * @param predicate A Function accepting a ContextUtils.EntityAnimalContext parameter,
         *                  defining the condition for the entity to be able to mate.
         * 
         * Example usage:
         * ```javascript
         * animalBuilder.canMate(context => {
         *     // Custom logic to determine if the entity can mate
         *     // Return true if mating is allowed based on the provided context.
         * });
         * ```
         */
        canMate(arg0: $Predicate_<$ContextUtils$EntityAnimalContext>): $AnimalEntityBuilder<T>;
        /**
         * Sets the ingredient representing the list of items that the animal entity can eat.
         * 
         * @param isFood An {@link Ingredient} specifying the items that the entity can eat.
         * 
         * Example usage:
         * ```javascript
         * animalBuilder.isFood([
         *     "#minecraft:apple",
         *     "minecraft:golden_apple",
         *     "minecraft:diamond"
         * ]);
         * ```
         */
        isFood(arg0: $Ingredient_): $AnimalEntityBuilder<T>;
        /**
         * Sets a predicate to determine if the animal entity can breed.
         * 
         * @param canBreed A Function that defines the conditions for breeding.
         * 
         * Example usage:
         * ```javascript
         * animalBuilder.canBreed(entity => {
         *     // Custom logic to determine if the entity can breed
         *     // Return true if the entity can breed, false otherwise.
         * });
         * ```
         */
        canBreed(arg0: $Predicate_<$LivingEntity>): $AnimalEntityBuilder<T>;
        /**
         * Sets a callback function to be executed when a child is spawned from breeding.
         * 
         * @param consumer A Consumer accepting a ContextUtils.LevelAnimalContext parameter,
         *                  defining the behavior to be executed when a child is spawned from breeding.
         * 
         * Example usage:
         * ```javascript
         * animalBuilder.onSpawnChildFromBreeding(context => {
         *     // Custom logic to handle the spawning of a child from breeding
         *     // Access information about the breeding event using the provided context.
         * });
         * ```
         */
        onSpawnChildFromBreeding(arg0: $Consumer_<$ContextUtils$LevelAnimalContext>): $AnimalEntityBuilder<T>;
        /**
         * Sets the predicate to determine if an entity item stack is considered as food for the animal entity.
         * 
         * @param isFoodPredicate A predicate accepting a {@link ContextUtils.EntityItemStackContext} parameter,
         *                        defining the conditions for an entity item stack to be considered as food.
         * 
         * Example usage:
         * ```javascript
         * animalBuilder.isFoodPredicate(context => {
         *     // Custom logic to determine if the entity item stack is considered as food.
         *     // Access information about the item stack using the provided context.
         *     return true // Some Boolean value;
         * });
         * ```
         */
        isFoodPredicate(arg0: $Predicate_<$ContextUtils$EntityItemStackContext>): $AnimalEntityBuilder<T>;
        /**
         * Sets the offspring for the Animal Entity.
         * 
         * @param breedOffspring Function returning a resource location for the breed offspring.
         * 
         * Example usage:
         * ```javascript
         * animalBuilder.setBreedOffspring(context => {
         *     const { entity, mate, level } = context
         *     // Use the context to return a ResourceLocation of an entity to spawn when the entity mates
         *     return 'minecraft:cow' //Some Resource location representing the entity to spawn.
         * })
         * ```
         */
        setBreedOffspring(arg0: $Function_<$ContextUtils$BreedableEntityContext, $Object>): $AnimalEntityBuilder<T>;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<T>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<T>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<T>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<T>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
        set breedOffspring(value: $Function_<$ContextUtils$BreedableEntityContext, $Object>);
    }
    export class $MobBuilder<T extends $Mob> extends $BaseLivingEntityBuilder<T> {
        /**
         * Sets the function to determine whether the entity can pick up loot.
         * 
         * @param canPickUpLoot A Function accepting a {@link Mob} parameter,
         *                      defining the condition for the entity to pick up loot.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.canPickUpLoot(entity => {
         *     // Custom logic to determine whether the entity can pick up loot based on the provided mob.
         *     return true;
         * });
         * ```
         */
        canPickUpLoot(arg0: $Predicate_<$Mob>): $MobBuilder<T>;
        /**
         * Sets a function to determine the PathNavigation of the entity.
         * 
         * @param createNavigation A Function accepting an EntityLevelContext parameter
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.createNavigation(context => {
         *     const {entity, level} = context
         *     return EntityJSUtils.createWallClimberNavigation(entity, level) // Return some path navigation
         * });
         * ```
         */
        createNavigation(arg0: $Function_<$ContextUtils$EntityLevelContext, $Object>): this;
        /**
         * Sets a callback function to be executed when the entity's target changes.
         * 
         * @param setTarget A Consumer accepting a ContextUtils.TargetChangeContext parameter,
         *                  defining the behavior to be executed when the entity's target changes.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.onTargetChanged(context => {
         *     // Custom logic to handle the entity's target change
         *     // Access information about the target change using the provided context.
         * });
         * ```
         */
        onTargetChanged(arg0: $Consumer_<$ContextUtils$TargetChangeContext>): $MobBuilder<T>;
        /**
         * Sets a predicate to determine if the entity should be removed when far away from the player.
         * 
         * @param removeWhenFarAway A Function accepting a ContextUtils.EntityDistanceToPlayerContext parameter,
         *                          defining the condition for the entity to be removed when far away.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.removeWhenFarAway(context => {
         *     // Custom logic to determine if the entity should be removed when far away
         *     // Return true if the entity should be removed based on the provided context.
         * });
         * ```
         */
        removeWhenFarAway(arg0: $Predicate_<$ContextUtils$EntityDistanceToPlayerContext>): $MobBuilder<T>;
        /**
         * Sets the function to determine whether the entity can hold an item.
         * 
         * @param canHoldItem A Function accepting a {@link ContextUtils.EntityItemStackContext} parameter,
         *                    defining the condition for the entity to hold an item.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.canHoldItem(context => {
         *     // Custom logic to determine whether the entity can hold an item based on the provided context.
         *     return true;
         * });
         * ```
         */
        canHoldItem(arg0: $Predicate_<$ContextUtils$EntityItemStackContext>): $MobBuilder<T>;
        /**
         * Sets the sound to play when the entity is ambient using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.setAmbientSound("minecraft:entity.zombie.ambient");
         * ```
         */
        setAmbientSound(arg0: $Object): $MobBuilder<T>;
        /**
         * Sets a function to determine if the entity can be leashed.
         * 
         * @param canBeLeashed A Function accepting a LivingEntity parameter
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.canBeLeashed(entity => {
         *     return true // Return true if the entity can be leashed, false otherwise.
         * });
         * ```
         */
        canBeLeashed(arg0: $Predicate_<$LivingEntity>): $MobBuilder<T>;
        /**
         * Sets whether the entity can jump.
         * 
         * @param canJump A boolean indicating whether the entity can jump.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.canJump(true);
         * ```
         */
        canJump(arg0: boolean): $MobBuilder<T>;
        /**
         * Sets whether the entity should despawn in peaceful difficulty.
         * 
         * @param shouldDespawnInPeaceful A boolean indicating whether the entity should despawn in peaceful difficulty.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.shouldDespawnInPeaceful(true);
         * ```
         */
        shouldDespawnInPeaceful(arg0: boolean): $MobBuilder<T>;
        /**
         * Sets whether persistence is required for the entity.
         * 
         * @param isPersistenceRequired A boolean indicating whether persistence is required.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.isPersistenceRequired(true);
         * ```
         */
        isPersistenceRequired(arg0: boolean): $MobBuilder<T>;
        /**
         * Sets a callback function to be executed when the entity performs an eating action.
         * 
         * @param ate A Consumer accepting a LivingEntity parameter,
         *            defining the behavior to be executed when the entity eats.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.ate(entity => {
         *     // Custom logic to handle the entity's eating action
         *     // Access information about the entity using the provided parameter.
         * });
         * ```
         */
        ate(arg0: $Consumer_<$LivingEntity>): $MobBuilder<T>;
        /**
         * Sets the ingredient required for the entity to fire a projectile weapon.
         * 
         * @param canFireProjectileWeapon An Ingredient representing the required item for firing a projectile weapon.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.canFireProjectileWeapon([
         *     'minecraft:bow',
         *     'minecraft:crossbow'
         * ]);
         * ```
         */
        canFireProjectileWeapon(arg0: $Ingredient_): $MobBuilder<T>;
        /**
         * @param getAttackBoundingBox A Function accepting a {@link Mob} parameter,
         *                           defining the bounding box to check for target intersection attacks.
         *                           Returns an 'AABB' value representing the melee attack range.
         * Example usage:
         * ```javascript
         * mobBuilder.getAttackBoundingBox(entity => {
         *     // Custom logic to calculate the squared melee attack range based on the provided mob.
         *     return entity;
         * });
         * ```
         */
        getAttackBoundingBox(arg0: $Function_<$Mob, $Object>): $MobBuilder<T>;
        /**
         * Sets the interval in ticks between ambient sounds for the mob entity.
         * 
         * @param ambientSoundInterval The interval in ticks between ambient sounds.
         * Defaults to 120.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.ambientSoundInterval(100);
         * ```
         */
        ambientSoundInterval(arg0: number): $MobBuilder<T>;
        /**
         * Sets a function to define the entity's MoveControl behavior
         */
        setMoveControl(arg0: $Function_<$LivingEntity, $Object>): $MobBuilder<T>;
        /**
         * Sets a function to define the entity's LookControl behavior
         */
        setLookControl(arg0: $Function_<$LivingEntity, $Object>): $MobBuilder<T>;
        /**
         * Sets a function to define the entity's JumpControl behavior
         */
        setJumpControl(arg0: $Function_<$LivingEntity, $Object>): $MobBuilder<T>;
        /**
         * Sets a predicate to determine whether the entity can fire a projectile weapon.
         * 
         * @param canFireProjectileWeaponPredicate A Predicate accepting a
         *            ContextUtils.EntityProjectileWeaponContext parameter,
         *            defining the condition under which the entity can fire a projectile weapon.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.canFireProjectileWeaponPredicate(context => {
         *     // Custom logic to determine whether the entity can fire a projectile weapon
         *     // Access information about the entity and the projectile weapon using the provided context.
         *     return context.projectileWeapon.id == 'minecraft:bow'; // Replace with your specific condition.
         * });
         * ```
         */
        canFireProjectileWeaponPredicate(arg0: $Predicate_<$ContextUtils$EntityProjectileWeaponContext>): $MobBuilder<T>;
        /**
         * Creates a spawn egg item for this entity type
         */
        eggItem(arg0: $Consumer_<$SpawnEggItemBuilder>): $MobBuilder<T>;
        /**
         * Indicates that no egg item should be created for this entity type
         */
        noEggItem(): $MobBuilder<T>;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<T>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<T>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<T>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<T>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
        set ambientSound(value: $Object);
        set moveControl(value: $Function_<$LivingEntity, $Object>);
        set lookControl(value: $Function_<$LivingEntity, $Object>);
        set jumpControl(value: $Function_<$LivingEntity, $Object>);
    }
    export class $BaseLivingEntityJSBuilder extends $BaseLivingEntityBuilder<$BaseLivingEntityJS> {
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$BaseLivingEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$BaseLivingEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$BaseLivingEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$BaseLivingEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $TameableMobBuilder<T extends $TamableAnimal> extends $AnimalEntityBuilder<T> {
        /**
         * Sets a function to determine if the player's current itemstack will tame the mob.
         * 
         * @param tamableFoodPredicate A Function accepting a ContextUtils.EntityItemStackContext parameter
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.tamableFoodPredicate(context => {
         *     const { entity, item } = context
         *     return item.id == 'minecraft:diamond' // Return true if the player's current itemstack will tame the mob.
         * });
         * ```
         */
        tamableFoodPredicate(arg0: $Predicate_<$ContextUtils$EntityItemStackContext>): $MobBuilder<T>;
        /**
         * Sets a Consumer invoked after the entity is tamed
         * and replaces the logic used to set the UUID of the owner
         * with the parameter of ContextUtils.PlayerEntityContext callback
         * 
         * @param tameOverride A Consumer responsible for determining the uuid to set when the entity is tamed.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.tameOverride(context => {
         *     const {entity,player} = context
         *     // Mimic the vanilla way of setting the uuid when the entity is tamed.
         *     entity.setOwnerUUID(player.getUUID());
         * });
         * ```
         */
        tameOverride(arg0: $Consumer_<$ContextUtils$PlayerEntityContext>): $MobBuilder<T>;
        /**
         * Sets a function to determine if the player's current itemstack will tame the mob.
         * 
         * @param tamableFoodPredicate A Function accepting a ContextUtils.EntityItemStackContext parameter
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.tamableFood([
         *     'minecraft:diamond',
         *     'minecraft:wheat'
         * ]);
         * ```
         */
        tamableFood(arg0: $Ingredient_): $MobBuilder<T>;
        /**
         * Sets a Consumer with the parameter of ContextUtils.PlayerEntityContext callback
         * This is fired after the entity is tamed and all tame logic has already taken place.
         * Useful if you don't want to mess with the UUID logic in the tameOverride method.
         * 
         * @param onTamed A Consumer that fires when the entity is tamed.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.onTamed(entity => {
         *     // Do stuff when the entity is tamed.
         * });
         * ```
         */
        onTamed(arg0: $Consumer_<$ContextUtils$PlayerEntityContext>): $MobBuilder<T>;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<T>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<T>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<T>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<T>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $PathfinderMobBuilder<T extends $PathfinderMob> extends $MobBuilder<T> {
        /**
         * Sets the walk target value function for the entity.
         * 
         * @param function A Function accepting a {@link ContextUtils.EntityBlockPosLevelContext} parameter,
         *                 defining the walk target value based on the entity's interaction with a specific block.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.walkTargetValue(context => {
         *     // Custom logic to calculate the walk target value based on the provided context.
         *     // Access information about the block position and level using the provided context.
         *     return 10;
         * });
         * ```
         */
        walkTargetValue(arg0: $Function_<$ContextUtils$EntityBlockPosLevelContext, $Object>): $PathfinderMobBuilder<T>;
        /**
         * Sets the follow leash speed for the entity.
         * 
         * @param speed The follow leash speed.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.followLeashSpeed(1.5);
         * ```
         */
        followLeashSpeed(arg0: number): $PathfinderMobBuilder<T>;
        /**
         * Sets the function to determine whether the entity should stay close to its leash holder.
         * 
         * @param predicate A Function accepting a {@link Mob} parameter,
         *                  defining the condition for the entity to stay close to its leash holder.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.shouldStayCloseToLeashHolder(entity => {
         *     // Custom logic to determine whether the entity should stay close to its leash holder.
         *     return true;
         * });
         * ```
         */
        shouldStayCloseToLeashHolder(arg0: $Predicate_<$Mob>): $PathfinderMobBuilder<T>;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<T>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<T>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<T>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<T>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $AnimalEntityJSBuilder extends $AnimalEntityBuilder<$AnimalEntityJS> {
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$AnimalEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$AnimalEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$AnimalEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$AnimalEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
}
