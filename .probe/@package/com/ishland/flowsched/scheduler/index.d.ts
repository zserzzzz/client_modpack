import { $Consumer_ } from "@package/java/util/function";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $CompletableFuture, $CompletionStage, $Executor } from "@package/java/util/concurrent";
import { $Object, $IllegalStateException, $Throwable, $Runnable_, $Runnable } from "@package/java/lang";
import { $Completable, $Scheduler } from "@package/io/reactivex/rxjava3/core";

declare module "@package/com/ishland/flowsched/scheduler" {
    export class $ItemHolder<K, V, Ctx, UserData> {
        setStatus(status: $ItemStatus<K, V, Ctx>, isCancellation: boolean): boolean;
        tryMarkDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): boolean;
        holdsDependency(): boolean;
        upgradingStatusTo(): $ItemStatus<K, V, Ctx>;
        getOpFuture(): $CompletableFuture<void>;
        getTargetStatus(): $ItemStatus<K, V, Ctx>;
        isDependencyDirty(): boolean;
        subscribeOp(op: $Completable): void;
        submitOpListener(runnable: $Runnable_): void;
        clearFlag(flag: number): void;
        setFlag(flag: number): void;
        isOpen(): boolean;
        getKey(): K;
        getFlags(): number;
        getItem(): $AtomicReference<V>;
        tryCancelUpgradeAction(): void;
        consolidateMarkDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): void;
        cleanupDependencies(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>): void;
        getFutureForStatus0(status: $ItemStatus<K, V, Ctx>): $CompletableFuture<void>;
        getDependencies(status: $ItemStatus<K, V, Ctx>): $KeyStatusPair<K, V, Ctx>[];
        getStatus(): $ItemStatus<K, V, Ctx>;
        getUserData(): $AtomicReference<UserData>;
        addTicket(ticket: $ItemTicket<K, V, Ctx>): void;
        submitUpgradeAction(signaller: $CancellationSignaller, status: $ItemStatus<K, V, Ctx>): void;
        addDependencyTicket(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>, key: K, status: $ItemStatus<K, V, Ctx>, callback: $Runnable_): void;
        getCriticalSectionExecutor(): $Executor;
        removeDependencyTicket(key: K, status: $ItemStatus<K, V, Ctx>): void;
        setDependencies(status: $ItemStatus<K, V, Ctx>, dependencies: $KeyStatusPair<K, V, Ctx>[]): void;
        markDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): void;
        removeTicket(ticket: $ItemTicket<K, V, Ctx>): void;
        getFutureForStatus(status: $ItemStatus<K, V, Ctx>): $CompletableFuture<void>;
        executeCriticalSectionAndBusy(command: $Runnable_): void;
        getCriticalSectionScheduler(): $Scheduler;
        submitOp(op: $CompletionStage<void>): void;
        isBusy(): boolean;
        static FLAG_HAVE_RETRIED: number;
        static UNLOADED_EXCEPTION: $IllegalStateException;
        static FLAG_REMOVED: number;
        static FLAG_BROKEN: number;
        get opFuture(): $CompletableFuture<void>;
        get targetStatus(): $ItemStatus<K, V, Ctx>;
        get dependencyDirty(): boolean;
        set flag(value: number);
        get open(): boolean;
        get key(): K;
        get flags(): number;
        get item(): $AtomicReference<V>;
        get userData(): $AtomicReference<UserData>;
        get criticalSectionExecutor(): $Executor;
        get criticalSectionScheduler(): $Scheduler;
        get busy(): boolean;
    }
    export class $ItemStatus<K, V, Ctx> {
        static EMPTY_DEPENDENCIES: $KeyStatusPair<any, any, any>[];
    }
    export interface $ItemStatus<K, V, Ctx> {
        getNext(): $ItemStatus<K, V, Ctx>;
        ordinal(): number;
        getDependencies(arg0: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        getPrev(): $ItemStatus<K, V, Ctx>;
        getAllStatuses(): $ItemStatus<K, V, Ctx>[];
        downgradeFromThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        upgradeToThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        postUpgradeToThis(arg0: Ctx): $Completable;
        getDependenciesToRemove(holder: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        preDowngradeFromThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        getDependenciesToAdd(holder: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        get next(): $ItemStatus<K, V, Ctx>;
        get prev(): $ItemStatus<K, V, Ctx>;
        get allStatuses(): $ItemStatus<K, V, Ctx>[];
    }
    export class $ItemTicket$TicketType {
        getDescription(): string;
        static DEPENDENCY: $ItemTicket$TicketType;
        static EXTERNAL: $ItemTicket$TicketType;
        constructor(description: string);
        get description(): string;
    }
    export class $StatusAdvancingScheduler<K, V, Ctx, UserData> {
        addTicket(key: K, type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        addTicket(key: K, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        addTicket(key: K, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        getHolder(key: K): $ItemHolder<K, V, Ctx, UserData>;
        itemCount(): number;
        removeTicket(key: K, targetStatus: $ItemStatus<K, V, Ctx>): void;
        removeTicket(key: K, type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>): void;
        static NO_OP: $Runnable;
    }
    export class $ItemTicket<K, V, Ctx> {
        getTargetStatus(): $ItemStatus<K, V, Ctx>;
        consumeCallback(): void;
        getType(): $ItemTicket$TicketType;
        getSource(): $Object;
        constructor(type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_);
        get targetStatus(): $ItemStatus<K, V, Ctx>;
        get type(): $ItemTicket$TicketType;
        get source(): $Object;
    }
    export class $CancellationSignaller {
        fireComplete(throwable: $Throwable): void;
        cancel(): void;
        addListener(callback: $Consumer_<$Throwable>): void;
        static COMPLETED: $CancellationSignaller;
        constructor(cancel: $Consumer_<$CancellationSignaller>);
    }
    export class $Cancellable {
        cancel(): void;
        isCancelled(): boolean;
        constructor();
        get cancelled(): boolean;
    }
    export class $KeyStatusPair<K, V, Ctx> {
        key(): K;
        status(): $ItemStatus<K, V, Ctx>;
        constructor(key: K, status: $ItemStatus<K, V, Ctx>);
    }
}
