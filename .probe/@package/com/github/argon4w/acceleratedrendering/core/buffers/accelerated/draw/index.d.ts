import { $IElementPool, $IDrawContextPool } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/draw/pools";
import { $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $ICullingProgramSelector } from "@package/com/github/argon4w/acceleratedrendering/core/programs/culling";
export * as pools from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/draw/pools";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/draw" {
    export class $IDrawMethod {
    }
    export interface $IDrawMethod {
        getCullingProgramSelector(arg0: $VertexFormat): $ICullingProgramSelector;
        getDrawContextPool(arg0: number): $IDrawContextPool;
        getElementPool(arg0: number): $IElementPool;
    }
}
