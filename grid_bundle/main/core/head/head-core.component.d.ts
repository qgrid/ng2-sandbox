import { ViewCoreService } from '../view/view-core.service';
import { ColumnView } from '../../../grid_bundle/core/scene/view/column.view';
import { TableCoreService } from '../table/table-core.service';
export declare class HeadCoreComponent {
    $view: ViewCoreService;
    $table: TableCoreService;
    constructor($view: ViewCoreService, $table: TableCoreService);
    columnId(index: number, item: ColumnView): string;
    rowId(index: number): number;
}
