"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const template_1 = require("ng2-qgrid/template");
class ToolbarComponent {
    constructor(templateHost) {
        this.templateHost = templateHost;
        templateHost.key = 'toolbar.tpl.html';
    }
    ngOnInit() {
    }
}
ToolbarComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-toolbar',
                template: '<ng-content></ng-content>',
                providers: [template_1.TemplateHostService]
            },] },
];
/** @nocollapse */
ToolbarComponent.ctorParameters = () => [
    { type: template_1.TemplateHostService, },
];
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map