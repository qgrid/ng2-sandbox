import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NgComponent, RootService } from '../infrastructure/component';
export declare class PluginComponent extends NgComponent implements OnInit, OnChanges, OnDestroy {
    root: RootService;
    private gridModel;
    context: any;
    private binder;
    private commit;
    protected models: string[];
    constructor(root: RootService);
    setup(): any;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    readonly model: any;
}
