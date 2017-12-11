"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const model_component_1 = require("ng2-qgrid/infrastructure/component/model.component");
const root_service_1 = require("ng2-qgrid/infrastructure/component/root.service");
const column_list_service_1 = require("./column-list.service");
class ColumnListComponent extends model_component_1.ModelComponent {
    constructor(root) {
        super(root);
        this.columnListGeneration = null;
        this.models = ['columnList'];
    }
}
ColumnListComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-columns',
                template: '<ng-content></ng-content>',
                providers: [column_list_service_1.ColumnListService]
            },] },
];
/** @nocollapse */
ColumnListComponent.ctorParameters = () => [
    { type: root_service_1.RootService, },
];
ColumnListComponent.propDecorators = {
    'columnListGeneration': [{ type: core_1.Input, args: ['generation',] },],
};
exports.ColumnListComponent = ColumnListComponent;
//# sourceMappingURL=column-list.component.js.map