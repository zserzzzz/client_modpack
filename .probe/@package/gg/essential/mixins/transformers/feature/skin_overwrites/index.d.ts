import { $ProfileResult_, $ProfileResult } from "@package/com/mojang/authlib/yggdrasil";
import { $CompletableFuture } from "@package/java/util/concurrent";

declare module "@package/gg/essential/mixins/transformers/feature/skin_overwrites" {
    export class $MinecraftAccessor {
    }
    export interface $MinecraftAccessor {
        setGameProfileFuture(arg0: $CompletableFuture<$ProfileResult_>): void;
        set gameProfileFuture(value: $CompletableFuture<$ProfileResult_>);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftAccessor}.
     */
    export type $MinecraftAccessor_ = ((arg0: $CompletableFuture<$ProfileResult>) => void);
}
