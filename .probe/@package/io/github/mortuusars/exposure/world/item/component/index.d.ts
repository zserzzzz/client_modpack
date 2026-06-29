import { $BiFunction_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Class } from "@package/java/lang";
import { $ItemAndStack } from "@package/io/github/mortuusars/exposure/world/item/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/item/component" {
    export class $StoredItemStack {
        isEmpty(): boolean;
        getItem(): $Item;
        getForReading(): $ItemStack;
        getCopy(): $ItemStack;
        getItemAndStackCopy<T extends $Item>(): $ItemAndStack<T>;
        mapIf<T, R>(clazz: $Class<T>, func: $BiFunction_<T, $ItemStack, R>): (R) | undefined;
        static CODEC: $Codec<$StoredItemStack>;
        static EMPTY: $StoredItemStack;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StoredItemStack>;
        constructor(stack: $ItemStack_);
        get empty(): boolean;
        get item(): $Item;
        get forReading(): $ItemStack;
        get copy(): $ItemStack;
        get itemAndStackCopy(): $ItemAndStack<T>;
    }
}
