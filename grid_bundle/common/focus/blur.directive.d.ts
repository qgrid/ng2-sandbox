import { OnInit, Renderer2, ElementRef } from '@angular/core';
export declare class BlurDirective implements OnInit {
    private renderer;
    private elementRef;
    onBlur: any;
    selector: string;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
}
