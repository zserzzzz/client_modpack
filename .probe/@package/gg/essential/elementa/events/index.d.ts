import { $UIComponent } from "@package/gg/essential/elementa";
import { $Object } from "@package/java/lang";

declare module "@package/gg/essential/elementa/events" {
    export class $UIClickEvent extends $UIEvent {
        copy(arg0: number, arg1: number, arg2: number, arg3: $UIComponent, arg4: $UIComponent, arg5: number): $UIClickEvent;
        getTarget(): $UIComponent;
        static copy$default(arg0: $UIClickEvent, arg1: number, arg2: number, arg3: number, arg4: $UIComponent, arg5: $UIComponent, arg6: number, arg7: number, arg8: $Object): $UIClickEvent;
        component6(): number;
        getMouseButton(): number;
        getCurrentTarget(): $UIComponent;
        component4(): $UIComponent;
        component3(): number;
        component5(): $UIComponent;
        component2(): number;
        getClickCount(): number;
        component1(): number;
        getAbsoluteY(): number;
        getAbsoluteX(): number;
        getRelativeX(): number;
        getRelativeY(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $UIComponent, arg4: $UIComponent, arg5: number);
        get target(): $UIComponent;
        get mouseButton(): number;
        get currentTarget(): $UIComponent;
        get clickCount(): number;
        get absoluteY(): number;
        get absoluteX(): number;
        get relativeX(): number;
        get relativeY(): number;
    }
    export class $UIEvent {
        stopPropagation(): void;
        getPropagationStopped(): boolean;
        stopImmediatePropagation(): void;
        setPropagationStopped(arg0: boolean): void;
        getPropagationStoppedImmediately(): boolean;
        setPropagationStoppedImmediately(arg0: boolean): void;
        constructor();
    }
    export class $UIScrollEvent extends $UIEvent {
        copy(arg0: number, arg1: $UIComponent, arg2: $UIComponent): $UIScrollEvent;
        getTarget(): $UIComponent;
        static copy$default(arg0: $UIScrollEvent, arg1: number, arg2: $UIComponent, arg3: $UIComponent, arg4: number, arg5: $Object): $UIScrollEvent;
        getDelta(): number;
        getCurrentTarget(): $UIComponent;
        component3(): $UIComponent;
        component2(): $UIComponent;
        component1(): number;
        constructor(arg0: number, arg1: $UIComponent, arg2: $UIComponent);
        get target(): $UIComponent;
        get delta(): number;
        get currentTarget(): $UIComponent;
    }
}
