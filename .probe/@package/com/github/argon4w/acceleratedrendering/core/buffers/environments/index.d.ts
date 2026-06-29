import { $MeshUploadingProgramDispatcher } from "@package/com/github/argon4w/acceleratedrendering/core/programs/dispatchers/meshes";
import { $VertexLayout } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/memory";
import { $IServerBuffer } from "@package/com/github/argon4w/acceleratedrendering/core/backends/buffers";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $VertexFormat$Mode_, $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $Set } from "@package/java/util";
import { $ICullingProgramDispatcher } from "@package/com/github/argon4w/acceleratedrendering/core/programs/culling";
import { $IDrawMethod } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/draw";
import { $TransformProgramDispatcher, $IPolygonProgramDispatcher } from "@package/com/github/argon4w/acceleratedrendering/core/programs/dispatchers";
import { $ProgramOverride } from "@package/com/github/argon4w/acceleratedrendering/core/programs/overrides";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/environments" {
    export class $IBufferEnvironment {
    }
    export interface $IBufferEnvironment {
        clear(): void;
        getLayout(): $VertexLayout;
        isAccelerated(arg0: $VertexFormat): boolean;
        getVertexSize(): number;
        setupBufferState(): void;
        getImmediateMeshBuffer(): $IServerBuffer;
        getDrawMethod(): $IDrawMethod;
        selectMeshUploadingProgramDispatcher(): $MeshUploadingProgramDispatcher;
        getVertexFormats(): $Set<$VertexFormat>;
        getProgramOverride(arg0: $RenderType): $ProgramOverride;
        getProgramOverride(arg0: number): $ProgramOverride;
        getOverrideCount(): number;
        selectCullingProgramDispatcher(arg0: $RenderType): $ICullingProgramDispatcher;
        selectProcessingProgramDispatcher(arg0: $VertexFormat$Mode_): $IPolygonProgramDispatcher;
        selectTransformProgramDispatcher(): $TransformProgramDispatcher;
        get layout(): $VertexLayout;
        get vertexSize(): number;
        get immediateMeshBuffer(): $IServerBuffer;
        get drawMethod(): $IDrawMethod;
        get vertexFormats(): $Set<$VertexFormat>;
        get overrideCount(): number;
    }
}
