import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NgComponent } from './ng.component';
import { RootService } from './root.service';
import { Model } from 'ng2-qgrid/core/infrastructure/model';
export declare class ModelComponent extends NgComponent implements OnChanges, OnInit, OnDestroy {
    root: RootService;
    binder: any;
    commit: any;
    protected models: string[];
    constructor(root: RootService);
    setup(): any;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    readonly model: Model;
}
