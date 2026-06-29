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
        getCameraHolderEntity(): $Entity;
        getCamera(): $ItemStack;
        getPositionsInFrame(): $List<$BlockPos>;
        getFrame(): $Frame;
        getEntitiesInFrame(): $List<$LivingEntity>;
        getCameraHolder(): $CameraHolder;
        constructor(cameraHolder: $CameraHolder, camera: $ItemStack_, frame: $Frame_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>);
        get cameraHolderEntity(): $Entity;
        get camera(): $ItemStack;
        get positionsInFrame(): $List<$BlockPos>;
        get frame(): $Frame;
        get entitiesInFrame(): $List<$LivingEntity>;
        get cameraHolder(): $CameraHolder;
    }
    export class $ModifyFrameExtraDataEvent extends $Event {
        getData(): $ExtraData;
        getCameraHolderEntity(): $Entity;
        getCaptureProperties(): $CaptureParameters;
        getCamera(): $ItemStack;
        getPositionsInFrame(): $List<$BlockPos>;
        getEntitiesInFrame(): $List<$LivingEntity>;
        getCameraHolder(): $CameraHolder;
        constructor(cameraHolder: $CameraHolder, stack: $ItemStack_, captureParameters: $CaptureParameters_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>, data: $ExtraData);
        get data(): $ExtraData;
        get cameraHolderEntity(): $Entity;
        get captureProperties(): $CaptureParameters;
        get camera(): $ItemStack;
        get positionsInFrame(): $List<$BlockPos>;
        get entitiesInFrame(): $List<$LivingEntity>;
        get cameraHolder(): $CameraHolder;
    }
    export class $ModifyEntityInFrameDataEvent extends $Event {
        getData(): $ExtraData;
        getCameraHolderEntity(): $Entity;
        getCamera(): $ItemStack;
        getEntityInFrame(): $LivingEntity;
        getCameraHolder(): $CameraHolder;
        constructor(cameraHolder: $CameraHolder, camera: $ItemStack_, entityInFrame: $LivingEntity, data: $ExtraData);
        get data(): $ExtraData;
        get cameraHolderEntity(): $Entity;
        get camera(): $ItemStack;
        get entityInFrame(): $LivingEntity;
        get cameraHolder(): $CameraHolder;
    }
}
