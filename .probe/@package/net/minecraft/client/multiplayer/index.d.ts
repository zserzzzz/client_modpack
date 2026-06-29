import { $ServerLinks, $ServerLinks_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $PanoramaRenderer, $CubeMap, $DimensionSpecialEffects } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $XaeroMinimapSession } from "@package/xaero/common";
import { $Entity, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $InetSocketAddress, $URL } from "@package/java/net";
import { $DisconnectionDetails_, $ServerboundPacketListener, $TickablePacketListener, $Connection, $FriendlyByteBuf, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $EquippedOutfitsManager } from "@package/gg/essential/network/connectionmanager/cosmetics";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $PlayerChatMessage_, $RemoteChatSession, $SignedMessageChain$Encoder, $PlayerChatMessage, $RemoteChatSession_, $SignedMessageValidator, $LocalChatSession, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ChunkAccess, $LevelChunk, $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $VeilClientSuggestionProvider } from "@package/foundry/veil/ext";
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$ElementSuggestionType_, $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $NeoListenableNetworkHandler } from "@package/org/sinytra/fabric/networking_api";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $ServerListAccessor } from "@package/gg/essential/mixins/transformers/client/multiplayer";
import { $IXaeroMinimapClientWorld, $MinimapClientWorldData } from "@package/xaero/common/minimap/mcworld";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $StatsCounter } from "@package/net/minecraft/stats";
import { $IMixinServerList } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $IWorldMapClientPlayNetHandler } from "@package/xaero/map/core";
import { $ServerStatus$Players } from "@package/net/minecraft/network/protocol/status";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $BlockStatePredictionHandler } from "@package/net/minecraft/client/multiplayer/prediction";
import { $UUID_, $Set_, $List, $List_, $UUID, $ArrayList, $Map, $Map_, $Collection, $Set } from "@package/java/util";
import { $ChunkTrackerHolder, $ChunkTracker } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
import { $ClientboundCookieRequestPacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $HolderLookup$Provider, $RegistryAccess$Frozen, $RegistrySynchronization$PackedRegistryEntry_, $Direction_, $LayeredRegistryAccess, $Holder_, $BlockPos, $BlockPos_, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry, $SectionPos } from "@package/net/minecraft/core";
import { $FabricClientCommandSource } from "@package/net/fabricmc/fabric/api/client/command/v2";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Iterable, $Object, $Exception, $Throwable, $Record, $Runnable_ } from "@package/java/lang";
import { $ClientLoginNetworkAddon } from "@package/net/fabricmc/fabric/impl/networking/client";
import { $BiomeSeedProvider } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $GameRules, $ChunkPos, $CommonLevelAccessor, $ColorResolver_, $Level_, $GameType, $EntityGetter, $LevelHeightAccessor, $Level, $LightLayer_, $GameType_ } from "@package/net/minecraft/world/level";
import { $ClientWorldAccessor } from "@package/gg/essential/mixins/transformers/client";
import { $DebugScreenOverlay, $ChatComponent$State, $Renderable, $CycleButton } from "@package/net/minecraft/client/gui/components";
import { $ClientboundHelloPacket, $ClientboundLoginDisconnectPacket, $ClientboundCustomQueryPacket_, $ClientboundGameProfilePacket_, $ClientboundLoginCompressionPacket, $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $ParticleSystem } from "@package/gg/essential/model";
import { $ClientboundPongResponsePacket_ } from "@package/net/minecraft/network/protocol/ping";
import { $IXaeroMinimapClientPlayNetHandler } from "@package/xaero/common/core";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $ClientPacketListenerAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Screen, $Screen$DeferredTooltipRendering, $ConfirmScreen } from "@package/net/minecraft/client/gui/screens";
import { $ChannelHandlerContext, $SimpleChannelInboundHandler } from "@package/io/netty/channel";
import { $ClientLoginNetworkHandlerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $IClientChunkCacheExt } from "@package/net/mehvahdjukaar/vista/client";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $CommandDispatcher, $ParseResults } from "@package/com/mojang/brigadier";
import { $DebugQueryHandler, $Minecraft, $NarratorStatus, $User, $ClientRecipeBook } from "@package/net/minecraft/client";
import { $ServerDataExt } from "@package/gg/essential/mixins/ext/client/multiplayer";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementTree$Listener, $AdvancementHolder_, $AdvancementTree, $AdvancementHolder, $AdvancementProgress, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Difficulty_, $InteractionResult, $Difficulty } from "@package/net/minecraft/world";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $ExtendedServerListData } from "@package/net/neoforged/neoforge/client";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $BooleanConsumer } from "@package/it/unimi/dsi/fastutil/booleans";
import { $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $LevelCallback, $EntityTickList, $TransientEntitySectionManager } from "@package/net/minecraft/world/level/entity";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $NetworkPlayerInfoExt } from "@package/gg/essential/mixins/impl/client/network";
import { $ParticleSystemHolder } from "@package/gg/essential/mixins/ext/client";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $IMixinClientPacketListener } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $ProfileKeyPair, $Player, $ProfileKeyPair_ } from "@package/net/minecraft/world/entity/player";
import { $Function_ } from "@package/it/unimi/dsi/fastutil";
import { $IWorldMapClientWorld, $WorldMapClientWorldData } from "@package/xaero/map/mcworld";
import { $ClientLevelAccessor } from "@package/dev/ryanhcode/offroad/mixin/client/multimining_destruction_progress";
import { $KnownPack_, $KnownPack, $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ClientPacketListenerKJS, $ClientLevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $SearchTree } from "@package/net/minecraft/client/searchtree";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $AABB_, $Vec3_, $BlockHitResult, $EntityHitResult, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $NetworkHandlerExtensions } from "@package/net/fabricmc/fabric/impl/networking";
import { $LevelPoseProviderExtension } from "@package/dev/ryanhcode/sable/mixinterface/clip_overwrite";
import { $ServerDataExtension } from "@package/com/aizistral/nochatreports/common/core";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ClientboundResourcePackPopPacket_, $ClientboundCustomPayloadPacket_, $ClientboundPingPacket, $ClientboundCustomReportDetailsPacket_, $ClientboundServerLinksPacket_, $ClientboundStoreCookiePacket_, $ClientboundTransferPacket_, $ClientboundDisconnectPacket_, $ClientboundKeepAlivePacket, $ClientCommonPacketListener, $ClientboundResourcePackPushPacket_ } from "@package/net/minecraft/network/protocol/common";
import { $Supplier_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $SuggestionsBuilder, $Suggestions } from "@package/com/mojang/brigadier/suggestion";
import { $MapId_, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TagNetworkSerialization$NetworkPayload } from "@package/net/minecraft/tags";
import { $Pose3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $IngameEquippedOutfitsManager, $IngameEquippedOutfitsUpdateEncoder } from "@package/gg/essential/cosmetics";
import { $ContraptionHeightMapProvider, $ContraptionHeightMap } from "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/compat/create/neoforge";
import { $ClientboundSetBorderSizePacket, $ClientboundDamageEventPacket_, $ClientboundUpdateAttributesPacket, $ClientboundHurtAnimationPacket_, $ClientboundPlayerInfoRemovePacket_, $ClientboundSetSimulationDistancePacket_, $ClientboundSetActionBarTextPacket_, $ClientboundSetCarriedItemPacket, $ClientboundLevelChunkWithLightPacket, $ClientboundDisguisedChatPacket_, $ClientboundPlayerCombatEnterPacket, $ClientboundSetBorderCenterPacket, $ClientboundTickingStepPacket_, $ClientboundSetDisplayObjectivePacket, $ClientboundSetExperiencePacket, $ClientboundTakeItemEntityPacket, $ClientboundStartConfigurationPacket, $ClientboundUpdateRecipesPacket, $ClientboundPlayerInfoUpdatePacket, $ClientboundPlayerCombatEndPacket, $ClientboundBlockChangedAckPacket_, $ClientboundRemoveEntitiesPacket, $ClientboundSetCameraPacket, $ClientboundSetEquipmentPacket, $ClientboundPlayerPositionPacket, $ClientboundCustomChatCompletionsPacket$Action_, $ClientboundAwardStatsPacket_, $ClientboundForgetLevelChunkPacket_, $ClientboundAddEntityPacket, $ClientboundSetDefaultSpawnPositionPacket, $ClientboundSetTitlesAnimationPacket, $ClientboundSetChunkCacheCenterPacket, $ClientboundCommandsPacket, $ClientboundLevelParticlesPacket, $ClientboundLevelEventPacket, $ClientboundSystemChatPacket_, $ClientboundPlayerChatPacket_, $ClientboundContainerSetSlotPacket, $ClientboundTabListPacket_, $ClientboundSetScorePacket_, $ClientboundMerchantOffersPacket, $ClientboundTeleportEntityPacket, $ClientboundUpdateAdvancementsPacket, $ClientboundChunkBatchStartPacket, $ClientboundMoveEntityPacket, $ClientboundChunkBatchFinishedPacket_, $ClientboundSetPlayerTeamPacket, $ClientboundContainerSetDataPacket, $ClientboundSetBorderWarningDelayPacket, $ClientboundExplodePacket, $ClientboundSelectAdvancementsTabPacket, $ClientboundDebugSamplePacket_, $ClientboundCooldownPacket_, $ClientboundLevelChunkPacketData, $ClientboundSetBorderWarningDistancePacket, $ClientboundSetBorderLerpSizePacket, $ClientboundBlockEntityDataPacket, $ClientboundAnimatePacket, $ClientboundDeleteChatPacket_, $ClientboundServerDataPacket_, $ClientboundContainerSetContentPacket, $ClientboundSoundPacket, $ClientboundCustomChatCompletionsPacket_, $ClientboundMoveVehiclePacket, $ClientboundSetTitleTextPacket_, $ClientboundTickingStatePacket_, $ClientboundPlayerLookAtPacket, $ClientboundSectionBlocksUpdatePacket, $ClientboundSetPassengersPacket, $ClientboundUpdateMobEffectPacket, $ClientboundLightUpdatePacket, $ClientboundBlockDestructionPacket, $ClientboundOpenBookPacket, $ClientboundBlockUpdatePacket, $ClientboundStopSoundPacket, $ClientboundLevelChunkPacketData$BlockEntityTagOutput, $ClientboundLoginPacket_, $ClientboundSetEntityLinkPacket, $ClientboundRespawnPacket_, $ClientboundRecipePacket, $ClientboundPlayerCombatKillPacket_, $ClientboundChunksBiomesPacket_, $ClientboundContainerClosePacket, $ClientboundSetEntityDataPacket_, $ClientboundSetObjectivePacket, $ClientboundPlaceGhostRecipePacket, $ClientboundHorseScreenOpenPacket, $ClientboundClearTitlesPacket, $ClientboundProjectilePowerPacket, $ClientboundBossEventPacket, $ClientboundAddExperienceOrbPacket, $ClientboundGameEventPacket, $ClientboundSetSubtitleTextPacket_, $ClientboundRotateHeadPacket, $ClientboundChangeDifficultyPacket, $ClientboundSetHealthPacket, $ClientboundSetEntityMotionPacket, $ClientboundRemoveMobEffectPacket_, $ClientboundSetTimePacket, $ClientboundResetScorePacket_, $ClientboundSetChunkCacheRadiusPacket, $ClientboundSoundEntityPacket, $ClientboundTagQueryPacket, $ClientboundMapItemDataPacket_, $ClientboundInitializeBorderPacket, $ClientboundEntityEventPacket, $ClientGamePacketListener, $ClientboundOpenScreenPacket, $ClientboundBundlePacket, $ClientboundCommandSuggestionsPacket_, $ClientboundOpenSignEditorPacket, $ClientboundBlockEventPacket, $ClientboundPlayerAbilitiesPacket } from "@package/net/minecraft/network/protocol/game";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ClientboundUpdateEnabledFeaturesPacket_, $ClientboundFinishConfigurationPacket, $ClientboundResetChatPacket, $ClientConfigurationPacketListener, $ClientboundRegistryDataPacket_, $ClientboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $Stream } from "@package/java/util/stream";
import { $WorldSessionTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $AccessorClientPacketListener } from "@package/com/aizistral/nochatreports/common/mixins/client";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $WorldMapSession } from "@package/xaero/map";
import { $IClientLevel, $ClientLevelData } from "@package/xaero/lib/client/level";
import { $ClientWorldAccessor as $ClientWorldAccessor$1 } from "@package/net/caffeinemc/mods/lithium/common/client";
import { $Scoreboard, $PlayerTeam } from "@package/net/minecraft/world/scores";
import { $Font } from "@package/net/minecraft/client/gui";
import { $NetHandlerPlayClientExt } from "@package/gg/essential/mixins/ext/client/network";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ClientLevelAccessor as $ClientLevelAccessor$1 } from "@package/rbasamoyai/createbigcannons/mixin/client";
export * as chat from "@package/net/minecraft/client/multiplayer/chat";
export * as resolver from "@package/net/minecraft/client/multiplayer/resolver";
export * as prediction from "@package/net/minecraft/client/multiplayer/prediction";

declare module "@package/net/minecraft/client/multiplayer" {
    export class $SessionSearchTrees$Key {
        constructor();
    }
    export class $TagCollector {
        append(registryKey: $ResourceKey_<$Registry<never>>, networkPayload: $TagNetworkSerialization$NetworkPayload): void;
        updateTags(registryAccess: $RegistryAccess, isMemoryConnection: boolean): void;
        constructor();
    }
    export class $ServerData$State extends $Enum<$ServerData$State> {
        static values(): $ServerData$State[];
        static valueOf(arg0: string): $ServerData$State;
        static PINGING: $ServerData$State;
        static SUCCESSFUL: $ServerData$State;
        static INITIAL: $ServerData$State;
        static INCOMPATIBLE: $ServerData$State;
        static UNREACHABLE: $ServerData$State;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$State}.
     */
    export type $ServerData$State_ = "initial" | "pinging" | "unreachable" | "incompatible" | "successful";
    export class $AccountProfileKeyPairManager implements $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
        constructor(userApiService: $UserApiService, uuid: $UUID_, gameDirectory: $Path_);
    }
    export class $ClientConfigurationPacketListenerImpl extends $ClientCommonPacketListenerImpl implements $ClientConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler {
        tick(): void;
        handleDisconnect(): void;
        handleSelectKnownPacks(packet: $ClientboundSelectKnownPacks_): void;
        handleConfigurationFinished(packet: $ClientboundFinishConfigurationPacket): void;
        handleEnabledFeatures(packet: $ClientboundUpdateEnabledFeaturesPacket_): void;
        handler$fdh000$fabric_networking_api_v1$handleComplete(arg0: $ClientboundFinishConfigurationPacket, arg1: $CallbackInfo): void;
        handleResetChat(packet: $ClientboundResetChatPacket): void;
        handleRegistryData(packet: $ClientboundRegistryDataPacket_): void;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverLinks: $ServerLinks;
        serverCookies: $Map<$ResourceLocation, number[]>;
        connection: $Connection;
        chatState: $ChatComponent$State;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
    }
    export class $ClientHandshakePacketListenerImpl$State extends $Enum<$ClientHandshakePacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ClientHandshakePacketListenerImpl$State}.
     */
    export type $ClientHandshakePacketListenerImpl$State_ = "connecting" | "authorizing" | "encrypting" | "joining";
    export class $LevelLoadStatusManager {
        tick(): void;
        loadingPacketsReceived(): void;
        levelReady(): boolean;
        constructor(player: $LocalPlayer, level: $ClientLevel, levelRenderer: $LevelRenderer);
    }
    export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $AccessorClientPacketListener, $ClientPacketListenerAccessor, $IXaeroMinimapClientPlayNetHandler, $IWorldMapClientPlayNetHandler, $IMixinClientPacketListener, $ClientPacketListenerKJS, $NetHandlerPlayClientExt {
        getId(): $UUID;
        close(): void;
        tick(): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ClientLevel;
        handler$doa000$xaerominimap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$doa000$xaerominimap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        modify$bfm000$chat_heads$chatheads$rememberSenderInfo(playerChatMessage: $PlayerChatMessage_, senderInfo: $LocalRef<any>): $PlayerChatMessage;
        handler$bfm000$chat_heads$chatheads$captureSenderInfo(packet: $ClientboundPlayerChatPacket_, ci: $CallbackInfo, senderInfo: $LocalRef<any>): void;
        handler$een001$xaeroworldmap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$een001$xaeroworldmap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$een001$xaeroworldmap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$doa000$xaerominimap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        getCommands(): $CommandDispatcher<$SharedSuggestionProvider>;
        getLocalGameProfile(): $GameProfile;
        handleDamageEvent(packet: $ClientboundDamageEventPacket_): void;
        potionBrewing(): $PotionBrewing;
        sendChat(message: string): void;
        handler$doa000$xaerominimap$onSendCommand(arg0: string, arg1: $CallbackInfo): void;
        getEssential$ingameEquippedOutfitsManager(): $IngameEquippedOutfitsManager;
        enabledFeatures(): $FeatureFlagSet;
        getAdvancements(): $ClientAdvancements;
        registryAccess(): $RegistryAccess$Frozen;
        getServerData(): $ServerData;
        updateSearchTrees(): void;
        getRecipeManager(): $RecipeManager;
        /**
         * Invokes the entities' handleUpdateHealth method which is implemented in LivingBase (hurt/death), MinecartMobSpawner (spawn delay), FireworkRocket & MinecartTNT (explosion), IronGolem (throwing, ...), Witch (spawn particles), Zombie (villager transformation), Animal (breeding mode particles), Horse (breeding/smoke particles), Sheep (...), Tameable (...), Villager (particles for breeding mode, angry and happy), Wolf (...)
         */
        handleEntityEvent(packet: $ClientboundEntityEventPacket): void;
        handler$een001$xaeroworldmap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$een000$xaeroworldmap$onCleanup(arg0: $CallbackInfo): void;
        handler$bhk000$exposure$handleLogin(packet: $ClientboundLoginPacket_, ci: $CallbackInfo): void;
        handler$eep001$xaeroworldmap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$doa002$xaerominimap$onClose(arg0: $CallbackInfo): void;
        handler$doa000$xaerominimap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$doa000$xaerominimap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        scoreboard(): $Scoreboard;
        getXaero_minimapSession(): $XaeroMinimapSession;
        setXaero_worldmapSession(arg0: $WorldMapSession): void;
        setXaero_minimapSession(arg0: $XaeroMinimapSession): void;
        essential$getNameIdCache(): $Map<any, any>;
        getEssential$maxPlayers(): number;
        getXaero_worldmapSession(): $WorldMapSession;
        /**
         * Spawns an experience orb and sets its value (amount of XP)
         */
        handleAddExperienceOrb(packet: $ClientboundAddExperienceOrbPacket): void;
        /**
         * Sets the velocity of the specified entity to the specified value
         */
        handleSetEntityMotion(packet: $ClientboundSetEntityMotionPacket): void;
        /**
         * Invoked when the server registers new proximate objects in your watchlist or when objects in your watchlist have changed -> Registers any changes locally
         */
        handleSetEntityData(packet: $ClientboundSetEntityDataPacket_): void;
        /**
         * Updates an entity's position and rotation as specified by the packet
         */
        handleTeleportEntity(packet: $ClientboundTeleportEntityPacket): void;
        /**
         * Updates which hotbar slot of the player is currently selected
         */
        handleSetCarriedItem(packet: $ClientboundSetCarriedItemPacket): void;
        handleRemoveEntities(packet: $ClientboundRemoveEntitiesPacket): void;
        getSuggestionsProvider(): $ClientSuggestionProvider;
        handleSetExperience(packet: $ClientboundSetExperiencePacket): void;
        handlePlayerCombatEnter(packet: $ClientboundPlayerCombatEnterPacket): void;
        handleTabListCustomisation(packet: $ClientboundTabListPacket_): void;
        /**
         * Updates all registered IWorldAccess instances with destroyBlockInWorldPartially
         */
        handleBlockDestruction(packet: $ClientboundBlockDestructionPacket): void;
        /**
         * Handles picking up an ItemStack or dropping one in your inventory or an open (non-creative) container
         */
        handleContainerSetSlot(packet: $ClientboundContainerSetSlotPacket): void;
        handleUpdateMobEffect(packet: $ClientboundUpdateMobEffectPacket): void;
        handleSetBorderSize(packet: $ClientboundSetBorderSizePacket): void;
        handleStopSoundEvent(packet: $ClientboundStopSoundPacket): void;
        handleInitializeBorder(packet: $ClientboundInitializeBorderPacket): void;
        handlePlayerAbilities(packet: $ClientboundPlayerAbilitiesPacket): void;
        handleSoundEntityEvent(packet: $ClientboundSoundEntityPacket): void;
        handleTagQueryPacket(packet: $ClientboundTagQueryPacket): void;
        handleTakeItemEntity(packet: $ClientboundTakeItemEntityPacket): void;
        /**
         * Creates a sign in the specified location if it didn't exist and opens the GUI to edit its text
         */
        handleOpenSignEditor(packet: $ClientboundOpenSignEditorPacket): void;
        handleSetBorderLerpSize(packet: $ClientboundSetBorderLerpSizePacket): void;
        /**
         * Updates the NBTTagCompound metadata of instances of the following entitytypes: Mob spawners, command blocks, beacons, skulls, flowerpot
         */
        handleBlockEntityData(packet: $ClientboundBlockEntityDataPacket): void;
        handlePlayerInfoRemove(packet: $ClientboundPlayerInfoRemovePacket_): void;
        handleDisguisedChat(packet: $ClientboundDisguisedChatPacket_): void;
        handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket): void;
        handleEntityLinkPacket(packet: $ClientboundSetEntityLinkPacket): void;
        handleUpdateRecipes(packet: $ClientboundUpdateRecipesPacket): void;
        /**
         * Handles the placement of a specified ItemStack in a specified container/inventory slot
         */
        handleContainerContent(packet: $ClientboundContainerSetContentPacket): void;
        /**
         * Sets the progressbar of the opened window to the specified value
         */
        handleContainerSetData(packet: $ClientboundContainerSetDataPacket): void;
        handlePlayerCombatKill(packet: $ClientboundPlayerCombatKillPacket_): void;
        handleSetBorderCenter(packet: $ClientboundSetBorderCenterPacket): void;
        handleRemoveMobEffect(packet: $ClientboundRemoveMobEffectPacket_): void;
        handlePlayerInfoUpdate(packet: $ClientboundPlayerInfoUpdatePacket): void;
        handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_): void;
        handleHorseScreenOpen(packet: $ClientboundHorseScreenOpenPacket): void;
        handleAddOrRemoveRecipes(packet: $ClientboundRecipePacket): void;
        handleConfigurationStart(packet: $ClientboundStartConfigurationPacket): void;
        /**
         * Resets the ItemStack held in hand and closes the window that is opened
         */
        handleContainerClose(packet: $ClientboundContainerClosePacket): void;
        handleHurtAnimation(packet: $ClientboundHurtAnimationPacket_): void;
        /**
         * Received from the servers PlayerManager if between 1 and 64 blocks in a chunk are changed. If only one block requires an update, the server sends S23PacketBlockChange and if 64 or more blocks are changed, the server sends S21PacketChunkData
         */
        handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket): void;
        handlePlayerCombatEnd(packet: $ClientboundPlayerCombatEndPacket): void;
        handleChangeDifficulty(packet: $ClientboundChangeDifficultyPacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCommandSuggestions(packet: $ClientboundCommandSuggestionsPacket_): void;
        handleMerchantOffers(packet: $ClientboundMerchantOffersPacket): void;
        handleChunkBatchStart(packet: $ClientboundChunkBatchStartPacket): void;
        handleSetChunkCacheCenter(packet: $ClientboundSetChunkCacheCenterPacket): void;
        markMessageAsProcessed(chatMessage: $PlayerChatMessage_, acknowledged: boolean): void;
        /**
         * Removes or sets the ScoreObjective to be displayed at a particular scoreboard position (list, sidebar, below name)
         */
        handleSetDisplayObjective(packet: $ClientboundSetDisplayObjectivePacket): void;
        /**
         * Updates a team managed by the scoreboard: Create/Remove the team registration, Register/Remove the player-team-memberships, Set team displayname/prefix/suffix and/or whether friendly fire is enabled
         */
        handleSetPlayerTeamPacket(packet: $ClientboundSetPlayerTeamPacket): void;
        /**
         * Updates en entity's attributes and their respective modifiers, which are used for speed bonuses (player sprinting, animals fleeing, baby speed), weapon/tool attackDamage, hostiles followRange randomization, zombie maxHealth and knockback resistance as well as reinforcement spawning chance.
         */
        handleUpdateAttributes(packet: $ClientboundUpdateAttributesPacket): void;
        handleSetChunkCacheRadius(packet: $ClientboundSetChunkCacheRadiusPacket): void;
        handleLightUpdatePacket(packet: $ClientboundLightUpdatePacket): void;
        handleChunkBatchFinished(packet: $ClientboundChunkBatchFinishedPacket_): void;
        getListedOnlinePlayers(): $Collection<$PlayerInfo>;
        getDebugQueryHandler(): $DebugQueryHandler;
        /**
         * Spawns a specified number of particles at the specified location with a randomized displacement according to specified bounds
         */
        handleParticleEvent(packet: $ClientboundLevelParticlesPacket): void;
        sendCommand(message: string): void;
        /**
         * Gets the client's description information about another player on the server.
         */
        getPlayerInfo(name: string): $PlayerInfo;
        getPlayerInfo(uniqueId: $UUID_): $PlayerInfo;
        sendUnsignedCommand(command: string): boolean;
        getOnlinePlayerIds(): $Collection<$UUID>;
        handleDisconnect(): void;
        getOnlinePlayers(): $Collection<$PlayerInfo>;
        /**
         * Registers some server properties (gametype, hardcore-mode, terraintype, difficulty, player limit), creates a new WorldClient and sets the player initial dimension.
         */
        handleLogin(packet: $ClientboundLoginPacket_): void;
        handleTickingState(packet: $ClientboundTickingStatePacket_): void;
        searchTrees(): $SessionSearchTrees;
        /**
         * Renders a specified animation: Waking up a player, a living entity swinging its currently held item, being hurt or receiving a critical hit by normal or magical means
         */
        handleAnimate(packet: $ClientboundAnimatePacket): void;
        /**
         * Updates the block and metadata and generates a blockupdate (and notify the clients)
         */
        handleBlockUpdate(packet: $ClientboundBlockUpdatePacket): void;
        /**
         * Updates the direction in which the specified entity is looking, normally this head rotation is independent of the rotation of the entity itself
         */
        handleRotateMob(packet: $ClientboundRotateHeadPacket): void;
        handleSetHealth(packet: $ClientboundSetHealthPacket): void;
        handleMovePlayer(packet: $ClientboundPlayerPositionPacket): void;
        handleRespawn(packet: $ClientboundRespawnPacket_): void;
        /**
         * Initiates a new explosion (sound, particles, drop spawn) for the affected blocks indicated by the packet.
         */
        handleExplosion(packet: $ClientboundExplodePacket): void;
        kjs$sessionData(): $KubeSessionData;
        handleTickingStep(packet: $ClientboundTickingStepPacket_): void;
        /**
         * Updates the specified entity's position by the specified relative momentum and absolute rotation. Note that subclassing of the packet allows for the specification of a subset of this data (e.g. only rel. position, abs. rotation or both).
         */
        handleMoveEntity(packet: $ClientboundMoveEntityPacket): void;
        handleDeleteChat(packet: $ClientboundDeleteChatPacket_): void;
        handleSystemChat(packet: $ClientboundSystemChatPacket_): void;
        handleSetTime(packet: $ClientboundSetTimePacket): void;
        handleSetSpawn(packet: $ClientboundSetDefaultSpawnPositionPacket): void;
        handlePlayerChat(packet: $ClientboundPlayerChatPacket_): void;
        handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_): void;
        /**
         * Spawns an instance of the objecttype indicated by the packet and sets its position and momentum
         */
        handleAddEntity(packet: $ClientboundAddEntityPacket): void;
        setTitleText(packet: $ClientboundSetTitleTextPacket_): void;
        /**
         * Updates the worlds MapStorage with the specified MapData for the specified map-identifier and invokes a MapItemRenderer for it
         */
        handleMapItemData(packet: $ClientboundMapItemDataPacket_): void;
        handleCommands(packet: $ClientboundCommandsPacket): void;
        handleSetCamera(packet: $ClientboundSetCameraPacket): void;
        handleServerData(packet: $ClientboundServerDataPacket_): void;
        handleOpenScreen(packet: $ClientboundOpenScreenPacket): void;
        handleTitlesClear(packet: $ClientboundClearTitlesPacket): void;
        handleLookAt(packet: $ClientboundPlayerLookAtPacket): void;
        /**
         * Updates the players statistics or achievements
         */
        handleAwardStats(packet: $ClientboundAwardStatsPacket_): void;
        setActionBarText(packet: $ClientboundSetActionBarTextPacket_): void;
        handleLevelEvent(packet: $ClientboundLevelEventPacket): void;
        handleSetEquipment(packet: $ClientboundSetEquipmentPacket): void;
        /**
         * Triggers Block.onBlockEventReceived, which is implemented in BlockPistonBase for extension/retraction, BlockNote for setting the instrument (including audiovisual feedback) and in BlockContainer to set the number of players accessing a (Ender)Chest
         */
        handleBlockEvent(packet: $ClientboundBlockEventPacket): void;
        handlePlaceRecipe(packet: $ClientboundPlaceGhostRecipePacket): void;
        handleBossUpdate(packet: $ClientboundBossEventPacket): void;
        handleOpenBook(packet: $ClientboundOpenBookPacket): void;
        handleSoundEvent(packet: $ClientboundSoundPacket): void;
        setTitlesAnimation(packet: $ClientboundSetTitlesAnimationPacket): void;
        setSubtitleText(packet: $ClientboundSetSubtitleTextPacket_): void;
        /**
         * Either updates the score with a specified value or removes the score for an objective
         */
        handleSetScore(packet: $ClientboundSetScorePacket_): void;
        handleItemCooldown(packet: $ClientboundCooldownPacket_): void;
        /**
         * May create a scoreboard objective, remove an objective from the scoreboard or update an objectives' displayname
         */
        handleAddObjective(packet: $ClientboundSetObjectivePacket): void;
        handleMoveVehicle(packet: $ClientboundMoveVehiclePacket): void;
        handleResetScore(packet: $ClientboundResetScorePacket_): void;
        handleDebugSample(packet: $ClientboundDebugSamplePacket_): void;
        handleBundlePacket(packet: $ClientboundBundlePacket): void;
        isFeatureEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        handlePongResponse(packet: $ClientboundPongResponsePacket_): void;
        handleGameEvent(packet: $ClientboundGameEventPacket): void;
        setKeyPair(keyPair: $ProfileKeyPair_): void;
        handleProjectilePowerPacket(packet: $ClientboundProjectilePowerPacket): void;
        handleSetSimulationDistance(packet: $ClientboundSetSimulationDistancePacket_): void;
        handleSetEntityPassengersPacket(packet: $ClientboundSetPassengersPacket): void;
        handleSetBorderWarningDelay(packet: $ClientboundSetBorderWarningDelayPacket): void;
        handleSelectAdvancementsTab(packet: $ClientboundSelectAdvancementsTabPacket): void;
        handleCustomChatCompletions(packet: $ClientboundCustomChatCompletionsPacket_): void;
        handleSetBorderWarningDistance(packet: $ClientboundSetBorderWarningDistancePacket): void;
        handleUpdateAdvancementsPacket(packet: $ClientboundUpdateAdvancementsPacket): void;
        serverLinks(): $ServerLinks;
        clearLevel(): void;
        handleBlockChangedAck(packet: $ClientboundBlockChangedAckPacket_): void;
        handler$doa000$xaerominimap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$hch000$distanthorizons$onCleanupStart(ci: $CallbackInfo): void;
        handler$een001$xaeroworldmap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$een001$xaeroworldmap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$doa000$xaerominimap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$doa000$xaerominimap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$hch000$distanthorizons$onHandleLoginEnd(ci: $CallbackInfo): void;
        handler$een001$xaeroworldmap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$doa000$xaerominimap$onSendUnsignedCommand(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        getEssential$ingameEquippedOutfitsUpdateEncoder(): $IngameEquippedOutfitsUpdateEncoder;
        handler$fmh000$xaerolib$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        getCommandsKonkrete(): $CommandDispatcher<$SharedSuggestionProvider>;
        setCommandsKonkrete(arg0: $CommandDispatcher<$SharedSuggestionProvider>): void;
        invokeParseCommand(command: string): $ParseResults<$SharedSuggestionProvider>;
        catnip$getServerChunkRadius(): number;
        xaero_worldmapSession: $WorldMapSession;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        serverChunkRadius: number;
        signedMessageEncoder: $SignedMessageChain$Encoder;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        xaero_minimapSession: $XaeroMinimapSession;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverCookies: $Map<$ResourceLocation, number[]>;
        chatSession: $LocalChatSession;
        connection: $Connection;
        commands: $CommandDispatcher<$SharedSuggestionProvider>;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
        get id(): $UUID;
        get level(): $ClientLevel;
        get localGameProfile(): $GameProfile;
        get essential$ingameEquippedOutfitsManager(): $IngameEquippedOutfitsManager;
        get advancements(): $ClientAdvancements;
        get recipeManager(): $RecipeManager;
        get essential$maxPlayers(): number;
        get suggestionsProvider(): $ClientSuggestionProvider;
        get listedOnlinePlayers(): $Collection<$PlayerInfo>;
        get debugQueryHandler(): $DebugQueryHandler;
        get onlinePlayerIds(): $Collection<$UUID>;
        get onlinePlayers(): $Collection<$PlayerInfo>;
        set titleText(value: $ClientboundSetTitleTextPacket_);
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set keyPair(value: $ProfileKeyPair_);
        get essential$ingameEquippedOutfitsUpdateEncoder(): $IngameEquippedOutfitsUpdateEncoder;
    }
    export class $ServerData$ServerPackStatus extends $Enum<$ServerData$ServerPackStatus> {
        getName(): $Component;
        static values(): $ServerData$ServerPackStatus[];
        static valueOf(arg0: string): $ServerData$ServerPackStatus;
        static DISABLED: $ServerData$ServerPackStatus;
        static PROMPT: $ServerData$ServerPackStatus;
        static ENABLED: $ServerData$ServerPackStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$ServerPackStatus}.
     */
    export type $ServerData$ServerPackStatus_ = "enabled" | "disabled" | "prompt";
    export class $ServerData implements $ServerDataExtension, $ServerDataExt {
        type(): $ServerData$Type;
        /**
         * Returns an NBTTagCompound with the server's name, IP and maybe acceptTextures.
         */
        write(): $CompoundTag;
        /**
         * Takes an NBTTagCompound with 'name' and 'ip' keys, returns a ServerData instance.
         */
        static read(nbtCompound: $CompoundTag_): $ServerData;
        state(): $ServerData$State;
        setState(state: $ServerData$State_): void;
        copyFrom(serverData: $ServerData): void;
        setPreventsChatReports(arg0: boolean): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        preventsChatReports(): boolean;
        getResourcePackStatus(): $ServerData$ServerPackStatus;
        setResourcePackStatus(packStatus: $ServerData$ServerPackStatus_): void;
        static validateIcon(icon: number[] | null): number[];
        setIconBytes(iconBytes: number[] | null): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isRealm(): boolean;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isLan(): boolean;
        copyNameIconFrom(serverData: $ServerData): void;
        getEssential$pingOverride(): number;
        setEssential$pingOverride(pingOverride: number): void;
        getEssential$pingRegion(): string;
        setEssential$isTrusted(isTrusted: boolean): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        getEssential$isTrusted(): boolean;
        setEssential$pingRegion(pingRegion: string): void;
        getIconBytes(): number[];
        /**
         * Returns `true` if the server is a LAN server.
         */
        getEssential$skipModCompatCheck(): boolean;
        setEssential$skipModCompatCheck(skipModCompatCheck: boolean): void;
        getEssential$recommendedVersion(): string;
        getEssential$shareWithFriends(): boolean;
        setEssential$showDownloadIcon(showDownloadIcon: boolean): void;
        setEssential$shareWithFriends(shareWithFriends: boolean): void;
        setEssential$recommendedVersion(recommendedVersion: string): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        getEssential$showDownloadIcon(): boolean;
        neoForgeData: $ExtendedServerListData;
        motd: $Component;
        protocol: number;
        players: $ServerStatus$Players;
        ping: number;
        ip: string;
        playerList: $List<$Component>;
        name: string;
        version: $Component;
        status: $Component;
        constructor(name: string, ip: string, type: $ServerData$Type_);
        get realm(): boolean;
        get lan(): boolean;
    }
    export class $LegacyServerPinger extends $SimpleChannelInboundHandler<$ByteBuf> {
        channelRead0(context: $ChannelHandlerContext, buffer: $ByteBuf): void;
        constructor(address: $ServerAddress, output: $LegacyServerPinger$Output_);
    }
    export class $ServerList implements $IMixinServerList, $ServerListAccessor {
        remove(serverData: $ServerData): void;
        /**
         * Counts the number of ServerData instances in the list.
         */
        size(): number;
        get(ip: string): $ServerData;
        /**
         * Gets the ServerData instance stored for the given index in the list.
         */
        get(index: number): $ServerData;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        load(): void;
        replace(index: number, server: $ServerData): void;
        add(server: $ServerData, hidden: boolean): void;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        save(): void;
        /**
         * Takes two list indexes, and swaps their order around.
         */
        swap(pos1: number, pos2: number): void;
        static saveSingleServer(serverData: $ServerData): void;
        unhide(ip: string): $ServerData;
        getServers(): $List<$ServerData>;
        getServerListFancyMenu(): $List<$ServerData>;
        constructor(minecraft: $Minecraft);
        get servers(): $List<$ServerData>;
        get serverListFancyMenu(): $List<$ServerData>;
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen extends $ConfirmScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        noButton: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static PANORAMA: $PanoramaRenderer;
        yesButton: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ClientChunkCache$Storage {
        replace(chunkIndex: number, chunk: $LevelChunk, replaceWith: $LevelChunk | null): $LevelChunk;
        replace(chunkIndex: number, chunk: $LevelChunk | null): void;
        getIndex(x: number, z: number): number;
        inRange(x: number, z: number): boolean;
        getChunk(chunkIndex: number): $LevelChunk;
        chunkRadius: number;
        viewCenterZ: number;
        chunks: $AtomicReferenceArray<$LevelChunk>;
        chunkCount: number;
        this$0: $ClientChunkCache;
        viewCenterX: number;
        constructor(chunkRadius: $ClientChunkCache, arg1: number);
    }
    export class $ClientLevel$EntityCallbacks implements $LevelCallback<$Entity> {
    }
    export class $PlayerInfo implements $NetworkPlayerInfoExt {
        getLatency(): number;
        setLatency(latency: number): void;
        getTabListDisplayName(): $Component;
        setEssential$equippedOutfitsManager(equippedOutfitsManager: $EquippedOutfitsManager): void;
        getTeam(): $PlayerTeam;
        getEssential$equippedOutfitsManager(): $EquippedOutfitsManager;
        setTabListDisplayName(displayName: $Component_ | null): void;
        getMessageValidator(): $SignedMessageValidator;
        getGameMode(): $GameType;
        getSkin(): $PlayerSkin;
        clearChatSession(enforcesSecureChat: boolean): void;
        /**
         * Returns the GameProfile for the player represented by this NetworkPlayerInfo instance
         */
        getProfile(): $GameProfile;
        setChatSession(chatSession: $RemoteChatSession_): void;
        getChatSession(): $RemoteChatSession;
        setGameMode(gameMode: $GameType_): void;
        handler$icb000$essential$getSkinTextures(info: $CallbackInfoReturnable<any>): void;
        hasVerifiableChat(): boolean;
        constructor(profile: $GameProfile, enforeSecureChat: boolean);
        get team(): $PlayerTeam;
        get messageValidator(): $SignedMessageValidator;
        get skin(): $PlayerSkin;
        get profile(): $GameProfile;
    }
    export class $PingDebugMonitor {
        tick(): void;
        onPongReceived(packet: $ClientboundPongResponsePacket_): void;
        constructor(connection: $ClientPacketListener, delayTimer: $LocalSampleLogger);
    }
    export class $ProfileKeyPairManager {
        static create(userApiService: $UserApiService, user: $User, gameDirectory: $Path_): $ProfileKeyPairManager;
        static EMPTY_KEY_MANAGER: $ProfileKeyPairManager;
    }
    export interface $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
    }
    export class $SessionSearchTrees {
        creativeNameSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeNameSearch(): $SearchTree<$ItemStack>;
        creativeTagSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeTagSearch(): $SearchTree<$ItemStack>;
        recipes(): $SearchTree<$RecipeCollection>;
        rebuildAfterLanguageChange(): void;
        updateCreativeTooltips(registries: $HolderLookup$Provider, items: $List_<$ItemStack_>): void;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>, arg2: $SessionSearchTrees$Key): void;
        updateRecipes(recipeBook: $ClientRecipeBook, registries: $RegistryAccess$Frozen): void;
        updateCreativeTags(items: $List_<$ItemStack_>): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>, arg1: $SessionSearchTrees$Key): void;
        static CREATIVE_NAMES: $SessionSearchTrees$Key;
        static CREATIVE_TAGS: $SessionSearchTrees$Key;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest}.
     */
    export type $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest_ = { id?: $UUID_, hash?: string, url?: $URL,  } | [id?: $UUID_, hash?: string, url?: $URL, ];
    export class $ClientAdvancements {
        get(id: $ResourceLocation_): $AdvancementHolder;
        update(packet: $ClientboundUpdateAdvancementsPacket): void;
        getTree(): $AdvancementTree;
        setListener(listener: $ClientAdvancements$Listener | null): void;
        setSelectedTab(advancement: $AdvancementHolder_ | null, tellServer: boolean): void;
        constructor(minecraft: $Minecraft, telemetryManager: $WorldSessionTelemetryManager);
        get tree(): $AdvancementTree;
        set listener(value: $ClientAdvancements$Listener | null);
    }
    export class $MultiPlayerGameMode {
        /**
         * Syncs the current player item with the server
         */
        tick(): void;
        continueDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        /**
         * Used in PlayerControllerMP to update the server with an ItemStack in a slot.
         */
        handleCreativeModeItemAdd(stack: $ItemStack_, slotId: number): void;
        getPlayerMode(): $GameType;
        /**
         * Returns `true` if player is in creative mode.
         */
        isServerControlledInventory(): boolean;
        destroyBlock(pos: $BlockPos_): boolean;
        /**
         * Syncs the current player item with the server
         */
        stopDestroyBlock(): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasInfiniteItems(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasMissTime(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        isDestroying(): boolean;
        startDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        handlePickItem(index: number): void;
        /**
         * Sets player capabilities depending on current gametype.
         */
        releaseUsingItem(player: $Player): void;
        handleInventoryMouseClick(containerId: number, slotId: number, mouseButton: number, clickType: $ClickType_, player: $Player): void;
        handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        isAlwaysFlying(): boolean;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook, wasShiftKeyDown: boolean, wasSprinting: boolean): $LocalPlayer;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook): $LocalPlayer;
        /**
         * Sets player capabilities depending on current gametype.
         */
        adjustPlayer(player: $Player): void;
        setLocalMode(localPlayerMode: $GameType_, previousLocalPlayerMode: $GameType_ | null): void;
        /**
         * Sets the game type for the player.
         */
        setLocalMode(type: $GameType_): void;
        handlePlaceRecipe(containerId: number, recipe: $RecipeHolder_<never>, shiftDown: boolean): void;
        /**
         * Handles right-clicking an entity from the entities side, sends a packet to the server.
         */
        interactAt(player: $Player, target: $Entity, ray: $EntityHitResult, hand: $InteractionHand_): $InteractionResult;
        useItem(player: $Player, hand: $InteractionHand_): $InteractionResult;
        useItemOn(player: $LocalPlayer, hand: $InteractionHand_, result: $BlockHitResult): $InteractionResult;
        /**
         * Handles right-clicking an entity, sends a packet to the server.
         */
        interact(player: $Player, target: $Entity, hand: $InteractionHand_): $InteractionResult;
        /**
         * Attacks an entity
         */
        attack(player: $Player, targetEntity: $Entity): void;
        getPreviousPlayerMode(): $GameType;
        /**
         * Returns `true` if player is in creative mode.
         */
        canHurtPlayer(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasExperience(): boolean;
        getDestroyStage(): number;
        /**
         * GuiEnchantment uses this during multiplayer to tell PlayerControllerMP to send a packet indicating the enchantment action the player has taken.
         */
        handleInventoryButtonClick(containerId: number, buttonId: number): void;
        /**
         * Sends a Packet107 to the server to drop the item on the ground
         */
        handleCreativeModeItemDrop(stack: $ItemStack_): void;
        handler$bij000$exposure$onUseItemOn(player: $LocalPlayer, hand: $InteractionHand_, result: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$bij000$exposure$onInteractAt(player: $Player, target: $Entity, ray: $EntityHitResult, hand: $InteractionHand_, cir: $CallbackInfoReturnable<any>): void;
        destroyBlockPos: $BlockPos;
        destroyDelay: number;
        static $assertionsDisabled: boolean;
        connection: $ClientPacketListener;
        destroyProgress: number;
        constructor(minecraft: $Minecraft, connection: $ClientPacketListener);
        get playerMode(): $GameType;
        get serverControlledInventory(): boolean;
        get destroying(): boolean;
        get alwaysFlying(): boolean;
        get previousPlayerMode(): $GameType;
        get destroyStage(): number;
    }
    export class $ServerData$Type extends $Enum<$ServerData$Type> {
        static values(): $ServerData$Type[];
        static valueOf(arg0: string): $ServerData$Type;
        static OTHER: $ServerData$Type;
        static LAN: $ServerData$Type;
        static REALM: $ServerData$Type;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$Type}.
     */
    export type $ServerData$Type_ = "lan" | "realm" | "other";
    export class $LegacyServerPinger$Output {
    }
    export interface $LegacyServerPinger$Output {
        handleResponse(version: number, motd: string, players: string, capacity: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LegacyServerPinger$Output}.
     */
    export type $LegacyServerPinger$Output_ = ((arg0: number, arg1: string, arg2: string, arg3: number, arg4: number) => void);
    export class $ClientHandshakePacketListenerImpl implements $ClientLoginPacketListener, $ClientLoginNetworkHandlerAccessor, $NetworkHandlerExtensions {
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        handleHello(packet: $ClientboundHelloPacket): void;
        handleGameProfile(packet: $ClientboundGameProfilePacket_): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        handleCustomQuery(packet: $ClientboundCustomQueryPacket_): void;
        handleDisconnect(packet: $ClientboundLoginDisconnectPacket): void;
        handleCompression(packet: $ClientboundLoginCompressionPacket): void;
        isAcceptingMessages(): boolean;
        getAddon(): $ClientLoginNetworkAddon;
        setMinigameName(minigameName: string | null): void;
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        fillCrashReport(crashReport: $CrashReport): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        getConnection(): $Connection;
        constructor(connection: $Connection, minecraft: $Minecraft, serverData: $ServerData | null, parent: $Screen | null, newWorld: boolean, worldLoadDuration: $Duration_ | null, updateStatus: $Consumer_<$Component>, cookies: $TransferState_ | null);
        get acceptingMessages(): boolean;
        get addon(): $ClientLoginNetworkAddon;
        set minigameName(value: string | null);
        get connection(): $Connection;
    }
    export class $TransferState extends $Record {
        cookies(): $Map<$ResourceLocation, number[]>;
        constructor(arg0: $Map_<$ResourceLocation_, number[]>);
    }
    /**
     * Values that may be interpreted as {@link $TransferState}.
     */
    export type $TransferState_ = { cookies?: $Map_<$ResourceLocation_, number[]>,  } | [cookies?: $Map_<$ResourceLocation_, number[]>, ];
    export class $DebugSampleSubscriber {
        tick(): void;
        static REQUEST_INTERVAL_MS: number;
        constructor(connection: $ClientPacketListener, debugScreenOverlay: $DebugScreenOverlay);
    }
    export class $ClientAdvancements$Listener {
    }
    export interface $ClientAdvancements$Listener extends $AdvancementTree$Listener {
        onSelectedTabChanged(advancement: $AdvancementHolder_ | null): void;
        onUpdateAdvancementProgress(advancement: $AdvancementNode, advancementProgress: $AdvancementProgress): void;
    }
    export class $RegistryDataCollector$ContentsCollector {
    }
    export class $RegistryDataCollector {
        appendContents(registryKey: $ResourceKey_<$Registry<never>>, registryEntries: $List_<$RegistrySynchronization$PackedRegistryEntry_>): void;
        appendTags(tags: $Map_<$ResourceKey_<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>): void;
        collectGameRegistries(resourceProvider: $ResourceProvider_, registryAccess: $RegistryAccess, isMemoryConnection: boolean): $RegistryAccess$Frozen;
        constructor();
    }
    export class $ClientLevel extends $Level implements $ClientLevelAccessor$1, $ClientWorldAccessor$1, $BiomeSeedProvider, $ChunkTrackerHolder, $ClientLevelAccessor, $IXaeroMinimapClientWorld, $IWorldMapClientWorld, $ClientLevelKJS, $ContraptionHeightMapProvider, $IClientLevel, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $LevelPoseProviderExtension, $ClientWorldAccessor, $ParticleSystemHolder, $CommonLevelAccessor {
        unload(chunk: $LevelChunk): void;
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        sable$getPlotContainer(): $SubLevelContainer;
        getEntityCount(): number;
        effects(): $DimensionSpecialEffects;
        queueLightUpdate(task: $Runnable_): void;
        doAnimateTick(posX: number, posY: number, posZ: number, range: number, random: $RandomSource, block: $Block_ | null, blockPos: $BlockPos$MutableBlockPos): void;
        removeEntity(entityId: number, reason: $Entity$RemovalReason_): void;
        syncBlockState(pos: $BlockPos_, state: $BlockState_, playerPos: $Vec3_): void;
        onChunkLoaded(chunkPos: $ChunkPos): void;
        /**
         * If on MP, sends a quitting packet.
         */
        pollLightUpdates(): void;
        /**
         * If on MP, sends a quitting packet.
         */
        clearTintCaches(): void;
        overrideMapData(mapId: $MapId_, mapData: $MapItemSavedData): void;
        sodium$getTracker(): $ChunkTracker;
        getStarBrightness(partialTick: number): number;
        calculateBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getCloudColor(partialTick: number): $Vec3;
        getSkyFlashTime(): number;
        getParticleSystem(): $ParticleSystem;
        getAllMapData(): $Map<$MapId, $MapItemSavedData>;
        /**
         * Sets the world time.
         */
        setGameTime(time: number): void;
        tickNonPassenger(entity: $Entity): void;
        setDefaultSpawnPos(spawnPos: $BlockPos_, spawnAngle: number): void;
        /**
         * If on MP, sends a quitting packet.
         */
        tickEntities(): void;
        animateTick(posX: number, posY: number, posZ: number): void;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ClientChunkCache;
        addMapData(map: $Map_<$MapId_, $MapItemSavedData>): void;
        getSkyColor(pos: $Vec3_, partialTick: number): $Vec3;
        asyncparticles$getHeightMap(): $ContraptionHeightMap;
        getBlockStatePredictionHandler(): $BlockStatePredictionHandler;
        setServerVerifiedBlockState(pos: $BlockPos_, state: $BlockState_, flags: number): void;
        setServerSimulationDistance(sequence: number): void;
        setSectionDirtyWithNeighbors(posX: number, posY: number, posZ: number): void;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        flerovium$getPlayerCollisions(entity: $Entity, area: $AABB_): $List<any>;
        getServerSimulationDistance(): number;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        /**
         * Sets the world time.
         */
        setDayTime(time: number): void;
        addEntity(entity: $Entity): void;
        getSkyDarken(partialTick: number): number;
        sable$getPose(arg0: $SubLevel): $Pose3dc;
        xaerolib_setData(arg0: $ClientLevelData): void;
        xaerolib_getData(): $ClientLevelData;
        wrapMethod$fjj000$asyncparticles$animateTick(i: number, j: number, k: number, original: $Operation_<any>): void;
        wrapOperation$dgo000$polytone$extraParticles(instance: $Block_, state: $BlockState_, level: $Level_, pos: $BlockPos_, random: $RandomSource, original: $Operation_<any>): void;
        handler$fjj000$asyncparticles$onAnimateTick(i: number, j: number, k: number, ci: $CallbackInfo): void;
        handler$gic000$sable$subLevelAnimateTick(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        handler$dpn000$entityculling$tickEntity(entity: $Entity, info: $CallbackInfo): void;
        entitiesForRendering(): $Iterable<$Entity>;
        lithium$getEntityManager(): $TransientEntitySectionManager<any>;
        isLightUpdateQueueEmpty(): boolean;
        getXaero_minimapData(): $MinimapClientWorldData;
        setXaero_minimapData(arg0: $MinimapClientWorldData): void;
        getXaero_worldmapData(): $WorldMapClientWorldData;
        setXaero_worldmapData(arg0: $WorldMapClientWorldData): void;
        sable$pushPoseSupplier(arg0: $Function_<any, any>): void;
        /**
         * If on MP, sends a quitting packet.
         */
        sable$popPoseSupplier(): void;
        handleBlockChangedAck(sequence: number): void;
        sodium$getBiomeZoomSeed(): number;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        self(): $EntityGetter;
        getConnection(): $ClientPacketListener;
        getLevelRenderer(): $LevelRenderer;
        getChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        tickingEntities: $EntityTickList;
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
        constructor(connection: $ClientPacketListener, clientLevelData: $ClientLevel$ClientLevelData, dimension: $ResourceKey_<$Level>, dimensionType: $Holder_<$DimensionType>, viewDistance: number, serverSimulationDistance: number, profiler: $Supplier_<$ProfilerFiller>, levelRenderer: $LevelRenderer, isDebug: boolean, biomeZoomSeed: number);
        get entityCount(): number;
        get skyFlashTime(): number;
        get particleSystem(): $ParticleSystem;
        get allMapData(): $Map<$MapId, $MapItemSavedData>;
        set gameTime(value: number);
        get chunkSource(): $ClientChunkCache;
        get blockStatePredictionHandler(): $BlockStatePredictionHandler;
        get lightUpdateQueueEmpty(): boolean;
        get connection(): $ClientPacketListener;
        get levelRenderer(): $LevelRenderer;
    }
    export class $ClientRegistryLayer extends $Enum<$ClientRegistryLayer> {
        static values(): $ClientRegistryLayer[];
        static valueOf(arg0: string): $ClientRegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$ClientRegistryLayer>;
        static REMOTE: $ClientRegistryLayer;
        static STATIC: $ClientRegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $ClientRegistryLayer}.
     */
    export type $ClientRegistryLayer_ = "static" | "remote";
    export class $ClientLevel$ClientLevelData implements $WritableLevelData {
        getHorizonHeight(level: $LevelHeightAccessor): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        setGameTime(dayTime: number): void;
        getSpawnAngle(): number;
        getSpawnPos(): $BlockPos;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        getClearColorScale(): number;
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
        setDifficultyLocked(difficultyLocked: boolean): void;
        setDifficulty(difficulty: $Difficulty_): void;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        setRaining(difficultyLocked: boolean): void;
        setDayTime(dayTime: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        constructor(difficulty: $Difficulty_, hardcore: boolean, isFlat: boolean);
        get spawnAngle(): number;
        get spawnPos(): $BlockPos;
        get thundering(): boolean;
        get clearColorScale(): number;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
    }
    export class $ServerStatusPinger {
        removeAll(): void;
        tick(): void;
        static formatPlayerCount(players: number, capacity: number): $Component;
        pingLegacyServer(resolvedServerAddress: $InetSocketAddress, serverAddress: $ServerAddress, serverData: $ServerData): void;
        onPingFailed(reason: $Component_, serverData: $ServerData): void;
        pingServer(serverData: $ServerData, serverListUpdater: $Runnable_, stateUpdater: $Runnable_): void;
        constructor();
    }
    export class $LevelLoadStatusManager$Status extends $Enum<$LevelLoadStatusManager$Status> {
    }
    /**
     * Values that may be interpreted as {@link $LevelLoadStatusManager$Status}.
     */
    export type $LevelLoadStatusManager$Status_ = "waiting_for_server" | "waiting_for_player_chunk" | "level_ready";
    export class $ClientChunkCache extends $ChunkSource implements $IClientChunkCacheExt {
        drop(chunkPos: $ChunkPos): void;
        replaceBiomes(x: number, z: number, buffer: $FriendlyByteBuf): void;
        updateViewRadius(viewDistance: number): void;
        updateViewCenter(x: number, z: number): void;
        replaceWithPacketData(x: number, z: number, buffer: $FriendlyByteBuf, tag: $CompoundTag_, consumer: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): $LevelChunk;
        vista$getPinnedChunks(): $Map<any, any>;
        wrapMethod$fil000$asyncparticles$onLightUpdateWrap(layer: $LightLayer_, pos: $SectionPos, original: $Operation_<any>): void;
        lightEngine: $LevelLightEngine;
        level: $ClientLevel;
        static LOGGER: $Logger;
        storage: $ClientChunkCache$Storage;
        constructor(level: $ClientLevel, viewDistance: number);
    }
    export class $KnownPacksManager {
        createResourceManager(): $CloseableResourceManager;
        redirect$fni000$fabric_resource_loader_v0$createClientManager(): $PackRepository;
        modifyReturnValue$fni000$fabric_resource_loader_v0$getCommonKnownPacksReturn(packs: $List_<any>): $List<any>;
        trySelectingPacks(packs: $List_<$KnownPack_>): $List<$KnownPack>;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$DeferredPacket extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$DeferredPacket}.
     */
    export type $ClientCommonPacketListenerImpl$DeferredPacket_ = { packet?: $Packet<$ServerboundPacketListener>, sendCondition?: $BooleanSupplier_, expirationTime?: number,  } | [packet?: $Packet<$ServerboundPacketListener>, sendCondition?: $BooleanSupplier_, expirationTime?: number, ];
    export class $CommonListenerCookie extends $Record {
        serverBrand(): string;
        telemetryManager(): $WorldSessionTelemetryManager;
        enabledFeatures(): $FeatureFlagSet;
        customReportDetails(): $Map<string, string>;
        postDisconnectScreen(): $Screen;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        localGameProfile(): $GameProfile;
        receivedRegistries(): $RegistryAccess$Frozen;
        serverCookies(): $Map<$ResourceLocation, number[]>;
        connectionType(): $ConnectionType;
        chatState(): $ChatComponent$State;
        serverLinks(): $ServerLinks;
        serverData(): $ServerData;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: $WorldSessionTelemetryManager, arg2: $RegistryAccess$Frozen, arg3: $FeatureFlagSet, arg4: string | null, arg5: $ServerData | null, arg6: $Screen | null, arg7: $Map_<$ResourceLocation_, number[]>, arg8: $ChatComponent$State | null, arg9: boolean, arg10: $Map_<string, string>, arg11: $ServerLinks_);
        constructor(localGameProfile: $GameProfile, telemetryManager: $WorldSessionTelemetryManager, receivedRegistries: $RegistryAccess$Frozen, enabledFeatures: $FeatureFlagSet, serverBrand: string | null, serverData: $ServerData | null, postDisconnectScreen: $Screen | null, serverCookies: $Map_<$ResourceLocation_, number[]>, chatState: $ChatComponent$State | null, strictErrorHandling: boolean, customReportDetails: $Map_<string, string>, serverLinks: $ServerLinks_, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { receivedRegistries?: $RegistryAccess$Frozen, telemetryManager?: $WorldSessionTelemetryManager, localGameProfile?: $GameProfile, serverData?: $ServerData, strictErrorHandling?: boolean, customReportDetails?: $Map_<string, string>, serverBrand?: string, connectionType?: $ConnectionType_, postDisconnectScreen?: $Screen, enabledFeatures?: $FeatureFlagSet, chatState?: $ChatComponent$State, serverCookies?: $Map_<$ResourceLocation_, number[]>, serverLinks?: $ServerLinks_,  } | [receivedRegistries?: $RegistryAccess$Frozen, telemetryManager?: $WorldSessionTelemetryManager, localGameProfile?: $GameProfile, serverData?: $ServerData, strictErrorHandling?: boolean, customReportDetails?: $Map_<string, string>, serverBrand?: string, connectionType?: $ConnectionType_, postDisconnectScreen?: $Screen, enabledFeatures?: $FeatureFlagSet, chatState?: $ChatComponent$State, serverCookies?: $Map_<$ResourceLocation_, number[]>, serverLinks?: $ServerLinks_, ];
    export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener {
        /**
         * @return the connection this listener is attached to
         */
        getConnection(): $Connection;
        serverBrand(): string;
        send(packet: $Packet<never>): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        handleResourcePackPop(packet: $ClientboundResourcePackPopPacket_): void;
        createDisconnectScreen(details: $DisconnectionDetails_): $Screen;
        handleResourcePackPush(packet: $ClientboundResourcePackPushPacket_): void;
        handleCustomReportDetails(packet: $ClientboundCustomReportDetailsPacket_): void;
        handleCustomPayload(packet: $ClientboundCustomPayloadPacket_): void;
        handleCustomPayload(payload: $CustomPacketPayload_): void;
        sendDeferredPackets(): void;
        wrapOperation$fdg001$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        wrapOperation$fdg001$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        handleDisconnect(packet: $ClientboundDisconnectPacket_): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        handleStoreCookie(packet: $ClientboundStoreCookiePacket_): void;
        handleKeepAlive(packet: $ClientboundKeepAlivePacket): void;
        handleTransfer(packet: $ClientboundTransferPacket_): void;
        handleServerLinks(packet: $ClientboundServerLinksPacket_): void;
        static preparePackPrompt(line1: $Component_, line2: $Component_ | null): $Component;
        handlePing(packet: $ClientboundPingPacket): void;
        handler$icc000$essential$chat(packetIn: $Packet<any>, ci: $CallbackInfo): void;
        flow(): $PacketFlow;
        /**
         * {@inheritDoc}
         */
        disconnect(reason: $Component_): void;
        send(payload: $CustomPacketPayload_): void;
        /**
         * {@inheritDoc}
         */
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        fillCrashReport(crashReport: $CrashReport): void;
        hasChannel(type: $CustomPacketPayload$Type_<never>): boolean;
        /**
         * Checks if the connection has negotiated and opened a channel for the payload.
         */
        hasChannel(payloadId: $ResourceLocation_): boolean;
        hasChannel(payload: $CustomPacketPayload_): boolean;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        connection: $Connection;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverLinks: $ServerLinks;
        serverCookies: $Map<$ResourceLocation, number[]>;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $ClientSuggestionProvider implements $SharedSuggestionProvider, $FabricClientCommandSource, $VeilClientSuggestionProvider {
        levels(): $Set<$ResourceKey<$Level>>;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getPlayer(): $LocalPlayer;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getSelectedEntities(): $Collection<string>;
        getOnlinePlayerNames(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        suggestRegistryElements(resourceKey: $ResourceKey_<$Registry<never>>, registryKey: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder, context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        modifyCustomCompletions(action: $ClientboundCustomChatCompletionsPacket$Action_, entries: $List_<string>): void;
        completeCustomSuggestions(transaction: number, result: $Suggestions): void;
        getClient(): $Minecraft;
        getWorld(): $ClientLevel;
        hasPermission(level: number): boolean;
        customSuggestion(context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        getCustomTabSugggestions(): $Collection<string>;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        sendError(arg0: $Component_): void;
        veil$getPostPipelineNames(): $Stream<any>;
        sendFeedback(arg0: $Component_): void;
        suggestRegistryElements(registry: $Registry<never>, type: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder): void;
        getPosition(): $Vec3;
        getEntity(): $Entity;
        getRotation(): $Vec2;
        getMeta(arg0: string): $Object;
        constructor(connection: $ClientPacketListener, minecraft: $Minecraft);
        get player(): $LocalPlayer;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get selectedEntities(): $Collection<string>;
        get onlinePlayerNames(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get client(): $Minecraft;
        get world(): $ClientLevel;
        get allTeams(): $Collection<string>;
        get customTabSugggestions(): $Collection<string>;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get position(): $Vec3;
        get entity(): $Entity;
        get rotation(): $Vec2;
    }
    export class $ChunkBatchSizeCalculator {
        getDesiredChunksPerTick(): number;
        onBatchStart(): void;
        onBatchFinished(batchSize: number): void;
        constructor();
        get desiredChunksPerTick(): number;
    }
}
