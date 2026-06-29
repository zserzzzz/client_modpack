import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Set, $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/vista/common/chunk_tracking" {
    export class $ILevelRendererExt {
    }
    export interface $ILevelRendererExt {
        vista$refreshPinnedSections(): void;
    }
    /**
     * Values that may be interpreted as {@link $ILevelRendererExt}.
     */
    export type $ILevelRendererExt_ = (() => void);
    export class $ExtraChunkViewData$Zone extends $Record {
        center(): $ChunkPos;
        contains(arg0: number, arg1: number): boolean;
        radius(): number;
        chunks(): $Set<$ChunkPos>;
        static CODEC: $Codec<$ExtraChunkViewData$Zone>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ExtraChunkViewData$Zone>;
        constructor(center: $ChunkPos, radius: number);
    }
    /**
     * Values that may be interpreted as {@link $ExtraChunkViewData$Zone}.
     */
    export type $ExtraChunkViewData$Zone_ = { center?: $ChunkPos, radius?: number,  } | [center?: $ChunkPos, radius?: number, ];
    export class $IPinnableRenderSection {
    }
    export interface $IPinnableRenderSection {
        vista$isPinned(): boolean;
        vista$setPinned(arg0: boolean): void;
    }
    export class $IChunkViewWithZones {
    }
    export interface $IChunkViewWithZones {
        vista$getExtraZones(): $ExtraChunkViewData;
        vista$setExtraZones(arg0: $ExtraChunkViewData): void;
    }
    export class $ExtraChunkViewData {
        addZone(arg0: $ChunkPos, arg1: number): void;
        clearZones(): void;
        getZones(): $List<$ExtraChunkViewData$Zone>;
        removeZone(arg0: $ChunkPos): void;
        getAllChunks(): $Set<$ChunkPos>;
        containsChunk(arg0: number, arg1: number): boolean;
        static CODEC: $Codec<$ExtraChunkViewData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ExtraChunkViewData>;
        constructor();
        get zones(): $List<$ExtraChunkViewData$Zone>;
        get allChunks(): $Set<$ChunkPos>;
    }
    export class $IViewAreaExt {
    }
    export interface $IViewAreaExt {
        vista$rebuildPinnedSections(): void;
    }
    /**
     * Values that may be interpreted as {@link $IViewAreaExt}.
     */
    export type $IViewAreaExt_ = (() => void);
}
