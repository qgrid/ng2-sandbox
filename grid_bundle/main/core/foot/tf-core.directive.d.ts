import { ElementRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ViewCoreService } from '../view/view-core.service';
import { RootService } from 'ng2-qgrid/infrastructure/component';
import { CellService } from '../cell/cell.service';
import { TableCoreService } from '../table/table-core.service';
import { ColumnView } from 'ng2-qgrid/core/scene/view/column.view';
import { TrCoreDirective } from '../row/tr-core.directive';
import { ColumnModel } from 'ng2-qgrid/core/column-type/column.model';
export declare class TfCoreDirective implements OnInit, OnDestroy {
    $view: ViewCoreService;
    private root;
    private cellService;
    private viewContainerRef;
    private table;
    private tr;
    columnView: ColumnView;
    element: HTMLElement;
    private $implicit;
    constructor($view: ViewCoreService, root: RootService, cellService: CellService, viewContainerRef: ViewContainerRef, table: TableCoreService, tr: TrCoreDirective, element: ElementRef);
    ngOnInit(): void;
    readonly value: any;
    readonly column: ColumnModel;
    readonly columnIndex: number;
    readonly row: any;
    readonly rowIndex: number;
    ngOnDestroy(): void;
}
