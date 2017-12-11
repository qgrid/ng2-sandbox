import { RootService } from 'ng2-qgrid/infrastructure/component';
export declare class ColumnListService {
    private root;
    constructor(root: RootService);
    copy(target: any, source: any): void;
    add(column: any): void;
    register(column: any): void;
}
