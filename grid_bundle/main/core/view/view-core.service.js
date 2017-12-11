"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const component_1 = require("ng2-qgrid/infrastructure/component");
const grid_1 = require("ng2-qgrid/main/grid");
const scroll_1 = require("ng2-qgrid/main/core/scroll");
const view_factory_1 = require("ng2-qgrid/core/view/view.factory");
const utility_1 = require("ng2-qgrid/core/utility");
class ViewCoreService {
    constructor(root, gridServiceFactory, vscroll) {
        this.root = root;
        this.gridServiceFactory = gridServiceFactory;
        this.vscroll = vscroll;
        this.destroy = utility_1.noop;
        this.group = null;
        this.filter = null;
        this.pivot = null;
        this.sort = null;
        this.pagination = null;
        this.columns = null;
        this.head = null;
        this.body = null;
        this.foot = null;
        this.layout = null;
        this.selection = null;
        this.highlight = null;
        this.edit = null;
        this.nav = null;
        this.scroll = null;
        this.style = null;
        this.rowDetails = null;
    }
    init() {
        const root = this.root;
        const model = root.model;
        const table = root.table;
        const commandManager = root.commandManager;
        const gridService = this.gridServiceFactory.service(model);
        const selectors = {
            th: 'q-grid-core-th'
        };
        const injectViewServicesTo = view_factory_1.viewFactory(model, table, commandManager, gridService, this.vscroll, selectors);
        this.destroy = injectViewServicesTo(this);
    }
}
ViewCoreService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ViewCoreService.ctorParameters = () => [
    { type: component_1.RootService, },
    { type: grid_1.GridService, },
    { type: scroll_1.VScrollService, },
];
exports.ViewCoreService = ViewCoreService;
//# sourceMappingURL=view-core.service.js.map