import { $SimpleResetPool } from "@package/com/github/argon4w/acceleratedrendering/core/utils";
import { $MappedBuffer, $MutableBuffer } from "@package/com/github/argon4w/acceleratedrendering/core/backends/buffers";
export * as meshes from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools/meshes";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools" {
    export class $StagingBufferPool$StagingBuffer extends $MappedBuffer {
        getIndex(): number;
        getOffset(): number;
        allocateOffset(): void;
        constructor(arg0: $StagingBufferPool, arg1: number);
        get index(): number;
        get offset(): number;
    }
    export class $StagingBufferPool extends $SimpleResetPool<$StagingBufferPool$StagingBuffer, void> {
        test(arg0: $StagingBufferPool$StagingBuffer): boolean;
        prepare(): void;
        getBuffer(): $MutableBuffer;
        constructor(arg0: number);
        get buffer(): $MutableBuffer;
    }
}
