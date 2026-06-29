import { $Function2_, $Function3_, $Function2, $Function0_, $Function3 } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $SuperConstraint } from "@package/gg/essential/elementa/constraints";
import { $ConcurrentLinkedQueue } from "@package/java/util/concurrent";
import { $UMatrixStack } from "@package/gg/essential/universal";
import { $ElementaVersion, $UIComponent, $ElementaVersion_ } from "@package/gg/essential/elementa";
import { $Runnable_ } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Unit } from "@package/kotlin";

declare module "@package/gg/essential/elementa/components" {
    export class $Window extends $UIComponent {
        isAreaVisible(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getAnimationFPS(): number;
        getHasErrored(): boolean;
        getAnimationTimeMs(): number;
        getAnimationTimeNs(): number;
        focus(arg0: $UIComponent): void;
        drawFloatingComponents(): void;
        drawFloatingComponents(arg0: $UMatrixStack): void;
        getAllUpdateFuncs$Elementa(): $List<$Function2<number, number, $Unit>>;
        removeFloatingComponent(arg0: $UIComponent): void;
        getFocusedComponent(): $UIComponent;
        addFloatingComponent(arg0: $UIComponent): void;
        getVersion$Elementa(): $ElementaVersion;
        setAllUpdateFuncs$Elementa(arg0: $List_<$Function2_<number, number, $Unit>>): void;
        drawEmbedded$Elementa(arg0: $UMatrixStack): void;
        unfocus(): void;
        getPrevDraggedMouseY$Elementa(): number;
        getPrevDraggedMouseX$Elementa(): number;
        getAnimationFPSOr1000$Elementa(): number;
        getNextUpdateFuncIndex$Elementa(): number;
        setNextUpdateFuncIndex$Elementa(arg0: number): void;
        getHoveredFloatingComponent(): $UIComponent;
        setHoveredFloatingComponent(arg0: $UIComponent): void;
        setClickInterceptor$Elementa(arg0: $Function3_<number, number, number, boolean>): void;
        setPrevDraggedMouseX$Elementa(arg0: number): void;
        setPrevDraggedMouseY$Elementa(arg0: number): void;
        invalidateCachedConstraints(): void;
        getClickInterceptor$Elementa(): $Function3<number, number, number, boolean>;
        getCachedConstraints$Elementa(): $List<$SuperConstraint<never>>;
        static access$getRenderOperations$cp(): $ConcurrentLinkedQueue<any>;
        static getAnimationFPS$annotations(): void;
        static getAnimationFPSOr1000$Elementa$annotations(): void;
        static Companion: $Window$Companion;
        parent: $UIComponent;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number, arg2: $DefaultConstructorMarker);
        constructor();
        constructor(arg0: $ElementaVersion_, arg1: number, arg2: number, arg3: $DefaultConstructorMarker);
        constructor(arg0: $ElementaVersion_, arg1: number);
        constructor(arg0: $ElementaVersion_);
        get animationFPS(): number;
        get hasErrored(): boolean;
        get animationTimeMs(): number;
        get animationTimeNs(): number;
        get focusedComponent(): $UIComponent;
        get version$Elementa(): $ElementaVersion;
        get animationFPSOr1000$Elementa(): number;
        get cachedConstraints$Elementa(): $List<$SuperConstraint<never>>;
        static get animationFPS$annotations(): void;
        static get animationFPSOr1000$Elementa$annotations(): void;
    }
    export class $Window$Companion {
        of(arg0: $UIComponent): $Window;
        enqueueRenderOperation(arg0: $Function0_<$Unit>): void;
        enqueueRenderOperation(arg0: $Runnable_): void;
        ofOrNull(arg0: $UIComponent): $Window;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
