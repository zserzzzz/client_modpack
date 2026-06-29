import { $Consumer } from "@package/java/util/function";

declare module "@package/gg/essential/network/connectionmanager/serverdiscovery" {
    export class $NewServerDiscoveryManager$ImpressionTracker {
        submit(): void;
        getFeaturedConsumer(): $NewServerDiscoveryManager$ImpressionConsumer;
        getRecommendedConsumer(): $NewServerDiscoveryManager$ImpressionConsumer;
        constructor();
        get featuredConsumer(): $NewServerDiscoveryManager$ImpressionConsumer;
        get recommendedConsumer(): $NewServerDiscoveryManager$ImpressionConsumer;
    }
    export class $NewServerDiscoveryManager$ImpressionConsumer {
    }
    export interface $NewServerDiscoveryManager$ImpressionConsumer extends $Consumer<string> {
    }
    /**
     * Values that may be interpreted as {@link $NewServerDiscoveryManager$ImpressionConsumer}.
     */
    export type $NewServerDiscoveryManager$ImpressionConsumer_ = (() => void);
}
