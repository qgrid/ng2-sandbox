"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const layer_1 = require("./layer");
class LayerService {
    constructor(markup) {
        this.markup = markup;
    }
    create(name) {
        const markup = this.markup;
        // const node = markup.document.createElement(`div`);
        // node.classList.add(name);
        // node.classList.add(`${GRID_PREFIX}-layer`)
        // markup.view.appendChild(node);
        //
        // const ctrl = angular.element(markup.view).controller(VIEW_CORE_NAME);
        // if (!ctrl) {
        //   throw new AppError('box', 'Controller for box is not found')
        // }
        //
        // if (!ctrl.$scope) {
        //   throw new AppError('box', 'Controller scope for box is not found')
        // }
        return new layer_1.Layer();
    }
}
exports.LayerService = LayerService;
//# sourceMappingURL=layer.service.js.map