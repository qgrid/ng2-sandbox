"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const template_1 = require("ng2-qgrid/template");
const popup_component_1 = require("./popup.component");
const popup_panel_component_1 = require("./popup-panel.component");
const popup_service_1 = require("./popup.service");
const popup_head_directive_1 = require("./popup-head.directive");
class PopupModule {
}
PopupModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [template_1.TemplateModule],
                exports: [
                    popup_component_1.PopupComponent,
                    popup_head_directive_1.PopupHeadDirective
                ],
                declarations: [
                    popup_component_1.PopupComponent,
                    popup_panel_component_1.PopupPanelComponent,
                    popup_head_directive_1.PopupHeadDirective
                ],
                providers: [
                    popup_service_1.PopupService
                ],
                entryComponents: [
                    popup_panel_component_1.PopupPanelComponent
                ]
            },] },
];
/** @nocollapse */
PopupModule.ctorParameters = () => [];
exports.PopupModule = PopupModule;
//# sourceMappingURL=popup.module.js.map