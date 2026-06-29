import { $SerializersModule } from "@package/kotlinx/serialization/modules";
import { $SerializationStrategy } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $Object } from "@package/java/lang";

declare module "@package/kotlinx/serialization/encoding" {
    export class $CompositeEncoder {
        static access$shouldEncodeElementDefault$jd(arg0: $CompositeEncoder, arg1: $SerialDescriptor, arg2: number): boolean;
    }
    export interface $CompositeEncoder {
        encodeFloatElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeIntElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeInlineElement(arg0: $SerialDescriptor, arg1: number): $Encoder;
        encodeDoubleElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeByteElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeCharElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        encodeShortElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeLongElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        getSerializersModule(): $SerializersModule;
        encodeBooleanElement(arg0: $SerialDescriptor, arg1: number, arg2: boolean): void;
        shouldEncodeElementDefault(arg0: $SerialDescriptor, arg1: number): boolean;
        encodeStringElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        encodeSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        endStructure(arg0: $SerialDescriptor): void;
        encodeNullableSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        get serializersModule(): $SerializersModule;
    }
    export class $Encoder {
        static access$encodeNullableSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
        static access$beginCollection$jd(arg0: $Encoder, arg1: $SerialDescriptor, arg2: number): $CompositeEncoder;
        static access$encodeSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
        static access$encodeNotNullMark$jd(arg0: $Encoder): void;
    }
    export interface $Encoder {
        encodeSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        encodeInline(arg0: $SerialDescriptor): $Encoder;
        encodeShort(arg0: number): void;
        encodeNotNullMark(): void;
        encodeDouble(arg0: number): void;
        encodeFloat(arg0: number): void;
        encodeNullableSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        getSerializersModule(): $SerializersModule;
        beginStructure(arg0: $SerialDescriptor): $CompositeEncoder;
        encodeString(arg0: string): void;
        encodeBoolean(arg0: boolean): void;
        beginCollection(arg0: $SerialDescriptor, arg1: number): $CompositeEncoder;
        encodeEnum(arg0: $SerialDescriptor, arg1: number): void;
        encodeByte(arg0: number): void;
        encodeLong(arg0: number): void;
        encodeNull(): void;
        encodeChar(arg0: string): void;
        encodeInt(arg0: number): void;
        get serializersModule(): $SerializersModule;
    }
}
