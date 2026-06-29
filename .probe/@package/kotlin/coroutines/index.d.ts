import { $Function1_, $Function2_ } from "@package/kotlin/jvm/functions";
import { $Object } from "@package/java/lang";

declare module "@package/kotlin/coroutines" {
    export class $AbstractCoroutineContextElement implements $CoroutineContext$Element {
        get<E extends $CoroutineContext$Element>(arg0: $CoroutineContext$Key<E>): E;
        getKey(): $CoroutineContext$Key<never>;
        plus(arg0: $CoroutineContext): $CoroutineContext;
        minusKey(arg0: $CoroutineContext$Key<never>): $CoroutineContext;
        fold<R>(arg0: R, arg1: $Function2_<R, $CoroutineContext$Element, R>): R;
        constructor(arg0: $CoroutineContext$Key<never>);
        get key(): $CoroutineContext$Key<never>;
    }
    export class $CoroutineContext$Element {
    }
    export interface $CoroutineContext$Element extends $CoroutineContext {
        get<E extends $CoroutineContext$Element>(arg0: $CoroutineContext$Key<E>): E;
        getKey(): $CoroutineContext$Key<never>;
        minusKey(arg0: $CoroutineContext$Key<never>): $CoroutineContext;
        fold<R>(arg0: R, arg1: $Function2_<R, $CoroutineContext$Element, R>): R;
        get key(): $CoroutineContext$Key<never>;
    }
    export class $ContinuationInterceptor$Key implements $CoroutineContext$Key<$ContinuationInterceptor> {
    }
    export class $CoroutineContext {
    }
    export interface $CoroutineContext {
        get<E extends $CoroutineContext$Element>(arg0: $CoroutineContext$Key<E>): E;
        plus(arg0: $CoroutineContext): $CoroutineContext;
        minusKey(arg0: $CoroutineContext$Key<never>): $CoroutineContext;
        fold<R>(arg0: R, arg1: $Function2_<R, $CoroutineContext$Element, R>): R;
    }
    export class $Continuation<T> {
    }
    export interface $Continuation<T> {
        getContext(): $CoroutineContext;
        resumeWith(arg0: $Object): void;
        get context(): $CoroutineContext;
    }
    export class $CoroutineContext$Key<E extends $CoroutineContext$Element> {
    }
    export interface $CoroutineContext$Key<E extends $CoroutineContext$Element> {
    }
    export class $ContinuationInterceptor {
        static Key: $ContinuationInterceptor$Key;
    }
    export interface $ContinuationInterceptor extends $CoroutineContext$Element {
        get<E extends $CoroutineContext$Element>(arg0: $CoroutineContext$Key<E>): E;
        minusKey(arg0: $CoroutineContext$Key<never>): $CoroutineContext;
        interceptContinuation<T>(arg0: $Continuation<T>): $Continuation<T>;
        releaseInterceptedContinuation(arg0: $Continuation<never>): void;
    }
    export class $AbstractCoroutineContextKey<B extends $CoroutineContext$Element, E extends B> implements $CoroutineContext$Key<E> {
        isSubKey$kotlin_stdlib(arg0: $CoroutineContext$Key<never>): boolean;
        tryCast$kotlin_stdlib(arg0: $CoroutineContext$Element): E;
        constructor(arg0: $CoroutineContext$Key<B>, arg1: $Function1_<$CoroutineContext$Element, E>);
    }
}
