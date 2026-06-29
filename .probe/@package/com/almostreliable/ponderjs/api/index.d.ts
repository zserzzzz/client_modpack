import { $AnimatedSceneElementBase } from "@package/net/createmod/ponder/foundation/element";
import { $PonderScene } from "@package/net/createmod/ponder/foundation";
import { $RenderType, $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $PonderElement } from "@package/net/createmod/ponder/api/element";
import { $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $PonderLevel } from "@package/net/createmod/ponder/api/level";

declare module "@package/com/almostreliable/ponderjs/api" {
    export class $OnRenderWorld$Layer {
    }
    export interface $OnRenderWorld$Layer {
        renderLayer(arg0: $OnRenderWorld$Layer$RenderContext_): void;
    }
    /**
     * Values that may be interpreted as {@link $OnRenderWorld$Layer}.
     */
    export type $OnRenderWorld$Layer_ = ((arg0: $OnRenderWorld$Layer$RenderContext) => void);
    export class $OnElementAction {
    }
    export interface $OnElementAction {
        accept(arg0: $OnElementAction$Context_): void;
    }
    /**
     * Values that may be interpreted as {@link $OnElementAction}.
     */
    export type $OnElementAction_ = ((arg0: $OnElementAction$Context) => void);
    export class $OnRenderWorld {
    }
    export interface $OnRenderWorld {
        renderWorld(arg0: $OnRenderWorld$RenderContext_): void;
    }
    /**
     * Values that may be interpreted as {@link $OnRenderWorld}.
     */
    export type $OnRenderWorld_ = ((arg0: $OnRenderWorld$RenderContext) => void);
    export class $CustomPonderSceneElement extends $AnimatedSceneElementBase {
        onRender(arg0: $OnRenderWorld$Layer_): $CustomPonderSceneElement;
        onTick(arg0: $OnElementAction_): $CustomPonderSceneElement;
        onReset(arg0: $OnElementAction_): $CustomPonderSceneElement;
        onRenderLast(arg0: $OnRenderWorld_): $CustomPonderSceneElement;
        getCurrentTick(): number;
        onSkipping(arg0: $OnElementAction_): $CustomPonderSceneElement;
        onRenderFirst(arg0: $OnRenderWorld_): $CustomPonderSceneElement;
        constructor();
        get currentTick(): number;
    }
    export class $OnRenderWorld$Layer$RenderContext extends $Record {
        getType(): $RenderType;
        getBuffer(): $MultiBufferSource;
        getElement(): $PonderElement;
        getGraphics(): $GuiGraphics;
        getWorld(): $PonderLevel;
        getPartialTicks(): number;
        getFade(): number;
        constructor(getElement: $PonderElement, getWorld: $PonderLevel, getBuffer: $MultiBufferSource_, getType: $RenderType, getGraphics: $GuiGraphics, getPartialTicks: number, getFade: number);
        get type(): $RenderType;
        get buffer(): $MultiBufferSource;
        get element(): $PonderElement;
        get graphics(): $GuiGraphics;
        get world(): $PonderLevel;
        get partialTicks(): number;
        get fade(): number;
    }
    /**
     * Values that may be interpreted as {@link $OnRenderWorld$Layer$RenderContext}.
     */
    export type $OnRenderWorld$Layer$RenderContext_ = { getWorld?: $PonderLevel, getBuffer?: $MultiBufferSource_, getGraphics?: $GuiGraphics, getFade?: number, getPartialTicks?: number, getElement?: $PonderElement, getType?: $RenderType,  } | [getWorld?: $PonderLevel, getBuffer?: $MultiBufferSource_, getGraphics?: $GuiGraphics, getFade?: number, getPartialTicks?: number, getElement?: $PonderElement, getType?: $RenderType, ];
    export class $OnRenderWorld$RenderContext extends $Record {
        getBuffer(): $MultiBufferSource;
        getElement(): $PonderElement;
        getGraphics(): $GuiGraphics;
        getWorld(): $PonderLevel;
        getPartialTicks(): number;
        getFade(): number;
        constructor(getElement: $PonderElement, getWorld: $PonderLevel, getBuffer: $MultiBufferSource_, getGraphics: $GuiGraphics, getPartialTicks: number, getFade: number);
        get buffer(): $MultiBufferSource;
        get element(): $PonderElement;
        get graphics(): $GuiGraphics;
        get world(): $PonderLevel;
        get partialTicks(): number;
        get fade(): number;
    }
    /**
     * Values that may be interpreted as {@link $OnRenderWorld$RenderContext}.
     */
    export type $OnRenderWorld$RenderContext_ = { getBuffer?: $MultiBufferSource_, getWorld?: $PonderLevel, getPartialTicks?: number, getGraphics?: $GuiGraphics, getFade?: number, getElement?: $PonderElement,  } | [getBuffer?: $MultiBufferSource_, getWorld?: $PonderLevel, getPartialTicks?: number, getGraphics?: $GuiGraphics, getFade?: number, getElement?: $PonderElement, ];
    export class $OnElementAction$Context extends $Record {
        getElement(): $PonderElement;
        getScene(): $PonderScene;
        constructor(getElement: $PonderElement, getScene: $PonderScene);
        get element(): $PonderElement;
        get scene(): $PonderScene;
    }
    /**
     * Values that may be interpreted as {@link $OnElementAction$Context}.
     */
    export type $OnElementAction$Context_ = { getScene?: $PonderScene, getElement?: $PonderElement,  } | [getScene?: $PonderScene, getElement?: $PonderElement, ];
}
