import { $EntityRenderDispatcher, $EntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/entity";
import { $BaseEntityBuilder } from "@package/net/liopyu/entityjs/builders/nonliving";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $BakedGeoModel_ } from "@package/software/bernie/geckolib/cache/object";
import { $GeoEntityRenderer } from "@package/software/bernie/geckolib/renderer";
export * as model from "@package/net/liopyu/entityjs/client/nonliving/model";

declare module "@package/net/liopyu/entityjs/client/nonliving" {
    export class $KubeJSNLEntityRenderer<T extends $Entity> extends $GeoEntityRenderer<T> {
        entityName(): string;
        scaleModelForRender(arg0: number, arg1: number, arg2: $PoseStack, arg3: T, arg4: $BakedGeoModel_, arg5: boolean, arg6: number, arg7: number, arg8: number): void;
        getScaleWidth(): number;
        getScaleHeight(): number;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context, arg1: $BaseEntityBuilder<T>);
        get scaleWidth(): number;
        get scaleHeight(): number;
    }
}
