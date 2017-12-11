import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ViewCoreService } from '../view/view-core.service';
import { RootService } from 'ng2-qgrid/infrastructure/component';
export declare class TrCoreDirective implements OnInit, OnDestroy {
    $view: ViewCoreService;
    private root;
    private elementRef;
    index: number;
    model: any;
    private source;
    element: HTMLElement;
    constructor($view: ViewCoreService, root: RootService, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
