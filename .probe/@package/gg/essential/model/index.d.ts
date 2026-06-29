import { $Function1, $Function0, $Function0_, $Function1_ } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $UVertexConsumer, $UMatrixStack, $Quaternion, $TreeMap } from "@package/gg/essential/model/util";
import { $UUID_, $Set_, $Comparator, $Map, $Set, $ListIterator, $Spliterator, $Iterator, $UUID, $List, $SequencedCollection, $Map_, $Collection_, $List_ } from "@package/java/util";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $IntFunction_, $Consumer_, $Predicate_, $UnaryOperator_ } from "@package/java/util/function";
import { $KMappedMarker } from "@package/kotlin/jvm/internal/markers";
import { $EssentialAnimationSystem, $WearableLocator, $TextureAnimationSync } from "@package/gg/essential/cosmetics/state";
import { $MutableVec3 } from "@package/gg/essential/lib/kotgl/matrix/vectors/mutables";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Vec3 } from "@package/gg/essential/lib/kotgl/matrix/vectors";
import { $BakedAnimations } from "@package/gg/essential/model/bones";
import { $Enum, $Number, $Object } from "@package/java/lang";
import { $Unit, $Lazy, $Pair } from "@package/kotlin";
import { $EssentialAsset } from "@package/gg/essential/mod";
import { $AnimationTarget, $AnimationEvent, $AnimationTarget_ } from "@package/gg/essential/cosmetics/events";
import { $Light, $LightProvider, $LightProvider_ } from "@package/gg/essential/model/light";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $Mat4 } from "@package/gg/essential/lib/kotgl/matrix/matrices";
import { $CollisionProvider_, $CollisionProvider } from "@package/gg/essential/model/collision";
import { $CosmeticsState } from "@package/gg/essential/cosmetics";
import { $SkinMask } from "@package/gg/essential/cosmetics/skinmask";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";
import { $MolangQueryEntity, $MolangQueryTime_, $Molang, $MolangQueryTime, $MolangContext, $VariablesMap, $MolangQueryAnimation } from "@package/gg/essential/model/molang";
import { $Stream } from "@package/java/util/stream";
import { $Random } from "@package/kotlin/random";
import { $PlayerPose, $RenderBackend$CommandQueue_, $RenderBackend$Texture } from "@package/gg/essential/model/backend";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Cosmetic, $Cosmetic$Diagnostic } from "@package/gg/essential/network/cosmetics";
import { $ModelFile, $ParticlesFile$Event, $AnimationFile, $SoundDefinitionsFile, $ParticlesFile$Material_, $AnimationFile$Loop, $AnimationFile$Animation, $AnimationFile$Loop_, $ParticleEffectComponents, $ParticlesFile$Material, $ParticlesFile, $ParticlesFile$Curve } from "@package/gg/essential/model/file";
export * as backend from "@package/gg/essential/model/backend";
export * as file from "@package/gg/essential/model/file";
export * as molang from "@package/gg/essential/model/molang";
export * as util from "@package/gg/essential/model/util";
export * as light from "@package/gg/essential/model/light";
export * as bones from "@package/gg/essential/model/bones";
export * as collision from "@package/gg/essential/model/collision";

declare module "@package/gg/essential/model" {
    export class $Bones implements $List<$Bone>, $KMappedMarker {
        remove(arg0: number): $Bone;
        remove(arg0: $Object): boolean;
        size(): number;
        get(arg0: number): $Bone;
        get(arg0: string): $Bone;
        indexOf(arg0: $Bone): number;
        indexOf(arg0: $Object): number;
        clear(): void;
        lastIndexOf(arg0: $Bone): number;
        lastIndexOf(arg0: $Object): number;
        isEmpty(): boolean;
        replaceAll(arg0: $UnaryOperator_<$Bone>): void;
        add(arg0: number, arg1: $Bone): void;
        add(arg0: $Bone): boolean;
        subList(arg0: number, arg1: number): $List<$Bone>;
        toArray(): $Object[];
        toArray<T>(arg0: T[]): T[];
        iterator(): $Iterator<$Bone>;
        contains(arg0: $Bone): boolean;
        contains(arg0: string): boolean;
        contains(arg0: $Object): boolean;
        addAll(arg0: number, arg1: $Collection_<$Bone>): boolean;
        addAll(arg0: $Collection_<$Bone>): boolean;
        set(arg0: number, arg1: $Bone): $Bone;
        sort(arg0: $Comparator<$Bone>): void;
        getRoot(): $Bone;
        getSize(): number;
        getByName(): $Map<string, $Bone>;
        removeAll(arg0: $Collection_<never>): boolean;
        retainAll(arg0: $Collection_<never>): boolean;
        listIterator(): $ListIterator<$Bone>;
        listIterator(arg0: number): $ListIterator<$Bone>;
        containsAll(arg0: $Collection_<never>): boolean;
        getById(): $List<$Bone>;
        getByPart(): $Map<$EnumPart, $Bone>;
        spliterator(): $Spliterator<$Bone>;
        getFirst(): $Bone;
        getLast(): $Bone;
        addFirst(arg0: $Bone): void;
        addLast(arg0: $Bone): void;
        removeFirst(): $Bone;
        removeLast(): $Bone;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<$Bone>;
        removeIf(arg0: $Predicate_<$Bone>): boolean;
        parallelStream(): $Stream<$Bone>;
        forEach(arg0: $Consumer_<$Bone>): void;
        reversed(): $SequencedCollection<$Bone>;
        constructor();
        constructor(arg0: $List_<$Bone>);
        [Symbol.iterator](): Iterator<$Bone>
        get empty(): boolean;
        get root(): $Bone;
        get byName(): $Map<string, $Bone>;
        get byId(): $List<$Bone>;
        get byPart(): $Map<$EnumPart, $Bone>;
        get first(): $Bone;
        get last(): $Bone;
    }
    export class $ModelAnimationState$AnimationState implements $MolangQueryAnimation, $MolangQueryEntity {
        getContext(): $MolangContext;
        copy(arg0: $Animation, arg1: $MolangQueryEntity, arg2: number, arg3: $VariablesMap, arg4: number, arg5: number): $ModelAnimationState$AnimationState;
        getTime(): number;
        getEntity(): $MolangQueryEntity;
        static copy$default(arg0: $ModelAnimationState$AnimationState, arg1: $Animation, arg2: $MolangQueryEntity, arg3: number, arg4: $VariablesMap, arg5: number, arg6: number, arg7: number, arg8: $Object): $ModelAnimationState$AnimationState;
        getLocator(): $ParticleSystem$Locator;
        getAnimTime(): number;
        getUuid(): $UUID;
        getAnimation(): $Animation;
        getLifeTime(): number;
        getModifiedDistanceMoved(): number;
        getAnimLoopTime(): number;
        getEffectLoopsDuration$cosmetics(): number;
        setLastEffectTime$cosmetics(arg0: number): void;
        getLastEffectTime$cosmetics(): number;
        getModifiedMoveSpeed(): number;
        getAnimStartTime(): number;
        getHasEnded(): boolean;
        getEffectLoops$cosmetics(): number;
        setEffectLoops$cosmetics(arg0: number): void;
        constructor(arg0: $Animation, arg1: $MolangQueryEntity, arg2: number, arg3: $VariablesMap, arg4: number, arg5: number);
        constructor(arg0: $Animation, arg1: $MolangQueryEntity, arg2: number, arg3: $VariablesMap, arg4: number, arg5: number, arg6: number, arg7: $DefaultConstructorMarker);
        get context(): $MolangContext;
        get time(): number;
        get entity(): $MolangQueryEntity;
        get locator(): $ParticleSystem$Locator;
        get animTime(): number;
        get uuid(): $UUID;
        get animation(): $Animation;
        get lifeTime(): number;
        get modifiedDistanceMoved(): number;
        get animLoopTime(): number;
        get effectLoopsDuration$cosmetics(): number;
        get modifiedMoveSpeed(): number;
        get animStartTime(): number;
        get hasEnded(): boolean;
    }
    export class $BedrockModel$Offset {
        getOffsetY(): number;
        getOffsetX(): number;
        getPivotZ(): number;
        getOffsetZ(): number;
        getPivotY(): number;
        getPivotX(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get offsetY(): number;
        get offsetX(): number;
        get pivotZ(): number;
        get offsetZ(): number;
        get pivotY(): number;
        get pivotX(): number;
    }
    export class $Animation$Companion {
        static access$calcAnimationLength(arg0: $Animation$Companion, arg1: $Map_<any, any>): number;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $Channels {
        getPosition(): $Keyframes;
        copy(arg0: $Keyframes, arg1: $Keyframes, arg2: $Keyframes, arg3: $RelativeTo): $Channels;
        getScale(): $Keyframes;
        static copy$default(arg0: $Channels, arg1: $Keyframes, arg2: $Keyframes, arg3: $Keyframes, arg4: $RelativeTo, arg5: number, arg6: $Object): $Channels;
        static write$Self$cosmetics(arg0: $Channels, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        getRotation(): $Keyframes;
        component4(): $RelativeTo;
        component3(): $Keyframes;
        component2(): $Keyframes;
        component1(): $Keyframes;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        static getRelativeTo$annotations(): void;
        getRelativeTo(): $RelativeTo;
        static Companion: $Channels$Companion;
        constructor();
        constructor(arg0: number, arg1: $Keyframes, arg2: $Keyframes, arg3: $Keyframes, arg4: $RelativeTo, arg5: $SerializationConstructorMarker);
        constructor(arg0: $Keyframes, arg1: $Keyframes, arg2: $Keyframes, arg3: $RelativeTo, arg4: number, arg5: $DefaultConstructorMarker);
        constructor(arg0: $Keyframes, arg1: $Keyframes, arg2: $Keyframes, arg3: $RelativeTo);
        get position(): $Keyframes;
        get scale(): $Keyframes;
        get rotation(): $Keyframes;
        static get relativeTo$annotations(): void;
        get relativeTo(): $RelativeTo;
    }
    export class $CubeUvData {
        getSouth(): number[];
        getDown(): number[];
        getEast(): number[];
        getNorth(): number[];
        getUp(): number[];
        getWest(): number[];
        constructor(arg0: number[], arg1: number[], arg2: number[], arg3: number[], arg4: number[], arg5: number[]);
        get south(): number[];
        get down(): number[];
        get east(): number[];
        get north(): number[];
        get up(): number[];
        get west(): number[];
    }
    export class $Cube {
        deepCopy(): $Cube;
        getMirror(): boolean;
        getPosZ2(): number;
        setPosX1(arg0: number): void;
        getPosX1(): number;
        getPosY1(): number;
        setPosY1(arg0: number): void;
        getPosX2(): number;
        setPosX2(arg0: number): void;
        setPosY2(arg0: number): void;
        setBoxName(arg0: string): $Cube;
        getPosY2(): number;
        setPosZ2(arg0: number): void;
        getPosZ1(): number;
        setPosZ1(arg0: number): void;
        render(arg0: $UMatrixStack, arg1: $UVertexConsumer, arg2: number, arg3: number): void;
        getQuadList(): $List<$Face>;
        getBoxName(): string;
        constructor(arg0: $List_<$Face>, arg1: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number, arg9: number, arg10: $CubeUvData);
        get mirror(): boolean;
        get quadList(): $List<$Face>;
    }
    export class $Box3$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $EnumPart$Companion {
        fromBoneName(arg0: string): $EnumPart;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $Channels$Companion {
        serializer(): $KSerializer<$Channels>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $SoundEffect {
        getName(): string;
        copy(arg0: string, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<$SoundEffect$Entry>): $SoundEffect;
        getCategory(): $SoundCategory;
        static copy$default(arg0: $SoundEffect, arg1: string, arg2: $SoundCategory_, arg3: number, arg4: number, arg5: boolean, arg6: $List_<any>, arg7: number, arg8: $Object): $SoundEffect;
        component6(): $List<$SoundEffect$Entry>;
        component4(): number;
        component3(): number;
        component5(): boolean;
        component2(): $SoundCategory;
        component1(): string;
        getSounds(): $List<$SoundEffect$Entry>;
        getMinDistance(): number;
        getFixedPosition(): boolean;
        getMaxDistance(): number;
        randomEntry(): $SoundEffect$Entry;
        constructor(arg0: string, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<$SoundEffect$Entry>);
        constructor(arg0: string, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<any>, arg6: number, arg7: $DefaultConstructorMarker);
        get name(): string;
        get category(): $SoundCategory;
        get sounds(): $List<$SoundEffect$Entry>;
        get minDistance(): number;
        get fixedPosition(): boolean;
        get maxDistance(): number;
    }
    export class $Box3 {
        clone(): $Box3;
        isEmpty(): boolean;
        set(arg0: $Vector3, arg1: $Vector3): $Box3;
        copy(arg0: $Vector3, arg1: $Vector3): $Box3;
        copy(arg0: $Box3): $Box3;
        getSize(): $Vector3;
        getSize(arg0: $Vector3): $Vector3;
        getMin(): $Vector3;
        getMax(): $Vector3;
        translate(arg0: $Vector3): $Box3;
        static getCenter$default(arg0: $Box3, arg1: $Vector3, arg2: number, arg3: $Object): $Vector3;
        setFromPoints(arg0: $List_<$Vector3>): $Box3;
        static getSize$default(arg0: $Box3, arg1: $Vector3, arg2: number, arg3: $Object): $Vector3;
        getParameter(arg0: $Vector3): $Vector3;
        getParameter(arg0: $Vector3, arg1: $Vector3): $Vector3;
        static copy$default(arg0: $Box3, arg1: $Vector3, arg2: $Vector3, arg3: number, arg4: $Object): $Box3;
        setMin(arg0: $Vector3): void;
        setMax(arg0: $Vector3): void;
        intersect(arg0: $Box3): $Box3;
        getCenter(): $Vector3;
        getCenter(arg0: $Vector3): $Vector3;
        component2(): $Vector3;
        expandByPoint(arg0: $Vector3): $Box3;
        expandByScalar(arg0: number): $Box3;
        component1(): $Vector3;
        makeEmpty(): $Box3;
        static access$getPoints$delegate$cp(): $Lazy<any>;
        static getParameter$default(arg0: $Box3, arg1: $Vector3, arg2: $Vector3, arg3: number, arg4: $Object): $Vector3;
        static Companion: $Box3$Companion;
        constructor(arg0: $Vector3);
        constructor();
        constructor(arg0: $Vector3, arg1: $Vector3, arg2: number, arg3: $DefaultConstructorMarker);
        constructor(arg0: $Vector3, arg1: $Vector3);
        get empty(): boolean;
        set fromPoints(value: $List_<$Vector3>);
    }
    export class $Bone {
        getId(): number;
        getChild(): boolean;
        applyTransform(arg0: $UMatrixStack): void;
        setChild(arg0: boolean): void;
        render(arg0: $UMatrixStack, arg1: $UVertexConsumer, arg2: $List_<$List_<$Cube>>, arg3: number, arg4: number): void;
        getSide(): $Side;
        getVisible(): boolean;
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        getParentRotation(): $Quaternion;
        setParentRotation(arg0: $Quaternion): void;
        resetAnimationOffsets(arg0: boolean): void;
        getGimbal(): boolean;
        getBoxName(): string;
        getPart(): $EnumPart;
        setGimbal(arg0: boolean): void;
        propagateVisibility(arg0: boolean, arg1: $Side_): void;
        containsVisibleBoxes(arg0: $List_<$List_<$Cube>>): boolean;
        getAffectsPoseParts(): $Set<$EnumPart>;
        getPivotZ(): number;
        getPivotY(): number;
        getPivotX(): number;
        getPoseOffsetX(): number;
        setPoseOffsetZ(arg0: number): void;
        getPoseRotX(): number;
        getPoseExtra(): $Mat4;
        setPoseOffsetX(arg0: number): void;
        getAnimOffsetX(): number;
        setAnimOffsetX(arg0: number): void;
        getAnimOffsetY(): number;
        getPoseOffsetY(): number;
        setAnimOffsetY(arg0: number): void;
        getChildModels(): $List<$Bone>;
        setPoseRotX(arg0: number): void;
        getPoseRotY(): number;
        getPoseRotZ(): number;
        setPoseRotZ(arg0: number): void;
        setPoseRotY(arg0: number): void;
        setPoseOffsetY(arg0: number): void;
        getPoseOffsetZ(): number;
        setPoseExtra(arg0: $Mat4): void;
        getAnimOffsetZ(): number;
        setAnimOffsetZ(arg0: number): void;
        getAnimRotX(): number;
        setAnimRotX(arg0: number): void;
        setAnimScaleY(arg0: number): void;
        setWorldGimbal(arg0: boolean): void;
        getUserOffsetX(): number;
        getUserOffsetZ(): number;
        getAnimRotZ(): number;
        propagateGimbal(arg0: $Quaternion, arg1: $Quaternion): void;
        getAnimRotY(): number;
        getWorldGimbal(): boolean;
        setAnimRotZ(arg0: number): void;
        setAnimScaleX(arg0: number): void;
        getAnimScaleZ(): number;
        setAnimScaleZ(arg0: number): void;
        setAnimRotY(arg0: number): void;
        getAnimScaleX(): number;
        setUserOffsetZ(arg0: number): void;
        getUserOffsetY(): number;
        getAnimScaleY(): number;
        setUserOffsetX(arg0: number): void;
        setUserOffsetY(arg0: number): void;
        getAffectsPose(): boolean;
        constructor(arg0: number, arg1: string, arg2: $List_<$Bone>, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $Side_);
        constructor(arg0: number, arg1: string, arg2: $List_<any>, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $Side_, arg10: number, arg11: $DefaultConstructorMarker);
        get id(): number;
        get side(): $Side;
        get boxName(): string;
        get part(): $EnumPart;
        get affectsPoseParts(): $Set<$EnumPart>;
        get pivotZ(): number;
        get pivotY(): number;
        get pivotX(): number;
        get childModels(): $List<$Bone>;
        get affectsPose(): boolean;
    }
    export class $ParticleSystem {
        update(): void;
        isEmpty(): boolean;
        render(arg0: $UMatrixStack, arg1: $Vec3, arg2: $Quaternion, arg3: $ParticleSystem$VertexConsumerProvider_, arg4: $UUID_, arg5: boolean, arg6: boolean, arg7: $UUID_): void;
        spawn(arg0: $ModelAnimationState$ParticleEvent): void;
        static access$getPlaySound$p(arg0: $ParticleSystem): $Function1<any, any>;
        static "render-wYRpD5U$default"(arg0: $ParticleSystem, arg1: $UMatrixStack, arg2: $Vec3, arg3: $Quaternion, arg4: $ParticleSystem$VertexConsumerProvider_, arg5: $UUID_, arg6: boolean, arg7: boolean, arg8: $UUID_, arg9: $Light, arg10: number, arg11: $Object): void;
        static access$getLightProvider$p(arg0: $ParticleSystem): $LightProvider;
        static render$default(arg0: $ParticleSystem, arg1: $UMatrixStack, arg2: $Vec3, arg3: $Quaternion, arg4: $ParticleSystem$VertexConsumerProvider_, arg5: $UUID_, arg6: boolean, arg7: boolean, arg8: $UUID_, arg9: number, arg10: $Object): void;
        static access$translucencySortBillboardParticles$projectToScreenSpaceSelf(arg0: $MutableVec3, arg1: $Vec3, arg2: $MutableVec3, arg3: $MutableVec3, arg4: $Vec3): $MutableVec3;
        hasAnythingToRender(): boolean;
        "render-wYRpD5U"(arg0: $UMatrixStack, arg1: $Vec3, arg2: $Quaternion, arg3: $ParticleSystem$VertexConsumerProvider_, arg4: $UUID_, arg5: boolean, arg6: boolean, arg7: $UUID_, arg8: $Light): void;
        static access$getCollisionProvider$p(arg0: $ParticleSystem): $CollisionProvider;
        static access$getBillboardRenderPasses$p(arg0: $ParticleSystem): $Map<any, any>;
        static access$getRandom$p(arg0: $ParticleSystem): $Random;
        constructor(arg0: $Random, arg1: $CollisionProvider_, arg2: $LightProvider_, arg3: $Function1_<$ModelAnimationState$SoundEvent, $Unit>);
        get empty(): boolean;
    }
    export class $SoundCategory extends $Enum<$SoundCategory> {
        static values(): $SoundCategory[];
        static valueOf(arg0: string): $SoundCategory;
        static getEntries(): $EnumEntries<$SoundCategory>;
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static Companion: $SoundCategory$Companion;
        static PLAYER: $SoundCategory;
        static MUSIC: $SoundCategory;
        static HOSTILE: $SoundCategory;
        static WEATHER: $SoundCategory;
        static AMBIENT: $SoundCategory;
        static RECORD: $SoundCategory;
        static BLOCK: $SoundCategory;
        static NEUTRAL: $SoundCategory;
        static get entries(): $EnumEntries<$SoundCategory>;
    }
    /**
     * Values that may be interpreted as {@link $SoundCategory}.
     */
    export type $SoundCategory_ = "music" | "record" | "weather" | "block" | "hostile" | "neutral" | "player" | "ambient";
    export class $Side$Companion {
        serializer(): $KSerializer<$Side>;
        getDefaultSideOrNull(arg0: $Set_<$Side_>): $Side;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ParticleEffect {
        getIdentifier(): string;
        copy(arg0: string, arg1: string, arg2: $ParticlesFile$Material_, arg3: $ParticleEffectComponents, arg4: $Map_<string, $ParticlesFile$Curve>, arg5: $Map_<string, $ParticlesFile$Event>): $ParticleEffect;
        getFile(): string;
        getEvents(): $Map<string, $ParticlesFile$Event>;
        static copy$default(arg0: $ParticleEffect, arg1: string, arg2: string, arg3: $ParticlesFile$Material_, arg4: $ParticleEffectComponents, arg5: $Map_<any, any>, arg6: $Map_<any, any>, arg7: number, arg8: $Object): $ParticleEffect;
        component6(): $Map<string, $ParticlesFile$Event>;
        getComponents(): $ParticleEffectComponents;
        component4(): $ParticleEffectComponents;
        component3(): $ParticlesFile$Material;
        component5(): $Map<string, $ParticlesFile$Curve>;
        component2(): string;
        getMaterial(): $ParticlesFile$Material;
        component1(): string;
        renderPass(arg0: $Function0_<$RenderBackend$Texture>): $ParticleEffect$RenderPass;
        getCurves(): $Map<string, $ParticlesFile$Curve>;
        constructor(arg0: string, arg1: string, arg2: $ParticlesFile$Material_, arg3: $ParticleEffectComponents, arg4: $Map_<string, $ParticlesFile$Curve>, arg5: $Map_<string, $ParticlesFile$Event>);
        get identifier(): string;
        get file(): string;
        get events(): $Map<string, $ParticlesFile$Event>;
        get components(): $ParticleEffectComponents;
        get material(): $ParticlesFile$Material;
        get curves(): $Map<string, $ParticlesFile$Curve>;
    }
    export class $EnumPart extends $Enum<$EnumPart> {
        static values(): $EnumPart[];
        static valueOf(arg0: string): $EnumPart;
        static getEntries(): $EnumEntries<$EnumPart>;
        getArmorSlotIds(): $Set<number>;
        static fromBoneName(arg0: string): $EnumPart;
        static HEAD: $EnumPart;
        static LEFT_ARM: $EnumPart;
        static ROOT: $EnumPart;
        static LEFT_SHOULDER_ENTITY: $EnumPart;
        static RIGHT_SHOULDER_ENTITY: $EnumPart;
        static CAPE: $EnumPart;
        static RIGHT_LEG: $EnumPart;
        static Companion: $EnumPart$Companion;
        static LEFT_LEG: $EnumPart;
        static LEFT_WING: $EnumPart;
        static RIGHT_WING: $EnumPart;
        static BODY: $EnumPart;
        static RIGHT_ARM: $EnumPart;
        static get entries(): $EnumEntries<$EnumPart>;
        get armorSlotIds(): $Set<number>;
    }
    /**
     * Values that may be interpreted as {@link $EnumPart}.
     */
    export type $EnumPart_ = "root" | "head" | "body" | "right_arm" | "left_arm" | "left_leg" | "right_leg" | "right_shoulder_entity" | "left_shoulder_entity" | "right_wing" | "left_wing" | "cape";
    export class $ModelAnimationState$ParticleEvent implements $ModelAnimationState$Event {
        copy(arg0: $MolangQueryTime_, arg1: number, arg2: $MolangQueryEntity, arg3: $ParticleEffectWithReferencedEffects, arg4: $ParticleSystem$Locator, arg5: $Molang, arg6: $Function0_<$RenderBackend$Texture>): $ModelAnimationState$ParticleEvent;
        getTime(): number;
        static copy$default(arg0: $ModelAnimationState$ParticleEvent, arg1: $MolangQueryTime_, arg2: number, arg3: $MolangQueryEntity, arg4: $ParticleEffectWithReferencedEffects, arg5: $ParticleSystem$Locator, arg6: $Molang, arg7: $Function0_<any>, arg8: number, arg9: $Object): $ModelAnimationState$ParticleEvent;
        component6(): $Molang;
        component7(): $Function0<$RenderBackend$Texture>;
        getLocator(): $ParticleSystem$Locator;
        getEffect(): $ParticleEffectWithReferencedEffects;
        component4(): $ParticleEffectWithReferencedEffects;
        component3(): $MolangQueryEntity;
        component5(): $ParticleSystem$Locator;
        component2(): number;
        component1(): $MolangQueryTime;
        getPreEffectScript(): $Molang;
        getSourceEntity(): $MolangQueryEntity;
        getTextureSource(): $Function0<$RenderBackend$Texture>;
        getTimeSource(): $MolangQueryTime;
        constructor(arg0: $MolangQueryTime_, arg1: number, arg2: $MolangQueryEntity, arg3: $ParticleEffectWithReferencedEffects, arg4: $ParticleSystem$Locator, arg5: $Molang, arg6: $Function0_<$RenderBackend$Texture>);
        get time(): number;
        get locator(): $ParticleSystem$Locator;
        get effect(): $ParticleEffectWithReferencedEffects;
        get preEffectScript(): $Molang;
        get sourceEntity(): $MolangQueryEntity;
        get textureSource(): $Function0<$RenderBackend$Texture>;
        get timeSource(): $MolangQueryTime;
    }
    export class $Animation$Event {
    }
    export interface $Animation$Event {
    }
    export class $Side extends $Enum<$Side> {
        static values(): $Side[];
        static valueOf(arg0: string): $Side;
        static getEntries(): $EnumEntries<$Side>;
        getDisplayName(): string;
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static getDefaultSideOrNull(arg0: $Set_<$Side_>): $Side;
        static Companion: $Side$Companion;
        static LEFT: $Side;
        static FRONT: $Side;
        static RIGHT: $Side;
        static BACK: $Side;
        static get entries(): $EnumEntries<$Side>;
        get displayName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Side}.
     */
    export type $Side_ = "front" | "left" | "right" | "back";
    export class $Vector3 {
        get(arg0: number): number;
        length(): number;
        clone(): $Vector3;
        min(arg0: $Vector3): $Vector3;
        max(arg0: $Vector3): $Vector3;
        floor(): $Vector3;
        ceil(): $Vector3;
        round(): $Vector3;
        clamp(arg0: $Vector3, arg1: $Vector3): $Vector3;
        add(arg0: $Vector3): $Vector3;
        dot(arg0: $Vector3): number;
        set(arg0: number, arg1: number): $Vector3;
        set(arg0: $Number, arg1: $Number, arg2: $Number): $Vector3;
        setLength(arg0: number): $Vector3;
        copy(arg0: number, arg1: number, arg2: number): $Vector3;
        copy(arg0: $Vector3): $Vector3;
        multiply(arg0: $Vector3): $Vector3;
        normalize(): $Vector3;
        sub(arg0: $Vector3): $Vector3;
        negate(): $Vector3;
        minus(arg0: $Vector3): $Vector3;
        plus(arg0: $Vector3): $Vector3;
        cross(arg0: $Vector3): $Vector3;
        lerp(arg0: $Vector3, arg1: number): $Vector3;
        static copy$default(arg0: $Vector3, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Object): $Vector3;
        reflect(arg0: $Vector3): $Vector3;
        distanceTo(arg0: $Vector3): number;
        negateY(): $Vector3;
        component3(): number;
        component2(): number;
        component1(): number;
        distanceToSquared(arg0: $Vector3): number;
        crossVectors(arg0: $Vector3, arg1: $Vector3): $Vector3;
        multiplyScalar(arg0: number): $Vector3;
        divideScalar(arg0: number): $Vector3;
        addScalar(arg0: number): $Vector3;
        addVectors(arg0: $Vector3, arg1: $Vector3): $Vector3;
        setScalar(arg0: $Number): $Vector3;
        subVectors(arg0: $Vector3, arg1: $Vector3): $Vector3;
        static Companion: $Vector3$Companion;
        static ZERO: $Vector3;
        x: number;
        static X: $Vector3;
        y: number;
        static Y: $Vector3;
        z: number;
        static Z: $Vector3;
        constructor(arg0: $Number, arg1: $Number, arg2: $Number);
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        set scalar(value: $Number);
    }
    export class $ModelAnimationState$SoundEvent implements $ModelAnimationState$Event {
        copy(arg0: $MolangQueryTime_, arg1: number, arg2: $MolangQueryEntity, arg3: $SoundEffect, arg4: $ParticleSystem$Locator): $ModelAnimationState$SoundEvent;
        getTime(): number;
        static copy$default(arg0: $ModelAnimationState$SoundEvent, arg1: $MolangQueryTime_, arg2: number, arg3: $MolangQueryEntity, arg4: $SoundEffect, arg5: $ParticleSystem$Locator, arg6: number, arg7: $Object): $ModelAnimationState$SoundEvent;
        getLocator(): $ParticleSystem$Locator;
        getEffect(): $SoundEffect;
        component4(): $SoundEffect;
        component3(): $MolangQueryEntity;
        component5(): $ParticleSystem$Locator;
        component2(): number;
        component1(): $MolangQueryTime;
        getSourceEntity(): $MolangQueryEntity;
        getTimeSource(): $MolangQueryTime;
        constructor(arg0: $MolangQueryTime_, arg1: number, arg2: $MolangQueryEntity, arg3: $SoundEffect, arg4: $ParticleSystem$Locator);
        get time(): number;
        get locator(): $ParticleSystem$Locator;
        get effect(): $SoundEffect;
        get sourceEntity(): $MolangQueryEntity;
        get timeSource(): $MolangQueryTime;
    }
    export class $PlayerMolangQuery$RealYawAccess {
    }
    export interface $PlayerMolangQuery$RealYawAccess {
        essential$getRealRenderYaw(): number;
        essential$getRealPrevRenderYaw(): number;
    }
    export class $RelativeTo {
        copy(arg0: string): $RelativeTo;
        static copy$default(arg0: $RelativeTo, arg1: string, arg2: number, arg3: $Object): $RelativeTo;
        static write$Self$cosmetics(arg0: $RelativeTo, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        getRotation(): string;
        component1(): string;
        static Companion: $RelativeTo$Companion;
        constructor(arg0: number, arg1: string, arg2: $SerializationConstructorMarker);
        constructor();
        constructor(arg0: string, arg1: number, arg2: $DefaultConstructorMarker);
        constructor(arg0: string);
        get rotation(): string;
    }
    export class $Face {
        flipFace(): void;
        draw(arg0: $UMatrixStack, arg1: $UVertexConsumer, arg2: number, arg3: number): void;
        vertexPositions: $PositionTexVertex[];
        constructor(arg0: $PositionTexVertex[]);
        constructor(arg0: $PositionTexVertex[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $ParticleEffect$RenderPass {
        copy(arg0: $ParticlesFile$Material_, arg1: $RenderBackend$Texture): $ParticleEffect$RenderPass;
        static copy$default(arg0: $ParticleEffect$RenderPass, arg1: $ParticlesFile$Material_, arg2: $RenderBackend$Texture, arg3: number, arg4: $Object): $ParticleEffect$RenderPass;
        getTexture(): $RenderBackend$Texture;
        component2(): $RenderBackend$Texture;
        getMaterial(): $ParticlesFile$Material;
        component1(): $ParticlesFile$Material;
        constructor(arg0: $ParticlesFile$Material_, arg1: $RenderBackend$Texture);
        get texture(): $RenderBackend$Texture;
        get material(): $ParticlesFile$Material;
    }
    export class $BedrockModel {
        getVariant(): string;
        getCosmetic(): $Cosmetic;
        computePose(arg0: $PlayerPose, arg1: $ModelAnimationState): $PlayerPose;
        getDiagnostics(): $List<$Cosmetic$Diagnostic>;
        render(arg0: $UMatrixStack, arg1: $RenderBackend$CommandQueue_, arg2: $List_<$List_<$Cube>>, arg3: $BakedAnimations, arg4: $RenderMetadata, arg5: number): void;
        getTexture(): $RenderBackend$Texture;
        setTexture(arg0: $RenderBackend$Texture): void;
        static access$getOFFSETS$cp(): $Map<any, any>;
        setTextureFrameCount(arg0: number): void;
        getTextureFrameCount(): number;
        isContainsSideOption(): boolean;
        getDefaultRenderGeometry(): $List<$List<$Cube>>;
        getAnimations(): $List<$Animation>;
        getEmissiveTexture(): $RenderBackend$Texture;
        getBones(): $Bones;
        getSoundData(): $SoundDefinitionsFile;
        getTranslucent(): boolean;
        setEmissiveTexture(arg0: $RenderBackend$Texture): void;
        setAnimations(arg0: $List_<$Animation>): void;
        getAnimationData(): $AnimationFile;
        setTranslucent(arg0: boolean): void;
        getAnimationEvents(): $List<$AnimationEvent>;
        setAnimationEvents(arg0: $List_<$AnimationEvent>): void;
        getSideOptions(): $Set<$Side>;
        getAnimationByName(arg0: string): $Animation;
        getSkinMasks(): $Map<$Side, $SkinMask>;
        getParticleData(): $Map<string, $ParticlesFile>;
        static Companion: $BedrockModel$Companion;
        boundingBoxes: $List<$Pair<$Box3, $Side>>;
        static TEXTURE_ANIMATION_FPS: number;
        constructor(arg0: $Cosmetic, arg1: string, arg2: $ModelFile, arg3: $AnimationFile, arg4: $Map_<string, $ParticlesFile>, arg5: $SoundDefinitionsFile, arg6: $RenderBackend$Texture, arg7: $RenderBackend$Texture, arg8: $Map_<$Side_, $SkinMask>);
        get variant(): string;
        get cosmetic(): $Cosmetic;
        get diagnostics(): $List<$Cosmetic$Diagnostic>;
        get containsSideOption(): boolean;
        get defaultRenderGeometry(): $List<$List<$Cube>>;
        get bones(): $Bones;
        get soundData(): $SoundDefinitionsFile;
        get animationData(): $AnimationFile;
        get sideOptions(): $Set<$Side>;
        get skinMasks(): $Map<$Side, $SkinMask>;
        get particleData(): $Map<string, $ParticlesFile>;
    }
    export class $ModelInstance {
        getModel(): $BedrockModel;
        getEntity(): $MolangQueryEntity;
        getCosmetic(): $Cosmetic;
        computePose(arg0: $PlayerPose): $PlayerPose;
        updateLocators(arg0: $PlayerPose, arg1: $CosmeticsState): void;
        setLocator(arg0: $WearableLocator): void;
        render(arg0: $UMatrixStack, arg1: $RenderBackend$CommandQueue_, arg2: $List_<$List_<$Cube>>, arg3: $RenderMetadata): void;
        getLocator(): $WearableLocator;
        setModel(arg0: $BedrockModel): void;
        getEssentialAnimationSystem(): $EssentialAnimationSystem;
        getAnimationState(): $ModelAnimationState;
        setEssentialAnimationSystem(arg0: $EssentialAnimationSystem): void;
        switchModel(arg0: $BedrockModel, arg1: $CosmeticsState): void;
        getOnAnimation(): $Function1<string, $Unit>;
        setAnimationState(arg0: $ModelAnimationState): void;
        getTextureAnimationSync(): $TextureAnimationSync;
        setTextureAnimationSync(arg0: $TextureAnimationSync): void;
        getAnimationTargets(): $Set<$AnimationTarget>;
        constructor(arg0: $BedrockModel, arg1: $MolangQueryEntity, arg2: $Set_<$AnimationTarget_>, arg3: $CosmeticsState, arg4: $Function1_<string, $Unit>);
        get entity(): $MolangQueryEntity;
        get cosmetic(): $Cosmetic;
        get onAnimation(): $Function1<string, $Unit>;
        get animationTargets(): $Set<$AnimationTarget>;
    }
    export class $BedrockModel$Companion {
        getOFFSETS(): $Map<$EnumPart, $BedrockModel$Offset>;
        constructor(arg0: $DefaultConstructorMarker);
        get OFFSETS(): $Map<$EnumPart, $BedrockModel$Offset>;
    }
    export class $ModelAnimationState$Event {
    }
    export interface $ModelAnimationState$Event {
        getTime(): number;
        getSourceEntity(): $MolangQueryEntity;
        getTimeSource(): $MolangQueryTime;
        get time(): number;
        get sourceEntity(): $MolangQueryEntity;
        get timeSource(): $MolangQueryTime;
    }
    export class $RenderMetadata {
        copy(arg0: $PlayerPose, arg1: $RenderBackend$Texture, arg2: number, arg3: $Side_, arg4: $Set_<string>, arg5: $Vector3, arg6: $Set_<$EnumPart_>): $RenderMetadata;
        static copy$default(arg0: $RenderMetadata, arg1: $PlayerPose, arg2: $RenderBackend$Texture, arg3: number, arg4: $Side_, arg5: $Set_<any>, arg6: $Vector3, arg7: $Set_<any>, arg8: number, arg9: $Object): $RenderMetadata;
        component6(): $Vector3;
        component7(): $Set<$EnumPart>;
        getSide(): $Side;
        getPose(): $PlayerPose;
        getParts(): $Set<$EnumPart>;
        component4(): $Side;
        component3(): number;
        component5(): $Set<string>;
        component2(): $RenderBackend$Texture;
        getSkin(): $RenderBackend$Texture;
        getLight(): number;
        component1(): $PlayerPose;
        getPositionAdjustment(): $Vector3;
        getHiddenBones(): $Set<string>;
        constructor(arg0: $PlayerPose, arg1: $RenderBackend$Texture, arg2: number, arg3: $Side_, arg4: $Set_<string>, arg5: $Vector3, arg6: $Set_<$EnumPart_>);
        get side(): $Side;
        get pose(): $PlayerPose;
        get parts(): $Set<$EnumPart>;
        get skin(): $RenderBackend$Texture;
        get light(): number;
        get positionAdjustment(): $Vector3;
        get hiddenBones(): $Set<string>;
    }
    export class $ParticleSystem$VertexConsumerProvider {
    }
    export interface $ParticleSystem$VertexConsumerProvider {
        provide(arg0: $ParticleEffect$RenderPass, arg1: $Function1_<$UVertexConsumer, $Unit>): void;
    }
    /**
     * Values that may be interpreted as {@link $ParticleSystem$VertexConsumerProvider}.
     */
    export type $ParticleSystem$VertexConsumerProvider_ = ((arg0: $ParticleEffect$RenderPass, arg1: $Function1<$UVertexConsumer, $Unit>) => void);
    export class $PositionTexVertex {
        copy(): $PositionTexVertex;
        copy(arg0: $Vector3, arg1: number, arg2: number): $PositionTexVertex;
        static copy$default(arg0: $PositionTexVertex, arg1: $Vector3, arg2: number, arg3: number, arg4: number, arg5: $Object): $PositionTexVertex;
        component3(): number;
        component2(): number;
        setTexturePosition(arg0: number, arg1: number): $PositionTexVertex;
        component1(): $Vector3;
        getTexturePositionX(): number;
        setTexturePositionX(arg0: number): void;
        vector3: $Vector3;
        texturePositionY: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $PositionTexVertex, arg1: number, arg2: number);
        constructor(arg0: $Vector3, arg1: number, arg2: number);
    }
    export class $ModelAnimationState {
        getEntity(): $MolangQueryEntity;
        updateLocators(arg0: $Bones, arg1: number): void;
        bake(arg0: $Bones): $BakedAnimations;
        getActive(): $List<$ModelAnimationState$AnimationState>;
        updateEffects(arg0: number): void;
        startAnimation(arg0: $Animation): void;
        static updateEffects$default(arg0: $ModelAnimationState, arg1: number, arg2: number, arg3: $Object): void;
        getPendingEvents(): $List<$ModelAnimationState$Event>;
        getParentLocator(): $ParticleSystem$Locator;
        locatorsNeedUpdating(): boolean;
        constructor(arg0: $MolangQueryEntity, arg1: $ParticleSystem$Locator, arg2: $Function0_<$RenderBackend$Texture>);
        get entity(): $MolangQueryEntity;
        get active(): $List<$ModelAnimationState$AnimationState>;
        get pendingEvents(): $List<$ModelAnimationState$Event>;
        get parentLocator(): $ParticleSystem$Locator;
    }
    export class $Vector3$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $Animation {
        getName(): string;
        copy(arg0: string, arg1: number, arg2: $AnimationFile$Loop_, arg3: $Map_<string, $Channels>, arg4: $TreeMap<number, $List_<$Animation$Event>>, arg5: $Set_<$EnumPart_>): $Animation;
        static copy$default(arg0: $Animation, arg1: string, arg2: number, arg3: $AnimationFile$Loop_, arg4: $Map_<any, any>, arg5: $TreeMap<any, any>, arg6: $Set_<any>, arg7: number, arg8: $Object): $Animation;
        component6(): $Set<$EnumPart>;
        getEffects(): $TreeMap<number, $List<$Animation$Event>>;
        component4(): $Map<string, $Channels>;
        component3(): $AnimationFile$Loop;
        component5(): $TreeMap<number, $List<$Animation$Event>>;
        component2(): number;
        component1(): string;
        getAffectsPoseParts(): $Set<$EnumPart>;
        getLoop(): $AnimationFile$Loop;
        getBones(): $Map<string, $Channels>;
        getAnimationLength(): number;
        getAffectsPose(): boolean;
        static Companion: $Animation$Companion;
        constructor(arg0: string, arg1: $AnimationFile$Animation, arg2: $Bones, arg3: $Map_<string, $ParticleEffectWithReferencedEffects>, arg4: $Map_<string, $SoundEffect>);
        constructor(arg0: string, arg1: number, arg2: $AnimationFile$Loop_, arg3: $Map_<string, $Channels>, arg4: $TreeMap<number, $List_<$Animation$Event>>, arg5: $Set_<$EnumPart_>);
        get name(): string;
        get effects(): $TreeMap<number, $List<$Animation$Event>>;
        get affectsPoseParts(): $Set<$EnumPart>;
        get loop(): $AnimationFile$Loop;
        get bones(): $Map<string, $Channels>;
        get animationLength(): number;
        get affectsPose(): boolean;
    }
    export class $ParticleSystem$Locator {
    }
    export interface $ParticleSystem$Locator {
        getPosition(): $Vec3;
        getParent(): $ParticleSystem$Locator;
        isValid(): boolean;
        getVelocity(): $Vec3;
        isVisible(): boolean;
        getPositionAndRotation(): $Pair<$Vec3, $Quaternion>;
        getRotation(): $Quaternion;
        get position(): $Vec3;
        get parent(): $ParticleSystem$Locator;
        get valid(): boolean;
        get velocity(): $Vec3;
        get visible(): boolean;
        get positionAndRotation(): $Pair<$Vec3, $Quaternion>;
        get rotation(): $Quaternion;
    }
    export class $Keyframes {
        copy(arg0: $TreeMap<number, $Keyframe>): $Keyframes;
        static copy$default(arg0: $Keyframes, arg1: $TreeMap<any, any>, arg2: number, arg3: $Object): $Keyframes;
        "eval"(arg0: $MolangContext): $Vec3;
        getFrames(): $TreeMap<number, $Keyframe>;
        component1(): $TreeMap<number, $Keyframe>;
        static Companion: $Keyframes$Companion;
        constructor(arg0: $TreeMap<number, $Keyframe>);
        get frames(): $TreeMap<number, $Keyframe>;
    }
    export class $SoundEffect$Entry {
        copy(arg0: $EssentialAsset, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number): $SoundEffect$Entry;
        getStream(): boolean;
        static copy$default(arg0: $SoundEffect$Entry, arg1: $EssentialAsset, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: $Object): $SoundEffect$Entry;
        component6(): boolean;
        component7(): boolean;
        getWeight(): number;
        getPitch(): number;
        getVolume(): number;
        getAsset(): $EssentialAsset;
        component8(): number;
        component4(): number;
        component3(): boolean;
        component5(): number;
        component2(): boolean;
        component1(): $EssentialAsset;
        getLooping(): boolean;
        getInterruptible(): boolean;
        getDirectional(): boolean;
        constructor(arg0: $EssentialAsset, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number);
        constructor(arg0: $EssentialAsset, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number, arg8: number, arg9: $DefaultConstructorMarker);
        get stream(): boolean;
        get weight(): number;
        get pitch(): number;
        get volume(): number;
        get asset(): $EssentialAsset;
        get looping(): boolean;
        get interruptible(): boolean;
        get directional(): boolean;
    }
    export class $SoundCategory$Companion {
        serializer(): $KSerializer<$SoundCategory>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ParticleEffectWithReferencedEffects {
        copy(arg0: string, arg1: $Map_<string, $ParticleEffect>, arg2: $Map_<string, $SoundEffect>): $ParticleEffectWithReferencedEffects;
        static copy$default(arg0: $ParticleEffectWithReferencedEffects, arg1: string, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: number, arg5: $Object): $ParticleEffectWithReferencedEffects;
        component3(): $Map<string, $SoundEffect>;
        component2(): $Map<string, $ParticleEffect>;
        getParticleEffect(): $ParticleEffect;
        getOtherParticleByReference(arg0: string): $ParticleEffectWithReferencedEffects;
        getReferencedEffects(): $Map<string, $ParticleEffect>;
        getReferencedSounds(): $Map<string, $SoundEffect>;
        constructor(arg0: string, arg1: $Map_<string, $ParticleEffect>, arg2: $Map_<string, $SoundEffect>);
        get particleEffect(): $ParticleEffect;
        get referencedEffects(): $Map<string, $ParticleEffect>;
        get referencedSounds(): $Map<string, $SoundEffect>;
    }
}
