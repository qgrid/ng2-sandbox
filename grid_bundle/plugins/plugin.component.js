"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
const utility_1 = require("ng2-qgrid/core/utility");
const core_1 = require("@angular/core");
const component_1 = require("../infrastructure/component");
const infrastructure_2 = require("ng2-qgrid/core/infrastructure");
class PluginComponent extends component_1.NgComponent {
    constructor(root) {
        super();
        this.root = root;
        this.gridModel = null;
        this.context = { $implicit: this };
        this.binder = new infrastructure_1.ModelBinder(this);
        this.commit = utility_1.noop;
        this.models = [];
    }
    setup() {
        return this.binder.bind(this.model, this.models, false);
    }
    ngOnInit() {
        this.commit = this.setup();
        this.commit();
    }
    ngOnChanges(changes) {
        this.commit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.binder.bind(null);
    }
    get model() {
        const model = this.gridModel || (this.root && this.root.model);
        infrastructure_2.Guard.notNull('model', model);
        return model;
    }
}
/** @nocollapse */
PluginComponent.ctorParameters = () => [
    { type: component_1.RootService, decorators: [{ type: core_1.Optional },] },
];
PluginComponent.propDecorators = {
    'gridModel': [{ type: core_1.Input, args: ['model',] },],
};
exports.PluginComponent = PluginComponent;
//# sourceMappingURL=plugin.component.js.map