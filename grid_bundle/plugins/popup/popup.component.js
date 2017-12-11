"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const component_1 = require("ng2-qgrid/infrastructure/component");
const template_1 = require("ng2-qgrid/template");
const popup_service_1 = require("./popup.service");
const plugin_component_1 = require("../plugin.component");
const popup_settings_1 = require("./popup.settings");
const popup_1 = require("./popup");
const popup_panel_component_1 = require("./popup-panel.component");
class PopupComponent extends plugin_component_1.PluginComponent {
    constructor(root, popupService, templateHost, resolver, viewContainerRef, popup) {
        super(root);
        this.popupService = popupService;
        this.templateHost = templateHost;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.popup = popup;
        this.$implicit = this;
        this.factory = resolver.resolveComponentFactory(popup_panel_component_1.PopupPanelComponent);
    }
    ngOnInit() {
        super.ngOnInit();
        this.popup.id = this.id;
        this.popup.model = this.model;
        this.templateHost.key = `popup-${this.id}.tpl.html`;
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.popupService.isOpened(this.id)) {
            this.popupService.close(this.id);
        }
    }
    open(settings) {
        settings = Object.assign(new popup_settings_1.PopupSettings(), settings);
        const component = this.viewContainerRef.createComponent(this.factory)
            .instance;
        component.popup = this.popup;
        this.popup.element = component.element.nativeElement;
        this.popup.settings = settings;
        this.popupService.open(this.popup);
    }
    close() {
        this.popupService.close(this.id);
    }
    isOpened() {
        return this.popupService.isOpened(this.id);
    }
}
PopupComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-popup',
                templateUrl: './popup.component.html',
                providers: [template_1.TemplateHostService, popup_1.Popup]
            },] },
];
/** @nocollapse */
PopupComponent.ctorParameters = () => [
    { type: component_1.RootService, decorators: [{ type: core_1.Optional },] },
    { type: popup_service_1.PopupService, },
    { type: template_1.TemplateHostService, },
    { type: core_1.ComponentFactoryResolver, },
    { type: core_1.ViewContainerRef, },
    { type: popup_1.Popup, },
];
PopupComponent.propDecorators = {
    'id': [{ type: core_1.Input },],
};
exports.PopupComponent = PopupComponent;
//# sourceMappingURL=popup.component.js.map