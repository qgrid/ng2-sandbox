"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const main_1 = require("./main");
const theme_service_1 = require("./themes/material/theme.service");
const template_1 = require("./template");
const template_cache_directive_1 = require("./template/template-cache.directive");
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
const index_1 = require("ng2-qgrid/core/index");
const grid_service_1 = require("./main/grid/grid.service");
const grid_component_1 = require("./main/grid/grid.component");
const column_1 = require("./main/column");
const plugins_1 = require("./plugins");
const common_1 = require("./common");
class GridModule {
    constructor(themeService, theme) {
        index_1.setup(infrastructure_1.Model);
        themeService.name = theme.name;
    }
}
GridModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [],
                exports: [
                    grid_component_1.GridComponent,
                    column_1.ColumnListComponent,
                    column_1.ColumnComponent,
                    template_cache_directive_1.TemplateCacheDirective,
                    plugins_1.PluginModule,
                    main_1.MainModule,
                    template_1.TemplateModule,
                    common_1.FocusModule
                ],
                imports: [
                    main_1.MainModule,
                    template_1.TemplateModule
                ],
                providers: [
                    grid_service_1.GridService,
                    template_1.TemplateLinkService,
                    template_1.ThemeService
                ]
            },] },
];
/** @nocollapse */
GridModule.ctorParameters = () => [
    { type: template_1.ThemeService, },
    { type: theme_service_1.ThemeService, },
];
exports.GridModule = GridModule;
//# sourceMappingURL=grid.module.js.map