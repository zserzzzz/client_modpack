export * as flag from "@package/de/z0rdak/yawp/api/events/flag";
export * as region from "@package/de/z0rdak/yawp/api/events/region";

declare module "@package/de/z0rdak/yawp/api/events" {
    export class $Cancelable {
        static CONTINUE: boolean;
        static CANCEL: boolean;
    }
    export interface $Cancelable {
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
    }
}
