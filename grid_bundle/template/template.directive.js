"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const template_link_service_1 = require("./template-link.service");
const template_cache_service_1 = require("./template-cache.service");
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
const utility_1 = require("ng2-qgrid/core/utility");
class TemplateDirective {
    constructor(templateLink, templateCache, viewContainerRef) {
        this.templateLink = templateLink;
        this.templateCache = templateCache;
        this.viewContainerRef = viewContainerRef;
        this.key = '';
        this.context = null;
        this.template = null;
    }
    ngDoCheck() {
        const template = this.find(this.key);
        if (template !== this.template) {
            this.template = template;
            if (this.viewRef) {
                this.viewContainerRef.clear();
            }
            this.viewRef = this.viewContainerRef.createEmbeddedView(template, this.context);
        }
    }
    find(keys) {
        if (utility_1.isString(keys)) {
            const template = this.templateCache.get(keys) || this.templateLink.get(keys);
            return template || null;
        }
        if (utility_1.isArray(keys)) {
            for (const key of keys) {
                const template = this.find(key);
                if (template) {
                    return template;
                }
            }
            return null;
        }
        throw new infrastructure_1.AppError('template.directive', 'Invalid key type');
    }
}
TemplateDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'ng-container[key]'
            },] },
];
/** @nocollapse */
TemplateDirective.ctorParameters = () => [
    { type: template_link_service_1.TemplateLinkService, },
    { type: template_cache_service_1.TemplateCacheService, },
    { type: core_1.ViewContainerRef, },
];
TemplateDirective.propDecorators = {
    'key': [{ type: core_1.Input },],
    'context': [{ type: core_1.Input },],
};
exports.TemplateDirective = TemplateDirective;
//# sourceMappingURL=template.directive.js.map