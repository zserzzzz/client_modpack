import { $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $PackSelectionScreen, $TransferableSelectionList$PackEntry } from "@package/net/minecraft/client/gui/screens/packs";
import { $TriConsumer_ } from "@package/gg/essential/elementa/utils";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ServerSelectionList$Entry, $ServerSelectionList, $JoinMultiplayerScreen } from "@package/net/minecraft/client/gui/screens/multiplayer";
import { $AbstractSelectionList, $ObjectSelectionList$Entry } from "@package/net/minecraft/client/gui/components";
import { $List_ } from "@package/java/util";
import { $GuiDrawScreenEvent } from "@package/gg/essential/event/gui";
import { $Object, $Runnable_, $Runnable } from "@package/java/lang";
import { $UDrawContext } from "@package/gg/essential/util";

declare module "@package/gg/essential/mixins/impl/client/gui" {
    export class $GuiDragDropEntryHandler<E extends $ObjectSelectionList$Entry<E>> {
        close(list: $List_<never>, otherList: $List_<never>): void;
        scrollIfDraggingNearTopOrBottom(yPos: number, list: $AbstractSelectionList<any>): void;
        drawDraggedEntryWithinBounds(event: $GuiDrawScreenEvent, width: number, height: number, padUIBlockWidth: number, padEntryRenderWidth: number, xBound: number, yBound: number, x2Bound: number, y2Bound: number): void;
        placeIndicatorInListAtIndex(list: $List_<E>, index: number, otherList: $List_<E>, immovableEntryCountStart: number, immovableEntryCountEnd: number): void;
        placeIndicatorWhenOutsideOfLists(list: $List_<never>, otherList: $List_<never>): void;
        isDraggingEntry(): boolean;
        handleIndicatorForNonReorderingList(listThatWontReorder: $List_<E>, otherList: $List_<E>): void;
        isThisListTheDragOrigin(list: $List_<E>): boolean;
        static initResourcePackIndicator(screen: $PackSelectionScreen): $TransferableSelectionList$PackEntry;
        getDragCenterPos(): $GuiDragDropEntryHandler$ScreenPosition;
        static initServerIndicator(screen: $JoinMultiplayerScreen, list: $ServerSelectionList): $ServerSelectionList$Entry;
        revertDraggedEntryToOriginalContainer(list: $List_<never>, otherList: $List_<never>): void;
        placeDraggedEntryAtIndicatorOrReleaseToOrigin(list: $List_<E>, otherList: $List_<E>, dataChangeReflector: $GuiDragDropEntryHandler$DataChangeReflector_<E>, setSelected: $TriConsumer_<boolean, E, number>): void;
        setPendingDraggedEntryState(entry: E, originalContainer: $List_<E>, mouseXOffset: number, mouseYOffset: number, originalIndex: number, mouseX: number, mouseY: number, mustReturnToOriginalList: boolean): void;
        processDeltaTimeForScrolling(): void;
        isIndicatorEntry(entry: $Object): boolean;
        runForDataChange: $Runnable;
        runToUnselectEntries: $Runnable;
        constructor(screen: $Screen, runForDataChange: $Runnable_, runForDrawChange: $Runnable_, mouseReleaseAction: $Runnable_, indicatorPositionUpdater: $Consumer_<$GuiDragDropEntryHandler$ScreenPosition>, draggedEntryDrawAction: $Consumer_<$GuiDrawScreenEvent>, onRevertedDrag: $BiConsumer_<E, number>, runToUnselectEntries: $Runnable_, indicatorEntry: E);
        get draggingEntry(): boolean;
        get dragCenterPos(): $GuiDragDropEntryHandler$ScreenPosition;
    }
    export class $GuiDragDropEntryHandler$DataChangeReflector<E extends $ObjectSelectionList$Entry<E>> {
    }
    export interface $GuiDragDropEntryHandler$DataChangeReflector<E extends $ObjectSelectionList$Entry<E>> {
        reflectChanges(arg0: E, arg1: number, arg2: number, arg3: boolean, arg4: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $GuiDragDropEntryHandler$DataChangeReflector}.
     */
    export type $GuiDragDropEntryHandler$DataChangeReflector_<E> = ((arg0: E, arg1: number, arg2: number, arg3: boolean, arg4: boolean) => void);
    export class $EssentialGuiDraggableEntryScreen<E extends $ObjectSelectionList$Entry<E>> {
    }
    export interface $EssentialGuiDraggableEntryScreen<E extends $ObjectSelectionList$Entry<E>> {
        essential$getDragHandlerOrNull(): $GuiDragDropEntryHandler<E>;
        essential$getQuickSwapIndex(): number;
    }
    export class $GuiDragDropEntryHandler$ScreenPosition {
        x(): number;
        y(): number;
        equalsInts(x: number, y: number): boolean;
        constructor(x: number, y: number);
    }
    export class $EssentialGuiScreenBeforeClose {
    }
    export interface $EssentialGuiScreenBeforeClose {
        essential$beforeClose(): void;
    }
    /**
     * Values that may be interpreted as {@link $EssentialGuiScreenBeforeClose}.
     */
    export type $EssentialGuiScreenBeforeClose_ = (() => void);
    export class $EssentialEntryAtScreenPosAccess<E extends $ObjectSelectionList$Entry<E>> {
    }
    export interface $EssentialEntryAtScreenPosAccess<E extends $ObjectSelectionList$Entry<E>> {
        essential$getEntryAtScreenPosition(arg0: number, arg1: number): E;
    }
    /**
     * Values that may be interpreted as {@link $EssentialEntryAtScreenPosAccess}.
     */
    export type $EssentialEntryAtScreenPosAccess_<E> = ((arg0: number, arg1: number) => E);
    export class $EssentialPostScreenDrawHook {
    }
    export interface $EssentialPostScreenDrawHook {
        essential$afterDraw(arg0: $UDrawContext, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $EssentialPostScreenDrawHook}.
     */
    export type $EssentialPostScreenDrawHook_ = ((arg0: $UDrawContext, arg1: number, arg2: number, arg3: number) => void);
}
