import { $IAcceleratedRenderer_ } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
import { $Direction_ } from "@package/net/minecraft/core";
import { $VertexLayout } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/memory";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $VertexConsumer, $VertexFormatElement_, $PoseStack$Pose, $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $ByteBuffer } from "@package/java/nio";
import { $Transformation } from "@package/com/mojang/math";
import { $ServerMesh_ } from "@package/com/github/argon4w/acceleratedrendering/core/meshes";
import { $Matrix4f, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/net/neoforged/neoforge/client/model/pipeline" {
    /**
     * Vertex pipeline element that applies a transformation to incoming geometry.
     */
    export class $TransformingVertexPipeline extends $VertexConsumerWrapper {
        constructor(parent: $VertexConsumer, transformation: $Transformation);
    }
    /**
     * Wrapper for `VertexConsumer` which delegates all operations to its parent.
     * 
     * Useful for defining custom pipeline elements that only process certain data.
     */
    export class $VertexConsumerWrapper implements $VertexConsumer {
        setColor(r: number, g: number, b: number, a: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        setUv(u: number, v: number): $VertexConsumer;
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        setUv1(u: number, v: number): $VertexConsumer;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setColor(packedOverlay: number): $VertexConsumer;
        localvar$fji000$asyncparticles$color(alpha: number): number;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        setOverlay(packedOverlay: number): $VertexConsumer;
        setLight(packedOverlay: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        setWhiteAlpha(packedOverlay: number): $VertexConsumer;
        isAccelerated(): boolean;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        decorate(arg0: $VertexConsumer): $VertexConsumer;
        getLayout(): $VertexLayout;
        doRender<T>(arg0: $IAcceleratedRenderer_<T>, arg1: T, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        getRenderType(): $RenderType;
        addServerMesh(arg0: $ServerMesh_, arg1: number, arg2: number, arg3: number): void;
        endTransform(): void;
        addClientMesh(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        beginTransform(arg0: $Matrix4f, arg1: $Matrix3f): void;
        getPolygonSize(): number;
        downloadTexture(): $NativeImage;
        constructor(parent: $VertexConsumer);
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
        get accelerated(): boolean;
        get layout(): $VertexLayout;
        get renderType(): $RenderType;
        get polygonSize(): number;
    }
    /**
     * Vertex consumer that outputs baked quads.
     * 
     * This consumer accepts data in `DefaultVertexFormat#BLOCK` and is not picky about
     * ordering or missing elements, but will not automatically populate missing data (color will be black, for example).
     * 
     * Built quads must be retrieved after building four vertices
     */
    export class $QuadBakingVertexConsumer implements $VertexConsumer {
        setColor(r: number, g: number, b: number, a: number): $VertexConsumer;
        setDirection(direction: $Direction_): void;
        setShade(shade: boolean): void;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        setUv(u: number, v: number): $VertexConsumer;
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        setUv1(u: number, v: number): $VertexConsumer;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        setHasAmbientOcclusion(shade: boolean): void;
        setSprite(sprite: $TextureAtlasSprite): void;
        bakeQuad(): $BakedQuad;
        setTintIndex(tintIndex: number): void;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setColor(packedOverlay: number): $VertexConsumer;
        localvar$fji000$asyncparticles$color(alpha: number): number;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        setOverlay(packedOverlay: number): $VertexConsumer;
        setLight(packedOverlay: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        setWhiteAlpha(packedOverlay: number): $VertexConsumer;
        isAccelerated(): boolean;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        decorate(arg0: $VertexConsumer): $VertexConsumer;
        getLayout(): $VertexLayout;
        doRender<T>(arg0: $IAcceleratedRenderer_<T>, arg1: T, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        getRenderType(): $RenderType;
        addServerMesh(arg0: $ServerMesh_, arg1: number, arg2: number, arg3: number): void;
        endTransform(): void;
        addClientMesh(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        beginTransform(arg0: $Matrix4f, arg1: $Matrix3f): void;
        getPolygonSize(): number;
        downloadTexture(): $NativeImage;
        constructor();
        set direction(value: $Direction_);
        set shade(value: boolean);
        set hasAmbientOcclusion(value: boolean);
        set sprite(value: $TextureAtlasSprite);
        set tintIndex(value: number);
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
        get accelerated(): boolean;
        get layout(): $VertexLayout;
        get renderType(): $RenderType;
        get polygonSize(): number;
    }
    /**
     * Vertex pipeline element that remaps incoming data to another format.
     */
    export class $RemappingVertexPipeline implements $VertexConsumer {
        endVertex(): void;
        setColor(r: number, g: number, b: number, a: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        setUv(u: number, v: number): $VertexConsumer;
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        setUv1(u: number, v: number): $VertexConsumer;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setColor(packedOverlay: number): $VertexConsumer;
        localvar$fji000$asyncparticles$color(alpha: number): number;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        setOverlay(packedOverlay: number): $VertexConsumer;
        setLight(packedOverlay: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        setWhiteAlpha(packedOverlay: number): $VertexConsumer;
        isAccelerated(): boolean;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        decorate(arg0: $VertexConsumer): $VertexConsumer;
        getLayout(): $VertexLayout;
        doRender<T>(arg0: $IAcceleratedRenderer_<T>, arg1: T, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        getRenderType(): $RenderType;
        addServerMesh(arg0: $ServerMesh_, arg1: number, arg2: number, arg3: number): void;
        endTransform(): void;
        addClientMesh(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        beginTransform(arg0: $Matrix4f, arg1: $Matrix3f): void;
        getPolygonSize(): number;
        downloadTexture(): $NativeImage;
        constructor(parent: $VertexConsumer, targetFormat: $VertexFormat);
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
        get accelerated(): boolean;
        get layout(): $VertexLayout;
        get renderType(): $RenderType;
        get polygonSize(): number;
    }
}
