import { $Instant } from "@package/java/time";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $List, $List_, $Map_, $Map, $Map$Entry } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Lazy } from "@package/kotlin";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";

declare module "@package/gg/essential/mod/cosmetics/featured" {
    export class $FeaturedPageCollection$Availability$Companion {
        serializer(): $KSerializer<$FeaturedPageCollection$Availability>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $FeaturedPageCollection$Availability {
        static copy$default(arg0: $FeaturedPageCollection$Availability, arg1: $Instant, arg2: $Instant, arg3: $Instant, arg4: number, arg5: $Object): $FeaturedPageCollection$Availability;
        copy(arg0: $Instant, arg1: $Instant, arg2: $Instant): $FeaturedPageCollection$Availability;
        getAfter(): $Instant;
        getShowTimerAfter(): $Instant;
        component2(): $Instant;
        component3(): $Instant;
        static write$Self$cosmetics(arg0: $FeaturedPageCollection$Availability, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): $Instant;
        static getShowTimerAfter$annotations(): void;
        getUntil(): $Instant;
        static Companion: $FeaturedPageCollection$Availability$Companion;
        constructor(arg0: number, arg1: $Instant, arg2: $Instant, arg3: $Instant, arg4: $SerializationConstructorMarker);
        constructor(arg0: $Instant, arg1: $Instant, arg2: $Instant, arg3: number, arg4: $DefaultConstructorMarker);
        constructor(arg0: $Instant, arg1: $Instant, arg2: $Instant);
        get after(): $Instant;
        get showTimerAfter(): $Instant;
        static get showTimerAfter$annotations(): void;
        get until(): $Instant;
    }
    export class $FeaturedPage {
        static copy$default(arg0: $FeaturedPage, arg1: $List_<any>, arg2: number, arg3: $Object): $FeaturedPage;
        copy(arg0: $List_<$FeaturedPageComponent>): $FeaturedPage;
        component1(): $List<$FeaturedPageComponent>;
        getRows(): $List<$FeaturedPageComponent>;
        static Companion: $FeaturedPage$Companion;
        constructor(arg0: $List_<$FeaturedPageComponent>);
        get rows(): $List<$FeaturedPageComponent>;
    }
    export class $FeaturedPage$Companion {
        serializer(): $KSerializer<$FeaturedPage>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $FeaturedPageCollection {
        static copy$default(arg0: $FeaturedPageCollection, arg1: string, arg2: $FeaturedPageCollection$Availability, arg3: $Map_<any, any>, arg4: number, arg5: $Object): $FeaturedPageCollection;
        getId(): string;
        copy(arg0: string, arg1: $FeaturedPageCollection$Availability, arg2: $Map_<number, $FeaturedPage>): $FeaturedPageCollection;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getAvailability(): $FeaturedPageCollection$Availability;
        component2(): $FeaturedPageCollection$Availability;
        component3(): $Map<number, $FeaturedPage>;
        getPages(): $Map<number, $FeaturedPage>;
        getClosestLayoutOrNull(arg0: number): $Map$Entry<number, $FeaturedPage>;
        static write$Self$cosmetics(arg0: $FeaturedPageCollection, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        component1(): string;
        static Companion: $FeaturedPageCollection$Companion;
        constructor(arg0: number, arg1: string, arg2: $FeaturedPageCollection$Availability, arg3: $Map_<any, any>, arg4: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $FeaturedPageCollection$Availability, arg2: $Map_<any, any>, arg3: number, arg4: $DefaultConstructorMarker);
        constructor(arg0: string, arg1: $FeaturedPageCollection$Availability, arg2: $Map_<number, $FeaturedPage>);
        get id(): string;
        get availability(): $FeaturedPageCollection$Availability;
        get pages(): $Map<number, $FeaturedPage>;
    }
    export class $FeaturedPageCollection$Companion {
        serializer(): $KSerializer<$FeaturedPageCollection>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $FeaturedPageComponent {
    }
    export interface $FeaturedPageComponent {
    }
}
