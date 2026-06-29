import { $LerpedFloat } from "@package/net/createmod/catnip/animation";

declare module "@package/com/hlysine/create_connected/mixin/linkedtransmitter" {
    export class $AnalogLeverBlockEntityAccessor {
    }
    export interface $AnalogLeverBlockEntityAccessor {
        getLastChange(): number;
        getClientState(): $LerpedFloat;
        get lastChange(): number;
        get clientState(): $LerpedFloat;
    }
}
