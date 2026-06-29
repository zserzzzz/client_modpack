import { $Codec } from "@package/com/mojang/serialization";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";

declare module "@package/snownee/jade/api/fluid" {
    export class $JadeFluidObject {
        isEmpty(): boolean;
        static of(arg0: $Fluid_, arg1: number, arg2: $DataComponentPatch_): $JadeFluidObject;
        static of(arg0: $Fluid_, arg1: number): $JadeFluidObject;
        static of(arg0: $Fluid_): $JadeFluidObject;
        static empty(): $JadeFluidObject;
        getType(): $Fluid;
        getAmount(): number;
        getComponents(): $DataComponentPatch;
        static blockVolume(): number;
        static bucketVolume(): number;
        static isSameFluidSameComponents(arg0: $JadeFluidObject, arg1: $JadeFluidObject): boolean;
        static CODEC: $Codec<$JadeFluidObject>;
        get type(): $Fluid;
        get amount(): number;
        get components(): $DataComponentPatch;
    }
}
