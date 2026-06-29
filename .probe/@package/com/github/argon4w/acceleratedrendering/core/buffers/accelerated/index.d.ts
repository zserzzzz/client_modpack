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
        getFunctions(): $Int2ReferenceMap<$ILayerFunction>;
        getDrawContext(): $IDrawContextPool$IDrawContext;
        reset(): void;
        "delete"(): void;
        getSize(): number;
        prepare(): void;
        getSharing(): number;
        setUsed(): void;
        getEnvironment(): $IBufferEnvironment;
        getVertexSize(): number;
        getLayers(): $Int2ReferenceMap<$ILayerStorage>;
        isFree(): boolean;
        getBuilders(): $Map<$LayerKey, $AcceleratedBufferBuilder>;
        unbindVertexArray(): void;
        getElementSegment(): $IElementPool$IElementSegment;
        getElementBuffer(): $IServerBuffer;
        getOverrideCount(): number;
        getVaryingBuffer(): $StagingBufferPool$StagingBuffer;
        setInFlight(): void;
        getVertexBuffer(): $StagingBufferPool$StagingBuffer;
        bindDrawBuffers(): void;
        getMeshInfoBuffer(): $MappedBuffer;
        getMeshUploader(): $MeshUploaderPool$MeshUploader;
        reserveSharing(): number;
        bindTransformBuffers(): void;
        static VERTEX_BUFFER_OUT_INDEX: number;
        static VARYING_BUFFER_OUT_INDEX: number;
        static SHARING_BUFFER_INDEX: number;
        constructor(arg0: $IBufferEnvironment);
        get functions(): $Int2ReferenceMap<$ILayerFunction>;
        get drawContext(): $IDrawContextPool$IDrawContext;
        get size(): number;
        get sharing(): number;
        get environment(): $IBufferEnvironment;
        get vertexSize(): number;
        get layers(): $Int2ReferenceMap<$ILayerStorage>;
        get free(): boolean;
        get builders(): $Map<$LayerKey, $AcceleratedBufferBuilder>;
        get elementSegment(): $IElementPool$IElementSegment;
        get elementBuffer(): $IServerBuffer;
        get overrideCount(): number;
        get varyingBuffer(): $StagingBufferPool$StagingBuffer;
        get vertexBuffer(): $StagingBufferPool$StagingBuffer;
        get meshInfoBuffer(): $MappedBuffer;
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
