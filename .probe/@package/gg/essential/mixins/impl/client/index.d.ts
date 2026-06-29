import { $User } from "@package/net/minecraft/client";
export * as gui from "@package/gg/essential/mixins/impl/client/gui";
export * as model from "@package/gg/essential/mixins/impl/client/model";
export * as audio from "@package/gg/essential/mixins/impl/client/audio";
export * as entity from "@package/gg/essential/mixins/impl/client/entity";
export * as renderer from "@package/gg/essential/mixins/impl/client/renderer";
export * as network from "@package/gg/essential/mixins/impl/client/network";
export * as resources from "@package/gg/essential/mixins/impl/client/resources";

declare module "@package/gg/essential/mixins/impl/client" {
    export class $MinecraftExt {
    }
    export interface $MinecraftExt {
        setSession(arg0: $User): void;
        set session(value: $User);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftExt}.
     */
    export type $MinecraftExt_ = ((arg0: $User) => void);
}
