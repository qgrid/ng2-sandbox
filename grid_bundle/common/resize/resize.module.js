"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const resize_directive_1 = require("./resize.directive");
class ResizeModule {
}
ResizeModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    resize_directive_1.ResizeDirective
                ],
                exports: [
                    resize_directive_1.ResizeDirective
                ],
                imports: [],
                providers: []
            },] },
];
/** @nocollapse */
ResizeModule.ctorParameters = () => [];
exports.ResizeModule = ResizeModule;
//# sourceMappingURL=resize.module.js.map