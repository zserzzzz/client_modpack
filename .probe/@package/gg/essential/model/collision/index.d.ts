import { $Vec3 } from "@package/gg/essential/lib/kotgl/matrix/vectors";
import { $Pair } from "@package/kotlin";

declare module "@package/gg/essential/model/collision" {
    export class $CollisionProvider {
    }
    export interface $CollisionProvider {
        query(arg0: $Vec3, arg1: number, arg2: $Vec3): $Pair<$Vec3, $Vec3>;
    }
    /**
     * Values that may be interpreted as {@link $CollisionProvider}.
     */
    export type $CollisionProvider_ = ((arg0: $Vec3, arg1: number, arg2: $Vec3) => $Pair<$Vec3, $Vec3>);
}
