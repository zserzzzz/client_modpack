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
        getExplosionResistance(): number;
        getLiquid(): boolean;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        getRequiredFeatures(): $FeatureFlagSet;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        setSpawnTerrainParticles(arg0: boolean): void;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        setIsRandomlyTicking(arg0: boolean): void;
        getSpawnTerrainParticles(): boolean;
        getIsRandomlyTicking(): boolean;
        getHasCollision(): boolean;
        getDestroyTime(): number;
        getLuminance(): $ToIntFunction<$BlockState>;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        setReplaceable(arg0: boolean): void;
        setForceSolidOff(arg0: boolean): void;
        setIgnitedByLava(arg0: boolean): void;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        getForceSolidOff(): boolean;
        setForceSolidOn(arg0: boolean): void;
        getCanOcclude(): boolean;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getIgnitedByLava(): boolean;
        setCanOcclude(arg0: boolean): void;
        getDynamicShape(): boolean;
        getInstrument(): $NoteBlockInstrument;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        getReplaceable(): boolean;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        getForceSolidOn(): boolean;
        setDynamicShape(arg0: boolean): void;
        setHasCollision(arg0: boolean): void;
        getPushReaction(): $PushReaction;
        getMapColor(): $Function<$BlockState, $MapColor>;
        getFriction(): number;
        getSoundType(): $SoundType;
        getSpeedFactor(): number;
        getJumpFactor(): number;
        getDrops(): $ResourceKey<$LootTable>;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        isRequiresCorrectToolForDrops(): boolean;
        getIsAir(): boolean;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        setIsAir(arg0: boolean): void;
        setLiquid(arg0: boolean): void;
        get explosionResistance(): number;
        get emissiveRendering(): $BlockBehaviour$StatePredicate;
        get isRedstoneConductor(): $BlockBehaviour$StatePredicate;
        get destroyTime(): number;
        get luminance(): $ToIntFunction<$BlockState>;
        get isSuffocating(): $BlockBehaviour$StatePredicate;
        get isViewBlocking(): $BlockBehaviour$StatePredicate;
        get instrument(): $NoteBlockInstrument;
        get isValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        get hasPostProcess(): $BlockBehaviour$StatePredicate;
        get pushReaction(): $PushReaction;
        get friction(): number;
        get soundType(): $SoundType;
        get speedFactor(): number;
        get jumpFactor(): number;
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
