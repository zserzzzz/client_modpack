import { $Function_ } from "@package/java/util/function";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Creeper } from "@package/net/minecraft/world/entity/monster";

declare module "@package/dev/lambdaurora/lambdynlights/api" {
    export class $DynamicLightHandler<T> {
        static makeHandler<T extends $LivingEntity>(luminance: $Function_<T, number>, waterSensitive: $Function_<T, boolean>): $DynamicLightHandler<T>;
        static makeCreeperEntityHandler<T extends $Creeper>(handler: $DynamicLightHandler_<T>): $DynamicLightHandler<T>;
        static makeLivingEntityHandler<T extends $LivingEntity>(handler: $DynamicLightHandler_<T>): $DynamicLightHandler<T>;
    }
    export interface $DynamicLightHandler<T> {
        getLuminance(arg0: T): number;
        isWaterSensitive(lightSource: T): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DynamicLightHandler}.
     */
    export type $DynamicLightHandler_<T> = ((arg0: T) => number);
}
