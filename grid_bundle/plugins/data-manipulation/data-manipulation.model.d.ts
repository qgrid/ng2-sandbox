export declare class DataManipulationModel {
    deleted: Set<any>;
    added: Set<any>;
    edited: Map<any, any>;
    rowFactory: (etalonRow: any) => any;
    rowId: any;
    constructor();
}
