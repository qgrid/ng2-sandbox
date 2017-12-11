"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
class PopupService {
    constructor() {
        this.popups = new Map();
    }
    open(popup) {
        if (this.popups.hasOwnProperty(popup.id)) {
            throw new infrastructure_1.AppError('popup.service', `Can't open popup '${popup.id}', it's already opened`);
        }
        const element = popup.element;
        const settings = popup.settings;
        const target = this.targetize(null, settings);
        const pos = this.position(target, settings);
        this.popups[popup.id] = popup;
        element.setAttribute('id', popup.id);
        element.style.left = pos.left + 'px';
        element.style.top = pos.top + 'px';
        element.style.width = popup.settings.width + 'px';
        element.style.height = popup.settings.height + 'px';
        if (settings.resizable) {
            element.classList.add('resizable');
        }
        if (settings.collapsible) {
            element.classList.add('collapsible');
        }
        if (settings.class) {
            element.classList.add(settings.class);
        }
        popup.focus();
    }
    close(id) {
        if (!this.isOpened(id)) {
            throw new infrastructure_1.AppError('popup.service', `Can't close popup '${id}', it's not opened`);
        }
        const popup = this.popups.get(id);
        this.popups.delete(id);
        popup.close();
    }
    closeAll() {
        for (const key of Object.keys(this.popups)) {
            this.close(key);
        }
    }
    isOpened(id) {
        return this.popups.hasOwnProperty(id);
    }
    expand(id) {
        const popup = this.popups[id];
        popup.expand();
    }
    collapse(id) {
        const popup = this.popups[id];
        popup.collapse();
    }
    focus(id) {
        this.popups.forEach(p => p.unfocus());
        const popup = this.popups.get(id);
        popup.focus();
    }
    resize(id, settings) {
        const popup = this.popups.get(id);
        popup.resize(settings);
    }
    targetize(target, settings) {
        if (!target) {
            return {
                offset: () => {
                    return {
                        left: window.innerWidth / 2,
                        top: (window.innerHeight - settings.height) / 2
                    };
                },
                height: () => {
                    return 500;
                },
                width: () => {
                    return 400;
                }
            };
        }
        const rect = target.getBoundingClientRect();
        return {
            offset: () => ({
                left: rect.left,
                top: rect.top
            }),
            height: () => target.clientHeight,
            width: () => target.clientWidth
        };
    }
    position(target, settings) {
        const dy = settings.offsetTop || 0;
        const dx = settings.offsetLeft || 0;
        const w = window.innerWidth;
        const h = window.innerHeight;
        const p = target.offset();
        const x = p.left;
        const y = p.top;
        const eh = settings.height || target.height();
        const ew = settings.width || target.width();
        const eh2 = eh / 2;
        const ew2 = ew / 2;
        const gtx1 = x + ew2 > w;
        const ltx0 = x - ew2 < 0;
        const gty1 = y + eh > h;
        const lty0 = y - eh < 0;
        const l = ltx0 && gtx1
            ? w / 2 - ew2
            : gtx1 ? x - ew - dx : ltx0 ? x + dx : x - ew2 + dx;
        const t = lty0 && gty1
            ? h / 2 - eh2
            : gty1 ? y - eh - dy : lty0 ? y + dy : y + dy;
        return {
            left: l,
            top: t
        };
    }
    get(id) {
        return this.popups.get(id);
    }
}
PopupService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
PopupService.ctorParameters = () => [];
exports.PopupService = PopupService;
//# sourceMappingURL=popup.service.js.map