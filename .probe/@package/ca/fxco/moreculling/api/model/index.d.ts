import { $BlockElementFace, $BlockElementFace_ } from "@package/net/minecraft/client/renderer/block/model";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List_, $List } from "@package/java/util";
import { $Vector3f } from "@package/org/joml";

declare module "@package/ca/fxco/moreculling/api/model" {
    export class $ExtendedUnbakedModel {
    }
    export interface $ExtendedUnbakedModel {
        moreculling$setUseModelShape(arg0: boolean): void;
        moreculling$getCullShapeElements(arg0: $ResourceLocation_): $List<$CullShapeElement>;
        moreculling$getUseModelShape(arg0: $ResourceLocation_): boolean;
        moreculling$modifyElementFace(arg0: $BlockElementFace_): $BlockElementFace;
        moreculling$setCullShapeElements(arg0: $List_<$CullShapeElement>): void;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedUnbakedModel}.
     */
    export type $ExtendedUnbakedModel_ = ((arg0: $BlockElementFace) => $BlockElementFace_);
    export class $CullShapeElement {
        from: $Vector3f;
        to: $Vector3f;
        constructor(arg0: $Vector3f, arg1: $Vector3f);
    }
    export class $BakedOpacity {
    }
    export interface $BakedOpacity {
        moreculling$canSetCullingShape(): boolean;
        moreculling$setCullingShape(arg0: $VoxelShape): void;
        moreculling$getCullingShape(arg0: $BlockState_): $VoxelShape;
        moreculling$resetTranslucencyCache(arg0: $BlockState_): void;
    }
}
