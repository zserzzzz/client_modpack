import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Event } from "@package/net/neoforged/bus/api";
import { $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/com/github/argon4w/acceleratedrendering/core/programs/overrides" {
    export class $IShaderProgramOverrides {
    }
    export interface $IShaderProgramOverrides {
        getOverride(arg0: $RenderType): $ProgramOverride;
        getOverride(arg0: number): $ProgramOverride;
        getCount(): number;
        get count(): number;
    }
    export class $ProgramOverride extends $Record {
        transform(): $ITransformOverride;
        uploading(): $IUploadingOverride;
        uploadMeshInfo(arg0: number, arg1: number): void;
        uploadVarying(arg0: number, arg1: number): void;
        getVaryingSize(): number;
        getMeshInfoSize(): number;
        overrideId(): number;
        constructor(overrideId: number, transform: $ITransformOverride, uploading: $IUploadingOverride);
        get varyingSize(): number;
        get meshInfoSize(): number;
    }
    /**
     * Values that may be interpreted as {@link $ProgramOverride}.
     */
    export type $ProgramOverride_ = { uploading?: $IUploadingOverride, overrideId?: number, transform?: $ITransformOverride,  } | [uploading?: $IUploadingOverride, overrideId?: number, transform?: $ITransformOverride, ];
    export class $IUploadingOverride {
    }
    export interface $IUploadingOverride extends $IProgramOverride {
        uploadMeshInfo(arg0: number, arg1: number): void;
        dispatchUploading(arg0: number, arg1: number, arg2: number): number;
        getMeshInfoSize(): number;
        get meshInfoSize(): number;
    }
    export class $ITransformOverride {
    }
    export interface $ITransformOverride extends $IProgramOverride {
        uploadVarying(arg0: number, arg1: number): void;
        getVaryingSize(): number;
        dispatchTransform(arg0: number, arg1: number, arg2: number): number;
        get varyingSize(): number;
    }
    export class $IProgramOverride {
    }
    export interface $IProgramOverride {
        useProgram(): void;
        setupProgram(): void;
    }
    export class $LoadShaderProgramOverridesEvent extends $Event implements $IModBusEvent {
        getOverrides(arg0: $ITransformOverride, arg1: $IUploadingOverride): $IShaderProgramOverrides;
        loadFor(arg0: $VertexFormat, arg1: $RenderType, arg2: $ITransformOverride, arg3: $IUploadingOverride): void;
        constructor(arg0: $VertexFormat);
    }
}
