import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NgComponent, RootService } from 'ng2-qgrid/infrastructure/component';
import { ColumnView } from 'ng2-qgrid/core/scene/view/column.view';
import { SelectionModel } from 'ng2-qgrid/core/selection/selection.model';
import { Model } from 'ng2-qgrid/core/infrastructure/model';
import { ViewCoreService } from '../view/view-core.service';
import { TableCoreService } from '../table/table-core.service';
export declare class BodyCoreComponent extends NgComponent implements OnInit, OnDestroy {
    $view: ViewCoreService;
    $table: TableCoreService;
    private root;
    private element;
    private rangeStartCell;
    private scrollContext;
    constructor(element: ElementRef, $view: ViewCoreService, $table: TableCoreService, root: RootService);
    ngOnInit(): void;
    onScroll(): void;
    onClick(e: any): void;
    onMouseDown(e: any): void;
    onMouseMove(e: any): void;
    onMouseLeave(): void;
    onMouseUp(): void;
    select(cell: any): void;
    navigate(cell: any): void;
    readonly selection: SelectionModel;
    readonly model: Model;
    columnId(index: number, item: ColumnView): string;
    rowId(index: number): number;
}
