import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Quaternion } from "@package/gg/essential/model/util";
import { $Bones } from "@package/gg/essential/model";
import { $List_, $List } from "@package/java/util";

declare module "@package/gg/essential/model/bones" {
    export class $BakedAnimations$BakedBone {
        getGimbal(): boolean;
        setGimbal(arg0: boolean): void;
        getAnimOffsetX(): number;
        setAnimOffsetX(arg0: number): void;
        getAnimOffsetY(): number;
        setAnimOffsetY(arg0: number): void;
        getAnimOffsetZ(): number;
        setAnimOffsetZ(arg0: number): void;
        getAnimRotX(): number;
        setAnimRotX(arg0: number): void;
        setAnimScaleY(arg0: number): void;
        setWorldGimbal(arg0: boolean): void;
        getAnimRotZ(): number;
        getAnimRotY(): number;
        getWorldGimbal(): boolean;
        setAnimRotZ(arg0: number): void;
        setAnimScaleX(arg0: number): void;
        getAnimScaleZ(): number;
        setAnimScaleZ(arg0: number): void;
        setAnimRotY(arg0: number): void;
        getAnimScaleX(): number;
        getAnimScaleY(): number;
        getBoneId(): number;
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
