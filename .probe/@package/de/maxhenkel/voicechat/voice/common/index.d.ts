import { $RawUdpPacket } from "@package/de/maxhenkel/voicechat/api";
import { $SecretKeySpec } from "@package/javax/crypto/spec";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $SocketAddress } from "@package/java/net";
import { $ClientConnection, $Server } from "@package/de/maxhenkel/voicechat/voice/server";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/de/maxhenkel/voicechat/voice/common" {
    export class $PingPacket implements $Packet<$PingPacket> {
        toBytes(arg0: $FriendlyByteBuf): void;
        getId(): $UUID;
        getTimestamp(): number;
        fromBytes(arg0: $FriendlyByteBuf): $PingPacket;
        getTTL(): number;
        constructor(arg0: $UUID_, arg1: number);
        constructor();
        get id(): $UUID;
        get timestamp(): number;
        get TTL(): number;
    }
    export class $MicPacket implements $Packet<$MicPacket> {
        toBytes(arg0: $FriendlyByteBuf): void;
        getData(): number[];
        fromBytes(arg0: $FriendlyByteBuf): $MicPacket;
        getSequenceNumber(): number;
        setData(arg0: number[]): void;
        isWhispering(): boolean;
        getTTL(): number;
        constructor(arg0: number[], arg1: boolean, arg2: number);
        constructor();
        get sequenceNumber(): number;
        get whispering(): boolean;
        get TTL(): number;
    }
    export class $PlayerState {
        setGroup(arg0: $UUID_ | null): void;
        getName(): string;
        toBytes(arg0: $FriendlyByteBuf): void;
        setName(arg0: string): void;
        static fromBytes(arg0: $FriendlyByteBuf): $PlayerState;
        getGroup(): $UUID;
        isDisabled(): boolean;
        isDisconnected(): boolean;
        getUuid(): $UUID;
        hasGroup(): boolean;
        setUuid(arg0: $UUID_): void;
        setDisabled(arg0: boolean): void;
        setDisconnected(arg0: boolean): void;
        constructor(arg0: $UUID_, arg1: string, arg2: boolean, arg3: boolean);
    }
    export class $Packet<T extends $Packet<any>> {
    }
    export interface $Packet<T extends $Packet<any>> {
        toBytes(arg0: $FriendlyByteBuf): void;
        fromBytes(arg0: $FriendlyByteBuf): T;
        getTTL(): number;
        get TTL(): number;
    }
    export class $Secret {
        getKeySpec(): $SecretKeySpec;
        decrypt(arg0: number[]): number[];
        encrypt(arg0: number[]): number[];
        toBytes(arg0: $ByteBuf): void;
        static fromBytes(arg0: number[]): $Secret;
        static fromBytes(arg0: $ByteBuf): $Secret;
        getSecret(): number[];
        static generateIV(): number[];
        static generateNewRandomSecret(): $Secret;
        static IV_SIZE_BYTES: number;
        static CIPHER: string;
        static SECRET_SIZE_BYTES: number;
        static TAG_LEN_BITS: number;
        get keySpec(): $SecretKeySpec;
        get secret(): number[];
    }
    export class $SoundPacket<T extends $SoundPacket<any>> implements $Packet<T> {
        getData(): number[];
        getSender(): $UUID;
        getSequenceNumber(): number;
        getCategory(): string;
        getChannelId(): $UUID;
        isFromClientAudioChannel(): boolean;
        getTTL(): number;
        static WHISPER_MASK: number;
        static HAS_CATEGORY_MASK: number;
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: number[], arg3: number, arg4: string | null);
        constructor();
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: number[], arg3: string | null);
        get data(): number[];
        get sender(): $UUID;
        get sequenceNumber(): number;
        get category(): string;
        get channelId(): $UUID;
        get fromClientAudioChannel(): boolean;
        get TTL(): number;
    }
    export class $NetworkMessage {
        write(arg0: $Secret): number[];
        getAddress(): $SocketAddress;
        getTimestamp(): number;
        getPacket(): $Packet<$Packet<any>>;
        static readPacketServer(arg0: $RawUdpPacket, arg1: $Server): $NetworkMessage;
        getTTL(): number;
        writeServer(arg0: $Server, arg1: $ClientConnection): number[];
        static readFromBytes(arg0: $SocketAddress, arg1: $Secret, arg2: number[], arg3: number): $NetworkMessage;
        static MAGIC_BYTE: number;
        constructor(arg0: $Packet<never>);
        constructor(arg0: number, arg1: $Packet<never>);
        get address(): $SocketAddress;
        get timestamp(): number;
        get packet(): $Packet<$Packet<any>>;
        get TTL(): number;
    }
}
