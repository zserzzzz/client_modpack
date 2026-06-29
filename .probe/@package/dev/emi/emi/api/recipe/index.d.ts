import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $EmiStack, $EmiIngredient } from "@package/dev/emi/emi/api/stack";
import { $Predicate } from "@package/java/util/function";
import { $WidgetHolder } from "@package/dev/emi/emi/api/widget";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EmiRenderable_, $EmiRenderable } from "@package/dev/emi/emi/api/render";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Comparator, $List, $List_, $Map } from "@package/java/util";
export * as handler from "@package/dev/emi/emi/api/recipe/handler";

declare module "@package/dev/emi/emi/api/recipe" {
    export class $EmiPlayerInventory implements $GlobalMixin {
        static of(entity: $Player): $EmiPlayerInventory;
        isEqual(other: $EmiPlayerInventory): boolean;
        getPredicate(): $Predicate<$EmiRecipe>;
        canCraft(recipe: $EmiRecipe, amount: number): boolean;
        canCraft(recipe: $EmiRecipe): boolean;
        getCraftables(): $List<$EmiIngredient>;
        getCraftAvailability(recipe: $EmiRecipe): $List<boolean>;
        inventory: $Map<$EmiStack, $EmiStack>;
        /**
         * @deprecated
         */
        constructor(entity: $Player);
        constructor(stacks: $List_<$EmiStack>);
        get predicate(): $Predicate<$EmiRecipe>;
        get craftables(): $List<$EmiIngredient>;
    }
    export class $EmiRecipe {
    }
    export interface $EmiRecipe extends $GlobalMixin {
        getId(): $ResourceLocation;
        getInputs(): $List<$EmiIngredient>;
        getCatalysts(): $List<$EmiIngredient>;
        supportsRecipeTree(): boolean;
        getBackingRecipe(): $RecipeHolder<never>;
        getDisplayWidth(): number;
        getDisplayHeight(): number;
        hideCraftable(): boolean;
        getCategory(): $EmiRecipeCategory;
        getOutputs(): $List<$EmiStack>;
        addWidgets(arg0: $WidgetHolder): void;
        get id(): $ResourceLocation;
        get inputs(): $List<$EmiIngredient>;
        get catalysts(): $List<$EmiIngredient>;
        get backingRecipe(): $RecipeHolder<never>;
        get displayWidth(): number;
        get displayHeight(): number;
        get category(): $EmiRecipeCategory;
        get outputs(): $List<$EmiStack>;
    }
    export class $EmiRecipeCategory implements $EmiRenderable, $GlobalMixin {
        getName(): $Component;
        getId(): $ResourceLocation;
        getSort(): $Comparator<$EmiRecipe>;
        render(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        renderSimplified(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        getTooltip(): $List<$ClientTooltipComponent>;
        simplified: $EmiRenderable;
        sorter: $Comparator<$EmiRecipe>;
        icon: $EmiRenderable;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_, icon: $EmiRenderable_, simplified: $EmiRenderable_, sorter: $Comparator<$EmiRecipe>);
        constructor(id: $ResourceLocation_, icon: $EmiRenderable_, simplified: $EmiRenderable_);
        constructor(id: $ResourceLocation_, icon: $EmiRenderable_);
        get name(): $Component;
        get sort(): $Comparator<$EmiRecipe>;
        get tooltip(): $List<$ClientTooltipComponent>;
    }
    export class $EmiRecipeDecorator {
    }
    export interface $EmiRecipeDecorator extends $GlobalMixin {
        decorateRecipe(arg0: $EmiRecipe, arg1: $WidgetHolder): void;
    }
    /**
     * Values that may be interpreted as {@link $EmiRecipeDecorator}.
     */
    export type $EmiRecipeDecorator_ = ((arg0: $EmiRecipe, arg1: $WidgetHolder) => void);
}
