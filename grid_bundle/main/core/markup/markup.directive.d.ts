import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { RootService } from '../../../infrastructure/component/root.service';
import { TableCoreService } from '../table/table-core.service';
export declare class MarkupDirective implements OnInit, OnDestroy {
    private root;
    private element;
    private table;
    name: string;
    constructor(root: RootService, element: ElementRef, table: TableCoreService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private getName();
}
