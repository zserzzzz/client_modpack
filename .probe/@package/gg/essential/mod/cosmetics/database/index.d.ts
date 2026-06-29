import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $List, $List_ } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Lazy } from "@package/kotlin";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";

declare module "@package/gg/essential/mod/cosmetics/database" {
    export class $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership {
        static copy$default(arg0: $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership, arg1: string, arg2: $List_<any>, arg3: $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion_, arg4: number, arg5: $Object): $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership;
        getId(): string;
        copy(arg0: string, arg1: $List_<string>, arg2: $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion_): $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getCosmetics(): $List<string>;
        component2(): $List<string>;
        component3(): $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion;
        static write$Self$cosmetics(arg0: $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        getCriterion(): $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion;
        static Companion: $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Companion;
        constructor(arg0: string, arg1: $List_<string>, arg2: $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion_);
        constructor(arg0: number, arg1: string, arg2: $List_<any>, arg3: $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion_, arg4: $SerializationConstructorMarker);
        get id(): string;
        get cosmetics(): $List<string>;
        get criterion(): $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion;
    }
    export class $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion {
        static Companion: $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Companion;
    }
    export interface $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion {
        getType(): string;
        get type(): string;
    }
    /**
     * Values that may be interpreted as {@link $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion}.
     */
    export type $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion_ = (() => string);
    export class $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion$Companion {
        serializer(): $KSerializer<$GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion>;
    }
    export class $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Companion {
        serializer(): $KSerializer<$GitRepoCosmeticsDatabase$CosmeticImplicitOwnership>;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
