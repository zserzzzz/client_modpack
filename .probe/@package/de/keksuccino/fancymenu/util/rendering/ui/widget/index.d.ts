import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $RenderableResource } from "@package/de/keksuccino/fancymenu/util/resource";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractWidget, $AbstractSliderButton } from "@package/net/minecraft/client/gui/components";
import { $IAudio } from "@package/de/keksuccino/fancymenu/util/resource/resources/audio";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Runnable_, $Runnable, $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $DrawableColor } from "@package/de/keksuccino/fancymenu/util/rendering";

declare module "@package/de/keksuccino/fancymenu/util/rendering/ui/widget" {
    export class $UniqueLabeledSwitchCycleButton {
    }
    export interface $UniqueLabeledSwitchCycleButton {
        setLabeledSwitchComponentLabel_FancyMenu(arg0: $Component_): void;
        getLabeledSwitchComponentLabel_FancyMenu(): $Component;
    }
    export class $CustomizableSlider {
    }
    export interface $CustomizableSlider {
        setNineSliceSliderHandleBorderX_FancyMenu(arg0: number): void;
        setCustomSliderBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        setNineSliceSliderHandleBorderY_FancyMenu(arg0: number): void;
        getCustomSliderBackgroundNormalFancyMenu(): $RenderableResource;
        getNineSliceSliderHandleBorderY_FancyMenu(): number;
        getNineSliceSliderHandleBorderX_FancyMenu(): number;
        renderSliderBackgroundFancyMenu(arg0: $GuiGraphics, arg1: $AbstractSliderButton, arg2: boolean): boolean;
        setNineSliceSliderHandleBorderLeft_FancyMenu(arg0: number): void;
        getNineSliceSliderHandleBorderRight_FancyMenu(): number;
        setNineSliceSliderHandleBorderRight_FancyMenu(arg0: number): void;
        setNineSliceSliderHandleBorderTop_FancyMenu(arg0: number): void;
        getNineSliceSliderHandleBorderBottom_FancyMenu(): number;
        setNineSliceSliderHandleBorderBottom_FancyMenu(arg0: number): void;
        getNineSliceSliderHandleBorderLeft_FancyMenu(): number;
        setNineSliceCustomSliderBackground_FancyMenu(arg0: boolean): void;
        setNineSliceSliderBackgroundBorderX_FancyMenu(arg0: number): void;
        setNineSliceSliderBackgroundBorderY_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderY_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderTop_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderTop_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderRight_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderRight_FancyMenu(): number;
        getNineSliceSliderHandleBorderTop_FancyMenu(): number;
        getNineSliceSliderBackgroundBorderX_FancyMenu(): number;
        getNineSliceSliderBackgroundBorderBottom_FancyMenu(): number;
        isNineSliceCustomSliderBackground_FancyMenu(): boolean;
        setNineSliceSliderBackgroundBorderLeft_FancyMenu(arg0: number): void;
        setNineSliceSliderBackgroundBorderBottom_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderLeft_FancyMenu(): number;
        getCustomSliderBackgroundHighlightedFancyMenu(): $RenderableResource;
        setCustomSliderBackgroundHighlightedFancyMenu(arg0: $RenderableResource): void;
        isNineSliceCustomSliderHandle_FancyMenu(): boolean;
        setNineSliceCustomSliderHandle_FancyMenu(arg0: boolean): void;
    }
    export class $CustomizableWidget$CustomBackgroundResetBehavior extends $Enum<$CustomizableWidget$CustomBackgroundResetBehavior> {
        static values(): $CustomizableWidget$CustomBackgroundResetBehavior[];
        static valueOf(arg0: string): $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_UNHOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_NEVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_HOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_HOVER_AND_UNHOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
    }
    /**
     * Values that may be interpreted as {@link $CustomizableWidget$CustomBackgroundResetBehavior}.
     */
    export type $CustomizableWidget$CustomBackgroundResetBehavior_ = "reset_never" | "reset_on_hover" | "reset_on_unhover" | "reset_on_hover_and_unhover";
    export class $UniqueWidget {
    }
    export interface $UniqueWidget {
        setWidgetIdentifierFancyMenu(arg0: string): $AbstractWidget;
        getWidgetIdentifierFancyMenu(): string;
    }
    export class $CustomizableWidget {
    }
    export interface $CustomizableWidget {
        setCustomBackgroundResetBehaviorFancyMenu(arg0: $CustomizableWidget$CustomBackgroundResetBehavior_): void;
        tickHoverOrFocusStateListenersFancyMenu(arg0: boolean): void;
        addResetCustomizationsListenerFancyMenu(arg0: $Runnable_): void;
        setNineSliceCustomBackground_FancyMenu(arg0: boolean): void;
        addHoverOrFocusStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        getHoverOrFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        resetWidgetSizeAndPositionFancyMenu(): void;
        setCustomBackgroundInactiveFancyMenu(arg0: $RenderableResource): void;
        getResetCustomizationsListenersFancyMenu(): $List<$Runnable>;
        getCustomBackgroundInactiveFancyMenu(): $RenderableResource;
        getCustomBackgroundResetBehaviorFancyMenu(): $CustomizableWidget$CustomBackgroundResetBehavior;
        stopHoverSoundFancyMenu(): void;
        stopUnhoverSoundFancyMenu(): void;
        getHoverSoundFancyMenu(): $IAudio;
        setCustomYFancyMenu(arg0: number): void;
        isLabelShadowFancyMenu(): boolean;
        setCustomHeightFancyMenu(arg0: number): void;
        setHitboxRotationFancyMenu(arg0: number, arg1: number, arg2: number): void;
        setLabelShadowFancyMenu(arg0: boolean): void;
        getUnhoverSoundFancyMenu(): $IAudio;
        setCustomWidthFancyMenu(arg0: number): void;
        getCustomLabelFancyMenu(): $Component;
        setLabelScaleFancyMenu(arg0: number): void;
        getHoverLabelFancyMenu(): $Component;
        getCustomHeightFancyMenu(): number;
        getLabelScaleFancyMenu(): number;
        getCustomXFancyMenu(): number;
        getCustomYFancyMenu(): number;
        setCustomXFancyMenu(arg0: number): void;
        setLabelBaseColorFancyMenu(arg0: $DrawableColor): void;
        getCustomWidthFancyMenu(): number;
        getLabelBaseColorFancyMenu(): $DrawableColor;
        resolveLabelScaleFancyMenu(): number;
        setLastHoverStateFancyMenu(arg0: boolean): void;
        getLastHoverStateFancyMenu(): boolean;
        getLastFocusStateFancyMenu(): boolean;
        setHoverSoundFancyMenu(arg0: $IAudio): void;
        setUnhoverSoundFancyMenu(arg0: $IAudio): void;
        setLastFocusStateFancyMenu(arg0: boolean): void;
        setCustomLabelFancyMenu(arg0: $Component_): void;
        setHoverLabelFancyMenu(arg0: $Component_): void;
        resetWidgetCustomizationsFancyMenu(): void;
        stopCustomClickSoundFancyMenu(): void;
        renderCustomBackgroundFancyMenu(arg0: $AbstractWidget, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getHitboxRotationDegreesFancyMenu(): number;
        getOriginalMessageFancyMenu(): $Component;
        tickFocusStateListenersFancyMenu(arg0: boolean): void;
        getHoverStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        setCustomBackgroundHoverFancyMenu(arg0: $RenderableResource): void;
        getFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        addHoverStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        getLastHoverOrFocusStateFancyMenu(): boolean;
        setLastHoverOrFocusStateFancyMenu(arg0: boolean): void;
        addFocusStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        getCustomBackgroundNormalFancyMenu(): $RenderableResource;
        getCustomBackgroundHoverFancyMenu(): $RenderableResource;
        tickHoverStateListenersFancyMenu(arg0: boolean): void;
        setCustomClickSoundFancyMenu(arg0: $IAudio): void;
        setUnderlineLabelOnHoverFancyMenu(arg0: boolean): void;
        setCustomBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        setLabelHoverColorFancyMenu(arg0: $DrawableColor): void;
        setNineSliceBorderBottom_FancyMenu(arg0: number): void;
        setNineSliceBorderLeft_FancyMenu(arg0: number): void;
        getCustomClickSoundFancyMenu(): $IAudio;
        setNineSliceBorderX_FancyMenu(arg0: number): void;
        getLabelHoverColorFancyMenu(): $DrawableColor;
        setNineSliceBorderY_FancyMenu(arg0: number): void;
        setNineSliceBorderTop_FancyMenu(arg0: number): void;
        setNineSliceBorderRight_FancyMenu(arg0: number): void;
        isUnderlineLabelOnHoverFancyMenu(): boolean;
        isHiddenFancyMenu(): boolean;
        setHiddenFancyMenu(arg0: boolean): void;
        isNineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        getNineSliceCustomBackgroundBorderX_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderY_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        getHitboxVerticalTiltDegreesFancyMenu(): number;
        getHitboxHorizontalTiltDegreesFancyMenu(): number;
        set nineSliceCustomBackground_FancyMenu(value: boolean);
        get hoverOrFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        get resetCustomizationsListenersFancyMenu(): $List<$Runnable>;
        get hitboxRotationDegreesFancyMenu(): number;
        get originalMessageFancyMenu(): $Component;
        get hoverStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        get focusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        set nineSliceBorderBottom_FancyMenu(value: number);
        set nineSliceBorderLeft_FancyMenu(value: number);
        set nineSliceBorderX_FancyMenu(value: number);
        set nineSliceBorderY_FancyMenu(value: number);
        set nineSliceBorderTop_FancyMenu(value: number);
        set nineSliceBorderRight_FancyMenu(value: number);
        get nineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        get nineSliceCustomBackgroundBorderX_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderY_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        get hitboxVerticalTiltDegreesFancyMenu(): number;
        get hitboxHorizontalTiltDegreesFancyMenu(): number;
    }
}
