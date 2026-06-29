import { $OutputStream } from "@package/java/io";
export * as features from "@package/com/unascribed/ears/api/features";

declare module "@package/com/unascribed/ears/api" {
    export class $Slice {
        size(): number;
        get(arg0: number): number;
        equals(arg0: number[], arg1: number, arg2: number): boolean;
        equals(arg0: number[]): boolean;
        static of(arg0: number[], arg1: number, arg2: number): number[];
        static parse(arg0: string): $Slice;
        slice(arg0: number): $Slice;
        slice(arg0: number, arg1: number): $Slice;
        writeTo(arg0: $OutputStream): void;
        toByteArray(): number[];
        static EMPTY: $Slice;
        constructor(arg0: number[]);
        constructor(arg0: number[], arg1: number, arg2: number);
    }
}
