import { $Level } from "@package/net/minecraft/world/level";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
export * as accessor from "@package/toni/sodiumdynamiclights/accessor";

declare module "@package/toni/sodiumdynamiclights" {
    export class $DynamicLightSource {
    }
    export interface $DynamicLightSource {
        sdl$getLuminance(): number;
        sodiumdynamiclights$updateDynamicLight(arg0: $LevelRenderer): boolean;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: $LevelRenderer): void;
        sdl$dynamicLightTick(): void;
        sdl$getDynamicLightX(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        sdl$getDynamicLightY(): number;
        sdl$getDynamicLightLevel(): $Level;
        sdl$resetDynamicLight(): void;
        sdl$getDynamicLightZ(): number;
        sdl$isDynamicLightEnabled(): boolean;
        sdl$shouldUpdateDynamicLight(): boolean;
    }
}
