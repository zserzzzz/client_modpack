import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $Object } from "@package/java/lang";
import { $AnimatableManager$ControllerRegistrar_ } from "@package/software/bernie/geckolib/animation";
export * as instance from "@package/software/bernie/geckolib/animatable/instance";

declare module "@package/software/bernie/geckolib/animatable" {
    export class $GeoAnimatable {
    }
    export interface $GeoAnimatable {
        getBoneResetTime(): number;
        getTick(arg0: $Object): number;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        animatableCacheOverride(): $AnimatableInstanceCache;
        shouldPlayAnimsWhileGamePaused(): boolean;
        get boneResetTime(): number;
        get animatableInstanceCache(): $AnimatableInstanceCache;
    }
    export class $GeoEntity {
    }
    export interface $GeoEntity extends $GeoAnimatable {
        getAnimData<D>(arg0: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $SerializableDataTicket<D>, arg1: D): void;
        stopTriggeredAnim(arg0: string, arg1: string): void;
        triggerAnim(arg0: string, arg1: string): void;
        getTick(arg0: $Object): number;
    }
}
