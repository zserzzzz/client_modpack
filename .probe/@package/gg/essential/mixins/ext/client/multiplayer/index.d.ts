
declare module "@package/gg/essential/mixins/ext/client/multiplayer" {
    export class $ServerDataExt {
    }
    export interface $ServerDataExt {
        getEssential$pingOverride(): number;
        setEssential$pingOverride(arg0: number): void;
        getEssential$pingRegion(): string;
        setEssential$isTrusted(arg0: boolean): void;
        getEssential$isTrusted(): boolean;
        setEssential$pingRegion(arg0: string): void;
        getEssential$skipModCompatCheck(): boolean;
        setEssential$skipModCompatCheck(arg0: boolean): void;
        getEssential$recommendedVersion(): string;
        getEssential$shareWithFriends(): boolean;
        setEssential$showDownloadIcon(arg0: boolean): void;
        setEssential$shareWithFriends(arg0: boolean): void;
        setEssential$recommendedVersion(arg0: string): void;
        getEssential$showDownloadIcon(): boolean;
    }
}
