import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $GridLayout extends $AbstractLayout {
        columnSpacing(columnSpacing: number): $GridLayout;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        spacing(columnSpacing: number): $GridLayout;
        defaultCellSetting(): $LayoutSettings;
        newCellSettings(): $LayoutSettings;
        createRowHelper(columns: number): $GridLayout$RowHelper;
        rowSpacing(columnSpacing: number): $GridLayout;
        width: number;
        height: number;
        constructor();
        constructor(x: number, y: number);
    }
    export class $EqualSpacingLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $GridLayout$RowHelper {
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number): T;
        addChild<T extends $LayoutElement>(child: T): T;
        defaultCellSetting(): $LayoutSettings;
        newCellSettings(): $LayoutSettings;
        getGrid(): $GridLayout;
        this$0: $GridLayout;
        constructor(columns: $GridLayout, arg1: number);
        get grid(): $GridLayout;
    }
    export class $AbstractLayout$AbstractChildWrapper {
    }
    export class $FrameLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
        constructor(arg0: $LayoutElement, arg1: $LayoutSettings);
    }
    export class $Layout {
    }
    export interface $Layout extends $LayoutElement {
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        arrangeElements(): void;
    }
    export class $FrameLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        static centerInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_): void;
        static centerInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number): void;
        static alignInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_, deltaX: number, deltaY: number): void;
        static alignInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number, deltaX: number, deltaY: number): void;
        newChildLayoutSettings(): $LayoutSettings;
        defaultChildLayoutSetting(): $LayoutSettings;
        setMinDimensions(minWidth: number, minHeight: number): $FrameLayout;
        setMinWidth(minHeight: number): $FrameLayout;
        setMinHeight(minHeight: number): $FrameLayout;
        static alignInDimension(position: number, rectangleLength: number, childLength: number, setter: $Consumer_<number>, delta: number): void;
        children: $List<$FrameLayout$ChildContainer>;
        width: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number);
        constructor(width: number, height: number);
        constructor();
        set minWidth(value: number);
        set minHeight(value: number);
    }
    export class $LinearLayout implements $Layout {
        static horizontal(): $LinearLayout;
        static vertical(): $LinearLayout;
        getY(): number;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        getWidth(): number;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        getHeight(): number;
        spacing(spacing: number): $LinearLayout;
        getX(): number;
        setX(x: number): void;
        setY(x: number): void;
        defaultCellSetting(): $LayoutSettings;
        arrangeElements(): void;
        newCellSettings(): $LayoutSettings;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(x: number, y: number): void;
        wrapped: $GridLayout;
        constructor(width: number, height: number, orientation: $LinearLayout$Orientation_);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractLayout implements $Layout {
        getY(): number;
        getWidth(): number;
        getHeight(): number;
        getX(): number;
        setX(x: number): void;
        setY(x: number): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        arrangeElements(): void;
        getRectangle(): $ScreenRectangle;
        setPosition(x: number, y: number): void;
        width: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $LayoutElement {
    }
    export interface $LayoutElement {
        getY(): number;
        getWidth(): number;
        getHeight(): number;
        getX(): number;
        setX(x: number): void;
        setY(x: number): void;
        getRectangle(): $ScreenRectangle;
        setPosition(x: number, y: number): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $LinearLayout$Orientation extends $Enum<$LinearLayout$Orientation> {
        static values(): $LinearLayout$Orientation[];
        static valueOf(arg0: string): $LinearLayout$Orientation;
        setSpacing(layout: $GridLayout, spacing: number): void;
        addChild<T extends $LayoutElement>(layout: $GridLayout, element: T, index: number, layoutSettings: $LayoutSettings): T;
        static VERTICAL: $LinearLayout$Orientation;
        static HORIZONTAL: $LinearLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $LinearLayout$Orientation}.
     */
    export type $LinearLayout$Orientation_ = "horizontal" | "vertical";
    export class $LayoutSettings {
        static defaults(): $LayoutSettings;
    }
    export interface $LayoutSettings {
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings;
        padding(padding: number): $LayoutSettings;
        copy(): $LayoutSettings;
        paddingBottom(padding: number): $LayoutSettings;
        paddingHorizontal(padding: number): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        align(xAlignment: number, yAlignment: number): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        paddingLeft(padding: number): $LayoutSettings;
        paddingRight(padding: number): $LayoutSettings;
        paddingTop(padding: number): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        paddingVertical(padding: number): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        alignHorizontally(xAlignment: number): $LayoutSettings;
        alignVertically(xAlignment: number): $LayoutSettings;
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $SpacerElement implements $LayoutElement {
        static width(height: number): $SpacerElement;
        getY(): number;
        static height(height: number): $SpacerElement;
        getWidth(): number;
        getHeight(): number;
        getX(): number;
        setX(x: number): void;
        setY(x: number): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(width: number, height: number): void;
        constructor(width: number, height: number);
        constructor(x: number, y: number, width: number, height: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $CommonLayouts {
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_, layoutSettings: $Consumer_<$LayoutSettings>): $Layout;
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_): $Layout;
    }
    export class $EqualSpacingLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(child: T, layoutSettingsCreator: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T): T;
        newChildLayoutSettings(): $LayoutSettings;
        defaultChildLayoutSetting(): $LayoutSettings;
        width: number;
        height: number;
        constructor(width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
        constructor(x: number, y: number, width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
    }
    export class $LayoutSettings$LayoutSettingsImpl implements $LayoutSettings {
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings$LayoutSettingsImpl;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings$LayoutSettingsImpl;
        paddingBottom(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingHorizontal(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingVertical(padding: number): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontally(xAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        alignVerticallyMiddle(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        padding(paddingLeft: number): $LayoutSettings;
        copy(): $LayoutSettings;
        align(xAlignment: number, yAlignment: number): $LayoutSettings;
        paddingLeft(paddingLeft: number): $LayoutSettings;
        paddingRight(paddingLeft: number): $LayoutSettings;
        paddingTop(paddingLeft: number): $LayoutSettings;
        alignVertically(yAlignment: number): $LayoutSettings;
        yAlignment: number;
        xAlignment: number;
        constructor();
        constructor(other: $LayoutSettings$LayoutSettingsImpl);
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $EqualSpacingLayout$Orientation extends $Enum<$EqualSpacingLayout$Orientation> {
        static values(): $EqualSpacingLayout$Orientation[];
        static valueOf(arg0: string): $EqualSpacingLayout$Orientation;
        getSecondaryPosition(element: $LayoutElement): number;
        setSecondaryPosition(container: $EqualSpacingLayout$ChildContainer, position: number, length: number): void;
        getSecondaryLength(container: $EqualSpacingLayout$ChildContainer): number;
        getSecondaryLength(element: $LayoutElement): number;
        getPrimaryLength(container: $EqualSpacingLayout$ChildContainer): number;
        getPrimaryLength(element: $LayoutElement): number;
        getPrimaryPosition(element: $LayoutElement): number;
        setPrimaryPosition(container: $EqualSpacingLayout$ChildContainer, position: number): void;
        static VERTICAL: $EqualSpacingLayout$Orientation;
        static HORIZONTAL: $EqualSpacingLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $EqualSpacingLayout$Orientation}.
     */
    export type $EqualSpacingLayout$Orientation_ = "horizontal" | "vertical";
    export class $GridLayout$CellInhabitant extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $HeaderAndFooterLayout implements $Layout {
        getY(): number;
        getContentHeight(): number;
        getWidth(): number;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        getHeight(): number;
        getX(): number;
        setX(footerHeight: number): void;
        setY(footerHeight: number): void;
        addToContents<T extends $LayoutElement>(child: T): T;
        addToContents<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addTitleHeader(message: $Component_, font: $Font): void;
        addToFooter<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToFooter<T extends $LayoutElement>(child: T): T;
        arrangeElements(): void;
        addToHeader<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToHeader<T extends $LayoutElement>(child: T): T;
        setFooterHeight(footerHeight: number): void;
        setHeaderHeight(footerHeight: number): void;
        getHeaderHeight(): number;
        getFooterHeight(): number;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(x: number, y: number): void;
        headerFrame: $FrameLayout;
        static DEFAULT_HEADER_AND_FOOTER_HEIGHT: number;
        constructor(screen: $Screen, headerHeight: number, footerHeight: number);
        constructor(screen: $Screen, height: number);
        constructor(screen: $Screen);
        get contentHeight(): number;
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
}
