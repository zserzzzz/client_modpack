import { $KMappedMarker } from "@package/kotlin/jvm/internal/markers";
import { $Sequence } from "@package/kotlin/sequences";
import { $List_, $List } from "@package/java/util";

declare module "@package/gg/essential/gui/elementa/state/v2/collections" {
    export class $TrackedList<E> {
    }
    export interface $TrackedList<E> extends $List<E>, $KMappedMarker {
        getChangesSince(arg0: $TrackedList<E>): $Sequence<$TrackedList$Change<E>>;
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
