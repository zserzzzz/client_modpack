import { $SmartFluidTank } from "@package/com/simibubi/create/foundation/fluid";

declare module "@package/com/forsteri/createliquidfuel/core" {
    export class $IHasStomach {
    }
    export interface $IHasStomach {
        getCapability(): $SmartFluidTank;
        get capability(): $SmartFluidTank;
    }
    /**
     * Values that may be interpreted as {@link $IHasStomach}.
     */
    export type $IHasStomach_ = (() => $SmartFluidTank);
}
