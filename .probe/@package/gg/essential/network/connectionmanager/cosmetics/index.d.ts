import { $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership } from "@package/gg/essential/mod/cosmetics/database";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $FeaturedPageCollection } from "@package/gg/essential/mod/cosmetics/featured";
import { $Skin } from "@package/gg/essential/mod";
import { $TrackedList } from "@package/gg/essential/gui/elementa/state/v2/collections";
import { $EquippedCosmetic, $EquippedCosmeticId } from "@package/gg/essential/cosmetics";
import { $State } from "@package/gg/essential/gui/elementa/state/v2";
import { $CosmeticSlot, $CosmeticBundle, $CosmeticCategory } from "@package/gg/essential/mod/cosmetics";
import { $Object } from "@package/java/lang";
import { $UUID_, $Map_, $Map } from "@package/java/util";
import { $CosmeticBase, $Cosmetic, $CosmeticStoreInfo } from "@package/gg/essential/network/cosmetics";

declare module "@package/gg/essential/network/connectionmanager/cosmetics" {
    export class $EquippedOutfitsManager$Outfit$Companion {
        getEMPTY(): $EquippedOutfitsManager$Outfit;
        constructor(arg0: $DefaultConstructorMarker);
        get EMPTY(): $EquippedOutfitsManager$Outfit;
    }
    export class $EquippedOutfitsManager$Outfit {
        copy(arg0: $Map_<$CosmeticSlot, $EquippedCosmeticId>, arg1: $Skin): $EquippedOutfitsManager$Outfit;
        static copy$default(arg0: $EquippedOutfitsManager$Outfit, arg1: $Map_<any, any>, arg2: $Skin, arg3: number, arg4: $Object): $EquippedOutfitsManager$Outfit;
        getCosmetics(): $Map<$CosmeticSlot, $EquippedCosmeticId>;
        component2(): $Skin;
        static access$getEMPTY$cp(): $EquippedOutfitsManager$Outfit;
        getSkin(): $Skin;
        component1(): $Map<$CosmeticSlot, $EquippedCosmeticId>;
        static Companion: $EquippedOutfitsManager$Outfit$Companion;
        constructor(arg0: $Map_<$CosmeticSlot, $EquippedCosmeticId>, arg1: $Skin);
        get cosmetics(): $Map<$CosmeticSlot, $EquippedCosmeticId>;
        get skin(): $Skin;
    }
    export class $CosmeticsData {
        static access$cosmeticBase$jd(arg0: $CosmeticsData, arg1: string): $State<any>;
        static access$cosmeticStoreInfo$jd(arg0: $CosmeticsData, arg1: string): $State<any>;
    }
    export interface $CosmeticsData {
        getCategories(): $State<$TrackedList<$CosmeticCategory>>;
        getCategory(arg0: string): $CosmeticCategory;
        getCosmetic(arg0: string): $Cosmetic;
        cosmeticStoreInfo(arg0: string): $State<$CosmeticStoreInfo>;
        getCosmeticBundle(arg0: string): $CosmeticBundle;
        cosmeticBase(arg0: string): $State<$CosmeticBase>;
        getCosmetics(): $State<$TrackedList<$Cosmetic>>;
        getBundles(): $State<$TrackedList<$CosmeticBundle>>;
        getFeaturedPageCollections(): $State<$TrackedList<$FeaturedPageCollection>>;
        getImplicitOwnership(arg0: string): $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership;
        getImplicitOwnerships(): $State<$TrackedList<$GitRepoCosmeticsDatabase$CosmeticImplicitOwnership>>;
        getFeaturedPageCollection(arg0: string): $FeaturedPageCollection;
        cosmetic(arg0: string): $State<$Cosmetic>;
        get categories(): $State<$TrackedList<$CosmeticCategory>>;
        get cosmetics(): $State<$TrackedList<$Cosmetic>>;
        get bundles(): $State<$TrackedList<$CosmeticBundle>>;
        get featuredPageCollections(): $State<$TrackedList<$FeaturedPageCollection>>;
        get implicitOwnerships(): $State<$TrackedList<$GitRepoCosmeticsDatabase$CosmeticImplicitOwnership>>;
    }
    export class $EquippedOutfitsManager {
    }
    export interface $EquippedOutfitsManager {
        getCapeHash(arg0: $UUID_): string;
        getVisibleCosmeticsState(arg0: $UUID_): $State<$Map<$CosmeticSlot, $EquippedCosmetic>>;
        getSkin(arg0: $UUID_): $Skin;
        getEquippedCosmeticsState(arg0: $UUID_): $State<$EquippedOutfitsManager$Outfit>;
    }
}
