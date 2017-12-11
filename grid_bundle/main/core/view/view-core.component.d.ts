import { OnDestroy, OnInit, DoCheck } from '@angular/core';
import { NgComponent, RootService } from 'ng2-qgrid/infrastructure/component';
import { ViewCoreService } from './view-core.service';
import { GridService } from 'ng2-qgrid/main/grid';
import { Model } from 'ng2-qgrid/core/infrastructure/model';
import { VisibilityModel } from 'ng2-qgrid/core/visibility/visibility.model';
export declare class ViewCoreComponent extends NgComponent implements OnInit, OnDestroy, DoCheck {
    private root;
    private view;
    private gridService;
    constructor(root: RootService, view: ViewCoreService, gridService: GridService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    readonly model: Model;
    readonly visibility: VisibilityModel;
    ngDoCheck(): void;
}
