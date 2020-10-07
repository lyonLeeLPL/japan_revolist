/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Edition, RevoGrid, Selection, ThemeSpace } from "./interfaces";
import { ObservableMap } from "@stencil/store";
import { DataSourceState, Groups } from "./store/dataSource/data.store";
export namespace Components {
    interface RevoGrid {
        /**
          * When true cell focus appear.
         */
        "canFocus": boolean;
        /**
          * Indicates default column size.
         */
        "colSize": number;
        /**
          * Columns - defines an array of grid columns. Can be column or grouped column.
         */
        "columns": (RevoGrid.ColumnRegular|RevoGrid.ColumnGrouping)[];
        /**
          * Custom editors register
         */
        "editors": Edition.Editors;
        /**
          * Defines how many rows/columns should be rendered outside visible area.
         */
        "frameSize": number;
        /**
          * Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source.
         */
        "pinnedBottomSource": RevoGrid.DataType[];
        /**
          * Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source.
         */
        "pinnedTopSource": RevoGrid.DataType[];
        /**
          * When true, user can range selection.
         */
        "range": boolean;
        /**
          * When true, grid in read only mode.
         */
        "readonly": boolean;
        /**
          * Refreshes data viewport. Can be specific part as row or pinned row or 'all' by default.
         */
        "refresh": (type?: RevoGrid.DimensionRows | 'all') => Promise<void>;
        /**
          * When true, columns are resizable.
         */
        "resize": boolean;
        /**
          * Row class property Define this property in row object and this will be mapped as row class
         */
        "rowClass": string;
        /**
          * Indicates default row size. By default 0, means theme package size will be applied
         */
        "rowSize": number;
        /**
          * Scrolls view port to specified column index
         */
        "scrollToColumnIndex": (coordinate?: number) => Promise<void>;
        /**
          * Scrolls view port to specified column prop
         */
        "scrollToColumnProp": (prop: RevoGrid.ColumnProp) => Promise<void>;
        /**
          * Scrolls view port to coordinate
         */
        "scrollToCoordinate": (cell: Partial<Selection.Cell>) => Promise<void>;
        /**
          * Scrolls view port to specified row index
         */
        "scrollToRow": (coordinate?: number) => Promise<void>;
        /**
          * Bring cell to edit mode
         */
        "setCellEdit": (row: number, prop: RevoGrid.ColumnProp, rowSource?: RevoGrid.DimensionRows) => Promise<void>;
        /**
          * Source - defines main data source. Can be an Object or 2 dimensional array([][]); Keys/indexes referenced from columns Prop
         */
        "source": RevoGrid.DataType[];
        /**
          * Theme name
         */
        "theme": ThemeSpace.Theme;
    }
    interface RevogrClipboard {
        "doCopy": (e: DataTransfer, data?: RevoGrid.DataFormat[][]) => Promise<void>;
    }
    interface RevogrData {
        "canDrag": boolean;
        "colData": RevoGrid.ColumnRegular[];
        "cols": RevoGrid.VirtualPositionItem[];
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore": ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionRow": ObservableMap<RevoGrid.DimensionSettingsState>;
        "range": boolean;
        "readonly": boolean;
        "rowClass": string;
        "rows": RevoGrid.VirtualPositionItem[];
    }
    interface RevogrEdit {
        "column": RevoGrid.ColumnRegular|null;
        "editCell": Edition.EditCell;
        /**
          * Custom editors register
         */
        "editor": Edition.EditorCtr|null;
    }
    interface RevogrFocus {
        "dimensionCol": ObservableMap<RevoGrid.DimensionSettingsState>;
        "dimensionRow": ObservableMap<RevoGrid.DimensionSettingsState>;
        /**
          * Dynamic stores
         */
        "selectionStore": ObservableMap<Selection.SelectionStoreState>;
    }
    interface RevogrHeader {
        "canResize": boolean;
        "colData": RevoGrid.ColumnRegular[];
        "cols": RevoGrid.VirtualPositionItem[];
        "dimensionCol": ObservableMap<RevoGrid.DimensionSettingsState>;
        "groupingDepth": number;
        "groups": Groups;
        "parent": string;
    }
    interface RevogrOrderEditor {
        "clearOrder": () => Promise<void>;
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore": ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol": ObservableMap<RevoGrid.DimensionSettingsState>;
        "dimensionRow": ObservableMap<RevoGrid.DimensionSettingsState>;
        "dragStart": (e: MouseEvent) => Promise<void>;
        "endOrder": (e: MouseEvent) => Promise<void>;
        "parent": HTMLElement;
    }
    interface RevogrOverlaySelection {
        "canDrag": boolean;
        "colData": RevoGrid.ColumnRegular[];
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore": ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol": ObservableMap<RevoGrid.DimensionSettingsState>;
        "dimensionRow": ObservableMap<RevoGrid.DimensionSettingsState>;
        /**
          * Custom editors register
         */
        "editors": Edition.Editors;
        /**
          * Last cell position
         */
        "lastCell": Selection.Cell;
        "range": boolean;
        "readonly": boolean;
        "selectionFocus": Selection.Cell;
        "selectionRange": Selection.RangeArea;
        /**
          * Dynamic stores
         */
        "selectionStore": ObservableMap<Selection.SelectionStoreState>;
    }
    interface RevogrScrollVirtual {
        "dimension": RevoGrid.DimensionType;
        "dimensionStore": ObservableMap<RevoGrid.DimensionSettingsState>;
        "setScroll": (e: RevoGrid.ViewPortScrollEvent) => Promise<void>;
        "viewportStore": ObservableMap<RevoGrid.ViewportState>;
    }
    interface RevogrTempRange {
        "dimensionCol": ObservableMap<RevoGrid.DimensionSettingsState>;
        "dimensionRow": ObservableMap<RevoGrid.DimensionSettingsState>;
        /**
          * Dynamic stores
         */
        "selectionStore": ObservableMap<Selection.SelectionStoreState>;
    }
    interface RevogrViewport {
        "columnStores": {[T in RevoGrid.DimensionCols]: ObservableMap<DataSourceState<RevoGrid.ColumnRegular, RevoGrid.DimensionCols>>};
        "dimensions": {[T in RevoGrid.MultiDimensionType]: ObservableMap<RevoGrid.DimensionSettingsState>};
        /**
          * Custom editors register
         */
        "editors": Edition.Editors;
        "range": boolean;
        "readonly": boolean;
        "resize": boolean;
        "rowClass": string;
        "rowStores": {[T in RevoGrid.DimensionRows]: ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>};
        "scrollToCoordinate": (cell: Partial<Selection.Cell>) => Promise<void>;
        "setEdit": (rowIndex: number, colIndex: number, colType: RevoGrid.DimensionCols, rowType: RevoGrid.DimensionRows) => Promise<void>;
        "uuid": string|null;
        "viewports": {[T in RevoGrid.MultiDimensionType]: ObservableMap<RevoGrid.ViewportState>};
    }
    interface RevogrViewportScroll {
        "contentHeight": number;
        "contentWidth": number;
        "setScroll": (e: RevoGrid.ViewPortScrollEvent) => Promise<void>;
    }
}
declare global {
    interface HTMLRevoGridElement extends Components.RevoGrid, HTMLStencilElement {
    }
    var HTMLRevoGridElement: {
        prototype: HTMLRevoGridElement;
        new (): HTMLRevoGridElement;
    };
    interface HTMLRevogrClipboardElement extends Components.RevogrClipboard, HTMLStencilElement {
    }
    var HTMLRevogrClipboardElement: {
        prototype: HTMLRevogrClipboardElement;
        new (): HTMLRevogrClipboardElement;
    };
    interface HTMLRevogrDataElement extends Components.RevogrData, HTMLStencilElement {
    }
    var HTMLRevogrDataElement: {
        prototype: HTMLRevogrDataElement;
        new (): HTMLRevogrDataElement;
    };
    interface HTMLRevogrEditElement extends Components.RevogrEdit, HTMLStencilElement {
    }
    var HTMLRevogrEditElement: {
        prototype: HTMLRevogrEditElement;
        new (): HTMLRevogrEditElement;
    };
    interface HTMLRevogrFocusElement extends Components.RevogrFocus, HTMLStencilElement {
    }
    var HTMLRevogrFocusElement: {
        prototype: HTMLRevogrFocusElement;
        new (): HTMLRevogrFocusElement;
    };
    interface HTMLRevogrHeaderElement extends Components.RevogrHeader, HTMLStencilElement {
    }
    var HTMLRevogrHeaderElement: {
        prototype: HTMLRevogrHeaderElement;
        new (): HTMLRevogrHeaderElement;
    };
    interface HTMLRevogrOrderEditorElement extends Components.RevogrOrderEditor, HTMLStencilElement {
    }
    var HTMLRevogrOrderEditorElement: {
        prototype: HTMLRevogrOrderEditorElement;
        new (): HTMLRevogrOrderEditorElement;
    };
    interface HTMLRevogrOverlaySelectionElement extends Components.RevogrOverlaySelection, HTMLStencilElement {
    }
    var HTMLRevogrOverlaySelectionElement: {
        prototype: HTMLRevogrOverlaySelectionElement;
        new (): HTMLRevogrOverlaySelectionElement;
    };
    interface HTMLRevogrScrollVirtualElement extends Components.RevogrScrollVirtual, HTMLStencilElement {
    }
    var HTMLRevogrScrollVirtualElement: {
        prototype: HTMLRevogrScrollVirtualElement;
        new (): HTMLRevogrScrollVirtualElement;
    };
    interface HTMLRevogrTempRangeElement extends Components.RevogrTempRange, HTMLStencilElement {
    }
    var HTMLRevogrTempRangeElement: {
        prototype: HTMLRevogrTempRangeElement;
        new (): HTMLRevogrTempRangeElement;
    };
    interface HTMLRevogrViewportElement extends Components.RevogrViewport, HTMLStencilElement {
    }
    var HTMLRevogrViewportElement: {
        prototype: HTMLRevogrViewportElement;
        new (): HTMLRevogrViewportElement;
    };
    interface HTMLRevogrViewportScrollElement extends Components.RevogrViewportScroll, HTMLStencilElement {
    }
    var HTMLRevogrViewportScrollElement: {
        prototype: HTMLRevogrViewportScrollElement;
        new (): HTMLRevogrViewportScrollElement;
    };
    interface HTMLElementTagNameMap {
        "revo-grid": HTMLRevoGridElement;
        "revogr-clipboard": HTMLRevogrClipboardElement;
        "revogr-data": HTMLRevogrDataElement;
        "revogr-edit": HTMLRevogrEditElement;
        "revogr-focus": HTMLRevogrFocusElement;
        "revogr-header": HTMLRevogrHeaderElement;
        "revogr-order-editor": HTMLRevogrOrderEditorElement;
        "revogr-overlay-selection": HTMLRevogrOverlaySelectionElement;
        "revogr-scroll-virtual": HTMLRevogrScrollVirtualElement;
        "revogr-temp-range": HTMLRevogrTempRangeElement;
        "revogr-viewport": HTMLRevogrViewportElement;
        "revogr-viewport-scroll": HTMLRevogrViewportScrollElement;
    }
}
declare namespace LocalJSX {
    interface RevoGrid {
        /**
          * When true cell focus appear.
         */
        "canFocus"?: boolean;
        /**
          * Indicates default column size.
         */
        "colSize"?: number;
        /**
          * Columns - defines an array of grid columns. Can be column or grouped column.
         */
        "columns"?: (RevoGrid.ColumnRegular|RevoGrid.ColumnGrouping)[];
        /**
          * Custom editors register
         */
        "editors"?: Edition.Editors;
        /**
          * Defines how many rows/columns should be rendered outside visible area.
         */
        "frameSize"?: number;
        /**
          * After edit. Triggered when after data applied or Range changeged.
         */
        "onAfterEdit"?: (event: CustomEvent<Edition.BeforeSaveDataDetails|Edition.BeforeRangeSaveDataDetails>) => void;
        /**
          * Before autofill. Triggered before autofill applied. Use e.preventDefault() to prevent edit data apply.
         */
        "onBeforeAutofill"?: (event: CustomEvent<Selection.ChangedRange>) => void;
        /**
          * Before cell focus changed. Use e.preventDefault() to prevent cell focus change.
         */
        "onBeforeCellFocus"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        /**
          * Before edit event. Triggered before edit data applied. Use e.preventDefault() to prevent edit data set and use you own.  Use e.val = {your value} to replace edit result with your own.
         */
        "onBeforeEdit"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        /**
          * Before range apply. Triggered before range applied. Use e.preventDefault() to prevent range.
         */
        "onBeforeRange"?: (event: CustomEvent<Selection.ChangedRange>) => void;
        /**
          * Before range edit event. Triggered before range data applied, when range selection happened. Use e.preventDefault() to prevent edit data set and use you own.
         */
        "onBeforeRangeEdit"?: (event: CustomEvent<Edition.BeforeRangeSaveDataDetails>) => void;
        /**
          * Before sorting event. Initial sorting triggered, if this event stops no other event called. Use e.preventDefault() to prevent sorting.
         */
        "onBeforeSorting"?: (event: CustomEvent<{
    column: RevoGrid.ColumnRegular,
    order: 'desc'|'asc'
  }>) => void;
        /**
          * Before sorting apply. Use e.preventDefault() to prevent sorting data change.
         */
        "onBeforeSortingApply"?: (event: CustomEvent<{
  column: RevoGrid.ColumnRegular,
  order: 'desc'|'asc'
}>) => void;
        /**
          * Before source update sorting apply. Use this event if you intended to prevent sorting on data update. Use e.preventDefault() to prevent sorting data change during rows source update.
         */
        "onBeforeSourceSortingApply"?: (event: CustomEvent<any>) => void;
        /**
          * On header click.
         */
        "onHeaderClick"?: (event: CustomEvent<RevoGrid.ColumnRegular>) => void;
        /**
          * Row order change started. Use e.preventDefault() to prevent row order change.  Use e.text = 'new name' to change item name on start.
         */
        "onRowDragStart"?: (event: CustomEvent<{pos: RevoGrid.PositionItem, text: string}>) => void;
        /**
          * Before row order apply. Use e.preventDefault() to prevent row order change.
         */
        "onRowOrderChanged"?: (event: CustomEvent<{from: number; to: number;}>) => void;
        /**
          * Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source.
         */
        "pinnedBottomSource"?: RevoGrid.DataType[];
        /**
          * Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source.
         */
        "pinnedTopSource"?: RevoGrid.DataType[];
        /**
          * When true, user can range selection.
         */
        "range"?: boolean;
        /**
          * When true, grid in read only mode.
         */
        "readonly"?: boolean;
        /**
          * When true, columns are resizable.
         */
        "resize"?: boolean;
        /**
          * Row class property Define this property in row object and this will be mapped as row class
         */
        "rowClass"?: string;
        /**
          * Indicates default row size. By default 0, means theme package size will be applied
         */
        "rowSize"?: number;
        /**
          * Source - defines main data source. Can be an Object or 2 dimensional array([][]); Keys/indexes referenced from columns Prop
         */
        "source"?: RevoGrid.DataType[];
        /**
          * Theme name
         */
        "theme"?: ThemeSpace.Theme;
    }
    interface RevogrClipboard {
        "onCopyRegion"?: (event: CustomEvent<DataTransfer>) => void;
        "onPasteRegion"?: (event: CustomEvent<string[][]>) => void;
    }
    interface RevogrData {
        "canDrag"?: boolean;
        "colData"?: RevoGrid.ColumnRegular[];
        "cols"?: RevoGrid.VirtualPositionItem[];
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore"?: ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionRow"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        "onDragStartCell"?: (event: CustomEvent<MouseEvent>) => void;
        "range"?: boolean;
        "readonly"?: boolean;
        "rowClass"?: string;
        "rows"?: RevoGrid.VirtualPositionItem[];
    }
    interface RevogrEdit {
        "column"?: RevoGrid.ColumnRegular|null;
        "editCell"?: Edition.EditCell;
        /**
          * Custom editors register
         */
        "editor"?: Edition.EditorCtr|null;
        "onCellEdit"?: (event: CustomEvent<Edition.SaveDataDetails>) => void;
        /**
          * Close editor event
         */
        "onCloseEdit"?: (event: CustomEvent<any>) => void;
    }
    interface RevogrFocus {
        "dimensionCol"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        "dimensionRow"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        /**
          * Dynamic stores
         */
        "selectionStore"?: ObservableMap<Selection.SelectionStoreState>;
    }
    interface RevogrHeader {
        "canResize"?: boolean;
        "colData"?: RevoGrid.ColumnRegular[];
        "cols"?: RevoGrid.VirtualPositionItem[];
        "dimensionCol"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        "groupingDepth"?: number;
        "groups"?: Groups;
        "onHeaderResize"?: (event: CustomEvent<RevoGrid.ViewSettingSizeProp>) => void;
        "onInitialHeaderClick"?: (event: CustomEvent<{column: RevoGrid.ColumnRegular, index: number}>) => void;
        "parent"?: string;
    }
    interface RevogrOrderEditor {
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore"?: ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        "dimensionRow"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        /**
          * Row dragged, new range ready to be applied
         */
        "onInitialRowDropped"?: (event: CustomEvent<{from: number; to: number;}>) => void;
        /**
          * Row move
         */
        "onInternalRowDrag"?: (event: CustomEvent<RevoGrid.PositionItem>) => void;
        /**
          * Row drag ended
         */
        "onInternalRowDragEnd"?: (event: CustomEvent<any>) => void;
        /**
          * Row drag started
         */
        "onInternalRowDragStart"?: (event: CustomEvent<{
		cell: Selection.Cell, text: string, pos: RevoGrid.PositionItem, event: MouseEvent
	}>) => void;
        /**
          * Row mouse move
         */
        "onInternalRowMouseMove"?: (event: CustomEvent<Selection.Cell>) => void;
        "parent"?: HTMLElement;
    }
    interface RevogrOverlaySelection {
        "canDrag"?: boolean;
        "colData"?: RevoGrid.ColumnRegular[];
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore"?: ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        "dimensionRow"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        /**
          * Custom editors register
         */
        "editors"?: Edition.Editors;
        /**
          * Last cell position
         */
        "lastCell"?: Selection.Cell;
        "onChangeSelection"?: (event: CustomEvent<{changes: Partial<Selection.Cell>; isMulti?: boolean; }>) => void;
        "onFocusCell"?: (event: CustomEvent<Selection.FocusedCells>) => void;
        "onInternalCellEdit"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        "onInternalCopy"?: (event: CustomEvent<any>) => void;
        "onInternalFocusCell"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        "onInternalPaste"?: (event: CustomEvent<any>) => void;
        /**
          * Range data apply
         */
        "onInternalRangeDataApply"?: (event: CustomEvent<Edition.BeforeRangeSaveDataDetails>) => void;
        /**
          * Selection range changed
         */
        "onInternalSelectionChanged"?: (event: CustomEvent<Selection.ChangedRange>) => void;
        "onSetEdit"?: (event: CustomEvent<string|boolean>) => void;
        "onUnregister"?: (event: CustomEvent<any>) => void;
        "range"?: boolean;
        "readonly"?: boolean;
        "selectionFocus"?: Selection.Cell;
        "selectionRange"?: Selection.RangeArea;
        /**
          * Dynamic stores
         */
        "selectionStore"?: ObservableMap<Selection.SelectionStoreState>;
    }
    interface RevogrScrollVirtual {
        "dimension"?: RevoGrid.DimensionType;
        "dimensionStore"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        "onScrollVirtual"?: (event: CustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
        "viewportStore"?: ObservableMap<RevoGrid.ViewportState>;
    }
    interface RevogrTempRange {
        "dimensionCol"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        "dimensionRow"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        /**
          * Dynamic stores
         */
        "selectionStore"?: ObservableMap<Selection.SelectionStoreState>;
    }
    interface RevogrViewport {
        "columnStores"?: {[T in RevoGrid.DimensionCols]: ObservableMap<DataSourceState<RevoGrid.ColumnRegular, RevoGrid.DimensionCols>>};
        "dimensions"?: {[T in RevoGrid.MultiDimensionType]: ObservableMap<RevoGrid.DimensionSettingsState>};
        /**
          * Custom editors register
         */
        "editors"?: Edition.Editors;
        "onInitialRowDragStart"?: (event: CustomEvent<{pos: RevoGrid.PositionItem, text: string}>) => void;
        "onSetDimensionSize"?: (event: CustomEvent<{type: RevoGrid.MultiDimensionType, sizes: RevoGrid.ViewSettingSizeProp}>) => void;
        "onSetViewportCoordinate"?: (event: CustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
        "onSetViewportSize"?: (event: CustomEvent<RevoGrid.ViewPortResizeEvent>) => void;
        "range"?: boolean;
        "readonly"?: boolean;
        "resize"?: boolean;
        "rowClass"?: string;
        "rowStores"?: {[T in RevoGrid.DimensionRows]: ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>};
        "uuid"?: string|null;
        "viewports"?: {[T in RevoGrid.MultiDimensionType]: ObservableMap<RevoGrid.ViewportState>};
    }
    interface RevogrViewportScroll {
        "contentHeight"?: number;
        "contentWidth"?: number;
        "onResizeViewport"?: (event: CustomEvent<RevoGrid.ViewPortResizeEvent>) => void;
        "onScrollViewport"?: (event: CustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
    }
    interface IntrinsicElements {
        "revo-grid": RevoGrid;
        "revogr-clipboard": RevogrClipboard;
        "revogr-data": RevogrData;
        "revogr-edit": RevogrEdit;
        "revogr-focus": RevogrFocus;
        "revogr-header": RevogrHeader;
        "revogr-order-editor": RevogrOrderEditor;
        "revogr-overlay-selection": RevogrOverlaySelection;
        "revogr-scroll-virtual": RevogrScrollVirtual;
        "revogr-temp-range": RevogrTempRange;
        "revogr-viewport": RevogrViewport;
        "revogr-viewport-scroll": RevogrViewportScroll;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "revo-grid": LocalJSX.RevoGrid & JSXBase.HTMLAttributes<HTMLRevoGridElement>;
            "revogr-clipboard": LocalJSX.RevogrClipboard & JSXBase.HTMLAttributes<HTMLRevogrClipboardElement>;
            "revogr-data": LocalJSX.RevogrData & JSXBase.HTMLAttributes<HTMLRevogrDataElement>;
            "revogr-edit": LocalJSX.RevogrEdit & JSXBase.HTMLAttributes<HTMLRevogrEditElement>;
            "revogr-focus": LocalJSX.RevogrFocus & JSXBase.HTMLAttributes<HTMLRevogrFocusElement>;
            "revogr-header": LocalJSX.RevogrHeader & JSXBase.HTMLAttributes<HTMLRevogrHeaderElement>;
            "revogr-order-editor": LocalJSX.RevogrOrderEditor & JSXBase.HTMLAttributes<HTMLRevogrOrderEditorElement>;
            "revogr-overlay-selection": LocalJSX.RevogrOverlaySelection & JSXBase.HTMLAttributes<HTMLRevogrOverlaySelectionElement>;
            "revogr-scroll-virtual": LocalJSX.RevogrScrollVirtual & JSXBase.HTMLAttributes<HTMLRevogrScrollVirtualElement>;
            "revogr-temp-range": LocalJSX.RevogrTempRange & JSXBase.HTMLAttributes<HTMLRevogrTempRangeElement>;
            "revogr-viewport": LocalJSX.RevogrViewport & JSXBase.HTMLAttributes<HTMLRevogrViewportElement>;
            "revogr-viewport-scroll": LocalJSX.RevogrViewportScroll & JSXBase.HTMLAttributes<HTMLRevogrViewportScrollElement>;
        }
    }
}
