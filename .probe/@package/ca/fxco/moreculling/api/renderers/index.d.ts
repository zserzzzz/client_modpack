import { $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PoseStack, $PoseStack$Pose, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $Camera } from "@package/net/minecraft/client";
import { $ItemFrame } from "@package/net/minecraft/world/entity/decoration";
import { $List_ } from "@package/java/util";

declare module "@package/ca/fxco/moreculling/api/renderers" {
    export class $ExtendedItemRenderer {
    }
    export interface $ExtendedItemRenderer {
        moreculling$renderItemFrameItem(arg0: $ItemStack_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: $ItemFrame, arg5: $Camera): void;
        moreculling$renderBakedItemModelOnly3Faces(arg0: $BakedModel, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer, arg6: $Direction_, arg7: $Direction_, arg8: $Direction_): void;
        moreculling$renderBakedItemModelForFace(arg0: $BakedModel, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer, arg6: $Direction_): void;
        moreculling$renderBakedItemModelWithoutFace(arg0: $BakedModel, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer, arg6: $Direction_): void;
    }
    export class $ExtendedBlockModelRenderer {
    }
    export interface $ExtendedBlockModelRenderer {
        moreculling$renderQuad(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $BakedQuad, arg7: number, arg8: number): void;
        moreculling$renderModelFor3Faces(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: $BlockState_, arg3: $BakedModel, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $Direction_, arg11: $Direction_, arg12: $Direction_): void;
        moreculling$renderModelWithoutFace(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: $BlockState_, arg3: $BakedModel, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $Direction_): void;
        moreculling$renderQuadsWithoutFace(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $List_<$BakedQuad>, arg7: number, arg8: number, arg9: $Direction_): void;
        moreculling$renderQuadsForFace(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $List_<$BakedQuad>, arg7: number, arg8: number, arg9: $Direction_): void;
        moreculling$renderModelForFace(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: $BlockState_, arg3: $BakedModel, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $Direction_): void;
        moreculling$renderQuadsFor3Faces(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $List_<$BakedQuad>, arg7: number, arg8: number, arg9: $Direction_, arg10: $Direction_, arg11: $Direction_): void;
        moreculling$renderQuadsForFaces(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $List_<$BakedQuad>, arg7: number, arg8: number, arg9: $Direction_[]): void;
        moreculling$renderModelForFaces(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: $BlockState_, arg3: $BakedModel, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $Direction_[]): void;
    }
}
