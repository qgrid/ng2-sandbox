"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const utility_1 = require("ng2-qgrid/core/utility");
class BlurDirective {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.onBlur = utility_1.noop;
        this.selector = 'input';
    }
    ngOnInit() {
        const element = this.renderer.selectRootElement(this.selector);
        this.renderer.listen(element, 'blur', this.onBlur);
    }
}
BlurDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[q-grid-on-blur]'
            },] },
];
/** @nocollapse */
BlurDirective.ctorParameters = () => [
    { type: core_1.Renderer2, },
    { type: core_1.ElementRef, },
];
BlurDirective.propDecorators = {
    'onBlur': [{ type: core_1.Input, args: ['q-grid-on-blur',] },],
    'selector': [{ type: core_1.Input, args: ['q-grid-on-blur-selector',] },],
};
exports.BlurDirective = BlurDirective;
//# sourceMappingURL=blur.directive.js.map