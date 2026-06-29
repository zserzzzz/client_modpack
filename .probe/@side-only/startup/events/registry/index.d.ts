import { $SequencedAssemblyItemBuilder, $SandpaperItemBuilder } from "@package/dev/latvian/mods/kubejs/create/item";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleType } from "@package/net/minecraft/core/particles";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ArmorMaterialBuilder, $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $EyeOfEnderJSBuilder, $TridentJSBuilder, $BoatJSBuilder } from "@package/net/liopyu/entityjs/builders/nonliving/vanilla";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $FenceGateBlockBuilder, $BasicKubeBlock$Builder, $ButtonBlockBuilder, $WallBlockBuilder, $CardinalBlockBuilder, $SlabBlockBuilder, $CropBlockBuilder, $PressurePlateBlockBuilder, $FenceBlockBuilder, $DoorBlockBuilder, $TrapdoorBlockBuilder, $PillarBlockBuilder, $CarpetBlockBuilder, $StairBlockBuilder, $FallingBlockBuilder } from "@package/dev/latvian/mods/kubejs/block/custom";
import { $CreativeTabBuilder } from "@package/dev/latvian/mods/kubejs/item/creativetab";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $DetectorBlock$Builder } from "@package/dev/latvian/mods/kubejs/block";
import { $ParticleTypeBuilder, $CustomStatBuilder, $PoiTypeBuilder, $VillagerProfessionBuilder, $MobEffectBuilder, $PotionBuilder, $SoundEventBuilder, $VillagerTypeBuilder } from "@package/dev/latvian/mods/kubejs/misc";
import { $CreativeModeTab, $Item, $ArmorMaterial } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $ThickFluidBuilder, $FluidTypeBuilder, $ThinFluidBuilder, $FluidBuilder } from "@package/dev/latvian/mods/kubejs/fluid";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $VillagerType, $VillagerProfession } from "@package/net/minecraft/world/entity/npc";
import { $ProjectileAnimatableJSBuilder, $ProjectileEntityJSBuilder, $ArrowEntityJSBuilder, $BaseEntityJSBuilder } from "@package/net/liopyu/entityjs/builders/nonliving/entityjs";
import { $AttributeBuilder } from "@package/dev/latvian/mods/kubejs/entity";
import { $MobEntityJSBuilder, $TameableMobJSBuilder, $AnimalEntityJSBuilder, $BaseLivingEntityJSBuilder, $WaterEntityJSBuilder } from "@package/net/liopyu/entityjs/builders/living/entityjs";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $RegistryKubeEvent } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $SlimeJSBuilder, $BlazeJSBuilder, $CatJSBuilder, $DonkeyJSBuilder, $PandaJSBuilder, $PiglinJSBuilder, $ParrotJSBuilder, $HorseJSBuilder, $AllayJSBuilder, $IllusionerJSBuilder, $CamelJSBuilder, $EvokerJSBuilder, $WolfJSBuilder, $BatJSBuilder, $BeeJSBuilder, $CowJSBuilder, $GhastJSBuilder, $SkeletonJSBuilder, $AxolotlJSBuilder, $ZombieJSBuilder, $DolphinJSBuilder, $CreeperJSBuilder, $GoatJSBuilder, $IronGolemJSBuilder, $GuardianJSBuilder, $ChickenJSBuilder, $EnderManJSBuilder, $WitherJSBuilder } from "@package/net/liopyu/entityjs/builders/living/vanilla";
import { $DiggerItemBuilder$Shovel, $ArmorItemBuilder$AnimalArmor, $SwordItemBuilder, $DiggerItemBuilder$Pickaxe, $SmithingTemplateItemBuilder, $ArmorItemBuilder$Boots, $DiggerItemBuilder$Hoe, $ArmorItemBuilder$Chestplate, $DiggerItemBuilder$Axe, $ArmorItemBuilder$Helmet, $ShearsItemBuilder, $ArmorItemBuilder$Leggings } from "@package/dev/latvian/mods/kubejs/item/custom";

declare module "@side-only/startup/events/registry" {
    class VillagerProfession extends $RegistryKubeEvent<$VillagerProfession> {
        create(name: string): $VillagerProfessionBuilder;
    }
    class Potion extends $RegistryKubeEvent<$Potion> {
        create(name: string): $PotionBuilder;
    }
    class EntityType extends $RegistryKubeEvent<$EntityType<any>> {
        create(name: string, type: "entityjs:nonliving"): $BaseEntityJSBuilder;
        create(name: string, type: "entityjs:living"): $BaseLivingEntityJSBuilder;
        create(name: string, type: "entityjs:mob"): $MobEntityJSBuilder;
        create(name: string, type: "entityjs:animal"): $AnimalEntityJSBuilder;
        create(name: string, type: "entityjs:watercreature"): $WaterEntityJSBuilder;
        create(name: string, type: "entityjs:tamable"): $TameableMobJSBuilder;
        create(name: string, type: "entityjs:arrow"): $ArrowEntityJSBuilder;
        create(name: string, type: "entityjs:projectile"): $ProjectileEntityJSBuilder;
        create(name: string, type: "entityjs:geckolib_projectile"): $ProjectileAnimatableJSBuilder;
        create(name: string, type: "minecraft:zombie"): $ZombieJSBuilder;
        create(name: string, type: "minecraft:allay"): $AllayJSBuilder;
        create(name: string, type: "minecraft:axolotl"): $AxolotlJSBuilder;
        create(name: string, type: "minecraft:bat"): $BatJSBuilder;
        create(name: string, type: "minecraft:bee"): $BeeJSBuilder;
        create(name: string, type: "minecraft:blaze"): $BlazeJSBuilder;
        create(name: string, type: "minecraft:boat"): $BoatJSBuilder;
        create(name: string, type: "minecraft:camel"): $CamelJSBuilder;
        create(name: string, type: "minecraft:cat"): $CatJSBuilder;
        create(name: string, type: "minecraft:chicken"): $ChickenJSBuilder;
        create(name: string, type: "minecraft:cow"): $CowJSBuilder;
        create(name: string, type: "minecraft:creeper"): $CreeperJSBuilder;
        create(name: string, type: "minecraft:dolphin"): $DolphinJSBuilder;
        create(name: string, type: "minecraft:donkey"): $DonkeyJSBuilder;
        create(name: string, type: "minecraft:enderman"): $EnderManJSBuilder;
        create(name: string, type: "minecraft:evoker"): $EvokerJSBuilder;
        create(name: string, type: "minecraft:ghast"): $GhastJSBuilder;
        create(name: string, type: "minecraft:goat"): $GoatJSBuilder;
        create(name: string, type: "minecraft:guardian"): $GuardianJSBuilder;
        create(name: string, type: "minecraft:horse"): $HorseJSBuilder;
        create(name: string, type: "minecraft:illusioner"): $IllusionerJSBuilder;
        create(name: string, type: "minecraft:iron_golem"): $IronGolemJSBuilder;
        create(name: string, type: "minecraft:panda"): $PandaJSBuilder;
        create(name: string, type: "minecraft:parrot"): $ParrotJSBuilder;
        create(name: string, type: "minecraft:eye_of_ender"): $EyeOfEnderJSBuilder;
        create(name: string, type: "minecraft:piglin"): $PiglinJSBuilder;
        create(name: string, type: "minecraft:wither"): $WitherJSBuilder;
        create(name: string, type: "minecraft:slime"): $SlimeJSBuilder;
        create(name: string, type: "minecraft:wolf"): $WolfJSBuilder;
        create(name: string, type: "minecraft:skeleton"): $SkeletonJSBuilder;
        create(name: string, type: "minecraft:trident"): $TridentJSBuilder;
    }
    class CreativeModeTab extends $RegistryKubeEvent<$CreativeModeTab> {
        create(name: string): $CreativeTabBuilder;
    }
    class NeoforgeFluidType extends $RegistryKubeEvent<$FluidType> {
        create(name: string): $FluidTypeBuilder;
    }
    class SoundEvent extends $RegistryKubeEvent<$SoundEvent> {
        create(name: string): $SoundEventBuilder;
    }
    class Fluid extends $RegistryKubeEvent<$Fluid> {
        create(name: string): $FluidBuilder;
        create(name: string, type: "kubejs:thin"): $ThinFluidBuilder;
        create(name: string, type: "kubejs:thick"): $ThickFluidBuilder;
    }
    class Block extends $RegistryKubeEvent<$Block> {
        create(name: string): $BasicKubeBlock$Builder;
        create(name: string, type: "kubejs:detector"): $DetectorBlock$Builder;
        create(name: string, type: "kubejs:slab"): $SlabBlockBuilder;
        create(name: string, type: "kubejs:stairs"): $StairBlockBuilder;
        create(name: string, type: "kubejs:fence"): $FenceBlockBuilder;
        create(name: string, type: "kubejs:wall"): $WallBlockBuilder;
        create(name: string, type: "kubejs:fence_gate"): $FenceGateBlockBuilder;
        create(name: string, type: "kubejs:pressure_plate"): $PressurePlateBlockBuilder;
        create(name: string, type: "kubejs:button"): $ButtonBlockBuilder;
        create(name: string, type: "kubejs:falling"): $FallingBlockBuilder;
        create(name: string, type: "kubejs:crop"): $CropBlockBuilder;
        create(name: string, type: "kubejs:cardinal"): $CardinalBlockBuilder;
        create(name: string, type: "kubejs:carpet"): $CarpetBlockBuilder;
        create(name: string, type: "kubejs:door"): $DoorBlockBuilder;
        create(name: string, type: "kubejs:trapdoor"): $TrapdoorBlockBuilder;
        create(name: string, type: "kubejs:pillar"): $PillarBlockBuilder;
    }
    class Item extends $RegistryKubeEvent<$Item> {
        create(name: string): $ItemBuilder;
        create(name: string, type: "kubejs:sword"): $SwordItemBuilder;
        create(name: string, type: "kubejs:pickaxe"): $DiggerItemBuilder$Pickaxe;
        create(name: string, type: "kubejs:axe"): $DiggerItemBuilder$Axe;
        create(name: string, type: "kubejs:shovel"): $DiggerItemBuilder$Shovel;
        create(name: string, type: "kubejs:hoe"): $DiggerItemBuilder$Hoe;
        create(name: string, type: "kubejs:shears"): $ShearsItemBuilder;
        create(name: string, type: "kubejs:helmet"): $ArmorItemBuilder$Helmet;
        create(name: string, type: "kubejs:chestplate"): $ArmorItemBuilder$Chestplate;
        create(name: string, type: "kubejs:leggings"): $ArmorItemBuilder$Leggings;
        create(name: string, type: "kubejs:boots"): $ArmorItemBuilder$Boots;
        create(name: string, type: "kubejs:animal_armor"): $ArmorItemBuilder$AnimalArmor;
        create(name: string, type: "kubejs:smithing_template"): $SmithingTemplateItemBuilder;
        create(name: string, type: "create:sequenced_assembly"): $SequencedAssemblyItemBuilder;
        create(name: string, type: "create:sandpaper"): $SandpaperItemBuilder;
    }
    class MobEffect extends $RegistryKubeEvent<$MobEffect> {
        create(name: string): $MobEffectBuilder;
    }
    class VillagerType extends $RegistryKubeEvent<$VillagerType> {
        create(name: string): $VillagerTypeBuilder;
    }
    class PointOfInterestType extends $RegistryKubeEvent<$PoiType> {
        create(name: string): $PoiTypeBuilder;
    }
    class ParticleType extends $RegistryKubeEvent<$ParticleType<any>> {
        create(name: string): $ParticleTypeBuilder;
    }
    class CustomStat extends $RegistryKubeEvent<$ResourceLocation> {
        create(name: string): $CustomStatBuilder;
    }
    class Attribute extends $RegistryKubeEvent<$Attribute> {
        create(name: string): $AttributeBuilder;
    }
    class ArmorMaterial extends $RegistryKubeEvent<$ArmorMaterial> {
        create(name: string): $ArmorMaterialBuilder;
    }
}
