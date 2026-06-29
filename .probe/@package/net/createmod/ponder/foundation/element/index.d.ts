import { $PonderScene } from "@package/net/createmod/ponder/foundation";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $PonderPalette_, $PonderPalette } from "@package/net/createmod/ponder/api";
import { $TextWindowElementAccessor } from "@package/com/almostreliable/ponderjs/mixin";
import { $PonderUI } from "@package/net/createmod/ponder/foundation/ui";
import { $Parrot } from "@package/net/minecraft/world/entity/animal";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $AnimatedSceneElement, $PonderElement, $InputElementBuilder, $TextElementBuilder, $ParrotPose, $TrackedElement, $ParrotElement, $AnimatedOverlayElement } from "@package/net/createmod/ponder/api/element";
import { $TextWindowElementExtension } from "@package/dev/simulated_team/simulated/mixin_interface/ponder";
import { $Pointing_ } from "@package/net/createmod/catnip/math";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $PonderLevel } from "@package/net/createmod/ponder/api/level";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $ParrotElementAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/net/createmod/ponder/foundation/element" {
    export class $AnimatedOverlayElementBase extends $PonderElementBase implements $AnimatedOverlayElement {
        getFade(arg0: number): number;
        setFade(arg0: number): void;
        render(arg0: $PonderScene, arg1: $PonderUI, arg2: $GuiGraphics, arg3: number): void;
        constructor();
    }
    export class $PonderElementBase implements $PonderElement {
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        reset(arg0: $PonderScene): void;
        tick(arg0: $PonderScene): void;
        whileSkipping(arg0: $PonderScene): void;
        constructor();
    }
    export class $TextWindowElement extends $AnimatedOverlayElementBase implements $TextWindowElementExtension, $TextWindowElementAccessor {
        builder(arg0: $PonderScene): $TextElementBuilder;
        getPalette(): $PonderPalette;
        simulated$hidePointer(): void;
        wrapOperation$egn000$simulated$removePointerTwoTheSqueakuel(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        wrapOperation$egn000$simulated$removePointer(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        wrapOperation$egn000$simulated$shiftItALittleToTheLeftIfThereIsntALine(arg0: number, arg1: number, arg2: $Operation_<any>): number;
        setY(arg0: number): void;
        setTextGetter(arg0: $Supplier_<string>): void;
        setNearScene(arg0: boolean): void;
        setPalette(arg0: $PonderPalette_): void;
        setVec(arg0: $Vec3_): void;
        static COLOR_WINDOW_BORDER: $Couple<$Color>;
        constructor();
        set y(value: number);
        set textGetter(value: $Supplier_<string>);
        set nearScene(value: boolean);
        set vec(value: $Vec3_);
    }
    export class $TrackedElementBase<T> extends $PonderElementBase implements $TrackedElement<T> {
        ifPresent(arg0: $Consumer_<T>): void;
        renderLayer(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $RenderType, arg3: $GuiGraphics, arg4: number): void;
        renderFirst(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $GuiGraphics, arg3: number): void;
        renderLast(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $GuiGraphics, arg3: number): void;
        isStillValid(arg0: T): boolean;
        constructor(arg0: T);
    }
    export class $InputWindowElement extends $AnimatedOverlayElementBase {
        builder(): $InputElementBuilder;
        constructor(arg0: $Vec3_, arg1: $Pointing_);
    }
    export class $ParrotElementImpl extends $AnimatedSceneElementBase implements $ParrotElement, $ParrotElementAccessor {
        static create(arg0: $Vec3_, arg1: $Supplier_<$ParrotPose>): $ParrotElement;
        getPositionOffset(): $Vec3;
        setRotation(arg0: $Vec3_, arg1: boolean): void;
        setPose(arg0: $ParrotPose): void;
        getRotation(): $Vec3;
        setPositionOffset(arg0: $Vec3_, arg1: boolean): void;
        getEntity(): $Parrot;
        set pose(value: $ParrotPose);
        get entity(): $Parrot;
    }
    export class $AnimatedSceneElementBase extends $PonderElementBase implements $AnimatedSceneElement {
        renderLayer(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $RenderType, arg3: $GuiGraphics, arg4: number): void;
        renderFirst(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $GuiGraphics, arg3: number): void;
        forceApplyFade(arg0: number): void;
        renderLast(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $GuiGraphics, arg3: number): void;
        setFade(arg0: number): void;
        setFadeVec(arg0: $Vec3_): void;
        constructor();
        set fade(value: number);
        set fadeVec(value: $Vec3_);
    }
}
