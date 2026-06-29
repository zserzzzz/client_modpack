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
        resourcePath(resource: $LevelResource): $Path;
        lockFile(): $Path;
        path(): $Path;
        directoryName(): string;
        oldDataFile(): $Path;
        dataFile(): $Path;
        iconFile(): $Path;
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
    export type $LevelDataAndDimensions_ = { worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_,  } | [worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_, ];
    export class $WorldData {
        static ANVIL_VERSION_ID: number;
        static MCREGION_VERSION_ID: number;
    }
    export interface $WorldData {
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        getDifficulty(): $Difficulty;
        getVersion(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setGameType(type: $GameType_): void;
        endDragonFightData(): $EndDragonFight$Data;
        worldGenOptions(): $WorldOptions;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        enabledFeatures(): $FeatureFlagSet;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getKnownServerBrands(): $Set<string>;
        getRemovedFeatureFlags(): $Set<string>;
        getStorageVersionName(storageVersionId: number): string;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        getCustomBossEvents(): $CompoundTag;
        worldGenSettingsLifecycle(): $Lifecycle;
        setDifficultyLocked(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        setModdedInfo(name: string, isModded: boolean): void;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        overworldData(): $ServerLevelData;
        setDifficulty(difficulty: $Difficulty_): void;
        getLevelSettings(): $LevelSettings;
        get version(): number;
        get levelName(): string;
        get flatWorld(): boolean;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get loadedPlayerTag(): $CompoundTag;
        get allowCommands(): boolean;
        get debugWorld(): boolean;
        get levelSettings(): $LevelSettings;
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
        isCompatible(dataVersion: $DataVersion): boolean;
        getVersion(): number;
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
        getDayTimeFraction(): number;
        getDifficulty(): $Difficulty;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        setDayTimePerTick(arg0: number): void;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        setGameType(type: $GameType_): void;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        setRainTime(time: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        setThunderTime(time: number): void;
        /**
         * Get current world time
         */
        getGameTime(): number;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setRaining(initialized: boolean): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Get current world time
         */
        getDayTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        setWanderingTraderSpawnChance(time: number): void;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        constructor(worldData: $WorldData, wrapped: $ServerLevelData);
        get difficulty(): $Difficulty;
        get levelName(): string;
        get difficultyLocked(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get allowCommands(): boolean;
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
        getDifficulty(): $Difficulty;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Sets whether it is raining or not.
         */
        setRaining(raining: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Get current world time
         */
        getDayTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        get difficulty(): $Difficulty;
        get difficultyLocked(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get thundering(): boolean;
        get gameTime(): number;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get dayTime(): number;
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
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        isSevere(): boolean;
        shouldBackup(): boolean;
        getTranslationKey(): string;
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
        readAdditionalLevelSaveData(arg0: boolean): void;
        getDimensionPath(dimensionPath: $ResourceKey_<$Level>): $Path;
        getIconFile(): ($Path) | undefined;
        getLevelPath(folderName: $LevelResource): $Path;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData, hostPlayerNBT: $CompoundTag_ | null): void;
        getFileModificationTime(useFallback: boolean): $Instant;
        createPlayerStorage(): $PlayerDataStorage;
        checkForLowDiskSpace(): boolean;
        safeClose(): void;
        getDataTag(): $Dynamic<never>;
        getLevelId(): string;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        getSummary(dynamic: $Dynamic<never>): $LevelSummary;
        hasWorldData(): boolean;
        deleteLevel(): void;
        handler$eeo001$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$dod000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        getWorldDir(): $Path;
        estimateDiskSpace(): number;
        makeWorldBackup(): number;
        getDataTagFallback(): $Dynamic<never>;
        renameLevel(saveName: string): void;
        renameAndDropPlayer(saveName: string): void;
        restoreLevelDataFromOld(): boolean;
        levelDirectory: $LevelStorageSource$LevelDirectory;
        this$0: $LevelStorageSource;
        lock: $DirectoryLock;
        constructor(levelId: $LevelStorageSource, levelDir: string, arg2: $Path_);
        get iconFile(): ($Path) | undefined;
        get dataTag(): $Dynamic<never>;
        get levelId(): string;
        get worldDir(): $Path;
        get dataTagFallback(): $Dynamic<never>;
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
        getDayTimeFraction(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isInitialized(): boolean;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        setDayTimePerTick(arg0: number): void;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        setGameType(type: $GameType_): void;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        setRainTime(time: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        setThunderTime(time: number): void;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isAllowCommands(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        setWanderingTraderSpawnChance(time: number): void;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        get levelName(): string;
        set gameTime(value: number);
        set thundering(value: boolean);
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        set dayTime(value: number);
        get allowCommands(): boolean;
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(nbt: $Dynamic<never>): $LevelVersion;
        minecraftVersion(): $DataVersion;
        levelDataVersion(): number;
        minecraftVersionName(): string;
        lastPlayed(): number;
    }
    export class $LevelStorageSource {
        getName(): string;
        static createDefault(savesDir: $Path_): $LevelStorageSource;
        getLevelPath(saveName: string): $Path;
        static parseValidator(validator: $Path_): $DirectoryValidator;
        static readDataConfig(dynamic: $Dynamic<never>): $WorldDataConfiguration;
        static getPackConfig(dynamic: $Dynamic<never>, packRepository: $PackRepository, safeMode: boolean): $WorldLoader$PackConfig;
        loadLevelSummaries(candidates: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        /**
         * Gets the folder where backups are stored
         */
        getBackupPath(): $Path;
        makeLevelSummary(dynamic: $Dynamic<never>, levelDirectory: $LevelStorageSource$LevelDirectory_, locked: boolean): $LevelSummary;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        static readLevelDataTagRaw(levelPath: $Path_): $CompoundTag;
        validateAndCreateAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        static getFileModificationTime(dataFilePath: $Path_): $Instant;
        getWorldDirValidator(): $DirectoryValidator;
        static readLevelDataTagFixed(levelPath: $Path_, dataFixer: $DataFixer): $Dynamic<never>;
        isNewLevelIdAcceptable(saveName: string): boolean;
        static getLevelDataAndDimensions(dynamic: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_, levelStemRegistry: $Registry<$LevelStem_>, registry: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        /**
         * Gets the folder where backups are stored
         */
        getBaseDir(): $Path;
        createAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        levelExists(saveName: string): boolean;
        fixerUpper: $DataFixer;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        static FORMATTER: $DateTimeFormatter;
        static LOGGER: $Logger;
        constructor(baseDir: $Path_, backupDir: $Path_, worldDirValidator: $DirectoryValidator, fixerUpper: $DataFixer);
        get name(): string;
        get backupPath(): $Path;
        get worldDirValidator(): $DirectoryValidator;
        get baseDir(): $Path;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $PrimaryLevelDataExtension, $ServerWorldInfoAccessor {
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        getDayTimeFraction(): number;
        getDifficulty(): $Difficulty;
        static parse<T>(tag: $Dynamic<T>, levelSettings: $LevelSettings, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldOptions: $WorldOptions, worldGenSettingsLifecycle: $Lifecycle): $PrimaryLevelData;
        /**
         * Return the number of ticks until rain.
         */
        getVersion(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
        setInitialized(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        setDayTimePerTick(arg0: number): void;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        setGameType(type: $GameType_): void;
        endDragonFightData(): $EndDragonFight$Data;
        worldGenOptions(): $WorldOptions;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setThundering(locked: boolean): void;
        setRainTime(time: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        setThunderTime(time: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        /**
         * Get current world time
         */
        getGameTime(): number;
        getWorldBorder(): $WorldBorder$Settings;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        handler$iig000$essential$onSetDifficultyLocked(ci: $CallbackInfo, locked: boolean): void;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getKnownServerBrands(): $Set<string>;
        getRemovedFeatureFlags(): $Set<string>;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        getCustomBossEvents(): $CompoundTag;
        worldGenSettingsLifecycle(): $Lifecycle;
        setDifficultyLocked(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setRaining(locked: boolean): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Get current world time
         */
        getDayTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        setModdedInfo(name: string, isModded: boolean): void;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        overworldData(): $ServerLevelData;
        setDifficulty(difficulty: $Difficulty_): void;
        getLevelSettings(): $LevelSettings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        hasConfirmedExperimentalWarning(): boolean;
        getPreset(): $ResourceLocation;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        setPreset(arg0: $ResourceLocation_): void;
        setEndDragonFight(endDragonFightData: $EndDragonFight$Data_): void;
        setWanderingTraderSpawnChance(time: number): void;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        handler$feh000$yeetusexperimentus$hasConfirmedExperimentalWarning(cir: $CallbackInfoReturnable<any>): void;
        enabledFeatures(): $FeatureFlagSet;
        getStorageVersionName(storageVersionId: number): string;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        getWorldSettings(): $LevelSettings;
        static PLAYER: string;
        static WORLD_GEN_SETTINGS: string;
        static LEVEL_NAME: string;
        constructor(settings: $LevelSettings, worldOptions: $WorldOptions, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldGenSettingsLifecycle: $Lifecycle);
        get version(): number;
        get levelName(): string;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get loadedPlayerTag(): $CompoundTag;
        get allowCommands(): boolean;
        get debugWorld(): boolean;
        get levelSettings(): $LevelSettings;
        set endDragonFight(value: $EndDragonFight$Data_);
        get worldSettings(): $LevelSettings;
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        isCompatible(): boolean;
        /**
         * Gets the EnumGameType.
         */
        getGameMode(): $GameType;
        canRecreate(): boolean;
        compareTo(other: $LevelSummary): number;
        isLocked(): boolean;
        /**
         * Returns the file name.
         */
        getLevelName(): string;
        getInfo(): $Component;
        getSettings(): $LevelSettings;
        isExperimental(): boolean;
        canDelete(): boolean;
        hasCommands(): boolean;
        shouldBackup(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        levelVersion(): $LevelVersion;
        isDowngrade(): boolean;
        getLastPlayed(): number;
        primaryActionActive(): boolean;
        primaryActionMessage(): $Component;
        getWorldVersionName(): $MutableComponent;
        requiresManualConversion(): boolean;
        canUpload(): boolean;
        canEdit(): boolean;
        isHardcore(): boolean;
        /**
         * Returns the file name.
         */
        getLevelId(): string;
        isDisabled(): boolean;
        getIcon(): $Path;
        static PLAY_WORLD: $Component;
        constructor(settings: $LevelSettings, levelVersion: $LevelVersion, levelId: string, requiresManualConversion: boolean, locked: boolean, experimental: boolean, icon: $Path_);
        get compatible(): boolean;
        get gameMode(): $GameType;
        get locked(): boolean;
        get levelName(): string;
        get info(): $Component;
        get settings(): $LevelSettings;
        get experimental(): boolean;
        get downgrade(): boolean;
        get lastPlayed(): number;
        get worldVersionName(): $MutableComponent;
        get hardcore(): boolean;
        get levelId(): string;
        get disabled(): boolean;
        get icon(): $Path;
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
