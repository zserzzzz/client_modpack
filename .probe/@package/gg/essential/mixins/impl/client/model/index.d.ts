import { $PlayerPose, $PlayerPose$Part } from "@package/gg/essential/model/backend";
import { $Pair } from "@package/kotlin";

declare module "@package/gg/essential/mixins/impl/client/model" {
    export class $ElytraPoseSupplier {
    }
    export interface $ElytraPoseSupplier {
        getWingsPose(): $Pair<$PlayerPose$Part, $PlayerPose$Part>;
        get wingsPose(): $Pair<$PlayerPose$Part, $PlayerPose$Part>;
    }
    /**
     * Values that may be interpreted as {@link $ElytraPoseSupplier}.
     */
    export type $ElytraPoseSupplier_ = (() => $Pair<$PlayerPose$Part, $PlayerPose$Part>);
    export class $ModelBipedExt {
    }
    export interface $ModelBipedExt {
        getResetPose(): $PlayerPose;
        setResetPose(arg0: $PlayerPose): void;
    }
    export class $CapePoseSupplier {
    }
    export interface $CapePoseSupplier {
        getCapePose(): $PlayerPose$Part;
        get capePose(): $PlayerPose$Part;
    }
    /**
     * Values that may be interpreted as {@link $CapePoseSupplier}.
     */
    export type $CapePoseSupplier_ = (() => $PlayerPose$Part);
}
