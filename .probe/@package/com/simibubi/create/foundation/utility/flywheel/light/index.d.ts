import { $BlockAndTintGetter, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $SectionPos } from "@package/net/minecraft/core";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";
import { $Box, $Box$CoordinateConsumer_, $MutableBox } from "@package/com/simibubi/create/foundation/utility/flywheel/box";

declare module "@package/com/simibubi/create/foundation/utility/flywheel/light" {
    export class $LightVolume implements $Box {
        getMaxY(): number;
        initialize(): void;
        "delete"(): void;
        isInvalid(): boolean;
        move(arg0: $Box): void;
        getPackedLight(arg0: number, arg1: number, arg2: number): number;
        getVolume(): $Box;
        getMinY(): number;
        getMaxX(): number;
        getMinX(): number;
        getMinZ(): number;
        getMaxZ(): number;
        onLightUpdate(arg0: $LightLayer_, arg1: $SectionPos): void;
        copyLight(arg0: $Box): void;
        copySky(arg0: $Box): void;
        copyBlock(arg0: $Box): void;
        intersects(arg0: $Box): boolean;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        isEmpty(): boolean;
        contains(arg0: $Box): boolean;
        contains(arg0: number, arg1: number, arg2: number): boolean;
        copy(): $MutableBox;
        union(arg0: $Box): $MutableBox;
        volume(): number;
        intersect(arg0: $Box): $MutableBox;
        sizeX(): number;
        sizeY(): number;
        sizeZ(): number;
        toAABB(): $AABB;
        sameAs(arg0: $Box): boolean;
        sameAs(arg0: $Box, arg1: number): boolean;
        sameAs(arg0: $AABB_): boolean;
        forEachContained(arg0: $Box$CoordinateConsumer_): void;
        hasPowerOf2Sides(): boolean;
        constructor(arg0: $BlockAndTintGetter, arg1: $Box);
        get maxY(): number;
        get invalid(): boolean;
        get minY(): number;
        get maxX(): number;
        get minX(): number;
        get minZ(): number;
        get maxZ(): number;
        get empty(): boolean;
    }
}
