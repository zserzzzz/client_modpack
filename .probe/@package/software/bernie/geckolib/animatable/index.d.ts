import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $Object } from "@package/java/lang";
import { $AnimatableManager$ControllerRegistrar_ } from "@package/software/bernie/geckolib/animation";
export * as instance from "@package/software/bernie/geckolib/animatable/instance";

declare module "@package/software/bernie/geckolib/animatable" {
    export class $GeoAnimatable {
    }
    export interface $GeoAnimatable {
        animatableCacheOverride(): $AnimatableInstanceCache;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        getTick(arg0: $Object): number;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get boneResetTime(): number;
    }
    export class $GeoEntity {
    }
    export interface $GeoEntity extends $GeoAnimatable {
        getTick(arg0: $Object): number;
        triggerAnim(arg0: string, arg1: string): void;
        setAnimData<D>(arg0: $SerializableDataTicket<D>, arg1: D): void;
        stopTriggeredAnim(arg0: string, arg1: string): void;
        getAnimData<D>(arg0: $SerializableDataTicket<D>): D;
    }
}
