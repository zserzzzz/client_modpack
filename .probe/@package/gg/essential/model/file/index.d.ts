import { $Molang } from "@package/gg/essential/model/molang";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $AnimationEvent } from "@package/gg/essential/cosmetics/events";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Side, $SoundCategory_, $Vector3, $SoundCategory, $Side_, $Channels } from "@package/gg/essential/model";
import { $Enum, $Object } from "@package/java/lang";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Unit, $Lazy } from "@package/kotlin";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";

declare module "@package/gg/essential/model/file" {
    export class $AnimationFile$Animation$Companion {
        serializer(): $KSerializer<$AnimationFile$Animation>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ParticlesFile {
        static copy$default(arg0: $ParticlesFile, arg1: string, arg2: $ParticlesFile$ParticleEffect, arg3: number, arg4: $Object): $ParticlesFile;
        copy(arg0: string, arg1: $ParticlesFile$ParticleEffect): $ParticlesFile;
        component2(): $ParticlesFile$ParticleEffect;
        static write$Self$cosmetics(arg0: $ParticlesFile, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        getParticleEffect(): $ParticlesFile$ParticleEffect;
        static getFormatVersion$annotations(): void;
        getFormatVersion(): string;
        static getParticleEffect$annotations(): void;
        static Companion: $ParticlesFile$Companion;
        constructor(arg0: string, arg1: $ParticlesFile$ParticleEffect);
        constructor(arg0: number, arg1: string, arg2: $ParticlesFile$ParticleEffect, arg3: $SerializationConstructorMarker);
        get particleEffect(): $ParticlesFile$ParticleEffect;
        static get formatVersion$annotations(): void;
        get formatVersion(): string;
        static get particleEffect$annotations(): void;
    }
    export class $ModelFile$Bone {
        component7(): $List<$ModelFile$Cube>;
        component6(): $Side;
        getSide(): $Side;
        static copy$default(arg0: $ModelFile$Bone, arg1: string, arg2: string, arg3: $Vector3, arg4: $Vector3, arg5: boolean, arg6: $Side_, arg7: $List_<any>, arg8: $Map_<any, any>, arg9: number, arg10: $Object): $ModelFile$Bone;
        getName(): string;
        getParent(): string;
        copy(arg0: string, arg1: string, arg2: $Vector3, arg3: $Vector3, arg4: boolean, arg5: $Side_, arg6: $List_<$ModelFile$Cube>, arg7: $Map_<string, $Vector3>): $ModelFile$Bone;
        component8(): $Map<string, $Vector3>;
        getRotation(): $Vector3;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        component2(): string;
        component3(): $Vector3;
        component4(): $Vector3;
        component5(): boolean;
        static write$Self$cosmetics(arg0: $ModelFile$Bone, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        getMirror(): boolean;
        component1(): string;
        getCubes(): $List<$ModelFile$Cube>;
        getPivot(): $Vector3;
        getLocators(): $Map<string, $Vector3>;
        static Companion: $ModelFile$Bone$Companion;
        constructor(arg0: string, arg1: string, arg2: $Vector3, arg3: $Vector3, arg4: boolean, arg5: $Side_, arg6: $List_<$ModelFile$Cube>, arg7: $Map_<string, $Vector3>);
        constructor(arg0: number, arg1: string, arg2: string, arg3: $Vector3, arg4: $Vector3, arg5: boolean, arg6: $Side_, arg7: $List_<any>, arg8: $Map_<any, any>, arg9: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: string, arg2: $Vector3, arg3: $Vector3, arg4: boolean, arg5: $Side_, arg6: $List_<any>, arg7: $Map_<any, any>, arg8: number, arg9: $DefaultConstructorMarker);
        get side(): $Side;
        get name(): string;
        get parent(): string;
        get rotation(): $Vector3;
        get mirror(): boolean;
        get cubes(): $List<$ModelFile$Cube>;
        get pivot(): $Vector3;
        get locators(): $Map<string, $Vector3>;
    }
    export class $ModelFile$Companion {
        serializer(): $KSerializer<$ModelFile>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $AnimationFile$Loop extends $Enum<$AnimationFile$Loop> {
        static values(): $AnimationFile$Loop[];
        static valueOf(arg0: string): $AnimationFile$Loop;
        static getEntries(): $EnumEntries<$AnimationFile$Loop>;
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static Companion: $AnimationFile$Loop$Companion;
        static HoldOnLastFrame: $AnimationFile$Loop;
        static True: $AnimationFile$Loop;
        static False: $AnimationFile$Loop;
        static get entries(): $EnumEntries<$AnimationFile$Loop>;
    }
    /**
     * Values that may be interpreted as {@link $AnimationFile$Loop}.
     */
    export type $AnimationFile$Loop_ = "false" | "true" | "holdonlastframe";
    export class $ParticlesFile$Description {
        static copy$default(arg0: $ParticlesFile$Description, arg1: string, arg2: $ParticlesFile$BasicRenderParameters, arg3: number, arg4: $Object): $ParticlesFile$Description;
        getIdentifier(): string;
        copy(arg0: string, arg1: $ParticlesFile$BasicRenderParameters): $ParticlesFile$Description;
        component2(): $ParticlesFile$BasicRenderParameters;
        static write$Self$cosmetics(arg0: $ParticlesFile$Description, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        getBasicRenderParameters(): $ParticlesFile$BasicRenderParameters;
        static getBasicRenderParameters$annotations(): void;
        static Companion: $ParticlesFile$Description$Companion;
        constructor(arg0: number, arg1: string, arg2: $ParticlesFile$BasicRenderParameters, arg3: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $ParticlesFile$BasicRenderParameters, arg2: number, arg3: $DefaultConstructorMarker);
        constructor(arg0: string, arg1: $ParticlesFile$BasicRenderParameters);
        get identifier(): string;
        get basicRenderParameters(): $ParticlesFile$BasicRenderParameters;
        static get basicRenderParameters$annotations(): void;
    }
    export class $ParticlesFile$Event {
        static copy$default(arg0: $ParticlesFile$Event, arg1: $List_<any>, arg2: $List_<any>, arg3: $ParticlesFile$Event$Particle, arg4: $ParticlesFile$Event$Sound, arg5: $Molang, arg6: number, arg7: $Object): $ParticlesFile$Event;
        getSequence(): $List<$ParticlesFile$Event>;
        copy(arg0: $List_<$ParticlesFile$Event>, arg1: $List_<$ParticlesFile$Event$RandomizeOption>, arg2: $ParticlesFile$Event$Particle, arg3: $ParticlesFile$Event$Sound, arg4: $Molang): $ParticlesFile$Event;
        getParticle(): $ParticlesFile$Event$Particle;
        getExpression(): $Molang;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        component2(): $List<$ParticlesFile$Event$RandomizeOption>;
        component3(): $ParticlesFile$Event$Particle;
        component4(): $ParticlesFile$Event$Sound;
        component5(): $Molang;
        static write$Self$cosmetics(arg0: $ParticlesFile$Event, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): $List<$ParticlesFile$Event>;
        getSound(): $ParticlesFile$Event$Sound;
        getRandomize(): $List<$ParticlesFile$Event$RandomizeOption>;
        static getParticle$annotations(): void;
        static getSound$annotations(): void;
        static Companion: $ParticlesFile$Event$Companion;
        constructor(arg0: number, arg1: $List_<any>, arg2: $List_<any>, arg3: $ParticlesFile$Event$Particle, arg4: $ParticlesFile$Event$Sound, arg5: $Molang, arg6: $SerializationConstructorMarker);
        constructor();
        constructor(arg0: $List_<any>, arg1: $List_<any>, arg2: $ParticlesFile$Event$Particle, arg3: $ParticlesFile$Event$Sound, arg4: $Molang, arg5: number, arg6: $DefaultConstructorMarker);
        constructor(arg0: $List_<$ParticlesFile$Event>, arg1: $List_<$ParticlesFile$Event$RandomizeOption>, arg2: $ParticlesFile$Event$Particle, arg3: $ParticlesFile$Event$Sound, arg4: $Molang);
        get sequence(): $List<$ParticlesFile$Event>;
        get particle(): $ParticlesFile$Event$Particle;
        get expression(): $Molang;
        get sound(): $ParticlesFile$Event$Sound;
        get randomize(): $List<$ParticlesFile$Event$RandomizeOption>;
        static get particle$annotations(): void;
        static get sound$annotations(): void;
    }
    export class $SoundDefinitionsFile$Definition$Companion {
        serializer(): $KSerializer<$SoundDefinitionsFile$Definition>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ParticlesFile$ParticleEffect {
        static copy$default(arg0: $ParticlesFile$ParticleEffect, arg1: $ParticlesFile$Description, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $ParticleEffectComponents, arg5: number, arg6: $Object): $ParticlesFile$ParticleEffect;
        getDescription(): $ParticlesFile$Description;
        copy(arg0: $ParticlesFile$Description, arg1: $Map_<string, $ParticlesFile$Curve>, arg2: $Map_<string, $ParticlesFile$Event>, arg3: $ParticleEffectComponents): $ParticlesFile$ParticleEffect;
        getEvents(): $Map<string, $ParticlesFile$Event>;
        getCurves(): $Map<string, $ParticlesFile$Curve>;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getComponents(): $ParticleEffectComponents;
        component2(): $Map<string, $ParticlesFile$Curve>;
        component3(): $Map<string, $ParticlesFile$Event>;
        component4(): $ParticleEffectComponents;
        static write$Self$cosmetics(arg0: $ParticlesFile$ParticleEffect, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): $ParticlesFile$Description;
        static Companion: $ParticlesFile$ParticleEffect$Companion;
        constructor(arg0: number, arg1: $ParticlesFile$Description, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $ParticleEffectComponents, arg5: $SerializationConstructorMarker);
        constructor(arg0: $ParticlesFile$Description, arg1: $Map_<any, any>, arg2: $Map_<any, any>, arg3: $ParticleEffectComponents, arg4: number, arg5: $DefaultConstructorMarker);
        constructor(arg0: $ParticlesFile$Description, arg1: $Map_<string, $ParticlesFile$Curve>, arg2: $Map_<string, $ParticlesFile$Event>, arg3: $ParticleEffectComponents);
        get description(): $ParticlesFile$Description;
        get events(): $Map<string, $ParticlesFile$Event>;
        get curves(): $Map<string, $ParticlesFile$Curve>;
        get components(): $ParticleEffectComponents;
    }
    export class $ParticlesFile$Material extends $Enum<$ParticlesFile$Material> {
        static values(): $ParticlesFile$Material[];
        static valueOf(arg0: string): $ParticlesFile$Material;
        static getEntries(): $EnumEntries<$ParticlesFile$Material>;
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        getNeedsSorting(): boolean;
        getBackfaceCulling(): boolean;
        static Companion: $ParticlesFile$Material$Companion;
        static Add: $ParticlesFile$Material;
        static Blend: $ParticlesFile$Material;
        static Cutout: $ParticlesFile$Material;
        static get entries(): $EnumEntries<$ParticlesFile$Material>;
        get needsSorting(): boolean;
        get backfaceCulling(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ParticlesFile$Material}.
     */
    export type $ParticlesFile$Material_ = "add" | "cutout" | "blend";
    export class $ModelFile$Geometry$Companion {
        serializer(): $KSerializer<$ModelFile$Geometry>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $SoundDefinitionsFile$Definition {
        static copy$default(arg0: $SoundDefinitionsFile$Definition, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<any>, arg6: number, arg7: $Object): $SoundDefinitionsFile$Definition;
        copy(arg0: $SoundCategory_, arg1: number, arg2: number, arg3: boolean, arg4: $List_<$SoundDefinitionsFile$Sound>): $SoundDefinitionsFile$Definition;
        getCategory(): $SoundCategory;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        component2(): number;
        component3(): number;
        component4(): boolean;
        component5(): $List<$SoundDefinitionsFile$Sound>;
        static write$Self$cosmetics(arg0: $SoundDefinitionsFile$Definition, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        getMaxDistance(): number;
        component1(): $SoundCategory;
        getMinDistance(): number;
        getFixedPosition(): boolean;
        getSounds(): $List<$SoundDefinitionsFile$Sound>;
        static getMinDistance$annotations(): void;
        static getMaxDistance$annotations(): void;
        static getFixedPosition$annotations(): void;
        static Companion: $SoundDefinitionsFile$Definition$Companion;
        constructor(arg0: number, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<any>, arg6: $SerializationConstructorMarker);
        constructor(arg0: $SoundCategory_, arg1: number, arg2: number, arg3: boolean, arg4: $List_<any>, arg5: number, arg6: $DefaultConstructorMarker);
        constructor(arg0: $SoundCategory_, arg1: number, arg2: number, arg3: boolean, arg4: $List_<$SoundDefinitionsFile$Sound>);
        get category(): $SoundCategory;
        get maxDistance(): number;
        get minDistance(): number;
        get fixedPosition(): boolean;
        get sounds(): $List<$SoundDefinitionsFile$Sound>;
        static get minDistance$annotations(): void;
        static get maxDistance$annotations(): void;
        static get fixedPosition$annotations(): void;
    }
    export class $SoundDefinitionsFile$Sound {
        component7(): boolean;
        component6(): boolean;
        getWeight(): number;
        static copy$default(arg0: $SoundDefinitionsFile$Sound, arg1: string, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: $Object): $SoundDefinitionsFile$Sound;
        getName(): string;
        copy(arg0: string, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number): $SoundDefinitionsFile$Sound;
        getStream(): boolean;
        component8(): number;
        component2(): boolean;
        component3(): boolean;
        component4(): number;
        component5(): number;
        static write$Self$cosmetics(arg0: $SoundDefinitionsFile$Sound, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        getPitch(): number;
        getVolume(): number;
        getLooping(): boolean;
        getDirectional(): boolean;
        getInterruptible(): boolean;
        static getDirectional$annotations(): void;
        static Companion: $SoundDefinitionsFile$Sound$Companion;
        constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number);
        constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number, arg8: number, arg9: $DefaultConstructorMarker);
        constructor(arg0: number, arg1: string, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: $SerializationConstructorMarker);
        get weight(): number;
        get name(): string;
        get stream(): boolean;
        get pitch(): number;
        get volume(): number;
        get looping(): boolean;
        get directional(): boolean;
        get interruptible(): boolean;
        static get directional$annotations(): void;
    }
    export class $ParticlesFile$Curve {
        static copy$default(arg0: $ParticlesFile$Curve, arg1: $ParticlesFile$Curve$Type, arg2: $List_<any>, arg3: $Molang, arg4: $Molang, arg5: number, arg6: $Object): $ParticlesFile$Curve;
        getInput(): $Molang;
        getType(): $ParticlesFile$Curve$Type;
        copy(arg0: $ParticlesFile$Curve$Type, arg1: $List_<$Molang>, arg2: $Molang, arg3: $Molang): $ParticlesFile$Curve;
        getNodes(): $List<$Molang>;
        getRange(): $Molang;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        component2(): $List<$Molang>;
        component3(): $Molang;
        component4(): $Molang;
        static write$Self$cosmetics(arg0: $ParticlesFile$Curve, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): $ParticlesFile$Curve$Type;
        static getRange$annotations(): void;
        static Companion: $ParticlesFile$Curve$Companion;
        constructor(arg0: $ParticlesFile$Curve$Type, arg1: $List_<$Molang>, arg2: $Molang, arg3: $Molang);
        constructor(arg0: number, arg1: $ParticlesFile$Curve$Type, arg2: $List_<any>, arg3: $Molang, arg4: $Molang, arg5: $SerializationConstructorMarker);
        constructor(arg0: $ParticlesFile$Curve$Type, arg1: $List_<any>, arg2: $Molang, arg3: $Molang, arg4: number, arg5: $DefaultConstructorMarker);
        get input(): $Molang;
        get type(): $ParticlesFile$Curve$Type;
        get nodes(): $List<$Molang>;
        get range(): $Molang;
        static get range$annotations(): void;
    }
    export class $ParticleEffectComponents {
        component7(): $ParticleEffectComponents$EmitterRateInstant;
        component6(): $ParticleEffectComponents$EmitterLifetimeExpression;
        component17(): $Molang;
        component14(): $ParticleEffectComponents$ParticleAppearanceBillboard;
        component16(): $Unit;
        component11(): $ParticleEffectComponents$EmitterShapeBox;
        component10(): $ParticleEffectComponents$EmitterShapeSphere;
        component12(): $ParticleEffectComponents$EmitterShapeDisc;
        component13(): $ParticleEffectComponents$ParticleLifetimeEvents;
        component15(): $ParticleEffectComponents$ParticleAppearanceTinting;
        static copy$default(arg0: $ParticleEffectComponents, arg1: $ParticleEffectComponents$EmitterLocalSpace, arg2: $ParticleEffectComponents$EmitterInitialization, arg3: $ParticleEffectComponents$EmitterLifetimeEvents, arg4: $ParticleEffectComponents$EmitterLifetimeLooping, arg5: $ParticleEffectComponents$EmitterLifetimeOnce, arg6: $ParticleEffectComponents$EmitterLifetimeExpression, arg7: $ParticleEffectComponents$EmitterRateInstant, arg8: $ParticleEffectComponents$EmitterRateSteady, arg9: $ParticleEffectComponents$EmitterShapePoint, arg10: $ParticleEffectComponents$EmitterShapeSphere, arg11: $ParticleEffectComponents$EmitterShapeBox, arg12: $ParticleEffectComponents$EmitterShapeDisc, arg13: $ParticleEffectComponents$ParticleLifetimeEvents, arg14: $ParticleEffectComponents$ParticleAppearanceBillboard, arg15: $ParticleEffectComponents$ParticleAppearanceTinting, arg16: $Unit, arg17: $Molang, arg18: $ParticleEffectComponents$ParticleInitialSpin, arg19: $ParticleEffectComponents$ParticleInitialization, arg20: $ParticleEffectComponents$ParticleMotionCollision, arg21: $ParticleEffectComponents$ParticleMotionDynamic, arg22: $ParticleEffectComponents$ParticleMotionParametric, arg23: $ParticleEffectComponents$ParticleLifetimeExpression, arg24: $ParticleEffectComponents$ParticleVisibility, arg25: number, arg26: $Object): $ParticleEffectComponents;
        copy(arg0: $ParticleEffectComponents$EmitterLocalSpace, arg1: $ParticleEffectComponents$EmitterInitialization, arg2: $ParticleEffectComponents$EmitterLifetimeEvents, arg3: $ParticleEffectComponents$EmitterLifetimeLooping, arg4: $ParticleEffectComponents$EmitterLifetimeOnce, arg5: $ParticleEffectComponents$EmitterLifetimeExpression, arg6: $ParticleEffectComponents$EmitterRateInstant, arg7: $ParticleEffectComponents$EmitterRateSteady, arg8: $ParticleEffectComponents$EmitterShapePoint, arg9: $ParticleEffectComponents$EmitterShapeSphere, arg10: $ParticleEffectComponents$EmitterShapeBox, arg11: $ParticleEffectComponents$EmitterShapeDisc, arg12: $ParticleEffectComponents$ParticleLifetimeEvents, arg13: $ParticleEffectComponents$ParticleAppearanceBillboard, arg14: $ParticleEffectComponents$ParticleAppearanceTinting, arg15: $Unit, arg16: $Molang, arg17: $ParticleEffectComponents$ParticleInitialSpin, arg18: $ParticleEffectComponents$ParticleInitialization, arg19: $ParticleEffectComponents$ParticleMotionCollision, arg20: $ParticleEffectComponents$ParticleMotionDynamic, arg21: $ParticleEffectComponents$ParticleMotionParametric, arg22: $ParticleEffectComponents$ParticleLifetimeExpression, arg23: $ParticleEffectComponents$ParticleVisibility): $ParticleEffectComponents;
        component8(): $ParticleEffectComponents$EmitterRateSteady;
        component9(): $ParticleEffectComponents$EmitterShapePoint;
        component2(): $ParticleEffectComponents$EmitterInitialization;
        component3(): $ParticleEffectComponents$EmitterLifetimeEvents;
        component4(): $ParticleEffectComponents$EmitterLifetimeLooping;
        component5(): $ParticleEffectComponents$EmitterLifetimeOnce;
        static write$Self$cosmetics(arg0: $ParticleEffectComponents, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): $ParticleEffectComponents$EmitterLocalSpace;
        getParticleAppearanceLighting(): $Unit;
        getParticleAppearanceBillboard(): $ParticleEffectComponents$ParticleAppearanceBillboard;
        getEmitterLifetimeExpression(): $ParticleEffectComponents$EmitterLifetimeExpression;
        getParticleLifetimeExpression(): $ParticleEffectComponents$ParticleLifetimeExpression;
        getParticleAppearanceTinting(): $ParticleEffectComponents$ParticleAppearanceTinting;
        getParticleMotionParametric(): $ParticleEffectComponents$ParticleMotionParametric;
        getEmitterRateSteady(): $ParticleEffectComponents$EmitterRateSteady;
        getEmitterShapeSphere(): $ParticleEffectComponents$EmitterShapeSphere;
        getParticleMotionCollision(): $ParticleEffectComponents$ParticleMotionCollision;
        getEmitterLifetimeOnce(): $ParticleEffectComponents$EmitterLifetimeOnce;
        getEmitterLifetimeLooping(): $ParticleEffectComponents$EmitterLifetimeLooping;
        getEmitterLifetimeEvents(): $ParticleEffectComponents$EmitterLifetimeEvents;
        getParticleMotionDynamic(): $ParticleEffectComponents$ParticleMotionDynamic;
        getParticleVisibility(): $ParticleEffectComponents$ParticleVisibility;
        getEmitterRateInstant(): $ParticleEffectComponents$EmitterRateInstant;
        getEmitterShapeDisc(): $ParticleEffectComponents$EmitterShapeDisc;
        getParticleLifetimeEvents(): $ParticleEffectComponents$ParticleLifetimeEvents;
        getParticleInitialSpin(): $ParticleEffectComponents$ParticleInitialSpin;
        getEmitterInitialization(): $ParticleEffectComponents$EmitterInitialization;
        getEmitterShapePoint(): $ParticleEffectComponents$EmitterShapePoint;
        getEmitterLocalSpace(): $ParticleEffectComponents$EmitterLocalSpace;
        getParticleInitialSpeed(): $Molang;
        getParticleInitialization(): $ParticleEffectComponents$ParticleInitialization;
        getEmitterShapeBox(): $ParticleEffectComponents$EmitterShapeBox;
        component18(): $ParticleEffectComponents$ParticleInitialSpin;
        component19(): $ParticleEffectComponents$ParticleInitialization;
        component20(): $ParticleEffectComponents$ParticleMotionCollision;
        component21(): $ParticleEffectComponents$ParticleMotionDynamic;
        component22(): $ParticleEffectComponents$ParticleMotionParametric;
        component24(): $ParticleEffectComponents$ParticleVisibility;
        component23(): $ParticleEffectComponents$ParticleLifetimeExpression;
        static getEmitterRateInstant$annotations(): void;
        static getEmitterLifetimeOnce$annotations(): void;
        static getEmitterShapeDisc$annotations(): void;
        static getParticleInitialSpin$annotations(): void;
        static getEmitterShapeBox$annotations(): void;
        static getEmitterLocalSpace$annotations(): void;
        static getEmitterShapeSphere$annotations(): void;
        static getEmitterRateSteady$annotations(): void;
        static getParticleVisibility$annotations(): void;
        static getEmitterShapePoint$annotations(): void;
        static getParticleAppearanceBillboard$annotations(): void;
        static getEmitterLifetimeEvents$annotations(): void;
        static getParticleMotionDynamic$annotations(): void;
        static getEmitterInitialization$annotations(): void;
        static getParticleInitialization$annotations(): void;
        static getParticleMotionParametric$annotations(): void;
        static getParticleAppearanceLighting$annotations(): void;
        static getParticleLifetimeEvents$annotations(): void;
        static getParticleMotionCollision$annotations(): void;
        static getParticleAppearanceTinting$annotations(): void;
        static getParticleInitialSpeed$annotations(): void;
        static getParticleLifetimeExpression$annotations(): void;
        static getEmitterLifetimeLooping$annotations(): void;
        static getEmitterLifetimeExpression$annotations(): void;
        static Companion: $ParticleEffectComponents$Companion;
        constructor(arg0: $ParticleEffectComponents$EmitterLocalSpace, arg1: $ParticleEffectComponents$EmitterInitialization, arg2: $ParticleEffectComponents$EmitterLifetimeEvents, arg3: $ParticleEffectComponents$EmitterLifetimeLooping, arg4: $ParticleEffectComponents$EmitterLifetimeOnce, arg5: $ParticleEffectComponents$EmitterLifetimeExpression, arg6: $ParticleEffectComponents$EmitterRateInstant, arg7: $ParticleEffectComponents$EmitterRateSteady, arg8: $ParticleEffectComponents$EmitterShapePoint, arg9: $ParticleEffectComponents$EmitterShapeSphere, arg10: $ParticleEffectComponents$EmitterShapeBox, arg11: $ParticleEffectComponents$EmitterShapeDisc, arg12: $ParticleEffectComponents$ParticleLifetimeEvents, arg13: $ParticleEffectComponents$ParticleAppearanceBillboard, arg14: $ParticleEffectComponents$ParticleAppearanceTinting, arg15: $Unit, arg16: $Molang, arg17: $ParticleEffectComponents$ParticleInitialSpin, arg18: $ParticleEffectComponents$ParticleInitialization, arg19: $ParticleEffectComponents$ParticleMotionCollision, arg20: $ParticleEffectComponents$ParticleMotionDynamic, arg21: $ParticleEffectComponents$ParticleMotionParametric, arg22: $ParticleEffectComponents$ParticleLifetimeExpression, arg23: $ParticleEffectComponents$ParticleVisibility, arg24: number, arg25: $DefaultConstructorMarker);
        constructor();
        constructor(arg0: number, arg1: $ParticleEffectComponents$EmitterLocalSpace, arg2: $ParticleEffectComponents$EmitterInitialization, arg3: $ParticleEffectComponents$EmitterLifetimeEvents, arg4: $ParticleEffectComponents$EmitterLifetimeLooping, arg5: $ParticleEffectComponents$EmitterLifetimeOnce, arg6: $ParticleEffectComponents$EmitterLifetimeExpression, arg7: $ParticleEffectComponents$EmitterRateInstant, arg8: $ParticleEffectComponents$EmitterRateSteady, arg9: $ParticleEffectComponents$EmitterShapePoint, arg10: $ParticleEffectComponents$EmitterShapeSphere, arg11: $ParticleEffectComponents$EmitterShapeBox, arg12: $ParticleEffectComponents$EmitterShapeDisc, arg13: $ParticleEffectComponents$ParticleLifetimeEvents, arg14: $ParticleEffectComponents$ParticleAppearanceBillboard, arg15: $ParticleEffectComponents$ParticleAppearanceTinting, arg16: $Unit, arg17: $Molang, arg18: $ParticleEffectComponents$ParticleInitialSpin, arg19: $ParticleEffectComponents$ParticleInitialization, arg20: $ParticleEffectComponents$ParticleMotionCollision, arg21: $ParticleEffectComponents$ParticleMotionDynamic, arg22: $ParticleEffectComponents$ParticleMotionParametric, arg23: $ParticleEffectComponents$ParticleLifetimeExpression, arg24: $ParticleEffectComponents$ParticleVisibility, arg25: $SerializationConstructorMarker);
        constructor(arg0: $ParticleEffectComponents$EmitterLocalSpace, arg1: $ParticleEffectComponents$EmitterInitialization, arg2: $ParticleEffectComponents$EmitterLifetimeEvents, arg3: $ParticleEffectComponents$EmitterLifetimeLooping, arg4: $ParticleEffectComponents$EmitterLifetimeOnce, arg5: $ParticleEffectComponents$EmitterLifetimeExpression, arg6: $ParticleEffectComponents$EmitterRateInstant, arg7: $ParticleEffectComponents$EmitterRateSteady, arg8: $ParticleEffectComponents$EmitterShapePoint, arg9: $ParticleEffectComponents$EmitterShapeSphere, arg10: $ParticleEffectComponents$EmitterShapeBox, arg11: $ParticleEffectComponents$EmitterShapeDisc, arg12: $ParticleEffectComponents$ParticleLifetimeEvents, arg13: $ParticleEffectComponents$ParticleAppearanceBillboard, arg14: $ParticleEffectComponents$ParticleAppearanceTinting, arg15: $Unit, arg16: $Molang, arg17: $ParticleEffectComponents$ParticleInitialSpin, arg18: $ParticleEffectComponents$ParticleInitialization, arg19: $ParticleEffectComponents$ParticleMotionCollision, arg20: $ParticleEffectComponents$ParticleMotionDynamic, arg21: $ParticleEffectComponents$ParticleMotionParametric, arg22: $ParticleEffectComponents$ParticleLifetimeExpression, arg23: $ParticleEffectComponents$ParticleVisibility);
        get particleAppearanceLighting(): $Unit;
        get particleAppearanceBillboard(): $ParticleEffectComponents$ParticleAppearanceBillboard;
        get emitterLifetimeExpression(): $ParticleEffectComponents$EmitterLifetimeExpression;
        get particleLifetimeExpression(): $ParticleEffectComponents$ParticleLifetimeExpression;
        get particleAppearanceTinting(): $ParticleEffectComponents$ParticleAppearanceTinting;
        get particleMotionParametric(): $ParticleEffectComponents$ParticleMotionParametric;
        get emitterRateSteady(): $ParticleEffectComponents$EmitterRateSteady;
        get emitterShapeSphere(): $ParticleEffectComponents$EmitterShapeSphere;
        get particleMotionCollision(): $ParticleEffectComponents$ParticleMotionCollision;
        get emitterLifetimeOnce(): $ParticleEffectComponents$EmitterLifetimeOnce;
        get emitterLifetimeLooping(): $ParticleEffectComponents$EmitterLifetimeLooping;
        get emitterLifetimeEvents(): $ParticleEffectComponents$EmitterLifetimeEvents;
        get particleMotionDynamic(): $ParticleEffectComponents$ParticleMotionDynamic;
        get particleVisibility(): $ParticleEffectComponents$ParticleVisibility;
        get emitterRateInstant(): $ParticleEffectComponents$EmitterRateInstant;
        get emitterShapeDisc(): $ParticleEffectComponents$EmitterShapeDisc;
        get particleLifetimeEvents(): $ParticleEffectComponents$ParticleLifetimeEvents;
        get particleInitialSpin(): $ParticleEffectComponents$ParticleInitialSpin;
        get emitterInitialization(): $ParticleEffectComponents$EmitterInitialization;
        get emitterShapePoint(): $ParticleEffectComponents$EmitterShapePoint;
        get emitterLocalSpace(): $ParticleEffectComponents$EmitterLocalSpace;
        get particleInitialSpeed(): $Molang;
        get particleInitialization(): $ParticleEffectComponents$ParticleInitialization;
        get emitterShapeBox(): $ParticleEffectComponents$EmitterShapeBox;
        static get emitterRateInstant$annotations(): void;
        static get emitterLifetimeOnce$annotations(): void;
        static get emitterShapeDisc$annotations(): void;
        static get particleInitialSpin$annotations(): void;
        static get emitterShapeBox$annotations(): void;
        static get emitterLocalSpace$annotations(): void;
        static get emitterShapeSphere$annotations(): void;
        static get emitterRateSteady$annotations(): void;
        static get particleVisibility$annotations(): void;
        static get emitterShapePoint$annotations(): void;
        static get particleAppearanceBillboard$annotations(): void;
        static get emitterLifetimeEvents$annotations(): void;
        static get particleMotionDynamic$annotations(): void;
        static get emitterInitialization$annotations(): void;
        static get particleInitialization$annotations(): void;
        static get particleMotionParametric$annotations(): void;
        static get particleAppearanceLighting$annotations(): void;
        static get particleLifetimeEvents$annotations(): void;
        static get particleMotionCollision$annotations(): void;
        static get particleAppearanceTinting$annotations(): void;
        static get particleInitialSpeed$annotations(): void;
        static get particleLifetimeExpression$annotations(): void;
        static get emitterLifetimeLooping$annotations(): void;
        static get emitterLifetimeExpression$annotations(): void;
    }
    export class $AnimationFile$Loop$Companion {
        serializer(): $KSerializer<$AnimationFile$Loop>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $AnimationFile {
        static copy$default(arg0: $AnimationFile, arg1: string, arg2: $Map_<any, any>, arg3: $List_<any>, arg4: number, arg5: $Object): $AnimationFile;
        copy(arg0: string, arg1: $Map_<string, $AnimationFile$Animation>, arg2: $List_<$AnimationEvent>): $AnimationFile;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        component2(): $Map<string, $AnimationFile$Animation>;
        component3(): $List<$AnimationEvent>;
        static write$Self$cosmetics(arg0: $AnimationFile, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        getTriggers(): $List<$AnimationEvent>;
        getAnimations(): $Map<string, $AnimationFile$Animation>;
        static getFormatVersion$annotations(): void;
        getFormatVersion(): string;
        static Companion: $AnimationFile$Companion;
        constructor(arg0: number, arg1: string, arg2: $Map_<any, any>, arg3: $List_<any>, arg4: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $Map_<string, $AnimationFile$Animation>, arg2: $List_<$AnimationEvent>);
        constructor(arg0: string, arg1: $Map_<any, any>, arg2: $List_<any>, arg3: number, arg4: $DefaultConstructorMarker);
        get triggers(): $List<$AnimationEvent>;
        get animations(): $Map<string, $AnimationFile$Animation>;
        static get formatVersion$annotations(): void;
        get formatVersion(): string;
    }
    export class $AnimationFile$Animation {
        static copy$default(arg0: $AnimationFile$Animation, arg1: $AnimationFile$Loop_, arg2: number, arg3: $Map_<any, any>, arg4: $Map_<any, any>, arg5: $Map_<any, any>, arg6: number, arg7: $Object): $AnimationFile$Animation;
        copy(arg0: $AnimationFile$Loop_, arg1: number, arg2: $Map_<string, $Channels>, arg3: $Map_<number, $List_<$AnimationFile$Animation$ParticleEffect>>, arg4: $Map_<number, $List_<$AnimationFile$Animation$SoundEffect>>): $AnimationFile$Animation;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        component2(): number;
        getLoop(): $AnimationFile$Loop;
        component3(): $Map<string, $Channels>;
        component4(): $Map<number, $List<$AnimationFile$Animation$ParticleEffect>>;
        component5(): $Map<number, $List<$AnimationFile$Animation$SoundEffect>>;
        static write$Self$cosmetics(arg0: $AnimationFile$Animation, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): $AnimationFile$Loop;
        getBones(): $Map<string, $Channels>;
        getAnimationLength(): number;
        static getParticleEffects$annotations(): void;
        static getAnimationLength$annotations(): void;
        static getSoundEffects$annotations(): void;
        getParticleEffects(): $Map<number, $List<$AnimationFile$Animation$ParticleEffect>>;
        getSoundEffects(): $Map<number, $List<$AnimationFile$Animation$SoundEffect>>;
        static Companion: $AnimationFile$Animation$Companion;
        constructor(arg0: number, arg1: $AnimationFile$Loop_, arg2: number, arg3: $Map_<any, any>, arg4: $Map_<any, any>, arg5: $Map_<any, any>, arg6: $SerializationConstructorMarker);
        constructor();
        constructor(arg0: $AnimationFile$Loop_, arg1: number, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $Map_<any, any>, arg5: number, arg6: $DefaultConstructorMarker);
        constructor(arg0: $AnimationFile$Loop_, arg1: number, arg2: $Map_<string, $Channels>, arg3: $Map_<number, $List_<$AnimationFile$Animation$ParticleEffect>>, arg4: $Map_<number, $List_<$AnimationFile$Animation$SoundEffect>>);
        get loop(): $AnimationFile$Loop;
        get bones(): $Map<string, $Channels>;
        get animationLength(): number;
        static get particleEffects$annotations(): void;
        static get animationLength$annotations(): void;
        static get soundEffects$annotations(): void;
        get particleEffects(): $Map<number, $List<$AnimationFile$Animation$ParticleEffect>>;
        get soundEffects(): $Map<number, $List<$AnimationFile$Animation$SoundEffect>>;
    }
    export class $ParticlesFile$ParticleEffect$Companion {
        serializer(): $KSerializer<$ParticlesFile$ParticleEffect>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $SoundDefinitionsFile {
        static copy$default(arg0: $SoundDefinitionsFile, arg1: $Map_<any, any>, arg2: number, arg3: $Object): $SoundDefinitionsFile;
        copy(arg0: $Map_<string, $SoundDefinitionsFile$Definition>): $SoundDefinitionsFile;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getDefinitions(): $Map<string, $SoundDefinitionsFile$Definition>;
        static write$Self$cosmetics(arg0: $SoundDefinitionsFile, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): $Map<string, $SoundDefinitionsFile$Definition>;
        static getDefinitions$annotations(): void;
        static Companion: $SoundDefinitionsFile$Companion;
        constructor(arg0: $Map_<string, $SoundDefinitionsFile$Definition>);
        constructor(arg0: number, arg1: $Map_<any, any>, arg2: $SerializationConstructorMarker);
        get definitions(): $Map<string, $SoundDefinitionsFile$Definition>;
        static get definitions$annotations(): void;
    }
    export class $ParticlesFile$Companion {
        serializer(): $KSerializer<$ParticlesFile>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ModelFile$Geometry {
        static copy$default(arg0: $ModelFile$Geometry, arg1: $ModelFile$Description, arg2: $List_<any>, arg3: number, arg4: $Object): $ModelFile$Geometry;
        getDescription(): $ModelFile$Description;
        copy(arg0: $ModelFile$Description, arg1: $List_<$ModelFile$Bone>): $ModelFile$Geometry;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        component2(): $List<$ModelFile$Bone>;
        static write$Self$cosmetics(arg0: $ModelFile$Geometry, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): $ModelFile$Description;
        getBones(): $List<$ModelFile$Bone>;
        static Companion: $ModelFile$Geometry$Companion;
        constructor(arg0: $ModelFile$Description, arg1: $List_<$ModelFile$Bone>);
        constructor(arg0: number, arg1: $ModelFile$Description, arg2: $List_<any>, arg3: $SerializationConstructorMarker);
        constructor(arg0: $ModelFile$Description, arg1: $List_<any>, arg2: number, arg3: $DefaultConstructorMarker);
        get description(): $ModelFile$Description;
        get bones(): $List<$ModelFile$Bone>;
    }
    export class $ParticlesFile$Material$Companion {
        serializer(): $KSerializer<$ParticlesFile$Material>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ModelFile$Description {
        component7(): $Vector3;
        component6(): number;
        static copy$default(arg0: $ModelFile$Description, arg1: string, arg2: number, arg3: number, arg4: boolean, arg5: number, arg6: number, arg7: $Vector3, arg8: number, arg9: $Object): $ModelFile$Description;
        getIdentifier(): string;
        copy(arg0: string, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number, arg6: $Vector3): $ModelFile$Description;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        component2(): number;
        component3(): number;
        component4(): boolean;
        component5(): number;
        static write$Self$cosmetics(arg0: $ModelFile$Description, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        getTextureHeight(): number;
        getTextureWidth(): number;
        static getVisibleBoundsWidth$annotations(): void;
        static getVisibleBoundsHeight$annotations(): void;
        static getTextureWidth$annotations(): void;
        static getVisibleBoundsOffset$annotations(): void;
        static getTextureTranslucent$annotations(): void;
        static getTextureHeight$annotations(): void;
        getTextureTranslucent(): boolean;
        getVisibleBoundsHeight(): number;
        getVisibleBoundsWidth(): number;
        getVisibleBoundsOffset(): $Vector3;
        static Companion: $ModelFile$Description$Companion;
        constructor(arg0: string, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number, arg6: $Vector3);
        constructor(arg0: number, arg1: string, arg2: number, arg3: number, arg4: boolean, arg5: number, arg6: number, arg7: $Vector3, arg8: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number, arg6: $Vector3, arg7: number, arg8: $DefaultConstructorMarker);
        get identifier(): string;
        get textureHeight(): number;
        get textureWidth(): number;
        static get visibleBoundsWidth$annotations(): void;
        static get visibleBoundsHeight$annotations(): void;
        static get textureWidth$annotations(): void;
        static get visibleBoundsOffset$annotations(): void;
        static get textureTranslucent$annotations(): void;
        static get textureHeight$annotations(): void;
        get textureTranslucent(): boolean;
        get visibleBoundsHeight(): number;
        get visibleBoundsWidth(): number;
        get visibleBoundsOffset(): $Vector3;
    }
    export class $SoundDefinitionsFile$Companion {
        serializer(): $KSerializer<$SoundDefinitionsFile>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ModelFile {
        static copy$default(arg0: $ModelFile, arg1: string, arg2: $List_<any>, arg3: number, arg4: $Object): $ModelFile;
        copy(arg0: string, arg1: $List_<$ModelFile$Geometry>): $ModelFile;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        component2(): $List<$ModelFile$Geometry>;
        static write$Self$cosmetics(arg0: $ModelFile, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        static getFormatVersion$annotations(): void;
        static getGeometries$annotations(): void;
        getGeometries(): $List<$ModelFile$Geometry>;
        getFormatVersion(): string;
        static Companion: $ModelFile$Companion;
        constructor(arg0: number, arg1: string, arg2: $List_<any>, arg3: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $List_<$ModelFile$Geometry>);
        constructor(arg0: string, arg1: $List_<any>, arg2: number, arg3: $DefaultConstructorMarker);
        static get formatVersion$annotations(): void;
        static get geometries$annotations(): void;
        get geometries(): $List<$ModelFile$Geometry>;
        get formatVersion(): string;
    }
    export class $AnimationFile$Animation$SoundEffect {
        static copy$default(arg0: $AnimationFile$Animation$SoundEffect, arg1: string, arg2: string, arg3: number, arg4: $Object): $AnimationFile$Animation$SoundEffect;
        copy(arg0: string, arg1: string): $AnimationFile$Animation$SoundEffect;
        getLocator(): string;
        component2(): string;
        static write$Self$cosmetics(arg0: $AnimationFile$Animation$SoundEffect, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        getEffect(): string;
        static Companion: $AnimationFile$Animation$SoundEffect$Companion;
        constructor(arg0: number, arg1: string, arg2: string, arg3: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: string);
        constructor(arg0: string, arg1: string, arg2: number, arg3: $DefaultConstructorMarker);
        get locator(): string;
        get effect(): string;
    }
    export class $AnimationFile$Animation$ParticleEffect {
        static copy$default(arg0: $AnimationFile$Animation$ParticleEffect, arg1: string, arg2: string, arg3: $Molang, arg4: number, arg5: $Object): $AnimationFile$Animation$ParticleEffect;
        copy(arg0: string, arg1: string, arg2: $Molang): $AnimationFile$Animation$ParticleEffect;
        getLocator(): string;
        component2(): string;
        component3(): $Molang;
        static write$Self$cosmetics(arg0: $AnimationFile$Animation$ParticleEffect, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        getEffect(): string;
        getPreEffectScript(): $Molang;
        static getPreEffectScript$annotations(): void;
        static Companion: $AnimationFile$Animation$ParticleEffect$Companion;
        constructor(arg0: number, arg1: string, arg2: string, arg3: $Molang, arg4: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: string, arg2: $Molang, arg3: number, arg4: $DefaultConstructorMarker);
        constructor(arg0: string, arg1: string, arg2: $Molang);
        get locator(): string;
        get effect(): string;
        get preEffectScript(): $Molang;
        static get preEffectScript$annotations(): void;
    }
    export class $AnimationFile$Companion {
        serializer(): $KSerializer<$AnimationFile>;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
