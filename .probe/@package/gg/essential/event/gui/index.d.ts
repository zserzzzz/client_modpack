import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $UMatrixStack } from "@package/gg/essential/universal";
import { $UDrawContext } from "@package/gg/essential/util";

declare module "@package/gg/essential/event/gui" {
    export class $GuiDrawScreenEvent {
        getMouseY(): number;
        getScreen(): $Screen;
        getMouseX(): number;
        getOriginalMouseX(): number;
        getOriginalMouseY(): number;
        getMatrixStack(): $UMatrixStack;
        getDrawContext(): $UDrawContext;
        setMouseY(mouseY: number): void;
        setMouseX(mouseX: number): void;
        isPre(): boolean;
        getPartialTicks(): number;
        isPost(): boolean;
        constructor(screen: $Screen, drawContext: $UDrawContext, mouseX: number, mouseY: number, partialTicks: number, post: boolean);
        get screen(): $Screen;
        get originalMouseX(): number;
        get originalMouseY(): number;
        get matrixStack(): $UMatrixStack;
        get drawContext(): $UDrawContext;
        get pre(): boolean;
        get partialTicks(): number;
        get post(): boolean;
    }
}
