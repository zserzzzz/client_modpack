import { $EarsFeatures } from "@package/com/unascribed/ears/api/features";

declare module "@package/com/unascribed/ears/common" {
    export class $EarsFeaturesHolder {
    }
    export interface $EarsFeaturesHolder {
        getEarsFeatures(): $EarsFeatures;
        get earsFeatures(): $EarsFeatures;
    }
    /**
     * Values that may be interpreted as {@link $EarsFeaturesHolder}.
     */
    export type $EarsFeaturesHolder_ = (() => $EarsFeatures);
}
