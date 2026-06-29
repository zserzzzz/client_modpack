import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemColorsExtension } from "@package/net/caffeinemc/mods/sodium/client/model/color/interop";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ItemColorsAccessor } from "@package/net/mehvahdjukaar/polytone/mixins/neoforge";
import { $ColorProviderRegistryImpl$ColorMapperHolder } from "@package/net/fabricmc/fabric/impl/client/rendering";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $Map } from "@package/java/util";
import { $ItemColorsAccessor as $ItemColorsAccessor$1 } from "@package/com/github/argon4w/acceleratedrendering/features/items/mixins/accessors";

declare module "@package/net/minecraft/client/color/item" {
    export class $ItemColors implements $ItemColorsAccessor$1, $ColorProviderRegistryImpl$ColorMapperHolder<any, any>, $ItemColorsExtension, $ItemColorsAccessor {
        static createDefault(colors: $BlockColors): $ItemColors;
        get(arg0: $ItemLike_): $ItemColor;
        /**
         * @deprecated
         */
        register(itemColor: $ItemColor_, ...items: $ItemLike_[]): void;
        getColor(stack: $ItemStack_, tintIndex: number): number;
        sodium$getColorProvider(arg0: $ItemStack_): $ItemColor;
        getItemColors(): $Map<$Item, $ItemColor>;
        constructor();
        get itemColors(): $Map<$Item, $ItemColor>;
    }
    export class $ItemColor {
    }
    export interface $ItemColor {
        getColor(stack: $ItemStack_, tintIndex: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ItemColor}.
     */
    export type $ItemColor_ = ((arg0: $ItemStack, arg1: number) => number);
}
