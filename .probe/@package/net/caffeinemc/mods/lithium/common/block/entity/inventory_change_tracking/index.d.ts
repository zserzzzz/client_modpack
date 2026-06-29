import { $Container } from "@package/net/minecraft/world";
import { $LithiumStackList } from "@package/net/caffeinemc/mods/lithium/common/hopper";

declare module "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_change_tracking" {
    export class $InventoryChangeEmitter {
    }
    export interface $InventoryChangeEmitter {
        lithium$emitStackListReplaced(): void;
        lithium$emitFirstComparatorAdded(): void;
        lithium$forwardContentChangeOnce(arg0: $InventoryChangeListener, arg1: $LithiumStackList): void;
        lithium$emitContentModified(): void;
        emitCallbackReplaced(): void;
        lithium$emitRemoved(): void;
        lithium$stopForwardingMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        lithium$forwardMajorInventoryChanges(arg0: $InventoryChangeListener): void;
    }
    export class $InventoryChangeTracker {
    }
    export interface $InventoryChangeTracker extends $InventoryChangeEmitter {
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
    }
    export class $InventoryChangeListener {
    }
    export interface $InventoryChangeListener {
        lithium$handleInventoryRemoved(arg0: $Container): void;
        lithium$handleComparatorAdded(arg0: $Container): boolean;
        handleStackListReplaced(arg0: $Container): void;
        lithium$handleInventoryContentModified(arg0: $Container): void;
    }
}
