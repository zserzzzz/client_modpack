import { $Supplier_, $Consumer_, $LongSupplier_ } from "@package/java/util/function";
import { $MetricsPersister } from "@package/net/minecraft/util/profiling/metrics/storage";
import { $MetricsSamplerProvider, $MetricSampler, $MetricsSamplerProvider_ } from "@package/net/minecraft/util/profiling/metrics";
import { $Path } from "@package/java/nio/file";
import { $ProfilerFiller, $ProfileResults, $ProfileCollector } from "@package/net/minecraft/util/profiling";
import { $Executor_ } from "@package/java/util/concurrent";
import { $Set } from "@package/java/util";

declare module "@package/net/minecraft/util/profiling/metrics/profiling" {
    export class $ServerMetricsSamplersProvider$CpuStats {
    }
    export class $InactiveMetricsRecorder implements $MetricsRecorder {
        end(): void;
        cancel(): void;
        getProfiler(): $ProfilerFiller;
        isRecording(): boolean;
        startTick(): void;
        endTick(): void;
        static INSTANCE: $MetricsRecorder;
        constructor();
        get profiler(): $ProfilerFiller;
        get recording(): boolean;
    }
    export class $ActiveMetricsRecorder implements $MetricsRecorder {
        end(): void;
        cancel(): void;
        getProfiler(): $ProfilerFiller;
        static createStarted(metricsSamplerProvider: $MetricsSamplerProvider_, wallTimeSource: $LongSupplier_, ioExecutor: $Executor_, metricsPersister: $MetricsPersister, onProfilerEnd: $Consumer_<$ProfileResults>, onReportFinished: $Consumer_<$Path>): $ActiveMetricsRecorder;
        isRecording(): boolean;
        startTick(): void;
        endTick(): void;
        static registerGlobalCompletionCallback(globalOnReportFinished: $Consumer_<$Path>): void;
        static PROFILING_MAX_DURATION_SECONDS: number;
        get profiler(): $ProfilerFiller;
        get recording(): boolean;
    }
    export class $ServerMetricsSamplersProvider implements $MetricsSamplerProvider {
        samplers(profiles: $Supplier_<$ProfileCollector>): $Set<$MetricSampler>;
        static runtimeIndependentSamplers(): $Set<$MetricSampler>;
        static tickTimeSampler(timeSource: $LongSupplier_): $MetricSampler;
        constructor(timeSource: $LongSupplier_, dedicatedServer: boolean);
    }
    export class $ProfilerSamplerAdapter {
        newSamplersFoundInProfiler(profiles: $Supplier_<$ProfileCollector>): $Set<$MetricSampler>;
        constructor();
    }
    export class $MetricsRecorder {
    }
    export interface $MetricsRecorder {
        end(): void;
        cancel(): void;
        getProfiler(): $ProfilerFiller;
        isRecording(): boolean;
        startTick(): void;
        endTick(): void;
        get profiler(): $ProfilerFiller;
        get recording(): boolean;
    }
}
