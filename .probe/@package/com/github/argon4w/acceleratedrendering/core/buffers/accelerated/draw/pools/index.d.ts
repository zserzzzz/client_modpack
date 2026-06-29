import { $IServerBuffer } from "@package/com/github/argon4w/acceleratedrendering/core/backends/buffers";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $VertexFormat$Mode_ } from "@package/com/mojang/blaze3d/vertex";
import { $Comparable } from "@package/java/lang";
import { $AcceleratedBufferBuilder } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/builders";

declare module "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/draw/pools" {
    export class $IDrawContextPool$IDrawContext {
    }
    export interface $IDrawContextPool$IDrawContext extends $Comparable<$IDrawContextPool$IDrawContext> {
        getRenderType(): $RenderType;
        drawElements(arg0: $VertexFormat$Mode_): void;
        setupContext(arg0: $AcceleratedBufferBuilder, arg1: $IElementPool$IElementSegment, arg2: $IServerBuffer, arg3: $RenderType): void;
        get renderType(): $RenderType;
    }
    export class $IDrawContextPool {
    }
    export interface $IDrawContextPool {
        reset(): void;
        get(): $IDrawContextPool$IDrawContext;
        setup(): void;
        "delete"(): void;
    }
    export class $IElementPool {
    }
    export interface $IElementPool {
        bindBuffer(): void;
        reset(): void;
        get(): $IElementPool$IElementSegment;
        "delete"(): void;
        prepare(): void;
        getBuffer(): $IServerBuffer;
        isResized(): boolean;
        get buffer(): $IServerBuffer;
        get resized(): boolean;
    }
    export class $IElementPool$IElementSegment {
    }
    export interface $IElementPool$IElementSegment {
        count(arg0: number): void;
        setup(): void;
        getCount(): number;
    }
}
