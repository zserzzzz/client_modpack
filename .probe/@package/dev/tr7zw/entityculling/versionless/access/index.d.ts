
declare module "@package/dev/tr7zw/entityculling/versionless/access" {
    export class $Cullable {
    }
    export interface $Cullable {
        setTimeout(): void;
        isOutOfCamera(): boolean;
        isForcedVisible(): boolean;
        setOutOfCamera(arg0: boolean): void;
        setCulled(arg0: boolean): void;
        isCulled(): boolean;
        get forcedVisible(): boolean;
    }
}
