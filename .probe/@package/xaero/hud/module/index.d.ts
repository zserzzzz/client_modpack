import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_, $Function_, $Function, $BiConsumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $BooleanConfigOption } from "@package/xaero/lib/common/config/option";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $PushboxHandler$State } from "@package/xaero/hud/pushbox";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $HudMod } from "@package/xaero/common";
import { $ClientConfigManager } from "@package/xaero/lib/client/config";
import { $Iterable } from "@package/java/lang";
import { $IModuleRenderer } from "@package/xaero/hud/render/module";
import { $TriFunction_ } from "@package/org/apache/commons/lang3/function";

declare module "@package/xaero/hud/module" {
    export class $ModuleSession<MS extends $ModuleSession<MS>> {
        getHeight(arg0: number): number;
        getModule(): $HudModule<MS>;
        close(): void;
        isActive(): boolean;
        getWidth(arg0: number): number;
        getModMain(): $HudMod;
        getEffectiveY(arg0: number, arg1: number): number;
        isFlippedHor(): boolean;
        isFlippedVer(): boolean;
        getEffectiveX(arg0: number, arg1: number): number;
        isCentered(): boolean;
        onPostGameOverlay(): void;
        prePotentialRender(): void;
        shouldFlipHorizontally(arg0: number, arg1: number): boolean;
        shouldFlipVertically(arg0: number, arg1: number): boolean;
        constructor(arg0: $HudMod, arg1: $HudModule<MS>);
        get module(): $HudModule<MS>;
        get active(): boolean;
        get modMain(): $HudMod;
        get flippedHor(): boolean;
        get flippedVer(): boolean;
        get centered(): boolean;
    }
    export class $ModuleManager {
        getModules(): $Iterable<$HudModule<never>>;
        get(arg0: $ResourceLocation_): $HudModule<never>;
        register(arg0: $HudModule<never>): void;
        constructor();
        get modules(): $Iterable<$HudModule<never>>;
    }
    export class $ModuleSessionHandler {
        closeSessions(arg0: $HudMod): void;
        resetSessions(arg0: $HudMod, arg1: $ClientPacketListener, arg2: $BiConsumer_<$HudModule<never>, $ModuleSession<never>>): void;
        constructor(arg0: $ModuleManager);
    }
    export class $ModuleTransform {
        copy(): $ModuleTransform;
        fromRight: boolean;
        fromOldSystem: boolean;
        centered: boolean;
        flippedVer: boolean;
        x: number;
        y: number;
        flippedHor: boolean;
        fromBottom: boolean;
        constructor();
    }
    export class $HudModule<MS extends $ModuleSession<MS>> {
        setActive(arg0: $ClientConfigManager, arg1: boolean): void;
        getRenderer(): $IModuleRenderer<MS>;
        getId(): $ResourceLocation;
        isActive(arg0: $ClientConfigManager): boolean;
        getDisplayName(): $Component;
        getCurrentSession(): MS;
        setTransform(arg0: $ModuleTransform): void;
        getPushState(): $PushboxHandler$State;
        getUsedTransform(): $ModuleTransform;
        getConfirmedTransform(): $ModuleTransform;
        cancelTransform(): void;
        confirmTransform(): void;
        getConfigScreenFactory(): $Function<$Screen, $Screen>;
        getUnconfirmedTransform(): $ModuleTransform;
        constructor(arg0: $ResourceLocation_, arg1: $Component_, arg2: $TriFunction_<$HudMod, $HudModule<MS>, $ClientPacketListener, MS>, arg3: $Supplier_<$IModuleRenderer<MS>>, arg4: $Function_<$Screen, $Screen>, arg5: $BooleanConfigOption);
        get renderer(): $IModuleRenderer<MS>;
        get id(): $ResourceLocation;
        get displayName(): $Component;
        get currentSession(): MS;
        set transform(value: $ModuleTransform);
        get pushState(): $PushboxHandler$State;
        get usedTransform(): $ModuleTransform;
        get confirmedTransform(): $ModuleTransform;
        get configScreenFactory(): $Function<$Screen, $Screen>;
        get unconfirmedTransform(): $ModuleTransform;
    }
}
