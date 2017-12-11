"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const model_1 = require("ng2-qgrid/core/infrastructure/model");
const action_1 = require("ng2-qgrid/core/action/action");
const command_1 = require("ng2-qgrid/core/command/command");
const grid_1 = require("ng2-qgrid/core/services/grid");
const pipe_1 = require("ng2-qgrid/core/pipe/pipe");
const pipe_unit_1 = require("ng2-qgrid/core/pipe/pipe.unit");
const value_1 = require("ng2-qgrid/core/services/value");
const label_1 = require("ng2-qgrid/core/services/label");
const row_details_status_1 = require("ng2-qgrid/core/row-details/row.details.status");
const log_1 = require("ng2-qgrid/core/infrastructure/log");
const utility_1 = require("ng2-qgrid/core/utility");
class GridService {
    constructor() {
    }
    model() {
        return new model_1.Model();
    }
    service(model) {
        const start = () => {
            log_1.Log.info('service', 'invalidate start');
            model.scene({
                status: 'start'
            }, {
                source: 'grid',
                behavior: 'core'
            });
            return () => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        model.scene({
                            status: 'stop'
                        }, {
                            source: 'grid',
                            behavior: 'core'
                        });
                        resolve();
                    }, 10);
                });
            };
        };
        return new grid_1.GridService(model, start);
    }
    get noop() {
        return utility_1.noop;
    }
    get identity() {
        return utility_1.identity;
    }
    get pipe() {
        return pipe_1.Pipe;
    }
    get pipeUnit() {
        return pipe_unit_1.PipeUnit;
    }
    get Command() {
        return command_1.Command;
    }
    get Action() {
        return action_1.Action;
    }
    get Node() {
        return Node;
    }
    get RowDetailsStatus() {
        return row_details_status_1.RowDetailsStatus;
    }
    get valueFactory() {
        return value_1.getFactory;
    }
    get labelFactory() {
        return label_1.getFactory;
    }
}
GridService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
GridService.ctorParameters = () => [];
exports.GridService = GridService;
//# sourceMappingURL=grid.service.js.map