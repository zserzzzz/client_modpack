import { $Mat4 } from "@package/gg/essential/lib/kotgl/matrix/matrices";

declare module "@package/gg/essential/mixins/ext/client/model/geom" {
    export class $ExtraTransformHolder {
    }
    export interface $ExtraTransformHolder {
        setExtra(arg0: $Mat4): void;
        getExtra(): $Mat4;
    }
}
