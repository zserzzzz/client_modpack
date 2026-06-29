import { $IRecipeCategoryDecorator } from "@package/mezz/jei/api/recipe/category/extensions";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $ICodecHelper } from "@package/mezz/jei/api/helpers";
import { $IRecipeSlotsView_, $IRecipeSlotDrawable, $IRecipeSlotsView } from "@package/mezz/jei/api/gui/ingredient";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $List, $List_ } from "@package/java/util";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $IRecipeLayoutBuilder, $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $IFocusGroup, $IRecipeManager, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record, $Object } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IRecipeExtrasBuilder } from "@package/mezz/jei/api/gui/widgets";
import { $RecipeCategoryBuilder } from "@package/pie/ilikepiefoo/compat/jei/builder";

declare module "@package/pie/ilikepiefoo/compat/jei/impl" {
    export class $CustomJSRecipe {
        getData(): $Object;
        getRecipeType(): $RecipeType<$CustomJSRecipe>;
        setRecipeData(arg0: $Object): void;
        getRecipeData(): $Object;
        constructor(arg0: $Object, arg1: $RecipeType<$CustomJSRecipe>);
        get data(): $Object;
        get recipeType(): $RecipeType<$CustomJSRecipe>;
    }
    export class $CustomRecipeCategoryDecorator$DrawDecorator<R> {
    }
    export interface $CustomRecipeCategoryDecorator$DrawDecorator<R> {
        decorate(arg0: R, arg1: $IRecipeCategory<R>, arg2: $IRecipeSlotsView_, arg3: $GuiGraphics, arg4: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomRecipeCategoryDecorator$DrawDecorator}.
     */
    export type $CustomRecipeCategoryDecorator$DrawDecorator_<R> = ((arg0: R, arg1: $IRecipeCategory<R>, arg2: $IRecipeSlotsView, arg3: $GuiGraphics, arg4: number, arg5: number) => void);
    export class $CustomRecipeCategoryDecorator$TooltipDecorator<R> {
    }
    export interface $CustomRecipeCategoryDecorator$TooltipDecorator<R> {
        decorate(arg0: $List_<$Component_>, arg1: R, arg2: $IRecipeCategory<R>, arg3: $IRecipeSlotsView_, arg4: number, arg5: number): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $CustomRecipeCategoryDecorator$TooltipDecorator}.
     */
    export type $CustomRecipeCategoryDecorator$TooltipDecorator_<R> = ((arg0: $List<$Component>, arg1: R, arg2: $IRecipeCategory<R>, arg3: $IRecipeSlotsView, arg4: number, arg5: number) => $List_<$Component_>);
    export class $CustomRecipeCategory<T> implements $IRecipeCategory<T> {
        getBackground(): $IDrawable;
        getWidth(): number;
        getIcon(): $IDrawable;
        getTitle(): $Component;
        getHeight(): number;
        draw(arg0: T, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getTooltip(arg0: $ITooltipBuilder, arg1: T, arg2: $IRecipeSlotsView_, arg3: number, arg4: number): void;
        handleInput(arg0: T, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
        isHandled(arg0: T): boolean;
        getRegistryName(arg0: T): $ResourceLocation;
        getRecipeType(): $RecipeType<T>;
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: T, arg2: $IFocusGroup): void;
        getCodec(arg0: $ICodecHelper, arg1: $IRecipeManager): $Codec<T>;
        onDisplayedIngredientsUpdate(arg0: T, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        getTooltipStrings(arg0: T, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: T, arg2: $IRecipeSlotsView_, arg3: $IFocusGroup): void;
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: T, arg2: $IFocusGroup): void;
        needsRecipeBorder(): boolean;
        constructor(arg0: $RecipeCategoryBuilder<T>);
        get background(): $IDrawable;
        get width(): number;
        get icon(): $IDrawable;
        get title(): $Component;
        get height(): number;
        get recipeType(): $RecipeType<T>;
    }
    export class $CustomJSRecipe$CustomRecipeListBuilder {
        add(arg0: $CustomJSRecipe): $CustomJSRecipe$CustomRecipeListBuilder;
        add(arg0: $Object): $CustomJSRecipe$CustomRecipeListBuilder;
        addAll(arg0: $List_<$Object>): $CustomJSRecipe$CustomRecipeListBuilder;
        custom(arg0: $Object): $CustomJSRecipe;
        getRecipes(): $List<$CustomJSRecipe>;
        getRecipeType(): $RecipeType<$CustomJSRecipe>;
        constructor(arg0: $RecipeType<$CustomJSRecipe>);
        get recipes(): $List<$CustomJSRecipe>;
        get recipeType(): $RecipeType<$CustomJSRecipe>;
    }
    export class $CustomRecipeCategoryDecorator<T> extends $Record implements $IRecipeCategoryDecorator<T> {
        draw(): $CustomRecipeCategoryDecorator$DrawDecorator<T>;
        draw(arg0: T, arg1: $IRecipeCategory<T>, arg2: $IRecipeSlotsView_, arg3: $GuiGraphics, arg4: number, arg5: number): void;
        tooltip(): $CustomRecipeCategoryDecorator$TooltipDecorator<T>;
        decorateTooltips(arg0: $ITooltipBuilder, arg1: T, arg2: $IRecipeCategory<T>, arg3: $IRecipeSlotsView_, arg4: number, arg5: number): void;
        /**
         * @deprecated
         */
        decorateExistingTooltips(arg0: $List_<$Component_>, arg1: T, arg2: $IRecipeCategory<T>, arg3: $IRecipeSlotsView_, arg4: number, arg5: number): $List<$Component>;
        constructor(draw: $CustomRecipeCategoryDecorator$DrawDecorator_<T>, tooltip: $CustomRecipeCategoryDecorator$TooltipDecorator_<T>);
    }
    /**
     * Values that may be interpreted as {@link $CustomRecipeCategoryDecorator}.
     */
    export type $CustomRecipeCategoryDecorator_<T> = { draw?: $CustomRecipeCategoryDecorator$DrawDecorator_<any>, tooltip?: $CustomRecipeCategoryDecorator$TooltipDecorator_<any>,  } | [draw?: $CustomRecipeCategoryDecorator$DrawDecorator_<any>, tooltip?: $CustomRecipeCategoryDecorator$TooltipDecorator_<any>, ];
}
