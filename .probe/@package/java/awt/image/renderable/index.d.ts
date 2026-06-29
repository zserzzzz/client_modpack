import { $AffineTransform } from "@package/java/awt/geom";
import { $Shape, $RenderingHints } from "@package/java/awt";
import { $Object, $Cloneable } from "@package/java/lang";
import { $Vector } from "@package/java/util";
import { $RenderedImage } from "@package/java/awt/image";

declare module "@package/java/awt/image/renderable" {
    export class $RenderContext implements $Cloneable {
        clone(): $Object;
        getTransform(): $AffineTransform;
        getRenderingHints(): $RenderingHints;
        setRenderingHints(arg0: $RenderingHints): void;
        setTransform(arg0: $AffineTransform): void;
        /**
         * @deprecated
         */
        preConcetenateTransform(arg0: $AffineTransform): void;
        /**
         * @deprecated
         */
        concetenateTransform(arg0: $AffineTransform): void;
        preConcatenateTransform(arg0: $AffineTransform): void;
        concatenateTransform(arg0: $AffineTransform): void;
        setAreaOfInterest(arg0: $Shape): void;
        getAreaOfInterest(): $Shape;
        constructor(arg0: $AffineTransform, arg1: $Shape);
        constructor(arg0: $AffineTransform, arg1: $RenderingHints);
        constructor(arg0: $AffineTransform);
        constructor(arg0: $AffineTransform, arg1: $Shape, arg2: $RenderingHints);
    }
    export class $RenderableImage {
        static HINTS_OBSERVED: string;
    }
    export interface $RenderableImage {
        getProperty(arg0: string): $Object;
        createScaledRendering(arg0: number, arg1: number, arg2: $RenderingHints): $RenderedImage;
        createDefaultRendering(): $RenderedImage;
        isDynamic(): boolean;
        getWidth(): number;
        getPropertyNames(): string[];
        getHeight(): number;
        getMinY(): number;
        createRendering(arg0: $RenderContext): $RenderedImage;
        getMinX(): number;
        getSources(): $Vector<$RenderableImage>;
        get dynamic(): boolean;
        get width(): number;
        get propertyNames(): string[];
        get height(): number;
        get minY(): number;
        get minX(): number;
        get sources(): $Vector<$RenderableImage>;
    }
}
