import { $Function2_, $Function2 } from "@package/kotlin/jvm/functions";
import { $UMatrixStack } from "@package/gg/essential/universal";
import { $UIComponent } from "@package/gg/essential/elementa";
import { $List_, $List } from "@package/java/util";
import { $Unit } from "@package/kotlin";

declare module "@package/gg/essential/elementa/effects" {
    export class $Effect {
        setup(): void;
        beforeChildrenDraw(arg0: $UMatrixStack): void;
        beforeChildrenDraw(): void;
        beforeDrawCompat(arg0: $UMatrixStack): void;
        afterDrawCompat(arg0: $UMatrixStack): void;
        animationFrame(): void;
        bindComponent(arg0: $UIComponent): void;
        beforeChildrenDrawCompat(arg0: $UMatrixStack): void;
        "getFlags-gM4u_j4$Elementa"(): number;
        getUpdateFuncs$Elementa(): $List<$Function2<number, number, $Unit>>;
        setUpdateFuncs$Elementa(arg0: $List_<$Function2_<number, number, $Unit>>): void;
        "setFlags-GhGBI1o$Elementa"(arg0: number): void;
        beforeDraw(): void;
        beforeDraw(arg0: $UMatrixStack): void;
        afterDraw(arg0: $UMatrixStack): void;
        afterDraw(): void;
        getUpdateFuncParent$Elementa(): $UIComponent;
        setUpdateFuncParent$Elementa(arg0: $UIComponent): void;
        constructor();
        get flags-gM4u_j4$Elementa(): number;
        set flags-GhGBI1o$Elementa(value: number);
    }
}
