import { $Collection } from "@package/java/util";
import { $PrettyPrinter } from "@package/org/spongepowered/asm/util";

declare module "@package/org/spongepowered/asm/util/perf" {
    export class $Profiler {
        static setActive(arg0: boolean): void;
        reset(): void;
        get(arg0: string): $Profiler$Section;
        begin(arg0: number, ...arg1: string[]): $Profiler$Section;
        begin(arg0: number, arg1: string): $Profiler$Section;
        begin(arg0: string): $Profiler$Section;
        begin(...arg0: string[]): $Profiler$Section;
        mark(arg0: string): void;
        printer(arg0: boolean, arg1: boolean): $PrettyPrinter;
        static getProfiler(arg0: string): $Profiler;
        getSections(): $Collection<$Profiler$Section>;
        static getProfilers(): $Collection<$Profiler>;
        printSummary(): void;
        static printAuditSummary(): void;
        static ROOT: number;
        static FINE: number;
        constructor(arg0: string);
        static set active(value: boolean);
        get sections(): $Collection<$Profiler$Section>;
        static get profilers(): $Collection<$Profiler>;
    }
    export class $Profiler$Section {
        getName(): string;
        end(): $Profiler$Section;
        next(arg0: string): $Profiler$Section;
        getCount(): number;
        getTime(): number;
        getSeconds(): number;
        getTotalSeconds(): number;
        isRoot(): boolean;
        getInfo(): string;
        setInfo(arg0: string): void;
        getTimes(): number[];
        isFine(): boolean;
        getTotalTime(): number;
        getTotalCount(): number;
        getBaseName(): string;
        getAverageTime(): number;
        getTotalAverageTime(): number;
        get name(): string;
        get count(): number;
        get time(): number;
        get seconds(): number;
        get totalSeconds(): number;
        get root(): boolean;
        get times(): number[];
        get fine(): boolean;
        get totalTime(): number;
        get totalCount(): number;
        get baseName(): string;
        get averageTime(): number;
        get totalAverageTime(): number;
    }
}
