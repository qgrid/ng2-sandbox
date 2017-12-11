"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const component_1 = require("ng2-qgrid/infrastructure/component");
class AutoFocusDirective {
    constructor(root, element) {
        this.root = root;
        this.element = element;
        this.delay = 100;
        this.isHandled = false;
    }
    ngDoCheck() {
        if (this.isHandled) {
            return;
        }
        if (this.table.body.rowCount(0)) {
            const key = Object.keys(this.markup).find(p => p.startsWith('body'));
            const element = this.markup[key];
            if (element) {
                this.element.nativeElement.focus();
            }
            const focusIndex = this.table.data
                .columns()
                .findIndex(c => c.canFocus);
            this.model.focus({
                rowIndex: 0,
                columnIndex: focusIndex
            });
            this.isHandled = true;
        }
    }
    get markup() {
        return this.root.markup;
    }
    get model() {
        return this.root.model;
    }
    get table() {
        return this.root.table;
    }
}
AutoFocusDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[q-grid-autofocus]'
            },] },
];
/** @nocollapse */
AutoFocusDirective.ctorParameters = () => [
    { type: component_1.RootService, },
    { type: core_1.ElementRef, },
];
AutoFocusDirective.propDecorators = {
    'delay': [{ type: core_1.Input, args: ['q-grid-autofocus',] },],
};
exports.AutoFocusDirective = AutoFocusDirective;
//# sourceMappingURL=autofocus.directive.js.map