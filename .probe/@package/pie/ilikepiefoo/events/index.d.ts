import { $Level } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map } from "@package/java/util";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $KubeEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Method } from "@package/java/lang/reflect";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $Object } from "@package/java/lang";
export * as custom from "@package/pie/ilikepiefoo/events/custom";

declare module "@package/pie/ilikepiefoo/events" {
    export class $EntityTameEventJS implements $KubePlayerEvent {
        static of(arg0: $Animal, arg1: $Player): $EntityTameEventJS;
        getAnimal(): $Entity;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $Animal, arg1: $Player);
        get animal(): $Entity;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $PlayerChangeDimensionEventJS implements $KubePlayerEvent {
        static of(arg0: $ServerPlayer, arg1: $ResourceKey_<$Level>, arg2: $ResourceKey_<$Level>): $PlayerChangeDimensionEventJS;
        getOldWorldKey(): $ResourceKey<$Level>;
        getNewWorldKey(): $ResourceKey<$Level>;
        getOldLevel(): $Level;
        getNewLevel(): $Level;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $ServerPlayer, arg1: $ResourceKey_<$Level>, arg2: $ResourceKey_<$Level>);
        get oldWorldKey(): $ResourceKey<$Level>;
        get newWorldKey(): $ResourceKey<$Level>;
        get oldLevel(): $Level;
        get newLevel(): $Level;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $PlayerCloneEventJS implements $KubePlayerEvent {
        static of(arg0: $ServerPlayer, arg1: $ServerPlayer, arg2: boolean): $PlayerCloneEventJS;
        causedByPortal(): boolean;
        causedByDeath(): boolean;
        returningFromEnd(): boolean;
        getNewPlayer(): $Player;
        getOldPlayer(): $Player;
        leavingEnd(): boolean;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $ServerPlayer, arg1: $ServerPlayer, arg2: boolean);
        get newPlayer(): $Player;
        get oldPlayer(): $Player;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $ProxyEventJS implements $KubeEvent {
        getReturnType(): string;
        getGenericReturnType(): string;
        getParameters(): $Map<string, $Object>;
        getMethodName(): string;
        setResult(arg0: $Object): void;
        getResult(): $Object;
        getArg(arg0: number): $Object;
        getArgs(): $Object[];
        getResultOptional(): (never) | undefined;
        isResultRequired(): boolean;
        hasResult(): boolean;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        static LOG: $Logger;
        constructor(arg0: $Method, arg1: $Object[]);
        get returnType(): string;
        get genericReturnType(): string;
        get parameters(): $Map<string, $Object>;
        get methodName(): string;
        get args(): $Object[];
        get resultOptional(): (never) | undefined;
        get resultRequired(): boolean;
    }
    export class $EntityEnterChunkEventJS implements $KubeEntityEvent {
        static of(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $EntityEnterChunkEventJS;
        getEntity(): $Entity;
        getChunkY(): number;
        getChunkX(): number;
        getChunkZ(): number;
        getPrevY(): number;
        getPrevZ(): number;
        getPrevX(): number;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
        get entity(): $Entity;
        get chunkY(): number;
        get chunkX(): number;
        get chunkZ(): number;
        get prevY(): number;
        get prevZ(): number;
        get prevX(): number;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $PlayerRespawnEventJS implements $KubePlayerEvent {
        static of(arg0: $ServerPlayer, arg1: boolean): $PlayerRespawnEventJS;
        causedByPortal(): boolean;
        causedByDeath(): boolean;
        returningFromEnd(): boolean;
        leavingEnd(): boolean;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $ServerPlayer, arg1: boolean);
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
}
