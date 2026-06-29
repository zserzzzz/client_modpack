import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Annotation } from "@package/java/lang/annotation";
import { $List } from "@package/java/util";

declare module "@package/kotlinx/serialization/descriptors" {
    export class $SerialDescriptor {
        static access$getAnnotations$jd(arg0: $SerialDescriptor): $List<any>;
        static access$isNullable$jd(arg0: $SerialDescriptor): boolean;
        static access$isInline$jd(arg0: $SerialDescriptor): boolean;
    }
    export interface $SerialDescriptor {
        getKind(): $SerialKind;
        getAnnotations(): $List<$Annotation>;
        getElementName(arg0: number): string;
        getElementAnnotations(arg0: number): $List<$Annotation>;
        isNullable(): boolean;
        getElementDescriptor(arg0: number): $SerialDescriptor;
        isInline(): boolean;
        getElementIndex(arg0: string): number;
        isElementOptional(arg0: number): boolean;
        getElementsCount(): number;
        getSerialName(): string;
        get kind(): $SerialKind;
        get annotations(): $List<$Annotation>;
        get nullable(): boolean;
        get inline(): boolean;
        get elementsCount(): number;
        get serialName(): string;
    }
    export class $SerialKind {
        constructor(arg0: $DefaultConstructorMarker);
    }
}
