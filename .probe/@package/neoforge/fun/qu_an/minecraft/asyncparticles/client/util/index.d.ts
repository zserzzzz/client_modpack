
declare module "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/util" {
    export class $HeightMap {
        static asLong(x: number, z: number): number;
        getState(): $HeightMap$State;
        static getZ(xz: number): number;
        static getX(xz: number): number;
        setCenter(x: number, z: number): void;
        setHeight(x: number, z: number, height: number): boolean;
        setHeight(xz: number, height: number): boolean;
        defaultHeight(): number;
        static isOutOfRange(x: number, z: number, state: $HeightMap$State): boolean;
        getPendingHeight(x: number, z: number): number;
        getPendingHeight(xz: number): number;
        beginUpdate(centerX: number, centerZ: number, range: number): void;
        commitUpdate(): void;
        static DEFAULT_HEIGHT: number;
        constructor();
        constructor(defaultHeight: number);
        get state(): $HeightMap$State;
    }
    export class $HeightMap$State {
        range(): number;
        centerZ(): number;
        getHeight(x: number, z: number): number;
        centerX(): number;
        constructor(state: $HeightMap$State);
    }
}
