import { $QuadBounds } from "@package/ca/fxco/moreculling/api/data";
import { $SpriteContentsAnimatedTextureAccessor, $SpriteContentsTickerAccessor as $SpriteContentsTickerAccessor$1, $SpriteContentsAccessor as $SpriteContentsAccessor$2, $TextureAtlasAccessor as $TextureAtlasAccessor$1, $SimpleTextureAccessor, $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$2 } from "@package/net/irisshaders/iris/mixin/texture";
import { $SpriteContentsExtension as $SpriteContentsExtension$4, $TextureAtlasSpriteExtension } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";
import { $FrameSize_, $AnimationMetadataSection } from "@package/net/minecraft/client/resources/metadata/animation";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SpriteContentsFrameInfoAccessor, $AnimatedTextureAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/tracking";
import { $ResourceManager, $ResourceMetadata_, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $ResourceMetadata } from "@package/net/minecraft/server/packs/resources";
import { $Map, $Set, $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $SpriteContentsInvoker } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures";
import { $ResourceTextureAtlasAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $SpriteResourceLoader, $SpriteResourceLoader_ } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Function_ } from "@package/java/util/function";
import { $SpriteOpacity } from "@package/ca/fxco/moreculling/api/sprite";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Path_, $Path } from "@package/java/nio/file";
import { $UImage } from "@package/gg/essential/universal";
import { $SpriteExtension } from "@package/me/pepperbell/continuity/client/mixinterface";
import { $PBRAtlasHolder, $PBRSpriteHolder, $SpriteContentsExtension, $TextureAtlasExtension as $TextureAtlasExtension$1 } from "@package/net/irisshaders/iris/pbr/texture";
import { $SpriteContentsTickerAccessor, $SpriteContentsAccessor, $SpriteContentsAnimatedTextureAccessor as $SpriteContentsAnimatedTextureAccessor$1, $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$1 } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/upload";
import { $RuntimeException, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $IDeltaProviderContext, $IDeltaProvider_, $IDeltaProvider } from "@package/net/mehvahdjukaar/polytone/texture";
import { $TextureLocationSettable } from "@package/dzwdz/chat_heads/mixininterface";
import { $File_, $Closeable } from "@package/java/io";
import { $SpriteContentsExtension as $SpriteContentsExtension$3 } from "@package/net/irisshaders/iris/pbr";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $IMixinDynamicTexture } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $TextureAtlasExtension, $TextureManagerExtension, $AbstractTextureExtension } from "@package/foundry/veil/ext";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $EarsFeatures } from "@package/com/unascribed/ears/api/features";
import { $PlayerSkinTextureExt } from "@package/gg/essential/mixins/ext/client/renderer";
import { $SpriteFinderImpl$SpriteFinderAccess, $SpriteFinderImpl } from "@package/net/fabricmc/fabric/impl/renderer";
import { $IntStream } from "@package/java/util/stream";
import { $EarsFeaturesHolder } from "@package/com/unascribed/ears/common";
import { $TickerExtension, $SpriteContentsExtension as $SpriteContentsExtension$2 } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $SpriteContentsAccessor as $SpriteContentsAccessor$1 } from "@package/ca/fxco/moreculling/mixin/accessors";
import { $SpriteContentsExtension as $SpriteContentsExtension$1 } from "@package/net/caffeinemc/mods/sodium/client/render/texture";
import { $TextureAtlasAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/core/render/texture";
export * as atlas from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/minecraft/client/renderer/texture" {
    export class $StitcherException extends $RuntimeException {
        getAllSprites(): $Collection<$Stitcher$Entry>;
        constructor(entry: $Stitcher$Entry, allSprites: $Collection_<$Stitcher$Entry>);
        get allSprites(): $Collection<$Stitcher$Entry>;
    }
    export class $Stitcher<T extends $Stitcher$Entry> {
        getHeight(): number;
        getWidth(): number;
        stitch(): void;
        registerSprite(stitcherEntry: T): void;
        static smallestFittingMinTexel(dimension: number, mipLevel: number): number;
        gatherSprites(loader: $Stitcher$SpriteLoader_<T>): void;
        constructor(maxWidth: number, maxHeight: number, mipLevel: number);
        get height(): number;
        get width(): number;
    }
    export class $SpriteTicker {
    }
    export interface $SpriteTicker extends $AutoCloseable {
        close(): void;
        tickAndUpload(x: number, y: number): void;
    }
    export class $AbstractTexture implements $AutoCloseable, $AbstractTextureExtension {
        handler$bcd000$veil$bind(arg0: $CallbackInfo): void;
        restoreLastBlurMipmap(): void;
        handler$bcd000$veil$setFilterDSA(arg0: boolean, arg1: boolean, arg2: $CallbackInfo, arg3: number, arg4: number): void;
        reset(textureManager: $TextureManager, resourceManager: $ResourceManager, path: $ResourceLocation_, executor: $Executor_): void;
        load(resourceManager: $ResourceManager): void;
        getId(): number;
        close(): void;
        bind(): void;
        setFilter(blur: boolean, mipmap: boolean): void;
        releaseId(): void;
        setBlurMipmap(blur: boolean, mipmap: boolean): void;
        getTextureTarget(): number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor();
        get textureTarget(): number;
    }
    export class $OverlayTexture implements $AutoCloseable {
        static pack(u: number, v: number): number;
        static pack(u: number, hurt: boolean): number;
        static v(hurt: boolean): number;
        close(): void;
        static u(u: number): number;
        setupOverlayColor(): void;
        teardownOverlayColor(): void;
        static NO_WHITE_U: number;
        static WHITE_OVERLAY_V: number;
        static NO_OVERLAY: number;
        static RED_OVERLAY_V: number;
        constructor();
    }
    export class $Dumpable {
    }
    export interface $Dumpable {
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
    }
    /**
     * Values that may be interpreted as {@link $Dumpable}.
     */
    export type $Dumpable_ = ((arg0: $ResourceLocation, arg1: $Path) => void);
    export class $HttpTexture extends $SimpleTexture implements $TextureLocationSettable, $EarsFeaturesHolder, $PlayerSkinTextureExt {
        essential$getImage(): $UImage;
        essential$setImage(image: $UImage): void;
        getEarsFeatures(): $EarsFeatures;
        handler$bgc000$chat_heads$chatheads$registerBlendedHeadTexture(image: $NativeImage, ci: $CallbackInfo): void;
        chatheads$setTextureLocation(location: $ResourceLocation_): void;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(file: $File_ | null, urlString: string, location: $ResourceLocation_, processLegacySkin: boolean, onDownloaded: $Runnable_ | null);
        get earsFeatures(): $EarsFeatures;
    }
    export class $SpriteContents$InterpolationData implements $AutoCloseable {
        close(): void;
        handler$dcp000$sodium$assignParent(arg0: $SpriteContents, arg1: $CallbackInfo): void;
        uploadInterpolatedFrame(x: number, y: number, ticker: $SpriteContents$Ticker): void;
        this$0: $SpriteContents;
        constructor(arg0: $SpriteContents);
    }
    export class $SpriteLoader$Preparations extends $Record {
        width(): number;
        regions(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        missing(): $TextureAtlasSprite;
        height(): number;
        mipLevel(): number;
        waitForUpload(): $CompletableFuture<$SpriteLoader$Preparations>;
        readyForUpload(): $CompletableFuture<void>;
        constructor(width: number, height: number, mipLevel: number, missing: $TextureAtlasSprite, regions: $Map_<$ResourceLocation_, $TextureAtlasSprite>, readyForUpload: $CompletableFuture<void>);
    }
    /**
     * Values that may be interpreted as {@link $SpriteLoader$Preparations}.
     */
    export type $SpriteLoader$Preparations_ = { height?: number, missing?: $TextureAtlasSprite, width?: number, readyForUpload?: $CompletableFuture<void>, mipLevel?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>,  } | [height?: number, missing?: $TextureAtlasSprite, width?: number, readyForUpload?: $CompletableFuture<void>, mipLevel?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, ];
    export class $Tickable {
    }
    export interface $Tickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $Tickable}.
     */
    export type $Tickable_ = (() => void);
    export class $Stitcher$Holder<T extends $Stitcher$Entry> extends $Record {
        entry(): T;
        width(): number;
        height(): number;
        constructor(entry: T, mipLevel: number);
        constructor(entry: T, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$Holder}.
     */
    export type $Stitcher$Holder_<T> = { height?: number, width?: number, entry?: $Stitcher$Entry,  } | [height?: number, width?: number, entry?: $Stitcher$Entry, ];
    export class $SpriteLoader {
        static create(atlas: $TextureAtlas): $SpriteLoader;
        stitch(contents: $List_<$SpriteContents>, mipLevel: number, executor: $Executor_): $SpriteLoader$Preparations;
        loadAndStitch(resourceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_, sectionSerializers: $Collection_<$MetadataSectionSerializer<never>>): $CompletableFuture<$SpriteLoader$Preparations>;
        loadAndStitch(resouceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_): $CompletableFuture<$SpriteLoader$Preparations>;
        static runSpriteSuppliers(spriteResourceLoader: $SpriteResourceLoader_, factories: $List_<$Function_<$SpriteResourceLoader, $SpriteContents>>, executor: $Executor_): $CompletableFuture<$List<$SpriteContents>>;
        static DEFAULT_METADATA_SECTIONS: $Set<$MetadataSectionSerializer<never>>;
        constructor(location: $ResourceLocation_, maxSupportedTextureSize: number, minWidth: number, minHeight: number);
    }
    export class $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
    }
    export interface $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
        load(entry: T, x: number, y: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$SpriteLoader}.
     */
    export type $Stitcher$SpriteLoader_<T> = ((arg0: T, arg1: number, arg2: number) => void);
    export class $MissingTextureAtlasSprite {
        static getLocation(): $ResourceLocation;
        static create(): $SpriteContents;
        static getTexture(): $DynamicTexture;
        constructor();
        static get location(): $ResourceLocation;
        static get texture(): $DynamicTexture;
    }
    export class $SpriteContents$FrameInfo implements $SpriteContentsFrameInfoAccessor$2, $SpriteContentsFrameInfoAccessor, $SpriteContentsFrameInfoAccessor$1 {
        getIndex(): number;
        getTime(): number;
        index: number;
        time: number;
        constructor(index: number, time: number);
    }
    export class $Stitcher$Entry {
    }
    export interface $Stitcher$Entry {
        name(): $ResourceLocation;
        width(): number;
        height(): number;
    }
    export class $PreloadedTexture extends $SimpleTexture {
        getFuture(): $CompletableFuture<void>;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(resourceManager: $ResourceManager, location: $ResourceLocation_, backgroundExecutor: $Executor_);
        get future(): $CompletableFuture<void>;
    }
    export class $SpriteContents$Ticker implements $SpriteTicker, $SpriteContentsTickerAccessor$1, $SpriteContentsTickerAccessor, $TickerExtension {
        close(): void;
        tickAndUpload(x: number, y: number): void;
        handler$dco000$sodium$assignParent(arg0: $SpriteContents, arg1: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData, arg3: $CallbackInfo): void;
        simulated$isPlaying(): boolean;
        simulated$setPlaying(arg0: boolean): void;
        setFrame(arg0: number): void;
        getFrameIndex(): number;
        getFrame(): number;
        getSubFrame(): number;
        getFrameTicks(): number;
        setSubFrame(arg0: number): void;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        subFrame: number;
        animationInfo: $SpriteContents$AnimatedTexture;
        frame: number;
        constructor(animationInfo: $SpriteContents, interpolationData: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData | null);
        get frameIndex(): number;
        get frameTicks(): number;
    }
    export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsExtension$3, $SpriteContentsAccessor$2, $SpriteContentsExtension, $SpriteContentsInvoker, $SpriteContentsExtension$1, $SpriteContentsAccessor, $SpriteContentsExtension$4, $SpriteContentsAccessor$1, $SpriteContentsExtension$2 {
        name(): $ResourceLocation;
        close(): void;
        width(): number;
        metadata(): $ResourceMetadata;
        height(): number;
        upload(x: number, y: number, frameX: number, frameY: number, atlasData: $NativeImage[]): void;
        sodium$hasAnimation(): boolean;
        simulated$getTicker(): $SpriteContents$Ticker;
        simulated$setTicker(arg0: $SpriteContents$Ticker): void;
        uploadFirstFrame(x: number, y: number): void;
        getPBRHolder(): $PBRSpriteHolder;
        getFrameCount(): number;
        createTicker(): $SpriteTicker;
        getOrCreatePBRHolder(): $PBRSpriteHolder;
        getOriginalImage(): $NativeImage;
        sodium$hasTransparentPixels(): boolean;
        sodium$hasTranslucentPixels(): boolean;
        sodium$isActive(): boolean;
        getCreatedTicker(): $SpriteContents$Ticker;
        sodium$setActive(arg0: boolean): void;
        modifyReturnValue$dig000$polytone$addWorldTimeTextureData(original: $SpriteContents$AnimatedTexture, metadata: $AnimationMetadataSection): $SpriteContents$AnimatedTexture;
        isTransparent(frame: number, x: number, y: number): boolean;
        getUniqueFrames(): $IntStream;
        increaseMipLevel(mipLevel: number): void;
        getImage(): $NativeImage;
        invokeUpload(x: number, y: number, frameX: number, frameY: number, atlasData: $NativeImage[]): void;
        getAnimatedTexture(): $SpriteContents$AnimatedTexture;
        getImages(): $NativeImage[];
        animatedTexture: $SpriteContents$AnimatedTexture;
        byMipLevel: $NativeImage[];
        originalImage: $NativeImage;
        constructor(name: $ResourceLocation_, frameSize: $FrameSize_, originalImage: $NativeImage, metadata: $ResourceMetadata_);
        get PBRHolder(): $PBRSpriteHolder;
        get frameCount(): number;
        get orCreatePBRHolder(): $PBRSpriteHolder;
        get createdTicker(): $SpriteContents$Ticker;
        get uniqueFrames(): $IntStream;
        get image(): $NativeImage;
        get images(): $NativeImage[];
    }
    export class $DynamicTexture extends $AbstractTexture implements $Dumpable, $IMixinDynamicTexture {
        upload(): void;
        setPixels(pixels: $NativeImage): void;
        getPixels(): $NativeImage;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        wrapOperation$hfo000$moonlight$forceMipMap(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        wrapOperation$hfo000$moonlight$forceMipMap(arg0: $NativeImage, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Operation_<any>): void;
        setPixelsKonkrete(pixels: $NativeImage): void;
        getPixelsKonkrete(): $NativeImage;
        static NOT_ASSIGNED: number;
        pixels: $NativeImage;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor(pixels: $NativeImage);
        constructor(width: number, height: number, useCalloc: boolean);
    }
    export class $SpriteContents$AnimatedTexture implements $SpriteContentsAnimatedTextureAccessor, $AnimatedTextureAccessor, $SpriteContentsAnimatedTextureAccessor$1, $IDeltaProviderContext {
        polytone$getMode(): $IDeltaProvider;
        polytone$setMode(mode: $IDeltaProvider_): void;
        getFrameY(frameIndex: number): number;
        getFrameX(frameIndex: number): number;
        uploadFirstFrame(x: number, y: number): void;
        createTicker(): $SpriteTicker;
        polytone$getTimeCycleDuration(): number;
        polytone$setTimeCycleDuration(duration: number): void;
        handler$dgl000$polytone$modifyTicker(cir: $CallbackInfoReturnable<any>): void;
        uploadFrame(x: number, y: number, frameIndex: number): void;
        getUniqueFrames(): $IntStream;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        invokeUploadFrame(x: number, y: number, frameIndex: number): void;
        getFrameRowSize(): number;
        frames: $List<$SpriteContents$FrameInfo>;
        this$0: $SpriteContents;
        get uniqueFrames(): $IntStream;
        get frameRowSize(): number;
    }
    export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $TextureAtlasAccessor$1, $TextureAtlasExtension$1, $ResourceTextureAtlasAccessor, $TextureAtlasExtension, $TextureAtlasAccessor, $SpriteFinderImpl$SpriteFinderAccess {
        maxSupportedTextureSize(): number;
        fabric_spriteFinder(): $SpriteFinderImpl;
        getSprite(name: $ResourceLocation_): $TextureAtlasSprite;
        location(): $ResourceLocation;
        tick(): void;
        upload(preparations: $SpriteLoader$Preparations_): void;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        clearTextureData(): void;
        getTextures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        veil$hasTexture(arg0: $ResourceLocation_): boolean;
        getPBRHolder(): $PBRAtlasHolder;
        updateFilter(preparations: $SpriteLoader$Preparations_): void;
        cycleAnimationFrames(): void;
        getOrCreatePBRHolder(): $PBRAtlasHolder;
        redirect$zck000$sodium_extra$sodiumExtra$tickAnimatedSprites(arg0: $TextureAtlasSprite): $TextureAtlasSprite$Ticker;
        getHeight(): number;
        getWidth(): number;
        getMipLevel(): number;
        callGetWidth(): number;
        getTexturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        callGetHeight(): number;
        static NOT_ASSIGNED: number;
        /**
         * @deprecated
         */
        static LOCATION_BLOCKS: $ResourceLocation;
        mipmap: boolean;
        /**
         * @deprecated
         */
        static LOCATION_PARTICLES: $ResourceLocation;
        texturesByName: $Map<$ResourceLocation, $TextureAtlasSprite>;
        width: number;
        blur: boolean;
        id: number;
        height: number;
        constructor(location: $ResourceLocation_);
        get textures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get PBRHolder(): $PBRAtlasHolder;
        get orCreatePBRHolder(): $PBRAtlasHolder;
        get mipLevel(): number;
    }
    export class $Stitcher$Region<T extends $Stitcher$Entry> {
        getX(): number;
        add(holder: $Stitcher$Holder_<T>): boolean;
        walk(spriteLoader: $Stitcher$SpriteLoader_<T>): void;
        getY(): number;
        constructor(originX: number, originY: number, width: number, height: number);
        get x(): number;
        get y(): number;
    }
    export class $SimpleTexture extends $AbstractTexture implements $SimpleTextureAccessor {
        getTextureImage(resourceManager: $ResourceManager): $SimpleTexture$TextureImage;
        getLocation(): $ResourceLocation;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(location: $ResourceLocation_);
    }
    export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable, $TextureManagerExtension, $IdentifiableResourceReloadListener {
        veil$registerPreloadedTexture(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $Executor_): $CompletableFuture<any>;
        register(path: $ResourceLocation_, texture: $AbstractTexture): void;
        register(name: string, texture: $DynamicTexture): $ResourceLocation;
        close(): void;
        release(path: $ResourceLocation_): void;
        tick(): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getTexture(path: $ResourceLocation_, defaultTexture: $AbstractTexture): $AbstractTexture;
        getTexture(path: $ResourceLocation_): $AbstractTexture;
        preload(path: $ResourceLocation_, backgroundExecutor: $Executor_): $CompletableFuture<void>;
        getFabricId(): $ResourceLocation;
        modify$bda000$veil$wrap(arg0: $AbstractTexture, arg1: $ResourceLocation_): $AbstractTexture;
        bindForSetup(path: $ResourceLocation_): void;
        getFabricDependencies(): $Collection<any>;
        wrapMethod$fjm001$asyncparticles$wrapTick(original: $Operation_<any>): void;
        handler$bbj000$veil$applyLabel(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $CallbackInfo): void;
        dumpAllSheets(path: $Path_): void;
        getName(): string;
        byPath: $Map<$ResourceLocation, $AbstractTexture>;
        static INTENTIONAL_MISSING_TEXTURE: $ResourceLocation;
        constructor(resourceManager: $ResourceManager);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get name(): string;
    }
    export class $TextureAtlasSprite implements $TextureAtlasSpriteExtension, $SpriteOpacity, $SpriteExtension {
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV0(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV1(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU0(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU1(): number;
        getV(u: number): number;
        getU(u: number): number;
        getX(): number;
        wrap(consumer: $VertexConsumer): $VertexConsumer;
        contents(): $SpriteContents;
        getY(): number;
        atlasLocation(): $ResourceLocation;
        getUOffset(u: number): number;
        getVOffset(u: number): number;
        uploadFirstFrame(): void;
        createTicker(): $TextureAtlasSprite$Ticker;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        uvShrinkRatio(): number;
        sodium$hasUnknownImageContents(): boolean;
        moreculling$getUnmipmappedImage(): $NativeImage;
        moreculling$hasTransparency(): boolean;
        moreculling$hasTransparency(arg0: $QuadBounds): boolean;
        moreculling$hasTranslucency(arg0: $QuadBounds): boolean;
        moreculling$hasTranslucency(arg0: $List_<any>): boolean;
        moreculling$hasTranslucency(arg0: $QuadBounds, arg1: $List_<any>): boolean;
        moreculling$hasTranslucency(): boolean;
        continuity$getEmissiveSprite(): $TextureAtlasSprite;
        continuity$setEmissiveSprite(sprite: $TextureAtlasSprite): void;
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        x: number;
        y: number;
        constructor(atlasLocation: $ResourceLocation_, contents: $SpriteContents, originX: number, originY: number, x: number, y: number);
        get v0(): number;
        get v1(): number;
        get u0(): number;
        get u1(): number;
    }
    export class $SimpleTexture$TextureImage implements $Closeable {
    }
    export class $MipmapGenerator {
        static generateMipLevels(images: $NativeImage[], mipLevel: number): $NativeImage[];
    }
    export class $TextureAtlasSprite$Ticker {
    }
    export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
        close(): void;
        tickAndUpload(): void;
    }
}
