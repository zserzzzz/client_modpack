import { $ParticleRenderType_, $Particle } from "@package/net/minecraft/client/particle";
import { $Class } from "@package/java/lang";
import { $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/addon" {
    export class $ParticleEngineAddon {
    }
    export interface $ParticleEngineAddon {
        asyncparticle$sortRenderOrder(): void;
        asyncparticle$addRenderType(arg0: $ParticleRenderType_): void;
    }
    export class $GpuParticleAddon {
        static COLOR_ALPHA_OFFSET: number;
        static oCOLOR_RED_OFFSET: number;
        static COLOR_BLUE_OFFSET: number;
        static COLOR_SIZE: number;
        static oCOLOR_BLUE_OFFSET: number;
        static COLOR_SIZE_FULL: number;
        static COLOR_OFFSET: number;
        static oCOLOR_OFFSET: number;
        static oCOLOR_GREEN_OFFSET: number;
        static COLOR_GREEN_OFFSET: number;
        static COLOR_RED_OFFSET: number;
        static oCOLOR_ALPHA_OFFSET: number;
    }
    export interface $GpuParticleAddon {
        asyncparticles$shouldRender(): boolean;
        asyncparticles$postTick(arg0: number): void;
    }
    export class $LightCachedParticleAddon {
        static compress(light: number): number;
        static decompress(lightCache: number): number;
        static INITIAL_LIGHT_CACHE: number;
    }
    export interface $LightCachedParticleAddon {
        asyncparticles$invoke_getLightColor(arg0: number): number;
        asyncparticles$isEnabledLightCache(): boolean;
        asyncparticles$getCompressedLight(): number;
        asyncparticles$getCachedLight(): number;
        asyncparticles$disableLightCache(): void;
        asyncparticles$enableLightCache(): void;
        asyncparticles$refresh(): void;
        asyncparticles$setLight(arg0: number): void;
    }
    export class $ParticleAddon {
    }
    export interface $ParticleAddon {
        asyncparticles$tickAABBCulling(): void;
        asyncparticles$isRenderSync(): boolean;
        asyncparticles$tickSphereCulling(): void;
        asyncparticles$setRenderSync(): void;
        asyncparticles$isVisibleOnScreen(): boolean;
        asyncparticles$setNoCulling(): void;
        asyncparticles$getRealClass(): $Class<$Particle>;
        getRenderBoundingBox(arg0: number): $AABB;
        asyncparticles$isTickSync(): boolean;
        asyncparticles$setTickSync(): void;
        asyncparticles$shouldCull(): boolean;
        asyncparticles$resetTicked(): void;
        asyncparticles$setTicked(): void;
        asyncparticles$isTicked(): boolean;
    }
}
