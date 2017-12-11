"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
const event_listener_1 = require("ng2-qgrid/core/infrastructure/event.listener");
const drag_service_1 = require("./drag.service");
const definition_1 = require("ng2-qgrid/core/definition");
const component_1 = require("ng2-qgrid/infrastructure/component");
class DragDirective {
    constructor(root, elementRef) {
        this.root = root;
        this.element = elementRef.nativeElement;
        this.listener = new event_listener_1.EventListener(this.element, new infrastructure_1.EventManager(this));
    }
    ngOnInit() {
        this.element.classList.add(`${definition_1.GRID_PREFIX}-can-drag`);
        this.listener.on('dragstart', this.start);
        this.listener.on('dragend', this.end);
    }
    ngOnDestroy() {
        this.element.classList.remove(`${definition_1.GRID_PREFIX}-can-drag`);
        this.listener.off();
    }
    start(e) {
        const transfer = e.dataTransfer;
        if (this.canDrag(this.event()) === false) {
            e.preventDefault();
            transfer.effectAllowed = 'none';
            return false;
        }
        const source = this.transfer;
        this.element.classList.add(`${definition_1.GRID_PREFIX}-drag`);
        transfer.setData(drag_service_1.DragService.mimeType, drag_service_1.DragService.encode(source));
        transfer.effectAllowed = this.effect || 'move';
        drag_service_1.DragService.transfer = source;
        if (this.root) {
            const model = this.root.model;
            model.drag({ isActive: true });
        }
    }
    end() {
        this.element.classList.remove(`${definition_1.GRID_PREFIX}-drag`);
        drag_service_1.DragService.transfer = null;
        if (this.root) {
            const model = this.root.model;
            model.drag({ isActive: false });
        }
    }
    event() {
        const source = this.transfer;
        return { source, target: null };
    }
}
DragDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[q-grid-drag]'
            },] },
];
/** @nocollapse */
DragDirective.ctorParameters = () => [
    { type: component_1.RootService, decorators: [{ type: core_1.Optional },] },
    { type: core_1.ElementRef, },
];
DragDirective.propDecorators = {
    'transfer': [{ type: core_1.Input, args: ['q-grid-drag',] },],
    'effect': [{ type: core_1.Input, args: ['q-grid-drag-effect',] },],
    'canDrag': [{ type: core_1.Input, args: ['q-grid-can-drag',] },],
};
exports.DragDirective = DragDirective;
//# sourceMappingURL=drag.directive.js.map