import { $IMeshInfoCache } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools/meshes";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Collection_ } from "@package/java/util";
import { $AcceleratedRingBuffers$Buffers } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated";
import { $AcceleratedBufferBuilder } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";

declare module "@package/com/github/argon4w/acceleratedrendering/core/programs/dispatchers/meshes" {
    export class $MeshUploadingProgramDispatcher {
        dispatch(arg0: $Collection_<$AcceleratedBufferBuilder>, arg1: $AcceleratedRingBuffers$Buffers): void;
        clear(): void;
        handler$bod000$acceleratedrendering$addIrisData(arg0: $Collection_<any>, arg1: $AcceleratedRingBuffers$Buffers, arg2: $CallbackInfo, arg3: $IMeshInfoCache, arg4: $AcceleratedBufferBuilder, arg5: number, arg6: number, arg7: number): void;
        static SPARSE_MESH_BUFFER_INDEX: number;
        static MESH_INFO_BUFFER_INDEX: number;
        static MESH_BUFFER_INDEX: number;
        constructor();
    }
}
