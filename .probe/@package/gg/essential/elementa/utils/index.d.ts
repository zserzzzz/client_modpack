import { $Predicate_, $Consumer_, $UnaryOperator_, $IntFunction_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $KMutableList } from "@package/kotlin/jvm/internal/markers";
import { $Object } from "@package/java/lang";
import { $Comparator, $Spliterator, $Iterator, $ListIterator, $Observable, $Collection_, $List, $SequencedCollection, $List_ } from "@package/java/util";

declare module "@package/gg/essential/elementa/utils" {
    export class $TriConsumer<T, U, V> {
    }
    export interface $TriConsumer<T, U, V> {
        accept(arg0: T, arg1: U, arg2: V): void;
    }
    /**
     * Values that may be interpreted as {@link $TriConsumer}.
     */
    export type $TriConsumer_<T, U, V> = ((arg0: T, arg1: U, arg2: V) => void);
    export class $ObservableList<T> extends $Observable implements $List<T>, $KMutableList {
        remove(arg0: $Object): boolean;
        remove(arg0: number): T;
        size(): number;
        get(arg0: number): T;
        indexOf(arg0: $Object): number;
        clear(): void;
        lastIndexOf(arg0: $Object): number;
        isEmpty(): boolean;
        add(arg0: T): boolean;
        add(arg0: number, arg1: T): void;
        subList(arg0: number, arg1: number): $List<T>;
        toArray<T>(arg0: T[]): T[];
        toArray(): $Object[];
        iterator(): $Iterator<T>;
        contains(arg0: $Object): boolean;
        addAll(arg0: number, arg1: $Collection_<T>): boolean;
        addAll(arg0: $Collection_<T>): boolean;
        set(arg0: number, arg1: T): T;
        sort(arg0: $Comparator<T>): void;
        getSize(): number;
        removeAll(arg0: $Collection_<never>): boolean;
        retainAll(arg0: $Collection_<never>): boolean;
        listIterator(arg0: number): $ListIterator<T>;
        listIterator(): $ListIterator<T>;
        containsAll(arg0: $Collection_<never>): boolean;
        removeAt(arg0: number): T;
        replaceAll(arg0: $UnaryOperator_<T>): void;
        spliterator(): $Spliterator<T>;
        getFirst(): T;
        getLast(): T;
        addFirst(arg0: T): void;
        addLast(arg0: T): void;
        removeFirst(): T;
        removeLast(): T;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<T>;
        removeIf(arg0: $Predicate_<T>): boolean;
        parallelStream(): $Stream<T>;
        forEach(arg0: $Consumer_<T>): void;
        reversed(): $SequencedCollection<T>;
        constructor(arg0: $List_<T>);
        [Symbol.iterator](): Iterator<T>
        get empty(): boolean;
        get first(): T;
        get last(): T;
    }
}
