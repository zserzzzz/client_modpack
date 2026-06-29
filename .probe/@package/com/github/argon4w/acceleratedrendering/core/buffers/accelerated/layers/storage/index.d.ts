import { $IDrawContextPool$IDrawContext } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/draw/pools";
import { $LayerDrawType_ } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers";
import { $Iterable } from "@package/java/lang";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/layers/storage" {
    export class $ILayerContexts {
    }
    export interface $ILayerContexts extends $Iterable<$IDrawContextPool$IDrawContext> {
        reset(): void;
        isEmpty(): boolean;
        add(arg0: $IDrawContextPool$IDrawContext): void;
        prepare(): void;
        get empty(): boolean;
    }
    export class $ILayerStorage {
    }
    export interface $ILayerStorage {
        reset(): void;
        get(arg0: $LayerDrawType_): $ILayerContexts;
    }
}
