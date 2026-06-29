import { $Function1_ } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $MutableState, $State_ } from "@package/gg/essential/gui/elementa/state/v2";
import { $Button$CreateNarration, $WidgetTooltipHolder, $WidgetSprites, $Button } from "@package/net/minecraft/client/gui/components";
import { $Window } from "@package/gg/essential/elementa/components";
import { $LayoutScope, $Modifier_ } from "@package/gg/essential/gui/layoutdsl";
import { $UIComponent } from "@package/gg/essential/elementa";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Map_, $Map } from "@package/java/util";
import { $Object, $Class } from "@package/java/lang";
import { $Unit } from "@package/kotlin";

declare module "@package/gg/essential/gui/proxies" {
    export class $ScreenWithVanillaProxyElementsExt {
    }
    export interface $ScreenWithVanillaProxyElementsExt {
        essential$getProxyHandler(): $ScreenWithProxiesHandler;
    }
    /**
     * Values that may be interpreted as {@link $ScreenWithVanillaProxyElementsExt}.
     */
    export type $ScreenWithVanillaProxyElementsExt_ = (() => $ScreenWithProxiesHandler);
    export class $ScreenWithProxiesHandler$Companion {
        forOptionsMenu(screen: $Screen): $ScreenWithProxiesHandler;
        forMainMenu(screen: $Screen): $ScreenWithProxiesHandler;
        currentProxyScreenOrNull(): $ScreenWithVanillaProxyElementsExt;
        forPauseMenu(screen: $Screen): $ScreenWithProxiesHandler;
        mountWithProxy($this$mountWithProxy: $LayoutScope, id: string, modifier: $Modifier_, block: $Function1_<$LayoutScope, $Unit>): void;
        static mountWithProxy$default(arg0: $ScreenWithProxiesHandler$Companion, arg1: $LayoutScope, arg2: string, arg3: $Modifier_, arg4: $Function1_<any, any>, arg5: number, arg6: $Object): void;
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $ScreenWithProxiesHandler {
        static forOptionsMenu(screen: $Screen): $ScreenWithProxiesHandler;
        initGui(): void;
        getProxy(id: string): $EssentialProxyElement<never>;
        static forMainMenu(screen: $Screen): $ScreenWithProxiesHandler;
        static forPauseMenu(screen: $Screen): $ScreenWithProxiesHandler;
        static access$getProxiesBeingInitialized$cp(): $Map<any, any>;
        static access$getMainAndPauseMenuPlayers$cp(): $Map<any, any>;
        static access$getOptionsMenuButtons$cp(): $Map<any, any>;
        static access$getMainMenuButtons$cp(): $Map<any, any>;
        static access$getPauseMenuButtons$cp(): $Map<any, any>;
        static access$getPauseMenuFlags$cp(): $Map<any, any>;
        static access$getMainMenuFlags$cp(): $Map<any, any>;
        static Companion: $ScreenWithProxiesHandler$Companion;
        constructor(screen: $Screen, buttonIds: $Map_<string, number>, flagIds: $Map_<string, number>, playerIds: $Map_<string, number>, initialLayout: $Function1_<$Window, $Unit>);
    }
    export class $EssentialProxyElement$Companion {
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $EssentialProxyElement<T extends $UIComponent> extends $Button {
        getEssentialId(): string;
        getEssentialComponent(): T;
        initAfterInitialLayout(): void;
        getEssentialComponentState(): $MutableState<T>;
        renderOverride(context: $GuiGraphics, mouseX: number, mouseY: number, partialTicks: number): void;
        acceptNewEssentialContainer(container: $UIComponent, mountingControl: $MutableState<$State_<boolean>>): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        static Companion: $EssentialProxyElement$Companion;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(essentialId: string, initialPosID: number, clazz: $Class<T>, expectedText: string);
        constructor(arg0: string, arg1: number, arg2: $Class<any>, arg3: string, arg4: number, arg5: $DefaultConstructorMarker);
        get essentialId(): string;
        get essentialComponent(): T;
        get essentialComponentState(): $MutableState<T>;
    }
}
