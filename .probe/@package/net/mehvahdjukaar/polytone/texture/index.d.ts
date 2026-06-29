import { $Codec } from "@package/com/mojang/serialization";

declare module "@package/net/mehvahdjukaar/polytone/texture" {
    export class $IDeltaProvider {
        static CODEC: $Codec<$IDeltaProvider>;
    }
    export interface $IDeltaProvider {
        getDelta(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $IDeltaProvider}.
     */
    export type $IDeltaProvider_ = ((arg0: number) => number);
    export class $IDeltaProviderContext {
    }
    export interface $IDeltaProviderContext {
        polytone$setTimeCycleDuration(arg0: number): void;
        polytone$getTimeCycleDuration(): number;
        polytone$setMode(arg0: $IDeltaProvider_): void;
        polytone$getMode(): $IDeltaProvider;
    }
}
