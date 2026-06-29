import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $IMarkableArea } from "@package/de/z0rdak/yawp/core/area";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IMarkableRegion, $IProtectedRegion } from "@package/de/z0rdak/yawp/core/region";
import { $FlagState, $RegionFlag, $RegionFlag_, $IFlag, $FlagState_ } from "@package/de/z0rdak/yawp/core/flag";
import { $RegionEvent$Create, $RegionEvent$Rename, $RegionEvent$UpdateArea, $RegionEvent$Remove } from "@package/de/z0rdak/yawp/api/events/region";
import { $FlagCheckResult, $FlagEvent$UpdateFlagMessage, $FlagEvent$Remove, $FlagEvent$Add, $FlagCheckRequest } from "@package/de/z0rdak/yawp/api/events/flag";

declare module "@package/de/z0rdak/yawp/platform/event" {
    export class $NeoForgeRegionEvent$Create extends $NeoForgeRegionEvent {
        static asCommonEvent(arg0: $NeoForgeRegionEvent$Create): $RegionEvent$Create;
        constructor(arg0: $IMarkableRegion, arg1: $ServerPlayer);
        constructor(arg0: $RegionEvent$Create);
    }
    export class $NeoForgeRegionEvent$Rename extends $NeoForgeRegionEvent {
        getOldName(): string;
        setNewName(arg0: string): void;
        getNewName(): string;
        static asCommonEvent(arg0: $NeoForgeRegionEvent$Rename): $RegionEvent$Rename;
        constructor(arg0: $IMarkableRegion, arg1: string, arg2: string, arg3: $ServerPlayer);
        constructor(arg0: $RegionEvent$Rename);
        get oldName(): string;
    }
    export class $NeoForgeFlagEvent$Remove extends $NeoForgeFlagEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ServerPlayer, arg1: $IProtectedRegion, arg2: $IFlag);
        constructor(arg0: $FlagEvent$Remove);
    }
    export class $NeoForgeFlagCheckResult extends $Event implements $ICancellableEvent {
        getFlag(): $IFlag;
        getResponsible(): $IProtectedRegion;
        setFlagState(arg0: $FlagState_): void;
        getFlagState(): $FlagState;
        getFlagCheck(): $NeoForgeFlagCheckRequest;
        static asEvent(arg0: $FlagCheckResult): $NeoForgeFlagCheckResult;
        static asNonEvent(arg0: $NeoForgeFlagCheckResult): $FlagCheckResult;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $NeoForgeFlagCheckRequest, arg1: $FlagState_, arg2: $IProtectedRegion | null, arg3: $IFlag | null);
        get flag(): $IFlag;
        get responsible(): $IProtectedRegion;
        get flagCheck(): $NeoForgeFlagCheckRequest;
    }
    export class $NeoForgeFlagEvent$UpdateFlagMessage extends $NeoForgeFlagEvent implements $ICancellableEvent {
        getNewMsg(): string;
        setNewMsg(arg0: string): void;
        static asEvent(arg0: $FlagEvent$UpdateFlagMessage): $FlagEvent$UpdateFlagMessage;
        static asNonEvent(arg0: $FlagEvent$UpdateFlagMessage): $FlagEvent$UpdateFlagMessage;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ServerPlayer, arg1: $IProtectedRegion, arg2: $IFlag, arg3: string);
        constructor(arg0: $FlagEvent$UpdateFlagMessage);
    }
    export class $NeoForgeRegionEvent$PlayerEnter extends $NeoForgeRegionEvent$PlayerMove {
        constructor(arg0: $IMarkableRegion, arg1: $ServerPlayer, arg2: $BlockPos_, arg3: $BlockPos_);
    }
    export class $NeoForgeFlagEvent extends $Event {
        getRegion(): $IProtectedRegion;
        getFlag(): $IFlag;
        getPlayer(): $ServerPlayer;
        get region(): $IProtectedRegion;
        get flag(): $IFlag;
        get player(): $ServerPlayer;
    }
    export class $NeoForgeRegionEvent$Remove extends $NeoForgeRegionEvent {
        static asCommonEvent(arg0: $NeoForgeRegionEvent$Remove): $RegionEvent$Remove;
        constructor(arg0: $IMarkableRegion, arg1: $ServerPlayer);
        constructor(arg0: $RegionEvent$Remove);
    }
    export class $NeoForgeRegionEvent$UpdateArea extends $NeoForgeRegionEvent {
        setMarkedArea(arg0: $IMarkableArea): void;
        getMarkedArea(): $IMarkableArea;
        static asCommonEvent(arg0: $NeoForgeRegionEvent$UpdateArea): $RegionEvent$UpdateArea;
        static asEvent(arg0: $RegionEvent$UpdateArea): $NeoForgeRegionEvent$UpdateArea;
        static asNonEvent(arg0: $NeoForgeRegionEvent$UpdateArea): $RegionEvent$UpdateArea;
        constructor(arg0: $IMarkableRegion, arg1: $IMarkableArea, arg2: $ServerPlayer);
        constructor(arg0: $RegionEvent$UpdateArea);
    }
    export class $NeoForgeRegionEvent$PlayerLeave extends $NeoForgeRegionEvent$PlayerMove {
        constructor(arg0: $IMarkableRegion, arg1: $ServerPlayer, arg2: $BlockPos_, arg3: $BlockPos_);
    }
    export class $NeoForgeRegionEvent$PlayerMove extends $NeoForgeRegionEvent {
        current(): $BlockPos;
        previous(): $BlockPos;
        constructor(arg0: $IMarkableRegion, arg1: $ServerPlayer, arg2: $BlockPos_, arg3: $BlockPos_);
    }
    export class $NeoForgeFlagEvent$Add extends $NeoForgeFlagEvent implements $ICancellableEvent {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ServerPlayer, arg1: $IProtectedRegion, arg2: $IFlag);
        constructor(arg0: $FlagEvent$Add);
    }
    export class $NeoForgeFlagCheckRequest extends $Event implements $ICancellableEvent {
        getId(): string;
        getTarget(): $BlockPos;
        getDimension(): $ResourceKey<$Level>;
        getPlayer(): $Player;
        getRegionFlag(): $RegionFlag;
        static asNonEvent(arg0: $NeoForgeFlagCheckRequest): $FlagCheckRequest;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $BlockPos_, arg1: $RegionFlag_, arg2: $ResourceKey_<$Level>);
        constructor(arg0: $BlockPos_, arg1: $RegionFlag_, arg2: $ResourceKey_<$Level>, arg3: $Player | null, arg4: string);
        constructor(arg0: $FlagCheckRequest);
        constructor(arg0: $BlockPos_, arg1: $RegionFlag_, arg2: $ResourceKey_<$Level>, arg3: $Player | null);
        get id(): string;
        get target(): $BlockPos;
        get dimension(): $ResourceKey<$Level>;
        get player(): $Player;
        get regionFlag(): $RegionFlag;
    }
    export class $NeoForgeRegionEvent extends $Event implements $ICancellableEvent {
        getRegion(): $IMarkableRegion;
        getPlayer(): $ServerPlayer;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        get region(): $IMarkableRegion;
        get player(): $ServerPlayer;
    }
}
