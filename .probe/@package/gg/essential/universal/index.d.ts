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
        runReplacingGlobalState<R>(block: $Function0_<R>): R;
        runReplacingGlobalState(block: $Runnable_): void;
        replaceGlobalState(): void;
        applyToGlobalState(): void;
        static rotate$default(arg0: $UMatrixStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: $Object): void;
        runWithGlobalState<R>(block: $Function0_<R>): R;
        runWithGlobalState(block: $Runnable_): void;
        toMC(): $PoseStack;
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
        getModel(): $Matrix4f;
        copy(model: $Matrix4f, normal: $Matrix3f): $UMatrixStack$Entry;
        deepCopy(): $UMatrixStack$Entry;
        static copy$default(arg0: $UMatrixStack$Entry, arg1: $Matrix4f, arg2: $Matrix3f, arg3: number, arg4: $Object): $UMatrixStack$Entry;
        getModelAsArray(): number[];
        getNormal(): $Matrix3f;
        component2(): $Matrix3f;
        component1(): $Matrix4f;
        toMCStack(): $PoseStack;
        constructor(model: $Matrix4f, normal: $Matrix3f);
        get model(): $Matrix4f;
        get modelAsArray(): number[];
        get normal(): $Matrix3f;
    }
    export class $UImage {
        copy(): $UImage;
        copyFrom(other: $UImage): void;
        getWidth(): number;
        getHeight(): number;
        static ofSize(width: number, height: number, clear: boolean): $UImage;
        static ofSize(width: number, height: number): $UImage;
        setPixelRGBA(x: number, y: number, color: number): void;
        getNativeImage(): $NativeImage;
        getPixelRGBA(x: number, y: number): number;
        static Companion: $UImage$Companion;
        constructor(nativeImage: $NativeImage);
        get width(): number;
        get height(): number;
        get nativeImage(): $NativeImage;
    }
}
