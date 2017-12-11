"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const template_link_service_1 = require("./template-link.service");
class TemplateLinkDirective {
    constructor(templateLink, templateRef) {
        this.templateLink = templateLink;
        this.templateRef = templateRef;
        this.key = '';
    }
    ngOnInit() {
        this.templateLink.put(this.key, this.templateRef);
    }
}
TemplateLinkDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'ng-template[key]'
            },] },
];
/** @nocollapse */
TemplateLinkDirective.ctorParameters = () => [
    { type: template_link_service_1.TemplateLinkService, },
    { type: core_1.TemplateRef, },
];
TemplateLinkDirective.propDecorators = {
    'key': [{ type: core_1.Input },],
};
exports.TemplateLinkDirective = TemplateLinkDirective;
//# sourceMappingURL=template-link.directive.js.map