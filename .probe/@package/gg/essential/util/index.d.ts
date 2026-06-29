import { $UMatrixStack } from "@package/gg/essential/universal";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Object } from "@package/java/lang";
export * as image from "@package/gg/essential/util/image";

declare module "@package/gg/essential/util" {
    export class $UDrawContext {
        getMatrixStack(): $UMatrixStack;
        getMc(): $GuiGraphics;
        constructor(mc: $GuiGraphics, matrixStack: $UMatrixStack);
        get matrixStack(): $UMatrixStack;
        get mc(): $GuiGraphics;
    }
    export class $UIdentifier {
        copy(arg0: string, arg1: string): $UIdentifier;
        getPath(): string;
        getNamespace(): string;
        static copy$default(arg0: $UIdentifier, arg1: string, arg2: string, arg3: number, arg4: $Object): $UIdentifier;
        component2(): string;
        component1(): string;
        constructor(arg0: string, arg1: string);
        get path(): string;
        get namespace(): string;
    }
}
