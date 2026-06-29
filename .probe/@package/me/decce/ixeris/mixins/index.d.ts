export * as workarounds from "@package/me/decce/ixeris/mixins/workarounds";

declare module "@package/me/decce/ixeris/mixins" {
    export class $MouseHandlerAccessor {
    }
    export interface $MouseHandlerAccessor {
        isMouseGrabbed(): boolean;
        get mouseGrabbed(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MouseHandlerAccessor}.
     */
    export type $MouseHandlerAccessor_ = (() => boolean);
}
