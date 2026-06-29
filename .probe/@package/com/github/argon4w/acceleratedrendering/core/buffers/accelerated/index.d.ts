import { $Int2ReferenceMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $IElementPool$IElementSegment, $IDrawContextPool$IDrawContext } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/draw/pools";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $LayerKey } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers";
import { $IBufferEnvironment } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/environments";
import { $Map } from "@package/java/util";
import { $AcceleratedBufferBuilder } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";
import { $ILayerFunction } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers/functions";
import { $StagingBufferPool$StagingBuffer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools";
import { $Supplier_ } from "@package/java/util/function";
import { $MeshUploaderPool$MeshUploader } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools/meshes";
import { $MappedBuffer, $IServerBuffer } from "@package/com/github/argon4w/acceleratedrendering/core/backends/buffers";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Runnable_, $Runnable } from "@package/java/lang";
import { $ILayerStorage } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers/storage";
export * as draw from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/draw";
export * as layers from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers";
export * as renderers from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
export * as pools from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools";
export * as builders from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated" {
    export class $IAccelerationHolder {
    }
    export interface $IAccelerationHolder {
        getAccelerated(): $AcceleratedBufferBuilder;
        initAcceleration(arg0: $RenderType, arg1: $Supplier_<$IAcceleratedBufferSource>): $VertexConsumer;
        get accelerated(): $AcceleratedBufferBuilder;
    }
    export class $AcceleratedRingBuffers$Buffers {
        reset(): void;
        "delete"(): void;
        getSize(): number;
        prepare(): void;
        unbindVertexArray(): void;
        getEnvironment(): $IBufferEnvironment;
        setUsed(): void;
        getVertexSize(): number;
        getLayers(): $Int2ReferenceMap<$ILayerStorage>;
        isFree(): boolean;
        getFunctions(): $Int2ReferenceMap<$ILayerFunction>;
        bindTransformBuffers(): void;
        getSharing(): number;
        getDrawContext(): $IDrawContextPool$IDrawContext;
        getBuilders(): $Map<$LayerKey, $AcceleratedBufferBuilder>;
        getVertexBuffer(): $StagingBufferPool$StagingBuffer;
        getVaryingBuffer(): $StagingBufferPool$StagingBuffer;
        getElementSegment(): $IElementPool$IElementSegment;
        getElementBuffer(): $IServerBuffer;
        getMeshInfoBuffer(): $MappedBuffer;
        setInFlight(): void;
        bindDrawBuffers(): void;
        getOverrideCount(): number;
        reserveSharing(): number;
        getMeshUploader(): $MeshUploaderPool$MeshUploader;
        static VERTEX_BUFFER_OUT_INDEX: number;
        static VARYING_BUFFER_OUT_INDEX: number;
        static SHARING_BUFFER_INDEX: number;
        constructor(arg0: $IBufferEnvironment);
        get size(): number;
        get environment(): $IBufferEnvironment;
        get vertexSize(): number;
        get layers(): $Int2ReferenceMap<$ILayerStorage>;
        get free(): boolean;
        get functions(): $Int2ReferenceMap<$ILayerFunction>;
        get sharing(): number;
        get drawContext(): $IDrawContextPool$IDrawContext;
        get builders(): $Map<$LayerKey, $AcceleratedBufferBuilder>;
        get vertexBuffer(): $StagingBufferPool$StagingBuffer;
        get varyingBuffer(): $StagingBufferPool$StagingBuffer;
        get elementSegment(): $IElementPool$IElementSegment;
        get elementBuffer(): $IServerBuffer;
        get meshInfoBuffer(): $MappedBuffer;
        get overrideCount(): number;
        get meshUploader(): $MeshUploaderPool$MeshUploader;
    }
    export class $IAcceleratedBufferSource {
    }
    export interface $IAcceleratedBufferSource {
        getBuffer(arg0: $RenderType, arg1: $Runnable_, arg2: $Runnable_, arg3: number): $AcceleratedBufferBuilder;
    }
    /**
     * Values that may be interpreted as {@link $IAcceleratedBufferSource}.
     */
    export type $IAcceleratedBufferSource_ = ((arg0: $RenderType, arg1: $Runnable, arg2: $Runnable, arg3: number) => $AcceleratedBufferBuilder);
}
