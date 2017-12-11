"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Infrastructure = require("ng2-qgrid/core/infrastructure");
const definition_1 = require("ng2-qgrid/core/definition");
const component_1 = require("ng2-qgrid/infrastructure/component");
const utility_1 = require("ng2-qgrid/core/utility");
const platform_browser_1 = require("@angular/platform-browser");
class ResizeDirective extends component_1.NgComponent {
    constructor(root, elementRef, document) {
        super();
        this.root = root;
        this.document = document;
        this.listener = {
            divider: Infrastructure.EventListener,
            document: Infrastructure.EventListener
        };
        this.context = {
            x: 0,
            width: 0
        };
        this.element = elementRef.nativeElement;
        this.divider = document.createElement('div');
        this.listener.divider = new Infrastructure.EventListener(this.divider, new Infrastructure.EventManager(this));
        this.listener.document = new Infrastructure.EventListener(document, new Infrastructure.EventManager(this));
    }
    ngOnInit() {
        if (this.canResize(this.event())) {
            this.listener.divider.on('mousedown', this.dragStart);
            this.divider.classList.add(`${definition_1.GRID_PREFIX}-divider`);
            this.element.appendChild(this.divider);
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.listener.divider.off();
        this.listener.document.off();
    }
    dragStart(e) {
        e.preventDefault();
        const context = this.context;
        context.width = this.element.clientWidth;
        context.x = e.screenX;
        this.listener.document.on('mousemove', this.drag);
        this.listener.document.on('mouseup', this.dragEnd);
        const model = this.model;
        model.drag({ isActive: true });
    }
    drag(e) {
        const model = this.model;
        const context = this.context;
        const layout = model.layout;
        const state = utility_1.clone(layout()[this.path]);
        state[this.key] = { width: context.width + e.screenX - context.x };
        layout({ [this.path]: state });
    }
    dragEnd() {
        this.listener.document.off();
        const model = this.model;
        model.drag({ isActive: false });
    }
    event() {
        const source = this.transfer;
        return { source, target: null };
    }
    get model() {
        return this.root.model;
    }
}
ResizeDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[q-grid-resize]'
            },] },
];
/** @nocollapse */
ResizeDirective.ctorParameters = () => [
    { type: component_1.RootService, decorators: [{ type: core_1.Optional },] },
    { type: core_1.ElementRef, },
    { type: undefined, decorators: [{ type: core_1.Inject, args: [platform_browser_1.DOCUMENT,] },] },
];
ResizeDirective.propDecorators = {
    'key': [{ type: core_1.Input, args: ['q-grid-resize',] },],
    'path': [{ type: core_1.Input, args: ['q-grid-resize-path',] },],
    'canResize': [{ type: core_1.Input, args: ['q-grid-can-resize',] },],
    'transfer': [{ type: core_1.Input, args: ['q-grid-drag',] },],
};
exports.ResizeDirective = ResizeDirective;
//# sourceMappingURL=resize.directive.js.map