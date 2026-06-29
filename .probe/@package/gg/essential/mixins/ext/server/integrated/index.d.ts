import { $McIntegratedServerManager } from "@package/gg/essential/sps";

declare module "@package/gg/essential/mixins/ext/server/integrated" {
    export class $IntegratedServerExt {
    }
    export interface $IntegratedServerExt {
        getEssential$manager(): $McIntegratedServerManager;
        get essential$manager(): $McIntegratedServerManager;
    }
    /**
     * Values that may be interpreted as {@link $IntegratedServerExt}.
     */
    export type $IntegratedServerExt_ = (() => $McIntegratedServerManager);
}
