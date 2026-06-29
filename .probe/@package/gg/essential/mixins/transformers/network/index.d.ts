import { $Channel } from "@package/io/netty/channel";
import { $ProtocolInfo, $PacketListener } from "@package/net/minecraft/network";

declare module "@package/gg/essential/mixins/transformers/network" {
    export class $NetworkManagerAccessor {
    }
    export interface $NetworkManagerAccessor {
        getChannel(): $Channel;
        get channel(): $Channel;
    }
    /**
     * Values that may be interpreted as {@link $NetworkManagerAccessor}.
     */
    export type $NetworkManagerAccessor_ = (() => $Channel);
    export class $DecoderHandlerAccessor<T extends $PacketListener> {
    }
    export interface $DecoderHandlerAccessor<T extends $PacketListener> {
        getState(): $ProtocolInfo<T>;
        get state(): $ProtocolInfo<T>;
    }
    /**
     * Values that may be interpreted as {@link $DecoderHandlerAccessor}.
     */
    export type $DecoderHandlerAccessor_<T> = (() => $ProtocolInfo<T>);
}
