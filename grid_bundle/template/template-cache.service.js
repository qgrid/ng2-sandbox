"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
class TemplateCacheService {
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
TemplateCacheService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
TemplateCacheService.ctorParameters = () => [];
exports.TemplateCacheService = TemplateCacheService;
//# sourceMappingURL=template-cache.service.js.map