import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IMultiBlockEntityContainer$Fluid, $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List_, $Map } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $Direction$Axis_, $BlockPos_, $Direction_, $Direction$Axis, $Vec3i, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $SmartFluidTank } from "@package/com/simibubi/create/foundation/fluid";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class, $ThreadLocal, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $HorizontalCTBehaviour, $CTSpriteShiftEntry, $CTModel } from "@package/com/simibubi/create/foundation/block/connected";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_ } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Block_, $Block$BlockStatePairKey, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as storage from "@package/com/simibubi/create/content/fluids/tank/storage";

declare module "@package/com/simibubi/create/content/fluids/tank" {
    export class $CreativeFluidTankBlockEntity extends $FluidTankBlockEntity {
        worldPosition: $BlockPos;
        boiler: $BoilerData;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $FluidTankMovementBehavior implements $MovementBehaviour {
        tick(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        isActive(arg0: $MovementContext): boolean;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        onDisabledByControls(arg0: $MovementContext): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
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
    export class $FluidTankModel$CullData {
    }
    export class $BoilerData$BoilerFluidHandler implements $IFluidHandler {
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTanks(): number;
        constructor(arg0: $BoilerData);
        get tanks(): number;
    }
    export class $FluidTankModel extends $CTModel {
        static standard(arg0: $BakedModel): $FluidTankModel;
        static creative(arg0: $BakedModel): $FluidTankModel;
    }
    export class $BoilerData {
        clear(): void;
        write(): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: number): void;
        isActive(): boolean;
        tick(arg0: $FluidTankBlockEntity): void;
        evaluate(arg0: $FluidTankBlockEntity): boolean;
        createHandler(): $BoilerData$BoilerFluidHandler;
        isPassive(): boolean;
        isPassive(arg0: number): boolean;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: number): boolean;
        updateTemperature(arg0: $FluidTankBlockEntity): boolean;
        getHeatLevelTextComponent(): $MutableComponent;
        checkPipeOrganAdvancement(arg0: $FluidTankBlockEntity): void;
        getTheoreticalHeatLevel(): number;
        getEngineEfficiency(arg0: number): number;
        getHeatComponent(arg0: boolean, arg1: boolean, ...arg2: $ChatFormatting_[]): $MutableComponent;
        getSizeComponent(arg0: boolean, arg1: boolean, ...arg2: $ChatFormatting_[]): $MutableComponent;
        calcMinMaxForSize(arg0: number): void;
        getWaterComponent(arg0: boolean, arg1: boolean, ...arg2: $ChatFormatting_[]): $MutableComponent;
        updateOcclusion(arg0: $FluidTankBlockEntity): void;
        wrapOperation$glf000$sable$subLevelHeating(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Operation_<any>): number;
        handler$glf000$sable$forceUpdateHeatIfDisconnected(arg0: $FluidTankBlockEntity, arg1: $CallbackInfo): void;
        getMaxHeatLevelForWaterSupply(): number;
        getMaxHeatLevelForBoilerSize(arg0: number): number;
        queueSoundOnSide(arg0: $BlockPos_, arg1: $Direction_): void;
        attachedEngines: number;
        gauge: $LerpedFloat;
        needsHeatLevelUpdate: boolean;
        passiveHeat: boolean;
        activeHeat: number;
        attachedWhistles: number;
        occludedDirections: boolean[];
        waterSupply: number;
        constructor();
        get active(): boolean;
        get heatLevelTextComponent(): $MutableComponent;
        get theoreticalHeatLevel(): number;
        get maxHeatLevelForWaterSupply(): number;
    }
    export class $FluidTankBlock$Shape extends $Enum<$FluidTankBlock$Shape> implements $StringRepresentable {
        static values(): $FluidTankBlock$Shape[];
        static valueOf(arg0: string): $FluidTankBlock$Shape;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static PLAIN: $FluidTankBlock$Shape;
        static WINDOW_NW: $FluidTankBlock$Shape;
        static WINDOW_SE: $FluidTankBlock$Shape;
        static WINDOW_SW: $FluidTankBlock$Shape;
        static WINDOW: $FluidTankBlock$Shape;
        static WINDOW_NE: $FluidTankBlock$Shape;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FluidTankBlock$Shape}.
     */
    export type $FluidTankBlock$Shape_ = "plain" | "window" | "window_nw" | "window_sw" | "window_ne" | "window_se";
    export class $FluidTankCTBehaviour extends $HorizontalCTBehaviour {
        constructor(arg0: $CTSpriteShiftEntry, arg1: $CTSpriteShiftEntry, arg2: $CTSpriteShiftEntry);
    }
    export class $BoilerHeaters {
        static registerDefaults(): void;
        static blazeBurner(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): number;
        static passive(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): number;
        constructor();
    }
    export class $FluidTankGenerator extends $SpecialBlockStateGen {
        constructor();
        constructor(arg0: string);
    }
    export class $FluidTankRenderer extends $SafeBlockEntityRenderer<$FluidTankBlockEntity> {
        shouldRenderOffScreen(arg0: $FluidTankBlockEntity): boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $CreativeFluidTankBlockEntity$CreativeSmartFluidTank extends $SmartFluidTank {
        setContainedFluid(arg0: $FluidStack_): void;
        static CODEC: $Codec<$CreativeFluidTankBlockEntity$CreativeSmartFluidTank>;
        constructor(arg0: number, arg1: $Consumer_<$FluidStack>);
        set containedFluid(value: $FluidStack_);
    }
    export class $FluidTankBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IMultiBlockEntityContainer$Fluid {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        setController(arg0: $BlockPos_): void;
        static getMaxSize(): number;
        getWidth(): number;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        getController(): $BlockPos;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getHeight(): number;
        getFluid(arg0: number): $FluidStack;
        setHeight(arg0: number): void;
        setWidth(arg0: number): void;
        getTankSize(arg0: number): number;
        setTankSize(arg0: number, arg1: number): void;
        getLastKnownPos(): $BlockPos;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        removeController(arg0: boolean): void;
        notifyMultiUpdated(): void;
        isController(): boolean;
        setExtraData(arg0: $Object): void;
        modifyExtraData(arg0: $Object): $Object;
        toggleWindows(): void;
        getTank(arg0: number): $IFluidTank;
        getMaxWidth(): number;
        static getMaxHeight(): number;
        static getCapacityMultiplier(): number;
        sendDataImmediately(): void;
        preventConnectivityUpdate(): void;
        getMainConnectionAxis(): $Direction$Axis;
        getTankInventory(): $FluidTank;
        setFluidLevel(arg0: $LerpedFloat): void;
        hasTank(): boolean;
        getExtraData(): $Object;
        updateBoilerState(): void;
        applyFluidTankSize(arg0: number): void;
        getTotalTankSize(): number;
        getFluidLevel(): $LerpedFloat;
        getFillState(): number;
        getControllerBE(): $FluidTankBlockEntity;
        setWindows(arg0: boolean): void;
        updateBoilerTemperature(): void;
        getOtherFluidTankBlockEntity(arg0: $Direction_): $FluidTankBlockEntity;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        worldPosition: $BlockPos;
        boiler: $BoilerData;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        static get maxSize(): number;
        get lastKnownPos(): $BlockPos;
        get maxWidth(): number;
        static get maxHeight(): number;
        static get capacityMultiplier(): number;
        get mainConnectionAxis(): $Direction$Axis;
        get tankInventory(): $FluidTank;
        get totalTankSize(): number;
        get fillState(): number;
        get controllerBE(): $FluidTankBlockEntity;
        set windows(value: boolean);
    }
    export class $SoundPool$Sound {
    }
    export interface $SoundPool$Sound {
        playAt(arg0: $Level_, arg1: $Vec3i): void;
    }
    /**
     * Values that may be interpreted as {@link $SoundPool$Sound}.
     */
    export type $SoundPool$Sound_ = ((arg0: $Level, arg1: $Vec3i) => void);
    export class $FluidTankItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $SoundPool {
        play(arg0: $Level_): void;
        queueAt(arg0: number): void;
        queueAt(arg0: $BlockPos_): void;
        constructor(arg0: number, arg1: number, arg2: $SoundPool$Sound_);
    }
    export class $FluidTankBlock extends $Block implements $IWrenchable, $IBE<$FluidTankBlockEntity> {
        static regular(arg0: $BlockBehaviour$Properties): $FluidTankBlock;
        static creative(arg0: $BlockBehaviour$Properties): $FluidTankBlock;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        static isTank(arg0: $BlockState_): boolean;
        getBlockEntityClass(): $Class<$FluidTankBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$FluidTankBlockEntity>;
        static updateBoilerState(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): void;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FluidTankBlockEntity, $InteractionResult>): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $FluidTankBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$FluidTankBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($FluidTankBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FluidTankBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static SILENCED_METAL: $SoundType;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static BOTTOM: $BooleanProperty;
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
        static SHAPE: $EnumProperty<$FluidTankBlock$Shape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static TOP: $BooleanProperty;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        get blockEntityClass(): $Class<$FluidTankBlockEntity>;
        get blockEntityType(): $BlockEntityType<$FluidTankBlockEntity>;
    }
}
