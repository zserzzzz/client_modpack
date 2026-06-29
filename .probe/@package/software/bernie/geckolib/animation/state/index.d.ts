import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getScaleZ(): number;
        getRotZ(): number;
        getOffsetY(): number;
        getOffsetX(): number;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        getRotY(): number;
        getRotX(): number;
        getScaleX(): number;
        getScaleY(): number;
        getOffsetZ(): number;
        getBone(): $GeoBone;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        getLastResetRotationTick(): number;
        isPosAnimInProgress(): boolean;
        getLastResetScaleTick(): number;
        isScaleAnimInProgress(): boolean;
        isRotAnimInProgress(): boolean;
        getLastResetPositionTick(): number;
        startPosAnim(): void;
        stopRotAnim(arg0: number): void;
        stopScaleAnim(arg0: number): void;
        startScaleAnim(): void;
        startRotAnim(): void;
        stopPosAnim(arg0: number): void;
        constructor(arg0: $GeoBone);
        get scaleZ(): number;
        get rotZ(): number;
        get offsetY(): number;
        get offsetX(): number;
        get rotY(): number;
        get rotX(): number;
        get scaleX(): number;
        get scaleY(): number;
        get offsetZ(): number;
        get bone(): $GeoBone;
        get lastResetRotationTick(): number;
        get posAnimInProgress(): boolean;
        get lastResetScaleTick(): number;
        get scaleAnimInProgress(): boolean;
        get rotAnimInProgress(): boolean;
        get lastResetPositionTick(): number;
    }
}
