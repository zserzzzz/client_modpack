import { $Mat4 } from "@package/gg/essential/lib/kotgl/matrix/matrices";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $EssentialModelRenderer } from "@package/gg/essential/cosmetics";
import { $Iterable } from "@package/java/lang";

declare module "@package/gg/essential/mixins/impl/client/renderer/entity" {
    export class $PlayerEntityRendererExt {
    }
    export interface $PlayerEntityRendererExt {
        essential$getEssentialModelRenderer(): $EssentialModelRenderer;
        essential$getTransform(arg0: $AbstractClientPlayer, arg1: number, arg2: number): $Mat4;
        essential$getFeatures(): $Iterable<never>;
    }
}
