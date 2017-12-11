"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
class RaiseDirective {
    constructor(element) {
        this.element = element;
        this.type = 'click';
    }
    ngAfterViewInit() {
        const event = new Event(this.type);
        this.element.nativeElement.dispatchEvent(event);
    }
}
RaiseDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[q-grid-raise]'
            },] },
];
/** @nocollapse */
RaiseDirective.ctorParameters = () => [
    { type: core_1.ElementRef, },
];
RaiseDirective.propDecorators = {
    'type': [{ type: core_1.Input, args: ['q-grid-raise',] },],
};
exports.RaiseDirective = RaiseDirective;
//# sourceMappingURL=raise.directive.js.map