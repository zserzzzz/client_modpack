
declare module "@package/gg/essential/mixins/transformers/client/renderer" {
    export class $DynamicRenderTickCounterAccessor {
    }
    export interface $DynamicRenderTickCounterAccessor {
        essential$getRawTickDelta(): number;
    }
    /**
     * Values that may be interpreted as {@link $DynamicRenderTickCounterAccessor}.
     */
    export type $DynamicRenderTickCounterAccessor_ = (() => number);
}
