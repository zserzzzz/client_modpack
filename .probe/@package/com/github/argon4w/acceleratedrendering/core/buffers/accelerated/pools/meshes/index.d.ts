import { $LongSupplier } from "@package/java/util/function";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AcceleratedRingBuffers$Buffers } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated";
import { $ServerMesh_, $ServerMesh } from "@package/com/github/argon4w/acceleratedrendering/core/meshes";
import { $ProgramOverride_, $ProgramOverride } from "@package/com/github/argon4w/acceleratedrendering/core/programs/overrides";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/pools/meshes" {
    export class $IMeshInfoCache {
    }
    export interface $IMeshInfoCache {
        reset(): void;
        setup(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        "delete"(): void;
        getShouldCull(arg0: number): number;
        getMeshCount(): number;
        getColor(arg0: number): number;
        getSharing(arg0: number): number;
        getLight(arg0: number): number;
        getOverlay(arg0: number): number;
        get meshCount(): number;
    }
    export class $MeshUploaderPool$MeshUploader implements $LongSupplier {
        reset(): void;
        "delete"(): void;
        getIndex(): number;
        setIndex(arg0: number): void;
        getAsLong(): number;
        getOverride(): $ProgramOverride;
        upload(arg0: number, arg1: number, arg2: number): void;
        getMeshCount(): number;
        handler$boc000$acceleratedrendering$uploadIrisData(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo, arg4: number): void;
        getVertexCount(): number;
        setOverride(arg0: $ProgramOverride_): void;
        getBuffers(): $AcceleratedRingBuffers$Buffers;
        addUpload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getServerMesh(): $ServerMesh;
        getMeshInfoSize(): number;
        getMeshInfos(): $IMeshInfoCache;
        setServerMesh(arg0: $ServerMesh_): void;
        constructor(arg0: $AcceleratedRingBuffers$Buffers);
        get asLong(): number;
        get meshCount(): number;
        get vertexCount(): number;
        get buffers(): $AcceleratedRingBuffers$Buffers;
        get meshInfoSize(): number;
        get meshInfos(): $IMeshInfoCache;
    }
}
