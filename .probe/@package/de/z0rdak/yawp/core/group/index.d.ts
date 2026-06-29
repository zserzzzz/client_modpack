import { $Codec } from "@package/com/mojang/serialization";
import { $UUID_, $List_, $Map_, $Map, $Set, $UUID } from "@package/java/util";

declare module "@package/de/z0rdak/yawp/core/group" {
    export class $PlayerContainer implements $IMemberContainer {
        hasPlayer(arg0: $UUID_): boolean;
        removePlayer(arg0: $UUID_): void;
        addPlayer(arg0: $UUID_, arg1: string): void;
        getPlayers(): $Map<$UUID, string>;
        removeTeam(arg0: string): void;
        addTeam(arg0: string): void;
        hasTeam(arg0: string): boolean;
        getGroupName(): string;
        clearTeams(): void;
        getTeams(): $Set<string>;
        clearPlayers(): void;
        hasTeams(): boolean;
        hasPlayers(): boolean;
        static CODEC: $Codec<$PlayerContainer>;
        constructor(arg0: string);
        constructor(arg0: string, arg1: $List_<string>, arg2: $Map_<$UUID_, string>);
        get players(): $Map<$UUID, string>;
        get groupName(): string;
        get teams(): $Set<string>;
    }
    export class $IMemberContainer {
    }
    export interface $IMemberContainer {
        hasPlayer(arg0: $UUID_): boolean;
        removePlayer(arg0: $UUID_): void;
        addPlayer(arg0: $UUID_, arg1: string): void;
        removeTeam(arg0: string): void;
        addTeam(arg0: string): void;
        hasTeam(arg0: string): boolean;
        getGroupName(): string;
        clearTeams(): void;
        clearPlayers(): void;
        hasTeams(): boolean;
        hasPlayers(): boolean;
        get groupName(): string;
    }
}
