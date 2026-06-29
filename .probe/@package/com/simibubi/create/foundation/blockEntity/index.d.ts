import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CreateAdvancement } from "@package/com/simibubi/create/foundation/advancement";
import { $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $IInteractionChecker } from "@package/com/simibubi/create/foundation/utility";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $PartialSafeNBT } from "@package/com/simibubi/create/api/schematic/nbt";
import { $List, $Set_, $List_, $Collection } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Container } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $Direction$Axis_, $BlockPos_, $Direction$Axis, $HolderGetter } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Object } from "@package/java/lang";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $SpecialBlockEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VirtualBlockEntity } from "@package/net/createmod/ponder/api";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityDataPacket } from "@package/com/simibubi/create/foundation/networking";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as behaviour from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
export * as renderer from "@package/com/simibubi/create/foundation/blockEntity/renderer";

declare module "@package/com/simibubi/create/foundation/blockEntity" {
    export class $ComparatorUtil {
        static levelOfSmartFluidTank(arg0: $BlockGetter, arg1: $BlockPos_): number;
        static fractionToRedstoneLevel(arg0: number): number;
        constructor();
    }
    export class $RemoveBlockEntityPacket extends $BlockEntityDataPacket<$SyncedBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RemoveBlockEntityPacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $SyncedBlockEntity extends $BlockEntity {
        writeClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        blockHolderGetter(): $HolderGetter<$Block>;
        notifyUpdate(): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        sendData(): void;
        readClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $ItemHandlerContainer implements $Container {
        removeItemNoUpdate(arg0: number): $ItemStack;
        getContainerSize(): number;
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        getMaxStackSize(): number;
        stopOpen(arg0: $Player): void;
        startOpen(arg0: $Player): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        canReceiveTransferCooldown(): boolean;
        setTransferCooldown(arg0: number): void;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        getHeight(): number;
        isMutable(): boolean;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        setChanged(): void;
        getStackInSlot(slot: number): $ItemStack;
        asContainer(): $Container;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        getWidth(): number;
        clear(): void;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        count(): number;
        count(match: $ItemPredicate_): number;
        find(match: $ItemPredicate_): number;
        find(): number;
        clear(match: $ItemPredicate_): void;
        getAllItems(): $List<$ItemStack>;
        clientsort$setChanged(): void;
        constructor(arg0: $IItemHandlerModifiable);
        get containerSize(): number;
        set transferCooldown(value: number);
        get height(): number;
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $CachedRenderBBBlockEntity extends $SyncedBlockEntity {
        getRenderBoundingBox(): $AABB;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get renderBoundingBox(): $AABB;
    }
    export class $IMultiBlockEntityContainer$Fluid {
    }
    export interface $IMultiBlockEntityContainer$Fluid extends $IMultiBlockEntityContainer {
        getTank(arg0: number): $IFluidTank;
        hasTank(): boolean;
        getFluid(arg0: number): $FluidStack;
        getTankSize(arg0: number): number;
        setTankSize(arg0: number, arg1: number): void;
    }
    export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT, $IInteractionChecker, $SpecialBlockEntityItemRequirement, $VirtualBlockEntity {
        addBehaviours(arg0: $List_<$BlockEntityBehaviour>): void;
        getAllBehaviours(): $Collection<$BlockEntityBehaviour>;
        forEachBehaviour(arg0: $Consumer_<$BlockEntityBehaviour>): void;
        getBehaviour<T extends $BlockEntityBehaviour>(arg0: $BehaviourType<T>): T;
        getRequiredItems(arg0: $BlockState_): $ItemRequirement;
        setLazyTickRate(arg0: number): void;
        removeBehaviour(arg0: $BehaviourType<never>): void;
        markVirtual(): void;
        registerAwardables(arg0: $List_<$BlockEntityBehaviour>, ...arg1: $CreateAdvancement[]): void;
        refreshBlockState(): void;
        awardIfNear(arg0: $CreateAdvancement, arg1: number): void;
        isChunkUnloaded(): boolean;
        invalidate(): void;
        remove(): void;
        isVirtual(): boolean;
        initialize(): void;
        destroy(): void;
        tick(): void;
        addBehavioursDeferred(arg0: $List_<$BlockEntityBehaviour>): void;
        attachBehaviourLate(arg0: $BlockEntityBehaviour): void;
        lazyTick(): void;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        sendToMenu(arg0: $RegistryFriendlyByteBuf): void;
        award(arg0: $CreateAdvancement): void;
        canPlayerUse(arg0: $Player): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get allBehaviours(): $Collection<$BlockEntityBehaviour>;
        set lazyTickRate(value: number);
        get chunkUnloaded(): boolean;
        get virtual(): boolean;
    }
    export class $IMultiBlockEntityContainer {
    }
    export interface $IMultiBlockEntityContainer {
        getHeight(): number;
        getWidth(): number;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        getController(): $BlockPos;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getControllerBE<T extends $BlockEntity>(): T;
        isController(): boolean;
        setExtraData(arg0: $Object): void;
        modifyExtraData(arg0: $Object): $Object;
        notifyMultiUpdated(): void;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        removeController(arg0: boolean): void;
        getLastKnownPos(): $BlockPos;
        setController(arg0: $BlockPos_): void;
        getExtraData(): $Object;
        getMainConnectionAxis(): $Direction$Axis;
        preventConnectivityUpdate(): void;
        getMaxWidth(): number;
        get controllerBE(): T;
        get lastKnownPos(): $BlockPos;
        get mainConnectionAxis(): $Direction$Axis;
        get maxWidth(): number;
    }
    export class $SmartBlockEntityTicker<T extends $BlockEntity> implements $BlockEntityTicker<T> {
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: T): void;
        constructor();
    }
    export class $IMultiBlockEntityContainer$Inventory {
    }
    export interface $IMultiBlockEntityContainer$Inventory extends $IMultiBlockEntityContainer {
        hasInventory(): boolean;
    }
    export class $IMergeableBE {
    }
    export interface $IMergeableBE {
        accept(arg0: $BlockEntity): void;
    }
    /**
     * Values that may be interpreted as {@link $IMergeableBE}.
     */
    export type $IMergeableBE_ = ((arg0: $BlockEntity) => void);
}
