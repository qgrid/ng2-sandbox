"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
class PopupState {
    constructor() {
        this.expanded = false;
        this.active = false;
    }
}
class PopupArea {
    constructor() {
        this.top = 0;
        this.left = 0;
        this.width = 0;
        this.height = 0;
    }
}
class Popup {
    constructor() {
        this.state = new PopupState();
        this.area = new PopupArea();
    }
    close() {
        const settings = this.settings;
        this.element.remove();
    }
    expand() {
        const element = this.element;
        this.area.top = element.clientTop;
        this.area.left = element.clientLeft;
        this.area.width = element.clientWidth;
        this.area.height = element.clientHeight;
        this.state.expanded = true;
        element.classList.add('expanded');
    }
    collapse() {
        const element = this.element;
        element.classList.remove('expanded');
        this.state.expanded = false;
        element.style.width = this.area.width + 'px';
        element.style.height = this.area.height + 'px';
        element.style.top = this.area.top + 'px';
        element.style.left = this.area.left + 'px';
    }
    focus() {
        this.state.active = true;
        this.element.classList.add('active');
        this.element.setAttribute('tabindex', '0');
        this.element.focus();
    }
    unfocus() {
        this.state.active = false;
        this.element.classList.remove('active');
        this.element.removeAttribute('tabindex');
    }
    isFocused() {
        return this.state.active;
    }
    resize(settings) {
        const width = Math.min(settings.width, this.body.clientWidth - this.element.offsetLeft);
        const height = Math.min(settings.height, this.body.clientHeight - this.element.offsetTop);
        this.element.setAttribute('width', `${width}px`);
        this.element.setAttribute('height', `${height}px`);
    }
}
Popup.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
Popup.ctorParameters = () => [];
exports.Popup = Popup;
//# sourceMappingURL=popup.js.map