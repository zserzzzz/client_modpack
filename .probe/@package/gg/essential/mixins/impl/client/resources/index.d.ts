import { $SkinProviderFileCacheAccessor } from "@package/gg/essential/mixins/transformers/client/resources";

declare module "@package/gg/essential/mixins/impl/client/resources" {
    export class $PlayerSkinProviderAccessor {
    }
    export interface $PlayerSkinProviderAccessor {
        getSkinCache(): $SkinProviderFileCacheAccessor;
        getCapeCache(): $SkinProviderFileCacheAccessor;
        getElytraCache(): $SkinProviderFileCacheAccessor;
        get skinCache(): $SkinProviderFileCacheAccessor;
        get capeCache(): $SkinProviderFileCacheAccessor;
        get elytraCache(): $SkinProviderFileCacheAccessor;
    }
}
