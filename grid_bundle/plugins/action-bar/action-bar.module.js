"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../template/index");
const core_1 = require("@angular/core");
const action_bar_core_component_1 = require("./action-bar-core.component");
const action_bar_component_1 = require("./action-bar.component");
const action_core_component_1 = require("./action-core.component");
const action_component_1 = require("./action.component");
class ActionBarModule {
}
ActionBarModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    action_bar_component_1.ActionBarComponent,
                    action_bar_core_component_1.ActionBarCoreComponent,
                    action_component_1.ActionComponent,
                    action_core_component_1.ActionCoreComponent
                ],
                exports: [
                    action_bar_component_1.ActionBarComponent,
                    action_bar_core_component_1.ActionBarCoreComponent,
                    action_component_1.ActionComponent,
                    action_core_component_1.ActionCoreComponent
                ],
                imports: [index_1.TemplateModule],
                providers: []
            },] },
];
/** @nocollapse */
ActionBarModule.ctorParameters = () => [];
exports.ActionBarModule = ActionBarModule;
//# sourceMappingURL=action-bar.module.js.map