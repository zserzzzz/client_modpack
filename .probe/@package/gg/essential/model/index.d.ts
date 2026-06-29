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
        static copy$default(arg0: $ModelAnimationState$AnimationState, arg1: $Animation, arg2: $MolangQueryEntity, arg3: number, arg4: $VariablesMap, arg5: number, arg6: number, arg7: number, arg8: $Object): $ModelAnimationState$AnimationState;
        getLifeTime(): number;
        getContext(): $MolangContext;
        copy(arg0: $Animation, arg1: $MolangQueryEntity, arg2: number, arg3: $VariablesMap, arg4: number, arg5: number): $ModelAnimationState$AnimationState;
        getTime(): number;
        getLocator(): $ParticleSystem$Locator;
        getEntity(): $MolangQueryEntity;
        getUuid(): $UUID;
        getAnimation(): $Animation;
        getLastEffectTime$cosmetics(): number;
        setLastEffectTime$cosmetics(arg0: number): void;
        getEffectLoopsDuration$cosmetics(): number;
        getModifiedMoveSpeed(): number;
        getModifiedDistanceMoved(): number;
        setEffectLoops$cosmetics(arg0: number): void;
        getEffectLoops$cosmetics(): number;
        getAnimLoopTime(): number;
        getAnimStartTime(): number;
        getAnimTime(): number;
        getHasEnded(): boolean;
        constructor(arg0: $Animation, arg1: $MolangQueryEntity, arg2: number, arg3: $VariablesMap, arg4: number, arg5: number);
        constructor(arg0: $Animation, arg1: $MolangQueryEntity, arg2: number, arg3: $VariablesMap, arg4: number, arg5: number, arg6: number, arg7: $DefaultConstructorMarker);
        get lifeTime(): number;
        get context(): $MolangContext;
        get time(): number;
        get locator(): $ParticleSystem$Locator;
        get entity(): $MolangQueryEntity;
        get uuid(): $UUID;
        get animation(): $Animation;
        get effectLoopsDuration$cosmetics(): number;
        get modifiedMoveSpeed(): number;
        get modifiedDistanceMoved(): number;
        get animLoopTime(): number;
        get animStartTime(): number;
        get animTime(): number;
        get hasEnded(): boolean;
    }
    export class $BedrockModel$Offset {
        getOffsetZ(): number;
        getPivotX(): number;
        getPivotY(): number;
        getPivotZ(): number;
        getOffsetX(): number;
        getOffsetY(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get offsetZ(): number;
        get pivotX(): number;
        get pivotY(): number;
        get pivotZ(): number;
        get offsetX(): number;
        get offsetY(): number;
    }
    export class $Animation$Companion {
        static access$calcAnimationLength(arg0: $Animation$Companion, arg1: $Map_<any, any>): number;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $Channels {
        static copy$default(arg0: $Channels, arg1: $Keyframes, arg2: $Keyframes, arg3: $Keyframes, arg4: $RelativeTo, arg5: number, arg6: $Object): $Channels;
        getPosition(): $Keyframes;
        copy(arg0: $Keyframes, arg1: $Keyframes, arg2: $Keyframes, arg3: $RelativeTo): $Channels;
        getScale(): $Keyframes;
        getRotation(): $Keyframes;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        component2(): $Keyframes;
        component3(): $Keyframes;
        component4(): $RelativeTo;
        static write$Self$cosmetics(arg0: $Channels, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): $Keyframes;
        static getRelativeTo$annotations(): void;
        getRelativeTo(): $RelativeTo;
        static Companion: $Channels$Companion;
        constructor();
        constructor(arg0: number, arg1: $Keyframes, arg2: $Keyframes, arg3: $Keyframes, arg4: $RelativeTo, arg5: $SerializationConstructorMarker);
        constructor(arg0: $Keyframes, arg1: $Keyframes, arg2: $Keyframes, arg3: $RelativeTo);
        constructor(arg0: $Keyframes, arg1: $Keyframes, arg2: $Keyframes, arg3: $RelativeTo, arg4: number, arg5: $DefaultConstructorMarker);
        get position(): $Keyframes;
        get scale(): $Keyframes;
        get rotation(): $Keyframes;
        static get relativeTo$annotations(): void;
        get relativeTo(): $RelativeTo;
    }
    export class $CubeUvData {
        getNorth(): number[];
        getSouth(): number[];
        getWest(): number[];
        getDown(): number[];
        getUp(): number[];
        getEast(): number[];
        constructor(arg0: number[], arg1: number[], arg2: number[], arg3: number[], arg4: number[], arg5: number[]);
        get north(): number[];
        get south(): number[];
        get west(): number[];
        get down(): number[];
        get up(): number[];
        get east(): number[];
    }
    export class $Cube {
        deepCopy(): $Cube;
        render(arg0: $UMatrixStack, arg1: $UVertexConsumer, arg2: number, arg3: number): void;
        getMirror(): boolean;
        getPosY2(): number;
        setPosX2(arg0: number): void;
        setPosZ1(arg0: number): void;
        setBoxName(arg0: string): $Cube;
        setPosY1(arg0: number): void;
        getBoxName(): string;
        getPosX1(): number;
        getPosX2(): number;
        setPosX1(arg0: number): void;
        getPosY1(): number;
        setPosY2(arg0: number): void;
        getPosZ2(): number;
        getPosZ1(): number;
        setPosZ2(arg0: number): void;
        getQuadList(): $List<$Face>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number, arg9: number, arg10: $CubeUvData);
        constructor(arg0: $List_<$Face>, arg1: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number, arg11: number);
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
        component6(): $List<$SoundEffect$Entry>;
        static copy$default(arg0: $SoundEffect, arg1: string, arg2: $SoundCategory_, arg3: number, arg4: number, arg5: boolean, arg6: $List_<any>, arg7: number, arg8: $Object): $SoundEffect;
        getName(): string;
        copy(arg0: string, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<$SoundEffect$Entry>): $SoundEffect;
        getCategory(): $SoundCategory;
        component2(): $SoundCategory;
        component3(): number;
        component4(): number;
        component5(): boolean;
        getMaxDistance(): number;
        component1(): string;
        getMinDistance(): number;
        getFixedPosition(): boolean;
        getSounds(): $List<$SoundEffect$Entry>;
        randomEntry(): $SoundEffect$Entry;
        constructor(arg0: string, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<$SoundEffect$Entry>);
        constructor(arg0: string, arg1: $SoundCategory_, arg2: number, arg3: number, arg4: boolean, arg5: $List_<any>, arg6: number, arg7: $DefaultConstructorMarker);
        get name(): string;
        get category(): $SoundCategory;
        get maxDistance(): number;
        get minDistance(): number;
        get fixedPosition(): boolean;
        get sounds(): $List<$SoundEffect$Entry>;
    }
    export class $Box3 {
        setMax(arg0: $Vector3): void;
        setMin(arg0: $Vector3): void;
        getCenter(arg0: $Vector3): $Vector3;
        getCenter(): $Vector3;
        static copy$default(arg0: $Box3, arg1: $Vector3, arg2: $Vector3, arg3: number, arg4: $Object): $Box3;
        clone(): $Box3;
        isEmpty(): boolean;
        set(arg0: $Vector3, arg1: $Vector3): $Box3;
        copy(arg0: $Box3): $Box3;
        copy(arg0: $Vector3, arg1: $Vector3): $Box3;
        getSize(): $Vector3;
        getSize(arg0: $Vector3): $Vector3;
        getMin(): $Vector3;
        getMax(): $Vector3;
        translate(arg0: $Vector3): $Box3;
        getParameter(arg0: $Vector3): $Vector3;
        getParameter(arg0: $Vector3, arg1: $Vector3): $Vector3;
        intersect(arg0: $Box3): $Box3;
        component2(): $Vector3;
        component1(): $Vector3;
        expandByPoint(arg0: $Vector3): $Box3;
        expandByScalar(arg0: number): $Box3;
        static access$getPoints$delegate$cp(): $Lazy<any>;
        static getParameter$default(arg0: $Box3, arg1: $Vector3, arg2: $Vector3, arg3: number, arg4: $Object): $Vector3;
        static getCenter$default(arg0: $Box3, arg1: $Vector3, arg2: number, arg3: $Object): $Vector3;
        static getSize$default(arg0: $Box3, arg1: $Vector3, arg2: number, arg3: $Object): $Vector3;
        setFromPoints(arg0: $List_<$Vector3>): $Box3;
        makeEmpty(): $Box3;
        static Companion: $Box3$Companion;
        constructor(arg0: $Vector3, arg1: $Vector3);
        constructor(arg0: $Vector3);
        constructor(arg0: $Vector3, arg1: $Vector3, arg2: number, arg3: $DefaultConstructorMarker);
        constructor();
        get empty(): boolean;
        set fromPoints(value: $List_<$Vector3>);
    }
    export class $Bone {
        getSide(): $Side;
        getId(): number;
        getChild(): boolean;
        setVisible(arg0: boolean): void;
        getVisible(): boolean;
        render(arg0: $UMatrixStack, arg1: $UVertexConsumer, arg2: $List_<$List_<$Cube>>, arg3: number, arg4: number): void;
        applyTransform(arg0: $UMatrixStack): void;
        isVisible(): boolean;
        setChild(arg0: boolean): void;
        getParentRotation(): $Quaternion;
        setParentRotation(arg0: $Quaternion): void;
        getPivotX(): number;
        getPivotY(): number;
        getPivotZ(): number;
        getPart(): $EnumPart;
        getAffectsPose(): boolean;
        resetAnimationOffsets(arg0: boolean): void;
        getBoxName(): string;
        setGimbal(arg0: boolean): void;
        getGimbal(): boolean;
        containsVisibleBoxes(arg0: $List_<$List_<$Cube>>): boolean;
        propagateVisibility(arg0: boolean, arg1: $Side_): void;
        getAffectsPoseParts(): $Set<$EnumPart>;
        getChildModels(): $List<$Bone>;
        getPoseRotX(): number;
        setPoseOffsetX(arg0: number): void;
        setPoseOffsetZ(arg0: number): void;
        getPoseOffsetX(): number;
        getPoseOffsetY(): number;
        getAnimOffsetX(): number;
        getPoseExtra(): $Mat4;
        getAnimOffsetZ(): number;
        setPoseExtra(arg0: $Mat4): void;
        setAnimOffsetZ(arg0: number): void;
        getPoseOffsetZ(): number;
        getAnimRotX(): number;
        setAnimRotY(arg0: number): void;
        getPoseRotY(): number;
        setPoseRotY(arg0: number): void;
        getAnimOffsetY(): number;
        setAnimOffsetY(arg0: number): void;
        setAnimOffsetX(arg0: number): void;
        getAnimRotY(): number;
        setPoseRotZ(arg0: number): void;
        getAnimRotZ(): number;
        setAnimRotZ(arg0: number): void;
        getAnimScaleX(): number;
        setAnimRotX(arg0: number): void;
        setAnimScaleX(arg0: number): void;
        getAnimScaleY(): number;
        setPoseOffsetY(arg0: number): void;
        getPoseRotZ(): number;
        setPoseRotX(arg0: number): void;
        setUserOffsetY(arg0: number): void;
        propagateGimbal(arg0: $Quaternion, arg1: $Quaternion): void;
        getAnimScaleZ(): number;
        getUserOffsetZ(): number;
        setWorldGimbal(arg0: boolean): void;
        getUserOffsetX(): number;
        getWorldGimbal(): boolean;
        setUserOffsetX(arg0: number): void;
        setAnimScaleY(arg0: number): void;
        getUserOffsetY(): number;
        setUserOffsetZ(arg0: number): void;
        setAnimScaleZ(arg0: number): void;
        constructor(arg0: number, arg1: string, arg2: $List_<$Bone>, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $Side_);
        constructor(arg0: number, arg1: string, arg2: $List_<any>, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $Side_, arg10: number, arg11: $DefaultConstructorMarker);
        get side(): $Side;
        get id(): number;
        get pivotX(): number;
        get pivotY(): number;
        get pivotZ(): number;
        get part(): $EnumPart;
        get affectsPose(): boolean;
        get boxName(): string;
        get affectsPoseParts(): $Set<$EnumPart>;
        get childModels(): $List<$Bone>;
    }
    export class $ParticleSystem {
        update(): void;
        isEmpty(): boolean;
        render(arg0: $UMatrixStack, arg1: $Vec3, arg2: $Quaternion, arg3: $ParticleSystem$VertexConsumerProvider_, arg4: $UUID_, arg5: boolean, arg6: boolean, arg7: $UUID_): void;
        spawn(arg0: $ModelAnimationState$ParticleEvent): void;
        hasAnythingToRender(): boolean;
        static render$default(arg0: $ParticleSystem, arg1: $UMatrixStack, arg2: $Vec3, arg3: $Quaternion, arg4: $ParticleSystem$VertexConsumerProvider_, arg5: $UUID_, arg6: boolean, arg7: boolean, arg8: $UUID_, arg9: number, arg10: $Object): void;
        "render-wYRpD5U"(arg0: $UMatrixStack, arg1: $Vec3, arg2: $Quaternion, arg3: $ParticleSystem$VertexConsumerProvider_, arg4: $UUID_, arg5: boolean, arg6: boolean, arg7: $UUID_, arg8: $Light): void;
        static access$getLightProvider$p(arg0: $ParticleSystem): $LightProvider;
        static "render-wYRpD5U$default"(arg0: $ParticleSystem, arg1: $UMatrixStack, arg2: $Vec3, arg3: $Quaternion, arg4: $ParticleSystem$VertexConsumerProvider_, arg5: $UUID_, arg6: boolean, arg7: boolean, arg8: $UUID_, arg9: $Light, arg10: number, arg11: $Object): void;
        static access$getPlaySound$p(arg0: $ParticleSystem): $Function1<any, any>;
        static access$getCollisionProvider$p(arg0: $ParticleSystem): $CollisionProvider;
        static access$getBillboardRenderPasses$p(arg0: $ParticleSystem): $Map<any, any>;
        static access$getRandom$p(arg0: $ParticleSystem): $Random;
        static access$translucencySortBillboardParticles$projectToScreenSpaceSelf(arg0: $MutableVec3, arg1: $Vec3, arg2: $MutableVec3, arg3: $MutableVec3, arg4: $Vec3): $MutableVec3;
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
        component6(): $Map<string, $ParticlesFile$Event>;
        static copy$default(arg0: $ParticleEffect, arg1: string, arg2: string, arg3: $ParticlesFile$Material_, arg4: $ParticleEffectComponents, arg5: $Map_<any, any>, arg6: $Map_<any, any>, arg7: number, arg8: $Object): $ParticleEffect;
        getIdentifier(): string;
        copy(arg0: string, arg1: string, arg2: $ParticlesFile$Material_, arg3: $ParticleEffectComponents, arg4: $Map_<string, $ParticlesFile$Curve>, arg5: $Map_<string, $ParticlesFile$Event>): $ParticleEffect;
        getFile(): string;
        getEvents(): $Map<string, $ParticlesFile$Event>;
        getCurves(): $Map<string, $ParticlesFile$Curve>;
        getComponents(): $ParticleEffectComponents;
        component2(): string;
        component3(): $ParticlesFile$Material;
        component4(): $ParticleEffectComponents;
        component5(): $Map<string, $ParticlesFile$Curve>;
        component1(): string;
        getMaterial(): $ParticlesFile$Material;
        renderPass(arg0: $Function0_<$RenderBackend$Texture>): $ParticleEffect$RenderPass;
        constructor(arg0: string, arg1: string, arg2: $ParticlesFile$Material_, arg3: $ParticleEffectComponents, arg4: $Map_<string, $ParticlesFile$Curve>, arg5: $Map_<string, $ParticlesFile$Event>);
        get identifier(): string;
        get file(): string;
        get events(): $Map<string, $ParticlesFile$Event>;
        get curves(): $Map<string, $ParticlesFile$Curve>;
        get components(): $ParticleEffectComponents;
        get material(): $ParticlesFile$Material;
    }
    export class $EnumPart extends $Enum<$EnumPart> {
        static values(): $EnumPart[];
        static valueOf(arg0: string): $EnumPart;
        static getEntries(): $EnumEntries<$EnumPart>;
        static fromBoneName(arg0: string): $EnumPart;
        getArmorSlotIds(): $Set<number>;
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
        component7(): $Function0<$RenderBackend$Texture>;
        component6(): $Molang;
        static copy$default(arg0: $ModelAnimationState$ParticleEvent, arg1: $MolangQueryTime_, arg2: number, arg3: $MolangQueryEntity, arg4: $ParticleEffectWithReferencedEffects, arg5: $ParticleSystem$Locator, arg6: $Molang, arg7: $Function0_<any>, arg8: number, arg9: $Object): $ModelAnimationState$ParticleEvent;
        copy(arg0: $MolangQueryTime_, arg1: number, arg2: $MolangQueryEntity, arg3: $ParticleEffectWithReferencedEffects, arg4: $ParticleSystem$Locator, arg5: $Molang, arg6: $Function0_<$RenderBackend$Texture>): $ModelAnimationState$ParticleEvent;
        getTime(): number;
        getLocator(): $ParticleSystem$Locator;
        component2(): number;
        component3(): $MolangQueryEntity;
        component4(): $ParticleEffectWithReferencedEffects;
        component5(): $ParticleSystem$Locator;
        component1(): $MolangQueryTime;
        getEffect(): $ParticleEffectWithReferencedEffects;
        getSourceEntity(): $MolangQueryEntity;
        getTimeSource(): $MolangQueryTime;
        getPreEffectScript(): $Molang;
        getTextureSource(): $Function0<$RenderBackend$Texture>;
        constructor(arg0: $MolangQueryTime_, arg1: number, arg2: $MolangQueryEntity, arg3: $ParticleEffectWithReferencedEffects, arg4: $ParticleSystem$Locator, arg5: $Molang, arg6: $Function0_<$RenderBackend$Texture>);
        get time(): number;
        get locator(): $ParticleSystem$Locator;
        get effect(): $ParticleEffectWithReferencedEffects;
        get sourceEntity(): $MolangQueryEntity;
        get timeSource(): $MolangQueryTime;
        get preEffectScript(): $Molang;
        get textureSource(): $Function0<$RenderBackend$Texture>;
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
        static copy$default(arg0: $Vector3, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Object): $Vector3;
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
        reflect(arg0: $Vector3): $Vector3;
        negateY(): $Vector3;
        lerp(arg0: $Vector3, arg1: number): $Vector3;
        cross(arg0: $Vector3): $Vector3;
        component2(): number;
        component3(): number;
        component1(): number;
        distanceTo(arg0: $Vector3): number;
        addScalar(arg0: number): $Vector3;
        setScalar(arg0: $Number): $Vector3;
        subVectors(arg0: $Vector3, arg1: $Vector3): $Vector3;
        addVectors(arg0: $Vector3, arg1: $Vector3): $Vector3;
        distanceToSquared(arg0: $Vector3): number;
        multiplyScalar(arg0: number): $Vector3;
        crossVectors(arg0: $Vector3, arg1: $Vector3): $Vector3;
        divideScalar(arg0: number): $Vector3;
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
        static copy$default(arg0: $ModelAnimationState$SoundEvent, arg1: $MolangQueryTime_, arg2: number, arg3: $MolangQueryEntity, arg4: $SoundEffect, arg5: $ParticleSystem$Locator, arg6: number, arg7: $Object): $ModelAnimationState$SoundEvent;
        copy(arg0: $MolangQueryTime_, arg1: number, arg2: $MolangQueryEntity, arg3: $SoundEffect, arg4: $ParticleSystem$Locator): $ModelAnimationState$SoundEvent;
        getTime(): number;
        getLocator(): $ParticleSystem$Locator;
        component2(): number;
        component3(): $MolangQueryEntity;
        component4(): $SoundEffect;
        component5(): $ParticleSystem$Locator;
        component1(): $MolangQueryTime;
        getEffect(): $SoundEffect;
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
        essential$getRealPrevRenderYaw(): number;
        essential$getRealRenderYaw(): number;
    }
    export class $RelativeTo {
        static copy$default(arg0: $RelativeTo, arg1: string, arg2: number, arg3: $Object): $RelativeTo;
        copy(arg0: string): $RelativeTo;
        getRotation(): string;
        static write$Self$cosmetics(arg0: $RelativeTo, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        static Companion: $RelativeTo$Companion;
        constructor(arg0: string);
        constructor(arg0: number, arg1: string, arg2: $SerializationConstructorMarker);
        constructor();
        constructor(arg0: string, arg1: number, arg2: $DefaultConstructorMarker);
        get rotation(): string;
    }
    export class $Face {
        draw(arg0: $UMatrixStack, arg1: $UVertexConsumer, arg2: number, arg3: number): void;
        flipFace(): void;
        vertexPositions: $PositionTexVertex[];
        constructor(arg0: $PositionTexVertex[]);
        constructor(arg0: $PositionTexVertex[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $ParticleEffect$RenderPass {
        static copy$default(arg0: $ParticleEffect$RenderPass, arg1: $ParticlesFile$Material_, arg2: $RenderBackend$Texture, arg3: number, arg4: $Object): $ParticleEffect$RenderPass;
        copy(arg0: $ParticlesFile$Material_, arg1: $RenderBackend$Texture): $ParticleEffect$RenderPass;
        getTexture(): $RenderBackend$Texture;
        component2(): $RenderBackend$Texture;
        component1(): $ParticlesFile$Material;
        getMaterial(): $ParticlesFile$Material;
        constructor(arg0: $ParticlesFile$Material_, arg1: $RenderBackend$Texture);
        get texture(): $RenderBackend$Texture;
        get material(): $ParticlesFile$Material;
    }
    export class $BedrockModel {
        getCosmetic(): $Cosmetic;
        getVariant(): string;
        getTexture(): $RenderBackend$Texture;
        render(arg0: $UMatrixStack, arg1: $RenderBackend$CommandQueue_, arg2: $List_<$List_<$Cube>>, arg3: $BakedAnimations, arg4: $RenderMetadata, arg5: number): void;
        getDiagnostics(): $List<$Cosmetic$Diagnostic>;
        setTexture(arg0: $RenderBackend$Texture): void;
        computePose(arg0: $PlayerPose, arg1: $ModelAnimationState): $PlayerPose;
        getBones(): $Bones;
        getParticleData(): $Map<string, $ParticlesFile>;
        setEmissiveTexture(arg0: $RenderBackend$Texture): void;
        getSideOptions(): $Set<$Side>;
        getAnimationData(): $AnimationFile;
        getAnimationByName(arg0: string): $Animation;
        getSkinMasks(): $Map<$Side, $SkinMask>;
        getSoundData(): $SoundDefinitionsFile;
        getEmissiveTexture(): $RenderBackend$Texture;
        setTranslucent(arg0: boolean): void;
        setAnimationEvents(arg0: $List_<$AnimationEvent>): void;
        getTranslucent(): boolean;
        getAnimations(): $List<$Animation>;
        setAnimations(arg0: $List_<$Animation>): void;
        getAnimationEvents(): $List<$AnimationEvent>;
        isContainsSideOption(): boolean;
        static access$getOFFSETS$cp(): $Map<any, any>;
        setTextureFrameCount(arg0: number): void;
        getTextureFrameCount(): number;
        getDefaultRenderGeometry(): $List<$List<$Cube>>;
        static Companion: $BedrockModel$Companion;
        boundingBoxes: $List<$Pair<$Box3, $Side>>;
        static TEXTURE_ANIMATION_FPS: number;
        constructor(arg0: $Cosmetic, arg1: string, arg2: $ModelFile, arg3: $AnimationFile, arg4: $Map_<string, $ParticlesFile>, arg5: $SoundDefinitionsFile, arg6: $RenderBackend$Texture, arg7: $RenderBackend$Texture, arg8: $Map_<$Side_, $SkinMask>);
        get cosmetic(): $Cosmetic;
        get variant(): string;
        get diagnostics(): $List<$Cosmetic$Diagnostic>;
        get bones(): $Bones;
        get particleData(): $Map<string, $ParticlesFile>;
        get sideOptions(): $Set<$Side>;
        get animationData(): $AnimationFile;
        get skinMasks(): $Map<$Side, $SkinMask>;
        get soundData(): $SoundDefinitionsFile;
        get containsSideOption(): boolean;
        get defaultRenderGeometry(): $List<$List<$Cube>>;
    }
    export class $ModelInstance {
        getCosmetic(): $Cosmetic;
        getModel(): $BedrockModel;
        setLocator(arg0: $WearableLocator): void;
        getLocator(): $WearableLocator;
        render(arg0: $UMatrixStack, arg1: $RenderBackend$CommandQueue_, arg2: $List_<$List_<$Cube>>, arg3: $RenderMetadata): void;
        getEntity(): $MolangQueryEntity;
        getEssentialAnimationSystem(): $EssentialAnimationSystem;
        setModel(arg0: $BedrockModel): void;
        computePose(arg0: $PlayerPose): $PlayerPose;
        updateLocators(arg0: $PlayerPose, arg1: $CosmeticsState): void;
        getAnimationState(): $ModelAnimationState;
        getAnimationTargets(): $Set<$AnimationTarget>;
        switchModel(arg0: $BedrockModel, arg1: $CosmeticsState): void;
        setEssentialAnimationSystem(arg0: $EssentialAnimationSystem): void;
        setTextureAnimationSync(arg0: $TextureAnimationSync): void;
        getTextureAnimationSync(): $TextureAnimationSync;
        getOnAnimation(): $Function1<string, $Unit>;
        setAnimationState(arg0: $ModelAnimationState): void;
        constructor(arg0: $BedrockModel, arg1: $MolangQueryEntity, arg2: $Set_<$AnimationTarget_>, arg3: $CosmeticsState, arg4: $Function1_<string, $Unit>);
        get cosmetic(): $Cosmetic;
        get entity(): $MolangQueryEntity;
        get animationTargets(): $Set<$AnimationTarget>;
        get onAnimation(): $Function1<string, $Unit>;
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
        component7(): $Set<$EnumPart>;
        component6(): $Vector3;
        getSide(): $Side;
        static copy$default(arg0: $RenderMetadata, arg1: $PlayerPose, arg2: $RenderBackend$Texture, arg3: number, arg4: $Side_, arg5: $Set_<any>, arg6: $Vector3, arg7: $Set_<any>, arg8: number, arg9: $Object): $RenderMetadata;
        copy(arg0: $PlayerPose, arg1: $RenderBackend$Texture, arg2: number, arg3: $Side_, arg4: $Set_<string>, arg5: $Vector3, arg6: $Set_<$EnumPart_>): $RenderMetadata;
        component2(): $RenderBackend$Texture;
        component3(): number;
        component4(): $Side;
        component5(): $Set<string>;
        getSkin(): $RenderBackend$Texture;
        component1(): $PlayerPose;
        getPose(): $PlayerPose;
        getParts(): $Set<$EnumPart>;
        getLight(): number;
        getHiddenBones(): $Set<string>;
        getPositionAdjustment(): $Vector3;
        constructor(arg0: $PlayerPose, arg1: $RenderBackend$Texture, arg2: number, arg3: $Side_, arg4: $Set_<string>, arg5: $Vector3, arg6: $Set_<$EnumPart_>);
        get side(): $Side;
        get skin(): $RenderBackend$Texture;
        get pose(): $PlayerPose;
        get parts(): $Set<$EnumPart>;
        get light(): number;
        get hiddenBones(): $Set<string>;
        get positionAdjustment(): $Vector3;
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
        static copy$default(arg0: $PositionTexVertex, arg1: $Vector3, arg2: number, arg3: number, arg4: number, arg5: $Object): $PositionTexVertex;
        copy(arg0: $Vector3, arg1: number, arg2: number): $PositionTexVertex;
        copy(): $PositionTexVertex;
        component2(): number;
        component3(): number;
        component1(): $Vector3;
        setTexturePositionX(arg0: number): void;
        getTexturePositionX(): number;
        setTexturePosition(arg0: number, arg1: number): $PositionTexVertex;
        vector3: $Vector3;
        texturePositionY: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $PositionTexVertex, arg1: number, arg2: number);
        constructor(arg0: $Vector3, arg1: number, arg2: number);
    }
    export class $ModelAnimationState {
        getEntity(): $MolangQueryEntity;
        getActive(): $List<$ModelAnimationState$AnimationState>;
        bake(arg0: $Bones): $BakedAnimations;
        startAnimation(arg0: $Animation): void;
        updateLocators(arg0: $Bones, arg1: number): void;
        updateEffects(arg0: number): void;
        static updateEffects$default(arg0: $ModelAnimationState, arg1: number, arg2: number, arg3: $Object): void;
        getPendingEvents(): $List<$ModelAnimationState$Event>;
        locatorsNeedUpdating(): boolean;
        getParentLocator(): $ParticleSystem$Locator;
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
        component6(): $Set<$EnumPart>;
        static copy$default(arg0: $Animation, arg1: string, arg2: number, arg3: $AnimationFile$Loop_, arg4: $Map_<any, any>, arg5: $TreeMap<any, any>, arg6: $Set_<any>, arg7: number, arg8: $Object): $Animation;
        getName(): string;
        copy(arg0: string, arg1: number, arg2: $AnimationFile$Loop_, arg3: $Map_<string, $Channels>, arg4: $TreeMap<number, $List_<$Animation$Event>>, arg5: $Set_<$EnumPart_>): $Animation;
        component2(): number;
        getLoop(): $AnimationFile$Loop;
        component3(): $AnimationFile$Loop;
        component4(): $Map<string, $Channels>;
        component5(): $TreeMap<number, $List<$Animation$Event>>;
        component1(): string;
        getEffects(): $TreeMap<number, $List<$Animation$Event>>;
        getBones(): $Map<string, $Channels>;
        getAffectsPose(): boolean;
        getAnimationLength(): number;
        getAffectsPoseParts(): $Set<$EnumPart>;
        static Companion: $Animation$Companion;
        constructor(arg0: string, arg1: $AnimationFile$Animation, arg2: $Bones, arg3: $Map_<string, $ParticleEffectWithReferencedEffects>, arg4: $Map_<string, $SoundEffect>);
        constructor(arg0: string, arg1: number, arg2: $AnimationFile$Loop_, arg3: $Map_<string, $Channels>, arg4: $TreeMap<number, $List_<$Animation$Event>>, arg5: $Set_<$EnumPart_>);
        get name(): string;
        get loop(): $AnimationFile$Loop;
        get effects(): $TreeMap<number, $List<$Animation$Event>>;
        get bones(): $Map<string, $Channels>;
        get affectsPose(): boolean;
        get animationLength(): number;
        get affectsPoseParts(): $Set<$EnumPart>;
    }
    export class $ParticleSystem$Locator {
    }
    export interface $ParticleSystem$Locator {
        getPosition(): $Vec3;
        getParent(): $ParticleSystem$Locator;
        isValid(): boolean;
        getRotation(): $Quaternion;
        getVelocity(): $Vec3;
        isVisible(): boolean;
        getPositionAndRotation(): $Pair<$Vec3, $Quaternion>;
        get position(): $Vec3;
        get parent(): $ParticleSystem$Locator;
        get valid(): boolean;
        get rotation(): $Quaternion;
        get velocity(): $Vec3;
        get visible(): boolean;
        get positionAndRotation(): $Pair<$Vec3, $Quaternion>;
    }
    export class $Keyframes {
        static copy$default(arg0: $Keyframes, arg1: $TreeMap<any, any>, arg2: number, arg3: $Object): $Keyframes;
        copy(arg0: $TreeMap<number, $Keyframe>): $Keyframes;
        getFrames(): $TreeMap<number, $Keyframe>;
        "eval"(arg0: $MolangContext): $Vec3;
        component1(): $TreeMap<number, $Keyframe>;
        static Companion: $Keyframes$Companion;
        constructor(arg0: $TreeMap<number, $Keyframe>);
        get frames(): $TreeMap<number, $Keyframe>;
    }
    export class $SoundEffect$Entry {
        component7(): boolean;
        component6(): boolean;
        getWeight(): number;
        static copy$default(arg0: $SoundEffect$Entry, arg1: $EssentialAsset, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: $Object): $SoundEffect$Entry;
        copy(arg0: $EssentialAsset, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number): $SoundEffect$Entry;
        getStream(): boolean;
        component8(): number;
        getAsset(): $EssentialAsset;
        component2(): boolean;
        component3(): boolean;
        component4(): number;
        component5(): number;
        component1(): $EssentialAsset;
        getPitch(): number;
        getVolume(): number;
        getLooping(): boolean;
        getDirectional(): boolean;
        getInterruptible(): boolean;
        constructor(arg0: $EssentialAsset, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number);
        constructor(arg0: $EssentialAsset, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: boolean, arg7: number, arg8: number, arg9: $DefaultConstructorMarker);
        get weight(): number;
        get stream(): boolean;
        get asset(): $EssentialAsset;
        get pitch(): number;
        get volume(): number;
        get looping(): boolean;
        get directional(): boolean;
        get interruptible(): boolean;
    }
    export class $SoundCategory$Companion {
        serializer(): $KSerializer<$SoundCategory>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $ParticleEffectWithReferencedEffects {
        static copy$default(arg0: $ParticleEffectWithReferencedEffects, arg1: string, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: number, arg5: $Object): $ParticleEffectWithReferencedEffects;
        copy(arg0: string, arg1: $Map_<string, $ParticleEffect>, arg2: $Map_<string, $SoundEffect>): $ParticleEffectWithReferencedEffects;
        component2(): $Map<string, $ParticleEffect>;
        component3(): $Map<string, $SoundEffect>;
        getParticleEffect(): $ParticleEffect;
        getOtherParticleByReference(arg0: string): $ParticleEffectWithReferencedEffects;
        getReferencedSounds(): $Map<string, $SoundEffect>;
        getReferencedEffects(): $Map<string, $ParticleEffect>;
        constructor(arg0: string, arg1: $Map_<string, $ParticleEffect>, arg2: $Map_<string, $SoundEffect>);
        get particleEffect(): $ParticleEffect;
        get referencedSounds(): $Map<string, $SoundEffect>;
        get referencedEffects(): $Map<string, $ParticleEffect>;
    }
}
