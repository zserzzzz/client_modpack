import { $Path_, $Path } from "@package/java/nio/file";

declare module "@package/gg/essential/mixins/ext/client/resource" {
    export class $ResourcePackWithPath {
    }
    export interface $ResourcePackWithPath {
        getEssential$path(): $Path;
        get essential$path(): $Path;
    }
    /**
     * Values that may be interpreted as {@link $ResourcePackWithPath}.
     */
    export type $ResourcePackWithPath_ = (() => $Path_);
}
