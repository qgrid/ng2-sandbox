"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const services_1 = require("ng2-qgrid/core/services");
const utility_1 = require("ng2-qgrid/core/utility");
const services_2 = require("ng2-qgrid/core/services");
const component_1 = require("ng2-qgrid/infrastructure/component");
class ColumnListService {
    constructor(root) {
        this.root = root;
    }
    copy(target, source) {
        Object.keys(source)
            .filter(key => !utility_1.isUndefined(source[key]) && key !== 'value')
            .forEach(key => {
            const value = source[key];
            const accessor = services_1.compile(key);
            const targetValue = accessor(target);
            const parse = services_2.parseFactory(services_2.getType(targetValue));
            const sourceValue = parse(value);
            accessor(target, sourceValue);
        });
    }
    add(column) {
        const columnList = this.root.model.columnList;
        columnList({
            columns: columnList().columns.concat([column])
        });
    }
    register(column) {
        const columnList = this.root.model.columnList;
        const reference = utility_1.clone(columnList().columns);
        reference[column.type] = column;
        columnList({ reference });
    }
}
ColumnListService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ColumnListService.ctorParameters = () => [
    { type: component_1.RootService, },
];
exports.ColumnListService = ColumnListService;
//# sourceMappingURL=column-list.service.js.map