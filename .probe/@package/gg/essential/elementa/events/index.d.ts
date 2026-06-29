import { $UIComponent } from "@package/gg/essential/elementa";
import { $Object } from "@package/java/lang";

declare module "@package/gg/essential/elementa/events" {
    export class $UIClickEvent extends $UIEvent {
        component6(): number;
        static copy$default(arg0: $UIClickEvent, arg1: number, arg2: number, arg3: number, arg4: $UIComponent, arg5: $UIComponent, arg6: number, arg7: number, arg8: $Object): $UIClickEvent;
        copy(arg0: number, arg1: number, arg2: number, arg3: $UIComponent, arg4: $UIComponent, arg5: number): $UIClickEvent;
        getTarget(): $UIComponent;
        getCurrentTarget(): $UIComponent;
        getClickCount(): number;
        component2(): number;
        component3(): number;
        component4(): $UIComponent;
        component5(): $UIComponent;
        component1(): number;
        getAbsoluteX(): number;
        getAbsoluteY(): number;
        getMouseButton(): number;
        getRelativeX(): number;
        getRelativeY(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $UIComponent, arg4: $UIComponent, arg5: number);
        get target(): $UIComponent;
        get currentTarget(): $UIComponent;
        get clickCount(): number;
        get absoluteX(): number;
        get absoluteY(): number;
        get mouseButton(): number;
        get relativeX(): number;
        get relativeY(): number;
    }
    export class $UIEvent {
        setPropagationStoppedImmediately(arg0: boolean): void;
        setPropagationStopped(arg0: boolean): void;
        stopImmediatePropagation(): void;
        stopPropagation(): void;
        getPropagationStopped(): boolean;
        getPropagationStoppedImmediately(): boolean;
        constructor();
    }
    export class $UIScrollEvent extends $UIEvent {
        static copy$default(arg0: $UIScrollEvent, arg1: number, arg2: $UIComponent, arg3: $UIComponent, arg4: number, arg5: $Object): $UIScrollEvent;
        copy(arg0: number, arg1: $UIComponent, arg2: $UIComponent): $UIScrollEvent;
        getTarget(): $UIComponent;
        getCurrentTarget(): $UIComponent;
        getDelta(): number;
        component2(): $UIComponent;
        component3(): $UIComponent;
        component1(): number;
        constructor(arg0: number, arg1: $UIComponent, arg2: $UIComponent);
        get target(): $UIComponent;
        get currentTarget(): $UIComponent;
        get delta(): number;
    }
}
