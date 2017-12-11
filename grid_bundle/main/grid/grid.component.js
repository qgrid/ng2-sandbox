"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const template_1 = require("ng2-qgrid/template");
const component_1 = require("ng2-qgrid/infrastructure/component");
const layer_1 = require("../layer");
const dom_1 = require("ng2-qgrid/core/dom");
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
const command_1 = require("ng2-qgrid/core/command");
const event_manager_1 = require("ng2-qgrid/core/infrastructure/event.manager");
const event_listener_1 = require("ng2-qgrid/core/infrastructure/event.listener");
class GridComponent extends component_1.RootComponent {
    constructor(rootService, element, changeDetector) {
        super();
        this.rootService = rootService;
        this.element = element;
        this.changeDetector = changeDetector;
        this.selectionChanged = new core_1.EventEmitter();
        this.models = [
            'data',
            'selection',
            'sort',
            'group',
            'pivot',
            'edit',
            'style',
            'action'
        ];
        this.using(this.modelChanged.watch(model => (this.rootService.model = model)));
        const apply = rootService.applyFactory(null, 'sync');
        this.listener = new event_listener_1.EventListener(element.nativeElement, new event_manager_1.EventManager(this, apply));
    }
    ngOnInit() {
        super.ngOnInit();
        const model = this.model;
        const grid = model.grid;
        if (grid().status === 'bound') {
            throw new infrastructure_1.AppError('grid', `Model is already used by grid "${model.grid().id}"`);
        }
        grid({
            status: 'bound',
            title: this.gridTitle || ''
        });
        if (!this.gridId) {
            this.element.nativeElement.id = model.grid().id;
        }
        const markup = this.rootService.markup;
        const layerService = new layer_1.LayerService(markup);
        const tableContext = {
            layer: name => layerService.create(name),
            bag: this.rootService.bag
        };
        const table = new dom_1.Table(model, markup, tableContext);
        this.rootService.table = table;
        this.rootService.commandManager = new command_1.TableCommandManager(this.rootService.applyFactory(), table);
        this.using(this.listener.on('keydown', e => {
            if (model.action().shortcut.keyDown(e)) {
                e.preventDefault();
                e.stopPropagation();
            }
        }));
        this.using(this.model.viewChanged.watch(e => {
            if (e.hasChanges('columns')) {
                this.invalidateVisibility();
            }
        }));
    }
    invalidateVisibility() {
        const columns = this.model.data().columns;
        const visibility = this.model.visibility;
        visibility({
            pin: {
                left: columns.some(c => c.pin === 'left'),
                right: columns.some(c => c.pin === 'right')
            }
        });
    }
    get isActive() {
        return this.rootService.table.view.isFocused();
    }
    get visibility() {
        // TODO: get rid of that
        return this.model.visibility();
    }
}
GridComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid',
                providers: [component_1.RootService, template_1.TemplateCacheService],
                styleUrls: ['../../assets/index.scss', '../../themes/material/index.scss'],
                templateUrl: './grid.component.html',
                encapsulation: core_1.ViewEncapsulation.None
            },] },
];
/** @nocollapse */
GridComponent.ctorParameters = () => [
    { type: component_1.RootService, },
    { type: core_1.ElementRef, },
    { type: core_1.ChangeDetectorRef, },
];
GridComponent.propDecorators = {
    'model': [{ type: core_1.Input },],
    'dataRows': [{ type: core_1.Input, args: ['rows',] },],
    'dataColumns': [{ type: core_1.Input, args: ['columns',] },],
    'dataPipe': [{ type: core_1.Input, args: ['pipe',] },],
    'selectionItems': [{ type: core_1.Input, args: ['selection',] },],
    'selectionMode': [{ type: core_1.Input },],
    'selectionUnit': [{ type: core_1.Input },],
    'selectionKey': [{ type: core_1.Input },],
    'groupBy': [{ type: core_1.Input },],
    'pivotBy': [{ type: core_1.Input },],
    'sortBy': [{ type: core_1.Input },],
    'sortMode': [{ type: core_1.Input },],
    'editMode': [{ type: core_1.Input },],
    'editEnter': [{ type: core_1.Input },],
    'editCommit': [{ type: core_1.Input },],
    'editCancel': [{ type: core_1.Input },],
    'editReset': [{ type: core_1.Input },],
    'styleRow': [{ type: core_1.Input },],
    'styleCell': [{ type: core_1.Input },],
    'gridId': [{ type: core_1.Input, args: ['id',] },],
    'gridTitle': [{ type: core_1.Input, args: ['header',] },],
    'actionItems': [{ type: core_1.Input, args: ['actions',] },],
    'selectionChanged': [{ type: core_1.Output },],
};
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map