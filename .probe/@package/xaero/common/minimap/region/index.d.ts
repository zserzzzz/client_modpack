import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        getZ(): number;
        getX(): number;
        bindTexture(arg0: number): number;
        setChanged(arg0: boolean): void;
        getTile(arg0: number, arg1: number): $MinimapTile;
        setBlockTextureUpload(arg0: boolean): void;
        isChanged(): boolean;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        getLevelsBuffered(): number;
        recycleTiles(): void;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        isHasSomething(): boolean;
        updateBuffers(arg0: number, arg1: number[][]): void;
        getGlTexture(arg0: number): number;
        setGlTexture(arg0: number, arg1: number): void;
        setLevelsBuffered(arg0: number): void;
        isRefreshRequired(arg0: number): boolean;
        setHasSomething(arg0: boolean): void;
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): void;
        isBlockTextureUpload(): boolean;
        getLevelToRefresh(arg0: number): number;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get z(): number;
        get x(): number;
    }
    export class $MinimapTile {
        isSuccess(): boolean;
        setSuccess(arg0: boolean): void;
        getHeight(arg0: number, arg1: number): number;
        getZ(): number;
        getX(): number;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getHighlights(): number[];
        setHeight(arg0: number, arg1: number, arg2: number): void;
        setHighlightVersion(arg0: number): void;
        getHighlightVersion(): number;
        recycle(): void;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        hasTerrain(): boolean;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        setHasTerrain(arg0: boolean): void;
        isHasSomething(): boolean;
        setWasTransfered(arg0: boolean): void;
        setHasSomething(arg0: boolean): void;
        setHighlights(arg0: number[]): void;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        isSlimeChunk(): boolean;
        isChunkGrid(): boolean;
        isWasTransfered(): boolean;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get z(): number;
        get x(): number;
        get chunkGrid(): boolean;
    }
}
