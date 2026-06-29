import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Annotation } from "@package/java/lang/annotation";
import { $List } from "@package/java/util";

declare module "@package/kotlinx/serialization/descriptors" {
    export class $SerialDescriptor {
        static access$isInline$jd(arg0: $SerialDescriptor): boolean;
        static access$isNullable$jd(arg0: $SerialDescriptor): boolean;
        static access$getAnnotations$jd(arg0: $SerialDescriptor): $List<any>;
    }
    export interface $SerialDescriptor {
        getElementDescriptor(arg0: number): $SerialDescriptor;
        getAnnotations(): $List<$Annotation>;
        getElementName(arg0: number): string;
        isNullable(): boolean;
        getKind(): $SerialKind;
        isInline(): boolean;
        getSerialName(): string;
        getElementIndex(arg0: string): number;
        isElementOptional(arg0: number): boolean;
        getElementsCount(): number;
        getElementAnnotations(arg0: number): $List<$Annotation>;
        get annotations(): $List<$Annotation>;
        get nullable(): boolean;
        get kind(): $SerialKind;
        get inline(): boolean;
        get serialName(): string;
        get elementsCount(): number;
    }
    export class $SerialKind {
        constructor(arg0: $DefaultConstructorMarker);
    }
}
