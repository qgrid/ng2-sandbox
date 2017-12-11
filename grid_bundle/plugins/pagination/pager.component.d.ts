import { PluginComponent } from '../plugin.component';
import { RootService } from 'ng2-qgrid/infrastructure/component/root.service';
export declare class PagerComponent extends PluginComponent {
    private paginationSize;
    private paginationSizeList;
    next: any;
    prev: any;
    constructor(root: RootService);
    size: any;
    readonly sizeList: any;
    current: any;
    readonly from: number;
    readonly to: number;
    readonly total: any;
    readonly totalPages: number;
    readonly scroll: any;
}
