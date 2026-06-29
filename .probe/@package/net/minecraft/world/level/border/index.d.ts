import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $WorldBorderExtension } from "@package/dev/ryanhcode/sable/mixinterface/world_border";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/border" {
    export class $BorderChangeListener$DelegateBorderChangeListener implements $BorderChangeListener {
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, newAmount: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, newAmount: number): void;
        onBorderSetWarningTime(border: $WorldBorder, newDistance: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, newDistance: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, newAmount: number): void;
        constructor(worldBorder: $WorldBorder);
    }
    export class $WorldBorder$MovingBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $BorderStatus extends $Enum<$BorderStatus> {
        static values(): $BorderStatus[];
        static valueOf(arg0: string): $BorderStatus;
        /**
         * Retrieves the color that the border should be, while in this state.
         */
        getColor(): number;
        color: number;
        static GROWING: $BorderStatus;
        static SHRINKING: $BorderStatus;
        static STATIONARY: $BorderStatus;
    }
    /**
     * Values that may be interpreted as {@link $BorderStatus}.
     */
    export type $BorderStatus_ = "growing" | "shrinking" | "stationary";
    export class $BorderChangeListener {
    }
    export interface $BorderChangeListener {
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetWarningTime(border: $WorldBorder, warningBlocks: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, damagePerBlock: number): void;
    }
    export class $WorldBorder$StaticBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $WorldBorder$Settings {
        write(nbt: $CompoundTag_): void;
        static read(dynamic: $DynamicLike<never>, defaultValue: $WorldBorder$Settings): $WorldBorder$Settings;
        getSize(): number;
        getDamagePerBlock(): number;
        getCenterZ(): number;
        getCenterX(): number;
        getSafeZone(): number;
        getWarningBlocks(): number;
        getSizeLerpTime(): number;
        getSizeLerpTarget(): number;
        getWarningTime(): number;
        constructor(centerX: number, arg1: number, centerZ: number, arg3: number, damagePerBlock: number, arg5: number, safeZone: number, arg7: number, warningBlocks: number);
        constructor(border: $WorldBorder);
        get size(): number;
        get damagePerBlock(): number;
        get centerZ(): number;
        get centerX(): number;
        get safeZone(): number;
        get warningBlocks(): number;
        get sizeLerpTime(): number;
        get sizeLerpTarget(): number;
        get warningTime(): number;
    }
    export class $WorldBorder$BorderExtent {
    }
    export interface $WorldBorder$BorderExtent {
        update(): $WorldBorder$BorderExtent;
        getSize(): number;
        getStatus(): $BorderStatus;
        onCenterChange(): void;
        getLerpTarget(): number;
        getLerpSpeed(): number;
        getCollisionShape(): $VoxelShape;
        getMaxX(): number;
        getMinX(): number;
        getMinZ(): number;
        getMaxZ(): number;
        onAbsoluteMaxSizeChange(): void;
        getLerpRemainingTime(): number;
        get size(): number;
        get status(): $BorderStatus;
        get lerpTarget(): number;
        get lerpSpeed(): number;
        get collisionShape(): $VoxelShape;
        get maxX(): number;
        get minX(): number;
        get minZ(): number;
        get maxZ(): number;
        get lerpRemainingTime(): number;
    }
    export class $WorldBorder implements $WorldBorderExtension {
        getSize(): number;
        tick(): void;
        setSize(damagePerBlock: number): void;
        addListener(listener: $BorderChangeListener): void;
        handler$gge000$sable$isInsideCloseToBorder(arg0: $Entity, arg1: $AABB_, arg2: $CallbackInfoReturnable<any>): void;
        handler$gge000$sable$isWithinBounds(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        getStatus(): $BorderStatus;
        removeListener(listener: $BorderChangeListener): void;
        getListeners(): $List<$BorderChangeListener>;
        getDamageSafeZone(): number;
        getDamagePerBlock(): number;
        sable$setLevel(arg0: $Level_): void;
        setAbsoluteMaxSize(size: number): void;
        isWithinBounds(pos: $BlockPos_): boolean;
        isWithinBounds(x: number, arg1: number): boolean;
        isWithinBounds(x: number, arg1: number, z: number): boolean;
        isWithinBounds(box: $AABB_): boolean;
        isWithinBounds(chunkPos: $ChunkPos): boolean;
        isWithinBounds(pos: $Vec3_): boolean;
        getDistanceToBorder(x: number, arg1: number): number;
        getDistanceToBorder(entity: $Entity): number;
        getCenterZ(): number;
        getCenterX(): number;
        clampToBounds(x: number, arg1: number, y: number): $BlockPos;
        clampToBounds(pos: $Vec3_): $BlockPos;
        clampToBounds(pos: $BlockPos_): $BlockPos;
        isInsideCloseToBorder(entity: $Entity, bounds: $AABB_): boolean;
        setDamageSafeZone(damagePerBlock: number): void;
        setDamagePerBlock(damagePerBlock: number): void;
        setWarningTime(size: number): void;
        getLerpTarget(): number;
        lerpSizeBetween(oldSize: number, arg1: number, newSize: number): void;
        getAbsoluteMaxSize(): number;
        createSettings(): $WorldBorder$Settings;
        applySettings(serializer: $WorldBorder$Settings): void;
        getWarningBlocks(): number;
        getLerpSpeed(): number;
        setWarningBlocks(size: number): void;
        getWarningTime(): number;
        getCollisionShape(): $VoxelShape;
        getMaxX(): number;
        setCenter(x: number, arg1: number): void;
        getMinX(): number;
        getMinZ(): number;
        getMaxZ(): number;
        getLerpRemainingTime(): number;
        wrapOperation$ckb000$lithium$getUpdatedArea(arg0: $WorldBorder$BorderExtent, arg1: $Operation_<any>): $WorldBorder$BorderExtent;
        absoluteMaxSize: number;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
        get status(): $BorderStatus;
        get listeners(): $List<$BorderChangeListener>;
        get centerZ(): number;
        get centerX(): number;
        get lerpTarget(): number;
        get lerpSpeed(): number;
        get collisionShape(): $VoxelShape;
        get maxX(): number;
        get minX(): number;
        get minZ(): number;
        get maxZ(): number;
        get lerpRemainingTime(): number;
    }
}
