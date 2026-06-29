import { $Enum } from "@package/java/lang";

declare module "@package/dev/kir/cubeswithoutborders/client" {
    export class $FullscreenManager {
        static getInstance(): $FullscreenManager;
        static get instance(): $FullscreenManager;
    }
    export interface $FullscreenManager {
        setFullscreenMode(arg0: $FullscreenMode_): void;
        getFullscreenMode(): $FullscreenMode;
    }
    export class $FullscreenMode extends $Enum<$FullscreenMode> {
        static get(id: number): $FullscreenMode;
        static values(): $FullscreenMode[];
        static valueOf(name: string): $FullscreenMode;
        getId(): number;
        getTranslationKey(): string;
        static OFF: $FullscreenMode;
        static BORDERLESS: $FullscreenMode;
        static ON: $FullscreenMode;
        get id(): number;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $FullscreenMode}.
     */
    export type $FullscreenMode_ = "off" | "on" | "borderless";
}
