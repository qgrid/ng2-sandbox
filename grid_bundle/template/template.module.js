"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const template_directive_1 = require("./template.directive");
const template_link_directive_1 = require("./template-link.directive");
const template_cache_directive_1 = require("./template-cache.directive");
class TemplateModule {
}
TemplateModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    template_directive_1.TemplateDirective,
                    template_link_directive_1.TemplateLinkDirective,
                    template_cache_directive_1.TemplateCacheDirective
                ],
                exports: [
                    template_directive_1.TemplateDirective,
                    template_link_directive_1.TemplateLinkDirective,
                    template_cache_directive_1.TemplateCacheDirective
                ],
                imports: [],
                providers: []
            },] },
];
/** @nocollapse */
TemplateModule.ctorParameters = () => [];
exports.TemplateModule = TemplateModule;
//# sourceMappingURL=template.module.js.map