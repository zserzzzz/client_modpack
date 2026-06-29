import { $AbstractSimiContainerScreen, $GhostItemMenu } from "@package/com/simibubi/create/foundation/gui/menu";
import { $CubeMap, $MultiBufferSource_, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Executor } from "@package/java/util/concurrent";
import { $EntityType_, $Entity$RemovalReason, $Pose, $PortalProcessor, $Entity, $EntityType$Builder } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $IInteractionChecker } from "@package/com/simibubi/create/foundation/utility";
import { $NarratorStatus, $Minecraft, $DeltaTracker } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $RandomSource } from "@package/net/minecraft/util";
import { $MenuProvider, $Container } from "@package/net/minecraft/world";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MenuType, $Slot, $ContainerSynchronizer, $MenuType_, $AbstractContainerMenu, $TransientCraftingContainer, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $Item_, $Item, $Item$Properties, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IEntityWithComplexSpawn } from "@package/net/neoforged/neoforge/entity";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ISyncPersistentData } from "@package/com/simibubi/create/foundation/networking";
import { $TableClothBlockEntity, $ShoppingListItem$ShoppingList_ } from "@package/com/simibubi/create/content/logistics/tableCloth";
import { $InventorySummary } from "@package/com/simibubi/create/content/logistics/packager";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $BlueprintOverlayRendererAccess } from "@package/snownee/jade/addon/mixin/create";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $TrackPlacement$PlacementInfo } from "@package/com/simibubi/create/content/trains/track";
import { $HangingEntity } from "@package/net/minecraft/world/entity/decoration";
import { $Map, $Set, $UUID, $List } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Predicate } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $NonNullList, $Direction } from "@package/net/minecraft/core";
import { $Record, $Object } from "@package/java/lang";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $TagKey } from "@package/net/minecraft/tags";
import { $EntityRenderDispatcher, $EntityRendererProvider$Context, $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable, $CycleButton } from "@package/net/minecraft/client/gui/components";
import { $SlotItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font, $LayeredDraw$Layer, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/equipment/blueprint" {
    export class $BlueprintRenderer extends $EntityRenderer<$BlueprintEntity> {
        render(arg0: $BlueprintEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        getTextureLocation(arg0: $BlueprintEntity): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $BlueprintEntity extends $HangingEntity implements $IEntityWithComplexSpawn, $SpecialEntityItemRequirement, $ISyncPersistentData, $IInteractionChecker {
        static build(arg0: $EntityType$Builder<never>): $EntityType$Builder<never>;
        getWidth(): number;
        canPlayerUse(arg0: $Player): boolean;
        getHeight(): number;
        getSection(arg0: number): $BlueprintEntity$BlueprintSection;
        readSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        writeSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        getRequiredItems(): $ItemRequirement;
        getSectionAt(arg0: $Vec3_): $BlueprintEntity$BlueprintSection;
        onPersistentDataUpdated(): void;
        getOrCreateRecipeCompound(): $CompoundTag;
        syncPersistentDataWithTracking(arg0: $Entity): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        firstTick: boolean;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        sodiumdynamiclights$luminance: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        pos: $BlockPos;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        direction: $Direction;
        levelCallback: $EntityInLevelCallback;
        static HANGING_ENTITY: $Predicate<$Entity>;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $Direction_);
        get width(): number;
        get height(): number;
        get requiredItems(): $ItemRequirement;
        get orCreateRecipeCompound(): $CompoundTag;
    }
    export class $BlueprintOverlayRenderer implements $BlueprintOverlayRendererAccess {
        static tick(): void;
        static renderOverlay(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static rebuild(arg0: $BlueprintEntity$BlueprintSection, arg1: boolean): void;
        static getResults$jadeaddons_$md$c99f8a$0(): $List<any>;
        static displayClothShop(arg0: $TableClothBlockEntity, arg1: number, arg2: $ShoppingListItem$ShoppingList_): void;
        static drawItemStack(arg0: $GuiGraphics, arg1: $Minecraft, arg2: number, arg3: number, arg4: $ItemStack_, arg5: string): void;
        static displayTrackRequirements(arg0: $TrackPlacement$PlacementInfo, arg1: $ItemStack_): void;
        static displayShoppingList(arg0: $Couple<$InventorySummary>): void;
        static displayChainRequirements(arg0: $Item_, arg1: number, arg2: boolean): void;
        static OVERLAY: $LayeredDraw$Layer;
        constructor();
        static get results$jadeaddons_$md$c99f8a$0(): $List<any>;
    }
    export class $BlueprintEntity$BlueprintCraftingInventory extends $TransientCraftingContainer {
        menu: $AbstractContainerMenu;
    }
    export class $BlueprintItem extends $Item {
        static assignCompleteRecipe(arg0: $Level_, arg1: $ItemStackHandler, arg2: $Recipe<never>): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $BlueprintEntity$BlueprintSection implements $MenuProvider, $IInteractionChecker {
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
    }
    export class $BlueprintScreen extends $AbstractSimiContainerScreen<$BlueprintMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $BlueprintMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(arg0: $BlueprintMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $BlueprintMenu extends $GhostItemMenu<$BlueprintEntity$BlueprintSection> {
        static create(arg0: number, arg1: $Inventory, arg2: $BlueprintEntity$BlueprintSection): $BlueprintMenu;
        onCraftMatrixChanged(): void;
        quickcraftSlots: $Set<$Slot>;
        playerInventory: $Inventory;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        ghostInventory: $ItemStackHandler;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        contentHolder: $BlueprintEntity$BlueprintSection;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $BlueprintEntity$BlueprintSection);
    }
    export class $BlueprintMenu$BlueprintCraftSlot extends $SlotItemHandler {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $BlueprintMenu$BlueprintCraftingInventory extends $TransientCraftingContainer {
        menu: $AbstractContainerMenu;
    }
    export class $BlueprintAssignCompleteRecipePacket extends $Record implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        recipeId(): $ResourceLocation;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlueprintAssignCompleteRecipePacket>;
        constructor(recipeId: $ResourceLocation_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $BlueprintAssignCompleteRecipePacket}.
     */
    export type $BlueprintAssignCompleteRecipePacket_ = { recipeId?: $ResourceLocation_,  } | [recipeId?: $ResourceLocation_, ];
}
