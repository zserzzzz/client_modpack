import { $BlockPos_, $Vec3i, $Direction$Axis_, $SectionPos } from "@package/net/minecraft/core";
import { $Collection_ } from "@package/java/util";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/utility/flywheel/box" {
    export class $Box$CoordinateConsumer {
    }
    export interface $Box$CoordinateConsumer {
        accept(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Box$CoordinateConsumer}.
     */
    export type $Box$CoordinateConsumer_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $MutableBox implements $Box {
        setMax(arg0: number, arg1: number, arg2: number): void;
        setMax(arg0: $Vec3i): void;
        setMin(arg0: number, arg1: number, arg2: number): void;
        setMin(arg0: $Vec3i): void;
        getMaxY(): number;
        static from(arg0: $Vec3i): $MutableBox;
        static from(arg0: $Vec3i, arg1: $Vec3i): $MutableBox;
        static from(arg0: $SectionPos): $MutableBox;
        static from(arg0: $AABB_): $MutableBox;
        grow(arg0: number, arg1: number, arg2: number): void;
        grow(arg0: number): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        translate(arg0: $Vec3i): void;
        assign(arg0: $AABB_): void;
        assign(arg0: $Box): void;
        assign(arg0: $Vec3i, arg1: $Vec3i): void;
        setMinY(arg0: number): void;
        getMinY(): number;
        getMaxX(): number;
        getMinX(): number;
        getMinZ(): number;
        getMaxZ(): number;
        setMaxX(arg0: number): void;
        setMaxY(arg0: number): void;
        setMinX(arg0: number): void;
        setMinZ(arg0: number): $MutableBox;
        setMaxZ(arg0: number): void;
        static ofRadius(arg0: number): $MutableBox;
        fixMinMax(): void;
        nextPowerOf2(): void;
        intersectAssign(arg0: $Box): void;
        static containingAll(arg0: $Collection_<$BlockPos_>): $Box;
        unionAssign(arg0: $Box): void;
        unionAssign(arg0: $AABB_): void;
        mirrorAbout(arg0: $Direction$Axis_): void;
        nextPowerOf2Centered(): void;
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
        constructor();
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get empty(): boolean;
    }
    export class $Box {
    }
    export interface $Box {
        getMaxY(): number;
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
        getMinY(): number;
        getMaxX(): number;
        getMinX(): number;
        getMinZ(): number;
        getMaxZ(): number;
        sameAs(arg0: $Box): boolean;
        sameAs(arg0: $Box, arg1: number): boolean;
        sameAs(arg0: $AABB_): boolean;
        forEachContained(arg0: $Box$CoordinateConsumer_): void;
        hasPowerOf2Sides(): boolean;
        get maxY(): number;
        get empty(): boolean;
        get minY(): number;
        get maxX(): number;
        get minX(): number;
        get minZ(): number;
        get maxZ(): number;
    }
}
