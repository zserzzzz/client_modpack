import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        getOffsetZ(): number;
        getRotY(): number;
        getRotX(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        getScaleY(): number;
        getScaleZ(): number;
        getRotZ(): number;
        getScaleX(): number;
        getOffsetX(): number;
        getOffsetY(): number;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        getBone(): $GeoBone;
        startPosAnim(): void;
        startScaleAnim(): void;
        stopRotAnim(arg0: number): void;
        stopPosAnim(arg0: number): void;
        startRotAnim(): void;
        stopScaleAnim(arg0: number): void;
        isRotAnimInProgress(): boolean;
        getLastResetRotationTick(): number;
        isPosAnimInProgress(): boolean;
        getLastResetScaleTick(): number;
        isScaleAnimInProgress(): boolean;
        getLastResetPositionTick(): number;
        constructor(arg0: $GeoBone);
        get offsetZ(): number;
        get rotY(): number;
        get rotX(): number;
        get scaleY(): number;
        get scaleZ(): number;
        get rotZ(): number;
        get scaleX(): number;
        get offsetX(): number;
        get offsetY(): number;
        get bone(): $GeoBone;
        get rotAnimInProgress(): boolean;
        get lastResetRotationTick(): number;
        get posAnimInProgress(): boolean;
        get lastResetScaleTick(): number;
        get scaleAnimInProgress(): boolean;
        get lastResetPositionTick(): number;
    }
}
