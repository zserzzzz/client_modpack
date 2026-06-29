import { $IMixinSpectatorGui } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $SpectatorMenu, $SpectatorMenuListener } from "@package/net/minecraft/client/gui/spectator";
import { $Minecraft } from "@package/net/minecraft/client";
import { $SpectatorPage } from "@package/net/minecraft/client/gui/spectator/categories";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/spectator" {
    export class $SpectatorGui implements $SpectatorMenuListener, $IMixinSpectatorGui {
        onMouseScrolled(slot: number): void;
        isMenuActive(): boolean;
        onMouseMiddleClick(): void;
        renderTooltip(guiGraphics: $GuiGraphics): void;
        onHotbarSelected(slot: number): void;
        renderPage(guiGraphics: $GuiGraphics, alpha: number, x: number, y: number, spectatorPage: $SpectatorPage): void;
        onSpectatorMenuClosed(menu: $SpectatorMenu): void;
        renderHotbar(guiGraphics: $GuiGraphics): void;
        get_menu_FancyMenu(): $SpectatorMenu;
        invoke_getHotbarAlpha_FancyMenu(): number;
        constructor(minecraft: $Minecraft);
        get menuActive(): boolean;
        get _menu_FancyMenu(): $SpectatorMenu;
    }
}
