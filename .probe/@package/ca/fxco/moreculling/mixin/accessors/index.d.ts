import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Map_, $Map } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";

declare module "@package/ca/fxco/moreculling/mixin/accessors" {
    export class $BlockModelShaperAccessor {
    }
    export interface $BlockModelShaperAccessor {
        getModels(): $Map<$BlockState, $BakedModel>;
        get models(): $Map<$BlockState, $BakedModel>;
    }
    /**
     * Values that may be interpreted as {@link $BlockModelShaperAccessor}.
     */
    export type $BlockModelShaperAccessor_ = (() => $Map_<$BlockState_, $BakedModel>);
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        getFrustum(): $Frustum;
        get frustum(): $Frustum;
    }
    /**
     * Values that may be interpreted as {@link $LevelRendererAccessor}.
     */
    export type $LevelRendererAccessor_ = (() => $Frustum);
    export class $SpriteContentsAccessor {
    }
    export interface $SpriteContentsAccessor {
        getImage(): $NativeImage;
        get image(): $NativeImage;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsAccessor}.
     */
    export type $SpriteContentsAccessor_ = (() => $NativeImage);
}
