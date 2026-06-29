import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $MinimapWorldContainer, $MinimapWorldRootContainer } from "@package/xaero/hud/minimap/world/container";
import { $Path_, $Path } from "@package/java/nio/file";
import { $HudMod } from "@package/xaero/common";
import { $RootConfigIO } from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/io" {
    export class $MinimapWorldManagerIO {
        loadWorldsFromAllSources(arg0: $MinimapSession, arg1: $ClientPacketListener): void;
        saveWorld(arg0: $MinimapWorld): void;
        saveWorld(arg0: $MinimapWorld, arg1: boolean): void;
        saveWorlds(arg0: $MinimapWorldContainer): void;
        getWorldFile(arg0: $MinimapWorld): $Path;
        saveAllWorlds(arg0: $MinimapSession): void;
        getRootConfigIO(): $RootConfigIO;
        convertWorldDimFoldersToSingleFolder(arg0: $MinimapSession): void;
        onRootContainerAdded(arg0: $MinimapWorldRootContainer): void;
        convertWorldDimFilesToFolders(): void;
        loadAllWorlds(arg0: $MinimapSession): void;
        checkWorldFileLine(arg0: string[], arg1: $MinimapWorld): boolean;
        static copyTempFilesBack(arg0: $Path_): void;
        loadWorldFile(arg0: $MinimapWorldContainer, arg1: string, arg2: $Path_): boolean;
        loadWorld(arg0: $MinimapWorld, arg1: $Path_): void;
        constructor(arg0: $HudMod);
        get rootConfigIO(): $RootConfigIO;
    }
}
