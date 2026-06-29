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
        getHeight(): number;
        get(arg0: number, arg1: number): boolean;
        count(): number;
        getWidth(): number;
        mutableCopy(): $MutableMask;
        get height(): number;
        get width(): number;
    }
    export class $MutableMask {
        static access$clear$jd(arg0: $MutableMask, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static access$set$jd(arg0: $MutableMask, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
        static access$set$jd(arg0: $MutableMask, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static access$set$jd(arg0: $MutableMask, arg1: number, arg2: number, arg3: boolean): void;
    }
    export interface $MutableMask extends $Mask {
        clear(arg0: number, arg1: number, arg2: number, arg3: number): void;
        clear(arg0: number, arg1: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        set(arg0: number, arg1: number, arg2: boolean): void;
        set(arg0: number, arg1: number): void;
        inv(): void;
        setAnd(arg0: $Mask): void;
        setOr(arg0: $Mask): void;
        set and(value: $Mask);
        set or(value: $Mask);
    }
}
