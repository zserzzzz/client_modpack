import { $Explosion, $Level$ExplosionInteraction, $Level$ExplosionInteraction_, $Level, $ExplosionDamageCalculator, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockProviderKJS, $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Record, $Object } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $ExplosionEvent$Detonate, $LevelEvent$Unload, $ExplosionEvent$Start, $LevelEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as ruletest from "@package/dev/latvian/mods/kubejs/level/ruletest";

declare module "@package/dev/latvian/mods/kubejs/level" {
    export class $ExplosionKubeEvent$After extends $ExplosionKubeEvent {
        /**
         * Gets a list of all blocks affected by the explosion.
         */
        getAffectedBlocks(): $List<$LevelBlock>;
        /**
         * Gets a list of all entities affected by the explosion.
         */
        getAffectedEntities(): $EntityArrayList;
        /**
         * Remove a block from the list of affected blocks.
         */
        removeAffectedBlock(block: $LevelBlock): void;
        /**
         * Remove all entities from the list of affected entities.
         */
        removeAllAffectedEntities(): void;
        /**
         * Remove an entity from the list of affected entities.
         */
        removeAffectedEntity(entity: $Entity): void;
        /**
         * Remove all blocks from the list of affected blocks.
         */
        removeAllAffectedBlocks(): void;
        /**
         * Remove all knockback from all affected *players*.
         */
        removeKnockback(): void;
        constructor(level: $Level_, explosion: $Explosion, affectedEntities: $List_<$Entity>);
        get affectedBlocks(): $List<$LevelBlock>;
        get affectedEntities(): $EntityArrayList;
    }
    export class $WrappedSpawner extends $Record {
        static of(spawner: $Either<$BlockEntity, $Entity>): $WrappedSpawner;
        block(): $LevelBlock;
        entity(): $Entity;
        isWorldgen(): boolean;
        constructor(entity: $Entity, block: $LevelBlock);
        get worldgen(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WrappedSpawner}.
     */
    export type $WrappedSpawner_ = { block?: $LevelBlock, entity?: $Entity,  } | [block?: $LevelBlock, entity?: $Entity, ];
    export class $KubeLevelEvent {
    }
    export interface $KubeLevelEvent extends $KubeEvent {
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    /**
     * Values that may be interpreted as {@link $KubeLevelEvent}.
     */
    export type $KubeLevelEvent_ = (() => $Level_);
    export class $CachedLevelBlock implements $LevelBlock {
        clearCache(): void;
        getLevel(): $Level;
        getEntity(): $BlockEntity;
        setBlockState(state: $BlockState_, flags: number): void;
        getBlockState(): $BlockState;
        getPos(): $BlockPos;
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getItem(): $ItemStack;
        getY(): number;
        createEntity(type: $EntityType_<never>): $Entity;
        getSkyLight(): number;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        setEntityData(tag: $CompoundTag_): void;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        getEntityId(): string;
        toBlockStateString(): string;
        mergeEntityData(tag: $CompoundTag_): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean): void;
        getBlockLight(): number;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        getCanSeeSky(): boolean;
        getDimension(): $ResourceLocation;
        canSeeSkyFromBelowWater(): boolean;
        explode(properties: $ExplosionProperties_): $Explosion;
        setBlockState(state: $BlockState_): void;
        getZ(): number;
        getX(): number;
        getBlock(): $Block;
        getInventory(): $InventoryKJS;
        getInventory(facing: $Direction_): $InventoryKJS;
        getEntityData(): $CompoundTag;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        getSouth(): $LevelBlock;
        getDown(): $LevelBlock;
        getEast(): $LevelBlock;
        getBiomeId(): $ResourceLocation;
        getNorth(): $LevelBlock;
        getCenterY(): number;
        getUp(): $LevelBlock;
        getLight(): number;
        getWest(): $LevelBlock;
        popItem(item: $ItemStack_): void;
        getCenterX(): number;
        getCenterZ(): number;
        getDimensionKey(): $ResourceKey<$Level>;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getTypeData(): $Map<string, $Object>;
        getId(): string;
        getKey(): $ResourceKey<$Block>;
        getTags(): $List<$ResourceLocation>;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<$Block>>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        minecraftLevel: $Level;
        constructor(w: $Level_, p: $BlockPos_);
        get level(): $Level;
        get entity(): $BlockEntity;
        get pos(): $BlockPos;
        get properties(): $Map<string, string>;
        get item(): $ItemStack;
        get y(): number;
        get skyLight(): number;
        get entityId(): string;
        get blockLight(): number;
        get canSeeSky(): boolean;
        get dimension(): $ResourceLocation;
        get z(): number;
        get x(): number;
        get block(): $Block;
        get south(): $LevelBlock;
        get down(): $LevelBlock;
        get east(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get north(): $LevelBlock;
        get centerY(): number;
        get up(): $LevelBlock;
        get light(): number;
        get west(): $LevelBlock;
        get centerX(): number;
        get centerZ(): number;
        get dimensionKey(): $ResourceKey<$Level>;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get typeData(): $Map<string, $Object>;
        get id(): string;
        get key(): $ResourceKey<$Block>;
        get tags(): $List<$ResourceLocation>;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<$Block>>;
        get mod(): string;
    }
    export class $ExplosionProperties extends $Record {
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        strength(): (number) | undefined;
        explode(level: $Level_, x: number, y: number, z: number): $Explosion;
        explosionSound(): $Holder<$SoundEvent>;
        damageCalculator(): $ExplosionDamageCalculator;
        damageSource(): $DamageSource;
        particles(): (boolean) | undefined;
        causesFire(): (boolean) | undefined;
        smallParticles(): $ParticleOptions;
        largeParticles(): $ParticleOptions;
        constructor(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_ | null, particles: (boolean) | undefined, smallParticles: $ParticleOptions_ | null, largeParticles: $ParticleOptions_ | null, explosionSound: $Holder_<$SoundEvent> | null);
    }
    /**
     * Values that may be interpreted as {@link $ExplosionProperties}.
     */
    export type $ExplosionProperties_ = { source?: $Entity, mode?: $Level$ExplosionInteraction_, causesFire?: (boolean) | undefined, particles?: (boolean) | undefined, damageSource?: $DamageSource_, explosionSound?: $Holder_<$SoundEvent>, largeParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, smallParticles?: $ParticleOptions_, strength?: (number) | undefined,  } | [source?: $Entity, mode?: $Level$ExplosionInteraction_, causesFire?: (boolean) | undefined, particles?: (boolean) | undefined, damageSource?: $DamageSource_, explosionSound?: $Holder_<$SoundEvent>, largeParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, smallParticles?: $ParticleOptions_, strength?: (number) | undefined, ];
    export class $SimpleLevelKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        constructor(l: $Level_);
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $KubeJSWorldEventHandler {
        static serverLevelUnload(event: $LevelEvent$Unload): void;
        static preExplosion(event: $ExplosionEvent$Start): void;
        static detonateExplosion(event: $ExplosionEvent$Detonate): void;
        static serverLevelLoad(event: $LevelEvent$Load): void;
        static serverTickEvent(event: $LevelTickEvent$Post): void;
        constructor();
    }
    export class $LevelBlock {
    }
    export interface $LevelBlock extends $BlockProviderKJS {
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_): void;
        getProperties(): $Map<string, string>;
        getLevel(): $Level;
        getItem(): $ItemStack;
        getY(): number;
        getEntity(): $BlockEntity;
        createEntity(type: $EntityType_<never>): $Entity;
        getSkyLight(): number;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        setEntityData(tag: $CompoundTag_): void;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        getEntityId(): string;
        toBlockStateString(): string;
        mergeEntityData(tag: $CompoundTag_): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean): void;
        getBlockLight(): number;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        getCanSeeSky(): boolean;
        getDimension(): $ResourceLocation;
        canSeeSkyFromBelowWater(): boolean;
        explode(properties: $ExplosionProperties_): $Explosion;
        setBlockState(state: $BlockState_, flags: number): void;
        setBlockState(state: $BlockState_): void;
        getZ(): number;
        getX(): number;
        getBlock(): $Block;
        getBlockState(): $BlockState;
        getInventory(): $InventoryKJS;
        getInventory(facing: $Direction_): $InventoryKJS;
        getEntityData(): $CompoundTag;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        getPos(): $BlockPos;
        getSouth(): $LevelBlock;
        getDown(): $LevelBlock;
        getEast(): $LevelBlock;
        getBiomeId(): $ResourceLocation;
        getNorth(): $LevelBlock;
        getCenterY(): number;
        getUp(): $LevelBlock;
        getLight(): number;
        getWest(): $LevelBlock;
        popItem(item: $ItemStack_): void;
        getCenterX(): number;
        getCenterZ(): number;
        getDimensionKey(): $ResourceKey<$Level>;
        get properties(): $Map<string, string>;
        get level(): $Level;
        get item(): $ItemStack;
        get y(): number;
        get entity(): $BlockEntity;
        get skyLight(): number;
        get entityId(): string;
        get blockLight(): number;
        get canSeeSky(): boolean;
        get dimension(): $ResourceLocation;
        get z(): number;
        get x(): number;
        get block(): $Block;
        get pos(): $BlockPos;
        get south(): $LevelBlock;
        get down(): $LevelBlock;
        get east(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get north(): $LevelBlock;
        get centerY(): number;
        get up(): $LevelBlock;
        get light(): number;
        get west(): $LevelBlock;
        get centerX(): number;
        get centerZ(): number;
        get dimensionKey(): $ResourceKey<$Level>;
    }
    export class $ExplosionKubeEvent$Before extends $ExplosionKubeEvent {
        /**
         * Returns the size of the explosion.
         */
        getSize(): number;
        /**
         * Sets the size of the explosion.
         */
        setSize(s: number): void;
        constructor(level: $Level_, explosion: $Explosion);
    }
    export class $ExplosionKubeEvent implements $KubeLevelEvent {
        getPosition(): $Vec3;
        getLevel(): $Level;
        getBlock(): $LevelBlock;
        getY(): number;
        getZ(): number;
        getX(): number;
        getExploder(): $LivingEntity;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        constructor(level: $Level_, explosion: $Explosion);
        get position(): $Vec3;
        get level(): $Level;
        get block(): $LevelBlock;
        get y(): number;
        get z(): number;
        get x(): number;
        get exploder(): $LivingEntity;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
}
