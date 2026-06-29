import { $Supplier_, $IntSupplier_, $LongSupplier_ } from "@package/java/util/function";
import { $Object2LongMap, $Object2LongOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $MetricCategory_, $MetricCategory } from "@package/net/minecraft/util/profiling/metrics";
import { $Path_ } from "@package/java/nio/file";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $List, $Map_, $Set } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
export * as jfr from "@package/net/minecraft/util/profiling/jfr";
export * as metrics from "@package/net/minecraft/util/profiling/metrics";

declare module "@package/net/minecraft/util/profiling" {
    export class $EmptyProfileResults implements $ProfileResults {
        getTimes(sectionPath: string): $List<$ResultField>;
        getStartTimeNano(): number;
        saveResults(path: $Path_): boolean;
        getEndTimeNano(): number;
        getProfilerResults(): string;
        getEndTimeTicks(): number;
        getStartTimeTicks(): number;
        getNanoDuration(): number;
        getTickDuration(): number;
        static EMPTY: $EmptyProfileResults;
        get startTimeNano(): number;
        get endTimeNano(): number;
        get profilerResults(): string;
        get endTimeTicks(): number;
        get startTimeTicks(): number;
        get nanoDuration(): number;
        get tickDuration(): number;
    }
    export class $ActiveProfiler implements $ProfileCollector {
        push(name: string): void;
        push(nameSupplier: $Supplier_<string>): void;
        /**
         * End section
         */
        pop(): void;
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        incrementCounter(counterName: string, increment: number): void;
        markForCharting(category: $MetricCategory_): void;
        /**
         * End section
         */
        startTick(): void;
        /**
         * End section
         */
        endTick(): void;
        getResults(): $ProfileResults;
        popPush(nameSupplier: $Supplier_<string>): void;
        popPush(name: string): void;
        incrementCounter(name: string): void;
        incrementCounter(nameSupplier: $Supplier_<string>): void;
        constructor(startTimeNano: $LongSupplier_, startTimeTicks: $IntSupplier_, warn: boolean);
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        get results(): $ProfileResults;
    }
    export class $InactiveProfiler implements $ProfileCollector {
        push(nameSupplier: $Supplier_<string>): void;
        push(name: string): void;
        /**
         * End section
         */
        pop(): void;
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        incrementCounter(counterName: string, increment: number): void;
        markForCharting(category: $MetricCategory_): void;
        /**
         * End section
         */
        startTick(): void;
        /**
         * End section
         */
        endTick(): void;
        getResults(): $ProfileResults;
        popPush(name: string): void;
        popPush(nameSupplier: $Supplier_<string>): void;
        incrementCounter(name: string): void;
        incrementCounter(nameSupplier: $Supplier_<string>): void;
        static INSTANCE: $InactiveProfiler;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        get results(): $ProfileResults;
    }
    export class $ActiveProfiler$PathEntry implements $ProfilerPathEntry {
        getCount(): number;
        getDuration(): number;
        getCounters(): $Object2LongMap<string>;
        getMaxDuration(): number;
        minDuration: number;
        counters: $Object2LongOpenHashMap<string>;
        count: number;
        maxDuration: number;
        accumulatedDuration: number;
        constructor();
        get duration(): number;
    }
    export class $ProfilerFiller {
        static tee(first: $ProfilerFiller, second: $ProfilerFiller): $ProfilerFiller;
        static ROOT: string;
    }
    export interface $ProfilerFiller {
        push(entryId: string): void;
        push(entryIdSupplier: $Supplier_<string>): void;
        /**
         * End section
         */
        pop(): void;
        incrementCounter(counterName: string, increment: number): void;
        incrementCounter(entryId: string): void;
        incrementCounter(entryIdSupplier: $Supplier_<string>): void;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        markForCharting(category: $MetricCategory_): void;
        /**
         * End section
         */
        startTick(): void;
        /**
         * End section
         */
        endTick(): void;
        popPush(entryId: string): void;
        popPush(entryIdSupplier: $Supplier_<string>): void;
    }
    export class $ContinuousProfiler {
        isEnabled(): boolean;
        enable(): void;
        disable(): void;
        getFiller(): $ProfilerFiller;
        getResults(): $ProfileResults;
        constructor(realTime: $LongSupplier_, tickCount: $IntSupplier_);
        get enabled(): boolean;
        get filler(): $ProfilerFiller;
        get results(): $ProfileResults;
    }
    export class $ProfilerPathEntry {
    }
    export interface $ProfilerPathEntry {
        getCount(): number;
        getDuration(): number;
        getCounters(): $Object2LongMap<string>;
        getMaxDuration(): number;
        get count(): number;
        get duration(): number;
        get counters(): $Object2LongMap<string>;
        get maxDuration(): number;
    }
    export class $SingleTickProfiler {
        static createTickProfiler(name: string): $SingleTickProfiler;
        static decorateFiller(profiler: $ProfilerFiller, singleTickProfiler: $SingleTickProfiler | null): $ProfilerFiller;
        startTick(): $ProfilerFiller;
        endTick(): void;
        constructor(realTime: $LongSupplier_, location: string, saveThreshold: number);
    }
    export class $ResultField implements $Comparable<$ResultField> {
        compareTo(arg0: $ResultField): number;
        getColor(): number;
        globalPercentage: number;
        percentage: number;
        count: number;
        name: string;
        constructor(name: string, percentage: number, arg2: number, globalPercentage: number);
        get color(): number;
    }
    export class $FilledProfileResults implements $ProfileResults {
        getTimes(sectionPath: string): $List<$ResultField>;
        getStartTimeNano(): number;
        saveResults(path: $Path_): boolean;
        getEndTimeNano(): number;
        getProfilerResults(timeSpan: number, arg1: number): string;
        getProfilerResults(): string;
        getEndTimeTicks(): number;
        getStartTimeTicks(): number;
        getTickDuration(): number;
        getNanoDuration(): number;
        constructor(entries: $Map_<string, $ProfilerPathEntry>, startTimeNano: number, arg2: number, startTimeTicks: number, endTimeNano: number);
        get startTimeNano(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get startTimeTicks(): number;
        get tickDuration(): number;
        get nanoDuration(): number;
    }
    export class $ProfileResults {
        static demanglePath(path: string): string;
        static PATH_SEPARATOR: string;
    }
    export interface $ProfileResults {
        getTimes(sectionPath: string): $List<$ResultField>;
        getStartTimeNano(): number;
        saveResults(path: $Path_): boolean;
        getEndTimeNano(): number;
        getProfilerResults(): string;
        getEndTimeTicks(): number;
        getStartTimeTicks(): number;
        getNanoDuration(): number;
        getTickDuration(): number;
        get startTimeNano(): number;
        get endTimeNano(): number;
        get profilerResults(): string;
        get endTimeTicks(): number;
        get startTimeTicks(): number;
        get nanoDuration(): number;
        get tickDuration(): number;
    }
    export class $ProfileCollector {
    }
    export interface $ProfileCollector extends $ProfilerFiller {
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        getResults(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        get results(): $ProfileResults;
    }
    export class $FilledProfileResults$CounterCollector {
    }
}
