"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const popup_service_1 = require("ng2-qgrid/plugins/popup/popup.service");
class PopupPanelComponent {
    constructor(popupService, element) {
        this.popupService = popupService;
        this.element = element;
    }
    ngOnInit() {
        this.element.nativeElement.classList.add('q-grid-popup');
    }
    ngOnDestroy() {
        this.popup.close();
    }
}
PopupPanelComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-popup-panel',
                templateUrl: './popup-panel.component.html',
                styleUrls: ['./popup-panel.component.scss']
            },] },
];
/** @nocollapse */
PopupPanelComponent.ctorParameters = () => [
    { type: popup_service_1.PopupService, },
    { type: core_1.ElementRef, },
];
PopupPanelComponent.propDecorators = {
    'popup': [{ type: core_1.Input },],
};
exports.PopupPanelComponent = PopupPanelComponent;
//# sourceMappingURL=popup-panel.component.js.map