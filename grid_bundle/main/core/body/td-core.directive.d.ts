import { ElementRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ViewCoreService } from '../view/view-core.service';
import { TableCoreService } from '../table/table-core.service';
import { RootService } from 'ng2-qgrid/infrastructure/component';
import { CellService } from 'ng2-qgrid/main/core/cell';
import { ColumnModel } from 'ng2-qgrid/core/column-type/column.model';
import { ColumnView } from 'ng2-qgrid/core/scene/view/column.view';
import { TrCoreDirective } from '../row/tr-core.directive';
export declare class TdCoreDirective implements OnInit, OnDestroy {
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
    mode(value: any): void;
    value: string;
    label: string;
    readonly column: ColumnModel;
    readonly columnIndex: number;
    readonly row: any;
    readonly rowIndex: number;
    ngOnDestroy(): void;
}
