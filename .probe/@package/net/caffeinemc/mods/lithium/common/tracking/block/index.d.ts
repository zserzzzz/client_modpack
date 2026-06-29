import { $Level_ } from "@package/net/minecraft/world/level";
import { $SectionPos } from "@package/net/minecraft/core";
import { $ListeningBlockStatePredicate, $BlockListeningSection } from "@package/net/caffeinemc/mods/lithium/common/block";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $WorldSectionBox_, $WorldSectionBox } from "@package/net/caffeinemc/mods/lithium/common/util/tuples";

declare module "@package/net/caffeinemc/mods/lithium/common/tracking/block" {
    export class $ChunkSectionChangeCallback {
        removeTracker(arg0: $SectionedBlockChangeTracker, arg1: $ListeningBlockStatePredicate): number;
        static init(): void;
        static create(arg0: number, arg1: $Level_): $ChunkSectionChangeCallback;
        onBlockChange(arg0: number, arg1: $BlockListeningSection): number;
        onChunkSectionInvalidated(arg0: $SectionPos): void;
        addTracker(arg0: $SectionedBlockChangeTracker, arg1: $ListeningBlockStatePredicate): number;
        constructor();
    }
    export class $SectionedBlockChangeTracker {
        register(): void;
        unregister(): void;
        setChanged(arg0: number): void;
        setChanged(arg0: $BlockListeningSection): void;
        static registerAt(arg0: $Level_, arg1: $AABB_, arg2: $ListeningBlockStatePredicate): $SectionedBlockChangeTracker;
        isUnchangedSince(arg0: number): boolean;
        onChunkSectionInvalidated(arg0: $SectionPos): void;
        listenToAllSections(): void;
        matchesMovedBox(arg0: $AABB_): boolean;
        trackedWorldSections: $WorldSectionBox;
        blockGroup: $ListeningBlockStatePredicate;
        constructor(arg0: $WorldSectionBox_, arg1: $ListeningBlockStatePredicate);
    }
}
