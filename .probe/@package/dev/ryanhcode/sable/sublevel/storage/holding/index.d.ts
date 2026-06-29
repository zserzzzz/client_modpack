import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SubLevelStorage } from "@package/dev/ryanhcode/sable/sublevel/storage/serialization";
import { $HoldingSubLevel } from "@package/dev/ryanhcode/sable/sublevel/storage";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Iterable, $AutoCloseable, $Record } from "@package/java/lang";
import { $UUID_, $List } from "@package/java/util";
import { $ServerSubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/dev/ryanhcode/sable/sublevel/storage/holding" {
    export class $GlobalSavedSubLevelPointer extends $Record {
        local(): $SavedSubLevelPointer;
        chunkPos(): $ChunkPos;
        storageIndex(): number;
        subLevelIndex(): number;
        static CODEC: $Codec<$GlobalSavedSubLevelPointer>;
        constructor(chunkPos: $ChunkPos, storageIndex: number, subLevelIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $GlobalSavedSubLevelPointer}.
     */
    export type $GlobalSavedSubLevelPointer_ = { subLevelIndex?: number, chunkPos?: $ChunkPos, storageIndex?: number,  } | [subLevelIndex?: number, chunkPos?: $ChunkPos, storageIndex?: number, ];
    export class $SubLevelHoldingChunkMap implements $AutoCloseable {
        close(): void;
        getStorage(): $SubLevelStorage;
        updateChunkStatus(arg0: $ChunkPos, arg1: boolean): void;
        saveAll(): void;
        moveToUnloaded(arg0: $ServerSubLevel, arg1: $ChunkPos): void;
        processChanges(): void;
        queueDeletion(arg0: $ServerSubLevel): void;
        getHoldingSubLevel(arg0: $UUID_): $HoldingSubLevel;
        static VERBOSE: boolean;
        constructor(arg0: $ServerLevel, arg1: $ServerSubLevelContainer);
        get storage(): $SubLevelStorage;
    }
    export class $SavedSubLevelPointer extends $Record {
        static unpack(arg0: number): $SavedSubLevelPointer;
        packed(): number;
        storageIndex(): number;
        subLevelIndex(): number;
        constructor(storageIndex: number, subLevelIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $SavedSubLevelPointer}.
     */
    export type $SavedSubLevelPointer_ = { storageIndex?: number, subLevelIndex?: number,  } | [storageIndex?: number, subLevelIndex?: number, ];
    export class $SubLevelHoldingChunk {
        static from(arg0: $ChunkPos, arg1: $CompoundTag_): $SubLevelHoldingChunk;
        writeTo(arg0: $CompoundTag_): void;
        getChunkPos(): $ChunkPos;
        collectReadySubLevels(arg0: $ServerLevel, arg1: $Object2ObjectMap<$UUID_, $HoldingSubLevel>): void;
        getLoadedHoldingSubLevels(): $Iterable<$HoldingSubLevel>;
        acceptHoldingSubLevel(arg0: $HoldingSubLevel): void;
        getSubLevelPointers(): $List<$SavedSubLevelPointer>;
        constructor(arg0: $ChunkPos);
        get chunkPos(): $ChunkPos;
        get loadedHoldingSubLevels(): $Iterable<$HoldingSubLevel>;
        get subLevelPointers(): $List<$SavedSubLevelPointer>;
    }
}
