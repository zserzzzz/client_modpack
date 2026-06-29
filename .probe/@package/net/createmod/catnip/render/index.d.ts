import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $TransformStack } from "@package/dev/engine_room/flywheel/lib/transform";
import { $Direction$Axis_ } from "@package/net/minecraft/core";
import { $RenderType, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/createmod/catnip/render" {
    export class $SpriteShiftEntry {
        getTargetResourceLocation(): $ResourceLocation;
        set(arg0: $ResourceLocation_, arg1: $ResourceLocation_): void;
        getTarget(): $TextureAtlasSprite;
        getTargetU(arg0: number): number;
        getTargetV(arg0: number): number;
        getOriginal(): $TextureAtlasSprite;
        static getUnInterpolatedU(arg0: $TextureAtlasSprite, arg1: number): number;
        static getUnInterpolatedV(arg0: $TextureAtlasSprite, arg1: number): number;
        getOriginalResourceLocation(): $ResourceLocation;
        constructor();
        get targetResourceLocation(): $ResourceLocation;
        get target(): $TextureAtlasSprite;
        get original(): $TextureAtlasSprite;
        get originalResourceLocation(): $ResourceLocation;
    }
    export class $StitchedSprite {
        get(): $TextureAtlasSprite;
        getLocation(): $ResourceLocation;
        static onTextureStitchPost(arg0: $TextureAtlas): void;
        getAtlasLocation(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
        constructor(arg0: $ResourceLocation_);
        get location(): $ResourceLocation;
        get atlasLocation(): $ResourceLocation;
    }
    export class $SuperByteBufferCache$Compartment<T> {
        constructor();
    }
    export class $SuperByteBuffer {
        static maxLight(arg0: number, arg1: number): number;
    }
    export interface $SuperByteBuffer extends $TransformStack<$SuperByteBuffer> {
        getTransforms(): $PoseStack;
        light<Self extends $SuperByteBuffer>(arg0: number): Self;
        reset<Self extends $SuperByteBuffer>(): Self;
        isEmpty(): boolean;
        "delete"(): void;
        color<Self extends $SuperByteBuffer>(arg0: $Color): Self;
        color<Self extends $SuperByteBuffer>(arg0: number, arg1: number, arg2: number, arg3: number): Self;
        color<Self extends $SuperByteBuffer>(arg0: number): Self;
        rotate<Self extends $SuperByteBuffer>(arg0: $Direction$Axis_, arg1: number): Self;
        renderInto(arg0: $PoseStack, arg1: $VertexConsumer): void;
        overlay<Self extends $SuperByteBuffer>(arg0: number): Self;
        disableDiffuse<Self extends $SuperByteBuffer>(): Self;
        useLevelLight<Self extends $SuperByteBuffer>(arg0: $BlockAndTintGetter, arg1: $Matrix4f): Self;
        useLevelLight<Self extends $SuperByteBuffer>(arg0: $BlockAndTintGetter): Self;
        shiftUVScrolling<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry, arg1: number): Self;
        shiftUVScrolling<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry, arg1: number, arg2: number): Self;
        shiftUV<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry): Self;
        shiftUVtoSheet<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry, arg1: number, arg2: number, arg3: number): Self;
        get transforms(): $PoseStack;
        get empty(): boolean;
    }
    export class $BindableTexture {
    }
    export interface $BindableTexture {
        getLocation(): $ResourceLocation;
        bind(): void;
        get location(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $BindableTexture}.
     */
    export type $BindableTexture_ = (() => $ResourceLocation_);
    export class $SuperRenderTypeBuffer {
    }
    export interface $SuperRenderTypeBuffer extends $MultiBufferSource {
        getBuffer(arg0: $RenderType): $VertexConsumer;
        draw(arg0: $RenderType): void;
        draw(): void;
        getEarlyBuffer(arg0: $RenderType): $VertexConsumer;
        getLateBuffer(arg0: $RenderType): $VertexConsumer;
    }
}
