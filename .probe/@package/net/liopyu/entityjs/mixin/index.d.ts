import { $Brain$Provider } from "@package/net/minecraft/world/entity/ai";

declare module "@package/net/liopyu/entityjs/mixin" {
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        entityJs$brainProvider(): $Brain$Provider<never>;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = (() => $Brain$Provider<never>);
}
