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
        addFloatingComponent(arg0: $UIComponent): void;
        removeFloatingComponent(arg0: $UIComponent): void;
        getAllUpdateFuncs$Elementa(): $List<$Function2<number, number, $Unit>>;
        getFocusedComponent(): $UIComponent;
        drawFloatingComponents(): void;
        drawFloatingComponents(arg0: $UMatrixStack): void;
        getVersion$Elementa(): $ElementaVersion;
        setAllUpdateFuncs$Elementa(arg0: $List_<$Function2_<number, number, $Unit>>): void;
        drawEmbedded$Elementa(arg0: $UMatrixStack): void;
        getAnimationTimeNs(): number;
        getHasErrored(): boolean;
        getAnimationFPS(): number;
        getAnimationTimeMs(): number;
        static getAnimationFPSOr1000$Elementa$annotations(): void;
        getClickInterceptor$Elementa(): $Function3<number, number, number, boolean>;
        setPrevDraggedMouseX$Elementa(arg0: number): void;
        getCachedConstraints$Elementa(): $List<$SuperConstraint<never>>;
        setClickInterceptor$Elementa(arg0: $Function3_<number, number, number, boolean>): void;
        invalidateCachedConstraints(): void;
        setPrevDraggedMouseY$Elementa(arg0: number): void;
        static access$getRenderOperations$cp(): $ConcurrentLinkedQueue<any>;
        static getAnimationFPS$annotations(): void;
        focus(arg0: $UIComponent): void;
        unfocus(): void;
        getPrevDraggedMouseY$Elementa(): number;
        setHoveredFloatingComponent(arg0: $UIComponent): void;
        getPrevDraggedMouseX$Elementa(): number;
        getHoveredFloatingComponent(): $UIComponent;
        setNextUpdateFuncIndex$Elementa(arg0: number): void;
        getAnimationFPSOr1000$Elementa(): number;
        getNextUpdateFuncIndex$Elementa(): number;
        static Companion: $Window$Companion;
        parent: $UIComponent;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number, arg2: $DefaultConstructorMarker);
        constructor(arg0: $ElementaVersion_);
        constructor(arg0: $ElementaVersion_, arg1: number);
        constructor(arg0: $ElementaVersion_, arg1: number, arg2: number, arg3: $DefaultConstructorMarker);
        constructor();
        get focusedComponent(): $UIComponent;
        get version$Elementa(): $ElementaVersion;
        get animationTimeNs(): number;
        get hasErrored(): boolean;
        get animationFPS(): number;
        get animationTimeMs(): number;
        static get animationFPSOr1000$Elementa$annotations(): void;
        get cachedConstraints$Elementa(): $List<$SuperConstraint<never>>;
        static get animationFPS$annotations(): void;
        get animationFPSOr1000$Elementa(): number;
    }
    export class $Window$Companion {
        of(arg0: $UIComponent): $Window;
        enqueueRenderOperation(arg0: $Function0_<$Unit>): void;
        enqueueRenderOperation(arg0: $Runnable_): void;
        ofOrNull(arg0: $UIComponent): $Window;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
