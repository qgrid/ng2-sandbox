"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
const core_1 = require("@angular/core");
const infrastructure_2 = require("ng2-qgrid/core/infrastructure");
const utility_1 = require("ng2-qgrid/core/utility");
const bag_1 = require("ng2-qgrid/core/dom/bag");
class RootService {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.gridModel = null;
        this.markup = {};
        this.bag = {
            head: new bag_1.Bag(),
            body: new bag_1.Bag(),
            foot: new bag_1.Bag()
        };
        this.table = null;
        this.markup.document = document;
    }
    get model() {
        infrastructure_1.Guard.notNull(this.gridModel, 'model');
        return this.gridModel;
    }
    set model(value) {
        this.gridModel = value;
    }
    applyFactory(gf = null, mode = 'async') {
        return (lf, timeout) => {
            if (utility_1.isUndefined(timeout)) {
                switch (mode) {
                    case 'async': {
                        timeout = 0;
                        break;
                    }
                    case 'sync': {
                        const result = lf();
                        if (gf) {
                            gf();
                        }
                        this.changeDetector.detectChanges();
                        return result;
                    }
                    default:
                        throw new infrastructure_2.AppError('grid', `Invalid mode ${mode}`);
                }
            }
            return setTimeout(() => {
                lf();
                if (gf) {
                    gf();
                }
                this.changeDetector.detectChanges();
            }, timeout);
        };
    }
}
RootService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
RootService.ctorParameters = () => [
    { type: core_1.ChangeDetectorRef, },
];
exports.RootService = RootService;
//# sourceMappingURL=root.service.js.map