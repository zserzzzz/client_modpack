import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $IElementPool$IElementSegment } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/draw/pools";
import { $IAcceleratedRenderer_, $IBufferDecorator } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
import { $VertexLayout, $IMemoryInterface } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/memory";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $LayerKey_, $LayerKey } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $ByteBuffer } from "@package/java/nio";
import { $ILayerFunction } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers/functions";
import { $ICullingProgramDispatcher } from "@package/com/github/argon4w/acceleratedrendering/core/programs/culling";
import { $StagingBufferPool$StagingBuffer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools";
import { $IIrisAcceleratedBufferBuilder } from "@package/com/github/argon4w/acceleratedrendering/compat/iris/interfaces";
import { $LongSupplier, $Supplier_, $Supplier } from "@package/java/util/function";
import { $MeshUploaderPool$MeshUploader } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools/meshes";
import { $VertexConsumer, $VertexFormatElement_, $VertexFormat$Mode, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $IAcceleratedBufferSource, $AcceleratedRingBuffers$Buffers } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated";
import { $IPolygonProgramDispatcher } from "@package/com/github/argon4w/acceleratedrendering/core/programs/dispatchers";
import { $ServerMesh_ } from "@package/com/github/argon4w/acceleratedrendering/core/meshes";
import { $ProgramOverride } from "@package/com/github/argon4w/acceleratedrendering/core/programs/overrides";
import { $Matrix3f, $Matrix4f, $Vector3f } from "@package/org/joml";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders" {
    export class $IAcceleratableBufferSource {
    }
    export interface $IAcceleratableBufferSource {
        bindAcceleratedBufferSource(arg0: $Supplier_<$IAcceleratedBufferSource>): void;
        getBoundAcceleratedBufferSource(): $Supplier<$IAcceleratedBufferSource>;
        isBufferSourceAcceleratable(): boolean;
        get boundAcceleratedBufferSource(): $Supplier<$IAcceleratedBufferSource>;
        get bufferSourceAcceleratable(): boolean;
    }
    export class $IBufferGraph {
    }
    export interface $IBufferGraph {
    }
    export class $IAcceleratedVertexConsumer {
    }
    export interface $IAcceleratedVertexConsumer extends $IBufferDecorator, $IBufferGraph {
        decorate(arg0: $VertexConsumer): $VertexConsumer;
        getLayout(): $VertexLayout;
        doRender<T>(arg0: $IAcceleratedRenderer_<T>, arg1: T, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        isAccelerated(): boolean;
        getRenderType(): $RenderType;
        addServerMesh(arg0: $ServerMesh_, arg1: number, arg2: number, arg3: number): void;
        endTransform(): void;
        addClientMesh(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        beginTransform(arg0: $Matrix4f, arg1: $Matrix3f): void;
        getPolygonSize(): number;
        downloadTexture(): $NativeImage;
        get layout(): $VertexLayout;
        get accelerated(): boolean;
        get renderType(): $RenderType;
        get polygonSize(): number;
    }
    export class $AcceleratedBufferBuilder implements $IAcceleratedVertexConsumer, $VertexConsumer, $LongSupplier, $IIrisAcceleratedBufferBuilder {
        decorate(arg0: $VertexConsumer): $VertexConsumer;
        isEmpty(): boolean;
        getFunction(): $ILayerFunction;
        getIndex(): number;
        getAsLong(): number;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        getBuffer(): $AcceleratedRingBuffers$Buffers;
        getLayout(): $VertexLayout;
        setOutdated(): void;
        getMode(): $VertexFormat$Mode;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        doRender<T>(arg0: $IAcceleratedRenderer_<T>, arg1: T, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        isAccelerated(): boolean;
        getRenderType(): $RenderType;
        addServerMesh(arg0: $ServerMesh_, arg1: number, arg2: number, arg3: number): void;
        endTransform(): void;
        addClientMesh(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        beginTransform(arg0: $Matrix4f, arg1: $Matrix3f): void;
        getPolygonSize(): number;
        getVertexSize(): number;
        getVaryingCountOffset(): number;
        getTotalVertexCount(): number;
        getVaryingShouldCull(): $IMemoryInterface;
        getVertexCountOffset(): number;
        isOutdated(): boolean;
        getVertexCount(): number;
        getVertexBuffer(): $StagingBufferPool$StagingBuffer;
        getVaryingBuffer(): $StagingBufferPool$StagingBuffer;
        getElementSegment(): $IElementPool$IElementSegment;
        getVaryingOffset(): $IMemoryInterface;
        getMeshUploaders(): $Int2ObjectMap<$MeshUploaderPool$MeshUploader>;
        getProgramOverride(): $ProgramOverride;
        getColorOffset(): $IMemoryInterface;
        getUv1Offset(): $IMemoryInterface;
        getVaryingSize(): number;
        getUv2Offset(): $IMemoryInterface;
        getMeshVertexCount(): number;
        getVaryingSharing(): $IMemoryInterface;
        getVaryingMesh(): $IMemoryInterface;
        getEntityIdOffset(): $IMemoryInterface;
        getPolygonProgramDispatcher(): $IPolygonProgramDispatcher;
        getCullingProgramDispatcher(): $ICullingProgramDispatcher;
        getLayerKey(): $LayerKey;
        getEntityOffset(): $IMemoryInterface;
        handler$bnl000$acceleratedrendering$addIrisMesh(arg0: $CallbackInfo, arg1: number): void;
        handler$bnl000$acceleratedrendering$addIrisVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: $CallbackInfo, arg12: number): void;
        handler$bnl000$acceleratedrendering$addIrisVertex(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        handler$bnl000$acceleratedrendering$constructor(arg0: $StagingBufferPool$StagingBuffer, arg1: $StagingBufferPool$StagingBuffer, arg2: $IElementPool$IElementSegment, arg3: $AcceleratedRingBuffers$Buffers, arg4: $ILayerFunction, arg5: $LayerKey_, arg6: $CallbackInfo): void;
        getPolygonElementCount(): number;
        downloadTexture(): $NativeImage;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setColor(arg0: number): $VertexConsumer;
        localvar$fji000$asyncparticles$color(alpha: number): number;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        setOverlay(arg0: number): $VertexConsumer;
        setLight(arg0: number): $VertexConsumer;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        varyingOffset: $IMemoryInterface;
        varyingSharing: $IMemoryInterface;
        varyingShouldCull: $IMemoryInterface;
        varyingMesh: $IMemoryInterface;
        static SHARING_SIZE: number;
        static SHARING_TRANSFORM: $IMemoryInterface;
        static SHARING_NORMAL: $IMemoryInterface;
        constructor(arg0: $StagingBufferPool$StagingBuffer, arg1: $StagingBufferPool$StagingBuffer, arg2: $IElementPool$IElementSegment, arg3: $AcceleratedRingBuffers$Buffers, arg4: $ILayerFunction, arg5: $LayerKey_);
        get empty(): boolean;
        get function(): $ILayerFunction;
        get index(): number;
        get asLong(): number;
        get buffer(): $AcceleratedRingBuffers$Buffers;
        get layout(): $VertexLayout;
        get mode(): $VertexFormat$Mode;
        get accelerated(): boolean;
        get renderType(): $RenderType;
        get polygonSize(): number;
        get vertexSize(): number;
        get varyingCountOffset(): number;
        get totalVertexCount(): number;
        get vertexCountOffset(): number;
        get vertexCount(): number;
        get vertexBuffer(): $StagingBufferPool$StagingBuffer;
        get varyingBuffer(): $StagingBufferPool$StagingBuffer;
        get elementSegment(): $IElementPool$IElementSegment;
        get meshUploaders(): $Int2ObjectMap<$MeshUploaderPool$MeshUploader>;
        get programOverride(): $ProgramOverride;
        get colorOffset(): $IMemoryInterface;
        get uv1Offset(): $IMemoryInterface;
        get varyingSize(): number;
        get uv2Offset(): $IMemoryInterface;
        get meshVertexCount(): number;
        get entityIdOffset(): $IMemoryInterface;
        get polygonProgramDispatcher(): $IPolygonProgramDispatcher;
        get cullingProgramDispatcher(): $ICullingProgramDispatcher;
        get layerKey(): $LayerKey;
        get entityOffset(): $IMemoryInterface;
        get polygonElementCount(): number;
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
    }
}
