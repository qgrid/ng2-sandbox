"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
const utility_1 = require("ng2-qgrid/core/utility");
const ng_component_1 = require("./ng.component");
class RootComponent extends ng_component_1.NgComponent {
    constructor() {
        super();
        this.model = null;
        this.modelChanged = new infrastructure_1.Event();
        this.models = [];
        this.binder = new infrastructure_1.ModelBinder(this);
        this.commit = utility_1.noop;
    }
    ngOnInit() {
        this.commit = this.setup();
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('model')) {
            this.modelChanged.emit(this.model);
            this.commit = this.setup();
            this.commit();
            return;
        }
        this.commit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.binder.bind(null);
    }
    setup() {
        let run = true;
        if (!this.model) {
            this.model = new infrastructure_1.Model();
            this.modelChanged.emit(this.model);
            run = false;
        }
        return this.binder.bind(this.model, this.models, run);
    }
}
exports.RootComponent = RootComponent;
//# sourceMappingURL=root.component.js.map