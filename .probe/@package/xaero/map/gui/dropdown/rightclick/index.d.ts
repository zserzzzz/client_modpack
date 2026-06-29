import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $IRightClickableElement } from "@package/xaero/map/gui";
import { $Object } from "@package/java/lang";

declare module "@package/xaero/map/gui/dropdown/rightclick" {
    export class $RightClickOption {
        isActive(): boolean;
        getDisplayName(): string;
        setActive(arg0: boolean): $RightClickOption;
        onAction(arg0: $Screen): void;
        setNameFormatArgs(...arg0: $Object[]): $RightClickOption;
        onSelected(arg0: $Screen): boolean;
        constructor(arg0: string, arg1: number, arg2: $IRightClickableElement);
        get displayName(): string;
        set nameFormatArgs(value: $Object[]);
    }
}
