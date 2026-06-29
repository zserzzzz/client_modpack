import { $MixinEnvironment, $MixinEnvironment$Phase } from "@package/org/spongepowered/asm/mixin";
import { $ClassNode } from "@package/org/objectweb/asm/tree";
import { $Set_, $Set, $List } from "@package/java/util";

declare module "@package/org/spongepowered/asm/mixin/extensibility" {
    export class $IEnvironmentTokenProvider {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IEnvironmentTokenProvider {
        getPriority(): number;
        getToken(arg0: string, arg1: $MixinEnvironment): number;
        get priority(): number;
    }
    export class $IMixinConfigPlugin {
    }
    export interface $IMixinConfigPlugin {
        getRefMapperConfig(): string;
        onLoad(arg0: string): void;
        shouldApplyMixin(arg0: string, arg1: string): boolean;
        acceptTargets(arg0: $Set_<string>, arg1: $Set_<string>): void;
        postApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        preApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        getMixins(): $List<string>;
        get refMapperConfig(): string;
        get mixins(): $List<string>;
    }
    export class $IMixinInfo {
    }
    export interface $IMixinInfo {
        getName(): string;
        getPriority(): number;
        getClassName(): string;
        getClassBytes(): number[];
        getTargetClasses(): $List<string>;
        getConfig(): $IMixinConfig;
        getClassNode(arg0: number): $ClassNode;
        getPhase(): $MixinEnvironment$Phase;
        getClassRef(): string;
        isDetachedSuper(): boolean;
        get name(): string;
        get priority(): number;
        get className(): string;
        get classBytes(): number[];
        get targetClasses(): $List<string>;
        get config(): $IMixinConfig;
        get phase(): $MixinEnvironment$Phase;
        get classRef(): string;
        get detachedSuper(): boolean;
    }
    export class $IRemapper {
    }
    export interface $IRemapper {
        unmapDesc(arg0: string): string;
        map(arg0: string): string;
        unmap(arg0: string): string;
        mapDesc(arg0: string): string;
        mapMethodName(arg0: string, arg1: string, arg2: string): string;
        mapFieldName(arg0: string, arg1: string, arg2: string): string;
    }
    export class $IMixinConfigSource {
    }
    export interface $IMixinConfigSource {
        getId(): string;
        getDescription(): string;
        get id(): string;
        get description(): string;
    }
    export class $IMixinConfig {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IMixinConfig {
        decorate<V>(arg0: string, arg1: V): void;
        getName(): string;
        getPriority(): number;
        getSource(): $IMixinConfigSource;
        getCleanSourceId(): string;
        getDecoration<V>(arg0: string): V;
        getMixinPackage(): string;
        hasDecoration(arg0: string): boolean;
        getEnvironment(): $MixinEnvironment;
        getTargets(): $Set<string>;
        isRequired(): boolean;
        getPlugin(): $IMixinConfigPlugin;
        get name(): string;
        get priority(): number;
        get source(): $IMixinConfigSource;
        get cleanSourceId(): string;
        get mixinPackage(): string;
        get environment(): $MixinEnvironment;
        get targets(): $Set<string>;
        get required(): boolean;
        get plugin(): $IMixinConfigPlugin;
    }
}
