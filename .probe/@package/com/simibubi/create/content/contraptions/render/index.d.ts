import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $EntityRendererProvider$Context, $EntityRenderDispatcher, $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $List, $BitSet } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SuperByteBufferCache$Compartment, $SuperByteBuffer } from "@package/net/createmod/catnip/render";
import { $Function_, $Function } from "@package/java/util/function";
import { $OrientedContraptionEntity, $AbstractContraptionEntity, $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $AbstractEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $TickableVisual, $TickableVisual$Context, $Visual, $SectionTrackedVisual$SectionCollector_, $DynamicVisual, $DynamicVisual$Context, $ShaderLightVisual } from "@package/dev/engine_room/flywheel/api/visual";
import { $Iterable_, $Record, $Iterable } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/com/simibubi/create/content/contraptions/render" {
    export class $ActorVisual implements $Visual {
        update(arg0: number): void;
        "delete"(): void;
        tick(): void;
        beginFrame(): void;
        constructor(arg0: $VisualizationContext, arg1: $BlockAndTintGetter, arg2: $MovementContext);
    }
    export class $ContraptionEntityRenderer$ThreadLocalObjects {
    }
    export class $ContraptionMatrices {
        getModel(): $PoseStack;
        static transform(arg0: $PoseStack, arg1: $PoseStack): void;
        static clearStack(arg0: $PoseStack): void;
        getLight(): $Matrix4f;
        getWorld(): $Matrix4f;
        getViewProjection(): $PoseStack;
        getModelViewProjection(): $PoseStack;
        static translateToEntity(arg0: $Matrix4f, arg1: $Entity, arg2: number): void;
        constructor();
        get model(): $PoseStack;
        get light(): $Matrix4f;
        get world(): $Matrix4f;
        get viewProjection(): $PoseStack;
        get modelViewProjection(): $PoseStack;
    }
    export class $OrientedContraptionEntityRenderer extends $ContraptionEntityRenderer<$OrientedContraptionEntity> {
        shouldRender(arg0: $OrientedContraptionEntity, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static CONTRAPTION: $SuperByteBufferCache$Compartment<$Pair<$Contraption, $RenderType>>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ClientContraption$RenderedBlocks extends $Record {
        lookup(): $Function<$BlockPos, $BlockState>;
        positions(): $Iterable<$BlockPos>;
        constructor(lookup: $Function_<$BlockPos, $BlockState>, positions: $Iterable_<$BlockPos>);
    }
    /**
     * Values that may be interpreted as {@link $ClientContraption$RenderedBlocks}.
     */
    export type $ClientContraption$RenderedBlocks_ = { positions?: $Iterable_<$BlockPos>, lookup?: $Function_<$BlockPos, $BlockState>,  } | [positions?: $Iterable_<$BlockPos>, lookup?: $Function_<$BlockPos, $BlockState>, ];
    export class $ContraptionEntityRenderer<C extends $AbstractContraptionEntity> extends $EntityRenderer<C> {
        static getBuffer(arg0: $Contraption, arg1: $VirtualRenderWorld, arg2: $RenderType): $SuperByteBuffer;
        shouldRender(arg0: C, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        render(arg0: C, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        getTextureLocation(arg0: C): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static CONTRAPTION: $SuperByteBufferCache$Compartment<$Pair<$Contraption, $RenderType>>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ContraptionVisual<E extends $AbstractContraptionEntity> extends $AbstractEntityVisual<E> implements $DynamicVisual, $TickableVisual, $ShaderLightVisual {
        planFrame(): $Plan<$DynamicVisual$Context>;
        planTick(): $Plan<$TickableVisual$Context>;
        setSectionCollector(arg0: $SectionTrackedVisual$SectionCollector_): void;
        constructor(arg0: $VisualizationContext, arg1: E, arg2: number);
        set sectionCollector(value: $SectionTrackedVisual$SectionCollector_);
    }
    export class $ClientContraption {
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        invalidateStructure(): void;
        resetRenderLevel(): void;
        invalidateChildren(): void;
        getAndAdjustShouldRenderBlockEntities(): $BitSet;
        readBlockEntity(arg0: $Level_, arg1: $StructureTemplate$StructureBlockInfo_, arg2: boolean): $BlockEntity;
        getRenderLevel(): $VirtualRenderWorld;
        structureVersion(): number;
        childrenVersion(): number;
        getMatrices(): $ContraptionMatrices;
        getRenderedBlocks(): $ClientContraption$RenderedBlocks;
        shouldRenderBlockEntities: $BitSet;
        renderedBlockEntityView: $List<$BlockEntity>;
        scratchErroredBlockEntities: $BitSet;
        constructor(arg0: $Contraption);
        get andAdjustShouldRenderBlockEntities(): $BitSet;
        get renderLevel(): $VirtualRenderWorld;
        get matrices(): $ContraptionMatrices;
        get renderedBlocks(): $ClientContraption$RenderedBlocks;
    }
}
