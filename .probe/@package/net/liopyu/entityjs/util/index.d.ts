import { $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $MultiBufferSource, $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $ItemArmorGeoLayer, $BlockAndItemGeoLayer } from "@package/software/bernie/geckolib/renderer/layer";
import { $LightningBolt, $EntityType_, $Entity$MoveFunction, $EquipmentSlot_, $EntityType, $Entity, $MoverType_, $EquipmentSlot, $LivingEntity, $AgeableMob, $Entity$MoveFunction_, $Mob, $MoverType } from "@package/net/minecraft/world/entity";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $EntityModel } from "@package/net/minecraft/client/model";
import { $Consumer_ } from "@package/java/util/function";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $WaterBoundPathNavigation, $WallClimberNavigation, $AmphibiousPathNavigation, $FlyingPathNavigation, $GroundPathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $GeoBone, $BakedGeoModel_, $BakedGeoModel } from "@package/software/bernie/geckolib/cache/object";
import { $Enum } from "@package/java/lang";
import { $LookControlJS, $JumpControlJS, $MoveControlJS } from "@package/net/liopyu/entityjs/util/ai";
import { $LevelReader, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $ItemStack_, $ProjectileWeaponItem, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $Projectile, $AbstractArrow } from "@package/net/minecraft/world/entity/projectile";
import { $PartBuilder } from "@package/net/liopyu/entityjs/builders/nonliving/entityjs";
import { $FoodProperties, $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $MoveControlJSBuilder, $JumpControlJSBuilder, $LookControlJSBuilder } from "@package/net/liopyu/entityjs/builders/misc";
import { $GeoEntityRenderer } from "@package/software/bernie/geckolib/renderer";
import { $Vec3, $EntityHitResult, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as implementation from "@package/net/liopyu/entityjs/util/implementation";
export * as ai from "@package/net/liopyu/entityjs/util/ai";

declare module "@package/net/liopyu/entityjs/util" {
    export class $ContextUtils$EntityDamageContext {
        damageSource: $DamageSource;
        damageAmount: number;
        entity: $LivingEntity;
        constructor(arg0: $DamageSource_, arg1: number, arg2: $LivingEntity);
    }
    export class $ContextUtils$EntityPlayerContext {
        entity: $Entity;
        player: $Player;
        constructor(arg0: $Player, arg1: $Entity);
    }
    export class $ContextUtils$AutoAttackContext {
        entity: $LivingEntity;
        target: $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $LivingEntity);
    }
    export class $ContextUtils$ArrowEntityHitContext {
        result: $EntityHitResult;
        entity: $AbstractArrow;
        constructor(arg0: $EntityHitResult, arg1: $AbstractArrow);
    }
    export class $ContextUtils$FinalRenderContext<T extends $LivingEntity> {
        packedOverlay: number;
        renderer: $GeoEntityRenderer<T>;
        colour: number;
        poseStack: $PoseStack;
        model: $BakedGeoModel;
        bufferSource: $MultiBufferSource;
        buffer: $VertexConsumer;
        entity: T;
        partialTick: number;
        packedLight: number;
        constructor(arg0: $GeoEntityRenderer<T>, arg1: $PoseStack, arg2: T, arg3: $BakedGeoModel_, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number, arg9: number);
    }
    export class $ContextUtils$ItemBoneRenderContext<T extends $LivingEntity> {
        packedOverlay: number;
        item: $ItemStack;
        poseStack: $PoseStack;
        bone: $GeoBone;
        bufferSource: $MultiBufferSource;
        layer: $BlockAndItemGeoLayer<T>;
        entity: T;
        partialTick: number;
        packedLight: number;
        constructor(arg0: $BlockAndItemGeoLayer<T>, arg1: $PoseStack, arg2: $GeoBone, arg3: $ItemStack_, arg4: T, arg5: $MultiBufferSource_, arg6: number, arg7: number, arg8: number);
    }
    export class $ContextUtils$LineOfSightContext {
        targetEntity: $Entity;
        entity: $LivingEntity;
        constructor(arg0: $Entity, arg1: $LivingEntity);
    }
    export class $ContextUtils$PassengerEntityContext {
        passenger: $Entity;
        entity: $LivingEntity;
        constructor(arg0: $Entity, arg1: $LivingEntity);
    }
    export class $ContextUtils$ItemUseContext {
        level: $Level;
        player: $Player;
        hand: $InteractionHand;
        constructor(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_);
    }
    export class $ContextUtils$CollidingEntityContext {
        entity: $LivingEntity;
        collidingEntity: $Entity;
        constructor(arg0: $LivingEntity, arg1: $Entity);
    }
    export class $ContextUtils$EntityDistanceToPlayerContext {
        distanceToClosestPlayer: number;
        entity: $LivingEntity;
        constructor(arg0: number, arg1: $LivingEntity);
    }
    export class $ContextUtils$RotLerpContext {
        sourceAngle: number;
        targetAngle: number;
        maximumChange: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $ContextUtils$CanTrampleContext {
        pos: $BlockPos;
        fallDistance: number;
        state: $BlockState;
        entity: $LivingEntity;
        constructor(arg0: $BlockState_, arg1: $BlockPos_, arg2: number, arg3: $LivingEntity);
    }
    export class $ContextUtils$ThunderHitContext {
        lightningBolt: $LightningBolt;
        level: $ServerLevel;
        entity: $LivingEntity;
        constructor(arg0: $ServerLevel, arg1: $LightningBolt, arg2: $LivingEntity);
    }
    export class $ContextUtils$CollidingProjectileEntityContext {
        entity: $Entity;
        target: $Entity;
        constructor(arg0: $Entity, arg1: $Entity);
    }
    export class $ContextUtils$LerpToContext {
        posRotationIncrements: number;
        x: number;
        y: number;
        z: number;
        pitch: number;
        yaw: number;
        entity: $Entity;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Entity);
    }
    export class $ContextUtils$EntityItemStackContext {
        item: $ItemStack;
        entity: $LivingEntity;
        constructor(arg0: $ItemStack_, arg1: $LivingEntity);
    }
    export class $ContextUtils$ArrowBlockHitContext {
        result: $BlockHitResult;
        entity: $AbstractArrow;
        constructor(arg0: $BlockHitResult, arg1: $AbstractArrow);
    }
    export class $ContextUtils$RotationContext {
        wantedZ: number;
        wantedY: number;
        wantedX: number;
        entity: $Mob;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Mob);
    }
    export class $ContextUtils$OnEffectContext {
        effect: $MobEffectInstance;
        entity: $LivingEntity;
        constructor(arg0: $MobEffectInstance, arg1: $LivingEntity);
    }
    export class $ContextUtils$EntityFallDamageContext {
        distance: number;
        damageSource: $DamageSource;
        entity: $LivingEntity;
        damageMultiplier: number;
        constructor(arg0: $LivingEntity, arg1: number, arg2: number, arg3: $DamageSource_);
    }
    export class $ContextUtils$ECanTrampleContext {
        pos: $BlockPos;
        fallDistance: number;
        state: $BlockState;
        entity: $Entity;
        constructor(arg0: $BlockState_, arg1: $BlockPos_, arg2: number, arg3: $Entity);
    }
    export class $ContextUtils$MobInteractContext {
        entity: $LivingEntity;
        player: $Player;
        hand: $InteractionHand;
        constructor(arg0: $LivingEntity, arg1: $Player, arg2: $InteractionHand_);
    }
    export class $ContextUtils$ChangeDimensionsContext {
        from: $Level;
        to: $Level;
        entity: $Entity;
        constructor(arg0: $Entity, arg1: $Level_, arg2: $Level_);
    }
    export class $ContextUtils$ArrowPlayerContext {
        entity: $AbstractArrow;
        player: $Player;
        constructor(arg0: $Player, arg1: $AbstractArrow);
    }
    export class $ContextUtils$GoalContext {
        goal: $Goal;
        entity: $Mob;
        constructor(arg0: $Mob, arg1: $Goal);
    }
    export class $ContextUtils$MovementContext {
        moverType: $MoverType;
        position: $Vec3;
        entity: $Entity;
        constructor(arg0: $MoverType_, arg1: $Vec3_, arg2: $Entity);
    }
    export class $ContextUtils$EPassengerEntityContext {
        passenger: $Entity;
        entity: $Entity;
        constructor(arg0: $Entity, arg1: $Entity);
    }
    export class $ContextUtils$DeathContext {
        damageSource: $DamageSource;
        entity: $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_);
    }
    export class $ContextUtils$EntityBlockPosContext {
        blockPos: $BlockPos;
        entity: $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $BlockPos_);
    }
    export class $ContextUtils$DamageContext {
        damageSource: $DamageSource;
        entity: $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_);
    }
    export class $ContextUtils$PassengerVehicleContext {
        entity: $LivingEntity;
        vehicle: $Entity;
        constructor(arg0: $Entity, arg1: $LivingEntity);
    }
    export class $ContextUtils$FoodItemLevelContext {
        itemStack: $ItemStack;
        level: $Level;
        foodProperties: $FoodProperties;
        entity: $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $Level_, arg3: $FoodProperties_);
    }
    export class $ContextUtils$EEntityFallDamageContext {
        distance: number;
        damageSource: $DamageSource;
        entity: $Entity;
        damageMultiplier: number;
        constructor(arg0: $Entity, arg1: number, arg2: number, arg3: $DamageSource_);
    }
    export class $ContextUtils$RenderContext<T extends $LivingEntity> {
        renderer: $GeoEntityRenderer<T>;
        entityYaw: number;
        poseStack: $PoseStack;
        bufferSource: $MultiBufferSource;
        entity: T;
        partialTick: number;
        packedLight: number;
        constructor(arg0: $GeoEntityRenderer<T>, arg1: T, arg2: number, arg3: number, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number);
    }
    export class $ContextUtils$ArrowLivingEntityContext {
        arrow: $AbstractArrow;
        entity: $LivingEntity;
        constructor(arg0: $AbstractArrow, arg1: $LivingEntity);
    }
    export class $ContextUtils$MayInteractContext {
        level: $Level;
        pos: $BlockPos;
        entity: $LivingEntity;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity);
    }
    export class $ContextUtils$ApplyRotationsContext<T extends $LivingEntity> {
        renderer: $GeoEntityRenderer<any>;
        ageInTicks: number;
        rotationYaw: number;
        poseStack: $PoseStack;
        entity: T;
        partialTick: number;
        constructor(arg0: $GeoEntityRenderer<any>, arg1: T, arg2: $PoseStack, arg3: number, arg4: number, arg5: number);
    }
    export class $ContextUtils$Vec3Context {
        vec3: $Vec3;
        entity: $LivingEntity;
        constructor(arg0: $Vec3_, arg1: $LivingEntity);
    }
    export class $ContextUtils$RenderContextCustom<T extends $LivingEntity> {
        entityYaw: number;
        poseStack: $PoseStack;
        bufferSource: $MultiBufferSource;
        entity: T;
        partialTick: number;
        packedLight: number;
        constructor(arg0: T, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number);
    }
    export class $ContextUtils$StrafeContext {
        forward: number;
        strafe: number;
        constructor(arg0: number, arg1: number);
    }
    export class $ContextUtils$EntityFluidStateContext {
        fluidState: $FluidState;
        entity: $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $FluidState);
    }
    export class $ContextUtils$PreRenderContext<T> {
        packedOverlay: number;
        poseStack: $PoseStack;
        bakedModel: $BakedGeoModel;
        bufferSource: $MultiBufferSource;
        buffer: $VertexConsumer;
        renderType: $RenderType;
        entity: T;
        partialTick: number;
        packedLight: number;
        constructor(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number);
    }
    export class $ContextUtils$PlayerEntityContext {
        entity: $LivingEntity;
        player: $Player;
        constructor(arg0: $Player, arg1: $LivingEntity);
    }
    export class $ContextUtils$EntityServerLevelContext {
        level: $ServerLevel;
        entity: $LivingEntity;
        constructor(arg0: $ServerLevel, arg1: $LivingEntity);
    }
    export class $ContextUtils$ProjectileEntityHitContext {
        result: $EntityHitResult;
        entity: $Projectile;
        constructor(arg0: $EntityHitResult, arg1: $Projectile);
    }
    export class $ContextUtils$VisualContext {
        lookingEntity: $Entity;
        entity: $LivingEntity;
        constructor(arg0: $Entity, arg1: $LivingEntity);
    }
    export class $ContextUtils$TargetChangeContext {
        entity: $Mob;
        target: $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $Mob);
    }
    export class $ContextUtils$EntityInteractContext {
        entity: $Entity;
        player: $Player;
        hand: $InteractionHand;
        constructor(arg0: $Entity, arg1: $Player, arg2: $InteractionHand_);
    }
    export class $ContextUtils$PartEntityParams<T extends $LivingEntity> {
        name: string;
        width: number;
        builder: $PartBuilder<T>;
        height: number;
        constructor(arg0: string, arg1: number, arg2: number, arg3: $PartBuilder<T>);
    }
    export class $ContextUtils$PositionRiderContext {
        passenger: $Entity;
        moveFunction: $Entity$MoveFunction;
        entity: $Entity;
        constructor(arg0: $Entity, arg1: $Entity, arg2: $Entity$MoveFunction_);
    }
    export class $ContextUtils$LivingEntityContext {
        entity: $LivingEntity;
        target: $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $LivingEntity);
    }
    export class $ContextUtils$EntityItemEntityContext {
        itemEntity: $ItemEntity;
        entity: $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $ItemEntity);
    }
    export class $ContextUtils$EntityItemLevelContext {
        itemStack: $ItemStack;
        level: $Level;
        entity: $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $Level_);
    }
    export class $ContextUtils$IsWalkableContext {
        pRelativeZ: number;
        pRelativeX: number;
        constructor(arg0: number, arg1: number);
    }
    export class $ContextUtils$EntityTypeEntityContext {
        targetType: $EntityType<never>;
        entity: $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $EntityType_<never>);
    }
    export class $ContextUtils$EntityLevelContext {
        level: $Level;
        entity: $LivingEntity;
        constructor(arg0: $Level_, arg1: $LivingEntity);
    }
    export class $ContextUtils$PartHurtContext<T extends $LivingEntity> {
        amount: number;
        part: $PartEntity<T>;
        source: $DamageSource;
        entity: $LivingEntity;
        constructor(arg0: $PartEntity<T>, arg1: $DamageSource_, arg2: number, arg3: $LivingEntity);
    }
    export class $EntityJSHelperClass$SpawnPlacementTypeEnum extends $Enum<$EntityJSHelperClass$SpawnPlacementTypeEnum> {
        static values(): $EntityJSHelperClass$SpawnPlacementTypeEnum[];
        static valueOf(arg0: string): $EntityJSHelperClass$SpawnPlacementTypeEnum;
        static IN_LAVA: $EntityJSHelperClass$SpawnPlacementTypeEnum;
        static IN_WATER: $EntityJSHelperClass$SpawnPlacementTypeEnum;
        static NO_RESTRICTIONS: $EntityJSHelperClass$SpawnPlacementTypeEnum;
        static ON_GROUND: $EntityJSHelperClass$SpawnPlacementTypeEnum;
    }
    /**
     * Values that may be interpreted as {@link $EntityJSHelperClass$SpawnPlacementTypeEnum}.
     */
    export type $EntityJSHelperClass$SpawnPlacementTypeEnum_ = "no_restrictions" | "in_water" | "in_lava" | "on_ground";
    export class $ContextUtils$NLRenderContext<T extends $Entity> {
        entityYaw: number;
        poseStack: $PoseStack;
        bufferSource: $MultiBufferSource;
        entity: T;
        partialTick: number;
        packedLight: number;
        constructor(arg0: T, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number);
    }
    export class $ContextUtils$ScaleModelRenderContext {
        isReRender: boolean;
        packedOverlay: number;
        widthScale: number;
        renderer: $GeoEntityRenderer<any>;
        heightScale: number;
        poseStack: $PoseStack;
        model: $BakedGeoModel;
        entity: $LivingEntity;
        partialTick: number;
        packedLight: number;
        constructor(arg0: $GeoEntityRenderer<any>, arg1: number, arg2: number, arg3: $PoseStack, arg4: $LivingEntity, arg5: $BakedGeoModel_, arg6: boolean, arg7: number, arg8: number, arg9: number);
    }
    export class $ContextUtils$RotationTowardsContext {
        from: number;
        to: number;
        maxDelta: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $ContextUtils$HurtContext {
        damageSource: $DamageSource;
        entity: $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_);
    }
    export class $EntityJSUtils {
        /**
         * Helper method to get the entity's builder for the type.
         */
        static getEntityBuilder<T extends $BuilderBase<never>>(arg0: $EntityType_<never>): T;
        /**
         * Creates a custom Jump Control builder and returns it.
         */
        static createJumpControl(arg0: $Mob, arg1: $Consumer_<$JumpControlJSBuilder>): $JumpControlJS;
        /**
         * Creates a custom Look Control builder and returns it.
         */
        static createLookControl(arg0: $Mob, arg1: $Consumer_<$LookControlJSBuilder>): $LookControlJS;
        /**
         * Creates a custom Move Control builder and returns it.
         */
        static createMoveControl(arg0: $Mob, arg1: $Consumer_<$MoveControlJSBuilder>): $MoveControlJS;
        /**
         * Ground entity path navigation
         */
        static createGroundPathNavigation(arg0: $Mob, arg1: $Level_): $GroundPathNavigation;
        /**
         * Flying entity path navigation
         */
        static createFlyingPathNavigation(arg0: $Mob, arg1: $Level_): $FlyingPathNavigation;
        /**
         * Amphibious entity path navigation
         */
        static createAmphibiousPathNavigation(arg0: $Mob, arg1: $Level_): $AmphibiousPathNavigation;
        /**
         * Wall climbing entity path navigation
         */
        static createWallClimberNavigation(arg0: $Mob, arg1: $Level_): $WallClimberNavigation;
        /**
         * Water bound entity path navigation
         */
        static createWaterBoundPathNavigation(arg0: $Mob, arg1: $Level_): $WaterBoundPathNavigation;
    }
    export interface $EntityJSUtils {
    }
    export class $ContextUtils$CalculateFallDamageContext {
        fallHeight: number;
        entity: $LivingEntity;
        damageMultiplier: number;
        constructor(arg0: number, arg1: number, arg2: $LivingEntity);
    }
    export class $ContextUtils$RendererModelContext {
        renderer: $EntityRenderer<never>;
        model: $EntityModel<never>;
        entity: $Entity;
        constructor(arg0: $Entity, arg1: $EntityRenderer<never>, arg2: $EntityModel<never>);
    }
    export class $ContextUtils$VanillaArmorRenderContext<T extends $LivingEntity> {
        packedOverlay: number;
        renderer: $ItemArmorGeoLayer<T>;
        poseStack: $PoseStack;
        armorStack: $ItemStack;
        bone: $GeoBone;
        modelPart: $ModelPart;
        slot: $EquipmentSlot;
        bufferSource: $MultiBufferSource;
        entity: T;
        partialTick: number;
        packedLight: number;
        constructor(arg0: $ItemArmorGeoLayer<T>, arg1: $PoseStack, arg2: T, arg3: $GeoBone, arg4: $EquipmentSlot_, arg5: $ItemStack_, arg6: $ModelPart, arg7: $MultiBufferSource_, arg8: number, arg9: number, arg10: number);
    }
    export class $ContextUtils$EntityEquipmentContext {
        previousStack: $ItemStack;
        slot: $EquipmentSlot;
        currentStack: $ItemStack;
        entity: $LivingEntity;
        constructor(arg0: $EquipmentSlot_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $LivingEntity);
    }
    export class $ContextUtils$EntityAnimalContext {
        animal: $Animal;
        otherAnimal: $Animal;
        constructor(arg0: $Animal, arg1: $Animal);
    }
    export class $ContextUtils$EntityHealContext {
        healAmount: number;
        entity: $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: number);
    }
    export class $ContextUtils$EntityProjectileWeaponContext {
        projectileWeapon: $ProjectileWeaponItem;
        entity: $LivingEntity;
        constructor(arg0: $ProjectileWeaponItem, arg1: $LivingEntity);
    }
    export class $ContextUtils$SetWantedPositionContext {
        speedModifier: number;
        wantedZ: number;
        wantedY: number;
        wantedX: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $ContextUtils$ProjectileBlockHitContext {
        result: $BlockHitResult;
        entity: $Projectile;
        constructor(arg0: $BlockHitResult, arg1: $Projectile);
    }
    export class $ContextUtils$EntityLootContext {
        hitByPlayer: boolean;
        serverLevel: $ServerLevel;
        damageSource: $DamageSource;
        entity: $LivingEntity;
        constructor(arg0: $ServerLevel, arg1: $DamageSource_, arg2: boolean, arg3: $LivingEntity);
    }
    export class $ContextUtils$EntityBlockPosLevelContext {
        pos: $BlockPos;
        levelReader: $LevelReader;
        entity: $LivingEntity;
        constructor(arg0: $BlockPos_, arg1: $LevelReader, arg2: $LivingEntity);
    }
    export class $ContextUtils$BreedableEntityContext {
        level: $ServerLevel;
        mate: $AgeableMob;
        entity: $AgeableMob;
        constructor(arg0: $AgeableMob, arg1: $AgeableMob, arg2: $ServerLevel);
    }
    export class $ContextUtils$LevelAnimalContext {
        level: $ServerLevel;
        mate: $Animal;
        entity: $Animal;
        constructor(arg0: $Animal, arg1: $Animal, arg2: $ServerLevel);
    }
    export class $ContextUtils$EThunderHitContext {
        lightningBolt: $LightningBolt;
        level: $ServerLevel;
        entity: $Entity;
        constructor(arg0: $ServerLevel, arg1: $LightningBolt, arg2: $Entity);
    }
    export class $ContextUtils$EMayInteractContext {
        level: $Level;
        pos: $BlockPos;
        entity: $Entity;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity);
    }
    export class $ContextUtils$EntitySqrDistanceContext {
        entity: $Entity;
        distanceToPlayer: number;
        constructor(arg0: number, arg1: $Entity);
    }
    export class $ContextUtils$ECollidingEntityContext {
        entity: $Entity;
        collidingEntity: $Entity;
        constructor(arg0: $Entity, arg1: $Entity);
    }
    export class $EntitySerializerType extends $Enum<$EntitySerializerType> {
        static values(): $EntitySerializerType[];
        static valueOf(arg0: string): $EntitySerializerType;
        static FLOAT: $EntitySerializerType;
        static BYTE: $EntitySerializerType;
        static COMPOUND_TAG: $EntitySerializerType;
        static STRING: $EntitySerializerType;
        static UUID: $EntitySerializerType;
        static VECTOR3: $EntitySerializerType;
        static QUATERNION: $EntitySerializerType;
        static INT: $EntitySerializerType;
        static BOOLEAN: $EntitySerializerType;
        static LONG: $EntitySerializerType;
    }
    /**
     * Values that may be interpreted as {@link $EntitySerializerType}.
     */
    export type $EntitySerializerType_ = "byte" | "int" | "long" | "float" | "string" | "boolean" | "compound_tag" | "uuid" | "vector3" | "quaternion";
    export class $ContextUtils$RenderBoneContext<T extends $LivingEntity> {
        packedOverlay: number;
        renderer: $ItemArmorGeoLayer<T>;
        poseStack: $PoseStack;
        bone: $GeoBone;
        bufferSource: $MultiBufferSource;
        buffer: $VertexConsumer;
        renderType: $RenderType;
        entity: T;
        partialTick: number;
        packedLight: number;
        constructor(arg0: $ItemArmorGeoLayer<T>, arg1: $PoseStack, arg2: T, arg3: $GeoBone, arg4: $RenderType, arg5: $MultiBufferSource_, arg6: $VertexConsumer, arg7: number, arg8: number, arg9: number);
    }
    export class $ContextUtils$ScaleModelRenderContextNL<T extends $Entity> {
        isReRender: boolean;
        packedOverlay: number;
        widthScale: number;
        heightScale: number;
        poseStack: $PoseStack;
        model: $BakedGeoModel;
        entity: T;
        partialTick: number;
        packedLight: number;
        constructor(arg0: number, arg1: number, arg2: $PoseStack, arg3: T, arg4: $BakedGeoModel_, arg5: boolean, arg6: number, arg7: number, arg8: number);
    }
    export class $ContextUtils$EDamageContext {
        damageSource: $DamageSource;
        entity: $Entity;
        constructor(arg0: $Entity, arg1: $DamageSource_);
    }
}
