import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/util/random" {
    export class $WeightedEntry$IntrusiveBase implements $WeightedEntry {
        getWeight(): $Weight;
        constructor(weight: $Weight);
        constructor(weight: number);
        get weight(): $Weight;
    }
    export class $SimpleWeightedRandomList<E> extends $WeightedRandomList<$WeightedEntry$Wrapper<E>> {
        static builder<E>(): $SimpleWeightedRandomList$Builder<E>;
        static single<E>(data: E): $SimpleWeightedRandomList<E>;
        static empty<E>(): $SimpleWeightedRandomList<E>;
        getRandomValue(random: $RandomSource): ($WeightedEntry$Wrapper<E>) | undefined;
        static wrappedCodec<E>(elementCodec: $Codec<E>): $Codec<$SimpleWeightedRandomList<E>>;
        static wrappedCodecAllowingEmpty<E>(elementCodec: $Codec<E>): $Codec<$SimpleWeightedRandomList<E>>;
        constructor(items: $List_<$WeightedEntry$Wrapper_<$WeightedEntry$Wrapper_<E>>>);
    }
    export class $WeightedEntry {
        static wrap<T>(data: T, weight: number): $WeightedEntry$Wrapper<T>;
    }
    export interface $WeightedEntry {
        getWeight(): $Weight;
        get weight(): $Weight;
    }
    /**
     * Values that may be interpreted as {@link $WeightedEntry}.
     */
    export type $WeightedEntry_ = (() => $Weight);
    export class $SimpleWeightedRandomList$Builder<E> {
        add(data: E, weight: number): $SimpleWeightedRandomList$Builder<E>;
        add(data: E): $SimpleWeightedRandomList$Builder<E>;
        build(): $SimpleWeightedRandomList<E>;
        constructor();
    }
    export class $WeightedRandomList<E extends $WeightedEntry> {
        isEmpty(): boolean;
        static create<E extends $WeightedEntry>(items: $List_<E>): $WeightedRandomList<E>;
        static create<E extends $WeightedEntry>(...items: E[]): $WeightedRandomList<E>;
        static create<E extends $WeightedEntry>(): $WeightedRandomList<E>;
        unwrap(): $List<any>;
        getRandom(random: $RandomSource): (E) | undefined;
        static codec<E extends $WeightedEntry>(elementCodec: $Codec<E>): $Codec<$WeightedRandomList<E>>;
        constructor(items: $List_<E>);
        get empty(): boolean;
    }
    export class $Weight {
        asInt(): number;
        static of(weight: number): $Weight;
        static CODEC: $Codec<$Weight>;
    }
    export class $WeightedEntry$Wrapper<T> extends $Record implements $WeightedEntry {
        getWeight(): $Weight;
        data(): T;
        weight(): $Weight;
        static codec<E>(elementCodec: $Codec<E>): $Codec<$WeightedEntry$Wrapper<E>>;
        constructor(data: T, weight: $Weight);
    }
    /**
     * Values that may be interpreted as {@link $WeightedEntry$Wrapper}.
     */
    export type $WeightedEntry$Wrapper_<T> = { weight?: $Weight, data?: any,  } | [weight?: $Weight, data?: any, ];
    export class $WeightedRandom {
        static getRandomItem<T extends $WeightedEntry>(random: $RandomSource, entries: $List_<T>): (T) | undefined;
        static getRandomItem<T extends $WeightedEntry>(random: $RandomSource, entries: $List_<T>, totalWeight: number): (T) | undefined;
        static getTotalWeight(entries: $List_<$WeightedEntry_>): number;
        static getWeightedItem<T extends $WeightedEntry>(entries: $List_<T>, weightedIndex: number): (T) | undefined;
    }
}
