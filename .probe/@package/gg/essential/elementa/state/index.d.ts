import { $Function1_, $Function1, $Function0, $Function0_ } from "@package/kotlin/jvm/functions";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $Pair, $Unit } from "@package/kotlin";
export * as v2 from "@package/gg/essential/elementa/state/v2";

declare module "@package/gg/essential/elementa/state" {
    export class $MappedState<T, U> extends $BasicState<U> {
        rebind(arg0: $State<U>): void;
        static access$getMapper$p(arg0: $MappedState<any, any>): $Function1<any, any>;
        constructor(arg0: $State<U>, arg1: $Function1_<U, U>);
    }
    export class $State<T> {
        get(): T;
        map<U>(arg0: $Function_<T, U>): $State<U>;
        map<U>(arg0: $Function1_<T, U>): $MappedState<T, U>;
        set(arg0: $Function1_<T, T>): void;
        set(arg0: T): void;
        getOrDefault(arg0: T): T;
        zip<U>(arg0: $State<U>): $State<$Pair<T, U>>;
        getOrElse(arg0: $Function0_<T>): T;
        onSetValue(arg0: $Consumer_<T>): $Function0<$Unit>;
        onSetValue(arg0: $Function1_<T, $Unit>): $Function0<$Unit>;
        constructor();
    }
}
