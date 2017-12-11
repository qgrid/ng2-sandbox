"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const grid_component_1 = require("./grid/grid.component");
const grid_service_1 = require("./grid/grid.service");
const column_1 = require("./column");
const box_1 = require("./box");
const core_2 = require("./core");
const theme_module_1 = require("ng2-qgrid/themes/material/theme.module");
const toolbar_component_1 = require("./toolbar/toolbar.component");
tslib_1.__exportStar(require("./box/index"), exports);
tslib_1.__exportStar(require("./column/index"), exports);
tslib_1.__exportStar(require("./core/index"), exports);
tslib_1.__exportStar(require("./grid/index"), exports);
tslib_1.__exportStar(require("./layer/index"), exports);
class MainModule {
    constructor() {
        console.log('Main module bootstrapped');
    }
}
MainModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    grid_component_1.GridComponent,
                    box_1.BoxComponent,
                    column_1.ColumnListComponent,
                    column_1.ColumnComponent,
                    toolbar_component_1.ToolbarComponent
                ],
                exports: [
                    grid_component_1.GridComponent,
                    column_1.ColumnListComponent,
                    column_1.ColumnComponent,
                    box_1.BoxComponent,
                    toolbar_component_1.ToolbarComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule,
                    core_2.CoreModule,
                    theme_module_1.ThemeModule
                ],
                providers: [
                    grid_service_1.GridService
                ]
            },] },
];
/** @nocollapse */
MainModule.ctorParameters = () => [];
exports.MainModule = MainModule;
//# sourceMappingURL=index.js.map