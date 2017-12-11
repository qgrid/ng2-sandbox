import { ElementRef, DoCheck } from '@angular/core';
import { RootService } from 'ng2-qgrid/infrastructure/component';
import { Model } from 'ng2-qgrid/core/infrastructure/model';
import { Table } from 'ng2-qgrid/core/dom/table';
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
