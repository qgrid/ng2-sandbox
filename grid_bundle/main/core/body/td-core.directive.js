"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const definition_1 = require("ng2-qgrid/core/definition");
const view_core_service_1 = require("../view/view-core.service");
const table_core_service_1 = require("../table/table-core.service");
const component_1 = require("ng2-qgrid/infrastructure/component");
const cell_1 = require("ng2-qgrid/main/core/cell");
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
const tr_core_directive_1 = require("../row/tr-core.directive");
class TdCoreDirective {
    constructor($view, root, viewContainerRef, cellService, table, tr, element) {
        this.$view = $view;
        this.root = root;
        this.viewContainerRef = viewContainerRef;
        this.cellService = cellService;
        this.table = table;
        this.tr = tr;
        this.element = null;
        this.$implicit = this;
        this.element = element.nativeElement.parentNode;
    }
    ngOnInit() {
        const column = this.column;
        const element = this.element;
        this.root.bag.body.addCell(this);
        element.classList.add(`${definition_1.GRID_PREFIX}-${column.key}`);
        element.classList.add(`${definition_1.GRID_PREFIX}-${column.type}`);
        if (column.editor) {
            element.classList.add(`${definition_1.GRID_PREFIX}-${column.editor}`);
        }
        this.mode('init');
    }
    mode(value) {
        switch (value) {
            case 'view':
            case 'init': {
                const link = this.cellService.build('body', this.column, 'view');
                link(this.viewContainerRef, this);
                if (value !== 'init') {
                    this.element.classList.remove(`${definition_1.GRID_PREFIX}-edit`);
                }
                break;
            }
            case 'edit':
                {
                    const link = this.cellService.build('body', this.column, 'edit');
                    link(this.viewContainerRef, this);
                    this.element.classList.add(`${definition_1.GRID_PREFIX}-edit`);
                }
                break;
            default:
                throw new infrastructure_1.AppError('td.core', `Invalid mode ${value}`);
        }
    }
    get value() {
        const column = this.column;
        const row = this.row;
        return this.$view.body.value(row, column);
    }
    set value(value) {
        const column = this.column;
        const row = this.row;
        this.$view.body.value(row, column, value);
    }
    get label() {
        const column = this.column;
        const row = this.row;
        return this.$view.body.label(row, column);
    }
    set label(label) {
        const column = this.column;
        const row = this.row;
        this.$view.body.label(row, column, label);
    }
    get column() {
        return this.columnView.model;
    }
    get columnIndex() {
        return this.columnView.index;
    }
    get row() {
        return this.tr.model;
    }
    get rowIndex() {
        return this.tr.index;
    }
    ngOnDestroy() {
        this.root.bag.body.deleteCell(this);
    }
}
TdCoreDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[q-grid-core-td]',
            },] },
];
/** @nocollapse */
TdCoreDirective.ctorParameters = () => [
    { type: view_core_service_1.ViewCoreService, },
    { type: component_1.RootService, },
    { type: core_1.ViewContainerRef, },
    { type: cell_1.CellService, },
    { type: table_core_service_1.TableCoreService, },
    { type: tr_core_directive_1.TrCoreDirective, },
    { type: core_1.ElementRef, },
];
TdCoreDirective.propDecorators = {
    'columnView': [{ type: core_1.Input, args: ['q-grid-core-td',] },],
};
exports.TdCoreDirective = TdCoreDirective;
//# sourceMappingURL=td-core.directive.js.map