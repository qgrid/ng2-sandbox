"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../infrastructure/component/index");
const plugin_component_1 = require("../plugin.component");
const core_1 = require("@angular/core");
const action_bar_service_1 = require("./action-bar.service");
class ActionBarComponent extends plugin_component_1.PluginComponent {
    constructor(root, actionService) {
        super(root);
        actionService.model = this.model;
    }
}
ActionBarComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-action-bar',
                template: '',
                providers: [action_bar_service_1.ActionBarService]
            },] },
];
/** @nocollapse */
ActionBarComponent.ctorParameters = () => [
    { type: index_1.RootService, decorators: [{ type: core_1.Optional },] },
    { type: action_bar_service_1.ActionBarService, },
];
exports.ActionBarComponent = ActionBarComponent;
//# sourceMappingURL=action-bar.component.js.map