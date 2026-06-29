import { $InsertableLinkedOpenCustomHashSet } from "@package/net/neoforged/neoforge/common/util";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ParticleProvider } from "@package/net/minecraft/client/particle";
import { $BiomeSpecialEffects } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockColor, $BlockColor_ } from "@package/net/minecraft/client/color/block";
import { $ItemColor } from "@package/net/minecraft/client/color/item";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $List_, $Map_, $Map } from "@package/java/util";
import { $ModifiableBiomeInfo$BiomeInfo, $ModifiableBiomeInfo$BiomeInfo_ } from "@package/net/neoforged/neoforge/common/world";

declare module "@package/net/mehvahdjukaar/polytone/mixins/neoforge" {
    export class $ParticleEngineAccessor {
    }
    export interface $ParticleEngineAccessor {
        getProviders(): $Map<$ResourceLocation, $ParticleProvider<never>>;
        get providers(): $Map<$ResourceLocation, $ParticleProvider<never>>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngineAccessor}.
     */
    export type $ParticleEngineAccessor_ = (() => $Map_<$ResourceLocation_, $ParticleProvider<never>>);
    export class $ItemColorsAccessor {
    }
    export interface $ItemColorsAccessor {
        getItemColors(): $Map<$Item, $ItemColor>;
        get itemColors(): $Map<$Item, $ItemColor>;
    }
    /**
     * Values that may be interpreted as {@link $ItemColorsAccessor}.
     */
    export type $ItemColorsAccessor_ = (() => $Map_<$Item_, $ItemColor>);
    export class $ModifiableBiomeInfoBiomeInfoAccessor {
    }
    export interface $ModifiableBiomeInfoBiomeInfoAccessor {
        setEffects(arg0: $BiomeSpecialEffects): void;
        set effects(value: $BiomeSpecialEffects);
    }
    /**
     * Values that may be interpreted as {@link $ModifiableBiomeInfoBiomeInfoAccessor}.
     */
    export type $ModifiableBiomeInfoBiomeInfoAccessor_ = ((arg0: $BiomeSpecialEffects) => void);
    export class $CreativeTabAccessor {
    }
    export interface $CreativeTabAccessor {
        setTabsImage(arg0: $ResourceLocation_): void;
        setDisplayName(arg0: $Component_): void;
        setBeforeTabs(arg0: $List_<$ResourceLocation_>): void;
        setAfterTabs(arg0: $List_<$ResourceLocation_>): void;
        setCanScroll(arg0: boolean): void;
        setShowTitle(arg0: boolean): void;
        setSearchBarWidth(arg0: number): void;
        setHasSearchBar(arg0: boolean): void;
        setBackgroundTexture(arg0: $ResourceLocation_): void;
        setIcon(arg0: $ItemStack_): void;
        set tabsImage(value: $ResourceLocation_);
        set displayName(value: $Component_);
        set beforeTabs(value: $List_<$ResourceLocation_>);
        set afterTabs(value: $List_<$ResourceLocation_>);
        set canScroll(value: boolean);
        set showTitle(value: boolean);
        set searchBarWidth(value: number);
        set hasSearchBar(value: boolean);
        set backgroundTexture(value: $ResourceLocation_);
        set icon(value: $ItemStack_);
    }
    export class $BlockColorsAccessor {
    }
    export interface $BlockColorsAccessor {
        getBlockColors(): $Map<$Block, $BlockColor>;
        get blockColors(): $Map<$Block, $BlockColor>;
    }
    /**
     * Values that may be interpreted as {@link $BlockColorsAccessor}.
     */
    export type $BlockColorsAccessor_ = (() => $Map_<$Block_, $BlockColor_>);
    export class $ModifiableBiomeAccessor {
    }
    export interface $ModifiableBiomeAccessor {
        setModifiedBiomeInfo(arg0: $ModifiableBiomeInfo$BiomeInfo_): void;
        set modifiedBiomeInfo(value: $ModifiableBiomeInfo$BiomeInfo_);
    }
    /**
     * Values that may be interpreted as {@link $ModifiableBiomeAccessor}.
     */
    export type $ModifiableBiomeAccessor_ = ((arg0: $ModifiableBiomeInfo$BiomeInfo) => void);
    export class $BuildCreativeModeTabContentsEventAccessor {
    }
    export interface $BuildCreativeModeTabContentsEventAccessor {
        getSearchEntries(): $InsertableLinkedOpenCustomHashSet<$ItemStack>;
        getParentEntries(): $InsertableLinkedOpenCustomHashSet<$ItemStack>;
        get searchEntries(): $InsertableLinkedOpenCustomHashSet<$ItemStack>;
        get parentEntries(): $InsertableLinkedOpenCustomHashSet<$ItemStack>;
    }
}
