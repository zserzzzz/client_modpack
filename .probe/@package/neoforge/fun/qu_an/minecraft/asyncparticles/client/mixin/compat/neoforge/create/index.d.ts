import { $Level_ } from "@package/net/minecraft/world/level";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $Shapes$DoubleLineConsumer_ } from "@package/net/minecraft/world/phys/shapes";
import { $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/mixin/compat/neoforge/create" {
    export class $InvokerContraptionCollider {
        static invoker_getPotentiallyCollidedShapes(world: $Level_, contraption: $Contraption, localBB: $AABB_, out: $Shapes$DoubleLineConsumer_): void;
    }
    export interface $InvokerContraptionCollider {
    }
    export class $AccessorMatrix3d {
    }
    export interface $AccessorMatrix3d {
        m21(arg0: number): void;
        m21(): number;
        m20(): number;
        m20(arg0: number): void;
        m22(arg0: number): void;
        m22(): number;
        m11(arg0: number): void;
        m11(): number;
        m12(arg0: number): void;
        m12(): number;
        m10(): number;
        m10(arg0: number): void;
        m01(): number;
        m01(arg0: number): void;
        m02(): number;
        m02(arg0: number): void;
        m00(): number;
        m00(arg0: number): void;
    }
}
