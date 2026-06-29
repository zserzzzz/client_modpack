import { $Vec3, $Vec } from "@package/gg/essential/lib/kotgl/matrix/vectors";

declare module "@package/gg/essential/lib/kotgl/matrix/vectors/mutables" {
    export class $MutableVec {
    }
    export interface $MutableVec extends $Vec {
    }
    export class $MutableVec3 extends $Vec3 implements $MutableVec {
        setX(arg0: number): void;
        setY(arg0: number): void;
        setZ(arg0: number): void;
        constructor();
        set x(value: number);
        set y(value: number);
        set z(value: number);
    }
}
