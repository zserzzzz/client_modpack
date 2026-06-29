
declare module "@package/xaero/lib/common/player/config" {
    export class $ServerPlayerConfigChannelData {
        isUsingConfigProfilePermission(): boolean;
        getEnforcedConfigProfilePermission(): string;
        hasServerProfileEditPermission(): boolean;
        setCachedHasServerProfileEditPermission(arg0: boolean): void;
        setCachedEnforcedConfigProfilePermission(arg0: string): void;
        setCachedUsingConfigProfilePermission(arg0: boolean): void;
        constructor();
        get usingConfigProfilePermission(): boolean;
        get enforcedConfigProfilePermission(): string;
        set cachedHasServerProfileEditPermission(value: boolean);
        set cachedEnforcedConfigProfilePermission(value: string);
        set cachedUsingConfigProfilePermission(value: boolean);
    }
}
