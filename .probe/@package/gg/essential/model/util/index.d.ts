import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Mat4, $Mat3 } from "@package/gg/essential/lib/kotgl/matrix/matrices";
import { $WearablesManager } from "@package/gg/essential/cosmetics";
import { $Map_, $Map, $Map$Entry, $Set, $List_, $Collection } from "@package/java/util";
import { $ModelInstance } from "@package/gg/essential/model";
import { $MolangQueryEntity } from "@package/gg/essential/model/molang";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $BiConsumer_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $MutableMat4, $MutableMat3 } from "@package/gg/essential/lib/kotgl/matrix/matrices/mutables";
import { $KMappedMarker } from "@package/kotlin/jvm/internal/markers";
import { $PlayerPose } from "@package/gg/essential/model/backend";
import { $Vec4, $Vec3 } from "@package/gg/essential/lib/kotgl/matrix/vectors";
import { $Comparable, $Object } from "@package/java/lang";

declare module "@package/gg/essential/model/util" {
    export class $TreeMap$Companion {
        serializer<K, V>(arg0: $KSerializer<K>, arg1: $KSerializer<V>): $KSerializer<$TreeMap<K, V>>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $UMatrixStack$Entry {
        getNormal(): $MutableMat3;
        static copy$default(arg0: $UMatrixStack$Entry, arg1: $MutableMat4, arg2: $MutableMat3, arg3: number, arg4: $Object): $UMatrixStack$Entry;
        deepCopy(): $UMatrixStack$Entry;
        copy(arg0: $MutableMat4, arg1: $MutableMat3): $UMatrixStack$Entry;
        getModel(): $MutableMat4;
        component2(): $MutableMat3;
        component1(): $MutableMat4;
        constructor(arg0: $MutableMat4, arg1: $MutableMat3);
        get normal(): $MutableMat3;
        get model(): $MutableMat4;
    }
    export class $Color {
        static "equals-impl0"(arg0: number, arg1: number): boolean;
        static "toString-impl"(arg0: number): string;
        static "hashCode-impl"(arg0: number): number;
        static "equals-impl"(arg0: number, arg1: $Object): boolean;
        static "box-impl"(arg0: number): $Color;
        static "constructor-impl"(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static "constructor-impl"(arg0: number): number;
        "unbox-impl"(): number;
        static "constructor-impl$default"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $DefaultConstructorMarker): number;
        static "getR-w2LRezQ"(arg0: number): number;
        static "getA-w2LRezQ"(arg0: number): number;
        static "copy-ehsoyi0$default"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Object): number;
        static "copy-ehsoyi0"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        static access$getBLACK$cp(): number;
        "getRgba-pVg5ArA"(): number;
        static access$getWHITE$cp(): number;
        static "getArgb-pVg5ArA"(arg0: number): number;
        static "getG-w2LRezQ"(arg0: number): number;
        static "getB-w2LRezQ"(arg0: number): number;
        static Companion: $Color$Companion;
        get rgba-pVg5ArA(): number;
    }
    export class $Color$Companion {
        "getWHITE-yaPNGYs"(): number;
        "rgba-Z_pCfcY"(arg0: number): number;
        "fromVec-WvJmvJ8"(arg0: $Vec4): number;
        "fromFloats-MQoBapg"(arg0: number, arg1: number, arg2: number, arg3: number): number;
        "getBLACK-yaPNGYs"(): number;
        constructor(arg0: $DefaultConstructorMarker);
        get WHITE-yaPNGYs(): number;
        get BLACK-yaPNGYs(): number;
    }
    export class $TreeMap<K extends $Comparable<K>, V> implements $Map<K, V>, $KMappedMarker {
        remove(arg0: $Object): V;
        remove(arg0: $Object, arg1: $Object): boolean;
        size(): number;
        get(arg0: $Object): V;
        get(arg0: K): V;
        put(arg0: K, arg1: V): V;
        values(): $Collection<V>;
        clear(): void;
        isEmpty(): boolean;
        replace(arg0: K, arg1: V): V;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replaceAll(arg0: $BiFunction_<K, V, V>): void;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        entrySet(): $Set<$Map$Entry<K, V>>;
        putAll(arg0: $Map_<K, V>): void;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: K): boolean;
        computeIfAbsent(arg0: K, arg1: $Function_<K, V>): V;
        keySet(): $Set<K>;
        containsValue(arg0: $Object): boolean;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        getSize(): number;
        getEntries(): $Set<$Map$Entry<K, V>>;
        getKeys(): $Set<K>;
        lowerEntry(arg0: K): $Map$Entry<K, V>;
        floorEntry(arg0: K): $Map$Entry<K, V>;
        ceilingEntry(arg0: K): $Map$Entry<K, V>;
        higherEntry(arg0: K): $Map$Entry<K, V>;
        lastKey(): K;
        getValues(): $Collection<V>;
        lowestEntry(): $Map$Entry<K, V>;
        forEach(arg0: $BiConsumer_<K, V>): void;
        getOrDefault(arg0: $Object, arg1: V): V;
        static Companion: $TreeMap$Companion;
        constructor(arg0: $Map_<K, V>);
        get empty(): boolean;
        get entries(): $Set<$Map$Entry<K, V>>;
        get keys(): $Set<K>;
    }
    export class $Quaternion {
        getZ(): number;
        getX(): number;
        static copy$default(arg0: $Quaternion, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Object): $Quaternion;
        copy(arg0: number, arg1: number, arg2: number, arg3: number): $Quaternion;
        normalize(): $Quaternion;
        opposite(): $Quaternion;
        getY(): number;
        times(arg0: $Vec3): $Vec3;
        times(arg0: $Quaternion): $Quaternion;
        getW(): number;
        invert(): $Quaternion;
        conjugate(): $Quaternion;
        component2(): number;
        component3(): number;
        component4(): number;
        component1(): number;
        static access$getIdentity$cp(): $Quaternion;
        static access$getY180$cp(): $Quaternion;
        static access$getX180$cp(): $Quaternion;
        projectAroundAxis(arg0: $Vec3): $Quaternion;
        static access$getZ180$cp(): $Quaternion;
        static Companion: $Quaternion$Companion;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get z(): number;
        get x(): number;
        get y(): number;
        get w(): number;
    }
    export class $UMatrixStack {
        scale(arg0: number, arg1: number, arg2: number): void;
        scale(arg0: number): void;
        peek(): $UMatrixStack$Entry;
        multiply(arg0: $UMatrixStack): void;
        rotate(arg0: $Quaternion): void;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        push(): void;
        pop(): void;
        fork(): $UMatrixStack;
        translate(arg0: number, arg1: number, arg2: number): void;
        translate(arg0: $Vec3): void;
        constructor(arg0: $Mat4, arg1: $Mat3, arg2: number, arg3: $DefaultConstructorMarker);
        constructor(arg0: $Mat4, arg1: $Mat3);
        constructor(arg0: $List_<$UMatrixStack$Entry>);
    }
    export class $UVertexConsumer {
    }
    export interface $UVertexConsumer {
        pos(arg0: $UMatrixStack, arg1: number, arg2: number, arg3: number): $UVertexConsumer;
        norm(arg0: $UMatrixStack, arg1: number, arg2: number, arg3: number): $UVertexConsumer;
        tex(arg0: number, arg1: number): $UVertexConsumer;
        endVertex(): $UVertexConsumer;
        "light-vX8ayIk"(arg0: number): $UVertexConsumer;
        "color-EIFkdBU"(arg0: number): $UVertexConsumer;
    }
    export class $Quaternion$Companion {
        getZ180(): $Quaternion;
        getX180(): $Quaternion;
        getY180(): $Quaternion;
        getIdentity(): $Quaternion;
        fromAxisAngle(arg0: $Vec3, arg1: number): $Quaternion;
        fromLookAt(arg0: $Vec3, arg1: $Vec3): $Quaternion;
        fromRotationMatrix(arg0: $Mat3): $Quaternion;
        constructor(arg0: $DefaultConstructorMarker);
        get z180(): $Quaternion;
        get x180(): $Quaternion;
        get y180(): $Quaternion;
        get identity(): $Quaternion;
    }
    export class $PlayerPoseManager$Companion {
        static access$wrapAngle(arg0: $PlayerPoseManager$Companion, arg1: number): number;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $PlayerPoseManager {
        update(arg0: $ModelInstance): void;
        update(arg0: $WearablesManager): void;
        computePose(arg0: $WearablesManager, arg1: $PlayerPose): $PlayerPose;
        static Companion: $PlayerPoseManager$Companion;
        static transitionTime: number;
        constructor(arg0: $MolangQueryEntity);
    }
}
