import { $SocketAddress } from "@package/java/net";

declare module "@package/gg/essential/mixins/ext/network" {
    export class $NetworkSystemExt {
    }
    export interface $NetworkSystemExt {
        essential$getIceEndpoint(): $SocketAddress;
    }
    /**
     * Values that may be interpreted as {@link $NetworkSystemExt}.
     */
    export type $NetworkSystemExt_ = (() => $SocketAddress);
}
