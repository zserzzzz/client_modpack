import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $IMarkableArea } from "@package/de/z0rdak/yawp/core/area";
import { $Cancelable } from "@package/de/z0rdak/yawp/api/events";
import { $IMarkableRegion } from "@package/de/z0rdak/yawp/core/region";

declare module "@package/de/z0rdak/yawp/api/events/region" {
    export class $RegionEvent$Rename extends $RegionEvent implements $Cancelable {
        getOldName(): string;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        getNewName(): string;
        setNewName(arg0: string): void;
        constructor(arg0: $IMarkableRegion, arg1: string, arg2: string, arg3: $ServerPlayer);
        get oldName(): string;
    }
    export class $RegionEvent {
        getRegion(): $IMarkableRegion;
        getPlayer(): $ServerPlayer;
        get region(): $IMarkableRegion;
        get player(): $ServerPlayer;
    }
    export class $RegionEvent$UpdateArea extends $RegionEvent implements $Cancelable {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        setMarkedArea(arg0: $IMarkableArea): void;
        markedArea(): $IMarkableArea;
        constructor(arg0: $IMarkableRegion, arg1: $IMarkableArea, arg2: $ServerPlayer);
    }
    export class $RegionEvent$Create extends $RegionEvent implements $Cancelable {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $IMarkableRegion, arg1: $ServerPlayer);
    }
    export class $RegionEvent$Remove extends $RegionEvent implements $Cancelable {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $IMarkableRegion, arg1: $ServerPlayer);
    }
}
