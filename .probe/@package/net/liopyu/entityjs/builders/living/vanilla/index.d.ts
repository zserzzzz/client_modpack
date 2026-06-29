import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CreeperEntityJS, $PiglinEntityJS, $IllusionerEntityJS, $HorseEntityJS, $DolphinEntityJS, $ParrotEntityJS, $PandaEntityJS, $CowEntityJS, $ChickenEntityJS, $AllayEntityJS, $ZombieEntityJS, $WolfEntityJS, $IronGolemEntityJS, $AxolotlEntityJS, $DonkeyEntityJS, $CaveSpiderEntityJS, $EvokerEntityJS, $CatEntityJS, $WitherEntityJS, $GuardianEntityJS, $BeeEntityJS, $CamelEntityJS, $SlimeEntityJS, $SkeletonEntityJS, $BatEntityJS, $EnderManEntityJS, $GhastEntityJS, $BlazeEntityJS, $GoatEntityJS } from "@package/net/liopyu/entityjs/entities/living/vanilla";
import { $BaseLivingEntityBuilder } from "@package/net/liopyu/entityjs/builders/living";
import { $EntityType_, $Entity, $SpawnPlacements$SpawnPredicate, $LivingEntity, $Mob, $SpawnPlacementType } from "@package/net/minecraft/world/entity";
import { $ParticleType_ } from "@package/net/minecraft/core/particles";
import { $List } from "@package/java/util";
import { $GeoLayerJSBuilder } from "@package/net/liopyu/entityjs/client/living/model";
import { $EventBasedSpawnModifier$BiomeSpawn } from "@package/net/liopyu/entityjs/util/implementation";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $MobBuilder, $AnimalEntityBuilder, $PathfinderMobBuilder, $TameableMobBuilder } from "@package/net/liopyu/entityjs/builders/living/entityjs";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $ContextUtils$EntityServerLevelContext, $ContextUtils$LivingEntityContext, $ContextUtils$PartEntityParams, $ContextUtils$PlayerEntityContext } from "@package/net/liopyu/entityjs/util";

declare module "@package/net/liopyu/entityjs/builders/living/vanilla" {
    export class $DonkeyJSBuilder extends $AnimalEntityBuilder<$DonkeyEntityJS> {
        /**
         * @param defaultBehaviourGoals Sets whether the mob should inherit it's goal behavior from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultBehaviourGoals(false);
         * ```
         */
        defaultBehaviourGoals(arg0: boolean): $DonkeyJSBuilder;
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $DonkeyJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$DonkeyEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$DonkeyEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$DonkeyEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$DonkeyEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $ZombieJSBuilder extends $PathfinderMobBuilder<$ZombieEntityJS> {
        /**
         * @param isSunSensitive Sets whether the mob should convert in water to another mob
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.convertsInWater(false);
         * ```
         */
        convertsInWater(arg0: boolean): $ZombieJSBuilder;
        /**
         * @param isSunSensitive Sets whether the mob should burn in daylight
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.isSunSensitive(false);
         * ```
         */
        isSunSensitive(arg0: boolean): $ZombieJSBuilder;
        /**
         * @param defaultBehaviourGoals Sets whether the mob should inherit it's goal behavior from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultBehaviourGoals(false);
         * ```
         */
        defaultBehaviourGoals(arg0: boolean): $ZombieJSBuilder;
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $ZombieJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$ZombieEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$ZombieEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$ZombieEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$ZombieEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $BlazeJSBuilder extends $PathfinderMobBuilder<$BlazeEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $BlazeJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$BlazeEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$BlazeEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$BlazeEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$BlazeEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $EvokerJSBuilder extends $PathfinderMobBuilder<$EvokerEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $EvokerJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$EvokerEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$EvokerEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$EvokerEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$EvokerEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $AxolotlJSBuilder extends $AnimalEntityBuilder<$AxolotlEntityJS> {
        /**
         * @param bucketItemStack Function returning the itemstack to receive when bucketed
         * Defaults to Axolotl Bucket
         * Example usage:
         * ```javascript
         * builder.bucketItemStack(entity => {
         *     // Use information about the entity to return an ItemStack.
         *     return Item.of('minecraft:diamond')
         * })
         * ```
         */
        bucketItemStack(arg0: $Function_<$LivingEntity, $Object>): $AxolotlJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$AxolotlEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$AxolotlEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$AxolotlEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$AxolotlEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $BatJSBuilder extends $MobBuilder<$BatEntityJS> {
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$BatEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$BatEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$BatEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$BatEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $WitherJSBuilder extends $PathfinderMobBuilder<$WitherEntityJS> {
        /**
         * @param customServerAiStep Sets whether the mob has its default custom server ai step behavior
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.customServerAiStep(false);
         * ```
         */
        customServerAiStep(arg0: boolean): $WitherJSBuilder;
        /**
         * @param attackProjectile Sets the projectile shot by the wither.
         * Defaults to a wither skull.
         * 
         * Example usage:
         * ```javascript
         * builder.attackProjectile("minecraft:arrow");
         * ```
         */
        attackProjectile(arg0: string): $WitherJSBuilder;
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $WitherJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$WitherEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$WitherEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$WitherEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$WitherEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $ParrotJSBuilder extends $TameableMobBuilder<$ParrotEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $ParrotJSBuilder;
        /**
         * Sets a Consumer with the parameter of ContextUtils.PlayerEntityContext callback
         * This is fired after the entity is tamed and all tame logic has already taken place.
         * Useful if you don't want to mess with the UUID logic in the tameOverride method.
         * 
         * @param onTamed A Consumer that fires when the entity is tamed.
         * 
         * Example usage:
         * ```javascript
         * builder.onTamed(entity => {
         *     // Do stuff when the entity is tamed.
         * });
         * ```
         */
        onTamed(arg0: $Consumer_<$ContextUtils$PlayerEntityContext>): $ParrotJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$ParrotEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$ParrotEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$ParrotEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$ParrotEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $CaveSpiderJSBuilder extends $PathfinderMobBuilder<$CaveSpiderEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $CaveSpiderJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$CaveSpiderEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$CaveSpiderEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$CaveSpiderEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$CaveSpiderEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $ChickenJSBuilder extends $AnimalEntityBuilder<$ChickenEntityJS> {
        /**
         * @param eggTime Sets a function to determine the laying egg time of the entity
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.eggTime(entity => {
         *     return 100 // returning 100 here will result in the entity laying an egg every 100 ticks
         * });
         * ```
         */
        eggTime(arg0: $Function_<$LivingEntity, $Object>): $ChickenJSBuilder;
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $ChickenJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$ChickenEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$ChickenEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$ChickenEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$ChickenEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $SlimeJSBuilder extends $MobBuilder<$SlimeEntityJS> {
        /**
         * @param dealDamage Overrides the way the slime deals damage
         * 
         * Example usage:
         * ```javascript
         * builder.dealDamage(ctx => {
         * 	const { entity, target } = ctx
         * 	// Determine how the slime deals damage
         * });
         * ```
         */
        dealDamage(arg0: $Consumer_<$ContextUtils$LivingEntityContext>): $SlimeJSBuilder;
        /**
         * @param setParticleType Sets the particles emitted off the slime
         * Defaults to slime particles
         * 
         * Example usage:
         * ```javascript
         * builder.setParticleType("crit");
         * ```
         */
        setParticleType(arg0: $ParticleType_<never>): $SlimeJSBuilder;
        /**
         * @param setSquishSound Sets the squish sound
         * 
         * Example usage:
         * ```javascript
         * builder.setSquishSound("block.azalea.hit");
         * ```
         */
        setSquishSound(arg0: $SoundEvent_): $SlimeJSBuilder;
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $SlimeJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$SlimeEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$SlimeEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$SlimeEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$SlimeEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
        set particleType(value: $ParticleType_<never>);
        set squishSound(value: $SoundEvent_);
    }
    export class $CreeperJSBuilder extends $PathfinderMobBuilder<$CreeperEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $CreeperJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$CreeperEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$CreeperEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$CreeperEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$CreeperEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $PiglinJSBuilder extends $PathfinderMobBuilder<$PiglinEntityJS> {
        /**
         * Sets a function to determine if the entity is converting.
         * 
         * @param isConverting A Function accepting an entity parameter
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.isConverting(entity => {
         *     return entity.age > 500;
         * });
         * ```
         */
        isConverting(arg0: $Function_<$LivingEntity, $Object>): $PiglinJSBuilder;
        /**
         * Sets a consumer responsible for spawning an entity after the mob has converted.
         * 
         * @param finishConversion A Function accepting an entity parameter
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.finishConversion(entity => {
         *     //Convert to a ghast instead of a zombified piglin when in the overworld
         *     let EntityType = Java.loadClass("net.minecraft.world.entity.EntityType");
         *     entity.convertTo(EntityType.GHAST, true);
         * });
         * ```
         */
        finishConversion(arg0: $Consumer_<$ContextUtils$EntityServerLevelContext>): $PiglinJSBuilder;
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $PiglinJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$PiglinEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$PiglinEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$PiglinEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$PiglinEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $WolfJSBuilder extends $TameableMobBuilder<$WolfEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $WolfJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$WolfEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$WolfEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$WolfEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$WolfEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $CamelJSBuilder extends $AnimalEntityBuilder<$CamelEntityJS> {
        /**
         * @param defaultBehaviourGoals Sets whether the mob should inherit it's goal behavior from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultBehaviourGoals(false);
         * ```
         */
        defaultBehaviourGoals(arg0: boolean): $CamelJSBuilder;
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $CamelJSBuilder;
        /**
         * Sets a Consumer invoked after the entity is tamed
         * and replaces the logic used to set the UUID of the owner
         * with the parameter of ContextUtils.PlayerEntityContext callback
         * 
         * @param tameOverride A Consumer responsible for determining the uuid to set when the entity is tamed.
         * 
         * Example usage:
         * ```javascript
         * builder.tameOverride(context => {
         *     const {entity,player} = context
         *     // Mimic the vanilla way of setting the uuid when the entity is tamed.
         *     entity.setOwnerUUID(player.getUUID());
         * });
         * ```
         */
        tameOverride(arg0: $Consumer_<$ContextUtils$PlayerEntityContext>): $CamelJSBuilder;
        /**
         * Sets a Consumer with the parameter of ContextUtils.PlayerEntityContext callback
         * This is fired after the entity is tamed and all tame logic has already taken place.
         * Useful if you don't want to mess with the UUID logic in the tameOverride method.
         * 
         * @param onTamed A Consumer that fires when the entity is tamed.
         * 
         * Example usage:
         * ```javascript
         * builder.onTamed(entity => {
         *     // Do stuff when the entity is tamed.
         * });
         * ```
         */
        onTamed(arg0: $Consumer_<$ContextUtils$PlayerEntityContext>): $CamelJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$CamelEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$CamelEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$CamelEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$CamelEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $SkeletonJSBuilder extends $PathfinderMobBuilder<$SkeletonEntityJS> {
        /**
         * @param canConvert Sets whether the mob should convert while freezing to another mob
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.canConvert(false);
         * ```
         */
        canConvert(arg0: boolean): $SkeletonJSBuilder;
        /**
         * @param isSunBurnTick Sets whether the mob should burn in daylight
         * 
         * Example usage:
         * ```javascript
         * builder.isSunBurnTick(entity => {
         *     return false
         * });
         * ```
         */
        isSunBurnTick(arg0: $Function_<$LivingEntity, $Object>): $SkeletonJSBuilder;
        /**
         * @param setConversionType Sets what mob the entity should convert to after freezing. Must be a Mob.
         * Defaults to "minecraft:stray".
         * 
         * Example usage:
         * ```javascript
         * builder.setConversionType("minecraft:stray");
         * ```
         */
        setConversionType(arg0: $EntityType_<$Mob>): $SkeletonJSBuilder;
        /**
         * @param setShootSound Sets the mobs shooting sound
         * 
         * Example usage:
         * ```javascript
         * builder.setShootSound("entity.skeleton.shoot");
         * ```
         */
        setShootSound(arg0: $SoundEvent_): $SkeletonJSBuilder;
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $SkeletonJSBuilder;
        /**
         * @param setArrow Sets the arrow entity to be fired.
         * Defaults to "minecraft:arrow".
         * 
         * Example usage:
         * ```javascript
         * builder.setArrow("minecraft:arrow");
         * ```
         */
        setArrow(arg0: $ItemStack_): $SkeletonJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$SkeletonEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$SkeletonEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$SkeletonEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$SkeletonEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
        set conversionType(value: $EntityType_<$Mob>);
        set shootSound(value: $SoundEvent_);
        set arrow(value: $ItemStack_);
    }
    export class $IronGolemJSBuilder extends $PathfinderMobBuilder<$IronGolemEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $IronGolemJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$IronGolemEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$IronGolemEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$IronGolemEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$IronGolemEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $AllayJSBuilder extends $PathfinderMobBuilder<$AllayEntityJS> {
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$AllayEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$AllayEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$AllayEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$AllayEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $GuardianJSBuilder extends $PathfinderMobBuilder<$GuardianEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $GuardianJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$GuardianEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$GuardianEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$GuardianEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$GuardianEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $EnderManJSBuilder extends $PathfinderMobBuilder<$EnderManEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $EnderManJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$EnderManEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$EnderManEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$EnderManEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$EnderManEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $CowJSBuilder extends $AnimalEntityBuilder<$CowEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $CowJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$CowEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$CowEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$CowEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$CowEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $CatJSBuilder extends $TameableMobBuilder<$CatEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $CatJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$CatEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$CatEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$CatEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$CatEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $BeeJSBuilder extends $AnimalEntityBuilder<$BeeEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $BeeJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$BeeEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$BeeEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$BeeEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$BeeEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $GhastJSBuilder extends $MobBuilder<$GhastEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $GhastJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$GhastEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$GhastEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$GhastEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$GhastEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $GoatJSBuilder extends $AnimalEntityBuilder<$GoatEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $GoatJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$GoatEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$GoatEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$GoatEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$GoatEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $HorseJSBuilder extends $AnimalEntityBuilder<$HorseEntityJS> {
        /**
         * @param defaultBehaviourGoals Sets whether the mob should inherit it's goal behavior from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultBehaviourGoals(false);
         * ```
         */
        defaultBehaviourGoals(arg0: boolean): $HorseJSBuilder;
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $HorseJSBuilder;
        /**
         * Sets a Consumer invoked after the entity is tamed
         * and replaces the logic used to set the UUID of the owner
         * with the parameter of ContextUtils.PlayerEntityContext callback
         * 
         * @param tameOverride A Consumer responsible for determining the uuid to set when the entity is tamed.
         * 
         * Example usage:
         * ```javascript
         * builder.tameOverride(context => {
         *     const {entity,player} = context
         *     // Mimic the vanilla way of setting the uuid when the entity is tamed.
         *     entity.setOwnerUUID(player.getUUID());
         * });
         * ```
         */
        tameOverride(arg0: $Consumer_<$ContextUtils$PlayerEntityContext>): $HorseJSBuilder;
        /**
         * Sets a Consumer with the parameter of ContextUtils.PlayerEntityContext callback
         * This is fired after the entity is tamed and all tame logic has already taken place.
         * Useful if you don't want to mess with the UUID logic in the tameOverride method.
         * 
         * @param onTamed A Consumer that fires when the entity is tamed.
         * 
         * Example usage:
         * ```javascript
         * builder.onTamed(entity => {
         *     // Do stuff when the entity is tamed.
         * });
         * ```
         */
        onTamed(arg0: $Consumer_<$ContextUtils$PlayerEntityContext>): $HorseJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$HorseEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$HorseEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$HorseEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$HorseEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $PandaJSBuilder extends $AnimalEntityBuilder<$PandaEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $PandaJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$PandaEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$PandaEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$PandaEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$PandaEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
    export class $IllusionerJSBuilder extends $PathfinderMobBuilder<$IllusionerEntityJS> {
        /**
         * Sets the sound to play when the entity is celebrating using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.setCelebrateSound("minecraft:entity.zombie.ambient");
         * ```
         */
        setCelebrateSound(arg0: $Object): $IllusionerJSBuilder;
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $IllusionerJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$IllusionerEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$IllusionerEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$IllusionerEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$IllusionerEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
        set celebrateSound(value: $Object);
    }
    export class $DolphinJSBuilder extends $PathfinderMobBuilder<$DolphinEntityJS> {
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
         */
        defaultGoals(arg0: boolean): $DolphinJSBuilder;
        partEntityParamsList: $List<$ContextUtils$PartEntityParams<$DolphinEntityJS>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        spawnPredicate: $SpawnPlacements$SpawnPredicate<$Entity>;
        layerList: $List<$GeoLayerJSBuilder<$DolphinEntityJS>>;
        static thisList: $List<$BaseLivingEntityBuilder<never>>;
        registryKey: $ResourceKey<$Registry<$DolphinEntityJS>>;
        heightMap: $Heightmap$Types;
        static spawnList: $List<$BaseLivingEntityBuilder<never>>;
        static biomeSpawnList: $List<$EventBasedSpawnModifier$BiomeSpawn>;
        glowingLayerList: $List<$GeoLayerJSBuilder<$DolphinEntityJS>>;
        placementType: $SpawnPlacementType;
        constructor(arg0: $ResourceLocation_);
    }
}
