import { $Serializable } from "@package/java/io";
import { $Charset } from "@package/java/nio/charset";
import { $CharSequence } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/com/google/common/hash" {
    export class $PrimitiveSink {
    }
    export interface $PrimitiveSink {
        putString(charSequence: $CharSequence, charset: $Charset): $PrimitiveSink;
        putBytes(bytes: $ByteBuffer): $PrimitiveSink;
        putBytes(bytes: number[], off: number, len: number): $PrimitiveSink;
        putBytes(bytes: number[]): $PrimitiveSink;
        putBoolean(b: boolean): $PrimitiveSink;
        putByte(b: number): $PrimitiveSink;
        putShort(s: number): $PrimitiveSink;
        putChar(c: string): $PrimitiveSink;
        putInt(i: number): $PrimitiveSink;
        putLong(l: number): $PrimitiveSink;
        putFloat(f: number): $PrimitiveSink;
        putDouble(d: number): $PrimitiveSink;
        putUnencodedChars(charSequence: $CharSequence): $PrimitiveSink;
    }
    export class $HashFunction {
    }
    export interface $HashFunction {
        hashBytes(input: number[]): $HashCode;
        hashBytes(input: $ByteBuffer): $HashCode;
        hashBytes(input: number[], off: number, len: number): $HashCode;
        hashObject<T>(instance: T, funnel: $Funnel_<T>): $HashCode;
        newHasher(): $Hasher;
        newHasher(expectedInputSize: number): $Hasher;
        hashInt(input: number): $HashCode;
        hashLong(input: number): $HashCode;
        hashString(input: $CharSequence, charset: $Charset): $HashCode;
        bits(): number;
        hashUnencodedChars(input: $CharSequence): $HashCode;
    }
    export class $HashCode {
        asBytes(): number[];
        asInt(): number;
        static fromString(string: string): $HashCode;
        static fromLong(hash: number): $HashCode;
        asLong(): number;
        static fromInt(hash: number): $HashCode;
        padToLong(): number;
        bits(): number;
        static fromBytes(bytes: number[]): $HashCode;
        writeBytesTo(dest: number[], offset: number, maxLength: number): number;
    }
    export class $Funnel<T> {
    }
    export interface $Funnel<T> extends $Serializable {
        funnel(from: T, into: $PrimitiveSink): void;
    }
    /**
     * Values that may be interpreted as {@link $Funnel}.
     */
    export type $Funnel_<T> = ((from: T, into: $PrimitiveSink) => void);
    export class $Hasher {
    }
    export interface $Hasher extends $PrimitiveSink {
        putString(charSequence: $CharSequence, charset: $Charset): $Hasher;
        /**
         * @deprecated
         */
        hashCode(): number;
        putBoolean(b: boolean): $Hasher;
        putShort(s: number): $Hasher;
        putInt(i: number): $Hasher;
        putDouble(d: number): $Hasher;
        hash(): $HashCode;
        putObject<T>(instance: T, funnel: $Funnel_<T>): $Hasher;
        putBytes(bytes: $ByteBuffer): $PrimitiveSink;
        putBytes(bytes: number[], off: number, len: number): $PrimitiveSink;
        putBytes(bytes: $ByteBuffer): $PrimitiveSink;
        putByte(b: number): $PrimitiveSink;
        putChar(c: string): $PrimitiveSink;
        putLong(l: number): $PrimitiveSink;
        putFloat(f: number): $PrimitiveSink;
        putUnencodedChars(charSequence: $CharSequence): $PrimitiveSink;
    }
}
