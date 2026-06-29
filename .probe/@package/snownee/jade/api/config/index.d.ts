import { $IToggleableProvider_ } from "@package/snownee/jade/api";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Set } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/snownee/jade/api/config" {
    export class $IPluginConfig {
    }
    export interface $IPluginConfig {
        get(arg0: $IToggleableProvider_): boolean;
        get(arg0: $ResourceLocation_): boolean;
        getInt(arg0: $ResourceLocation_): number;
        getFloat(arg0: $ResourceLocation_): number;
        getString(arg0: $ResourceLocation_): string;
        getKeys(arg0: string): $Set<$ResourceLocation>;
        getKeys(): $Set<$ResourceLocation>;
        getEnum<T extends $Enum<T>>(arg0: $ResourceLocation_): T;
    }
}
