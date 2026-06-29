import { $Collection_ } from "@package/java/util";
import { $AcceleratedBufferBuilder } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";
import { $StagingBufferPool$StagingBuffer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools";
export * as meshes from "@package/com/github/argon4w/acceleratedrendering/core/programs/dispatchers/meshes";

declare module "@package/com/github/argon4w/acceleratedrendering/core/programs/dispatchers" {
    export class $TransformProgramDispatcher {
        dispatch(arg0: $AcceleratedBufferBuilder, arg1: $StagingBufferPool$StagingBuffer, arg2: $StagingBufferPool$StagingBuffer, arg3: number, arg4: number, arg5: number): number;
        dispatch(arg0: $Collection_<$AcceleratedBufferBuilder>): void;
        resetOverride(): void;
        static VERTEX_BUFFER_IN_INDEX: number;
        static VARYING_BUFFER_IN_INDEX: number;
        constructor();
    }
    export class $IPolygonProgramDispatcher {
    }
    export interface $IPolygonProgramDispatcher {
        dispatch(arg0: $AcceleratedBufferBuilder): number;
    }
    /**
     * Values that may be interpreted as {@link $IPolygonProgramDispatcher}.
     */
    export type $IPolygonProgramDispatcher_ = ((arg0: $AcceleratedBufferBuilder) => number);
}
