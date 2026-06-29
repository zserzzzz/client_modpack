import { $MassTracker, $MassData } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Vector3dc, $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/force" {
    export class $ForceGroup extends $Record {
        name(): $Component;
        color(): number;
        description(): $Component;
        defaultDisplayed(): boolean;
        constructor(name: $Component_, description: $Component_, color: number, defaultDisplayed: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ForceGroup}.
     */
    export type $ForceGroup_ = RegistryTypes.SableForceGroups | { defaultDisplayed?: boolean, description?: $Component_, name?: $Component_, color?: number,  } | [defaultDisplayed?: boolean, description?: $Component_, name?: $Component_, color?: number, ];
    export interface $ForceGroup extends RegistryMarked<RegistryTypes.SableForceGroupsTag, RegistryTypes.SableForceGroups> {}
    export class $ForceTotal {
        applyLinearImpulse(arg0: $Vector3dc): void;
        reset(): void;
        applyLinearAndAngularImpulse(arg0: $Vector3dc, arg1: $Vector3dc): void;
        applyImpulseAtPoint(arg0: $MassTracker, arg1: $Vec3_, arg2: $Vec3_): void;
        applyImpulseAtPoint(arg0: $MassData, arg1: $Vector3dc, arg2: $Vector3dc): void;
        applyImpulseAtPoint(arg0: $ServerSubLevel, arg1: $Vector3dc, arg2: $Vector3dc): void;
        applyForces(arg0: $RigidBodyHandle): void;
        applyAngularImpulse(arg0: $Vector3dc): void;
        applyForceTotal(arg0: $ForceTotal): void;
        getLocalTorque(): $Vector3d;
        getLocalForce(): $Vector3d;
        applyTorqueImpulse(arg0: $Vector3dc): void;
        constructor();
        get localTorque(): $Vector3d;
        get localForce(): $Vector3d;
    }
    export class $QueuedForceGroup {
        reset(): void;
        getRecordedPointForces(): $List<$QueuedForceGroup$PointForce>;
        recordPointForce(arg0: $Vector3dc, arg1: $Vector3dc): void;
        getForceTotal(): $ForceTotal;
        applyAndRecordPointForce(arg0: $Vector3dc, arg1: $Vector3dc): void;
        constructor(arg0: $ServerSubLevel);
        get recordedPointForces(): $List<$QueuedForceGroup$PointForce>;
        get forceTotal(): $ForceTotal;
    }
    export class $QueuedForceGroup$PointForce extends $Record {
        force(): $Vector3dc;
        point(): $Vector3dc;
        constructor(point: $Vector3dc, force: $Vector3dc);
    }
    /**
     * Values that may be interpreted as {@link $QueuedForceGroup$PointForce}.
     */
    export type $QueuedForceGroup$PointForce_ = { point?: $Vector3dc, force?: $Vector3dc,  } | [point?: $Vector3dc, force?: $Vector3dc, ];
}
