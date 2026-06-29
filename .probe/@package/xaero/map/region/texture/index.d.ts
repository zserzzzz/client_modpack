import { $DataInputStream, $DataOutputStream } from "@package/java/io";
import { $OverlayManager, $LeveledRegion, $MapUpdateFastConfig, $MapTileChunk } from "@package/xaero/map/region";
import { $TextureUploader } from "@package/xaero/map/graphics";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $DimensionHighlighterHandler } from "@package/xaero/map/highlight";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $BlockTintProvider } from "@package/xaero/map/biome";
import { $List_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $PoolTextureDirectBufferUnit } from "@package/xaero/map/pool/buffer";
import { $MapProcessor } from "@package/xaero/map";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $FastPalette, $Paletted2DFastBitArrayIntStorage } from "@package/xaero/map/palette";
import { $BlockStateShortShapeCache } from "@package/xaero/map/cache";

declare module "@package/xaero/map/region/texture" {
    export class $RegionTexture<T extends $RegionTexture<T>> {
        getHeight(arg0: number, arg1: number): number;
        getTimer(): number;
        getRegion(): $LeveledRegion<T>;
        preUpload(arg0: $MapProcessor, arg1: $BlockTintProvider, arg2: $OverlayManager, arg3: $LeveledRegion<T>, arg4: boolean, arg5: $BlockStateShortShapeCache, arg6: $MapUpdateFastConfig): void;
        decTimer(): void;
        isUploaded(): boolean;
        postUpload(arg0: $MapProcessor, arg1: $LeveledRegion<T>, arg2: boolean): void;
        getBiomes(): $RegionTextureBiomes;
        canUpload(): boolean;
        getBiome(arg0: number, arg1: number): $ResourceKey<$Biome>;
        getGlColorTexture(): number;
        getTextureHasLight(): boolean;
        addDebugLines(arg0: $List_<string>): void;
        shouldUpload(): boolean;
        getTopHeight(arg0: number, arg1: number): number;
        setBiome(arg0: number, arg1: number, arg2: $ResourceKey_<$Biome>): void;
        getBufferedTextureVersion(): number;
        shouldIncludeInCache(): boolean;
        uploadBuffer(arg0: $DimensionHighlighterHandler, arg1: $TextureUploader, arg2: $LeveledRegion<T>, arg3: $BranchTextureRenderer, arg4: number, arg5: number): number;
        deletePBOs(): void;
        resetBiomes(): void;
        writeCacheMapData(arg0: $DataOutputStream, arg1: number[], arg2: number[], arg3: $LeveledRegion<T>): void;
        isCachePrepared(): boolean;
        readCacheData(arg0: number, arg1: number, arg2: $DataInputStream, arg3: number[], arg4: number[], arg5: $LeveledRegion<T>, arg6: $MapProcessor, arg7: number, arg8: number, arg9: boolean): void;
        getDirectColorBuffer(): $ByteBuffer;
        isColorBufferCompressed(): boolean;
        getColorBufferFormat(): number;
        deleteTexturesAndBuffers(): void;
        prepareBuffer(): void;
        getColorBuffer(): $PoolTextureDirectBufferUnit;
        deleteColorBuffer(): void;
        getBufferHasLight(): boolean;
        bindColorTexture(arg0: boolean): number;
        setCachePrepared(arg0: boolean): void;
        setToUpload(arg0: boolean): void;
        resetTimer(): void;
        getTextureVersion(): number;
        hasSourceData(): boolean;
        shouldHaveContentForBranchUpdate(): boolean;
        shouldBeUsedForBranchUpdate(arg0: number): boolean;
        putHeight(arg0: number, arg1: number, arg2: number): void;
        putHeight(arg0: number, arg1: number): void;
        onTextureDeletion(): void;
        postBufferWrite(arg0: $PoolTextureDirectBufferUnit): void;
        putTopHeight(arg0: number, arg1: number, arg2: number): void;
        putTopHeight(arg0: number, arg1: number): void;
        removeTopHeight(arg0: number, arg1: number): void;
        removeHeight(arg0: number, arg1: number): void;
        setBufferedTextureVersion(arg0: number): void;
        shouldDownloadFromPBO(): boolean;
        ensureBiomeIndexStorage(): void;
        setShouldDownloadFromPBO(arg0: boolean): void;
        static PBO_PACK_LENGTH: number;
        static PBO_UNPACK_LENGTH: number;
        constructor(arg0: $LeveledRegion<T>);
        get timer(): number;
        get region(): $LeveledRegion<T>;
        get uploaded(): boolean;
        get biomes(): $RegionTextureBiomes;
        get glColorTexture(): number;
        get textureHasLight(): boolean;
        get directColorBuffer(): $ByteBuffer;
        get colorBufferCompressed(): boolean;
        get colorBufferFormat(): number;
        get colorBuffer(): $PoolTextureDirectBufferUnit;
        get bufferHasLight(): boolean;
        set toUpload(value: boolean);
        get textureVersion(): number;
    }
    export class $LeafRegionTexture extends $RegionTexture<$LeafRegionTexture> {
        getTileChunk(): $MapTileChunk;
        requestHighlightOnlyUpload(): void;
        resetHeights(): void;
        postBufferUpdate(arg0: boolean): void;
        static PBO_PACK_LENGTH: number;
        static PBO_UNPACK_LENGTH: number;
        constructor(arg0: $MapTileChunk);
        get tileChunk(): $MapTileChunk;
    }
    export class $BranchRegionTexture extends $RegionTexture<$BranchRegionTexture> {
        checkForUpdates(arg0: $RegionTexture<never>, arg1: $RegionTexture<never>, arg2: $RegionTexture<never>, arg3: $RegionTexture<never>, arg4: $LeveledRegion<never>): boolean;
        requestDownload(): void;
        static PBO_PACK_LENGTH: number;
        static PBO_UNPACK_LENGTH: number;
        constructor(arg0: $LeveledRegion<$BranchRegionTexture>);
    }
    export class $RegionTextureBiomes {
        getRegionBiomePalette(): $FastPalette<$ResourceKey<$Biome>>;
        getBiomeIndexStorage(): $Paletted2DFastBitArrayIntStorage;
        constructor(arg0: $Paletted2DFastBitArrayIntStorage, arg1: $FastPalette<$ResourceKey_<$Biome>>);
        get regionBiomePalette(): $FastPalette<$ResourceKey<$Biome>>;
        get biomeIndexStorage(): $Paletted2DFastBitArrayIntStorage;
    }
    export class $BranchTextureRenderer {
        render(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $RenderTarget, arg6: boolean): void;
        constructor();
    }
}
