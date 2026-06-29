import { $Function1_, $Function0 } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $MutableState, $State, $State_ } from "@package/gg/essential/gui/elementa/state/v2";
import { $ReferenceHolder_ } from "@package/gg/essential/elementa/state/v2";
import { $Continuation } from "@package/kotlin/coroutines";
import { $CoroutineDispatcher, $CoroutineScope } from "@package/kotlinx/coroutines";
import { $UUID, $Map_, $Set, $Set_ } from "@package/java/util";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $Instant } from "@package/java/time";
import { $TrackedList } from "@package/gg/essential/gui/elementa/state/v2/collections";
import { $Path } from "@package/java/nio/file";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Enum, $Object } from "@package/java/lang";
import { $Unit } from "@package/kotlin";

declare module "@package/gg/essential/sps" {
    export class $IntegratedServerManager$ServerResourcePack {
        getChecksum(): string;
        static copy$default(arg0: $IntegratedServerManager$ServerResourcePack, arg1: string, arg2: string, arg3: number, arg4: $Object): $IntegratedServerManager$ServerResourcePack;
        copy(arg0: string, arg1: string): $IntegratedServerManager$ServerResourcePack;
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
        static access$set$jd(arg0: $IntegratedServerManager$SuspendingMutableState<any>, arg1: $Object, arg2: $Continuation<any>): $Object;
        static set$suspendImpl<T>(arg0: $IntegratedServerManager$SuspendingMutableState<T>, arg1: T, arg2: $Continuation<$Unit>): $Object;
        static access$get$jd(arg0: $IntegratedServerManager$SuspendingMutableState<any>): $Object;
        static access$getUntracked$jd(arg0: $IntegratedServerManager$SuspendingMutableState<any>): $Object;
        static access$onSetValue$jd(arg0: $IntegratedServerManager$SuspendingMutableState<any>, arg1: $ReferenceHolder_, arg2: $Function1_<any, any>): $Function0<any>;
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
        getCoroutineScope(): $CoroutineScope;
        getWhitelist(): $State<$Set<$UUID>>;
        getLastPlayed(): $Instant;
        getThirdPartyVoicePort(): $State<number>;
        getConnectedPlayers(): $State<$TrackedList<$UUID>>;
        setCheatsEnabledSource(arg0: $State_<boolean>): void;
        setResourcePackSource(arg0: $State_<$IntegratedServerManager$ServerResourcePack>): void;
        setDifficultySource(arg0: $MutableState<$IntegratedServerManager$Difficulty_>): void;
        setDifficultyLockedSource(arg0: $MutableState<boolean>): void;
        setDefaultGameModeSource(arg0: $MutableState<$IntegratedServerManager$GameMode_>): void;
        getServerDispatcher(): $CoroutineDispatcher;
        getStatusResponseJson(): $State<string>;
        getMaxPlayers(): $State<number>;
        getServerPort(): $State<number>;
        getWorldFolder(): $Path;
        setGameRulesSource(arg0: $IntegratedServerManager$SuspendingMutableState<$Map_<string, string>>): void;
        getConnectedGuests(): $State<$TrackedList<$UUID>>;
        setOpenToLanSource(arg0: $State_<boolean>): void;
        setWhitelistSource(arg0: $State_<$Set<$UUID>>): void;
        setOpsSource(arg0: $State_<$Set<$UUID>>): void;
        get coroutineScope(): $CoroutineScope;
        get whitelist(): $State<$Set<$UUID>>;
        get lastPlayed(): $Instant;
        get thirdPartyVoicePort(): $State<number>;
        get connectedPlayers(): $State<$TrackedList<$UUID>>;
        set cheatsEnabledSource(value: $State_<boolean>);
        set resourcePackSource(value: $State_<$IntegratedServerManager$ServerResourcePack>);
        set difficultySource(value: $MutableState<$IntegratedServerManager$Difficulty_>);
        set difficultyLockedSource(value: $MutableState<boolean>);
        set defaultGameModeSource(value: $MutableState<$IntegratedServerManager$GameMode_>);
        get serverDispatcher(): $CoroutineDispatcher;
        get statusResponseJson(): $State<string>;
        get maxPlayers(): $State<number>;
        get serverPort(): $State<number>;
        get worldFolder(): $Path;
        set gameRulesSource(value: $IntegratedServerManager$SuspendingMutableState<$Map_<string, string>>);
        get connectedGuests(): $State<$TrackedList<$UUID>>;
        set openToLanSource(value: $State_<boolean>);
        set whitelistSource(value: $State_<$Set<$UUID>>);
        set opsSource(value: $State_<$Set<$UUID>>);
    }
    export class $McIntegratedServerManager implements $IntegratedServerManager {
        getCoroutineScope(): $CoroutineScope;
        getWhitelist(): $State<$Set<$UUID>>;
        isGameRulesControlledByState(): boolean;
        getAppliedServerResourcePack(): ($IntegratedServerManager$ServerResourcePack) | undefined;
        getLastPlayed(): $Instant;
        updateServerStatusResponse(statusJson: string): void;
        getServer(): $IntegratedServer;
        setCheatsEnabledSource(source: $State_<boolean>): void;
        setResourcePackSource(source: $State_<$IntegratedServerManager$ServerResourcePack>): void;
        setDifficultySource(source: $MutableState<$IntegratedServerManager$Difficulty_>): void;
        setDifficultyLockedSource(source: $MutableState<boolean>): void;
        setDefaultGameModeSource(source: $MutableState<$IntegratedServerManager$GameMode_>): void;
        setAppliedCheatsEnabled(arg0: boolean): void;
        getServerDispatcher(): $CoroutineDispatcher;
        static access$applyWhitelist($this: $McIntegratedServerManager, desiredWhitelist: $Set_<any>, $completion: $Continuation<any>): $Object;
        getStatusResponseJson(): $State<string>;
        getAppliedOpenToLan(): boolean;
        setAppliedOpenToLan(arg0: boolean): void;
        getServerPort(): $MutableState<number>;
        updateServerGameRules(): void;
        updateServerGameRules(changes: $Map_<string, string>): void;
        getWorldFolder(): $Path;
        setGameRulesSource(source: $IntegratedServerManager$SuspendingMutableState<$Map_<string, string>>): void;
        getConnectedGuests(): $State<$TrackedList<$UUID>>;
        static access$applyOps($this: $McIntegratedServerManager, desiredOps: $Set_<any>, $completion: $Continuation<any>): $Object;
        setOpenToLanSource(source: $State_<boolean>): void;
        setWhitelistSource(source: $State_<$Set<$UUID>>): void;
        setOpsSource(source: $State_<$Set<$UUID>>): void;
        getAppliedCheatsEnabled(): boolean;
        isDifficultyControlledByState(): boolean;
        setGameRulesControlledByState(arg0: boolean): void;
        setAppliedServerResourcePack(arg0: ($IntegratedServerManager$ServerResourcePack) | undefined): void;
        static access$getGameRulesSourceState$p($this: $McIntegratedServerManager): $MutableState<any>;
        setDifficultyControlledByState(arg0: boolean): void;
        isDefaultGameModeControlledByState(): boolean;
        setDifficultyLockedControlledByState(arg0: boolean): void;
        static access$getMutableStatusResponseJson$p($this: $McIntegratedServerManager): $MutableState<any>;
        isDifficultyLockedControlledByState(): boolean;
        setDefaultGameModeControlledByState(arg0: boolean): void;
        getThirdPartyVoicePort(): $State<number>;
        getConnectedPlayers(): $State<$TrackedList<$UUID>>;
        getMaxPlayers(): $State<number>;
        static Companion: $McIntegratedServerManager$Companion;
        constructor(server: $IntegratedServer);
        get coroutineScope(): $CoroutineScope;
        get whitelist(): $State<$Set<$UUID>>;
        get lastPlayed(): $Instant;
        get server(): $IntegratedServer;
        set cheatsEnabledSource(value: $State_<boolean>);
        set resourcePackSource(value: $State_<$IntegratedServerManager$ServerResourcePack>);
        set difficultySource(value: $MutableState<$IntegratedServerManager$Difficulty_>);
        set difficultyLockedSource(value: $MutableState<boolean>);
        set defaultGameModeSource(value: $MutableState<$IntegratedServerManager$GameMode_>);
        get serverDispatcher(): $CoroutineDispatcher;
        get statusResponseJson(): $State<string>;
        get serverPort(): $MutableState<number>;
        get worldFolder(): $Path;
        set gameRulesSource(value: $IntegratedServerManager$SuspendingMutableState<$Map_<string, string>>);
        get connectedGuests(): $State<$TrackedList<$UUID>>;
        set openToLanSource(value: $State_<boolean>);
        set whitelistSource(value: $State_<$Set<$UUID>>);
        set opsSource(value: $State_<$Set<$UUID>>);
        get thirdPartyVoicePort(): $State<number>;
        get connectedPlayers(): $State<$TrackedList<$UUID>>;
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
