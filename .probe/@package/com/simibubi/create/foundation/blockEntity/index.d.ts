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
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        readClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        sendData(): void;
        notifyUpdate(): void;
        blockHolderGetter(): $HolderGetter<$Block>;
        writeClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $ItemHandlerContainer implements $Container {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        removeItem(arg0: number, arg1: number): $ItemStack;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        clearContent(): void;
        getMaxStackSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        getContainerSize(): number;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        countItem(arg0: $Item_): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        canReceiveTransferCooldown(): boolean;
        setTransferCooldown(arg0: number): void;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        setChanged(): void;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        getSlotLimit(slot: number): number;
        getHeight(): number;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        getWidth(): number;
        getSlots(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        isEmpty(): boolean;
        clientsort$setChanged(): void;
        constructor(arg0: $IItemHandlerModifiable);
        get containerSize(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get height(): number;
        get width(): number;
        get slots(): number;
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
        getFluid(arg0: number): $FluidStack;
        getTankSize(arg0: number): number;
        setTankSize(arg0: number, arg1: number): void;
        getTank(arg0: number): $IFluidTank;
        hasTank(): boolean;
    }
    export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT, $IInteractionChecker, $SpecialBlockEntityItemRequirement, $VirtualBlockEntity {
        remove(): void;
        isVirtual(): boolean;
        initialize(): void;
        destroy(): void;
        tick(): void;
        invalidate(): void;
        canPlayerUse(arg0: $Player): boolean;
        setLazyTickRate(arg0: number): void;
        addBehaviours(arg0: $List_<$BlockEntityBehaviour>): void;
        award(arg0: $CreateAdvancement): void;
        attachBehaviourLate(arg0: $BlockEntityBehaviour): void;
        addBehavioursDeferred(arg0: $List_<$BlockEntityBehaviour>): void;
        sendToMenu(arg0: $RegistryFriendlyByteBuf): void;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        lazyTick(): void;
        refreshBlockState(): void;
        forEachBehaviour(arg0: $Consumer_<$BlockEntityBehaviour>): void;
        markVirtual(): void;
        getBehaviour<T extends $BlockEntityBehaviour>(arg0: $BehaviourType<T>): T;
        awardIfNear(arg0: $CreateAdvancement, arg1: number): void;
        registerAwardables(arg0: $List_<$BlockEntityBehaviour>, ...arg1: $CreateAdvancement[]): void;
        isChunkUnloaded(): boolean;
        getAllBehaviours(): $Collection<$BlockEntityBehaviour>;
        getRequiredItems(arg0: $BlockState_): $ItemRequirement;
        removeBehaviour(arg0: $BehaviourType<never>): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get virtual(): boolean;
        set lazyTickRate(value: number);
        get chunkUnloaded(): boolean;
        get allBehaviours(): $Collection<$BlockEntityBehaviour>;
    }
    export class $IMultiBlockEntityContainer {
    }
    export interface $IMultiBlockEntityContainer {
        setController(arg0: $BlockPos_): void;
        getWidth(): number;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        getController(): $BlockPos;
        getHeight(): number;
        setHeight(arg0: number): void;
        setWidth(arg0: number): void;
        getLastKnownPos(): $BlockPos;
        removeController(arg0: boolean): void;
        notifyMultiUpdated(): void;
        isController(): boolean;
        setExtraData(arg0: $Object): void;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        modifyExtraData(arg0: $Object): $Object;
        getMaxWidth(): number;
        preventConnectivityUpdate(): void;
        getMainConnectionAxis(): $Direction$Axis;
        getExtraData(): $Object;
        getControllerBE<T extends $BlockEntity>(): T;
        get lastKnownPos(): $BlockPos;
        get maxWidth(): number;
        get mainConnectionAxis(): $Direction$Axis;
        get controllerBE(): T;
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
