"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var grid_module_1 = require("./grid.module");
exports.GridModule = grid_module_1.GridModule;
var grid_service_1 = require("./main/grid/grid.service");
exports.GridService = grid_service_1.GridService;
var model_1 = require("ng2-qgrid/core/infrastructure/model");
exports.GridModel = model_1.Model;
tslib_1.__exportStar(require("./pub/column"), exports);
tslib_1.__exportStar(require("./pub/infrastructure"), exports);
//# sourceMappingURL=index.js.map