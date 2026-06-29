import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $SerializersModule } from "@package/kotlinx/serialization/modules";
import { $SerializationStrategy, $StringFormat, $DeserializationStrategy } from "@package/kotlinx/serialization";
import { $DescriptorSchemaCache } from "@package/kotlinx/serialization/json/internal";

declare module "@package/kotlinx/serialization/json" {
    export class $Json implements $StringFormat {
        encodeToString<T>(arg0: $SerializationStrategy<T>, arg1: T): string;
        encodeToString<T>(arg0: T): string;
        getConfiguration(): $JsonConfiguration;
        static get_schemaCache$kotlinx_serialization_json$annotations(): void;
        parseToJsonElement(arg0: string): $JsonElement;
        decodeFromString<T>(arg0: $DeserializationStrategy<T>, arg1: string): T;
        decodeFromString<T>(arg0: string): T;
        get_schemaCache$kotlinx_serialization_json(): $DescriptorSchemaCache;
        getSerializersModule(): $SerializersModule;
        encodeToJsonElement<T>(arg0: $SerializationStrategy<T>, arg1: T): $JsonElement;
        decodeFromJsonElement<T>(arg0: $DeserializationStrategy<T>, arg1: $JsonElement): T;
        static Default: $Json$Default;
        constructor(arg0: $JsonConfiguration, arg1: $SerializersModule, arg2: $DefaultConstructorMarker);
        get configuration(): $JsonConfiguration;
        static get _schemaCache$kotlinx_serialization_json$annotations(): void;
        get _schemaCache$kotlinx_serialization_json(): $DescriptorSchemaCache;
        get serializersModule(): $SerializersModule;
    }
}
