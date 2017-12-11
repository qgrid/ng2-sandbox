import { ElementRef, AfterViewInit } from '@angular/core';
import { RootService } from '../../infrastructure/component';
export declare class PositionDirective implements AfterViewInit {
    private root;
    target: string;
    private element;
    private opacity;
    constructor(element: ElementRef, root: RootService);
    ngAfterViewInit(): void;
    private layout(target, source);
    private intersection(a, b);
}
