import { $Level_ } from "@package/net/minecraft/world/level";
import { $ToIntFunction } from "@package/java/util/function";
import { $TagKey } from "@package/net/minecraft/tags";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $GameEventListener, $PositionSource, $GameEvent, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $Record } from "@package/java/lang";
import { $UUID, $List, $UUID_ } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/gameevent/vibrations" {
    export class $VibrationSystem$User {
    }
    export interface $VibrationSystem$User {
        getListenableEvents(): $TagKey<$GameEvent>;
        calculateTravelTimeInTicks(distance: number): number;
        canTriggerAvoidVibration(): boolean;
        canReceiveVibration(level: $ServerLevel, pos: $BlockPos_, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_): boolean;
        getPositionSource(): $PositionSource;
        onDataChanged(): void;
        isValidVibration(gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_): boolean;
        getListenerRadius(): number;
        onReceiveVibration(level: $ServerLevel, pos: $BlockPos_, gameEvent: $Holder_<$GameEvent>, entity: $Entity | null, playerEntity: $Entity | null, distance: number): void;
        requiresAdjacentChunksToBeTicking(): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
        get positionSource(): $PositionSource;
        get listenerRadius(): number;
    }
    export class $VibrationSystem$Data {
        shouldReloadVibrationParticle(): boolean;
        getSelectionStrategy(): $VibrationSelector;
        getTravelTimeInTicks(): number;
        setTravelTimeInTicks(travelTimeInTicks: number): void;
        setReloadVibrationParticle(reloadVibrationParticle: boolean): void;
        getCurrentVibration(): $VibrationInfo;
        setCurrentVibration(currentVibration: $VibrationInfo_ | null): void;
        decrementTravelTime(): void;
        selectionStrategy: $VibrationSelector;
        static CODEC: $Codec<$VibrationSystem$Data>;
        static NBT_TAG_KEY: string;
        currentVibration: $VibrationInfo;
        constructor();
        set reloadVibrationParticle(value: boolean);
    }
    export class $VibrationSelector {
        addCandidate(vibrationInfo: $VibrationInfo_, tick: number): void;
        chosenCandidate(tick: number): ($VibrationInfo) | undefined;
        startOver(): void;
        static CODEC: $Codec<$VibrationSelector>;
        constructor(event: ($VibrationInfo_) | undefined, tick: number);
        constructor();
    }
    export class $VibrationInfo extends $Record {
        pos(): $Vec3;
        distance(): number;
        getEntity(level: $ServerLevel): ($Entity) | undefined;
        uuid(): $UUID;
        entity(): $Entity;
        gameEvent(): $Holder<$GameEvent>;
        projectileOwnerUuid(): $UUID;
        getProjectileOwner(level: $ServerLevel): ($Entity) | undefined;
        static CODEC: $Codec<$VibrationInfo>;
        constructor(arg0: $Holder_<$GameEvent>, arg1: number, arg2: $Vec3_, arg3: $UUID_ | null, arg4: $UUID_ | null, arg5: $Entity | null);
        constructor(gameEvent: $Holder_<$GameEvent>, distance: number, pos: $Vec3_, entity: $Entity | null);
        constructor(gameEvent: $Holder_<$GameEvent>, distance: number, pos: $Vec3_, uuid: $UUID_ | null, projectileOwnerUuid: $UUID_ | null);
    }
    /**
     * Values that may be interpreted as {@link $VibrationInfo}.
     */
    export type $VibrationInfo_ = { gameEvent?: $Holder_<$GameEvent>, projectileOwnerUuid?: $UUID_, entity?: $Entity, distance?: number, pos?: $Vec3_, uuid?: $UUID_,  } | [gameEvent?: $Holder_<$GameEvent>, projectileOwnerUuid?: $UUID_, entity?: $Entity, distance?: number, pos?: $Vec3_, uuid?: $UUID_, ];
    export class $VibrationSystem$Ticker {
        static tick(level: $Level_, data: $VibrationSystem$Data, user: $VibrationSystem$User): void;
    }
    export interface $VibrationSystem$Ticker {
    }
    export class $VibrationSystem {
        static getResonanceEventByFrequency(frequency: number): $ResourceKey<$GameEvent>;
        static getGameEventFrequency(eventKey: $ResourceKey_<$GameEvent>): number;
        static getGameEventFrequency(gameEvent: $Holder_<$GameEvent>): number;
        static getRedstoneStrengthForDistance(distance: number, maxDistance: number): number;
        static DEFAULT_VIBRATION_FREQUENCY: number;
        static RESONANCE_EVENTS: $List<$ResourceKey<$GameEvent>>;
        /**
         * @deprecated
         */
        static VIBRATION_FREQUENCY_FOR_EVENT: $ToIntFunction<$ResourceKey<$GameEvent>>;
    }
    export interface $VibrationSystem {
        getVibrationData(): $VibrationSystem$Data;
        getVibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get vibrationUser(): $VibrationSystem$User;
    }
    export class $VibrationSystem$Listener implements $GameEventListener {
        forceScheduleVibration(level: $ServerLevel, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_, pos: $Vec3_): void;
        /**
         * Gets the position of the listener itself.
         */
        getListenerSource(): $PositionSource;
        /**
         * Gets the listening radius of the listener. Events within this radius will notify the listener when broadcasted.
         */
        getListenerRadius(): number;
        handleGameEvent(level: $ServerLevel, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_, pos: $Vec3_): boolean;
        static distanceBetweenInBlocks(pos1: $BlockPos_, pos2: $BlockPos_): number;
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        constructor(system: $VibrationSystem);
        get listenerSource(): $PositionSource;
        get listenerRadius(): number;
        get deliveryMode(): $GameEventListener$DeliveryMode;
    }
}
