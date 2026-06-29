import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $Object } from "@package/java/lang";
import { $ProcessingOutput, $HeatCondition } from "@package/com/simibubi/create/content/processing/recipe";
import { $SimpleRecipeComponent, $RecipeComponentType, $UniqueIdBuilder_ } from "@package/dev/latvian/mods/kubejs/recipe/component";

declare module "@package/dev/latvian/mods/kubejs/create/recipe" {
    export class $ProcessingOutputRecipeComponent extends $SimpleRecipeComponent<$ProcessingOutput> {
        isEmpty(value: $ProcessingOutput): boolean;
        replace(cx: $RecipeScriptContext, original: $ProcessingOutput, match: $ReplacementMatchInfo_, arg3: $Object): $ProcessingOutput;
        matches(cx: $RecipeMatchContext, value: $ProcessingOutput, match: $ReplacementMatchInfo_): boolean;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $ProcessingOutput): void;
        static TYPE_INFO: $TypeInfo;
        static TYPE: $RecipeComponentType<$ProcessingOutput>;
        constructor(type: $RecipeComponentType<never>);
    }
    export class $CreateRecipeComponents {
        static SIZED_FLUID_INGREDIENT: $RecipeComponentType<$SizedFluidIngredient>;
        static HEAT_CONDITION: $RecipeComponentType<$HeatCondition>;
    }
    export interface $CreateRecipeComponents {
    }
}
