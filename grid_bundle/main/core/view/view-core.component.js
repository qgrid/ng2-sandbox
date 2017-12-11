"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const component_1 = require("ng2-qgrid/infrastructure/component");
const view_core_service_1 = require("./view-core.service");
const grid_1 = require("ng2-qgrid/main/grid");
const cell_1 = require("../cell");
class ViewCoreComponent extends component_1.NgComponent {
    constructor(root, view, gridService) {
        super();
        this.root = root;
        this.view = view;
        this.gridService = gridService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.view.init();
        const model = this.model;
        const gridService = this.gridService.service(model);
        // model.selectionChanged.watch(e => {
        //   // TODO: add event
        //   // if (e.hasChanges('entries')) {
        //   //   this.root.selectionChanged.emit({
        //   //     state: model.selection(),
        //   //     changes: e.changes
        //   //   });
        //   // }
        //
        // });
        const triggers = model.data().triggers;
        // TODO: think about invalidation queue
        let needInvalidate = true;
        Object.keys(triggers)
            .forEach(name => this.using(model[name + 'Changed']
            .watch(e => {
            const changes = Object.keys(e.changes);
            if (e.tag.behavior !== 'core' && triggers[name].find(key => changes.indexOf(key) >= 0)) {
                needInvalidate = false;
                gridService.invalidate(name, e.changes);
            }
        })));
        if (needInvalidate) {
            gridService.invalidate('grid');
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.view.destroy();
    }
    get model() {
        return this.root.model;
    }
    get visibility() {
        return this.model.visibility();
    }
    ngDoCheck() {
        this.view.style.invalidate();
    }
}
ViewCoreComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-core-view',
                templateUrl: './view-core.component.html',
                providers: [
                    view_core_service_1.ViewCoreService,
                    cell_1.CellService
                ]
            },] },
];
/** @nocollapse */
ViewCoreComponent.ctorParameters = () => [
    { type: component_1.RootService, decorators: [{ type: core_1.Optional },] },
    { type: view_core_service_1.ViewCoreService, },
    { type: grid_1.GridService, },
];
exports.ViewCoreComponent = ViewCoreComponent;
//# sourceMappingURL=view-core.component.js.map