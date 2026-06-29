
declare module "@package/gg/essential/mixins/ext/client/multiplayer" {
    export class $ServerDataExt {
    }
    export interface $ServerDataExt {
        setEssential$pingRegion(arg0: string): void;
        setEssential$isTrusted(arg0: boolean): void;
        getEssential$pingRegion(): string;
        setEssential$pingOverride(arg0: number): void;
        getEssential$isTrusted(): boolean;
        getEssential$pingOverride(): number;
        getEssential$skipModCompatCheck(): boolean;
        getEssential$shareWithFriends(): boolean;
        getEssential$recommendedVersion(): string;
        setEssential$recommendedVersion(arg0: string): void;
        setEssential$skipModCompatCheck(arg0: boolean): void;
        setEssential$shareWithFriends(arg0: boolean): void;
        getEssential$showDownloadIcon(): boolean;
        setEssential$showDownloadIcon(arg0: boolean): void;
    }
}
