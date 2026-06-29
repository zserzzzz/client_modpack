import { $Level_ } from "@package/net/minecraft/world/level";
import { $Container } from "@package/net/minecraft/world";
import { $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataComponentPatch, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Record } from "@package/java/lang";
import { $Set_, $List, $Set } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";

declare module "@package/dev/simulated_team/simulated/multiloader/inventory" {
    export class $AbstractContainer {
    }
    export interface $AbstractContainer extends $NBTSerializable, $Container {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        clearContent(): void;
        getMaxStackSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        getContainerSize(): number;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        populateFields(arg0: $ContainerSlot): void;
        getInventoryAsList(): $List<$ContainerSlot>;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        get empty(): boolean;
        get maxStackSize(): number;
        get containerSize(): number;
        get populatedSlots(): $Set<$ContainerSlot>;
        get inventoryAsList(): $List<$ContainerSlot>;
    }
    export class $SingleSlotContainer implements $AbstractContainer {
        isEmpty(): boolean;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getItem(arg0: number): $ItemStack;
        clearContent(): void;
        getMaxStackSize(): number;
        getContainerSize(): number;
        setChanged(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        canInsertItem(arg0: $ItemInfoWrapper_): boolean;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        getInventoryAsList(): $List<$ContainerSlot>;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        removeItemNoUpdate(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        populateFields(arg0: $ContainerSlot): void;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
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
        maxStackSize: number;
        slot: $ContainerSlot;
        constructor(arg0: number);
        get containerSize(): number;
        get populatedSlots(): $Set<$ContainerSlot>;
        get inventoryAsList(): $List<$ContainerSlot>;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get height(): number;
        get width(): number;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $NBTSerializable {
    }
    export interface $NBTSerializable {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
    }
    export class $ItemInfoWrapper extends $Record {
        type(): $Item;
        static generateFromStack(arg0: $ItemStack_): $ItemInfoWrapper;
        static generateFromInfo(arg0: $ItemInfoWrapper_): $ItemStack;
        patchMap(): $DataComponentPatch;
        constructor(type: $Item_, patchMap: $DataComponentPatch_);
    }
    /**
     * Values that may be interpreted as {@link $ItemInfoWrapper}.
     */
    export type $ItemInfoWrapper_ = { patchMap?: $DataComponentPatch_, type?: $Item_,  } | [patchMap?: $DataComponentPatch_, type?: $Item_, ];
    export class $ContainerSlot implements $NBTSerializable {
        clear(): void;
        isEmpty(): boolean;
        static of(arg0: number, arg1: $Item_, arg2: $AbstractContainer): $ContainerSlot;
        static of(arg0: number, arg1: $ItemStack_, arg2: $AbstractContainer): $ContainerSlot;
        getParent(): $AbstractContainer;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getType(): $Item;
        getIndex(): number;
        getStack(): $ItemStack;
        setStack(arg0: $ItemStack_): void;
        shrink(arg0: number): void;
        insertStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        canInsert(arg0: $ItemInfoWrapper_): boolean;
        canExtract(): boolean;
        static EMPTY: $ContainerSlot;
        constructor();
        constructor(arg0: number, arg1: $ItemStack_, arg2: $Item_, arg3: $AbstractContainer);
        get empty(): boolean;
        get parent(): $AbstractContainer;
        get type(): $Item;
        get index(): number;
    }
}
