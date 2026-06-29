import { $Serializable } from "@package/java/io";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Object } from "@package/java/lang";

declare module "@package/kotlin/random" {
    export class $Random$Default extends $Random implements $Serializable {
        static Default: $Random$Default;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $Random {
        nextDouble(arg0: number, arg1: number): number;
        nextDouble(): number;
        nextDouble(arg0: number): number;
        nextInt(arg0: number): number;
        nextInt(arg0: number, arg1: number): number;
        nextInt(): number;
        nextBytes(arg0: number[]): number[];
        nextBytes(arg0: number): number[];
        nextBytes(arg0: number[], arg1: number, arg2: number): number[];
        nextLong(): number;
        nextLong(arg0: number, arg1: number): number;
        nextLong(arg0: number): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextBits(arg0: number): number;
        static access$getDefaultRandom$cp(): $Random;
        static nextBytes$default(arg0: $Random, arg1: number[], arg2: number, arg3: number, arg4: number, arg5: $Object): number[];
        static Default: $Random$Default;
        constructor();
    }
}
