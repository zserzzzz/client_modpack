import { $Object } from "@package/java/lang";

declare module "@package/gg/essential/util/image/bitmap" {
    export class $Bitmap {
        static Companion: $Bitmap$Companion;
    }
    export interface $Bitmap {
        getWidth(): number;
        getHeight(): number;
        mutableCopy(): $MutableBitmap;
        "get-XEV4ZDs"(arg0: number, arg1: number): number;
        get width(): number;
        get height(): number;
    }
    export class $Bitmap$Companion {
        ofSize(arg0: number, arg1: number): $MutableBitmap;
    }
    export class $MutableBitmap {
        static set$default(arg0: $MutableBitmap, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Bitmap, arg6: number, arg7: number, arg8: boolean, arg9: boolean, arg10: number, arg11: $Object): void;
        static access$set$jd(arg0: $MutableBitmap, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Bitmap, arg6: number, arg7: number, arg8: boolean, arg9: boolean): void;
        static "access$set-YpvzPaY$jd"(arg0: $MutableBitmap, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    export interface $MutableBitmap extends $Bitmap {
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Bitmap, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        "set-YpvzPaY"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        "set-gk-R20I"(arg0: number, arg1: number, arg2: number): void;
    }
}
