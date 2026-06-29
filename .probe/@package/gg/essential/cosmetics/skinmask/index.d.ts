import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $MutableBitmap, $Bitmap } from "@package/gg/essential/util/image/bitmap";
import { $List_, $Map_, $Map } from "@package/java/util";
import { $EnumPart_, $EnumPart } from "@package/gg/essential/model";
import { $Mask } from "@package/gg/essential/util/image/mask";

declare module "@package/gg/essential/cosmetics/skinmask" {
    export class $SkinMask {
        apply(arg0: $Bitmap): $Bitmap;
        offset(arg0: number, arg1: number, arg2: number): $SkinMask;
        applyTo(arg0: $MutableBitmap): void;
        getParts(): $Map<$EnumPart, $Mask>;
        static access$getSKIN_PARTS$cp(): $Map<any, any>;
        static Companion: $SkinMask$Companion;
        constructor(arg0: $Map_<$EnumPart_, $Mask>);
        get parts(): $Map<$EnumPart, $Mask>;
    }
    export class $SkinMask$Companion {
        merge(arg0: $List_<$SkinMask>): $SkinMask;
        read(arg0: $Bitmap): $SkinMask;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
