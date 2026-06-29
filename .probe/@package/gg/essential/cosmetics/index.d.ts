import { $Function1_, $Function2_, $Function3_ } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $State } from "@package/gg/essential/gui/elementa/state/v2";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $PlayerPoseManager, $UMatrixStack } from "@package/gg/essential/model/util";
import { $CosmeticSlot } from "@package/gg/essential/mod/cosmetics";
import { $UUID, $List, $Map_, $UUID_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $PlayerRenderer } from "@package/net/minecraft/client/renderer/entity/player";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $UMatrixStack as $UMatrixStack$1 } from "@package/gg/essential/universal";
import { $Object } from "@package/java/lang";
import { $Unit, $Pair } from "@package/kotlin";
import { $EquippedOutfitsManager, $CosmeticsData, $EquippedOutfitsManager$Outfit } from "@package/gg/essential/network/connectionmanager/cosmetics";
import { $Skin, $Model_, $Model } from "@package/gg/essential/mod";
import { $AnimationTarget_ } from "@package/gg/essential/cosmetics/events";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $SkinMask } from "@package/gg/essential/cosmetics/skinmask";
import { $EnumPart, $ModelInstance, $BedrockModel, $Cube, $Side, $Vector3, $EnumPart_, $ModelAnimationState$Event } from "@package/gg/essential/model";
import { $MolangQueryEntity } from "@package/gg/essential/model/molang";
import { $CosmeticSetting } from "@package/gg/essential/mod/cosmetics/settings";
import { $TrackedList } from "@package/gg/essential/gui/elementa/state/v2/collections";
import { $PlayerPose, $RenderBackend$CommandQueue_, $RenderBackend$Texture, $RenderBackend, $RenderBackend$VertexConsumerProvider_ } from "@package/gg/essential/model/backend";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Cosmetic } from "@package/gg/essential/network/cosmetics";
export * as events from "@package/gg/essential/cosmetics/events";
export * as state from "@package/gg/essential/cosmetics/state";
export * as skinmask from "@package/gg/essential/cosmetics/skinmask";

declare module "@package/gg/essential/cosmetics" {
    export class $EquippedCosmetic {
        getCosmetic(): $Cosmetic;
        static copy$default(arg0: $EquippedCosmetic, arg1: $Cosmetic, arg2: $List_<any>, arg3: number, arg4: $Object): $EquippedCosmetic;
        getId(): string;
        copy(arg0: $Cosmetic, arg1: $List_<$CosmeticSetting>): $EquippedCosmetic;
        getVariant(): string;
        settings<T extends $CosmeticSetting>(): $List<T>;
        getSettings(): $List<$CosmeticSetting>;
        setting<T extends $CosmeticSetting>(): T;
        component2(): $List<$CosmeticSetting>;
        component1(): $Cosmetic;
        constructor(arg0: $Cosmetic, arg1: $List_<$CosmeticSetting>);
        get cosmetic(): $Cosmetic;
        get id(): string;
        get variant(): string;
    }
    export class $ArmorSlots {
        static copy$default(arg0: $ArmorSlots, arg1: number, arg2: number, arg3: $Object): $ArmorSlots;
        get(arg0: number): boolean;
        copy(arg0: number): $ArmorSlots;
        getSlots(): number;
        component1(): number;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: $DefaultConstructorMarker);
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean);
        constructor(arg0: number);
        get slots(): number;
    }
    export class $IngameEquippedOutfitsUpdateEncoder {
        update(arg0: $TrackedList<$Pair<$UUID_, $EquippedOutfitsManager$Outfit>>): $List<$Pair<$UUID, $List<$IngameEquippedOutfitsManager$Update>>>;
        constructor();
    }
    export class $EquippedCosmeticId {
        static copy$default(arg0: $EquippedCosmeticId, arg1: string, arg2: $List_<any>, arg3: number, arg4: $Object): $EquippedCosmeticId;
        getId(): string;
        copy(arg0: string, arg1: $List_<$CosmeticSetting>): $EquippedCosmeticId;
        getSettings(): $List<$CosmeticSetting>;
        component2(): $List<$CosmeticSetting>;
        component1(): string;
        constructor(arg0: string, arg1: $List_<$CosmeticSetting>);
        get id(): string;
        get settings(): $List<$CosmeticSetting>;
    }
    export class $CosmeticsRenderState {
    }
    export interface $CosmeticsRenderState {
        setRenderedPose(arg0: $PlayerPose): void;
        setPoseModified(arg0: boolean): void;
        cosmeticFrozenYaw(): number;
        poseManager(): $PlayerPoseManager;
        wearablesManager(): $WearablesManager;
        emissiveCapeTexture(): $ResourceLocation;
        setCosmeticFrozenYaw(arg0: number): void;
        setSuppressedArmor(arg0: boolean[]): void;
        blockedArmorSlots(): $Set<number>;
        nametagIcon(): $ModelInstance;
        skinTexture(): $ResourceLocation;
        isSneaking(): boolean;
        set renderedPose(value: $PlayerPose);
        set poseModified(value: boolean);
        set suppressedArmor(value: boolean[]);
        get sneaking(): boolean;
    }
    export class $IngameEquippedOutfitsManager$Update {
    }
    export interface $IngameEquippedOutfitsManager$Update {
    }
    export class $CosmeticsState {
        getSkinMask(): $SkinMask;
        getSides(): $Map<string, $Side>;
        getCosmetics(): $Map<$CosmeticSlot, $EquippedCosmetic>;
        getArmor(): $ArmorSlots;
        getLocksPlayerRotation(): boolean;
        getHidesHeldItems(): boolean;
        getHiddenBones(): $Map<string, $Set<string>>;
        getSkinType(): $Model;
        getPositionAdjustment(arg0: $Cosmetic): $Vector3;
        getRenderGeometries(): $Map<string, $List<$List<$Cube>>>;
        getBedrockModels(): $Map<$Cosmetic, $BedrockModel>;
        copyWithout(arg0: $CosmeticSlot): $CosmeticsState;
        getHiddenParts(): $Map<string, $Set<$EnumPart>>;
        getUsesCapePose(): boolean;
        getUsesElytraPose(): boolean;
        propertyHidesEntireCosmetic(arg0: string): boolean;
        getPositionAdjustments(): $Map<string, $Vector3>;
        getPartsEquipped(): $Set<number>;
        static Companion: $CosmeticsState$Companion;
        static EMPTY: $CosmeticsState;
        constructor(arg0: $Model_, arg1: $Map_<$CosmeticSlot, $EquippedCosmetic>, arg2: $Map_<$Cosmetic, $BedrockModel>, arg3: $ArmorSlots);
        get skinMask(): $SkinMask;
        get sides(): $Map<string, $Side>;
        get cosmetics(): $Map<$CosmeticSlot, $EquippedCosmetic>;
        get armor(): $ArmorSlots;
        get locksPlayerRotation(): boolean;
        get hidesHeldItems(): boolean;
        get hiddenBones(): $Map<string, $Set<string>>;
        get skinType(): $Model;
        get renderGeometries(): $Map<string, $List<$List<$Cube>>>;
        get bedrockModels(): $Map<$Cosmetic, $BedrockModel>;
        get hiddenParts(): $Map<string, $Set<$EnumPart>>;
        get usesCapePose(): boolean;
        get usesElytraPose(): boolean;
        get positionAdjustments(): $Map<string, $Vector3>;
        get partsEquipped(): $Set<number>;
    }
    export class $WearablesManager$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $WearablesManager {
        update(): void;
        getState(): $CosmeticsState;
        render(arg0: $UMatrixStack, arg1: $RenderBackend$CommandQueue_, arg2: $PlayerPose, arg3: $RenderBackend$Texture, arg4: $Set_<$EnumPart_>): void;
        render(arg0: $UMatrixStack, arg1: $RenderBackend$CommandQueue_, arg2: $ModelInstance, arg3: $PlayerPose, arg4: $RenderBackend$Texture, arg5: $Set_<$EnumPart_>): void;
        getModels(): $Map<$Cosmetic, $ModelInstance>;
        updateState(arg0: $CosmeticsState): void;
        updateLocators(arg0: $PlayerPose): void;
        static render$default(arg0: $WearablesManager, arg1: $UMatrixStack, arg2: $RenderBackend$CommandQueue_, arg3: $PlayerPose, arg4: $RenderBackend$Texture, arg5: $Set_<any>, arg6: number, arg7: $Object): void;
        static render$default(arg0: $WearablesManager, arg1: $UMatrixStack, arg2: $RenderBackend$CommandQueue_, arg3: $ModelInstance, arg4: $PlayerPose, arg5: $RenderBackend$Texture, arg6: $Set_<any>, arg7: number, arg8: $Object): void;
        resetModel(arg0: $CosmeticSlot): void;
        collectEvents(arg0: $Function1_<$ModelAnimationState$Event, $Unit>): void;
        static Companion: $WearablesManager$Companion;
        constructor(arg0: $RenderBackend, arg1: $MolangQueryEntity, arg2: $Set_<$AnimationTarget_>, arg3: $Function2_<$Cosmetic, string, $Unit>);
        get state(): $CosmeticsState;
        get models(): $Map<$Cosmetic, $ModelInstance>;
    }
    export class $IngameEquippedOutfitsManager implements $EquippedOutfitsManager {
        getEquippedCosmeticsState(arg0: $UUID_): $State<$EquippedOutfitsManager$Outfit>;
        getCapeHash(arg0: $UUID_): string;
        getSkin(arg0: $UUID_): $Skin;
        getVisibleCosmeticsState(arg0: $UUID_): $State<$Map<$CosmeticSlot, $EquippedCosmetic>>;
        applyUpdates(arg0: $List_<$Pair<$UUID_, $List_<$IngameEquippedOutfitsManager$Update>>>): void;
        applyUpdates(arg0: $UUID_, arg1: $List_<$IngameEquippedOutfitsManager$Update>): void;
        constructor(arg0: $CosmeticsData, arg1: $Function3_<$UUID, $CosmeticSlot, string, $Unit>);
    }
    export class $EssentialModelRenderer extends $RenderLayer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> {
        render(vMatrixStack: $PoseStack, buffer: $MultiBufferSource_, light: number, player: $AbstractClientPlayer, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        render(matrixStack: $UMatrixStack$1, vertexConsumerProvider: $RenderBackend$VertexConsumerProvider_, playerState: $Object, cState: $CosmeticsRenderState, parts: $Set_<$EnumPart_>, setsPose: boolean): void;
        static shouldRender(player: $AbstractClientPlayer): boolean;
        constructor(playerRenderer: $PlayerRenderer);
    }
    export class $CosmeticsState$Companion {
        constructor(arg0: $DefaultConstructorMarker);
    }
}
