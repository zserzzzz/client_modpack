import { $BitSet } from "@package/java/util";

declare module "@package/dev/ryanhcode/sable/mixin/voxel_shape_iteration" {
    export class $BitSetDiscreteVoxelShapeAccessor {
    }
    export interface $BitSetDiscreteVoxelShapeAccessor extends $DiscreteVoxelShapeAccessor {
        invokeIsXZRectangleFull(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        invokeIsZStripFull(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        invokeClearZStrip(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getStorage(): $BitSet;
        get storage(): $BitSet;
    }
    export class $DiscreteVoxelShapeAccessor {
    }
    export interface $DiscreteVoxelShapeAccessor {
        getZSize(): number;
        getXSize(): number;
        getYSize(): number;
        get ZSize(): number;
        get XSize(): number;
        get YSize(): number;
    }
}
