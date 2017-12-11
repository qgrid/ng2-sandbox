"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const component_1 = require("ng2-qgrid/infrastructure/component");
const table_core_service_1 = require("./table-core.service");
class TableCoreComponent {
    constructor(root, table) {
        this.root = root;
        this.table = table;
        this.pin = null;
    }
    ngOnInit() {
        if (!this.pin) {
            this.pin = null;
        }
        this.table.pin = this.pin;
    }
    get visibility() {
        return this.model.visibility();
    }
    get model() {
        return this.root.model;
    }
}
TableCoreComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-core-table',
                templateUrl: './table-core.component.html',
                providers: [
                    table_core_service_1.TableCoreService
                ]
            },] },
];
/** @nocollapse */
TableCoreComponent.ctorParameters = () => [
    { type: component_1.RootService, },
    { type: table_core_service_1.TableCoreService, },
];
TableCoreComponent.propDecorators = {
    'pin': [{ type: core_1.Input },],
};
exports.TableCoreComponent = TableCoreComponent;
//# sourceMappingURL=table-core.component.js.map