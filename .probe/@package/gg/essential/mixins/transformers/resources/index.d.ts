import { $File_, $File } from "@package/java/io";

declare module "@package/gg/essential/mixins/transformers/resources" {
    export class $ZipFileWrapperAccessor {
    }
    export interface $ZipFileWrapperAccessor {
        getFile(): $File;
        get file(): $File;
    }
    /**
     * Values that may be interpreted as {@link $ZipFileWrapperAccessor}.
     */
    export type $ZipFileWrapperAccessor_ = (() => $File_);
}
