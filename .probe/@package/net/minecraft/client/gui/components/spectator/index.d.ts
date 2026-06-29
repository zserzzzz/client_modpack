import { $IMixinSpectatorGui } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $SpectatorMenu, $SpectatorMenuListener } from "@package/net/minecraft/client/gui/spectator";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $SpectatorPage } from "@package/net/minecraft/client/gui/spectator/categories";

declare module "@package/net/minecraft/client/gui/components/spectator" {
    export class $SpectatorGui implements $SpectatorMenuListener, $IMixinSpectatorGui {
        renderTooltip(guiGraphics: $GuiGraphics): void;
        onHotbarSelected(slot: number): void;
        onMouseScrolled(slot: number): void;
        onMouseMiddleClick(): void;
        isMenuActive(): boolean;
        renderHotbar(guiGraphics: $GuiGraphics): void;
        onSpectatorMenuClosed(menu: $SpectatorMenu): void;
        renderPage(guiGraphics: $GuiGraphics, alpha: number, x: number, y: number, spectatorPage: $SpectatorPage): void;
        invoke_getHotbarAlpha_FancyMenu(): number;
        get_menu_FancyMenu(): $SpectatorMenu;
        constructor(minecraft: $Minecraft);
        get menuActive(): boolean;
        get _menu_FancyMenu(): $SpectatorMenu;
    }
}
