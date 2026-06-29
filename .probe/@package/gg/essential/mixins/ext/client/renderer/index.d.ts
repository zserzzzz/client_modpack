import { $UImage } from "@package/gg/essential/universal";

declare module "@package/gg/essential/mixins/ext/client/renderer" {
    export class $PlayerSkinTextureExt {
    }
    export interface $PlayerSkinTextureExt {
        essential$getImage(): $UImage;
        essential$setImage(arg0: $UImage): void;
    }
}
