import { $ItemLike_, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $RecipeType_, $Recipe, $RecipeHolder, $RecipeType, $Ingredient, $Ingredient_, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $List, $Set_, $List_, $Map } from "@package/java/util";
import { $StandardProcessingRecipe$Builder, $StandardProcessingRecipe, $ProcessingOutput, $StandardProcessingRecipe$Factory_, $ProcessingRecipeBuilder, $ProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $ItemTooltipEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $ItemApplicationRecipe$Factory_, $ItemApplicationRecipe$Builder, $ItemApplicationRecipe } from "@package/com/simibubi/create/content/kinetics/deployer";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $RecipeWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $Function_, $UnaryOperator_, $Predicate_, $Supplier } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $SequencedAssemblySubCategory } from "@package/com/simibubi/create/compat/jei/category/sequencedAssembly";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record, $Class, $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/processing/sequenced" {
    export class $SequencedAssemblyRecipe implements $Recipe<$RecipeWrapper> {
        matches(arg0: $RecipeWrapper, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getSequence(): $List<$SequencedRecipe<never>>;
        getSerializer(): $RecipeSerializer<never>;
        static getRecipes<R extends $ProcessingRecipe<never, never>>(arg0: $Level_, arg1: $ItemStack_, arg2: $RecipeType_<R>, arg3: $Class<R>, arg4: $Predicate_<$RecipeHolder<R>>): $List<$RecipeHolder<R>>;
        isSpecial(): boolean;
        static addToTooltip(arg0: $ItemTooltipEvent): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        static getRecipe<R extends $ProcessingRecipe<never, never>>(arg0: $Level_, arg1: $ItemStack_, arg2: $RecipeType_<R>, arg3: $Class<R>): ($RecipeHolder<R>) | undefined;
        static getRecipe<I extends $RecipeInput, R extends $ProcessingRecipe<I, never>>(arg0: $Level_, arg1: I, arg2: $RecipeType_<R>, arg3: $Class<R>, arg4: $Predicate_<$RecipeHolder<R>>): ($RecipeHolder<R>) | undefined;
        static getRecipe<I extends $RecipeInput, R extends $ProcessingRecipe<I, never>>(arg0: $Level_, arg1: I, arg2: $RecipeType_<R>, arg3: $Class<R>): ($RecipeHolder<R>) | undefined;
        assemble(arg0: $RecipeWrapper, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredient(): $Ingredient;
        getTransitionalItem(): $ItemStack;
        getLoops(): number;
        getOutputChance(): number;
        getGroup(): string;
        getRemainingItems(arg0: $RecipeWrapper): $NonNullList<$ItemStack>;
        getToastSymbol(): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        isIncomplete(): boolean;
        showNotification(): boolean;
        resultPool: $List<$ProcessingOutput>;
        constructor(arg0: $SequencedAssemblyRecipeSerializer);
        get type(): $RecipeType<never>;
        get sequence(): $List<$SequencedRecipe<never>>;
        get serializer(): $RecipeSerializer<never>;
        get special(): boolean;
        get ingredient(): $Ingredient;
        get transitionalItem(): $ItemStack;
        get loops(): number;
        get outputChance(): number;
        get group(): string;
        get toastSymbol(): $ItemStack;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
    }
    export class $SequencedAssemblyItem extends $Item {
        getProgress(arg0: $ItemStack_): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $SequencedRecipe<T extends $ProcessingRecipe<never, never>> {
        getRecipe(): T;
        getAsAssemblyRecipe(): $IAssemblyRecipe;
        static CODEC: $Codec<$SequencedRecipe<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SequencedRecipe<never>>;
        constructor(arg0: T);
        get recipe(): T;
        get asAssemblyRecipe(): $IAssemblyRecipe;
    }
    export class $SequencedAssemblyRecipe$SequencedAssembly extends $Record {
        progress(): number;
        id(): $ResourceLocation;
        step(): number;
        static CODEC: $Codec<$SequencedAssemblyRecipe$SequencedAssembly>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SequencedAssemblyRecipe$SequencedAssembly>;
        constructor(id: $ResourceLocation_, step: number, progress: number);
    }
    /**
     * Values that may be interpreted as {@link $SequencedAssemblyRecipe$SequencedAssembly}.
     */
    export type $SequencedAssemblyRecipe$SequencedAssembly_ = { id?: $ResourceLocation_, step?: number, progress?: number,  } | [id?: $ResourceLocation_, step?: number, progress?: number, ];
    export class $SequencedAssemblyRecipeSerializer implements $RecipeSerializer<$SequencedAssemblyRecipe> {
        codec(): $MapCodec<$SequencedAssemblyRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SequencedAssemblyRecipe>;
        STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SequencedAssemblyRecipe>;
        constructor();
    }
    export class $SequencedAssemblyRecipeBuilder {
        loops(arg0: number): $SequencedAssemblyRecipeBuilder;
        build(): $RecipeHolder<$SequencedAssemblyRecipe>;
        build(arg0: $RecipeOutput): void;
        require(arg0: $TagKey_<$Item>): $SequencedAssemblyRecipeBuilder;
        require(arg0: $Ingredient_): $SequencedAssemblyRecipeBuilder;
        require(arg0: $ItemLike_): $SequencedAssemblyRecipeBuilder;
        transitionTo(arg0: $ItemLike_): $SequencedAssemblyRecipeBuilder;
        addOutput(arg0: $ItemStack_, arg1: number): $SequencedAssemblyRecipeBuilder;
        addOutput(arg0: $ItemLike_, arg1: number): $SequencedAssemblyRecipeBuilder;
        addStep<R extends $ItemApplicationRecipe>(arg0: $ItemApplicationRecipe$Factory_<R>, arg1: $UnaryOperator_<$ItemApplicationRecipe$Builder<R>>): $SequencedAssemblyRecipeBuilder;
        addStep<R extends $StandardProcessingRecipe<never>>(arg0: $StandardProcessingRecipe$Factory_<R>, arg1: $UnaryOperator_<$StandardProcessingRecipe$Builder<R>>): $SequencedAssemblyRecipeBuilder;
        addStep<B extends $ProcessingRecipeBuilder<never, never, B>>(arg0: $Function_<$ResourceLocation, B>, arg1: $UnaryOperator_<B>): $SequencedAssemblyRecipeBuilder;
        constructor(arg0: $ResourceLocation_);
    }
    export class $IAssemblyRecipe {
    }
    export interface $IAssemblyRecipe {
        addAssemblyIngredients(arg0: $List_<$Ingredient_>): void;
        addRequiredMachines(arg0: $Set_<$ItemLike_>): void;
        getDescriptionForAssembly(): $Component;
        addAssemblyFluidIngredients(arg0: $List_<$SizedFluidIngredient>): void;
        supportsAssembly(): boolean;
        getJEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
        get descriptionForAssembly(): $Component;
        get JEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
    }
}
