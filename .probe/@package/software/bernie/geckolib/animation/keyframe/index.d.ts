import { $MathValue_, $MathValue } from "@package/software/bernie/geckolib/loading/math";
import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";
import { $Record } from "@package/java/lang";
import { $LinkedList, $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $EasingType_, $EasingType } from "@package/software/bernie/geckolib/animation";
export * as event from "@package/software/bernie/geckolib/animation/keyframe/event";

declare module "@package/software/bernie/geckolib/animation/keyframe" {
    export class $AnimationPointQueue extends $LinkedList<$AnimationPoint> {
        constructor();
    }
    export class $KeyframeStack<T extends $Keyframe<never>> extends $Record {
        static from<F extends $Keyframe<never>>(arg0: $KeyframeStack_<F>): $KeyframeStack<F>;
        getLastKeyframeTime(): number;
        zKeyframes(): $List<T>;
        yKeyframes(): $List<T>;
        xKeyframes(): $List<T>;
        constructor();
        constructor(xKeyframes: $List_<T>, yKeyframes: $List_<T>, zKeyframes: $List_<T>);
        get lastKeyframeTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $KeyframeStack}.
     */
    export type $KeyframeStack_<T> = { zKeyframes?: $List_<$Keyframe_<never>>, yKeyframes?: $List_<$Keyframe_<never>>, xKeyframes?: $List_<$Keyframe_<never>>,  } | [zKeyframes?: $List_<$Keyframe_<never>>, yKeyframes?: $List_<$Keyframe_<never>>, xKeyframes?: $List_<$Keyframe_<never>>, ];
    export class $BoneAnimationQueue extends $Record {
        bone(): $GeoBone;
        addScales(arg0: $AnimationPoint_, arg1: $AnimationPoint_, arg2: $AnimationPoint_): void;
        addPositions(arg0: $AnimationPoint_, arg1: $AnimationPoint_, arg2: $AnimationPoint_): void;
        addNextPosition(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: $BoneSnapshot, arg4: $AnimationPoint_, arg5: $AnimationPoint_, arg6: $AnimationPoint_): void;
        addNextScale(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: $BoneSnapshot, arg4: $AnimationPoint_, arg5: $AnimationPoint_, arg6: $AnimationPoint_): void;
        addNextRotation(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: $BoneSnapshot, arg4: $BoneSnapshot, arg5: $AnimationPoint_, arg6: $AnimationPoint_, arg7: $AnimationPoint_): void;
        addRotations(arg0: $AnimationPoint_, arg1: $AnimationPoint_, arg2: $AnimationPoint_): void;
        rotationYQueue(): $AnimationPointQueue;
        rotationXQueue(): $AnimationPointQueue;
        positionZQueue(): $AnimationPointQueue;
        rotationZQueue(): $AnimationPointQueue;
        addRotationYPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        positionYQueue(): $AnimationPointQueue;
        addScaleZPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        scaleXQueue(): $AnimationPointQueue;
        scaleYQueue(): $AnimationPointQueue;
        addPosZPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        positionXQueue(): $AnimationPointQueue;
        addRotationZPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        scaleZQueue(): $AnimationPointQueue;
        addScaleYPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationXPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleXPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosXPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosYPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        constructor(arg0: $GeoBone);
        constructor(bone: $GeoBone, rotationXQueue: $AnimationPointQueue, rotationYQueue: $AnimationPointQueue, rotationZQueue: $AnimationPointQueue, positionXQueue: $AnimationPointQueue, positionYQueue: $AnimationPointQueue, positionZQueue: $AnimationPointQueue, scaleXQueue: $AnimationPointQueue, scaleYQueue: $AnimationPointQueue, scaleZQueue: $AnimationPointQueue);
    }
    /**
     * Values that may be interpreted as {@link $BoneAnimationQueue}.
     */
    export type $BoneAnimationQueue_ = { positionZQueue?: $AnimationPointQueue, positionXQueue?: $AnimationPointQueue, rotationZQueue?: $AnimationPointQueue, scaleZQueue?: $AnimationPointQueue, scaleXQueue?: $AnimationPointQueue, rotationXQueue?: $AnimationPointQueue, positionYQueue?: $AnimationPointQueue, bone?: $GeoBone, rotationYQueue?: $AnimationPointQueue, scaleYQueue?: $AnimationPointQueue,  } | [positionZQueue?: $AnimationPointQueue, positionXQueue?: $AnimationPointQueue, rotationZQueue?: $AnimationPointQueue, scaleZQueue?: $AnimationPointQueue, scaleXQueue?: $AnimationPointQueue, rotationXQueue?: $AnimationPointQueue, positionYQueue?: $AnimationPointQueue, bone?: $GeoBone, rotationYQueue?: $AnimationPointQueue, scaleYQueue?: $AnimationPointQueue, ];
    export class $BoneAnimation extends $Record {
        scaleKeyFrames(): $KeyframeStack<$Keyframe<$MathValue>>;
        rotationKeyFrames(): $KeyframeStack<$Keyframe<$MathValue>>;
        positionKeyFrames(): $KeyframeStack<$Keyframe<$MathValue>>;
        boneName(): string;
        constructor(boneName: string, rotationKeyFrames: $KeyframeStack_<$Keyframe_<$MathValue_>>, positionKeyFrames: $KeyframeStack_<$Keyframe_<$MathValue_>>, scaleKeyFrames: $KeyframeStack_<$Keyframe_<$MathValue_>>);
    }
    /**
     * Values that may be interpreted as {@link $BoneAnimation}.
     */
    export type $BoneAnimation_ = { positionKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, scaleKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, boneName?: string, rotationKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>,  } | [positionKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, scaleKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, boneName?: string, rotationKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, ];
    export class $AnimationPoint extends $Record {
        currentTick(): number;
        keyFrame(): $Keyframe<never>;
        animationEndValue(): number;
        animationStartValue(): number;
        transitionLength(): number;
        constructor(keyFrame: $Keyframe_<never>, currentTick: number, transitionLength: number, animationStartValue: number, animationEndValue: number);
    }
    /**
     * Values that may be interpreted as {@link $AnimationPoint}.
     */
    export type $AnimationPoint_ = { animationEndValue?: number, transitionLength?: number, animationStartValue?: number, keyFrame?: $Keyframe_<never>, currentTick?: number,  } | [animationEndValue?: number, transitionLength?: number, animationStartValue?: number, keyFrame?: $Keyframe_<never>, currentTick?: number, ];
    export class $Keyframe<T extends $MathValue> extends $Record {
        length(): number;
        endValue(): T;
        startValue(): T;
        easingArgs(): $List<T>;
        easingType(): $EasingType;
        constructor(length: number, startValue: T, endValue: T, easingType: $EasingType_, easingArgs: $List_<T>);
        constructor(arg0: number, arg1: T, arg2: T, arg3: $EasingType_);
        constructor(arg0: number, arg1: T, arg2: T);
    }
    /**
     * Values that may be interpreted as {@link $Keyframe}.
     */
    export type $Keyframe_<T> = { startValue?: $MathValue_, easingArgs?: $List_<$MathValue_>, easingType?: $EasingType_, endValue?: $MathValue_, length?: number,  } | [startValue?: $MathValue_, easingArgs?: $List_<$MathValue_>, easingType?: $EasingType_, endValue?: $MathValue_, length?: number, ];
}
