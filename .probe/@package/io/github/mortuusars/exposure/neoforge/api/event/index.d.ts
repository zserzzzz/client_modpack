import { $ExtraData } from "@package/io/github/mortuusars/exposure/util";
import { $CaptureParameters, $CaptureParameters_ } from "@package/io/github/mortuusars/exposure/world/camera/capture";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Frame_, $Frame } from "@package/io/github/mortuusars/exposure/world/camera/frame";
import { $CameraHolder } from "@package/io/github/mortuusars/exposure/world/entity";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";

declare module "@package/io/github/mortuusars/exposure/neoforge/api/event" {
    export class $FrameAddedEvent extends $Event {
        getFrame(): $Frame;
        getCamera(): $ItemStack;
        getEntitiesInFrame(): $List<$LivingEntity>;
        getPositionsInFrame(): $List<$BlockPos>;
        getCameraHolderEntity(): $Entity;
        getCameraHolder(): $CameraHolder;
        constructor(cameraHolder: $CameraHolder, camera: $ItemStack_, frame: $Frame_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>);
        get frame(): $Frame;
        get camera(): $ItemStack;
        get entitiesInFrame(): $List<$LivingEntity>;
        get positionsInFrame(): $List<$BlockPos>;
        get cameraHolderEntity(): $Entity;
        get cameraHolder(): $CameraHolder;
    }
    export class $ModifyFrameExtraDataEvent extends $Event {
        getData(): $ExtraData;
        getCamera(): $ItemStack;
        getEntitiesInFrame(): $List<$LivingEntity>;
        getCaptureProperties(): $CaptureParameters;
        getPositionsInFrame(): $List<$BlockPos>;
        getCameraHolderEntity(): $Entity;
        getCameraHolder(): $CameraHolder;
        constructor(cameraHolder: $CameraHolder, stack: $ItemStack_, captureParameters: $CaptureParameters_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>, data: $ExtraData);
        get data(): $ExtraData;
        get camera(): $ItemStack;
        get entitiesInFrame(): $List<$LivingEntity>;
        get captureProperties(): $CaptureParameters;
        get positionsInFrame(): $List<$BlockPos>;
        get cameraHolderEntity(): $Entity;
        get cameraHolder(): $CameraHolder;
    }
    export class $ModifyEntityInFrameDataEvent extends $Event {
        getData(): $ExtraData;
        getCamera(): $ItemStack;
        getCameraHolderEntity(): $Entity;
        getEntityInFrame(): $LivingEntity;
        getCameraHolder(): $CameraHolder;
        constructor(cameraHolder: $CameraHolder, camera: $ItemStack_, entityInFrame: $LivingEntity, data: $ExtraData);
        get data(): $ExtraData;
        get camera(): $ItemStack;
        get cameraHolderEntity(): $Entity;
        get entityInFrame(): $LivingEntity;
        get cameraHolder(): $CameraHolder;
    }
}
