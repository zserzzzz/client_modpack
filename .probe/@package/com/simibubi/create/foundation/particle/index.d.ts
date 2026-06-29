import { $MapCodec } from "@package/com/mojang/serialization";
import { $ParticleProvider, $Particle, $SimpleAnimatedParticle, $SpriteSet, $ParticleEngine$SpriteParticleRegistration } from "@package/net/minecraft/client/particle";
import { $ParticleType_, $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";
import { $WeakReference } from "@package/java/lang/ref";
import { $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $ParticleSubLevelKickable } from "@package/dev/ryanhcode/sable/api/particle";
import { $Vector3dc } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/foundation/particle" {
    export class $AirParticle extends $SimpleAnimatedParticle implements $ParticleSubLevelKickable {
        sable$shouldCollideWithTrackingSubLevel(): boolean;
        sable$shouldKickFromTracking(): boolean;
        sable$shouldCareAboutIntersectingSubLevels(): boolean;
        sable$getUpDirection(): $Vector3dc;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        static MAXIMUM_COLLISION_VELOCITY_SQUARED: number;
        sprites: $SpriteSet;
        oRoll: number;
        random: $RandomSource;
        asyncparticle$lossSublevelPos: $BlockPos;
        bCol: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        asyncparticle$tracingSubLevel: $WeakReference<any>;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        static INITIAL_AABB: $AABB;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $AirParticleData implements $ParticleOptions, $ICustomParticleDataWithSprite<$AirParticleData> {
        getCodec(arg0: $ParticleType_<$AirParticleData>): $MapCodec<$AirParticleData>;
        getType(): $ParticleType<never>;
        getMetaFactory(): $ParticleEngine$SpriteParticleRegistration<$AirParticleData>;
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $AirParticleData>;
        getFactory(): $ParticleProvider<$AirParticleData>;
        register(arg0: $ParticleType_<$AirParticleData>, arg1: $RegisterParticleProvidersEvent): void;
        createType(): $ParticleType<$AirParticleData>;
        static CODEC: $MapCodec<$AirParticleData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AirParticleData>;
        constructor(arg0: number, arg1: number);
        constructor();
        get type(): $ParticleType<never>;
        get metaFactory(): $ParticleEngine$SpriteParticleRegistration<$AirParticleData>;
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $AirParticleData>;
        get factory(): $ParticleProvider<$AirParticleData>;
    }
    export class $ICustomParticleData<T extends $ParticleOptions> {
    }
    export interface $ICustomParticleData<T extends $ParticleOptions> {
        getCodec(arg0: $ParticleType_<T>): $MapCodec<T>;
        getFactory(): $ParticleProvider<T>;
        register(arg0: $ParticleType_<T>, arg1: $RegisterParticleProvidersEvent): void;
        createType(): $ParticleType<T>;
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        get factory(): $ParticleProvider<T>;
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    export class $AirParticle$Factory implements $ParticleProvider<$AirParticleData> {
        createParticle(arg0: $AirParticleData, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $ICustomParticleDataWithSprite<T extends $ParticleOptions> {
    }
    export interface $ICustomParticleDataWithSprite<T extends $ParticleOptions> extends $ICustomParticleData<T> {
        getFactory(): $ParticleProvider<T>;
        register(arg0: $ParticleType_<T>, arg1: $RegisterParticleProvidersEvent): void;
        getMetaFactory(): $ParticleEngine$SpriteParticleRegistration<T>;
        createType(): $ParticleType<T>;
        get factory(): $ParticleProvider<T>;
        get metaFactory(): $ParticleEngine$SpriteParticleRegistration<T>;
    }
}
