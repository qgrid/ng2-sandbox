import { ElementRef, AfterViewInit } from '@angular/core';
export declare class FocusDirective implements AfterViewInit {
    private elementRef;
    selector: any;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
}
