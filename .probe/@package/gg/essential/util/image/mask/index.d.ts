import { $Bitmap } from "@package/gg/essential/util/image/bitmap";
import { $Object } from "@package/java/lang";

declare module "@package/gg/essential/util/image/mask" {
    export class $Mask$Companion {
        copyOf(arg0: $Bitmap, arg1: number, arg2: number, arg3: number, arg4: number): $MutableMask;
        ofSize(arg0: number, arg1: number): $MutableMask;
        static copyOf$default(arg0: $Mask$Companion, arg1: $Bitmap, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $Object): $MutableMask;
    }
    export class $Mask {
        static Companion: $Mask$Companion;
    }
    export interface $Mask {
        get(arg0: number, arg1: number): boolean;
        count(): number;
        getWidth(): number;
        getHeight(): number;
        mutableCopy(): $MutableMask;
        get width(): number;
        get height(): number;
    }
    export class $MutableMask {
        static access$set$jd(arg0: $MutableMask, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
        static access$set$jd(arg0: $MutableMask, arg1: number, arg2: number, arg3: boolean): void;
        static access$set$jd(arg0: $MutableMask, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static access$clear$jd(arg0: $MutableMask, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    export interface $MutableMask extends $Mask {
        clear(arg0: number, arg1: number, arg2: number, arg3: number): void;
        clear(arg0: number, arg1: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        set(arg0: number, arg1: number, arg2: boolean): void;
        set(arg0: number, arg1: number): void;
        inv(): void;
        setOr(arg0: $Mask): void;
        setAnd(arg0: $Mask): void;
        set or(value: $Mask);
        set and(value: $Mask);
    }
}
