"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const action_bar_service_1 = require("./action-bar.service");
const action_1 = require("ng2-qgrid/core/action");
class ActionComponent {
    constructor(actionService) {
        this.actionService = actionService;
        this.id = null;
        this.title = null;
        this.icon = null;
        this.command = null;
    }
    execute() {
        return this.command && this.command.execute();
    }
    canExecute() {
        return this.command && this.command.canExecute();
    }
    onInit() {
        const model = this.model;
        const action = new action_1.Action(this.command, this.title, this.icon);
        action.id = this.id;
        const actions = Array.from(model.action().items);
        actions.push(action);
        model.action({
            items: actions
        });
    }
    get model() {
        return this.actionService.model;
    }
}
ActionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-action',
                template: ''
            },] },
];
/** @nocollapse */
ActionComponent.ctorParameters = () => [
    { type: action_bar_service_1.ActionBarService, },
];
exports.ActionComponent = ActionComponent;
//# sourceMappingURL=action.component.js.map