import { $Function1_ } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $JoinMultiplayerScreen } from "@package/net/minecraft/client/gui/screens/multiplayer";
import { $UMatrixStack } from "@package/gg/essential/universal";
import { $Button } from "@package/net/minecraft/client/gui/components";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UUID_, $List_ } from "@package/java/util";
import { $NewServerDiscoveryManager$ImpressionTracker } from "@package/gg/essential/network/connectionmanager/serverdiscovery";
import { $UDrawContext } from "@package/gg/essential/util";

declare module "@package/gg/essential/gui/multiplayer" {
    export class $EssentialMultiplayerGui$Companion {
        getInstance(): $EssentialMultiplayerGui;
        setRefreshing(arg0: boolean): void;
        getSecondButtonRowYOffset(): number;
        getCancelButtonText(): string;
        setServerListSeed(arg0: number): void;
        getServerListSeed(): number;
        isRefreshing(): boolean;
        constructor($constructor_marker: $DefaultConstructorMarker);
        get instance(): $EssentialMultiplayerGui;
        get secondButtonRowYOffset(): number;
        get cancelButtonText(): string;
    }
    export class $EssentialMultiplayerGui {
        static getInstance(): $EssentialMultiplayerGui;
        onClosed(): void;
        updatePlayerActivity(uuid: $UUID_): void;
        initGui(screen: $JoinMultiplayerScreen): void;
        draw(drawContext: $UDrawContext): void;
        updateSpsSessions(): void;
        updateButtonState(): void;
        onConnectToServer(serverData: $ServerData, ci: $CallbackInfo): void;
        setupButtons(buttons: $List_<$Button>, addButton: $Function1_<$Button, $Button>, removeButton: $Function1_<$Button, $Button>): void;
        switchTab(tab: number): void;
        static access$setRefreshing$cp(arg0: boolean): void;
        getImpressionTracker(): $NewServerDiscoveryManager$ImpressionTracker;
        static access$isRefreshing$cp(): boolean;
        setImpressionTracker(arg0: $NewServerDiscoveryManager$ImpressionTracker): void;
        static access$getServerListSeed$cp(): number;
        static access$setServerListSeed$cp(arg0: number): void;
        static access$getCancelButtonText$cp(): string;
        static access$getSecondButtonRowYOffset$cp(): number;
        showTooltipString(xPos: number, yPos: number, targetWidth: number, targetHeight: number, text: string): void;
        onButtonClicked(button: $Button): void;
        showDownloadModal(serverData: $ServerData): void;
        static Companion: $EssentialMultiplayerGui$Companion;
        impressionTracker: $NewServerDiscoveryManager$ImpressionTracker;
        constructor();
        static get instance(): $EssentialMultiplayerGui;
    }
    export class $FriendsIndicator {
        draw(matrixStack: $UMatrixStack, x: number, y: number, listWidth: number, mouseX: number, mouseY: number, populationInfoText: number): string;
        getServer(): $ServerData;
        updatePlayerStatus(uuid: $UUID_): void;
        /**
         * @deprecated
         */
        static HEAD_SIZE: number;
        /**
         * @deprecated
         */
        static PADDED_HEAD_WIDTH: number;
        /**
         * @deprecated
         */
        static TRUNCATED_WIDTH: number;
        /**
         * @deprecated
         */
        static HEAD_PADDING: number;
        /**
         * @deprecated
         */
        static MAX_ALLOWED_ICONS: number;
        constructor(server: $ServerData);
        get server(): $ServerData;
    }
}
