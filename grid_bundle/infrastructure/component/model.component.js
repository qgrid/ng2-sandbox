"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
const utility_1 = require("ng2-qgrid/core/utility");
const ng_component_1 = require("./ng.component");
class ModelComponent extends ng_component_1.NgComponent {
    constructor(root) {
        super();
        this.root = root;
        this.binder = new infrastructure_1.ModelBinder(this);
        this.commit = utility_1.noop;
        this.models = [];
    }
    setup() {
        return this.binder.bind(this.model, this.models, false);
    }
    ngOnInit() {
        super.ngOnInit();
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
        return this.root.model;
    }
}
exports.ModelComponent = ModelComponent;
//# sourceMappingURL=model.component.js.map