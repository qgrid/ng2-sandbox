import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { PopupService } from 'ng2-qgrid/plugins/popup/popup.service';
import { Popup } from './popup';
export declare class PopupPanelComponent implements OnInit, OnDestroy {
    private popupService;
    element: ElementRef;
    popup: Popup;
    constructor(popupService: PopupService, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
