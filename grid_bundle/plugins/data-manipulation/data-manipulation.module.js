"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const model_1 = require("ng2-qgrid/core/infrastructure/model");
const data_manipulation_component_1 = require("./data-manipulation.component");
const data_manipulation_model_1 = require("./data-manipulation.model");
model_1.Model.register('dataManipulation', data_manipulation_model_1.DataManipulationModel);
class DataManipulationModule {
}
DataManipulationModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [data_manipulation_component_1.DataManipulationComponent],
                exports: [data_manipulation_component_1.DataManipulationComponent],
                imports: [],
                providers: []
            },] },
];
/** @nocollapse */
DataManipulationModule.ctorParameters = () => [];
exports.DataManipulationModule = DataManipulationModule;
//# sourceMappingURL=data-manipulation.module.js.map