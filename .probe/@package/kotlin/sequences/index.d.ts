import { $Iterator } from "@package/java/util";

declare module "@package/kotlin/sequences" {
    export class $Sequence<T> {
    }
    export interface $Sequence<T> {
        iterator(): $Iterator<T>;
    }
    /**
     * Values that may be interpreted as {@link $Sequence}.
     */
    export type $Sequence_<T> = (() => $Iterator<T>);
}
