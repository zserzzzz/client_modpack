import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $DynamicTexture } from "@package/net/minecraft/client/renderer/texture";
import { $AutoCloseable } from "@package/java/lang";

declare module "@package/net/raphimc/immediatelyfast/feature/map_atlas_generation" {
    export class $MapAtlasTexture implements $AutoCloseable {
        getIdentifier(): $ResourceLocation;
        getId(): number;
        close(): void;
        getTexture(): $DynamicTexture;
        getNextMapLocation(): number;
        static MAP_SIZE: number;
        static ATLAS_SIZE: number;
        static MAPS_PER_ATLAS: number;
        constructor(id: number);
        get identifier(): $ResourceLocation;
        get id(): number;
        get texture(): $DynamicTexture;
        get nextMapLocation(): number;
    }
}
