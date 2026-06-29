import { $IngameEquippedOutfitsUpdateEncoder, $IngameEquippedOutfitsManager } from "@package/gg/essential/cosmetics";
import { $Map, $UUID } from "@package/java/util";

declare module "@package/gg/essential/mixins/ext/client/network" {
    export class $NetHandlerPlayClientExt {
    }
    export interface $NetHandlerPlayClientExt {
        getEssential$ingameEquippedOutfitsManager(): $IngameEquippedOutfitsManager;
        essential$getNameIdCache(): $Map<string, $UUID>;
        getEssential$maxPlayers(): number;
        getEssential$ingameEquippedOutfitsUpdateEncoder(): $IngameEquippedOutfitsUpdateEncoder;
        get essential$ingameEquippedOutfitsManager(): $IngameEquippedOutfitsManager;
        get essential$maxPlayers(): number;
        get essential$ingameEquippedOutfitsUpdateEncoder(): $IngameEquippedOutfitsUpdateEncoder;
    }
}
