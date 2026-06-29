import { $Colorc } from "@package/foundry/veil/api/client/color";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MolangEnvironment } from "@package/gg/moonflower/molangcompiler/api";
import { $Camera } from "@package/net/minecraft/client";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos } from "@package/net/minecraft/core";
import { $TickTaskScheduler } from "@package/foundry/veil/api";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $Trail } from "@package/foundry/veil/api/quasar/fx";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CodeModule_ } from "@package/foundry/veil/api/quasar/data/module";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $QuasarParticleData_, $QuasarParticleData, $ParticleSettings, $ParticleSettings_, $EmitterShapeSettings, $ParticleEmitterData, $EmitterShapeSettings_ } from "@package/foundry/veil/api/quasar/data";
import { $Vector4fc, $Vector3dc, $Vector3d, $Vector3f, $Vector4f, $Vector3fc } from "@package/org/joml";
import { $ForceParticleModule, $ParticleModule, $CollisionParticleModule, $UpdateParticleModule, $InitParticleModule, $RenderParticleModule } from "@package/foundry/veil/api/quasar/emitters/module";

declare module "@package/foundry/veil/api/quasar/particle" {
    export class $RenderStyle {
        static CODEC: $Codec<$RenderStyle>;
    }
    export interface $RenderStyle {
        clear(): void;
        setup(arg0: number): boolean;
        render(arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number): void;
        getRenderType(arg0: $QuasarParticle, arg1: $RenderData): $RenderType;
        set up(value: number);
    }
    /**
     * Values that may be interpreted as {@link $RenderStyle}.
     */
    export type $RenderStyle_ = RegistryTypes.VeilQuasarRenderStyle | ((arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number) => void);
    export class $RenderData {
        tick(arg0: $QuasarParticle, arg1: number): void;
        setColor(arg0: $Colorc): void;
        setColor(arg0: $Vector4fc): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getPackedLight(): number;
        setAdditive(arg0: boolean): void;
        getRenderPosition(): $Vector3dc;
        isAdditive(): boolean;
        render(arg0: $QuasarParticle, arg1: number): void;
        getRenderType(): $RenderType;
        getBlue(): number;
        getRed(): number;
        getGreen(): number;
        getAlpha(): number;
        markDirty(): void;
        setAlpha(arg0: number): void;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        getRenderRotation(): $Vector3fc;
        getRenderAge(): number;
        getRenderRadius(): number;
        getAgePercent(): number;
        setFixedPackedLight(arg0: number): void;
        setBlue(arg0: number): void;
        setRed(arg0: number): void;
        setGreen(arg0: number): void;
        getAtlasSprite(): $TextureAtlasSprite;
        getSpriteData(): $SpriteData;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
        getTrails(): $List<$Trail>;
        getFixedPackedLight(): number;
        setSpriteData(arg0: $SpriteData_): void;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData_);
        get packedLight(): number;
        get renderPosition(): $Vector3dc;
        get renderType(): $RenderType;
        get renderRotation(): $Vector3fc;
        get renderRadius(): number;
        get trails(): $List<$Trail>;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        getAllModules(): $ParticleModule[];
        getCollisionModules(): $CollisionParticleModule[];
        getRenderModules(): $RenderParticleModule[];
        getEnabledRenderModuleCount(): number;
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        getForceModules(): $ForceParticleModule[];
        getUpdateModules(): $UpdateParticleModule[];
        updateEnabled(): void;
        getInitModules(): $InitParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get allModules(): $ParticleModule[];
        get collisionModules(): $CollisionParticleModule[];
        get renderModules(): $RenderParticleModule[];
        get enabledRenderModuleCount(): number;
        get enabledRenderModulesArray(): $RenderParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get initModules(): $InitParticleModule[];
    }
    export class $ParticleModuleSet$Builder {
        build(): $ParticleModuleSet;
        addModule(arg0: $ParticleModule): void;
        constructor();
    }
    export class $QuasarParticle {
        getModules(): $ParticleModuleSet;
        getPosition(): $Vector3d;
        remove(): void;
        init(): void;
        tick(): void;
        getLevel(): $ClientLevel;
        getData(): $QuasarParticleData;
        getLifetime(): number;
        getRandomSource(): $RandomSource;
        getEnvironment(): $MolangEnvironment;
        getAge(): number;
        getSettings(): $ParticleSettings;
        getBlockPosition(): $BlockPos;
        getVelocity(): $Vector3d;
        getScheduler(): $TickTaskScheduler;
        render(arg0: number): void;
        getBoundingBox(): $AABB;
        isRemoved(): boolean;
        setRadius(arg0: number): void;
        getEmitter(): $ParticleEmitter;
        getRadius(): number;
        onRemove(): void;
        getRotation(): $Vector3f;
        setAge(arg0: number): void;
        getRenderData(): $RenderData;
        getBlockStateInOrUnder(): $BlockState;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get modules(): $ParticleModuleSet;
        get position(): $Vector3d;
        get level(): $ClientLevel;
        get data(): $QuasarParticleData;
        get lifetime(): number;
        get randomSource(): $RandomSource;
        get environment(): $MolangEnvironment;
        get settings(): $ParticleSettings;
        get blockPosition(): $BlockPos;
        get velocity(): $Vector3d;
        get scheduler(): $TickTaskScheduler;
        get boundingBox(): $AABB;
        get removed(): boolean;
        get emitter(): $ParticleEmitter;
        get rotation(): $Vector3f;
        get renderData(): $RenderData;
        get blockStateInOrUnder(): $BlockState;
    }
    export class $ParticleEmitter {
        setCount(arg0: number): void;
        getPosition(): $Vector3d;
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        getData(): $ParticleEmitterData;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        isRemoved(): boolean;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        setPosition(arg0: $Vector3dc): void;
        setPosition(arg0: $Vec3_): void;
        getRegistryName(): $ResourceLocation;
        getParticleCount(): number;
        setLoop(arg0: boolean): void;
        setAttachedEntity(arg0: $Entity): void;
        getParticleData(): $QuasarParticleData;
        setForceSpawn(arg0: boolean): void;
        getAttachedEntity(): $Entity;
        getMaxLifetime(): number;
        setMaxLifetime(arg0: number): void;
        getMaxParticles(): number;
        setMaxParticles(arg0: number): void;
        setParticleData(arg0: $QuasarParticleData_): void;
        static clearErrors(): void;
        addCodeModule(arg0: $CodeModule_): void;
        isForceSpawn(): boolean;
        setParticleSettings(arg0: $ParticleSettings_): void;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        getParticleSettings(): $ParticleSettings;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        getRate(): number;
        setRate(arg0: number): void;
        get data(): $ParticleEmitterData;
        get removed(): boolean;
        get registryName(): $ResourceLocation;
        get particleCount(): number;
    }
    export class $SpriteData extends $Record {
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        v(arg0: number, arg1: number, arg2: number): number;
        u(arg0: number, arg1: number, arg2: number): number;
        frameWidth(): number;
        frameTime(): number;
        frameHeight(): number;
        frameCount(): number;
        sprite(): $ResourceLocation;
        stretchToLifetime(): boolean;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpriteData}.
     */
    export type $SpriteData_ = { frameWidth?: number, stretchToLifetime?: boolean, frameCount?: number, frameHeight?: number, frameTime?: number, sprite?: $ResourceLocation_,  } | [frameWidth?: number, stretchToLifetime?: boolean, frameCount?: number, frameHeight?: number, frameTime?: number, sprite?: $ResourceLocation_, ];
}
