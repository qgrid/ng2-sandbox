"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const template_1 = require("ng2-qgrid/template");
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
const utility_1 = require("ng2-qgrid/core/utility");
function canBuild(column) {
    return column.type !== 'pad';
}
function buildKeys(source, column, mode = 'view') {
    const key = column.key;
    switch (mode) {
        case 'view': {
            const type = column.type;
            return [
                `${source}-cell-${type}-${key}.tpl.html`,
                `${source}-cell-${type}.tpl.html`,
                `${source}-cell-text.tpl.html`
            ];
        }
        case 'edit': {
            const type = column.editor || column.type;
            return [
                `${mode}-cell-${type}-${key}.tpl.html`,
                `${mode}-cell-${type}.tpl.html`,
                `${mode}-cell-text.tpl.html`
            ];
        }
        default:
            throw new infrastructure_1.AppError('cell.service', `Invalid mode "${mode}"`);
    }
}
class CellService {
    constructor(templateCache, templateLink) {
        this.templateCache = templateCache;
        this.templateLink = templateLink;
    }
    build(source, column, mode = 'view') {
        if (!canBuild(column)) {
            return utility_1.noop;
        }
        const keys = buildKeys(source, column, mode);
        const template = this.findTemplate(keys);
        if (!template) {
            throw new infrastructure_1.AppError('cell.service', `Can't find template for ${keys[0]}`);
        }
        return (viewContainerRef, context) => {
            viewContainerRef.clear();
            viewContainerRef.createEmbeddedView(template, context);
        };
    }
    findTemplate(keys) {
        const templateCache = this.templateCache;
        const templateLink = this.templateLink;
        for (const key of keys) {
            const template = templateCache.get(key) || templateLink.get(key);
            if (template) {
                return template;
            }
        }
        return null;
    }
}
CellService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
CellService.ctorParameters = () => [
    { type: template_1.TemplateCacheService, },
    { type: template_1.TemplateLinkService, },
];
exports.CellService = CellService;
//# sourceMappingURL=cell.service.js.map