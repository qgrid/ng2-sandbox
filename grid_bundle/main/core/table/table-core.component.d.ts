import { OnInit } from '@angular/core';
import { RootService } from 'ng2-qgrid/infrastructure/component';
import { TableCoreService } from './table-core.service';
import { Model } from 'ng2-qgrid/core/infrastructure/model';
import { VisibilityModel } from 'ng2-qgrid/core/visibility/visibility.model';
export declare class TableCoreComponent implements OnInit {
    private root;
    private table;
    pin: any;
    constructor(root: RootService, table: TableCoreService);
    ngOnInit(): void;
    readonly visibility: VisibilityModel;
    readonly model: Model;
}
