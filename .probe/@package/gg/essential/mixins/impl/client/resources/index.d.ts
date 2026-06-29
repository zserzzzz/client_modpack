import { $SkinProviderFileCacheAccessor } from "@package/gg/essential/mixins/transformers/client/resources";

declare module "@package/gg/essential/mixins/impl/client/resources" {
    export class $PlayerSkinProviderAccessor {
    }
    export interface $PlayerSkinProviderAccessor {
        getCapeCache(): $SkinProviderFileCacheAccessor;
        getElytraCache(): $SkinProviderFileCacheAccessor;
        getSkinCache(): $SkinProviderFileCacheAccessor;
        get capeCache(): $SkinProviderFileCacheAccessor;
        get elytraCache(): $SkinProviderFileCacheAccessor;
        get skinCache(): $SkinProviderFileCacheAccessor;
    }
}
