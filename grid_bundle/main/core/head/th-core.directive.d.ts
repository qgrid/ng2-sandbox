import { ElementRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { RootService } from 'ng2-qgrid/infrastructure/component';
import { ColumnModel } from 'ng2-qgrid/core/column-type/column.model';
import { ColumnView } from 'ng2-qgrid/core/scene/view/column.view';
import { TableCoreService } from '../table/table-core.service';
import { CellService } from '../cell/cell.service';
import { ViewCoreService } from '../view/view-core.service';
import { TrCoreDirective } from '../row/tr-core.directive';
export declare class ThCoreDirective implements OnInit, OnDestroy {
    $view: ViewCoreService;
    private root;
    private viewContainerRef;
    private cellService;
    private table;
    private tr;
    columnView: ColumnView;
    element: HTMLElement;
    private $implicit;
    constructor($view: ViewCoreService, root: RootService, viewContainerRef: ViewContainerRef, cellService: CellService, table: TableCoreService, tr: TrCoreDirective, element: ElementRef);
    ngOnInit(): void;
    readonly column: ColumnModel;
    readonly columnIndex: number;
    readonly row: any;
    readonly rowIndex: number;
    ngOnDestroy(): void;
}
