import { $UIComponent } from "@package/gg/essential/elementa";
import { $Color } from "@package/java/awt";
import { $Object, $Enum } from "@package/java/lang";
import { $ConstraintVisitor } from "@package/gg/essential/elementa/constraints/resolution";
export * as animation from "@package/gg/essential/elementa/constraints/animation";
export * as resolution from "@package/gg/essential/elementa/constraints/resolution";

declare module "@package/gg/essential/elementa/constraints" {
    export class $WidthConstraint {
        static access$getWidth$jd(arg0: $WidthConstraint, arg1: $UIComponent): number;
        static access$pauseIfSupported$jd(arg0: $WidthConstraint): void;
        static access$animationFrame$jd(arg0: $WidthConstraint): void;
        static access$stopIfSupported$jd(arg0: $WidthConstraint): void;
        static access$to$jd(arg0: $WidthConstraint, arg1: $UIComponent): $SuperConstraint<any>;
        static access$visit$jd(arg0: $WidthConstraint, arg1: $ConstraintVisitor, arg2: $ConstraintType_, arg3: boolean): void;
        static access$resumeIfSupported$jd(arg0: $WidthConstraint): void;
    }
    export interface $WidthConstraint extends $SuperConstraint<number> {
        getWidth(arg0: $UIComponent): number;
        getWidthImpl(arg0: $UIComponent): number;
    }
    export class $ColorConstraint {
        static access$getColor$jd(arg0: $ColorConstraint, arg1: $UIComponent): $Color;
        static access$pauseIfSupported$jd(arg0: $ColorConstraint): void;
        static access$animationFrame$jd(arg0: $ColorConstraint): void;
        static access$stopIfSupported$jd(arg0: $ColorConstraint): void;
        static access$to$jd(arg0: $ColorConstraint, arg1: $UIComponent): $SuperConstraint<any>;
        static access$visit$jd(arg0: $ColorConstraint, arg1: $ConstraintVisitor, arg2: $ConstraintType_, arg3: boolean): void;
        static access$resumeIfSupported$jd(arg0: $ColorConstraint): void;
    }
    export interface $ColorConstraint extends $SuperConstraint<$Color> {
        getColorImpl(arg0: $UIComponent): $Color;
        getColor(arg0: $UIComponent): $Color;
    }
    export class $HeightConstraint {
        static access$pauseIfSupported$jd(arg0: $HeightConstraint): void;
        static access$animationFrame$jd(arg0: $HeightConstraint): void;
        static access$stopIfSupported$jd(arg0: $HeightConstraint): void;
        static access$getHeight$jd(arg0: $HeightConstraint, arg1: $UIComponent): number;
        static access$getTextScale$jd(arg0: $HeightConstraint, arg1: $UIComponent): number;
        static access$to$jd(arg0: $HeightConstraint, arg1: $UIComponent): $SuperConstraint<any>;
        static access$visit$jd(arg0: $HeightConstraint, arg1: $ConstraintVisitor, arg2: $ConstraintType_, arg3: boolean): void;
        static access$resumeIfSupported$jd(arg0: $HeightConstraint): void;
    }
    export interface $HeightConstraint extends $SuperConstraint<number> {
        getTextScale(arg0: $UIComponent): number;
        getHeightImpl(arg0: $UIComponent): number;
        getHeight(arg0: $UIComponent): number;
    }
    export class $XConstraint {
        static access$pauseIfSupported$jd(arg0: $XConstraint): void;
        static access$animationFrame$jd(arg0: $XConstraint): void;
        static access$stopIfSupported$jd(arg0: $XConstraint): void;
        static access$getXPosition$jd(arg0: $XConstraint, arg1: $UIComponent): number;
        static access$to$jd(arg0: $XConstraint, arg1: $UIComponent): $SuperConstraint<any>;
        static access$visit$jd(arg0: $XConstraint, arg1: $ConstraintVisitor, arg2: $ConstraintType_, arg3: boolean): void;
        static access$resumeIfSupported$jd(arg0: $XConstraint): void;
    }
    export interface $XConstraint extends $SuperConstraint<number> {
        getXPosition(arg0: $UIComponent): number;
        getXPositionImpl(arg0: $UIComponent): number;
    }
    export class $RadiusConstraint {
        static access$pauseIfSupported$jd(arg0: $RadiusConstraint): void;
        static access$animationFrame$jd(arg0: $RadiusConstraint): void;
        static access$stopIfSupported$jd(arg0: $RadiusConstraint): void;
        static access$getRadius$jd(arg0: $RadiusConstraint, arg1: $UIComponent): number;
        static access$to$jd(arg0: $RadiusConstraint, arg1: $UIComponent): $SuperConstraint<any>;
        static access$visit$jd(arg0: $RadiusConstraint, arg1: $ConstraintVisitor, arg2: $ConstraintType_, arg3: boolean): void;
        static access$resumeIfSupported$jd(arg0: $RadiusConstraint): void;
    }
    export interface $RadiusConstraint extends $SuperConstraint<number> {
        getRadiusImpl(arg0: $UIComponent): number;
        getRadius(arg0: $UIComponent): number;
    }
    export class $ConstraintType extends $Enum<$ConstraintType> {
        static values(): $ConstraintType[];
        static valueOf(arg0: string): $ConstraintType;
        getPrettyName(): string;
        static RADIUS: $ConstraintType;
        static TEXT_SCALE: $ConstraintType;
        static COLOR: $ConstraintType;
        static X: $ConstraintType;
        static Y: $ConstraintType;
        static WIDTH: $ConstraintType;
        static HEIGHT: $ConstraintType;
        static FONT_PROVIDER: $ConstraintType;
        get prettyName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ConstraintType}.
     */
    export type $ConstraintType_ = "x" | "y" | "width" | "height" | "radius" | "color" | "font_provider" | "text_scale";
    export class $SuperConstraint<T> {
        static access$pauseIfSupported$jd(arg0: $SuperConstraint<any>): void;
        static access$animationFrame$jd(arg0: $SuperConstraint<any>): void;
        static access$stopIfSupported$jd(arg0: $SuperConstraint<any>): void;
        static access$to$jd(arg0: $SuperConstraint<any>, arg1: $UIComponent): $SuperConstraint<any>;
        static access$visit$jd(arg0: $SuperConstraint<any>, arg1: $ConstraintVisitor, arg2: $ConstraintType_, arg3: boolean): void;
        static visit$default(arg0: $SuperConstraint<any>, arg1: $ConstraintVisitor, arg2: $ConstraintType_, arg3: boolean, arg4: number, arg5: $Object): void;
        static access$resumeIfSupported$jd(arg0: $SuperConstraint<any>): void;
    }
    export interface $SuperConstraint<T> {
        to(arg0: $UIComponent): $SuperConstraint<T>;
        visit(arg0: $ConstraintVisitor, arg1: $ConstraintType_, arg2: boolean): void;
        animationFrame(): void;
        setRecalculate(arg0: boolean): void;
        visitImpl(arg0: $ConstraintVisitor, arg1: $ConstraintType_): void;
        resumeIfSupported(): void;
        setConstrainTo(arg0: $UIComponent): void;
        pauseIfSupported(): void;
        stopIfSupported(): void;
        getConstrainTo(): $UIComponent;
        setCachedValue(arg0: T): void;
        getRecalculate(): boolean;
        getCachedValue(): T;
    }
    export class $YConstraint {
        static access$pauseIfSupported$jd(arg0: $YConstraint): void;
        static access$animationFrame$jd(arg0: $YConstraint): void;
        static access$stopIfSupported$jd(arg0: $YConstraint): void;
        static access$getYPosition$jd(arg0: $YConstraint, arg1: $UIComponent): number;
        static access$to$jd(arg0: $YConstraint, arg1: $UIComponent): $SuperConstraint<any>;
        static access$visit$jd(arg0: $YConstraint, arg1: $ConstraintVisitor, arg2: $ConstraintType_, arg3: boolean): void;
        static access$resumeIfSupported$jd(arg0: $YConstraint): void;
    }
    export interface $YConstraint extends $SuperConstraint<number> {
        getYPosition(arg0: $UIComponent): number;
        getYPositionImpl(arg0: $UIComponent): number;
    }
}
