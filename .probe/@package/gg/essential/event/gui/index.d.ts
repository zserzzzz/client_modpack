import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $UMatrixStack } from "@package/gg/essential/universal";
import { $UDrawContext } from "@package/gg/essential/util";

declare module "@package/gg/essential/event/gui" {
    export class $GuiDrawScreenEvent {
        getScreen(): $Screen;
        getOriginalMouseX(): number;
        getOriginalMouseY(): number;
        getDrawContext(): $UDrawContext;
        getMouseY(): number;
        getMouseX(): number;
        getMatrixStack(): $UMatrixStack;
        isPre(): boolean;
        getPartialTicks(): number;
        setMouseX(mouseX: number): void;
        setMouseY(mouseY: number): void;
        isPost(): boolean;
        constructor(screen: $Screen, drawContext: $UDrawContext, mouseX: number, mouseY: number, partialTicks: number, post: boolean);
        get screen(): $Screen;
        get originalMouseX(): number;
        get originalMouseY(): number;
        get drawContext(): $UDrawContext;
        get matrixStack(): $UMatrixStack;
        get pre(): boolean;
        get partialTicks(): number;
        get post(): boolean;
    }
}
