import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KMappedMarker } from "@package/kotlin/jvm/internal/markers";
import { $AbstractList$Companion, $AbstractList } from "@package/kotlin/collections";
import { $Sequence } from "@package/kotlin/sequences";
import { $Collection_, $List, $SequencedCollection, $List_ } from "@package/java/util";

declare module "@package/gg/essential/gui/elementa/state/v2/collections" {
    export class $TrackedList<E> {
    }
    export interface $TrackedList<E> extends $List<E>, $KMappedMarker {
        getChangesSince(arg0: $TrackedList<E>): $Sequence<$TrackedList$Change<E>>;
    }
    export class $MutableTrackedList<E> extends $AbstractList<E> implements $TrackedList<E> {
        remove(arg0: E): $MutableTrackedList<E>;
        clear(): $MutableTrackedList<E>;
        add(arg0: number, arg1: E): $MutableTrackedList<E>;
        add(arg0: E): $MutableTrackedList<E>;
        addAll(arg0: $Collection_<E>): $MutableTrackedList<E>;
        addAll(arg0: number, arg1: $Collection_<E>): $MutableTrackedList<E>;
        set(arg0: number, arg1: E): $MutableTrackedList<E>;
        removeAll(arg0: $Collection_<E>): $MutableTrackedList<E>;
        retainAll(arg0: $Collection_<E>): $MutableTrackedList<E>;
        removeAt(arg0: number): $MutableTrackedList<E>;
        getChangesSince(arg0: $TrackedList<E>): $Sequence<$TrackedList$Change<E>>;
        getChangesSince(arg0: $MutableTrackedList<E>): $Sequence<$TrackedList$Change<E>>;
        applyChanges(arg0: $List_<$TrackedList$Change<E>>): $MutableTrackedList<E>;
        reversed(): $SequencedCollection<E>;
        static Companion: $AbstractList$Companion;
        constructor(arg0: $List_<any>, arg1: number, arg2: $DefaultConstructorMarker);
        constructor(arg0: $List_<E>);
    }
    export class $TrackedList$Change$Companion {
        estimate<E>(arg0: $List_<E>, arg1: $List_<E>): $List<$TrackedList$Change<E>>;
    }
    export class $TrackedList$Change<E> {
        static Companion: $TrackedList$Change$Companion;
    }
    export interface $TrackedList$Change<E> {
    }
}
