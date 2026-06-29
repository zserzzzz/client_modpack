import { $Level } from "@package/net/minecraft/world/level";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
export * as accessor from "@package/toni/sodiumdynamiclights/accessor";

declare module "@package/toni/sodiumdynamiclights" {
    export class $DynamicLightSource {
    }
    export interface $DynamicLightSource {
        sdl$shouldUpdateDynamicLight(): boolean;
        sdl$getLuminance(): number;
        sdl$resetDynamicLight(): void;
        sdl$getDynamicLightY(): number;
        sdl$getDynamicLightLevel(): $Level;
        sdl$isDynamicLightEnabled(): boolean;
        sdl$getDynamicLightX(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        sdl$getDynamicLightZ(): number;
        sdl$dynamicLightTick(): void;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: $LevelRenderer): void;
        sodiumdynamiclights$updateDynamicLight(arg0: $LevelRenderer): boolean;
    }
}
