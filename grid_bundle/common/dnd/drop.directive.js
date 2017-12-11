"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
const event_listener_1 = require("ng2-qgrid/core/infrastructure/event.listener");
const drag_service_1 = require("./drag.service");
const definition_1 = require("ng2-qgrid/core/definition");
class DropDirective {
    constructor(elementRef) {
        this.onDrop = new core_1.EventEmitter();
        this.element = elementRef.nativeElement;
        this.listener = new event_listener_1.EventListener(this.element, new infrastructure_1.EventManager(this));
    }
    ngOnInit() {
        this.element.classList.add(`${definition_1.GRID_PREFIX}-can-drop`);
        this.listener.on('dragenter', this.enter);
        this.listener.on('dragover', this.over);
        this.listener.on('dragleave', this.leave);
        this.listener.on('drop', this.drop);
    }
    ngOnDestroy() {
        this.element.classList.remove(`${definition_1.GRID_PREFIX}-can-drop`);
        this.listener.off();
    }
    drop(e) {
        e.stopPropagation();
        this.element.classList.remove(`${definition_1.GRID_PREFIX}-dragover`);
        const event = this.event(e.dataTransfer);
        if (this.canDrop(event)) {
            this.onDrop.emit(event);
        }
        return false;
    }
    enter(e) {
        e.preventDefault();
        this.element.classList.add(`${definition_1.GRID_PREFIX}-dragover`);
        e.dataTransfer.dropEffect = this.effect || 'move';
        return false;
    }
    over(e) {
        e.preventDefault();
        let effect = this.effect || 'move';
        if (this.element.classList.contains(`${definition_1.GRID_PREFIX}-drag`) ||
            this.canDrop(this.event()) === false) {
            effect = 'none';
        }
        e.dataTransfer.dropEffect = effect;
        return false;
    }
    leave() {
        this.element.classList.remove(`${definition_1.GRID_PREFIX}-dragover`);
    }
    event(e) {
        const target = this.transfer;
        const source = arguments.length
            ? drag_service_1.DragService.decode(e.getData(drag_service_1.DragService.mimeType))
            : drag_service_1.DragService.transfer;
        return { source, target };
    }
}
DropDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[q-grid-drop]'
            },] },
];
/** @nocollapse */
DropDirective.ctorParameters = () => [
    { type: core_1.ElementRef, },
];
DropDirective.propDecorators = {
    'transfer': [{ type: core_1.Input, args: ['q-grid-drop',] },],
    'effect': [{ type: core_1.Input, args: ['q-grid-drop-effect',] },],
    'canDrop': [{ type: core_1.Input, args: ['q-grid-can-drop',] },],
    'onDrop': [{ type: core_1.Output, args: ['q-grid-on-drop',] },],
};
exports.DropDirective = DropDirective;
//# sourceMappingURL=drop.directive.js.map