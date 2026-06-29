import { $LongSupplier } from "@package/java/util/function";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AcceleratedRingBuffers$Buffers } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated";
import { $ServerMesh_, $ServerMesh } from "@package/com/github/argon4w/acceleratedrendering/core/meshes";
import { $ProgramOverride, $ProgramOverride_ } from "@package/com/github/argon4w/acceleratedrendering/core/programs/overrides";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools/meshes" {
    export class $IMeshInfoCache {
    }
    export interface $IMeshInfoCache {
        reset(): void;
        setup(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        "delete"(): void;
        getColor(arg0: number): number;
        getSharing(arg0: number): number;
        getOverlay(arg0: number): number;
        getShouldCull(arg0: number): number;
        getMeshCount(): number;
        getLight(arg0: number): number;
        get meshCount(): number;
    }
    export class $MeshUploaderPool$MeshUploader implements $LongSupplier {
        getOverride(): $ProgramOverride;
        reset(): void;
        "delete"(): void;
        getIndex(): number;
        setIndex(arg0: number): void;
        getAsLong(): number;
        getBuffers(): $AcceleratedRingBuffers$Buffers;
        upload(arg0: number, arg1: number, arg2: number): void;
        getVertexCount(): number;
        getMeshCount(): number;
        setOverride(arg0: $ProgramOverride_): void;
        getMeshInfoSize(): number;
        getMeshInfos(): $IMeshInfoCache;
        getServerMesh(): $ServerMesh;
        setServerMesh(arg0: $ServerMesh_): void;
        addUpload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        handler$boc000$acceleratedrendering$uploadIrisData(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo, arg4: number): void;
        constructor(arg0: $AcceleratedRingBuffers$Buffers);
        get asLong(): number;
        get buffers(): $AcceleratedRingBuffers$Buffers;
        get vertexCount(): number;
        get meshCount(): number;
        get meshInfoSize(): number;
        get meshInfos(): $IMeshInfoCache;
    }
}
