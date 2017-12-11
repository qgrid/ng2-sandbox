import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NgComponent } from './ng.component';
export declare class RootComponent extends NgComponent implements OnInit, OnChanges, OnDestroy {
    model: any;
    modelChanged: any;
    protected models: string[];
    private binder;
    private commit;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private setup();
}
