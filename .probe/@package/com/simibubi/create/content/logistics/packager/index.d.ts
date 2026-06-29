import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $List_, $Map } from "@package/java/util";
import { $PackageOrderWithCrafts, $PackageOrderWithCrafts_ } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $Record, $Class, $ThreadLocal } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandlerModifiable, $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $TransformedInstance } from "@package/dev/engine_room/flywheel/lib/instance";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $InventoryIdentifier, $InventoryIdentifier_ } from "@package/com/simibubi/create/api/packager";
import { $InvManipulationBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $MutableInt, $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $Block$BlockStatePairKey, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockFace } from "@package/net/createmod/catnip/math";
import { $LogisticallyLinkedBehaviour$RequestType_ } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as repackager from "@package/com/simibubi/create/content/logistics/packager/repackager";

declare module "@package/com/simibubi/create/content/logistics/packager" {
    export class $PackagerBlock extends $WrenchableDirectionalBlock implements $IBE<$PackagerBlockEntity>, $IWrenchable {
        getBlockEntityClass(): $Class<$PackagerBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$PackagerBlockEntity>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PackagerBlockEntity, $InteractionResult>): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $PackagerBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$PackagerBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($PackagerBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PackagerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static LINKED: $BooleanProperty;
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
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
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
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$PackagerBlockEntity>;
        get blockEntityType(): $BlockEntityType<$PackagerBlockEntity>;
    }
    export class $PackagerGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $AllInventoryIdentifiers {
        static fallback(arg0: $Level_, arg1: $BlockState_, arg2: $BlockFace): $InventoryIdentifier;
        static registerDefaults(): void;
        constructor();
    }
    export class $PackagerBlockEntity extends $SmartBlockEntity implements $Clearable {
        clearContent(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        activate(): void;
        unwrapBox(arg0: $ItemStack_, arg1: boolean): boolean;
        triggerStockCheck(): void;
        recheckIfLinksPresent(): void;
        isTargetingSameInventory(arg0: $IdentifiedInventory_): boolean;
        flashLink(): void;
        redstoneModeActive(): boolean;
        attemptToSend(arg0: $List_<$PackagingRequest_>): void;
        isTooBusyFor(arg0: $LogisticallyLinkedBehaviour$RequestType_): boolean;
        updateSignAddress(): void;
        getTrayOffset(arg0: number): number;
        getAvailableItems(): $InventorySummary;
        getRenderedBox(): $ItemStack;
        targetInventory: $InvManipulationBehaviour;
        level: $Level;
        previouslyUnwrapped: $ItemStack;
        queuedExitingPackages: $List<$BigItemStack>;
        customComputerAddress: string;
        static ATTACHMENTS_NBT_KEY: string;
        buttonCooldown: number;
        inventory: $PackagerItemHandler;
        animationTicks: number;
        computerBehaviour: $AbstractComputerBehaviour;
        hasCustomComputerAddress: boolean;
        worldPosition: $BlockPos;
        redstonePowered: boolean;
        heldBox: $ItemStack;
        signBasedAddress: string;
        hasComparators: number;
        animationInward: boolean;
        static CYCLE: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get availableItems(): $InventorySummary;
        get renderedBox(): $ItemStack;
    }
    export class $AllUnpackingHandlers {
        static registerDefaults(): void;
        constructor();
    }
    export class $PackagerVisual<T extends $PackagerBlockEntity> extends $AbstractBlockEntityVisual<T> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        animate(arg0: number): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        tray: $TransformedInstance;
        hatch: $TransformedInstance;
        lastTrayOffset: number;
        lastHatchPartial: $PartialModel;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number);
    }
    export class $PackagerItemHandler implements $IItemHandlerModifiable {
        getStackInSlot(arg0: number): $ItemStack;
        getSlots(): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$isMutable(): boolean;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$self(): $IItemHandler;
        setChanged(): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getHeight(): number;
        getAllItems(): $List<$ItemStack>;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        getWidth(): number;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        constructor(arg0: $PackagerBlockEntity);
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
        get width(): number;
    }
    export class $IdentifiedInventory extends $Record {
        handler(): $IItemHandler;
        identifier(): $InventoryIdentifier;
        constructor(identifier: $InventoryIdentifier_, handler: $IItemHandler);
    }
    /**
     * Values that may be interpreted as {@link $IdentifiedInventory}.
     */
    export type $IdentifiedInventory_ = { identifier?: $InventoryIdentifier_, handler?: $IItemHandler,  } | [identifier?: $InventoryIdentifier_, handler?: $IItemHandler, ];
    export class $PackagerRenderer extends $SmartBlockEntityRenderer<$PackagerBlockEntity> {
        static getHatchModel(arg0: $PackagerBlockEntity): $PartialModel;
        static getTrayModel(arg0: $BlockState_): $PartialModel;
        static isHatchOpen(arg0: $PackagerBlockEntity): boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $InventorySummary {
        getTotalCount(): number;
        getStacks(): $List<$BigItemStack>;
        isEmpty(): boolean;
        add(arg0: $ItemStack_, arg1: number): void;
        add(arg0: $InventorySummary): void;
        add(arg0: $ItemStack_): void;
        add(arg0: $BigItemStack): void;
        copy(): $InventorySummary;
        erase(arg0: $ItemStack_): boolean;
        getStacksByCount(): $List<$BigItemStack>;
        getCountOf(arg0: $ItemStack_): number;
        getItemMap(): $Map<$Item, $List<$BigItemStack>>;
        divideAndSendTo(arg0: $ServerPlayer, arg1: $BlockPos_): void;
        addAllBigItemStacks(arg0: $List_<$BigItemStack>): void;
        getTotalOfMatching(arg0: $Predicate_<$ItemStack>): number;
        addAllItemStacks(arg0: $List_<$ItemStack_>): void;
        static CODEC: $Codec<$InventorySummary>;
        contributingLinks: number;
        static EMPTY: $InventorySummary;
        constructor();
        get totalCount(): number;
        get stacks(): $List<$BigItemStack>;
        get empty(): boolean;
        get stacksByCount(): $List<$BigItemStack>;
        get itemMap(): $Map<$Item, $List<$BigItemStack>>;
    }
    export class $PackagingRequest extends $Record {
        context(): $PackageOrderWithCrafts;
        isEmpty(): boolean;
        count(): $MutableInt;
        getCount(): number;
        static create(arg0: $ItemStack_, arg1: number, arg2: string, arg3: number, arg4: $MutableBoolean, arg5: number, arg6: number, arg7: $PackageOrderWithCrafts_): $PackagingRequest;
        address(): string;
        subtract(arg0: number): void;
        item(): $ItemStack;
        finalLink(): $MutableBoolean;
        linkIndex(): number;
        orderId(): number;
        packageCounter(): $MutableInt;
        constructor(item: $ItemStack_, count: $MutableInt, address: string, linkIndex: number, finalLink: $MutableBoolean, packageCounter: $MutableInt, orderId: number, context: $PackageOrderWithCrafts_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PackagingRequest}.
     */
    export type $PackagingRequest_ = { orderId?: number, linkIndex?: number, packageCounter?: $MutableInt, address?: string, item?: $ItemStack_, finalLink?: $MutableBoolean, context?: $PackageOrderWithCrafts_, count?: $MutableInt,  } | [orderId?: number, linkIndex?: number, packageCounter?: $MutableInt, address?: string, item?: $ItemStack_, finalLink?: $MutableBoolean, context?: $PackageOrderWithCrafts_, count?: $MutableInt, ];
}
