import { OnInit, OnDestroy } from '@angular/core';
import { DisposableView } from 'ng2-qgrid/core/view/disposable.view';
export declare abstract class NgComponent extends DisposableView implements OnInit, OnDestroy {
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
}
