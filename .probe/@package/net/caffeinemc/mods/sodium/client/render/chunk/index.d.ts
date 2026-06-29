import { $Long2ReferenceMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ChunkBuilder } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Camera } from "@package/net/minecraft/client";
import { $BlockEntityRenderPredicate_, $BlockEntityRenderPredicate } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $RenderRegion } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
import { $Map_, $Map, $ArrayDeque, $Collection } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $BuiltSectionInfo } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record } from "@package/java/lang";
import { $CameraMovement_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger";
import { $CameraTransform, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $CommandList } from "@package/net/caffeinemc/mods/sodium/client/gl/device";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $CancellationToken } from "@package/net/caffeinemc/mods/sodium/client/util/task";
import { $RenderSectionManagerAccessor } from "@package/foundry/veil/forge/mixin/client/perspective/sodium";
import { $RenderSectionManagerAccessor as $RenderSectionManagerAccessor$1 } from "@package/foundry/veil/forge/mixin/compat/sodium";
import { $TerrainRenderPass } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";
import { $ChunkBuilderMeshingTask, $ChunkBuilderSortingTask } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";
import { $TranslucentData } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
import { $RenderSectionExtension } from "@package/foundry/veil/forge/ext";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SortedRenderLists, $ChunkRenderListIterable_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3dc, $Matrix4fc } from "@package/org/joml";
export * as data from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
export * as lists from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
export * as compile from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
export * as translucent_sorting from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
export * as map from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
export * as vertex from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex";
export * as region from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
export * as terrain from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk" {
    export class $RenderSectionManager implements $RenderSectionManagerAccessor, $RenderSectionManagerAccessor$1 {
        processGFNIMovement(arg0: $CameraMovement_): void;
        update(arg0: $Camera, arg1: $Viewport, arg2: boolean): void;
        destroy(): void;
        getBuilder(): $ChunkBuilder;
        scheduleRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        needsUpdate(): boolean;
        getTotalSections(): number;
        getVisibleChunkCount(): number;
        renderLayer(arg0: $ChunkRenderMatrices_, arg1: $TerrainRenderPass, arg2: number, arg3: number, arg4: number): void;
        updateCameraState(arg0: $Vector3dc, arg1: $Camera): void;
        markGraphDirty(): void;
        getRenderLists(): $SortedRenderLists;
        cleanupAndFlip(): void;
        onChunkAdded(arg0: number, arg1: number): void;
        getDebugStrings(): $Collection<string>;
        updateChunks(arg0: boolean): void;
        uploadChunks(): void;
        isSectionBuilt(arg0: number, arg1: number, arg2: number): boolean;
        isSectionVisible(arg0: number, arg1: number, arg2: number): boolean;
        onChunkRemoved(arg0: number, arg1: number): void;
        tickVisibleRenders(): void;
        getSectionsWithGlobalEntities(): $Collection<$RenderSection>;
        handler$bed000$veil$isSectionVisible(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        scheduleSort(arg0: number, arg1: boolean): void;
        createRebuildTask(arg0: $RenderSection, arg1: number): $ChunkBuilderMeshingTask;
        createSortTask(arg0: $RenderSection, arg1: number): $ChunkBuilderSortingTask;
        onSectionRemoved(arg0: number, arg1: number, arg2: number): void;
        onSectionAdded(arg0: number, arg1: number, arg2: number): void;
        getChunkRenderer(): $ChunkRenderer;
        getTaskLists(): $Map<$ChunkUpdateType, $ArrayDeque<$RenderSection>>;
        getSectionByPosition(): $Long2ReferenceMap<$RenderSection>;
        setTaskLists(arg0: $Map_<$ChunkUpdateType_, $ArrayDeque<$RenderSection>>): void;
        setRenderLists(arg0: $SortedRenderLists): void;
        constructor(arg0: $ClientLevel, arg1: number, arg2: $CommandList);
        get builder(): $ChunkBuilder;
        get totalSections(): number;
        get visibleChunkCount(): number;
        get debugStrings(): $Collection<string>;
        get sectionsWithGlobalEntities(): $Collection<$RenderSection>;
        get chunkRenderer(): $ChunkRenderer;
        get sectionByPosition(): $Long2ReferenceMap<$RenderSection>;
    }
    export class $ChunkUpdateType extends $Enum<$ChunkUpdateType> {
        static values(): $ChunkUpdateType[];
        static valueOf(arg0: string): $ChunkUpdateType;
        static getPromotionUpdateType(arg0: $ChunkUpdateType_, arg1: $ChunkUpdateType_): $ChunkUpdateType;
        getTaskEffort(): number;
        isImportant(): boolean;
        getMaximumQueueSize(): number;
        static SORT: $ChunkUpdateType;
        static REBUILD: $ChunkUpdateType;
        static INITIAL_BUILD: $ChunkUpdateType;
        static IMPORTANT_REBUILD: $ChunkUpdateType;
        static IMPORTANT_SORT: $ChunkUpdateType;
        get taskEffort(): number;
        get important(): boolean;
        get maximumQueueSize(): number;
    }
    /**
     * Values that may be interpreted as {@link $ChunkUpdateType}.
     */
    export type $ChunkUpdateType_ = "sort" | "initial_build" | "rebuild" | "important_rebuild" | "important_sort";
    export class $RenderSection implements $RenderSectionExtension {
        getVisibilityData(): number;
        getAdjacentMask(): number;
        veil$markRendered(): void;
        getCulledBlockEntities(): $BlockEntity[];
        getGlobalBlockEntities(): $BlockEntity[];
        getPosition(): $SectionPos;
        "delete"(): void;
        getRegion(): $RenderRegion;
        getFlags(): number;
        setInfo(arg0: $BuiltSectionInfo): boolean;
        isDisposed(): boolean;
        getSectionIndex(): number;
        getCenterZ(): number;
        getCenterX(): number;
        getCenterY(): number;
        getAdjacent(arg0: number): $RenderSection;
        setTaskCancellationToken(arg0: $CancellationToken): void;
        getTaskCancellationToken(): $CancellationToken;
        getLastVisibleFrame(): number;
        setLastSubmittedFrame(arg0: number): void;
        getLastSubmittedFrame(): number;
        veil$hasNotRendered(): boolean;
        setLastVisibleFrame(arg0: number): void;
        prepareTrigger(arg0: boolean): void;
        getSquaredDistance(arg0: $BlockPos_): number;
        getSquaredDistance(arg0: number, arg1: number, arg2: number): number;
        getPendingUpdate(): $ChunkUpdateType;
        setTranslucentData(arg0: $TranslucentData): void;
        setPendingUpdate(arg0: $ChunkUpdateType_): void;
        getTranslucentData(): $TranslucentData;
        setLastUploadFrame(arg0: number): void;
        getAnimatedSprites(): $TextureAtlasSprite[];
        getLastUploadFrame(): number;
        setAdjacentNode(arg0: number, arg1: $RenderSection): void;
        isBuilt(): boolean;
        getChunkX(): number;
        getChunkY(): number;
        getChunkZ(): number;
        getOriginY(): number;
        getOriginX(): number;
        getOriginZ(): number;
        getIncomingDirections(): number;
        setIncomingDirections(arg0: number): void;
        veil$addIncomingDirections(arg0: number): void;
        addIncomingDirections(arg0: number): void;
        handler$bee000$veil$getIncomingDirections(arg0: $CallbackInfoReturnable<any>): void;
        adjacentEast: $RenderSection;
        adjacentUp: $RenderSection;
        adjacentWest: $RenderSection;
        adjacentSouth: $RenderSection;
        adjacentDown: $RenderSection;
        adjacentNorth: $RenderSection;
        constructor(arg0: $RenderRegion, arg1: number, arg2: number, arg3: number);
        get visibilityData(): number;
        get adjacentMask(): number;
        get culledBlockEntities(): $BlockEntity[];
        get globalBlockEntities(): $BlockEntity[];
        get position(): $SectionPos;
        get region(): $RenderRegion;
        get flags(): number;
        set info(value: $BuiltSectionInfo);
        get disposed(): boolean;
        get sectionIndex(): number;
        get centerZ(): number;
        get centerX(): number;
        get centerY(): number;
        get animatedSprites(): $TextureAtlasSprite[];
        get built(): boolean;
        get chunkX(): number;
        get chunkY(): number;
        get chunkZ(): number;
        get originY(): number;
        get originX(): number;
        get originZ(): number;
    }
    export class $ChunkRenderer {
    }
    export interface $ChunkRenderer {
        "delete"(arg0: $CommandList): void;
        render(arg0: $ChunkRenderMatrices_, arg1: $CommandList, arg2: $ChunkRenderListIterable_, arg3: $TerrainRenderPass, arg4: $CameraTransform): void;
    }
    export class $ChunkRenderMatrices extends $Record {
        static from(arg0: $PoseStack): $ChunkRenderMatrices;
        projection(): $Matrix4fc;
        modelView(): $Matrix4fc;
        constructor(projection: $Matrix4fc, modelView: $Matrix4fc);
    }
    /**
     * Values that may be interpreted as {@link $ChunkRenderMatrices}.
     */
    export type $ChunkRenderMatrices_ = { projection?: $Matrix4fc, modelView?: $Matrix4fc,  } | [projection?: $Matrix4fc, modelView?: $Matrix4fc, ];
    export class $ExtendedBlockEntityType<T extends $BlockEntity> {
        static shouldRender<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: T): boolean;
        static removeRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): boolean;
        static addRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): void;
    }
    export interface $ExtendedBlockEntityType<T extends $BlockEntity> {
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): void;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<T>[];
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): boolean;
    }
}
