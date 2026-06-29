import { $Function2_, $Function2, $Function0, $Function0_ } from "@package/kotlin/jvm/functions";
import { $RadiusConstraint, $ColorConstraint, $YConstraint, $XConstraint, $HeightConstraint, $WidthConstraint } from "@package/gg/essential/elementa/constraints";
import { $UIComponent, $UIConstraints } from "@package/gg/essential/elementa";
import { $Object, $Runnable_ } from "@package/java/lang";
import { $Unit } from "@package/kotlin";

declare module "@package/gg/essential/elementa/constraints/animation" {
    export class $AnimatingConstraints extends $UIConstraints {
        begin(): $AnimatingConstraints;
        getCompleteAction(): $Function0<$Unit>;
        getUpdateFunc$Elementa(): $Function2<number, number, $Unit>;
        setUpdateFunc$Elementa(arg0: $Function2_<number, number, $Unit>): void;
        onComplete(arg0: $Function0_<$Unit>): $AnimatingConstraints;
        static setXAnimation$default(arg0: $AnimatingConstraints, arg1: $AnimationStrategy_, arg2: number, arg3: $XConstraint, arg4: number, arg5: number, arg6: $Object): $AnimatingConstraints;
        static setYAnimation$default(arg0: $AnimatingConstraints, arg1: $AnimationStrategy_, arg2: number, arg3: $YConstraint, arg4: number, arg5: number, arg6: $Object): $AnimatingConstraints;
        static setColorAnimation$default(arg0: $AnimatingConstraints, arg1: $AnimationStrategy_, arg2: number, arg3: $ColorConstraint, arg4: number, arg5: number, arg6: $Object): $AnimatingConstraints;
        updateCompletion$Elementa(arg0: number): void;
        static setTextScaleAnimation$default(arg0: $AnimatingConstraints, arg1: $AnimationStrategy_, arg2: number, arg3: $HeightConstraint, arg4: number, arg5: number, arg6: $Object): $AnimatingConstraints;
        static setHeightAnimation$default(arg0: $AnimatingConstraints, arg1: $AnimationStrategy_, arg2: number, arg3: $HeightConstraint, arg4: number, arg5: number, arg6: $Object): $AnimatingConstraints;
        static setRadiusAnimation$default(arg0: $AnimatingConstraints, arg1: $AnimationStrategy_, arg2: number, arg3: $RadiusConstraint, arg4: number, arg5: number, arg6: $Object): $AnimatingConstraints;
        static setWidthAnimation$default(arg0: $AnimatingConstraints, arg1: $AnimationStrategy_, arg2: number, arg3: $WidthConstraint, arg4: number, arg5: number, arg6: $Object): $AnimatingConstraints;
        setTextScaleAnimation(arg0: $AnimationStrategy_, arg1: number, arg2: $HeightConstraint, arg3: number): $AnimatingConstraints;
        setTextScaleAnimation(arg0: $AnimationStrategy_, arg1: number, arg2: $HeightConstraint): $AnimatingConstraints;
        onCompleteRunnable(arg0: $Runnable_): $AnimatingConstraints;
        setExtraDelay(arg0: number): void;
        setCompleteAction(arg0: $Function0_<$Unit>): void;
        setColorAnimation(arg0: $AnimationStrategy_, arg1: number, arg2: $ColorConstraint): $AnimatingConstraints;
        setColorAnimation(arg0: $AnimationStrategy_, arg1: number, arg2: $ColorConstraint, arg3: number): $AnimatingConstraints;
        setWidthAnimation(arg0: $AnimationStrategy_, arg1: number, arg2: $WidthConstraint): $AnimatingConstraints;
        setWidthAnimation(arg0: $AnimationStrategy_, arg1: number, arg2: $WidthConstraint, arg3: number): $AnimatingConstraints;
        setHeightAnimation(arg0: $AnimationStrategy_, arg1: number, arg2: $HeightConstraint, arg3: number): $AnimatingConstraints;
        setHeightAnimation(arg0: $AnimationStrategy_, arg1: number, arg2: $HeightConstraint): $AnimatingConstraints;
        setYAnimation(arg0: $AnimationStrategy_, arg1: number, arg2: $YConstraint, arg3: number): $AnimatingConstraints;
        setYAnimation(arg0: $AnimationStrategy_, arg1: number, arg2: $YConstraint): $AnimatingConstraints;
        setRadiusAnimation(arg0: $AnimationStrategy_, arg1: number, arg2: $RadiusConstraint, arg3: number): $AnimatingConstraints;
        setRadiusAnimation(arg0: $AnimationStrategy_, arg1: number, arg2: $RadiusConstraint): $AnimatingConstraints;
        setXAnimation(arg0: $AnimationStrategy_, arg1: number, arg2: $XConstraint): $AnimatingConstraints;
        setXAnimation(arg0: $AnimationStrategy_, arg1: number, arg2: $XConstraint, arg3: number): $AnimatingConstraints;
        constructor(arg0: $UIComponent, arg1: $UIConstraints);
        set extraDelay(value: number);
    }
    export class $AnimationStrategy {
    }
    export interface $AnimationStrategy {
        getValue(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $AnimationStrategy}.
     */
    export type $AnimationStrategy_ = ((arg0: number) => number);
}
