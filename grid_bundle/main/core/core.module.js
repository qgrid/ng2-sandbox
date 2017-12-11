"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const view_1 = require("./view");
const toolbar_1 = require("./toolbar");
const body_1 = require("./body");
const head_1 = require("./head");
const foot_1 = require("./foot");
const row_1 = require("./row");
const scroll_1 = require("./scroll");
const markup_1 = require("./markup");
const template_1 = require("ng2-qgrid/template");
const template_module_1 = require("ng2-qgrid/template/template.module");
const common_1 = require("ng2-qgrid/common");
const table_1 = require("ng2-qgrid/main/core/table");
class CoreModule {
}
CoreModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    view_1.ViewCoreComponent,
                    table_1.TableCoreComponent,
                    head_1.HeadCoreComponent,
                    body_1.BodyCoreComponent,
                    foot_1.FootCoreComponent,
                    toolbar_1.ToolbarCoreComponent,
                    row_1.TrCoreDirective,
                    head_1.ThCoreDirective,
                    body_1.TdCoreDirective,
                    foot_1.TfCoreDirective,
                    markup_1.MarkupDirective
                ],
                exports: [
                    view_1.ViewCoreComponent,
                    toolbar_1.ToolbarCoreComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule,
                    template_module_1.TemplateModule,
                    common_1.CommonModule
                ],
                providers: [
                    scroll_1.VScrollService,
                    template_1.TemplateCacheService
                ]
            },] },
];
/** @nocollapse */
CoreModule.ctorParameters = () => [];
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map