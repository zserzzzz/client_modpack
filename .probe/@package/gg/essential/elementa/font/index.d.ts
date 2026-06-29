import { $SuperConstraint, $ConstraintType_ } from "@package/gg/essential/elementa/constraints";
import { $UMatrixStack } from "@package/gg/essential/universal";
import { $UIComponent } from "@package/gg/essential/elementa";
import { $Color } from "@package/java/awt";
import { $Object } from "@package/java/lang";
import { $ConstraintVisitor } from "@package/gg/essential/elementa/constraints/resolution";

declare module "@package/gg/essential/elementa/font" {
    export class $FontProvider {
        static drawString$default(arg0: $FontProvider, arg1: $UMatrixStack, arg2: string, arg3: $Color, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: $Color, arg10: number, arg11: $Object): void;
        static drawString$default(arg0: $FontProvider, arg1: string, arg2: $Color, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Color, arg9: number, arg10: $Object): void;
        static access$pauseIfSupported$jd(arg0: $FontProvider): void;
        static access$drawString$jd(arg0: $FontProvider, arg1: string, arg2: $Color, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Color): void;
        static access$drawString$jd(arg0: $FontProvider, arg1: $UMatrixStack, arg2: string, arg3: $Color, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: $Color): void;
        static access$animationFrame$jd(arg0: $FontProvider): void;
        static access$stopIfSupported$jd(arg0: $FontProvider): void;
        static access$to$jd(arg0: $FontProvider, arg1: $UIComponent): $SuperConstraint<any>;
        static access$visit$jd(arg0: $FontProvider, arg1: $ConstraintVisitor, arg2: $ConstraintType_, arg3: boolean): void;
        static access$resumeIfSupported$jd(arg0: $FontProvider): void;
    }
    export interface $FontProvider extends $SuperConstraint<$FontProvider> {
        drawString(arg0: string, arg1: $Color, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: $Color): void;
        drawString(arg0: $UMatrixStack, arg1: string, arg2: $Color, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Color): void;
        getShadowHeight(): number;
        getBelowLineHeight(): number;
        getStringWidth(arg0: string, arg1: number): number;
        getStringHeight(arg0: string, arg1: number): number;
        getBaseLineHeight(): number;
        get shadowHeight(): number;
        get belowLineHeight(): number;
        get baseLineHeight(): number;
    }
}
