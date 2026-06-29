import { $IElement, $BoxStyle } from "@package/snownee/jade/api/ui";

declare module "@package/snownee/jade/impl/ui" {
    export class $StyledElement {
    }
    export interface $StyledElement extends $IElement {
        getIcon(): $IElement;
        getStyle(): $BoxStyle;
        get icon(): $IElement;
        get style(): $BoxStyle;
    }
}
