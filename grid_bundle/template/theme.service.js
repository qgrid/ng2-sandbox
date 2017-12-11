"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
class ThemeService {
    constructor() {
        this.changed = new infrastructure_1.Event();
        this.themeName = '';
    }
    get name() {
        return this.themeName;
    }
    set name(value) {
        if (value !== this.themeName) {
            this.themeName = value;
            this.changed.emit({
                newValue: value,
                oldValue: value
            });
        }
    }
}
ThemeService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ThemeService.ctorParameters = () => [];
exports.ThemeService = ThemeService;
//# sourceMappingURL=theme.service.js.map