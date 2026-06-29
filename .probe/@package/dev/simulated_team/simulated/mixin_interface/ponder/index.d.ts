import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/simulated_team/simulated/mixin_interface/ponder" {
    export class $TextWindowElementExtension {
    }
    export interface $TextWindowElementExtension {
        simulated$hidePointer(): void;
    }
    /**
     * Values that may be interpreted as {@link $TextWindowElementExtension}.
     */
    export type $TextWindowElementExtension_ = (() => void);
    export class $PonderSceneExtension {
    }
    export interface $PonderSceneExtension {
        simulated$toggleRenderBasePlateShadow(): void;
        simulated$getBasePlateAnimationTimer(arg0: number): number;
        simulated$getScale(arg0: number): number;
        simulated$setOldShadowOffset(arg0: $Vec3_): void;
        simulated$moveShadowOffset(arg0: $Vec3_): void;
        simulated$getYOffset(arg0: number): number;
        simulated$setYOffset(arg0: number): void;
        simulated$setShadowOffset(arg0: $Vec3_): void;
        simulated$getShadowOffset(arg0: number): $Vec3;
        simulated$setScaleFactor(arg0: number): void;
    }
}
