import { $Terminal } from "@package/org/jline/terminal";
import { $InfoCmp$Capability_ } from "@package/org/jline/utils";
import { $Comparator, $Map, $Collection } from "@package/java/util";
import { $CharSequence, $Iterable_ } from "@package/java/lang";

declare module "@package/org/jline/keymap" {
    export class $KeyMap<T> {
        static esc(): string;
        static alt(arg0: string): string;
        static alt(arg0: string): string;
        static del(): string;
        static key(arg0: $Terminal, arg1: $InfoCmp$Capability_): string;
        static display(arg0: string): string;
        static range(arg0: string): $Collection<string>;
        bind(arg0: T, ...arg1: $CharSequence[]): void;
        bind(arg0: T, arg1: $Iterable_<$CharSequence>): void;
        bind(arg0: T, arg1: $CharSequence): void;
        static translate(arg0: string): string;
        unbind(...arg0: $CharSequence[]): void;
        unbind(arg0: $CharSequence): void;
        setUnicode(arg0: T): void;
        getBound(arg0: $CharSequence): T;
        getBound(arg0: $CharSequence, arg1: number[]): T;
        getUnicode(): T;
        static ctrl(arg0: string): string;
        getNomatch(): T;
        setNomatch(arg0: T): void;
        getAmbiguousTimeout(): number;
        setAmbiguousTimeout(arg0: number): void;
        bindIfNotBound(arg0: T, arg1: $CharSequence): void;
        getBoundKeys(): $Map<string, T>;
        getAnotherKey(): T;
        static KEYMAP_LENGTH: number;
        static DEFAULT_AMBIGUOUS_TIMEOUT: number;
        static KEYSEQ_COMPARATOR: $Comparator<string>;
        constructor();
        get boundKeys(): $Map<string, T>;
        get anotherKey(): T;
    }
}
