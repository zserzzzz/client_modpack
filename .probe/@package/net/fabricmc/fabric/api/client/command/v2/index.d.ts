import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Object } from "@package/java/lang";
import { $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";

declare module "@package/net/fabricmc/fabric/api/client/command/v2" {
    export class $FabricClientCommandSource {
    }
    export interface $FabricClientCommandSource extends $SharedSuggestionProvider {
        getPosition(): $Vec3;
        getEntity(): $Entity;
        getPlayer(): $LocalPlayer;
        getRotation(): $Vec2;
        getClient(): $Minecraft;
        getWorld(): $ClientLevel;
        getMeta(arg0: string): $Object;
        sendError(arg0: $Component_): void;
        sendFeedback(arg0: $Component_): void;
        get position(): $Vec3;
        get entity(): $Entity;
        get player(): $LocalPlayer;
        get rotation(): $Vec2;
        get client(): $Minecraft;
        get world(): $ClientLevel;
    }
}
