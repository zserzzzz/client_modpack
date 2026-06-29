import { $DyeColor_ } from "@package/net/minecraft/world/item";
import { $Biome$ClimateSettings_, $Biome$ClimateSettings } from "@package/net/minecraft/world/level/biome";
import { $Vector3f } from "@package/org/joml";

declare module "@package/net/mehvahdjukaar/polytone/mixins/accessor" {
    export class $DustParticleOptionAccessor {
    }
    export interface $DustParticleOptionAccessor {
        setColor(arg0: $Vector3f): void;
        set color(value: $Vector3f);
    }
    /**
     * Values that may be interpreted as {@link $DustParticleOptionAccessor}.
     */
    export type $DustParticleOptionAccessor_ = ((arg0: $Vector3f) => void);
    export class $SheepAccessor {
        static invokeCreateSheepColor(color: $DyeColor_): number;
    }
    export interface $SheepAccessor {
    }
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        invokeSetSize(arg0: number, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ParticleAccessor}.
     */
    export type $ParticleAccessor_ = ((arg0: number, arg1: number) => void);
    export class $BiomeAccessor {
    }
    export interface $BiomeAccessor {
        getClimateSettings(): $Biome$ClimateSettings;
        get climateSettings(): $Biome$ClimateSettings;
    }
    /**
     * Values that may be interpreted as {@link $BiomeAccessor}.
     */
    export type $BiomeAccessor_ = (() => $Biome$ClimateSettings_);
}
