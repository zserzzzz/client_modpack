import { $Function0_ } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Object, $Runnable_ } from "@package/java/lang";
import { $Matrix4f, $Quaternionf, $Matrix3f } from "@package/org/joml";

declare module "@package/gg/essential/universal" {
    export class $UImage$Companion {
        ofSize(width: number, height: number): $UImage;
        ofSize(width: number, height: number, clear: boolean): $UImage;
        static ofSize$default(arg0: $UImage$Companion, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: $Object): $UImage;
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $UMatrixStack {
        scale(x: number, y: number, z: number): void;
        scale(x: number, y: number, z: number): void;
        isEmpty(): boolean;
        peek(): $UMatrixStack$Entry;
        multiply(quaternion: $Quaternionf): void;
        rotate(angle: number, x: number, y: number, z: number, degrees: boolean): void;
        rotate(angle: number, x: number, y: number, z: number): void;
        push(): void;
        pop(): void;
        fork(): $UMatrixStack;
        translate(x: number, y: number, z: number): void;
        translate(x: number, y: number, z: number): void;
        runReplacingGlobalState(block: $Runnable_): void;
        runReplacingGlobalState<R>(block: $Function0_<R>): R;
        toMC(): $PoseStack;
        applyToGlobalState(): void;
        static rotate$default(arg0: $UMatrixStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: $Object): void;
        replaceGlobalState(): void;
        runWithGlobalState(block: $Runnable_): void;
        runWithGlobalState<R>(block: $Function0_<R>): R;
        static Companion: $UMatrixStack$Companion;
        static UNIT: $UMatrixStack;
        constructor(mc: $PoseStack$Pose);
        constructor(mc: $PoseStack);
        constructor();
        get empty(): boolean;
    }
    export class $UMatrixStack$Companion {
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $UMatrixStack$Entry {
        getNormal(): $Matrix3f;
        static copy$default(arg0: $UMatrixStack$Entry, arg1: $Matrix4f, arg2: $Matrix3f, arg3: number, arg4: $Object): $UMatrixStack$Entry;
        deepCopy(): $UMatrixStack$Entry;
        copy(model: $Matrix4f, normal: $Matrix3f): $UMatrixStack$Entry;
        getModel(): $Matrix4f;
        component2(): $Matrix3f;
        component1(): $Matrix4f;
        toMCStack(): $PoseStack;
        getModelAsArray(): number[];
        constructor(model: $Matrix4f, normal: $Matrix3f);
        get normal(): $Matrix3f;
        get model(): $Matrix4f;
        get modelAsArray(): number[];
    }
    export class $UImage {
        getHeight(): number;
        setPixelRGBA(x: number, y: number, color: number): void;
        copy(): $UImage;
        copyFrom(other: $UImage): void;
        getWidth(): number;
        static ofSize(width: number, height: number, clear: boolean): $UImage;
        static ofSize(width: number, height: number): $UImage;
        getPixelRGBA(x: number, y: number): number;
        getNativeImage(): $NativeImage;
        static Companion: $UImage$Companion;
        constructor(nativeImage: $NativeImage);
        get height(): number;
        get width(): number;
        get nativeImage(): $NativeImage;
    }
}
