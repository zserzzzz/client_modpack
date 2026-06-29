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
        wasArmorRenderingSuppressed(): boolean[];
        essential$getCosmeticFrozenYaw(): number;
        essential$setCosmeticFrozenYaw(arg0: number): void;
        applyEssentialCosmeticsMask(arg0: $ResourceLocation_): $ResourceLocation;
        setEssentialCosmeticsCape(arg0: string, arg1: $Pair<$List_<$UIdentifier>, $List_<$UIdentifier>>): void;
        getEmissiveCapeTexture(): $UIdentifier;
        getWearablesManager(): $WearablesManager;
        getCosmeticsSourceUuid(): $UUID;
        getCosmeticsSource(): $State<$Map<$CosmeticSlot, $EquippedCosmetic>>;
        getCosmeticsState(): $CosmeticsState;
        setCosmeticsSource(arg0: $State_<$Map<$CosmeticSlot, $EquippedCosmetic>>): void;
        setPoseModified(arg0: boolean): void;
        setRenderedPose(arg0: $PlayerPose): void;
        isPoseModified(): boolean;
        getRenderedPose(): $PlayerPose;
        getPoseManager(): $PlayerPoseManager;
        get emissiveCapeTexture(): $UIdentifier;
        get wearablesManager(): $WearablesManager;
        get cosmeticsSourceUuid(): $UUID;
        get cosmeticsState(): $CosmeticsState;
        get poseManager(): $PlayerPoseManager;
    }
}
