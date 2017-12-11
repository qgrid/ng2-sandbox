"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const command_1 = require("ng2-qgrid/core/command");
const plugin_component_1 = require("../plugin.component");
const root_service_1 = require("ng2-qgrid/infrastructure/component/root.service");
class PagerComponent extends plugin_component_1.PluginComponent {
    constructor(root) {
        super(root);
        this.next = new command_1.Command({
            execute: () => (this.current = this.current + 1),
            canExecute: () => (this.current + 1) * this.size < this.total
        });
        this.prev = new command_1.Command({
            execute: () => (this.current = this.current - 1),
            canExecute: () => this.current > 0
        });
        this.models = ['pagination'];
    }
    get size() {
        return this.model.pagination().size;
    }
    set size(value) {
        this.model.pagination({ size: value, current: 0 });
    }
    get sizeList() {
        return this.model.pagination().sizeList;
    }
    get current() {
        return this.model.pagination().current;
    }
    set current(value) {
        this.model.pagination({ current: value });
    }
    get from() {
        return Math.min(this.total, this.current * this.size + 1);
    }
    get to() {
        return Math.min(this.total, (this.current + 1) * this.size);
    }
    get total() {
        return this.model.pagination().count;
    }
    get totalPages() {
        return Math.max(1, Math.ceil(this.total / this.size));
    }
    get scroll() {
        return this.model.scroll();
    }
}
PagerComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-pager',
                templateUrl: './pager.component.html'
            },] },
];
/** @nocollapse */
PagerComponent.ctorParameters = () => [
    { type: root_service_1.RootService, decorators: [{ type: core_1.Optional },] },
];
PagerComponent.propDecorators = {
    'paginationSize': [{ type: core_1.Input, args: ['size',] },],
    'paginationSizeList': [{ type: core_1.Input, args: ['sizeList',] },],
};
exports.PagerComponent = PagerComponent;
//# sourceMappingURL=pager.component.js.map