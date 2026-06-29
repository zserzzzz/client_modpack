import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Spliterator, $Iterator, $List, $Map, $List_, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable } from "@package/java/lang";
import { $Triplet } from "@package/net/mehvahdjukaar/moonlight/api/misc";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/moonlight/api/fluids" {
    export class $FluidContainerList implements $Iterable<$FluidContainerList$Category> {
        iterator(): $Iterator<$FluidContainerList$Category>;
        getEmpty(arg0: $Item_): ($Item) | undefined;
        getPossibleEmpty(): $Collection<$Item>;
        getPossibleFilled(): $Collection<$Item>;
        getCategoryFromEmpty(arg0: $Item_): ($FluidContainerList$Category) | undefined;
        getCategoryFromFilled(arg0: $Item_): ($FluidContainerList$Category) | undefined;
        getCategories(): $List<$FluidContainerList$Category>;
        getFilled(arg0: $Item_): ($Item) | undefined;
        spliterator(): $Spliterator<$FluidContainerList$Category>;
        forEach(arg0: $Consumer_<$FluidContainerList$Category>): void;
        static CODEC: $Codec<$FluidContainerList>;
        constructor(arg0: $List_<$FluidContainerList$Category>);
        constructor();
        [Symbol.iterator](): Iterator<$FluidContainerList$Category>
        get possibleEmpty(): $Collection<$Item>;
        get possibleFilled(): $Collection<$Item>;
        get categories(): $List<$FluidContainerList$Category>;
    }
    export class $SoftFluid {
        isEnabled(): boolean;
        getContainerList(): $FluidContainerList;
        getEmptyContainer(arg0: $Item_): ($Item) | undefined;
        isEquivalent(arg0: $Holder_<$Fluid>): boolean;
        /**
         * @deprecated
         */
        isEmptyFluid(): boolean;
        getTextureOverride(): $ResourceLocation;
        static getRenderingData(arg0: $ResourceLocation_): $Triplet<$ResourceLocation, $ResourceLocation, number>;
        getVanillaFluid(): $Holder<$Fluid>;
        getFilledContainer(arg0: $Item_): ($Item) | undefined;
        getEmissivity(): number;
        getTintMethod(): $SoftFluid$TintMethod;
        getFoodProvider(): $FoodProvider;
        getFlowingTexture(): $ResourceLocation;
        getStillTexture(): $ResourceLocation;
        getTintColor(): number;
        isFood(): boolean;
        afterInit(): void;
        getLuminosity(): number;
        getEquivalentFluids(): $HolderSet<$Fluid>;
        getTranslatedName(): $Component;
        isColored(): boolean;
        getPreservedComponents(): $HolderSet<$DataComponentType<never>>;
        getAverageTextureTintColor(): number;
        static getFluidSpecificAttributes(arg0: $Fluid_): $Pair<number, $Component>;
        static BOTTLE_COUNT: number;
        isGenerated: boolean;
        static CODEC: $Codec<$SoftFluid>;
        static BUCKET_COUNT: number;
        static HOLDER_CODEC: $Codec<$Holder<$SoftFluid>>;
        static TRANSLATABLE_COMPONENT: $Codec<$Component>;
        static BOWL_COUNT: number;
        static WATER_BUCKET_COUNT: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$SoftFluid>>;
        constructor(arg0: $Holder_<$Fluid>);
        get enabled(): boolean;
        get containerList(): $FluidContainerList;
        get emptyFluid(): boolean;
        get textureOverride(): $ResourceLocation;
        get vanillaFluid(): $Holder<$Fluid>;
        get emissivity(): number;
        get tintMethod(): $SoftFluid$TintMethod;
        get foodProvider(): $FoodProvider;
        get flowingTexture(): $ResourceLocation;
        get stillTexture(): $ResourceLocation;
        get tintColor(): number;
        get food(): boolean;
        get luminosity(): number;
        get equivalentFluids(): $HolderSet<$Fluid>;
        get translatedName(): $Component;
        get colored(): boolean;
        get preservedComponents(): $HolderSet<$DataComponentType<never>>;
        get averageTextureTintColor(): number;
    }
    /**
     * Values that may be interpreted as {@link $SoftFluid}.
     */
    export type $SoftFluid_ = RegistryTypes.MoonlightSoftFluid;
    export class $FluidContainerList$Category {
        getCapacity(): number;
        isEmpty(): boolean;
        getEmptyContainer(): $Item;
        getFilledItems(): $List<$Item>;
        getFirstFilled(): ($Item) | undefined;
        /**
         * @deprecated
         */
        getAmount(): number;
        getFillSound(): $SoundEvent;
        getEmptySound(): $SoundEvent;
        static CODEC: $Codec<$FluidContainerList$Category>;
        get capacity(): number;
        get empty(): boolean;
        get emptyContainer(): $Item;
        get filledItems(): $List<$Item>;
        get firstFilled(): ($Item) | undefined;
        get amount(): number;
        get fillSound(): $SoundEvent;
        get emptySound(): $SoundEvent;
    }
    export interface $SoftFluid extends RegistryMarked<RegistryTypes.MoonlightSoftFluidTag, RegistryTypes.MoonlightSoftFluid> {}
    export class $SoftFluid$TintMethod extends $Enum<$SoftFluid$TintMethod> implements $StringRepresentable {
        static values(): $SoftFluid$TintMethod[];
        static valueOf(arg0: string): $SoftFluid$TintMethod;
        getSerializedName(): string;
        appliesToStill(): boolean;
        appliesToFlowing(): boolean;
        getRemappedEnumConstantName(): string;
        static FLOWING: $SoftFluid$TintMethod;
        static CODEC: $Codec<$SoftFluid$TintMethod>;
        static STILL_AND_FLOWING: $SoftFluid$TintMethod;
        static NO_TINT: $SoftFluid$TintMethod;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SoftFluid$TintMethod}.
     */
    export type $SoftFluid$TintMethod_ = "no_tint" | "flowing" | "still_and_flowing";
    export class $FoodProvider {
        isEmpty(): boolean;
        static create(arg0: $Item_, arg1: number): $FoodProvider;
        consume(arg0: $Player, arg1: $Level_, arg2: $Consumer_<$ItemStack>): boolean;
        getFoodItem(): $Item;
        getDivider(): number;
        static CODEC: $Codec<$FoodProvider>;
        static CUSTOM_PROVIDERS: $Map<$Item, $FoodProvider>;
        static EMPTY: $FoodProvider;
        get empty(): boolean;
        get foodItem(): $Item;
        get divider(): number;
    }
}
