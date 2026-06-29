import { $BlockAndTintGetter, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $SectionPos } from "@package/net/minecraft/core";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";
import { $Box, $Box$CoordinateConsumer_, $MutableBox } from "@package/com/simibubi/create/foundation/utility/flywheel/box";

declare module "@package/com/simibubi/create/foundation/utility/flywheel/light" {
    export class $LightVolume implements $Box {
        initialize(): void;
        "delete"(): void;
        isInvalid(): boolean;
        move(arg0: $Box): void;
        getPackedLight(arg0: number, arg1: number, arg2: number): number;
        getMaxY(): number;
        getVolume(): $Box;
        getMinY(): number;
        getMinZ(): number;
        getMaxZ(): number;
        getMaxX(): number;
        getMinX(): number;
        onLightUpdate(arg0: $LightLayer_, arg1: $SectionPos): void;
        copySky(arg0: $Box): void;
        copyBlock(arg0: $Box): void;
        copyLight(arg0: $Box): void;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        intersects(arg0: $Box): boolean;
        isEmpty(): boolean;
        contains(arg0: number, arg1: number, arg2: number): boolean;
        contains(arg0: $Box): boolean;
        copy(): $MutableBox;
        union(arg0: $Box): $MutableBox;
        sameAs(arg0: $AABB_): boolean;
        sameAs(arg0: $Box): boolean;
        sameAs(arg0: $Box, arg1: number): boolean;
        volume(): number;
        intersect(arg0: $Box): $MutableBox;
        toAABB(): $AABB;
        sizeZ(): number;
        sizeY(): number;
        sizeX(): number;
        hasPowerOf2Sides(): boolean;
        forEachContained(arg0: $Box$CoordinateConsumer_): void;
        constructor(arg0: $BlockAndTintGetter, arg1: $Box);
        get invalid(): boolean;
        get maxY(): number;
        get minY(): number;
        get minZ(): number;
        get maxZ(): number;
        get maxX(): number;
        get minX(): number;
        get empty(): boolean;
    }
}
