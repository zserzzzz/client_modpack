import { $BakedOpacity } from "@package/ca/fxco/moreculling/api/model";
export * as cullshape from "@package/ca/fxco/moreculling/mixin/models/cullshape";

declare module "@package/ca/fxco/moreculling/mixin/models" {
    export class $BakedModel_extendsMixin {
    }
    export interface $BakedModel_extendsMixin extends $BakedOpacity {
    }
}
