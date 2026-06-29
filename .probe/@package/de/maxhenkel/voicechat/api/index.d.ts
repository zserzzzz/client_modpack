import { $SocketAddress } from "@package/java/net";
export * as opus from "@package/de/maxhenkel/voicechat/api/opus";

declare module "@package/de/maxhenkel/voicechat/api" {
    export class $ClientVoicechatSocket {
    }
    export interface $ClientVoicechatSocket {
        isClosed(): boolean;
        read(): $RawUdpPacket;
        close(): void;
        open(): void;
        send(arg0: number[], arg1: $SocketAddress): void;
        get closed(): boolean;
    }
    export class $RawUdpPacket {
    }
    export interface $RawUdpPacket {
        getData(): number[];
        getTimestamp(): number;
        getSocketAddress(): $SocketAddress;
        get data(): number[];
        get timestamp(): number;
        get socketAddress(): $SocketAddress;
    }
    export class $VoicechatSocket {
    }
    export interface $VoicechatSocket {
        isClosed(): boolean;
        getLocalPort(): number;
        read(): $RawUdpPacket;
        close(): void;
        open(arg0: number, arg1: string): void;
        send(arg0: number[], arg1: $SocketAddress): void;
        get closed(): boolean;
        get localPort(): number;
    }
}
