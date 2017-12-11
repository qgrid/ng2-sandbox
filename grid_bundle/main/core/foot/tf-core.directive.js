"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const definition_1 = require("ng2-qgrid/core/definition");
const view_core_service_1 = require("../view/view-core.service");
const component_1 = require("ng2-qgrid/infrastructure/component");
const cell_service_1 = require("../cell/cell.service");
const table_core_service_1 = require("../table/table-core.service");
const tr_core_directive_1 = require("../row/tr-core.directive");
class TfCoreDirective {
    constructor($view, root, cellService, viewContainerRef, table, tr, element) {
        this.$view = $view;
        this.root = root;
        this.cellService = cellService;
        this.viewContainerRef = viewContainerRef;
        this.table = table;
        this.tr = tr;
        this.element = null;
        this.$implicit = this;
        this.element = element.nativeElement.parentNode;
    }
    ngOnInit() {
        const column = this.column;
        const element = this.element;
        this.root.bag.foot.addCell(this);
        element.classList.add(`${definition_1.GRID_PREFIX}-${column.key}`);
        element.classList.add(`${definition_1.GRID_PREFIX}-${column.type}`);
        if (column.editor) {
            element.classList.add(`${definition_1.GRID_PREFIX}-${column.editor}`);
        }
        const link = this.cellService.build('foot', this.column);
        link(this.viewContainerRef, this);
    }
    get value() {
        const column = this.column;
        return this.$view.foot.value(column);
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
        this.root.bag.foot.deleteCell(this);
    }
}
TfCoreDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[q-grid-core-tf]'
            },] },
];
/** @nocollapse */
TfCoreDirective.ctorParameters = () => [
    { type: view_core_service_1.ViewCoreService, },
    { type: component_1.RootService, },
    { type: cell_service_1.CellService, },
    { type: core_1.ViewContainerRef, },
    { type: table_core_service_1.TableCoreService, },
    { type: tr_core_directive_1.TrCoreDirective, },
    { type: core_1.ElementRef, },
];
TfCoreDirective.propDecorators = {
    'columnView': [{ type: core_1.Input, args: ['q-grid-core-tf',] },],
};
exports.TfCoreDirective = TfCoreDirective;
//# sourceMappingURL=tf-core.directive.js.map