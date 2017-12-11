"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const raise_1 = require("./raise");
const dnd_1 = require("./dnd");
const focus_1 = require("./focus");
const resize_1 = require("./resize");
const layout_1 = require("./layout");
class CommonModule {
}
CommonModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [],
                exports: [
                    dnd_1.DndModule,
                    focus_1.FocusModule,
                    resize_1.ResizeModule,
                    layout_1.LayoutModule,
                    raise_1.RaiseModule
                ],
                imports: [],
                providers: []
            },] },
];
/** @nocollapse */
CommonModule.ctorParameters = () => [];
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map