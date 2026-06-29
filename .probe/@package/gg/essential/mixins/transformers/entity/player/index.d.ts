import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";

declare module "@package/gg/essential/mixins/transformers/entity/player" {
    export class $EntityPlayerAccessor {
        static getPlayerModelFlag(): $EntityDataAccessor<number>;
        static get playerModelFlag(): $EntityDataAccessor<number>;
    }
    export interface $EntityPlayerAccessor {
    }
}
