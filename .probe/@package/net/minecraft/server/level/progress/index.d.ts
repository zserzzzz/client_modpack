import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Executor_ } from "@package/java/util/concurrent";
import { $ChunkStatus_, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/server/level/progress" {
    export class $ChunkProgressListener {
        static calculateDiameter(radius: number): number;
    }
    export interface $ChunkProgressListener {
        start(): void;
        stop(): void;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
        updateSpawnPos(center: $ChunkPos): void;
    }
    export class $ChunkProgressListenerFactory {
    }
    export interface $ChunkProgressListenerFactory {
        create(radius: number): $ChunkProgressListener;
    }
    /**
     * Values that may be interpreted as {@link $ChunkProgressListenerFactory}.
     */
    export type $ChunkProgressListenerFactory_ = ((arg0: number) => $ChunkProgressListener);
    export class $ProcessorChunkProgressListener implements $ChunkProgressListener {
        start(): void;
        stop(): void;
        static createStarted(delegate: $ChunkProgressListener, dispatcher: $Executor_): $ProcessorChunkProgressListener;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
        updateSpawnPos(center: $ChunkPos): void;
    }
    export class $StoringChunkProgressListener implements $ChunkProgressListener {
        start(): void;
        stop(): void;
        static create(radius: number): $StoringChunkProgressListener;
        static createFromGameruleRadius(radius: number): $StoringChunkProgressListener;
        getProgress(): number;
        getStatus(x: number, z: number): $ChunkStatus;
        getDiameter(): number;
        getFullDiameter(): number;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
        updateSpawnPos(center: $ChunkPos): void;
        static createCompleted(): $StoringChunkProgressListener;
        get progress(): number;
        get diameter(): number;
        get fullDiameter(): number;
    }
    export class $LoggerChunkProgressListener implements $ChunkProgressListener {
        start(): void;
        stop(): void;
        static create(radius: number): $LoggerChunkProgressListener;
        static createFromGameruleRadius(radius: number): $LoggerChunkProgressListener;
        getProgress(): number;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
        updateSpawnPos(center: $ChunkPos): void;
        static createCompleted(): $LoggerChunkProgressListener;
        get progress(): number;
    }
}
