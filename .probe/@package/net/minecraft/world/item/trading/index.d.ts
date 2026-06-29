import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $UnaryOperator_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataComponentPredicate$Builder, $DataComponentPredicate } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $ArrayList, $SequencedCollection } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/trading" {
    export class $MerchantOffer {
        copy(): $MerchantOffer;
        take(playerOfferA: $ItemStack_, playerOfferB: $ItemStack_): boolean;
        getResult(): $ItemStack;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        updateDemand(): void;
        needsRestock(): boolean;
        getPriceMultiplier(): number;
        getBaseCostA(): $ItemStack;
        shouldRewardExp(): boolean;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        increaseUses(): void;
        getItemCostB(): ($ItemCost) | undefined;
        getItemCostA(): $ItemCost;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        resetUses(): void;
        addToSpecialPriceDiff(add: number): void;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        resetSpecialPriceDiff(): void;
        getUses(): number;
        assemble(): $ItemStack;
        getXp(): number;
        getSpecialPriceDiff(): number;
        setSpecialPriceDiff(add: number): void;
        getCostA(): $ItemStack;
        getCostB(): $ItemStack;
        getMaxUses(): number;
        getDemand(): number;
        isOutOfStock(): boolean;
        satisfiedBy(playerOfferA: $ItemStack_, playerOfferB: $ItemStack_): boolean;
        /**
         * Calculates the demand with following formula: demand = demand + uses - maxUses - uses
         */
        setToOutOfStock(): void;
        static createFromStream(buffer: $RegistryFriendlyByteBuf): $MerchantOffer;
        static CODEC: $Codec<$MerchantOffer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffer>;
        constructor(baseCostA: $ItemCost_, result: $ItemStack_, maxUses: number, xp: number, priceMultiplier: number);
        constructor(baseCostA: $ItemCost_, costB: ($ItemCost_) | undefined, result: $ItemStack_, maxUses: number, xp: number, priceMultiplier: number);
        constructor(baseCostA: $ItemCost_, costB: ($ItemCost_) | undefined, result: $ItemStack_, uses: number, maxUses: number, xp: number, priceMultiplier: number);
        constructor(baseCostA: $ItemCost_, costB: ($ItemCost_) | undefined, result: $ItemStack_, uses: number, maxUses: number, xp: number, priceMultiplier: number, demand: number);
        get result(): $ItemStack;
        get priceMultiplier(): number;
        get baseCostA(): $ItemStack;
        get itemCostB(): ($ItemCost) | undefined;
        get itemCostA(): $ItemCost;
        get uses(): number;
        get xp(): number;
        get costA(): $ItemStack;
        get costB(): $ItemStack;
        get maxUses(): number;
        get demand(): number;
        get outOfStock(): boolean;
    }
    export class $MerchantOffers extends $ArrayList<$MerchantOffer> {
        copy(): $MerchantOffers;
        getRecipeFor(stackA: $ItemStack_, stackB: $ItemStack_, index: number): $MerchantOffer;
        reversed(): $SequencedCollection<$MerchantOffer>;
        static CODEC: $Codec<$MerchantOffers>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffers>;
        constructor();
    }
    export class $Merchant {
    }
    export interface $Merchant {
        getOffers(): $MerchantOffers;
        showProgressBar(): boolean;
        openTradingScreen(player: $Player, displayName: $Component_, level: number): void;
        setTradingPlayer(tradingPlayer: $Player | null): void;
        getTradingPlayer(): $Player;
        overrideOffers(offers: $MerchantOffers): void;
        /**
         * Notifies the merchant of a possible merchant recipe being fulfilled or not. Usually, this is just a sound byte being played depending on whether the suggested `ItemStack` is not empty.
         */
        notifyTradeUpdated(stack: $ItemStack_): void;
        notifyTrade(offer: $MerchantOffer): void;
        canRestock(): boolean;
        overrideXp(xp: number): void;
        getNotifyTradeSound(): $SoundEvent;
        isClientSide(): boolean;
        getVillagerXp(): number;
        get offers(): $MerchantOffers;
        get notifyTradeSound(): $SoundEvent;
        get clientSide(): boolean;
        get villagerXp(): number;
    }
    export class $ItemCost extends $Record {
        test(stack: $ItemStack_): boolean;
        count(): number;
        item(): $Holder<$Item>;
        components(): $DataComponentPredicate;
        itemStack(): $ItemStack;
        withComponents(components: $UnaryOperator_<$DataComponentPredicate$Builder>): $ItemCost;
        static CODEC: $Codec<$ItemCost>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($ItemCost) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemCost>;
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate, arg3: $ItemStack_);
        constructor(item: $Holder_<$Item>, count: number, componentPredicate: $DataComponentPredicate);
        constructor(item: $ItemLike_, count: number);
        constructor(item: $ItemLike_);
    }
    /**
     * Values that may be interpreted as {@link $ItemCost}.
     */
    export type $ItemCost_ = { item?: $Holder_<$Item>, count?: number, components?: $DataComponentPredicate, itemStack?: $ItemStack_,  } | [item?: $Holder_<$Item>, count?: number, components?: $DataComponentPredicate, itemStack?: $ItemStack_, ];
}
