import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Skin, $Model_, $EssentialAsset, $Model } from "@package/gg/essential/mod";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $ConcurrentHashMap } from "@package/java/util/concurrent";
import { $Side } from "@package/gg/essential/model";
import { $List, $Map_, $Map, $Set, $Set_, $List_ } from "@package/java/util";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";
import { $Instant } from "@package/java/time";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $CosmeticSetting } from "@package/gg/essential/mod/cosmetics/settings";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Enum, $Object } from "@package/java/lang";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Lazy } from "@package/kotlin";
export * as settings from "@package/gg/essential/mod/cosmetics/settings";
export * as database from "@package/gg/essential/mod/cosmetics/database";
export * as featured from "@package/gg/essential/mod/cosmetics/featured";

declare module "@package/gg/essential/mod/cosmetics" {
    export class $CosmeticTier extends $Enum<$CosmeticTier> {
        static values(): $CosmeticTier[];
        static valueOf(arg0: string): $CosmeticTier;
        static getEntries(): $EnumEntries<$CosmeticTier>;
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static Companion: $CosmeticTier$Companion;
        static RARE: $CosmeticTier;
        static EPIC: $CosmeticTier;
        static UNCOMMON: $CosmeticTier;
        static COMMON: $CosmeticTier;
        static LEGENDARY: $CosmeticTier;
        static get entries(): $EnumEntries<$CosmeticTier>;
    }
    /**
     * Values that may be interpreted as {@link $CosmeticTier}.
     */
    export type $CosmeticTier_ = "common" | "uncommon" | "rare" | "epic" | "legendary";
    export class $CosmeticAssets$Companion {
        serializer(): $KSerializer<$CosmeticAssets>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticTier$Companion {
        serializer(): $KSerializer<$CosmeticTier>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticAssets$SkinMask {
        copy(arg0: $EssentialAsset, arg1: $EssentialAsset): $CosmeticAssets$SkinMask;
        static copy$default(arg0: $CosmeticAssets$SkinMask, arg1: $EssentialAsset, arg2: $EssentialAsset, arg3: number, arg4: $Object): $CosmeticAssets$SkinMask;
        static write$Self$cosmetics(arg0: $CosmeticAssets$SkinMask, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component2(): $EssentialAsset;
        component1(): $EssentialAsset;
        getSteve(): $EssentialAsset;
        getAlex(): $EssentialAsset;
        static Companion: $CosmeticAssets$SkinMask$Companion;
        constructor(arg0: $EssentialAsset, arg1: $EssentialAsset);
        constructor(arg0: number, arg1: $EssentialAsset, arg2: $EssentialAsset, arg3: $SerializationConstructorMarker);
        get steve(): $EssentialAsset;
        get alex(): $EssentialAsset;
    }
    export class $CosmeticBundle$Companion {
        serializer(): $KSerializer<$CosmeticBundle>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticSlot {
        static values(): $List<$CosmeticSlot>;
        getId(): string;
        copy(arg0: string): $CosmeticSlot;
        static copy$default(arg0: $CosmeticSlot, arg1: string, arg2: number, arg3: $Object): $CosmeticSlot;
        static access$getValues$cp(): $List<any>;
        static access$getEntries$cp(): $ConcurrentHashMap<any, any>;
        component1(): string;
        static HEAD: $CosmeticSlot;
        static WINGS: $CosmeticSlot;
        static SKIRT: $CosmeticSlot;
        static EFFECT: $CosmeticSlot;
        static EMOTE: $CosmeticSlot;
        static ARMS: $CosmeticSlot;
        static FULL_BODY: $CosmeticSlot;
        static CAPE: $CosmeticSlot;
        static Companion: $CosmeticSlot$Companion;
        static TOP: $CosmeticSlot;
        static ACCESSORY: $CosmeticSlot;
        static TAIL: $CosmeticSlot;
        static SHOULDERS: $CosmeticSlot;
        static BACK: $CosmeticSlot;
        static HAT: $CosmeticSlot;
        static PANTS: $CosmeticSlot;
        static SHOES: $CosmeticSlot;
        static ICON: $CosmeticSlot;
        static EARS: $CosmeticSlot;
        static FACE: $CosmeticSlot;
        static PET: $CosmeticSlot;
        static SUITS: $CosmeticSlot;
        constructor(arg0: string, arg1: $DefaultConstructorMarker);
        get id(): string;
    }
    export class $CosmeticCategory {
        isHidden(): boolean;
        getId(): string;
        copy(arg0: string, arg1: $Map_<string, string>, arg2: $Map_<string, string>, arg3: $Map_<string, string>, arg4: $Set_<$CosmeticSlot>, arg5: $Set_<string>, arg6: number, arg7: $Instant, arg8: $Instant): $CosmeticCategory;
        getDisplayNames(): $Map<string, string>;
        getOrder(): number;
        static copy$default(arg0: $CosmeticCategory, arg1: string, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $Map_<any, any>, arg5: $Set_<any>, arg6: $Set_<any>, arg7: number, arg8: $Instant, arg9: $Instant, arg10: number, arg11: $Object): $CosmeticCategory;
        component6(): $Set<string>;
        component7(): number;
        isEmoteCategory(): boolean;
        getCompactNames(): $Map<string, string>;
        getAvailableUntil(): $Instant;
        getDescriptions(): $Map<string, string>;
        getAvailableAfter(): $Instant;
        getSlots(): $Set<$CosmeticSlot>;
        getTags(): $Set<string>;
        component9(): $Instant;
        component8(): $Instant;
        static write$Self$cosmetics(arg0: $CosmeticCategory, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component4(): $Map<string, string>;
        component3(): $Map<string, string>;
        component5(): $Set<$CosmeticSlot>;
        component2(): $Map<string, string>;
        component1(): string;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        static Companion: $CosmeticCategory$Companion;
        static EMOTE_CATEGORY_TAG: string;
        static HIDDEN_CATEGORY_TAG: string;
        constructor(arg0: number, arg1: string, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $Map_<any, any>, arg5: $Set_<any>, arg6: $Set_<any>, arg7: number, arg8: $Instant, arg9: $Instant, arg10: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $Map_<any, any>, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $Set_<any>, arg5: $Set_<any>, arg6: number, arg7: $Instant, arg8: $Instant, arg9: number, arg10: $DefaultConstructorMarker);
        constructor(arg0: string, arg1: $Map_<string, string>, arg2: $Map_<string, string>, arg3: $Map_<string, string>, arg4: $Set_<$CosmeticSlot>, arg5: $Set_<string>, arg6: number, arg7: $Instant, arg8: $Instant);
        get hidden(): boolean;
        get id(): string;
        get displayNames(): $Map<string, string>;
        get order(): number;
        get emoteCategory(): boolean;
        get compactNames(): $Map<string, string>;
        get availableUntil(): $Instant;
        get descriptions(): $Map<string, string>;
        get availableAfter(): $Instant;
        get slots(): $Set<$CosmeticSlot>;
        get tags(): $Set<string>;
    }
    export class $CosmeticBundle {
        getName(): string;
        getId(): string;
        copy(arg0: string, arg1: string, arg2: $CosmeticTier_, arg3: number, arg4: boolean, arg5: $CosmeticBundle$Skin, arg6: $Map_<$CosmeticSlot, string>, arg7: $Map_<string, $List_<$CosmeticSetting>>): $CosmeticBundle;
        static copy$default(arg0: $CosmeticBundle, arg1: string, arg2: string, arg3: $CosmeticTier_, arg4: number, arg5: boolean, arg6: $CosmeticBundle$Skin, arg7: $Map_<any, any>, arg8: $Map_<any, any>, arg9: number, arg10: $Object): $CosmeticBundle;
        getSettings(): $Map<string, $List<$CosmeticSetting>>;
        component6(): $CosmeticBundle$Skin;
        component7(): $Map<$CosmeticSlot, string>;
        getRotateOnPreview(): boolean;
        getDiscountPercent(): number;
        getCosmetics(): $Map<$CosmeticSlot, string>;
        setSkin(arg0: $CosmeticBundle$Skin): void;
        component8(): $Map<string, $List<$CosmeticSetting>>;
        static write$Self$cosmetics(arg0: $CosmeticBundle, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component4(): number;
        component3(): $CosmeticTier;
        component5(): boolean;
        component2(): string;
        getTier(): $CosmeticTier;
        getSkin(): $CosmeticBundle$Skin;
        component1(): string;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        static Companion: $CosmeticBundle$Companion;
        constructor(arg0: number, arg1: string, arg2: string, arg3: $CosmeticTier_, arg4: number, arg5: boolean, arg6: $CosmeticBundle$Skin, arg7: $Map_<any, any>, arg8: $Map_<any, any>, arg9: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: string, arg2: $CosmeticTier_, arg3: number, arg4: boolean, arg5: $CosmeticBundle$Skin, arg6: $Map_<any, any>, arg7: $Map_<any, any>, arg8: number, arg9: $DefaultConstructorMarker);
        constructor(arg0: string, arg1: string, arg2: $CosmeticTier_, arg3: number, arg4: boolean, arg5: $CosmeticBundle$Skin, arg6: $Map_<$CosmeticSlot, string>, arg7: $Map_<string, $List_<$CosmeticSetting>>);
        get name(): string;
        get id(): string;
        get settings(): $Map<string, $List<$CosmeticSetting>>;
        get rotateOnPreview(): boolean;
        get discountPercent(): number;
        get cosmetics(): $Map<$CosmeticSlot, string>;
        get tier(): $CosmeticTier;
    }
    export class $CosmeticAssets$Geometry$Companion {
        serializer(): $KSerializer<$CosmeticAssets$Geometry>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticBundle$Skin {
        getModel(): $Model;
        getName(): string;
        copy(arg0: string, arg1: $Model_, arg2: string): $CosmeticBundle$Skin;
        static copy$default(arg0: $CosmeticBundle$Skin, arg1: string, arg2: $Model_, arg3: string, arg4: number, arg5: $Object): $CosmeticBundle$Skin;
        toMod(): $Skin;
        static write$Self$cosmetics(arg0: $CosmeticBundle$Skin, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component3(): string;
        component2(): $Model;
        component1(): string;
        getHash(): string;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        static Companion: $CosmeticBundle$Skin$Companion;
        constructor(arg0: string, arg1: $Model_, arg2: string);
        constructor(arg0: $Skin, arg1: string);
        constructor(arg0: $Skin, arg1: string, arg2: number, arg3: $DefaultConstructorMarker);
        constructor(arg0: number, arg1: string, arg2: $Model_, arg3: string, arg4: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $Model_, arg2: string, arg3: number, arg4: $DefaultConstructorMarker);
        get model(): $Model;
        get name(): string;
        get hash(): string;
    }
    export class $CosmeticAssets$Geometry {
        copy(arg0: $EssentialAsset, arg1: $EssentialAsset): $CosmeticAssets$Geometry;
        static copy$default(arg0: $CosmeticAssets$Geometry, arg1: $EssentialAsset, arg2: $EssentialAsset, arg3: number, arg4: $Object): $CosmeticAssets$Geometry;
        static write$Self$cosmetics(arg0: $CosmeticAssets$Geometry, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component2(): $EssentialAsset;
        component1(): $EssentialAsset;
        getSteve(): $EssentialAsset;
        getAlex(): $EssentialAsset;
        static Companion: $CosmeticAssets$Geometry$Companion;
        constructor(arg0: $EssentialAsset, arg1: $EssentialAsset);
        constructor(arg0: number, arg1: $EssentialAsset, arg2: $EssentialAsset, arg3: $SerializationConstructorMarker);
        get steve(): $EssentialAsset;
        get alex(): $EssentialAsset;
    }
    export class $CosmeticCategory$Companion {
        serializer(): $KSerializer<$CosmeticCategory>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticAssets$SkinMask$Companion {
        serializer(): $KSerializer<$CosmeticAssets$SkinMask>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticAssets {
        copy(arg0: $Map_<string, $EssentialAsset>): $CosmeticAssets;
        static copy$default(arg0: $CosmeticAssets, arg1: $Map_<any, any>, arg2: number, arg3: $Object): $CosmeticAssets;
        getSettings(): $EssentialAsset;
        getTexture(): $EssentialAsset;
        static write$Self$cosmetics(arg0: $CosmeticAssets, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): $Map<string, $EssentialAsset>;
        getThumbnail(): $EssentialAsset;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getAnimations(): $EssentialAsset;
        getAllFiles(): $Map<string, $EssentialAsset>;
        getGeometry(): $CosmeticAssets$Geometry;
        getParticles(): $Map<string, $EssentialAsset>;
        getEmissiveTexture(): $EssentialAsset;
        getSidedSkinMasks(): $Map<$Side, $CosmeticAssets$SkinMask>;
        getDefaultSkinMask(): $CosmeticAssets$SkinMask;
        getOtherFiles(): $Map<string, $EssentialAsset>;
        getSoundDefinitions(): $EssentialAsset;
        static Companion: $CosmeticAssets$Companion;
        constructor(arg0: $Map_<string, $EssentialAsset>);
        constructor(arg0: number, arg1: $Map_<any, any>, arg2: $EssentialAsset, arg3: $EssentialAsset, arg4: $EssentialAsset, arg5: $CosmeticAssets$Geometry, arg6: $EssentialAsset, arg7: $CosmeticAssets$SkinMask, arg8: $Map_<any, any>, arg9: $EssentialAsset, arg10: $Map_<any, any>, arg11: $EssentialAsset, arg12: $SerializationConstructorMarker);
        get settings(): $EssentialAsset;
        get texture(): $EssentialAsset;
        get thumbnail(): $EssentialAsset;
        get animations(): $EssentialAsset;
        get allFiles(): $Map<string, $EssentialAsset>;
        get geometry(): $CosmeticAssets$Geometry;
        get particles(): $Map<string, $EssentialAsset>;
        get emissiveTexture(): $EssentialAsset;
        get sidedSkinMasks(): $Map<$Side, $CosmeticAssets$SkinMask>;
        get defaultSkinMask(): $CosmeticAssets$SkinMask;
        get otherFiles(): $Map<string, $EssentialAsset>;
        get soundDefinitions(): $EssentialAsset;
    }
    export class $CosmeticBundle$Skin$Companion {
        serializer(): $KSerializer<$CosmeticBundle$Skin>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticSlot$Companion {
        values(): $List<$CosmeticSlot>;
        of(arg0: string): $CosmeticSlot;
        serializer(): $KSerializer<$CosmeticSlot>;
        static access$make(arg0: $CosmeticSlot$Companion, arg1: string): $CosmeticSlot;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
