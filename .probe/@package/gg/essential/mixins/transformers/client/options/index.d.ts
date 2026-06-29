import { $KeyMapping } from "@package/net/minecraft/client";
import { $Map } from "@package/java/util";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/gg/essential/mixins/transformers/client/options" {
    export class $GameOptionsAccessor {
    }
    export interface $GameOptionsAccessor {
        setKeyBindings(arg0: $KeyMapping[]): void;
        set keyBindings(value: $KeyMapping[]);
    }
    /**
     * Values that may be interpreted as {@link $GameOptionsAccessor}.
     */
    export type $GameOptionsAccessor_ = ((arg0: $KeyMapping[]) => void);
    export class $KeyBindingAccessor {
        static getKeybinds(): $Map<string, $KeyMapping>;
        static get keybinds(): $Map<string, $KeyMapping>;
    }
    export interface $KeyBindingAccessor {
        getBoundKey(): $InputConstants$Key;
        invokeUnpressKey(): void;
        get boundKey(): $InputConstants$Key;
    }
}
