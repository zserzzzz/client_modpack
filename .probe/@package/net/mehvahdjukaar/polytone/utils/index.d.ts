import { $Int2ObjectArrayMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Consumer_, $UnaryOperator_, $Supplier_, $Function_ } from "@package/java/util/function";
import { $Holder, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $MapCodec_, $Lifecycle, $Decoder, $Dynamic, $Decoder$Simple, $Codec$ResultFunction, $DataResult, $MapEncoder, $MapCodec, $DynamicOps, $Encoder, $Decoder$Terminal, $Codec, $Decoder$Boxed } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $Map$Entry, $Set, $Set_, $List_, $Collection } from "@package/java/util";
import { $Vector3f } from "@package/org/joml";
export * as exp from "@package/net/mehvahdjukaar/polytone/utils/exp";

declare module "@package/net/mehvahdjukaar/polytone/utils" {
    export class $ArrayImage$Group extends $Int2ObjectArrayMap<$ArrayImage> {
        getDefault(): $ArrayImage;
        entrySet(): $Set<$Map$Entry<number, $ArrayImage>>;
        constructor();
        get default(): $ArrayImage;
    }
    export class $ArrayImage extends $Record {
        width(): number;
        static scanDirectory(manager: $ResourceManager, path: string): $Map<$ResourceLocation, $ArrayImage>;
        static scanDirectory(manager: $ResourceManager, path: string, map: $Map_<$ResourceLocation_, $ArrayImage_>): void;
        height(): number;
        static groupTextures(texturesColormap: $Map_<$ResourceLocation_, $ArrayImage_>): $Map<$ResourceLocation, $ArrayImage$Group>;
        pixels(): number[][];
        constructor(matrix: number[][]);
        constructor(pixels: number[][], width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $ArrayImage}.
     */
    export type $ArrayImage_ = { height?: number, width?: number, pixels?: number[][],  } | [height?: number, width?: number, pixels?: number[][], ];
    export class $MapRegistry$CodecMap<T> extends $MapRegistry<$MapCodec<T>> {
        register<B extends T>(name: $ResourceLocation_, value: $MapCodec_<B>): $MapCodec<B>;
        register<B extends T>(name: string, value: $MapCodec_<B>): $MapCodec<B>;
        fieldOf(arg0: string): $MapEncoder<$MapCodec<T>>;
        withLifecycle(arg0: $Lifecycle): $Encoder<$MapCodec<T>>;
        constructor(name: string);
    }
    export class $IExtendedBlockElementRotation {
    }
    export interface $IExtendedBlockElementRotation {
        setRotation(arg0: $Vector3f): void;
        getRotation(): $Vector3f;
    }
    export class $Targets$Entry {
    }
    export interface $Targets$Entry {
    }
    /**
     * Values that may be interpreted as {@link $Targets$Entry}.
     */
    export type $Targets$Entry_ = (() => void);
    export class $MapRegistry<T> implements $Codec<T> {
        getName(): string;
        size(): number;
        clear(): void;
        decode<U>(ops: $DynamicOps<U>, json: U): $DataResult<$Pair<T, U>>;
        encode<U>(object: T, ops: $DynamicOps<U>, prefix: U): $DataResult<U>;
        getValue(name: $ResourceLocation_): T;
        getValue(name: string): T;
        isEmpty(): boolean;
        getKey(value: T): $ResourceLocation;
        register<B extends T>(name: string, value: B): T;
        register<B extends T>(name: $ResourceLocation_, value: B): T;
        containsKey(name: $ResourceLocation_): boolean;
        keySet(): $Set<$ResourceLocation>;
        getEntries(): $Set<$Map$Entry<$ResourceLocation, T>>;
        unregister(name: $ResourceLocation_): void;
        getValues(): $Set<T>;
        orderedKeys(): $List<$ResourceLocation>;
        static ofCodec<B>(name: string): $MapRegistry$CodecMap<B>;
        listOf(): $Codec<$List<T>>;
        listOf(arg0: number, arg1: number): $Codec<$List<T>>;
        flatXmap<S>(arg0: $Function_<T, $DataResult<S>>, arg1: $Function_<S, $DataResult<T>>): $Codec<S>;
        xmap<S>(arg0: $Function_<T, S>, arg1: $Function_<S, T>): $Codec<S>;
        deprecated(arg0: number): $Codec<T>;
        mapResult(arg0: $Codec$ResultFunction<T>): $Codec<T>;
        stable(): $Codec<T>;
        flatComapMap<S>(arg0: $Function_<T, S>, arg1: $Function_<S, $DataResult<T>>): $Codec<S>;
        optionalFieldOf(arg0: string): $MapCodec<(T) | undefined>;
        optionalFieldOf(arg0: string, arg1: T, arg2: $Lifecycle): $MapCodec<T>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: T, arg3: $Lifecycle): $MapCodec<T>;
        optionalFieldOf(arg0: string, arg1: T): $MapCodec<T>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, T>, arg2: $Function_<T, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, T>, arg1: $Function_<T, $MapCodec<E>>): $MapCodec<E>;
        dispatchStable<E>(arg0: $Function_<E, T>, arg1: $Function_<T, $MapCodec<E>>): $Codec<E>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<T>>, arg2: $Function_<T, $DataResult<$MapCodec<E>>>): $Codec<E>;
        promotePartial(arg0: $Consumer_<string>): $Codec<T>;
        sizeLimitedListOf(arg0: number): $Codec<$List<T>>;
        dispatch<E>(arg0: $Function_<E, T>, arg1: $Function_<T, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: string, arg1: $Function_<E, T>, arg2: $Function_<T, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<T, $DataResult<T>>): $Codec<T>;
        orElse(arg0: T): $Codec<T>;
        orElse(arg0: $Consumer_<string>, arg1: T): $Codec<T>;
        orElse(arg0: $UnaryOperator_<string>, arg1: T): $Codec<T>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<T>): $Codec<T>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<T>): $Codec<T>;
        orElseGet(arg0: $Supplier_<T>): $Codec<T>;
        lenientOptionalFieldOf(arg0: string, arg1: T, arg2: $Lifecycle): $MapCodec<T>;
        lenientOptionalFieldOf(arg0: string, arg1: T): $MapCodec<T>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<(T) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: T, arg3: $Lifecycle): $MapCodec<T>;
        comapFlatMap<S>(arg0: $Function_<T, $DataResult<S>>, arg1: $Function_<S, T>): $Codec<S>;
        comap<B>(arg0: $Function_<B, T>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<T>>): $Encoder<B>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<T>;
        simple(): $Decoder$Simple<T>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<T, T>>;
        map<B>(arg0: $Function_<T, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<T, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<T>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<T>;
        boxed(): $Decoder$Boxed<T>;
        terminal(): $Decoder$Terminal<T>;
        fieldOf(arg0: string): $MapEncoder<T>;
        withLifecycle(arg0: $Lifecycle): $Encoder<T>;
        constructor(name: string);
        get name(): string;
        get entries(): $Set<$Map$Entry<$ResourceLocation, T>>;
        get values(): $Set<T>;
    }
    export class $Targets extends $Record {
        merge(other: $Targets_): $Targets;
        compute<T>(fileId: $ResourceLocation_, registry: $HolderLookup$RegistryLookup<T>): $Collection<$Holder<T>>;
        entries(): $List<$Targets$Entry>;
        static ofOptionalIds(blocks: $Set_<$ResourceLocation_>): $Targets;
        addTag(id: $ResourceLocation_): void;
        addSimple(id: $ResourceLocation_): void;
        static ofIds(...blocks: $ResourceLocation_[]): $Targets;
        static ofIds(blocks: $Set_<$ResourceLocation_>): $Targets;
        static CODEC: $Codec<$Targets>;
        static EMPTY: $Targets;
        constructor(entries: $List_<$Targets$Entry_>);
    }
    /**
     * Values that may be interpreted as {@link $Targets}.
     */
    export type $Targets_ = { entries?: $List_<$Targets$Entry_>,  } | [entries?: $List_<$Targets$Entry_>, ];
}
