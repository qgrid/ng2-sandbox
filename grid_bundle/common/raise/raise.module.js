"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const raise_directive_1 = require("./raise.directive");
class RaiseModule {
}
RaiseModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    raise_directive_1.RaiseDirective
                ],
                exports: [
                    raise_directive_1.RaiseDirective
                ],
                imports: [],
                providers: []
            },] },
];
/** @nocollapse */
RaiseModule.ctorParameters = () => [];
exports.RaiseModule = RaiseModule;
//# sourceMappingURL=raise.module.js.map