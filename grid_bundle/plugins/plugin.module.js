"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const pagination_1 = require("./pagination");
const progress_1 = require("./progress");
const popup_1 = require("./popup");
const data_manipulation_1 = require("./data-manipulation");
const action_bar_1 = require("./action-bar");
const title_1 = require("./title");
class PluginModule {
}
PluginModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [],
                exports: [
                    action_bar_1.ActionBarModule,
                    data_manipulation_1.DataManipulationModule,
                    pagination_1.PagerModule,
                    popup_1.PopupModule,
                    progress_1.ProgressModule,
                    title_1.TitleModule
                ],
                imports: [],
                providers: []
            },] },
];
/** @nocollapse */
PluginModule.ctorParameters = () => [];
exports.PluginModule = PluginModule;
//# sourceMappingURL=plugin.module.js.map