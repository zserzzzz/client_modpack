import { $BlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $Runnable, $Thread } from "@package/java/lang";
import { $Queue } from "@package/java/util";

declare module "@package/xaero/map/executor" {
    export class $Executor extends $BlockableEventLoop<$Runnable> {
        pendingRunnables: $Queue<$Runnable>;
        constructor(arg0: string, arg1: $Thread);
    }
}
