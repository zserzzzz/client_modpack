import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $AbstractSimiContainerScreen, $GhostItemMenu } from "@package/com/simibubi/create/foundation/gui/menu";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $NarratorStatus, $Minecraft } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Map, $Set, $List, $List_ } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $StockCheckingBlockEntity, $PackageOrderWithCrafts_, $PackageOrderWithCrafts, $StockTickerBlockEntity } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $InteractionResult, $MenuProvider, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $NonNullList, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $MenuType, $Slot, $ContainerSynchronizer, $MenuType_, $AbstractContainerMenu, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $Record, $Class, $ThreadLocal, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Item, $Item$Properties, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Renderable, $CycleButton } from "@package/net/minecraft/client/gui/components";
import { $SlotItemHandler, $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $BooleanProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundType, $Block, $Block_, $Block$BlockStatePairKey } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $LogisticallyLinkedBehaviour, $LogisticallyLinkedBlockItem } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $BasePacketPayload$PacketTypeProvider, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/redstoneRequester" {
    export class $RedstoneRequesterMenu extends $GhostItemMenu<$RedstoneRequesterBlockEntity> {
        static create(arg0: number, arg1: $Inventory, arg2: $RedstoneRequesterBlockEntity): $RedstoneRequesterMenu;
        quickcraftSlots: $Set<$Slot>;
        playerInventory: $Inventory;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        ghostInventory: $ItemStackHandler;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        contentHolder: $RedstoneRequesterBlockEntity;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RedstoneRequesterBlockEntity);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
    }
    export class $RedstoneRequesterEffectPacket extends $Record implements $ClientboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        success(): boolean;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RedstoneRequesterEffectPacket>;
        constructor(pos: $BlockPos_, success: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $RedstoneRequesterEffectPacket}.
     */
    export type $RedstoneRequesterEffectPacket_ = { pos?: $BlockPos_, success?: boolean,  } | [pos?: $BlockPos_, success?: boolean, ];
    export class $AutoRequestData extends $Record {
        isValid(): boolean;
        encodedRequest(): $PackageOrderWithCrafts;
        targetOffset(): $BlockPos;
        encodedTargetAddress(): string;
        targetDim(): string;
        writeToItem(arg0: $BlockPos_, arg1: $ItemStack_): void;
        static readFromItem(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: $ItemStack_): $AutoRequestData;
        static CODEC: $Codec<$AutoRequestData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AutoRequestData>;
        constructor();
        constructor(encodedRequest: $PackageOrderWithCrafts_, encodedTargetAddress: string, targetOffset: $BlockPos_, targetDim: string, isValid: boolean);
        get valid(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AutoRequestData}.
     */
    export type $AutoRequestData_ = { isValid?: boolean, targetDim?: string, encodedRequest?: $PackageOrderWithCrafts_, encodedTargetAddress?: string, targetOffset?: $BlockPos_,  } | [isValid?: boolean, targetDim?: string, encodedRequest?: $PackageOrderWithCrafts_, encodedTargetAddress?: string, targetOffset?: $BlockPos_, ];
    export class $RedstoneRequesterBlockEntity extends $StockCheckingBlockEntity implements $MenuProvider {
        use(arg0: $Player): $InteractionResult;
        getDisplayName(): $Component;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        playEffect(arg0: boolean): void;
        triggerRequest(): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        worldPosition: $BlockPos;
        encodedTargetAdress: string;
        level: $Level;
        encodedRequest: $PackageOrderWithCrafts;
        static ATTACHMENTS_NBT_KEY: string;
        behaviour: $LogisticallyLinkedBehaviour;
        lastRequestSucceeded: boolean;
        hasComparators: number;
        computerBehaviour: $AbstractComputerBehaviour;
        allowPartialRequests: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get displayName(): $Component;
    }
    export class $RedstoneRequesterBlock extends $Block implements $IBE<$RedstoneRequesterBlockEntity>, $IWrenchable {
        getBlockEntityClass(): $Class<$RedstoneRequesterBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$RedstoneRequesterBlockEntity>;
        static appendRequesterTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        static programRequester(arg0: $ServerPlayer, arg1: $StockTickerBlockEntity, arg2: $PackageOrderWithCrafts_, arg3: string): void;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$RedstoneRequesterBlockEntity, $InteractionResult>): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $RedstoneRequesterBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$RedstoneRequesterBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($RedstoneRequesterBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$RedstoneRequesterBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$RedstoneRequesterBlockEntity>;
        get blockEntityType(): $BlockEntityType<$RedstoneRequesterBlockEntity>;
    }
    export class $RedstoneRequesterScreen extends $AbstractSimiContainerScreen<$RedstoneRequesterMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $RedstoneRequesterMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(arg0: $RedstoneRequesterMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $RedstoneRequesterConfigurationPacket extends $BlockEntityConfigurationPacket<$RedstoneRequesterBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RedstoneRequesterConfigurationPacket>;
        constructor(arg0: $BlockPos_, arg1: string, arg2: boolean, arg3: $List_<number>);
    }
    export class $RedstoneRequesterMenu$SorterProofSlot extends $SlotItemHandler {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $IItemHandler, arg1: number, arg2: number, arg3: number);
    }
    export class $AutoRequestData$Mutable {
        toImmutable(): $AutoRequestData;
        targetDim: string;
        encodedRequest: $PackageOrderWithCrafts;
        isValid: boolean;
        encodedTargetAddress: string;
        targetOffset: $BlockPos;
        constructor();
        constructor(arg0: $AutoRequestData_);
    }
    export class $RedstoneRequesterBlockItem extends $LogisticallyLinkedBlockItem {
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
}
