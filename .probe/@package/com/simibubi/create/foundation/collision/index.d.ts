import { $Matrix3dAccessor } from "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/contraptions";
import { $AccessorMatrix3d } from "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/mixin/compat/neoforge/create";
import { $Shapes$DoubleLineConsumer } from "@package/net/minecraft/world/phys/shapes";
import { $AABB, $AABB_, $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/collision" {
    export class $ContinuousOBBCollider$ContinuousSeparationManifold {
    }
    export class $CollisionList$Populate implements $Shapes$DoubleLineConsumer {
        append(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        consume(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        appendFrom(arg0: $CollisionList, arg1: number): void;
        offsetX: number;
        offsetZ: number;
        offsetY: number;
        constructor(arg0: $CollisionList);
    }
    export class $Matrix3d implements $AccessorMatrix3d, $Matrix3dAccessor {
        scale(arg0: number): $Matrix3d;
        transform(arg0: number, arg1: number, arg2: number): $Vec3;
        transform(arg0: $Vec3_): $Vec3;
        multiply(arg0: $Matrix3d): $Matrix3d;
        asIdentity(): $Matrix3d;
        asYRotation(arg0: number): $Matrix3d;
        asZRotation(arg0: number): $Matrix3d;
        asXRotation(arg0: number): $Matrix3d;
        transformTransposed(arg0: number, arg1: number, arg2: number): $Vec3;
        transformTransposed(arg0: $Vec3_): $Vec3;
        m01(arg0: number): void;
        m01(): number;
        m00(arg0: number): void;
        m00(): number;
        m02(): number;
        m02(arg0: number): void;
        getM02(): number;
        getM00(): number;
        getM20(): number;
        getM11(): number;
        getM12(): number;
        getM22(): number;
        getM10(): number;
        getM21(): number;
        getM01(): number;
        m12(arg0: number): void;
        m12(): number;
        m11(arg0: number): void;
        m11(): number;
        m10(): number;
        m10(arg0: number): void;
        m20(): number;
        m20(arg0: number): void;
        m21(): number;
        m21(arg0: number): void;
        m22(): number;
        m22(arg0: number): void;
        setM01(arg0: number): void;
        setM02(arg0: number): void;
        setM00(arg0: number): void;
        setM12(arg0: number): void;
        setM10(arg0: number): void;
        setM20(arg0: number): void;
        setM11(arg0: number): void;
        setM22(arg0: number): void;
        setM21(arg0: number): void;
        constructor();
    }
    export class $CollisionList {
        centerY: number[];
        centerZ: number[];
        size: number;
        centerX: number[];
        extentsZ: number[];
        extentsY: number[];
        extentsX: number[];
        static DEFAULT_CAPACITY: number;
        constructor();
    }
    export class $OrientedBB {
        copy(): $OrientedBB;
        move(arg0: $Vec3_): void;
        setRotation(arg0: $Matrix3d): void;
        getCenter(): $Vec3;
        getRotation(): $Matrix3d;
        setCenter(arg0: $Vec3_): void;
        getAsAABB(): $AABB;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Matrix3d);
        constructor();
        constructor(arg0: $AABB_);
        get asAABB(): $AABB;
    }
    export class $ContinuousOBBCollider {
        static collideMany(arg0: $CollisionList, arg1: $CollisionList, arg2: $OrientedBB, arg3: $Vec3_, arg4: number, arg5: boolean): $ContinuousOBBCollider$CollisionResponse;
        constructor();
    }
    export class $ContinuousOBBCollider$CollisionResponse {
        normal: $Vec3;
        surfaceCollision: boolean;
        collisionResponse: $Vec3;
        location: $Vec3;
        temporalResponse: number;
        constructor();
    }
}
