import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IBoxElement, $TooltipRect } from "@package/snownee/jade/api/ui";
import { $Accessor } from "@package/snownee/jade/api";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $Theme } from "@package/snownee/jade/api/theme";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $HitResult } from "@package/net/minecraft/world/phys";

declare module "@package/snownee/jade/api/callback" {
    export class $JadeAfterRenderCallback {
    }
    export interface $JadeAfterRenderCallback {
        afterRender(arg0: $IBoxElement, arg1: $TooltipRect, arg2: $GuiGraphics, arg3: $Accessor<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $JadeAfterRenderCallback}.
     */
    export type $JadeAfterRenderCallback_ = ((arg0: $IBoxElement, arg1: $TooltipRect, arg2: $GuiGraphics, arg3: $Accessor<never>) => void);
    export class $JadeTooltipCollectedCallback {
    }
    export interface $JadeTooltipCollectedCallback {
        onTooltipCollected(arg0: $IBoxElement, arg1: $Accessor<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $JadeTooltipCollectedCallback}.
     */
    export type $JadeTooltipCollectedCallback_ = ((arg0: $IBoxElement, arg1: $Accessor<never>) => void);
    export class $JadeBeforeRenderCallback {
    }
    export interface $JadeBeforeRenderCallback {
        beforeRender(arg0: $IBoxElement, arg1: $TooltipRect, arg2: $GuiGraphics, arg3: $Accessor<never>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $JadeBeforeRenderCallback}.
     */
    export type $JadeBeforeRenderCallback_ = ((arg0: $IBoxElement, arg1: $TooltipRect, arg2: $GuiGraphics, arg3: $Accessor<never>) => boolean);
    export class $JadeBeforeTooltipCollectCallback {
    }
    export interface $JadeBeforeTooltipCollectCallback {
        beforeCollecting(arg0: $MutableObject<$Theme>, arg1: $Accessor<never>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $JadeBeforeTooltipCollectCallback}.
     */
    export type $JadeBeforeTooltipCollectCallback_ = ((arg0: $MutableObject<$Theme>, arg1: $Accessor<never>) => boolean);
    export class $JadeItemModNameCallback {
    }
    export interface $JadeItemModNameCallback {
        gatherItemModName(arg0: $ItemStack_): string;
    }
    /**
     * Values that may be interpreted as {@link $JadeItemModNameCallback}.
     */
    export type $JadeItemModNameCallback_ = ((arg0: $ItemStack) => string);
    export class $JadeRayTraceCallback {
    }
    export interface $JadeRayTraceCallback {
        onRayTrace(arg0: $HitResult, arg1: $Accessor<never>, arg2: $Accessor<never>): $Accessor<never>;
    }
    /**
     * Values that may be interpreted as {@link $JadeRayTraceCallback}.
     */
    export type $JadeRayTraceCallback_ = ((arg0: $HitResult, arg1: $Accessor<never>, arg2: $Accessor<never>) => $Accessor<never>);
}
