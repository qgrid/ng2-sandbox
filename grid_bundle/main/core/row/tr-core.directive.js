"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const view_core_service_1 = require("../view/view-core.service");
const component_1 = require("ng2-qgrid/infrastructure/component");
class TrCoreDirective {
    constructor($view, root, elementRef) {
        this.$view = $view;
        this.root = root;
        this.elementRef = elementRef;
        this.element = elementRef.nativeElement;
    }
    ngOnInit() {
        this.root.bag[this.source].addRow(this);
    }
    ngOnDestroy() {
        this.root.bag[this.source].deleteRow(this);
    }
}
TrCoreDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[q-grid-core-tr]'
            },] },
];
/** @nocollapse */
TrCoreDirective.ctorParameters = () => [
    { type: view_core_service_1.ViewCoreService, },
    { type: component_1.RootService, },
    { type: core_1.ElementRef, },
];
TrCoreDirective.propDecorators = {
    'index': [{ type: core_1.Input, args: ['q-grid-core-row-index',] },],
    'model': [{ type: core_1.Input, args: ['q-grid-core-tr',] },],
    'source': [{ type: core_1.Input, args: ['q-grid-core-source',] },],
};
exports.TrCoreDirective = TrCoreDirective;
//# sourceMappingURL=tr-core.directive.js.map