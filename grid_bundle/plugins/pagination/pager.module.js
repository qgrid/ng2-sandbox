"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const pager_component_1 = require("./pager.component");
const template_module_1 = require("ng2-qgrid/template/template.module");
class PagerModule {
}
PagerModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    pager_component_1.PagerComponent
                ],
                exports: [
                    pager_component_1.PagerComponent
                ],
                imports: [
                    template_module_1.TemplateModule
                ],
                providers: []
            },] },
];
/** @nocollapse */
PagerModule.ctorParameters = () => [];
exports.PagerModule = PagerModule;
//# sourceMappingURL=pager.module.js.map