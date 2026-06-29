import { $Function_, $Function, $ToIntFunction } from "@package/java/util/function";
import { $NoteBlockInstrument } from "@package/net/minecraft/world/level/block/state/properties";
import { $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $BlockBehaviour$StateArgumentPredicate, $BlockBehaviour$OffsetFunction_, $BlockBehaviour$Properties, $BlockState, $BlockBehaviour$OffsetFunction, $BlockBehaviour$StatePredicate } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $EntityType, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SoundType } from "@package/net/minecraft/world/level/block";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $AttributeSupplier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map } from "@package/java/util";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/fabricmc/fabric/mixin/object/builder" {
    export class $DefaultAttributeRegistryAccessor {
        static getRegistry(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
        static get registry(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
    }
    export interface $DefaultAttributeRegistryAccessor {
    }
    export class $AbstractBlockSettingsAccessor {
    }
    export interface $AbstractBlockSettingsAccessor {
        getRequiredFeatures(): $FeatureFlagSet;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        getIsRandomlyTicking(): boolean;
        setIsRandomlyTicking(arg0: boolean): void;
        getSpawnTerrainParticles(): boolean;
        setSpawnTerrainParticles(arg0: boolean): void;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        getDynamicShape(): boolean;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        getDestroyTime(): number;
        getLuminance(): $ToIntFunction<$BlockState>;
        getCanOcclude(): boolean;
        setCanOcclude(arg0: boolean): void;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        setDynamicShape(arg0: boolean): void;
        setForceSolidOff(arg0: boolean): void;
        getReplaceable(): boolean;
        setForceSolidOn(arg0: boolean): void;
        setIgnitedByLava(arg0: boolean): void;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        setHasCollision(arg0: boolean): void;
        getInstrument(): $NoteBlockInstrument;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        getForceSolidOn(): boolean;
        getPushReaction(): $PushReaction;
        getForceSolidOff(): boolean;
        getIgnitedByLava(): boolean;
        setReplaceable(arg0: boolean): void;
        getLiquid(): boolean;
        setLiquid(arg0: boolean): void;
        setIsAir(arg0: boolean): void;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        getIsAir(): boolean;
        isRequiresCorrectToolForDrops(): boolean;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        getDrops(): $ResourceKey<$LootTable>;
        getExplosionResistance(): number;
        getFriction(): number;
        getJumpFactor(): number;
        getSpeedFactor(): number;
        getMapColor(): $Function<$BlockState, $MapColor>;
        getSoundType(): $SoundType;
        getHasCollision(): boolean;
        get emissiveRendering(): $BlockBehaviour$StatePredicate;
        get isRedstoneConductor(): $BlockBehaviour$StatePredicate;
        get isValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        get isSuffocating(): $BlockBehaviour$StatePredicate;
        get isViewBlocking(): $BlockBehaviour$StatePredicate;
        get hasPostProcess(): $BlockBehaviour$StatePredicate;
        get destroyTime(): number;
        get luminance(): $ToIntFunction<$BlockState>;
        get instrument(): $NoteBlockInstrument;
        get pushReaction(): $PushReaction;
        get explosionResistance(): number;
        get friction(): number;
        get jumpFactor(): number;
        get speedFactor(): number;
        get soundType(): $SoundType;
    }
    export class $AbstractBlockAccessor {
    }
    export interface $AbstractBlockAccessor {
        getProperties(): $BlockBehaviour$Properties;
        get properties(): $BlockBehaviour$Properties;
    }
    /**
     * Values that may be interpreted as {@link $AbstractBlockAccessor}.
     */
    export type $AbstractBlockAccessor_ = (() => $BlockBehaviour$Properties);
}
