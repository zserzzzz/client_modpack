import { $Writer, $Reader, $Flushable, $Closeable } from "@package/java/io";
import { $Number, $Enum } from "@package/java/lang";

declare module "@package/com/google/gson/stream" {
    export class $JsonToken extends $Enum<$JsonToken> {
        static values(): $JsonToken[];
        static valueOf(arg0: string): $JsonToken;
        static NUMBER: $JsonToken;
        static NULL: $JsonToken;
        static END_DOCUMENT: $JsonToken;
        static BEGIN_OBJECT: $JsonToken;
        static END_ARRAY: $JsonToken;
        static STRING: $JsonToken;
        static END_OBJECT: $JsonToken;
        static BEGIN_ARRAY: $JsonToken;
        static BOOLEAN: $JsonToken;
        static NAME: $JsonToken;
    }
    /**
     * Values that may be interpreted as {@link $JsonToken}.
     */
    export type $JsonToken_ = "begin_array" | "end_array" | "begin_object" | "end_object" | "name" | "string" | "number" | "boolean" | "null" | "end_document";
    export class $JsonWriter implements $Closeable, $Flushable {
        nullValue(): $JsonWriter;
        endArray(): $JsonWriter;
        isHtmlSafe(): boolean;
        beginArray(): $JsonWriter;
        setIndent(arg0: string): void;
        endObject(): $JsonWriter;
        jsonValue(arg0: string): $JsonWriter;
        getSerializeNulls(): boolean;
        setHtmlSafe(arg0: boolean): void;
        setSerializeNulls(arg0: boolean): void;
        beginObject(): $JsonWriter;
        name(arg0: string): $JsonWriter;
        value(arg0: boolean): $JsonWriter;
        value(arg0: number): $JsonWriter;
        value(arg0: number): $JsonWriter;
        value(arg0: number): $JsonWriter;
        value(arg0: $Number): $JsonWriter;
        value(arg0: string): $JsonWriter;
        value(arg0: boolean): $JsonWriter;
        flush(): void;
        close(): void;
        setLenient(arg0: boolean): void;
        isLenient(): boolean;
        constructor(arg0: $Writer);
        set indent(value: string);
    }
    export class $JsonReader implements $Closeable {
        skipValue(): void;
        endArray(): void;
        nextName(): string;
        nextString(): string;
        beginArray(): void;
        endObject(): void;
        nextNull(): void;
        getPreviousPath(): string;
        beginObject(): void;
        hasNext(): boolean;
        close(): void;
        getPath(): string;
        peek(): $JsonToken;
        nextDouble(): number;
        nextInt(): number;
        setLenient(arg0: boolean): void;
        isLenient(): boolean;
        nextLong(): number;
        nextBoolean(): boolean;
        constructor(arg0: $Reader);
        get previousPath(): string;
        get path(): string;
    }
}
