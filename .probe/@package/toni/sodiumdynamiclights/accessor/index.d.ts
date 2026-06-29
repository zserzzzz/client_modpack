import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $DynamicLightHandler_, $DynamicLightHandler } from "@package/dev/lambdaurora/lambdynlights/api";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/toni/sodiumdynamiclights/accessor" {
    export class $WorldRendererAccessor {
    }
    export interface $WorldRendererAccessor {
        sodiumdynamiclights$scheduleChunkRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $WorldRendererAccessor}.
     */
    export type $WorldRendererAccessor_ = ((arg0: number, arg1: number, arg2: number, arg3: boolean) => void);
    export class $DynamicLightHandlerHolder<T> {
        static cast<T extends $BlockEntity>(entityType: $BlockEntityType_<T>): $DynamicLightHandlerHolder<T>;
        static cast<T extends $Entity>(entityType: $EntityType_<T>): $DynamicLightHandlerHolder<T>;
    }
    export interface $DynamicLightHandlerHolder<T> {
        sodiumdynamiclights$getName(): $Component;
        sodiumdynamiclights$getSetting(): boolean;
        sodiumdynamiclights$getDynamicLightHandler(): $DynamicLightHandler<T>;
        sodiumdynamiclights$setDynamicLightHandler(arg0: $DynamicLightHandler_<T>): void;
    }
}
