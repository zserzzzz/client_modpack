import { $PlayerPose } from "@package/gg/essential/model/backend";
import { $State, $State_ } from "@package/gg/essential/gui/elementa/state/v2";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $WearablesManager, $CosmeticsState, $EquippedCosmetic } from "@package/gg/essential/cosmetics";
import { $PlayerPoseManager } from "@package/gg/essential/model/util";
import { $CosmeticSlot } from "@package/gg/essential/mod/cosmetics";
import { $UUID, $List_, $Map } from "@package/java/util";
import { $Pair } from "@package/kotlin";
import { $UIdentifier } from "@package/gg/essential/util";

declare module "@package/gg/essential/mixins/impl/client/entity" {
    export class $AbstractClientPlayerExt {
    }
    export interface $AbstractClientPlayerExt {
        setRenderedPose(arg0: $PlayerPose): void;
        getCosmeticsSource(): $State<$Map<$CosmeticSlot, $EquippedCosmetic>>;
        setPoseModified(arg0: boolean): void;
        setCosmeticsSource(arg0: $State_<$Map<$CosmeticSlot, $EquippedCosmetic>>): void;
        getCosmeticsState(): $CosmeticsState;
        getPoseManager(): $PlayerPoseManager;
        isPoseModified(): boolean;
        getRenderedPose(): $PlayerPose;
        setEssentialCosmeticsCape(arg0: string, arg1: $Pair<$List_<$UIdentifier>, $List_<$UIdentifier>>): void;
        applyEssentialCosmeticsMask(arg0: $ResourceLocation_): $ResourceLocation;
        wasArmorRenderingSuppressed(): boolean[];
        essential$getCosmeticFrozenYaw(): number;
        essential$setCosmeticFrozenYaw(arg0: number): void;
        getCosmeticsSourceUuid(): $UUID;
        getWearablesManager(): $WearablesManager;
        getEmissiveCapeTexture(): $UIdentifier;
        get cosmeticsState(): $CosmeticsState;
        get poseManager(): $PlayerPoseManager;
        get cosmeticsSourceUuid(): $UUID;
        get wearablesManager(): $WearablesManager;
        get emissiveCapeTexture(): $UIdentifier;
    }
}
