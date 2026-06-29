import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $Font } from "@package/net/minecraft/client/gui";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Map_, $Map, $List } from "@package/java/util";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/de/keksuccino/konkrete/mixin/mixins/client" {
    export class $IMixinClientLanguage {
    }
    export interface $IMixinClientLanguage {
        getStorageKonkrete(): $Map<string, string>;
        get storageKonkrete(): $Map<string, string>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinClientLanguage}.
     */
    export type $IMixinClientLanguage_ = (() => $Map_<string, string>);
    export class $IMixinMouseHandler {
    }
    export interface $IMixinMouseHandler {
        getActiveButtonKonkrete(): number;
        get activeButtonKonkrete(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMixinMouseHandler}.
     */
    export type $IMixinMouseHandler_ = (() => number);
    export class $IMixinEditBox {
    }
    export interface $IMixinEditBox {
        getIsEditableKonkrete(): boolean;
        getMaxLengthKonkrete(): number;
        getHightlightPosKonkrete(): number;
        onValueChangeKonkrete(arg0: string): void;
        get isEditableKonkrete(): boolean;
        get maxLengthKonkrete(): number;
        get hightlightPosKonkrete(): number;
    }
    export class $IMixinScreen {
    }
    export interface $IMixinScreen {
        getChildrenKonkrete(): $List<$GuiEventListener>;
        invokeAddWidgetKonkrete<T extends $GuiEventListener>(arg0: T): T;
        getRenderablesKonkrete(): $List<$Renderable>;
        setFontKonkrete(arg0: $Font): void;
        invokeAddRenderableWidgetKonkrete<T extends $GuiEventListener>(arg0: T): T;
        get childrenKonkrete(): $List<$GuiEventListener>;
        get renderablesKonkrete(): $List<$Renderable>;
        set fontKonkrete(value: $Font);
    }
    export class $IMixinAbstractWidget {
    }
    export interface $IMixinAbstractWidget {
        setHeightKonkrete(arg0: number): void;
        set heightKonkrete(value: number);
    }
    /**
     * Values that may be interpreted as {@link $IMixinAbstractWidget}.
     */
    export type $IMixinAbstractWidget_ = ((arg0: number) => void);
    export class $IMixinClientPacketListener {
    }
    export interface $IMixinClientPacketListener {
        setCommandsKonkrete(arg0: $CommandDispatcher<$SharedSuggestionProvider>): void;
        getCommandsKonkrete(): $CommandDispatcher<$SharedSuggestionProvider>;
    }
    export class $IMixinLocalPlayer {
    }
    export interface $IMixinLocalPlayer {
        getPermissionLevelKonkrete(): number;
        get permissionLevelKonkrete(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMixinLocalPlayer}.
     */
    export type $IMixinLocalPlayer_ = (() => number);
    export class $IMixinDynamicTexture {
    }
    export interface $IMixinDynamicTexture {
        setPixelsKonkrete(arg0: $NativeImage): void;
        getPixelsKonkrete(): $NativeImage;
    }
}
