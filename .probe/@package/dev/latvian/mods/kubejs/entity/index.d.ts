import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $MobCategory_, $EntityType, $Entity, $LivingEntity, $MobSpawnType_, $MobSpawnType } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $Attribute, $Attribute_, $Attribute$Sentiment_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $WrappedSpawner, $LevelBlock, $KubeLevelEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Collection, $Map } from "@package/java/util";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $Holder, $RegistryAccess, $Registry, $Direction } from "@package/net/minecraft/core";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityJoinLevelEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $LivingDamageEvent$Pre, $LivingDropsEvent, $LivingDeathEvent, $FinalizeSpawnEvent, $LivingDamageEvent$Post } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Record, $Object } from "@package/java/lang";
import { $HitResult, $Vec3, $HitResult$Type } from "@package/net/minecraft/world/phys";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/dev/latvian/mods/kubejs/entity" {
    export class $EntityPotionEffectsJS {
        isApplicable(effect: $MobEffectInstance): boolean;
        clear(): void;
        add(mobEffect: $Holder_<$MobEffect>): void;
        add(mobEffect: $Holder_<$MobEffect>, duration: number): void;
        add(mobEffect: $Holder_<$MobEffect>, duration: number, amplifier: number): void;
        add(mobEffect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, showParticles: boolean): void;
        isActive(mobEffect: $Holder_<$MobEffect>): boolean;
        getMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        getDuration(mobEffect: $Holder_<$MobEffect>): number;
        getActive(mobEffect: $Holder_<$MobEffect>): $MobEffectInstance;
        getActive(): $Collection<$MobEffectInstance>;
        constructor(e: $LivingEntity);
        get map(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
    }
    export class $CheckLivingEntitySpawnKubeEvent implements $KubeLivingEntityEvent {
        /**
         * The type of spawn.
         */
        getType(): $MobSpawnType;
        /**
         * The level the entity is being spawned into.
         */
        getLevel(): $Level;
        /**
         * The block the entity is being spawned on.
         */
        getBlock(): $LevelBlock;
        /**
         * The entity being spawned.
         */
        getEntity(): $LivingEntity;
        /**
         * The spawner that spawned the entity.
         */
        getSpawner(): $WrappedSpawner;
        getPlayer(): $Player;
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
        x: number;
        y: number;
        z: number;
        constructor(entity: $LivingEntity, level: $Level_, x: number, y: number, z: number, type: $MobSpawnType_, spawnerEither: $Either<$BlockEntity, $Entity>);
        get type(): $MobSpawnType;
        get level(): $Level;
        get block(): $LevelBlock;
        get entity(): $LivingEntity;
        get spawner(): $WrappedSpawner;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $KubeEntityEvent {
    }
    export interface $KubeEntityEvent extends $KubeLevelEvent {
        getLevel(): $Level;
        getEntity(): $Entity;
        getPlayer(): $Player;
        get level(): $Level;
        get entity(): $Entity;
        get player(): $Player;
    }
    /**
     * Values that may be interpreted as {@link $KubeEntityEvent}.
     */
    export type $KubeEntityEvent_ = (() => $Entity);
    export class $AttributeBuilder extends $BuilderBase<$Attribute> {
        range(defaultValue: number, min: number, max: number): this;
        bool(defaultValue: boolean): this;
        attachTo(entityType: $Predicate_<$EntityType<never>>): this;
        syncable(watch: boolean): this;
        sentiment(sentiment: $Attribute$Sentiment_): this;
        transformObject(attribute: $Attribute_): $Attribute;
        attachToMonsters(): this;
        attachToCategory(category: $MobCategory_): this;
        negativeSentiment(): this;
        attachToPlayers(): this;
        neutralSentiment(): this;
        registryKey: $ResourceKey<$Registry<$Attribute>>;
        sourceLine: $SourceLine;
        predicateList: $List<$Predicate<$EntityType<never>>>;
        defaultValue: $Either<$AttributeBuilder$Range, boolean>;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $LivingEntityDeathKubeEvent implements $KubeLivingEntityEvent {
        /**
         * The damage source that triggers the death.
         */
        getSource(): $DamageSource;
        /**
         * The entity that dies.
         */
        getEntity(): $LivingEntity;
        getLevel(): $Level;
        getPlayer(): $Player;
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
        constructor(entity: $LivingEntity, source: $DamageSource_);
        get source(): $DamageSource;
        get entity(): $LivingEntity;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $EntitySpawnedKubeEvent implements $KubeEntityEvent {
        /**
         * The level the entity is being added to.
         */
        getLevel(): $Level;
        /**
         * The entity being added to the world.
         */
        getEntity(): $Entity;
        getPlayer(): $Player;
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
        constructor(entity: $Entity, level: $Level_);
        get level(): $Level;
        get entity(): $Entity;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $BeforeLivingEntityHurtKubeEvent implements $KubeLivingEntityEvent {
        /**
         * The damage source.
         */
        getSource(): $DamageSource;
        /**
         * The amount of damage.
         */
        getDamage(): number;
        setDamage(damage: number): void;
        getLevel(): $Level;
        getPlayer(): $Player;
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
        getEntity(): $LivingEntity;
        constructor(event: $LivingDamageEvent$Pre);
        get source(): $DamageSource;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $LivingEntityDropsKubeEvent implements $KubeLivingEntityEvent {
        getSource(): $DamageSource;
        getDrops(): $List<$ItemEntity>;
        isRecentlyHit(): boolean;
        addDrop(stack: $ItemStack_, chance: number): $ItemEntity;
        addDrop(stack: $ItemStack_): $ItemEntity;
        getLevel(): $Level;
        getPlayer(): $Player;
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
        getEntity(): $LivingEntity;
        eventDrops: $List<$ItemEntity>;
        constructor(e: $LivingDropsEvent);
        get source(): $DamageSource;
        get drops(): $List<$ItemEntity>;
        get recentlyHit(): boolean;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $AttributeBuilder$Range extends $Record {
        min(): number;
        max(): number;
        defaultValue(): number;
        constructor(defaultValue: number, min: number, max: number);
    }
    /**
     * Values that may be interpreted as {@link $AttributeBuilder$Range}.
     */
    export type $AttributeBuilder$Range_ = { max?: number, min?: number, defaultValue?: number,  } | [max?: number, min?: number, defaultValue?: number, ];
    export class $AfterLivingEntityHurtKubeEvent implements $KubeLivingEntityEvent {
        /**
         * The damage source.
         */
        getSource(): $DamageSource;
        /**
         * The entity that was hurt.
         */
        getEntity(): $LivingEntity;
        /**
         * The amount of damage.
         */
        getDamage(): number;
        getLevel(): $Level;
        getPlayer(): $Player;
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
        constructor(event: $LivingDamageEvent$Post);
        get source(): $DamageSource;
        get entity(): $LivingEntity;
        get damage(): number;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $KubeRayTraceResult {
        getHitZ(): number;
        getHitX(): number;
        getHitY(): number;
        hit: $Vec3;
        fromEntity: $Entity;
        distance: number;
        facing: $Direction;
        block: $LevelBlock;
        type: $HitResult$Type;
        entity: $Entity;
        constructor(from: $Entity, result: $HitResult, d: number);
        constructor(from: $Entity, result: $HitResult);
        get hitZ(): number;
        get hitX(): number;
        get hitY(): number;
    }
    export class $KubeJSEntityEventHandler {
        static checkSpawn(event: $FinalizeSpawnEvent): void;
        static entitySpawned(event: $EntityJoinLevelEvent): void;
        static livingDrops(event: $LivingDropsEvent): void;
        static afterLivingHurt(event: $LivingDamageEvent$Post): void;
        static livingDeath(event: $LivingDeathEvent): void;
        static beforeLivingHurt(event: $LivingDamageEvent$Pre): void;
        constructor();
    }
    export class $KubeLivingEntityEvent {
    }
    export interface $KubeLivingEntityEvent extends $KubeEntityEvent {
        getEntity(): $LivingEntity;
        get entity(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $KubeLivingEntityEvent}.
     */
    export type $KubeLivingEntityEvent_ = (() => $LivingEntity);
}
