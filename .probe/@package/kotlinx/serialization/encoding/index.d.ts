import { $SerializersModule } from "@package/kotlinx/serialization/modules";
import { $SerializationStrategy } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $Object } from "@package/java/lang";

declare module "@package/kotlinx/serialization/encoding" {
    export class $CompositeEncoder {
        static access$shouldEncodeElementDefault$jd(arg0: $CompositeEncoder, arg1: $SerialDescriptor, arg2: number): boolean;
    }
    export interface $CompositeEncoder {
        encodeByteElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeLongElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeShortElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeCharElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        encodeNullableSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        encodeFloatElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeIntElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        getSerializersModule(): $SerializersModule;
        encodeSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        shouldEncodeElementDefault(arg0: $SerialDescriptor, arg1: number): boolean;
        encodeBooleanElement(arg0: $SerialDescriptor, arg1: number, arg2: boolean): void;
        encodeStringElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        endStructure(arg0: $SerialDescriptor): void;
        encodeInlineElement(arg0: $SerialDescriptor, arg1: number): $Encoder;
        encodeDoubleElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        get serializersModule(): $SerializersModule;
    }
    export class $Encoder {
        static access$encodeNotNullMark$jd(arg0: $Encoder): void;
        static access$encodeSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
        static access$encodeNullableSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
        static access$beginCollection$jd(arg0: $Encoder, arg1: $SerialDescriptor, arg2: number): $CompositeEncoder;
    }
    export interface $Encoder {
        encodeNullableSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        encodeFloat(arg0: number): void;
        encodeInline(arg0: $SerialDescriptor): $Encoder;
        encodeNotNullMark(): void;
        encodeDouble(arg0: number): void;
        encodeShort(arg0: number): void;
        encodeByte(arg0: number): void;
        encodeInt(arg0: number): void;
        encodeLong(arg0: number): void;
        encodeEnum(arg0: $SerialDescriptor, arg1: number): void;
        encodeChar(arg0: string): void;
        encodeNull(): void;
        getSerializersModule(): $SerializersModule;
        beginStructure(arg0: $SerialDescriptor): $CompositeEncoder;
        encodeBoolean(arg0: boolean): void;
        encodeString(arg0: string): void;
        beginCollection(arg0: $SerialDescriptor, arg1: number): $CompositeEncoder;
        encodeSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        get serializersModule(): $SerializersModule;
    }
}
