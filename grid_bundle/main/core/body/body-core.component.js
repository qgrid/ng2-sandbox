"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const event_listener_1 = require("ng2-qgrid/core/infrastructure/event.listener");
const event_manager_1 = require("ng2-qgrid/core/infrastructure/event.manager");
const component_1 = require("ng2-qgrid/infrastructure/component");
const path_1 = require("ng2-qgrid/core/path");
const view_core_service_1 = require("../view/view-core.service");
const table_core_service_1 = require("../table/table-core.service");
class BodyCoreComponent extends component_1.NgComponent {
    constructor(element, $view, $table, root) {
        super();
        this.$view = $view;
        this.$table = $table;
        this.root = root;
        this.element = null;
        this.rangeStartCell = null;
        this.scrollContext = {
            top: 0,
            left: 0
        };
        this.element = element.nativeElement;
        this.scrollContext = {
            top: this.element.scrollTop,
            left: this.element.scrollLeft
        };
    }
    ngOnInit() {
        super.ngOnInit();
        const listener = new event_listener_1.EventListener(this.element, new event_manager_1.EventManager(this, this.root.applyFactory(null, 'sync')));
        this.using(listener.on('scroll', this.onScroll));
        this.using(listener.on('click', this.onClick));
        this.using(listener.on('mousedown', this.onMouseDown));
        this.using(listener.on('mouseup', this.onMouseUp));
        this.using(listener.on('mousemove', this.onMouseMove));
        this.using(listener.on('mouseleave', this.onMouseLeave));
    }
    onScroll() {
        const element = this.element;
        const scroll = this.model.scroll;
        const oldValue = this.scrollContext;
        const newValue = {};
        if (oldValue.top !== element.scrollTop) {
            oldValue.top = newValue.top = element.scrollTop;
        }
        if (oldValue.left !== element.scrollLeft) {
            oldValue.left = newValue.left = element.scrollLeft;
        }
        if (Object.keys(newValue)) {
            scroll(newValue, { source: 'body.core' });
        }
    }
    onClick(e) {
        const pathFinder = new path_1.PathService(this.root.bag.body);
        const cell = pathFinder.cell(e.path);
        if (cell) {
            this.select(cell);
            this.navigate(cell);
            if (cell.column.editorOptions.trigger === 'click' && this.$view.edit.cell.enter.canExecute(cell)) {
                this.$view.edit.cell.enter.execute(cell);
            }
        }
    }
    onMouseDown(e) {
        const selectionState = this.selection;
        if (selectionState.area !== 'body') {
            return;
        }
        const pathFinder = new path_1.PathService(this.root.bag.body);
        const cell = pathFinder.cell(e.path);
        const editMode = this.model.edit().mode;
        if (selectionState.mode === 'range') {
            if (!editMode) {
                this.rangeStartCell = cell;
                if (this.rangeStartCell) {
                    this.$view.selection.selectRange(this.rangeStartCell, null, 'body');
                }
            }
        }
    }
    onMouseMove(e) {
        const pathFinder = new path_1.PathService(this.root.bag.body);
        const row = pathFinder.row(e.path);
        if (row) {
            const index = row.index;
            const highlightRow = this.$view.highlight.row;
            if (highlightRow.canExecute(index)) {
                this.model
                    .highlight()
                    .rows
                    .filter(i => i !== index)
                    .forEach(i => highlightRow.execute(i, false));
                highlightRow.execute(index, true);
            }
        }
        if (this.selection.mode === 'range') {
            const startCell = this.rangeStartCell;
            const endCell = pathFinder.cell(e.path);
            if (startCell && endCell) {
                this.$view.selection.selectRange(startCell, endCell, 'body');
                this.navigate(endCell);
            }
        }
    }
    onMouseLeave() {
        const highlightRow = this.$view.highlight.row;
        this.model
            .highlight()
            .rows
            .forEach(i => highlightRow.execute(i, false));
    }
    onMouseUp() {
        if (this.selection.mode === 'range') {
            this.rangeStartCell = null;
        }
    }
    select(cell) {
        const selectionState = this.selection;
        if (cell.column.type !== 'select' &&
            (selectionState.area !== 'body' || selectionState.mode === 'range')) {
            return;
        }
        const editMode = this.model.edit().mode;
        switch (selectionState.unit) {
            case 'row': {
                if (cell.column.type === 'select' && cell.column.editorOptions.trigger === 'focus') {
                    const focusState = this.model.focus();
                    if (focusState.rowIndex !== cell.rowIndex || focusState.columnIndex !== cell.columnIndex) {
                        this.$view.selection.toggleRow.execute(cell.row, 'body');
                    }
                }
                else if (!editMode && cell.column.canEdit) {
                    this.$view.selection.toggleRow.execute(cell.row, 'body');
                }
                break;
            }
            case 'column': {
                if (!editMode) {
                    this.$view.selection.toggleColumn.execute(cell.column, 'body');
                }
                break;
            }
            case 'mix': {
                if (cell.column.type === 'row-indicator') {
                    this.$view.selection.toggleCell.execute(cell, 'body');
                }
            }
            default:
                break;
        }
    }
    navigate(cell) {
        const focus = this.$view.nav.focus;
        if (focus.canExecute(cell)) {
            focus.execute(cell);
        }
    }
    get selection() {
        return this.model.selection();
    }
    get model() {
        return this.root.model;
    }
    columnId(index, item) {
        return item.model.key;
    }
    rowId(index) {
        return index;
    }
}
BodyCoreComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'tbody[q-grid-core-body]',
                templateUrl: './body-core.component.html'
            },] },
];
/** @nocollapse */
BodyCoreComponent.ctorParameters = () => [
    { type: core_1.ElementRef, },
    { type: view_core_service_1.ViewCoreService, },
    { type: table_core_service_1.TableCoreService, },
    { type: component_1.RootService, },
];
exports.BodyCoreComponent = BodyCoreComponent;
//# sourceMappingURL=body-core.component.js.map