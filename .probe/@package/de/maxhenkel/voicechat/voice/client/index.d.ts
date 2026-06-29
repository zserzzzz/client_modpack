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
        setRecording(arg0: boolean): boolean;
        getStartTime(): number;
        onVoiceChatConnected(arg0: $ClientVoicechatConnection): void;
        onVoiceChatDisconnected(): void;
        getSoundManager(): $SoundManager;
        closeAudioChannel(arg0: $UUID_): boolean;
        getTalkCache(): $TalkCache;
        processSoundPacket(arg0: $SoundPacket<any>): void;
        toggleRecording(): boolean;
        getAudioChannels(): $Map<$UUID, $AudioChannel>;
        getMicThread(): $MicThread;
        getInitializationData(): $InitializationData;
        reloadAudio(): void;
        reloadSoundManager(): void;
        closeMicThread(): void;
        constructor();
        get connection(): $ClientVoicechatConnection;
        get recorder(): $AudioRecorder;
        set recording(value: boolean);
        get startTime(): number;
        get soundManager(): $SoundManager;
        get talkCache(): $TalkCache;
        get audioChannels(): $Map<$UUID, $AudioChannel>;
        get micThread(): $MicThread;
        get initializationData(): $InitializationData;
    }
    export class $AudioChannel extends $Thread {
        isClosed(): boolean;
        getQueue(): $BlockingQueue<$SoundPacket<never>>;
        addToQueue(arg0: $SoundPacket<never>): void;
        getPacketBuffer(): $AudioPacketBuffer;
        getChannelId(): $UUID;
        canKill(): boolean;
        getLostPackets(): number;
        closeAndKill(): void;
        getSpeaker(): $Speaker;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData, arg2: $UUID_);
        get closed(): boolean;
        get queue(): $BlockingQueue<$SoundPacket<never>>;
        get packetBuffer(): $AudioPacketBuffer;
        get channelId(): $UUID;
        get lostPackets(): number;
        get speaker(): $Speaker;
    }
    export class $AudioRecorder {
        getLocation(): $Path;
        close(): void;
        static create(): $AudioRecorder;
        getDuration(arg0: number): string;
        getDuration(): string;
        getStartTime(): number;
        saveAndClose(): void;
        getStorage(arg0: number): string;
        getStorage(): string;
        flushChunkThreaded(arg0: $UUID_): void;
        appendChunk(arg0: $UUID_, arg1: number, arg2: number[]): void;
        getRecordedPlayerCount(): number;
        constructor(arg0: $Path_, arg1: number);
        get location(): $Path;
        get startTime(): number;
        get recordedPlayerCount(): number;
    }
    export class $InitializationData {
        getMtuSize(): number;
        getPlayerUUID(): $UUID;
        getKeepAlive(): number;
        getCodec(): $ServerConfig$Codec;
        getVoiceChatDistance(): number;
        getSecret(): $Secret;
        getServerIP(): string;
        allowRecording(): boolean;
        groupsEnabled(): boolean;
        getServerPort(): number;
        constructor(arg0: string, arg1: $SecretPacket);
        get mtuSize(): number;
        get playerUUID(): $UUID;
        get keepAlive(): number;
        get codec(): $ServerConfig$Codec;
        get voiceChatDistance(): number;
        get secret(): $Secret;
        get serverIP(): string;
        get serverPort(): number;
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
        static canEnumerateAll(): boolean;
        static checkAlcError(arg0: number): boolean;
        runInContext(arg0: $Executor_, arg1: $Runnable_): void;
        static cleanDeviceName(arg0: string): string;
        static checkAlError(): boolean;
        static getAllSpeakers(): $List<string>;
        closeContext(): void;
        openContext(): boolean;
        static canEnumerate(): boolean;
        static getAlcError(arg0: number): string;
        constructor(arg0: string | null, arg1: number, arg2: number, arg3: $ALCCapabilities, arg4: $ALCapabilities, arg5: number);
        get closed(): boolean;
        get maxGain(): number;
        static get allSpeakers(): $List<string>;
    }
    export class $TalkCache {
        isTalking(arg0: $Entity): boolean;
        isTalking(arg0: $UUID_): boolean;
        isWhispering(arg0: $UUID_): boolean;
        isWhispering(arg0: $Entity): boolean;
        updateCategoryVolume(arg0: string, arg1: number): void;
        updateLevel(arg0: $UUID_, arg1: string | null, arg2: boolean, arg3: number[]): void;
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
        disconnect(): void;
        isConnected(): boolean;
        close(): void;
        getAddress(): $InetAddress;
        getData(): $InitializationData;
        isInitialized(): boolean;
        sendToServer(arg0: $NetworkMessage): boolean;
        getSocket(): $ClientVoicechatSocket;
        checkTimeout(): void;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData);
        get connected(): boolean;
        get address(): $InetAddress;
        get data(): $InitializationData;
        get initialized(): boolean;
        get socket(): $ClientVoicechatSocket;
    }
    export class $MicThread extends $Thread {
        isClosed(): boolean;
        close(): void;
        getError(arg0: $Consumer_<$MicrophoneException>): void;
        isTalking(): boolean;
        isWhispering(): boolean;
        shouldTransmitAudio(): boolean;
        pollMic(): number[];
        pollProcessedAudio(arg0: boolean): number[];
        setMicrophoneLocked(arg0: boolean): void;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat | null, arg1: $ClientVoicechatConnection | null, arg2: $Consumer_<$MicrophoneException>);
        get closed(): boolean;
        get talking(): boolean;
        get whispering(): boolean;
        set microphoneLocked(value: boolean);
    }
}
