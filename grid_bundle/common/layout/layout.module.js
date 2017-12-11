"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const position_directive_1 = require("./position.directive");
class LayoutModule {
}
LayoutModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    position_directive_1.PositionDirective
                ],
                exports: [
                    position_directive_1.PositionDirective
                ],
                imports: [],
                providers: []
            },] },
];
/** @nocollapse */
LayoutModule.ctorParameters = () => [];
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map