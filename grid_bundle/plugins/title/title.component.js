"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const plugin_component_1 = require("../plugin.component");
const root_service_1 = require("ng2-qgrid/infrastructure/component/root.service");
class TitleComponent extends plugin_component_1.PluginComponent {
    constructor(root) {
        super(root);
    }
    get value() {
        return this.model.grid().title;
    }
}
TitleComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-title',
                templateUrl: './title.component.html'
            },] },
];
/** @nocollapse */
TitleComponent.ctorParameters = () => [
    { type: root_service_1.RootService, decorators: [{ type: core_1.Optional },] },
];
exports.TitleComponent = TitleComponent;
//# sourceMappingURL=title.component.js.map