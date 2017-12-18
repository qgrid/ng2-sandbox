import { ElementRef, DoCheck } from '@angular/core';
import { RootService } from '../../../grid_bundle//infrastructure/component';
import { Model } from '../../../grid_bundle//core/infrastructure/model';
import { Table } from '../../../grid_bundle//core/dom/table';
export declare class AutoFocusDirective implements DoCheck {
    private root;
    private element;
    delay: number;
    private isHandled;
    constructor(root: RootService, element: ElementRef);
    ngDoCheck(): void;
    readonly markup: any;
    readonly model: Model;
    readonly table: Table;
}
