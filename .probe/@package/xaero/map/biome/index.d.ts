import { $BlockAndTintGetter, $ChunkPos, $ClipContext, $ColorResolver_, $ClipBlockStateContext, $LightLayer_, $Level_ } from "@package/net/minecraft/world/level";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $MapTile } from "@package/xaero/map/region";
import { $Biome_, $Biome } from "@package/net/minecraft/world/level/biome";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Registry, $BlockPos$MutableBlockPos, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $MapWriter, $MapProcessor } from "@package/xaero/map";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $Vec3_, $AABB_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BrokenBlockTintCache } from "@package/xaero/map/cache";

declare module "@package/xaero/map/biome" {
    export class $BiomeColorCalculator {
        prepare(arg0: boolean): void;
        getBiomeColor(arg0: $ColorResolver_, arg1: boolean, arg2: $BlockPos$MutableBlockPos, arg3: $MapTile, arg4: number, arg5: $Registry<$Biome_>, arg6: $MapProcessor): number;
        getBiomeAtPos(arg0: $BlockPos_, arg1: $MapTile, arg2: number, arg3: $MapProcessor): $ResourceKey<$Biome>;
        UNREACHABLE_BIOME: $ResourceKey<$Biome>;
        RIVER_BIOME: $ResourceKey<$Biome>;
        constructor();
    }
    export class $BiomeGetter {
        getBiome(arg0: $Level_, arg1: $BlockPos_, arg2: $Registry<$Biome_>): $ResourceKey<$Biome>;
        UNKNOWN_BIOME: $ResourceKey<$Biome>;
        PLACEHOLDER_BIOME: $ResourceKey<$Biome>;
        constructor();
    }
    export class $BlockTintProvider implements $BlockAndTintGetter {
        getMinBuildHeight(): number;
        getHeight(): number;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getShade(arg0: $Direction_, arg1: boolean): number;
        getBiomeColor(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean, arg3: $MapTile, arg4: number): number;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getLightEngine(): $LevelLightEngine;
        canSeeSky(arg0: $BlockPos_): boolean;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        getMaxLightLevel(): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getLightEmission(arg0: $BlockPos_): number;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        clip(arg0: $ClipContext): $BlockHitResult;
        handler$hbg000$aero_cam_sync$shiftClipForCameraTilt(arg0: $ClipContext, arg1: $CallbackInfoReturnable<any>): void;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        isOutsideBuildHeight(arg0: number): boolean;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getSectionIndex(arg0: number): number;
        getMinSection(): number;
        getMaxBuildHeight(): number;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getModelData(arg0: $BlockPos_): $ModelData;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        constructor(arg0: $Registry<$Biome_>, arg1: $BiomeColorCalculator, arg2: $MapProcessor, arg3: $BrokenBlockTintCache, arg4: $MapWriter);
        get minBuildHeight(): number;
        get height(): number;
        get lightEngine(): $LevelLightEngine;
        get maxLightLevel(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
        get maxBuildHeight(): number;
    }
}
