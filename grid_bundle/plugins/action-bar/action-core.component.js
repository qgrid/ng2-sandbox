"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const error_1 = require("ng2-qgrid/core/infrastructure/error");
const root_service_1 = require("ng2-qgrid/infrastructure/component/root.service");
const plugin_component_1 = require("../plugin.component");
class ActionCoreComponent extends plugin_component_1.PluginComponent {
    constructor(root) {
        super(root);
        this.action = null;
    }
    execute() {
        const action = this.action;
        if (!action) {
            throw new error_1.AppError('action-core.component', 'Action shoud be setup');
        }
        return action.command.execute();
    }
    canExecute() {
        const action = this.action;
        if (!action) {
            throw new error_1.AppError('action-core.component', 'Action shoud be setup');
        }
        return action.command.canExecute();
    }
    get shortcut() {
        const action = this.action;
        if (!action) {
            throw new error_1.AppError('action-core.component', 'Action shoud be setup');
        }
        return action.command.shortcut;
    }
    get title() {
        const action = this.action;
        if (!action) {
            throw new error_1.AppError('action-core.component', 'Action shoud be setup');
        }
        const shortcut = this.shortcut;
        return action.title + (shortcut ? ` (${shortcut})` : '');
    }
    get icon() {
        const action = this.action;
        if (!action) {
            throw new error_1.AppError('action-core.component', 'Action shoud be setup');
        }
        return action.icon;
    }
}
ActionCoreComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-action-core',
                templateUrl: './action-core.component.html'
            },] },
];
/** @nocollapse */
ActionCoreComponent.ctorParameters = () => [
    { type: root_service_1.RootService, decorators: [{ type: core_1.Optional },] },
];
ActionCoreComponent.propDecorators = {
    'action': [{ type: core_1.Input },],
};
exports.ActionCoreComponent = ActionCoreComponent;
//# sourceMappingURL=action-core.component.js.map