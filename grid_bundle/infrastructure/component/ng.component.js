"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const disposable_view_1 = require("ng2-qgrid/core/view/disposable.view");
class NgComponent extends disposable_view_1.DisposableView {
    constructor() {
        super();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.dispose();
    }
}
exports.NgComponent = NgComponent;
//# sourceMappingURL=ng.component.js.map