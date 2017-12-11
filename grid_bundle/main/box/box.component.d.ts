import { ElementRef, OnInit } from '@angular/core';
import { NgComponent } from 'ng2-qgrid/infrastructure/component/ng.component';
import { ThemeService } from 'ng2-qgrid/template/theme.service';
import { RootService } from 'ng2-qgrid/infrastructure/component/root.service';
export declare class BoxComponent extends NgComponent implements OnInit {
    private root;
    private theme;
    private boxModel;
    private element;
    constructor(root: RootService, element: ElementRef, theme: ThemeService);
    ngOnInit(): void;
    initTheme(): void;
    readonly model: any;
}
