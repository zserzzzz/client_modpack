import { $JsonObject_, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $SmithingTransformRecipeAccessor, $SmithingTrimRecipeAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $DynamicOps, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ShapedRecipeAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $ResourceManager, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Map, $Set, $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $IntFunction, $Predicate_, $Predicate } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { RegistryMarked, RegistryTypes, SpecialTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $WithConditions } from "@package/net/neoforged/neoforge/common/conditions";
import { $RecipeSchema } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $Enum, $Iterable_, $Record, $Object } from "@package/java/lang";
import { $SizedIngredient, $ICustomIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $ItemLike_, $ItemLike, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ExtendedIngredient } from "@package/org/embeddedt/modernfix/neoforge/recipe";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $FireworkExplosion$Shape } from "@package/net/minecraft/world/item/component";
import { $Multimap } from "@package/com/google/common/collect";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Stream } from "@package/java/util/stream";
import { $RecipeInputMixin } from "@package/dev/latvian/mods/kubejs/core/mixin";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RecipeManagerAccessor } from "@package/com/possible_triangle/sliceanddice/mixins";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $IngredientKJS, $RecipeHolderKJS, $ReloadableServerResourcesKJS, $RecipeInputKJS, $RecipeManagerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $CustomIngredient, $FabricIngredient } from "@package/net/fabricmc/fabric/api/recipe/v1/ingredient";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/crafting" {
    export class $RecipeCache$Entry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RecipeCache$Entry}.
     */
    export type $RecipeCache$Entry_ = { value?: $RecipeHolder_<$CraftingRecipe>, height?: number, key?: $NonNullList<$ItemStack_>, width?: number,  } | [value?: $RecipeHolder_<$CraftingRecipe>, height?: number, key?: $NonNullList<$ItemStack_>, width?: number, ];
    export class $Recipe<T extends $RecipeInput> {
        static CODEC: $Codec<$Recipe<never>>;
        static CONDITIONAL_CODEC: $Codec<($WithConditions<$Recipe<never>>) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Recipe<never>>;
    }
    export interface $Recipe<T extends $RecipeInput> {
        matches(input: T, level: $Level_): boolean;
        getType(): $RecipeType<never>;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        getRemainingItems(input: T): $NonNullList<$ItemStack>;
        getSerializer(): $RecipeSerializer<never>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        assemble(input: T, registries: $HolderLookup$Provider): $ItemStack;
        getToastSymbol(): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        get type(): $RecipeType<never>;
        get group(): string;
        get serializer(): $RecipeSerializer<never>;
        get special(): boolean;
        get toastSymbol(): $ItemStack;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
    }
    export class $CampfireCookingRecipe extends $AbstractCookingRecipe {
        result: $ItemStack;
        ingredient: $Ingredient;
        type: $RecipeType<never>;
        experience: number;
        cookingTime: number;
        group: string;
        constructor(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
    }
    export class $SmithingRecipeInput extends $Record implements $RecipeInput {
        base(): $ItemStack;
        size(): number;
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        template(): $ItemStack;
        addition(): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        findAll(): $List<$ItemStack>;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        self(): $RecipeInput;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SmithingRecipeInput}.
     */
    export type $SmithingRecipeInput_ = { template?: $ItemStack_, addition?: $ItemStack_, base?: $ItemStack_,  } | [template?: $ItemStack_, addition?: $ItemStack_, base?: $ItemStack_, ];
    export class $Ingredient$TagValue extends $Record implements $Ingredient$Value {
        tag(): $TagKey<$Item>;
        getItems(): $Collection<$ItemStack>;
        static CODEC: $Codec<$Ingredient$TagValue>;
        static MAP_CODEC: $MapCodec<$Ingredient$TagValue>;
        constructor(tag: $TagKey_<$Item>);
        get items(): $Collection<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient$TagValue}.
     */
    export type $Ingredient$TagValue_ = { tag?: $TagKey_<$Item>,  } | [tag?: $TagKey_<$Item>, ];
    export class $RecipeCache {
        get(level: $Level_, input: $CraftingInput): ($RecipeHolder<$CraftingRecipe>) | undefined;
        constructor(size: number);
    }
    export class $RecipeHolder<T extends $Recipe<never>> extends $Record implements $RecipeHolderKJS {
        value(): T;
        id(): $ResourceLocation;
        kjs$getTypeKey(): $ResourceKey<any>;
        self(): $RecipeHolder<never>;
        getSerializer(): $RecipeSerializer<never>;
        getRecipe(): $Recipe<never>;
        getGroup(): string;
        setGroup(group: string): void;
        getOrCreateId(): $ResourceLocation;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getSchema(): $RecipeSchema;
        getType(): $ResourceLocation;
        getMod(): string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RecipeHolder<never>>;
        constructor(arg0: $ResourceLocation_, arg1: T);
        get serializer(): $RecipeSerializer<never>;
        get recipe(): $Recipe<never>;
        get orCreateId(): $ResourceLocation;
        get schema(): $RecipeSchema;
        get type(): $ResourceLocation;
        get mod(): string;
    }
    /**
     * Values that may be interpreted as {@link $RecipeHolder}.
     */
    export type $RecipeHolder_<T> = { value?: $Recipe<never>, id?: $ResourceLocation_,  } | [value?: $Recipe<never>, id?: $ResourceLocation_, ];
    export class $SuspiciousStewRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $Ingredient$Value {
        static CODEC: $Codec<$Ingredient$Value>;
        static MAP_CODEC: $MapCodec<$Ingredient$Value>;
    }
    export interface $Ingredient$Value {
        getItems(): $Collection<$ItemStack>;
        get items(): $Collection<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient$Value}.
     */
    export type $Ingredient$Value_ = (() => $Collection_<$ItemStack_>);
    export interface $RecipeType<T> extends RegistryMarked<RegistryTypes.RecipeTypeTag, RegistryTypes.RecipeType> {}
    export class $SingleItemRecipe$Factory<T extends $SingleItemRecipe> {
    }
    export interface $SingleItemRecipe$Factory<T extends $SingleItemRecipe> {
        create(group: string, ingredient: $Ingredient_, result: $ItemStack_): T;
    }
    /**
     * Values that may be interpreted as {@link $SingleItemRecipe$Factory}.
     */
    export type $SingleItemRecipe$Factory_<T> = ((arg0: string, arg1: $Ingredient, arg2: $ItemStack) => T);
    export class $CraftingInput implements $RecipeInput {
        size(): number;
        isEmpty(): boolean;
        static of(width: number, height: number, items: $List_<$ItemStack_>): $CraftingInput;
        width(): number;
        getItem(row: number, column: number): $ItemStack;
        getItem(index: number): $ItemStack;
        height(): number;
        items(): $List<$ItemStack>;
        static ofPositioned(width: number, height: number, items: $List_<$ItemStack_>): $CraftingInput$Positioned;
        ingredientCount(): number;
        stackedContents(): $StackedContents;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        findAll(): $List<$ItemStack>;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        self(): $RecipeInput;
        static EMPTY: $CraftingInput;
        constructor(width: number, height: number, item: $List_<$ItemStack_>);
        get empty(): boolean;
    }
    export class $CookingBookCategory extends $Enum<$CookingBookCategory> implements $StringRepresentable {
        static values(): $CookingBookCategory[];
        static valueOf(arg0: string): $CookingBookCategory;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$CookingBookCategory>;
        static BLOCKS: $CookingBookCategory;
        static MISC: $CookingBookCategory;
        static FOOD: $CookingBookCategory;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CookingBookCategory}.
     */
    export type $CookingBookCategory_ = "food" | "blocks" | "misc";
    export class $Ingredient implements $Predicate<$ItemStack>, $ExtendedIngredient, $FabricIngredient, $IngredientKJS {
        test(stack: $ItemStack_ | null): boolean;
        isEmpty(): boolean;
        static of(stream: $Stream<$ItemStack_>): $Ingredient;
        static of(...items: $ItemLike_[]): $Ingredient;
        static of(): $Ingredient;
        static of(tag: $TagKey_<$Item>): $Ingredient;
        static of(...stacks: $ItemStack_[]): $Ingredient;
        getValues(): $Ingredient$Value[];
        isSimple(): boolean;
        static fromValues(stream: $Stream<$Ingredient$Value_>): $Ingredient;
        handler$zgg000$modernfix$hasNoItems(arg0: $CallbackInfoReturnable<any>): void;
        getCustomIngredient(): $CustomIngredient;
        canBeUsedForMatching(): boolean;
        mfix$clearReference(): void;
        hasNoItems(): boolean;
        isCustom(): boolean;
        self(): $Ingredient;
        getStackingIds(): $IntList;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        requiresTesting(): boolean;
        getCodec(): $Codec<never>;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        isWildcard(): boolean;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        toIngredientString(ops: $DynamicOps<$Tag_>): string;
        withCount(count: number): $SizedIngredient;
        and(ingredient: $Ingredient_): $Ingredient;
        or(ingredient: $Ingredient_): $Ingredient;
        except(subtracted: $Ingredient_): $Ingredient;
        asIngredient(): $Ingredient;
        asStack(): $SizedIngredient;
        getStackArray(): $ItemStack[];
        containsAnyTag(): boolean;
        getTagKey(): $TagKey<$Item>;
        getDisplayStacks(): $ItemStackSet;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        testItem(item: $Item_): boolean;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        getStacks(): $ItemStackSet;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matchesAny(cx: $RecipeMatchContext, itemLikes: $Iterable_<$ItemLike>, exact: boolean): boolean;
        static CODEC: $Codec<$Ingredient>;
        static LIST_CODEC_NONEMPTY: $Codec<$List<$Ingredient>>;
        stackingIds: $IntList;
        static CODEC_NONEMPTY: $Codec<$Ingredient>;
        static CONTENTS_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Ingredient>;
        values: $Ingredient$Value[];
        static LIST_CODEC: $Codec<$List<$Ingredient>>;
        itemStacks: $ItemStack[];
        static EMPTY: $Ingredient;
        static MAP_CODEC_NONEMPTY: $MapCodec<$Ingredient>;
        constructor(values: $Stream<$Ingredient$Value_>);
        constructor(arg0: $ICustomIngredient);
        get empty(): boolean;
        get simple(): boolean;
        get customIngredient(): $CustomIngredient;
        get custom(): boolean;
        get codec(): $Codec<never>;
        get wildcard(): boolean;
        get stackArray(): $ItemStack[];
        get tagKey(): $TagKey<$Item>;
        get displayStacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient}.
     */
    export type $Ingredient_ = $ItemStack_ | $Ingredient[] | RegExp | "*" | "-" | `#${RegistryTypes.ItemTag}` | `@${SpecialTypes.ModId}` | `%${RegistryTypes.CreativeModeTab}`;
    export class $SmithingTransformRecipe implements $SmithingRecipe, $SmithingTransformRecipeAccessor {
        matches(input: $SmithingRecipeInput_, level: $Level_): boolean;
        getSerializer(): $RecipeSerializer<never>;
        isBaseIngredient(stack: $ItemStack_): boolean;
        isAdditionIngredient(stack: $ItemStack_): boolean;
        isTemplateIngredient(stack: $ItemStack_): boolean;
        assemble(input: $SmithingRecipeInput_, registries: $HolderLookup$Provider): $ItemStack;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getType(): $RecipeType<never>;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        getToastSymbol(): $ItemStack;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        getRemainingItems(input: $SmithingRecipeInput_): $NonNullList<$ItemStack>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
        getAddition(): $Ingredient;
        template: $Ingredient;
        result: $ItemStack;
        base: $Ingredient;
        addition: $Ingredient;
        constructor(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_, result: $ItemStack_);
        get serializer(): $RecipeSerializer<never>;
        get incomplete(): boolean;
        get type(): $RecipeType<never>;
        get toastSymbol(): $ItemStack;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
    }
    export interface $RecipeSerializer<T> extends RegistryMarked<RegistryTypes.RecipeSerializerTag, RegistryTypes.RecipeSerializer> {}
    export class $SmokingRecipe extends $AbstractCookingRecipe {
        result: $ItemStack;
        ingredient: $Ingredient;
        type: $RecipeType<never>;
        experience: number;
        cookingTime: number;
        group: string;
        constructor(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
    }
    export class $RecipeManager extends $SimpleJsonResourceReloadListener implements $IdentifiableResourceReloadListener, $RecipeManagerAccessor, $RecipeManagerKJS {
        apply(object: $Map_<$ResourceLocation_, $JsonElement_>, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        getRecipeFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, level: $Level_, lastRecipe: $RecipeHolder_<T> | null): ($RecipeHolder<T>) | undefined;
        getRecipeFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, level: $Level_, lastRecipe: $ResourceLocation_ | null): ($RecipeHolder<T>) | undefined;
        getRecipeFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, level: $Level_): ($RecipeHolder<T>) | undefined;
        static createCheck<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>): $RecipeManager$CachedCheck<I, T>;
        static fromJson(recipeId: $ResourceLocation_, json: $JsonObject_, registries: $HolderLookup$Provider): $RecipeHolder<never>;
        byKey(recipeId: $ResourceLocation_): ($RecipeHolder<never>) | undefined;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        getRecipes(): $Collection<$RecipeHolder<never>>;
        getAllRecipesFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>): $List<$RecipeHolder<T>>;
        getRecipesFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, level: $Level_): $List<$RecipeHolder<T>>;
        getRemainingItemsFor<I extends $RecipeInput, T extends $Recipe<I>>(recipeType: $RecipeType_<T>, input: I, lvel: $Level_): $NonNullList<$ItemStack>;
        replaceRecipes(recipes: $Iterable_<$RecipeHolder<never>>): void;
        getOrderedRecipes(): $Collection<$RecipeHolder<never>>;
        getRecipeIds(): $Stream<$ResourceLocation>;
        hadErrorsLoading(): boolean;
        kjs$getRecipeIdMap(): $Map<any, any>;
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$replaceRecipes(map: $Map_<any, any>): void;
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
        getByName(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        setByType(arg0: $Multimap<$RecipeType_<never>, $RecipeHolder_<never>>): void;
        getByType(): $Multimap<$RecipeType<never>, $RecipeHolder<never>>;
        setByName(arg0: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
        static LOGGER: $Logger;
        registries: $HolderLookup$Provider;
        constructor(registries: $HolderLookup$Provider);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get recipes(): $Collection<$RecipeHolder<never>>;
        get orderedRecipes(): $Collection<$RecipeHolder<never>>;
        get recipeIds(): $Stream<$ResourceLocation>;
    }
    export class $SimpleCraftingRecipeSerializer<T extends $CraftingRecipe> implements $RecipeSerializer<T> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(_constructor: $SimpleCraftingRecipeSerializer$Factory_<T>);
    }
    export class $CraftingBookCategory extends $Enum<$CraftingBookCategory> implements $StringRepresentable {
        static values(): $CraftingBookCategory[];
        static valueOf(arg0: string): $CraftingBookCategory;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static EQUIPMENT: $CraftingBookCategory;
        static CODEC: $Codec<$CraftingBookCategory>;
        static BUILDING: $CraftingBookCategory;
        static REDSTONE: $CraftingBookCategory;
        static MISC: $CraftingBookCategory;
        static BY_ID: $IntFunction<$CraftingBookCategory>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CraftingBookCategory>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CraftingBookCategory}.
     */
    export type $CraftingBookCategory_ = "building" | "redstone" | "equipment" | "misc";
    export class $MapExtendingRecipe extends $ShapedRecipe {
        result: $ItemStack;
        pattern: $ShapedRecipePattern;
        group: string;
        constructor(category: $CraftingBookCategory_);
    }
    export class $CraftingInput$Positioned extends $Record {
        input(): $CraftingInput;
        top(): number;
        left(): number;
        static EMPTY: $CraftingInput$Positioned;
        constructor(arg0: $CraftingInput, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $CraftingInput$Positioned}.
     */
    export type $CraftingInput$Positioned_ = { input?: $CraftingInput, left?: number, top?: number,  } | [input?: $CraftingInput, left?: number, top?: number, ];
    export class $ShapedRecipe$Serializer implements $RecipeSerializer<$ShapedRecipe> {
        codec(): $MapCodec<$ShapedRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ShapedRecipe>;
        static CODEC: $MapCodec<$ShapedRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapedRecipe>;
        constructor();
    }
    export class $CraftingRecipe {
    }
    export interface $CraftingRecipe extends $Recipe<$CraftingInput> {
        getType(): $RecipeType<never>;
        category(): $CraftingBookCategory;
        get type(): $RecipeType<never>;
    }
    export class $ShapedRecipe implements $CraftingRecipe, $ShapedRecipeAccessor {
        matches(input: $CraftingInput, level: $Level_): boolean;
        category(): $CraftingBookCategory;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        getSerializer(): $RecipeSerializer<never>;
        getWidth(): number;
        getHeight(): number;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getType(): $RecipeType<never>;
        getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        getToastSymbol(): $ItemStack;
        create$getPattern(): $ShapedRecipePattern;
        result: $ItemStack;
        pattern: $ShapedRecipePattern;
        group: string;
        constructor(group: string, category: $CraftingBookCategory_, pattern: $ShapedRecipePattern, result: $ItemStack_, showNotification: boolean);
        constructor(group: string, category: $CraftingBookCategory_, pattern: $ShapedRecipePattern, result: $ItemStack_);
        get serializer(): $RecipeSerializer<never>;
        get width(): number;
        get height(): number;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
        get type(): $RecipeType<never>;
        get special(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $FireworkStarRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        static SHAPE_INGREDIENT: $Ingredient;
        static SHAPE_BY_ITEM: $Map<$Item, $FireworkExplosion$Shape>;
        constructor(category: $CraftingBookCategory_);
    }
    export class $SmithingRecipe {
    }
    export interface $SmithingRecipe extends $Recipe<$SmithingRecipeInput> {
        getType(): $RecipeType<never>;
        isBaseIngredient(stack: $ItemStack_): boolean;
        isAdditionIngredient(stack: $ItemStack_): boolean;
        isTemplateIngredient(stack: $ItemStack_): boolean;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        getToastSymbol(): $ItemStack;
        get type(): $RecipeType<never>;
        get toastSymbol(): $ItemStack;
    }
    export class $SingleRecipeInput extends $Record implements $RecipeInput {
        size(): number;
        item(): $ItemStack;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        findAll(): $List<$ItemStack>;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        self(): $RecipeInput;
        constructor(arg0: $ItemStack_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SingleRecipeInput}.
     */
    export type $SingleRecipeInput_ = { item?: $ItemStack_,  } | [item?: $ItemStack_, ];
    export class $AbstractCookingRecipe implements $Recipe<$SingleRecipeInput> {
        matches(input: $SingleRecipeInput_, level: $Level_): boolean;
        getType(): $RecipeType<never>;
        category(): $CookingBookCategory;
        /**
         * Gets the experience of this recipe
         */
        getExperience(): number;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        /**
         * Gets the cook time in ticks
         */
        getCookingTime(): number;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        assemble(input: $SingleRecipeInput_, registries: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getRemainingItems(input: $SingleRecipeInput_): $NonNullList<$ItemStack>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        getToastSymbol(): $ItemStack;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        result: $ItemStack;
        ingredient: $Ingredient;
        type: $RecipeType<never>;
        experience: number;
        cookingTime: number;
        group: string;
        constructor(type: $RecipeType_<never>, group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
        get ingredients(): $NonNullList<$Ingredient>;
        get special(): boolean;
        get toastSymbol(): $ItemStack;
        get incomplete(): boolean;
    }
    export class $ShieldDecorationRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $ArmorDyeRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $Ingredient$ItemValue extends $Record implements $Ingredient$Value {
        item(): $ItemStack;
        getItems(): $Collection<$ItemStack>;
        static CODEC: $Codec<$Ingredient$ItemValue>;
        static MAP_CODEC: $MapCodec<$Ingredient$ItemValue>;
        constructor(item: $ItemStack_);
        get items(): $Collection<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $Ingredient$ItemValue}.
     */
    export type $Ingredient$ItemValue_ = { item?: $ItemStack_,  } | [item?: $ItemStack_, ];
    export class $SimpleCookingSerializer<T extends $AbstractCookingRecipe> implements $RecipeSerializer<T> {
        codec(): $MapCodec<T>;
        create(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number): $AbstractCookingRecipe;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(factory: $AbstractCookingRecipe$Factory_<T>, cookingTime: number);
    }
    export class $MapCloningRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $SingleItemRecipe$Serializer<T extends $SingleItemRecipe> implements $RecipeSerializer<T> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        factory: $SingleItemRecipe$Factory<T>;
        constructor(factory: $SingleItemRecipe$Factory_<T>);
    }
    export class $ShapelessRecipe$Serializer implements $RecipeSerializer<$ShapelessRecipe> {
        codec(): $MapCodec<$ShapelessRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ShapelessRecipe>;
        static CODEC: $MapCodec<$ShapelessRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapelessRecipe>;
        constructor();
    }
    export class $ShapedRecipePattern$Data extends $Record {
        pattern(): $List<string>;
        key(): $Map<string, $Ingredient>;
        static MAP_CODEC: $MapCodec<$ShapedRecipePattern$Data>;
        constructor(key: $Map_<string, $Ingredient_>, pattern: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $ShapedRecipePattern$Data}.
     */
    export type $ShapedRecipePattern$Data_ = { pattern?: $List_<string>, key?: $Map_<string, $Ingredient_>,  } | [pattern?: $List_<string>, key?: $Map_<string, $Ingredient_>, ];
    export class $ShapedRecipePattern {
        matches(input: $CraftingInput): boolean;
        static of(key: $Map_<string, $Ingredient_>, pattern: $List_<string>): $ShapedRecipePattern;
        static of(key: $Map_<string, $Ingredient_>, ...pattern: string[]): $ShapedRecipePattern;
        width(): number;
        height(): number;
        ingredients(): $NonNullList<$Ingredient>;
        static shrink(pattern: $List_<string>): string[];
        static getMaxWidth(): number;
        static setCraftingSize(arg0: number, arg1: number): void;
        static getMaxHeight(): number;
        static maxHeight: number;
        static MAP_CODEC: $MapCodec<$ShapedRecipePattern>;
        symmetrical: boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShapedRecipePattern>;
        static maxWidth: number;
        constructor(width: number, height: number, ingredients: $NonNullList<$Ingredient_>, data: ($ShapedRecipePattern$Data_) | undefined);
    }
    export class $ShapelessRecipe implements $CraftingRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        category(): $CraftingBookCategory;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        getSerializer(): $RecipeSerializer<never>;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getType(): $RecipeType<never>;
        getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        getToastSymbol(): $ItemStack;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        result: $ItemStack;
        ingredients: $NonNullList<$Ingredient>;
        group: string;
        constructor(group: string, category: $CraftingBookCategory_, result: $ItemStack_, ingredients: $NonNullList<$Ingredient_>);
        get serializer(): $RecipeSerializer<never>;
        get type(): $RecipeType<never>;
        get special(): boolean;
        get toastSymbol(): $ItemStack;
        get incomplete(): boolean;
    }
    export class $BannerDuplicateRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $SingleItemRecipe implements $Recipe<$SingleRecipeInput> {
        getType(): $RecipeType<never>;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        getSerializer(): $RecipeSerializer<never>;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        assemble(input: $SingleRecipeInput_, registries: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getRemainingItems(input: $SingleRecipeInput_): $NonNullList<$ItemStack>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        getToastSymbol(): $ItemStack;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        result: $ItemStack;
        ingredient: $Ingredient;
        group: string;
        constructor(type: $RecipeType_<never>, serializer: $RecipeSerializer_<never>, group: string, ingredient: $Ingredient_, result: $ItemStack_);
        get type(): $RecipeType<never>;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get special(): boolean;
        get toastSymbol(): $ItemStack;
        get incomplete(): boolean;
    }
    export class $FireworkRocketRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $DecoratedPotRecipe extends $CustomRecipe {
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $StonecutterRecipe extends $SingleItemRecipe {
        matches(input: $SingleRecipeInput_, level: $Level_): boolean;
        result: $ItemStack;
        ingredient: $Ingredient;
        group: string;
        constructor(group: string, ingredient: $Ingredient_, result: $ItemStack_);
    }
    export class $BlastingRecipe extends $AbstractCookingRecipe {
        result: $ItemStack;
        ingredient: $Ingredient;
        type: $RecipeType<never>;
        experience: number;
        cookingTime: number;
        group: string;
        constructor(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
    }
    export class $SmithingTransformRecipe$Serializer implements $RecipeSerializer<$SmithingTransformRecipe> {
        codec(): $MapCodec<$SmithingTransformRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTransformRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTransformRecipe>;
        constructor();
    }
    export class $ShulkerBoxColoring extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $TippedArrowRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $SimpleCraftingRecipeSerializer$Factory<T extends $CraftingRecipe> {
    }
    export interface $SimpleCraftingRecipeSerializer$Factory<T extends $CraftingRecipe> {
        create(category: $CraftingBookCategory_): T;
    }
    /**
     * Values that may be interpreted as {@link $SimpleCraftingRecipeSerializer$Factory}.
     */
    export type $SimpleCraftingRecipeSerializer$Factory_<T> = ((arg0: $CraftingBookCategory) => T);
    export class $SmithingTrimRecipe$Serializer implements $RecipeSerializer<$SmithingTrimRecipe> {
        codec(): $MapCodec<$SmithingTrimRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTrimRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SmithingTrimRecipe>;
        constructor();
    }
    export class $CustomRecipe implements $CraftingRecipe {
        category(): $CraftingBookCategory;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getType(): $RecipeType<never>;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        getToastSymbol(): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        constructor(category: $CraftingBookCategory_);
        get special(): boolean;
        get type(): $RecipeType<never>;
        get group(): string;
        get toastSymbol(): $ItemStack;
        get ingredients(): $NonNullList<$Ingredient>;
        get incomplete(): boolean;
    }
    export class $SmithingTrimRecipe implements $SmithingRecipe, $SmithingTrimRecipeAccessor {
        matches(input: $SmithingRecipeInput_, level: $Level_): boolean;
        getSerializer(): $RecipeSerializer<never>;
        isBaseIngredient(stack: $ItemStack_): boolean;
        isAdditionIngredient(stack: $ItemStack_): boolean;
        isTemplateIngredient(stack: $ItemStack_): boolean;
        assemble(input: $SmithingRecipeInput_, registries: $HolderLookup$Provider): $ItemStack;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isIncomplete(): boolean;
        getResultItem(registries: $HolderLookup$Provider): $ItemStack;
        getType(): $RecipeType<never>;
        /**
         * Used to determine if this recipe can fit in a grid of the given width/height
         */
        canCraftInDimensions(width: number, height: number): boolean;
        getToastSymbol(): $ItemStack;
        /**
         * Recipes with equal group are combined into one button in the recipe book
         */
        getGroup(): string;
        getRemainingItems(input: $SmithingRecipeInput_): $NonNullList<$ItemStack>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        isSpecial(): boolean;
        getIngredients(): $NonNullList<$Ingredient>;
        /**
         * If true, this recipe does not appear in the recipe book and does not respect recipe unlocking (and the doLimitedCrafting gamerule)
         */
        showNotification(): boolean;
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
        getAddition(): $Ingredient;
        template: $Ingredient;
        base: $Ingredient;
        addition: $Ingredient;
        constructor(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_);
        get serializer(): $RecipeSerializer<never>;
        get incomplete(): boolean;
        get type(): $RecipeType<never>;
        get toastSymbol(): $ItemStack;
        get group(): string;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
    }
    export class $RecipeManager$CachedCheck<I extends $RecipeInput, T extends $Recipe<I>> {
    }
    export interface $RecipeManager$CachedCheck<I extends $RecipeInput, T extends $Recipe<I>> {
        getRecipeFor(input: I, level: $Level_): ($RecipeHolder<T>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $RecipeManager$CachedCheck}.
     */
    export type $RecipeManager$CachedCheck_<I, T> = ((arg0: I, arg1: $Level) => ($RecipeHolder_<T>) | undefined);
    export class $RecipeType<T extends $Recipe<never>> {
        static simple<T extends $Recipe<never>>(arg0: $ResourceLocation_): $RecipeType<T>;
        static register<T extends $Recipe<never>>(identifier: string): $RecipeType<T>;
        static BLASTING: $RecipeType<$BlastingRecipe>;
        static STONECUTTING: $RecipeType<$StonecutterRecipe>;
        static CRAFTING: $RecipeType<$CraftingRecipe>;
        static SMELTING: $RecipeType<$SmeltingRecipe>;
        static SMOKING: $RecipeType<$SmokingRecipe>;
        static CAMPFIRE_COOKING: $RecipeType<$CampfireCookingRecipe>;
        static SMITHING: $RecipeType<$SmithingRecipe>;
    }
    export interface $RecipeType<T extends $Recipe<never>> {
    }
    /**
     * Values that may be interpreted as {@link $RecipeType}.
     */
    export type $RecipeType_<T> = RegistryTypes.RecipeType;
    export class $SmeltingRecipe extends $AbstractCookingRecipe {
        result: $ItemStack;
        ingredient: $Ingredient;
        type: $RecipeType<never>;
        experience: number;
        cookingTime: number;
        group: string;
        constructor(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number);
    }
    export class $AbstractCookingRecipe$Factory<T extends $AbstractCookingRecipe> {
    }
    export interface $AbstractCookingRecipe$Factory<T extends $AbstractCookingRecipe> {
        create(group: string, category: $CookingBookCategory_, ingredient: $Ingredient_, result: $ItemStack_, experience: number, cookingTime: number): T;
    }
    /**
     * Values that may be interpreted as {@link $AbstractCookingRecipe$Factory}.
     */
    export type $AbstractCookingRecipe$Factory_<T> = ((arg0: string, arg1: $CookingBookCategory, arg2: $Ingredient, arg3: $ItemStack, arg4: number, arg5: number) => T);
    export class $RecipeInput {
    }
    export interface $RecipeInput extends $RecipeInputKJS, $RecipeInputMixin {
        size(): number;
        isEmpty(): boolean;
        getItem(index: number): $ItemStack;
        get empty(): boolean;
    }
    export class $RecipeSerializer<T extends $Recipe<never>> {
        static register<S extends $RecipeSerializer<T>, T extends $Recipe<never>>(key: string, recipeSerializer: S): S;
        static MAP_CLONING: $RecipeSerializer<$MapCloningRecipe>;
        static SMELTING_RECIPE: $RecipeSerializer<$SmeltingRecipe>;
        static REPAIR_ITEM: $RecipeSerializer<$RepairItemRecipe>;
        static FIREWORK_STAR: $RecipeSerializer<$FireworkStarRecipe>;
        static FIREWORK_STAR_FADE: $RecipeSerializer<$FireworkStarFadeRecipe>;
        static SMOKING_RECIPE: $RecipeSerializer<$SmokingRecipe>;
        static SHAPED_RECIPE: $RecipeSerializer<$ShapedRecipe>;
        static ARMOR_DYE: $RecipeSerializer<$ArmorDyeRecipe>;
        static MAP_EXTENDING: $RecipeSerializer<$MapExtendingRecipe>;
        static BOOK_CLONING: $RecipeSerializer<$BookCloningRecipe>;
        static SMITHING_TRANSFORM: $RecipeSerializer<$SmithingTransformRecipe>;
        static BANNER_DUPLICATE: $RecipeSerializer<$BannerDuplicateRecipe>;
        static CAMPFIRE_COOKING_RECIPE: $RecipeSerializer<$CampfireCookingRecipe>;
        static STONECUTTER: $RecipeSerializer<$StonecutterRecipe>;
        static DECORATED_POT_RECIPE: $RecipeSerializer<$DecoratedPotRecipe>;
        static TIPPED_ARROW: $RecipeSerializer<$TippedArrowRecipe>;
        static SHIELD_DECORATION: $RecipeSerializer<$ShieldDecorationRecipe>;
        static BLASTING_RECIPE: $RecipeSerializer<$BlastingRecipe>;
        static SHAPELESS_RECIPE: $RecipeSerializer<$ShapelessRecipe>;
        static SHULKER_BOX_COLORING: $RecipeSerializer<$ShulkerBoxColoring>;
        static SMITHING_TRIM: $RecipeSerializer<$SmithingTrimRecipe>;
        static SUSPICIOUS_STEW: $RecipeSerializer<$SuspiciousStewRecipe>;
        static FIREWORK_ROCKET: $RecipeSerializer<$FireworkRocketRecipe>;
    }
    export interface $RecipeSerializer<T extends $Recipe<never>> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeSerializer}.
     */
    export type $RecipeSerializer_<T> = RegistryTypes.RecipeSerializer;
    export class $FireworkStarFadeRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $RepairItemRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
    export class $BookCloningRecipe extends $CustomRecipe {
        matches(input: $CraftingInput, level: $Level_): boolean;
        getRemainingItems(input: $CraftingInput): $NonNullList<$ItemStack>;
        assemble(input: $CraftingInput, registries: $HolderLookup$Provider): $ItemStack;
        constructor(category: $CraftingBookCategory_);
    }
}
