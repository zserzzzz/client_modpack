import { $MixinEnvironment, $MixinEnvironment$Phase } from "@package/org/spongepowered/asm/mixin";
import { $ClassNode } from "@package/org/objectweb/asm/tree";
import { $Set_, $Set, $List } from "@package/java/util";

declare module "@package/org/spongepowered/asm/mixin/extensibility" {
    export class $IEnvironmentTokenProvider {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IEnvironmentTokenProvider {
        getToken(arg0: string, arg1: $MixinEnvironment): number;
        getPriority(): number;
        get priority(): number;
    }
    export class $IMixinConfigPlugin {
    }
    export interface $IMixinConfigPlugin {
        preApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        getMixins(): $List<string>;
        postApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        onLoad(arg0: string): void;
        shouldApplyMixin(arg0: string, arg1: string): boolean;
        acceptTargets(arg0: $Set_<string>, arg1: $Set_<string>): void;
        getRefMapperConfig(): string;
        get mixins(): $List<string>;
        get refMapperConfig(): string;
    }
    export class $IMixinInfo {
    }
    export interface $IMixinInfo {
        getPhase(): $MixinEnvironment$Phase;
        getName(): string;
        getPriority(): number;
        getClassName(): string;
        getClassBytes(): number[];
        getConfig(): $IMixinConfig;
        getClassNode(arg0: number): $ClassNode;
        getTargetClasses(): $List<string>;
        isDetachedSuper(): boolean;
        getClassRef(): string;
        get phase(): $MixinEnvironment$Phase;
        get name(): string;
        get priority(): number;
        get className(): string;
        get classBytes(): number[];
        get config(): $IMixinConfig;
        get targetClasses(): $List<string>;
        get detachedSuper(): boolean;
        get classRef(): string;
    }
    export class $IRemapper {
    }
    export interface $IRemapper {
        mapFieldName(arg0: string, arg1: string, arg2: string): string;
        mapMethodName(arg0: string, arg1: string, arg2: string): string;
        unmapDesc(arg0: string): string;
        unmap(arg0: string): string;
        map(arg0: string): string;
        mapDesc(arg0: string): string;
    }
    export class $IMixinConfigSource {
    }
    export interface $IMixinConfigSource {
        getDescription(): string;
        getId(): string;
        get description(): string;
        get id(): string;
    }
    export class $IMixinConfig {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IMixinConfig {
        getName(): string;
        getPriority(): number;
        getSource(): $IMixinConfigSource;
        getPlugin(): $IMixinConfigPlugin;
        getTargets(): $Set<string>;
        isRequired(): boolean;
        getEnvironment(): $MixinEnvironment;
        getMixinPackage(): string;
        getDecoration<V>(arg0: string): V;
        hasDecoration(arg0: string): boolean;
        getCleanSourceId(): string;
        decorate<V>(arg0: string, arg1: V): void;
        get name(): string;
        get priority(): number;
        get source(): $IMixinConfigSource;
        get plugin(): $IMixinConfigPlugin;
        get targets(): $Set<string>;
        get required(): boolean;
        get environment(): $MixinEnvironment;
        get mixinPackage(): string;
        get cleanSourceId(): string;
    }
}
