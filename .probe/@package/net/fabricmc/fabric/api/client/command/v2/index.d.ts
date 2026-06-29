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
        sendFeedback(arg0: $Component_): void;
        getPosition(): $Vec3;
        sendError(arg0: $Component_): void;
        getEntity(): $Entity;
        getRotation(): $Vec2;
        getWorld(): $ClientLevel;
        getClient(): $Minecraft;
        getMeta(arg0: string): $Object;
        getPlayer(): $LocalPlayer;
        get position(): $Vec3;
        get entity(): $Entity;
        get rotation(): $Vec2;
        get world(): $ClientLevel;
        get client(): $Minecraft;
        get player(): $LocalPlayer;
    }
}
