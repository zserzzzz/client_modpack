import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        getTile(arg0: number, arg1: number): $MinimapTile;
        bindTexture(arg0: number): number;
        getZ(): number;
        getX(): number;
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        setBlockTextureUpload(arg0: boolean): void;
        setChanged(arg0: boolean): void;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        isChanged(): boolean;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        setLevelsBuffered(arg0: number): void;
        getLevelsBuffered(): number;
        setGlTexture(arg0: number, arg1: number): void;
        getGlTexture(arg0: number): number;
        isRefreshRequired(arg0: number): boolean;
        setHasSomething(arg0: boolean): void;
        isHasSomething(): boolean;
        recycleTiles(): void;
        updateBuffers(arg0: number, arg1: number[][]): void;
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): void;
        getLevelToRefresh(arg0: number): number;
        isBlockTextureUpload(): boolean;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get z(): number;
        get x(): number;
    }
    export class $MinimapTile {
        getHeight(arg0: number, arg1: number): number;
        getZ(): number;
        getX(): number;
        recycle(): void;
        isSuccess(): boolean;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        setSuccess(arg0: boolean): void;
        setHighlightVersion(arg0: number): void;
        getHighlightVersion(): number;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getHighlights(): number[];
        hasTerrain(): boolean;
        isChunkGrid(): boolean;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        setHasTerrain(arg0: boolean): void;
        setHighlights(arg0: number[]): void;
        setHasSomething(arg0: boolean): void;
        isHasSomething(): boolean;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        setWasTransfered(arg0: boolean): void;
        isSlimeChunk(): boolean;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        isWasTransfered(): boolean;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get z(): number;
        get x(): number;
        get chunkGrid(): boolean;
    }
}
