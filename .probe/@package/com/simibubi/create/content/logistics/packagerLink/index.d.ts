import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $Item, $Item$Properties, $BlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PackagingRequest_, $PackagerBlockEntity, $PackagingRequest, $IdentifiedInventory_, $InventorySummary } from "@package/com/simibubi/create/content/logistics/packager";
import { $AttachFace, $BooleanProperty, $DirectionProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $SoundType, $FaceAttachedHorizontalDirectionalBlock, $Block, $Block_, $Block$BlockStatePairKey } from "@package/net/minecraft/world/level/block";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $UUID_, $Comparator, $Map, $Set, $UUID, $List, $Collection } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $PackageOrderWithCrafts_ } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $BlockEntityBehaviour, $BehaviourType } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $HolderLookup$Provider, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Class, $Runnable_, $ThreadLocal, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $LinkWithBulbBlockEntity } from "@package/com/simibubi/create/content/redstone/displayLink";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Multimap } from "@package/com/google/common/collect";
import { $CustomRotationParticle, $BasicParticleData } from "@package/com/simibubi/create/content/equipment/bell";
import { $Cache } from "@package/com/google/common/cache";
import { $FactoryPanelBehaviour } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/packagerLink" {
    export class $RequestPromise {
        tick(): void;
        static ageComparator(): $Comparator<$RequestPromise>;
        static CODEC: $Codec<$RequestPromise>;
        ticksExisted: number;
        promisedStack: $BigItemStack;
        constructor(arg0: $BigItemStack);
        constructor(arg0: number, arg1: $BigItemStack);
    }
    export class $WiFiParticle extends $CustomRotationParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        static MAXIMUM_COLLISION_VELOCITY_SQUARED: number;
        sprites: $SpriteSet;
        oRoll: number;
        random: $RandomSource;
        asyncparticle$lossSublevelPos: $BlockPos;
        bCol: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        asyncparticle$tracingSubLevel: $WeakReference<any>;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        static INITIAL_AABB: $AABB;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $SpriteSet);
    }
    export class $LogisticsNetworkSavedData extends $SavedData {
        static load(arg0: $MinecraftServer): $LogisticsNetworkSavedData;
        static factory(): $SavedData$Factory<$LogisticsNetworkSavedData>;
        getLogisticsNetworks(): $Map<$UUID, $LogisticsNetwork>;
        get logisticsNetworks(): $Map<$UUID, $LogisticsNetwork>;
    }
    export class $PackagerLinkGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $WiFiEffectPacket extends $Record implements $ClientboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        static send(arg0: $Level_, arg1: $BlockPos_): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WiFiEffectPacket>;
        constructor(pos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $WiFiEffectPacket}.
     */
    export type $WiFiEffectPacket_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $LogisticsManager {
        static broadcastPackageRequest(arg0: $UUID_, arg1: $LogisticallyLinkedBehaviour$RequestType_, arg2: $PackageOrderWithCrafts_, arg3: $IdentifiedInventory_, arg4: string): boolean;
        static getSummaryOfNetwork(arg0: $UUID_, arg1: boolean): $InventorySummary;
        static getStockOf(arg0: $UUID_, arg1: $ItemStack_, arg2: $IdentifiedInventory_): number;
        static performPackageRequests(arg0: $Multimap<$PackagerBlockEntity, $PackagingRequest_>): void;
        static findPackagersForRequest(arg0: $UUID_, arg1: $PackageOrderWithCrafts_, arg2: $IdentifiedInventory_, arg3: string): $Multimap<$PackagerBlockEntity, $PackagingRequest>;
        static ACCURATE_SUMMARIES: $Cache<$UUID, $InventorySummary>;
        static SUMMARIES: $Cache<$UUID, $InventorySummary>;
        constructor();
    }
    export class $LogisticallyLinkedBehaviour extends $BlockEntityBehaviour {
        static remove(arg0: $LogisticallyLinkedBehaviour): void;
        static keepAlive(arg0: $LogisticallyLinkedBehaviour): void;
        mayInteract(arg0: $Player): boolean;
        getSummary(arg0: $IdentifiedInventory_): $InventorySummary;
        static getAllPresent(arg0: $UUID_, arg1: boolean, arg2: boolean): $Collection<$LogisticallyLinkedBehaviour>;
        static getAllPresent(arg0: $UUID_, arg1: boolean): $Collection<$LogisticallyLinkedBehaviour>;
        mayAdministrate(arg0: $Player): boolean;
        deductFromAccurateSummary(arg0: $ItemStackHandler): void;
        redstonePowerChanged(arg0: number): void;
        mayInteractMessage(arg0: $Player): boolean;
        processRequest(arg0: $ItemStack_, arg1: number, arg2: string, arg3: number, arg4: $MutableBoolean, arg5: number, arg6: $PackageOrderWithCrafts_, arg7: $IdentifiedInventory_): $Pair<$PackagerBlockEntity, $PackagingRequest>;
        static isValidLink(arg0: $LogisticallyLinkedBehaviour): boolean;
        static LINK_ID_GENERATOR: $AtomicInteger;
        linkId: number;
        blockEntity: $SmartBlockEntity;
        freqId: $UUID;
        redstonePower: number;
        static TYPE: $BehaviourType<$LogisticallyLinkedBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: boolean);
    }
    export class $LogisticallyLinkedClientHandler {
        static tick(): void;
        static tickPanel(arg0: $FactoryPanelBehaviour): void;
        constructor();
    }
    export class $LogisticsNetwork {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $LogisticsNetwork;
        owner: $UUID;
        panelPromises: $RequestPromiseQueue;
        loadedLinks: $Set<$GlobalPos>;
        totalLinks: $Set<$GlobalPos>;
        id: $UUID;
        locked: boolean;
        constructor(arg0: $UUID_);
    }
    export class $LogisticallyLinkedBehaviour$RequestType extends $Enum<$LogisticallyLinkedBehaviour$RequestType> {
        static values(): $LogisticallyLinkedBehaviour$RequestType[];
        static valueOf(arg0: string): $LogisticallyLinkedBehaviour$RequestType;
        static PLAYER: $LogisticallyLinkedBehaviour$RequestType;
        static REDSTONE: $LogisticallyLinkedBehaviour$RequestType;
        static RESTOCK: $LogisticallyLinkedBehaviour$RequestType;
    }
    /**
     * Values that may be interpreted as {@link $LogisticallyLinkedBehaviour$RequestType}.
     */
    export type $LogisticallyLinkedBehaviour$RequestType_ = "restock" | "redstone" | "player";
    export class $PackagerLinkBlock extends $FaceAttachedHorizontalDirectionalBlock implements $IBE<$PackagerLinkBlockEntity>, $ProperWaterloggedBlock, $IWrenchable {
        static getPower(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        getBlockEntityClass(): $Class<$PackagerLinkBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$PackagerLinkBlockEntity>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PackagerLinkBlockEntity, $InteractionResult>): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $PackagerLinkBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$PackagerLinkBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($PackagerLinkBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PackagerLinkBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        fluidState(arg0: $BlockState_): $FluidState;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$PackagerLinkBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static FACE: $EnumProperty<$AttachFace>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$PackagerLinkBlockEntity>;
        get blockEntityType(): $BlockEntityType<$PackagerLinkBlockEntity>;
    }
    export class $WiFiParticle$Data extends $BasicParticleData<$WiFiParticle> implements $ParticleOptions {
        constructor();
    }
    export class $LogisticallyLinkedBlockItem extends $BlockItem {
        static assignFrequency(arg0: $ItemStack_, arg1: $Player, arg2: $UUID_): void;
        static networkFromStack(arg0: $ItemStack_): $UUID;
        static isTuned(arg0: $ItemStack_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $GlobalLogisticsManager {
        isLocked(arg0: $UUID_): boolean;
        tick(arg0: $Level_): void;
        getUnloadedLinkCount(arg0: $UUID_): number;
        mayInteract(arg0: $UUID_, arg1: $Player): boolean;
        linkAdded(arg0: $UUID_, arg1: $GlobalPos_, arg2: $UUID_): void;
        isLockable(arg0: $UUID_): boolean;
        markDirty(): void;
        linkLoaded(arg0: $UUID_, arg1: $GlobalPos_): void;
        levelLoaded(arg0: $LevelAccessor): void;
        mayAdministrate(arg0: $UUID_, arg1: $Player): boolean;
        linkInvalidated(arg0: $UUID_, arg1: $GlobalPos_): void;
        getQueuedPromises(arg0: $UUID_): $RequestPromiseQueue;
        linkRemoved(arg0: $UUID_, arg1: $GlobalPos_): void;
        hasQueuedPromises(arg0: $UUID_): boolean;
        logisticsNetworks: $Map<$UUID, $LogisticsNetwork>;
        constructor();
    }
    export class $RequestPromiseQueue {
        isEmpty(): boolean;
        add(arg0: $RequestPromise): void;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $Runnable_): $RequestPromiseQueue;
        tick(): void;
        flatten(arg0: boolean): $List<$RequestPromise>;
        itemEnteredSystem(arg0: $ItemStack_, arg1: number): void;
        getTotalPromisedAndRemoveExpired(arg0: $ItemStack_, arg1: number): number;
        setOnChanged(arg0: $Runnable_): void;
        forceClear(arg0: $ItemStack_): void;
        constructor(arg0: $Runnable_);
        get empty(): boolean;
        set onChanged(value: $Runnable_);
    }
    export class $PackagerLinkBlockEntity extends $LinkWithBulbBlockEntity {
        fetchSummaryFromPackager(arg0: $IdentifiedInventory_): $InventorySummary;
        playEffect(): void;
        getPackager(): $PackagerBlockEntity;
        processRequest(arg0: $ItemStack_, arg1: number, arg2: string, arg3: number, arg4: $MutableBoolean, arg5: number, arg6: $PackageOrderWithCrafts_, arg7: $IdentifiedInventory_): $Pair<$PackagerBlockEntity, $PackagingRequest>;
        worldPosition: $BlockPos;
        level: $Level;
        placedBy: $UUID;
        static ATTACHMENTS_NBT_KEY: string;
        behaviour: $LogisticallyLinkedBehaviour;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get packager(): $PackagerBlockEntity;
    }
}
