import { $SchematicTransformation } from "@package/com/simibubi/create/content/schematics/client";
import { $Component, $MutableComponent } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $RaycastHelper$PredicateTraceResult } from "@package/com/simibubi/create/foundation/utility";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List } from "@package/java/util";
import { $SuperRenderTypeBuffer } from "@package/net/createmod/catnip/render";
import { $Predicate_ } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LocalIntRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $Enum } from "@package/java/lang";
import { $Gui, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/content/schematics/client/tools" {
    export class $RotateTool extends $PlacementToolBase {
        constructor();
    }
    export class $ToolType extends $Enum<$ToolType> {
        getDescription(): $List<$Component>;
        static values(): $ToolType[];
        static valueOf(arg0: string): $ToolType;
        getDisplayName(): $MutableComponent;
        getIcon(): $AllIcons;
        static getTools(arg0: boolean): $List<$ToolType>;
        getTool(): $ISchematicTool;
        static PRINT: $ToolType;
        static MOVE: $ToolType;
        static ROTATE: $ToolType;
        static DEPLOY: $ToolType;
        static MOVE_Y: $ToolType;
        static FLIP: $ToolType;
        get description(): $List<$Component>;
        get displayName(): $MutableComponent;
        get icon(): $AllIcons;
        get tool(): $ISchematicTool;
    }
    /**
     * Values that may be interpreted as {@link $ToolType}.
     */
    export type $ToolType_ = "deploy" | "move" | "move_y" | "rotate" | "flip" | "print";
    export class $ISchematicTool {
    }
    export interface $ISchematicTool {
        init(): void;
        renderOverlay(arg0: $Gui, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        renderTool(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer, arg2: $Vec3_): void;
        renderOnSchematic(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer): void;
        handleRightClick(): boolean;
        updateSelection(): void;
        handleMouseWheel(arg0: number): boolean;
    }
    export class $FlipTool extends $PlacementToolBase {
        constructor();
    }
    export class $MoveTool extends $PlacementToolBase {
        constructor();
    }
    export class $PlacementToolBase extends $SchematicToolBase {
        constructor();
    }
    export class $PlaceTool extends $SchematicToolBase {
        constructor();
    }
    export class $SchematicToolBase implements $ISchematicTool {
        init(): void;
        renderOverlay(arg0: $Gui, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        renderTool(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer, arg2: $Vec3_): void;
        handler$gna000$sable$forceUpdateSelection(arg0: $CallbackInfo, arg1: $Vec3_): void;
        wrapOperation$gna000$sable$rayTraceSublevels(arg0: $Vec3_, arg1: $Vec3_, arg2: $Predicate_<any>, arg3: $Operation_<any>, arg4: $LocalPlayer, arg5: $SchematicTransformation): $RaycastHelper$PredicateTraceResult;
        wrapOperation$gna000$sable$rayTraceSublevels$mixinextras$bridge$10(arg0: $Vec3_, arg1: $Vec3_, arg2: $Predicate_<any>, arg3: $Operation_<any>, arg4: $LocalRef<any>, arg5: $LocalRef<any>): $RaycastHelper$PredicateTraceResult;
        renderOnSchematic(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer): void;
        updateSelection(): void;
        updateTargetPos(): void;
        constructor();
    }
    export class $MoveVerticalTool extends $PlacementToolBase {
        constructor();
    }
    export class $DeployTool extends $PlacementToolBase {
        wrapOperation$gml000$sable$manualTransformBB(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>, arg5: number, arg6: number, arg7: $Vec3_): void;
        wrapOperation$gml000$sable$manualTransformBB$mixinextras$bridge$7(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>, arg5: $LocalIntRef, arg6: $LocalIntRef, arg7: $LocalRef<any>): void;
        constructor();
    }
}
