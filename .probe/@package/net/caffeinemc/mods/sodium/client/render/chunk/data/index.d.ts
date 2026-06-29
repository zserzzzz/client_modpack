import { $GlBufferSegment } from "@package/net/caffeinemc/mods/sodium/client/gl/arena";
import { $NativeBuffer } from "@package/net/caffeinemc/mods/sodium/client/util";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/data" {
    export class $BuiltSectionInfo {
        culledBlockEntities: $BlockEntity[];
        globalBlockEntities: $BlockEntity[];
        visibilityData: number;
        flags: number;
        animatedSprites: $TextureAtlasSprite[];
        static EMPTY: $BuiltSectionInfo;
    }
    export class $SectionRenderDataStorage {
        "delete"(): void;
        removeData(arg0: number): void;
        getDataPointer(arg0: number): number;
        onBufferResized(): void;
        onIndexBufferResized(): void;
        setIndexData(arg0: number, arg1: $GlBufferSegment): void;
        removeVertexData(arg0: number): void;
        removeIndexData(arg0: number): void;
        setVertexData(arg0: number, arg1: $GlBufferSegment, arg2: number[]): void;
        constructor(arg0: boolean);
    }
    export class $BuiltSectionMeshParts {
        getVertexCounts(): number[];
        getVertexData(): $NativeBuffer;
        constructor(arg0: $NativeBuffer, arg1: number[]);
        get vertexCounts(): number[];
        get vertexData(): $NativeBuffer;
    }
}
