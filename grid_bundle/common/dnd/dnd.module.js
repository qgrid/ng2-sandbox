"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const drag_directive_1 = require("./drag.directive");
const drop_directive_1 = require("./drop.directive");
class DndModule {
}
DndModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    drag_directive_1.DragDirective,
                    drop_directive_1.DropDirective
                ],
                exports: [
                    drag_directive_1.DragDirective,
                    drop_directive_1.DropDirective
                ],
                imports: [],
                providers: []
            },] },
];
/** @nocollapse */
DndModule.ctorParameters = () => [];
exports.DndModule = DndModule;
//# sourceMappingURL=dnd.module.js.map