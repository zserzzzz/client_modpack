import { $ModelPart } from "@package/net/minecraft/client/model/geom";

declare module "@package/gg/essential/mixins/transformers/client/model" {
    export class $ModelPlayerAccessor {
    }
    export interface $ModelPlayerAccessor {
        getCape(): $ModelPart;
        getEars(): $ModelPart;
        get cape(): $ModelPart;
        get ears(): $ModelPart;
    }
}
