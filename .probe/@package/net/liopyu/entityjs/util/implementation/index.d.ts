import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MoveControl } from "@package/net/minecraft/world/entity/ai/control";
import { $WrappedAnimatableEntity } from "@package/net/liopyu/entityjs/entities/living/entityjs";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $MobSpawnSettings$SpawnerData, $Biome } from "@package/net/minecraft/world/level/biome";
import { $EntityType_, $LivingEntity, $EntityType } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $ModifyEntityBuilder } from "@package/net/liopyu/entityjs/builders/modification";
import { $Consumer_, $Consumer, $Supplier_, $Supplier } from "@package/java/util/function";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $CustomEntityBuilder } from "@package/net/liopyu/entityjs/builders/misc";
import { $Record, $Object, $Class } from "@package/java/lang";
import { $EntitySerializerType_ } from "@package/net/liopyu/entityjs/util";

declare module "@package/net/liopyu/entityjs/util/implementation" {
    export class $IRegistryJS {
    }
    export interface $IRegistryJS {
        createCustom(arg0: $ResourceLocation_, arg1: $Class<$LivingEntity>, arg2: $Consumer_<$ModifyEntityBuilder>): $CustomEntityBuilder;
    }
    /**
     * Values that may be interpreted as {@link $IRegistryJS}.
     */
    export type $IRegistryJS_ = ((arg0: $ResourceLocation, arg1: $Class<$LivingEntity>, arg2: $Consumer<$ModifyEntityBuilder>) => $CustomEntityBuilder);
    export class $ILivingEntityJS {
    }
    export interface $ILivingEntityJS {
        getAnimatableEntity(): $WrappedAnimatableEntity;
        triggerAnimation(arg0: string, arg1: string): void;
        get animatableEntity(): $WrappedAnimatableEntity;
    }
    export class $IEntityJS {
    }
    export interface $IEntityJS {
        isMoving(): boolean;
        setSyncedData(arg0: string, arg1: $Object): void;
        addSyncedData(arg0: $EntitySerializerType_, arg1: string, arg2: $Object): void;
        getSyncedData(arg0: string): $Object;
        get moving(): boolean;
    }
    export class $IAnimationControllerJS {
    }
    export interface $IAnimationControllerJS {
        getCurrentAnimationTick(): number;
        get currentAnimationTick(): number;
    }
    /**
     * Values that may be interpreted as {@link $IAnimationControllerJS}.
     */
    export type $IAnimationControllerJS_ = (() => number);
    export class $EACAccess {
    }
    export interface $EACAccess {
        getMap(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
        get map(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
    }
    /**
     * Values that may be interpreted as {@link $EACAccess}.
     */
    export type $EACAccess_ = (() => $Map_<$EntityType_<$LivingEntity>, $AttributeSupplier>);
    export class $MobAccessor {
    }
    export interface $MobAccessor {
        setNavigation(arg0: $PathNavigation): void;
        setMoveControl(arg0: $MoveControl): void;
        set navigation(value: $PathNavigation);
        set moveControl(value: $MoveControl);
    }
    export class $EventBasedSpawnModifier$BiomeSpawn extends $Record {
        biomes(): $List<$Either<$ResourceLocation, $TagKey<$Biome>>>;
        spawnerData(): $Supplier<$MobSpawnSettings$SpawnerData>;
        constructor(biomes: $List_<$Either<$ResourceLocation_, $TagKey_<$Biome>>>, spawnerData: $Supplier_<$MobSpawnSettings$SpawnerData>);
    }
    /**
     * Values that may be interpreted as {@link $EventBasedSpawnModifier$BiomeSpawn}.
     */
    export type $EventBasedSpawnModifier$BiomeSpawn_ = { biomes?: $List_<$Either<$ResourceLocation_, $TagKey_<$Biome>>>, spawnerData?: $Supplier_<$MobSpawnSettings$SpawnerData>,  } | [biomes?: $List_<$Either<$ResourceLocation_, $TagKey_<$Biome>>>, spawnerData?: $Supplier_<$MobSpawnSettings$SpawnerData>, ];
}
