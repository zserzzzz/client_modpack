import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Iterable } from "@package/java/lang";
import { $IConfigProfileInfo, $ConfigProfile } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/client/gui/config/context" {
    export class $IEditConfigScreenContext {
    }
    export interface $IEditConfigScreenContext {
        reset(arg0: $ConfigChannel): void;
        createProfile(arg0: string, arg1: string, arg2: $ConfigChannel, arg3: string): void;
        getCurrentProfile(arg0: $ConfigChannel): $ConfigProfile;
        isClientSide(): boolean;
        hasPermission(arg0: $ConfigChannel): boolean;
        getDropdownNarration(): $Component;
        getSelectedProfileId(arg0: $ConfigChannel): string;
        setDefaultProfileId(arg0: string, arg1: $ConfigChannel): void;
        getScreenTitleFormat(): string;
        getDefaultProfileId(arg0: $ConfigChannel): string;
        isAutoDefaultProfile(): boolean;
        setCurrentProfile(arg0: string, arg1: $ConfigChannel): void;
        isAutoConfirm(): boolean;
        getSyncStatus(arg0: $ConfigChannel): boolean;
        getSyncMessage(): $Component;
        confirmProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        getEnforcedConfig(arg0: $ConfigChannel): $Config;
        getProfiles(arg0: $ConfigChannel): $Iterable<$IConfigProfileInfo>;
        deleteProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        profileExists(arg0: string, arg1: $ConfigChannel): boolean;
        get clientSide(): boolean;
        get dropdownNarration(): $Component;
        get screenTitleFormat(): string;
        get autoDefaultProfile(): boolean;
        get autoConfirm(): boolean;
        get syncMessage(): $Component;
    }
}
