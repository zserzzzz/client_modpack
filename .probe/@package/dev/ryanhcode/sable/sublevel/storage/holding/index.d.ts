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
        subLevelIndex(): number;
        local(): $SavedSubLevelPointer;
        chunkPos(): $ChunkPos;
        storageIndex(): number;
        static CODEC: $Codec<$GlobalSavedSubLevelPointer>;
        constructor(chunkPos: $ChunkPos, storageIndex: number, subLevelIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $GlobalSavedSubLevelPointer}.
     */
    export type $GlobalSavedSubLevelPointer_ = { storageIndex?: number, subLevelIndex?: number, chunkPos?: $ChunkPos,  } | [storageIndex?: number, subLevelIndex?: number, chunkPos?: $ChunkPos, ];
    export class $SubLevelHoldingChunkMap implements $AutoCloseable {
        processChanges(): void;
        queueDeletion(arg0: $ServerSubLevel): void;
        close(): void;
        updateChunkStatus(arg0: $ChunkPos, arg1: boolean): void;
        saveAll(): void;
        getStorage(): $SubLevelStorage;
        moveToUnloaded(arg0: $ServerSubLevel, arg1: $ChunkPos): void;
        getHoldingSubLevel(arg0: $UUID_): $HoldingSubLevel;
        static VERBOSE: boolean;
        constructor(arg0: $ServerLevel, arg1: $ServerSubLevelContainer);
        get storage(): $SubLevelStorage;
    }
    export class $SavedSubLevelPointer extends $Record {
        subLevelIndex(): number;
        static unpack(arg0: number): $SavedSubLevelPointer;
        packed(): number;
        storageIndex(): number;
        constructor(storageIndex: number, subLevelIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $SavedSubLevelPointer}.
     */
    export type $SavedSubLevelPointer_ = { storageIndex?: number, subLevelIndex?: number,  } | [storageIndex?: number, subLevelIndex?: number, ];
    export class $SubLevelHoldingChunk {
        getChunkPos(): $ChunkPos;
        static from(arg0: $ChunkPos, arg1: $CompoundTag_): $SubLevelHoldingChunk;
        writeTo(arg0: $CompoundTag_): void;
        getSubLevelPointers(): $List<$SavedSubLevelPointer>;
        acceptHoldingSubLevel(arg0: $HoldingSubLevel): void;
        collectReadySubLevels(arg0: $ServerLevel, arg1: $Object2ObjectMap<$UUID_, $HoldingSubLevel>): void;
        getLoadedHoldingSubLevels(): $Iterable<$HoldingSubLevel>;
        constructor(arg0: $ChunkPos);
        get chunkPos(): $ChunkPos;
        get subLevelPointers(): $List<$SavedSubLevelPointer>;
        get loadedHoldingSubLevels(): $Iterable<$HoldingSubLevel>;
    }
}
