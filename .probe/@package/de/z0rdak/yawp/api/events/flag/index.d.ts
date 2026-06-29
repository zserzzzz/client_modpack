import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Cancelable } from "@package/de/z0rdak/yawp/api/events";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $IProtectedRegion } from "@package/de/z0rdak/yawp/core/region";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $RegionFlag_, $IFlag, $FlagState_, $FlagContext_, $FlagState, $RegionFlag } from "@package/de/z0rdak/yawp/core/flag";

declare module "@package/de/z0rdak/yawp/api/events/flag" {
    export class $FlagEvent$Remove extends $FlagEvent implements $Cancelable {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ServerPlayer, arg1: $IProtectedRegion, arg2: $IFlag);
    }
    export class $FlagCheckRequest implements $Cancelable {
        getId(): string;
        getTarget(): $BlockPos;
        getDimension(): $ResourceKey<$Level>;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        getPlayer(): $Player;
        getRegionFlag(): $RegionFlag;
        constructor(arg0: $BlockPos_, arg1: $RegionFlag_, arg2: $ResourceKey_<$Level>);
        constructor(arg0: $BlockPos_, arg1: $RegionFlag_, arg2: $ResourceKey_<$Level>, arg3: $Player, arg4: string);
        constructor(arg0: $BlockPos_, arg1: $RegionFlag_, arg2: $ResourceKey_<$Level>, arg3: $Player);
        get id(): string;
        get target(): $BlockPos;
        get dimension(): $ResourceKey<$Level>;
        get player(): $Player;
        get regionFlag(): $RegionFlag;
    }
    export class $FlagEvent {
        getRegion(): $IProtectedRegion;
        getFlag(): $IFlag;
        getPlayer(): $ServerPlayer;
        get region(): $IProtectedRegion;
        get flag(): $IFlag;
        get player(): $ServerPlayer;
    }
    export class $FlagEvent$UpdateFlagMessage extends $FlagEvent {
        getNewMsg(): string;
        setNewMsg(arg0: string): void;
        constructor(arg0: $ServerPlayer, arg1: $IProtectedRegion, arg2: $IFlag, arg3: string);
    }
    export class $FlagEvent$Add extends $FlagEvent implements $Cancelable {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ServerPlayer, arg1: $IProtectedRegion, arg2: $IFlag);
    }
    export class $FlagCheckResult {
        getFlag(): $IFlag;
        getResponsible(): $IProtectedRegion;
        static Undefined(arg0: $FlagCheckRequest): $FlagCheckResult;
        setFlagState(arg0: $FlagState_): void;
        getFlagState(): $FlagState;
        getFlagCheck(): $FlagCheckRequest;
        constructor(arg0: $FlagCheckRequest, arg1: $FlagState_, arg2: $IProtectedRegion, arg3: $IFlag);
        constructor(arg0: $FlagCheckRequest, arg1: $FlagContext_);
        get flag(): $IFlag;
        get responsible(): $IProtectedRegion;
        get flagCheck(): $FlagCheckRequest;
    }
}
