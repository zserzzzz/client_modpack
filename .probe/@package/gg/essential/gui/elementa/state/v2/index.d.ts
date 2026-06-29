import { $Function1_, $Function0 } from "@package/kotlin/jvm/functions";
import { $ReferenceHolder_ } from "@package/gg/essential/elementa/state/v2";
import { $Unit } from "@package/kotlin";
export * as collections from "@package/gg/essential/gui/elementa/state/v2/collections";

declare module "@package/gg/essential/gui/elementa/state/v2" {
    export class $Observer {
    }
    export interface $Observer {
        invoke<T>(arg0: $State_<T>): T;
        getObserverImpl(): $ObserverImpl;
        get observerImpl(): $ObserverImpl;
    }
    /**
     * Values that may be interpreted as {@link $Observer}.
     */
    export type $Observer_ = (() => $ObserverImpl);
    export class $State<T> {
    }
    export interface $State<T> {
        getUntracked(): T;
        get(): T;
        get(arg0: $Observer_): T;
        onSetValue(arg0: $ReferenceHolder_, arg1: $Function1_<T, $Unit>): $Function0<$Unit>;
        get untracked(): T;
    }
    /**
     * Values that may be interpreted as {@link $State}.
     */
    export type $State_<T> = ((arg0: $Observer) => T);
    export class $MutableState<T> {
    }
    export interface $MutableState<T> extends $State<T> {
        set(arg0: $Function1_<T, T>): void;
        set(arg0: T): void;
    }
    export class $ObserverImpl {
    }
    export interface $ObserverImpl {
    }
}
