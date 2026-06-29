import { $LinearLayout } from "@package/net/minecraft/client/gui/layouts";
import { $DisconnectionDetails } from "@package/net/minecraft/network";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/dev/terminalmc/autoreconnectrf/mixin/accessor" {
    export class $ScreenAccessor<T extends $GuiEventListener> {
    }
    export interface $ScreenAccessor<T extends $GuiEventListener> {
    }
    export class $DisconnectedScreenAccessor {
    }
    export interface $DisconnectedScreenAccessor {
        autoreconnectrf$getDetails(): $DisconnectionDetails;
        autoreconnectrf$getLayout(): $LinearLayout;
    }
}
