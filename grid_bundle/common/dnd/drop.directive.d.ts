import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
export declare class DropDirective implements OnInit, OnDestroy {
    private element;
    private listener;
    transfer: any;
    effect: any;
    canDrop: any;
    onDrop: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    drop(e: any): boolean;
    enter(e: any): boolean;
    over(e: any): boolean;
    leave(): void;
    event(e?: any): {
        source: any;
        target: any;
    };
}
