import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $VoicechatSocket, $Group$Type } from "@package/de/maxhenkel/voicechat/api";
import { $SocketAddress } from "@package/java/net";
import { $Packet, $Secret, $NetworkMessage, $MicPacket, $PingPacket, $SoundPacket, $ClientGroup, $PlayerState } from "@package/de/maxhenkel/voicechat/voice/common";
import { $Thread } from "@package/java/lang";
import { $UUID, $Map, $UUID_, $Collection_, $Collection } from "@package/java/util";
import { $CategoryManager } from "@package/de/maxhenkel/voicechat/plugins";

declare module "@package/de/maxhenkel/voicechat/voice/server" {
    export class $PingManager$PingListener {
    }
    export interface $PingManager$PingListener {
        onTimeout(arg0: number): void;
        onPong(arg0: number, arg1: number): void;
        onFailedAttempt(arg0: number): void;
    }
    export class $Server extends $Thread {
        isClosed(): boolean;
        getConnection(arg0: $UUID_): $ClientConnection;
        close(): void;
        getPort(): number;
        broadcast(arg0: $Collection_<$ServerPlayer>, arg1: $SoundPacket<never>, arg2: $ServerPlayer | null, arg3: $PlayerState | null, arg4: $UUID_ | null, arg5: string): void;
        onPlayerShow(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        getBroadcastRange(arg0: number): number;
        onPlayerHide(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        sendPacket(arg0: $Packet<never>, arg1: $ClientConnection): boolean;
        getSender(arg0: $NetworkMessage): $ClientConnection;
        getPlayerStateManager(): $PlayerStateManager;
        getSecret(arg0: $UUID_): $Secret;
        getConnections(): $Map<$UUID, $ClientConnection>;
        getServer(): $MinecraftServer;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        changePort(arg0: number): void;
        getSocket(): $VoicechatSocket;
        onPlayerLoggedIn(arg0: $ServerPlayer): void;
        onMicPacket(arg0: $UUID_, arg1: $MicPacket): void;
        generateNewSecret(arg0: $UUID_): $Secret;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        getGroupManager(): $ServerGroupManager;
        onPlayerVoicechatConnect(arg0: $ServerPlayer): void;
        sendSoundPacket(arg0: $ServerPlayer | null, arg1: $PlayerState | null, arg2: $ServerPlayer, arg3: $PlayerState, arg4: $ClientConnection | null, arg5: $SoundPacket<never>, arg6: string): void;
        getCategoryManager(): $ServerCategoryManager;
        getPingManager(): $PingManager;
        onPlayerVoicechatDisconnect(arg0: $UUID_): void;
        hasSecret(arg0: $UUID_): boolean;
        disconnectClient(arg0: $UUID_): void;
        sendPacketRaw(arg0: $Packet<never>, arg1: $ClientConnection): void;
        getUnconnectedSender(arg0: $NetworkMessage): $ClientConnection;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $MinecraftServer);
        get closed(): boolean;
        get port(): number;
        get playerStateManager(): $PlayerStateManager;
        get connections(): $Map<$UUID, $ClientConnection>;
        get server(): $MinecraftServer;
        get socket(): $VoicechatSocket;
        get groupManager(): $ServerGroupManager;
        get categoryManager(): $ServerCategoryManager;
        get pingManager(): $PingManager;
    }
    export class $PingManager {
        sendPing(arg0: $ClientConnection, arg1: number, arg2: number, arg3: $PingManager$PingListener): void;
        checkTimeouts(): void;
        onPongPacket(arg0: $PingPacket): void;
        constructor(arg0: $Server);
    }
    export class $PlayerStateManager {
        setGroup(arg0: $ServerPlayer, arg1: $UUID_ | null): void;
        getState(arg0: $UUID_): $PlayerState;
        onPlayerShow(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerHide(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        getStates(): $Collection<$PlayerState>;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerLoggedIn(arg0: $ServerPlayer): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        onPlayerVoicechatConnect(arg0: $ServerPlayer): void;
        onPlayerVoicechatDisconnect(arg0: $UUID_): void;
        broadcastState(arg0: $ServerPlayer | null, arg1: $PlayerState): void;
        broadcastRemoveState(arg0: $ServerPlayer): void;
        static defaultDisconnectedState(arg0: $ServerPlayer): $PlayerState;
        constructor(arg0: $Server);
        get states(): $Collection<$PlayerState>;
    }
    export class $ClientConnection {
        getPlayerUUID(): $UUID;
        getAddress(): $SocketAddress;
        send(arg0: $Server, arg1: $NetworkMessage): void;
        setLastKeepAliveResponse(arg0: number): void;
        getLastKeepAliveResponse(): number;
        constructor(arg0: $UUID_, arg1: $SocketAddress);
        get playerUUID(): $UUID;
        get address(): $SocketAddress;
    }
    export class $ServerCategoryManager extends $CategoryManager {
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        constructor(arg0: $Server);
    }
    export class $ServerGroupManager {
        removeGroup(arg0: $UUID_): boolean;
        leaveGroup(arg0: $ServerPlayer): void;
        getGroup(arg0: $UUID_): $Group;
        getGroups(): $Map<$UUID, $Group>;
        addGroup(arg0: $Group, arg1: $ServerPlayer | null): void;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        getPlayerGroup(arg0: $ServerPlayer): $Group;
        cleanupGroups(): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        joinGroup(arg0: $Group | null, arg1: $ServerPlayer, arg2: string | null): void;
        constructor(arg0: $Server);
        get groups(): $Map<$UUID, $Group>;
    }
    export class $Group {
        isPersistent(): boolean;
        getPassword(): string;
        getName(): string;
        isHidden(): boolean;
        isOpen(): boolean;
        getId(): $UUID;
        getType(): $Group$Type;
        isNormal(): boolean;
        toClientGroup(): $ClientGroup;
        isIsolated(): boolean;
        constructor();
        constructor(arg0: $UUID_, arg1: string, arg2: string | null, arg3: boolean, arg4: boolean, arg5: $Group$Type);
        constructor(arg0: $UUID_, arg1: string, arg2: string | null);
        constructor(arg0: $UUID_, arg1: string);
        constructor(arg0: $UUID_, arg1: string, arg2: string | null, arg3: boolean);
        get persistent(): boolean;
        get password(): string;
        get name(): string;
        get hidden(): boolean;
        get open(): boolean;
        get id(): $UUID;
        get type(): $Group$Type;
        get normal(): boolean;
        get isolated(): boolean;
    }
}
