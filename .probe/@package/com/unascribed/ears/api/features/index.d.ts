import { $Slice } from "@package/com/unascribed/ears/api";
import { $Enum } from "@package/java/lang";
import { $UUID_, $Map_, $Map } from "@package/java/util";

declare module "@package/com/unascribed/ears/api/features" {
    export class $EarsFeatures$Builder {
        build(): $EarsFeatures;
        emissive(arg0: boolean): $EarsFeatures$Builder;
        isEmissive(): boolean;
        emissiveSkin(arg0: $Slice): $EarsFeatures$Builder;
        emissiveWing(arg0: $Slice): $EarsFeatures$Builder;
        tailSegments(arg0: number): $EarsFeatures$Builder;
        snoutOffset(arg0: number): $EarsFeatures$Builder;
        snoutHeight(arg0: number): $EarsFeatures$Builder;
        animateWings(arg0: boolean): $EarsFeatures$Builder;
        capeEnabled(arg0: boolean): $EarsFeatures$Builder;
        tailBends(arg0: number, arg1: number, arg2: number, arg3: number): $EarsFeatures$Builder;
        tailMode(arg0: $EarsFeatures$TailMode_): $EarsFeatures$Builder;
        tailBend2(arg0: number): $EarsFeatures$Builder;
        snoutDepth(arg0: number): $EarsFeatures$Builder;
        tailBend1(arg0: number): $EarsFeatures$Builder;
        claws(arg0: boolean): $EarsFeatures$Builder;
        tailBend0(arg0: number): $EarsFeatures$Builder;
        horn(arg0: boolean): $EarsFeatures$Builder;
        earMode(arg0: $EarsFeatures$EarMode_): $EarsFeatures$Builder;
        earAnchor(arg0: $EarsFeatures$EarAnchor_): $EarsFeatures$Builder;
        snoutWidth(arg0: number): $EarsFeatures$Builder;
        wingMode(arg0: $EarsFeatures$WingMode_): $EarsFeatures$Builder;
        tailBend3(arg0: number): $EarsFeatures$Builder;
        alfalfa(arg0: $AlfalfaData): $EarsFeatures$Builder;
        chestSize(arg0: number): $EarsFeatures$Builder;
        getWingMode(): $EarsFeatures$WingMode;
        getEarMode(): $EarsFeatures$EarMode;
        isHorn(): boolean;
        isClaws(): boolean;
        getAlfalfa(): $AlfalfaData;
        getSnoutHeight(): number;
        getEmissiveWing(): $Slice;
        getTailBend2(): number;
        getTailSegments(): number;
        getEarAnchor(): $EarsFeatures$EarAnchor;
        getTailMode(): $EarsFeatures$TailMode;
        getTailBend0(): number;
        getTailBend3(): number;
        isAnimateWings(): boolean;
        getChestSize(): number;
        getSnoutWidth(): number;
        getSnoutOffset(): number;
        getEmissiveSkin(): $Slice;
        isCapeEnabled(): boolean;
        getSnoutDepth(): number;
        getTailBend1(): number;
    }
    export class $EarsFeatures$EarMode extends $Enum<$EarsFeatures$EarMode> {
        static values(): $EarsFeatures$EarMode[];
        static valueOf(arg0: string): $EarsFeatures$EarMode;
        static TALL_CROSS: $EarsFeatures$EarMode;
        static BEHIND: $EarsFeatures$EarMode;
        static CROSS: $EarsFeatures$EarMode;
        static FLOPPY: $EarsFeatures$EarMode;
        static TALL: $EarsFeatures$EarMode;
        static NONE: $EarsFeatures$EarMode;
        static ABOVE: $EarsFeatures$EarMode;
        static AROUND: $EarsFeatures$EarMode;
        static SIDES: $EarsFeatures$EarMode;
        static OUT: $EarsFeatures$EarMode;
    }
    /**
     * Values that may be interpreted as {@link $EarsFeatures$EarMode}.
     */
    export type $EarsFeatures$EarMode_ = "none" | "above" | "sides" | "behind" | "around" | "floppy" | "cross" | "out" | "tall" | "tall_cross";
    export class $EarsFeatures$TailMode extends $Enum<$EarsFeatures$TailMode> {
        static values(): $EarsFeatures$TailMode[];
        static valueOf(arg0: string): $EarsFeatures$TailMode;
        static DOWN: $EarsFeatures$TailMode;
        static VERTICAL: $EarsFeatures$TailMode;
        static STAR: $EarsFeatures$TailMode;
        static CROSS: $EarsFeatures$TailMode;
        static BACK: $EarsFeatures$TailMode;
        static UP: $EarsFeatures$TailMode;
        static CROSS_OVERLAP: $EarsFeatures$TailMode;
        static NONE: $EarsFeatures$TailMode;
        static STAR_OVERLAP: $EarsFeatures$TailMode;
    }
    /**
     * Values that may be interpreted as {@link $EarsFeatures$TailMode}.
     */
    export type $EarsFeatures$TailMode_ = "none" | "down" | "back" | "up" | "vertical" | "cross" | "cross_overlap" | "star" | "star_overlap";
    export class $EarsFeatures$WingMode extends $Enum<$EarsFeatures$WingMode> {
        static values(): $EarsFeatures$WingMode[];
        static valueOf(arg0: string): $EarsFeatures$WingMode;
        static SYMMETRIC_DUAL: $EarsFeatures$WingMode;
        static ASYMMETRIC_L: $EarsFeatures$WingMode;
        static SYMMETRIC_SINGLE: $EarsFeatures$WingMode;
        static FLAT: $EarsFeatures$WingMode;
        static ASYMMETRIC_R: $EarsFeatures$WingMode;
        static NONE: $EarsFeatures$WingMode;
        static ASYMMETRIC_DUAL: $EarsFeatures$WingMode;
    }
    /**
     * Values that may be interpreted as {@link $EarsFeatures$WingMode}.
     */
    export type $EarsFeatures$WingMode_ = "none" | "symmetric_dual" | "symmetric_single" | "asymmetric_l" | "asymmetric_r" | "asymmetric_dual" | "flat";
    export class $EarsFeatures$EarAnchor extends $Enum<$EarsFeatures$EarAnchor> {
        static values(): $EarsFeatures$EarAnchor[];
        static valueOf(arg0: string): $EarsFeatures$EarAnchor;
        static CENTER: $EarsFeatures$EarAnchor;
        static FRONT: $EarsFeatures$EarAnchor;
        static BACK: $EarsFeatures$EarAnchor;
    }
    /**
     * Values that may be interpreted as {@link $EarsFeatures$EarAnchor}.
     */
    export type $EarsFeatures$EarAnchor_ = "center" | "front" | "back";
    export class $EarsFeatures {
        /**
         * @deprecated
         */
        static builder(): $EarsFeatures$Builder;
        static getById(arg0: $UUID_): $EarsFeatures;
        static getByUsername(arg0: string): $EarsFeatures;
        emissive: boolean;
        snoutOffset: number;
        snoutHeight: number;
        enabled: boolean;
        chestSize: number;
        emissiveSkin: $Slice;
        static DISABLED: $EarsFeatures;
        claws: boolean;
        snoutDepth: number;
        wingMode: $EarsFeatures$WingMode;
        horn: boolean;
        alfalfa: $AlfalfaData;
        earAnchor: $EarsFeatures$EarAnchor;
        tailBend3: number;
        tailBend2: number;
        tailBend1: number;
        animateWings: boolean;
        tailBend0: number;
        capeEnabled: boolean;
        tailMode: $EarsFeatures$TailMode;
        snoutWidth: number;
        tailSegments: number;
        earMode: $EarsFeatures$EarMode;
        emissiveWing: $Slice;
    }
    export class $AlfalfaData {
        data: $Map<string, $Slice>;
        static NONE: $AlfalfaData;
        version: number;
        constructor(arg0: number, arg1: $Map_<string, $Slice>);
    }
}
