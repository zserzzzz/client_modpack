import { $MolangQueryEntity } from "@package/gg/essential/model/molang";
import { $Function1_ } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $AnimationTarget_, $AnimationEvent, $AnimationEventType_ } from "@package/gg/essential/cosmetics/events";
import { $CosmeticSetting$AnimationVariant } from "@package/gg/essential/mod/cosmetics/settings";
import { $Quaternion } from "@package/gg/essential/model/util";
import { $Set_, $Collection_, $Map_ } from "@package/java/util";
import { $ModelInstance, $BedrockModel, $ParticleSystem$Locator, $ModelAnimationState } from "@package/gg/essential/model";
import { $Vec3 } from "@package/gg/essential/lib/kotgl/matrix/vectors";
import { $Object } from "@package/java/lang";
import { $Pair, $Unit } from "@package/kotlin";

declare module "@package/gg/essential/cosmetics/state" {
    export class $EssentialAnimationSystem$Companion {
        getRandomEmoteAnimationEventOrNull(arg0: $BedrockModel, arg1: $Map_<string, string>): $AnimationEvent;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $WearableLocator implements $ParticleSystem$Locator {
        getPosition(): $Vec3;
        getParent(): $ParticleSystem$Locator;
        isValid(): boolean;
        getVelocity(): $Vec3;
        isVisible(): boolean;
        getPositionAndRotation(): $Pair<$Vec3, $Quaternion>;
        getRotation(): $Quaternion;
        setWearableVisible(arg0: boolean): void;
        getWearableVisible(): boolean;
        setValid(arg0: boolean): void;
        constructor(arg0: $ParticleSystem$Locator, arg1: boolean);
        get position(): $Vec3;
        get parent(): $ParticleSystem$Locator;
        get velocity(): $Vec3;
        get visible(): boolean;
        get positionAndRotation(): $Pair<$Vec3, $Quaternion>;
        get rotation(): $Quaternion;
    }
    export class $EssentialAnimationSystem {
        processEvent(arg0: $AnimationEventType_): void;
        fireTriggerFromAnimation(arg0: string, arg1: $AnimationEventType_): void;
        maybeFireTextureAnimationStartEvent(): void;
        triggerPendingAnimationsForOtherModels(arg0: $Collection_<$ModelInstance>): void;
        updateAnimationState(): void;
        static fireTriggerFromAnimation$default(arg0: $EssentialAnimationSystem, arg1: string, arg2: $AnimationEventType_, arg3: number, arg4: $Object): void;
        static Companion: $EssentialAnimationSystem$Companion;
        constructor(arg0: $BedrockModel, arg1: $MolangQueryEntity, arg2: $ModelAnimationState, arg3: $TextureAnimationSync, arg4: $Set_<$AnimationTarget_>, arg5: $CosmeticSetting$AnimationVariant, arg6: $Function1_<string, $Unit>);
    }
    export class $TextureAnimationSync {
        syncTextureStart(): void;
        getAdjustedLifetime(arg0: number): number;
        constructor(arg0: number);
    }
}
