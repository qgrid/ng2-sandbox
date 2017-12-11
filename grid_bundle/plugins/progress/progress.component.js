"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const plugin_component_1 = require("../plugin.component");
const component_1 = require("ng2-qgrid/infrastructure/component");
class ProgressComponent extends plugin_component_1.PluginComponent {
    constructor(root) {
        super(root);
        this.models = ['progress'];
    }
    get isBusy() {
        const progressState = this.model.progress();
        return progressState.isBusy || progressState.queue.length;
    }
}
ProgressComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-progress',
                templateUrl: './progress.component.html'
            },] },
];
/** @nocollapse */
ProgressComponent.ctorParameters = () => [
    { type: component_1.RootService, decorators: [{ type: core_1.Optional },] },
];
exports.ProgressComponent = ProgressComponent;
//# sourceMappingURL=progress.component.js.map