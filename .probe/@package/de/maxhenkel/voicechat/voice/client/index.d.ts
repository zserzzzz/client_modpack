import { $IOException } from "@package/java/io";
import { $Executor_, $BlockingQueue } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $List, $Map, $UUID_ } from "@package/java/util";
import { $SecretPacket } from "@package/de/maxhenkel/voicechat/net";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $Speaker } from "@package/de/maxhenkel/voicechat/voice/client/speaker";
import { $ClientVoicechatSocket } from "@package/de/maxhenkel/voicechat/api";
import { $ALCCapabilities, $ALCapabilities } from "@package/org/lwjgl/openal";
import { $Path_, $Path } from "@package/java/nio/file";
import { $InetAddress } from "@package/java/net";
import { $ServerConfig$Codec } from "@package/de/maxhenkel/voicechat/config";
import { $Secret, $NetworkMessage, $SoundPacket } from "@package/de/maxhenkel/voicechat/voice/common";
import { $Thread, $Runnable_, $Exception } from "@package/java/lang";
export * as speaker from "@package/de/maxhenkel/voicechat/voice/client/speaker";

declare module "@package/de/maxhenkel/voicechat/voice/client" {
    export class $ClientVoicechat {
        getConnection(): $ClientVoicechatConnection;
        connect(arg0: $InitializationData): void;
        close(): void;
        getRecorder(): $AudioRecorder;
        getStartTime(): number;
        setRecording(arg0: boolean): boolean;
        getSoundManager(): $SoundManager;
        getTalkCache(): $TalkCache;
        onVoiceChatDisconnected(): void;
        onVoiceChatConnected(arg0: $ClientVoicechatConnection): void;
        toggleRecording(): boolean;
        closeAudioChannel(arg0: $UUID_): boolean;
        getMicThread(): $MicThread;
        processSoundPacket(arg0: $SoundPacket<any>): void;
        getAudioChannels(): $Map<$UUID, $AudioChannel>;
        getInitializationData(): $InitializationData;
        closeMicThread(): void;
        reloadSoundManager(): void;
        reloadAudio(): void;
        constructor();
        get connection(): $ClientVoicechatConnection;
        get recorder(): $AudioRecorder;
        get startTime(): number;
        set recording(value: boolean);
        get soundManager(): $SoundManager;
        get talkCache(): $TalkCache;
        get micThread(): $MicThread;
        get audioChannels(): $Map<$UUID, $AudioChannel>;
        get initializationData(): $InitializationData;
    }
    export class $AudioChannel extends $Thread {
        isClosed(): boolean;
        getQueue(): $BlockingQueue<$SoundPacket<never>>;
        getChannelId(): $UUID;
        addToQueue(arg0: $SoundPacket<never>): void;
        getPacketBuffer(): $AudioPacketBuffer;
        canKill(): boolean;
        closeAndKill(): void;
        getSpeaker(): $Speaker;
        getLostPackets(): number;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData, arg2: $UUID_);
        get closed(): boolean;
        get queue(): $BlockingQueue<$SoundPacket<never>>;
        get channelId(): $UUID;
        get packetBuffer(): $AudioPacketBuffer;
        get speaker(): $Speaker;
        get lostPackets(): number;
    }
    export class $AudioRecorder {
        getLocation(): $Path;
        close(): void;
        static create(): $AudioRecorder;
        getDuration(arg0: number): string;
        getDuration(): string;
        getStorage(): string;
        getStorage(arg0: number): string;
        getStartTime(): number;
        saveAndClose(): void;
        appendChunk(arg0: $UUID_, arg1: number, arg2: number[]): void;
        flushChunkThreaded(arg0: $UUID_): void;
        getRecordedPlayerCount(): number;
        constructor(arg0: $Path_, arg1: number);
        get location(): $Path;
        get startTime(): number;
        get recordedPlayerCount(): number;
    }
    export class $InitializationData {
        getCodec(): $ServerConfig$Codec;
        getKeepAlive(): number;
        getPlayerUUID(): $UUID;
        getSecret(): $Secret;
        getServerPort(): number;
        getVoiceChatDistance(): number;
        groupsEnabled(): boolean;
        allowRecording(): boolean;
        getServerIP(): string;
        getMtuSize(): number;
        constructor(arg0: string, arg1: $SecretPacket);
        get codec(): $ServerConfig$Codec;
        get keepAlive(): number;
        get playerUUID(): $UUID;
        get secret(): $Secret;
        get serverPort(): number;
        get voiceChatDistance(): number;
        get serverIP(): string;
        get mtuSize(): number;
    }
    export class $MicrophoneException extends $IOException {
        constructor(arg0: string);
        constructor(arg0: $Exception);
    }
    export class $AudioPacketBuffer {
        clear(): void;
        getSize(): number;
        poll(arg0: $BlockingQueue<$SoundPacket<never>>): $SoundPacket<never>;
        constructor(arg0: number);
        get size(): number;
    }
    export class $SoundManager {
        isClosed(): boolean;
        close(): void;
        static create(): $SoundManager;
        static create(arg0: string | null): $SoundManager;
        getMaxGain(): number;
        static getAlError(arg0: number): string;
        openContext(): boolean;
        static canEnumerateAll(): boolean;
        static checkAlcError(arg0: number): boolean;
        closeContext(): void;
        static checkAlError(): boolean;
        static getAllSpeakers(): $List<string>;
        static cleanDeviceName(arg0: string): string;
        static canEnumerate(): boolean;
        static getAlcError(arg0: number): string;
        runInContext(arg0: $Executor_, arg1: $Runnable_): void;
        constructor(arg0: string | null, arg1: number, arg2: number, arg3: $ALCCapabilities, arg4: $ALCapabilities, arg5: number);
        get closed(): boolean;
        get maxGain(): number;
        static get allSpeakers(): $List<string>;
    }
    export class $TalkCache {
        isWhispering(arg0: $Entity): boolean;
        isWhispering(arg0: $UUID_): boolean;
        isTalking(arg0: $Entity): boolean;
        isTalking(arg0: $UUID_): boolean;
        updateLevel(arg0: $UUID_, arg1: string | null, arg2: boolean, arg3: number[]): void;
        updateCategoryVolume(arg0: string, arg1: number): void;
        setTimestampSupplier(arg0: $Supplier_<number>): void;
        getPlayerAudioLevel(arg0: $UUID_): number;
        getCategoryAudioLevel(arg0: string): number;
        /**
         * @deprecated
         */
        updateTalking(arg0: $UUID_, arg1: boolean): void;
        constructor();
        set timestampSupplier(value: $Supplier_<number>);
    }
    export class $ClientVoicechatConnection extends $Thread {
        isConnected(): boolean;
        close(): void;
        getAddress(): $InetAddress;
        getData(): $InitializationData;
        getSocket(): $ClientVoicechatSocket;
        disconnect(): void;
        isInitialized(): boolean;
        sendToServer(arg0: $NetworkMessage): boolean;
        checkTimeout(): void;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData);
        get connected(): boolean;
        get address(): $InetAddress;
        get data(): $InitializationData;
        get socket(): $ClientVoicechatSocket;
        get initialized(): boolean;
    }
    export class $MicThread extends $Thread {
        getError(arg0: $Consumer_<$MicrophoneException>): void;
        isClosed(): boolean;
        close(): void;
        isWhispering(): boolean;
        isTalking(): boolean;
        shouldTransmitAudio(): boolean;
        setMicrophoneLocked(arg0: boolean): void;
        pollProcessedAudio(arg0: boolean): number[];
        pollMic(): number[];
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat | null, arg1: $ClientVoicechatConnection | null, arg2: $Consumer_<$MicrophoneException>);
        get closed(): boolean;
        get whispering(): boolean;
        get talking(): boolean;
        set microphoneLocked(value: boolean);
    }
}
