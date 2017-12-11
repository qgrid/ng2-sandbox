import { OnInit } from '@angular/core';
import { RootService } from '../../infrastructure/component/index';
import { PluginComponent } from '../plugin.component';
export declare class DataManipulationComponent extends PluginComponent implements OnInit {
    private rowId;
    private rowFactory;
    private commitCommand;
    actions: any[];
    rowActions: any[];
    constructor(root: RootService);
    ngOnInit(): void;
    hasChanges(newValue: any, oldValue: any): boolean;
    styleRow(row: any, context: any): void;
    styleCell(row: any, column: any, context: any): void;
    readonly changes: any;
}
