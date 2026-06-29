import { $BlazeBurnerBlock$HeatLevel } from "@package/com/simibubi/create/content/processing/burner";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $RecipeHolder_, $Recipe, $RecipeHolder, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $InteractionResult, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $Block$BlockStatePairKey, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $DeferralBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/simple";
import { $SmartFluidTankBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/fluid";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List_, $Map } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $ValueBoxTransform$Sided } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class, $ThreadLocal } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $ProcessingRecipeParams, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/processing/basin" {
    export class $BasinGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $BasinMovementBehaviour implements $MovementBehaviour {
        tick(arg0: $MovementContext): void;
        getOrReadInventory(arg0: $MovementContext): $Map<string, $ItemStackHandler>;
        isActive(arg0: $MovementContext): boolean;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        onDisabledByControls(arg0: $MovementContext): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        mustTickWhileDisabled(): boolean;
        disableBlockEntityRendering(): boolean;
        startMoving(arg0: $MovementContext): void;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        writeExtraData(arg0: $MovementContext): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        cancelStall(arg0: $MovementContext): void;
        stopMoving(arg0: $MovementContext): void;
        constructor();
    }
    export class $BasinBlockEntity$BasinValueBox extends $ValueBoxTransform$Sided {
    }
    export class $BasinInventory extends $SmartInventory {
        kjs$self(): $IItemHandler;
        packagerMode: boolean;
        constructor(arg0: number, arg1: $BasinBlockEntity);
    }
    export class $BasinBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $Clearable {
        isEmpty(): boolean;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getFilter(): $FilteringBehaviour;
        clearContent(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        onWrenched(arg0: $Direction_): void;
        getTanks(): $Couple<$SmartFluidTankBehaviour>;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        static getHeatLevelOf(arg0: $BlockState_): $BlazeBurnerBlock$HeatLevel;
        getInvs(): $Couple<$SmartInventory>;
        notifyChangeOfContents(): void;
        areFluidsMoving(): boolean;
        setAreFluidsMoving(arg0: boolean): boolean;
        readOnlyItems(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getTotalFluidUnits(arg0: number): number;
        getOutputInventory(): $SmartInventory;
        acceptOutputs(arg0: $List_<$ItemStack_>, arg1: $List_<$FluidStack_>, arg2: boolean): boolean;
        wrapOperation$gjm000$sable$accountForSubLevels(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $BlockEntity;
        getInputInventory(): $SmartInventory;
        canContinueProcessing(): boolean;
        onEmptied(): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        worldPosition: $BlockPos;
        static OUTPUT_ANIMATION_TIME: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inputTank: $SmartFluidTankBehaviour;
        hasComparators: number;
        inputInventory: $BasinInventory;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get empty(): boolean;
        get filter(): $FilteringBehaviour;
        get tanks(): $Couple<$SmartFluidTankBehaviour>;
        get invs(): $Couple<$SmartInventory>;
        get outputInventory(): $SmartInventory;
    }
    export class $BasinBlock extends $Block implements $IBE<$BasinBlockEntity>, $IWrenchable {
        static isBasin(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityClass(): $Class<$BasinBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$BasinBlockEntity>;
        static canOutputTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BasinBlockEntity, $InteractionResult>): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $BasinBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$BasinBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($BasinBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BasinBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$BasinBlockEntity>;
        get blockEntityType(): $BlockEntityType<$BasinBlockEntity>;
    }
    export class $BasinRenderer extends $SmartBlockEntityRenderer<$BasinBlockEntity> {
        handler$ijj000$createdieselgenerators$renderItem(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: $ItemStack_, arg5: $CallbackInfo): void;
        handler$ijj000$createdieselgenerators$renderSafe(arg0: $BasinBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $BasinRecipe extends $StandardProcessingRecipe<$RecipeInput> {
        static apply(arg0: $BasinBlockEntity, arg1: $Recipe<never>): boolean;
        static match(arg0: $BasinBlockEntity, arg1: $Recipe<never>): boolean;
        static convertShapeless(arg0: $RecipeHolder_<never>): $RecipeHolder<$BasinRecipe>;
        constructor(arg0: $ProcessingRecipeParams);
    }
    export class $BasinOperatingBlockEntity extends $KineticBlockEntity {
        continueWithPreviousRecipe(): boolean;
        startProcessingBasin(): void;
        basinRemoved: boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        basinChecker: $DeferralBehaviour;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        updateSpeed: boolean;
        hasComparators: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
