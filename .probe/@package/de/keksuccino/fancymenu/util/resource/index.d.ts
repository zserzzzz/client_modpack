import { $InputStream, $Closeable } from "@package/java/io";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AspectRatio } from "@package/de/keksuccino/fancymenu/util/rendering";
export * as resources from "@package/de/keksuccino/fancymenu/util/resource/resources";

declare module "@package/de/keksuccino/fancymenu/util/resource" {
    export class $PlayableResource {
    }
    export interface $PlayableResource extends $Resource {
        stop(): void;
        play(): void;
        isPlaying(): boolean;
        pause(): void;
        isPaused(): boolean;
        get playing(): boolean;
        get paused(): boolean;
    }
    export class $Resource {
    }
    export interface $Resource extends $Closeable {
        isClosed(): boolean;
        open(): $InputStream;
        waitForReady(arg0: number): void;
        isReady(): boolean;
        waitForLoadingCompletedOrFailed(arg0: number): void;
        isLoadingCompleted(): boolean;
        isLoadingFailed(): boolean;
        get closed(): boolean;
        get ready(): boolean;
        get loadingCompleted(): boolean;
        get loadingFailed(): boolean;
    }
    export class $RenderableResource {
        static MISSING_TEXTURE_LOCATION: $ResourceLocation;
        static FULLY_TRANSPARENT_TEXTURE: $ResourceLocation;
    }
    export interface $RenderableResource extends $Resource {
        getHeight(): number;
        getResourceLocation(): $ResourceLocation;
        reset(): void;
        getWidth(): number;
        getAspectRatio(): $AspectRatio;
        get height(): number;
        get resourceLocation(): $ResourceLocation;
        get width(): number;
        get aspectRatio(): $AspectRatio;
    }
}
