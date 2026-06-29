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
         * Remove all entities from the list of affected entities.
         */
        removeAllAffectedEntities(): void;
        /**
         * Remove all blocks from the list of affected blocks.
         */
        removeAllAffectedBlocks(): void;
        /**
         * Remove an entity from the list of affected entities.
         */
        removeAffectedEntity(entity: $Entity): void;
        /**
         * Remove a block from the list of affected blocks.
         */
        removeAffectedBlock(block: $LevelBlock): void;
        /**
         * Gets a list of all entities affected by the explosion.
         */
        getAffectedEntities(): $EntityArrayList;
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
    export type $WrappedSpawner_ = { entity?: $Entity, block?: $LevelBlock,  } | [entity?: $Entity, block?: $LevelBlock, ];
    export class $KubeLevelEvent {
    }
    export interface $KubeLevelEvent extends $KubeEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
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
        canSeeSkyFromBelowWater(): boolean;
        getEntityData(): $CompoundTag;
        getZ(): number;
        getX(): number;
        getDimension(): $ResourceLocation;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_): void;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        getProperties(): $Map<string, string>;
        getItem(): $ItemStack;
        getY(): number;
        createEntity(type: $EntityType_<never>): $Entity;
        getDimensionKey(): $ResourceKey<$Level>;
        setBlockState(state: $BlockState_): void;
        getInventory(): $InventoryKJS;
        getInventory(facing: $Direction_): $InventoryKJS;
        explode(properties: $ExplosionProperties_): $Explosion;
        getCenterZ(): number;
        getCenterX(): number;
        getCanSeeSky(): boolean;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        setEntityData(tag: $CompoundTag_): void;
        getPlayersInRadius(): $EntityArrayList;
        getPlayersInRadius(radius: number): $EntityArrayList;
        toBlockStateString(): string;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean): void;
        mergeEntityData(tag: $CompoundTag_): void;
        getSkyLight(): number;
        getBlockLight(): number;
        getEntityId(): string;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        getDrops(): $List<$ItemStack>;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getBlock(): $Block;
        getNorth(): $LevelBlock;
        getSouth(): $LevelBlock;
        getLight(): number;
        getCenterY(): number;
        getWest(): $LevelBlock;
        getDown(): $LevelBlock;
        getBiomeId(): $ResourceLocation;
        popItem(item: $ItemStack_): void;
        getUp(): $LevelBlock;
        getEast(): $LevelBlock;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        getTypeData(): $Map<string, $Object>;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        asHolder(): $Holder<$Block>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        minecraftLevel: $Level;
        constructor(w: $Level_, p: $BlockPos_);
        get level(): $Level;
        get entity(): $BlockEntity;
        get pos(): $BlockPos;
        get z(): number;
        get x(): number;
        get dimension(): $ResourceLocation;
        get properties(): $Map<string, string>;
        get item(): $ItemStack;
        get y(): number;
        get dimensionKey(): $ResourceKey<$Level>;
        get centerZ(): number;
        get centerX(): number;
        get canSeeSky(): boolean;
        get skyLight(): number;
        get blockLight(): number;
        get entityId(): string;
        get block(): $Block;
        get north(): $LevelBlock;
        get south(): $LevelBlock;
        get light(): number;
        get centerY(): number;
        get west(): $LevelBlock;
        get down(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get up(): $LevelBlock;
        get east(): $LevelBlock;
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get typeData(): $Map<string, $Object>;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get mod(): string;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
    }
    export class $ExplosionProperties extends $Record {
        strength(): (number) | undefined;
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        damageCalculator(): $ExplosionDamageCalculator;
        explosionSound(): $Holder<$SoundEvent>;
        explode(level: $Level_, x: number, y: number, z: number): $Explosion;
        particles(): (boolean) | undefined;
        damageSource(): $DamageSource;
        causesFire(): (boolean) | undefined;
        smallParticles(): $ParticleOptions;
        largeParticles(): $ParticleOptions;
        constructor(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_ | null, particles: (boolean) | undefined, smallParticles: $ParticleOptions_ | null, largeParticles: $ParticleOptions_ | null, explosionSound: $Holder_<$SoundEvent> | null);
    }
    /**
     * Values that may be interpreted as {@link $ExplosionProperties}.
     */
    export type $ExplosionProperties_ = { damageSource?: $DamageSource_, explosionSound?: $Holder_<$SoundEvent>, largeParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, smallParticles?: $ParticleOptions_, strength?: (number) | undefined, source?: $Entity, mode?: $Level$ExplosionInteraction_, causesFire?: (boolean) | undefined, particles?: (boolean) | undefined,  } | [damageSource?: $DamageSource_, explosionSound?: $Holder_<$SoundEvent>, largeParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, smallParticles?: $ParticleOptions_, strength?: (number) | undefined, source?: $Entity, mode?: $Level$ExplosionInteraction_, causesFire?: (boolean) | undefined, particles?: (boolean) | undefined, ];
    export class $SimpleLevelKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(l: $Level_);
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $KubeJSWorldEventHandler {
        static serverLevelLoad(event: $LevelEvent$Load): void;
        static preExplosion(event: $ExplosionEvent$Start): void;
        static serverLevelUnload(event: $LevelEvent$Unload): void;
        static detonateExplosion(event: $ExplosionEvent$Detonate): void;
        static serverTickEvent(event: $LevelTickEvent$Post): void;
        constructor();
    }
    export class $LevelBlock {
    }
    export interface $LevelBlock extends $BlockProviderKJS {
        canSeeSkyFromBelowWater(): boolean;
        getEntityData(): $CompoundTag;
        getZ(): number;
        getX(): number;
        getDimension(): $ResourceLocation;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block_): void;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        getProperties(): $Map<string, string>;
        getLevel(): $Level;
        getItem(): $ItemStack;
        getY(): number;
        createEntity(type: $EntityType_<never>): $Entity;
        getEntity(): $BlockEntity;
        getDimensionKey(): $ResourceKey<$Level>;
        setBlockState(state: $BlockState_, flags: number): void;
        setBlockState(state: $BlockState_): void;
        getBlockState(): $BlockState;
        getInventory(): $InventoryKJS;
        getInventory(facing: $Direction_): $InventoryKJS;
        explode(properties: $ExplosionProperties_): $Explosion;
        getPos(): $BlockPos;
        getCenterZ(): number;
        getCenterX(): number;
        getCanSeeSky(): boolean;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        setEntityData(tag: $CompoundTag_): void;
        getPlayersInRadius(): $EntityArrayList;
        getPlayersInRadius(radius: number): $EntityArrayList;
        toBlockStateString(): string;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean): void;
        mergeEntityData(tag: $CompoundTag_): void;
        getSkyLight(): number;
        getBlockLight(): number;
        getEntityId(): string;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        getDrops(): $List<$ItemStack>;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getBlock(): $Block;
        getNorth(): $LevelBlock;
        getSouth(): $LevelBlock;
        getLight(): number;
        getCenterY(): number;
        getWest(): $LevelBlock;
        getDown(): $LevelBlock;
        getBiomeId(): $ResourceLocation;
        popItem(item: $ItemStack_): void;
        getUp(): $LevelBlock;
        getEast(): $LevelBlock;
        get z(): number;
        get x(): number;
        get dimension(): $ResourceLocation;
        get properties(): $Map<string, string>;
        get level(): $Level;
        get item(): $ItemStack;
        get y(): number;
        get entity(): $BlockEntity;
        get dimensionKey(): $ResourceKey<$Level>;
        get pos(): $BlockPos;
        get centerZ(): number;
        get centerX(): number;
        get canSeeSky(): boolean;
        get skyLight(): number;
        get blockLight(): number;
        get entityId(): string;
        get block(): $Block;
        get north(): $LevelBlock;
        get south(): $LevelBlock;
        get light(): number;
        get centerY(): number;
        get west(): $LevelBlock;
        get down(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get up(): $LevelBlock;
        get east(): $LevelBlock;
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
        getZ(): number;
        getX(): number;
        getPosition(): $Vec3;
        getLevel(): $Level;
        getBlock(): $LevelBlock;
        getY(): number;
        getExploder(): $LivingEntity;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(level: $Level_, explosion: $Explosion);
        get z(): number;
        get x(): number;
        get position(): $Vec3;
        get level(): $Level;
        get block(): $LevelBlock;
        get y(): number;
        get exploder(): $LivingEntity;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
}
