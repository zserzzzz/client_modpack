import { $Codec } from "@package/com/mojang/serialization";
import { $UUID_, $List_, $Map_, $Map, $Set, $UUID } from "@package/java/util";

declare module "@package/de/z0rdak/yawp/core/group" {
    export class $PlayerContainer implements $IMemberContainer {
        clearPlayers(): void;
        getTeams(): $Set<string>;
        clearTeams(): void;
        addPlayer(arg0: $UUID_, arg1: string): void;
        getPlayers(): $Map<$UUID, string>;
        hasPlayer(arg0: $UUID_): boolean;
        removePlayer(arg0: $UUID_): void;
        addTeam(arg0: string): void;
        hasTeam(arg0: string): boolean;
        removeTeam(arg0: string): void;
        getGroupName(): string;
        hasTeams(): boolean;
        hasPlayers(): boolean;
        static CODEC: $Codec<$PlayerContainer>;
        constructor(arg0: string);
        constructor(arg0: string, arg1: $List_<string>, arg2: $Map_<$UUID_, string>);
        get teams(): $Set<string>;
        get players(): $Map<$UUID, string>;
        get groupName(): string;
    }
    export class $IMemberContainer {
    }
    export interface $IMemberContainer {
        clearPlayers(): void;
        clearTeams(): void;
        addPlayer(arg0: $UUID_, arg1: string): void;
        hasPlayer(arg0: $UUID_): boolean;
        removePlayer(arg0: $UUID_): void;
        addTeam(arg0: string): void;
        hasTeam(arg0: string): boolean;
        removeTeam(arg0: string): void;
        getGroupName(): string;
        hasTeams(): boolean;
        hasPlayers(): boolean;
        get groupName(): string;
    }
}
