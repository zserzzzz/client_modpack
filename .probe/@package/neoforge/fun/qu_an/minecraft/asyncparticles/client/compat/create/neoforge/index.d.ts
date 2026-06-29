import { $HeightMap } from "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/util";

declare module "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/compat/create/neoforge" {
    export class $ContraptionHeightMap extends $HeightMap {
        setMoving(xz: number, moving: boolean): void;
        setMoving(x: number, z: number, moving: boolean): void;
        getDefaultMoving(): number;
        getPendingMoving(xz: number): number;
        getPendingMoving(x: number, z: number): number;
        static DEFAULT_HEIGHT: number;
        static DEFAULT_MOVING: number;
        constructor(defaultHeight: number, defaultMoving: number);
        constructor(defaultMoving: number);
        constructor();
        get defaultMoving(): number;
    }
    export class $ContraptionHeightMapProvider {
    }
    export interface $ContraptionHeightMapProvider {
        asyncparticles$getHeightMap(): $ContraptionHeightMap;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionHeightMapProvider}.
     */
    export type $ContraptionHeightMapProvider_ = (() => $ContraptionHeightMap);
}
