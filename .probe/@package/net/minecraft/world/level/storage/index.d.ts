import { $Lifecycle, $Dynamic } from "@package/com/mojang/serialization";
import { $MinecraftServer, $WorldLoader$PackConfig } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData$Factory_, $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $ServerWorldInfoAccessor } from "@package/gg/essential/mixins/transformers/server/integrated";
import { $Spliterator, $Iterator, $UUID, $List, $UUID_, $List_, $Set } from "@package/java/util";
import { $EndDragonFight$Data_, $EndDragonFight$Data } from "@package/net/minecraft/world/level/dimension/end";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $DirectoryLock } from "@package/net/minecraft/util";
import { $WorldBorder$Settings } from "@package/net/minecraft/world/level/border";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $TimerQueue } from "@package/net/minecraft/world/level/timers";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $RegistryAccess$Frozen, $BlockPos_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Enum, $Record, $RuntimeException, $AutoCloseable, $Comparable, $Iterable } from "@package/java/lang";
import { $WorldDimensions$Complete_, $WorldOptions, $WorldDimensions$Complete } from "@package/net/minecraft/world/level/levelgen";
import { $File, $File_ } from "@package/java/io";
import { $LevelSettings, $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $LevelHeightAccessor, $Level, $WorldDataConfiguration_ } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Instant, $LocalDateTime } from "@package/java/time";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $PrimaryLevelDataExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LevelStem_ } from "@package/net/minecraft/world/level/dimension";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as loot from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage" {
    export class $CommandStorage {
        get(id: $ResourceLocation_): $CompoundTag;
        set(id: $ResourceLocation_, nbt: $CompoundTag_): void;
        keys(): $Stream<$ResourceLocation>;
        constructor(storage: $DimensionDataStorage);
    }
    export class $CommandStorage$Container extends $SavedData {
    }
    export class $LevelStorageSource$LevelDirectory extends $Record {
        path(): $Path;
        resourcePath(resource: $LevelResource): $Path;
        oldDataFile(): $Path;
        directoryName(): string;
        dataFile(): $Path;
        iconFile(): $Path;
        lockFile(): $Path;
        corruptedDataFile(dateTime: $LocalDateTime): $Path;
        rawDataFile(dateTime: $LocalDateTime): $Path;
        constructor(path: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelDirectory}.
     */
    export type $LevelStorageSource$LevelDirectory_ = { path?: $Path_,  } | [path?: $Path_, ];
    export class $LevelDataAndDimensions extends $Record {
        dimensions(): $WorldDimensions$Complete;
        worldData(): $WorldData;
        constructor(arg0: $WorldData, arg1: $WorldDimensions$Complete_);
    }
    /**
     * Values that may be interpreted as {@link $LevelDataAndDimensions}.
     */
    export type $LevelDataAndDimensions_ = { dimensions?: $WorldDimensions$Complete_, worldData?: $WorldData,  } | [dimensions?: $WorldDimensions$Complete_, worldData?: $WorldData, ];
    export class $WorldData {
        static ANVIL_VERSION_ID: number;
        static MCREGION_VERSION_ID: number;
    }
    export interface $WorldData {
        getVersion(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        endDragonFightData(): $EndDragonFight$Data;
        setGameType(type: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        enabledFeatures(): $FeatureFlagSet;
        getDifficulty(): $Difficulty;
        setDifficultyLocked(locked: boolean): void;
        getRemovedFeatureFlags(): $Set<string>;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getKnownServerBrands(): $Set<string>;
        getStorageVersionName(storageVersionId: number): string;
        getCustomBossEvents(): $CompoundTag;
        worldGenSettingsLifecycle(): $Lifecycle;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        getDataConfiguration(): $WorldDataConfiguration;
        getLevelSettings(): $LevelSettings;
        overworldData(): $ServerLevelData;
        getLoadedPlayerTag(): $CompoundTag;
        setDifficulty(difficulty: $Difficulty_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        setModdedInfo(name: string, isModded: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        get version(): number;
        get levelName(): string;
        get flatWorld(): boolean;
        get removedFeatureFlags(): $Set<string>;
        get knownServerBrands(): $Set<string>;
        get levelSettings(): $LevelSettings;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        get allowCommands(): boolean;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
    }
    export class $LevelSummary$CorruptedLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_, lastPlayed: number);
    }
    export class $LevelSummary$SymlinkLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_);
    }
    export class $DataVersion {
        getVersion(): number;
        isCompatible(dataVersion: $DataVersion): boolean;
        isSideSeries(): boolean;
        getSeries(): string;
        static MAIN_SERIES: string;
        constructor(version: number);
        constructor(version: number, series: string);
        get version(): number;
        get sideSeries(): boolean;
        get series(): string;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        /**
         * Get current world name
         */
        getLevelName(): string;
        setClearWeatherTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        setGameType(type: $GameType_): void;
        setRainTime(time: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        setThunderTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setDayTimePerTick(arg0: number): void;
        setDayTimeFraction(arg0: number): void;
        getSpawnAngle(): number;
        getDayTimePerTick(): number;
        getSpawnPos(): $BlockPos;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Get current world time
         */
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        getDayTimeFraction(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Sets the initialization status of the World.
         */
        setRaining(initialized: boolean): void;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        constructor(worldData: $WorldData, wrapped: $ServerLevelData);
        get levelName(): string;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get difficulty(): $Difficulty;
        get allowCommands(): boolean;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        get difficultyLocked(): boolean;
    }
    export class $LevelStorageException extends $RuntimeException {
        getMessageComponent(): $Component;
        constructor(messageComponent: $Component_);
        get messageComponent(): $Component;
    }
    export class $WritableLevelData {
    }
    export interface $WritableLevelData extends $LevelData {
        setSpawn(spawnPoint: $BlockPos_, spawnAngle: number): void;
    }
    export class $LevelData {
    }
    export interface $LevelData {
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getSpawnAngle(): number;
        getSpawnPos(): $BlockPos;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        /**
         * Get current world time
         */
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Sets whether it is raining or not.
         */
        setRaining(raining: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get thundering(): boolean;
        get gameTime(): number;
        get difficulty(): $Difficulty;
        get dayTime(): number;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        get difficultyLocked(): boolean;
    }
    export class $DimensionDataStorage {
        get<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        set(name: string, savedData: $SavedData): void;
        computeIfAbsent<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        save(): void;
        readTagFromDisk(filename: string, dataFixType: $DataFixTypes_ | null, version: number): $CompoundTag;
        dataFolder: $File;
        constructor(dataFolder: $File_, fixerUpper: $DataFixer, registries: $HolderLookup$Provider);
    }
    export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
        isSevere(): boolean;
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        getTranslationKey(): string;
        shouldBackup(): boolean;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get severe(): boolean;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
        parent(): $LevelStorageSource;
        close(): void;
        createPlayerStorage(): $PlayerDataStorage;
        checkForLowDiskSpace(): boolean;
        getDimensionPath(dimensionPath: $ResourceKey_<$Level>): $Path;
        getSummary(dynamic: $Dynamic<never>): $LevelSummary;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData, hostPlayerNBT: $CompoundTag_ | null): void;
        getIconFile(): ($Path) | undefined;
        getLevelPath(folderName: $LevelResource): $Path;
        safeClose(): void;
        getDataTag(): $Dynamic<never>;
        getFileModificationTime(useFallback: boolean): $Instant;
        hasWorldData(): boolean;
        deleteLevel(): void;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        getLevelId(): string;
        readAdditionalLevelSaveData(arg0: boolean): void;
        restoreLevelDataFromOld(): boolean;
        renameAndDropPlayer(saveName: string): void;
        handler$eeo001$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$dod000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        getDataTagFallback(): $Dynamic<never>;
        getWorldDir(): $Path;
        renameLevel(saveName: string): void;
        makeWorldBackup(): number;
        estimateDiskSpace(): number;
        levelDirectory: $LevelStorageSource$LevelDirectory;
        this$0: $LevelStorageSource;
        lock: $DirectoryLock;
        constructor(levelId: $LevelStorageSource, levelDir: string, arg2: $Path_);
        get iconFile(): ($Path) | undefined;
        get dataTag(): $Dynamic<never>;
        get levelId(): string;
        get dataTagFallback(): $Dynamic<never>;
        get worldDir(): $Path;
    }
    export class $PlayerDataStorage {
        load(player: $Player): ($CompoundTag) | undefined;
        save(player: $Player): void;
        getPlayerDir(): $File;
        fixerUpper: $DataFixer;
        constructor(levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        /**
         * Get current world name
         */
        getLevelName(): string;
        setClearWeatherTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isInitialized(): boolean;
        setGameType(type: $GameType_): void;
        setRainTime(time: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        setThunderTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setDayTimePerTick(arg0: number): void;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        getWorldBorder(): $WorldBorder$Settings;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        getDayTimeFraction(): number;
        /**
         * Returns `true` if the World is initialized.
         */
        isAllowCommands(): boolean;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        get levelName(): string;
        set gameTime(value: number);
        set thundering(value: boolean);
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get allowCommands(): boolean;
        set dayTime(value: number);
    }
    export class $LevelVersion {
        minecraftVersion(): $DataVersion;
        snapshot(): boolean;
        static parse(nbt: $Dynamic<never>): $LevelVersion;
        minecraftVersionName(): string;
        levelDataVersion(): number;
        lastPlayed(): number;
    }
    export class $LevelStorageSource {
        static createDefault(savesDir: $Path_): $LevelStorageSource;
        getName(): string;
        static parseValidator(validator: $Path_): $DirectoryValidator;
        getLevelPath(saveName: string): $Path;
        static getFileModificationTime(dataFilePath: $Path_): $Instant;
        static getLevelDataAndDimensions(dynamic: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_, levelStemRegistry: $Registry<$LevelStem_>, registry: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        static readLevelDataTagRaw(levelPath: $Path_): $CompoundTag;
        validateAndCreateAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        isNewLevelIdAcceptable(saveName: string): boolean;
        static readLevelDataTagFixed(levelPath: $Path_, dataFixer: $DataFixer): $Dynamic<never>;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        getWorldDirValidator(): $DirectoryValidator;
        createAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        static readDataConfig(dynamic: $Dynamic<never>): $WorldDataConfiguration;
        static getPackConfig(dynamic: $Dynamic<never>, packRepository: $PackRepository, safeMode: boolean): $WorldLoader$PackConfig;
        makeLevelSummary(dynamic: $Dynamic<never>, levelDirectory: $LevelStorageSource$LevelDirectory_, locked: boolean): $LevelSummary;
        /**
         * Gets the folder where backups are stored
         */
        getBackupPath(): $Path;
        loadLevelSummaries(candidates: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        /**
         * Gets the folder where backups are stored
         */
        getBaseDir(): $Path;
        levelExists(saveName: string): boolean;
        fixerUpper: $DataFixer;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        static FORMATTER: $DateTimeFormatter;
        static LOGGER: $Logger;
        constructor(baseDir: $Path_, backupDir: $Path_, worldDirValidator: $DirectoryValidator, fixerUpper: $DataFixer);
        get name(): string;
        get worldDirValidator(): $DirectoryValidator;
        get backupPath(): $Path;
        get baseDir(): $Path;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $PrimaryLevelDataExtension, $ServerWorldInfoAccessor {
        static parse<T>(tag: $Dynamic<T>, levelSettings: $LevelSettings, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldOptions: $WorldOptions, worldGenSettingsLifecycle: $Lifecycle): $PrimaryLevelData;
        /**
         * Return the number of ticks until rain.
         */
        getVersion(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
        setClearWeatherTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        setInitialized(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        endDragonFightData(): $EndDragonFight$Data;
        setGameType(type: $GameType_): void;
        setRainTime(time: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        setThunderTime(time: number): void;
        worldGenOptions(): $WorldOptions;
        setThundering(locked: boolean): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        setDayTimePerTick(arg0: number): void;
        setDayTimeFraction(arg0: number): void;
        getSpawnAngle(): number;
        getDayTimePerTick(): number;
        getSpawnPos(): $BlockPos;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Get current world time
         */
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        setDifficultyLocked(locked: boolean): void;
        getRemovedFeatureFlags(): $Set<string>;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getKnownServerBrands(): $Set<string>;
        getCustomBossEvents(): $CompoundTag;
        worldGenSettingsLifecycle(): $Lifecycle;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        getDataConfiguration(): $WorldDataConfiguration;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        handler$iig000$essential$onSetDifficultyLocked(ci: $CallbackInfo, locked: boolean): void;
        getDayTimeFraction(): number;
        getLevelSettings(): $LevelSettings;
        overworldData(): $ServerLevelData;
        getLoadedPlayerTag(): $CompoundTag;
        setDifficulty(difficulty: $Difficulty_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        setModdedInfo(name: string, isModded: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        setRaining(locked: boolean): void;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        getPreset(): $ResourceLocation;
        setPreset(arg0: $ResourceLocation_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        hasConfirmedExperimentalWarning(): boolean;
        setEndDragonFight(endDragonFightData: $EndDragonFight$Data_): void;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        handler$feh000$yeetusexperimentus$hasConfirmedExperimentalWarning(cir: $CallbackInfoReturnable<any>): void;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        enabledFeatures(): $FeatureFlagSet;
        getStorageVersionName(storageVersionId: number): string;
        getWorldSettings(): $LevelSettings;
        static PLAYER: string;
        static WORLD_GEN_SETTINGS: string;
        static LEVEL_NAME: string;
        constructor(settings: $LevelSettings, worldOptions: $WorldOptions, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldGenSettingsLifecycle: $Lifecycle);
        get version(): number;
        get levelName(): string;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get removedFeatureFlags(): $Set<string>;
        get knownServerBrands(): $Set<string>;
        get levelSettings(): $LevelSettings;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        get allowCommands(): boolean;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        set endDragonFight(value: $EndDragonFight$Data_);
        get worldSettings(): $LevelSettings;
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        compareTo(other: $LevelSummary): number;
        isLocked(): boolean;
        /**
         * Returns the file name.
         */
        getLevelName(): string;
        getInfo(): $Component;
        isExperimental(): boolean;
        getSettings(): $LevelSettings;
        canDelete(): boolean;
        isCompatible(): boolean;
        getIcon(): $Path;
        primaryActionActive(): boolean;
        requiresManualConversion(): boolean;
        getWorldVersionName(): $MutableComponent;
        primaryActionMessage(): $Component;
        /**
         * Gets the EnumGameType.
         */
        getGameMode(): $GameType;
        backupStatus(): $LevelSummary$BackupStatus;
        isDowngrade(): boolean;
        levelVersion(): $LevelVersion;
        getLastPlayed(): number;
        hasCommands(): boolean;
        shouldBackup(): boolean;
        canRecreate(): boolean;
        canUpload(): boolean;
        canEdit(): boolean;
        isDisabled(): boolean;
        isHardcore(): boolean;
        /**
         * Returns the file name.
         */
        getLevelId(): string;
        static PLAY_WORLD: $Component;
        constructor(settings: $LevelSettings, levelVersion: $LevelVersion, levelId: string, requiresManualConversion: boolean, locked: boolean, experimental: boolean, icon: $Path_);
        get locked(): boolean;
        get levelName(): string;
        get info(): $Component;
        get experimental(): boolean;
        get settings(): $LevelSettings;
        get compatible(): boolean;
        get icon(): $Path;
        get worldVersionName(): $MutableComponent;
        get gameMode(): $GameType;
        get downgrade(): boolean;
        get lastPlayed(): number;
        get disabled(): boolean;
        get hardcore(): boolean;
        get levelId(): string;
    }
    export class $FileNameDateFormatter {
        static create(): $DateTimeFormatter;
        constructor();
    }
    export class $LevelResource {
        getId(): string;
        static PLAYER_ADVANCEMENTS_DIR: $LevelResource;
        static PLAYER_OLD_DATA_DIR: $LevelResource;
        static GENERATED_DIR: $LevelResource;
        static LEVEL_DATA_FILE: $LevelResource;
        static MAP_RESOURCE_FILE: $LevelResource;
        static ROOT: $LevelResource;
        static ICON_FILE: $LevelResource;
        static LOCK_FILE: $LevelResource;
        static OLD_LEVEL_DATA_FILE: $LevelResource;
        static PLAYER_STATS_DIR: $LevelResource;
        static PLAYER_DATA_DIR: $LevelResource;
        static DATAPACK_DIR: $LevelResource;
        constructor(id: string);
        get id(): string;
    }
    /**
     * @deprecated
     */
    export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
        static values(): $PrimaryLevelData$SpecialWorldProperty[];
        static valueOf(arg0: string): $PrimaryLevelData$SpecialWorldProperty;
        static FLAT: $PrimaryLevelData$SpecialWorldProperty;
        static NONE: $PrimaryLevelData$SpecialWorldProperty;
        static DEBUG: $PrimaryLevelData$SpecialWorldProperty;
    }
    /**
     * Values that may be interpreted as {@link $PrimaryLevelData$SpecialWorldProperty}.
     */
    export type $PrimaryLevelData$SpecialWorldProperty_ = "none" | "flat" | "debug";
    export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
        isEmpty(): boolean;
        iterator(): $Iterator<$LevelStorageSource$LevelDirectory>;
        levels(): $List<$LevelStorageSource$LevelDirectory>;
        spliterator(): $Spliterator<$LevelStorageSource$LevelDirectory>;
        forEach(arg0: $Consumer_<$LevelStorageSource$LevelDirectory>): void;
        constructor(levels: $List_<$LevelStorageSource$LevelDirectory_>);
        [Symbol.iterator](): Iterator<$LevelStorageSource$LevelDirectory>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelCandidates}.
     */
    export type $LevelStorageSource$LevelCandidates_ = { levels?: $List_<$LevelStorageSource$LevelDirectory_>,  } | [levels?: $List_<$LevelStorageSource$LevelDirectory_>, ];
}
