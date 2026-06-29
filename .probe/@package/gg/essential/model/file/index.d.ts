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
        copy(arg0: string, arg1: $ParticlesFile$ParticleEffect): $ParticlesFile;
        getFormatVersion(): string;
        static copy$default(arg0: $ParticlesFile, arg1: string, arg2: $ParticlesFile$ParticleEffect, arg3: number, arg4: $Object): $ParticlesFile;
        static write$Self$cosmetics(arg0: $ParticlesFile, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component2(): $ParticlesFile$ParticleEffect;
        component1(): string;
        static getFormatVersion$annotations(): void;
        getParticleEffect(): $ParticlesFile$ParticleEffect;
        static getParticleEffect$annotations(): void;
        static Companion: $ParticlesFile$Companion;
        constructor(arg0: string, arg1: $ParticlesFile$ParticleEffect);
        constructor(arg0: number, arg1: string, arg2: $ParticlesFile$ParticleEffect, arg3: $SerializationConstructorMarker);
        get formatVersion(): string;
        static get formatVersion$annotations(): void;
        get particleEffect(): $ParticlesFile$ParticleEffect;
        static get particleEffect$annotations(): void;
    }
    export class $ModelFile$Bone {
        getName(): string;
        getParent(): string;
        copy(arg0: string, arg1: string, arg2: $Vector3, arg3: $Vector3, arg4: boolean, arg5: $Side_, arg6: $List_<$ModelFile$Cube>, arg7: $Map_<string, $Vector3>): $ModelFile$Bone;
        getMirror(): boolean;
        static copy$default(arg0: $ModelFile$Bone, arg1: string, arg2: string, arg3: $Vector3, arg4: $Vector3, arg5: boolean, arg6: $Side_, arg7: $List_<any>, arg8: $Map_<any, any>, arg9: number, arg10: $Object): $ModelFile$Bone;
        component6(): $Side;
        component7(): $List<$ModelFile$Cube>;
        getSide(): $Side;
        component8(): $Map<string, $Vector3>;
        static write$Self$cosmetics(arg0: $ModelFile$Bone, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        getRotation(): $Vector3;
        component4(): $Vector3;
        component3(): $Vector3;
        component5(): boolean;
        component2(): string;
        component1(): string;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getCubes(): $List<$ModelFile$Cube>;
        getPivot(): $Vector3;
        getLocators(): $Map<string, $Vector3>;
        static Companion: $ModelFile$Bone$Companion;
        constructor(arg0: number, arg1: string, arg2: string, arg3: $Vector3, arg4: $Vector3, arg5: boolean, arg6: $Side_, arg7: $List_<any>, arg8: $Map_<any, any>, arg9: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: string, arg2: $Vector3, arg3: $Vector3, arg4: boolean, arg5: $Side_, arg6: $List_<$ModelFile$Cube>, arg7: $Map_<string, $Vector3>);
        constructor(arg0: string, arg1: string, arg2: $Vector3, arg3: $Vector3, arg4: boolean, arg5: $Side_, arg6: $List_<any>, arg7: $Map_<any, any>, arg8: number, arg9: $DefaultConstructorMarker);
        get name(): string;
        get parent(): string;
        get mirror(): boolean;
        get side(): $Side;
        get rotation(): $Vector3;
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
        getIdentifier(): string;
        copy(arg0: string, arg1: $ParticlesFile$BasicRenderParameters): $ParticlesFile$Description;
        static copy$default(arg0: $ParticlesFile$Description, arg1: string, arg2: $ParticlesFile$BasicRenderParameters, arg3: number, arg4: $Object): $ParticlesFile$Description;
        static write$Self$cosmetics(arg0: $ParticlesFile$Description, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component2(): $ParticlesFile$BasicRenderParameters;
        component1(): string;
        getBasicRenderParameters(): $ParticlesFile$BasicRenderParameters;
        static getBasicRenderParameters$annotations(): void;
        static Companion: $ParticlesFile$Description$Companion;
        constructor(arg0: number, arg1: string, arg2: $ParticlesFile$BasicRenderParameters, arg3: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $ParticlesFile$BasicRenderParameters);
        constructor(arg0: string, arg1: $ParticlesFile$BasicRenderParameters, arg2: number, arg3: $DefaultConstructorMarker);
        get identifier(): string;
        get basicRenderParameters(): $ParticlesFile$BasicRenderParameters;
        static get basicRenderParameters$annotations(): void;
    }
    export class $ParticlesFile$Event {
        copy(arg0: $List_<$ParticlesFile$Event>, arg1: $List_<$ParticlesFile$Event$RandomizeOption>, arg2: $ParticlesFile$Event$Particle, arg3: $ParticlesFile$Event$Sound, arg4: $Molang): $ParticlesFile$Event;
        getRandomize(): $List<$ParticlesFile$Event$RandomizeOption>;
        getSequence(): $List<$ParticlesFile$Event>;
        getExpression(): $Molang;
        static copy$default(arg0: $ParticlesFile$Event, arg1: $List_<any>, arg2: $List_<any>, arg3: $ParticlesFile$Event$Particle, arg4: $ParticlesFile$Event$Sound, arg5: $Molang, arg6: number, arg7: $Object): $ParticlesFile$Event;
        static write$Self$cosmetics(arg0: $ParticlesFile$Event, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component4(): $ParticlesFile$Event$Sound;
        component3(): $ParticlesFile$Event$Particle;
        component5(): $Molang;
        component2(): $List<$ParticlesFile$Event$RandomizeOption>;
        getParticle(): $ParticlesFile$Event$Particle;
        getSound(): $ParticlesFile$Event$Sound;
        component1(): $List<$ParticlesFile$Event>;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        static getSound$annotations(): void;
        static getParticle$annotations(): void;
        static Companion: $ParticlesFile$Event$Companion;
        constructor(arg0: number, arg1: $List_<any>, arg2: $List_<any>, arg3: $ParticlesFile$Event$Particle, arg4: $ParticlesFile$Event$Sound, arg5: $Molang, arg6: $SerializationConstructorMarker);
        constructor();
        constructor(arg0: $List_<any>, arg1: $List_<any>, arg2: $ParticlesFile$Event$Particle, arg3: $ParticlesFile$Event$Sound, arg4: $Molang, arg5: number, arg6: $DefaultConstructorMarker);
        constructor(arg0: $List_<$ParticlesFile$Event>, arg1: $List_<$ParticlesFile$Event$RandomizeOption>, arg2: $ParticlesFile$Event$Particle, arg3: $ParticlesFile$Event$Sound, arg4: $Molang);
        get randomize(): $List<$ParticlesFile$Event$RandomizeOption>;
        get sequence(): $List<$ParticlesFile$Event>;
        get expression(): $Molang;
        get particle(): $ParticlesFile$Event$Particle;
        get sound(): $ParticlesFile$Event$Sound;
        static get sound$annotations(): void;
        static get particle$annotations(): void;
    }
    export class $SoundDefinitionsFile$Definition$Companion {
        serializer(): $KSerializer<$SoundDefinitionsFile$Definition>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ParticlesFile$ParticleEffect {
        copy(arg0: $ParticlesFile$Description, arg1: $Map_<string, $ParticlesFile$Curve>, arg2: $Map_<string, $ParticlesFile$Event>, arg3: $ParticleEffectComponents): $ParticlesFile$ParticleEffect;
        getDescription(): $ParticlesFile$Description;
        getEvents(): $Map<string, $ParticlesFile$Event>;
        static copy$default(arg0: $ParticlesFile$ParticleEffect, arg1: $ParticlesFile$Description, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $ParticleEffectComponents, arg5: number, arg6: $Object): $ParticlesFile$ParticleEffect;
        getComponents(): $ParticleEffectComponents;
        static write$Self$cosmetics(arg0: $ParticlesFile$ParticleEffect, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component4(): $ParticleEffectComponents;
        component3(): $Map<string, $ParticlesFile$Event>;
        component2(): $Map<string, $ParticlesFile$Curve>;
        component1(): $ParticlesFile$Description;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getCurves(): $Map<string, $ParticlesFile$Curve>;
        static Companion: $ParticlesFile$ParticleEffect$Companion;
        constructor(arg0: number, arg1: $ParticlesFile$Description, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $ParticleEffectComponents, arg5: $SerializationConstructorMarker);
        constructor(arg0: $ParticlesFile$Description, arg1: $Map_<any, any>, arg2: $Map_<any, any>, arg3: $ParticleEffectComponents, arg4: number, arg5: $DefaultConstructorMarker);
        constructor(arg0: $ParticlesFile$Description, arg1: $Map_<string, $ParticlesFile$Curve>, arg2: $Map_<string, $ParticlesFile$Event>, arg3: $ParticleEffectComponents);
        get description(): $ParticlesFile$Description;
        get events(): $Map<string, $ParticlesFile$Event>;
        get components(): $ParticleEffectComponents;
        get curves(): $Map<string, $ParticlesFile$Curve>;
    }
    export class $ParticlesFile$Material extends $Enum<$ParticlesFile$Material> {
        static values(): $ParticlesFile$Material[];
        static valueOf(arg0: string): $ParticlesFile$Material;
        static getEntries(): $EnumEntries<$ParticlesFile$Material>;
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        getBackfaceCulling(): boolean;
        getNeedsSorting(): boolean;
        static Companion: $ParticlesFile$Material$Companion;
        static Add: $ParticlesFile$Material;
        static Blend: $ParticlesFile$Material;
        static Cutout: $ParticlesFile$Material;
        static get entries(): $EnumEntries<$ParticlesFile$Material>;
        get backfaceCulling(): boolean;
        get needsSorting(): boolean;
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
        copy(arg0: $SoundCategory_, arg1: number, arg2: number, arg3: boolean, arg4: $List_<$SoundDefinitionsFile$Sound>): $SoundDefinitionsFile$Definition;
        getCategory(): $SoundCategory;
        static copy$default(arg0: $SoundDefinitionsFile$Definition, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<any>, arg6: number, arg7: $Object): $SoundDefinitionsFile$Definition;
        static write$Self$cosmetics(arg0: $SoundDefinitionsFile$Definition, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component4(): boolean;
        component3(): number;
        component5(): $List<$SoundDefinitionsFile$Sound>;
        component2(): number;
        component1(): $SoundCategory;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        static getMinDistance$annotations(): void;
        static getMaxDistance$annotations(): void;
        getSounds(): $List<$SoundDefinitionsFile$Sound>;
        static getFixedPosition$annotations(): void;
        getMinDistance(): number;
        getFixedPosition(): boolean;
        getMaxDistance(): number;
        static Companion: $SoundDefinitionsFile$Definition$Companion;
        constructor(arg0: number, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<any>, arg6: $SerializationConstructorMarker);
        constructor(arg0: $SoundCategory_, arg1: number, arg2: number, arg3: boolean, arg4: $List_<any>, arg5: number, arg6: $DefaultConstructorMarker);
        constructor(arg0: $SoundCategory_, arg1: number, arg2: number, arg3: boolean, arg4: $List_<$SoundDefinitionsFile$Sound>);
        get category(): $SoundCategory;
        static get minDistance$annotations(): void;
        static get maxDistance$annotations(): void;
        get sounds(): $List<$SoundDefinitionsFile$Sound>;
        static get fixedPosition$annotations(): void;
        get minDistance(): number;
        get fixedPosition(): boolean;
        get maxDistance(): number;
    }
    export class $SoundDefinitionsFile$Sound {
        getName(): string;
        copy(arg0: string, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number): $SoundDefinitionsFile$Sound;
        getStream(): boolean;
        static copy$default(arg0: $SoundDefinitionsFile$Sound, arg1: string, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: $Object): $SoundDefinitionsFile$Sound;
        component6(): boolean;
        component7(): boolean;
        getWeight(): number;
        getPitch(): number;
        getVolume(): number;
        component8(): number;
        static write$Self$cosmetics(arg0: $SoundDefinitionsFile$Sound, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component4(): number;
        component3(): boolean;
        component5(): number;
        component2(): boolean;
        component1(): string;
        static getDirectional$annotations(): void;
        getLooping(): boolean;
        getInterruptible(): boolean;
        getDirectional(): boolean;
        static Companion: $SoundDefinitionsFile$Sound$Companion;
        constructor(arg0: number, arg1: string, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number);
        constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number, arg8: number, arg9: $DefaultConstructorMarker);
        get name(): string;
        get stream(): boolean;
        get weight(): number;
        get pitch(): number;
        get volume(): number;
        static get directional$annotations(): void;
        get looping(): boolean;
        get interruptible(): boolean;
        get directional(): boolean;
    }
    export class $ParticlesFile$Curve {
        getInput(): $Molang;
        getType(): $ParticlesFile$Curve$Type;
        copy(arg0: $ParticlesFile$Curve$Type, arg1: $List_<$Molang>, arg2: $Molang, arg3: $Molang): $ParticlesFile$Curve;
        static copy$default(arg0: $ParticlesFile$Curve, arg1: $ParticlesFile$Curve$Type, arg2: $List_<any>, arg3: $Molang, arg4: $Molang, arg5: number, arg6: $Object): $ParticlesFile$Curve;
        getRange(): $Molang;
        static write$Self$cosmetics(arg0: $ParticlesFile$Curve, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component4(): $Molang;
        component3(): $Molang;
        component2(): $List<$Molang>;
        getNodes(): $List<$Molang>;
        component1(): $ParticlesFile$Curve$Type;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        static getRange$annotations(): void;
        static Companion: $ParticlesFile$Curve$Companion;
        constructor(arg0: $ParticlesFile$Curve$Type, arg1: $List_<$Molang>, arg2: $Molang, arg3: $Molang);
        constructor(arg0: number, arg1: $ParticlesFile$Curve$Type, arg2: $List_<any>, arg3: $Molang, arg4: $Molang, arg5: $SerializationConstructorMarker);
        constructor(arg0: $ParticlesFile$Curve$Type, arg1: $List_<any>, arg2: $Molang, arg3: $Molang, arg4: number, arg5: $DefaultConstructorMarker);
        get input(): $Molang;
        get type(): $ParticlesFile$Curve$Type;
        get range(): $Molang;
        get nodes(): $List<$Molang>;
        static get range$annotations(): void;
    }
    export class $ParticleEffectComponents {
        copy(arg0: $ParticleEffectComponents$EmitterLocalSpace, arg1: $ParticleEffectComponents$EmitterInitialization, arg2: $ParticleEffectComponents$EmitterLifetimeEvents, arg3: $ParticleEffectComponents$EmitterLifetimeLooping, arg4: $ParticleEffectComponents$EmitterLifetimeOnce, arg5: $ParticleEffectComponents$EmitterLifetimeExpression, arg6: $ParticleEffectComponents$EmitterRateInstant, arg7: $ParticleEffectComponents$EmitterRateSteady, arg8: $ParticleEffectComponents$EmitterShapePoint, arg9: $ParticleEffectComponents$EmitterShapeSphere, arg10: $ParticleEffectComponents$EmitterShapeBox, arg11: $ParticleEffectComponents$EmitterShapeDisc, arg12: $ParticleEffectComponents$ParticleLifetimeEvents, arg13: $ParticleEffectComponents$ParticleAppearanceBillboard, arg14: $ParticleEffectComponents$ParticleAppearanceTinting, arg15: $Unit, arg16: $Molang, arg17: $ParticleEffectComponents$ParticleInitialSpin, arg18: $ParticleEffectComponents$ParticleInitialization, arg19: $ParticleEffectComponents$ParticleMotionCollision, arg20: $ParticleEffectComponents$ParticleMotionDynamic, arg21: $ParticleEffectComponents$ParticleMotionParametric, arg22: $ParticleEffectComponents$ParticleLifetimeExpression, arg23: $ParticleEffectComponents$ParticleVisibility): $ParticleEffectComponents;
        static copy$default(arg0: $ParticleEffectComponents, arg1: $ParticleEffectComponents$EmitterLocalSpace, arg2: $ParticleEffectComponents$EmitterInitialization, arg3: $ParticleEffectComponents$EmitterLifetimeEvents, arg4: $ParticleEffectComponents$EmitterLifetimeLooping, arg5: $ParticleEffectComponents$EmitterLifetimeOnce, arg6: $ParticleEffectComponents$EmitterLifetimeExpression, arg7: $ParticleEffectComponents$EmitterRateInstant, arg8: $ParticleEffectComponents$EmitterRateSteady, arg9: $ParticleEffectComponents$EmitterShapePoint, arg10: $ParticleEffectComponents$EmitterShapeSphere, arg11: $ParticleEffectComponents$EmitterShapeBox, arg12: $ParticleEffectComponents$EmitterShapeDisc, arg13: $ParticleEffectComponents$ParticleLifetimeEvents, arg14: $ParticleEffectComponents$ParticleAppearanceBillboard, arg15: $ParticleEffectComponents$ParticleAppearanceTinting, arg16: $Unit, arg17: $Molang, arg18: $ParticleEffectComponents$ParticleInitialSpin, arg19: $ParticleEffectComponents$ParticleInitialization, arg20: $ParticleEffectComponents$ParticleMotionCollision, arg21: $ParticleEffectComponents$ParticleMotionDynamic, arg22: $ParticleEffectComponents$ParticleMotionParametric, arg23: $ParticleEffectComponents$ParticleLifetimeExpression, arg24: $ParticleEffectComponents$ParticleVisibility, arg25: number, arg26: $Object): $ParticleEffectComponents;
        component6(): $ParticleEffectComponents$EmitterLifetimeExpression;
        component7(): $ParticleEffectComponents$EmitterRateInstant;
        component9(): $ParticleEffectComponents$EmitterShapePoint;
        component8(): $ParticleEffectComponents$EmitterRateSteady;
        static write$Self$cosmetics(arg0: $ParticleEffectComponents, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component4(): $ParticleEffectComponents$EmitterLifetimeLooping;
        component3(): $ParticleEffectComponents$EmitterLifetimeEvents;
        component5(): $ParticleEffectComponents$EmitterLifetimeOnce;
        component2(): $ParticleEffectComponents$EmitterInitialization;
        component10(): $ParticleEffectComponents$EmitterShapeSphere;
        component11(): $ParticleEffectComponents$EmitterShapeBox;
        component12(): $ParticleEffectComponents$EmitterShapeDisc;
        component13(): $ParticleEffectComponents$ParticleLifetimeEvents;
        component14(): $ParticleEffectComponents$ParticleAppearanceBillboard;
        component16(): $Unit;
        component15(): $ParticleEffectComponents$ParticleAppearanceTinting;
        component17(): $Molang;
        component1(): $ParticleEffectComponents$EmitterLocalSpace;
        getParticleAppearanceBillboard(): $ParticleEffectComponents$ParticleAppearanceBillboard;
        getEmitterLifetimeExpression(): $ParticleEffectComponents$EmitterLifetimeExpression;
        static getEmitterLocalSpace$annotations(): void;
        static getEmitterShapePoint$annotations(): void;
        static getEmitterShapeBox$annotations(): void;
        static getEmitterShapeSphere$annotations(): void;
        static getEmitterRateInstant$annotations(): void;
        static getEmitterShapeDisc$annotations(): void;
        getParticleAppearanceLighting(): $Unit;
        static getParticleInitialSpin$annotations(): void;
        getParticleMotionParametric(): $ParticleEffectComponents$ParticleMotionParametric;
        static getParticleVisibility$annotations(): void;
        static getEmitterLifetimeOnce$annotations(): void;
        static getEmitterRateSteady$annotations(): void;
        getParticleAppearanceTinting(): $ParticleEffectComponents$ParticleAppearanceTinting;
        getParticleLifetimeExpression(): $ParticleEffectComponents$ParticleLifetimeExpression;
        static getParticleAppearanceLighting$annotations(): void;
        static getParticleInitialSpeed$annotations(): void;
        static getParticleInitialization$annotations(): void;
        static getParticleMotionDynamic$annotations(): void;
        static getParticleLifetimeExpression$annotations(): void;
        static getParticleMotionParametric$annotations(): void;
        static getEmitterInitialization$annotations(): void;
        static getEmitterLifetimeEvents$annotations(): void;
        static getParticleLifetimeEvents$annotations(): void;
        static getParticleMotionCollision$annotations(): void;
        static getEmitterLifetimeExpression$annotations(): void;
        static getParticleAppearanceTinting$annotations(): void;
        static getEmitterLifetimeLooping$annotations(): void;
        static getParticleAppearanceBillboard$annotations(): void;
        getParticleMotionDynamic(): $ParticleEffectComponents$ParticleMotionDynamic;
        getParticleLifetimeEvents(): $ParticleEffectComponents$ParticleLifetimeEvents;
        getParticleInitialization(): $ParticleEffectComponents$ParticleInitialization;
        getParticleMotionCollision(): $ParticleEffectComponents$ParticleMotionCollision;
        getEmitterRateInstant(): $ParticleEffectComponents$EmitterRateInstant;
        getEmitterShapePoint(): $ParticleEffectComponents$EmitterShapePoint;
        getEmitterLifetimeLooping(): $ParticleEffectComponents$EmitterLifetimeLooping;
        getEmitterLifetimeOnce(): $ParticleEffectComponents$EmitterLifetimeOnce;
        getEmitterShapeSphere(): $ParticleEffectComponents$EmitterShapeSphere;
        getParticleVisibility(): $ParticleEffectComponents$ParticleVisibility;
        getParticleInitialSpin(): $ParticleEffectComponents$ParticleInitialSpin;
        getEmitterRateSteady(): $ParticleEffectComponents$EmitterRateSteady;
        getParticleInitialSpeed(): $Molang;
        getEmitterShapeDisc(): $ParticleEffectComponents$EmitterShapeDisc;
        getEmitterLifetimeEvents(): $ParticleEffectComponents$EmitterLifetimeEvents;
        getEmitterLocalSpace(): $ParticleEffectComponents$EmitterLocalSpace;
        getEmitterInitialization(): $ParticleEffectComponents$EmitterInitialization;
        component19(): $ParticleEffectComponents$ParticleInitialization;
        component21(): $ParticleEffectComponents$ParticleMotionDynamic;
        component24(): $ParticleEffectComponents$ParticleVisibility;
        component23(): $ParticleEffectComponents$ParticleLifetimeExpression;
        component20(): $ParticleEffectComponents$ParticleMotionCollision;
        component22(): $ParticleEffectComponents$ParticleMotionParametric;
        getEmitterShapeBox(): $ParticleEffectComponents$EmitterShapeBox;
        component18(): $ParticleEffectComponents$ParticleInitialSpin;
        static Companion: $ParticleEffectComponents$Companion;
        constructor(arg0: number, arg1: $ParticleEffectComponents$EmitterLocalSpace, arg2: $ParticleEffectComponents$EmitterInitialization, arg3: $ParticleEffectComponents$EmitterLifetimeEvents, arg4: $ParticleEffectComponents$EmitterLifetimeLooping, arg5: $ParticleEffectComponents$EmitterLifetimeOnce, arg6: $ParticleEffectComponents$EmitterLifetimeExpression, arg7: $ParticleEffectComponents$EmitterRateInstant, arg8: $ParticleEffectComponents$EmitterRateSteady, arg9: $ParticleEffectComponents$EmitterShapePoint, arg10: $ParticleEffectComponents$EmitterShapeSphere, arg11: $ParticleEffectComponents$EmitterShapeBox, arg12: $ParticleEffectComponents$EmitterShapeDisc, arg13: $ParticleEffectComponents$ParticleLifetimeEvents, arg14: $ParticleEffectComponents$ParticleAppearanceBillboard, arg15: $ParticleEffectComponents$ParticleAppearanceTinting, arg16: $Unit, arg17: $Molang, arg18: $ParticleEffectComponents$ParticleInitialSpin, arg19: $ParticleEffectComponents$ParticleInitialization, arg20: $ParticleEffectComponents$ParticleMotionCollision, arg21: $ParticleEffectComponents$ParticleMotionDynamic, arg22: $ParticleEffectComponents$ParticleMotionParametric, arg23: $ParticleEffectComponents$ParticleLifetimeExpression, arg24: $ParticleEffectComponents$ParticleVisibility, arg25: $SerializationConstructorMarker);
        constructor();
        constructor(arg0: $ParticleEffectComponents$EmitterLocalSpace, arg1: $ParticleEffectComponents$EmitterInitialization, arg2: $ParticleEffectComponents$EmitterLifetimeEvents, arg3: $ParticleEffectComponents$EmitterLifetimeLooping, arg4: $ParticleEffectComponents$EmitterLifetimeOnce, arg5: $ParticleEffectComponents$EmitterLifetimeExpression, arg6: $ParticleEffectComponents$EmitterRateInstant, arg7: $ParticleEffectComponents$EmitterRateSteady, arg8: $ParticleEffectComponents$EmitterShapePoint, arg9: $ParticleEffectComponents$EmitterShapeSphere, arg10: $ParticleEffectComponents$EmitterShapeBox, arg11: $ParticleEffectComponents$EmitterShapeDisc, arg12: $ParticleEffectComponents$ParticleLifetimeEvents, arg13: $ParticleEffectComponents$ParticleAppearanceBillboard, arg14: $ParticleEffectComponents$ParticleAppearanceTinting, arg15: $Unit, arg16: $Molang, arg17: $ParticleEffectComponents$ParticleInitialSpin, arg18: $ParticleEffectComponents$ParticleInitialization, arg19: $ParticleEffectComponents$ParticleMotionCollision, arg20: $ParticleEffectComponents$ParticleMotionDynamic, arg21: $ParticleEffectComponents$ParticleMotionParametric, arg22: $ParticleEffectComponents$ParticleLifetimeExpression, arg23: $ParticleEffectComponents$ParticleVisibility, arg24: number, arg25: $DefaultConstructorMarker);
        constructor(arg0: $ParticleEffectComponents$EmitterLocalSpace, arg1: $ParticleEffectComponents$EmitterInitialization, arg2: $ParticleEffectComponents$EmitterLifetimeEvents, arg3: $ParticleEffectComponents$EmitterLifetimeLooping, arg4: $ParticleEffectComponents$EmitterLifetimeOnce, arg5: $ParticleEffectComponents$EmitterLifetimeExpression, arg6: $ParticleEffectComponents$EmitterRateInstant, arg7: $ParticleEffectComponents$EmitterRateSteady, arg8: $ParticleEffectComponents$EmitterShapePoint, arg9: $ParticleEffectComponents$EmitterShapeSphere, arg10: $ParticleEffectComponents$EmitterShapeBox, arg11: $ParticleEffectComponents$EmitterShapeDisc, arg12: $ParticleEffectComponents$ParticleLifetimeEvents, arg13: $ParticleEffectComponents$ParticleAppearanceBillboard, arg14: $ParticleEffectComponents$ParticleAppearanceTinting, arg15: $Unit, arg16: $Molang, arg17: $ParticleEffectComponents$ParticleInitialSpin, arg18: $ParticleEffectComponents$ParticleInitialization, arg19: $ParticleEffectComponents$ParticleMotionCollision, arg20: $ParticleEffectComponents$ParticleMotionDynamic, arg21: $ParticleEffectComponents$ParticleMotionParametric, arg22: $ParticleEffectComponents$ParticleLifetimeExpression, arg23: $ParticleEffectComponents$ParticleVisibility);
        get particleAppearanceBillboard(): $ParticleEffectComponents$ParticleAppearanceBillboard;
        get emitterLifetimeExpression(): $ParticleEffectComponents$EmitterLifetimeExpression;
        static get emitterLocalSpace$annotations(): void;
        static get emitterShapePoint$annotations(): void;
        static get emitterShapeBox$annotations(): void;
        static get emitterShapeSphere$annotations(): void;
        static get emitterRateInstant$annotations(): void;
        static get emitterShapeDisc$annotations(): void;
        get particleAppearanceLighting(): $Unit;
        static get particleInitialSpin$annotations(): void;
        get particleMotionParametric(): $ParticleEffectComponents$ParticleMotionParametric;
        static get particleVisibility$annotations(): void;
        static get emitterLifetimeOnce$annotations(): void;
        static get emitterRateSteady$annotations(): void;
        get particleAppearanceTinting(): $ParticleEffectComponents$ParticleAppearanceTinting;
        get particleLifetimeExpression(): $ParticleEffectComponents$ParticleLifetimeExpression;
        static get particleAppearanceLighting$annotations(): void;
        static get particleInitialSpeed$annotations(): void;
        static get particleInitialization$annotations(): void;
        static get particleMotionDynamic$annotations(): void;
        static get particleLifetimeExpression$annotations(): void;
        static get particleMotionParametric$annotations(): void;
        static get emitterInitialization$annotations(): void;
        static get emitterLifetimeEvents$annotations(): void;
        static get particleLifetimeEvents$annotations(): void;
        static get particleMotionCollision$annotations(): void;
        static get emitterLifetimeExpression$annotations(): void;
        static get particleAppearanceTinting$annotations(): void;
        static get emitterLifetimeLooping$annotations(): void;
        static get particleAppearanceBillboard$annotations(): void;
        get particleMotionDynamic(): $ParticleEffectComponents$ParticleMotionDynamic;
        get particleLifetimeEvents(): $ParticleEffectComponents$ParticleLifetimeEvents;
        get particleInitialization(): $ParticleEffectComponents$ParticleInitialization;
        get particleMotionCollision(): $ParticleEffectComponents$ParticleMotionCollision;
        get emitterRateInstant(): $ParticleEffectComponents$EmitterRateInstant;
        get emitterShapePoint(): $ParticleEffectComponents$EmitterShapePoint;
        get emitterLifetimeLooping(): $ParticleEffectComponents$EmitterLifetimeLooping;
        get emitterLifetimeOnce(): $ParticleEffectComponents$EmitterLifetimeOnce;
        get emitterShapeSphere(): $ParticleEffectComponents$EmitterShapeSphere;
        get particleVisibility(): $ParticleEffectComponents$ParticleVisibility;
        get particleInitialSpin(): $ParticleEffectComponents$ParticleInitialSpin;
        get emitterRateSteady(): $ParticleEffectComponents$EmitterRateSteady;
        get particleInitialSpeed(): $Molang;
        get emitterShapeDisc(): $ParticleEffectComponents$EmitterShapeDisc;
        get emitterLifetimeEvents(): $ParticleEffectComponents$EmitterLifetimeEvents;
        get emitterLocalSpace(): $ParticleEffectComponents$EmitterLocalSpace;
        get emitterInitialization(): $ParticleEffectComponents$EmitterInitialization;
        get emitterShapeBox(): $ParticleEffectComponents$EmitterShapeBox;
    }
    export class $AnimationFile$Loop$Companion {
        serializer(): $KSerializer<$AnimationFile$Loop>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $AnimationFile {
        copy(arg0: string, arg1: $Map_<string, $AnimationFile$Animation>, arg2: $List_<$AnimationEvent>): $AnimationFile;
        getFormatVersion(): string;
        static copy$default(arg0: $AnimationFile, arg1: string, arg2: $Map_<any, any>, arg3: $List_<any>, arg4: number, arg5: $Object): $AnimationFile;
        static write$Self$cosmetics(arg0: $AnimationFile, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component3(): $List<$AnimationEvent>;
        component2(): $Map<string, $AnimationFile$Animation>;
        component1(): string;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getAnimations(): $Map<string, $AnimationFile$Animation>;
        static getFormatVersion$annotations(): void;
        getTriggers(): $List<$AnimationEvent>;
        static Companion: $AnimationFile$Companion;
        constructor(arg0: number, arg1: string, arg2: $Map_<any, any>, arg3: $List_<any>, arg4: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $Map_<any, any>, arg2: $List_<any>, arg3: number, arg4: $DefaultConstructorMarker);
        constructor(arg0: string, arg1: $Map_<string, $AnimationFile$Animation>, arg2: $List_<$AnimationEvent>);
        get formatVersion(): string;
        get animations(): $Map<string, $AnimationFile$Animation>;
        static get formatVersion$annotations(): void;
        get triggers(): $List<$AnimationEvent>;
    }
    export class $AnimationFile$Animation {
        copy(arg0: $AnimationFile$Loop_, arg1: number, arg2: $Map_<string, $Channels>, arg3: $Map_<number, $List_<$AnimationFile$Animation$ParticleEffect>>, arg4: $Map_<number, $List_<$AnimationFile$Animation$SoundEffect>>): $AnimationFile$Animation;
        static copy$default(arg0: $AnimationFile$Animation, arg1: $AnimationFile$Loop_, arg2: number, arg3: $Map_<any, any>, arg4: $Map_<any, any>, arg5: $Map_<any, any>, arg6: number, arg7: $Object): $AnimationFile$Animation;
        static write$Self$cosmetics(arg0: $AnimationFile$Animation, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component4(): $Map<number, $List<$AnimationFile$Animation$ParticleEffect>>;
        component3(): $Map<string, $Channels>;
        component5(): $Map<number, $List<$AnimationFile$Animation$SoundEffect>>;
        component2(): number;
        component1(): $AnimationFile$Loop;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getLoop(): $AnimationFile$Loop;
        static getSoundEffects$annotations(): void;
        static getParticleEffects$annotations(): void;
        static getAnimationLength$annotations(): void;
        getBones(): $Map<string, $Channels>;
        getParticleEffects(): $Map<number, $List<$AnimationFile$Animation$ParticleEffect>>;
        getAnimationLength(): number;
        getSoundEffects(): $Map<number, $List<$AnimationFile$Animation$SoundEffect>>;
        static Companion: $AnimationFile$Animation$Companion;
        constructor(arg0: number, arg1: $AnimationFile$Loop_, arg2: number, arg3: $Map_<any, any>, arg4: $Map_<any, any>, arg5: $Map_<any, any>, arg6: $SerializationConstructorMarker);
        constructor();
        constructor(arg0: $AnimationFile$Loop_, arg1: number, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $Map_<any, any>, arg5: number, arg6: $DefaultConstructorMarker);
        constructor(arg0: $AnimationFile$Loop_, arg1: number, arg2: $Map_<string, $Channels>, arg3: $Map_<number, $List_<$AnimationFile$Animation$ParticleEffect>>, arg4: $Map_<number, $List_<$AnimationFile$Animation$SoundEffect>>);
        get loop(): $AnimationFile$Loop;
        static get soundEffects$annotations(): void;
        static get particleEffects$annotations(): void;
        static get animationLength$annotations(): void;
        get bones(): $Map<string, $Channels>;
        get particleEffects(): $Map<number, $List<$AnimationFile$Animation$ParticleEffect>>;
        get animationLength(): number;
        get soundEffects(): $Map<number, $List<$AnimationFile$Animation$SoundEffect>>;
    }
    export class $ParticlesFile$ParticleEffect$Companion {
        serializer(): $KSerializer<$ParticlesFile$ParticleEffect>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $SoundDefinitionsFile {
        copy(arg0: $Map_<string, $SoundDefinitionsFile$Definition>): $SoundDefinitionsFile;
        static copy$default(arg0: $SoundDefinitionsFile, arg1: $Map_<any, any>, arg2: number, arg3: $Object): $SoundDefinitionsFile;
        getDefinitions(): $Map<string, $SoundDefinitionsFile$Definition>;
        static write$Self$cosmetics(arg0: $SoundDefinitionsFile, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): $Map<string, $SoundDefinitionsFile$Definition>;
        static access$get$childSerializers$cp(): $Lazy<any>[];
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
        copy(arg0: $ModelFile$Description, arg1: $List_<$ModelFile$Bone>): $ModelFile$Geometry;
        getDescription(): $ModelFile$Description;
        static copy$default(arg0: $ModelFile$Geometry, arg1: $ModelFile$Description, arg2: $List_<any>, arg3: number, arg4: $Object): $ModelFile$Geometry;
        static write$Self$cosmetics(arg0: $ModelFile$Geometry, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component2(): $List<$ModelFile$Bone>;
        component1(): $ModelFile$Description;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getBones(): $List<$ModelFile$Bone>;
        static Companion: $ModelFile$Geometry$Companion;
        constructor(arg0: number, arg1: $ModelFile$Description, arg2: $List_<any>, arg3: $SerializationConstructorMarker);
        constructor(arg0: $ModelFile$Description, arg1: $List_<any>, arg2: number, arg3: $DefaultConstructorMarker);
        constructor(arg0: $ModelFile$Description, arg1: $List_<$ModelFile$Bone>);
        get description(): $ModelFile$Description;
        get bones(): $List<$ModelFile$Bone>;
    }
    export class $ParticlesFile$Material$Companion {
        serializer(): $KSerializer<$ParticlesFile$Material>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ModelFile$Description {
        getIdentifier(): string;
        copy(arg0: string, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number, arg6: $Vector3): $ModelFile$Description;
        static copy$default(arg0: $ModelFile$Description, arg1: string, arg2: number, arg3: number, arg4: boolean, arg5: number, arg6: number, arg7: $Vector3, arg8: number, arg9: $Object): $ModelFile$Description;
        component6(): number;
        component7(): $Vector3;
        static write$Self$cosmetics(arg0: $ModelFile$Description, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component4(): boolean;
        component3(): number;
        component5(): number;
        component2(): number;
        component1(): string;
        getTextureTranslucent(): boolean;
        getVisibleBoundsWidth(): number;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getTextureWidth(): number;
        getTextureHeight(): number;
        static getTextureWidth$annotations(): void;
        static getTextureTranslucent$annotations(): void;
        static getVisibleBoundsWidth$annotations(): void;
        static getTextureHeight$annotations(): void;
        static getVisibleBoundsOffset$annotations(): void;
        static getVisibleBoundsHeight$annotations(): void;
        getVisibleBoundsHeight(): number;
        getVisibleBoundsOffset(): $Vector3;
        static Companion: $ModelFile$Description$Companion;
        constructor(arg0: number, arg1: string, arg2: number, arg3: number, arg4: boolean, arg5: number, arg6: number, arg7: $Vector3, arg8: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number, arg6: $Vector3);
        constructor(arg0: string, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number, arg6: $Vector3, arg7: number, arg8: $DefaultConstructorMarker);
        get identifier(): string;
        get textureTranslucent(): boolean;
        get visibleBoundsWidth(): number;
        get textureWidth(): number;
        get textureHeight(): number;
        static get textureWidth$annotations(): void;
        static get textureTranslucent$annotations(): void;
        static get visibleBoundsWidth$annotations(): void;
        static get textureHeight$annotations(): void;
        static get visibleBoundsOffset$annotations(): void;
        static get visibleBoundsHeight$annotations(): void;
        get visibleBoundsHeight(): number;
        get visibleBoundsOffset(): $Vector3;
    }
    export class $SoundDefinitionsFile$Companion {
        serializer(): $KSerializer<$SoundDefinitionsFile>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ModelFile {
        copy(arg0: string, arg1: $List_<$ModelFile$Geometry>): $ModelFile;
        getGeometries(): $List<$ModelFile$Geometry>;
        getFormatVersion(): string;
        static copy$default(arg0: $ModelFile, arg1: string, arg2: $List_<any>, arg3: number, arg4: $Object): $ModelFile;
        static write$Self$cosmetics(arg0: $ModelFile, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component2(): $List<$ModelFile$Geometry>;
        component1(): string;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        static getFormatVersion$annotations(): void;
        static getGeometries$annotations(): void;
        static Companion: $ModelFile$Companion;
        constructor(arg0: number, arg1: string, arg2: $List_<any>, arg3: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $List_<any>, arg2: number, arg3: $DefaultConstructorMarker);
        constructor(arg0: string, arg1: $List_<$ModelFile$Geometry>);
        get geometries(): $List<$ModelFile$Geometry>;
        get formatVersion(): string;
        static get formatVersion$annotations(): void;
        static get geometries$annotations(): void;
    }
    export class $AnimationFile$Animation$SoundEffect {
        copy(arg0: string, arg1: string): $AnimationFile$Animation$SoundEffect;
        static copy$default(arg0: $AnimationFile$Animation$SoundEffect, arg1: string, arg2: string, arg3: number, arg4: $Object): $AnimationFile$Animation$SoundEffect;
        getLocator(): string;
        getEffect(): string;
        static write$Self$cosmetics(arg0: $AnimationFile$Animation$SoundEffect, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component2(): string;
        component1(): string;
        static Companion: $AnimationFile$Animation$SoundEffect$Companion;
        constructor(arg0: number, arg1: string, arg2: string, arg3: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: string, arg2: number, arg3: $DefaultConstructorMarker);
        constructor(arg0: string, arg1: string);
        get locator(): string;
        get effect(): string;
    }
    export class $AnimationFile$Animation$ParticleEffect {
        copy(arg0: string, arg1: string, arg2: $Molang): $AnimationFile$Animation$ParticleEffect;
        static copy$default(arg0: $AnimationFile$Animation$ParticleEffect, arg1: string, arg2: string, arg3: $Molang, arg4: number, arg5: $Object): $AnimationFile$Animation$ParticleEffect;
        getLocator(): string;
        getEffect(): string;
        static write$Self$cosmetics(arg0: $AnimationFile$Animation$ParticleEffect, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component3(): $Molang;
        component2(): string;
        component1(): string;
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
