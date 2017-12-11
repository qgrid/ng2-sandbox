"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const definition_1 = require("ng2-qgrid/core/definition");
const component_1 = require("ng2-qgrid/infrastructure/component");
const table_core_service_1 = require("../table/table-core.service");
const cell_service_1 = require("../cell/cell.service");
const view_core_service_1 = require("../view/view-core.service");
const tr_core_directive_1 = require("../row/tr-core.directive");
class ThCoreDirective {
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
        this.root.bag.head.addCell(this);
        element.classList.add(`${definition_1.GRID_PREFIX}-${column.key}`);
        element.classList.add(`${definition_1.GRID_PREFIX}-${column.type}`);
        if (column.editor) {
            element.classList.add(`${definition_1.GRID_PREFIX}-${column.editor}`);
        }
        const link = this.cellService.build('head', this.column, 'view');
        link(this.viewContainerRef, this);
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
        this.root.bag.head.deleteCell(this);
    }
}
ThCoreDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[q-grid-core-th]'
            },] },
];
/** @nocollapse */
ThCoreDirective.ctorParameters = () => [
    { type: view_core_service_1.ViewCoreService, },
    { type: component_1.RootService, },
    { type: core_1.ViewContainerRef, },
    { type: cell_service_1.CellService, },
    { type: table_core_service_1.TableCoreService, },
    { type: tr_core_directive_1.TrCoreDirective, },
    { type: core_1.ElementRef, },
];
ThCoreDirective.propDecorators = {
    'columnView': [{ type: core_1.Input, args: ['q-grid-core-th',] },],
};
exports.ThCoreDirective = ThCoreDirective;
//# sourceMappingURL=th-core.directive.js.map