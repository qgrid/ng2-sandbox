"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const event_listener_1 = require("ng2-qgrid/core/infrastructure/event.listener");
const event_manager_1 = require("ng2-qgrid/core/infrastructure/event.manager");
const component_1 = require("ng2-qgrid/infrastructure/component");
class PopupHeadDirective extends component_1.NgComponent {
    constructor(element) {
        super();
        this.position = {
            x: 0,
            y: 0
        };
        this.element = element.nativeElement;
        this.element.setAttribute('draggable', 'true');
        this.eventListener = new event_listener_1.EventListener(this.element, new event_manager_1.EventManager(this));
    }
    ngOnInit() {
        const popup = this.popup;
        const popupElement = popup.element;
        this.using(this.eventListener.on('dragstart', e => {
            this.position.x = e.offsetX;
            this.position.y = e.offsetY;
            popupElement.classList.add('drag');
            e.dataTransfer.setDragImage(document.createElement('div'), 0, 0); // eslint-disable-line no-undef			
        }));
        this.using(this.eventListener.on('drag', event => {
            const cx = event.clientX;
            const cy = event.clientY;
            const x = this.position.x;
            const y = this.position.y;
            if (cx || cy) {
                let l = cx - x;
                let t = cy - y;
                const w = this.element.clientWidth;
                const h = this.element.clientHeight;
                const el = 0;
                const er = window.innerWidth - w;
                const et = 0;
                const eb = window.innerHeight - h;
                l = l <= el ? el : l >= er ? er : l;
                t = t <= et ? et : t >= eb ? eb : t;
                popupElement.style.left = l + 'px';
                popupElement.style.top = t + 'px';
            }
        }));
        this.using(this.eventListener.on('dragend', () => {
            this.element.classList.remove('drag');
        }));
        // this.element.body.bind('dragover', e => e.preventDefault());
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.eventListener.off();
    }
}
PopupHeadDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[q-grid-popup-head]'
            },] },
];
/** @nocollapse */
PopupHeadDirective.ctorParameters = () => [
    { type: core_1.ElementRef, },
];
PopupHeadDirective.propDecorators = {
    'popup': [{ type: core_1.Input, args: ['q-grid-popup-head',] },],
};
exports.PopupHeadDirective = PopupHeadDirective;
//# sourceMappingURL=popup-head.directive.js.map