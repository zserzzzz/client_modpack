import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Quaternion } from "@package/gg/essential/model/util";
import { $Bones } from "@package/gg/essential/model";
import { $List_, $List } from "@package/java/util";

declare module "@package/gg/essential/model/bones" {
    export class $BakedAnimations$BakedBone {
        setGimbal(arg0: boolean): void;
        getGimbal(): boolean;
        getBoneId(): number;
        getAnimOffsetX(): number;
        getAnimOffsetZ(): number;
        setAnimOffsetZ(arg0: number): void;
        getAnimRotX(): number;
        setAnimRotY(arg0: number): void;
        getAnimOffsetY(): number;
        setAnimOffsetY(arg0: number): void;
        setAnimOffsetX(arg0: number): void;
        getAnimRotY(): number;
        getAnimRotZ(): number;
        setAnimRotZ(arg0: number): void;
        getAnimScaleX(): number;
        setAnimRotX(arg0: number): void;
        setAnimScaleX(arg0: number): void;
        getAnimScaleY(): number;
        getAnimScaleZ(): number;
        setWorldGimbal(arg0: boolean): void;
        getWorldGimbal(): boolean;
        setAnimScaleY(arg0: number): void;
        setAnimScaleZ(arg0: number): void;
        constructor(arg0: number);
        get boneId(): number;
    }
    export class $BakedAnimations {
        reset(arg0: $Bones): void;
        apply(arg0: $Bones): void;
        static access$getEMPTY$cp(): $BakedAnimations;
        getEntityRotation(): $Quaternion;
        getBakedBones(): $List<$BakedAnimations$BakedBone>;
        static Companion: $BakedAnimations$Companion;
        constructor(arg0: $List_<$BakedAnimations$BakedBone>, arg1: $Quaternion);
        get entityRotation(): $Quaternion;
        get bakedBones(): $List<$BakedAnimations$BakedBone>;
    }
    export class $BakedAnimations$Companion {
        getEMPTY(): $BakedAnimations;
        constructor(arg0: $DefaultConstructorMarker);
        get EMPTY(): $BakedAnimations;
    }
}
