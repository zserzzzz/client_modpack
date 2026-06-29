import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $KubeRecipe } from "@package/dev/latvian/mods/kubejs/recipe";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CookingBookCategory_, $Ingredient_, $CraftingBookCategory_ } from "@package/net/minecraft/world/item/crafting";
import { $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Map_, $List_ } from "@package/java/util";
import { $HeatCondition_, $ProcessingOutput } from "@package/com/simibubi/create/content/processing/recipe";

declare module "@side-only/server/events/recipes" {
    export class Create$Cutting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Milling extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$MechanicalCrafting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        acceptMirrored(acceptMirrored: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class DocumentedRecipes {
        minecraft: {
            campfire_cooking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$CampfireCooking;
            smithing_transform(result: $ItemStack_, template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTransform;
            smelting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smelting;
            smithing_trim(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTrim;
            crafting_shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Minecraft$CraftingShapeless;
            smoking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smoking;
            stonecutting(result: $ItemStack_, ingredient: $Ingredient_): Minecraft$Stonecutting;
            crafting_shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Minecraft$CraftingShaped;
            blasting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Blasting;
        }
        kubejs: {
            shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Kubejs$Shapeless;
            shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Kubejs$Shaped;
        }
        create: {
            sandpaper_polishing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$SandpaperPolishing;
            item_application(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$ItemApplication;
            basin(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Basin;
            haunting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Haunting;
            mixing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Mixing;
            pressing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Pressing;
            emptying(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Emptying;
            deploying(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Deploying;
            milling(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Milling;
            mechanical_crafting(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>, acceptMirrored?: boolean): Create$MechanicalCrafting;
            compacting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Compacting;
            crushing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Crushing;
            sequenced_assembly(results: $List_<$ProcessingOutput>, ingredient: $Ingredient_, sequence: $List_<$KubeRecipe>, transitionalItem?: $ProcessingOutput, loops?: number): Create$SequencedAssembly;
            filling(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Filling;
            cutting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Cutting;
            splashing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Splashing;
            conversion(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Conversion;
        }
    }
    export class Create$Conversion extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$Stonecutting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class Create$Crushing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Haunting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$CampfireCooking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Minecraft$Smelting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Kubejs$Shaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Create$Mixing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$SandpaperPolishing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Filling extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$CraftingShapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Create$ItemApplication extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        keepHeldItem(keepHeldItem: boolean): this;
        superheated(): this;
        heated(): this;
        keepHeldItem(): this;
    }
    export class Create$Pressing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$Smoking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Create$Emptying extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Compacting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$Blasting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Create$SequencedAssembly extends $KubeRecipe {
        results(results: $List_<$ProcessingOutput>): this;
        ingredient(ingredient: $Ingredient_): this;
        sequence(sequence: $List_<$KubeRecipe>): this;
        transitionalItem(transitionalItem: $ProcessingOutput): this;
        loops(loops: number): this;
    }
    export class Minecraft$SmithingTransform extends $KubeRecipe {
        result(result: $ItemStack_): this;
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Kubejs$Shapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Minecraft$SmithingTrim extends $KubeRecipe {
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Minecraft$CraftingShaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Create$Deploying extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        keepHeldItem(keepHeldItem: boolean): this;
        superheated(): this;
        heated(): this;
        keepHeldItem(): this;
    }
    export class Create$Splashing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Basin extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
}
