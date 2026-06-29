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
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setColor(arg0: $Vector4fc): void;
        setColor(arg0: $Colorc): void;
        setAdditive(arg0: boolean): void;
        isAdditive(): boolean;
        render(arg0: $QuasarParticle, arg1: number): void;
        getRenderPosition(): $Vector3dc;
        getRenderType(): $RenderType;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        getAlpha(): number;
        markDirty(): void;
        setGreen(arg0: number): void;
        setBlue(arg0: number): void;
        setRed(arg0: number): void;
        setAlpha(arg0: number): void;
        getAtlasSprite(): $TextureAtlasSprite;
        getSpriteData(): $SpriteData;
        getPackedLight(): number;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        setFixedPackedLight(arg0: number): void;
        getRenderAge(): number;
        getAgePercent(): number;
        getRenderRotation(): $Vector3fc;
        getRenderRadius(): number;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
        getFixedPackedLight(): number;
        getTrails(): $List<$Trail>;
        setSpriteData(arg0: $SpriteData_): void;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData_);
        get renderPosition(): $Vector3dc;
        get renderType(): $RenderType;
        get packedLight(): number;
        get renderRotation(): $Vector3fc;
        get renderRadius(): number;
        get trails(): $List<$Trail>;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        getAllModules(): $ParticleModule[];
        getCollisionModules(): $CollisionParticleModule[];
        getEnabledRenderModuleCount(): number;
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        updateEnabled(): void;
        getForceModules(): $ForceParticleModule[];
        getUpdateModules(): $UpdateParticleModule[];
        getInitModules(): $InitParticleModule[];
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        getRenderModules(): $RenderParticleModule[];
        get allModules(): $ParticleModule[];
        get collisionModules(): $CollisionParticleModule[];
        get enabledRenderModuleCount(): number;
        get enabledRenderModulesArray(): $RenderParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get initModules(): $InitParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get renderModules(): $RenderParticleModule[];
    }
    export class $ParticleModuleSet$Builder {
        build(): $ParticleModuleSet;
        addModule(arg0: $ParticleModule): void;
        constructor();
    }
    export class $QuasarParticle {
        getEmitter(): $ParticleEmitter;
        onRemove(): void;
        getModules(): $ParticleModuleSet;
        getRandomSource(): $RandomSource;
        getLifetime(): number;
        getPosition(): $Vector3d;
        remove(): void;
        init(): void;
        tick(): void;
        getLevel(): $ClientLevel;
        getData(): $QuasarParticleData;
        getSettings(): $ParticleSettings;
        getScheduler(): $TickTaskScheduler;
        isRemoved(): boolean;
        getEnvironment(): $MolangEnvironment;
        getAge(): number;
        render(arg0: number): void;
        getRotation(): $Vector3f;
        getVelocity(): $Vector3d;
        getRenderData(): $RenderData;
        setAge(arg0: number): void;
        getBoundingBox(): $AABB;
        getBlockPosition(): $BlockPos;
        getBlockStateInOrUnder(): $BlockState;
        setRadius(arg0: number): void;
        getRadius(): number;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get emitter(): $ParticleEmitter;
        get modules(): $ParticleModuleSet;
        get randomSource(): $RandomSource;
        get lifetime(): number;
        get position(): $Vector3d;
        get level(): $ClientLevel;
        get data(): $QuasarParticleData;
        get settings(): $ParticleSettings;
        get scheduler(): $TickTaskScheduler;
        get removed(): boolean;
        get environment(): $MolangEnvironment;
        get rotation(): $Vector3f;
        get velocity(): $Vector3d;
        get renderData(): $RenderData;
        get boundingBox(): $AABB;
        get blockPosition(): $BlockPos;
        get blockStateInOrUnder(): $BlockState;
    }
    export class $ParticleEmitter {
        getPosition(): $Vector3d;
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        getData(): $ParticleEmitterData;
        isRemoved(): boolean;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        setCount(arg0: number): void;
        setLoop(arg0: boolean): void;
        setParticleSettings(arg0: $ParticleSettings_): void;
        getParticleSettings(): $ParticleSettings;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        setPosition(arg0: $Vec3_): void;
        setPosition(arg0: $Vector3dc): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        getParticleCount(): number;
        getRegistryName(): $ResourceLocation;
        setForceSpawn(arg0: boolean): void;
        getMaxLifetime(): number;
        isForceSpawn(): boolean;
        setMaxLifetime(arg0: number): void;
        setAttachedEntity(arg0: $Entity): void;
        static clearErrors(): void;
        getAttachedEntity(): $Entity;
        addCodeModule(arg0: $CodeModule_): void;
        setParticleData(arg0: $QuasarParticleData_): void;
        getMaxParticles(): number;
        getParticleData(): $QuasarParticleData;
        setMaxParticles(arg0: number): void;
        getRate(): number;
        setRate(arg0: number): void;
        get data(): $ParticleEmitterData;
        get removed(): boolean;
        get particleCount(): number;
        get registryName(): $ResourceLocation;
    }
    export class $SpriteData extends $Record {
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        frameHeight(): number;
        sprite(): $ResourceLocation;
        v(arg0: number, arg1: number, arg2: number): number;
        u(arg0: number, arg1: number, arg2: number): number;
        frameWidth(): number;
        frameCount(): number;
        stretchToLifetime(): boolean;
        frameTime(): number;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpriteData}.
     */
    export type $SpriteData_ = { frameCount?: number, frameHeight?: number, frameTime?: number, sprite?: $ResourceLocation_, frameWidth?: number, stretchToLifetime?: boolean,  } | [frameCount?: number, frameHeight?: number, frameTime?: number, sprite?: $ResourceLocation_, frameWidth?: number, stretchToLifetime?: boolean, ];
}
