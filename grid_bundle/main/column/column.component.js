"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const utility_1 = require("ng2-qgrid/core/utility");
const column_list_service_1 = require("ng2-qgrid/main/column/column-list.service");
const columnService = require("ng2-qgrid/core/column/column.service");
const column_factory_1 = require("ng2-qgrid/core/column/column.factory");
const component_1 = require("ng2-qgrid/infrastructure/component");
const template_host_service_1 = require("ng2-qgrid/template/template-host.service");
class ColumnComponent {
    constructor(root, columnList, templateHost) {
        this.root = root;
        this.columnList = columnList;
        this.templateHost = templateHost;
    }
    ngOnInit() {
        const withKey = !utility_1.isUndefined(this.key);
        if (!withKey) {
            if (!utility_1.isUndefined(this.editor)) {
                this.key = `$default.${this.editor}`;
            }
            else if (!utility_1.isUndefined(this.type)) {
                this.key = `$default.${this.type}`;
            }
            else {
                this.key = '$default';
            }
        }
        const model = this.root.model;
        const createColumn = column_factory_1.columnFactory(model);
        const data = model.data;
        const dataState = data();
        const columns = utility_1.clone(dataState.columns);
        let column = columnService.find(columns, this.key);
        if (column) {
            createColumn(this.type || 'text', column);
        }
        else {
            column = createColumn(this.type || 'text').model;
            column.key = this.key;
            columns.source = 'template';
            columns.push(column);
        }
        this.templateHost.key = `cell-${column.type}-${column.key}.tpl.html`;
        this.columnList.copy(column, this);
        // HACK: to understand if need to pass {$row: row} instead of just row in cell.core.js
        if (!utility_1.isUndefined(this.value)) {
            column.$value = utility_1.isUndefined(this.value) ? null : this.value;
        }
        if (!utility_1.isUndefined(this.label)) {
            column.$label = utility_1.isUndefined(this.label) ? null : this.label;
        }
        if (withKey) {
            this.columnList.add(column);
        }
        else {
            const settings = Object.keys(this)
                .filter(key => !utility_1.isUndefined(this[key]) && column.hasOwnProperty(key))
                .reduce((memo, key) => {
                memo[key] = column[key];
                return memo;
            }, {});
            this.columnList.register(settings);
        }
    }
}
ColumnComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-column',
                template: '<ng-content></ng-content>',
                providers: [template_host_service_1.TemplateHostService]
            },] },
];
/** @nocollapse */
ColumnComponent.ctorParameters = () => [
    { type: component_1.RootService, },
    { type: column_list_service_1.ColumnListService, },
    { type: template_host_service_1.TemplateHostService, },
];
ColumnComponent.propDecorators = {
    'type': [{ type: core_1.Input },],
    'key': [{ type: core_1.Input },],
    'path': [{ type: core_1.Input },],
    'class': [{ type: core_1.Input },],
    'title': [{ type: core_1.Input },],
    'value': [{ type: core_1.Input },],
    'pin': [{ type: core_1.Input },],
    'aggregation': [{ type: core_1.Input },],
    'aggregationOptions': [{ type: core_1.Input },],
    'editor': [{ type: core_1.Input },],
    'editorOptions': [{ type: core_1.Input },],
    'format': [{ type: core_1.Input },],
    'symbol': [{ type: core_1.Input },],
    'code': [{ type: core_1.Input },],
    'width': [{ type: core_1.Input },],
    'minWidth': [{ type: core_1.Input },],
    'maxWidth': [{ type: core_1.Input },],
    'canEdit': [{ type: core_1.Input },],
    'canResize': [{ type: core_1.Input },],
    'canSort': [{ type: core_1.Input },],
    'canMove': [{ type: core_1.Input },],
    'canFilter': [{ type: core_1.Input },],
    'canHighlight': [{ type: core_1.Input },],
    'canFocus': [{ type: core_1.Input },],
    'isVisible': [{ type: core_1.Input },],
    'index': [{ type: core_1.Input },],
    'label': [{ type: core_1.Input },],
};
exports.ColumnComponent = ColumnComponent;
//# sourceMappingURL=column.component.js.map