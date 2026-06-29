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
        needsToFillTexture(): boolean;
        sampleColor(arg0: $BlockState_, arg1: $BlockPos_, arg2: $Biome_, arg3: $ItemStack_): number;
        makeConcurrent(): $IColorGetter;
    }
    export class $Colormap implements $IColorGetter, $ColorResolver {
        static createDefTriangle(): $Colormap;
        static createDamage(): $Colormap;
        acceptTexture(image: $ArrayImage_): void;
        needsToFillTexture(): boolean;
        static createFixed(): $Colormap;
        static createBiomeId(): $Colormap;
        getTargetTexture(def: $ResourceLocation_): $ResourceLocation;
        sampleColor(state: $BlockState_, pos: $BlockPos_, biome: $Biome_, item: $ItemStack_): number;
        static createDefSquare(): $Colormap;
        makeConcurrent(): $Colormap;
        static createTimeStrip(): $Colormap;
        getColor(itemStack: $ItemStack_, i: number): number;
        getColor(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, i: number): number;
        getColor(biome: $Biome_, x: number, z: number): number;
        static simple(xGetter: $IColormapNumberProvider_, yGetter: $IColormapNumberProvider_): $Colormap;
        calculateBlendedColor(level: $Level_, pos: $BlockPos_): number;
        setExplicitTargetTexture(imageTarget: $ResourceLocation_): void;
        static SINGLE_COLOR_CODEC: $Codec<$IColorGetter>;
        static CODEC: $Codec<$IColorGetter>;
        static DIRECT_REFERENCE_OR_EXPRESSION: $Codec<$IColorGetter>;
        inlined: boolean;
        static REFERENCE_OR_EXPRESSION: $Codec<$IColorGetter>;
        set explicitTargetTexture(value: $ResourceLocation_);
    }
    export class $ColormapExpressionProvider extends $PolytoneExpression implements $IColormapNumberProvider {
        createConcurrent(): $ColormapExpressionProvider;
        getValue(state: $BlockState_, pos: $BlockPos_, biome: $Biome_, mapper: $BiomeIdMapper_, stack: $ItemStack_): number;
        usesBiome(): boolean;
        usesPos(): boolean;
        usesState(): boolean;
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
        createConcurrent(): $IColormapNumberProvider;
        getValue(arg0: $BlockState_, arg1: $BlockPos_, arg2: $Biome_, arg3: $BiomeIdMapper_, arg4: $ItemStack_): number;
        usesBiome(): boolean;
        usesPos(): boolean;
        usesState(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IColormapNumberProvider}.
     */
    export type $IColormapNumberProvider_ = ((arg0: $BlockState, arg1: $BlockPos, arg2: $Biome, arg3: $BiomeIdMapper, arg4: $ItemStack) => number);
}
