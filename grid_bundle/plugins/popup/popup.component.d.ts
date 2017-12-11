import { OnDestroy, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { RootService } from 'ng2-qgrid/infrastructure/component';
import { TemplateHostService } from 'ng2-qgrid/template';
import { PopupService } from './popup.service';
import { PluginComponent } from '../plugin.component';
import { PopupSettings } from './popup.settings';
import { Popup } from './popup';
export declare class PopupComponent extends PluginComponent implements OnInit, OnDestroy {
    private popupService;
    private templateHost;
    private resolver;
    private viewContainerRef;
    private popup;
    private factory;
    private $implicit;
    id: string;
    constructor(root: RootService, popupService: PopupService, templateHost: TemplateHostService, resolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, popup: Popup);
    ngOnInit(): void;
    ngOnDestroy(): void;
    open(settings: PopupSettings): void;
    close(): void;
    isOpened(): boolean;
}
