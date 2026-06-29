import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SceneBuilder } from "@package/net/createmod/ponder/api/scene";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $ParticleType_, $ScalableParticleOptionsBase, $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Object, $Record } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/almostreliable/ponderjs/particles" {
    export class $ParticleTransformation {
        static onlyPosition(arg0: $ParticleTransformation$Simple_): $ParticleTransformation;
        static onlyMotion(arg0: $ParticleTransformation$Simple_): $ParticleTransformation;
    }
    export interface $ParticleTransformation {
        apply(arg0: number, arg1: $Vec3_, arg2: $Vec3_): $ParticleTransformation$Data;
    }
    /**
     * Values that may be interpreted as {@link $ParticleTransformation}.
     */
    export type $ParticleTransformation_ = ((arg0: number, arg1: $Vec3, arg2: $Vec3) => $ParticleTransformation$Data_);
    export class $ParticleDataBuilder$DustParticleDataBuilder extends $ParticleDataBuilder<$ParticleDataBuilder$DustParticleDataBuilder, $ScalableParticleOptionsBase> {
        constructor(arg0: $KubeColor_, arg1: $KubeColor_ | null);
    }
    export class $ParticleTransformation$Simple {
    }
    export interface $ParticleTransformation$Simple {
        apply(arg0: number, arg1: $Vec3_): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $ParticleTransformation$Simple}.
     */
    export type $ParticleTransformation$Simple_ = ((arg0: number, arg1: $Vec3) => $Vec3_);
    export class $ParticleInstructions {
        simple(arg0: number, arg1: $ParticleType_<never>, arg2: $Vec3_): $ParticleDataBuilder<never, never>;
        block(arg0: number, arg1: $BlockState_, arg2: $Vec3_): $ParticleDataBuilder$Static;
        item(arg0: number, arg1: $ItemStack_, arg2: $Vec3_): $ParticleDataBuilder$Static;
        dust(arg0: number, arg1: $KubeColor_, arg2: $KubeColor_, arg3: $Vec3_): $ParticleDataBuilder$DustParticleDataBuilder;
        dust(arg0: number, arg1: $KubeColor_, arg2: $Vec3_): $ParticleDataBuilder$DustParticleDataBuilder;
        constructor(arg0: $SceneBuilder);
    }
    export class $ParticleTransformation$Data extends $Record {
        position(): $Vec3;
        static of(arg1: $Object | null): $ParticleTransformation$Data;
        motion(): $Vec3;
        constructor(position: $Vec3_, motion: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $ParticleTransformation$Data}.
     */
    export type $ParticleTransformation$Data_ = { position?: $Vec3_, motion?: $Vec3_,  } | [position?: $Vec3_, motion?: $Vec3_, ];
    export class $ParticleDataBuilder<O extends $ParticleDataBuilder<O, PO>, PO extends $ParticleOptions> {
        scale(arg0: number): O;
        transform(arg0: $ParticleTransformation_): O;
        delta(arg0: $Vec3_): O;
        color(arg0: $KubeColor_): O;
        roll(arg0: number): O;
        lifetime(arg0: number): O;
        transformPosition(arg0: $ParticleTransformation$Simple_): O;
        area(arg0: $Vec3_): O;
        friction(arg0: number): O;
        density(arg0: number): O;
        motion(arg0: $Vec3_): O;
        speed(arg0: $Vec3_): O;
        gravity(arg0: number): O;
        collision(arg0: boolean): O;
        physics(arg0: boolean): O;
        withinBlockSpace(): O;
        transformMotion(arg0: $ParticleTransformation$Simple_): O;
        constructor();
    }
    export class $ParticleDataBuilder$Static extends $ParticleDataBuilder<$ParticleDataBuilder$Static, $ParticleOptions> {
        constructor(arg0: $ParticleOptions_);
    }
}
