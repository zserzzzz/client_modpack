import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Object, $Enum } from "@package/java/lang";
import { $UUID_, $List } from "@package/java/util";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Lazy } from "@package/kotlin";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";
export * as cosmetics from "@package/gg/essential/mod/cosmetics";

declare module "@package/gg/essential/mod" {
    export class $Skin$Companion {
        getDEFAULT_SKINS(): $List<$Skin>;
        getEFE_SLIM(): $Skin;
        getALEX_WIDE(): $Skin;
        getSTEVE_SLIM(): $Skin;
        getARI_WIDE(): $Skin;
        getMAKENA_SLIM(): $Skin;
        getKAI_WIDE(): $Skin;
        getALEX_SLIM(): $Skin;
        getSTEVE_WIDE(): $Skin;
        getZURI_WIDE(): $Skin;
        getARI_SLIM(): $Skin;
        getNOOR_WIDE(): $Skin;
        getZURI_SLIM(): $Skin;
        getSUNNY_WIDE(): $Skin;
        getKAI_SLIM(): $Skin;
        getEFE_WIDE(): $Skin;
        getMAKENA_WIDE(): $Skin;
        getNOOR_SLIM(): $Skin;
        getSUNNY_SLIM(): $Skin;
        static getSKIN_URL$annotations(): void;
        defaultPre1_19_3For(arg0: $UUID_): $Skin;
        serializer(): $KSerializer<$Skin>;
        fromInfra(arg0: string): $Skin;
        fromUrl(arg0: string, arg1: $Model_): $Skin;
        hashFromUrl(arg0: string): string;
        defaultFor(arg0: $UUID_): $Skin;
        constructor(arg0: $DefaultConstructorMarker);
        get DEFAULT_SKINS(): $List<$Skin>;
        get EFE_SLIM(): $Skin;
        get ALEX_WIDE(): $Skin;
        get STEVE_SLIM(): $Skin;
        get ARI_WIDE(): $Skin;
        get MAKENA_SLIM(): $Skin;
        get KAI_WIDE(): $Skin;
        get ALEX_SLIM(): $Skin;
        get STEVE_WIDE(): $Skin;
        get ZURI_WIDE(): $Skin;
        get ARI_SLIM(): $Skin;
        get NOOR_WIDE(): $Skin;
        get ZURI_SLIM(): $Skin;
        get SUNNY_WIDE(): $Skin;
        get KAI_SLIM(): $Skin;
        get EFE_WIDE(): $Skin;
        get MAKENA_WIDE(): $Skin;
        get NOOR_SLIM(): $Skin;
        get SUNNY_SLIM(): $Skin;
        static get SKIN_URL$annotations(): void;
    }
    export class $Model extends $Enum<$Model> {
        static byVariantOrDefault(arg0: string): $Model;
        static byTypeOrDefault(arg0: string): $Model;
        static values(): $Model[];
        static valueOf(arg0: string): $Model;
        getType(): string;
        static getEntries(): $EnumEntries<$Model>;
        getVariant(): string;
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static byType(arg0: string): $Model;
        static byVariant(arg0: string): $Model;
        static Companion: $Model$Companion;
        static ALEX: $Model;
        static STEVE: $Model;
        get type(): string;
        static get entries(): $EnumEntries<$Model>;
        get variant(): string;
    }
    /**
     * Values that may be interpreted as {@link $Model}.
     */
    export type $Model_ = "steve" | "alex";
    export class $Model$Companion {
        byVariantOrDefault(arg0: string): $Model;
        byTypeOrDefault(arg0: string): $Model;
        serializer(): $KSerializer<$Model>;
        byType(arg0: string): $Model;
        byVariant(arg0: string): $Model;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $EssentialAsset {
        getChecksum(): string;
        static copy$default(arg0: $EssentialAsset, arg1: string, arg2: string, arg3: number, arg4: $Object): $EssentialAsset;
        copy(arg0: string, arg1: string): $EssentialAsset;
        getUrl(): string;
        static access$getEMPTY$cp(): $EssentialAsset;
        component2(): string;
        static write$Self$cosmetics(arg0: $EssentialAsset, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        static Companion: $EssentialAsset$Companion;
        constructor(arg0: number, arg1: string, arg2: string, arg3: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: string);
        get checksum(): string;
        get url(): string;
    }
    export class $Skin {
        static copy$default(arg0: $Skin, arg1: string, arg2: $Model_, arg3: number, arg4: $Object): $Skin;
        copy(arg0: string, arg1: $Model_): $Skin;
        getModel(): $Model;
        getUrl(): string;
        static fromUrl(arg0: string, arg1: $Model_): $Skin;
        getHash(): string;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        static hashFromUrl(arg0: string): string;
        component2(): $Model;
        static write$Self$cosmetics(arg0: $Skin, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$getDEFAULT_SKINS$cp(): $List<any>;
        static access$getEFE_WIDE$cp(): $Skin;
        static access$getMAKENA_SLIM$cp(): $Skin;
        static access$getSUNNY_WIDE$cp(): $Skin;
        static access$getALEX_SLIM$cp(): $Skin;
        static access$getSTEVE_SLIM$cp(): $Skin;
        static access$getNOOR_WIDE$cp(): $Skin;
        static access$getSUNNY_SLIM$cp(): $Skin;
        static access$getKAI_SLIM$cp(): $Skin;
        static access$getALEX_WIDE$cp(): $Skin;
        static access$getSTEVE_WIDE$cp(): $Skin;
        static access$getNOOR_SLIM$cp(): $Skin;
        static access$getARI_SLIM$cp(): $Skin;
        static access$getEFE_SLIM$cp(): $Skin;
        static access$getZURI_SLIM$cp(): $Skin;
        static access$getKAI_WIDE$cp(): $Skin;
        static access$getARI_WIDE$cp(): $Skin;
        static access$getMAKENA_WIDE$cp(): $Skin;
        static access$getZURI_WIDE$cp(): $Skin;
        component1(): string;
        static Companion: $Skin$Companion;
        static SKIN_URL: string;
        constructor(arg0: string, arg1: $Model_);
        constructor(arg0: number, arg1: string, arg2: $Model_, arg3: string, arg4: $SerializationConstructorMarker);
        get model(): $Model;
        get url(): string;
        get hash(): string;
    }
    export class $EssentialAsset$Companion {
        serializer(): $KSerializer<$EssentialAsset>;
        of(arg0: number[]): $EssentialAsset;
        of(arg0: string): $EssentialAsset;
        getEMPTY(): $EssentialAsset;
        constructor(arg0: $DefaultConstructorMarker);
        get EMPTY(): $EssentialAsset;
    }
}
