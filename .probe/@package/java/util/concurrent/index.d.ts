import { $Duration_ } from "@package/java/time";
import { $Serializable } from "@package/java/io";
import { $BiConsumer_, $ToDoubleFunction_, $IntFunction_, $Supplier_, $Function_, $ToIntBiFunction_, $DoubleBinaryOperator_, $LongBinaryOperator_, $Consumer_, $IntBinaryOperator_, $Predicate_, $BiFunction_, $ToLongBiFunction_, $ToDoubleBiFunction_, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Thread, $Throwable, $Enum, $AutoCloseable, $Runnable_, $Comparable, $Object, $Runnable } from "@package/java/lang";
import { $Spliterator, $Iterator, $Queue, $Enumeration, $List, $Map_, $Collection_, $Collection, $Deque, $AbstractMap, $Map, $Map$Entry, $Set, $AbstractQueue, $AbstractCollection } from "@package/java/util";
import { $ChronoUnit, $ChronoUnit_ } from "@package/java/time/temporal";
export * as atomic from "@package/java/util/concurrent/atomic";

declare module "@package/java/util/concurrent" {
    export class $ThreadPoolExecutor extends $AbstractExecutorService {
        remove(arg0: $Runnable_): boolean;
        getQueue(): $BlockingQueue<$Runnable>;
        getPoolSize(): number;
        isTerminating(): boolean;
        purge(): void;
        allowCoreThreadTimeOut(arg0: boolean): void;
        allowsCoreThreadTimeOut(): boolean;
        setThreadFactory(arg0: $ThreadFactory_): void;
        getThreadFactory(): $ThreadFactory;
        setRejectedExecutionHandler(arg0: $RejectedExecutionHandler_): void;
        getRejectedExecutionHandler(): $RejectedExecutionHandler;
        setCorePoolSize(arg0: number): void;
        getCorePoolSize(): number;
        prestartCoreThread(): boolean;
        prestartAllCoreThreads(): number;
        setMaximumPoolSize(arg0: number): void;
        getMaximumPoolSize(): number;
        setKeepAliveTime(arg0: number, arg1: $TimeUnit_): void;
        getKeepAliveTime(arg0: $TimeUnit_): number;
        getActiveCount(): number;
        getLargestPoolSize(): number;
        getTaskCount(): number;
        getCompletedTaskCount(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $TimeUnit_, arg4: $BlockingQueue<$Runnable_>);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $TimeUnit_, arg4: $BlockingQueue<$Runnable_>, arg5: $ThreadFactory_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $TimeUnit_, arg4: $BlockingQueue<$Runnable_>, arg5: $RejectedExecutionHandler_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $TimeUnit_, arg4: $BlockingQueue<$Runnable_>, arg5: $ThreadFactory_, arg6: $RejectedExecutionHandler_);
        get queue(): $BlockingQueue<$Runnable>;
        get poolSize(): number;
        get terminating(): boolean;
        get activeCount(): number;
        get largestPoolSize(): number;
        get taskCount(): number;
        get completedTaskCount(): number;
    }
    export class $Delayed {
    }
    export interface $Delayed extends $Comparable<$Delayed> {
        getDelay(arg0: $TimeUnit_): number;
    }
    export class $CompletableFuture<T> implements $Future<T>, $CompletionStage<T> {
        newIncompleteFuture<U>(): $CompletableFuture<U>;
        toCompletableFuture(): $CompletableFuture<T>;
        defaultExecutor(): $Executor;
        completeAsync(arg0: $Supplier_<T>): $CompletableFuture<T>;
        completeAsync(arg0: $Supplier_<T>, arg1: $Executor_): $CompletableFuture<T>;
        exceptionallyComposeAsync(arg0: $Function_<$Throwable, $CompletionStage<T>>, arg1: $Executor_): $CompletableFuture<T>;
        exceptionally(arg0: $Function_<$Throwable, T>): $CompletableFuture<T>;
        whenCompleteAsync(arg0: $BiConsumer_<T, $Throwable>, arg1: $Executor_): $CompletableFuture<T>;
        whenCompleteAsync(arg0: $BiConsumer_<T, $Throwable>): $CompletableFuture<T>;
        handleAsync<U>(arg0: $BiFunction_<T, $Throwable, U>, arg1: $Executor_): $CompletableFuture<U>;
        thenComposeAsync<U>(arg0: $Function_<T, $CompletionStage<U>>, arg1: $Executor_): $CompletableFuture<U>;
        runAfterEitherAsync(arg0: $CompletionStage<never>, arg1: $Runnable_, arg2: $Executor_): $CompletableFuture<void>;
        runAfterEitherAsync(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletableFuture<void>;
        acceptEitherAsync(arg0: $CompletionStage<T>, arg1: $Consumer_<T>, arg2: $Executor_): $CompletableFuture<void>;
        acceptEitherAsync(arg0: $CompletionStage<T>, arg1: $Consumer_<T>): $CompletableFuture<void>;
        runAfterBoth(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletableFuture<void>;
        thenAcceptBoth<U>(arg0: $CompletionStage<U>, arg1: $BiConsumer_<T, U>): $CompletableFuture<void>;
        thenRun(arg0: $Runnable_): $CompletableFuture<void>;
        thenAccept(arg0: $Consumer_<T>): $CompletableFuture<void>;
        thenApplyAsync<U>(arg0: $Function_<T, U>): $CompletableFuture<U>;
        thenApplyAsync<U>(arg0: $Function_<T, U>, arg1: $Executor_): $CompletableFuture<U>;
        thenApply<U>(arg0: $Function_<T, U>): $CompletableFuture<U>;
        static supplyAsync<U>(arg0: $Supplier_<U>): $CompletableFuture<U>;
        static supplyAsync<U>(arg0: $Supplier_<U>, arg1: $Executor_): $CompletableFuture<U>;
        static runAsync(arg0: $Runnable_, arg1: $Executor_): $CompletableFuture<void>;
        static runAsync(arg0: $Runnable_): $CompletableFuture<void>;
        static completedFuture<U>(arg0: U): $CompletableFuture<U>;
        getNow(arg0: T): T;
        static anyOf(...arg0: $CompletableFuture<never>[]): $CompletableFuture<$Object>;
        isCompletedExceptionally(): boolean;
        obtrudeValue(arg0: T): void;
        obtrudeException(arg0: $Throwable): void;
        getNumberOfDependents(): number;
        minimalCompletionStage(): $CompletionStage<T>;
        orTimeout(arg0: number, arg1: $TimeUnit_): $CompletableFuture<T>;
        completeOnTimeout(arg0: T, arg1: number, arg2: $TimeUnit_): $CompletableFuture<T>;
        static delayedExecutor(arg0: number, arg1: $TimeUnit_): $Executor;
        static delayedExecutor(arg0: number, arg1: $TimeUnit_, arg2: $Executor_): $Executor;
        static completedStage<U>(arg0: U): $CompletionStage<U>;
        static failedFuture<U>(arg0: $Throwable): $CompletableFuture<U>;
        static failedStage<U>(arg0: $Throwable): $CompletionStage<U>;
        get(): T;
        get(arg0: number, arg1: $TimeUnit_): T;
        join(): T;
        state(): $Future$State;
        isDone(): boolean;
        cancel(arg0: boolean): boolean;
        copy(): $CompletableFuture<T>;
        handle<U>(arg0: $BiFunction_<T, $Throwable, U>): $CompletableFuture<U>;
        complete(arg0: T): boolean;
        static allOf(...arg0: $CompletableFuture<never>[]): $CompletableFuture<void>;
        isCancelled(): boolean;
        resultNow(): T;
        exceptionNow(): $Throwable;
        completeExceptionally(arg0: $Throwable): boolean;
        whenComplete(arg0: $BiConsumer_<T, $Throwable>): $CompletionStage<T>;
        exceptionallyComposeAsync(arg0: $Function_<$Throwable, $CompletionStage<T>>): $CompletionStage<T>;
        exceptionallyCompose(arg0: $Function_<$Throwable, $CompletionStage<T>>): $CompletionStage<T>;
        exceptionallyAsync(arg0: $Function_<$Throwable, T>): $CompletionStage<T>;
        exceptionallyAsync(arg0: $Function_<$Throwable, T>, arg1: $Executor_): $CompletionStage<T>;
        handleAsync<U>(arg0: $BiFunction_<T, $Throwable, U>): $CompletionStage<U>;
        thenComposeAsync<U>(arg0: $Function_<T, $CompletionStage<U>>): $CompletionStage<U>;
        thenCompose<U>(arg0: $Function_<T, $CompletionStage<U>>): $CompletionStage<U>;
        runAfterEither(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletionStage<void>;
        acceptEither(arg0: $CompletionStage<T>, arg1: $Consumer_<T>): $CompletionStage<void>;
        applyToEitherAsync<U>(arg0: $CompletionStage<T>, arg1: $Function_<T, U>, arg2: $Executor_): $CompletionStage<U>;
        applyToEitherAsync<U>(arg0: $CompletionStage<T>, arg1: $Function_<T, U>): $CompletionStage<U>;
        applyToEither<U>(arg0: $CompletionStage<T>, arg1: $Function_<T, U>): $CompletionStage<U>;
        runAfterBothAsync(arg0: $CompletionStage<never>, arg1: $Runnable_, arg2: $Executor_): $CompletionStage<void>;
        runAfterBothAsync(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletionStage<void>;
        thenAcceptBothAsync<U>(arg0: $CompletionStage<U>, arg1: $BiConsumer_<T, U>, arg2: $Executor_): $CompletionStage<void>;
        thenAcceptBothAsync<U>(arg0: $CompletionStage<U>, arg1: $BiConsumer_<T, U>): $CompletionStage<void>;
        thenCombineAsync<U, V>(arg0: $CompletionStage<U>, arg1: $BiFunction_<T, U, V>): $CompletionStage<V>;
        thenCombineAsync<U, V>(arg0: $CompletionStage<U>, arg1: $BiFunction_<T, U, V>, arg2: $Executor_): $CompletionStage<V>;
        thenCombine<U, V>(arg0: $CompletionStage<U>, arg1: $BiFunction_<T, U, V>): $CompletionStage<V>;
        thenRunAsync(arg0: $Runnable_, arg1: $Executor_): $CompletionStage<void>;
        thenRunAsync(arg0: $Runnable_): $CompletionStage<void>;
        thenAcceptAsync(arg0: $Consumer_<T>, arg1: $Executor_): $CompletionStage<void>;
        thenAcceptAsync(arg0: $Consumer_<T>): $CompletionStage<void>;
        constructor();
        get completedExceptionally(): boolean;
        get numberOfDependents(): number;
        get done(): boolean;
        get cancelled(): boolean;
    }
    export class $BlockingQueue<E> {
    }
    export interface $BlockingQueue<E> extends $Queue<E> {
        remainingCapacity(): number;
        drainTo(arg0: $Collection_<E>, arg1: number): number;
        drainTo(arg0: $Collection_<E>): number;
        remove(arg0: $Object): boolean;
        put(arg0: E): void;
        add(arg0: E): boolean;
        contains(arg0: $Object): boolean;
        poll(arg0: number, arg1: $TimeUnit_): E;
        offer(arg0: E, arg1: number, arg2: $TimeUnit_): boolean;
        offer(arg0: E): boolean;
        take(): E;
    }
    export class $RejectedExecutionHandler {
    }
    export interface $RejectedExecutionHandler {
        rejectedExecution(arg0: $Runnable_, arg1: $ThreadPoolExecutor): void;
    }
    /**
     * Values that may be interpreted as {@link $RejectedExecutionHandler}.
     */
    export type $RejectedExecutionHandler_ = ((arg0: $Runnable, arg1: $ThreadPoolExecutor) => void);
    export class $ConcurrentLinkedQueue<E> extends $AbstractQueue<E> implements $Queue<E>, $Serializable {
        constructor();
        constructor(arg0: $Collection_<E>);
    }
    export class $ScheduledFuture<V> {
    }
    export interface $ScheduledFuture<V> extends $Delayed, $Future<V> {
    }
    export class $TimeUnit extends $Enum<$TimeUnit> {
        static values(): $TimeUnit[];
        convert(arg0: $Duration_): number;
        convert(arg0: number, arg1: $TimeUnit_): number;
        static valueOf(arg0: string): $TimeUnit;
        static of(arg0: $ChronoUnit_): $TimeUnit;
        toNanos(arg0: number): number;
        toMillis(arg0: number): number;
        sleep(arg0: number): void;
        toDays(arg0: number): number;
        toSeconds(arg0: number): number;
        toHours(arg0: number): number;
        toMinutes(arg0: number): number;
        toMicros(arg0: number): number;
        timedWait(arg0: $Object, arg1: number): void;
        timedJoin(arg0: $Thread, arg1: number): void;
        toChronoUnit(): $ChronoUnit;
        static MILLISECONDS: $TimeUnit;
        static MICROSECONDS: $TimeUnit;
        static HOURS: $TimeUnit;
        static SECONDS: $TimeUnit;
        static NANOSECONDS: $TimeUnit;
        static DAYS: $TimeUnit;
        static MINUTES: $TimeUnit;
    }
    /**
     * Values that may be interpreted as {@link $TimeUnit}.
     */
    export type $TimeUnit_ = "nanoseconds" | "microseconds" | "milliseconds" | "seconds" | "minutes" | "hours" | "days";
    export class $ExecutorService {
    }
    export interface $ExecutorService extends $Executor, $AutoCloseable {
        shutdown(): void;
        isTerminated(): boolean;
        close(): void;
        isShutdown(): boolean;
        submit<T>(arg0: $Runnable_, arg1: T): $Future<T>;
        submit(arg0: $Runnable_): $Future<never>;
        submit<T>(arg0: $Callable_<T>): $Future<T>;
        invokeAny<T>(arg0: $Collection_<$Callable_<T>>): T;
        invokeAny<T>(arg0: $Collection_<$Callable_<T>>, arg1: number, arg2: $TimeUnit_): T;
        invokeAll<T>(arg0: $Collection_<$Callable_<T>>): $List<$Future<T>>;
        invokeAll<T>(arg0: $Collection_<$Callable_<T>>, arg1: number, arg2: $TimeUnit_): $List<$Future<T>>;
        awaitTermination(arg0: number, arg1: $TimeUnit_): boolean;
        shutdownNow(): $List<$Runnable>;
        get terminated(): boolean;
    }
    export class $Executor {
    }
    export interface $Executor {
        execute(arg0: $Runnable_): void;
    }
    /**
     * Values that may be interpreted as {@link $Executor}.
     */
    export type $Executor_ = ((arg0: $Runnable) => void);
    export class $ConcurrentHashMap<K, V> extends $AbstractMap<K, V> implements $ConcurrentMap<K, V>, $Serializable {
        contains(arg0: $Object): boolean;
        elements(): $Enumeration<V>;
        forEach(arg0: number, arg1: $BiConsumer_<K, V>): void;
        forEach<U>(arg0: number, arg1: $BiFunction_<K, V, U>, arg2: $Consumer_<U>): void;
        keys(): $Enumeration<K>;
        keySet(arg0: V): $ConcurrentHashMap$KeySetView<K, V>;
        mappingCount(): number;
        static newKeySet<K>(arg0: number): $ConcurrentHashMap$KeySetView<K, boolean>;
        static newKeySet<K>(): $ConcurrentHashMap$KeySetView<K, boolean>;
        search<U>(arg0: number, arg1: $BiFunction_<K, V, U>): U;
        reduce<U>(arg0: number, arg1: $BiFunction_<K, V, U>, arg2: $BiFunction_<U, U, U>): U;
        reduceToDouble(arg0: number, arg1: $ToDoubleBiFunction_<K, V>, arg2: number, arg3: $DoubleBinaryOperator_): number;
        reduceToLong(arg0: number, arg1: $ToLongBiFunction_<K, V>, arg2: number, arg3: $LongBinaryOperator_): number;
        reduceToInt(arg0: number, arg1: $ToIntBiFunction_<K, V>, arg2: number, arg3: $IntBinaryOperator_): number;
        forEachKey(arg0: number, arg1: $Consumer_<K>): void;
        forEachKey<U>(arg0: number, arg1: $Function_<K, U>, arg2: $Consumer_<U>): void;
        searchKeys<U>(arg0: number, arg1: $Function_<K, U>): U;
        reduceKeys(arg0: number, arg1: $BiFunction_<K, K, K>): K;
        reduceKeys<U>(arg0: number, arg1: $Function_<K, U>, arg2: $BiFunction_<U, U, U>): U;
        reduceKeysToDouble(arg0: number, arg1: $ToDoubleFunction_<K>, arg2: number, arg3: $DoubleBinaryOperator_): number;
        reduceKeysToLong(arg0: number, arg1: $ToLongFunction_<K>, arg2: number, arg3: $LongBinaryOperator_): number;
        reduceKeysToInt(arg0: number, arg1: $ToIntFunction_<K>, arg2: number, arg3: $IntBinaryOperator_): number;
        forEachValue<U>(arg0: number, arg1: $Function_<V, U>, arg2: $Consumer_<U>): void;
        forEachValue(arg0: number, arg1: $Consumer_<V>): void;
        searchValues<U>(arg0: number, arg1: $Function_<V, U>): U;
        reduceValues(arg0: number, arg1: $BiFunction_<V, V, V>): V;
        reduceValues<U>(arg0: number, arg1: $Function_<V, U>, arg2: $BiFunction_<U, U, U>): U;
        reduceValuesToDouble(arg0: number, arg1: $ToDoubleFunction_<V>, arg2: number, arg3: $DoubleBinaryOperator_): number;
        reduceValuesToLong(arg0: number, arg1: $ToLongFunction_<V>, arg2: number, arg3: $LongBinaryOperator_): number;
        reduceValuesToInt(arg0: number, arg1: $ToIntFunction_<V>, arg2: number, arg3: $IntBinaryOperator_): number;
        forEachEntry(arg0: number, arg1: $Consumer_<$Map$Entry<K, V>>): void;
        forEachEntry<U>(arg0: number, arg1: $Function_<$Map$Entry<K, V>, U>, arg2: $Consumer_<U>): void;
        searchEntries<U>(arg0: number, arg1: $Function_<$Map$Entry<K, V>, U>): U;
        reduceEntries(arg0: number, arg1: $BiFunction_<$Map$Entry<K, V>, $Map$Entry<K, V>, $Map$Entry<K, V>>): $Map$Entry<K, V>;
        reduceEntries<U>(arg0: number, arg1: $Function_<$Map$Entry<K, V>, U>, arg2: $BiFunction_<U, U, U>): U;
        reduceEntriesToDouble(arg0: number, arg1: $ToDoubleFunction_<$Map$Entry<K, V>>, arg2: number, arg3: $DoubleBinaryOperator_): number;
        reduceEntriesToLong(arg0: number, arg1: $ToLongFunction_<$Map$Entry<K, V>>, arg2: number, arg3: $LongBinaryOperator_): number;
        reduceEntriesToInt(arg0: number, arg1: $ToIntFunction_<$Map$Entry<K, V>>, arg2: number, arg3: $IntBinaryOperator_): number;
        constructor();
        constructor(arg0: $Map_<K, V>);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number);
    }
    export class $Future<V> {
    }
    export interface $Future<V> {
        get(arg0: number, arg1: $TimeUnit_): V;
        get(): V;
        state(): $Future$State;
        isDone(): boolean;
        cancel(arg0: boolean): boolean;
        isCancelled(): boolean;
        resultNow(): V;
        exceptionNow(): $Throwable;
        get done(): boolean;
        get cancelled(): boolean;
    }
    export class $AbstractExecutorService implements $ExecutorService {
        submit<T>(arg0: $Callable_<T>): $Future<T>;
        submit(arg0: $Runnable_): $Future<never>;
        submit<T>(arg0: $Runnable_, arg1: T): $Future<T>;
        invokeAny<T>(arg0: $Collection_<$Callable_<T>>): T;
        invokeAny<T>(arg0: $Collection_<$Callable_<T>>, arg1: number, arg2: $TimeUnit_): T;
        invokeAll<T>(arg0: $Collection_<$Callable_<T>>): $List<$Future<T>>;
        invokeAll<T>(arg0: $Collection_<$Callable_<T>>, arg1: number, arg2: $TimeUnit_): $List<$Future<T>>;
        close(): void;
        constructor();
    }
    export class $Semaphore implements $Serializable {
        release(): void;
        release(arg0: number): void;
        hasQueuedThreads(): boolean;
        getQueueLength(): number;
        isFair(): boolean;
        tryAcquire(arg0: number, arg1: number, arg2: $TimeUnit_): boolean;
        tryAcquire(): boolean;
        tryAcquire(arg0: number): boolean;
        tryAcquire(arg0: number, arg1: $TimeUnit_): boolean;
        acquire(): void;
        acquire(arg0: number): void;
        drainPermits(): number;
        acquireUninterruptibly(): void;
        acquireUninterruptibly(arg0: number): void;
        availablePermits(): number;
        constructor(arg0: number);
        constructor(arg0: number, arg1: boolean);
        get queueLength(): number;
        get fair(): boolean;
    }
    export class $ConcurrentHashMap$KeySetView<K, V> extends $ConcurrentHashMap$CollectionView<K, V, K> implements $Set<K>, $Serializable {
        getMappedValue(): V;
        get mappedValue(): V;
    }
    export class $ConcurrentMap<K, V> {
    }
    export interface $ConcurrentMap<K, V> extends $Map<K, V> {
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replace(arg0: K, arg1: V): V;
        replaceAll(arg0: $BiFunction_<K, V, V>): void;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        forEach(arg0: $BiConsumer_<K, V>): void;
        computeIfAbsent(arg0: K, arg1: $Function_<K, V>): V;
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
    }
    export class $ConcurrentHashMap$CollectionView<K, V, E> implements $Collection<E>, $Serializable {
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<E>;
        spliterator(): $Spliterator<E>;
        removeIf(arg0: $Predicate_<E>): boolean;
        parallelStream(): $Stream<E>;
        forEach(arg0: $Consumer_<E>): void;
    }
    export class $CompletionStage<T> {
    }
    export interface $CompletionStage<T> {
        toCompletableFuture(): $CompletableFuture<T>;
        whenComplete(arg0: $BiConsumer_<T, $Throwable>): $CompletionStage<T>;
        exceptionallyComposeAsync(arg0: $Function_<$Throwable, $CompletionStage<T>>, arg1: $Executor_): $CompletionStage<T>;
        exceptionallyComposeAsync(arg0: $Function_<$Throwable, $CompletionStage<T>>): $CompletionStage<T>;
        exceptionallyCompose(arg0: $Function_<$Throwable, $CompletionStage<T>>): $CompletionStage<T>;
        exceptionallyAsync(arg0: $Function_<$Throwable, T>): $CompletionStage<T>;
        exceptionallyAsync(arg0: $Function_<$Throwable, T>, arg1: $Executor_): $CompletionStage<T>;
        exceptionally(arg0: $Function_<$Throwable, T>): $CompletionStage<T>;
        whenCompleteAsync(arg0: $BiConsumer_<T, $Throwable>, arg1: $Executor_): $CompletionStage<T>;
        whenCompleteAsync(arg0: $BiConsumer_<T, $Throwable>): $CompletionStage<T>;
        handleAsync<U>(arg0: $BiFunction_<T, $Throwable, U>, arg1: $Executor_): $CompletionStage<U>;
        handleAsync<U>(arg0: $BiFunction_<T, $Throwable, U>): $CompletionStage<U>;
        thenComposeAsync<U>(arg0: $Function_<T, $CompletionStage<U>>, arg1: $Executor_): $CompletionStage<U>;
        thenComposeAsync<U>(arg0: $Function_<T, $CompletionStage<U>>): $CompletionStage<U>;
        thenCompose<U>(arg0: $Function_<T, $CompletionStage<U>>): $CompletionStage<U>;
        runAfterEitherAsync(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletionStage<void>;
        runAfterEitherAsync(arg0: $CompletionStage<never>, arg1: $Runnable_, arg2: $Executor_): $CompletionStage<void>;
        runAfterEither(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletionStage<void>;
        acceptEitherAsync(arg0: $CompletionStage<T>, arg1: $Consumer_<T>): $CompletionStage<void>;
        acceptEitherAsync(arg0: $CompletionStage<T>, arg1: $Consumer_<T>, arg2: $Executor_): $CompletionStage<void>;
        acceptEither(arg0: $CompletionStage<T>, arg1: $Consumer_<T>): $CompletionStage<void>;
        applyToEitherAsync<U>(arg0: $CompletionStage<T>, arg1: $Function_<T, U>, arg2: $Executor_): $CompletionStage<U>;
        applyToEitherAsync<U>(arg0: $CompletionStage<T>, arg1: $Function_<T, U>): $CompletionStage<U>;
        applyToEither<U>(arg0: $CompletionStage<T>, arg1: $Function_<T, U>): $CompletionStage<U>;
        runAfterBothAsync(arg0: $CompletionStage<never>, arg1: $Runnable_, arg2: $Executor_): $CompletionStage<void>;
        runAfterBothAsync(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletionStage<void>;
        runAfterBoth(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletionStage<void>;
        thenAcceptBothAsync<U>(arg0: $CompletionStage<U>, arg1: $BiConsumer_<T, U>, arg2: $Executor_): $CompletionStage<void>;
        thenAcceptBothAsync<U>(arg0: $CompletionStage<U>, arg1: $BiConsumer_<T, U>): $CompletionStage<void>;
        thenAcceptBoth<U>(arg0: $CompletionStage<U>, arg1: $BiConsumer_<T, U>): $CompletionStage<void>;
        thenCombineAsync<U, V>(arg0: $CompletionStage<U>, arg1: $BiFunction_<T, U, V>, arg2: $Executor_): $CompletionStage<V>;
        thenCombineAsync<U, V>(arg0: $CompletionStage<U>, arg1: $BiFunction_<T, U, V>): $CompletionStage<V>;
        thenCombine<U, V>(arg0: $CompletionStage<U>, arg1: $BiFunction_<T, U, V>): $CompletionStage<V>;
        thenRunAsync(arg0: $Runnable_): $CompletionStage<void>;
        thenRunAsync(arg0: $Runnable_, arg1: $Executor_): $CompletionStage<void>;
        thenRun(arg0: $Runnable_): $CompletionStage<void>;
        thenAcceptAsync(arg0: $Consumer_<T>): $CompletionStage<void>;
        thenAcceptAsync(arg0: $Consumer_<T>, arg1: $Executor_): $CompletionStage<void>;
        thenAccept(arg0: $Consumer_<T>): $CompletionStage<void>;
        thenApplyAsync<U>(arg0: $Function_<T, U>, arg1: $Executor_): $CompletionStage<U>;
        thenApplyAsync<U>(arg0: $Function_<T, U>): $CompletionStage<U>;
        thenApply<U>(arg0: $Function_<T, U>): $CompletionStage<U>;
        handle<U>(arg0: $BiFunction_<T, $Throwable, U>): $CompletionStage<U>;
    }
    export class $Flow$Subscription {
    }
    export interface $Flow$Subscription {
        request(arg0: number): void;
        cancel(): void;
    }
    export class $ConcurrentLinkedDeque<E> extends $AbstractCollection<E> implements $Deque<E>, $Serializable {
        remove(): E;
        peek(): E;
        getFirst(): E;
        getLast(): E;
        element(): E;
        addFirst(arg0: E): void;
        addLast(arg0: E): void;
        removeFirst(): E;
        removeLast(): E;
        poll(): E;
        push(arg0: E): void;
        pop(): E;
        pollFirst(): E;
        pollLast(): E;
        offerLast(arg0: E): boolean;
        peekFirst(): E;
        removeFirstOccurrence(arg0: $Object): boolean;
        offerFirst(arg0: E): boolean;
        peekLast(): E;
        removeLastOccurrence(arg0: $Object): boolean;
        offer(arg0: E): boolean;
        descendingIterator(): $Iterator<E>;
        reversed(): $Deque<E>;
        constructor();
        constructor(arg0: $Collection_<E>);
        get first(): E;
        get last(): E;
    }
    export class $Flow$Subscriber<T> {
    }
    export interface $Flow$Subscriber<T> {
        onError(arg0: $Throwable): void;
        onNext(arg0: T): void;
        onComplete(): void;
        onSubscribe(arg0: $Flow$Subscription): void;
    }
    export class $ThreadFactory {
    }
    export interface $ThreadFactory {
        newThread(arg0: $Runnable_): $Thread;
    }
    /**
     * Values that may be interpreted as {@link $ThreadFactory}.
     */
    export type $ThreadFactory_ = ((arg0: $Runnable) => $Thread);
    export class $Flow$Publisher<T> {
    }
    export interface $Flow$Publisher<T> {
        subscribe(arg0: $Flow$Subscriber<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $Flow$Publisher}.
     */
    export type $Flow$Publisher_<T> = ((arg0: $Flow$Subscriber<T>) => void);
    export class $Future$State extends $Enum<$Future$State> {
        static values(): $Future$State[];
        static valueOf(arg0: string): $Future$State;
        static CANCELLED: $Future$State;
        static SUCCESS: $Future$State;
        static FAILED: $Future$State;
        static RUNNING: $Future$State;
    }
    /**
     * Values that may be interpreted as {@link $Future$State}.
     */
    export type $Future$State_ = "running" | "success" | "failed" | "cancelled";
    export class $ScheduledExecutorService {
    }
    export interface $ScheduledExecutorService extends $ExecutorService {
        schedule(arg0: $Runnable_, arg1: number, arg2: $TimeUnit_): $ScheduledFuture<never>;
        schedule<V>(arg0: $Callable_<V>, arg1: number, arg2: $TimeUnit_): $ScheduledFuture<V>;
        scheduleWithFixedDelay(arg0: $Runnable_, arg1: number, arg2: number, arg3: $TimeUnit_): $ScheduledFuture<never>;
        scheduleAtFixedRate(arg0: $Runnable_, arg1: number, arg2: number, arg3: $TimeUnit_): $ScheduledFuture<never>;
    }
    export class $Callable<V> {
    }
    export interface $Callable<V> {
        call(): V;
    }
    /**
     * Values that may be interpreted as {@link $Callable}.
     */
    export type $Callable_<V> = (() => V);
}
