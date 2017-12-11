"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const progress_component_1 = require("./progress.component");
const template_1 = require("ng2-qgrid/template");
class ProgressModule {
}
ProgressModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    progress_component_1.ProgressComponent
                ],
                exports: [
                    progress_component_1.ProgressComponent
                ],
                imports: [
                    template_1.TemplateModule
                ],
                providers: []
            },] },
];
/** @nocollapse */
ProgressModule.ctorParameters = () => [];
exports.ProgressModule = ProgressModule;
//# sourceMappingURL=progress.module.js.map