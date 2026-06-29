import { $Function1_, $Function0 } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $MutableState, $State, $State_ } from "@package/gg/essential/gui/elementa/state/v2";
import { $ReferenceHolder_ } from "@package/gg/essential/elementa/state/v2";
import { $Continuation } from "@package/kotlin/coroutines";
import { $CoroutineDispatcher, $CoroutineScope } from "@package/kotlinx/coroutines";
import { $UUID, $Map_, $Set, $Set_ } from "@package/java/util";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $Instant } from "@package/java/time";
import { $MutableTrackedList, $TrackedList } from "@package/gg/essential/gui/elementa/state/v2/collections";
import { $Path } from "@package/java/nio/file";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Enum, $Object } from "@package/java/lang";
import { $Unit } from "@package/kotlin";

declare module "@package/gg/essential/sps" {
    export class $IntegratedServerManager$ServerResourcePack {
        getChecksum(): string;
        copy(arg0: string, arg1: string): $IntegratedServerManager$ServerResourcePack;
        static copy$default(arg0: $IntegratedServerManager$ServerResourcePack, arg1: string, arg2: string, arg3: number, arg4: $Object): $IntegratedServerManager$ServerResourcePack;
        getUrl(): string;
        component2(): string;
        component1(): string;
        constructor(arg0: string, arg1: string);
        get checksum(): string;
        get url(): string;
    }
    export class $IntegratedServerManager$Difficulty$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $IntegratedServerManager$SuspendingMutableState<T> {
        static access$onSetValue$jd(arg0: $IntegratedServerManager$SuspendingMutableState<any>, arg1: $ReferenceHolder_, arg2: $Function1_<any, any>): $Function0<any>;
        static access$getUntracked$jd(arg0: $IntegratedServerManager$SuspendingMutableState<any>): $Object;
        static access$set$jd(arg0: $IntegratedServerManager$SuspendingMutableState<any>, arg1: $Object, arg2: $Continuation<any>): $Object;
        static access$get$jd(arg0: $IntegratedServerManager$SuspendingMutableState<any>): $Object;
        static set$suspendImpl<T>(arg0: $IntegratedServerManager$SuspendingMutableState<T>, arg1: T, arg2: $Continuation<$Unit>): $Object;
    }
    export interface $IntegratedServerManager$SuspendingMutableState<T> extends $State<T> {
        set(arg0: $Function1_<T, T>, arg1: $Continuation<$Unit>): $Object;
        set(arg0: T, arg1: $Continuation<$Unit>): $Object;
    }
    export class $IntegratedServerManager$GameMode$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $IntegratedServerManager$Difficulty extends $Enum<$IntegratedServerManager$Difficulty> {
        static values(): $IntegratedServerManager$Difficulty[];
        static valueOf(arg0: string): $IntegratedServerManager$Difficulty;
        static getEntries(): $EnumEntries<$IntegratedServerManager$Difficulty>;
        static Companion: $IntegratedServerManager$Difficulty$Companion;
        static Easy: $IntegratedServerManager$Difficulty;
        static Peaceful: $IntegratedServerManager$Difficulty;
        static Hard: $IntegratedServerManager$Difficulty;
        static Normal: $IntegratedServerManager$Difficulty;
        static get entries(): $EnumEntries<$IntegratedServerManager$Difficulty>;
    }
    /**
     * Values that may be interpreted as {@link $IntegratedServerManager$Difficulty}.
     */
    export type $IntegratedServerManager$Difficulty_ = "peaceful" | "easy" | "normal" | "hard";
    export class $IntegratedServerManager {
    }
    export interface $IntegratedServerManager {
        getThirdPartyVoicePort(): $State<number>;
        getCoroutineScope(): $CoroutineScope;
        getServerPort(): $State<number>;
        getConnectedPlayers(): $State<$TrackedList<$UUID>>;
        getMaxPlayers(): $State<number>;
        getLastPlayed(): $Instant;
        getWhitelist(): $State<$Set<$UUID>>;
        getServerDispatcher(): $CoroutineDispatcher;
        setDifficultySource(arg0: $MutableState<$IntegratedServerManager$Difficulty_>): void;
        setDefaultGameModeSource(arg0: $MutableState<$IntegratedServerManager$GameMode_>): void;
        setCheatsEnabledSource(arg0: $State_<boolean>): void;
        getStatusResponseJson(): $State<string>;
        setDifficultyLockedSource(arg0: $MutableState<boolean>): void;
        setResourcePackSource(arg0: $State_<$IntegratedServerManager$ServerResourcePack>): void;
        setOpenToLanSource(arg0: $State_<boolean>): void;
        getWorldFolder(): $Path;
        getConnectedGuests(): $State<$TrackedList<$UUID>>;
        setGameRulesSource(arg0: $IntegratedServerManager$SuspendingMutableState<$Map_<string, string>>): void;
        setWhitelistSource(arg0: $State_<$Set<$UUID>>): void;
        setOpsSource(arg0: $State_<$Set<$UUID>>): void;
        get thirdPartyVoicePort(): $State<number>;
        get coroutineScope(): $CoroutineScope;
        get serverPort(): $State<number>;
        get connectedPlayers(): $State<$TrackedList<$UUID>>;
        get maxPlayers(): $State<number>;
        get lastPlayed(): $Instant;
        get whitelist(): $State<$Set<$UUID>>;
        get serverDispatcher(): $CoroutineDispatcher;
        set difficultySource(value: $MutableState<$IntegratedServerManager$Difficulty_>);
        set defaultGameModeSource(value: $MutableState<$IntegratedServerManager$GameMode_>);
        set cheatsEnabledSource(value: $State_<boolean>);
        get statusResponseJson(): $State<string>;
        set difficultyLockedSource(value: $MutableState<boolean>);
        set resourcePackSource(value: $State_<$IntegratedServerManager$ServerResourcePack>);
        set openToLanSource(value: $State_<boolean>);
        get worldFolder(): $Path;
        get connectedGuests(): $State<$TrackedList<$UUID>>;
        set gameRulesSource(value: $IntegratedServerManager$SuspendingMutableState<$Map_<string, string>>);
        set whitelistSource(value: $State_<$Set<$UUID>>);
        set opsSource(value: $State_<$Set<$UUID>>);
    }
    export class $McIntegratedServerManager implements $IntegratedServerManager {
        updateServerStatusResponse(statusJson: string): void;
        getServer(): $IntegratedServer;
        getCoroutineScope(): $CoroutineScope;
        getServerPort(): $MutableState<number>;
        getConnectedPlayers(): $MutableState<$MutableTrackedList<$UUID>>;
        getLastPlayed(): $Instant;
        getWhitelist(): $State<$Set<$UUID>>;
        getAppliedServerResourcePack(): ($IntegratedServerManager$ServerResourcePack) | undefined;
        isGameRulesControlledByState(): boolean;
        updateServerGameRules(): void;
        updateServerGameRules(changes: $Map_<string, string>): void;
        setGameRulesControlledByState(arg0: boolean): void;
        isDifficultyControlledByState(): boolean;
        setDifficultyControlledByState(arg0: boolean): void;
        isDefaultGameModeControlledByState(): boolean;
        static access$getGameRulesSourceState$p($this: $McIntegratedServerManager): $MutableState<any>;
        setAppliedServerResourcePack(arg0: ($IntegratedServerManager$ServerResourcePack) | undefined): void;
        getAppliedCheatsEnabled(): boolean;
        setDefaultGameModeControlledByState(arg0: boolean): void;
        static access$getMutableStatusResponseJson$p($this: $McIntegratedServerManager): $MutableState<any>;
        isDifficultyLockedControlledByState(): boolean;
        setDifficultyLockedControlledByState(arg0: boolean): void;
        getServerDispatcher(): $CoroutineDispatcher;
        setDifficultySource(source: $MutableState<$IntegratedServerManager$Difficulty_>): void;
        setDefaultGameModeSource(source: $MutableState<$IntegratedServerManager$GameMode_>): void;
        setCheatsEnabledSource(source: $State_<boolean>): void;
        getAppliedOpenToLan(): boolean;
        getStatusResponseJson(): $State<string>;
        setDifficultyLockedSource(source: $MutableState<boolean>): void;
        setResourcePackSource(source: $State_<$IntegratedServerManager$ServerResourcePack>): void;
        setAppliedCheatsEnabled(arg0: boolean): void;
        setAppliedOpenToLan(arg0: boolean): void;
        static access$applyWhitelist($this: $McIntegratedServerManager, desiredWhitelist: $Set_<any>, $completion: $Continuation<any>): $Object;
        static access$applyOps($this: $McIntegratedServerManager, desiredOps: $Set_<any>, $completion: $Continuation<any>): $Object;
        setOpenToLanSource(source: $State_<boolean>): void;
        getWorldFolder(): $Path;
        getConnectedGuests(): $State<$TrackedList<$UUID>>;
        setGameRulesSource(source: $IntegratedServerManager$SuspendingMutableState<$Map_<string, string>>): void;
        setWhitelistSource(source: $State_<$Set<$UUID>>): void;
        setOpsSource(source: $State_<$Set<$UUID>>): void;
        getThirdPartyVoicePort(): $State<number>;
        getMaxPlayers(): $State<number>;
        static Companion: $McIntegratedServerManager$Companion;
        constructor(server: $IntegratedServer);
        get server(): $IntegratedServer;
        get coroutineScope(): $CoroutineScope;
        get serverPort(): $MutableState<number>;
        get connectedPlayers(): $MutableState<$MutableTrackedList<$UUID>>;
        get lastPlayed(): $Instant;
        get whitelist(): $State<$Set<$UUID>>;
        get serverDispatcher(): $CoroutineDispatcher;
        set difficultySource(value: $MutableState<$IntegratedServerManager$Difficulty_>);
        set defaultGameModeSource(value: $MutableState<$IntegratedServerManager$GameMode_>);
        set cheatsEnabledSource(value: $State_<boolean>);
        get statusResponseJson(): $State<string>;
        set difficultyLockedSource(value: $MutableState<boolean>);
        set resourcePackSource(value: $State_<$IntegratedServerManager$ServerResourcePack>);
        set openToLanSource(value: $State_<boolean>);
        get worldFolder(): $Path;
        get connectedGuests(): $State<$TrackedList<$UUID>>;
        set gameRulesSource(value: $IntegratedServerManager$SuspendingMutableState<$Map_<string, string>>);
        set whitelistSource(value: $State_<$Set<$UUID>>);
        set opsSource(value: $State_<$Set<$UUID>>);
        get thirdPartyVoicePort(): $State<number>;
        get maxPlayers(): $State<number>;
    }
    export class $IntegratedServerManager$GameMode extends $Enum<$IntegratedServerManager$GameMode> {
        static values(): $IntegratedServerManager$GameMode[];
        static valueOf(arg0: string): $IntegratedServerManager$GameMode;
        static getEntries(): $EnumEntries<$IntegratedServerManager$GameMode>;
        static Companion: $IntegratedServerManager$GameMode$Companion;
        static Adventure: $IntegratedServerManager$GameMode;
        static Creative: $IntegratedServerManager$GameMode;
        static Spectator: $IntegratedServerManager$GameMode;
        static Survival: $IntegratedServerManager$GameMode;
        static get entries(): $EnumEntries<$IntegratedServerManager$GameMode>;
    }
    /**
     * Values that may be interpreted as {@link $IntegratedServerManager$GameMode}.
     */
    export type $IntegratedServerManager$GameMode_ = "survival" | "creative" | "adventure" | "spectator";
    export class $McIntegratedServerManager$Companion {
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
}
