import { $Executor } from "@package/java/util/concurrent";
import { $ParticleSystem } from "@package/gg/essential/model";
export * as renderer from "@package/gg/essential/mixins/ext/client/renderer";
export * as gui from "@package/gg/essential/mixins/ext/client/gui";
export * as network from "@package/gg/essential/mixins/ext/client/network";
export * as model from "@package/gg/essential/mixins/ext/client/model";
export * as multiplayer from "@package/gg/essential/mixins/ext/client/multiplayer";
export * as resource from "@package/gg/essential/mixins/ext/client/resource";

declare module "@package/gg/essential/mixins/ext/client" {
    export class $MinecraftExt {
    }
    export interface $MinecraftExt {
        getEssential$executor(): $Executor;
        get essential$executor(): $Executor;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftExt}.
     */
    export type $MinecraftExt_ = (() => $Executor);
    export class $ParticleSystemHolder {
    }
    export interface $ParticleSystemHolder {
        getParticleSystem(): $ParticleSystem;
        get particleSystem(): $ParticleSystem;
    }
    /**
     * Values that may be interpreted as {@link $ParticleSystemHolder}.
     */
    export type $ParticleSystemHolder_ = (() => $ParticleSystem);
}
