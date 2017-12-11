"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const root_service_1 = require("../../infrastructure/component/root.service");
const plugin_component_1 = require("../plugin.component");
class ActionBarCoreComponent extends plugin_component_1.PluginComponent {
    constructor(root) {
        super(root);
        this.shortcutOff = null;
    }
    ngOnInit() {
        const shortcut = this.model.action().shortcut;
        this.using(this.model.actionChanged.watch(e => {
            if (e.hasChanges('items')) {
                if (this.shortcutOff) {
                    this.shortcutOff();
                    this.shortcutOff = null;
                }
                this.shortcutOff = shortcut.register(this.root.commandManager, e.state.items.map(act => act.command));
            }
        }));
    }
    get actions() {
        return this.model.action().items;
    }
    ngOnDestroy() {
        if (this.shortcutOff) {
            this.shortcutOff();
            this.shortcutOff = null;
        }
    }
}
ActionBarCoreComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-action-bar-core',
                templateUrl: './action-bar-core.component.html'
            },] },
];
/** @nocollapse */
ActionBarCoreComponent.ctorParameters = () => [
    { type: root_service_1.RootService, decorators: [{ type: core_1.Optional },] },
];
exports.ActionBarCoreComponent = ActionBarCoreComponent;
//# sourceMappingURL=action-bar-core.component.js.map