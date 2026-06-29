import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $AbstractSimiContainerScreen, $MenuBase } from "@package/com/simibubi/create/foundation/gui/menu";
import { $Executor } from "@package/java/util/concurrent";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $Map, $Set } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $MenuProvider, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $Holder, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ContainerSynchronizer, $MenuType_, $MenuType, $AbstractContainerMenu, $Slot, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Record, $Object } from "@package/java/lang";
import { $LevelAccessor, $Level } from "@package/net/minecraft/world/level";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $ItemHandlerWrapper, $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ChainConveyorBlockEntity } from "@package/com/simibubi/create/content/kinetics/chainConveyor";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as postbox from "@package/com/simibubi/create/content/logistics/packagePort/postbox";
export * as frogport from "@package/com/simibubi/create/content/logistics/packagePort/frogport";

declare module "@package/com/simibubi/create/content/logistics/packagePort" {
    export class $PackagePortTarget {
        register(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        setup(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        be(arg0: $LevelAccessor, arg1: $BlockPos_): $BlockEntity;
        "export"(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $ItemStack_, arg3: boolean): boolean;
        getIcon(): $ItemStack;
        canSupport(arg0: $BlockEntity): boolean;
        getExactTargetLocation(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): $Vec3;
        deregister(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        depositImmediately(): boolean;
        static CODEC: $Codec<$PackagePortTarget>;
        relativePos: $BlockPos;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackagePortTarget>;
        constructor(arg0: $BlockPos_);
        get icon(): $ItemStack;
    }
    export class $PackagePortMenu extends $MenuBase<$PackagePortBlockEntity> {
        static create(arg0: number, arg1: $Inventory, arg2: $PackagePortBlockEntity): $PackagePortMenu;
        quickcraftSlots: $Set<$Slot>;
        playerInventory: $Inventory;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        contentHolder: $PackagePortBlockEntity;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $PackagePortBlockEntity);
    }
    export class $PackagePortTarget$TrainStationFrogportTarget extends $PackagePortTarget {
        static CODEC: $MapCodec<$PackagePortTarget$TrainStationFrogportTarget>;
        relativePos: $BlockPos;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PackagePortTarget$TrainStationFrogportTarget>;
        constructor(arg0: $BlockPos_);
    }
    export class $PackagePortPlacementPacket$ClientBoundRequest extends $Record implements $ClientboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PackagePortPlacementPacket$ClientBoundRequest>;
        constructor(pos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $PackagePortPlacementPacket$ClientBoundRequest}.
     */
    export type $PackagePortPlacementPacket$ClientBoundRequest_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $PackagePortScreen extends $AbstractSimiContainerScreen<$PackagePortMenu> {
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
        menu: $PackagePortMenu;
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
        constructor(arg0: $PackagePortMenu, arg1: $Inventory, arg2: $Component_);
    }
    export interface $PackagePortTargetType extends RegistryMarked<RegistryTypes.CreatePackagePortTargetTypeTag, RegistryTypes.CreatePackagePortTargetType> {}
    export class $PackagePortConfigurationPacket extends $BlockEntityConfigurationPacket<$PackagePortBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PackagePortConfigurationPacket>;
        constructor(arg0: $BlockPos_, arg1: string, arg2: boolean);
    }
    export class $PackagePortTarget$ChainConveyorFrogportTarget extends $PackagePortTarget {
        handler$gln000$sable$testSublevelDistance(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $ItemStack_, arg3: boolean, arg4: $CallbackInfoReturnable<any>, arg5: $ChainConveyorBlockEntity): void;
        flipped: boolean;
        static CODEC: $MapCodec<$PackagePortTarget$ChainConveyorFrogportTarget>;
        relativePos: $BlockPos;
        connection: $BlockPos;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PackagePortTarget$ChainConveyorFrogportTarget>;
        chainPos: number;
        constructor(arg0: $BlockPos_, arg1: number, arg2: ($BlockPos_) | undefined, arg3: boolean);
        constructor(arg0: $BlockPos_, arg1: number, arg2: $BlockPos_, arg3: boolean);
    }
    export class $PackagePortPlacementPacket extends $Record implements $ServerboundPacketPayload {
        target(): $PackagePortTarget;
        pos(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackagePortPlacementPacket>;
        constructor(target: $PackagePortTarget, pos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $PackagePortPlacementPacket}.
     */
    export type $PackagePortPlacementPacket_ = { target?: $PackagePortTarget, pos?: $BlockPos_,  } | [target?: $PackagePortTarget, pos?: $BlockPos_, ];
    export class $AllPackagePortTargetTypes {
        static register(arg0: $IEventBus): void;
        static TRAIN_STATION: $Holder<$PackagePortTargetType>;
        static CHAIN_CONVEYOR: $Holder<$PackagePortTargetType>;
        constructor();
    }
    export class $PackagePortTargetSelectionHandler {
        static tick(): void;
        static onUse(): boolean;
        static flushSettings(arg0: $BlockPos_): void;
        static validateDiff(arg0: $Vec3_, arg1: $BlockPos_): string;
        static animateConnection(arg0: $Minecraft, arg1: $Vec3_, arg2: $Vec3_, arg3: $Color): void;
        static exactPositionOfTarget: $Vec3;
        static isPostbox: boolean;
        static activePackageTarget: $PackagePortTarget;
        constructor();
    }
    export class $PackagePortTarget$ChainConveyorFrogportTarget$Type implements $PackagePortTargetType {
        codec(): $MapCodec<$PackagePortTarget$ChainConveyorFrogportTarget>;
        streamCodec(): $StreamCodec<$ByteBuf, $PackagePortTarget$ChainConveyorFrogportTarget>;
        constructor();
    }
    export class $PackagePortAutomationInventoryWrapper extends $ItemHandlerWrapper {
        constructor(arg0: $IItemHandlerModifiable, arg1: $PackagePortBlockEntity);
    }
    export class $PackagePortItem extends $BlockItem {
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
    export class $PackagePortTarget$TrainStationFrogportTarget$Type implements $PackagePortTargetType {
        codec(): $MapCodec<$PackagePortTarget$TrainStationFrogportTarget>;
        streamCodec(): $StreamCodec<$ByteBuf, $PackagePortTarget$TrainStationFrogportTarget>;
        constructor();
    }
    export class $PackagePortTargetType {
    }
    export interface $PackagePortTargetType {
        codec(): $MapCodec<$PackagePortTarget>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $PackagePortTarget>;
    }
    /**
     * Values that may be interpreted as {@link $PackagePortTargetType}.
     */
    export type $PackagePortTargetType_ = RegistryTypes.CreatePackagePortTargetType;
    export class $PackagePortBlockEntity extends $SmartBlockEntity implements $MenuProvider, $Clearable {
        drop(arg0: $ItemStack_): void;
        use(arg0: $Player): $ItemInteractionResult;
        getDisplayName(): $Component;
        clearContent(): void;
        getComparatorOutput(): number;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        isBackedUp(): boolean;
        filterChanged(): void;
        getFilterString(): string;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        acceptsPackages: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        addressFilter: string;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        inventory: $SmartInventory;
        target: $PackagePortTarget;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get displayName(): $Component;
        get comparatorOutput(): number;
        get backedUp(): boolean;
        get filterString(): string;
    }
}
