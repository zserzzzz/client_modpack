import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Services_ } from "@package/net/minecraft/server";
import { $DispenserBlockEntityAccessor } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder, $AbstractCookingRecipe, $RecipeHolder_, $CampfireCookingRecipe, $RecipeType_, $CraftingInput, $CraftingInput$Positioned } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $FormattedCharSequence, $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $RandomizableContainer, $MenuProvider, $Nameable, $Container, $Clearable, $LockCode_, $WorldlyContainer, $LockCode } from "@package/net/minecraft/world";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IBlockEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $Connection } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $DataComponentMap$Builder, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $CraftingContainer, $AbstractContainerMenu, $ContainerData, $StackedContentsCompatible, $RecipeCraftingHolder } from "@package/net/minecraft/world/inventory";
import { $TransactionContext } from "@package/net/fabricmc/fabric/api/transfer/v1/transaction";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $UpdateReceiver, $LithiumStackList } from "@package/net/caffeinemc/mods/lithium/common/hopper";
import { $InventoryChangeTracker, $InventoryChangeListener, $InventoryChangeEmitter } from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_change_tracking";
import { $Item, $JukeboxSongPlayer, $Item_, $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DynamicLightSource } from "@package/toni/sodiumdynamiclights";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $FilteredText_ } from "@package/net/minecraft/server/network";
import { $Inventory, $Player, $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $DynamicLightHandler, $DynamicLightHandler_ } from "@package/dev/lambdaurora/lambdynlights/api";
import { $SpecialLogicInventory } from "@package/net/fabricmc/fabric/impl/transfer/item";
import { $LecternBlockEntityAccessor } from "@package/io/github/mortuusars/exposure/mixin";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ComparatorTracker } from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_comparator_tracking";
import { $ExtendedBlockEntityType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $StructureMode, $StructureMode_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem, $VibrationSystem$Listener } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $LithiumTransferConditionInventory, $LithiumInventory } from "@package/net/caffeinemc/mods/lithium/api/inventory";
import { $BlockEntityTypeAccessor } from "@package/net/neoforged/neoforge/mixins";
import { $Mirror_, $Mirror, $Block, $Block_, $Rotation_, $SculkSpreader, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityAccessor } from "@package/com/copycatsplus/copycats/mixin/foundation/copycat";
import { $Type } from "@package/com/mojang/datafixers/types";
import { $RenderDataBlockEntity } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $FabricBlockEntityType, $FabricBlockEntityType$Builder } from "@package/net/fabricmc/fabric/api/object/builder/v1/block/entity";
import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $GameEventListener, $GameEvent, $GameEventListener$Provider, $PositionSource, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $BlockEntityRenderPredicate, $BlockEntityRenderPredicate_ } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $UUID_, $Set_, $Map, $List, $Map_, $List_, $Set, $UUID } from "@package/java/util";
import { $WrappedBlockEntityTickInvokerAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping";
import { $BlockEntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $DynamicLightHandlerHolder } from "@package/toni/sodiumdynamiclights/accessor";
import { $ObjIntConsumer_, $UnaryOperator_, $BooleanSupplier_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ReferenceArraySet } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Vec3i, $HolderLookup$Provider, $Holder, $Direction_, $NonNullList, $Direction, $Registry, $HolderGetter, $Holder_ } from "@package/net/minecraft/core";
import { $RenderAttachmentBlockEntity } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $SetChangedHandlingBlockEntity, $SleepingBlockEntity } from "@package/net/caffeinemc/mods/lithium/common/block/entity";
import { $Enum, $Record, $Class, $Object } from "@package/java/lang";
import { $SectionedEntityMovementListener } from "@package/net/caffeinemc/mods/lithium/common/tracking/entity";
import { $IBlockEntity } from "@package/com/ishland/c2me/base/mixin/access";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ContainerSingleItem$BlockContainerSingleItem } from "@package/net/minecraft/world/ticks";
import { $ItemLike_, $Spawner, $BlockGetter, $BaseCommandBlock, $BaseSpawner, $Level_, $Level } from "@package/net/minecraft/world/level";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $TrialSpawner$StateAccessor, $TrialSpawner, $TrialSpawnerState_, $TrialSpawnerState } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $Logger } from "@package/org/slf4j";
import { $BlockEntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $CustomData, $ResolvableProfile_, $ResolvableProfile } from "@package/net/minecraft/world/item/component";
import { $ClientboundBlockEntityDataPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $SupportCache } from "@package/net/caffeinemc/mods/lithium/common/world/blockentity";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AbstractFurnaceBlockEntityAccess } from "@package/snownee/jade/mixin";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as trialspawner from "@package/net/minecraft/world/level/block/entity/trialspawner";
export * as vault from "@package/net/minecraft/world/level/block/entity/vault";

declare module "@package/net/minecraft/world/level/block/entity" {
    export class $BeehiveBlockEntity$BeeReleaseStatus extends $Enum<$BeehiveBlockEntity$BeeReleaseStatus> {
        static values(): $BeehiveBlockEntity$BeeReleaseStatus[];
        static valueOf(arg0: string): $BeehiveBlockEntity$BeeReleaseStatus;
        static BEE_RELEASED: $BeehiveBlockEntity$BeeReleaseStatus;
        static EMERGENCY: $BeehiveBlockEntity$BeeReleaseStatus;
        static HONEY_DELIVERED: $BeehiveBlockEntity$BeeReleaseStatus;
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$BeeReleaseStatus}.
     */
    export type $BeehiveBlockEntity$BeeReleaseStatus_ = "honey_delivered" | "bee_released" | "emergency";
    export class $SculkCatalystBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$SculkCatalystBlockEntity$CatalystListener> {
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, sculkCatalyst: $SculkCatalystBlockEntity): void;
        getListener(): $SculkCatalystBlockEntity$CatalystListener;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get listener(): $SculkCatalystBlockEntity$CatalystListener;
    }
    export class $HopperBlockEntity extends $RandomizableContainerBlockEntity implements $Hopper, $LithiumInventory, $InventoryChangeListener, $UpdateReceiver, $SectionedEntityMovementListener, $InventoryChangeTracker, $SleepingBlockEntity {
        lithium$handleInventoryRemoved(arg0: $Container): void;
        lithium$handleComparatorAdded(arg0: $Container): boolean;
        lithium$invalidateCacheOnNeighborUpdate(arg0: boolean): void;
        lithium$invalidateCacheOnNeighborUpdate(arg0: $Direction_): void;
        static pushItemsTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $HopperBlockEntity): void;
        static getContainerAt(level: $Level_, pos: $BlockPos_): $Container;
        static addItem(container: $Container, item: $ItemEntity): boolean;
        /**
         * Attempts to place the passed stack in the container, using as many slots as required.
         * @return any leftover stack
         */
        static addItem(source: $Container | null, destination: $Container, stack: $ItemStack_, direction: $Direction_ | null): $ItemStack;
        static entityInside(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $Entity, blockEntity: $HopperBlockEntity): void;
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        isOnCustomCooldown(): boolean;
        getLastUpdateTime(): number;
        static suckInItems(level: $Level_, hopper: $Hopper): boolean;
        isGridAligned(): boolean;
        setCooldown(cooldownTime: number): void;
        static getItemsAtAndAbove(level: $Level_, hopper: $Hopper): $List<$ItemEntity>;
        getInsertInventory(arg0: $Level_): $Container;
        getExtractBlockInventory(level: $Level_, pos: $BlockPos_, state: $BlockState_): $Container;
        getInsertBlockInventory(arg0: $Level_): $Container;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$startSleeping(): boolean;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        handler$cjk003$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        lithium$invalidateCacheOnUndirectedNeighborUpdate(): void;
        lithium$handleEntityMovement(arg0: $Class<any>): void;
        lithium$handleInventoryContentModified(arg0: $Container): void;
        getSuckAabb(): $AABB;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        handleStackListReplaced(arg0: $Container): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        sleepOnlyCurrentTick(): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        isSleeping(): boolean;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        level: $Level;
        static $assertionsDisabled: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static HOPPER_CONTAINER_SIZE: number;
        remove: boolean;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static MOVE_ITEM_SPEED: number;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get onCustomCooldown(): boolean;
        get lastUpdateTime(): number;
        get gridAligned(): boolean;
        set cooldown(value: number);
        get suckAabb(): $AABB;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export interface $DecoratedPotPattern extends RegistryMarked<RegistryTypes.DecoratedPotPatternTag, RegistryTypes.DecoratedPotPattern> {}
    export class $BlockEntityTicker<T extends $BlockEntity> {
    }
    export interface $BlockEntityTicker<T extends $BlockEntity> {
        tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: T): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityTicker}.
     */
    export type $BlockEntityTicker_<T> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: T) => void);
    export class $SkullBlockEntity extends $BlockEntity {
        static clear(): void;
        static setup(services: $Services_, mainThreadExecutor: $Executor_): void;
        setOwner(owner: $ResolvableProfile_ | null): void;
        getNoteBlockSound(): $ResourceLocation;
        static animation(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SkullBlockEntity): void;
        static fetchProfileById(id: $UUID_, services: $Services_, cacheUninitialized: $BooleanSupplier_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchGameProfile(profileUuid: $UUID_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchGameProfile(profileName: string): $CompletableFuture<($GameProfile) | undefined>;
        getAnimation(partialTick: number): number;
        getOwnerProfile(): $ResolvableProfile;
        static fetchProfileByName(name: string, services: $Services_): $CompletableFuture<($GameProfile) | undefined>;
        worldPosition: $BlockPos;
        static CHECKED_MAIN_THREAD_EXECUTOR: $Executor;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        set owner(value: $ResolvableProfile_ | null);
        get noteBlockSound(): $ResourceLocation;
        get ownerProfile(): $ResolvableProfile;
    }
    export class $LidBlockEntity {
    }
    export interface $LidBlockEntity {
        getOpenNess(partialTicks: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LidBlockEntity}.
     */
    export type $LidBlockEntity_ = ((arg0: number) => number);
    export class $ComparatorBlockEntity extends $BlockEntity {
        getOutputSignal(): number;
        setOutputSignal(output: number): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $DecoratedPotPattern extends $Record {
        assetId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotPattern}.
     */
    export type $DecoratedPotPattern_ = RegistryTypes.DecoratedPotPattern | { assetId?: $ResourceLocation_,  } | [assetId?: $ResourceLocation_, ];
    export class $JigsawBlockEntity$JointType extends $Enum<$JigsawBlockEntity$JointType> implements $StringRepresentable {
        static values(): $JigsawBlockEntity$JointType[];
        static valueOf(arg0: string): $JigsawBlockEntity$JointType;
        static byName(name: string): ($JigsawBlockEntity$JointType) | undefined;
        getSerializedName(): string;
        getTranslatedName(): $Component;
        getRemappedEnumConstantName(): string;
        static ROLLABLE: $JigsawBlockEntity$JointType;
        static ALIGNED: $JigsawBlockEntity$JointType;
        get serializedName(): string;
        get translatedName(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $JigsawBlockEntity$JointType}.
     */
    export type $JigsawBlockEntity$JointType_ = "rollable" | "aligned";
    export class $CommandBlockEntity$Mode extends $Enum<$CommandBlockEntity$Mode> {
        static values(): $CommandBlockEntity$Mode[];
        static valueOf(arg0: string): $CommandBlockEntity$Mode;
        static AUTO: $CommandBlockEntity$Mode;
        static REDSTONE: $CommandBlockEntity$Mode;
        static SEQUENCE: $CommandBlockEntity$Mode;
    }
    /**
     * Values that may be interpreted as {@link $CommandBlockEntity$Mode}.
     */
    export type $CommandBlockEntity$Mode_ = "sequence" | "auto" | "redstone";
    export class $ChestLidController {
        getOpenness(partialTicks: number): number;
        shouldBeOpen(shouldBeOpen: boolean): void;
        tickLid(): void;
        constructor();
    }
    export class $BlockEntity$DataComponentInput {
    }
    export interface $BlockEntity$DataComponentInput {
    }
    export class $BeehiveBlockEntity$BeeData {
    }
    export class $BeaconBlockEntity extends $BlockEntity implements $MenuProvider, $Nameable {
        getName(): $Component;
        getDisplayName(): $Component;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BeaconBlockEntity): void;
        getCustomName(): $Component;
        /**
         * Sets the custom name for this beacon.
         */
        setCustomName(name: $Component_ | null): void;
        static playSound(level: $Level_, pos: $BlockPos_, sound: $SoundEvent_): void;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        getBeamSections(): $List<$BeaconBlockEntity$BeaconBeamSection>;
        static filterEffect(effect: $Holder_<$MobEffect> | null): $Holder<$MobEffect>;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        hasCustomName(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        primaryPower: $Holder<$MobEffect>;
        static BEACON_EFFECTS: $List<$List<$Holder<$MobEffect>>>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        beamSections: $List<$BeaconBlockEntity$BeaconBeamSection>;
        worldPosition: $BlockPos;
        secondaryPower: $Holder<$MobEffect>;
        static DATA_SECONDARY: number;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        static DATA_LEVELS: number;
        levels: number;
        static DATA_PRIMARY: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $SculkShriekerBlockEntity$VibrationUser implements $VibrationSystem$User {
        getListenableEvents(): $TagKey<$GameEvent>;
        calculateTravelTimeInTicks(arg0: number): number;
        canTriggerAvoidVibration(): boolean;
        onDataChanged(): void;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        requiresAdjacentChunksToBeTicking(): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $SignText {
        getMessage(index: number, isFiltered: boolean): $Component;
        setColor(color: $DyeColor_): $SignText;
        setMessage(index: number, text: $Component_): $SignText;
        setMessage(index: number, text: $Component_, filteredText: $Component_): $SignText;
        getMessages(isFiltered: boolean): $Component[];
        getColor(): $DyeColor;
        setHasGlowingText(hasGlowingText: boolean): $SignText;
        hasMessage(player: $Player): boolean;
        hasAnyClickCommands(player: $Player): boolean;
        getRenderMessages(renderMessagesFiltered: boolean, formatter: $Function_<$Component, $FormattedCharSequence>): $FormattedCharSequence[];
        hasGlowingText(): boolean;
        static DIRECT_CODEC: $Codec<$SignText>;
        static LINES: number;
        constructor();
        constructor(messages: $Component_[], filteredMessages: $Component_[], color: $DyeColor_, hasGlowingText: boolean);
    }
    export class $BedBlockEntity extends $BlockEntity {
        setColor(color: $DyeColor_): void;
        getColor(): $DyeColor;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, color: $DyeColor_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $TrappedChestBlockEntity extends $ChestBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        openersCounter: $ContainerOpenersCounter;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityType<T extends $BlockEntity> implements $BlockEntityTypeAccessor, $ExtendedBlockEntityType<any>, $BlockEntityTypeExtension<any>, $FabricBlockEntityType, $DynamicLightHandlerHolder<any> {
        static getKey(blockEntityType: $BlockEntityType_<never>): $ResourceLocation;
        create(pos: $BlockPos_, state: $BlockState_): $Object;
        isValid(state: $BlockState_): boolean;
        addSupportedBlock(arg0: $Block_): void;
        sodiumdynamiclights$getSetting(): boolean;
        sodiumdynamiclights$getName(): $Component;
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): boolean;
        builtInRegistryHolder(): $Holder$Reference<$BlockEntityType<never>>;
        getBlockEntity(level: $BlockGetter, pos: $BlockPos_): $Object;
        getValidBlocks(): $Set<$Block>;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<any>[];
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): void;
        flywheel$setVisualizer(visualizer: $BlockEntityVisualizer<any>): void;
        flywheel$getVisualizer(): $BlockEntityVisualizer<any>;
        sodiumdynamiclights$setDynamicLightHandler(handler: $DynamicLightHandler_<any>): void;
        sodiumdynamiclights$getDynamicLightHandler(): $DynamicLightHandler<any>;
        neoforge$setValidBlocks(validBlocks: $Set_<$Block_>): void;
        static BLAST_FURNACE: $BlockEntityType<$BlastFurnaceBlockEntity>;
        static HANGING_SIGN: $BlockEntityType<$HangingSignBlockEntity>;
        static COMPARATOR: $BlockEntityType<$ComparatorBlockEntity>;
        static VAULT: $BlockEntityType<$VaultBlockEntity>;
        static SKULL: $BlockEntityType<$SkullBlockEntity>;
        static CHISELED_BOOKSHELF: $BlockEntityType<$ChiseledBookShelfBlockEntity>;
        static JIGSAW: $BlockEntityType<$JigsawBlockEntity>;
        static DECORATED_POT: $BlockEntityType<$DecoratedPotBlockEntity>;
        static BEACON: $BlockEntityType<$BeaconBlockEntity>;
        static CRAFTER: $BlockEntityType<$CrafterBlockEntity>;
        static FURNACE: $BlockEntityType<$FurnaceBlockEntity>;
        static BEEHIVE: $BlockEntityType<$BeehiveBlockEntity>;
        static PISTON: $BlockEntityType<$PistonMovingBlockEntity>;
        static TRAPPED_CHEST: $BlockEntityType<$TrappedChestBlockEntity>;
        static END_PORTAL: $BlockEntityType<$TheEndPortalBlockEntity>;
        static ENDER_CHEST: $BlockEntityType<$EnderChestBlockEntity>;
        static COMMAND_BLOCK: $BlockEntityType<$CommandBlockEntity>;
        static SIGN: $BlockEntityType<$SignBlockEntity>;
        static STRUCTURE_BLOCK: $BlockEntityType<$StructureBlockEntity>;
        static BELL: $BlockEntityType<$BellBlockEntity>;
        static ENCHANTING_TABLE: $BlockEntityType<$EnchantingTableBlockEntity>;
        static BREWING_STAND: $BlockEntityType<$BrewingStandBlockEntity>;
        static BED: $BlockEntityType<$BedBlockEntity>;
        static MOB_SPAWNER: $BlockEntityType<$SpawnerBlockEntity>;
        static CALIBRATED_SCULK_SENSOR: $BlockEntityType<$CalibratedSculkSensorBlockEntity>;
        static SCULK_CATALYST: $BlockEntityType<$SculkCatalystBlockEntity>;
        static CONDUIT: $BlockEntityType<$ConduitBlockEntity>;
        static CAMPFIRE: $BlockEntityType<$CampfireBlockEntity>;
        static END_GATEWAY: $BlockEntityType<$TheEndGatewayBlockEntity>;
        static SMOKER: $BlockEntityType<$SmokerBlockEntity>;
        static DISPENSER: $BlockEntityType<$DispenserBlockEntity>;
        static SCULK_SHRIEKER: $BlockEntityType<$SculkShriekerBlockEntity>;
        static HOPPER: $BlockEntityType<$HopperBlockEntity>;
        static CHEST: $BlockEntityType<$ChestBlockEntity>;
        static DAYLIGHT_DETECTOR: $BlockEntityType<$DaylightDetectorBlockEntity>;
        static BANNER: $BlockEntityType<$BannerBlockEntity>;
        static SCULK_SENSOR: $BlockEntityType<$SculkSensorBlockEntity>;
        static TRIAL_SPAWNER: $BlockEntityType<$TrialSpawnerBlockEntity>;
        static LECTERN: $BlockEntityType<$LecternBlockEntity>;
        static SHULKER_BOX: $BlockEntityType<$ShulkerBoxBlockEntity>;
        static BRUSHABLE_BLOCK: $BlockEntityType<$BrushableBlockEntity>;
        static JUKEBOX: $BlockEntityType<$JukeboxBlockEntity>;
        static BARREL: $BlockEntityType<$BarrelBlockEntity>;
        static DROPPER: $BlockEntityType<$DropperBlockEntity>;
        constructor(factory: $BlockEntityType$BlockEntitySupplier_<$Object>, validBlocks: $Set_<$Block_>, dataType: $Type<never>);
        get validBlocks(): $Set<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType}.
     */
    export type $BlockEntityType_<T> = RegistryTypes.BlockEntityType;
    export class $SmokerBlockEntity extends $AbstractFurnaceBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        lockKey: $LockCode;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $CampfireBlockEntity extends $BlockEntity implements $Clearable, $SleepingBlockEntity {
        clearContent(): void;
        getCookableRecipe(stack: $ItemStack_): ($RecipeHolder<$CampfireCookingRecipe>) | undefined;
        static cooldownTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        static particleTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        dowse(): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        placeFood(entity: $LivingEntity | null, food: $ItemStack_, cookTime: number): boolean;
        /**
         * @return the items currently held in this campfire
         */
        getItems(): $NonNullList<$ItemStack>;
        static cookTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        lithium$startSleeping(): boolean;
        sleepOnlyCurrentTick(): void;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        isSleeping(): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        cookingTime: number[];
        remove: boolean;
        cookingProgress: number[];
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get items(): $NonNullList<$ItemStack>;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $BarrelBlockEntity extends $RandomizableContainerBlockEntity implements $LithiumInventory, $InventoryChangeTracker {
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        recheckOpen(): void;
        playSound(state: $BlockState_, sound: $SoundEvent_): void;
        updateBlockState(state: $BlockState_, open: boolean): void;
        handler$cjg000$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        openersCounter: $ContainerOpenersCounter;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeaconBlockEntity$BeaconBeamSection {
        getHeight(): number;
        getColor(): number;
        increaseHeight(): void;
        color: number;
        constructor(color: number);
        get height(): number;
    }
    export class $SculkSensorBlockEntity$VibrationUser implements $VibrationSystem$User {
        getListenableEvents(): $TagKey<$GameEvent>;
        calculateTravelTimeInTicks(distance: number): number;
        canTriggerAvoidVibration(): boolean;
        onDataChanged(): void;
        isValidVibration(gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_): boolean;
        requiresAdjacentChunksToBeTicking(): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $PotDecorations extends $Record {
        static load(tag: $CompoundTag_ | null): $PotDecorations;
        save(tag: $CompoundTag_): $CompoundTag;
        left(): ($Item) | undefined;
        right(): ($Item) | undefined;
        front(): ($Item) | undefined;
        back(): ($Item) | undefined;
        ordered(): $List<$Item>;
        static CODEC: $Codec<$PotDecorations>;
        static EMPTY: $PotDecorations;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotDecorations>;
        constructor(arg0: ($Item_) | undefined, arg1: ($Item_) | undefined, arg2: ($Item_) | undefined, arg3: ($Item_) | undefined);
        constructor(back: $Item_, left: $Item_, right: $Item_, front: $Item_);
    }
    /**
     * Values that may be interpreted as {@link $PotDecorations}.
     */
    export type $PotDecorations_ = { right?: ($Item_) | undefined, front?: ($Item_) | undefined, back?: ($Item_) | undefined, left?: ($Item_) | undefined,  } | [right?: ($Item_) | undefined, front?: ($Item_) | undefined, back?: ($Item_) | undefined, left?: ($Item_) | undefined, ];
    export class $BannerPatternLayers extends $Record {
        layers(): $List<$BannerPatternLayers$Layer>;
        removeLast(): $BannerPatternLayers;
        static CODEC: $Codec<$BannerPatternLayers>;
        static LOGGER: $Logger;
        static EMPTY: $BannerPatternLayers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers>;
        constructor(arg0: $List_<$BannerPatternLayers$Layer_>);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers}.
     */
    export type $BannerPatternLayers_ = { layers?: $List_<$BannerPatternLayers$Layer_>,  } | [layers?: $List_<$BannerPatternLayers$Layer_>, ];
    export class $ChestBlockEntity extends $RandomizableContainerBlockEntity implements $LidBlockEntity, $InventoryChangeEmitter, $LithiumInventory, $InventoryChangeTracker {
        getOpenNess(partialTicks: number): number;
        signalOpenCount(level: $Level_, pos: $BlockPos_, state: $BlockState_, eventId: number, eventParam: number): void;
        static swapContents(chest: $ChestBlockEntity, otherChest: $ChestBlockEntity): void;
        handler$cji001$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        static lidAnimateTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ChestBlockEntity): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        recheckOpen(): void;
        static getOpenCount(level: $BlockGetter, pos: $BlockPos_): number;
        static playSound(level: $Level_, pos: $BlockPos_, state: $BlockState_, sound: $SoundEvent_): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        openersCounter: $ContainerOpenersCounter;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeehiveBlockEntity$Occupant extends $Record {
        static of(entity: $Entity): $BeehiveBlockEntity$Occupant;
        static create(ticksInHive: number): $BeehiveBlockEntity$Occupant;
        createEntity(level: $Level_, pos: $BlockPos_): $Entity;
        ticksInHive(): number;
        minTicksInHive(): number;
        entityData(): $CustomData;
        static CODEC: $Codec<$BeehiveBlockEntity$Occupant>;
        static LIST_CODEC: $Codec<$List<$BeehiveBlockEntity$Occupant>>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BeehiveBlockEntity$Occupant>;
        constructor(arg0: $CustomData, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$Occupant}.
     */
    export type $BeehiveBlockEntity$Occupant_ = { ticksInHive?: number, minTicksInHive?: number, entityData?: $CustomData,  } | [ticksInHive?: number, minTicksInHive?: number, entityData?: $CustomData, ];
    export class $CalibratedSculkSensorBlockEntity extends $SculkSensorBlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BlockEntity extends $AttachmentHolder implements $IBlockEntityExtension, $RenderDataBlockEntity, $RenderAttachmentBlockEntity, $SupportCache, $ComparatorTracker, $SetChangedHandlingBlockEntity, $Cullable, $DynamicLightSource, $BlockEntityAccessor, $IBlockEntity {
        applyComponentsFromItemStack(stack: $ItemStack_): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$hasAnyComparatorNearby(): boolean;
        getType(): $BlockEntityType<never>;
        getLevel(): $Level;
        setLevel(level: $Level_): void;
        static getPosFromTag(tag: $CompoundTag_): $BlockPos;
        loadCustomOnly(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        getUpdateTag(registries: $HolderLookup$Provider): $CompoundTag;
        isValidBlockState(arg0: $BlockState_): boolean;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        clearRemoved(): void;
        loadWithComponents(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        saveAdditional(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        /**
         * @deprecated
         */
        removeComponentsFromTag(tag: $CompoundTag_): void;
        saveCustomAndMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        saveWithId(registries: $HolderLookup$Provider): $CompoundTag;
        static loadStatic(pos: $BlockPos_, state: $BlockState_, tag: $CompoundTag_, registries: $HolderLookup$Provider): $BlockEntity;
        /**
         * Gets a `CompoundTag` that can be used to store custom data for this block entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getPersistentData(): $CompoundTag;
        /**
         * @return whether this BlockEntity's level has been set
         */
        onlyOpCanSetNbt(): boolean;
        triggerEvent(id: number, type: number): boolean;
        fillCrashReportCategory(reportCategory: $CrashReportCategory): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setTimeout(): void;
        setOutOfCamera(value: boolean): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isForcedVisible(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isOutOfCamera(): boolean;
        components(): $DataComponentMap;
        /**
         * @deprecated
         */
        setBlockState(blockState: $BlockState_): void;
        saveWithFullMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        saveWithoutMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        static parseCustomNameSafe(customName: string, registries: $HolderLookup$Provider): $Component;
        getRenderAttachmentData(): $Object;
        collectImplicitComponents(components: $DataComponentMap$Builder): void;
        lithium$onComparatorAdded(arg0: $Direction_, arg1: number): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$isSupported(): boolean;
        applyImplicitComponents(componentInput: $BlockEntity$DataComponentInput): void;
        getBlockPos(): $BlockPos;
        getBlockState(): $BlockState;
        collectComponents(): $DataComponentMap;
        applyComponents(components: $DataComponentMap_, patch: $DataComponentPatch_): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isRemoved(): boolean;
        sdl$getLuminance(): number;
        sodiumdynamiclights$updateDynamicLight(renderer: $LevelRenderer): boolean;
        static setChanged(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setChanged(): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setRemoved(): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isCulled(): boolean;
        setCulled(value: boolean): void;
        setComponents(components: $DataComponentMap_): void;
        static addEntityType(tag: $CompoundTag_, entityType: $BlockEntityType_<never>): void;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: $LevelRenderer): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        sdl$dynamicLightTick(): void;
        sdl$getDynamicLightX(): number;
        sdl$getDynamicLightY(): number;
        sdl$getDynamicLightLevel(): $Level;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        sdl$resetDynamicLight(): void;
        sdl$getDynamicLightZ(): number;
        saveToItem(stack: $ItemStack_, registries: $HolderLookup$Provider): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        hasLevel(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        sdl$shouldUpdateDynamicLight(): boolean;
        getRenderData(): $Object;
        getUpdatePacket(): $Packet<$ClientGamePacketListener>;
        saveCustomOnly(registries: $HolderLookup$Provider): $CompoundTag;
        loadAdditional(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        /**
         * Called when you receive a TileEntityData packet for the location this
         * TileEntity is currently in. On the client, the NetworkManager will always
         * be the remote server. On the server, it will be whomever is responsible for
         * sending the packet.
         */
        onDataPacket(net: $Connection, pkt: $ClientboundBlockEntityDataPacket, lookupProvider: $HolderLookup$Provider): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onChunkUnloaded(): void;
        handleUpdateTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        invalidateCapabilities(): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onLoad(): void;
        /**
         * Returns whether this `BlockEntity` has custom outline rendering behavior.
         */
        hasCustomOutlineRendering(player: $Player): boolean;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        requestModelDataUpdate(): void;
        /**
         * Allows you to return additional model data.
         * This data can be used to provide additional functionality in your `BakedModel`.
         * You need to schedule a refresh of you model data via `#requestModelDataUpdate()` if the result of this function changes.
         * 
         * This method is always called on the main client thread.
         */
        getModelData(): $ModelData;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        lithium$handleSetChanged(): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        sdl$isDynamicLightEnabled(): boolean;
        callSaveMetadata(tag: $CompoundTag_): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        get type(): $BlockEntityType<never>;
        get persistentData(): $CompoundTag;
        get forcedVisible(): boolean;
        get renderAttachmentData(): $Object;
        get blockPos(): $BlockPos;
        get renderData(): $Object;
        get updatePacket(): $Packet<$ClientGamePacketListener>;
        get modelData(): $ModelData;
    }
    export class $ShulkerBoxBlockEntity$AnimationStatus extends $Enum<$ShulkerBoxBlockEntity$AnimationStatus> {
        static values(): $ShulkerBoxBlockEntity$AnimationStatus[];
        static valueOf(arg0: string): $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSED: $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENED: $ShulkerBoxBlockEntity$AnimationStatus;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerBoxBlockEntity$AnimationStatus}.
     */
    export type $ShulkerBoxBlockEntity$AnimationStatus_ = "closed" | "opening" | "opened" | "closing";
    export class $ShulkerBoxBlockEntity extends $RandomizableContainerBlockEntity implements $WorldlyContainer, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity {
        isClosed(): boolean;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ShulkerBoxBlockEntity): void;
        getSlotsForFace(side: $Direction_): number[];
        getAnimationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        getProgress(partialTicks: number): number;
        getBoundingBox(state: $BlockState_): $AABB;
        getColor(): $DyeColor;
        loadFromTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        handler$cjl004$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        lithium$startSleeping(): boolean;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        sleepOnlyCurrentTick(): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        isSleeping(): boolean;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        remove: boolean;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static EVENT_SET_OPEN_COUNT: number;
        static CONTAINER_SIZE: number;
        static COLUMNS: number;
        static OPENING_TICK_LENGTH: number;
        openCount: number;
        lockKey: $LockCode;
        hasComparators: number;
        static MAX_LID_HEIGHT: number;
        static MAX_LID_ROTATION: number;
        lootTableSeed: number;
        static ROWS: number;
        constructor(color: $DyeColor_ | null, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get closed(): boolean;
        get animationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        get color(): $DyeColor;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $DecoratedPotBlockEntity$WobbleStyle extends $Enum<$DecoratedPotBlockEntity$WobbleStyle> {
        static values(): $DecoratedPotBlockEntity$WobbleStyle[];
        static valueOf(arg0: string): $DecoratedPotBlockEntity$WobbleStyle;
        duration: number;
        static POSITIVE: $DecoratedPotBlockEntity$WobbleStyle;
        static NEGATIVE: $DecoratedPotBlockEntity$WobbleStyle;
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotBlockEntity$WobbleStyle}.
     */
    export type $DecoratedPotBlockEntity$WobbleStyle_ = "positive" | "negative";
    export interface $BannerPattern extends RegistryMarked<RegistryTypes.BannerPatternTag, RegistryTypes.BannerPattern> {}
    export class $BlockEntity$ComponentHelper {
        static COMPONENTS_CODEC: $Codec<$DataComponentMap>;
    }
    export class $BrushableBlockEntity extends $BlockEntity {
        getItem(): $ItemStack;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        getHitDirection(): $Direction;
        brush(startTick: number, arg1: $Player, player: $Direction_): boolean;
        unpackLootTable(player: $Player): void;
        checkReset(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get item(): $ItemStack;
        get hitDirection(): $Direction;
    }
    export class $EnderChestBlockEntity extends $BlockEntity implements $LidBlockEntity {
        getOpenNess(partialTicks: number): number;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        static lidAnimateTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $EnderChestBlockEntity): void;
        recheckOpen(): void;
        stillValid(player: $Player): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BaseContainerBlockEntity extends $BlockEntity implements $Container, $MenuProvider, $Nameable, $InventoryChangeEmitter, $SpecialLogicInventory {
        lithium$emitStackListReplaced(): void;
        lithium$emitFirstComparatorAdded(): void;
        lithium$forwardContentChangeOnce(arg0: $InventoryChangeListener, arg1: $LithiumStackList): void;
        lithium$emitContentModified(): void;
        getName(): $Component;
        isEmpty(): boolean;
        getDisplayName(): $Component;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        getDefaultName(): $Component;
        fabric_setSuppress(arg0: boolean): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        setItems(items: $NonNullList<$ItemStack_>): void;
        static canUnlock(player: $Player, code: $LockCode_, displayName: $Component_): boolean;
        clearContent(): void;
        getCustomName(): $Component;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        lithium$emitRemoved(): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        stillValid(player: $Player): boolean;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        createMenu(containerId: number, inventory: $Inventory): $AbstractContainerMenu;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        handler$cjh000$lithium$readNbtStackListReplacement(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $CallbackInfo): void;
        lithium$stopForwardingMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        wrapOperation$ffl000$fabric_transfer_api_v1$fabric_redirectMarkDirty(arg0: $BaseContainerBlockEntity, arg1: $Operation_<any>): void;
        canOpen(player: $Player): boolean;
        getItems(): $NonNullList<$ItemStack>;
        lithium$forwardMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        hasCustomName(): boolean;
        emitCallbackReplaced(): void;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        canReceiveTransferCooldown(): boolean;
        setTransferCooldown(arg0: number): void;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        setChanged(): void;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        clientsort$setChanged(): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
        get defaultName(): $Component;
        get customName(): $Component;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get height(): number;
        get width(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$Builder<T extends $BlockEntity> implements $FabricBlockEntityType$Builder<any> {
        static of<T extends $BlockEntity>(factory: $BlockEntityType$BlockEntitySupplier_<T>, ...validBlocks: $Block_[]): $BlockEntityType$Builder<T>;
        build(): $BlockEntityType<any>;
        build(dataType: $Type<never>): $BlockEntityType<$Object>;
        validBlocks: $Set<$Block>;
    }
    export class $CommandBlockEntity extends $BlockEntity {
        isAutomatic(): boolean;
        getCommandBlock(): $BaseCommandBlock;
        markConditionMet(): boolean;
        setAutomatic(auto: boolean): void;
        wasConditionMet(): boolean;
        isConditional(): boolean;
        getMode(): $CommandBlockEntity$Mode;
        onModeSwitch(): void;
        isPowered(): boolean;
        setPowered(auto: boolean): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get commandBlock(): $BaseCommandBlock;
        get conditional(): boolean;
        get mode(): $CommandBlockEntity$Mode;
    }
    export class $DecoratedPotPatterns {
        static bootstrap(registry: $Registry<$DecoratedPotPattern_>): $DecoratedPotPattern;
        static getPatternFromItem(item: $Item_): $ResourceKey<$DecoratedPotPattern>;
        static GUSTER: $ResourceKey<$DecoratedPotPattern>;
        static MINER: $ResourceKey<$DecoratedPotPattern>;
        static SNORT: $ResourceKey<$DecoratedPotPattern>;
        static DANGER: $ResourceKey<$DecoratedPotPattern>;
        static ARMS_UP: $ResourceKey<$DecoratedPotPattern>;
        static FRIEND: $ResourceKey<$DecoratedPotPattern>;
        static SHEAF: $ResourceKey<$DecoratedPotPattern>;
        static ANGLER: $ResourceKey<$DecoratedPotPattern>;
        static SKULL: $ResourceKey<$DecoratedPotPattern>;
        static BREWER: $ResourceKey<$DecoratedPotPattern>;
        static SCRAPE: $ResourceKey<$DecoratedPotPattern>;
        static ARCHER: $ResourceKey<$DecoratedPotPattern>;
        static FLOW: $ResourceKey<$DecoratedPotPattern>;
        static BURN: $ResourceKey<$DecoratedPotPattern>;
        static HEART: $ResourceKey<$DecoratedPotPattern>;
        static BLANK: $ResourceKey<$DecoratedPotPattern>;
        static EXPLORER: $ResourceKey<$DecoratedPotPattern>;
        static SHELTER: $ResourceKey<$DecoratedPotPattern>;
        static PLENTY: $ResourceKey<$DecoratedPotPattern>;
        static BLADE: $ResourceKey<$DecoratedPotPattern>;
        static HEARTBREAK: $ResourceKey<$DecoratedPotPattern>;
        static HOWL: $ResourceKey<$DecoratedPotPattern>;
        static MOURNER: $ResourceKey<$DecoratedPotPattern>;
        static PRIZE: $ResourceKey<$DecoratedPotPattern>;
        constructor();
    }
    export class $StructureBlockEntity$UpdateType extends $Enum<$StructureBlockEntity$UpdateType> {
        static values(): $StructureBlockEntity$UpdateType[];
        static valueOf(arg0: string): $StructureBlockEntity$UpdateType;
        static UPDATE_DATA: $StructureBlockEntity$UpdateType;
        static SAVE_AREA: $StructureBlockEntity$UpdateType;
        static LOAD_AREA: $StructureBlockEntity$UpdateType;
        static SCAN_AREA: $StructureBlockEntity$UpdateType;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockEntity$UpdateType}.
     */
    export type $StructureBlockEntity$UpdateType_ = "update_data" | "save_area" | "load_area" | "scan_area";
    export class $SculkCatalystBlockEntity$CatalystListener implements $GameEventListener {
        getSculkSpreader(): $SculkSpreader;
        /**
         * Gets the position of the listener itself.
         */
        getListenerSource(): $PositionSource;
        /**
         * Gets the listening radius of the listener. Events within this radius will notify the listener when broadcasted.
         */
        getListenerRadius(): number;
        handleGameEvent(level: $ServerLevel, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_, pos: $Vec3_): boolean;
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        static PULSE_TICKS: number;
        sculkSpreader: $SculkSpreader;
        constructor(blockState: $BlockState_, positionSource: $PositionSource);
        get listenerSource(): $PositionSource;
        get listenerRadius(): number;
        get deliveryMode(): $GameEventListener$DeliveryMode;
    }
    export class $DaylightDetectorBlockEntity extends $BlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export interface $BlockEntityType<T> extends RegistryMarked<RegistryTypes.BlockEntityTypeTag, RegistryTypes.BlockEntityType> {}
    export class $CrafterBlockEntity extends $RandomizableContainerBlockEntity implements $CraftingContainer, $SleepingBlockEntity, $SetChangedHandlingBlockEntity {
        /**
         * Returns the number of slots in the inventory.
         */
        getRedstoneSignal(): number;
        setTriggered(triggered: boolean): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        setCraftingTicksRemaining(craftingTicksRemaining: number): void;
        setSlotState(slot: number, state: boolean): void;
        isSlotDisabled(slot: number): boolean;
        isTriggered(): boolean;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, crafter: $CrafterBlockEntity): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        fillStackedContents(contents: $StackedContents): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        lithium$startSleeping(): boolean;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        sleepOnlyCurrentTick(): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        isSleeping(): boolean;
        getItems(): $List<$ItemStack>;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        static CONTAINER_WIDTH: number;
        level: $Level;
        static SLOT_ENABLED: number;
        static SLOT_DISABLED: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static NUM_DATA: number;
        remove: boolean;
        static CONTAINER_HEIGHT: number;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static DATA_TRIGGERED: number;
        static CONTAINER_SIZE: number;
        lockKey: $LockCode;
        hasComparators: number;
        containerData: $ContainerData;
        lootTableSeed: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get redstoneSignal(): number;
        get width(): number;
        get height(): number;
        set craftingTicksRemaining(value: number);
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
        get items(): $List<$ItemStack>;
    }
    export class $HangingSignBlockEntity extends $SignBlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BellBlockEntity$ResonationEndAction {
    }
    export interface $BellBlockEntity$ResonationEndAction {
    }
    /**
     * Values that may be interpreted as {@link $BellBlockEntity$ResonationEndAction}.
     */
    export type $BellBlockEntity$ResonationEndAction_ = (() => void);
    export class $BrewingStandBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity, $SetChangedHandlingBlockEntity {
        getSlotsForFace(side: $Direction_): number[];
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BrewingStandBlockEntity): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        lithium$startSleeping(): boolean;
        sleepOnlyCurrentTick(): void;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        isSleeping(): boolean;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        static DATA_BREW_TIME: number;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_FUEL_USES: number;
        level: $Level;
        fuel: number;
        brewTime: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static FUEL_USES: number;
        remove: boolean;
        worldPosition: $BlockPos;
        lockKey: $LockCode;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $StructureBlockEntity extends $BlockEntity {
        setSeed(seed: number): void;
        getSeed(): number;
        getMirror(): $Mirror;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(): boolean;
        /**
         * Saves the template, either updating the local version or writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(writeToDisk: boolean): boolean;
        unloadStructure(): void;
        placeStructure(level: $ServerLevel): void;
        setMode(mode: $StructureMode_): void;
        getMode(): $StructureMode;
        setIntegrity(integrity: number): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        hasStructureName(): boolean;
        setShowBoundingBox(ignoreEntities: boolean): void;
        setStructurePos(structurePos: $BlockPos_): void;
        setStructureSize(structureSize: $Vec3i): void;
        setStructureName(metaData: string | null): void;
        setStructureName(structureName: $ResourceLocation_ | null): void;
        getStructurePos(): $BlockPos;
        loadStructureInfo(level: $ServerLevel): boolean;
        setMetaData(metaData: string): void;
        static createRandom(seed: number): $RandomSource;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isIgnoreEntities(): boolean;
        setIgnoreEntities(ignoreEntities: boolean): void;
        getMetaData(): string;
        getStructureName(): string;
        getStructureSize(): $Vec3i;
        setRotation(rotation: $Rotation_): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowBoundingBox(): boolean;
        getIntegrity(): number;
        getRotation(): $Rotation;
        setMirror(mirror: $Mirror_): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowAir(): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        detectSize(): boolean;
        setShowAir(ignoreEntities: boolean): void;
        placeStructureIfSameSize(level: $ServerLevel): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isStructureLoadable(): boolean;
        constant$bmn000$hugestructureblocks$readNbtLower(value: number): number;
        constant$bmn000$hugestructureblocks$readNbtUpper(value: number): number;
        constant$bmn000$hugestructureblocks$detectSize(value: number): number;
        createdBy(author: $LivingEntity): void;
        usedBy(player: $Player): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isPowered(): boolean;
        setPowered(ignoreEntities: boolean): void;
        worldPosition: $BlockPos;
        level: $Level;
        static AUTHOR_TAG: string;
        static MAX_OFFSET_PER_AXIS: number;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        static MAX_SIZE_PER_AXIS: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get structureLoadable(): boolean;
    }
    export class $AbstractFurnaceBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $RecipeCraftingHolder, $StackedContentsCompatible, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity, $SetChangedHandlingBlockEntity, $SpecialLogicInventory, $Clearable, $AbstractFurnaceBlockEntityAccess {
        static add(map: $Map_<$Item_, number>, item: $ItemLike_, burnTime: number): void;
        static add(map: $Map_<$Item_, number>, itemTag: $TagKey_<$Item>, burnTime: number): void;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        getBurnDuration(fuel: $ItemStack_): number;
        getRecipeUsed(): $RecipeHolder<never>;
        getSlotsForFace(side: $Direction_): number[];
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        /**
         * @deprecated
         */
        static getFuel(): $Map<$Item, number>;
        static buildFuels(arg0: $ObjIntConsumer_<$Either<$Item, $TagKey<$Item>>>): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        static invalidateCache(): void;
        awardUsedRecipesAndPopExperience(player: $ServerPlayer): void;
        getRecipesToAwardAndPopExperience(level: $ServerLevel, popVec: $Vec3_): $List<$RecipeHolder<never>>;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $AbstractFurnaceBlockEntity): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        fillStackedContents(helper: $StackedContents): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        handler$ffh000$fabric_transfer_api_v1$setStackSuppressUpdate(arg0: number, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        static isFuel(stack: $ItemStack_): boolean;
        setRecipeUsed(level: $Level_, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        lithium$startSleeping(): boolean;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        sleepOnlyCurrentTick(): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        isSleeping(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getCookingProgress(): number;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getCookingTotalTime(): number;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        lockKey: $LockCode;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_, recipeType: $RecipeType_<$AbstractCookingRecipe>);
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $EnchantingTableBlockEntity extends $BlockEntity implements $Nameable {
        getName(): $Component;
        static bookAnimationTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, enchantingTable: $EnchantingTableBlockEntity): void;
        getCustomName(): $Component;
        setCustomName(customName: $Component_ | null): void;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        oFlip: number;
        flipA: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        worldPosition: $BlockPos;
        rot: number;
        tRot: number;
        flipT: number;
        oOpen: number;
        time: number;
        oRot: number;
        hasComparators: number;
        flip: number;
        open: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $BeehiveBlockEntity extends $BlockEntity {
        isEmpty(): boolean;
        isFull(): boolean;
        getOccupantCount(): number;
        emptyAllLivingFromHive(player: $Player | null, state: $BlockState_, releaseStatus: $BeehiveBlockEntity$BeeReleaseStatus_): void;
        addOccupant(occupant: $Entity): void;
        isFireNearby(): boolean;
        static getHoneyLevel(state: $BlockState_): number;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, beehive: $BeehiveBlockEntity): void;
        storeBee(occupant: $BeehiveBlockEntity$Occupant_): void;
        isSedated(): boolean;
        static IGNORED_BEE_TAGS: $List<string>;
        worldPosition: $BlockPos;
        level: $Level;
        static MIN_OCCUPATION_TICKS_NECTARLESS: number;
        static MAX_OCCUPANTS: number;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get empty(): boolean;
        get full(): boolean;
        get occupantCount(): number;
        get fireNearby(): boolean;
        get sedated(): boolean;
    }
    export class $TickingBlockEntity {
    }
    export interface $TickingBlockEntity {
        getType(): string;
        tick(): void;
        isRemoved(): boolean;
        getPos(): $BlockPos;
        get type(): string;
        get removed(): boolean;
        get pos(): $BlockPos;
    }
    export class $SpawnerBlockEntity extends $BlockEntity implements $Spawner {
        setEntityId(type: $EntityType_<never>, random: $RandomSource): void;
        getSpawner(): $BaseSpawner;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get spawner(): $BaseSpawner;
    }
    export class $BellBlockEntity extends $BlockEntity {
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        onHit(direction: $Direction_): void;
        worldPosition: $BlockPos;
        ticks: number;
        level: $Level;
        clickDirection: $Direction;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        shaking: boolean;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $DropperBlockEntity extends $DispenserBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $SignBlockEntity extends $BlockEntity {
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, sign: $SignBlockEntity): void;
        getText(isFrontText: boolean): $SignText;
        setText(text: $SignText, isFrontText: boolean): boolean;
        getBackText(): $SignText;
        updateSignText(player: $Player, isFrontText: boolean, filteredText: $List_<$FilteredText_>): void;
        getTextLineHeight(): number;
        getFrontText(): $SignText;
        isFacingFrontText(player: $Player): boolean;
        executeClickCommandsIfPresent(player: $Player, level: $Level_, pos: $BlockPos_, frontText: boolean): boolean;
        getSignInteractionFailedSoundEvent(): $SoundEvent;
        setAllowedPlayerEditor(playWhoMayEdit: $UUID_ | null): void;
        canExecuteClickCommands(isFrontText: boolean, player: $Player): boolean;
        getPlayerWhoMayEdit(): $UUID;
        createDefaultSignText(): $SignText;
        getMaxTextLineWidth(): number;
        playerIsTooFarAwayToEdit(uuid: $UUID_): boolean;
        isWaxed(): boolean;
        setWaxed(isWaxed: boolean): boolean;
        updateText(updater: $UnaryOperator_<$SignText>, isFrontText: boolean): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(type: $BlockEntityType_<any>, pos: $BlockPos_, blockState: $BlockState_);
        get backText(): $SignText;
        get textLineHeight(): number;
        get frontText(): $SignText;
        get signInteractionFailedSoundEvent(): $SoundEvent;
        set allowedPlayerEditor(value: $UUID_ | null);
        get playerWhoMayEdit(): $UUID;
        get maxTextLineWidth(): number;
    }
    export class $JukeboxBlockEntity extends $BlockEntity implements $Clearable, $ContainerSingleItem$BlockContainerSingleItem, $SpecialLogicInventory {
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, jukebox: $JukeboxBlockEntity): void;
        splitTheItem(amount: number): $ItemStack;
        onSongChanged(): void;
        tryForcePlaySong(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        fabric_setSuppress(hasRecord: boolean): void;
        getSongPlayer(): $JukeboxSongPlayer;
        popOutTheItem(): void;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getComparatorOutput(): number;
        setSongItemWithoutPlaying(stack: $ItemStack_): void;
        getContainerBlockEntity(): $BlockEntity;
        setTheItem(stack: $ItemStack_): void;
        getTheItem(): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        isEmpty(): boolean;
        getItem(amount: number): $ItemStack;
        removeTheItem(): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        removeItemNoUpdate(amount: number): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getContainerSize(): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        getMaxStackSize(stack: $ItemStack_): number;
        canReceiveTransferCooldown(): boolean;
        setTransferCooldown(arg0: number): void;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        setChanged(): void;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        getStackInSlot(amount: number): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        clientsort$setChanged(): void;
        worldPosition: $BlockPos;
        static SONG_ITEM_TAG_ID: string;
        level: $Level;
        jukeboxSongPlayer: $JukeboxSongPlayer;
        static TICKS_SINCE_SONG_STARTED_TAG_ID: string;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get songPlayer(): $JukeboxSongPlayer;
        get comparatorOutput(): number;
        set songItemWithoutPlaying(value: $ItemStack_);
        get containerBlockEntity(): $BlockEntity;
        get containerSize(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get height(): number;
        get width(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
    }
    export interface $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
        create(pos: $BlockPos_, state: $BlockState_): T;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType$BlockEntitySupplier}.
     */
    export type $BlockEntityType$BlockEntitySupplier_<T> = ((arg0: $BlockPos, arg1: $BlockState) => T);
    export class $TheEndPortalBlockEntity extends $BlockEntity {
        shouldRenderFace(face: $Direction_): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPatternLayers$Builder {
        add(layer: $BannerPatternLayers$Layer_): $BannerPatternLayers$Builder;
        add(pattern: $Holder_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        addAll(layers: $BannerPatternLayers_): $BannerPatternLayers$Builder;
        build(): $BannerPatternLayers;
        /**
         * @deprecated
         */
        addIfRegistered(patterns: $HolderGetter<$BannerPattern_>, patternKey: $ResourceKey_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        constructor();
    }
    export class $SculkSensorBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getVibrationData(): $VibrationSystem$Data;
        getVibrationUser(): $VibrationSystem$User;
        getLastVibrationFrequency(): number;
        createVibrationUser(): $VibrationSystem$User;
        setLastVibrationFrequency(lastVibrationFrequency: number): void;
        getListener(): $VibrationSystem$Listener;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get vibrationData(): $VibrationSystem$Data;
        get vibrationUser(): $VibrationSystem$User;
        get listener(): $VibrationSystem$Listener;
    }
    export class $TrialSpawnerBlockEntity extends $BlockEntity implements $Spawner, $TrialSpawner$StateAccessor {
        getState(): $TrialSpawnerState;
        setState(level: $Level_, state: $TrialSpawnerState_): void;
        setEntityId(entityType: $EntityType_<never>, random: $RandomSource): void;
        getTrialSpawner(): $TrialSpawner;
        markUpdated(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get trialSpawner(): $TrialSpawner;
    }
    export class $DispenserBlockEntity extends $RandomizableContainerBlockEntity implements $LithiumInventory, $InventoryChangeTracker, $DispenserBlockEntityAccessor {
        getRandomSlot(random: $RandomSource): number;
        handler$cjj002$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        insertItem(stack: $ItemStack_): $ItemStack;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $TheEndGatewayBlockEntity extends $TheEndPortalBlockEntity {
        getPortalPosition(level: $ServerLevel, pos: $BlockPos_): $Vec3;
        static triggerCooldown(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        isCoolingDown(): boolean;
        getParticleAmount(): number;
        static beamAnimationTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getCooldownPercent(partialTicks: number): number;
        isSpawning(): boolean;
        getSpawnPercent(partialTicks: number): number;
        setExitPosition(exitPortal: $BlockPos_, exactTeleport: boolean): void;
        static portalTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get coolingDown(): boolean;
        get particleAmount(): number;
        get spawning(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $FurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        lockKey: $LockCode;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPatterns {
        static register(context: $BootstrapContext<$BannerPattern_>, resourceKey: $ResourceKey_<$BannerPattern>): void;
        static bootstrap(context: $BootstrapContext<$BannerPattern_>): void;
        static GUSTER: $ResourceKey<$BannerPattern>;
        static STRIPE_BOTTOM: $ResourceKey<$BannerPattern>;
        static GLOBE: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_MIDDLE: $ResourceKey<$BannerPattern>;
        static TRIANGLE_TOP: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_CENTER: $ResourceKey<$BannerPattern>;
        static STRAIGHT_CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_LEFT: $ResourceKey<$BannerPattern>;
        static SKULL: $ResourceKey<$BannerPattern>;
        static RHOMBUS_MIDDLE: $ResourceKey<$BannerPattern>;
        static CIRCLE_MIDDLE: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL: $ResourceKey<$BannerPattern>;
        static GRADIENT: $ResourceKey<$BannerPattern>;
        static FLOW: $ResourceKey<$BannerPattern>;
        static BASE: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_RIGHT: $ResourceKey<$BannerPattern>;
        static CREEPER: $ResourceKey<$BannerPattern>;
        static STRIPE_LEFT: $ResourceKey<$BannerPattern>;
        static BRICKS: $ResourceKey<$BannerPattern>;
        static TRIANGLES_BOTTOM: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_LEFT: $ResourceKey<$BannerPattern>;
        static FLOWER: $ResourceKey<$BannerPattern>;
        static STRIPE_SMALL: $ResourceKey<$BannerPattern>;
        static TRIANGLE_BOTTOM: $ResourceKey<$BannerPattern>;
        static CURLY_BORDER: $ResourceKey<$BannerPattern>;
        static TRIANGLES_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNLEFT: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNRIGHT: $ResourceKey<$BannerPattern>;
        static PIGLIN: $ResourceKey<$BannerPattern>;
        static GRADIENT_UP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT: $ResourceKey<$BannerPattern>;
        static BORDER: $ResourceKey<$BannerPattern>;
        static MOJANG: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL: $ResourceKey<$BannerPattern>;
        static CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_RIGHT: $ResourceKey<$BannerPattern>;
        constructor();
    }
    export class $RandomizableContainerBlockEntity extends $BaseContainerBlockEntity implements $RandomizableContainer {
        setLootTableSeed(seed: number): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        getLootTableSeed(): number;
        getLootTable(): $ResourceKey<$LootTable>;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        unpackLootTable(player: $Player | null): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BlastFurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        lockKey: $LockCode;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPattern extends $Record {
        translationKey(): string;
        assetId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$BannerPattern>>;
        static DIRECT_CODEC: $Codec<$BannerPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$BannerPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $BannerPattern}.
     */
    export type $BannerPattern_ = RegistryTypes.BannerPattern | { assetId?: $ResourceLocation_, translationKey?: string,  } | [assetId?: $ResourceLocation_, translationKey?: string, ];
    export class $LecternBlockEntity extends $BlockEntity implements $Clearable, $MenuProvider, $LecternBlockEntityAccessor {
        getDisplayName(): $Component;
        clearContent(): void;
        getRedstoneSignal(): number;
        getPage(): number;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        hasBook(): boolean;
        setPage(page: number): void;
        onBookItemRemove(): void;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_): void;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_, player: $Player | null): void;
        getBook(): $ItemStack;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        shouldCloseCurrentScreen(): boolean;
        getBookAccess(): $Container;
        getDataAccess(): $ContainerData;
        worldPosition: $BlockPos;
        static NUM_SLOTS: number;
        static DATA_PAGE: number;
        level: $Level;
        book: $ItemStack;
        static ATTACHMENTS_NBT_KEY: string;
        page: number;
        hasComparators: number;
        static SLOT_BOOK: number;
        static NUM_DATA: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get displayName(): $Component;
        get redstoneSignal(): number;
        get bookAccess(): $Container;
        get dataAccess(): $ContainerData;
    }
    export class $BannerBlockEntity extends $BlockEntity implements $Nameable {
        getName(): $Component;
        getItem(): $ItemStack;
        getCustomName(): $Component;
        fromItem(stack: $ItemStack_, color: $DyeColor_): void;
        getBaseColor(): $DyeColor;
        getPatterns(): $BannerPatternLayers;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        static MAX_PATTERNS: number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, baseColor: $DyeColor_);
        get name(): $Component;
        get item(): $ItemStack;
        get customName(): $Component;
        get baseColor(): $DyeColor;
        get patterns(): $BannerPatternLayers;
        get displayName(): $Component;
    }
    export class $Hopper {
        static SUCK_AABB: $AABB;
    }
    export interface $Hopper extends $Container {
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        isGridAligned(): boolean;
        getSuckAabb(): $AABB;
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get gridAligned(): boolean;
        get suckAabb(): $AABB;
    }
    export class $ChiseledBookShelfBlockEntity extends $BlockEntity implements $Container, $LithiumTransferConditionInventory {
        isEmpty(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        clearContent(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getLastInteractedSlot(): number;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        getMaxStackSize(stack: $ItemStack_): number;
        canReceiveTransferCooldown(): boolean;
        setTransferCooldown(arg0: number): void;
        setChanged(): void;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        clientsort$setChanged(): void;
        worldPosition: $BlockPos;
        static MAX_BOOKS_IN_STORAGE: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get containerSize(): number;
        get lastInteractedSlot(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get height(): number;
        get width(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $ConduitBlockEntity extends $BlockEntity {
        isActive(): boolean;
        isHunting(): boolean;
        getActiveRotation(partialTick: number): number;
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        worldPosition: $BlockPos;
        tickCount: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get active(): boolean;
        get hunting(): boolean;
    }
    export class $ContainerOpenersCounter {
        onClose(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        incrementOpeners(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        decrementOpeners(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        getOpenerCount(): number;
        recheckOpeners(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        onOpen(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        isOwnContainer(player: $Player): boolean;
        openerCountChanged(level: $Level_, pos: $BlockPos_, state: $BlockState_, count: number, openCount: number): void;
        static scheduleRecheck(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        getPlayersWithContainerOpen(level: $Level_, pos: $BlockPos_): $List<$Player>;
        maxInteractionRange: number;
        openCount: number;
        constructor();
        get openerCount(): number;
    }
    export class $JigsawBlockEntity extends $BlockEntity {
        getName(): $ResourceLocation;
        setName(name: $ResourceLocation_): void;
        getPool(): $ResourceKey<$StructureTemplatePool>;
        getTarget(): $ResourceLocation;
        setTarget(name: $ResourceLocation_): void;
        generate(level: $ServerLevel, maxDepth: number, keepJigsaws: boolean): void;
        setFinalState(finalState: string): void;
        getJoint(): $JigsawBlockEntity$JointType;
        setPool(pool: $ResourceKey_<$StructureTemplatePool>): void;
        setJoint(joint: $JigsawBlockEntity$JointType_): void;
        getSelectionPriority(): number;
        setPlacementPriority(placementPriority: number): void;
        getPlacementPriority(): number;
        setSelectionPriority(placementPriority: number): void;
        getFinalState(): string;
        static TARGET: string;
        worldPosition: $BlockPos;
        level: $Level;
        static FINAL_STATE: string;
        static SELECTION_PRIORITY: string;
        static POOL: string;
        static PLACEMENT_PRIORITY: string;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        static JOINT: string;
        remove: boolean;
        static NAME: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $CalibratedSculkSensorBlockEntity$VibrationUser extends $SculkSensorBlockEntity$VibrationUser {
    }
    export class $BannerPatternLayers$Layer extends $Record {
        pattern(): $Holder<$BannerPattern>;
        color(): $DyeColor;
        description(): $MutableComponent;
        static CODEC: $Codec<$BannerPatternLayers$Layer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers$Layer>;
        constructor(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers$Layer}.
     */
    export type $BannerPatternLayers$Layer_ = { pattern?: $Holder_<$BannerPattern>, color?: $DyeColor_,  } | [pattern?: $Holder_<$BannerPattern>, color?: $DyeColor_, ];
    export class $DecoratedPotBlockEntity extends $BlockEntity implements $RandomizableContainer, $ContainerSingleItem$BlockContainerSingleItem {
        splitTheItem(amount: number): $ItemStack;
        setLootTableSeed(seed: number): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        getPotAsItem(): $ItemStack;
        getLootTableSeed(): number;
        getLootTable(): $ResourceKey<$LootTable>;
        getDirection(): $Direction;
        getDecorations(): $PotDecorations;
        setFromItem(item: $ItemStack_): void;
        static createDecoratedPotItem(decorations: $PotDecorations_): $ItemStack;
        getContainerBlockEntity(): $BlockEntity;
        wobble(style: $DecoratedPotBlockEntity$WobbleStyle_): void;
        setTheItem(item: $ItemStack_): void;
        getTheItem(): $ItemStack;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        unpackLootTable(player: $Player | null): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        removeTheItem(): $ItemStack;
        clearContent(): void;
        canReceiveTransferCooldown(): boolean;
        setTransferCooldown(seed: number): void;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        setChanged(): void;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        getStackInSlot(amount: number): $ItemStack;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        clientsort$setChanged(): void;
        static TAG_SHERDS: string;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        lastWobbleStyle: $DecoratedPotBlockEntity$WobbleStyle;
        static TAG_ITEM: string;
        level: $Level;
        wobbleStartedAtTick: number;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        static EVENT_POT_WOBBLES: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get potAsItem(): $ItemStack;
        get direction(): $Direction;
        get decorations(): $PotDecorations;
        set fromItem(value: $ItemStack_);
        get containerBlockEntity(): $BlockEntity;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get height(): number;
        get width(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $SculkShriekerBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getVibrationData(): $VibrationSystem$Data;
        getVibrationUser(): $VibrationSystem$User;
        static tryGetPlayer(entity: $Entity | null): $ServerPlayer;
        tryShriek(level: $ServerLevel, player: $ServerPlayer | null): void;
        tryRespond(level: $ServerLevel): void;
        getListener(): $VibrationSystem$Listener;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get vibrationData(): $VibrationSystem$Data;
        get vibrationUser(): $VibrationSystem$User;
        get listener(): $VibrationSystem$Listener;
    }
}
