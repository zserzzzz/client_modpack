import { $IFluidHandler$FluidAction_, $IFluidHandlerItem, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SimpleFluidContent, $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $DataComponentType } from "@package/net/minecraft/core/component";

declare module "@package/net/neoforged/neoforge/fluids/capability/templates" {
    /**
     * Swaps the container item for a different one when it's emptied.
     */
    export class $FluidHandlerItemStackSimple$SwapEmpty extends $FluidHandlerItemStackSimple {
        constructor(componentType: $Supplier_<$DataComponentType<$SimpleFluidContent>>, container: $ItemStack_, emptyContainer: $ItemStack_, capacity: number);
    }
    /**
     * Destroys the container item when it's emptied.
     */
    export class $FluidHandlerItemStack$Consumable extends $FluidHandlerItemStack {
        constructor(componentType: $Supplier_<$DataComponentType<$SimpleFluidContent>>, container: $ItemStack_, capacity: number);
    }
    /**
     * Flexible implementation of a Fluid Storage object. NOT REQUIRED.
     */
    export class $FluidTank implements $IFluidHandler, $IFluidTank {
        setCapacity(capacity: number): $FluidTank;
        getTanks(): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getCapacity(): number;
        isEmpty(): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getSpace(): number;
        getFluidInTank(tank: number): $FluidStack;
        writeToNBT(lookupProvider: $HolderLookup$Provider, nbt: $CompoundTag_): $CompoundTag;
        getTankCapacity(tank: number): number;
        isFluidValid(stack: $FluidStack_): boolean;
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        setValidator(validator: $Predicate_<$FluidStack>): $FluidTank;
        getFluid(): $FluidStack;
        readFromNBT(lookupProvider: $HolderLookup$Provider, nbt: $CompoundTag_): $FluidTank;
        setFluid(stack: $FluidStack_): void;
        getFluidAmount(): number;
        constructor(capacity: number);
        constructor(capacity: number, validator: $Predicate_<$FluidStack>);
        get tanks(): number;
        get empty(): boolean;
        get space(): number;
        set validator(value: $Predicate_<$FluidStack>);
        get fluidAmount(): number;
    }
    /**
     * FluidHandlerItemStack is a template capability provider for ItemStacks.
     * Data is stored in a `SimpleFluidContent` component.
     * 
     * This class allows an ItemStack to contain any partial level of fluid up to its capacity, unlike `FluidHandlerItemStackSimple`
     * 
     * Additional examples are provided to enable consumable fluid containers (see `Consumable`),
     * fluid containers with different empty and full items (see `SwapEmpty`,
     */
    export class $FluidHandlerItemStack implements $IFluidHandlerItem {
        getTanks(): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getContainer(): $ItemStack;
        getFluidInTank(tank: number): $FluidStack;
        getTankCapacity(tank: number): number;
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        getFluid(): $FluidStack;
        canFillFluidType(fluid: $FluidStack_): boolean;
        canDrainFluidType(fluid: $FluidStack_): boolean;
        constructor(componentType: $Supplier_<$DataComponentType<$SimpleFluidContent>>, container: $ItemStack_, capacity: number);
        get tanks(): number;
        get container(): $ItemStack;
        get fluid(): $FluidStack;
    }
    /**
     * Swaps the container item for a different one when it's emptied.
     */
    export class $FluidHandlerItemStack$SwapEmpty extends $FluidHandlerItemStack {
        constructor(componentType: $Supplier_<$DataComponentType<$SimpleFluidContent>>, container: $ItemStack_, emptyContainer: $ItemStack_, capacity: number);
    }
    export class $EmptyFluidHandler implements $IFluidHandler {
        getTanks(): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getFluidInTank(tank: number): $FluidStack;
        getTankCapacity(tank: number): number;
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        static INSTANCE: $EmptyFluidHandler;
        get tanks(): number;
    }
    /**
     * FluidHandlerItemStackSimple is a template capability provider for ItemStacks.
     * Data is stored in a `SimpleFluidContent` component.
     * 
     * This implementation only allows item containers to be fully filled or emptied, similar to vanilla buckets.
     */
    export class $FluidHandlerItemStackSimple implements $IFluidHandlerItem {
        getTanks(): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getContainer(): $ItemStack;
        getFluidInTank(tank: number): $FluidStack;
        getTankCapacity(tank: number): number;
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        getFluid(): $FluidStack;
        canFillFluidType(fluid: $FluidStack_): boolean;
        canDrainFluidType(fluid: $FluidStack_): boolean;
        constructor(componentType: $Supplier_<$DataComponentType<$SimpleFluidContent>>, container: $ItemStack_, capacity: number);
        get tanks(): number;
        get container(): $ItemStack;
        get fluid(): $FluidStack;
    }
    /**
     * Destroys the container item when it's emptied.
     */
    export class $FluidHandlerItemStackSimple$Consumable extends $FluidHandlerItemStackSimple {
        constructor(componentType: $Supplier_<$DataComponentType<$SimpleFluidContent>>, container: $ItemStack_, capacity: number);
    }
    /**
     * VoidFluidHandler is a template fluid handler that can be filled indefinitely without ever getting full.
     * It does not store fluid that gets filled into it, but "destroys" it upon receiving it.
     */
    export class $VoidFluidHandler implements $IFluidHandler {
        getTanks(): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getFluidInTank(tank: number): $FluidStack;
        getTankCapacity(tank: number): number;
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        static INSTANCE: $VoidFluidHandler;
        constructor();
        get tanks(): number;
    }
}
