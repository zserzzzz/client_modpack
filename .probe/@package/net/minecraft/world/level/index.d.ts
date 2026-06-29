import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $MobCategory_, $EquipmentTable_, $MobCategory, $Entity, $EntityType, $LivingEntity, $EquipmentTable, $Mob } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $WorldViewMixin } from "@package/net/fabricmc/fabric/mixin/rendering/data";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IBlockGetterExtension, $ILevelReaderExtension, $IOwnedSpawner, $ILevelExtension, $IBlockAndTintGetterExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $StructureCheckResult, $StructureCheck, $StructureStart, $Structure, $Structure_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ScriptType } from "@package/dev/latvian/mods/kubejs/script";
import { $StructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $LevelChunk, $StructureAccess, $BlockColumn, $ChunkSource, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $LevelData, $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $CommandSource, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $GameRulesIntRuleAccessor, $GameRulesAccessor } from "@package/net/fabricmc/fabric/mixin/gamerule";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";
import { $FabricBlockView } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $Mixin_SetWorldName } from "@package/gg/essential/mixins/transformers/server/integrated";
import { $UUID_, $ArrayList, $Map, $List, $Collection_, $List_, $Collection, $Set, $UUID, $Optional } from "@package/java/util";
import { $BlockPos, $HolderSet_, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $Holder, $Direction_, $Direction, $HolderLookup, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry, $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $RenderAttachedBlockView } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $Enum, $Iterable, $Thread, $Iterable_, $Record, $AutoCloseable, $Class, $Object } from "@package/java/lang";
import { $FluidState, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Fireworks_, $FireworkExplosion_ } from "@package/net/minecraft/world/item/component";
import { $AbstractIterator } from "@package/com/google/common/collect";
import { $MixinGameRulesValueAccessor, $MixinGameRulesAccessor } from "@package/gg/essential/mixins/transformers/feature/gamerules";
import { $LithiumData, $ChunkRandomSource, $ChunkView, $LithiumData$Data } from "@package/net/caffeinemc/mods/lithium/common/world";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CustomGameRuleCategory } from "@package/net/fabricmc/fabric/api/gamerule/v1";
import { $LevelReusedVectors } from "@package/dev/ryanhcode/sable/api/math";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $ClipContextAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/raycast";
import { $DamageSource, $DamageSources, $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $Codec, $Lifecycle, $Dynamic, $DynamicLike } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ExplosionProperties_, $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $RandomSource, $StringRepresentable$EnumCodec, $InclusiveRange_, $StringRepresentable, $InclusiveRange } from "@package/net/minecraft/util";
import { $LevelAccessor as $LevelAccessor$1 } from "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/super_glue";
import { $InteractionResult, $Difficulty_, $DifficultyInstance, $TickRateManager, $Difficulty } from "@package/net/minecraft/world";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $SoundSource_, $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LocalBooleanRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $RequiredArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $EntityTypeTest, $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $Item, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BiomeManager$NoiseBiomeSource, $Biome, $BiomeManager, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $Abilities, $Player } from "@package/net/minecraft/world/entity/player";
import { $ModelDataManager, $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $LevelExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entity_sublevel_collision";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $EntityGetterKJS, $GameRulesKJS, $LevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ClipContextExtension } from "@package/dev/ryanhcode/sable/mixinterface/clip_overwrite";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $ForcedChunkManager$TicketTracker } from "@package/net/neoforged/neoforge/common/world/chunk";
import { $LevelExtension as $LevelExtension$1 } from "@package/dev/engine_room/flywheel/impl/extension";
import { $Supplier_, $BiConsumer_, $Supplier, $Consumer_, $Predicate_, $Predicate, $BiConsumer, $Consumer, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $ServerLevel, $WorldGenRegion, $ChunkMap, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2IntOpenHashMap, $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $MapId_, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $GameRulesAccessor as $GameRulesAccessor$1, $GameRulesBooleanValueAccessor } from "@package/gg/essential/mixins/transformers/server";
import { $WorldOptions, $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $LevelTickAccess, $TickPriority_ } from "@package/net/minecraft/world/ticks";
import { $RuleKeyExtensions } from "@package/net/fabricmc/fabric/impl/gamerule";
import { $LoadedChunksCache } from "@package/net/fabricmc/fabric/impl/event/lifecycle";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $BlockEntityGetter } from "@package/net/caffeinemc/mods/lithium/common/world/blockentity";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Stream } from "@package/java/util/stream";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $BlockViewMixin } from "@package/net/fabricmc/fabric/mixin/blockview";
import { $LevelAccessor as $LevelAccessor$2 } from "@package/net/caffeinemc/mods/lithium/mixin/util/accessors";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as levelgen from "@package/net/minecraft/world/level/levelgen";
export * as lighting from "@package/net/minecraft/world/level/lighting";
export * as block from "@package/net/minecraft/world/level/block";
export * as material from "@package/net/minecraft/world/level/material";
export * as portal from "@package/net/minecraft/world/level/portal";
export * as chunk from "@package/net/minecraft/world/level/chunk";
export * as biome from "@package/net/minecraft/world/level/biome";
export * as border from "@package/net/minecraft/world/level/border";
export * as entity from "@package/net/minecraft/world/level/entity";
export * as storage from "@package/net/minecraft/world/level/storage";
export * as gameevent from "@package/net/minecraft/world/level/gameevent";
export * as saveddata from "@package/net/minecraft/world/level/saveddata";
export * as pathfinder from "@package/net/minecraft/world/level/pathfinder";
export * as timers from "@package/net/minecraft/world/level/timers";
export * as dimension from "@package/net/minecraft/world/level/dimension";
export * as redstone from "@package/net/minecraft/world/level/redstone";
export * as validation from "@package/net/minecraft/world/level/validation";

declare module "@package/net/minecraft/world/level" {
    export class $EntityGetter {
    }
    export interface $EntityGetter extends $EntityGetterKJS {
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntities(entity: $Entity | null, area: $AABB_): $List<$Entity>;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, bounds: $AABB_, predicate: $Predicate_<T>): $List<T>;
        /**
         * Gets all entities within the specified AABB excluding the one passed into it.
         */
        getEntities(entity: $Entity | null, area: $AABB_, predicate: $Predicate_<$Entity>): $List<$Entity>;
        hasNearbyAlivePlayer(x: number, arg1: number, y: number, arg3: number): boolean;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntityCollisions(entity: $Entity | null, area: $AABB_): $List<$VoxelShape>;
        getNearestEntity<T extends $LivingEntity>(entities: $List_<T>, predicate: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number): T;
        getNearestEntity<T extends $LivingEntity>(entityClazz: $Class<T>, conditions: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number, arg6: $AABB_): T;
        getNearbyEntities<T extends $LivingEntity>(entityClazz: $Class<T>, entityPredicate: $TargetingConditions, entity: $LivingEntity, area: $AABB_): $List<T>;
        getPlayerByUUID(uniqueId: $UUID_): $Player;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: $Predicate_<$Entity> | null): $Player;
        getNearestPlayer(entity: $Entity, distance: number): $Player;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: boolean): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity, x: number, arg3: number, y: number): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity): $Player;
        getNearestPlayer(predicate: $TargetingConditions, x: number, arg2: number, y: number): $Player;
        getNearbyPlayers(predicate: $TargetingConditions, target: $LivingEntity, area: $AABB_): $List<$Player>;
        getEntitiesOfClass<T extends $Entity>(entityClass: $Class<T>, area: $AABB_): $List<T>;
        getEntitiesOfClass<T extends $Entity>(clazz: $Class<T>, area: $AABB_, filter: $Predicate_<T>): $List<T>;
        wrapOperation$fin000$asyncparticles$wrapPlayerGetUUID(player: $Player, original: $Operation_<any>, isClientLevel: $LocalBooleanRef): $UUID;
        wrapOperation$fin000$asyncparticles$wrapPlayerGet(list: $List_<any>, index: number, original: $Operation_<any>, isClientLevel: $LocalBooleanRef): $Object;
        handler$fin000$asyncparticles$injectHead(cir: $CallbackInfoReturnable<any>, isClientLevel: $LocalBooleanRef): void;
        isUnobstructed(entity: $Entity, shape: $VoxelShape): boolean;
    }
    export class $GameRules$IntegerValue extends $GameRules$Value<$GameRules$IntegerValue> implements $GameRulesIntRuleAccessor {
        get(): number;
        set(value: number, server: $MinecraftServer | null): void;
        copy(): $GameRules$IntegerValue;
        static create(defaultValue: number, changeListener: $BiConsumer_<$MinecraftServer, $GameRules$IntegerValue>): $GameRules$Type<$GameRules$IntegerValue>;
        static create(defaultValue: number): $GameRules$Type<$GameRules$IntegerValue>;
        static create(defaultValue: number, min: number, max: number, changeListener: $BiConsumer_<$MinecraftServer, $GameRules$IntegerValue>): $GameRules$Type<$GameRules$IntegerValue>;
        getSelf(): $GameRules$IntegerValue;
        setFrom(value: $GameRules$IntegerValue, server: $MinecraftServer | null): void;
        tryDeserialize(name: string): boolean;
        getValue(): number;
        setValue(arg0: number): void;
        type: $GameRules$Type<$GameRules$IntegerValue>;
        constructor(type: $GameRules$Type<$GameRules$IntegerValue>, value: number);
        get self(): $GameRules$IntegerValue;
    }
    export class $LightLayer extends $Enum<$LightLayer> {
        static values(): $LightLayer[];
        static valueOf(arg0: string): $LightLayer;
        static SKY: $LightLayer;
        static BLOCK: $LightLayer;
    }
    /**
     * Values that may be interpreted as {@link $LightLayer}.
     */
    export type $LightLayer_ = "sky" | "block";
    export class $GameType extends $Enum<$GameType> implements $StringRepresentable {
        /**
         * Returns the name of this game type
         */
        getName(): string;
        static values(): $GameType[];
        /**
         * Gets the game type registered with the specified name. If no matches were found, survival will be returned.
         */
        static valueOf(gamemodeName: string): $GameType;
        /**
         * Returns the ID of this game type
         */
        getId(): number;
        getLongDisplayName(): $Component;
        static getNullableId(gameType: $GameType_ | null): number;
        /**
         * Gets the game type by its ID. Will be survival if none was found.
         */
        static byNullableId(id: number): $GameType;
        static byName(targetName: string, fallback: $GameType_ | null): $GameType;
        /**
         * Gets the game type registered with the specified name. If no matches were found, survival will be returned.
         */
        static byName(gamemodeName: string): $GameType;
        /**
         * Returns `true` if this is the ADVENTURE game type
         */
        isSurvival(): boolean;
        /**
         * Returns the name of this game type
         */
        getSerializedName(): string;
        /**
         * Returns `true` if this is the ADVENTURE game type
         */
        isBlockPlacingRestricted(): boolean;
        /**
         * Gets the game type by its ID. Will be survival if none was found.
         */
        static byId(id: number): $GameType;
        /**
         * Returns `true` if this is the ADVENTURE game type
         */
        isCreative(): boolean;
        /**
         * Configures the player abilities based on the game type
         */
        updatePlayerAbilities(abilities: $Abilities): void;
        getShortDisplayName(): $Component;
        /**
         * Returns the name of this game type
         */
        getRemappedEnumConstantName(): string;
        static SURVIVAL: $GameType;
        static SPECTATOR: $GameType;
        static CODEC: $StringRepresentable$EnumCodec<$GameType>;
        static CREATIVE: $GameType;
        static ADVENTURE: $GameType;
        static DEFAULT_MODE: $GameType;
        get id(): number;
        get longDisplayName(): $Component;
        get survival(): boolean;
        get serializedName(): string;
        get blockPlacingRestricted(): boolean;
        get creative(): boolean;
        get shortDisplayName(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GameType}.
     */
    export type $GameType_ = "survival" | "creative" | "adventure" | "spectator";
    export class $SignalGetter {
        static DIRECTIONS: $Direction[];
    }
    export interface $SignalGetter extends $BlockGetter {
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getDirectSignal(pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Returns the control signal emitted from the given position in the given direction.
         * If `diodesOnly` is `true`, this method returns the direct signal emitted if
         * and only if this position is occupied by a diode (i.e. a repeater or comparator).
         * Otherwise, if this position is occupied by a
         * redstone block,
         * this method will return the redstone signal emitted by it. If not, this method will
         * return the direct signal emitted from this position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getControlInputSignal(pos: $BlockPos_, direction: $Direction_, diodesOnly: boolean): number;
        /**
         * Returns the highest redstone signal the given position receives from neighboring blocks.
         */
        getBestNeighborSignal(pos: $BlockPos_): number;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getSignal(pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Returns whether a redstone signal is emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        hasSignal(pos: $BlockPos_, direction: $Direction_): boolean;
        /**
         * Returns the highest redstone signal the given position receives from neighboring blocks.
         */
        getDirectSignalTo(pos: $BlockPos_): number;
        /**
         * Returns whether the given position receives any redstone signal from neighboring blocks.
         */
        hasNeighborSignal(pos: $BlockPos_): boolean;
    }
    export class $LevelAccessor {
    }
    export interface $LevelAccessor extends $CommonLevelAccessor, $LevelTimeAccess {
        addParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): void;
        getRandom(): $RandomSource;
        neighborShapeChanged(direction: $Direction_, queried: $BlockState_, pos: $BlockPos_, offsetPos: $BlockPos_, flags: number, recursionLevel: number): void;
        blockUpdated(pos: $BlockPos_, block: $Block_): void;
        nextSubTickCount(): number;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        getBlockTicks(): $LevelTickAccess<$Block>;
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, source: $SoundSource_): void;
        /**
         * Plays a sound. On the server, the sound is broadcast to all nearby *except* the given player. On the client, the sound only plays if the given player is the client player. Thus, this method is intended to be called from code running on both sides. The client plays it locally and the server plays it for everyone else.
         */
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, source: $SoundSource_, volume: number, pitch: number): void;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $LevelData;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ChunkSource;
        getDifficulty(): $Difficulty;
        getServer(): $MinecraftServer;
        levelEvent(player: $Player | null, type: number, pos: $BlockPos_, data: number): void;
        levelEvent(type: number, pos: $BlockPos_, data: number): void;
        hasChunk(chunkX: number, chunkZ: number): boolean;
        getCurrentDifficultyAt(pos: $BlockPos_): $DifficultyInstance;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $Vec3_): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $Vec3_, context: $GameEvent$Context_): void;
        gameEvent(gameEvent: $ResourceKey_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        dayTime(): number;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number): void;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number, priority: $TickPriority_): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number, priority: $TickPriority_): void;
        get random(): $RandomSource;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get blockTicks(): $LevelTickAccess<$Block>;
        get levelData(): $LevelData;
        get chunkSource(): $ChunkSource;
        get difficulty(): $Difficulty;
        get server(): $MinecraftServer;
    }
    export class $NaturalSpawner$SpawnState {
        getMobCategoryCounts(): $Object2IntMap<$MobCategory>;
        getSpawnableChunkCount(): number;
        canSpawnForCategory(category: $MobCategory_, pos: $ChunkPos): boolean;
        constructor(spawnableChunkCount: number, mobCategoryCounts: $Object2IntOpenHashMap<$MobCategory_>, spawnPotential: $PotentialCalculator, localMobCapCalculator: $LocalMobCapCalculator);
        get mobCategoryCounts(): $Object2IntMap<$MobCategory>;
        get spawnableChunkCount(): number;
    }
    export class $ServerLevelAccessor {
    }
    export interface $ServerLevelAccessor extends $LevelAccessor {
        getLevel(): $ServerLevel;
        addFreshEntityWithPassengers(entity: $Entity): void;
        get level(): $ServerLevel;
    }
    export class $WorldDataConfiguration extends $Record {
        enabledFeatures(): $FeatureFlagSet;
        dataPacks(): $DataPackConfig;
        expandFeatures(newFeatures: $FeatureFlagSet): $WorldDataConfiguration;
        static CODEC: $Codec<$WorldDataConfiguration>;
        static ENABLED_FEATURES_ID: string;
        static DEFAULT: $WorldDataConfiguration;
        constructor(arg0: $DataPackConfig, arg1: $FeatureFlagSet);
    }
    /**
     * Values that may be interpreted as {@link $WorldDataConfiguration}.
     */
    export type $WorldDataConfiguration_ = { dataPacks?: $DataPackConfig, enabledFeatures?: $FeatureFlagSet,  } | [dataPacks?: $DataPackConfig, enabledFeatures?: $FeatureFlagSet, ];
    export class $StructureManager {
        addReference(structureStart: $StructureStart): void;
        startsForStructure(sectionPos: $SectionPos, structure: $Structure_): $List<$StructureStart>;
        startsForStructure(chunkPos: $ChunkPos, structurePredicate: $Predicate_<$Structure>): $List<$StructureStart>;
        getStructureWithPieceAt(pos: $BlockPos_, structureTag: $TagKey_<$Structure>): $StructureStart;
        getStructureWithPieceAt(pos: $BlockPos_, structures: $HolderSet_<$Structure>): $StructureStart;
        getStructureWithPieceAt(pos: $BlockPos_, predicate: $Predicate_<$Holder<$Structure>>): $StructureStart;
        getStructureWithPieceAt(pos: $BlockPos_, structure: $Structure_): $StructureStart;
        registryAccess(): $RegistryAccess;
        fillStartsForStructure(structure: $Structure_, structureRefs: $LongSet, startConsumer: $Consumer_<$StructureStart>): void;
        checkStructurePresence(chunkPos: $ChunkPos, structure: $Structure_, placement: $StructurePlacement, skipKnownStructures: boolean): $StructureCheckResult;
        shouldGenerateStructures(): boolean;
        getAllStructuresAt(pos: $BlockPos_): $Map<$Structure, $LongSet>;
        structureHasPieceAt(pos: $BlockPos_, structureStart: $StructureStart): boolean;
        getStartForStructure(sectionPos: $SectionPos, structure: $Structure_, structureAccess: $StructureAccess): $StructureStart;
        setStartForStructure(sectionPos: $SectionPos, structure: $Structure_, structureStart: $StructureStart, structureAccess: $StructureAccess): void;
        addReferenceForStructure(sectionPos: $SectionPos, structure: $Structure_, reference: number, arg3: $StructureAccess): void;
        forWorldGenRegion(region: $WorldGenRegion): $StructureManager;
        hasAnyStructureAt(pos: $BlockPos_): boolean;
        getStructureAt(pos: $BlockPos_, structure: $Structure_): $StructureStart;
        constructor(level: $LevelAccessor, worldOptions: $WorldOptions, structureCheck: $StructureCheck);
    }
    export class $PotentialCalculator$PointCharge {
    }
    export class $GrassColor {
        static get(temperature: number, arg1: number): number;
        static init(grassBuffer: number[]): void;
        static getDefaultColor(): number;
        static pixels: number[];
        constructor();
        static get defaultColor(): number;
    }
    export class $GameRules implements $GameRulesAccessor, $GameRulesKJS, $MixinGameRulesAccessor, $GameRulesAccessor$1 {
        get(rule: string): $GameRules$Value<any>;
        set(rule: string, value: string): void;
        getBoolean(key: $GameRules$Key<$GameRules$BooleanValue>): boolean;
        getInt(key: $GameRules$Key<$GameRules$IntegerValue>): number;
        static register<T extends $GameRules$Value<T>>(name: string, category: $GameRules$Category_, type: $GameRules$Type<T>): $GameRules$Key<T>;
        copy(): $GameRules;
        getRule<T extends $GameRules$Value<T>>(key: $GameRules$Key<T>): T;
        /**
         * Return the defined game rules as NBT.
         */
        createTag(): $CompoundTag;
        static visitGameRuleTypes(visitor: $GameRules$GameRuleTypeVisitor): void;
        static invokeRegister$essential_$md$c99f8a$1(name: string, category: $GameRules$Category_, type: $GameRules$Type<any>): $GameRules$Key<any>;
        static getRuleTypes$fabric_game_rule_api_v1_$md$c99f8a$0(): $Map<any, any>;
        assignFrom(rules: $GameRules, server: $MinecraftServer | null): void;
        kjs$getString(rule: string): string;
        kjs$getBoolean(rule: string): boolean;
        kjs$getInt(rule: string): number;
        getRules(): $Map<$GameRules$Key<never>, $GameRules$Value<never>>;
        static RULE_MAX_COMMAND_CHAIN_LENGTH: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_DROWNING_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_LOGADMINCOMMANDS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_REDUCEDDEBUGINFO: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_WEATHER_CYCLE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_FORGIVE_DEAD_PLAYERS: $GameRules$Key<$GameRules$BooleanValue>;
        static DEFAULT_RANDOM_TICK_SPEED: number;
        static RULE_TNT_EXPLOSION_DROP_DECAY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_NATURAL_REGENERATION: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DISABLE_ELYTRA_MOVEMENT_CHECK: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_COMMAND_MODIFICATION_BLOCK_LIMIT: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_SPAWN_CHUNK_RADIUS: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_ANNOUNCE_ADVANCEMENTS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_COMMANDBLOCKOUTPUT: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOMOBSPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PROJECTILESCANBREAKBLOCKS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DAYLIGHT: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DISABLE_RAIDS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_FIRE_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PLAYERS_SLEEPING_PERCENTAGE: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_WATER_SOURCE_CONVERSION: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOBLOCKDROPS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_BLOCK_EXPLOSION_DROP_DECAY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_SPECTATORSGENERATECHUNKS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DO_VINES_SPREAD: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DO_IMMEDIATE_RESPAWN: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOENTITYDROPS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_KEEPINVENTORY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_RANDOMTICKING: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_DO_TRADER_SPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOMOBLOOT: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_GLOBAL_SOUND_EVENTS: $GameRules$Key<$GameRules$BooleanValue>;
        static LOGGER: $Logger;
        static RULE_DO_PATROL_SPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PLAYERS_NETHER_PORTAL_DEFAULT_DELAY: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_FALL_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOINSOMNIA: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MOB_EXPLOSION_DROP_DECAY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_LIMITED_CRAFTING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DO_WARDEN_SPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOFIRETICK: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MOBGRIEFING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PLAYERS_NETHER_PORTAL_CREATIVE_DELAY: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_SHOWDEATHMESSAGES: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MAX_ENTITY_CRAMMING: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_SPAWN_RADIUS: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_UNIVERSAL_ANGER: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_FREEZE_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_SNOW_ACCUMULATION_HEIGHT: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_LAVA_SOURCE_CONVERSION: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_SENDCOMMANDFEEDBACK: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MAX_COMMAND_FORK_COUNT: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_ENDER_PEARLS_VANISH_ON_DEATH: $GameRules$Key<$GameRules$BooleanValue>;
        constructor(tag: $DynamicLike<never>);
        constructor();
        static get ruleTypes$fabric_game_rule_api_v1_$md$c99f8a$0(): $Map<any, any>;
        get rules(): $Map<$GameRules$Key<never>, $GameRules$Value<never>>;
    }
    export class $ChunkPos {
        /**
         * Converts the chunk coordinate pair to a long
         */
        static asLong(x: number, z: number): number;
        static asLong(pos: $BlockPos_): number;
        static hash(x: number, z: number): number;
        static rangeClosed(start: $ChunkPos, end: $ChunkPos): $Stream<$ChunkPos>;
        static rangeClosed(center: $ChunkPos, radius: number): $Stream<$ChunkPos>;
        toLong(): number;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getMiddleBlockX(): number;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getMiddleBlockZ(): number;
        static maxFromRegion(chunkX: number, chunkZ: number): $ChunkPos;
        static minFromRegion(chunkX: number, chunkZ: number): $ChunkPos;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getRegionLocalZ(): number;
        getWorldPosition(): $BlockPos;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getRegionLocalX(): number;
        static getZ(packedPos: number): number;
        static getX(packedPos: number): number;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getMaxBlockZ(): number;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getMaxBlockX(): number;
        distanceSquared(packedPos: number): number;
        distanceSquared(chunkPos: $ChunkPos): number;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getMinBlockX(): number;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getMinBlockZ(): number;
        getChessboardDistance(x: number, z: number): number;
        getChessboardDistance(chunkPos: $ChunkPos): number;
        getMiddleBlockPosition(y: number): $BlockPos;
        getBlockZ(x: number): number;
        getBlockX(x: number): number;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getRegionZ(): number;
        getBlockAt(xSection: number, y: number, zSection: number): $BlockPos;
        /**
         * Get the last world X coordinate that belongs to this Chunk
         */
        getRegionX(): number;
        static ZERO: $ChunkPos;
        static REGION_MAX_INDEX: number;
        static INVALID_CHUNK_POS: number;
        x: number;
        static REGION_SIZE: number;
        z: number;
        constructor(x: number, y: number);
        constructor(pos: $BlockPos_);
        constructor(packedPos: number);
        get middleBlockX(): number;
        get middleBlockZ(): number;
        get regionLocalZ(): number;
        get worldPosition(): $BlockPos;
        get regionLocalX(): number;
        get maxBlockZ(): number;
        get maxBlockX(): number;
        get minBlockX(): number;
        get minBlockZ(): number;
        get regionZ(): number;
        get regionX(): number;
    }
    export class $ColorResolver {
    }
    export interface $ColorResolver {
        getColor(biome: $Biome_, x: number, arg2: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ColorResolver}.
     */
    export type $ColorResolver_ = ((arg0: $Biome, arg1: number, arg2: number) => number);
    export class $PotentialCalculator {
        addCharge(pos: $BlockPos_, charge: number): void;
        getPotentialEnergyChange(pos: $BlockPos_, charge: number): number;
        constructor();
    }
    export class $BlockGetter {
        static traverseBlocks<T, C>(from: $Vec3_, to: $Vec3_, context: C, tester: $BiFunction_<C, $BlockPos, T>, onFail: $Function_<C, T>): T;
    }
    export interface $BlockGetter extends $LevelHeightAccessor, $IBlockGetterExtension, $FabricBlockView, $BlockViewMixin {
        getMaxLightLevel(): number;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getFluidState(pos: $BlockPos_): $FluidState;
        getLightEmission(pos: $BlockPos_): number;
        getBlockState(pos: $BlockPos_): $BlockState;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        /**
         * Checks if there's block between `from` and `to` of context.
         * This uses the collision shape of provided block.
         */
        clip(context: $ClipContext): $BlockHitResult;
        handler$hbg000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        get maxLightLevel(): number;
    }
    export class $NaturalSpawner$SpawnPredicate {
    }
    export interface $NaturalSpawner$SpawnPredicate {
        test(entityType: $EntityType_<never>, pos: $BlockPos_, chunk: $ChunkAccess): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NaturalSpawner$SpawnPredicate}.
     */
    export type $NaturalSpawner$SpawnPredicate_ = ((arg0: $EntityType<never>, arg1: $BlockPos, arg2: $ChunkAccess) => boolean);
    export class $GameRules$Value<T extends $GameRules$Value<T>> implements $MixinGameRulesValueAccessor {
        copy(): T;
        deserialize(value: string): void;
        serialize(): string;
        getSelf(): T;
        setFrom(value: T, server: $MinecraftServer | null): void;
        onChanged(server: $MinecraftServer | null): void;
        updateFromArgument(context: $CommandContext<$CommandSourceStack>, paramName: string): void;
        setFromArgument(context: $CommandContext<$CommandSourceStack>, paramName: string): void;
        getCommandResult(): number;
        handler$iii000$essential$onNotifyChange(server: $MinecraftServer, ci: $CallbackInfo): void;
        getType(): $GameRules$Type<any>;
        type: $GameRules$Type<T>;
        constructor(type: $GameRules$Type<T>);
        get self(): T;
        get commandResult(): number;
    }
    export class $LevelSettings implements $Mixin_SetWorldName {
        withLifecycle(arg0: $Lifecycle): $LevelSettings;
        static parse(levelData: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_): $LevelSettings;
        copy(): $LevelSettings;
        levelName(): string;
        hardcore(): boolean;
        getDataConfiguration(): $WorldDataConfiguration;
        allowCommands(): boolean;
        difficulty(): $Difficulty;
        gameRules(): $GameRules;
        gameType(): $GameType;
        withDataConfiguration(dataConfiguration: $WorldDataConfiguration_): $LevelSettings;
        withGameType(gameType: $GameType_): $LevelSettings;
        withDifficulty(difficulty: $Difficulty_): $LevelSettings;
        getLifecycle(): $Lifecycle;
        setWorldName(arg0: string): void;
        constructor(levelName: string, gameType: $GameType_, hardcore: boolean, difficulty: $Difficulty_, allowCommands: boolean, gameRules: $GameRules, dataConfiguration: $WorldDataConfiguration_);
        constructor(arg0: string, arg1: $GameType_, arg2: boolean, arg3: $Difficulty_, arg4: boolean, arg5: $GameRules, arg6: $WorldDataConfiguration_, arg7: $Lifecycle);
        get dataConfiguration(): $WorldDataConfiguration;
        get lifecycle(): $Lifecycle;
        set worldName(value: string);
    }
    export class $Explosion$BlockInteraction extends $Enum<$Explosion$BlockInteraction> {
        static values(): $Explosion$BlockInteraction[];
        static valueOf(arg0: string): $Explosion$BlockInteraction;
        static TRIGGER_BLOCK: $Explosion$BlockInteraction;
        static DESTROY_WITH_DECAY: $Explosion$BlockInteraction;
        static DESTROY: $Explosion$BlockInteraction;
        static KEEP: $Explosion$BlockInteraction;
    }
    /**
     * Values that may be interpreted as {@link $Explosion$BlockInteraction}.
     */
    export type $Explosion$BlockInteraction_ = "keep" | "destroy" | "destroy_with_decay" | "trigger_block";
    export class $GameRules$Key<T extends $GameRules$Value<T>> implements $RuleKeyExtensions {
        getId(): string;
        getCategory(): $GameRules$Category;
        getDescriptionId(): string;
        fabric_getCustomCategory(): $CustomGameRuleCategory;
        fabric_setCustomCategory(arg0: $CustomGameRuleCategory): void;
        id: string;
        constructor(id: string, category: $GameRules$Category_);
        get category(): $GameRules$Category;
        get descriptionId(): string;
    }
    export interface $Level extends RegistryMarked<RegistryTypes.DimensionTag, RegistryTypes.Dimension> {}
    export class $NaturalSpawner$AfterSpawnCallback {
    }
    export interface $NaturalSpawner$AfterSpawnCallback {
        run(mob: $Mob, chunk: $ChunkAccess): void;
    }
    /**
     * Values that may be interpreted as {@link $NaturalSpawner$AfterSpawnCallback}.
     */
    export type $NaturalSpawner$AfterSpawnCallback_ = ((arg0: $Mob, arg1: $ChunkAccess) => void);
    export class $LevelReader {
    }
    export interface $LevelReader extends $BlockAndTintGetter, $CollisionGetter, $SignalGetter, $BiomeManager$NoiseBiomeSource, $ILevelReaderExtension, $WorldViewMixin, $RenderAttachedBlockView, $ChunkView {
        getMaxLocalRawBrightness(pos: $BlockPos_): number;
        getMaxLocalRawBrightness(pos: $BlockPos_, amount: number): number;
        getChunkForCollisions(chunkX: number, chunkZ: number): $BlockGetter;
        /**
         * Gets the biome at the given quart positions.
         * Note that the coordinates passed into this method are 1/4 the scale of block coordinates.
         */
        getUncachedNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        canSeeSkyFromBelowWater(pos: $BlockPos_): boolean;
        lithium$getLoadedChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        getBlockStatesIfLoaded(aabb: $AABB_): $Stream<$BlockState>;
        getMinBuildHeight(): number;
        /**
         * Checks if any of the blocks within the aabb are liquids.
         */
        containsAnyLiquid(bb: $AABB_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(from: $BlockPos_, to: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromZ: number, toX: number, toZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): boolean;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        getHeight(): number;
        holderLookup<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        /**
         * @deprecated
         */
        hasChunkAt(chunkX: number, chunkZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(pos: $BlockPos_): boolean;
        getChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        getChunk(chunkX: number, chunkZ: number, chunkStatus: $ChunkStatus_): $ChunkAccess;
        getChunk(pos: $BlockPos_): $ChunkAccess;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $ChunkAccess;
        hasBiomes(): boolean;
        /**
         * @deprecated
         */
        hasChunk(chunkX: number, chunkZ: number): boolean;
        isWaterAt(pos: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(pos: $BlockPos_): number;
        isClientSide(): boolean;
        getBiome(pos: $BlockPos_): $Holder<$Biome>;
        getPathfindingCostFromLightLevels(pos: $BlockPos_): number;
        isEmptyBlock(pos: $BlockPos_): boolean;
        getSkyDarken(): number;
        getBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getBiomeFabric(pos: $BlockPos_): $Holder<any>;
        /**
         * Gets the biome at the given quart positions.
         * Note that the coordinates passed into this method are 1/4 the scale of block coordinates.
         */
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        getHeightmapPos(heightmapType: $Heightmap$Types_, pos: $BlockPos_): $BlockPos;
        getBiomeManager(): $BiomeManager;
        /**
         * @deprecated
         */
        getSeaLevel(): number;
        dimensionType(): $DimensionType;
        get minBuildHeight(): number;
        get clientSide(): boolean;
        get skyDarken(): number;
        get biomeManager(): $BiomeManager;
        get seaLevel(): number;
    }
    export class $LevelWriter {
    }
    export interface $LevelWriter {
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null): boolean;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null, recursionLeft: number): boolean;
        /**
         * Sets a block to air, but also plays the sound and particles and can spawn drops
         */
        destroyBlock(pos: $BlockPos_, dropBlock: boolean): boolean;
        /**
         * Sets a block to air, but also plays the sound and particles and can spawn drops
         */
        removeBlock(pos: $BlockPos_, dropBlock: boolean): boolean;
        setBlock(pos: $BlockPos_, state: $BlockState_, flags: number, recursionLeft: number): boolean;
        /**
         * Sets a block state into this world.Flags are as follows:
         * 1 will cause a block update.
         * 2 will send the change to clients.
         * 4 will prevent the block from being re-rendered.
         * 8 will force any re-renders to run on the main thread instead
         * 16 will prevent neighbor reactions (e.g. fences connecting, observers pulsing).
         * 32 will prevent neighbor reactions from spawning drops.
         * 64 will signify the block is being moved.
         * Flags can be OR-ed
         */
        setBlock(pos: $BlockPos_, newState: $BlockState_, flags: number): boolean;
        addFreshEntity(entity: $Entity): boolean;
    }
    export class $NaturalSpawner$ChunkGetter {
    }
    export interface $NaturalSpawner$ChunkGetter {
        query(chunkPos: number, arg1: $Consumer_<$LevelChunk>): void;
    }
    /**
     * Values that may be interpreted as {@link $NaturalSpawner$ChunkGetter}.
     */
    export type $NaturalSpawner$ChunkGetter_ = ((arg0: number, arg1: $Consumer<$LevelChunk>) => void);
    export class $CommonLevelAccessor {
    }
    export interface $CommonLevelAccessor extends $EntityGetter, $LevelReader, $LevelSimulatedRW {
        getEntityCollisions(entity: $Entity | null, collisionBox: $AABB_): $List<$VoxelShape>;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        getHeightmapPos(heightmapType: $Heightmap$Types_, pos: $BlockPos_): $BlockPos;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
    }
    export class $LevelSimulatedRW {
    }
    export interface $LevelSimulatedRW extends $LevelSimulatedReader, $LevelWriter {
    }
    export class $GameRules$Type<T extends $GameRules$Value<T>> {
        createArgument(name: string): $RequiredArgumentBuilder<$CommandSourceStack, never>;
        callVisitor(visitor: $GameRules$GameRuleTypeVisitor, key: $GameRules$Key<T>): void;
        createRule(): T;
        argument: $Supplier<$ArgumentType<never>>;
        callback: $BiConsumer<$MinecraftServer, T>;
        constructor(argument: $Supplier_<$ArgumentType<never>>, _constructor: $Function_<$GameRules$Type<T>, T>, callback: $BiConsumer_<$MinecraftServer, T>, visitorCaller: $GameRules$VisitorCaller_<T>);
    }
    export class $EmptyBlockGetter extends $Enum<$EmptyBlockGetter> implements $BlockGetter {
        static values(): $EmptyBlockGetter[];
        static valueOf(arg0: string): $EmptyBlockGetter;
        getMinBuildHeight(): number;
        getHeight(): number;
        getFluidState(pos: $BlockPos_): $FluidState;
        getBlockState(pos: $BlockPos_): $BlockState;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        getMaxLightLevel(): number;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getLightEmission(pos: $BlockPos_): number;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        clip(failContext: $ClipContext): $BlockHitResult;
        handler$hbg000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        isOutsideBuildHeight(y: number): boolean;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        getSectionIndexFromSectionY(sectionIndex: number): number;
        getSectionYFromSectionIndex(sectionIndex: number): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getSectionIndex(sectionIndex: number): number;
        getMinSection(): number;
        getMaxBuildHeight(): number;
        /**
         * Get the `AuxiliaryLightManager` of the chunk containing the given `BlockPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $BlockPos_): $AuxiliaryLightManager;
        /**
         * Get the `AuxiliaryLightManager` of the chunk at the given `ChunkPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $ChunkPos): $AuxiliaryLightManager;
        /**
         * Retrieves model data for a block at the given position.
         */
        getModelData(pos: $BlockPos_): $ModelData;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        static INSTANCE: $EmptyBlockGetter;
        get minBuildHeight(): number;
        get height(): number;
        get maxLightLevel(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
        get maxBuildHeight(): number;
    }
    /**
     * Values that may be interpreted as {@link $EmptyBlockGetter}.
     */
    export type $EmptyBlockGetter_ = "instance";
    export class $ExplosionDamageCalculator {
        shouldBlockExplode(explosion: $Explosion, reader: $BlockGetter, pos: $BlockPos_, state: $BlockState_, power: number): boolean;
        shouldDamageEntity(explosion: $Explosion, entity: $Entity): boolean;
        getKnockbackMultiplier(entity: $Entity): number;
        getEntityDamageAmount(explosion: $Explosion, entity: $Entity): number;
        getBlockExplosionResistance(explosion: $Explosion, reader: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $FluidState): (number) | undefined;
        constructor();
    }
    export class $GameRules$Category extends $Enum<$GameRules$Category> {
        static values(): $GameRules$Category[];
        static valueOf(arg0: string): $GameRules$Category;
        getDescriptionId(): string;
        static PLAYER: $GameRules$Category;
        static DROPS: $GameRules$Category;
        static MOBS: $GameRules$Category;
        static CHAT: $GameRules$Category;
        static UPDATES: $GameRules$Category;
        static MISC: $GameRules$Category;
        static SPAWNING: $GameRules$Category;
        get descriptionId(): string;
    }
    /**
     * Values that may be interpreted as {@link $GameRules$Category}.
     */
    export type $GameRules$Category_ = "player" | "mobs" | "spawning" | "drops" | "updates" | "chat" | "misc";
    export class $WorldGenLevel {
    }
    export interface $WorldGenLevel extends $ServerLevelAccessor {
        /**
         * Gets the random world seed.
         */
        getSeed(): number;
        setCurrentlyGenerating(currentlyGenerating: $Supplier_<string> | null): void;
        ensureCanWrite(pos: $BlockPos_): boolean;
        get seed(): number;
        set currentlyGenerating(value: $Supplier_<string> | null);
    }
    /**
     * @param paramA Different for each blockID
     */
    export class $BlockEventData extends $Record {
        pos(): $BlockPos;
        block(): $Block;
        paramB(): number;
        paramA(): number;
        constructor(pos: $BlockPos_, block: $Block_, paramA: number, paramB: number);
    }
    /**
     * Values that may be interpreted as {@link $BlockEventData}.
     */
    export type $BlockEventData_ = { pos?: $BlockPos_, paramB?: number, paramA?: number, block?: $Block_,  } | [pos?: $BlockPos_, paramB?: number, paramA?: number, block?: $Block_, ];
    export class $FoliageColor {
        static get(temperature: number, arg1: number): number;
        static init(foliageBuffer: number[]): void;
        static getDefaultColor(): number;
        static getEvergreenColor(): number;
        static getMangroveColor(): number;
        static getBirchColor(): number;
        static pixels: number[];
        constructor();
        static get defaultColor(): number;
        static get evergreenColor(): number;
        static get mangroveColor(): number;
        static get birchColor(): number;
    }
    export class $Level extends $AttachmentHolder implements $LevelAccessor, $AutoCloseable, $ILevelExtension, $ChunkRandomSource, $LevelAccessor$2, $BlockEntityGetter, $LithiumData, $LevelHeightAccessor, $LevelExtension$1, $LoadedChunksCache, $LevelKJS, $LevelExtension, $LevelAccessor$1 {
        lithium$getLoadedExistingBlockEntity(pos: $BlockPos_): $BlockEntity;
        getProfiler(): $ProfilerFiller;
        /**
         * If on MP, sends a quitting packet.
         */
        close(): void;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        isDebug(): boolean;
        isLoaded(pos: $BlockPos_): boolean;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        noSave(): boolean;
        /**
         * Returns the Entity with the given ID, or null if it doesn't exist in this Level.
         */
        getEntity(id: number): $Entity;
        /**
         * If on MP, sends a quitting packet.
         */
        disconnect(): void;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, bounds: $AABB_, predicate: $Predicate_<T>): $List<T>;
        /**
         * Gets all entities within the specified AABB excluding the one passed into it.
         */
        getEntities(entity: $Entity | null, boundingBox: $AABB_, predicate: $Predicate_<$Entity>): $List<$Entity>;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, bounds: $AABB_, predicate: $Predicate_<T>, output: $List_<T>, maxResults: number): void;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, bounds: $AABB_, predicate: $Predicate_<T>, output: $List_<T>): void;
        shouldTickDeath(entity: $Entity): boolean;
        playSeededSound(player: $Player | null, x: number, arg2: number, y: number, arg4: $SoundEvent_, z: $SoundSource_, arg6: number, sound: number, category: number): void;
        playSeededSound(player: $Player | null, x: number, arg2: number, y: number, arg4: $Holder_<$SoundEvent>, z: $SoundSource_, arg6: number, sound: number, category: number): void;
        playSeededSound(player: $Player | null, entity: $Entity, sound: $Holder_<$SoundEvent>, category: $SoundSource_, volume: number, pitch: number, seed: number): void;
        playLocalSound(entity: $Entity, sound: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number): void;
        playLocalSound(x: number, arg1: number, y: number, arg3: $SoundEvent_, z: $SoundSource_, arg5: number, sound: number, category: boolean): void;
        playLocalSound(pos: $BlockPos_, sound: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number, distanceDelay: boolean): void;
        addParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): void;
        addParticle(particleData: $ParticleOptions_, ignoreRange: boolean, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): void;
        getEntityByUUID(id: $UUID_): $Entity;
        /**
         * Returns the Entity with the given ID, or null if it doesn't exist in this Level.
         */
        getEntityByNetworkID(id: number): $Entity;
        fabric_getLoadedChunks(): $Set<any>;
        /**
         * Increases the max entity radius, this is safe to call with any value.
         * The setter will verify the input value is larger then the current setting.
         */
        increaseMaxEntityRadius(value: number): number;
        addDestroyBlockEffect(pos: $BlockPos_, state: $BlockState_): void;
        addFreshBlockEntities(arg0: $Collection_<$BlockEntity>): void;
        getProfilerSupplier(): $Supplier<$ProfilerFiller>;
        addBlockEntityTicker(ticker: $TickingBlockEntity): void;
        /**
         * If on MP, sends a quitting packet.
         */
        updateSkyBrightness(): void;
        fabric_markUnloaded(arg0: $LevelChunk): void;
        destroyBlockProgress(breakerId: number, pos: $BlockPos_, progress: number): void;
        loadedAndEntityCanStandOn(pos: $BlockPos_, entity: $Entity): boolean;
        /**
         * Returns the name of the current chunk provider, by calling chunkprovider.makeString()
         */
        gatherChunkSourceStats(): string;
        neighborChanged(pos: $BlockPos_, block: $Block_, fromPos: $BlockPos_): void;
        neighborChanged(state: $BlockState_, pos: $BlockPos_, block: $Block_, fromPos: $BlockPos_, isMoving: boolean): void;
        removeBlockEntity(pos: $BlockPos_): void;
        getRandom(): $RandomSource;
        getDimensionKey(): $ResourceKey<$Level>;
        getChunkForCollisions(chunkX: number, chunkZ: number): $BlockGetter;
        neighborShapeChanged(direction: $Direction_, queried: $BlockState_, pos: $BlockPos_, offsetPos: $BlockPos_, flags: number, recursionLevel: number): void;
        static isInSpawnableBounds(pos: $BlockPos_): boolean;
        broadcastDamageEvent(entity: $Entity, damageSource: $DamageSource_): void;
        getSharedSpawnAngle(): number;
        dimensionTypeRegistration(): $Holder<$DimensionType>;
        findFreePosition(entity: $Entity, shape: $VoxelShape, pos: $Vec3_, x: number, arg4: number, y: number): $Optional<any>;
        mayInteract(player: $Player, pos: $BlockPos_): boolean;
        sable$getJOMLSink(): $LevelReusedVectors;
        isRainingAt(pos: $BlockPos_): boolean;
        getSharedSpawnPos(): $BlockPos;
        explode(source: $Entity | null, x: number, arg2: number, y: number, arg4: number, z: boolean, arg6: $Level$ExplosionInteraction_): $Explosion;
        explode(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, x: number, arg4: number, y: number, arg6: number, z: boolean, arg8: $Level$ExplosionInteraction_, radius: boolean, fire: $ParticleOptions_, explosionInteraction: $ParticleOptions_, spawnParticles: $Holder_<$SoundEvent>): $Explosion;
        explode(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, x: number, arg4: number, y: number, arg6: number, z: boolean, arg8: $Level$ExplosionInteraction_, radius: $ParticleOptions_, fire: $ParticleOptions_, explosionInteraction: $Holder_<$SoundEvent>): $Explosion;
        explode(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, x: number, arg4: number, y: number, arg6: number, z: boolean, arg8: $Level$ExplosionInteraction_): $Explosion;
        explode(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, pos: $Vec3_, radius: number, fire: boolean, explosionInteraction: $Level$ExplosionInteraction_): $Explosion;
        explode(source: $Entity | null, x: number, arg2: number, y: number, arg4: number, z: $Level$ExplosionInteraction_): $Explosion;
        isInWorldBounds(pos: $BlockPos_): boolean;
        markAndNotifyBlock(arg0: $BlockPos_, arg1: $LevelChunk | null, arg2: $BlockState_, arg3: $BlockState_, arg4: number, arg5: number): void;
        setBlocksDirty(pos: $BlockPos_, blockState: $BlockState_, newState: $BlockState_): void;
        /**
         * Flags are as in setBlockState
         */
        sendBlockUpdated(pos: $BlockPos_, oldState: $BlockState_, newState: $BlockState_, flags: number): void;
        updateNeighborsAt(pos: $BlockPos_, block: $Block_): void;
        setSkyFlashTime(timeFlash: number): void;
        advanceDaytime(): number;
        /**
         * First boolean for hostile mobs and second for peaceful mobs
         */
        setSpawnSettings(hostile: boolean, peaceful: boolean): void;
        getFreeMapId(): $MapId;
        guardEntityTick<T extends $Entity>(consumerEntity: $Consumer_<T>, entity: T): void;
        /**
         * Sets the strength of the rain.
         */
        setThunderLevel(strength: number): void;
        /**
         * Sets the strength of the rain.
         */
        setDayTimePerTick(strength: number): void;
        setBlockEntity(blockEntity: $BlockEntity): void;
        sendPacketToServer(packet: $Packet<never>): void;
        /**
         * The maximum radius to scan for entities when trying to check bounding boxes. Vanilla's default is
         * 2.0D But mods that add larger entities may increase this.
         */
        getMaxEntityRadius(): number;
        blockEntityChanged(pos: $BlockPos_): void;
        /**
         * Sets the strength of the rain.
         */
        setDayTimeFraction(strength: number): void;
        /**
         * Sets the strength of the rain.
         */
        setRainLevel(strength: number): void;
        createFireworks(x: number, arg1: number, y: number, arg3: number, z: number, arg5: number, xSpeed: $List_<$FireworkExplosion_>): void;
        /**
         * If on MP, sends a quitting packet.
         */
        prepareWeather(): void;
        globalLevelEvent(breakerId: number, pos: $BlockPos_, progress: number): void;
        potionBrewing(): $PotionBrewing;
        getDayTimePerTick(): number;
        shouldTickBlocksAt(chunkPos: number): boolean;
        shouldTickBlocksAt(pos: $BlockPos_): boolean;
        lithium$getData(): $LithiumData$Data;
        getBlockRandomPos(x: number, y: number, z: number, yMask: number): $BlockPos;
        fabric_markLoaded(arg0: $LevelChunk): void;
        /**
         * Returns rain strength.
         */
        getThunderLevel(delta: number): number;
        /**
         * Returns rain strength.
         */
        getSunAngle(delta: number): number;
        /**
         * Returns rain strength.
         */
        getRainLevel(delta: number): number;
        /**
         * If on MP, sends a quitting packet.
         */
        tickBlockEntities(): void;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        isThundering(): boolean;
        isStateAtPosition(pos: $BlockPos_, predicate: $Predicate_<$BlockState>): boolean;
        isFluidAtPosition(pos: $BlockPos_, predicate: $Predicate_<$FluidState>): boolean;
        nextSubTickCount(): number;
        getMcEntities(): $Iterable<any>;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        playSound(entity: $Entity | null, pos: $BlockPos_, sound: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number): void;
        playSound(player: $Player | null, x: number, arg2: number, y: number, arg4: $SoundEvent_, z: $SoundSource_, arg6: number, sound: number): void;
        playSound(player: $Player | null, entity: $Entity, event: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number): void;
        /**
         * Plays a sound. On the server, the sound is broadcast to all nearby *except* the given player. On the client, the sound only plays if the given player is the client player. Thus, this method is intended to be called from code running on both sides. The client plays it locally and the server plays it for everyone else.
         */
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number): void;
        playSound(player: $Player | null, x: number, arg2: number, y: number, arg4: $Holder_<$SoundEvent>, z: $SoundSource_, arg6: number, sound: number): void;
        playSound(player: $Player | null, x: number, arg2: number, y: number, arg4: $SoundEvent_, z: $SoundSource_): void;
        getFluidState(pos: $BlockPos_): $FluidState;
        onBlockStateChange(pos: $BlockPos_, blockState: $BlockState_, newState: $BlockState_): void;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null, recursionLeft: number): boolean;
        removeBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $LevelData;
        getBlockState(pos: $BlockPos_): $BlockState;
        getWorldBorder(): $WorldBorder;
        /**
         * Adds some basic stats of the world to the given crash report.
         */
        fillReportDetails(report: $CrashReport): $CrashReportCategory;
        tickRateManager(): $TickRateManager;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        registryAccess(): $RegistryAccess;
        getTime(): number;
        getRecipeManager(): $RecipeManager;
        noCollision(entity: $Entity, boundingBox: $AABB_): boolean;
        getScoreboard(): $Scoreboard;
        getData(): $AttachedData<any>;
        getServer(): $MinecraftServer;
        addAlwaysVisibleParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): void;
        addAlwaysVisibleParticle(particleData: $ParticleOptions_, ignoreRange: boolean, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): void;
        getDayTime(): number;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        isDay(): boolean;
        getChunkAt(pos: $BlockPos_): $LevelChunk;
        setBlock(pos: $BlockPos_, state: $BlockState_, flags: number, recursionLeft: number): boolean;
        /**
         * Sets a block state into this world.Flags are as follows:
         * 1 will notify neighboring blocks through neighborChanged updates.
         * 2 will send the change to clients.
         * 4 will prevent the block from being re-rendered.
         * 8 will force any re-renders to run on the main thread instead
         * 16 will prevent neighbor reactions (e.g. fences connecting, observers pulsing).
         * 32 will prevent neighbor reactions from spawning drops.
         * 64 will signify the block is being moved.
         * Flags can be OR-ed
         */
        setBlock(pos: $BlockPos_, newState: $BlockState_, flags: number): boolean;
        getChunk(chunkX: number, chunkZ: number): $LevelChunk;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $ChunkAccess;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        isRaining(): boolean;
        getDayTimeFraction(): number;
        getCurrentDifficultyAt(pos: $BlockPos_): $DifficultyInstance;
        /**
         * Sends a `ClientboundEntityEventPacket` to all tracked players of that entity.
         */
        broadcastEntityEvent(entity: $Entity, state: number): void;
        updateNeighbourForOutputSignal(pos: $BlockPos_, block: $Block_): void;
        loadedAndEntityCanStandOnFace(pos: $BlockPos_, entity: $Entity, direction: $Direction_): boolean;
        updateNeighborsAtExceptFromFacing(pos: $BlockPos_, blockType: $Block_, skipSide: $Direction_): void;
        lithium$getRandomPosInChunk(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $BlockPos$MutableBlockPos): void;
        flywheel$getAllLoadedEntities(): $Iterable<any>;
        damageSources(): $DamageSources;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        isClientSide(): boolean;
        /**
         * Gets the GameRules instance.
         */
        getGameRules(): $GameRules;
        handler$fpn000$sliceanddice$isRainingAt(arg0: $BlockPos_, arg1: $CallbackInfoReturnable<any>): void;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        isNight(): boolean;
        getMapData(mapId: $MapId_): $MapItemSavedData;
        setMapData(mapId: $MapId_, mapData: $MapItemSavedData): void;
        blockEvent(pos: $BlockPos_, block: $Block_, eventID: number, eventParam: number): void;
        getSkyDarken(): number;
        getBiomeManager(): $BiomeManager;
        getSeaLevel(): number;
        getLightEngine(): $LevelLightEngine;
        /**
         * Convenience method to update the block on both the client and server
         */
        setBlockAndUpdate(pos: $BlockPos_, state: $BlockState_): boolean;
        dimensionType(): $DimensionType;
        blockUpdated(pos: $BlockPos_, block: $Block_): void;
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, source: $SoundSource_): void;
        getDifficulty(): $Difficulty;
        levelEvent(breakerId: number, pos: $BlockPos_, progress: number): void;
        hasChunk(x: number, z: number): boolean;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $Vec3_): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_): void;
        gameEvent(gameEvent: $ResourceKey_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        dayTime(): number;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number): void;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number, priority: $TickPriority_): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number, priority: $TickPriority_): void;
        /**
         * Returns Component which looks up the matching value for #getDescriptionKey(),
         * falling back to the registry name if no translation exists.
         */
        getDescription(): $Component;
        getCapability<T>(arg0: $BlockCapability<T, void>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity): T;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: C): T;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $BlockPos_, arg2: C): T;
        getCapability<T>(arg0: $BlockCapability<T, void>, arg1: $BlockPos_): T;
        invalidateCapabilities(pos: $BlockPos_): void;
        /**
         * Notify all listeners that the capabilities at all the positions in a chunk might have changed.
         * This includes new capabilities becoming available.
         * 
         * This method will only do something on `ServerLevel`s,
         * but it is safe to call on any `Level`, without the need for an `instanceof` check.
         */
        invalidateCapabilities(pos: $ChunkPos): void;
        /**
         * Retrieves the model data manager for the given level. May be null on a server level.
         * 
         * For model data retrieval, prefer calling `IBlockGetterExtension#getModelData(BlockPos)` rather than this method,
         * as it works on more than just a level.
         */
        getModelDataManager(): $ModelDataManager;
        /**
         * Returns the name of the current chunk provider, by calling chunkprovider.makeString()
         */
        getDescriptionKey(): string;
        /**
         * All part entities in this world. Used when collecting entities in an AABB to fix parts being
         * ignored whose parent entity is in a chunk that does not intersect with the AABB.
         */
        getPartEntities(): $Collection<$PartEntity<never>>;
        isOutsideBuildHeight(y: number): boolean;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        getSectionIndexFromSectionY(sectionIndex: number): number;
        getSectionYFromSectionIndex(sectionIndex: number): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getSectionIndex(sectionIndex: number): number;
        getMinSection(): number;
        getMaxBuildHeight(): number;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setStatusMessage(message: $Component_): void;
        getSide(): $ScriptType;
        explode(x: number, y: number, z: number, properties: $ExplosionProperties_): $Explosion;
        createEntity(type: $EntityType_<never>): $Entity;
        spawnEntity(type: $EntityType_<never>, callback: $Consumer_<$Entity>): void;
        setTime(time: number): void;
        spawnFireworks(x: number, y: number, z: number, fireworks: $Fireworks_, lifetime: number): void;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean, cause: $ServerPlayer): void;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        isOverworld(): boolean;
        getDimension(): $ResourceLocation;
        getBlock(x: number, y: number, z: number): $LevelBlock;
        getBlock(pos: $BlockPos_): $LevelBlock;
        getBlock(entity: $BlockEntity): $LevelBlock;
        /**
         * Each player in the level (world) runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        /**
         * Returns Component which looks up the matching value for #getDescriptionKey(),
         * falling back to the registry name if no translation exists.
         */
        getName(): $Component;
        self(): $EntityGetter;
        tell(message: $Component_): void;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntityCollisions(entity: $Entity | null, area: $AABB_): $List<$VoxelShape>;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        getHeightmapPos(heightmapType: $Heightmap$Types_, pos: $BlockPos_): $BlockPos;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
        /**
         * Returns rain strength.
         */
        getTimeOfDay(delta: number): number;
        getMoonBrightness(): number;
        getMoonPhase(): number;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntities(entity: $Entity | null, area: $AABB_): $List<$Entity>;
        hasNearbyAlivePlayer(x: number, arg1: number, y: number, arg3: number): boolean;
        getNearestEntity<T extends $LivingEntity>(entities: $List_<T>, predicate: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number): T;
        getNearestEntity<T extends $LivingEntity>(entityClazz: $Class<T>, conditions: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number, arg6: $AABB_): T;
        getNearbyEntities<T extends $LivingEntity>(entityClazz: $Class<T>, entityPredicate: $TargetingConditions, entity: $LivingEntity, area: $AABB_): $List<T>;
        getPlayerByUUID(uniqueId: $UUID_): $Player;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: $Predicate_<$Entity> | null): $Player;
        getNearestPlayer(entity: $Entity, distance: number): $Player;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: boolean): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity, x: number, arg3: number, y: number): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity): $Player;
        getNearestPlayer(predicate: $TargetingConditions, x: number, arg2: number, y: number): $Player;
        getNearbyPlayers(predicate: $TargetingConditions, target: $LivingEntity, area: $AABB_): $List<$Player>;
        getEntitiesOfClass<T extends $Entity>(entityClass: $Class<T>, area: $AABB_): $List<T>;
        getEntitiesOfClass<T extends $Entity>(clazz: $Class<T>, area: $AABB_, filter: $Predicate_<T>): $List<T>;
        wrapOperation$fin000$asyncparticles$wrapPlayerGetUUID(player: $Player, original: $Operation_<any>, isClientLevel: $LocalBooleanRef): $UUID;
        wrapOperation$fin000$asyncparticles$wrapPlayerGet(list: $List_<any>, index: number, original: $Operation_<any>, isClientLevel: $LocalBooleanRef): $Object;
        handler$fin000$asyncparticles$injectHead(cir: $CallbackInfoReturnable<any>, isClientLevel: $LocalBooleanRef): void;
        getMaxLocalRawBrightness(pos: $BlockPos_): number;
        getMaxLocalRawBrightness(pos: $BlockPos_, amount: number): number;
        canSeeSkyFromBelowWater(pos: $BlockPos_): boolean;
        lithium$getLoadedChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        getBlockStatesIfLoaded(aabb: $AABB_): $Stream<$BlockState>;
        containsAnyLiquid(collisionBox: $AABB_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(from: $BlockPos_, to: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromZ: number, toX: number, toZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): boolean;
        holderLookup<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        /**
         * @deprecated
         */
        hasChunkAt(x: number, z: number): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(pos: $BlockPos_): boolean;
        getChunk(chunkX: number, chunkZ: number, chunkStatus: $ChunkStatus_): $ChunkAccess;
        getChunk(pos: $BlockPos_): $ChunkAccess;
        /**
         * Checks whether its daytime by seeing if the light subtracted from the skylight is less than 4. Always returns true on the client because vanilla has no need for it on the client, therefore it is not synced to the client
         */
        hasBiomes(): boolean;
        isWaterAt(pos: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(pos: $BlockPos_): number;
        getBiome(pos: $BlockPos_): $Holder<$Biome>;
        getPathfindingCostFromLightLevels(pos: $BlockPos_): number;
        isEmptyBlock(pos: $BlockPos_): boolean;
        getBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getBiomeFabric(pos: $BlockPos_): $Holder<any>;
        /**
         * Gets the biome at the given quart positions.
         * Note that the coordinates passed into this method are 1/4 the scale of block coordinates.
         */
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        /**
         * Returns Component which looks up the matching value for #getDescriptionKey(),
         * falling back to the registry name if no translation exists.
         */
        getDisplayName(): $Component;
        getEntities(): $EntityArrayList;
        canSeeSky(pos: $BlockPos_): boolean;
        getRawBrightness(pos: $BlockPos_, amount: number): number;
        getBrightness(lightType: $LightLayer_, blockPos: $BlockPos_): number;
        getCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        findSupportingBlock(entity: $Entity, box: $AABB_): ($BlockPos) | undefined;
        noBlockCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        getBlockCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        noCollision(collisionBox: $AABB_): boolean;
        noCollision(entity: $Entity): boolean;
        collidesWithSuffocatingBlock(entity: $Entity | null, boundingBox: $AABB_): boolean;
        isUnobstructed(state: $BlockState_, pos: $BlockPos_, context: $CollisionContext): boolean;
        isUnobstructed(entity: $Entity): boolean;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getDirectSignal(pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Returns the control signal emitted from the given position in the given direction.
         * If `diodesOnly` is `true`, this method returns the direct signal emitted if
         * and only if this position is occupied by a diode (i.e. a repeater or comparator).
         * Otherwise, if this position is occupied by a
         * redstone block,
         * this method will return the redstone signal emitted by it. If not, this method will
         * return the direct signal emitted from this position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getControlInputSignal(pos: $BlockPos_, direction: $Direction_, diodesOnly: boolean): number;
        getBestNeighborSignal(pos: $BlockPos_): number;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getSignal(pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Returns whether a redstone signal is emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        hasSignal(pos: $BlockPos_, direction: $Direction_): boolean;
        getDirectSignalTo(pos: $BlockPos_): number;
        hasNeighborSignal(pos: $BlockPos_): boolean;
        /**
         * Shortcut method to get an optional holder from a ResourceKey.
         * see `IHolderLookupProviderExtension`
         */
        holder<T>(key: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         * see `IHolderLookupProviderExtension`
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        isAreaLoaded(center: $BlockPos_, range: number): boolean;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null): boolean;
        destroyBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        addFreshEntity(entity: $Entity): boolean;
        getMaxLightLevel(): number;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getLightEmission(pos: $BlockPos_): number;
        /**
         * Checks if there's block between `from` and `to` of context.
         * This uses the collision shape of provided block.
         */
        clip(context: $ClipContext): $BlockHitResult;
        handler$hbg000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        getBlockStates(aabb: $AABB_): $Stream<$BlockState>;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        /**
         * Computes the shade for a given normal.
         * Alternate version of the vanilla method taking in a `Direction`.
         */
        getShade(normalX: number, normalY: number, normalZ: number, shade: boolean): number;
        /**
         * Get the `AuxiliaryLightManager` of the chunk containing the given `BlockPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $BlockPos_): $AuxiliaryLightManager;
        /**
         * Get the `AuxiliaryLightManager` of the chunk at the given `ChunkPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $ChunkPos): $AuxiliaryLightManager;
        /**
         * Retrieves model data for a block at the given position.
         */
        getModelData(pos: $BlockPos_): $ModelData;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        invokeGetEntities(): $LevelEntityGetter<$Entity>;
        getThread(): $Thread;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        pendingBlockEntityTickers: $List<$TickingBlockEntity>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(levelData: $WritableLevelData, dimension: $ResourceKey_<$Level>, registryAccess: $RegistryAccess, dimensionTypeRegistration: $Holder_<$DimensionType>, profiler: $Supplier_<$ProfilerFiller>, isClientSide: boolean, isDebug: boolean, biomeZoomSeed: number, arg8: number);
        get profiler(): $ProfilerFiller;
        get debug(): boolean;
        get profilerSupplier(): $Supplier<$ProfilerFiller>;
        get dimensionKey(): $ResourceKey<$Level>;
        get sharedSpawnAngle(): number;
        get sharedSpawnPos(): $BlockPos;
        set skyFlashTime(value: number);
        get freeMapId(): $MapId;
        get maxEntityRadius(): number;
        get thundering(): boolean;
        get mcEntities(): $Iterable<any>;
        get worldBorder(): $WorldBorder;
        get recipeManager(): $RecipeManager;
        get scoreboard(): $Scoreboard;
        get data(): $AttachedData<any>;
        get server(): $MinecraftServer;
        get day(): boolean;
        get raining(): boolean;
        get clientSide(): boolean;
        get gameRules(): $GameRules;
        get night(): boolean;
        get skyDarken(): number;
        get biomeManager(): $BiomeManager;
        get seaLevel(): number;
        get lightEngine(): $LevelLightEngine;
        get difficulty(): $Difficulty;
        get description(): $Component;
        get modelDataManager(): $ModelDataManager;
        get descriptionKey(): string;
        get partEntities(): $Collection<$PartEntity<never>>;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
        get maxBuildHeight(): number;
        set activePostShader(value: $ResourceLocation_);
        set statusMessage(value: $Component_);
        get side(): $ScriptType;
        get overworld(): boolean;
        get dimension(): $ResourceLocation;
        get name(): $Component;
        get moonBrightness(): number;
        get moonPhase(): number;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get displayName(): $Component;
        get maxLightLevel(): number;
        get thread(): $Thread;
    }
    /**
     * Values that may be interpreted as {@link $Level}.
     */
    export type $Level_ = RegistryTypes.Dimension;
    export class $SpawnData extends $Record {
        equipment(): ($EquipmentTable) | undefined;
        getCustomSpawnRules(): ($SpawnData$CustomSpawnRules) | undefined;
        getEquipment(): ($EquipmentTable) | undefined;
        getEntityToSpawn(): $CompoundTag;
        entityToSpawn(): $CompoundTag;
        customSpawnRules(): ($SpawnData$CustomSpawnRules) | undefined;
        static CODEC: $Codec<$SpawnData>;
        static ENTITY_TAG: string;
        static LIST_CODEC: $Codec<$SimpleWeightedRandomList<$SpawnData>>;
        constructor();
        constructor(entityToSpawn: $CompoundTag_, customSpawnRules: ($SpawnData$CustomSpawnRules_) | undefined, equipment: ($EquipmentTable_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $SpawnData}.
     */
    export type $SpawnData_ = { equipment?: ($EquipmentTable_) | undefined, entityToSpawn?: $CompoundTag_, customSpawnRules?: ($SpawnData$CustomSpawnRules_) | undefined,  } | [equipment?: ($EquipmentTable_) | undefined, entityToSpawn?: $CompoundTag_, customSpawnRules?: ($SpawnData$CustomSpawnRules_) | undefined, ];
    export class $ClipBlockStateContext {
        getFrom(): $Vec3;
        getTo(): $Vec3;
        isTargetBlock(): $Predicate<$BlockState>;
        constructor(from: $Vec3_, to: $Vec3_, block: $Predicate_<$BlockState>);
        get from(): $Vec3;
        get to(): $Vec3;
        get targetBlock(): $Predicate<$BlockState>;
    }
    export class $LocalMobCapCalculator$MobCounts {
    }
    export class $GameRules$GameRuleTypeVisitor {
    }
    export interface $GameRules$GameRuleTypeVisitor {
        visit<T extends $GameRules$Value<T>>(key: $GameRules$Key<T>, type: $GameRules$Type<T>): void;
        visitBoolean(key: $GameRules$Key<$GameRules$BooleanValue>, type: $GameRules$Type<$GameRules$BooleanValue>): void;
        visitInteger(key: $GameRules$Key<$GameRules$IntegerValue>, type: $GameRules$Type<$GameRules$IntegerValue>): void;
    }
    export class $CustomSpawner {
    }
    export interface $CustomSpawner {
        tick(level: $ServerLevel, spawnEnemies: boolean, spawnFriendlies: boolean): number;
    }
    /**
     * Values that may be interpreted as {@link $CustomSpawner}.
     */
    export type $CustomSpawner_ = ((arg0: $ServerLevel, arg1: boolean, arg2: boolean) => number);
    export class $SpawnData$CustomSpawnRules extends $Record {
        isValidPosition(pos: $BlockPos_, level: $ServerLevel): boolean;
        skyLightLimit(): $InclusiveRange<number>;
        blockLightLimit(): $InclusiveRange<number>;
        static CODEC: $Codec<$SpawnData$CustomSpawnRules>;
        constructor(arg0: $InclusiveRange_<number>, arg1: $InclusiveRange_<number>);
    }
    /**
     * Values that may be interpreted as {@link $SpawnData$CustomSpawnRules}.
     */
    export type $SpawnData$CustomSpawnRules_ = { blockLightLimit?: $InclusiveRange_<number>, skyLightLimit?: $InclusiveRange_<number>,  } | [blockLightLimit?: $InclusiveRange_<number>, skyLightLimit?: $InclusiveRange_<number>, ];
    export class $BaseCommandBlock implements $CommandSource {
        getPosition(): $Vec3;
        /**
         * Returns the lastOutput.
         */
        getName(): $Component;
        load(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        save(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): $CompoundTag;
        isValid(): boolean;
        getLevel(): $ServerLevel;
        /**
         * Returns the `successCount` int.
         */
        getSuccessCount(): number;
        performCommand(level: $Level_): boolean;
        setTrackOutput(shouldTrackOutput: boolean): void;
        setSuccessCount(successCount: number): void;
        /**
         * Returns the lastOutput.
         */
        getCustomName(): $Component;
        setCustomName(component: $Component_ | null): void;
        createCommandSourceStack(): $CommandSourceStack;
        acceptsFailure(): boolean;
        acceptsSuccess(): boolean;
        shouldInformAdmins(): boolean;
        onUpdated(): void;
        /**
         * Sets the command.
         */
        setCommand(command: string): void;
        sendSystemMessage(component: $Component_): void;
        usedBy(player: $Player): $InteractionResult;
        /**
         * Returns the command of the command block.
         */
        getCommand(): string;
        setLastOutput(component: $Component_ | null): void;
        /**
         * Returns the lastOutput.
         */
        getLastOutput(): $Component;
        isTrackOutput(): boolean;
        alwaysAccepts(): boolean;
        constructor();
        get position(): $Vec3;
        get name(): $Component;
        get valid(): boolean;
        get level(): $ServerLevel;
    }
    export class $ClipContext$ShapeGetter {
    }
    export interface $ClipContext$ShapeGetter {
        get(state: $BlockState_, block: $BlockGetter, pos: $BlockPos_, collisionContext: $CollisionContext): $VoxelShape;
    }
    /**
     * Values that may be interpreted as {@link $ClipContext$ShapeGetter}.
     */
    export type $ClipContext$ShapeGetter_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: $CollisionContext) => $VoxelShape);
    export class $BaseSpawner implements $IOwnedSpawner {
        load(level: $Level_ | null, pos: $BlockPos_, tag: $CompoundTag_): void;
        save(tag: $CompoundTag_): $CompoundTag;
        /**
         * Returns the block entity or entity which owns this spawner object.
         * 
         * For a `BaseSpawner`, this is the `MobSpawnerBlockEntity` or `MinecartSpawner`.
         * 
         * For a `TrialSpawner`, this is the `TrialSpawnerBlockEntity`.
         */
        getOwner(): $Either<$BlockEntity, $Entity>;
        setEntityId(type: $EntityType_<never>, level: $Level_ | null, random: $RandomSource, pos: $BlockPos_): void;
        onEventTriggered(level: $Level_, id: number): boolean;
        broadcastEvent(level: $Level_, pos: $BlockPos_, eventId: number): void;
        setNextSpawnData(level: $Level_ | null, pos: $BlockPos_, nextSpawnData: $SpawnData_): void;
        getoSpin(): number;
        getOrCreateDisplayEntity(level: $Level_, pos: $BlockPos_): $Entity;
        serverTick(serverLevel: $ServerLevel, pos: $BlockPos_): void;
        clientTick(level: $Level_, pos: $BlockPos_): void;
        getSpin(): number;
        static SPAWN_DATA_TAG: string;
        spawnPotentials: $SimpleWeightedRandomList<$SpawnData>;
        nextSpawnData: $SpawnData;
        constructor();
        get owner(): $Either<$BlockEntity, $Entity>;
        get oSpin(): number;
        get spin(): number;
    }
    export class $NaturalSpawner {
        static createState(spawnableChunkCount: number, entities: $Iterable_<$Entity>, chunkGetter: $NaturalSpawner$ChunkGetter_, calculator: $LocalMobCapCalculator): $NaturalSpawner$SpawnState;
        static isValidEmptySpawnBlock(block: $BlockGetter, pos: $BlockPos_, blockState: $BlockState_, fluidState: $FluidState, entityType: $EntityType_<never>): boolean;
        static spawnMobsForChunkGeneration(levelAccessor: $ServerLevelAccessor, biome: $Holder_<$Biome>, chunkPos: $ChunkPos, random: $RandomSource): void;
        static spawnForChunk(level: $ServerLevel, chunk: $LevelChunk, spawnState: $NaturalSpawner$SpawnState, spawnFriendlies: boolean, spawnMonsters: boolean, forcedDespawn: boolean): void;
        static getRoughBiome(pos: $BlockPos_, chunk: $ChunkAccess): $Biome;
        static spawnCategoryForPosition(category: $MobCategory_, level: $ServerLevel, chunk: $ChunkAccess, pos: $BlockPos_, filter: $NaturalSpawner$SpawnPredicate_, callback: $NaturalSpawner$AfterSpawnCallback_): void;
        static spawnCategoryForPosition(category: $MobCategory_, level: $ServerLevel, pos: $BlockPos_): void;
        static spawnCategoryForChunk(category: $MobCategory_, level: $ServerLevel, chunk: $LevelChunk, filter: $NaturalSpawner$SpawnPredicate_, callback: $NaturalSpawner$AfterSpawnCallback_): void;
        static isInNetherFortressBounds(pos: $BlockPos_, level: $ServerLevel, category: $MobCategory_, structureManager: $StructureManager): boolean;
        static SPAWN_DISTANCE_BLOCK: number;
        static MAGIC_NUMBER: number;
        static SPAWN_DISTANCE_CHUNK: number;
    }
    export class $DataPackConfig {
        addModPacks(arg0: $List_<string>): void;
        getEnabled(): $List<string>;
        getDisabled(): $List<string>;
        static CODEC: $Codec<$DataPackConfig>;
        static DEFAULT: $DataPackConfig;
        constructor(enabled: $List_<string>, disabled: $List_<string>);
        get enabled(): $List<string>;
        get disabled(): $List<string>;
    }
    export class $CollisionGetter {
    }
    export interface $CollisionGetter extends $BlockGetter {
        getCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        getChunkForCollisions(chunkX: number, chunkZ: number): $BlockGetter;
        getEntityCollisions(entity: $Entity | null, collisionBox: $AABB_): $List<$VoxelShape>;
        findSupportingBlock(entity: $Entity, box: $AABB_): ($BlockPos) | undefined;
        findFreePosition(entity: $Entity | null, shape: $VoxelShape, pos: $Vec3_, x: number, arg4: number, y: number): ($Vec3) | undefined;
        noBlockCollision(entity: $Entity | null, box: $AABB_): boolean;
        getBlockCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        getWorldBorder(): $WorldBorder;
        noCollision(collisionBox: $AABB_): boolean;
        noCollision(entity: $Entity): boolean;
        noCollision(entity: $Entity | null, box: $AABB_): boolean;
        collidesWithSuffocatingBlock(entity: $Entity | null, box: $AABB_): boolean;
        isUnobstructed(state: $BlockState_, pos: $BlockPos_, context: $CollisionContext): boolean;
        isUnobstructed(entity: $Entity): boolean;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
        get worldBorder(): $WorldBorder;
    }
    export class $GameRules$BooleanValue extends $GameRules$Value<$GameRules$BooleanValue> implements $GameRulesBooleanValueAccessor {
        get(): boolean;
        set(value: boolean, server: $MinecraftServer | null): void;
        copy(): $GameRules$BooleanValue;
        static create(defaultValue: boolean, changeListener: $BiConsumer_<$MinecraftServer, $GameRules$BooleanValue>): $GameRules$Type<$GameRules$BooleanValue>;
        static create(defaultValue: boolean): $GameRules$Type<$GameRules$BooleanValue>;
        setFrom(value: $GameRules$BooleanValue, server: $MinecraftServer | null): void;
        static invokeCreate$essential_$md$c99f8a$0(defaultValue: boolean): $GameRules$Type<any>;
        type: $GameRules$Type<$GameRules$BooleanValue>;
        constructor(type: $GameRules$Type<$GameRules$BooleanValue>, value: boolean);
    }
    export class $Spawner {
        static appendHoverText(stack: $ItemStack_, tooltipLines: $List_<$Component_>, spawnDataKey: string): void;
        static getSpawnEntityDisplayName(stack: $ItemStack_, spawnDataKey: string): $Component;
    }
    export interface $Spawner {
        setEntityId(entityType: $EntityType_<never>, random: $RandomSource): void;
    }
    /**
     * Values that may be interpreted as {@link $Spawner}.
     */
    export type $Spawner_ = ((arg0: $EntityType<never>, arg1: $RandomSource) => void);
    export class $LevelTimeAccess {
    }
    export interface $LevelTimeAccess extends $LevelReader {
        getTimeOfDay(partialTick: number): number;
        getMoonBrightness(): number;
        getMoonPhase(): number;
        dayTime(): number;
        get moonBrightness(): number;
        get moonPhase(): number;
    }
    export class $GameRules$VisitorCaller<T extends $GameRules$Value<T>> {
    }
    export interface $GameRules$VisitorCaller<T extends $GameRules$Value<T>> {
        call(visitor: $GameRules$GameRuleTypeVisitor, key: $GameRules$Key<T>, type: $GameRules$Type<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $GameRules$VisitorCaller}.
     */
    export type $GameRules$VisitorCaller_<T> = ((arg0: $GameRules$GameRuleTypeVisitor, arg1: $GameRules$Key<T>, arg2: $GameRules$Type<T>) => void);
    export class $BlockCollisions<T> extends $AbstractIterator<T> {
        computeNext(): T;
        constructor(collisionGetter: $CollisionGetter, entity: $Entity | null, box: $AABB_, onlySuffocatingBlocks: boolean, resultProvider: $BiFunction_<$BlockPos$MutableBlockPos, $VoxelShape, T>);
    }
    export class $NoiseColumn implements $BlockColumn {
        getBlock(pos: number): $BlockState;
        setBlock(pos: number, state: $BlockState_): void;
        constructor(minY: number, column: $BlockState_[]);
    }
    export class $ItemLike {
    }
    export interface $ItemLike {
        asItem(): $Item;
    }
    /**
     * Values that may be interpreted as {@link $ItemLike}.
     */
    export type $ItemLike_ = $Item_ | (() => $Item_);
    export class $PathNavigationRegion implements $BlockGetter, $CollisionGetter, $ChunkView {
        getProfiler(): $ProfilerFiller;
        getChunkForCollisions(chunkX: number, chunkZ: number): $BlockGetter;
        getEntityCollisions(entity: $Entity | null, collisionBox: $AABB_): $List<$VoxelShape>;
        lithium$getLoadedChunk(x: number, z: number): $ChunkAccess;
        getMinBuildHeight(): number;
        getHeight(): number;
        getFluidState(pos: $BlockPos_): $FluidState;
        getBlockState(pos: $BlockPos_): $BlockState;
        getWorldBorder(): $WorldBorder;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        getMaxLightLevel(): number;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getLightEmission(pos: $BlockPos_): number;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        clip(failContext: $ClipContext): $BlockHitResult;
        handler$hbg000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        getCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        findSupportingBlock(entity: $Entity, box: $AABB_): ($BlockPos) | undefined;
        findFreePosition(entity: $Entity | null, shape: $VoxelShape, pos: $Vec3_, x: number, arg4: number, y: number): ($Vec3) | undefined;
        noBlockCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        getBlockCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        noCollision(collisionBox: $AABB_): boolean;
        noCollision(entity: $Entity): boolean;
        noCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        collidesWithSuffocatingBlock(entity: $Entity | null, boundingBox: $AABB_): boolean;
        isUnobstructed(state: $BlockState_, pos: $BlockPos_, context: $CollisionContext): boolean;
        isUnobstructed(entity: $Entity): boolean;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
        isOutsideBuildHeight(y: number): boolean;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        getSectionIndexFromSectionY(sectionIndex: number): number;
        getSectionYFromSectionIndex(sectionIndex: number): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getSectionIndex(sectionIndex: number): number;
        getMinSection(): number;
        getMaxBuildHeight(): number;
        /**
         * Get the `AuxiliaryLightManager` of the chunk containing the given `BlockPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $BlockPos_): $AuxiliaryLightManager;
        /**
         * Get the `AuxiliaryLightManager` of the chunk at the given `ChunkPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $ChunkPos): $AuxiliaryLightManager;
        /**
         * Retrieves model data for a block at the given position.
         */
        getModelData(pos: $BlockPos_): $ModelData;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        allEmpty: boolean;
        centerZ: number;
        centerX: number;
        level: $Level;
        chunks: $ChunkAccess[][];
        constructor(level: $Level_, centerPos: $BlockPos_, offsetPos: $BlockPos_);
        get profiler(): $ProfilerFiller;
        get minBuildHeight(): number;
        get height(): number;
        get worldBorder(): $WorldBorder;
        get maxLightLevel(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
        get maxBuildHeight(): number;
    }
    export class $SimpleExplosionDamageCalculator extends $ExplosionDamageCalculator {
        constructor(explodesBlocks: boolean, damagesEntities: boolean, knockbackMultiplier: (number) | undefined, immuneBlocks: ($HolderSet_<$Block>) | undefined);
    }
    export class $LocalMobCapCalculator {
        canSpawn(category: $MobCategory_, pos: $ChunkPos): boolean;
        addMob(pos: $ChunkPos, category: $MobCategory_): void;
        constructor(chunkMap: $ChunkMap);
    }
    export class $LevelSimulatedReader {
    }
    export interface $LevelSimulatedReader {
        isStateAtPosition(pos: $BlockPos_, predicate: $Predicate_<$BlockState>): boolean;
        isFluidAtPosition(pos: $BlockPos_, predicate: $Predicate_<$FluidState>): boolean;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, type: $BlockEntityType_<T>): (T) | undefined;
        getHeightmapPos(heightmapType: $Heightmap$Types_, pos: $BlockPos_): $BlockPos;
    }
    export class $BlockAndTintGetter {
    }
    export interface $BlockAndTintGetter extends $BlockGetter, $IBlockAndTintGetterExtension {
        canSeeSky(blockPos: $BlockPos_): boolean;
        getShade(direction: $Direction_, shade: boolean): number;
        getBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getRawBrightness(blockPos: $BlockPos_, amount: number): number;
        getBrightness(lightType: $LightLayer_, blockPos: $BlockPos_): number;
        getLightEngine(): $LevelLightEngine;
        get lightEngine(): $LevelLightEngine;
    }
    export class $ClipContext implements $ClipContextAccessor, $ClipContextExtension {
        getFrom(): $Vec3;
        sable$isIgnoreMainLevel(): boolean;
        sable$getSubLevelIgnoring(): $Predicate<any>;
        sable$getIgnoredSubLevel(): $SubLevel;
        getTo(): $Vec3;
        sable$doNotProject(): boolean;
        getBlockShape(blockState: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getFluidShape(state: $FluidState, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        sable$setDoNotProject(arg0: boolean): void;
        sable$setSubLevelIgnoring(arg0: $Predicate_<any>): void;
        sable$setIgnoredSubLevel(arg0: $SubLevel): void;
        sable$setIgnoreMainLevel(arg0: boolean): void;
        getFluidHandling(): $ClipContext$Fluid;
        collisionContext: $CollisionContext;
        block: $ClipContext$Block;
        fluid: $ClipContext$Fluid;
        constructor(from: $Vec3_, to: $Vec3_, block: $ClipContext$Block_, fluid: $ClipContext$Fluid_, entity: $Entity);
        constructor(from: $Vec3_, to: $Vec3_, block: $ClipContext$Block_, fluid: $ClipContext$Fluid_, collisionContext: $CollisionContext);
        get from(): $Vec3;
        get to(): $Vec3;
        get fluidHandling(): $ClipContext$Fluid;
    }
    export class $EntityBasedExplosionDamageCalculator extends $ExplosionDamageCalculator {
        constructor(source: $Entity);
    }
    export class $ForcedChunksSavedData extends $SavedData {
        static load(tag: $CompoundTag_, registries: $HolderLookup$Provider): $ForcedChunksSavedData;
        static factory(): $SavedData$Factory<$ForcedChunksSavedData>;
        getChunks(): $LongSet;
        getBlockForcedChunks(): $ForcedChunkManager$TicketTracker<$BlockPos>;
        getEntityForcedChunks(): $ForcedChunkManager$TicketTracker<$UUID>;
        static FILE_ID: string;
        constructor();
        get chunks(): $LongSet;
        get blockForcedChunks(): $ForcedChunkManager$TicketTracker<$BlockPos>;
        get entityForcedChunks(): $ForcedChunkManager$TicketTracker<$UUID>;
    }
    export class $Level$ExplosionInteraction extends $Enum<$Level$ExplosionInteraction> implements $StringRepresentable {
        static values(): $Level$ExplosionInteraction[];
        static valueOf(arg0: string): $Level$ExplosionInteraction;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static MOB: $Level$ExplosionInteraction;
        static CODEC: $Codec<$Level$ExplosionInteraction>;
        static TRIGGER: $Level$ExplosionInteraction;
        static BLOCK: $Level$ExplosionInteraction;
        static TNT: $Level$ExplosionInteraction;
        static NONE: $Level$ExplosionInteraction;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Level$ExplosionInteraction}.
     */
    export type $Level$ExplosionInteraction_ = "none" | "block" | "mob" | "tnt" | "trigger";
    export class $ClipContext$Block extends $Enum<$ClipContext$Block> implements $ClipContext$ShapeGetter {
        get(state: $BlockState_, block: $BlockGetter, pos: $BlockPos_, collisionContext: $CollisionContext): $VoxelShape;
        static values(): $ClipContext$Block[];
        static valueOf(arg0: string): $ClipContext$Block;
        static COLLIDER: $ClipContext$Block;
        static FALLDAMAGE_RESETTING: $ClipContext$Block;
        static OUTLINE: $ClipContext$Block;
        static VISUAL: $ClipContext$Block;
    }
    /**
     * Values that may be interpreted as {@link $ClipContext$Block}.
     */
    export type $ClipContext$Block_ = "collider" | "outline" | "visual" | "falldamage_resetting";
    export class $LevelHeightAccessor {
        static create(minBuildHeight: number, height: number): $LevelHeightAccessor;
    }
    export interface $LevelHeightAccessor {
        isOutsideBuildHeight(y: number): boolean;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        getMinBuildHeight(): number;
        getHeight(): number;
        getSectionIndexFromSectionY(y: number): number;
        getSectionYFromSectionIndex(y: number): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getSectionIndex(y: number): number;
        getMinSection(): number;
        getMaxBuildHeight(): number;
        get minBuildHeight(): number;
        get height(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
        get maxBuildHeight(): number;
    }
    export class $ClipContext$Fluid extends $Enum<$ClipContext$Fluid> {
        static values(): $ClipContext$Fluid[];
        static valueOf(arg0: string): $ClipContext$Fluid;
        canPick(state: $FluidState): boolean;
        static SOURCE_ONLY: $ClipContext$Fluid;
        static NONE: $ClipContext$Fluid;
        static ANY: $ClipContext$Fluid;
        static WATER: $ClipContext$Fluid;
    }
    /**
     * Values that may be interpreted as {@link $ClipContext$Fluid}.
     */
    export type $ClipContext$Fluid_ = "none" | "source_only" | "any" | "water";
    export class $Explosion {
        center(): $Vec3;
        radius(): number;
        canTriggerBlocks(): boolean;
        static getDefaultDamageSource(level: $Level_, source: $Entity | null): $DamageSource;
        getSmallExplosionParticles(): $ParticleOptions;
        getLargeExplosionParticles(): $ParticleOptions;
        interactsWithBlocks(): boolean;
        /**
         * Does the first part of the explosion (destroy blocks)
         */
        explode(): void;
        /**
         * Does the first part of the explosion (destroy blocks)
         */
        clearToBlow(): void;
        getExplosionSound(): $Holder<$SoundEvent>;
        getHitPlayers(): $Map<$Player, $Vec3>;
        /**
         * Does the second part of the explosion (sound, particles, drop spawn)
         */
        finalizeExplosion(spawnParticles: boolean): void;
        static getSeenPercent(explosionVector: $Vec3_, entity: $Entity): number;
        getBlockInteraction(): $Explosion$BlockInteraction;
        getIndirectSourceEntity(): $LivingEntity;
        /**
         * Returns either the entity that placed the explosive block, the entity that caused the explosion or null.
         */
        getDirectSourceEntity(): $Entity;
        getToBlow(): $List<$BlockPos>;
        level: $Level;
        blockInteraction: $Explosion$BlockInteraction;
        x: number;
        y: number;
        damageSource: $DamageSource;
        z: number;
        damageCalculator: $ExplosionDamageCalculator;
        source: $Entity;
        constructor(level: $Level_, source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, x: number, arg5: number, y: number, arg7: number, z: boolean, arg9: $Explosion$BlockInteraction_, radius: $ParticleOptions_, fire: $ParticleOptions_, blockInteraction: $Holder_<$SoundEvent>);
        constructor(level: $Level_, source: $Entity | null, x: number, arg3: number, y: number, arg5: number, z: boolean, arg7: $Explosion$BlockInteraction_);
        constructor(level: $Level_, source: $Entity | null, x: number, arg3: number, y: number, arg5: number, z: boolean, arg7: $Explosion$BlockInteraction_, radius: $List_<$BlockPos_>);
        constructor(level: $Level_, source: $Entity | null, x: number, arg3: number, y: number, arg5: number, z: $List_<$BlockPos_>, arg7: $Explosion$BlockInteraction_, radius: $ParticleOptions_, toBlow: $ParticleOptions_, blockInteraction: $Holder_<$SoundEvent>);
        get smallExplosionParticles(): $ParticleOptions;
        get largeExplosionParticles(): $ParticleOptions;
        get explosionSound(): $Holder<$SoundEvent>;
        get hitPlayers(): $Map<$Player, $Vec3>;
        get indirectSourceEntity(): $LivingEntity;
        get directSourceEntity(): $Entity;
        get toBlow(): $List<$BlockPos>;
    }
}
