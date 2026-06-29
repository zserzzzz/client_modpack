import { $DataComponentPatch_, $DataComponentMap, $DataComponentPatch } from "@package/net/minecraft/core/component";

declare module "@package/net/fabricmc/fabric/api/transfer/v1/storage" {
    export class $TransferVariant<O> {
    }
    export interface $TransferVariant<O> {
        isBlank(): boolean;
        getObject(): O;
        getComponentMap(): $DataComponentMap;
        hasComponents(): boolean;
        componentsMatch(arg0: $DataComponentPatch_): boolean;
        getComponents(): $DataComponentPatch;
        isOf(arg0: O): boolean;
        withComponentChanges(arg0: $DataComponentPatch_): $TransferVariant<O>;
        get blank(): boolean;
        get object(): O;
        get componentMap(): $DataComponentMap;
        get components(): $DataComponentPatch;
    }
}
