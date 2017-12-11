import { ChangeDetectorRef } from '@angular/core';
import { Model } from 'ng2-qgrid/core/infrastructure/model';
import { Table } from 'ng2-qgrid/core/dom/table';
import { Bag } from 'ng2-qgrid/core/dom/bag';
export declare class RootService {
    private changeDetector;
    private gridModel;
    markup: any;
    bag: {
        head: Bag;
        body: Bag;
        foot: Bag;
    };
    table: Table;
    commandManager: any;
    constructor(changeDetector: ChangeDetectorRef);
    model: Model;
    applyFactory(gf?: () => void, mode?: string): (lf: any, timeout: any) => any;
}
