import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleType_, $ParticleOptions, $ParticleOptions_, $ParticleType } from "@package/net/minecraft/core/particles";
import { $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $NozzleBlockEntityExtension } from "@package/dev/ryanhcode/sable/neoforge/mixinterface/compatibility/create";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $SoundSource } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $NozzleBlockEntityAccessor } from "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/nozzle";
import { $LocalFloatRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $Sound, $SoundInstance$Attenuation, $AbstractTickableSoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $BlockEntitySubLevelActor } from "@package/dev/ryanhcode/sable/api/block";
import { $FanProcessingType, $FanProcessingType$AirFlowParticleAccess } from "@package/com/simibubi/create/content/kinetics/fan/processing";
import { $Item } from "@package/net/minecraft/world/item";
import { $SpriteSet, $Particle, $ParticleProvider, $SimpleAnimatedParticle, $ParticleEngine$SpriteParticleRegistration } from "@package/net/minecraft/client/particle";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $SoundType, $Block, $Block$BlockStatePairKey } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List, $EnumSet, $List_ } from "@package/java/util";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $Vec3i, $HolderLookup$Provider, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntityRenderer, $KineticBlockEntity, $DirectionalKineticBlock, $KineticBlockEntityVisual } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $BlockEntityPropeller, $BlockEntitySubLevelPropellerActor } from "@package/dev/ryanhcode/sable/api/block/propeller";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $Iterable, $Class, $ThreadLocal, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ICustomParticleDataWithSprite } from "@package/com/simibubi/create/foundation/particle";
import { $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $ServerSubLevel, $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as processing from "@package/com/simibubi/create/content/kinetics/fan/processing";

declare module "@package/com/simibubi/create/content/kinetics/fan" {
    export class $EncasedFanBlockEntity extends $KineticBlockEntity implements $IAirCurrentSource, $BlockEntityPropeller, $BlockEntitySubLevelPropellerActor {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        isActive(): boolean;
        sable$tick(arg0: $ServerSubLevel): void;
        getAirFlowDirection(): $Direction;
        getAirflowOriginSide(): $Direction;
        blockInFrontChanged(): void;
        getThrust(): number;
        getAirflow(): number;
        getPropeller(): $BlockEntityPropeller;
        getBlockDirection(): $Direction;
        getAirCurrentWorld(): $Level;
        isSourceRemoved(): boolean;
        updateChute(): void;
        getAirCurrentPos(): $BlockPos;
        getAirCurrent(): $AirCurrent;
        getMaxDistance(): number;
        getAirflowScaling(): number;
        getScaledThrust(): number;
        getCurrentAirPressure(): number;
        sable$physicsTick(arg0: $ServerSubLevel, arg1: $RigidBodyHandle, arg2: number): void;
        applyForces(arg0: $ServerSubLevel, arg1: $Vec3_, arg2: number): void;
        sable$getLoadingDependencies(): $Iterable<$SubLevel>;
        sable$getConnectionDependencies(): $Iterable<$SubLevel>;
        airCurrent: $AirCurrent;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        hasComparators: number;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get active(): boolean;
        get airFlowDirection(): $Direction;
        get airflowOriginSide(): $Direction;
        get thrust(): number;
        get airflow(): number;
        get propeller(): $BlockEntityPropeller;
        get blockDirection(): $Direction;
        get airCurrentWorld(): $Level;
        get sourceRemoved(): boolean;
        get airCurrentPos(): $BlockPos;
        get maxDistance(): number;
        get airflowScaling(): number;
        get scaledThrust(): number;
        get currentAirPressure(): number;
    }
    export class $AirCurrent$Client {
        static tickClientPlayerSounds(): void;
        constructor();
    }
    export class $IAirCurrentSource {
    }
    export interface $IAirCurrentSource {
        getSpeed(): number;
        getAirFlowDirection(): $Direction;
        getAirflowOriginSide(): $Direction;
        getAirCurrentWorld(): $Level;
        isSourceRemoved(): boolean;
        getAirCurrentPos(): $BlockPos;
        getAirCurrent(): $AirCurrent;
        getMaxDistance(): number;
        get speed(): number;
        get airFlowDirection(): $Direction;
        get airflowOriginSide(): $Direction;
        get airCurrentWorld(): $Level;
        get sourceRemoved(): boolean;
        get airCurrentPos(): $BlockPos;
        get airCurrent(): $AirCurrent;
        get maxDistance(): number;
    }
    export class $NozzleBlock extends $WrenchableDirectionalBlock implements $IBE<$NozzleBlockEntity> {
        getBlockEntityClass(): $Class<$NozzleBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$NozzleBlockEntity>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$NozzleBlockEntity, $InteractionResult>): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $NozzleBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$NozzleBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($NozzleBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$NozzleBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
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
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
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
        get blockEntityClass(): $Class<$NozzleBlockEntity>;
        get blockEntityType(): $BlockEntityType<$NozzleBlockEntity>;
    }
    export class $NozzleBlockEntity extends $SmartBlockEntity implements $NozzleBlockEntityAccessor, $BlockEntitySubLevelActor, $NozzleBlockEntityExtension {
        setRange(arg0: number): void;
        sable$physicsTick(arg0: $ServerSubLevel, arg1: $RigidBodyHandle, arg2: number): void;
        sable$getValidDirections(): $EnumSet<any>;
        redirect$gmf000$sable$nozzlePositionLazy(arg0: $Vec3i): $Vec3;
        redirect$gmf000$sable$checkDirection(arg0: $Level_, arg1: $ParticleOptions_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Vec3_, arg9: $Vec3_): void;
        redirect$gmf000$sable$nozzlePosition(arg0: $Vec3i): $Vec3;
        handler$gmh000$sable$updateValidDirections(arg0: $CallbackInfo): void;
        redirect$gmf000$sable$checkDirection$mixinextras$bridge$20(arg0: $Level_, arg1: $ParticleOptions_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $LocalRef<any>, arg9: $LocalRef<any>): void;
        handler$gmg000$sable$generateRays(arg0: $BlockEntityType_<any>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CallbackInfo): void;
        wrapOperation$gmf000$sable$clampParticlesMore(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): number;
        sable$getLoadingDependencies(): $Iterable<$SubLevel>;
        sable$getConnectionDependencies(): $Iterable<$SubLevel>;
        sable$tick(arg0: $ServerSubLevel): void;
        getRange(): number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $EncasedFanBlock extends $DirectionalKineticBlock implements $IBE<$EncasedFanBlockEntity> {
        getBlockEntityClass(): $Class<$EncasedFanBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$EncasedFanBlockEntity>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$EncasedFanBlockEntity, $InteractionResult>): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $EncasedFanBlockEntity;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$EncasedFanBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($EncasedFanBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$EncasedFanBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
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
        get blockEntityClass(): $Class<$EncasedFanBlockEntity>;
        get blockEntityType(): $BlockEntityType<$EncasedFanBlockEntity>;
    }
    export class $AirCurrent$AirCurrentSegment {
    }
    export class $AirFlowParticle$Factory implements $ParticleProvider<$AirFlowParticleData> {
        createParticle(arg0: $AirFlowParticleData, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $AirCurrentSound extends $AbstractTickableSoundInstance {
        fadeIn(arg0: number): void;
        setPitch(arg0: number): void;
        fadeOut(): void;
        stopSound(): void;
        isFaded(): boolean;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        get faded(): boolean;
    }
    export class $AirFlowParticle extends $SimpleAnimatedParticle {
        redirect$gpe000$sable$reverseProjectPos2(arg0: number, arg1: number, arg2: number): $Vec3;
        handler$gpe000$sable$transformNormal(arg0: $CallbackInfo, arg1: $LocalRef<any>): void;
        handler$gpe000$sable$fixAirflowParticle(arg0: $CallbackInfo): void;
        redirect$gpe000$sable$reverseProjectPos(arg0: $AABB_, arg1: number, arg2: number, arg3: number): boolean;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        static MAXIMUM_COLLISION_VELOCITY_SQUARED: number;
        sprites: $SpriteSet;
        oRoll: number;
        random: $RandomSource;
        asyncparticle$lossSublevelPos: $BlockPos;
        bCol: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        asyncparticle$tracingSubLevel: $WeakReference<any>;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        static INITIAL_AABB: $AABB;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $AirCurrent {
        tick(): void;
        rebuild(): void;
        getTypeAt(arg0: number): $FanProcessingType;
        findEntities(): void;
        static getFlowLimit(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: $Direction_): number;
        static isPlayerCreativeFlying(arg0: $Entity): boolean;
        handler$fka000$asyncparticles$onInit(source: $IAirCurrentSource, ci: $CallbackInfo): void;
        handler$gjk000$sable$updateSubLevel(arg0: $CallbackInfo): void;
        tickAffectedHandlers(): void;
        findAffectedHandlers(): void;
        wrapOperation$fka000$asyncparticles$redirectRebuildClear(instance: $List_<any>, original: $Operation_<any>, localSegs: $LocalRef<any>): void;
        wrapOperation$fka000$asyncparticles$redirectRebuildAdd(instance: $List_<any>, e: $Object, original: $Operation_<any>, localSegs: $LocalRef<any>): boolean;
        redirect$gjk000$sable$reverseProjectAllPositions(arg0: $Entity): $Vec3;
        redirect$gjk000$sable$reverseProjectEntityBB(arg0: $Entity): $AABB;
        wrapOperation$gjk000$sable$transformFlowVector(arg0: $Entity, arg1: $Vec3_, arg2: $Operation_<any>, arg3: $Vec3i, arg4: number, arg5: $Vec3_, arg6: number): void;
        handler$fka000$asyncparticles$onRebuildHead(ci: $CallbackInfo, localSegs: $LocalRef<any>): void;
        wrapOperation$gjk000$sable$transformFlowVector$mixinextras$bridge$25(arg0: $Entity, arg1: $Vec3_, arg2: $Operation_<any>, arg3: $LocalRef<any>, arg4: $LocalFloatRef, arg5: $LocalRef<any>, arg6: $LocalFloatRef): void;
        bounds: $AABB;
        maxDistance: number;
        source: $IAirCurrentSource;
        pushing: boolean;
        segments: $List<$AirCurrent$AirCurrentSegment>;
        direction: $Direction;
        constructor(arg0: $IAirCurrentSource);
    }
    export class $AirFlowParticle$Access implements $FanProcessingType$AirFlowParticleAccess {
    }
    export class $AirFlowParticleData implements $ParticleOptions, $ICustomParticleDataWithSprite<$AirFlowParticleData> {
        getCodec(arg0: $ParticleType_<$AirFlowParticleData>): $MapCodec<$AirFlowParticleData>;
        getType(): $ParticleType<never>;
        getMetaFactory(): $ParticleEngine$SpriteParticleRegistration<$AirFlowParticleData>;
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $AirFlowParticleData>;
        getFactory(): $ParticleProvider<$AirFlowParticleData>;
        register(arg0: $ParticleType_<$AirFlowParticleData>, arg1: $RegisterParticleProvidersEvent): void;
        createType(): $ParticleType<$AirFlowParticleData>;
        static CODEC: $MapCodec<$AirFlowParticleData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AirFlowParticleData>;
        constructor(arg0: $Vec3i);
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        get type(): $ParticleType<never>;
        get metaFactory(): $ParticleEngine$SpriteParticleRegistration<$AirFlowParticleData>;
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $AirFlowParticleData>;
        get factory(): $ParticleProvider<$AirFlowParticleData>;
    }
    export class $FanVisual extends $KineticBlockEntityVisual<$EncasedFanBlockEntity> {
        constructor(arg0: $VisualizationContext, arg1: $EncasedFanBlockEntity, arg2: number);
    }
    export class $EncasedFanRenderer extends $KineticBlockEntityRenderer<$EncasedFanBlockEntity> {
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
