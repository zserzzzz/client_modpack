import { $Codec } from "@package/com/mojang/serialization";
import { $ShaderUniformAccess } from "@package/foundry/veil/api/client/render/shader/uniform";
import { $ShaderTextureSource$Context } from "@package/foundry/veil/api/client/render/shader/texture";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $PostPipelineStageRegistry$PipelineType } from "@package/foundry/veil/api/client/registry";
import { $CharSequence } from "@package/java/lang";
import { $NativeResource } from "@package/org/lwjgl/system";
import { $UniformAccess, $ShaderProgram, $TextureUniformAccess } from "@package/foundry/veil/api/client/render/shader/program";

declare module "@package/foundry/veil/api/client/render/post" {
    export class $PostPipeline$Context {
    }
    export interface $PostPipeline$Context extends $ShaderTextureSource$Context {
        getPipeline(arg0: $ResourceLocation_): $PostPipeline;
        getShader(arg0: $ResourceLocation_): $ShaderProgram;
        applySamplers(arg0: $TextureUniformAccess): void;
        clearSamplers(arg0: $TextureUniformAccess): void;
        setTexture(arg0: $CharSequence, arg1: number, arg2: number, arg3: number): void;
        setFramebuffer(arg0: $ResourceLocation_, arg1: $AdvancedFbo): void;
        getFramebufferOrDraw(arg0: $ResourceLocation_): $AdvancedFbo;
        getDrawFramebuffer(): $AdvancedFbo;
        get drawFramebuffer(): $AdvancedFbo;
    }
    export class $PostPipeline {
        static CODEC: $Codec<$PostPipeline>;
    }
    export interface $PostPipeline extends $UniformAccess, $NativeResource {
        getUniform(arg0: $CharSequence): $ShaderUniformAccess;
        apply(arg0: $PostPipeline$Context): void;
        getType(): $PostPipelineStageRegistry$PipelineType<$PostPipeline>;
        free(): void;
        setUniformBlock(arg0: $CharSequence, arg1: number): void;
        setStorageBlock(arg0: $CharSequence, arg1: number): void;
        getStorageBlock(arg0: $CharSequence): number;
        getUniformBlock(arg0: $CharSequence): number;
        getUniformLocation(arg0: $CharSequence): number;
        hasStorageBlock(arg0: $CharSequence): boolean;
        hasUniformBlock(arg0: $CharSequence): boolean;
        getUniformSafe(arg0: $CharSequence): $ShaderUniformAccess;
        hasUniform(arg0: $CharSequence): boolean;
        get type(): $PostPipelineStageRegistry$PipelineType<$PostPipeline>;
    }
}
