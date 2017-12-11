import { ViewCoreService } from '../view/view-core.service';
import { ColumnView } from 'ng2-qgrid/core/scene/view/column.view';
import { TableCoreService } from '../table/table-core.service';
export declare class FootCoreComponent {
    $view: ViewCoreService;
    $table: TableCoreService;
    constructor($view: ViewCoreService, $table: TableCoreService);
    columnId(index: number, item: ColumnView): string;
    rowId(index: number): number;
}
