"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
class TemplateLinkService {
    constructor() {
        this.cache = new Map();
    }
    get(key) {
        return this.cache.get(key);
    }
    put(key, value) {
        this.cache.set(key, value);
    }
}
TemplateLinkService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
TemplateLinkService.ctorParameters = () => [];
exports.TemplateLinkService = TemplateLinkService;
//# sourceMappingURL=template-link.service.js.map