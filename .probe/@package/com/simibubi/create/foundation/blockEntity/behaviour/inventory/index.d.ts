import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IItemHandler, $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Predicate } from "@package/com/google/common/base";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $IdentifiedInventory } from "@package/com/simibubi/create/content/logistics/packager";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Container } from "@package/net/minecraft/world";
import { $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemHelper$ExtractionCountMode_, $ItemHelper$ExtractionCountMode } from "@package/com/simibubi/create/foundation/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $BlockFace } from "@package/net/createmod/catnip/math";
import { $Object } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory" {
    export class $VersionedInventoryTrackerBehaviour extends $BlockEntityBehaviour {
        reset(): void;
        awaitNewVersion(arg0: $IItemHandler): void;
        awaitNewVersion(arg0: $InvManipulationBehaviour): void;
        stillWaiting(arg0: $InvManipulationBehaviour): boolean;
        stillWaiting(arg0: $IItemHandler): boolean;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$VersionedInventoryTrackerBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $VersionedInventoryWrapper implements $IItemHandlerModifiable {
        getId(): number;
        getVersion(): number;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlots(): number;
        getStackInSlot(arg0: number): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        incrementVersion(): void;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        getHeight(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        setChanged(): void;
        asContainer(): $Container;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getWidth(): number;
        isEmpty(): boolean;
        count(): number;
        count(match: $ItemPredicate_): number;
        find(match: $ItemPredicate_): number;
        find(): number;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        getAllItems(): $List<$ItemStack>;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getStackInSlot(slot: number): $ItemStack;
        getSlotLimit(slot: number): number;
        getSlots(): number;
        static idGenerator: $AtomicInteger;
        constructor(arg0: $IItemHandlerModifiable);
        get id(): number;
        get version(): number;
        get height(): number;
        get width(): number;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $CapManipulationBehaviourBase$InterfaceProvider {
        static towardBlockFacing(): $CapManipulationBehaviourBase$InterfaceProvider;
        static oppositeOfBlockFacing(): $CapManipulationBehaviourBase$InterfaceProvider;
    }
    export interface $CapManipulationBehaviourBase$InterfaceProvider {
        getTarget(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $BlockFace;
    }
    /**
     * Values that may be interpreted as {@link $CapManipulationBehaviourBase$InterfaceProvider}.
     */
    export type $CapManipulationBehaviourBase$InterfaceProvider_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => $BlockFace);
    export class $InvManipulationBehaviour extends $CapManipulationBehaviourBase<$IItemHandler, $InvManipulationBehaviour> {
        extract(arg0: $ItemHelper$ExtractionCountMode_, arg1: number): $ItemStack;
        extract(arg0: $ItemHelper$ExtractionCountMode_, arg1: number, arg2: $Predicate_<$ItemStack>): $ItemStack;
        extract(): $ItemStack;
        insert(arg0: $ItemStack_): $ItemStack;
        getIdentifiedInventory(): $IdentifiedInventory;
        static forInsertion(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_): $InvManipulationBehaviour;
        static forExtraction(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_): $InvManipulationBehaviour;
        blockEntity: $SmartBlockEntity;
        static INSERT: $BehaviourType<$InvManipulationBehaviour>;
        static TYPE: $BehaviourType<$InvManipulationBehaviour>;
        static EXTRACT: $BehaviourType<$InvManipulationBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_);
        get identifiedInventory(): $IdentifiedInventory;
    }
    export class $CapManipulationBehaviourBase<T, S extends $CapManipulationBehaviourBase<never, never>> extends $BlockEntityBehaviour {
        getTarget(): $BlockFace;
        redirect$gmb000$sable$redirectPos(arg0: $Level_, arg1: $BlockCapability<any, any>, arg2: $BlockPos_, arg3: $Object, arg4: $BlockFace): $Object;
        withFilter(arg0: $Predicate<$BlockEntity>): S;
        getInventory(): T;
        redirect$gmb000$sable$findNewCapOnSubLevel(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        findNewCapability(): void;
        simulate(): S;
        bypassSidedness(): S;
        hasInventory(): boolean;
        getAmountFromFilter(): number;
        redirect$gmb000$sable$redirectPos$mixinextras$bridge$19(arg0: $Level_, arg1: $BlockCapability<any, any>, arg2: $BlockPos_, arg3: $Object, arg4: $LocalRef<any>): $Object;
        getModeFromFilter(): $ItemHelper$ExtractionCountMode;
        blockEntity: $SmartBlockEntity;
        constructor(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_);
        get target(): $BlockFace;
        get inventory(): T;
        get amountFromFilter(): number;
        get modeFromFilter(): $ItemHelper$ExtractionCountMode;
    }
    export class $TankManipulationBehaviour extends $CapManipulationBehaviourBase<$IFluidHandler, $TankManipulationBehaviour> {
        extractAny(): $FluidStack;
        static OBSERVE: $BehaviourType<$TankManipulationBehaviour>;
        blockEntity: $SmartBlockEntity;
        constructor(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_);
    }
}
