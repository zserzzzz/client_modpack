import { $IBoxElement, $ColorPalette, $ColorPalette_, $BoxStyle } from "@package/snownee/jade/api/ui";
import { $Style } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/snownee/jade/api/theme" {
    export class $Theme {
        static DEFAULT_THEME_ID: $ResourceLocation;
        hidden: boolean;
        changeOpacity: number;
        iconSlotSprite: $ResourceLocation;
        iconSlotInflation: number;
        lightColorScheme: boolean;
        iconSlotSpriteCache: $IBoxElement;
        nestedBoxStyle: $BoxStyle;
        viewGroupStyle: $BoxStyle;
        tooltipStyle: $BoxStyle;
        changeRoundCorner: boolean;
        id: $ResourceLocation;
        text: $TextSetting;
        constructor(arg0: $BoxStyle, arg1: $BoxStyle, arg2: $BoxStyle, arg3: $TextSetting_, arg4: (boolean) | undefined, arg5: number, arg6: boolean, arg7: boolean, arg8: ($ResourceLocation_) | undefined, arg9: number);
    }
    export class $TextSetting extends $Record {
        shadow(): boolean;
        colors(): $ColorPalette;
        modNameStyle(): $Style;
        itemAmountColor(): number;
        static DEFAULT: $TextSetting;
        constructor(arg0: $ColorPalette_, arg1: boolean, arg2: ($Style) | undefined, arg3: number);
        constructor(colors: $ColorPalette_, shadow: boolean, modNameStyle: $Style, itemAmountColor: number);
    }
    /**
     * Values that may be interpreted as {@link $TextSetting}.
     */
    export type $TextSetting_ = { modNameStyle?: $Style, colors?: $ColorPalette_, itemAmountColor?: number, shadow?: boolean,  } | [modNameStyle?: $Style, colors?: $ColorPalette_, itemAmountColor?: number, shadow?: boolean, ];
}
