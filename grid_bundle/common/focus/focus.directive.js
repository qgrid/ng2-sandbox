"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
class FocusDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        const element = this.selector
            ? this.elementRef.nativeElement.querySelector(this.selector)
            : this.elementRef.nativeElement;
        if (!element) {
            throw new infrastructure_1.AppError('focus.directive', `Element ${this.selector} is not found`);
        }
        // we need a small timeout to wait, for example, position directive
        // in other case it will scroll to element before layout
        setTimeout(() => element.focus(), 10);
    }
}
FocusDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[q-grid-focus]'
            },] },
];
/** @nocollapse */
FocusDirective.ctorParameters = () => [
    { type: core_1.ElementRef, },
];
FocusDirective.propDecorators = {
    'selector': [{ type: core_1.Input, args: ['q-grid-focus',] },],
};
exports.FocusDirective = FocusDirective;
//# sourceMappingURL=focus.directive.js.map