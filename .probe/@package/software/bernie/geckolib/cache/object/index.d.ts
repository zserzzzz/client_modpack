import { $IAcceleratedRenderer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $ModelProperties, $ModelProperties_, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Vector3d, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        properties(): $ModelProperties;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        topLevelBones(): $List<$GeoBone>;
        getBone(arg0: string): ($GeoBone) | undefined;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_,  } | [topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_, ];
    export class $GeoBone implements $IAcceleratedRenderer<any> {
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getMirror(): boolean;
        setPivotY(arg0: number): void;
        setScaleX(arg0: number): void;
        getReset(): boolean;
        setPivotZ(arg0: number): void;
        setRotZ(arg0: number): void;
        setScaleY(arg0: number): void;
        getPosZ(): number;
        getScaleZ(): number;
        getRotZ(): number;
        setScaleZ(arg0: number): void;
        setPosZ(arg0: number): void;
        setPivotX(arg0: number): void;
        getWorldPosition(): $Vector3d;
        setHidden(arg0: boolean): void;
        getRotationVector(): $Vector3d;
        render(arg0: $VertexConsumer, arg1: void, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        getInflate(): number;
        markScaleAsChanged(): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        setChildrenHidden(arg0: boolean): void;
        hasScaleChanged(): boolean;
        hasRotationChanged(): boolean;
        hasPositionChanged(): boolean;
        resetStateChanges(): void;
        shouldNeverRender(): boolean;
        getLocalPosition(): $Vector3d;
        getModelPosition(): $Vector3d;
        setModelPosition(arg0: $Vector3d): void;
        getScaleVector(): $Vector3d;
        getPositionVector(): $Vector3d;
        setRotY(arg0: number): void;
        setRotX(arg0: number): void;
        getRotY(): number;
        getRotX(): number;
        setPosY(arg0: number): void;
        setPosX(arg0: number): void;
        saveSnapshot(): $BoneSnapshot;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        getPosY(): number;
        getPosX(): number;
        getChildBones(): $List<$GeoBone>;
        isHidingChildren(): boolean;
        getCubes(): $List<$GeoCube>;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        isTrackingMatrices(): boolean;
        getScaleX(): number;
        getScaleY(): number;
        getPivotZ(): number;
        getPivotY(): number;
        getPivotX(): number;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        saveInitialSnapshot(): void;
        getLocalSpaceMatrix(): $Matrix4f;
        getWorldSpaceMatrix(): $Matrix4f;
        markPositionAsChanged(): void;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        markRotationAsChanged(): void;
        setTrackingMatrices(arg0: boolean): void;
        getModelSpaceMatrix(): $Matrix4f;
        getWorldSpaceNormal(): $Matrix3f;
        getModelRotationMatrix(): $Matrix4f;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        getInitialSnapshot(): $BoneSnapshot;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get name(): string;
        get parent(): $GeoBone;
        get mirror(): boolean;
        get reset(): boolean;
        get worldPosition(): $Vector3d;
        get rotationVector(): $Vector3d;
        get inflate(): number;
        set childrenHidden(value: boolean);
        get localPosition(): $Vector3d;
        get scaleVector(): $Vector3d;
        get positionVector(): $Vector3d;
        get childBones(): $List<$GeoBone>;
        get hidingChildren(): boolean;
        get cubes(): $List<$GeoCube>;
        get modelRotationMatrix(): $Matrix4f;
        get initialSnapshot(): $BoneSnapshot;
    }
    export class $GeoQuad extends $Record {
        vertices(): $GeoVertex[];
        direction(): $Direction;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        normal(): $Vector3f;
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $GeoQuad}.
     */
    export type $GeoQuad_ = { vertices?: $GeoVertex_[], direction?: $Direction_, normal?: $Vector3f,  } | [vertices?: $GeoVertex_[], direction?: $Direction_, normal?: $Vector3f, ];
    export class $GeoCube extends $Record {
        mirror(): boolean;
        quads(): $GeoQuad[];
        size(): $Vec3;
        inflate(): number;
        pivot(): $Vec3;
        rotation(): $Vec3;
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { rotation?: $Vec3_, size?: $Vec3_, inflate?: number, mirror?: boolean, pivot?: $Vec3_, quads?: $GeoQuad_[],  } | [rotation?: $Vec3_, size?: $Vec3_, inflate?: number, mirror?: boolean, pivot?: $Vec3_, quads?: $GeoQuad_[], ];
    export class $GeoVertex extends $Record {
        position(): $Vector3f;
        texV(): number;
        texU(): number;
        withUVs(arg0: number, arg1: number): $GeoVertex;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
    /**
     * Values that may be interpreted as {@link $GeoVertex}.
     */
    export type $GeoVertex_ = { texU?: number, position?: $Vector3f, texV?: number,  } | [texU?: number, position?: $Vector3f, texV?: number, ];
}
