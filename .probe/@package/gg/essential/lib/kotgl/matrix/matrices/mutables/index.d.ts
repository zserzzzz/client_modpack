import { $Mat4, $Mat3, $Mat } from "@package/gg/essential/lib/kotgl/matrix/matrices";

declare module "@package/gg/essential/lib/kotgl/matrix/matrices/mutables" {
    export class $MutableMat4 extends $Mat4 implements $MutableMat {
        copyOf(): $MutableMat4;
        setM03(arg0: number): void;
        setM23(arg0: number): void;
        setM13(arg0: number): void;
        setM00(arg0: number): void;
        setM01(arg0: number): void;
        setM02(arg0: number): void;
        setM10(arg0: number): void;
        setM11(arg0: number): void;
        setM30(arg0: number): void;
        setM21(arg0: number): void;
        setM31(arg0: number): void;
        setM33(arg0: number): void;
        setM12(arg0: number): void;
        setM20(arg0: number): void;
        setM32(arg0: number): void;
        setM22(arg0: number): void;
        constructor();
        set m03(value: number);
        set m23(value: number);
        set m13(value: number);
        set m00(value: number);
        set m01(value: number);
        set m02(value: number);
        set m10(value: number);
        set m11(value: number);
        set m30(value: number);
        set m21(value: number);
        set m31(value: number);
        set m33(value: number);
        set m12(value: number);
        set m20(value: number);
        set m32(value: number);
        set m22(value: number);
    }
    export class $MutableMat3 extends $Mat3 implements $MutableMat {
        copyOf(): $MutableMat3;
        setM00(arg0: number): void;
        setM01(arg0: number): void;
        setM02(arg0: number): void;
        setM10(arg0: number): void;
        setM11(arg0: number): void;
        setM21(arg0: number): void;
        setM12(arg0: number): void;
        setM20(arg0: number): void;
        setM22(arg0: number): void;
        constructor();
        set m00(value: number);
        set m01(value: number);
        set m02(value: number);
        set m10(value: number);
        set m11(value: number);
        set m21(value: number);
        set m12(value: number);
        set m20(value: number);
        set m22(value: number);
    }
    export class $MutableMat {
    }
    export interface $MutableMat extends $Mat {
        copyOf(): $MutableMat;
    }
}
