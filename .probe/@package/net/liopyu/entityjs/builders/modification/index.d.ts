import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $EntityType_, $EntityType, $Entity, $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $Object } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ContextUtils$EntityTypeEntityContext, $ContextUtils$AutoAttackContext, $ContextUtils$RendererModelContext, $ContextUtils$EPassengerEntityContext, $ContextUtils$MovementContext, $ContextUtils$EThunderHitContext, $ContextUtils$OnEffectContext, $ContextUtils$CollidingProjectileEntityContext, $ContextUtils$VisualContext, $ContextUtils$MobInteractContext, $ContextUtils$EEntityFallDamageContext, $ContextUtils$EntityDistanceToPlayerContext, $ContextUtils$EntityBlockPosLevelContext, $ContextUtils$EntityHealContext, $ContextUtils$TargetChangeContext, $ContextUtils$EMayInteractContext, $ContextUtils$EntityFallDamageContext, $ContextUtils$ProjectileBlockHitContext, $ContextUtils$EntityItemStackContext, $ContextUtils$ECanTrampleContext, $ContextUtils$ECollidingEntityContext, $ContextUtils$EntityEquipmentContext, $ContextUtils$ProjectileEntityHitContext, $ContextUtils$EntityFluidStateContext, $ContextUtils$LineOfSightContext, $ContextUtils$DeathContext, $ContextUtils$HurtContext, $ContextUtils$LivingEntityContext, $ContextUtils$EntityLootContext, $ContextUtils$EntityDamageContext, $ContextUtils$EntityInteractContext, $ContextUtils$EntityItemLevelContext, $ContextUtils$EntityBlockPosContext, $ContextUtils$PlayerEntityContext, $ContextUtils$EDamageContext, $ContextUtils$Vec3Context, $ContextUtils$EntityItemEntityContext, $ContextUtils$PositionRiderContext, $ContextUtils$EntitySqrDistanceContext, $ContextUtils$CalculateFallDamageContext, $ContextUtils$EntityLevelContext, $ContextUtils$EntityPlayerContext, $ContextUtils$LerpToContext } from "@package/net/liopyu/entityjs/util";

declare module "@package/net/liopyu/entityjs/builders/modification" {
    export class $ModifyLivingEntityBuilder extends $ModifyEntityBuilder {
        /**
         * Sets a function to determine the custom hitbox scale of the entity.
         * The provided Function accepts a {@link LivingEntity} parameter,
         * representing the entity whose scale is being determined.
         * It returns a Float representing the custom scale.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.scale(entity => {
         *     // Define logic to calculate and return the custom scale for the entity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Float value;
         * });
         * ```
         */
        scale(arg0: $Function_<$LivingEntity, $Object>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity can attack a specific entity type.
         * The provided Predicate accepts a {@link ContextUtils.EntityTypeEntityContext} parameter,
         * representing the context of the entity attacking a specific entity type.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canAttackType(context => {
         *     // Define conditions to check if the entity can attack the specified entity type
         *     // Use information about the EntityTypeEntityContext provided by the context.
         *     return // Some boolean condition indicating if the entity can attack the specified entity type;
         * });
         * ```
         */
        canAttackType(arg0: $Predicate_<$ContextUtils$EntityTypeEntityContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate to determine whether the entity should drop loot upon death.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose loot dropping behavior is being determined.
         * It returns a Boolean indicating whether the entity should drop loot.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.shouldDropLoot(entity => {
         *     // Define logic to determine whether the entity should drop loot
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity should drop loot;
         * });
         * ```
         */
        shouldDropLoot(arg0: $Predicate_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when an effect is removed from the entity.
         * The provided Consumer accepts a {@link ContextUtils.OnEffectContext} parameter,
         * representing the context of the effect being removed from the entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onEffectRemoved(context => {
         *     // Define custom logic for handling when an effect is removed from the entity
         *     // Use information about the OnEffectContext provided by the context.
         * });
         * ```
         */
        onEffectRemoved(arg0: $Consumer_<$ContextUtils$OnEffectContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity receives healing.
         * The provided Consumer accepts a {@link ContextUtils.EntityHealContext} parameter,
         * representing the context of the entity receiving healing.
         * Very similar to {@link ForgeEventFactory.onLivingHeal}
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onLivingHeal(context => {
         *     // Define custom logic for handling when the entity receives healing
         *     // Use information about the EntityHealContext provided by the context.
         * });
         * ```
         */
        onLivingHeal(arg0: $Consumer_<$ContextUtils$EntityHealContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity can be affected by an effect.
         * The provided Predicate accepts a {@link ContextUtils.OnEffectContext} parameter,
         * representing the context of the effect that may affect the entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canBeAffected(context => {
         *     // Define conditions to check if the entity can be affected by the effect
         *     // Use information about the OnEffectContext provided by the context.
         *     return // Some boolean condition indicating if the entity can be affected by an effect;
         * });
         * ```
         */
        canBeAffected(arg0: $Predicate_<$ContextUtils$OnEffectContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity drops custom loot upon death.
         * The provided Consumer accepts a {@link ContextUtils.EntityLootContext} parameter,
         * representing the context of the entity's death and loot dropping.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.dropCustomDeathLoot(context => {
         *     // Define custom logic for handling the entity dropping custom loot upon death
         *     // Use information about the EntityLootContext provided by the context.
         * });
         * ```
         */
        dropCustomDeathLoot(arg0: $Consumer_<$ContextUtils$EntityLootContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity should drop experience upon death.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose experience drop is being determined.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.shouldDropExperience(entity => {
         *     // Define conditions to check if the entity should drop experience upon death
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity should drop experience;
         * });
         * ```
         */
        shouldDropExperience(arg0: $Predicate_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Sets whether the entity can breathe underwater.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canBreatheUnderwater(true);
         * ```
         */
        canBreatheUnderwater(arg0: boolean): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate function to determine whether the rider of the entity should face forward.
         * The provided Predicate accepts a {@link ContextUtils.PlayerEntityContext} parameter,
         * representing the context of the player entity riding the main entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.shouldRiderFaceForward(context => {
         *     // Define the conditions for the rider to face forward
         *     // Use information about the player entity provided by the context.
         *     return true //someBoolean;
         * });
         * ```
         */
        shouldRiderFaceForward(arg0: $Predicate_<$ContextUtils$PlayerEntityContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity is affected by potions.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its susceptibility to potions.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isAffectedByPotions(entity => {
         *     // Define conditions to check if the entity is affected by potions
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is affected by potions;
         * });
         * ```
         */
        isAffectedByPotions(arg0: $Predicate_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Sets a function to calculate fall damage for the entity.
         * The provided Function accepts a {@link ContextUtils.CalculateFallDamageContext} parameter,
         * representing the context of the fall damage calculation.
         * It returns an Integer representing the calculated fall damage.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.calculateFallDamage(context => {
         *     // Define logic to calculate and return the fall damage for the entity
         *     // Use information about the CalculateFallDamageContext provided by the context.
         *     return // Some Integer value representing the calculated fall damage;
         * });
         * ```
         */
        calculateFallDamage(arg0: $Function_<$ContextUtils$CalculateFallDamageContext, $Object>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity's air supply increases.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity whose air supply is being increased.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onIncreaseAirSupply(entity => {
         *     // Define custom logic for handling when the entity's air supply increases
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onIncreaseAirSupply(arg0: $Consumer_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate to determine if the entity has inverted heal and harm behavior.
         * 
         * @param invertedHealAndHarm The predicate to check for inverted heal and harm behavior.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.invertedHealAndHarm(entity => {
         *     // Custom logic to determine if the entity has inverted heal and harm behavior
         *     return true; // Replace with your custom boolean condition
         * });
         * ```
         */
        invertedHealAndHarm(arg0: $Predicate_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity is attackable.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its attackability.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isAttackableFunction(entity => {
         *     // Define conditions to check if the entity is attackable
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is attackable;
         * });
         * ```
         */
        isAttackableFunction(arg0: $Predicate_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity's air supply decreases.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity whose air supply is being decreased.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onDecreaseAirSupply(entity => {
         *     // Define custom logic for handling when the entity's air supply decreases
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onDecreaseAirSupply(arg0: $Consumer_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the living entity falls and takes damage.
         * The provided Consumer accepts a {@link ContextUtils.EntityFallDamageContext} parameter,
         * representing the context of the entity falling and taking fall damage.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onLivingFall(context => {
         *     // Define custom logic for handling when the living entity falls and takes damage
         *     // Use information about the EntityFallDamageContext provided by the context.
         * });
         * ```
         */
        onLivingFall(arg0: $Consumer_<$ContextUtils$EntityFallDamageContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity can stand on a fluid.
         * The provided Predicate accepts a {@link ContextUtils.EntityFluidStateContext} parameter,
         * representing the context of the entity potentially standing on a fluid.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canStandOnFluid(context => {
         *     // Define conditions for the entity to be able to stand on a fluid
         *     // Use information about the EntityFluidStateContext provided by the context.
         *     return // Some boolean condition indicating if the entity can stand on the fluid;
         * });
         * ```
         */
        canStandOnFluid(arg0: $Predicate_<$ContextUtils$EntityFluidStateContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity picks up an item.
         * The provided Consumer accepts a {@link ContextUtils.EntityItemEntityContext} parameter,
         * representing the context of the entity picking up an item with another entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onItemPickup(context => {
         *     // Define custom logic for handling the entity picking up an item
         *     // Use information about the EntityItemEntityContext provided by the context.
         * });
         * ```
         */
        onItemPickup(arg0: $Consumer_<$ContextUtils$EntityItemEntityContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity starts sleeping.
         * The provided Consumer accepts a {@link ContextUtils.EntityBlockPosContext} parameter,
         * representing the context of the entity starting to sleep at a specific block position.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onStartSleeping(context => {
         *     // Define custom logic for handling the entity starting to sleep
         *     // Use information about the EntityBlockPosContext provided by the context.
         * });
         * ```
         */
        onStartSleeping(arg0: $Consumer_<$ContextUtils$EntityBlockPosContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity stops sleeping.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has stopped sleeping.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onStopSleeping(entity => {
         *     // Define custom logic for handling the entity stopping sleeping
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onStopSleeping(arg0: $Consumer_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity is sensitive to water.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for sensitivity to water.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isSensitiveToWater(entity => {
         *     // Define conditions to check if the entity is sensitive to water
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is sensitive to water;
         * });
         * ```
         */
        isSensitiveToWater(arg0: $Predicate_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity has line of sight to another entity.
         * The provided Function accepts a {@link LineOfSightContext} parameter,
         * representing the entity to check for line of sight.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.hasLineOfSight(context => {
         *     // Define conditions to check if the entity has line of sight to the target entity
         *     // Use information about the Entity provided by the context.
         *     return // Some boolean condition indicating if there is line of sight;
         * });
         * ```
         */
        hasLineOfSight(arg0: $Predicate_<$ContextUtils$LineOfSightContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity leaves combat.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has left combat.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onLeaveCombat(entity => {
         *     // Define custom logic for handling the entity leaving combat
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onLeaveCombat(arg0: $Consumer_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity enters combat.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has entered combat.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onEnterCombat(entity => {
         *     // Define custom logic for handling the entity entering combat
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onEnterCombat(arg0: $Consumer_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * @param onHurtTarget A Consumer to execute when the mob attacks its target
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onHurtTarget(context => {
         *     const {entity, targetEntity} = context
         *     //Execute code when the target is hurt
         * });
         * ```
         */
        onHurtTarget(arg0: $Consumer_<$ContextUtils$LineOfSightContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a function to determine the visibility percentage of the entity.
         * The provided Function accepts a {@link ContextUtils.VisualContext} parameter,
         * representing both the entity whose visibility percentage is being determined
         * and the the builder entity who is being looked at.
         * It returns a Double representing the visibility percentage.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.visibilityPercent(context => {
         *     // Define logic to calculate and return the visibility percentage for the targetEntity
         *     // Use information about the Entity provided by the context.
         *     return // Some Double value representing the visibility percentage;
         * });
         * ```
         */
        visibilityPercent(arg0: $Function_<$ContextUtils$VisualContext, $Object>): $ModifyLivingEntityBuilder;
        /**
         * Sets the overall sound volume for the entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setSoundVolume(0.5);
         * ```
         */
        setSoundVolume(arg0: number): $ModifyLivingEntityBuilder;
        /**
         * Sets a function to determine the custom hurt sound of the entity.
         * The provided Function accepts a {@link ContextUtils.HurtContext} parameter,
         * ```javascript
         * modifyBuilder.setHurtSound(context => {
         *     // Custom logic to determine the hurt sound for the entity
         *     // You can use information from the HurtContext to customize the sound based on the context
         *     const { entity, damageSource } = context;
         *     // Determine the hurt sound based on the type of damage source
         *     switch (damageSource.getType()) {
         *         case "fire":
         *             return "minecraft:entity.generic.burn";
         *         case "fall":
         *             return "minecraft:entity.generic.hurt";
         *         case "drown":
         *             return "minecraft:entity.generic.hurt";
         *         case "explosion":
         *             return "minecraft:entity.generic.explode";
         *         default:
         *             return "minecraft:entity.generic.explode";
         *     }
         * })
         * ```
         */
        setHurtSound(arg0: $Function_<$ContextUtils$HurtContext, $Object>): $ModifyLivingEntityBuilder;
        /**
         * Sets the jump boost power for the entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.jumpBoostPower(entity => {
         *     return //some float value
         * });
         * ```
         */
        jumpBoostPower(arg0: $Function_<$LivingEntity, $Object>): $ModifyLivingEntityBuilder;
        /**
         * Sets the water slowdown factor for the entity. Defaults to 0.8.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setWaterSlowDown(0.6);
         * ```
         */
        setWaterSlowDown(arg0: number): $ModifyLivingEntityBuilder;
        /**
         * Sets a function to determine the experience reward for killing the entity.
         * The provided Function accepts a {@link LivingEntity} parameter,
         * representing the entity whose experience reward is being determined.
         * It returns an Integer representing the experience reward.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.experienceReward(killedEntity => {
         *     // Define logic to calculate and return the experience reward for the killedEntity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Integer value representing the experience reward;
         * });
         * ```
         */
        experienceReward(arg0: $Function_<$LivingEntity, $Object>): $ModifyLivingEntityBuilder;
        /**
         * Sets the death sound for the entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setDeathSound("minecraft:entity.generic.death");
         * ```
         */
        setDeathSound(arg0: $Object): $ModifyLivingEntityBuilder;
        /**
         * Sets the sound resource location for the entity's eating sound using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.eatingSound("minecraft:entity.zombie.ambient");
         * ```
         */
        eatingSound(arg0: $Object): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity is blocked by a shield.
         * The provided Consumer accepts a {@link ContextUtils.LivingEntityContext} parameter,
         * representing the entity that is blocked by a shield.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onBlockedByShield(context => {
         *     // Define custom logic for handling when the entity is blocked by a shield
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
         */
        onBlockedByShield(arg0: $Consumer_<$ContextUtils$LivingEntityContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity performs an eating action.
         * The provided Consumer accepts a {@link ContextUtils.EntityItemLevelContext} parameter,
         * representing the context of the entity's interaction with a specific item during eating.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.eat(context => {
         *     // Custom logic to handle the entity's eating action
         *     // Access information about the item being consumed using the provided context.
         * });
         * ```
         */
        eat(arg0: $Consumer_<$ContextUtils$EntityItemLevelContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate to determine whether the entity is affected by fluids.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose interaction with fluids is being determined.
         * It returns a Boolean indicating whether the entity is affected by fluids.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isAffectedByFluids(entity => {
         *     // Define logic to determine whether the entity is affected by fluids
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity is affected by fluids;
         * });
         * ```
         */
        isAffectedByFluids(arg0: $Predicate_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity is on a climbable surface.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for being on a climbable surface.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onClimbable(entity => {
         *     // Define conditions to check if the entity is on a climbable surface
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is on a climbable surface;
         * });
         * ```
         */
        onClimbable(arg0: $Predicate_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity equips an item.
         * The provided Consumer accepts a {@link ContextUtils.EntityEquipmentContext} parameter,
         * representing the context of the entity equipping an item.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onEquipItem(context => {
         *     // Define custom logic for handling when the entity equips an item
         *     // Use information about the EntityEquipmentContext provided by the context.
         * });
         * ```
         */
        onEquipItem(arg0: $Consumer_<$ContextUtils$EntityEquipmentContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed during the living entity's AI step.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * allowing customization of the AI behavior.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.aiStep(entity => {
         *     // Custom logic to be executed during the living entity's AI step
         *     // Access and modify information about the entity using the provided context.
         * });
         * ```
         */
        aiStep(arg0: $Consumer_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Function determining if the entity is allied with a potential target.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isAlliedTo(context => {
         *     const {entity, target} = context
         *     return target.type == 'minecraft:blaze'
         * });
         * ```
         */
        isAlliedTo(arg0: $Predicate_<$ContextUtils$LineOfSightContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate to determine whether the entity is immobile.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose immobility is being determined.
         * It returns a Boolean indicating whether the entity is immobile.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isImmobile(entity => {
         *     // Define logic to determine whether the entity is immobile
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity is immobile;
         * });
         * ```
         */
        isImmobile(arg0: $Predicate_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Consumer determining travel logic for the entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.travel(context => {
         *     const {entity, vec3} = context
         *     // Use the vec3 and entity to determine the travel logic of the entity
         * });
         * ```
         */
        travel(arg0: $Consumer_<$ContextUtils$Vec3Context>): $ModifyLivingEntityBuilder;
        /**
         * Consumer overriding the tickDeath responsible to counting down
         * the ticks it takes to remove the entity when it dies.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.tickDeath(entity => {
         *     // Override the tickDeath method in the entity
         * });
         * ```
         */
        tickDeath(arg0: $Consumer_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity can attack another entity.
         * The provided Predicate accepts a {@link ContextUtils.LivingEntityContext} parameter,
         * representing the entity that may be attacked.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canAttack(context => {
         *     // Define conditions to check if the entity can attack the targetEntity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity can attack the targetEntity;
         * });
         * ```
         */
        canAttack(arg0: $Predicate_<$ContextUtils$LivingEntityContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity dies.
         * The provided Consumer accepts a {@link ContextUtils.DeathContext} parameter,
         * representing the context of the entity's death.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onDeath(context => {
         *     // Define custom logic for handling the entity's death
         *     // Use information about the DeathContext provided by the context.
         * });
         * ```
         */
        onDeath(arg0: $Consumer_<$ContextUtils$DeathContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets the sound resource locations for small and large falls of the entity using either string representations or ResourceLocation objects.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.fallSounds("minecraft:entity.generic.small_fall",
         *     "minecraft:entity.generic.large_fall");
         * ```
         */
        fallSounds(arg0: $Object, arg1: $Object): $ModifyLivingEntityBuilder;
        /**
         * Sets a function to determine the next step distance for the entity.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose next step distance is being determined.
         * It returns a Float representing the next step distance.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.nextStep(entity => {
         *     // Define logic to calculate and return the next step distance for the entity
         *     // Use information about the Entity provided by the context.
         *     return // Some Float value representing the next step distance;
         * });
         * ```
         */
        nextStep(arg0: $Function_<$Entity, $Object>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity is hurt.
         * The provided Consumer accepts a {@link ContextUtils.EntityDamageContext} parameter,
         * representing the context of the entity being hurt.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onHurt(context => {
         *     // Define custom logic for handling when the entity is hurt
         *     // Use information about the EntityDamageContext provided by the context.
         * });
         * ```
         */
        onHurt(arg0: $Consumer_<$ContextUtils$EntityDamageContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a function to determine whether the entity can disable its target's shield.
         * The provided Predicate accepts a {@link LivingEntity} parameter.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canDisableShield(entity => {
         *     // Define the conditions to check if the entity can disable its shield
         *     // Use information about the LivingEntity provided by the context.
         *     return true;
         * });
         * ```
         */
        canDisableShield(arg0: $Predicate_<$LivingEntity>): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity automatically attacks on touch.
         * The provided Consumer accepts a {@link ContextUtils.AutoAttackContext} parameter,
         * representing the context of the auto-attack when the entity touches another entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.doAutoAttackOnTouch(context => {
         *     // Define custom logic for handling when the entity automatically attacks on touch
         *     // Use information about the AutoAttackContext provided by the context.
         * });
         * ```
         */
        doAutoAttackOnTouch(arg0: $Consumer_<$ContextUtils$AutoAttackContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets whether the entity is always considered as an experience dropper.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isAlwaysExperienceDropper(true);
         * ```
         */
        isAlwaysExperienceDropper(arg0: boolean): $ModifyLivingEntityBuilder;
        /**
         * Sets a callback function to be executed when an effect is added to the entity.
         * The provided Consumer accepts a {@link ContextUtils.OnEffectContext} parameter,
         * representing the context of the effect being added to the entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onEffectAdded(context => {
         *     // Define custom logic for handling when an effect is added to the entity
         *     // Use information about the OnEffectContext provided by the context.
         * });
         * ```
         */
        onEffectAdded(arg0: $Consumer_<$ContextUtils$OnEffectContext>): $ModifyLivingEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity is currently sleeping.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its sleeping state.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isSleeping(entity => {
         *     // Define conditions to check if the entity is currently sleeping
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is sleeping;
         * });
         * ```
         */
        isSleeping(arg0: $Predicate_<$LivingEntity>): $ModifyLivingEntityBuilder;
        entityType: $EntityType<never>;
        static builderMap: $Map<$EntityType<never>, $ModifyEntityBuilder>;
        constructor(arg0: $EntityType_<never>);
        set soundVolume(value: number);
        set hurtSound(value: $Function_<$ContextUtils$HurtContext, $Object>);
        set waterSlowDown(value: number);
        set deathSound(value: $Object);
    }
    export class $ModifyMobBuilder extends $ModifyLivingEntityBuilder {
        /**
         * Sets the function to determine whether the entity can pick up loot.
         * 
         * @param canPickUpLoot A Function accepting a {@link Mob} parameter,
         *                      defining the condition for the entity to pick up loot.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canPickUpLoot(entity => {
         *     // Custom logic to determine whether the entity can pick up loot based on the provided mob.
         *     return true;
         * });
         * ```
         */
        canPickUpLoot(arg0: $Predicate_<$Mob>): $ModifyMobBuilder;
        /**
         * Sets a function to determine the PathNavigation of the entity.
         * 
         * @param createNavigation A Function accepting an EntityLevelContext parameter
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.createNavigation(context => {
         *     const {entity, level} = context
         *     return EntityJSUtils.createWallClimberNavigation(entity, level) // Return some path navigation
         * });
         * ```
         */
        createNavigation(arg0: $Function_<$ContextUtils$EntityLevelContext, $Object>): $ModifyMobBuilder;
        /**
         * Sets a callback function to be executed when the entity's target changes.
         * 
         * @param setTarget A Consumer accepting a ContextUtils.TargetChangeContext parameter,
         *                  defining the behavior to be executed when the entity's target changes.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onTargetChanged(context => {
         *     // Custom logic to handle the entity's target change
         *     // Access information about the target change using the provided context.
         * });
         * ```
         */
        onTargetChanged(arg0: $Consumer_<$ContextUtils$TargetChangeContext>): $ModifyMobBuilder;
        /**
         * @param isSunBurnTick Sets whether the mob should burn in daylight
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isSunBurnTick(entity => {
         *     return false
         * });
         * ```
         */
        isSunBurnTick(arg0: $Predicate_<$LivingEntity>): $ModifyMobBuilder;
        /**
         * Sets a predicate to determine if the entity should be removed when far away from the player.
         * 
         * @param removeWhenFarAway A Function accepting a ContextUtils.EntityDistanceToPlayerContext parameter,
         *                          defining the condition for the entity to be removed when far away.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.removeWhenFarAway(context => {
         *     // Custom logic to determine if the entity should be removed when far away
         *     // Return true if the entity should be removed based on the provided context.
         * });
         * ```
         */
        removeWhenFarAway(arg0: $Predicate_<$ContextUtils$EntityDistanceToPlayerContext>): $ModifyMobBuilder;
        /**
         * Sets the function to determine whether the entity can hold an item.
         * 
         * @param canHoldItem A Function accepting a {@link ContextUtils.EntityItemStackContext} parameter,
         *                    defining the condition for the entity to hold an item.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canHoldItem(context => {
         *     // Custom logic to determine whether the entity can hold an item based on the provided context.
         *     return true;
         * });
         * ```
         */
        canHoldItem(arg0: $Predicate_<$ContextUtils$EntityItemStackContext>): $ModifyMobBuilder;
        /**
         * Sets the sound to play when the entity is ambient using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setAmbientSound("minecraft:entity.zombie.ambient");
         * ```
         */
        setAmbientSound(arg0: $Object): $ModifyMobBuilder;
        /**
         * Sets a consumer to handle the interaction with the entity.
         * The provided Consumer accepts a {@link ContextUtils.MobInteractContext} parameter,
         * representing the context of the interaction
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onMobInteract(context => {
         *     // Define custom logic for the interaction with the entity
         *     // Use information about the MobInteractContext provided by the context.
         *     if (context.player.isShiftKeyDown()) return
         *     context.player.startRiding(context.entity);
         * });
         * ```
         */
        onMobInteract(arg0: $Consumer_<$ContextUtils$MobInteractContext>): $ModifyMobBuilder;
        /**
         * Sets a function to determine if the entity can be leashed.
         * 
         * @param canBeLeashed A Function accepting a Mob parameter
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canBeLeashed(context => {
         *     return true // Return true if the entity can be leashed, false otherwise.
         * });
         * ```
         */
        canBeLeashed(arg0: $Predicate_<$Mob>): $ModifyMobBuilder;
        /**
         * Sets whether the entity should despawn in peaceful difficulty.
         * 
         * @param shouldDespawnInPeaceful A boolean indicating whether the entity should despawn in peaceful difficulty.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.shouldDespawnInPeaceful(true);
         * ```
         */
        shouldDespawnInPeaceful(arg0: boolean): $ModifyMobBuilder;
        /**
         * Sets whether persistence is required for the entity.
         * 
         * @param isPersistenceRequired A boolean indicating whether persistence is required.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isPersistenceRequired(true);
         * ```
         */
        isPersistenceRequired(arg0: boolean): $ModifyMobBuilder;
        /**
         * Sets a callback function to be executed when the entity performs an eating action.
         * 
         * @param ate A Consumer accepting a LivingEntity parameter,
         *            defining the behavior to be executed when the entity eats.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.ate(entity => {
         *     // Custom logic to handle the entity's eating action
         *     // Access information about the entity using the provided parameter.
         * });
         * ```
         */
        ate(arg0: $Consumer_<$LivingEntity>): $ModifyMobBuilder;
        /**
         * Sets a predicate function to determine whether the entity can take an item.
         * The provided Predicate accepts a {@link ContextUtils.EntityItemLevelContext} parameter,
         * representing the context of the entity potentially taking an item.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canTakeItem(context => {
         *     // Define conditions for the entity to be able to take an item
         *     // Use information about the EntityItemLevelContext provided by the context.
         *     return // Some boolean condition indicating if the entity can take the item;
         * });
         * ```
         */
        canTakeItem(arg0: $Predicate_<$ContextUtils$EntityItemLevelContext>): $ModifyMobBuilder;
        /**
         * Sets the callback function to be executed when the entity ticks while leashed.
         * 
         * @param consumer A Consumer accepting a {@link ContextUtils.PlayerEntityContext} parameter,
         *                 defining the behavior to be executed when the entity ticks while leashed.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.tickLeash(context => {
         *     // Custom logic to handle the entity's behavior while leashed.
         *     // Access information about the player and entity using the provided context.
         * });
         * ```
         */
        tickLeash(arg0: $Consumer_<$ContextUtils$PlayerEntityContext>): $ModifyMobBuilder;
        /**
         * @param getAttackBoundingBox A Function accepting a {@link Mob} parameter,
         *                           defining the bounding box to check for target intersection attacks.
         *                           Returns an 'AABB' value representing the melee attack range.
         * Example usage:
         * ```javascript
         * modifyBuilder.getAttackBoundingBox(entity => {
         *     // Custom logic to calculate the squared melee attack range based on the provided mob.
         *     return entity;
         * });
         * ```
         */
        getAttackBoundingBox(arg0: $Function_<$Mob, $Object>): $ModifyMobBuilder;
        /**
         * Sets the interval in ticks between ambient sounds for the mob entity.
         * 
         * @param ambientSoundInterval The interval in ticks between ambient sounds.
         * Defaults to 120.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.ambientSoundInterval(100);
         * ```
         */
        ambientSoundInterval(arg0: number): $ModifyMobBuilder;
        entityType: $EntityType<never>;
        static builderMap: $Map<$EntityType<never>, $ModifyEntityBuilder>;
        constructor(arg0: $EntityType_<never>);
        set ambientSound(value: $Object);
    }
    export class $ModifyPathfinderMobBuilder extends $ModifyMobBuilder {
        /**
         * Sets the walk target value function for the entity.
         * 
         * @param function A Function accepting a {@link ContextUtils.EntityBlockPosLevelContext} parameter,
         *                 defining the walk target value based on the entity's interaction with a specific block.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.walkTargetValue(context => {
         *     // Custom logic to calculate the walk target value based on the provided context.
         *     // Access information about the block position and level using the provided context.
         *     return 10;
         * });
         * ```
         */
        walkTargetValue(arg0: $Function_<$ContextUtils$EntityBlockPosLevelContext, $Object>): $ModifyPathfinderMobBuilder;
        /**
         * Sets the follow leash speed for the entity.
         * 
         * @param speed The follow leash speed.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.followLeashSpeed(1.5);
         * ```
         */
        followLeashSpeed(arg0: number): $ModifyPathfinderMobBuilder;
        /**
         * Sets the function to determine whether the entity should stay close to its leash holder.
         * 
         * @param predicate A Function accepting a {@link Mob} parameter,
         *                  defining the condition for the entity to stay close to its leash holder.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.shouldStayCloseToLeashHolder(entity => {
         *     // Custom logic to determine whether the entity should stay close to its leash holder.
         *     return true;
         * });
         * ```
         */
        shouldStayCloseToLeashHolder(arg0: $Predicate_<$Mob>): $ModifyPathfinderMobBuilder;
        entityType: $EntityType<never>;
        static builderMap: $Map<$EntityType<never>, $ModifyEntityBuilder>;
        constructor(arg0: $EntityType_<never>);
    }
    export class $ModifyProjectileBuilder extends $ModifyEntityBuilder {
        /**
         * Sets a callback function to be executed when the projectile hits an entity.
         * The provided Consumer accepts a {@link ContextUtils.ProjectileEntityHitContext} parameter,
         * representing the context of the projectile's interaction with a specific entity.
         * 
         * Example usage:
         * ```javascript
         * projectileBuilder.onHitEntity(context -> {
         *     // Custom logic to handle the projectile hitting an entity.
         *     // Access information about the entity and projectile using the provided context.
         * });
         * ```
         */
        onHitEntity(arg0: $Consumer_<$ContextUtils$ProjectileEntityHitContext>): $ModifyProjectileBuilder;
        /**
         * Sets a function to determine if the projectile entity can hit a specific entity.
         * 
         * @param canHitEntity The predicate to check if the arrow can hit the entity.
         * 
         * Example usage:
         * ```javascript
         * projectileEntityBuilder.canHitEntity(entity -> {
         *     // Custom logic to determine if the projectile can hit the specified entity
         *     // Return true if the arrow can hit, false otherwise.
         * });
         * ```
         */
        canHitEntity(arg0: $Predicate_<$Entity>): $ModifyProjectileBuilder;
        /**
         * Sets a callback function to be executed when the projectile hits a block.
         * The provided Consumer accepts a {@link ContextUtils.ProjectileBlockHitContext} parameter,
         * representing the context of the projectile's interaction with a specific block.
         * 
         * Example usage:
         * ```javascript
         * projectileBuilder.onHitBlock(context -> {
         *     // Custom logic to handle the projectile hitting a block.
         *     // Access information about the block and projectile using the provided context.
         * });
         * ```
         */
        onHitBlock(arg0: $Consumer_<$ContextUtils$ProjectileBlockHitContext>): $ModifyProjectileBuilder;
        static builderMap: $Map<$EntityType<never>, $ModifyEntityBuilder>;
        entityType: $EntityType<never>;
        constructor(arg0: $EntityType_<never>);
    }
    export class $ModifyAgeableMobBuilder extends $ModifyPathfinderMobBuilder {
        entityType: $EntityType<never>;
        static builderMap: $Map<$EntityType<never>, $ModifyEntityBuilder>;
        constructor(arg0: $EntityType_<never>);
    }
    export class $ModifyAnimalBuilder extends $ModifyAgeableMobBuilder {
        entityType: $EntityType<never>;
        static builderMap: $Map<$EntityType<never>, $ModifyEntityBuilder>;
        constructor(arg0: $EntityType_<never>);
    }
    export class $ModifyTamableAnimalBuilder extends $ModifyAnimalBuilder {
        entityType: $EntityType<never>;
        static builderMap: $Map<$EntityType<never>, $ModifyEntityBuilder>;
        constructor(arg0: $EntityType_<never>);
    }
    export class $ModifyEntityBuilder implements $KubeEvent {
        /**
         * Sets a callback function to be executed when the entity performs a movement action.
         * The provided Consumer accepts a {@link ContextUtils.MovementContext} parameter,
         * representing the context of the entity's movement.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.move(context => {
         *     // Custom logic to handle the entity's movement action
         *     // Access information about the movement using the provided context.
         * });
         * ```
         */
        move(arg0: $Consumer_<$ContextUtils$MovementContext>): $ModifyEntityBuilder;
        /**
         * Sets a callback function to be executed on each tick for the entity.
         * 
         * @param tick A Consumer accepting a {@link Entity} parameter, defining the behavior to be executed on each tick.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.tick(entity => {
         *     // Custom logic to be executed on each tick of the entity.
         *     // Access information about the entity using the provided parameter.
         * });
         * ```
         */
        tick(arg0: $Consumer_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity can change dimensions.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may attempt to change dimensions.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canChangeDimensions(entity => {
         *     // Define the conditions for the entity to be able to change dimensions
         *     // Use information about the Entity provided by the context.
         *     return false // Some boolean condition indicating if the entity can change dimensions;
         * });
         * ```
         */
        canChangeDimensions(arg0: $Predicate_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets a function to determine whether the entity should render at a squared distance.
         * 
         * @param shouldRenderAtSqrDistance Function accepting a {@link ContextUtils.EntitySqrDistanceContext} parameter,
         *                  defining the conditions under which the entity should render.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.shouldRenderAtSqrDistance(context => {
         *     // Custom logic to determine whether the entity should render
         *     // Access information about the distance using the provided context.
         *     return true;
         * });
         * ```
         */
        shouldRenderAtSqrDistance(arg0: $Predicate_<$ContextUtils$EntitySqrDistanceContext>): $ModifyEntityBuilder;
        /**
         * Sets whether to reposition the entity after loading.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.repositionEntityAfterLoad(true);
         * ```
         */
        repositionEntityAfterLoad(arg0: boolean): $ModifyEntityBuilder;
        /**
         * Boolean determining if the entity is controlled by the first passenger
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.controlledByFirstPassenger(true)
         * ```
         */
        controlledByFirstPassenger(arg0: boolean): $ModifyEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity may interact with something.
         * The provided Predicate accepts a {@link ContextUtils.MayInteractContext} parameter,
         * representing the context of the potential interaction, and returns a boolean.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.mayInteract(context => {
         *     // Define conditions for the entity to be allowed to interact
         *     // Use information about the MayInteractContext provided by the context.
         *     return false // Some boolean condition indicating if the entity may interact;
         * });
         * ```
         */
        mayInteract(arg0: $Predicate_<$ContextUtils$EMayInteractContext>): $ModifyEntityBuilder;
        /**
         * Sets whether an entity should ignore explosions.
         * The provided function should return a truthy value (e.g., true) to ignore explosion effects.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.ignoreExplosion(entity => {
         *     // Ignore explosions only for entities named "BoomProof"
         *     return entity.name?.getString() == "BoomProof";
         * });
         * ```
         */
        ignoreExplosion(arg0: $Function_<$Entity, $Object>): $ModifyEntityBuilder;
        defineSyncedData(arg0: $Consumer_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity stops riding.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that has stopped being ridden.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onStopRiding(entity => {
         *     // Define custom logic for handling when the entity stops being ridden
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onStopRiding(arg0: $Consumer_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity
         * collides with another entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onEntityCollision(context => {
         *     const { entity, target } = context
         *     console.log(entity)
         * });
         * ```
         */
        onEntityCollision(arg0: $Consumer_<$ContextUtils$CollidingProjectileEntityContext>): $ModifyEntityBuilder;
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
         */
        setSwimSplashSound(arg0: $Object): $ModifyEntityBuilder;
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
         */
        setSwimSound(arg0: $Object): $ModifyEntityBuilder;
        /**
         * Sets the minimum fall distance for the entity before taking damage.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setMaxFallDistance(entity => {
         *     // Define custom logic to determine the maximum fall distance
         *     // Use information about the Entity provided by the context.
         *     return 3;
         * });
         * ```
         */
        setMaxFallDistance(arg0: $Function_<$Entity, $Object>): $ModifyEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity is removed from the world.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being removed from the world.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onRemovedFromWorld(entity => {
         *     // Define custom logic for handling the removal of the entity from the world
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onRemovedFromWorld(arg0: $Consumer_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets the block jump factor for the entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setBlockJumpFactor(entity => {
         *     //Set the jump factor for the entity through context
         *     return 1 //some float value;
         * });
         * ```
         */
        setBlockJumpFactor(arg0: $Function_<$Entity, $Object>): $ModifyEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity is added to the world.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is added to the world.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onAddedToWorld(entity => {
         *     // Define custom logic for handling when the entity is added to the world
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onAddedToWorld(arg0: $Consumer_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets a function to determine the block speed factor of the entity.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose block speed factor is being determined.
         * It returns a Float representing the block speed factor.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.blockSpeedFactor(entity => {
         *     // Define logic to calculate and return the block speed factor for the entity
         *     // Use information about the Entity provided by the context.
         *     return // Some Float value representing the block speed factor;
         * });
         * ```
         */
        blockSpeedFactor(arg0: $Function_<$Entity, $Object>): $ModifyEntityBuilder;
        getEntityType(): $EntityType<never>;
        /**
         * Sets a callback function to be executed when the entity is removed on the client side.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being removed on the client side.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onClientRemoval(entity => {
         *     // Define custom logic for handling the removal of the entity on the client side
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onClientRemoval(arg0: $Consumer_<$Entity>): $ModifyEntityBuilder;
        /**
         * @param positionRider A consumer determining the position of rider/riders.
         * 
         *     Example usage:
         *     ```javascript
         *     modifyBuilder.positionRider(context => {
         *         const {entity, passenger, moveFunction} = context
         *     });
         *     ```
         */
        positionRider(arg0: $Consumer_<$ContextUtils$PositionRiderContext>): $ModifyEntityBuilder;
        /**
         * Sets a predicate to determine whether to show the vehicle health for the living entity.
         * 
         * @param predicate The predicate to determine whether to show the vehicle health.
         * 
         * The predicate should take a Entity as a parameter and return a boolean value indicating whether to show the vehicle health.
         * 
         * Example usage:
         * ```javascript
         * baseEntityBuilder.showVehicleHealth(entity => {
         *     // Determine whether to show the vehicle health for the living entity
         *     // Return true to show the vehicle health, false otherwise
         * });
         * ```
         */
        showVehicleHealth(arg0: $Predicate_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets a predicate to determine if a passenger can be added to the entity.
         * 
         * @param predicate The predicate to check if a passenger can be added.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canAddPassenger(context => {
         *     // Custom logic to determine if a passenger can be added to the entity
         *     return true;
         * });
         * ```
         */
        canAddPassenger(arg0: $Predicate_<$ContextUtils$EPassengerEntityContext>): $ModifyEntityBuilder;
        /**
         * Function determining if the entity may collide with another entity
         * using the ContextUtils.CollidingEntityContext which has this entity and the
         * one colliding with this entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canCollideWith(context => {
         *     return true //Some Boolean value determining whether the entity may collide with another
         * });
         * ```
         */
        canCollideWith(arg0: $Predicate_<$ContextUtils$ECollidingEntityContext>): $ModifyEntityBuilder;
        /**
         * Sets a predicate to determine whether the living entity dampens vibrations.
         * 
         * @param predicate The predicate to determine whether the living entity dampens vibrations.
         * 
         * The predicate should take a Entity as a parameter and return a boolean value indicating whether the living entity dampens vibrations.
         * 
         * Example usage:
         * ```javascript
         * baseEntityBuilder.dampensVibrations(entity => {
         *     // Determine whether the living entity dampens vibrations
         *     // Return true if the entity dampens vibrations, false otherwise
         * });
         * ```
         */
        dampensVibrations(arg0: $Predicate_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity is currently glowing.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be checked for its glowing state.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isCurrentlyGlowing(entity => {
         *     // Define the conditions to check if the entity is currently glowing
         *     // Use information about the Entity provided by the context.
         *     const isGlowing = // Some boolean condition to check if the entity is glowing;
         *     return isGlowing;
         * });
         * ```
         */
        isCurrentlyGlowing(arg0: $Predicate_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity is invulnerable to a specific type of damage.
         * The provided Predicate accepts a {@link ContextUtils.DamageContext} parameter,
         * representing the context of the damage, and returns a boolean indicating invulnerability.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isInvulnerableTo(context => {
         *     // Define conditions for the entity to be invulnerable to the specific type of damage
         *     // Use information about the DamageContext provided by the context.
         *     return true // Some boolean condition indicating if the entity has invulnerability to the damage type;
         * });
         * ```
         */
        isInvulnerableTo(arg0: $Predicate_<$ContextUtils$EDamageContext>): $ModifyEntityBuilder;
        /**
         * Sets a callback function to be executed when a player touches the entity.
         * The provided Consumer accepts a {@link ContextUtils.EntityPlayerContext} parameter,
         * representing the context of the player's interaction with the entity.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.playerTouch(context => {
         *     // Custom logic to handle the player's touch interaction with the entity
         *     // Access information about the interaction using the provided context.
         * });
         * ```
         */
        playerTouch(arg0: $Consumer_<$ContextUtils$EntityPlayerContext>): $ModifyEntityBuilder;
        /**
         * Sets whether the entity is attackable or not.
         * 
         * @param isAttackable Boolean value indicating whether the entity is attackable.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isAttackable(true);
         * ```
         */
        isAttackable(arg0: boolean): $ModifyEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity is hit by thunder.
         * The provided Consumer accepts a {@link ContextUtils.ThunderHitContext} parameter,
         * representing the context of the entity being hit by thunder.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.thunderHit(context => {
         *     // Define custom logic for handling the entity being hit by thunder
         *     // Use information about the ThunderHitContext provided by the context.
         * });
         * ```
         */
        thunderHit(arg0: $Consumer_<$ContextUtils$EThunderHitContext>): $ModifyEntityBuilder;
        /**
         * Sets a callback function to be executed during each tick when the entity is being ridden.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being ridden.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.rideTick(entity => {
         *     // Define custom logic for handling each tick when the entity is being ridden
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        rideTick(arg0: $Consumer_<$Entity>): $ModifyEntityBuilder;
        /**
         * Function determining if the entity is pickable.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isPickable(entity => {
         *     return true;
         * })
         * ```
         */
        isPickable(arg0: $Predicate_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity can undergo freezing.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be subjected to freezing.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canFreeze(entity => {
         *     // Define the conditions for the entity to be able to freeze
         *     // Use information about the Entity provided by the context.
         *     return true //someBoolean;
         * });
         * ```
         */
        canFreeze(arg0: $Predicate_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets whether the entity is pushable.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isPushable(true);
         * ```
         */
        isPushable(arg0: boolean): $ModifyEntityBuilder;
        /**
         * Sets a consumer to handle lerping (linear interpolation) of the entity's position.
         * 
         * @param lerpTo Consumer accepting a {@link ContextUtils.LerpToContext} parameter,
         *                 providing information and control over the lerping process.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.lerpTo(context => {
         *     // Custom logic for lerping the entity's position
         *     // Access information about the lerping process using the provided context.
         * });
         * ```
         */
        lerpTo(arg0: $Consumer_<$ContextUtils$LerpToContext>): $ModifyEntityBuilder;
        /**
         * Sets a predicate function to determine whether the entity can trample or step on something.
         * The provided Predicate accepts a {@link ContextUtils.CanTrampleContext} parameter,
         * representing the context of the potential trampling action, and returns a boolean.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.canTrample(context => {
         *     // Define conditions for the entity to be allowed to trample
         *     // Use information about the CanTrampleContext provided by the context.
         *     return false // Some boolean condition indicating if the entity can trample;
         * });
         * ```
         */
        canTrample(arg0: $Predicate_<$ContextUtils$ECanTrampleContext>): $ModifyEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity is hurt by lava.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is affected by lava.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.lavaHurt(entity => {
         *     // Define custom logic for handling the entity being hurt by lava
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        lavaHurt(arg0: $Consumer_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity performs a flap action.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is flapping.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onFlap(entity => {
         *     // Define custom logic for handling the entity's flap action
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onFlap(arg0: $Consumer_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets a function to determine whether the entity is currently flapping.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose flapping status is being determined.
         * It returns a Boolean indicating whether the entity is flapping.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isFlapping(entity => {
         *     // Define logic to determine whether the entity is currently flapping
         *     // Use information about the Entity provided by the context.
         *     return // Some Boolean value indicating whether the entity is flapping;
         * });
         * ```
         */
        isFlapping(arg0: $Predicate_<$Entity>): $ModifyEntityBuilder;
        /**
         * Defines in what condition the entity will start freezing.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.isFreezing(entity => {
         *     return true;
         * });
         * ```
         */
        isFreezing(arg0: $Predicate_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity falls and takes damage.
         * The provided Consumer accepts a {@link ContextUtils.EEntityFallDamageContext} parameter,
         * representing the context of the entity falling and taking fall damage.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onFall(context => {
         *     // Define custom logic for handling when the entity falls and takes damage
         *     // Use information about the EEntityFallDamageContext provided by the context.
         * });
         * ```
         */
        onFall(arg0: $Consumer_<$ContextUtils$EEntityFallDamageContext>): $ModifyEntityBuilder;
        /**
         * Sets a callback function to be executed when the entity starts sprinting.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that has started sprinting.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onSprint(entity => {
         *     // Define custom logic for handling when the entity starts sprinting
         *     // Use information about the Entity provided by the context.
         * });
         * ```
         */
        onSprint(arg0: $Consumer_<$Entity>): $ModifyEntityBuilder;
        /**
         * Sets a consumer to handle the interaction with the entity.
         * The provided Consumer accepts a {@link ContextUtils.EntityInteractContext} parameter,
         * representing the context of the interaction
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.onInteract(context => {
         *     const {entity,player,hand} = context
         * });
         * ```
         */
        onInteract(arg0: $Consumer_<$ContextUtils$EntityInteractContext>): $ModifyEntityBuilder;
        /**
         * Sets the RenderType of the entity, effectively capable of dynamically replacing texture locations.
         * Return null for the default render type.
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setRenderType(context => {
         *     // Sets the entity's texture to default Steve
         *     let DefaultPlayerSkin = Java.loadClass("net.minecraft.client.resources.DefaultPlayerSkin")
         *     let skin = DefaultPlayerSkin.getDefaultSkin();
         *     return RenderType.entityCutout(skin);
         * });
         * ```
         */
        setRenderType(arg0: $Function_<$ContextUtils$RendererModelContext, $Object>): $ModifyEntityBuilder;
        /**
         * Sets the Texture Location of the entity without modifying the RenderType logic.
         * Returns a ResourceLocation.
         * Return null for the default entity's location
         * 
         * Example usage:
         * ```javascript
         * modifyBuilder.setTextureLocation(context => {
         *     // Sets the entity's texture to default Steve
         *     let DefaultPlayerSkin = Java.loadClass("net.minecraft.client.resources.DefaultPlayerSkin")
         *     let skin = DefaultPlayerSkin.getDefaultSkin();
         *     return skin;
         * });
         * ```
         */
        setTextureLocation(arg0: $Function_<$ContextUtils$RendererModelContext, $Object>): $ModifyEntityBuilder;
        /**
         * Will output the entity type as well as the builder pertaining to the entity type 
         *  
         * Example usage: 
         * ```javascript
         * EntityJSEvents.modifyEntity(event => {
         *     event.modify("minecraft:zombie", builder => {
         *         console.log(builder.builderType())
         *     })
         * })
         * ```
         */
        builderType(): string;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        static builderMap: $Map<$EntityType<never>, $ModifyEntityBuilder>;
        entityType: $EntityType<never>;
        constructor(arg0: $EntityType_<never>);
        set swimSplashSound(value: $Object);
        set swimSound(value: $Object);
        set maxFallDistance(value: $Function_<$Entity, $Object>);
        set blockJumpFactor(value: $Function_<$Entity, $Object>);
        set renderType(value: $Function_<$ContextUtils$RendererModelContext, $Object>);
        set textureLocation(value: $Function_<$ContextUtils$RendererModelContext, $Object>);
    }
}
