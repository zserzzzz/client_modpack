import { $Int2ReferenceMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $LightLayer_, $Level_ } from "@package/net/minecraft/world/level";
import { $Holder, $SectionPos } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $DataLayer, $LevelChunkSection, $LevelChunk, $PalettedContainerRO } from "@package/net/minecraft/world/level/chunk";
import { $List, $List_ } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $SodiumModelDataContainer } from "@package/net/caffeinemc/mods/sodium/client/services";
import { $SodiumAuxiliaryLightManager } from "@package/net/caffeinemc/mods/sodium/client/world";

declare module "@package/net/caffeinemc/mods/sodium/client/world/cloned" {
    export class $ClonedChunkSection {
        getPosition(): $SectionPos;
        getAuxLightManager(): $SodiumAuxiliaryLightManager;
        setLastUsedTimestamp(arg0: number): void;
        getLastUsedTimestamp(): number;
        getBlockData(): $PalettedContainerRO<$BlockState>;
        getBlockEntityRenderDataMap(): $Int2ReferenceMap<$Object>;
        getBiomeData(): $PalettedContainerRO<$Holder<$Biome>>;
        getLightArray(arg0: $LightLayer_): $DataLayer;
        getBlockEntityMap(): $Int2ReferenceMap<$BlockEntity>;
        getModelMap(): $SodiumModelDataContainer;
        constructor(arg0: $Level_, arg1: $LevelChunk, arg2: $LevelChunkSection, arg3: $SectionPos);
        get position(): $SectionPos;
        get auxLightManager(): $SodiumAuxiliaryLightManager;
        get blockData(): $PalettedContainerRO<$BlockState>;
        get blockEntityRenderDataMap(): $Int2ReferenceMap<$Object>;
        get biomeData(): $PalettedContainerRO<$Holder<$Biome>>;
        get blockEntityMap(): $Int2ReferenceMap<$BlockEntity>;
        get modelMap(): $SodiumModelDataContainer;
    }
    export class $ChunkRenderContext {
        getSections(): $ClonedChunkSection[];
        getOrigin(): $SectionPos;
        getVolume(): $BoundingBox;
        getRenderers(): $List<never>;
        constructor(arg0: $SectionPos, arg1: $ClonedChunkSection[], arg2: $BoundingBox, arg3: $List_<never>);
        get sections(): $ClonedChunkSection[];
        get origin(): $SectionPos;
        get volume(): $BoundingBox;
        get renderers(): $List<never>;
    }
}
