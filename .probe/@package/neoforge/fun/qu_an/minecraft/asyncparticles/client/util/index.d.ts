
declare module "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/util" {
    export class $HeightMap {
        defaultHeight(): number;
        static getZ(xz: number): number;
        static getX(xz: number): number;
        static asLong(x: number, z: number): number;
        getState(): $HeightMap$State;
        setHeight(xz: number, height: number): boolean;
        setHeight(x: number, z: number, height: number): boolean;
        setCenter(x: number, z: number): void;
        beginUpdate(centerX: number, centerZ: number, range: number): void;
        static isOutOfRange(x: number, z: number, state: $HeightMap$State): boolean;
        commitUpdate(): void;
        getPendingHeight(xz: number): number;
        getPendingHeight(x: number, z: number): number;
        static DEFAULT_HEIGHT: number;
        constructor();
        constructor(defaultHeight: number);
        get state(): $HeightMap$State;
    }
    export class $HeightMap$State {
        getHeight(x: number, z: number): number;
        centerX(): number;
        range(): number;
        centerZ(): number;
        constructor(state: $HeightMap$State);
    }
}
