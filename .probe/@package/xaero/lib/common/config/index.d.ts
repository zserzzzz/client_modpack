import { $IConfigChangeListener } from "@package/xaero/lib/common/config/listener";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $Iterable } from "@package/java/lang";
export * as option from "@package/xaero/lib/common/config/option";
export * as single from "@package/xaero/lib/common/config/single";
export * as channel from "@package/xaero/lib/common/config/channel";
export * as listener from "@package/xaero/lib/common/config/listener";
export * as server from "@package/xaero/lib/common/config/server";
export * as profile from "@package/xaero/lib/common/config/profile";
export * as sync from "@package/xaero/lib/common/config/sync";

declare module "@package/xaero/lib/common/config" {
    export class $Config {
        usedOptions(): $Iterable<$ConfigOption<never>>;
        reset(): void;
        get<T>(arg0: $ConfigOption<T>): T;
        set<T>(arg0: $ConfigOption<T>, arg1: T): T;
        getChangeListener(): $IConfigChangeListener;
        getRemovedLargeOptions(): $Iterable<$ConfigOption<never>>;
        getFailedSerializedValue(arg0: $ConfigOption<never>): string;
        addFailedSerializedValue<T>(arg0: $ConfigOption<T>, arg1: string): void;
        postSave(): void;
        copyOptionsFrom(arg0: $Config): void;
        clearDirtyOptions(): void;
        setDefaults(): void;
        setOptionDefault<T>(arg0: $ConfigOption<T>): void;
        getChangeCount(): number;
        setChangeListener(arg0: $IConfigChangeListener): void;
        getDirtyOptions(): $Iterable<$ConfigOption<never>>;
        isAllowNullValues(): boolean;
        copyOptionFrom<T>(arg0: $ConfigOption<T>, arg1: $Config): void;
        get removedLargeOptions(): $Iterable<$ConfigOption<never>>;
        set optionDefault(value: $ConfigOption<T>);
        get changeCount(): number;
        get dirtyOptions(): $Iterable<$ConfigOption<never>>;
        get allowNullValues(): boolean;
    }
}
