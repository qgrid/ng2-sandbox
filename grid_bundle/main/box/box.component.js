"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const ng_component_1 = require("ng2-qgrid/infrastructure/component/ng.component");
const theme_service_1 = require("ng2-qgrid/template/theme.service");
const definition_1 = require("ng2-qgrid/core/definition");
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
const root_service_1 = require("ng2-qgrid/infrastructure/component/root.service");
class BoxComponent extends ng_component_1.NgComponent {
    constructor(root, element, theme) {
        super();
        this.root = root;
        this.theme = theme;
        this.boxModel = null;
        this.element = null;
        this.element = element.nativeElement;
    }
    ngOnInit() {
        this.initTheme();
        const model = this.model;
        this.using(model.dragChanged.watch(e => {
            if (e.hasChanges('isActive')) {
                if (model.drag().isActive) {
                    this.element.classList.add(`${definition_1.GRID_PREFIX}-drag`);
                }
                else {
                    this.element.classList.remove(`${definition_1.GRID_PREFIX}-drag`);
                }
            }
        }));
    }
    initTheme() {
        const element = this.element;
        element.classList.add(definition_1.GRID_PREFIX);
        this.using(this.theme.changed.watch(e => {
            if (e) {
                element.classList.remove(`${definition_1.GRID_PREFIX}-theme-${e.oldValue}`);
            }
            element.classList.add(`${definition_1.GRID_PREFIX}-theme-${this.theme.name}`);
        }));
    }
    get model() {
        const model = this.boxModel || (this.root && this.root.model);
        infrastructure_1.Guard.notNull('model', model);
        return model;
    }
}
BoxComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-box',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
BoxComponent.ctorParameters = () => [
    { type: root_service_1.RootService, decorators: [{ type: core_1.Optional },] },
    { type: core_1.ElementRef, },
    { type: theme_service_1.ThemeService, },
];
BoxComponent.propDecorators = {
    'boxModel': [{ type: core_1.Input, args: ['model',] },],
};
exports.BoxComponent = BoxComponent;
//# sourceMappingURL=box.component.js.map