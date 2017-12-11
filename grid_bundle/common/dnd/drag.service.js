"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let transfer = null;
class DragService {
    constructor() {
    }
    static get mimeType() {
        return 'application/x-q-grid+json';
    }
    static get transfer() {
        return transfer;
    }
    static set transfer(value) {
        transfer = value;
    }
    static decode(source) {
        return JSON.parse(source); // eslint-disable-line angular/json-functions
    }
    static encode(source) {
        return JSON.stringify(source); // eslint-disable-line angular/json-functions
    }
}
DragService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
DragService.ctorParameters = () => [];
exports.DragService = DragService;
//# sourceMappingURL=drag.service.js.map