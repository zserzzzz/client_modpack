import { $CreativeModeTab$ItemDisplayParameters_ } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Slot, $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $Map } from "@package/java/util";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/dev/terminalmc/clientsort/mixin/client/accessor" {
    export class $AbstractContainerScreenAccessor {
    }
    export interface $AbstractContainerScreenAccessor {
        clientsort$getImageWidth(): number;
        clientsort$slotClicked(arg0: $Slot, arg1: number, arg2: number, arg3: $ClickType_): void;
        clientsort$getLeftPos(): number;
        clientsort$isHovering(arg0: $Slot, arg1: number, arg2: number): boolean;
        clientsort$getTopPos(): number;
        clientsort$getPlayerInventoryTitle(): $Component;
    }
    export class $KeyMappingAccessor {
        static clientsort$getAll(): $Map<string, $KeyMapping>;
    }
    export interface $KeyMappingAccessor {
        clientsort$getKey(): $InputConstants$Key;
    }
    /**
     * Values that may be interpreted as {@link $KeyMappingAccessor}.
     */
    export type $KeyMappingAccessor_ = (() => $InputConstants$Key);
    export class $CreativeModeTabsAccessor {
        static clientsort$setCachedParameters(arg0: $CreativeModeTab$ItemDisplayParameters_): void;
    }
    export interface $CreativeModeTabsAccessor {
    }
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        clientsort$removeWidget(arg0: $GuiEventListener): void;
        clientsort$addRenderableWidget<T extends $GuiEventListener>(arg0: T): T;
    }
}
