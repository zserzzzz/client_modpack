import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ItemContainerContents } from "@package/net/minecraft/world/item/component";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemStackHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $Container } from "@package/net/minecraft/world";
import { $InvWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";
import { $DispenserBlockEntity, $CrafterBlockEntity, $Hopper, $HopperBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as wrapper from "@package/net/neoforged/neoforge/items/wrapper";

declare module "@package/net/neoforged/neoforge/items" {
    /**
     * Slot class that can be used with immutable `IItemHandler`s
     * like `ComponentItemHandler`.
     */
    export class $ItemHandlerCopySlot extends $StackCopySlot {
        getItemHandler(): $IItemHandler;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(itemHandler: $IItemHandler, index: number, xPosition: number, yPosition: number);
        constructor(slotItemHandler: $SlotItemHandler);
        get itemHandler(): $IItemHandler;
    }
    export class $ItemHandlerHelper {
        /**
         * Inserts the given itemstack into the players inventory.
         * If the inventory can't hold it, the item will be dropped in the world at the players position.
         */
        static giveItemToPlayer(player: $Player, stack: $ItemStack_, preferredSlot: number): void;
        /**
         * giveItemToPlayer without preferred slot
         */
        static giveItemToPlayer(player: $Player, stack: $ItemStack_): void;
        static insertItem(dest: $IItemHandler, stack: $ItemStack_, simulate: boolean): $ItemStack;
        static insertItemStacked(dest: $IItemHandler, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * This method uses the standard vanilla algorithm to calculate a comparator output for how "full" the inventory is.
         * This method is an adaptation of Container#calcRedstoneFromInventory(IInventory).
         */
        static calcRedstoneFromInventory(inv: $IItemHandler): number;
        constructor();
    }
    export class $ItemStackHandler implements $IItemHandler, $IItemHandlerModifiable, $INBTSerializable<$CompoundTag>, $ItemStackHandlerAccessor {
        setSize(size: number): void;
        getStackInSlot(slot: number): $ItemStack;
        deserializeNBT(provider: $HolderLookup$Provider, nbt: $CompoundTag_): void;
        getSlots(): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
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
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        create$getStacks(): $NonNullList<$ItemStack>;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        constructor(stacks: $NonNullList<$ItemStack_>);
        constructor(size: number);
        constructor();
        set size(value: number);
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
        get width(): number;
    }
    /**
     * Slot to handle immutable itemstack storages (Ex: `ComponentItemHandler`).
     * 
     * For an implementation for use with an `IItemHandler` see `ItemHandlerCopySlot`.
     * 
     * Vanilla MC code modifies the stack returned by `getStack()` directly, but it
     * calls `setChanged()` when that happens, so we just cache the returned stack,
     * and set it when `setChanged()` is called.
     */
    export class $StackCopySlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(x: number, y: number);
    }
    export class $IItemHandler {
    }
    export interface $IItemHandler extends $InventoryKJS {
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$isMutable(): boolean;
        /**
         * Returns the ItemStack in a given slot.
         * 
         * The result's stack size may be greater than the itemstack's max size.
         * 
         * If the result is empty, then the slot is empty.
         * 
         * **IMPORTANT:** This ItemStack *MUST NOT* be modified. This method is not for
         * altering an inventory's contents. Any implementers who are able to detect
         * modification through this method should throw an exception.
         * 
         * ***SERIOUSLY: DO NOT MODIFY THE RETURNED ITEMSTACK***
         */
        getStackInSlot(slot: number): $ItemStack;
        /**
         * Returns the number of slots available
         */
        getSlots(): number;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$self(): $IItemHandler;
        /**
         * Inserts an ItemStack into the given slot and return the remainder.
         * The ItemStack *should not* be modified in this function!
         * 
         * Note: This behaviour is subtly different from `FluidAction)`
         */
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Extracts an ItemStack from the given slot.
         * 
         * The returned value must be empty if nothing is extracted,
         * otherwise its stack size must be less than or equal to `amount` and `ItemStack#getMaxStackSize()`.
         */
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Retrieves the maximum stack size allowed to exist in the given slot.
         */
        getSlotLimit(slot: number): number;
        /**
         * This function re-implements the vanilla function `Container#canPlaceItem(int, ItemStack)`.
         * It should be used instead of simulated insertions in cases where the contents and state of the inventory are
         * irrelevant, mainly for the purpose of automation and logic (for instance, testing if a minecart can wait
         * to deposit its items into a full inventory, or if the items in the minecart can never be placed into the
         * inventory and should move on).
         * 
         * - isItemValid is false when insertion of the item is never valid.
         * - When isItemValid is true, no assumptions can be made and insertion must be simulated case-by-case.
         * - The actual items in the inventory, its fullness, or any other state are **not** considered by isItemValid.
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Inserts an ItemStack into the given slot and return the remainder.
         * The ItemStack *should not* be modified in this function!
         * 
         * Note: This behaviour is subtly different from `FluidAction)`
         */
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the ItemStack in a given slot.
         * 
         * The result's stack size may be greater than the itemstack's max size.
         * 
         * If the result is empty, then the slot is empty.
         * 
         * **IMPORTANT:** This ItemStack *MUST NOT* be modified. This method is not for
         * altering an inventory's contents. Any implementers who are able to detect
         * modification through this method should throw an exception.
         * 
         * ***SERIOUSLY: DO NOT MODIFY THE RETURNED ITEMSTACK***
         */
        getStackInSlot(slot: number): $ItemStack;
        /**
         * This function re-implements the vanilla function `Container#canPlaceItem(int, ItemStack)`.
         * It should be used instead of simulated insertions in cases where the contents and state of the inventory are
         * irrelevant, mainly for the purpose of automation and logic (for instance, testing if a minecart can wait
         * to deposit its items into a full inventory, or if the items in the minecart can never be placed into the
         * inventory and should move on).
         * 
         * - isItemValid is false when insertion of the item is never valid.
         * - When isItemValid is true, no assumptions can be made and insertion must be simulated case-by-case.
         * - The actual items in the inventory, its fullness, or any other state are **not** considered by isItemValid.
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        /**
         * Extracts an ItemStack from the given slot.
         * 
         * The returned value must be empty if nothing is extracted,
         * otherwise its stack size must be less than or equal to `amount` and `ItemStack#getMaxStackSize()`.
         */
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        /**
         * Retrieves the maximum stack size allowed to exist in the given slot.
         */
        getSlotLimit(slot: number): number;
        /**
         * Returns the number of slots available
         */
        getSlots(): number;
    }
    export class $SlotItemHandler extends $Slot {
        initialize(stack: $ItemStack_): void;
        getItemHandler(): $IItemHandler;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(itemHandler: $IItemHandler, index: number, xPosition: number, yPosition: number);
        get itemHandler(): $IItemHandler;
    }
    /**
     * Variant of `ItemStackHandler` for use with data components.
     * 
     * The actual data storage is managed by a data component, and all changes will write back to that component.
     * 
     * To use this class, register a new `DataComponentType` which holds an `ItemContainerContents` for your item.
     * Then reference that component from your `ICapabilityProvider` passed to `RegisterCapabilitiesEvent#registerItem` to create an instance of this class.
     * 
     * Since data components are immutable, this will not work nicely with vanilla's container methods which expect the stack to be mutable.
     * Use `ItemHandlerCopySlot` to get around this issue.
     */
    export class $ComponentItemHandler implements $IItemHandlerModifiable {
        getStackInSlot(slot: number): $ItemStack;
        getSlots(): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        insertItem(slot: number, toInsert: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
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
        insertItem(slot: number, toInsert: $ItemStack_, simulate: boolean): $ItemStack;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        /**
         * Creates a new `ComponentItemHandler` with target size. If the existing component is smaller than the given size, it will be expanded on write.
         */
        constructor(parent: $MutableDataComponentHolder, component: $DataComponentType_<$ItemContainerContents>, size: number);
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
        get width(): number;
    }
    export class $IItemHandlerModifiable {
    }
    export interface $IItemHandlerModifiable extends $IItemHandler {
        /**
         * Overrides the stack in the given slot. This method is used by the
         * standard Forge helper methods and classes. It is not intended for
         * general use by other mods, and the handler may throw an error if it
         * is called unexpectedly.
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
    }
    export class $VanillaHopperItemHandler extends $InvWrapper {
        constructor(hopper: $HopperBlockEntity);
    }
    export class $VanillaInventoryCodeHooks {
        /**
         * Copied from BlockDropper#dispense and added capability support
         */
        static dropperInsertHook(level: $Level_, pos: $BlockPos_, dropper: $DispenserBlockEntity, slot: number, stack: $ItemStack_): boolean;
        /**
         * Copied from TileEntityHopper#transferItemsOut and added capability support
         */
        static insertHook(hopper: $HopperBlockEntity): boolean;
        /**
         * Added capability support for the Crafter dispensing the result
         */
        static insertCrafterOutput(level: $Level_, pos: $BlockPos_, crafterBlockEntity: $CrafterBlockEntity, stack: $ItemStack_): $ItemStack;
        /**
         * Copied from TileEntityHopper#captureDroppedItems and added capability support
         */
        static extractHook(level: $Level_, dest: $Hopper): boolean;
        constructor();
    }
}
