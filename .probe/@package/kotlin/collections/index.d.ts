import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Predicate_, $Consumer_, $UnaryOperator_, $IntFunction_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $KMappedMarker } from "@package/kotlin/jvm/internal/markers";
import { $Object } from "@package/java/lang";
import { $Comparator, $Spliterator, $Iterator, $ListIterator, $Collection_, $List, $SequencedCollection, $Collection } from "@package/java/util";

declare module "@package/kotlin/collections" {
    export class $AbstractList$Companion {
        newCapacity$kotlin_stdlib(arg0: number, arg1: number): number;
        checkElementIndex$kotlin_stdlib(arg0: number, arg1: number): void;
        checkRangeIndexes$kotlin_stdlib(arg0: number, arg1: number, arg2: number): void;
        checkBoundsIndexes$kotlin_stdlib(arg0: number, arg1: number, arg2: number): void;
        checkPositionIndex$kotlin_stdlib(arg0: number, arg1: number): void;
        orderedHashCode$kotlin_stdlib(arg0: $Collection_<never>): number;
        orderedEquals$kotlin_stdlib(arg0: $Collection_<never>, arg1: $Collection_<never>): boolean;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $AbstractList<E> extends $AbstractCollection<E> implements $List<E>, $KMappedMarker {
        remove(arg0: number): E;
        get(arg0: number): E;
        indexOf(arg0: $Object): number;
        lastIndexOf(arg0: $Object): number;
        add(arg0: number, arg1: E): void;
        subList(arg0: number, arg1: number): $List<E>;
        addAll(arg0: number, arg1: $Collection_<E>): boolean;
        set(arg0: number, arg1: E): E;
        listIterator(arg0: number): $ListIterator<E>;
        listIterator(): $ListIterator<E>;
        replaceAll(arg0: $UnaryOperator_<E>): void;
        sort(arg0: $Comparator<E>): void;
        getFirst(): E;
        getLast(): E;
        addFirst(arg0: E): void;
        addLast(arg0: E): void;
        removeFirst(): E;
        removeLast(): E;
        reversed(): $SequencedCollection<E>;
        static Companion: $AbstractList$Companion;
        get first(): E;
        get last(): E;
    }
    export class $AbstractCollection<E> implements $Collection<E>, $KMappedMarker {
        remove(arg0: $Object): boolean;
        size(): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: E): boolean;
        toArray(): $Object[];
        toArray<T>(arg0: T[]): T[];
        iterator(): $Iterator<E>;
        contains(arg0: $Object): boolean;
        addAll(arg0: $Collection_<E>): boolean;
        getSize(): number;
        removeAll(arg0: $Collection_<never>): boolean;
        retainAll(arg0: $Collection_<never>): boolean;
        containsAll(arg0: $Collection_<never>): boolean;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<E>;
        spliterator(): $Spliterator<E>;
        removeIf(arg0: $Predicate_<E>): boolean;
        parallelStream(): $Stream<E>;
        forEach(arg0: $Consumer_<E>): void;
        [Symbol.iterator](): Iterator<E>
        get empty(): boolean;
    }
}
