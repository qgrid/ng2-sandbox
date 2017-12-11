"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
class VScrollService {
    factory() {
        return {
            settings: {},
            container: {
                reset: () => {
                },
                apply: () => {
                },
                drawEvent: new infrastructure_1.Event()
            }
        };
    }
}
exports.VScrollService = VScrollService;
//# sourceMappingURL=vscroll.service.js.map