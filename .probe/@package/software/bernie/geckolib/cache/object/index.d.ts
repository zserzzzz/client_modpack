import { $IAcceleratedRenderer } from "@package/com/github/argon4w/acceleratedrendering/core/buffers/accelerated/renderers";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $ModelProperties_, $ModelProperties, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Vector3d, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        properties(): $ModelProperties;
        topLevelBones(): $List<$GeoBone>;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        getBone(arg0: string): ($GeoBone) | undefined;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_,  } | [topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_, ];
    export class $GeoBone implements $IAcceleratedRenderer<any> {
        getInflate(): number;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        render(arg0: $VertexConsumer, arg1: void, arg2: $Matrix4f, arg3: $Matrix3f, arg4: number, arg5: number, arg6: number): void;
        saveSnapshot(): $BoneSnapshot;
        setHidden(arg0: boolean): void;
        getRotationVector(): $Vector3d;
        isTrackingMatrices(): boolean;
        getChildBones(): $List<$GeoBone>;
        isHidingChildren(): boolean;
        getMirror(): boolean;
        getWorldPosition(): $Vector3d;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        getRotY(): number;
        getRotX(): number;
        setRotX(arg0: number): void;
        setRotY(arg0: number): void;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getPosX(): number;
        getPosY(): number;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        getInitialSnapshot(): $BoneSnapshot;
        getScaleY(): number;
        getScaleZ(): number;
        setRotZ(arg0: number): void;
        setScaleZ(arg0: number): void;
        setScaleY(arg0: number): void;
        getRotZ(): number;
        getPivotX(): number;
        getPivotY(): number;
        getPosZ(): number;
        setScaleX(arg0: number): void;
        setPivotY(arg0: number): void;
        setPivotZ(arg0: number): void;
        getPivotZ(): number;
        setPosZ(arg0: number): void;
        getReset(): boolean;
        getScaleX(): number;
        setPivotX(arg0: number): void;
        getWorldSpaceMatrix(): $Matrix4f;
        getLocalSpaceMatrix(): $Matrix4f;
        markRotationAsChanged(): void;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        saveInitialSnapshot(): void;
        getModelSpaceMatrix(): $Matrix4f;
        markPositionAsChanged(): void;
        setTrackingMatrices(arg0: boolean): void;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        getWorldSpaceNormal(): $Matrix3f;
        getModelRotationMatrix(): $Matrix4f;
        getCubes(): $List<$GeoCube>;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        hasRotationChanged(): boolean;
        resetStateChanges(): void;
        shouldNeverRender(): boolean;
        getLocalPosition(): $Vector3d;
        hasScaleChanged(): boolean;
        getModelPosition(): $Vector3d;
        setModelPosition(arg0: $Vector3d): void;
        hasPositionChanged(): boolean;
        markScaleAsChanged(): void;
        setChildrenHidden(arg0: boolean): void;
        getPositionVector(): $Vector3d;
        getScaleVector(): $Vector3d;
        setPosY(arg0: number): void;
        setPosX(arg0: number): void;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get inflate(): number;
        get name(): string;
        get parent(): $GeoBone;
        get rotationVector(): $Vector3d;
        get childBones(): $List<$GeoBone>;
        get hidingChildren(): boolean;
        get mirror(): boolean;
        get worldPosition(): $Vector3d;
        get initialSnapshot(): $BoneSnapshot;
        get reset(): boolean;
        get modelRotationMatrix(): $Matrix4f;
        get cubes(): $List<$GeoCube>;
        get localPosition(): $Vector3d;
        set childrenHidden(value: boolean);
        get positionVector(): $Vector3d;
        get scaleVector(): $Vector3d;
    }
    export class $GeoQuad extends $Record {
        direction(): $Direction;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        normal(): $Vector3f;
        vertices(): $GeoVertex[];
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $GeoQuad}.
     */
    export type $GeoQuad_ = { direction?: $Direction_, normal?: $Vector3f, vertices?: $GeoVertex_[],  } | [direction?: $Direction_, normal?: $Vector3f, vertices?: $GeoVertex_[], ];
    export class $GeoCube extends $Record {
        size(): $Vec3;
        inflate(): number;
        pivot(): $Vec3;
        rotation(): $Vec3;
        quads(): $GeoQuad[];
        mirror(): boolean;
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { pivot?: $Vec3_, quads?: $GeoQuad_[], rotation?: $Vec3_, size?: $Vec3_, inflate?: number, mirror?: boolean,  } | [pivot?: $Vec3_, quads?: $GeoQuad_[], rotation?: $Vec3_, size?: $Vec3_, inflate?: number, mirror?: boolean, ];
    export class $GeoVertex extends $Record {
        position(): $Vector3f;
        texU(): number;
        texV(): number;
        withUVs(arg0: number, arg1: number): $GeoVertex;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
    /**
     * Values that may be interpreted as {@link $GeoVertex}.
     */
    export type $GeoVertex_ = { position?: $Vector3f, texV?: number, texU?: number,  } | [position?: $Vector3f, texV?: number, texU?: number, ];
}
