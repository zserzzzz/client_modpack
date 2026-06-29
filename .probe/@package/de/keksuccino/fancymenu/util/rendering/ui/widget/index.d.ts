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
        getNineSliceSliderHandleBorderX_FancyMenu(): number;
        setCustomSliderBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        getNineSliceSliderHandleBorderY_FancyMenu(): number;
        setNineSliceSliderHandleBorderX_FancyMenu(arg0: number): void;
        setNineSliceSliderHandleBorderY_FancyMenu(arg0: number): void;
        getCustomSliderBackgroundNormalFancyMenu(): $RenderableResource;
        setNineSliceSliderHandleBorderTop_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderX_FancyMenu(): number;
        setNineSliceSliderHandleBorderLeft_FancyMenu(arg0: number): void;
        setNineSliceSliderBackgroundBorderY_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderY_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderTop_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderTop_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderRight_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderRight_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderBottom_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderBottom_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderLeft_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderLeft_FancyMenu(): number;
        setNineSliceSliderHandleBorderRight_FancyMenu(arg0: number): void;
        getNineSliceSliderHandleBorderLeft_FancyMenu(): number;
        getNineSliceSliderHandleBorderTop_FancyMenu(): number;
        setNineSliceCustomSliderBackground_FancyMenu(arg0: boolean): void;
        getNineSliceSliderHandleBorderBottom_FancyMenu(): number;
        isNineSliceCustomSliderBackground_FancyMenu(): boolean;
        setNineSliceSliderBackgroundBorderX_FancyMenu(arg0: number): void;
        setNineSliceSliderHandleBorderBottom_FancyMenu(arg0: number): void;
        getNineSliceSliderHandleBorderRight_FancyMenu(): number;
        renderSliderBackgroundFancyMenu(arg0: $GuiGraphics, arg1: $AbstractSliderButton, arg2: boolean): boolean;
        setNineSliceCustomSliderHandle_FancyMenu(arg0: boolean): void;
        isNineSliceCustomSliderHandle_FancyMenu(): boolean;
        setCustomSliderBackgroundHighlightedFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundHighlightedFancyMenu(): $RenderableResource;
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
        getWidgetIdentifierFancyMenu(): string;
        setWidgetIdentifierFancyMenu(arg0: string): $AbstractWidget;
    }
    export class $CustomizableWidget {
    }
    export interface $CustomizableWidget {
        getNineSliceCustomBackgroundBorderX_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderY_FancyMenu(): number;
        isNineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        getNineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        resetWidgetCustomizationsFancyMenu(): void;
        isHiddenFancyMenu(): boolean;
        renderCustomBackgroundFancyMenu(arg0: $AbstractWidget, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        stopCustomClickSoundFancyMenu(): void;
        getOriginalMessageFancyMenu(): $Component;
        setHiddenFancyMenu(arg0: boolean): void;
        addHoverOrFocusStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        getCustomBackgroundInactiveFancyMenu(): $RenderableResource;
        setCustomBackgroundInactiveFancyMenu(arg0: $RenderableResource): void;
        setNineSliceCustomBackground_FancyMenu(arg0: boolean): void;
        tickHoverOrFocusStateListenersFancyMenu(arg0: boolean): void;
        getResetCustomizationsListenersFancyMenu(): $List<$Runnable>;
        getHoverOrFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        setCustomBackgroundResetBehaviorFancyMenu(arg0: $CustomizableWidget$CustomBackgroundResetBehavior_): void;
        getHitboxVerticalTiltDegreesFancyMenu(): number;
        getHitboxHorizontalTiltDegreesFancyMenu(): number;
        addResetCustomizationsListenerFancyMenu(arg0: $Runnable_): void;
        resetWidgetSizeAndPositionFancyMenu(): void;
        getCustomBackgroundResetBehaviorFancyMenu(): $CustomizableWidget$CustomBackgroundResetBehavior;
        setLabelBaseColorFancyMenu(arg0: $DrawableColor): void;
        getHoverSoundFancyMenu(): $IAudio;
        stopUnhoverSoundFancyMenu(): void;
        getLastFocusStateFancyMenu(): boolean;
        setHitboxRotationFancyMenu(arg0: number, arg1: number, arg2: number): void;
        getLabelScaleFancyMenu(): number;
        getCustomXFancyMenu(): number;
        getCustomLabelFancyMenu(): $Component;
        getLabelBaseColorFancyMenu(): $DrawableColor;
        setHoverSoundFancyMenu(arg0: $IAudio): void;
        getCustomHeightFancyMenu(): number;
        setLastHoverStateFancyMenu(arg0: boolean): void;
        setCustomHeightFancyMenu(arg0: number): void;
        setLabelShadowFancyMenu(arg0: boolean): void;
        setUnhoverSoundFancyMenu(arg0: $IAudio): void;
        getUnhoverSoundFancyMenu(): $IAudio;
        setLastFocusStateFancyMenu(arg0: boolean): void;
        getCustomYFancyMenu(): number;
        isLabelShadowFancyMenu(): boolean;
        stopHoverSoundFancyMenu(): void;
        setCustomYFancyMenu(arg0: number): void;
        setLabelScaleFancyMenu(arg0: number): void;
        setHoverLabelFancyMenu(arg0: $Component_): void;
        setCustomXFancyMenu(arg0: number): void;
        setCustomLabelFancyMenu(arg0: $Component_): void;
        getHoverLabelFancyMenu(): $Component;
        getCustomWidthFancyMenu(): number;
        setCustomWidthFancyMenu(arg0: number): void;
        getLastHoverStateFancyMenu(): boolean;
        resolveLabelScaleFancyMenu(): number;
        tickHoverStateListenersFancyMenu(arg0: boolean): void;
        setNineSliceBorderY_FancyMenu(arg0: number): void;
        tickFocusStateListenersFancyMenu(arg0: boolean): void;
        setLastHoverOrFocusStateFancyMenu(arg0: boolean): void;
        setNineSliceBorderX_FancyMenu(arg0: number): void;
        getFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        setCustomBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        addHoverStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        addFocusStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        getHoverStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        getLastHoverOrFocusStateFancyMenu(): boolean;
        getCustomBackgroundHoverFancyMenu(): $RenderableResource;
        setCustomBackgroundHoverFancyMenu(arg0: $RenderableResource): void;
        setCustomClickSoundFancyMenu(arg0: $IAudio): void;
        setUnderlineLabelOnHoverFancyMenu(arg0: boolean): void;
        setLabelHoverColorFancyMenu(arg0: $DrawableColor): void;
        isUnderlineLabelOnHoverFancyMenu(): boolean;
        getLabelHoverColorFancyMenu(): $DrawableColor;
        getCustomBackgroundNormalFancyMenu(): $RenderableResource;
        getCustomClickSoundFancyMenu(): $IAudio;
        getHitboxRotationDegreesFancyMenu(): number;
        setNineSliceBorderTop_FancyMenu(arg0: number): void;
        setNineSliceBorderLeft_FancyMenu(arg0: number): void;
        setNineSliceBorderRight_FancyMenu(arg0: number): void;
        setNineSliceBorderBottom_FancyMenu(arg0: number): void;
        get nineSliceCustomBackgroundBorderX_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderY_FancyMenu(): number;
        get nineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        get nineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        get originalMessageFancyMenu(): $Component;
        set nineSliceCustomBackground_FancyMenu(value: boolean);
        get resetCustomizationsListenersFancyMenu(): $List<$Runnable>;
        get hoverOrFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        get hitboxVerticalTiltDegreesFancyMenu(): number;
        get hitboxHorizontalTiltDegreesFancyMenu(): number;
        set nineSliceBorderY_FancyMenu(value: number);
        set nineSliceBorderX_FancyMenu(value: number);
        get focusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        get hoverStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        get hitboxRotationDegreesFancyMenu(): number;
        set nineSliceBorderTop_FancyMenu(value: number);
        set nineSliceBorderLeft_FancyMenu(value: number);
        set nineSliceBorderRight_FancyMenu(value: number);
        set nineSliceBorderBottom_FancyMenu(value: number);
    }
}
