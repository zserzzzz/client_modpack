import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $DataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $EntityType, $EntityType$EntityFactory, $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $CustomInstructionKeyframeData, $SoundKeyframeData, $KeyFrameData, $ParticleKeyframeData } from "@package/software/bernie/geckolib/animation/keyframe/event/data";
import { $SpawnEggItemBuilder } from "@package/net/liopyu/entityjs/item";
import { $List, $Map } from "@package/java/util";
import { $AnimationController$AnimationStateHandler, $AnimationState, $AnimationController, $Animation$LoopType_, $PlayState } from "@package/software/bernie/geckolib/animation";
import { $CustomGeoLayerJSBuilder } from "@package/net/liopyu/entityjs/client/living/model";
import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundKeyframeEvent, $CustomInstructionKeyframeEvent, $ParticleKeyframeEvent } from "@package/software/bernie/geckolib/animation/keyframe/event";
import { $Class, $Object } from "@package/java/lang";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $ContextUtils$ScaleModelRenderContext, $ContextUtils$RotLerpContext, $ContextUtils$RotationTowardsContext, $ContextUtils$SetWantedPositionContext, $ContextUtils$IsWalkableContext, $ContextUtils$StrafeContext, $ContextUtils$RenderContextCustom, $ContextUtils$RotationContext } from "@package/net/liopyu/entityjs/util";

declare module "@package/net/liopyu/entityjs/builders/misc" {
    export class $CustomEntityJSBuilder$ICustomInstructionListenerJS<E extends $LivingEntity> {
    }
    export interface $CustomEntityJSBuilder$ICustomInstructionListenerJS<E extends $LivingEntity> {
        executeInstruction(arg0: $CustomEntityJSBuilder$CustomInstructionKeyframeEventJS<E>): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomEntityJSBuilder$ICustomInstructionListenerJS}.
     */
    export type $CustomEntityJSBuilder$ICustomInstructionListenerJS_<E> = ((arg0: $CustomEntityJSBuilder$CustomInstructionKeyframeEventJS<E>) => void);
    export class $CustomEntityJSBuilder$IAnimationPredicateJS<E extends $LivingEntity> {
    }
    export interface $CustomEntityJSBuilder$IAnimationPredicateJS<E extends $LivingEntity> {
        /**
         * Determines if an animation should continue for a given AnimationEvent. Return true to continue the current animation
         * 
         * @param event The AnimationEvent, provides values that can be used to determine if the animation should continue or not
         */
        test(arg0: $CustomEntityJSBuilder$AnimationEventJS<E>): boolean;
        toGecko(): $AnimationController$AnimationStateHandler<E>;
    }
    /**
     * Values that may be interpreted as {@link $CustomEntityJSBuilder$IAnimationPredicateJS}.
     */
    export type $CustomEntityJSBuilder$IAnimationPredicateJS_<E> = ((arg0: $CustomEntityJSBuilder$AnimationEventJS<E>) => boolean);
    export class $JumpControlJSBuilder {
        jump(arg0: $Consumer_<$Mob>): $JumpControlJSBuilder;
        tick(arg0: $Consumer_<$Mob>): $JumpControlJSBuilder;
        constructor();
    }
    export class $MoveControlJSBuilder {
        tick(arg0: $Consumer_<$Mob>): $MoveControlJSBuilder;
        setWantedPosition(arg0: $Consumer_<$ContextUtils$SetWantedPositionContext>): $MoveControlJSBuilder;
        setSpeedModifier(arg0: $Function_<$Mob, $Object>): $MoveControlJSBuilder;
        setIsWalkable(arg0: $Function_<$ContextUtils$IsWalkableContext, $Object>): $MoveControlJSBuilder;
        setHasWanted(arg0: $Predicate_<$Mob>): $MoveControlJSBuilder;
        setStrafe(arg0: $Consumer_<$ContextUtils$StrafeContext>): $MoveControlJSBuilder;
        setRotlerp(arg0: $Function_<$ContextUtils$RotLerpContext, $Object>): $MoveControlJSBuilder;
        constructor();
        set wantedPosition(value: $Consumer_<$ContextUtils$SetWantedPositionContext>);
        set speedModifier(value: $Function_<$Mob, $Object>);
        set isWalkable(value: $Function_<$ContextUtils$IsWalkableContext, $Object>);
        set hasWanted(value: $Predicate_<$Mob>);
        set strafe(value: $Consumer_<$ContextUtils$StrafeContext>);
        set rotlerp(value: $Function_<$ContextUtils$RotLerpContext, $Object>);
    }
    export class $CustomEntityJSBuilder$KeyFrameEventJS<E extends $LivingEntity, B extends $KeyFrameData> {
        animationTick: number;
        controller: $AnimationController<E>;
        entity: E;
        keyframeData: B;
    }
    export class $CustomEntityJSBuilder extends $BuilderBase<$EntityType<never>> {
        /**
         * Sets the render type for the entity via a function.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", outlineEntityBoolean));
         * ```
         */
        renderType(arg0: $Function_<$LivingEntity, $RenderType>): $CustomEntityJSBuilder;
        factory(): $EntityType$EntityFactory<never>;
        /**
         * Defines logic to render the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.render(context => {
         *     // Define logic to render the entity
         *     context.poseStack.scale(0.5, 0.5, 0.5);
         * });
         * ```
         */
        render(arg0: $Consumer_<$ContextUtils$RenderContextCustom<never>>): $CustomEntityJSBuilder;
        /**
         * Sets a function to determine the texture resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the texture based on information about the entity.
         * The default behavior returns <namespace>:textures/entity/<path>.png.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.textureResource(entity => {
         *     // Define logic to determine the texture resource for the entity
         *     // Use information about the entity provided by the context.
         *     return "kubejs:textures/entity/wyrm.png" // Some ResourceLocation representing the texture resource;
         * });
         * ```
         */
        textureResource(arg0: $Function_<$LivingEntity, $Object>): $CustomEntityJSBuilder;
        /**
         * Sets the scale of the model.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.modelSize(2,2);
         * ```
         */
        modelSize(arg0: number, arg1: number): $CustomEntityJSBuilder;
        /**
         * Determines if the entity should serialize its data. Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.saves(false);
         * ```
         */
        saves(arg0: boolean): $CustomEntityJSBuilder;
        /**
         * Adds a new AnimationController to the entity, with the ability to add event listeners
         * 
         * @param name The name of the controller
         * @param translationTicksLength How many ticks it takes to transition between different animations
         * @param predicate The predicate for the controller, determines if an animation should continue or not
         * @param soundListener A sound listener, used to execute actions when the json requests a sound to play. May be null
         * @param particleListener A particle listener, used to execute actions when the json requests a particle. May be null
         * @param instructionListener A custom instruction listener, used to execute actions based on arbitrary instructions provided by the json. May be null
         */
        addKeyAnimationController(arg0: string, arg1: number, arg2: $CustomEntityJSBuilder$IAnimationPredicateJS_<any>, arg3: $CustomEntityJSBuilder$ISoundListenerJS_<any>, arg4: $CustomEntityJSBuilder$IParticleListenerJS_<any>, arg5: $CustomEntityJSBuilder$ICustomInstructionListenerJS_<any>): $CustomEntityJSBuilder;
        /**
         * Adds an animation controller to the entity with the specified parameters.
         * 
         * @param name The name of the animation controller.
         * @param translationTicksLength The length of translation ticks for the animation.
         * @param predicate The animation predicate defining the conditions for the animation to be played.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.addAnimationController('exampleController', 5, event => {
         *     // Define conditions for the animation to be played based on the entity.
         *     if (event.entity.hurtTime > 0) {
         *         event.thenLoop('spawn');
         *     } else {
         *         event.thenPlayAndHold('idle');
         *     }
         *     return true; // Some boolean condition indicating if the animation should be played;
         * });
         * ```
         */
        addAnimationController(arg0: string, arg1: number, arg2: $CustomEntityJSBuilder$IAnimationPredicateJS_<never>): $CustomEntityJSBuilder;
        /**
         * @param scaleModelForRender A Consumer to determing logic for model scaling and rendering
         *     without affecting core logic such as hitbox sizing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.scaleModelForRender(context => {
         *     const { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context
         *     poseStack.scale(0.5, 0.5, 0.5)
         * });
         * ```
         */
        scaleModelForRender(arg0: $Consumer_<$ContextUtils$ScaleModelRenderContext>): $CustomEntityJSBuilder;
        /**
         * Sets the client tracking range. Defaults to 5.
         * 
         * @param trackingRange The client tracking range.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.clientTrackingRange(8);
         * ```
         */
        clientTrackingRange(arg0: number): $CustomEntityJSBuilder;
        /**
         * Sets whether the entity can spawn far from the player.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canSpawnFarFromPlayer(true);
         * ```
         */
        canSpawnFarFromPlayer(arg0: boolean): $CustomEntityJSBuilder;
        /**
         * Sets the list of block names to which the entity is immune.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.immuneTo("minecraft:stone", "minecraft:dirt");
         * ```
         */
        immuneTo(...arg0: string[]): $CustomEntityJSBuilder;
        /**
         * Sets whether the entity is immune to fire damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.fireImmune(true);
         * ```
         */
        fireImmune(arg0: boolean): $CustomEntityJSBuilder;
        /**
         * Sets the hit box of the entity type.
         * 
         * @param width The width of the entity. Defaults to 0.5.
         * @param height The height of the entity. Defaults to 0.5.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.sized(1.0f, 1.5f);
         * ```
         */
        sized(arg0: number, arg1: number): $CustomEntityJSBuilder;
        /**
         * Sets the update interval in ticks of the entity.
         * Defaults to 1 tick.
         * 
         * @param updateInterval The update interval in ticks.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.updateInterval(5);
         * ```
         */
        updateInterval(arg0: number): $CustomEntityJSBuilder;
        /**
         * Sets a function to determine the animation resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the animations based on information about the entity.
         * The default behavior returns <namespace>:animations/<path>.animation.json.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.animationResource(entity => {
         *     // Define logic to determine the animation resource for the entity
         *     // Use information about the entity provided by the context.
         *     //return some ResourceLocation representing the animation resource;
         *     return "kubejs:animations/entity/wyrm.animation.json" // Some ResourceLocation representing the animation resource;
         * });
         * ```
         */
        animationResource(arg0: $Function_<$LivingEntity, $Object>): $CustomEntityJSBuilder;
        /**
         * Adds an extra render layer to the mob.
         * @param newGeoLayer The builder Consumer for the new render layer.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.newGeoLayer(builder => {
         *         builder.textureResource(entity => {
         *             return "kubejs:textures/entity/sasuke.png"
         *         })
         *     });
         *     ```
         */
        newGeoLayer(arg0: $Consumer_<$CustomGeoLayerJSBuilder<$LivingEntity>>): $CustomEntityJSBuilder;
        /**
         * Adds an extra glowing render layer to the mob.
         * @param newGlowingGeoLayer The builder Consumer for the new render layer.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.newGlowingGeoLayer(builder => {
         *         builder.textureResource(entity => {
         *             return "kubejs:textures/entity/sasuke.png"
         *         })
         *     });
         *     ```
         */
        newGlowingGeoLayer(arg0: $Consumer_<$CustomGeoLayerJSBuilder<$LivingEntity>>): $CustomEntityJSBuilder;
        /**
         * Sets a function to determine the model resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the model based on information about the entity.
         * The default behavior returns <namespace>:geo/entity/<path>.geo.json.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.modelResource(entity => {
         *     // Define logic to determine the model resource for the entity
         *     // Use information about the entity provided by the context.
         *     return "kubejs:geo/entity/wyrm.geo.json" // Some ResourceLocation representing the model resource;
         * });
         * ```
         */
        modelResource(arg0: $Function_<$LivingEntity, $Object>): $CustomEntityJSBuilder;
        /**
         * Sets the mob category for the entity.
         * Available options: 'monster', 'creature', 'ambient', 'water_creature', 'misc'.
         * Defaults to 'misc'.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mobCategory('monster');
         * ```
         */
        mobCategory(arg0: string): $CustomEntityJSBuilder;
        /**
         * Sets whether the entity is summonable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSummonable(true);
         * ```
         */
        setSummonable(arg0: boolean): $CustomEntityJSBuilder;
        /**
         * Sets the render type for the entity.
         * 
         * @param type The render type to be set. Acceptable values are:
         *              - "solid
         *              - "cutout"
         *              - "translucent"
         *              - RenderType.SOLID
         *              - RenderType.CUTOUT
         *              - RenderType.TRANSLUCENT
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setRenderType("translucent");
         * ```
         */
        setRenderType(arg0: $Object): $CustomEntityJSBuilder;
        /**
         * Adds a triggerable AnimationController to the entity callable off the entity's methods anywhere.
         * 
         * @param name The name of the controller
         * @param translationTicksLength How many ticks it takes to transition between different animations
         * @param triggerableAnimationID The unique identifier of the triggerable animation(sets it apart from other triggerable animations)
         * @param triggerableAnimationName The name of the animation defined in the animations.json
         * @param loopType The loop type for the triggerable animation, either 'LOOP' or 'PLAY_ONCE' or 'HOLD_ON_LAST_FRAME' or 'DEFAULT'
         */
        addTriggerableAnimationController(arg0: string, arg1: number, arg2: string, arg3: string, arg4: string): $CustomEntityJSBuilder;
        /**
         * Boolean determining if the entity will turn sideways on death.
         * Defaults to true.
         * Example usage:
         * ```javascript
         * entityBuilder.defaultDeathPose(false);
         * ```
         */
        defaultDeathPose(arg0: boolean): $CustomEntityJSBuilder;
        layerList: $List<$CustomGeoLayerJSBuilder<$LivingEntity>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        glowingLayerList: $List<$CustomGeoLayerJSBuilder<$LivingEntity>>;
        static thisList: $List<$CustomEntityJSBuilder>;
        registryKey: $ResourceKey<$Registry<$EntityType<never>>>;
        constructor(arg0: $ResourceLocation_);
        set summonable(value: boolean);
    }
    export class $LookControlJSBuilder {
        tick(arg0: $Consumer_<$Mob>): $LookControlJSBuilder;
        setWantedX(arg0: $Function_<$Mob, number>): $LookControlJSBuilder;
        setWantedY(arg0: $Function_<$Mob, number>): $LookControlJSBuilder;
        setWantedZ(arg0: $Function_<$Mob, number>): $LookControlJSBuilder;
        setLookAtCoords(arg0: $Consumer_<$Mob>): $LookControlJSBuilder;
        setLookAtEntity(arg0: $Consumer_<$Mob>): $LookControlJSBuilder;
        setLookAtVec3(arg0: $Consumer_<$Mob>): $LookControlJSBuilder;
        setLookAtEntityWithRotation(arg0: $Consumer_<$Mob>): $LookControlJSBuilder;
        setIsLookingAtTarget(arg0: $Predicate_<$Mob>): $LookControlJSBuilder;
        setClampHeadRotationToBody(arg0: $Consumer_<$Mob>): $LookControlJSBuilder;
        setRotateTowards(arg0: $Function_<$ContextUtils$RotationTowardsContext, $Object>): $LookControlJSBuilder;
        setResetXRotOnTick(arg0: $Predicate_<$Mob>): $LookControlJSBuilder;
        setYRotD(arg0: $Function_<$ContextUtils$RotationContext, $Object>): $LookControlJSBuilder;
        setXRotD(arg0: $Function_<$ContextUtils$RotationContext, $Object>): $LookControlJSBuilder;
        constructor();
        set wantedX(value: $Function_<$Mob, number>);
        set wantedY(value: $Function_<$Mob, number>);
        set wantedZ(value: $Function_<$Mob, number>);
        set lookAtCoords(value: $Consumer_<$Mob>);
        set lookAtEntity(value: $Consumer_<$Mob>);
        set lookAtVec3(value: $Consumer_<$Mob>);
        set lookAtEntityWithRotation(value: $Consumer_<$Mob>);
        set isLookingAtTarget(value: $Predicate_<$Mob>);
        set clampHeadRotationToBody(value: $Consumer_<$Mob>);
        set rotateTowards(value: $Function_<$ContextUtils$RotationTowardsContext, $Object>);
        set resetXRotOnTick(value: $Predicate_<$Mob>);
        set YRotD(value: $Function_<$ContextUtils$RotationContext, $Object>);
        set XRotD(value: $Function_<$ContextUtils$RotationContext, $Object>);
    }
    export class $CustomEntityJSBuilder$IParticleListenerJS<E extends $LivingEntity> {
    }
    export interface $CustomEntityJSBuilder$IParticleListenerJS<E extends $LivingEntity> {
        summonParticle(arg0: $CustomEntityJSBuilder$ParticleKeyFrameEventJS<E>): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomEntityJSBuilder$IParticleListenerJS}.
     */
    export type $CustomEntityJSBuilder$IParticleListenerJS_<E> = ((arg0: $CustomEntityJSBuilder$ParticleKeyFrameEventJS<E>) => void);
    export class $CustomEntityJSBuilder$CustomInstructionKeyframeEventJS<E extends $LivingEntity> extends $CustomEntityJSBuilder$KeyFrameEventJS<E, $CustomInstructionKeyframeData> {
        animationTick: number;
        instructions: string;
        controller: $AnimationController<E>;
        entity: E;
        keyframeData: $CustomInstructionKeyframeData;
        constructor(arg0: $CustomInstructionKeyframeEvent<E>);
    }
    export class $CustomEntityBuilder extends $CustomEntityJSBuilder {
        /**
         * Indicates that no egg item should be created for this entity type
         */
        noEggItem(): $CustomEntityBuilder;
        /**
         * Creates a spawn egg item for this entity type
         */
        eggItem(arg0: $Consumer_<$SpawnEggItemBuilder>): $CustomEntityBuilder;
        layerList: $List<$CustomGeoLayerJSBuilder<$LivingEntity>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        glowingLayerList: $List<$CustomGeoLayerJSBuilder<$LivingEntity>>;
        static thisList: $List<$CustomEntityJSBuilder>;
        registryKey: $ResourceKey<$Registry<$EntityType<never>>>;
        constructor(arg0: $ResourceLocation_, arg1: $Class<$LivingEntity>);
    }
    export class $CustomEntityJSBuilder$ISoundListenerJS<E extends $LivingEntity> {
    }
    export interface $CustomEntityJSBuilder$ISoundListenerJS<E extends $LivingEntity> {
        playSound(arg0: $CustomEntityJSBuilder$SoundKeyFrameEventJS<E>): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomEntityJSBuilder$ISoundListenerJS}.
     */
    export type $CustomEntityJSBuilder$ISoundListenerJS_<E> = ((arg0: $CustomEntityJSBuilder$SoundKeyFrameEventJS<E>) => void);
    export class $CustomEntityJSBuilder$ParticleKeyFrameEventJS<E extends $LivingEntity> extends $CustomEntityJSBuilder$KeyFrameEventJS<E, $ParticleKeyframeData> {
        animationTick: number;
        controller: $AnimationController<E>;
        effect: string;
        locator: string;
        script: string;
        entity: E;
        keyframeData: $ParticleKeyframeData;
        constructor(arg0: $ParticleKeyframeEvent<E>);
    }
    export class $CustomEntityJSBuilder$SoundKeyFrameEventJS<E extends $LivingEntity> extends $CustomEntityJSBuilder$KeyFrameEventJS<E, $SoundKeyframeData> {
        animationTick: number;
        controller: $AnimationController<E>;
        sound: string;
        entity: E;
        keyframeData: $SoundKeyframeData;
        constructor(arg0: $SoundKeyframeEvent<E>);
    }
    export class $CustomEntityJSBuilder$AnimationEventJS<E extends $LivingEntity> {
        /**
         * Returns the entity that is being animated
         */
        getEntity(): E;
        /**
         * Adds an animation to the current animation list
         */
        then(arg0: string, arg1: $Animation$LoopType_): $CustomEntityJSBuilder$AnimationEventJS<E>;
        /**
         * Returns the animation controller this event is part of
         */
        getController(): $AnimationController<E>;
        /**
         * If the entity is moving
         */
        isMoving(): boolean;
        /**
         * Returns a number, in the range [0, 1], how far through the tick it currently is
         */
        getPartialTick(): number;
        /**
         * Returns any extra data that the event may have
         * 
         * Usually used by armor animations to know what item is worn
         */
        getExtraData(): $Map<$DataTicket<never>, never>;
        getLimbSwing(): number;
        /**
         * Sets an animation to play in a loop
         */
        thenLoop(arg0: string): $PlayState;
        /**
         * Wait a certain amount of ticks before starting the next animation
         */
        thenWait(arg0: number): $PlayState;
        /**
         * Sets an animation to play defaulting to the animations.json file loop type
         */
        thenPlay(arg0: string): $PlayState;
        /**
         * Sets an animation to play and hold on the last frame
         */
        thenPlayAndHold(arg0: string): $PlayState;
        /**
         * Sets an animation to play an x amount of times
         */
        thenPlayXTimes(arg0: string, arg1: number): $PlayState;
        /**
         * Returns the number of ticks the entity has been animating for
         */
        getAnimationTick(): number;
        getLimbSwingAmount(): number;
        /**
         * Sets a triggerable animation with a specified loop type callable anywhere from the entity.
         * 
         * @param animationName The name of the animation to be triggered, this is the animation named in the json.
         * @param triggerableAnimationID The unique identifier for the triggerable animation.
         * @param loopTypeEnum The loop type for the triggerable animation. Accepts 'LOOP', 'PLAY_ONCE', 'HOLD_ON_LAST_FRAME', or 'DEFAULT'.
         * ```javascript
         *  event.addTriggerableAnimation('spawn', 'spawning', 'default')
         *  ```
         */
        addTriggerableAnimation(arg0: string, arg1: string, arg2: $Object): $PlayState;
        constructor(arg0: $AnimationState<E>);
        get entity(): E;
        get controller(): $AnimationController<E>;
        get moving(): boolean;
        get partialTick(): number;
        get extraData(): $Map<$DataTicket<never>, never>;
        get limbSwing(): number;
        get animationTick(): number;
        get limbSwingAmount(): number;
    }
}
