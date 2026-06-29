import { $Level_ } from "@package/net/minecraft/world/level";
import { $ColormapExpressionProvider, $Colormap, $IColorGetter } from "@package/net/mehvahdjukaar/polytone/colormap";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $ItemStack_, $Rarity, $Rarity_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ItemColor_, $ItemColor } from "@package/net/minecraft/client/color/item";
import { $ModelResourceLocation, $ModelResourceLocation_ } from "@package/net/minecraft/client/resources/model";
import { $Pattern } from "@package/java/util/regex";
import { $List, $Map_, $List_ } from "@package/java/util";
import { $Supplier_ } from "@package/java/util/function";
import { $DataComponentMap_, $DataComponentType_, $DataComponentMap } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $Targets_, $Targets } from "@package/net/mehvahdjukaar/polytone/utils";

declare module "@package/net/mehvahdjukaar/polytone/item" {
    export class $ItemModelOverride {
        matchesPredicate(stack: $ItemStack_, level: $Level_, entityTagGetter: $Supplier_<$CompoundTag>, customName: $Component_): boolean;
        namePattern(): $Pattern;
        model(): $ModelResourceLocation;
        components(): $DataComponentMap;
        stackCount(): number;
        entityTag(): $CompoundTag;
        static CODEC: $Codec<$ItemModelOverride>;
        static CODEC_MODEL_ONLY: $Codec<$ItemModelOverride$Partial>;
        constructor(map: $DataComponentMap_, model: $ModelResourceLocation_);
        constructor(components: $DataComponentMap_, model: $ModelResourceLocation_, stackCount: (number) | undefined, pattern: ($Pattern) | undefined, entityTag: ($CompoundTag_) | undefined, expression: ($ColormapExpressionProvider) | undefined, nbtMatchers: $Map_<$DataComponentType_<never>, $CompoundTag_>);
    }
    export class $ItemModifier$Partial extends $Record {
        customModels(): $List<$ItemModelOverride$Partial>;
        constructor(customModels: $List_<$ItemModelOverride$Partial_>);
    }
    /**
     * Values that may be interpreted as {@link $ItemModifier$Partial}.
     */
    export type $ItemModifier$Partial_ = { customModels?: $List_<$ItemModelOverride$Partial_>,  } | [customModels?: $List_<$ItemModelOverride$Partial_>, ];
    export class $ItemModifier extends $Record {
        tooltips(): $List<$TooltipAddition>;
        customModels(): $List<$ItemModelOverride>;
        static ofItemColor(colormap: $Colormap): $ItemModifier;
        hasBarColor(): boolean;
        shouldAttachToItem(): boolean;
        apply(item: $Item_): $ItemModifier;
        merge(newMod: $ItemModifier_): $ItemModifier;
        targets(): $Targets;
        getBarColor(): $ItemColor;
        getBarColor(itemStack: $ItemStack_): number;
        modifyTooltips(tooltips: $List_<$Component_>): void;
        getTint(): $ItemColor;
        static ofBarColor(colormap: $Colormap): $ItemModifier;
        hasTint(): boolean;
        rarity(): ($Rarity) | undefined;
        barColor(): ($IColorGetter) | undefined;
        tintGetter(): ($ItemColor) | undefined;
        removedTooltips(): $List<$Pattern>;
        static CODEC: $Codec<$ItemModifier>;
        static CODEC_ONLY_MODELS: $Codec<$ItemModifier$Partial>;
        constructor(tintGetter: ($ItemColor_) | undefined, barColor: ($IColorGetter) | undefined, rarity: ($Rarity_) | undefined, tooltips: $List_<$TooltipAddition_>, removedTooltips: $List_<$Pattern>, customModels: $List_<$ItemModelOverride>, targets: $Targets_);
        get tint(): $ItemColor;
    }
    /**
     * Values that may be interpreted as {@link $ItemModifier}.
     */
    export type $ItemModifier_ = { tintGetter?: ($ItemColor_) | undefined, targets?: $Targets_, tooltips?: $List_<$TooltipAddition_>, rarity?: ($Rarity_) | undefined, removedTooltips?: $List_<$Pattern>, customModels?: $List_<$ItemModelOverride>, barColor?: ($IColorGetter) | undefined,  } | [tintGetter?: ($ItemColor_) | undefined, targets?: $Targets_, tooltips?: $List_<$TooltipAddition_>, rarity?: ($Rarity_) | undefined, removedTooltips?: $List_<$Pattern>, customModels?: $List_<$ItemModelOverride>, barColor?: ($IColorGetter) | undefined, ];
    export class $IPolytoneItem {
    }
    export interface $IPolytoneItem {
        polytone$getModifier(): $ItemModifier;
        polytone$setModifier(arg0: $ItemModifier_): void;
    }
    export class $ItemModelOverride$Partial extends $Record {
        model(): $ModelResourceLocation;
        constructor(model: $ModelResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ItemModelOverride$Partial}.
     */
    export type $ItemModelOverride$Partial_ = { model?: $ModelResourceLocation_,  } | [model?: $ModelResourceLocation_, ];
    export class $TooltipAddition extends $Record {
        position(): number;
        component(): $Component;
        static CODEC: $Codec<$TooltipAddition>;
        constructor(component: $Component_, position: number);
    }
    /**
     * Values that may be interpreted as {@link $TooltipAddition}.
     */
    export type $TooltipAddition_ = { position?: number, component?: $Component_,  } | [position?: number, component?: $Component_, ];
}
