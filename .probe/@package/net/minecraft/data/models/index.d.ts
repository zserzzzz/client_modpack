import { $JsonObject, $JsonElement } from "@package/com/google/gson";
import { $ArmorMaterial, $Item_, $Item, $ArmorItem } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ModelTemplate, $TextureMapping, $TexturedModel, $TextureSlot, $TexturedModel$Provider_ } from "@package/net/minecraft/data/models/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ItemModelGeneratorsAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $BlockStateGenerator, $PropertyDispatch, $Variant, $PropertyDispatch$C4, $MultiPartGenerator, $VariantProperties$Rotation_, $Condition$TerminalCondition, $MultiVariantGenerator } from "@package/net/minecraft/data/models/blockstates";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $BlockFamily, $DataProvider, $PackOutput, $CachedOutput_, $BlockFamily$Variant } from "@package/net/minecraft/data";
import { $BiConsumer, $Consumer, $BiConsumer_, $Function_, $Consumer_, $UnaryOperator_, $BiFunction_, $Function, $Supplier } from "@package/java/util/function";
import { $DripstoneThickness_, $DoorHingeSide_, $DoorHingeSide, $DoubleBlockHalf_, $Property, $BooleanProperty, $DoubleBlockHalf } from "@package/net/minecraft/world/level/block/state/properties";
import { $Holder_, $Holder, $FrontAndTop_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record, $Comparable } from "@package/java/lang";
export * as blockstates from "@package/net/minecraft/data/models/blockstates";
export * as model from "@package/net/minecraft/data/models/model";

declare module "@package/net/minecraft/data/models" {
    export class $BlockModelGenerators$BlockStateGeneratorSupplier {
    }
    export interface $BlockModelGenerators$BlockStateGeneratorSupplier {
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$BlockStateGeneratorSupplier}.
     */
    export type $BlockModelGenerators$BlockStateGeneratorSupplier_ = (() => void);
    export class $BlockModelGenerators$BlockFamilyProvider {
        fence(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        sign(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        wall(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        button(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        slab(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        pressurePlate(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        fenceGate(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        stairs(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        customFenceGate(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        customFence(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        fullBlock(block: $Block_, modelTemplate: $ModelTemplate): $BlockModelGenerators$BlockFamilyProvider;
        donateModelTo(sourceBlock: $Block_, block: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        generateFor(family: $BlockFamily): $BlockModelGenerators$BlockFamilyProvider;
        this$0: $BlockModelGenerators;
        constructor(mapping: $BlockModelGenerators, arg1: $TextureMapping);
    }
    export class $BlockModelGenerators$TintState extends $Enum<$BlockModelGenerators$TintState> {
        static values(): $BlockModelGenerators$TintState[];
        static valueOf(arg0: string): $BlockModelGenerators$TintState;
        getCrossPot(): $ModelTemplate;
        getCross(): $ModelTemplate;
        static NOT_TINTED: $BlockModelGenerators$TintState;
        static TINTED: $BlockModelGenerators$TintState;
        get crossPot(): $ModelTemplate;
        get cross(): $ModelTemplate;
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$TintState}.
     */
    export type $BlockModelGenerators$TintState_ = "tinted" | "not_tinted";
    export class $BlockModelGenerators {
        run(): void;
        family(block: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        createCrossBlockWithDefaultItem(crossBlock: $Block_, tintState: $BlockModelGenerators$TintState_): void;
        createCrossBlockWithDefaultItem(crossBlock: $Block_, tintState: $BlockModelGenerators$TintState_, textureMapping: $TextureMapping): void;
        createPointedDripstoneVariant(direction: $Direction_, dripstoneThickness: $DripstoneThickness_): $Variant;
        createNonTemplateModelBlock(railBlock: $Block_): void;
        createNonTemplateModelBlock(bulbBlock: $Block_, sourceBlock: $Block_): void;
        static createMirroredCubeGenerator(columnBlock: $Block_, location: $ResourceLocation_, textureMapping: $TextureMapping, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        static createHorizontalFacingDispatchAlt(): $PropertyDispatch;
        static createMirroredColumnGenerator(columnBlock: $Block_, location: $ResourceLocation_, textureMapping: $TextureMapping, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        static createTorchHorizontalDispatch(): $PropertyDispatch;
        createRotatedMirroredVariantBlock(railBlock: $Block_): void;
        static createAxisAlignedPillarBlock(axisAlignedPillarBlock: $Block_, modelLocation: $ResourceLocation_): $BlockStateGenerator;
        createAxisAlignedPillarBlock(axisAlignedPillarBlock: $Block_, provider: $TexturedModel$Provider_): void;
        createHorizontallyRotatedBlock(axisAlignedPillarBlock: $Block_, provider: $TexturedModel$Provider_): void;
        static createHorizontalFacingDispatch(): $PropertyDispatch;
        applyRotation(frontAndTop: $FrontAndTop_, variant: $Variant): $Variant;
        static createButton(buttonBlock: $Block_, unpoweredModelLocation: $ResourceLocation_, poweredModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static createPressurePlate(buttonBlock: $Block_, unpoweredModelLocation: $ResourceLocation_, poweredModelLocation: $ResourceLocation_): $BlockStateGenerator;
        createOrientableTrapdoor(railBlock: $Block_): void;
        static createOrientableTrapdoor(orientableTrapdoorBlock: $Block_, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        createSimpleFlatItemModel(flatBlock: $Block_, layerZeroTextureSuffix: string): void;
        createSimpleFlatItemModel(railBlock: $Block_): void;
        createSimpleFlatItemModel(flatItem: $Item_): void;
        static createFence(buttonBlock: $Block_, unpoweredModelLocation: $ResourceLocation_, poweredModelLocation: $ResourceLocation_): $BlockStateGenerator;
        createWeightedPressurePlate(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createNonTemplateHorizontalBlock(railBlock: $Block_): void;
        addSlotStateAndRotationVariants(generator: $MultiPartGenerator, condition: $Condition$TerminalCondition, rotation: $VariantProperties$Rotation_): void;
        copyTrapdoorModel(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createDoubleBlock(doubleBlock: $Block_, topHalfModelLocation: $ResourceLocation_, bottomHalfModelLocation: $ResourceLocation_): void;
        createDoublePlant(crossBlock: $Block_, tintState: $BlockModelGenerators$TintState_): void;
        createGlassBlocks(bulbBlock: $Block_, sourceBlock: $Block_): void;
        copyDoorModel(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createAirLikeBlock(airLikeBlock: $Block_, particleTexture: $ResourceLocation_): void;
        createAirLikeBlock(airLikeBlock: $Block_, particleItem: $Item_): void;
        createFlowerBed(railBlock: $Block_): void;
        createCommandBlock(railBlock: $Block_): void;
        createAnvil(railBlock: $Block_): void;
        createTrivialBlock(axisAlignedPillarBlock: $Block_, provider: $TexturedModel$Provider_): void;
        createTrivialBlock(block: $Block_, textureMapping: $TextureMapping, modelTemplate: $ModelTemplate): void;
        createPassiveRail(railBlock: $Block_): void;
        blockEntityModels(entityBlockModelLocation: $ResourceLocation_, particleBlock: $Block_): $BlockModelGenerators$BlockEntityModelGenerator;
        blockEntityModels(entityBlockBaseModel: $Block_, particleBlock: $Block_): $BlockModelGenerators$BlockEntityModelGenerator;
        createBeeNest(beeNestBlock: $Block_, textureMappingGetter: $Function_<$Block, $TextureMapping>): void;
        createActiveRail(railBlock: $Block_): void;
        createTrivialCube(railBlock: $Block_): void;
        createStems(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createCropBlock(cropBlock: $Block_, ageProperty: $Property<number>, ...ageToVisualStageMapping: number[]): void;
        createFurnace(axisAlignedPillarBlock: $Block_, provider: $TexturedModel$Provider_): void;
        createCoralFans(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createCoral(coralBlock: $Block_, deadCoralBlock: $Block_, coralFullBlock: $Block_, deadCoralFullBlock: $Block_, coralFanBlock: $Block_, deadCoralFanBlock: $Block_, coralWallFanBlock: $Block_, deadCoralWallFanBlock: $Block_): void;
        createCampfires(...campfireBlocks: $Block_[]): void;
        createPlant(growingPlantBlock: $Block_, plantBlock: $Block_, tintState: $BlockModelGenerators$TintState_): void;
        woodProvider(logBlock: $Block_): $BlockModelGenerators$WoodProvider;
        static configureDoorHalf(properties: $PropertyDispatch$C4<$Direction_, $DoubleBlockHalf_, $DoorHingeSide_, boolean>, half: $DoubleBlockHalf_, leftModelLocation: $ResourceLocation_, leftOpenModelLocation: $ResourceLocation_, rightModelLocation: $ResourceLocation_, rightOpenModelLocation: $ResourceLocation_): $PropertyDispatch$C4<$Direction, $DoubleBlockHalf, $DoorHingeSide, boolean>;
        createHangingSign(particleBlock: $Block_, hangingSignBlock: $Block_, wallHangingSignBlock: $Block_): void;
        createCrossBlock(crossBlock: $Block_, tintState: $BlockModelGenerators$TintState_): void;
        createCrossBlock(crossBlock: $Block_, tintState: $BlockModelGenerators$TintState_, textureMapping: $TextureMapping): void;
        createCrossBlock(crossBlock: $Block_, tintState: $BlockModelGenerators$TintState_, property: $Property<number>, ...propertyValues: number[]): void;
        createBambooModels(age: number): $List<$Variant>;
        createAzalea(railBlock: $Block_): void;
        createLantern(railBlock: $Block_): void;
        createPottedAzalea(railBlock: $Block_): void;
        createGenericCube(railBlock: $Block_): void;
        createCopperBulb(railBlock: $Block_): void;
        createCopperBulb(bulbBlock: $Block_, unlit: $ResourceLocation_, unlitPowered: $ResourceLocation_, lit: $ResourceLocation_, litPowered: $ResourceLocation_): $BlockStateGenerator;
        createNyliumBlock(railBlock: $Block_): void;
        createBedItem(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createNetherRoots(bulbBlock: $Block_, sourceBlock: $Block_): void;
        addBookSlotModel(generator: $MultiPartGenerator, condition: $Condition$TerminalCondition, rotation: $VariantProperties$Rotation_, hasBookProperty: $BooleanProperty, template: $ModelTemplate, hasBook: boolean): void;
        createMultiface(railBlock: $Block_): void;
        createGrowingPlant(growingPlantBlock: $Block_, plantBlock: $Block_, tintState: $BlockModelGenerators$TintState_): void;
        createNormalTorch(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createShulkerBox(railBlock: $Block_): void;
        createAxisAlignedPillarBlockCustomModel(airLikeBlock: $Block_, particleTexture: $ResourceLocation_): void;
        createColoredBlockWithStateRotations(modelProvider: $TexturedModel$Provider_, ...coloredBlocks: $Block_[]): void;
        static createNorthWestMirroredCubeGenerator(columnBlock: $Block_, location: $ResourceLocation_, textureMapping: $TextureMapping, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        createColoredBlockWithRandomRotations(modelProvider: $TexturedModel$Provider_, ...coloredBlocks: $Block_[]): void;
        createRotatedPillarWithHorizontalVariant(rotatedPillarBlock: $Block_, modelProvider: $TexturedModel$Provider_, horizontalModelProvider: $TexturedModel$Provider_): void;
        static createRotatedPillarWithHorizontalVariant(buttonBlock: $Block_, unpoweredModelLocation: $ResourceLocation_, poweredModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static createFenceGate(fenceGateBlock: $Block_, openModelLocation: $ResourceLocation_, closedModelLocation: $ResourceLocation_, wallOpenModelLocation: $ResourceLocation_, wallClosedModelLocation: $ResourceLocation_, uvLock: boolean): $BlockStateGenerator;
        skipAutoItemBlock(railBlock: $Block_): void;
        delegateItemModel(item: $Item_, delegateModelLocation: $ResourceLocation_): void;
        delegateItemModel(airLikeBlock: $Block_, particleTexture: $ResourceLocation_): void;
        static createSimpleBlock(block: $Block_, modelLocation: $ResourceLocation_): $MultiVariantGenerator;
        createTrapdoor(railBlock: $Block_): void;
        static createTrapdoor(orientableTrapdoorBlock: $Block_, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static createStairs(orientableTrapdoorBlock: $Block_, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static createCustomFence(customFenceBlock: $Block_, postModelId: $ResourceLocation_, northModelId: $ResourceLocation_, eastModelId: $ResourceLocation_, southModelId: $ResourceLocation_, westModelId: $ResourceLocation_): $BlockStateGenerator;
        static createRotatedVariant(block: $Block_, normalModelLocation: $ResourceLocation_, mirroredModelLocation: $ResourceLocation_): $MultiVariantGenerator;
        static createRotatedVariant(block: $Block_, modelLocation: $ResourceLocation_): $MultiVariantGenerator;
        static createRotatedPillar(): $PropertyDispatch;
        static createFacingDispatch(): $PropertyDispatch;
        static createRotatedVariants(modelLocation: $ResourceLocation_): $Variant[];
        createRotatedVariantBlock(railBlock: $Block_): void;
        createColumnWithFacing(): $PropertyDispatch;
        static createPillarBlockUVLocked(block: $Block_, textureMapping: $TextureMapping, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        createDispenserBlock(railBlock: $Block_): void;
        createCraftingTableLike(craftingTableBlock: $Block_, craftingTableMaterialBlock: $Block_, textureMappingGetter: $BiFunction_<$Block, $Block, $TextureMapping>): void;
        static createBooleanModelDispatch(property: $BooleanProperty, trueModelLocation: $ResourceLocation_, falseModelLocation: $ResourceLocation_): $PropertyDispatch;
        createMushroomBlock(railBlock: $Block_): void;
        createPumpkinVariant(pumpkinBlock: $Block_, columnTextureMapping: $TextureMapping): void;
        copyCopperBulbModel(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createSuffixedVariant(block: $Block_, suffix: string, modelTemplate: $ModelTemplate, textureMappingGetter: $Function_<$ResourceLocation, $TextureMapping>): $ResourceLocation;
        createAmethystCluster(railBlock: $Block_): void;
        createRotatableColumn(railBlock: $Block_): void;
        static createEmptyOrFullDispatch<T extends $Comparable<T>>(property: $Property<T>, minimumValueForFullVariant: T, fullVariantModelLocation: $ResourceLocation_, emptyVariantModelLocation: $ResourceLocation_): $PropertyDispatch;
        createFloorFireModels(fireBlock: $Block_): $List<$ResourceLocation>;
        createFullAndCarpetBlocks(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createSideFireModels(fireBlock: $Block_): $List<$ResourceLocation>;
        createTopFireModels(fireBlock: $Block_): $List<$ResourceLocation>;
        createBrushableBlock(railBlock: $Block_): void;
        createTurtleEggModel(eggAmount: number, variantId: number): $ResourceLocation;
        createTurtleEggModel(hatchAmount: number, variantName: string, textureMapping: $TextureMapping): $ResourceLocation;
        createPistonVariant(pistonBlock: $Block_, baseModelLocation: $ResourceLocation_, topTextureMapping: $TextureMapping): void;
        createCandleAndCandleCake(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createGrassLikeBlock(grassLikeBlock: $Block_, modelLocation: $ResourceLocation_, variant: $Variant): void;
        copyModel(bulbBlock: $Block_, sourceBlock: $Block_): void;
        static wrapModels(modelLocations: $List_<$ResourceLocation_>, variantMapper: $UnaryOperator_<$Variant>): $List<$Variant>;
        static createWall(orientableTrapdoorBlock: $Block_, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        createDoor(railBlock: $Block_): void;
        static createDoor(doorBlock: $Block_, topLeftModelLocation: $ResourceLocation_, topLeftOpenModelLocation: $ResourceLocation_, topRightModelLocation: $ResourceLocation_, topRightOpenModelLocation: $ResourceLocation_, bottomLeftModelLocation: $ResourceLocation_, bottomLeftOpenModelLocation: $ResourceLocation_, bottomRightModelLocation: $ResourceLocation_, bottomRightOpenModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static createSlab(orientableTrapdoorBlock: $Block_, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static MULTIFACE_GENERATOR: $List<$Pair<$BooleanProperty, $Function<$ResourceLocation, $Variant>>>;
        nonOrientableTrapdoor: $List<$Block>;
        texturedModels: $Map<$Block, $TexturedModel>;
        fullBlockModelCustomGenerators: $Map<$Block, $BlockModelGenerators$BlockStateGeneratorSupplier>;
        blockStateOutput: $Consumer<$BlockStateGenerator>;
        modelOutput: $BiConsumer<$ResourceLocation, $Supplier<$JsonElement>>;
        static SHAPE_CONSUMERS: $Map<$BlockFamily$Variant, $BiConsumer<$BlockModelGenerators$BlockFamilyProvider, $Block>>;
        constructor(blockStateOutput: $Consumer_<$BlockStateGenerator>, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>, skippedAutoModelsOutput: $Consumer_<$Item>);
    }
    export class $ModelProvider implements $DataProvider {
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        handler$hoh000$fabric_data_generation_api_v1$init(arg0: $PackOutput, arg1: $CallbackInfo): void;
        constructor(output: $PackOutput);
        get name(): string;
    }
    export class $ItemModelGenerators implements $ItemModelGeneratorsAccessor {
        run(): void;
        generateBaseArmorTrimTemplate(modelLocation: $ResourceLocation_, modelGetter: $Map_<$TextureSlot, $ResourceLocation_>, armorMaterial: $Holder_<$ArmorMaterial>): $JsonObject;
        getItemModelForTrimMaterial(modelLocation: $ResourceLocation_, trimId: string): $ResourceLocation;
        static getGENERATED_TRIM_MODELS$create_$md$942995$0(): $List<any>;
        generateFlatItem(item: $Item_, modelTemplate: $ModelTemplate): void;
        generateFlatItem(item: $Item_, layerZeroItem: $Item_, modelTemplate: $ModelTemplate): void;
        generateFlatItem(item: $Item_, modelLocationSuffix: string, modelTemplate: $ModelTemplate): void;
        generateArmorTrims(armorItem: $ArmorItem): void;
        generateClockItem(item: $Item_): void;
        generateItemWithOverlay(item: $Item_): void;
        generateLayeredItem(modelLocation: $ResourceLocation_, layer0: $ResourceLocation_, layer1: $ResourceLocation_, layer2: $ResourceLocation_): void;
        generateLayeredItem(modelLocation: $ResourceLocation_, layer0: $ResourceLocation_, layer1: $ResourceLocation_): void;
        generateCompassItem(item: $Item_): void;
        output: $BiConsumer<$ResourceLocation, $Supplier<$JsonElement>>;
        static GENERATED_TRIM_MODELS: $List<$ItemModelGenerators$TrimModelData>;
        static TRIM_TYPE_PREDICATE_ID: $ResourceLocation;
        constructor(output: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>);
        static get GENERATED_TRIM_MODELS$create_$md$942995$0(): $List<any>;
    }
    export class $BlockModelGenerators$WoodProvider {
        log(logBlock: $Block_): $BlockModelGenerators$WoodProvider;
        wood(logBlock: $Block_): $BlockModelGenerators$WoodProvider;
        logWithHorizontal(logBlock: $Block_): $BlockModelGenerators$WoodProvider;
        logUVLocked(logBlock: $Block_): $BlockModelGenerators$WoodProvider;
        this$0: $BlockModelGenerators;
        constructor(logMapping: $BlockModelGenerators, arg1: $TextureMapping);
    }
    export class $ItemModelGenerators$TrimModelData extends $Record {
        name(): string;
        name(armorMaterial: $Holder_<$ArmorMaterial>): string;
        itemModelIndex(): number;
        overrideArmorMaterials(): $Map<$Holder<$ArmorMaterial>, string>;
        constructor(arg0: string, arg1: number, arg2: $Map_<$Holder_<$ArmorMaterial>, string>);
    }
    /**
     * Values that may be interpreted as {@link $ItemModelGenerators$TrimModelData}.
     */
    export type $ItemModelGenerators$TrimModelData_ = { name?: string, itemModelIndex?: number, overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>,  } | [name?: string, itemModelIndex?: number, overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>, ];
    export class $BlockModelGenerators$BlockEntityModelGenerator {
        createWithCustomBlockItemModel(modelTemplate: $ModelTemplate, ...blocks: $Block_[]): $BlockModelGenerators$BlockEntityModelGenerator;
        create(...blocks: $Block_[]): $BlockModelGenerators$BlockEntityModelGenerator;
        createWithoutBlockItem(...blocks: $Block_[]): $BlockModelGenerators$BlockEntityModelGenerator;
        this$0: $BlockModelGenerators;
        constructor(baseModel: $BlockModelGenerators, particleBlock: $ResourceLocation_, arg2: $Block_);
    }
    export class $BlockModelGenerators$BookSlotModelCacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$BookSlotModelCacheKey}.
     */
    export type $BlockModelGenerators$BookSlotModelCacheKey_ = { modelSuffix?: string, template?: $ModelTemplate,  } | [modelSuffix?: string, template?: $ModelTemplate, ];
}
