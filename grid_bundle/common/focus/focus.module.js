"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const focus_directive_1 = require("./focus.directive");
const autofocus_directive_1 = require("./autofocus.directive");
const blur_directive_1 = require("./blur.directive");
class FocusModule {
}
FocusModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    focus_directive_1.FocusDirective,
                    autofocus_directive_1.AutoFocusDirective,
                    blur_directive_1.BlurDirective
                ],
                exports: [
                    focus_directive_1.FocusDirective,
                    autofocus_directive_1.AutoFocusDirective,
                    blur_directive_1.BlurDirective
                ],
                imports: [],
                providers: []
            },] },
];
/** @nocollapse */
FocusModule.ctorParameters = () => [];
exports.FocusModule = FocusModule;
//# sourceMappingURL=focus.module.js.map