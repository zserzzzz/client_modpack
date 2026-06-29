import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ItemModelShaper } from "@package/net/minecraft/client/renderer";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";

declare module "@package/com/robocraft999/creategoggles/client" {
    export class $GoggleTextureOverlayRenderer {
    }
    export interface $GoggleTextureOverlayRenderer {
        renderModelLists(arg0: $BakedModel, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer): void;
        renderInjection(itemModelShaper: $ItemModelShaper, itemStack: $ItemStack_, poseStack: $PoseStack, i: number, j: number, vertexConsumer: $VertexConsumer): void;
        renderGoggleTexture(itemModelShaper: $ItemModelShaper, itemStack: $ItemStack_, poseStack: $PoseStack, i: number, j: number, vertexConsumer: $VertexConsumer): void;
    }
    /**
     * Values that may be interpreted as {@link $GoggleTextureOverlayRenderer}.
     */
    export type $GoggleTextureOverlayRenderer_ = ((arg0: $BakedModel, arg1: $ItemStack, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer) => void);
}
