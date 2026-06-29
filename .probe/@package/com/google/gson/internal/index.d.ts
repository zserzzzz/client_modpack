import { $Gson, $ExclusionStrategy, $TypeAdapter, $TypeAdapterFactory } from "@package/com/google/gson";
import { $Field } from "@package/java/lang/reflect";
import { $TypeToken } from "@package/com/google/gson/reflect";
import { $Class, $Cloneable } from "@package/java/lang";

declare module "@package/com/google/gson/internal" {
    export class $Excluder implements $TypeAdapterFactory, $Cloneable {
        excludeFieldsWithoutExposeAnnotation(): $Excluder;
        disableInnerClassSerialization(): $Excluder;
        withExclusionStrategy(arg0: $ExclusionStrategy, arg1: boolean, arg2: boolean): $Excluder;
        withModifiers(...arg0: number[]): $Excluder;
        excludeField(arg0: $Field, arg1: boolean): boolean;
        excludeClass(arg0: $Class<never>, arg1: boolean): boolean;
        withVersion(arg0: number): $Excluder;
        create<T>(arg0: $Gson, arg1: $TypeToken<T>): $TypeAdapter<T>;
        static DEFAULT: $Excluder;
        constructor();
    }
}
