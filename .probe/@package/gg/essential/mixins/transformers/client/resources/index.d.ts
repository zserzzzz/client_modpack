import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $MinecraftProfileTexture, $MinecraftProfileTexture$Type } from "@package/com/mojang/authlib/minecraft";

declare module "@package/gg/essential/mixins/transformers/client/resources" {
    export class $SkinProviderFileCacheAccessor {
    }
    export interface $SkinProviderFileCacheAccessor {
        getType(): $MinecraftProfileTexture$Type;
        invokeGet(arg0: $MinecraftProfileTexture): $CompletableFuture<$ResourceLocation>;
        get type(): $MinecraftProfileTexture$Type;
    }
}
