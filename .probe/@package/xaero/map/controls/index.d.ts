import { $MapProcessor } from "@package/xaero/map";
import { $Minecraft, $KeyMapping } from "@package/net/minecraft/client";

declare module "@package/xaero/map/controls" {
    export class $ControlsHandler {
        keyUp(arg0: $KeyMapping, arg1: boolean): void;
        keyDown(arg0: $KeyMapping, arg1: boolean, arg2: boolean): void;
        handleKeyEvents(): void;
        onKeyInput(arg0: $Minecraft): void;
        static isKeyRepeat(arg0: $KeyMapping): boolean;
        constructor(arg0: $MapProcessor);
    }
}
