"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const theme_service_1 = require("./theme.service");
const theme_component_1 = require("./theme.component");
const plugins_1 = require("ng2-qgrid/plugins");
const template_1 = require("ng2-qgrid/template");
const common_1 = require("ng2-qgrid/common");
const material_1 = require("@angular/material");
class ThemeModule {
    constructor() {
    }
}
ThemeModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    theme_component_1.ThemeComponent
                ],
                exports: [
                    theme_component_1.ThemeComponent,
                    plugins_1.PluginModule
                ],
                imports: [
                    common_1.CommonModule,
                    platform_browser_1.BrowserModule,
                    forms_1.FormsModule,
                    template_1.TemplateModule,
                    plugins_1.PluginModule,
                    material_1.MdIconModule,
                    material_1.MdButtonModule,
                    material_1.MdCheckboxModule,
                    material_1.MdSelectModule,
                    material_1.MdTooltipModule,
                    material_1.MdProgressBarModule,
                    material_1.MdInputModule,
                    material_1.MdDatepickerModule,
                    material_1.MdNativeDateModule,
                    material_1.MdChipsModule,
                    material_1.MdDialogModule,
                    material_1.MdMenuModule,
                    material_1.MdCardModule
                ],
                providers: [
                    theme_service_1.ThemeService
                ]
            },] },
];
/** @nocollapse */
ThemeModule.ctorParameters = () => [];
exports.ThemeModule = ThemeModule;
//# sourceMappingURL=theme.module.js.map