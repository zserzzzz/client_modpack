import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Color } from "@package/gg/essential/model/util";
import { $Json } from "@package/kotlinx/serialization/json";
import { $Enum, $Object } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Lazy } from "@package/kotlin";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";

declare module "@package/gg/essential/mod/cosmetics/settings" {
    export class $CosmeticSetting$AnimationVariant extends $CosmeticSetting {
        static copy$default(arg0: $CosmeticSetting$AnimationVariant, arg1: string, arg2: boolean, arg3: $CosmeticSetting$AnimationVariant$Data, arg4: number, arg5: $Object): $CosmeticSetting$AnimationVariant;
        copy(arg0: string, arg1: boolean, arg2: $CosmeticSetting$AnimationVariant$Data): $CosmeticSetting$AnimationVariant;
        getData(): $CosmeticSetting$AnimationVariant$Data;
        component2(): boolean;
        component3(): $CosmeticSetting$AnimationVariant$Data;
        static write$Self$cosmetics(arg0: $CosmeticSetting$AnimationVariant, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        static getType$annotations(): void;
        static Companion: $CosmeticSetting$AnimationVariant$Companion;
        constructor(arg0: string, arg1: boolean, arg2: $CosmeticSetting$AnimationVariant$Data);
        constructor(arg0: number, arg1: string, arg2: boolean, arg3: $CosmeticSetting$AnimationVariant$Data, arg4: $SerializationConstructorMarker);
        get data(): $CosmeticSetting$AnimationVariant$Data;
        static get type$annotations(): void;
    }
    export class $CosmeticProperty {
        getId(): string;
        getType(): $CosmeticPropertyType;
        getEnabled(): boolean;
        static access$getJson$delegate$cp(): $Lazy<any>;
        static getEnabled$annotations(): void;
        static getId$annotations(): void;
        static Companion: $CosmeticProperty$Companion;
        constructor(arg0: $DefaultConstructorMarker);
        get id(): string;
        get type(): $CosmeticPropertyType;
        get enabled(): boolean;
        static get enabled$annotations(): void;
        static get id$annotations(): void;
    }
    export class $CosmeticSetting$Variant extends $CosmeticSetting {
        static copy$default(arg0: $CosmeticSetting$Variant, arg1: string, arg2: boolean, arg3: $CosmeticSetting$Variant$Data, arg4: number, arg5: $Object): $CosmeticSetting$Variant;
        copy(arg0: string, arg1: boolean, arg2: $CosmeticSetting$Variant$Data): $CosmeticSetting$Variant;
        getData(): $CosmeticSetting$Variant$Data;
        component2(): boolean;
        component3(): $CosmeticSetting$Variant$Data;
        static write$Self$cosmetics(arg0: $CosmeticSetting$Variant, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        static getType$annotations(): void;
        static Companion: $CosmeticSetting$Variant$Companion;
        constructor(arg0: string, arg1: boolean, arg2: $CosmeticSetting$Variant$Data);
        constructor(arg0: number, arg1: string, arg2: boolean, arg3: $CosmeticSetting$Variant$Data, arg4: $SerializationConstructorMarker);
        get data(): $CosmeticSetting$Variant$Data;
        static get type$annotations(): void;
    }
    export class $CosmeticProperty$Variants$Variant {
        getName(): string;
        static write$Self$cosmetics(arg0: $CosmeticProperty$Variants$Variant, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        static "copy-BS0M10c$default"(arg0: $CosmeticProperty$Variants$Variant, arg1: string, arg2: number, arg3: number, arg4: $Object): $CosmeticProperty$Variants$Variant;
        "getColor-yaPNGYs"(): number;
        static "getColor-yaPNGYs$annotations"(): void;
        "component2-yaPNGYs"(): number;
        "copy-BS0M10c"(arg0: string, arg1: number): $CosmeticProperty$Variants$Variant;
        static Companion: $CosmeticProperty$Variants$Variant$Companion;
        constructor(arg0: string, arg1: number, arg2: $DefaultConstructorMarker);
        constructor(arg0: number, arg1: string, arg2: $Color, arg3: $SerializationConstructorMarker, arg4: $DefaultConstructorMarker);
        get name(): string;
        get color-yaPNGYs(): number;
        static get color-yaPNGYs$annotations(): void;
    }
    export class $CosmeticSetting$Companion {
        fromJson(arg0: string): $CosmeticSetting;
        serializer(): $KSerializer<$CosmeticSetting>;
        getJson(): $Json;
        fromJsonArray(arg0: string): $List<$CosmeticSetting>;
        constructor(arg0: $DefaultConstructorMarker);
        get json(): $Json;
    }
    export class $CosmeticSetting$Variant$Data$Companion {
        serializer(): $KSerializer<$CosmeticSetting$Variant$Data>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticSetting$AnimationVariant$Companion {
        serializer(): $KSerializer<$CosmeticSetting$AnimationVariant>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticProperty$Variants$Variant$Companion {
        serializer(): $KSerializer<$CosmeticProperty$Variants$Variant>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticProperty$Companion {
        fromJson(arg0: string): $CosmeticProperty;
        serializer(): $KSerializer<$CosmeticProperty>;
        getJson(): $Json;
        fromJsonArray(arg0: string): $List<$CosmeticProperty>;
        constructor(arg0: $DefaultConstructorMarker);
        get json(): $Json;
    }
    export class $CosmeticPropertyType extends $Enum<$CosmeticPropertyType> {
        static values(): $CosmeticPropertyType[];
        static valueOf(arg0: string): $CosmeticPropertyType;
        static getEntries(): $EnumEntries<$CosmeticPropertyType>;
        getDisplayName(): string;
        getSingleton(): boolean;
        static REQUIRES_UNLOCK_ACTION: $CosmeticPropertyType;
        static LOCALIZATION: $CosmeticPropertyType;
        static INTERRUPTS_EMOTE: $CosmeticPropertyType;
        static ALL_OTHER_COSMETIC_OR_ITEM_HIDING: $CosmeticPropertyType;
        static VARIANTS: $CosmeticPropertyType;
        static LOCKS_PLAYER_ROTATION: $CosmeticPropertyType;
        static PREVIEW_RESET_TIME: $CosmeticPropertyType;
        static DEFAULT_SIDE: $CosmeticPropertyType;
        static POSITION_RANGE: $CosmeticPropertyType;
        static TRANSITION_DELAY: $CosmeticPropertyType;
        static MUTUALLY_EXCLUSIVE: $CosmeticPropertyType;
        static EXTERNAL_HIDDEN_BONE: $CosmeticPropertyType;
        static ARMOR_HANDLING: $CosmeticPropertyType;
        static ARMOR_HANDLING_V2: $CosmeticPropertyType;
        static COSMETIC_BONE_HIDING: $CosmeticPropertyType;
        static get entries(): $EnumEntries<$CosmeticPropertyType>;
        get displayName(): string;
        get singleton(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CosmeticPropertyType}.
     */
    export type $CosmeticPropertyType_ = "armor_handling" | "armor_handling_v2" | "position_range" | "interrupts_emote" | "requires_unlock_action" | "preview_reset_time" | "localization" | "cosmetic_bone_hiding" | "external_hidden_bone" | "transition_delay" | "variants" | "default_side" | "mutually_exclusive" | "all_other_cosmetic_or_item_hiding" | "locks_player_rotation";
    export class $CosmeticSetting$Variant$Companion {
        serializer(): $KSerializer<$CosmeticSetting$Variant>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticSettingType extends $Enum<$CosmeticSettingType> {
        static values(): $CosmeticSettingType[];
        static valueOf(arg0: string): $CosmeticSettingType;
        static getEntries(): $EnumEntries<$CosmeticSettingType>;
        getDisplayName(): string;
        getSingleton(): boolean;
        static SIDE: $CosmeticSettingType;
        static ANIMATION_VARIANT: $CosmeticSettingType;
        static PLAYER_POSITION_ADJUSTMENT: $CosmeticSettingType;
        static VARIANT: $CosmeticSettingType;
        static get entries(): $EnumEntries<$CosmeticSettingType>;
        get displayName(): string;
        get singleton(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CosmeticSettingType}.
     */
    export type $CosmeticSettingType_ = "player_position_adjustment" | "side" | "variant" | "animation_variant";
    export class $CosmeticProperty$InterruptsEmote$Data {
        static copy$default(arg0: $CosmeticProperty$InterruptsEmote$Data, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: number, arg7: $Object): $CosmeticProperty$InterruptsEmote$Data;
        copy(arg0: boolean, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): $CosmeticProperty$InterruptsEmote$Data;
        component2(): number;
        component3(): boolean;
        component4(): boolean;
        component5(): boolean;
        static write$Self$cosmetics(arg0: $CosmeticProperty$InterruptsEmote$Data, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): boolean;
        getMovement(): boolean;
        getAttack(): boolean;
        getDamaged(): boolean;
        static getMovementGraceTime$annotations(): void;
        static getMovement$annotations(): void;
        getMovementGraceTime(): number;
        static getAttack$annotations(): void;
        static getDamaged$annotations(): void;
        static getArmSwing$annotations(): void;
        getArmSwing(): boolean;
        static Companion: $CosmeticProperty$InterruptsEmote$Data$Companion;
        constructor(arg0: number, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $SerializationConstructorMarker);
        constructor();
        constructor(arg0: boolean, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: $DefaultConstructorMarker);
        constructor(arg0: boolean, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean);
        get movement(): boolean;
        get attack(): boolean;
        get damaged(): boolean;
        static get movementGraceTime$annotations(): void;
        static get movement$annotations(): void;
        get movementGraceTime(): number;
        static get attack$annotations(): void;
        static get damaged$annotations(): void;
        static get armSwing$annotations(): void;
        get armSwing(): boolean;
    }
    export class $CosmeticSetting$Variant$Data {
        static copy$default(arg0: $CosmeticSetting$Variant$Data, arg1: string, arg2: number, arg3: $Object): $CosmeticSetting$Variant$Data;
        copy(arg0: string): $CosmeticSetting$Variant$Data;
        getVariant(): string;
        static write$Self$cosmetics(arg0: $CosmeticSetting$Variant$Data, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        static Companion: $CosmeticSetting$Variant$Data$Companion;
        constructor(arg0: string);
        constructor(arg0: number, arg1: string, arg2: $SerializationConstructorMarker);
        get variant(): string;
    }
    export class $CosmeticProperty$InterruptsEmote$Data$Companion {
        serializer(): $KSerializer<$CosmeticProperty$InterruptsEmote$Data>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticSetting {
        getId(): string;
        getType(): $CosmeticSettingType;
        getEnabled(): boolean;
        static access$getJson$delegate$cp(): $Lazy<any>;
        static getEnabled$annotations(): void;
        static Companion: $CosmeticSetting$Companion;
        constructor(arg0: $DefaultConstructorMarker);
        get id(): string;
        get type(): $CosmeticSettingType;
        get enabled(): boolean;
        static get enabled$annotations(): void;
    }
    export class $CosmeticSetting$AnimationVariant$Data {
        static copy$default(arg0: $CosmeticSetting$AnimationVariant$Data, arg1: string, arg2: number, arg3: $Object): $CosmeticSetting$AnimationVariant$Data;
        copy(arg0: string): $CosmeticSetting$AnimationVariant$Data;
        static write$Self$cosmetics(arg0: $CosmeticSetting$AnimationVariant$Data, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        getAnimationVariant(): string;
        static Companion: $CosmeticSetting$AnimationVariant$Data$Companion;
        constructor(arg0: string);
        constructor(arg0: number, arg1: string, arg2: $SerializationConstructorMarker);
        constructor();
        constructor(arg0: string, arg1: number, arg2: $DefaultConstructorMarker);
        get animationVariant(): string;
    }
}
