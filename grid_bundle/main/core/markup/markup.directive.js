"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const root_service_1 = require("../../../infrastructure/component/root.service");
const table_core_service_1 = require("../table/table-core.service");
class MarkupDirective {
    constructor(root, element, table) {
        this.root = root;
        this.element = element;
        this.table = table;
        this.name = '';
    }
    ngOnInit() {
        this.root.markup[this.getName()] = this.element.nativeElement;
    }
    ngOnDestroy() {
        delete this.root.markup[this.getName()];
    }
    getName() {
        if (this.table && this.table.pin) {
            return `${this.name}-${this.table.pin}`;
        }
        return this.name;
    }
}
MarkupDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[q-grid-markup]'
            },] },
];
/** @nocollapse */
MarkupDirective.ctorParameters = () => [
    { type: root_service_1.RootService, },
    { type: core_1.ElementRef, },
    { type: table_core_service_1.TableCoreService, },
];
MarkupDirective.propDecorators = {
    'name': [{ type: core_1.Input, args: ['q-grid-markup',] },],
};
exports.MarkupDirective = MarkupDirective;
//# sourceMappingURL=markup.directive.js.map