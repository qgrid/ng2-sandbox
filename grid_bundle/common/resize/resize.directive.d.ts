import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NgComponent, RootService } from '../../../grid_bundle//infrastructure/component';
import { Model } from '../../../grid_bundle/core/infrastructure/model';
export declare class ResizeDirective extends NgComponent implements OnInit, OnDestroy {
    private root;
    private document;
    private element;
    private divider;
    private listener;
    private context;
    key: any;
    path: any;
    canResize: any;
    transfer: any;
    constructor(root: RootService, elementRef: ElementRef, document: any);
    ngOnInit(): void;
    ngOnDestroy(): void;
    dragStart(e: any): void;
    drag(e: any): void;
    dragEnd(): void;
    event(): {
        source: any;
        target: any;
    };
    readonly model: Model;
}
