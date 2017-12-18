import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { RootService } from '../../../grid_bundle/infrastructure/component';
export declare class DragDirective implements OnInit, OnDestroy {
    private root;
    private element;
    private listener;
    transfer: any;
    effect: any;
    canDrag: any;
    constructor(root: RootService, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    start(e: any): boolean;
    end(): void;
    event(): {
        source: any;
        target: any;
    };
}
