import { $InputStream } from "@package/java/io";
import { $ProgramExtension } from "@package/dev/ryanhcode/sable/mixinterface/sublevel_render/fancy";
import { $GlslPreprocessor } from "@package/com/mojang/blaze3d/preprocessor";
import { $DynamicBufferProgramAccessor } from "@package/foundry/veil/mixin/dynamicbuffer/accessor";
import { $Map } from "@package/java/util";
import { $AutoCloseable, $CharSequence, $Enum } from "@package/java/lang";
import { $FloatBuffer, $IntBuffer } from "@package/java/nio";
import { $ProgramTypeAccessor } from "@package/net/irisshaders/iris/mixin";
import { $Matrix4f, $Vector4f, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/com/mojang/blaze3d/shaders" {
    export class $EffectProgram extends $Program {
        static compileShader(type: $Program$Type_, name: string, shaderData: $InputStream, sourceName: string): $EffectProgram;
        attachToEffect(effect: $Effect): void;
    }
    export class $Uniform extends $AbstractUniform implements $AutoCloseable {
        static glGetUniformLocation(program: number, name: $CharSequence): number;
        static glBindAttribLocation(program: number, index: number, name: $CharSequence): void;
        static glGetAttribLocation(program: number, name: $CharSequence): number;
        getFloatBuffer(): $FloatBuffer;
        getIntBuffer(): $IntBuffer;
        static getTypeFromString(typeName: string): number;
        getName(): string;
        getLocation(): number;
        set(index: number, value: number): void;
        getCount(): number;
        close(): void;
        getType(): number;
        static uploadInteger(x: number, y: number): void;
        setLocation(x: number): void;
        upload(): void;
        static UT_INT4: number;
        static UT_INT3: number;
        static UT_MAT4: number;
        static UT_FLOAT2: number;
        static UT_MAT3: number;
        static UT_FLOAT3: number;
        static UT_MAT2: number;
        static UT_INT2: number;
        static UT_INT1: number;
        static UT_FLOAT1: number;
        static UT_FLOAT4: number;
        constructor(name: string, type: number, count: number, parent: $Shader);
        get floatBuffer(): $FloatBuffer;
        get intBuffer(): $IntBuffer;
        get name(): string;
        get count(): number;
        get type(): number;
    }
    export class $FogShape extends $Enum<$FogShape> {
        static values(): $FogShape[];
        static valueOf(arg0: string): $FogShape;
        getIndex(): number;
        static CYLINDER: $FogShape;
        static SPHERE: $FogShape;
        get index(): number;
    }
    /**
     * Values that may be interpreted as {@link $FogShape}.
     */
    export type $FogShape_ = "sphere" | "cylinder";
    export class $ProgramManager {
        static glUseProgram(program: number): void;
        static releaseProgram(shader: $Shader): void;
        static createProgram(): number;
        static linkShader(shader: $Shader): void;
        constructor();
    }
    export class $AbstractUniform {
        set(valueArray: number[]): void;
        set(x: number, y: number, z: number, w: number): void;
        set(x: number, y: number, z: number): void;
        set(x: number, y: number): void;
        set(matrix: $Matrix3f): void;
        set(matrix: $Matrix4f): void;
        set(vector: $Vector4f): void;
        set(vector: $Vector3f): void;
        set(x: number, y: number, z: number, w: number): void;
        set(x: number, y: number, z: number): void;
        set(x: number): void;
        set(x: number, y: number): void;
        set(x: number): void;
        setSafe(x: number, y: number, z: number, w: number): void;
        setSafe(x: number, y: number, z: number, w: number): void;
        setMat2x2(x: number, y: number, z: number, w: number): void;
        setMat3x2(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number): void;
        setMat2x4(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number): void;
        setMat2x3(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number): void;
        setMat3x3(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): void;
        setMat3x4(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number): void;
        setMat4x2(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number): void;
        setMat4x4(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): void;
        setMat4x3(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number): void;
        constructor();
    }
    export class $Effect {
    }
    export interface $Effect extends $Shader {
    }
    export class $Program$Type extends $Enum<$Program$Type> implements $ProgramTypeAccessor {
        getName(): string;
        static values(): $Program$Type[];
        static valueOf(arg0: string): $Program$Type;
        getExtension(): string;
        getPrograms(): $Map<string, $Program>;
        static createProgramType$iris_$md$942995$0(arg0: string, arg1: number, arg2: string, arg3: string, arg4: number): $Program$Type;
        static VERTEX: $Program$Type;
        static FRAGMENT: $Program$Type;
        get extension(): string;
        get programs(): $Map<string, $Program>;
    }
    /**
     * Values that may be interpreted as {@link $Program$Type}.
     */
    export type $Program$Type_ = "vertex" | "fragment" | "geometry" | "tess_control" | "tess_eval";
    export class $Program implements $DynamicBufferProgramAccessor, $ProgramExtension {
        attachToShader(shader: $Shader): void;
        getName(): string;
        close(): void;
        static compileShader(type: $Program$Type_, name: string, shaderData: $InputStream, sourceName: string, preprocessor: $GlslPreprocessor): $Program;
        sable$getSource(): string;
        getId(): number;
        setId(arg0: number): void;
        constructor(type: $Program$Type_, id: number, name: string);
        get name(): string;
    }
    export class $Shader {
    }
    export interface $Shader {
        attachToProgram(): void;
        getId(): number;
        getVertexProgram(): $Program;
        getFragmentProgram(): $Program;
        markDirty(): void;
        get id(): number;
        get vertexProgram(): $Program;
        get fragmentProgram(): $Program;
    }
    export class $BlendMode {
        apply(): void;
        isOpaque(): boolean;
        static stringToBlendFactor(factorName: string): number;
        static stringToBlendFunc(factorName: string): number;
        constructor(srcColorFactor: number, dstColorFactor: number, srcAlphaFactor: number, dstAlphaFactor: number, blendFunc: number);
        constructor(srcFactor: number, dstFactor: number, blendFunc: number);
        constructor();
        get opaque(): boolean;
    }
}
