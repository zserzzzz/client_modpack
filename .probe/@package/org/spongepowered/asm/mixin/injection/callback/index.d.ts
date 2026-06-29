import { $Type } from "@package/org/objectweb/asm";

declare module "@package/org/spongepowered/asm/mixin/injection/callback" {
    export class $CallbackInfoReturnable<R> extends $CallbackInfo {
        getReturnValue(): R;
        setReturnValue(arg0: R): void;
        getReturnValueD(): number;
        getReturnValueS(): number;
        getReturnValueC(): string;
        getReturnValueI(): number;
        getReturnValueJ(): number;
        getReturnValueZ(): boolean;
        getReturnValueF(): number;
        getReturnValueB(): number;
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: boolean);
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: string, arg1: boolean, arg2: R);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: string);
        constructor(arg0: string, arg1: boolean, arg2: number);
        get returnValueD(): number;
        get returnValueS(): number;
        get returnValueC(): string;
        get returnValueI(): number;
        get returnValueJ(): number;
        get returnValueZ(): boolean;
        get returnValueF(): number;
        get returnValueB(): number;
    }
    export class $CallbackInfo implements $Cancellable {
        getId(): string;
        cancel(): void;
        isCancelled(): boolean;
        isCancellable(): boolean;
        static getCallInfoClassName(arg0: $Type): string;
        constructor(arg0: string, arg1: boolean);
        get id(): string;
        get cancelled(): boolean;
        get cancellable(): boolean;
    }
    export class $Cancellable {
    }
    export interface $Cancellable {
        cancel(): void;
        isCancelled(): boolean;
        isCancellable(): boolean;
        get cancelled(): boolean;
        get cancellable(): boolean;
    }
}
