import { $Codec } from "@package/com/mojang/serialization";
import { $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";

declare module "@package/net/mehvahdjukaar/polytone/biome" {
    export class $BiomeIdMapper {
        static CODEC: $Codec<$BiomeIdMapper>;
        static BY_INDEX: $BiomeIdMapper;
    }
    export interface $BiomeIdMapper {
        getIndex(arg0: $Biome_): number;
    }
    /**
     * Values that may be interpreted as {@link $BiomeIdMapper}.
     */
    export type $BiomeIdMapper_ = ((arg0: $Biome) => number);
}
