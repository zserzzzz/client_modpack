import { $CreativeModeTab_, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/api/client/itemgroup/v1" {
    export class $FabricCreativeInventoryScreen {
    }
    export interface $FabricCreativeInventoryScreen {
        getPage(arg0: $CreativeModeTab_): number;
        hasAdditionalPages(): boolean;
        switchToNextPage(): boolean;
        switchToPage(arg0: number): boolean;
        getSelectedItemGroup(): $CreativeModeTab;
        setSelectedItemGroup(arg0: $CreativeModeTab_): boolean;
        switchToPreviousPage(): boolean;
        getItemGroupsOnPage(arg0: number): $List<$CreativeModeTab>;
        getPageCount(): number;
        getCurrentPage(): number;
        get pageCount(): number;
        get currentPage(): number;
    }
}
