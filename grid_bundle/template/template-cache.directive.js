"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const template_cache_service_1 = require("./template-cache.service");
const template_host_service_1 = require("ng2-qgrid/template/template-host.service");
class TemplateCacheDirective {
    constructor(templateCache, templateRef, templateHost) {
        this.templateCache = templateCache;
        this.templateRef = templateRef;
        this.templateHost = templateHost;
        this.key = '';
    }
    ngOnInit() {
        if (this.templateHost) {
            this.templateCache.put(`${this.key}-${this.templateHost.key}`, this.templateRef);
        }
        else {
            this.templateCache.put(this.key, this.templateRef);
        }
    }
}
TemplateCacheDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'ng-template[for]'
            },] },
];
/** @nocollapse */
TemplateCacheDirective.ctorParameters = () => [
    { type: template_cache_service_1.TemplateCacheService, },
    { type: core_1.TemplateRef, },
    { type: template_host_service_1.TemplateHostService, decorators: [{ type: core_1.Optional },] },
];
TemplateCacheDirective.propDecorators = {
    'key': [{ type: core_1.Input, args: ['for',] },],
};
exports.TemplateCacheDirective = TemplateCacheDirective;
//# sourceMappingURL=template-cache.directive.js.map