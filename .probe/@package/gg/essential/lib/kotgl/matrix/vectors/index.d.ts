export * as mutables from "@package/gg/essential/lib/kotgl/matrix/vectors/mutables";

declare module "@package/gg/essential/lib/kotgl/matrix/vectors" {
    export class $Vec4 implements $Vec {
        copyOf(): $Vec4;
        component2(): number;
        component3(): number;
        component4(): number;
        component1(): number;
        constructor();
    }
    export class $Vec3 extends $Vec4 {
        copyOf(): $Vec3;
        constructor();
    }
    export class $Vec {
    }
    export interface $Vec {
        getZ(): number;
        getX(): number;
        copyOf(): $Vec;
        getY(): number;
        getW(): number;
        get z(): number;
        get x(): number;
        get y(): number;
        get w(): number;
    }
}
