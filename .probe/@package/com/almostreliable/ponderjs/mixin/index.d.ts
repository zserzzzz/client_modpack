import { $Supplier_ } from "@package/java/util/function";
import { $PonderPalette_ } from "@package/net/createmod/ponder/api";
import { $Particle } from "@package/net/minecraft/client/particle";
import { $StoryBoardEntry } from "@package/net/createmod/ponder/api/registration";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Multimap } from "@package/com/google/common/collect";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/almostreliable/ponderjs/mixin" {
    export class $TextWindowElementAccessor {
    }
    export interface $TextWindowElementAccessor {
        setY(arg0: number): void;
        setTextGetter(arg0: $Supplier_<string>): void;
        setVec(arg0: $Vec3_): void;
        setPalette(arg0: $PonderPalette_): void;
        setNearScene(arg0: boolean): void;
        set y(value: number);
        set textGetter(value: $Supplier_<string>);
        set vec(value: $Vec3_);
        set palette(value: $PonderPalette_);
        set nearScene(value: boolean);
    }
    export class $PonderWorldAccessor {
    }
    export interface $PonderWorldAccessor {
        ponderjs$makeParticle<T extends $ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $PonderWorldAccessor}.
     */
    export type $PonderWorldAccessor_ = ((arg0: any, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number) => $Particle);
    export class $PonderSceneRegistryAccessor {
    }
    export interface $PonderSceneRegistryAccessor {
        ponderjs$scenes(): $Multimap<$ResourceLocation, $StoryBoardEntry>;
    }
    /**
     * Values that may be interpreted as {@link $PonderSceneRegistryAccessor}.
     */
    export type $PonderSceneRegistryAccessor_ = (() => $Multimap<$ResourceLocation_, $StoryBoardEntry>);
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        ponderjs$setAlpha(arg0: number): void;
        ponderjs$setRoll(arg0: number): void;
        ponderjs$setGravity(arg0: number): void;
        ponderjs$setLifetime(arg0: number): void;
        ponderjs$setHasPhysics(arg0: boolean): void;
        ponderjs$setFriction(arg0: number): void;
        ponderjs$setStoppedByCollision(arg0: boolean): void;
    }
}
