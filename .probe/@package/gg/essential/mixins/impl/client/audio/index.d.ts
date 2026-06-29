import { $Quaternion } from "@package/gg/essential/model/util";
import { $Vec3 } from "@package/gg/essential/lib/kotgl/matrix/vectors";

declare module "@package/gg/essential/mixins/impl/client/audio" {
    export class $SoundSystemExt {
    }
    export interface $SoundSystemExt {
        essential$getListenerPosition(): $Vec3;
        essential$getListenerRotation(): $Quaternion;
    }
}
