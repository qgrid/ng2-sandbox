import { ElementRef } from '@angular/core';
import { NgComponent } from '../../../grid_bundle/infrastructure/component';
import { Popup } from './popup';
export declare class PopupHeadDirective extends NgComponent {
    popup: Popup;
    private eventListener;
    private element;
    private position;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
