"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const title_component_1 = require("./title.component");
const template_module_1 = require("ng2-qgrid/template/template.module");
class TitleModule {
}
TitleModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [title_component_1.TitleComponent],
                exports: [title_component_1.TitleComponent],
                imports: [template_module_1.TemplateModule],
                providers: []
            },] },
];
/** @nocollapse */
TitleModule.ctorParameters = () => [];
exports.TitleModule = TitleModule;
//# sourceMappingURL=title.module.js.map