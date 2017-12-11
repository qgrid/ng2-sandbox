"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("ng2-qgrid/core/utility");
class DataManipulationModel {
    constructor() {
        this.deleted = new Set();
        this.added = new Set();
        this.edited = new Map();
        this.rowFactory = etalonRow => {
            if (etalonRow) {
                return utility_1.cloneDeep(etalonRow, value => {
                    if (utility_1.isArray(value)) {
                        return [];
                    }
                    if (!utility_1.isObject(value) ||
                        utility_1.isNumber(value) ||
                        utility_1.isDate(value) ||
                        utility_1.isBoolean(value) ||
                        utility_1.isFunction(value)) {
                        return null;
                    }
                });
            }
        };
        this.rowId = utility_1.identity;
    }
}
exports.DataManipulationModel = DataManipulationModel;
//# sourceMappingURL=data-manipulation.model.js.map