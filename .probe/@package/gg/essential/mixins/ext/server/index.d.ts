import { $CoroutineScope, $CoroutineDispatcher } from "@package/kotlinx/coroutines";
export * as integrated from "@package/gg/essential/mixins/ext/server/integrated";

declare module "@package/gg/essential/mixins/ext/server" {
    export class $MinecraftServerExt {
    }
    export interface $MinecraftServerExt {
        getEssential$dispatcher(): $CoroutineDispatcher;
        getEssential$coroutineScope(): $CoroutineScope;
        get essential$dispatcher(): $CoroutineDispatcher;
        get essential$coroutineScope(): $CoroutineScope;
    }
}
