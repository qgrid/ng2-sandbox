"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const view_core_service_1 = require("../view/view-core.service");
const table_core_service_1 = require("../table/table-core.service");
class HeadCoreComponent {
    constructor($view, $table) {
        this.$view = $view;
        this.$table = $table;
    }
    columnId(index, item) {
        return item.model.key;
    }
    rowId(index) {
        return index;
    }
}
HeadCoreComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'thead[q-grid-core-head]',
                templateUrl: './head-core.component.html'
            },] },
];
/** @nocollapse */
HeadCoreComponent.ctorParameters = () => [
    { type: view_core_service_1.ViewCoreService, },
    { type: table_core_service_1.TableCoreService, },
];
exports.HeadCoreComponent = HeadCoreComponent;
//# sourceMappingURL=head-core.component.js.map