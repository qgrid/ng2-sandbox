import { AfterViewInit, ElementRef } from '@angular/core';
export declare class RaiseDirective implements AfterViewInit {
    private element;
    type: string;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
}
