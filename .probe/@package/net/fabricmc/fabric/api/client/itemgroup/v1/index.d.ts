import { $CreativeModeTab_, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/api/client/itemgroup/v1" {
    export class $FabricCreativeInventoryScreen {
    }
    export interface $FabricCreativeInventoryScreen {
        switchToPage(arg0: number): boolean;
        switchToNextPage(): boolean;
        hasAdditionalPages(): boolean;
        getPage(arg0: $CreativeModeTab_): number;
        getPageCount(): number;
        getSelectedItemGroup(): $CreativeModeTab;
        switchToPreviousPage(): boolean;
        getItemGroupsOnPage(arg0: number): $List<$CreativeModeTab>;
        setSelectedItemGroup(arg0: $CreativeModeTab_): boolean;
        getCurrentPage(): number;
        get pageCount(): number;
        get currentPage(): number;
    }
}
