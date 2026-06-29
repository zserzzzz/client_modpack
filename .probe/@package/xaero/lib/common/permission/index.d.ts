import { $Component } from "@package/net/minecraft/network/chat";
import { $Class } from "@package/java/lang";
export * as config from "@package/xaero/lib/common/permission/config";

declare module "@package/xaero/lib/common/permission" {
    export class $PermissionNode<T> {
        getModId(): string;
        getType(): $Class<T>;
        getDisplayName(): $Component;
        getComment(): $Component;
        getDefaultPath(): string;
        getActualPath(): string;
        get modId(): string;
        get type(): $Class<T>;
        get displayName(): $Component;
        get comment(): $Component;
        get defaultPath(): string;
        get actualPath(): string;
    }
}
