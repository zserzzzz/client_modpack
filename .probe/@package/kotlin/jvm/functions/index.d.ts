import { $Function } from "@package/kotlin";

declare module "@package/kotlin/jvm/functions" {
    export class $Function2<P1, P2, R> {
    }
    export interface $Function2<P1, P2, R> extends $Function<R> {
        invoke(arg0: P1, arg1: P2): R;
    }
    /**
     * Values that may be interpreted as {@link $Function2}.
     */
    export type $Function2_<P1, P2, R> = ((arg0: P1, arg1: P2) => R);
    export class $Function1<P1, R> {
    }
    export interface $Function1<P1, R> extends $Function<R> {
        invoke(arg0: P1): R;
    }
    /**
     * Values that may be interpreted as {@link $Function1}.
     */
    export type $Function1_<P1, R> = ((arg0: P1) => R);
    export class $Function0<R> {
    }
    export interface $Function0<R> extends $Function<R> {
        invoke(): R;
    }
    /**
     * Values that may be interpreted as {@link $Function0}.
     */
    export type $Function0_<R> = (() => R);
    export class $Function4<P1, P2, P3, P4, R> {
    }
    export interface $Function4<P1, P2, P3, P4, R> extends $Function<R> {
        invoke(arg0: P1, arg1: P2, arg2: P3, arg3: P4): R;
    }
    /**
     * Values that may be interpreted as {@link $Function4}.
     */
    export type $Function4_<P1, P2, P3, P4, R> = ((arg0: P1, arg1: P2, arg2: P3, arg3: P4) => R);
    export class $Function3<P1, P2, P3, R> {
    }
    export interface $Function3<P1, P2, P3, R> extends $Function<R> {
        invoke(arg0: P1, arg1: P2, arg2: P3): R;
    }
    /**
     * Values that may be interpreted as {@link $Function3}.
     */
    export type $Function3_<P1, P2, P3, R> = ((arg0: P1, arg1: P2, arg2: P3) => R);
}
