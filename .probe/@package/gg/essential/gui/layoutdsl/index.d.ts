import { $Function1_, $Function2_, $Function0, $Function0_ } from "@package/kotlin/jvm/functions";
import { $TrackedList } from "@package/gg/essential/gui/elementa/state/v2/collections";
import { $State, $State_ } from "@package/gg/essential/gui/elementa/state/v2";
import { $ReferenceHolder_, $ReferenceHolder } from "@package/gg/essential/elementa/state/v2";
import { $UIComponent } from "@package/gg/essential/elementa";
import { $Object } from "@package/java/lang";
import { $Unit } from "@package/kotlin";
import { $State as $State$1 } from "@package/gg/essential/elementa/state";

declare module "@package/gg/essential/gui/layoutdsl" {
    export class $Modifier {
        static Companion: $Modifier$Companion;
    }
    export interface $Modifier {
        then(arg0: $Modifier_): $Modifier;
        applyToComponent(arg0: $UIComponent): $Function0<$Unit>;
    }
    /**
     * Values that may be interpreted as {@link $Modifier}.
     */
    export type $Modifier_ = ((arg0: $UIComponent) => $Function0_<$Unit>);
    export class $LayoutScope$IfDsl {
        getElseState$essential_elementa_layoutdsl(): $State<boolean>;
        getCache$essential_elementa_layoutdsl(): boolean;
        setCache$essential_elementa_layoutdsl(arg0: boolean): void;
        constructor(arg0: $State_<boolean>, arg1: boolean);
        get elseState$essential_elementa_layoutdsl(): $State<boolean>;
    }
    export class $Modifier$Companion implements $Modifier {
        then(arg0: $Modifier_): $Modifier;
        applyToComponent(arg0: $UIComponent): $Function0<$Unit>;
    }
    export class $LayoutScope {
        invoke<T extends $UIComponent>(arg0: T, arg1: $Modifier_, arg2: $Function1_<$LayoutScope, $Unit>): T;
        invoke(arg0: $LayoutDslComponent_, arg1: $Modifier_): void;
        forEach<T>(arg0: $State_<$TrackedList<T>>, arg1: boolean, arg2: $Function2_<$LayoutScope, T, $Unit>): void;
        bind<T>(arg0: $State$1<T>, arg1: boolean, arg2: $Function2_<$LayoutScope, T, $Unit>): void;
        bind<T>(arg0: $State_<T>, arg1: boolean, arg2: $Function2_<$LayoutScope, T, $Unit>): void;
        "else"(arg0: $LayoutScope$IfDsl, arg1: $Function1_<$LayoutScope, $Unit>): void;
        ifNotNull<T>(arg0: $State$1<T>, arg1: boolean, arg2: $Function2_<$LayoutScope, T, $Unit>): $LayoutScope$IfDsl;
        ifNotNull<T>(arg0: $State_<T>, arg1: boolean, arg2: $Function2_<$LayoutScope, T, $Unit>): $LayoutScope$IfDsl;
        if_(arg0: $State_<boolean>, arg1: boolean, arg2: $Function1_<$LayoutScope, $Unit>): $LayoutScope$IfDsl;
        if_(arg0: $State$1<boolean>, arg1: boolean, arg2: $Function1_<$LayoutScope, $Unit>): $LayoutScope$IfDsl;
        addChild<T extends $UIComponent>(arg0: T, arg1: $Modifier_, arg2: $Function1_<$LayoutScope, $Unit>): void;
        getContainerDontUseThisUnlessYouReallyHaveTo(): $UIComponent;
        static bind$default(arg0: $LayoutScope, arg1: $State_<any>, arg2: boolean, arg3: $Function2_<any, any, any>, arg4: number, arg5: $Object): void;
        static bind$default(arg0: $LayoutScope, arg1: $State$1<any>, arg2: boolean, arg3: $Function2_<any, any, any>, arg4: number, arg5: $Object): void;
        static if_$default(arg0: $LayoutScope, arg1: $State_<any>, arg2: boolean, arg3: $Function1_<any, any>, arg4: number, arg5: $Object): $LayoutScope$IfDsl;
        static if_$default(arg0: $LayoutScope, arg1: $State$1<any>, arg2: boolean, arg3: $Function1_<any, any>, arg4: number, arg5: $Object): $LayoutScope$IfDsl;
        static invoke$default(arg0: $LayoutScope, arg1: $UIComponent, arg2: $Modifier_, arg3: $Function1_<any, any>, arg4: number, arg5: $Object): $UIComponent;
        static invoke$default(arg0: $LayoutScope, arg1: $LayoutDslComponent_, arg2: $Modifier_, arg3: number, arg4: $Object): void;
        static forEach$default(arg0: $LayoutScope, arg1: $State_<any>, arg2: boolean, arg3: $Function2_<any, any, any>, arg4: number, arg5: $Object): void;
        static addChild$default(arg0: $LayoutScope, arg1: $UIComponent, arg2: $Modifier_, arg3: $Function1_<any, any>, arg4: number, arg5: $Object): void;
        static ifNotNull$default(arg0: $LayoutScope, arg1: $State_<any>, arg2: boolean, arg3: $Function2_<any, any, any>, arg4: number, arg5: $Object): $LayoutScope$IfDsl;
        static ifNotNull$default(arg0: $LayoutScope, arg1: $State$1<any>, arg2: boolean, arg3: $Function2_<any, any, any>, arg4: number, arg5: $Object): $LayoutScope$IfDsl;
        getStateScope(): $ReferenceHolder;
        constructor(arg0: $UIComponent, arg1: $LayoutScope, arg2: $ReferenceHolder_);
        get containerDontUseThisUnlessYouReallyHaveTo(): $UIComponent;
        get stateScope(): $ReferenceHolder;
    }
    export class $LayoutDslComponent {
        static layout$default(arg0: $LayoutDslComponent_, arg1: $LayoutScope, arg2: $Modifier_, arg3: number, arg4: $Object): void;
    }
    export interface $LayoutDslComponent {
        layout(arg0: $LayoutScope, arg1: $Modifier_): void;
    }
    /**
     * Values that may be interpreted as {@link $LayoutDslComponent}.
     */
    export type $LayoutDslComponent_ = ((arg0: $LayoutScope, arg1: $Modifier) => void);
}
