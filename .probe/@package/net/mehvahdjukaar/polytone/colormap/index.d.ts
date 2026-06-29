import { $BlockAndTintGetter, $ColorResolver, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockColor } from "@package/net/minecraft/client/color/block";
import { $Biome_, $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ItemColor } from "@package/net/minecraft/client/color/item";
import { $BiomeIdMapper_, $BiomeIdMapper } from "@package/net/mehvahdjukaar/polytone/biome";
import { $PolytoneExpression } from "@package/net/mehvahdjukaar/polytone/utils/exp";
import { $MapRegistry, $ArrayImage_ } from "@package/net/mehvahdjukaar/polytone/utils";

declare module "@package/net/mehvahdjukaar/polytone/colormap" {
    export class $IColorGetter {
    }
    export interface $IColorGetter extends $BlockColor, $ItemColor {
        makeConcurrent(): $IColorGetter;
        sampleColor(arg0: $BlockState_, arg1: $BlockPos_, arg2: $Biome_, arg3: $ItemStack_): number;
        needsToFillTexture(): boolean;
    }
    export class $Colormap implements $IColorGetter, $ColorResolver {
        static simple(xGetter: $IColormapNumberProvider_, yGetter: $IColormapNumberProvider_): $Colormap;
        static createDefTriangle(): $Colormap;
        static createDamage(): $Colormap;
        static createDefSquare(): $Colormap;
        static createFixed(): $Colormap;
        static createBiomeId(): $Colormap;
        sampleColor(state: $BlockState_, pos: $BlockPos_, biome: $Biome_, item: $ItemStack_): number;
        static createTimeStrip(): $Colormap;
        acceptTexture(image: $ArrayImage_): void;
        needsToFillTexture(): boolean;
        getTargetTexture(def: $ResourceLocation_): $ResourceLocation;
        getColor(biome: $Biome_, x: number, z: number): number;
        getColor(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, i: number): number;
        getColor(itemStack: $ItemStack_, i: number): number;
        calculateBlendedColor(level: $Level_, pos: $BlockPos_): number;
        setExplicitTargetTexture(imageTarget: $ResourceLocation_): void;
        makeConcurrent(): $IColorGetter;
        static SINGLE_COLOR_CODEC: $Codec<$IColorGetter>;
        static CODEC: $Codec<$IColorGetter>;
        static DIRECT_REFERENCE_OR_EXPRESSION: $Codec<$IColorGetter>;
        inlined: boolean;
        static REFERENCE_OR_EXPRESSION: $Codec<$IColorGetter>;
        set explicitTargetTexture(value: $ResourceLocation_);
    }
    export class $ColormapExpressionProvider extends $PolytoneExpression implements $IColormapNumberProvider {
        getValue(state: $BlockState_, pos: $BlockPos_, biome: $Biome_, mapper: $BiomeIdMapper_, stack: $ItemStack_): number;
        createConcurrent(): $ColormapExpressionProvider;
        usesPos(): boolean;
        usesState(): boolean;
        usesBiome(): boolean;
        static CODEC: $Codec<$ColormapExpressionProvider>;
    }
    export class $IColormapNumberProvider {
        static DOWNFALL: $IColormapNumberProvider;
        static ZERO: $IColormapNumberProvider;
        static CODEC: $Codec<$IColormapNumberProvider>;
        static TEMPERATURE: $IColormapNumberProvider;
        static DAY_TIME: $IColormapNumberProvider;
        static LEGACY_TEMPERATURE: $IColormapNumberProvider;
        static ONE: $IColormapNumberProvider;
        static Y_LEVEL: $IColormapNumberProvider;
        static BUILTIN_PROVIDERS: $MapRegistry<$IColormapNumberProvider>;
        static BIOME_ID: $IColormapNumberProvider;
        static DAMAGE: $IColormapNumberProvider;
        static SEASON: $IColormapNumberProvider;
    }
    export interface $IColormapNumberProvider {
        getValue(arg0: $BlockState_, arg1: $BlockPos_, arg2: $Biome_, arg3: $BiomeIdMapper_, arg4: $ItemStack_): number;
        createConcurrent(): $IColormapNumberProvider;
        usesPos(): boolean;
        usesState(): boolean;
        usesBiome(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IColormapNumberProvider}.
     */
    export type $IColormapNumberProvider_ = ((arg0: $BlockState, arg1: $BlockPos, arg2: $Biome, arg3: $BiomeIdMapper, arg4: $ItemStack) => number);
}
